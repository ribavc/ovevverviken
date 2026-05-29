import http from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 4173);
const MAX_BODY = 64 * 1024;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".otf": "font/otf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8"
};

let mongoClientPromise;

await loadEnv();

async function loadEnv() {
  try {
    const env = await fs.readFile(path.join(__dirname, ".env"), "utf8");
    for (const line of env.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const index = trimmed.indexOf("=");
      if (index === -1) continue;
      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // .env is optional in local development.
  }
}

function send(res, status, body, headers = {}) {
  const payload = typeof body === "string" ? body : JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": typeof body === "string" ? "text/plain; charset=utf-8" : "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...headers
  });
  res.end(payload);
}

function clean(value, max = 1200) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readJson(req) {
  let body = "";
  for await (const chunk of req) {
    body += chunk;
    if (body.length > MAX_BODY) throw new Error("Request body too large");
  }
  return JSON.parse(body || "{}");
}

async function getMongoCollection() {
  if (!process.env.MONGODB_URI) return null;
  const { MongoClient } = await import("mongodb");

  if (!mongoClientPromise) {
    const client = new MongoClient(process.env.MONGODB_URI, {
      appName: "ovreviken-website"
    });
    mongoClientPromise = client.connect();
  }

  const client = await mongoClientPromise;
  const db = client.db(process.env.MONGODB_DB || "ovreviken");
  return db.collection(process.env.MONGODB_COLLECTION || "contact_submissions");
}

async function saveSubmission(payload) {
  const collection = await getMongoCollection();

  if (collection) {
    const result = await collection.insertOne(payload);
    return { mode: "mongodb", id: String(result.insertedId) };
  }

  if (process.env.REQUIRE_MONGODB === "true") {
    const error = new Error("MongoDB is not configured");
    error.statusCode = 503;
    throw error;
  }

  await fs.mkdir(path.join(__dirname, "data"), { recursive: true });
  await fs.appendFile(path.join(__dirname, "data", "contact-submissions.jsonl"), `${JSON.stringify(payload)}\n`);
  return { mode: "local-dev", id: payload.id };
}

async function handleContact(req, res) {
  try {
    const data = await readJson(req);

    if (clean(data.company, 80)) {
      return send(res, 200, { ok: true });
    }

    const submission = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      name: clean(data.name, 160),
      email: clean(data.email, 240).toLowerCase(),
      phone: clean(data.phone, 80),
      date: clean(data.date, 40),
      message: clean(data.message, 2400),
      lang: clean(data.lang, 12),
      page: "ovreviken-luxury-website",
      userAgent: clean(req.headers["user-agent"], 400),
      ip: clean(req.headers["x-forwarded-for"] || req.socket.remoteAddress, 120)
    };

    if (!submission.name || !isEmail(submission.email) || !submission.message) {
      return send(res, 422, { ok: false, error: "Invalid contact submission" });
    }

    const saved = await saveSubmission(submission);
    return send(res, 200, { ok: true, saved });
  } catch (error) {
    const status = error.statusCode || 500;
    return send(res, status, { ok: false, error: status === 500 ? "Contact submission failed" : error.message });
  }
}

function safePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.normalize(cleanPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = normalized === "/" || normalized === "\\" || cleanPath === "/" ? "index.html" : normalized.replace(/^[/\\]/, "");
  const base = /^(media|source-menu)[/\\]/.test(filePath) ? path.join(__dirname, "public") : __dirname;
  const absolute = path.join(base, filePath);
  if (!absolute.startsWith(base)) return null;
  return absolute;
}

async function serveStatic(req, res) {
  const absolute = safePath(req.url || "/");
  if (!absolute) return send(res, 403, "Forbidden");

  try {
    const stat = await fs.stat(absolute);
    if (stat.isDirectory()) return send(res, 404, "Not found");

    const ext = path.extname(absolute).toLowerCase();
    const content = await fs.readFile(absolute);
    const isAsset = /\.(?:css|js|jpg|jpeg|png|webp|svg|ico)$/.test(ext);
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": isAsset ? "public, max-age=3600" : "no-store"
    });
    res.end(content);
  } catch {
    send(res, 404, "Not found");
  }
}

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/health") {
    return send(res, 200, { ok: true });
  }

  if (req.url === "/api/media" && req.method === "GET") {
    try {
      const files = await fs.readdir(path.join(__dirname, "public", "media"));
      return send(res, 200, {
        ok: true,
        files: files.filter((file) => /\.(?:jpg|jpeg|png|webp)$/i.test(file))
      });
    } catch {
      return send(res, 200, { ok: true, files: [] });
    }
  }

  if (req.url === "/api/contact" && req.method === "POST") {
    return handleContact(req, res);
  }

  if (req.url?.startsWith("/api/")) {
    return send(res, 404, { ok: false, error: "Unknown API route" });
  }

  return serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Øvreviken website running at http://localhost:${PORT}`);
});

const I18N = {
  no: {
    "nav.about": "Om oss",
    "nav.menu": "Meny",
    "nav.gallery": "Galleri",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Øystese, Norway",
    "hero.tagline": "Handverksmat ved Hardangerfjorden",
    "hero.cta": "Se meny",
    "hero.call": "Ring oss",
    "hero.metaOne": "",
    "hero.metaTwo": "Fjordutsikt",
    "hero.metaThree": "Alle rettigheiter",
    "about.eyebrow": "Ved kaien i Øystese",
    "about.title": "Handverk, varme og fjordro",
    "about.copy":
      "Øvreviken Pizzeria, ein pizzarestaurant som ligg ved kaien, tett inntil den familievennlege stranda midt i hjarta av Øystese. Med si fengslande plassering og avslappa atmosfære er dette ein stad der du kan skjemma bort smakslaukane dine. Her kan du velja frå eit rikhaldig utval av pizza, frå dei tidlause favorittane til dei lokalt inspirerte meisterverka. Pizzaen vert laga med friske og fyrsteklasses ingrediensar, og kvar pizza er steikt i ein varm elektrisk ovn for å tryggja den ultimate sprø skorpa. Øvreviken serverer også, salatar og burgerar - inkludert smakfull steikeostburger, kyllingburger og saftige kjøttburger. Her er det òg mogleg å nyta ein variasjon av deilige tapasrettar. Restauranten har alle rettigheiter. På ein dag med strålande sol kan du sitja ute og la deg fortrylla av den storslagne utsikta over Hardangerfjorden, med Folgefonna majestetisk på den andre sida. Velkomen til ein gastronomisk oppleving i vakre omgivnader!",
    "menu.eyebrow": "",
    "menu.title": "Meny",
    "menu.copy": "",
    "gallery.eyebrow": "",
    "gallery.title": "",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Besøk oss ved fjorden",
    "contact.addressLabel": "Adresse",
    "contact.phoneLabel": "Telefon",
    "contact.mailLabel": "E-post",
    "contact.hoursTitle": "Opningstider",
    "contact.callEyebrow": "Ring oss direkte",
    "contact.callTitle": "Vil du bestille eller spørje oss om noko?",
    "legal.privacyTitle": "Personvern",
    "legal.privacyCopy": "Vi samlar ikkje inn personopplysningar på denne statiske nettsida. Dersom du ringer, sender e-post eller kontaktar oss via sosiale medium, vert opplysningane dine berre brukte til å svare på førespurnaden.",
    "legal.cookiesTitle": "Informasjonskapslar",
    "legal.cookiesCopy": "Denne sida set ikkje eigne sporingskapslar. Innebygd kart og eksterne lenkjer kan ha eigne vilkår når du opnar dei.",
    "form.name": "Namn",
    "form.email": "E-post",
    "form.phone": "Telefon",
    "form.date": "Dato",
    "form.message": "Melding",
    "form.submit": "Send førespurnad",
    "form.sending": "Sender...",
    "form.success": "Takk. Førespurnaden er sendt.",
    "form.error": "Noko gjekk gale. Prøv igjen, eller ring oss direkte.",
    "form.invalid": "Fyll inn namn, e-post og melding.",
    "footer.line": "Hardangerfjordvegen 651 · 5610 Øystese"
  },
  en: {
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "hero.eyebrow": "Øystese, Norway",
    "hero.tagline": "Artisanal Dining by the Hardangerfjord",
    "hero.cta": "View Menu",
    "hero.call": "Call us",
    "hero.metaOne": "",
    "hero.metaTwo": "Fjord view",
    "hero.metaThree": "Fully licensed",
    "about.eyebrow": "Harbor-side in Øystese",
    "about.title": "Craft, warmth and fjord calm",
    "about.copy":
      "Øvreviken Pizzeria is a harbor-side restaurant located right by the family-friendly beach in the heart of Øystese. With its captivating location and relaxed atmosphere, it is the perfect place to indulge your taste buds. Choose from a rich selection of pizzas, ranging from timeless classics to locally inspired masterpieces. Crafted with fresh, premium ingredients, each pizza is baked in a hot electric oven to guarantee the ultimate crispy crust. Øvreviken also serves fresh salads and premium burgers—including a flavorful fried cheese burger, chicken burger, and juicy beef burgers. A delicious variety of tapas dishes is also available. The restaurant is fully licensed. On a sunny day, you can dine outside and be enchanted by the magnificent view of the Hardangerfjord, with the majestic Folgefonna glacier right on the other side. Welcome to a gastronomic experience in beautiful surroundings!",
    "menu.eyebrow": "",
    "menu.title": "Menu",
    "menu.copy": "",
    "gallery.eyebrow": "",
    "gallery.title": "",
    "contact.eyebrow": "Contact",
    "contact.title": "Visit us by the fjord",
    "contact.addressLabel": "Address",
    "contact.phoneLabel": "Phone",
    "contact.mailLabel": "Mail",
    "contact.hoursTitle": "Opening hours",
    "contact.callEyebrow": "Call us directly",
    "contact.callTitle": "Would you like to order or ask us something?",
    "legal.privacyTitle": "Privacy Policy",
    "legal.privacyCopy": "This static website does not collect personal data. If you call, email, or contact us through social media, your details are used only to respond to your request.",
    "legal.cookiesTitle": "Cookie Policy",
    "legal.cookiesCopy": "This page does not set first-party tracking cookies. Embedded maps and external links may have their own terms when opened.",
    "form.name": "Name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.date": "Date",
    "form.message": "Message",
    "form.submit": "Send request",
    "form.sending": "Sending...",
    "form.success": "Thank you. Your request has been sent.",
    "form.error": "Something went wrong. Please try again or call us directly.",
    "form.invalid": "Please add name, email and message.",
    "footer.line": "Hardangerfjordvegen 651 · 5610 Øystese"
  }
};

const GALLERY = [
  { src: "./media/gallery-1.jpg", no: "Kaien", en: "The quay" },
  { src: "./media/gallery-2.jpg", no: "Burger ved fjorden", en: "Burger by the fjord" },
  { src: "./media/gallery-3.png", no: "Tapas og råvarer", en: "Tapas and produce" }
];

let currentLang = localStorage.getItem("ovreviken-lang") || "no";
let activeMenuId = "pizzas";

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);

function t(key) {
  return I18N[currentLang][key] || I18N.no[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("ovreviken-lang", lang);
  document.documentElement.lang = lang === "no" ? "nn" : "en";
  document.title = lang === "no" ? "Øvreviken | Handverksmat ved Hardangerfjorden" : "Øvreviken | Artisanal Dining by the Hardangerfjord";

  qsa("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  qsa(".lang-switch button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  renderMenu();
  renderGallery();
  initRevealAnimations();
}

function splitTitle() {
  qsa(".split-title").forEach((title) => {
    const text = title.textContent.trim();
    title.innerHTML = [...text]
      .map((letter, index) => `<span style="--i:${index}">${letter === " " ? "&nbsp;" : escapeHtml(letter)}</span>`)
      .join("");
  });
}

function initPreloader() {
  window.addEventListener("load", () => {
    window.setTimeout(() => {
      qs("#preloader")?.classList.add("is-hidden");
      document.body.classList.add("is-ready");
    }, 520);
  });
}

function loadPhoto(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

async function hydratePhotoSlots() {
  for (const element of qsa(".js-photo")) {
    const url = element.dataset.photo;
    if (!url) continue;
    if (await loadPhoto(url)) {
      element.classList.add("has-photo");
      element.style.setProperty("--photo", `url("${url}")`);
    }
  }
}

function initRevealAnimations() {
  const targets = qsa(".section-heading, .about__copy, .menu-shell, .gallery-card, .contact-item, .call-panel, .map-frame, .legal-section article");
  targets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 260)}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((element) => observer.observe(element));
}

function renderTabs() {
  const container = qs("#menu-tabs");
  const categories = window.OVREVIKEN_MENU.categories;
  container.innerHTML = categories
    .map(
      (category) => `
        <button
          class="menu-tab magnetic ${category.id === activeMenuId ? "is-active" : ""}"
          type="button"
          role="tab"
          aria-selected="${category.id === activeMenuId}"
          data-menu-id="${category.id}"
        >
          <span>${escapeHtml(category.nav[currentLang])}</span>
        </button>
      `
    )
    .join("");

  qsa(".menu-tab", container).forEach((button) => {
    button.addEventListener("click", () => {
      activeMenuId = button.dataset.menuId;
      renderMenu();
      window.triggerLiquid?.();
    });
  });
}

function renderAllergens(item) {
  if (!item.allergens?.length) return "";
  return `
    <div class="allergens" aria-label="Allergens">
      ${item.allergens.map((id) => `<span>${escapeHtml(id)}</span>`).join("")}
    </div>
  `;
}

function renderExtras(item) {
  const extras = item.extras || [];
  const notes = item.notes || [];
  if (!extras.length && !notes.length) return "";
  return `
    <div class="menu-extras">
      ${notes.map((note) => `<p>${escapeHtml(note)}</p>`).join("")}
      ${extras
        .map((extra) => `<p><strong>${escapeHtml(extra.name)}</strong>${extra.price ? ` <span>${escapeHtml(extra.price)}</span>` : ""}</p>`)
        .join("")}
    </div>
  `;
}

function renderPrice(item) {
  if (item.prices) {
    return `<div class="price-stack">${item.prices.map((price) => `<span>${escapeHtml(price)}</span>`).join("")}</div>`;
  }

  const unit = item.unit ? `<small>${escapeHtml(item.unit)}</small>` : "";
  return item.price ? `<span class="price">${unit}${escapeHtml(item.price)}</span>` : "";
}

function renderMenuItem(item) {
  return `
    <article class="menu-item">
      <header>
        <h4>${escapeHtml(item.name)}</h4>
        ${renderPrice(item)}
      </header>
      ${item.lines ? item.lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("") : item.description ? `<p>${escapeHtml(item.description)}</p>` : ""}
      ${renderExtras(item)}
      ${renderAllergens(item)}
    </article>
  `;
}

function renderGroup(group, isPizza = false) {
  const columns = isPizza && group.columns?.length ? `<div class="menu-columns">${group.columns.map((col) => `<span>${escapeHtml(col)}</span>`).join("")}</div>` : "";
  const extras = group.extras?.length
    ? `<div class="group-extras">${group.extras.map((extra) => `<p>${escapeHtml(extra.name)} <span>${escapeHtml(extra.price)}</span></p>`).join("")}</div>`
    : "";
  const notes = group.notes?.length ? `<div class="group-notes">${group.notes.map((note) => `<p>${escapeHtml(note)}</p>`).join("")}</div>` : "";

  return `
    <section class="menu-group">
      <header class="menu-group__header">
        <h3>${escapeHtml(group.title)}</h3>
        ${columns}
      </header>
      <div class="menu-group__items">
        ${group.items.map(renderMenuItem).join("")}
      </div>
      ${notes}
      ${extras}
    </section>
  `;
}

function renderLegend() {
  const { allergens } = window.OVREVIKEN_MENU;
  return `
    <aside class="allergen-legend">
      <strong>Allergen:</strong>
      ${allergens.map((entry) => `<span>${entry.id}. ${escapeHtml(entry.name)}</span>`).join("")}
    </aside>
  `;
}

function renderMenu() {
  renderTabs();
  const panel = qs("#menu-panel");
  const category = window.OVREVIKEN_MENU.categories.find((entry) => entry.id === activeMenuId) || window.OVREVIKEN_MENU.categories[0];
  const isPizza = category.type === "pizza";

  panel.classList.remove("is-swapping");
  requestAnimationFrame(() => panel.classList.add("is-swapping"));

  panel.innerHTML = `
    <div class="menu-panel__intro">
      <p class="eyebrow">${escapeHtml(category.eyebrow[currentLang])}</p>
      <h3>${escapeHtml(category.nav[currentLang])}</h3>
      <p>${escapeHtml(category.intro[currentLang])}</p>
    </div>
    <div class="menu-groups ${isPizza ? "menu-groups--pizza" : ""}">
      ${category.groups.map((group) => renderGroup(group, isPizza)).join("")}
    </div>
    ${renderLegend()}
  `;
}

function renderGallery() {
  const grid = qs("#gallery-grid");
  grid.innerHTML = GALLERY.map(
    (item, index) => `
      <button class="gallery-card magnetic js-gallery-card" type="button" aria-label="${escapeHtml(item[currentLang])}" data-src="${item.src}" data-caption="${escapeHtml(item[currentLang])}" style="--span:${index % 3 === 0 ? 2 : 1}"></button>
    `
  ).join("");

  qsa(".js-gallery-card").forEach(async (card) => {
    const src = card.dataset.src;
    if (await loadPhoto(src)) {
      card.classList.add("has-photo");
      card.style.setProperty("--photo", `url("${src}")`);
    }

    card.addEventListener("click", () => {
      if (!card.classList.contains("has-photo")) return;
      openLightbox(src, card.dataset.caption);
    });
  });
}

function openLightbox(src, caption) {
  const dialog = qs("#lightbox");
  qs("#lightbox-img").src = src;
  qs("#lightbox-img").alt = caption;
  qs("#lightbox-caption").textContent = caption;
  dialog.showModal();
}

function initLightbox() {
  const dialog = qs("#lightbox");
  qs(".lightbox__close")?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

function initCursor() {
  if (!matchMedia("(pointer: fine)").matches) return;
  const dot = qs(".cursor-dot");
  const glow = qs(".cursor-glow");
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let gx = x;
  let gy = y;

  window.addEventListener("pointermove", (event) => {
    x = event.clientX;
    y = event.clientY;
    dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  });

  function frame() {
    gx += (x - gx) * 0.16;
    gy += (y - gy) * 0.16;
    glow.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(frame);
  }
  frame();

  document.addEventListener("pointerover", (event) => {
    if (event.target.closest(".magnetic")) document.body.classList.add("is-magnetic");
  });
  document.addEventListener("pointerout", (event) => {
    if (event.target.closest(".magnetic")) document.body.classList.remove("is-magnetic");
  });
}

function initMagnetism() {
  qsa(".magnetic").forEach((element) => {
    element.style.transform = "";
  });
}

function initScrollEffects() {
  const hero = qs(".hero");
  const header = qs("#site-header");
  const parallax = qsa(".parallax");
  const sections = qsa(".focus-section");
  const progress = qs("#scroll-progress");

  function update() {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const heroProgress = clamp(y / Math.max(360, vh * 0.5), 0, 1);
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
    progress?.style.setProperty("--progress", `${clamp(y / maxScroll, 0, 1)}`);
    const startPad = window.innerWidth <= 620 ? 10 : 24;
    hero.style.setProperty("--hero-pad", `${startPad - heroProgress * startPad}px`);
    hero.style.setProperty("--hero-radius", `${8 - heroProgress * 8}px`);
    hero.style.setProperty("--hero-scale", `${0.965 + heroProgress * 0.035}`);
    header.classList.toggle("is-scrolled", y > 20);

    parallax.forEach((element) => {
      const speed = Number(element.dataset.speed || 0);
      const rect = element.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - vh / 2) * speed;
      element.style.setProperty("--parallax-y", `${offset}px`);
    });

    sections.forEach((section) => {
      section.style.setProperty("--section-blur", "0px");
    });
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initSmoothAnchors() {
  qsa('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = qs(anchor.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initLiquidCanvas() {
  const canvas = qs("#liquid-canvas");
  const gl = canvas?.getContext("webgl", { alpha: true, antialias: true });
  if (!gl) return;

  const vertexSource = `
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
      vUv = aPosition * 0.5 + 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;
  const fragmentSource = `
    precision highp float;
    varying vec2 vUv;
    uniform float uTime;
    uniform float uIntensity;
    void main() {
      vec2 uv = vUv;
      float waveA = sin((uv.x + uv.y * 0.72) * 18.0 + uTime * 0.85);
      float waveB = sin((uv.x - uv.y * 1.2) * 28.0 - uTime * 1.15);
      float ribbon = smoothstep(0.982, 1.0, abs(waveA * 0.68 + waveB * 0.32));
      float veil = smoothstep(0.0, 0.72, uv.y) * smoothstep(1.0, 0.34, uv.y);
      vec3 gold = vec3(0.831, 0.686, 0.216);
      vec3 fjord = vec3(0.055, 0.095, 0.095);
      vec3 color = mix(fjord, gold, ribbon * (0.35 + uIntensity * 0.45));
      float alpha = ribbon * (0.006 + uIntensity * 0.04) + veil * 0.012;
      gl_FragColor = vec4(color, alpha);
    }
  `;

  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }

  const program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource));
  gl.linkProgram(program);
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

  const position = gl.getAttribLocation(program, "aPosition");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const timeUniform = gl.getUniformLocation(program, "uTime");
  const intensityUniform = gl.getUniformLocation(program, "uIntensity");
  let intensity = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  window.triggerLiquid = () => {
    intensity = 1;
  };

  function draw(time) {
    intensity *= 0.94;
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(timeUniform, time * 0.001);
    gl.uniform1f(intensityUniform, intensity);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(draw);
}

function initLanguageSwitch() {
  qsa(".lang-switch button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

splitTitle();
initPreloader();
initCursor();
initMagnetism();
initScrollEffects();
initSmoothAnchors();
initLiquidCanvas();
initLanguageSwitch();
initLightbox();
hydratePhotoSlots();
setLanguage(currentLang);

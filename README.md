# Øvreviken Website

Bilingual static website for Øvreviken Pizzeria in Øystese, Norway.

## Deploy

This project is now configured as a static site. You can deploy the repository directly to:

- GitHub Pages
- Netlify
- Vercel

Use the repository root as the publish/output directory. No build command is required.

## Local Preview

Open `index.html` directly in a browser, or run the small local preview server:

```bash
node server.mjs
```

Then open `http://localhost:4173`.

## Files

- `index.html` - page structure
- `styles.css` - design, layout, local e-Ukraine font setup
- `app.js` - language switcher, menu rendering, gallery, animations
- `menu-data.js` - structured restaurant menu
- `media/` - site photos used by the deployed static site
- `fonts/` - local e-Ukraine fonts used by the deployed static site
- `public/` - duplicate assets kept for platforms that expect a public folder
- `netlify.toml` and `vercel.json` - static deploy hints

## Notes

The site does not require a backend. The reservation/contact form was removed and replaced with a direct phone call button: `+47 47 96 09 02`.

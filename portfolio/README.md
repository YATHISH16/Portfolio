# Yathish M S — Portfolio

Built with React + Vite + Tailwind CSS, on the design token system in `DESIGN-revolut.md`.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # serve the production build locally
```

## Before you ship it

Two things were intentionally left as placeholders rather than fabricated, and both are marked `TODO` in the code:

1. **Social links** — `src/Hero.jsx` and `src/Footer.jsx` currently point LinkedIn/GitHub at placeholder URLs. Replace with your real profile links.
2. **Aeonik Pro font files** — `src/index.css` declares `@font-face` rules pointing at `/public/fonts/AeonikPro-Medium.woff2`, but no font files are included (Aeonik Pro is a licensed commercial face, not freely redistributable). Drop your licensed `.woff2` file(s) into `public/fonts/` with matching filenames, or update the `src` paths in `src/index.css`. Until then, headings will fall back to the system sans-serif.

Inter is open-source — if you'd rather not self-host it, you can swap the `@font-face` blocks for a Google Fonts `<link>` in `index.html` instead.

## Project structure

```
├── index.html
├── tailwind.config.js      # design.md tokens (colors, type scale, spacing, radii)
├── src/
│   ├── main.jsx             # React entry point
│   ├── index.css            # Tailwind directives + font-face + base resets
│   ├── App.jsx               # assembles all sections in order
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   └── Footer.jsx
└── public/
    └── fonts/                # put licensed Aeonik Pro .woff2 files here
```

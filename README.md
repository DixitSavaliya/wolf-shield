# WOLF SHIELD – Construction Chemicals

**Seal It Shield It.** A React landing page for WOLF SHIELD construction chemicals brand.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- CSS with custom properties (no UI framework; responsive and accessible)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview production build
```

## Adding your images

Place assets in **`public/images/`**:

- **`hero-collage.jpg`** – Hero section (e.g. product brochure collage). If missing, a gradient placeholder with text is shown.
- **`about-logo.png`** – Optional logo in the About Us header. If missing, the badge still shows.

You can add more images and reference them as `/images/your-file.jpg` in components.

## Project structure

```
src/
├── components/     # Reusable UI (Logo, Header)
├── sections/       # Landing sections (Hero, About, VisionMission, ProductRange, Certifications, Footer)
├── App.tsx
├── main.tsx
└── index.css       # Global design tokens and base styles
```

## Features

- Responsive layout (mobile-first)
- Smooth scroll navigation
- Accessible (ARIA, semantic HTML, focus styles)
- Brand colors and typography (Libre Baskerville, DM Sans)
- CE & ISO 9001:2015 certifications section
- Product range list and Vision/Mission copy from your content

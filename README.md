# Swaraj Wattamwar · Portfolio

Personal playground for motion-heavy UI experiments, case studies, and contact funnels. Built with Vite + React, animated micro-interactions, and a sprinkling of GLSL-inspired visuals via shaders and particles.

## Highlights

- Hero section with interactive astronaut model, dynamic orbiting circles, and staggered typography
- Timeline + projects fed by structured data in `src/constants` for quick content edits
- Copy-to-clipboard email CTA, custom alerts, and parallax layers to keep the page lively
- Tailwind-driven design system and reusable cards to keep components lean
- Fully responsive layout tuned for both trackpads and touch devices

## Stack

- React 18 with Vite for fast dev cycles
- Tailwind CSS + custom CSS modules for layout and theming
- Framer Motion, Three.js helpers, and bespoke canvas effects for motion
- ESLint (flat config) to keep code style consistent

## Getting Started

```bash
# install deps
npm install

# run locally (http://localhost:5173)
npm run dev

# production build + preview
npm run build
npm run preview
```

## Project Structure

```
src/
	sections/         # Page sections (Hero, Projects, About, etc.)
	components/       # Reusable UI + motion widgets
	constants/        # Copy, project metadata, timelines
	index.css         # Tailwind base layers and global styles
public/assets       # Logos, project shots, social icons
```

## Customization Cheatsheet

- Content edits → tweak JSON-like exports inside `src/constants/index.js`
- Project cards → update assets in `public/assets/projects` and map entries in constants
- Colors + typography → adjust Tailwind tokens in `tailwind.config.js` and `src/index.css`
- Add new sections → create a component in `src/sections`, register it inside `App.jsx`

## Deployment

Deployed via any static host (Vercel, Netlify, Cloudflare). Run `npm run build` and serve the `dist/` directory.

---

Questions, ideas, or opportunities? Reach out via the email button in the Contact section.

# Tech To Empower

Static marketing site for **Tech To Empower (TTE)** — a 501(c)(3) nonprofit bringing
FIRST robotics and STEM programs to underserved communities worldwide.

Built from scratch with **Astro** (static output), **vanilla JS**, **Three.js** (CDN) for
the interactive globe, and plain CSS with custom properties. No React, no Tailwind, no UI
libraries.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # preview the production build
```

## Deploy

Targets **Vercel**. Output is fully static (`output: 'static'`) — Vercel auto-detects Astro,
runs `astro build`, and serves `dist/`. No adapter or extra config required.

## Tech notes

- **Design tokens** live in `src/styles/global.css` (palette, type scale, spacing, motion).
- **Fonts:** Fraunces (display) + DM Sans (body), loaded via Google Fonts in `Layout.astro`.
- **Globe:** `src/components/Globe.astro` loads Three.js r128 from cdnjs. The sphere +
  graticule render in WebGL; the seven location dots are HTML overlays projected onto the
  globe each frame (so the glow/pulse and labels stay crisp). Drag to spin, click a dot to
  zoom + open its info card.
- **Initiative pages** share `src/layouts/InitiativeLayout.astro` and pull copy from
  `src/data/initiatives.js`.
- **Donate link:** the "Donate via Square" button in `src/pages/donate.astro` is a
  placeholder (`href="#"`). Search for the `TODO` comment and drop in the live Square link.

## Pages

| Route | File |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/donate` | `src/pages/donate.astro` |
| `/team` | `src/pages/team.astro` |
| `/mission` | `src/pages/mission.astro` |
| `/privacy` | `src/pages/privacy.astro` |
| `/terms` | `src/pages/terms.astro` |
| `/work/help_in_india` | `src/pages/work/help_in_india.astro` |
| `/work/neurodiversity_in_first` | `src/pages/work/neurodiversity_in_first.astro` |
| `/work/diwali_fundraising` | `src/pages/work/diwali_fundraising.astro` |
| `/work/makerspaces_in_jamaica` | `src/pages/work/makerspaces_in_jamaica.astro` |
| `/work/nexus` | `src/pages/work/nexus.astro` |

---

## Images — add these manually

All images go in **`public/assets/images/`** and are referenced as `/assets/images/<file>`.
Use the exact filenames below so the code wires up correctly. JPGs recommended; ship them no
larger than they render (heroes ~1920px wide, cards ~800–1000px, officer portraits ~square).

### Homepage hero slideshow (6, crossfades every 4.5s)
- `hero-1.jpg` — FMHS hall, kids around a robot
- `hero-2.jpg` — India classroom, girls in uniforms
- `hero-3.jpg` — FIRST Access, student in a wheelchair driving a robot
- `hero-4.jpg` — outdoor market, community
- `hero-5.jpg` — team group photo with trophies
- `hero-6.jpg` — summer camp floor session

### Officer portraits (square)
- `officer-sahas.jpg` — Sahas Kumaraguru, President
- `officer-aidan.jpg` — Aidan Yacoob, Vice President
- `officer-abhinav.jpg` — Abhinav Alwarappan, Head of Technological Management

### Bento initiative cards (homepage)
- `card-india.jpg` — India / STEM in India
- `card-neuro.jpg` — FIRST Access, wheelchair student
- `card-cultural.jpg` — team group, trophies
- `card-jamaica.jpg` — Jamaica makerspaces
- `card-nexus.jpg` — NEXUS

### India page (`/work/help_in_india`)
- `india-hero.jpg`
- `india-1.jpg` … `india-6.jpg` (gallery)

### Neurodiversity page (`/work/neurodiversity_in_first`)
- `neuro-hero.jpg`
- `neuro-1.jpg` … `neuro-4.jpg` (gallery)

### Cultural Fundraising page (`/work/diwali_fundraising`)
- `cultural-hero.jpg`
- `cultural-1.jpg` … `cultural-6.jpg` (gallery)

### Makerspaces in Jamaica page (`/work/makerspaces_in_jamaica`)
- `jamaica-hero.jpg`
- `jamaica-1.jpg` … `jamaica-3.jpg` (gallery)

### NEXUS page (`/work/nexus`)
- `nexus-hero.jpg` — use the NEXUS flyer image for now (gallery shows "Photos coming soon")

## Brand

- **Colors:** navy `#0a1628`, navy-mid `#1a3a6b`, sky `#38bdf8`, white `#ffffff`,
  surface `#f0f7ff`, muted `#64748b`, border `#e2e8f0`. **No orange anywhere.**
- **Instagram:** [@tech_to_empower](https://instagram.com/tech_to_empower)
- 501(c)(3) · Est. 2023

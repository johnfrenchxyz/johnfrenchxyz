# John French — Portfolio Site

A static portfolio site built with [Eleventy (11ty)](https://www.11ty.dev/), designed for deployment on [Netlify](https://netlify.com). Editorial design aesthetic: ink-on-paper, broadsheet grid, Playfair Display typography.

---

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node)

### 1. Install dependencies
```bash
cd johnfrench-portfolio
npm install
```

### 2. Start local development server
```bash
npm start
```

Visit [http://localhost:8080](http://localhost:8080). The site hot-reloads on CSS/JS/template changes.

### 3. Build for production
```bash
npm run build
```

Output goes to `_site/`. This is what Netlify deploys.

---

## Design System Reference

All design tokens are CSS custom properties in `src/css/main.css`:

| Token | Value | Use |
|-------|-------|-----|
| `--ink` | `#1a1714` | Primary text, backgrounds |
| `--paper` | `#f5f2ec` | Page background |
| `--accent` | `#c8401a` | Links, highlights, editorial red |
| `--ff-display` | Playfair Display | Headlines, pull quotes |
| `--ff-body` | DM Sans | Body copy, UI text |
| `--ff-mono` | DM Mono | Labels, metadata, eyebrows |

### Key classes
- `.btn.btn--primary` / `.btn--outline` / `.btn--ghost` — buttons
- `.reveal` — adds scroll-triggered fade-up animation (auto-initialized)
- `.animate-up.delay-{1-5}` — page-load staggered animations
- `.label` / `.rule-label` — monospaced section labels
- `.tag` — small metadata chips

---

## Tech Stack

- **[Eleventy 3.x](https://www.11ty.dev/)** — Static site generator
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** — Templating language
- **[Netlify](https://netlify.com)** — Hosting + forms
- **Vanilla CSS** — No framework, full custom design system
- **Vanilla JS** — No framework, ~80 lines for all interactivity
- **[Google Fonts](https://fonts.google.com/)** — Playfair Display, DM Sans, DM Mono

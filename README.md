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

## Project Structure

```
johnfrench-portfolio/
├── src/
│   ├── _data/
│   │   └── site.json          # Global site config (name, email, LinkedIn, etc.)
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk       # Main HTML shell (nav, footer, fonts)
│   │   │   └── case-study.njk # Case study layout (hero, meta sidebar, password gate)
│   │   └── components/        # (reserved for future partials)
│   ├── css/
│   │   └── main.css           # Full design system — tokens, components, layouts
│   ├── js/
│   │   └── main.js            # Nav toggle, scroll reveal, password gate logic
│   ├── work/
│   │   ├── index.njk          # Work index page
│   │   ├── va-healthcare-api.md
│   │   ├── cms-enterprise-platform.md
│   │   ├── library-of-congress.md
│   │   └── confidential.md    # Password-protected case study
│   ├── images/                # Local images (add your own here)
│   ├── index.njk              # Homepage
│   ├── about.njk              # About page
│   ├── contact.njk            # Contact page (with Netlify Forms)
│   └── 404.njk                # 404 page
├── .eleventy.js               # Eleventy config
├── netlify.toml               # Netlify build + headers config
├── package.json
└── README.md
```

---

## Adding a Case Study

Create a new Markdown file in `src/work/`:

```markdown
---
layout: case-study.njk
title: Your Project Title
client: Client Name
role: Your Role
year: "2023–2024"
team: Team description
outcome: Key metric or result
summary: 1–2 sentence description for the hero.
heroImage: /images/your-project-hero.jpg
toc:
  - id: overview
    label: Overview
  - id: process
    label: Process
  - id: results
    label: Results
---

## Overview {#overview}

Your content here...
```

The filename becomes the URL: `va-redesign.md` → `/work/va-redesign/`

---

## Password-Protecting a Case Study

The password gate is JavaScript-based — the content is in the HTML but hidden until the correct password is entered. This is appropriate for portfolio gating (not sensitive data storage).

### Setup

1. Choose your password (e.g. `portfolio2025`)
2. Generate its hash by opening your browser console and running:

```javascript
function simpleHash(str) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = (hash * 0x01000193) >>> 0;
  }
  return hash.toString(16);
}
simpleHash("your-password-here");
```

3. Copy the resulting hash into your case study's front matter:

```yaml
protected: true
passwordHash: "abc12345"   # paste hash here
```

### Changing the password
Just update `passwordHash` in the front matter and rebuild. Visitors who had the old password cached in their session will need to re-enter.

### A note on security
This gate prevents casual browsing and respects the spirit of NDAs — it is NOT cryptographically secure. For truly sensitive work, use Netlify's built-in site password (Pro) or a backend auth solution.

---

## Updating Site Content

### Global info (name, email, LinkedIn)
Edit `src/_data/site.json`.

### Resume PDF
Drop your PDF in `src/public/` named `John-French-Product-Design-and-UX-Lead.pdf`, or update the `resumeUrl` in `site.json` to point elsewhere.

### Homepage images
The homepage currently uses Squarespace CDN images pulled from your existing site. To use local images:
1. Add images to `src/images/`
2. Update the `src` attributes in `src/index.njk`

### Testimonials
Edit the testimonial blocks directly in `src/index.njk`.

---

## Deployment on Netlify

### First deploy
1. Push this repo to GitHub (or GitLab / Bitbucket)
2. Log into [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repo
4. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `_site`
5. Click **Deploy site**

### Custom domain
In Netlify: **Domain settings** → **Add custom domain** → follow DNS instructions.

### Contact form
The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/) — it works automatically on Netlify with zero backend code. Form submissions appear in your Netlify dashboard under **Forms**. You can set up email notifications there too.

To test locally, you'll need to submit via the deployed Netlify URL (forms don't work on `localhost`).

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

## Local Image Setup

When you're ready to move off Squarespace CDN images:

```bash
# Download your portrait (one-time)
curl -o src/images/john-french-portrait.jpg \
  "https://images.squarespace-cdn.com/content/v1/687e4f12182422571f0d4f56/7a8eda35-6f4d-4f37-81cd-3c7ac2841474/John%27s+Portrait"
```

Then update `src/index.njk` and `src/about.njk` to use `/images/john-french-portrait.jpg`.

---

## Recommended Next Steps

1. **Add your real resume PDF** to `src/public/`
2. **Download images locally** from Squarespace before cancelling that subscription
3. **Write your real case studies** — the existing ones have placeholder content structured to guide you
4. **Set real passwords** on protected case studies (see password section above)
5. **Set up Netlify** and connect your domain before cancelling Squarespace
6. **Add Google Analytics or Plausible** (privacy-friendly) — just drop the script tag into `base.njk`

---

## Tech Stack

- **[Eleventy 3.x](https://www.11ty.dev/)** — Static site generator
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** — Templating language
- **[Netlify](https://netlify.com)** — Hosting + forms
- **Vanilla CSS** — No framework, full custom design system
- **Vanilla JS** — No framework, ~80 lines for all interactivity
- **[Google Fonts](https://fonts.google.com/)** — Playfair Display, DM Sans, DM Mono

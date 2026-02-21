# Nishabdha — Creative Studio Website

Built with **Vite + SCSS**. Deployable to **Vercel** in one command.

---

## Project Structure

```
nishabdha/
├── src/
│   ├── index.html          ← Main HTML
│   ├── js/
│   │   └── main.js         ← All JavaScript
│   └── scss/
│       ├── main.scss        ← Entry point (imports all partials)
│       ├── _variables.scss  ← Colors, fonts, spacing
│       ├── _mixins.scss     ← Reusable SCSS mixins
│       ├── _reset.scss      ← CSS reset
│       ├── _nav.scss        ← Navigation styles
│       ├── _hero.scss       ← Hero section
│       ├── _about.scss      ← About section
│       ├── _services.scss   ← Services grid
│       ├── _how-we-work.scss ← Scroll-driven steps
│       └── _cta-contact.scss ← CTA, Contact, Footer
├── public/
│   └── assets/             ← Put your logo, gif, images here
├── vite.config.js
├── package.json
├── vercel.json
└── .gitignore
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (with hot reload)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Adding Your Assets

### Logo
Replace the `<span>Nishabdha</span>` in `src/index.html`:
```html
<!-- In .nav__logo -->
<img src="/assets/logo.svg" alt="Nishabdha" />
```
Place your logo at: `public/assets/logo.svg` (or .png)

### Hero GIF
Replace the placeholder div in `src/index.html`:
```html
<!-- In .hero__media -->
<img src="/assets/hero.gif" alt="Nishabdha visual transmission" />
```
Place your GIF at: `public/assets/hero.gif`

---

## Deploy to Vercel

### Option A: Vercel CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

### Option B: GitHub Integration (Recommended)
1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo
4. Vercel auto-detects Vite — click Deploy
5. Add your custom domain in Project Settings → Domains

---

## Customisation

All design tokens are in `src/scss/_variables.scss`:
- `$bg` — background color (currently `#1a1a1a`)
- `$text` — text color (currently `#f2f2f2`)
- `$font-display` — heading font (Bebas Neue)
- `$font-body` — body font (DM Sans)
- `$font-mono` — mono font (Space Mono)

---

## Future: Scaling to Next.js + Headless WordPress

When the client needs a CMS:
1. Install WordPress on a subdomain (e.g. `cms.yourdomain.com`)
2. Migrate this project to Next.js (`npx create-next-app`)
3. Fetch content via WordPress REST API
4. Keep deploying frontend to Vercel (free tier)
5. This SCSS structure maps directly to Next.js CSS Modules

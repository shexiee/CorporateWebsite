# Lifewood Corporate Website

The official corporate website for **Lifewood Data Technology** — a global AI data processing company delivering precision-labeled, model-ready datasets for the world's leading AI teams.

Built with **Next.js 15**, **Tailwind CSS**, and **React**, featuring a premium modern UI with glassmorphism, scroll-reveal animations, and a fully responsive layout.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Styling | Tailwind CSS v3 |
| Fonts | Geist Sans / Geist Mono |
| Icons | React Icons |
| Language | JavaScript (JSX) |

---

## Project Structure

```
CorporateWebsite/
├── public/               # Static assets (images, video, SVGs)
├── src/
│   └── app/
│       ├── components/   # Shared UI components
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   ├── Reveal.jsx        # Scroll-reveal animation wrapper
│       │   ├── About.jsx
│       │   ├── Services.jsx
│       │   ├── Projects.jsx
│       │   ├── Careers.jsx
│       │   ├── GlobalScale.jsx
│       │   ├── ContactUs.jsx
│       │   ├── AdminLogin.jsx
│       │   └── AdminDashboard.jsx
│       ├── about/
│       ├── services/
│       ├── projects/
│       ├── careers/
│       ├── contact/
│       ├── global-scale/
│       ├── admin-login/
│       ├── admin-dashboard/
│       ├── globals.css           # Design tokens, utilities, animations
│       ├── layout.js
│       └── page.jsx              # Home page
├── jsconfig.json
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, features, pipeline, industries, testimonials |
| `/about` | Company story, mission, values |
| `/services` | Modalities, pipeline, full service suite, FAQ |
| `/projects` | AI data processing case studies |
| `/careers` | Open roles and perks |
| `/global-scale` | Worldwide presence and regional stats |
| `/contact` | Contact form and office info |
| `/admin-login` | Admin portal login |
| `/admin-dashboard` | Protected admin dashboard |

---

## Color Theme

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#045940` | Dark Green — brand primary |
| Secondary | `#F9A51A` | Yellow — accents, CTAs |
| Accent | `#7be0d3` | Teal — highlights, gradients |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Commands

```bash
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## Deployment

This project is optimized for deployment on **Vercel**:

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no config needed

For other platforms, run `npm run build` and serve the `.next/` output.

---

## Environment Variables

Create a `.env.local` file in the root for any environment-specific config:

```env
# Example — add your own as needed
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> `.env.local` is gitignored and will never be committed.

---

© 2025 Lifewood Data Technology. All rights reserved.

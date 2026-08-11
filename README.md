# Redeemed Gospel Church Mukinduri — Website (Frontend)

A React + Vite + Tailwind CSS v4 front end for Redeemed Gospel Church
Mukinduri (Kirinyaga County, Kenya).

## What's inside

- `src/components/Navbar.jsx` — sticky nav with mobile menu
- `src/components/Hero.jsx` — headline + custom SVG sunrise/hills illustration
- `src/components/About.jsx` — mission, vision, values
- `src/components/ServiceTimes.jsx` — weekly order of service (ticket-stub cards)
- `src/components/PastorMessage.jsx` — welcome quote + placeholder portrait
- `src/components/Ministries.jsx` — ministries grid
- `src/components/Events.jsx` — upcoming events list
- `src/components/Gallery.jsx` — placeholder photo tiles (swap in real photos any time)
- `src/components/Contact.jsx` — address, contact details, message form (front end only)
- `src/components/Footer.jsx` — social links (Facebook, YouTube, Instagram, WhatsApp) + sitemap

No photos were available yet, so the hero, pastor portrait, and gallery all
use custom-drawn SVG illustrations/placeholders in the church's colour
palette — swap them for real photos whenever you have them (see "Adding your
own photos" below).

## Run it locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

The production files land in `dist/` and can be deployed to any static host
(Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Adding your own photos

1. Drop image files into `src/assets/` (e.g. `src/assets/sunday-service.jpg`).
2. In `src/components/Gallery.jsx`, replace a placeholder `<div>` tile with an
   `<img>` tag pointing at the imported image.
3. Do the same in `PastorMessage.jsx` for the pastor's portrait, and in
   `Hero.jsx` if you'd like a real photo instead of the illustration.

## Updating real details

Search for these placeholders and swap in the real information:

- Pastor's name — `PastorMessage.jsx`
- Phone number — `Contact.jsx`
- Email address — `Contact.jsx`
- Facebook / social links — `Footer.jsx` and `Navbar.jsx`
- Service times & events — `ServiceTimes.jsx` and `Events.jsx`

## Tech stack

- [Vite](https://vitejs.dev/) — build tool & dev server
- [React 18](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- Fonts: Fraunces (display), Work Sans (body), JetBrains Mono (labels/times)

This is a frontend-only build — no backend yet. Great next steps would be
wiring the contact form to an email service, adding a real map embed, and
connecting a CMS or simple JSON file for events/sermons.

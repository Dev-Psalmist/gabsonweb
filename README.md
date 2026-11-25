# Gabson

A digital storefront for bespoke tailoring: 3D-motion imagery, a lookbook, fabric library, journal and appointment booking, built around a dark, editorial look.

Exported from Base44 so the code lives here in GitHub.

## Stack

- **React 19** + **TanStack Start / Router** (file-based routes in `src/routes`: `/` and `/book`)
- **Tailwind CSS** + shadcn-style UI primitives in `src/components/ui`
- **Vite 8** build
- Site content, copy and image references live in `src/components/site/data.js`

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run preview  # serve the build
```

## Deploying (Vercel)

The repo deploys as a static site with two serverless functions:

- Build command `npm run build`, output directory `dist/client` (both set in `vercel.json`, which also rewrites unknown paths to the prerendered `index.html`)
- Both routes are prerendered to real HTML at build time (`/` and `/book`)
- Environment variable `DATABASE_URL` must be set (Production, Preview and Development) for bookings to save

Endpoints:

| Route | What it does |
| --- | --- |
| `POST /api/bookings` | Validates a fitting request and inserts it into `bookings` |
| `POST /api/concierge` | Answers the chat widget from the studio's own facts, with a WhatsApp handoff |

Run `db/schema.sql` once against a new database to create the `bookings` table.

## Data

Two entities back the app, described in `base44/entities`:

| Entity | What it holds |
| --- | --- |
| `Booking` | Appointment requests from `/book` (name, contact, date, service, notes, status) |
| `User` | App users and roles |

`src/components/site/BookingForm.jsx` posts to `/api/bookings`, which stores the request in Postgres (`bookings` table: name, email, phone, service, date, time, location, notes, status, created_at). Read them with any Postgres client; a small admin page can sit on the same table.

The chat widget posts to `/api/concierge`, a keyword-matching concierge that answers from the studio's facts (address, hours, services, process, contact) and hands anything else to WhatsApp. Swap it for an LLM endpoint if you want freer conversation.

## Images

Photography is served from Base44's public CDN (`media.base44.com`), so nothing needs copying into the repo. Swap the URLs in `src/components/site/data.js` if you move the assets.

## Notes

- `base44/.app.jsonc` links this checkout to a Base44 app and is git-ignored on purpose.
- `DEPLOYMENT-NOTES.md` from the original build is kept for reference.

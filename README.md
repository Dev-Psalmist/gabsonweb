# Gabson — Precision in Style

Gabson is a digital storefront for a bespoke tailoring house in Abuja, Nigeria. The site preserves its editorial design, lookbook, fabric library, journal, atelier information, concierge and fitting-request experience.

## Stack

- React 19
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS
- Vercel Functions for the API
- Neon Postgres for fitting requests

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vercel builds the app with `npm run build`, serves the generated client output, and deploys the functions in `api/`.

## Environment variables

Set `DATABASE_URL` in Vercel for production, preview and development as needed. It must be a Neon/Postgres connection string. The database schema is in `db/schema.sql`.

## API

- `POST /api/bookings` — validates and stores a fitting request in the Neon `bookings` table.
- `POST /api/concierge` — answers common atelier questions and hands other questions to WhatsApp.

## Design and content

The public site components and design are in `src/components/site/`; brand content and image references are in `src/components/site/data.js`. Keep these presentation files intact when changing infrastructure.

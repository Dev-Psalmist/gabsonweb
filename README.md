# Gabson

A digital storefront for bespoke tailoring: 3D-motion imagery, a lookbook, fabric library, journal and appointment booking, built around a dark, editorial look.

## Stack

- React 19 + TanStack Start / Router
- Tailwind CSS + shadcn-style UI primitives
- Vite 8
- Vercel serverless API routes
- Neon PostgreSQL for fitting requests

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploying to Vercel

The project builds with `npm run build` and publishes `dist/client`. The required environment variable is `DATABASE_URL`, configured for Development, Preview and Production.

## API

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/bookings` | POST | Validates a fitting request and stores it in Neon PostgreSQL. |
| `/api/concierge` | POST | Answers common atelier questions and provides a WhatsApp handoff. |

Run `db/schema.sql` once against a new PostgreSQL database to create the bookings table. Existing Vercel DATABASE_URL settings are retained; no database replacement or data migration is required.

## Images

The original Gabson logo and 39 fashion photographs have been copied into `public/images/`. All 40 image references in `src/components/site/data.js` now use local `/images/...` paths. The storefront no longer depends on Base44's media CDN.

## Security

Environment files are not committed. Configure secrets only in Vercel project settings.

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

The visual design and image references are preserved. The current photographs and logo are still served from public image CDN URLs in `src/components/site/data.js`. To complete full infrastructure independence, those original image files still need to be copied into project-owned storage and the references updated. This does not affect the layout or the booking/chat APIs.

## Security

Environment files are not committed. Configure secrets only in Vercel project settings.

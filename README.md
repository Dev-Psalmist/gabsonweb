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

## Data

Two entities back the app, described in `base44/entities`:

| Entity | What it holds |
| --- | --- |
| `Booking` | Appointment requests from `/book` (name, contact, date, service, notes, status) |
| `User` | App users and roles |

`src/components/site/BookingForm.jsx` writes through `@base44/sdk` to the `Booking` entity, using `VITE_BASE44_APP_ID`. That call needs the Base44 app published, or it can be pointed at any API of your own by swapping the `base44.entities.Booking.create(...)` line for a `fetch`.

## Images

Photography is served from Base44's public CDN (`media.base44.com`), so nothing needs copying into the repo. Swap the URLs in `src/components/site/data.js` if you move the assets.

## Notes

- `base44/.app.jsonc` links this checkout to a Base44 app and is git-ignored on purpose.
- `DEPLOYMENT-NOTES.md` from the original build is kept for reference.

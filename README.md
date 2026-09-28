# The Fifth House

Marketing site for The Fifth House, a family dance, movement and community studio in San Diego. Built with Next.js (App Router) and Tailwind CSS v4, deployed on Vercel.

The design spec and reference screenshots are in [`docs/design-handoff.md`](docs/design-handoff.md) and `docs/screenshots/`.

## Develop

```bash
npm install
npm run dev
```

## Where things live

| What | Where |
| --- | --- |
| Address, phone, hours, nav, booking and PDF links | `lib/site.ts` |
| Schedule, prices, FAQ, programs and other copy lists | `lib/content.ts` |
| Design tokens (colors, fonts), buttons, form fields | `app/globals.css` |
| Pages | `app/{page,classes,tuition,our-story,book,join}` |
| Inquiry form handler | `app/api/inquiry/route.ts` |

"Today" and "open now" use the studio's time zone (America/Los_Angeles), not the visitor's.

## Environment variables

| Name | Purpose |
| --- | --- |
| `INQUIRY_WEBHOOK_URL` | Where Join Us submissions are POSTed as JSON (for example, a Formspree form endpoint or a Zapier webhook). If it isn't set, the form shows an error with the studio's phone and email. |

## Open items from the handoff

- Replace the placeholder photos in `public/images/ph-*.png` with real studio photos.
- Add the schedule, tuition and membership PDFs and the Studio Policies link to `links` in `lib/site.ts`. Each link stays hidden until it's set.
- The client needs to confirm the schedule. It lists Sunday classes, but the posted hours say Sunday is closed.
- "Book now" goes to the existing Square Appointments page. Update `links.booking` if that changes.

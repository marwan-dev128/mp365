# MP-365 website

Next.js 16 (App Router) site for MP-365 (Modern Partners 365), built from the SEO team's plan in [`content/BUILD-INSTRUCTIONS.md`](content/BUILD-INSTRUCTIONS.md).

## Where things live

| What | Where |
|---|---|
| URLs, keywords, titles, descriptions, H1s, breadcrumbs, link plan | `content/site-data.json` (source of truth) |
| Page copy, one file per page | `content/pages/<id>.ts`, shape in `content/types.ts` |
| Pricing estimator questions and scoring | `content/estimator.ts` |
| Facts still waiting on the client | `content/TODO.md` |
| Menu and footer | `store/navigation.json`, `store/footer.json` |
| Site settings, blog posts, contact submissions, redirects | PostgreSQL, through `lib/data.ts` |

## Live pages

Home, About, Contact, Blog, Pricing, Clients, the Services overview, 8 category pages, 28 service pages, the Solutions overview with 7 solutions, and the Industries overview with 9 industries. `lib/site-data.ts` decides what is live. How We Work stays in `site-data.json` for later, with no route, so nothing may link to it. Solutions and Industries never mention ERP, because the client does no ERP work, and `lib/site-content-rules.ts` enforces that.

## Editing and checking copy

Edit the page's file in `content/pages/`, then run:

```bash
npx tsx scripts/check-page.ts <id>
```

The check applies the plan's rules: keyword placement, FAQ count (6 to 10) and length, heading rules, live links only, and no unconfirmed facts. `lib/site-content-rules.ts` holds the rules, and `npm test` runs them on every page.

## Rules that must hold

- **Scope:** no ERP implementation, cybersecurity, licence resale, managed services, or the other items in Section 1.4 of the plan.
- **Facts:** only what is in Appendix D of the plan. No founding date, years of experience, reviewer line, timelines, or unconfirmed offers.
- **Schema:** `Organization`, `WebSite` and `BreadcrumbList` only. No `FAQPage`, `Review` or `AggregateRating`.
- **Links:** every menu link is a real `<a href>` in the server-rendered HTML. `components/Header.tsx` renders them in a hidden list because the menu panel only mounts on hover.
- **Redirects:** the plan for the live site is in `content/redirects.ts`, with the readable version in `content/REDIRECT-PLAN.md`. Keep the two in step.

## Getting started

```bash
npm install
npm run db:up       # local Postgres (docker-compose.yml)
cp .env.example .env
npm run db:migrate
npm run db:seed
npm run dev
```

```bash
npm run build     # also regenerates public/llms.txt and public/llms-full.txt
npm run lint
npm test
npm run indexnow  # after a production deploy
```

## Design system

Tokens and primitives are in `app/globals.css`. Base element styles stay inside `@layer base`, because unlayered CSS beats every layered Tailwind utility. The site is light mode only.

## Before launch

- Set the env vars in `.env.example`: analytics IDs, search console verification, booking URL and `CONTACT_WEBHOOK_URL`. Without the webhook, enquiries only sit in the `ContactSubmission` table.
- Point `DATABASE_URL` at production Postgres, then run `npm run db:deploy` and `npm run db:seed`.
- Import the blog posts. Their URLs do not change, so each returns 404 until it is imported.
- Work through `content/TODO.md`.

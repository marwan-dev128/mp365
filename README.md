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

Home, About, Contact, Blog, Pricing, Clients, the Services overview, 8 category pages and 28 service pages. `lib/site-data.ts` decides what is live. Solutions, Industries and How We Work stay in `site-data.json` for later, with no route, so nothing may link to them.

## Editing and checking copy

Edit the page's file in `content/pages/`, then run:

```bash
npx tsx scripts/check-page.ts <id>
```

The check applies the plan's rules: keyword placement, FAQ count and length, heading rules, live links only, and no unconfirmed facts. `lib/site-content-rules.ts` holds the rules, and `npm test` runs them on every page.

## Rules that must hold

- **Scope:** no ERP implementation, cybersecurity, licence resale, managed services, or the other items in Section 1.4 of the plan.
- **Facts:** only what is in Appendix D of the plan. No founding date, years of experience, reviewer line, timelines, or unconfirmed offers.
- **Schema:** `Organization`, `WebSite` and `BreadcrumbList` only. No `FAQPage`, `Review` or `AggregateRating`.
- **Links:** every menu link is a real `<a href>` in the server-rendered HTML. `components/Header.tsx` renders them in a hidden list because the menu panel only mounts on hover.
- **Redirects:** add them as `OldSlug` rows with a `targetPath`. Do not invent them; they come from the redirect plan.

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
- Import the blog posts and load the redirect plan.
- Work through `content/TODO.md`.

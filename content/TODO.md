# MP-365 content gaps

Facts the published pages leave out until the client confirms them. Pages are written so nothing reads as missing; add a fact here when it arrives.

## Client decisions needed

- **Redirect plan:** the live site's URL list comes from Joe, then Omar builds the redirect plan. Add the redirects as `OldSlug` rows with a `targetPath`. The old redirects were cleared because they pointed at deleted pages.
- **Engagement models:** Dedicated hours per week (40+ or 15+). `/pricing/` says "Agreed during scoping" for now.
- **Response times:** urgent issues, 4 to 8 hours or 0 to 4 hours. Not stated anywhere.
- **Offers:** discovery calls under 2 hours not billed, and 8 hours at no charge on one problem. Not stated anywhere.
- **Timelines:** the "Typical timeline" row in At a glance is hidden on every service page until figures exist.
- **Microsoft Solutions Partner:** the exact designation names, for About.
- **LinkedIn:** the schema and footer use `linkedin.com/company/mp-365/`. Confirm it, or switch to `modern-partners-365`.
- **Contact details:** the site keeps info@mp-365.com, the phone number and the Vernon, CT address. The plan's facts bank lists only a personal email.

## Proof to add

- **Testimonials:** exact wording for Jennifer Teeple (Carlisle Construction) and Brian Schetzel (OTIS Elevator). `/clients/` has no testimonials section until then.
- **Connecticut Department of Public Health:** scope and result. The `/clients/` row is generic.
- **Copilot:** no Copilot client result exists yet, so the Copilot pages use the nearest related project.
- **SharePoint supplier and partner portals:** no client story exists, so the page has no proof section.
- **Power Apps and Power Pages:** only anonymous stories are available.
- **Customer Insights, Exchange, OneDrive and both tenant migration pages:** no matching client story exists, so these pages use an anonymous story or have no proof section.
- **Client logos:** the marquee in `store/clients.json` predates the plan and includes Blue Buffalo, Intellinet, Post University, Spyglass MTG and State of Connecticut. OTIS Elevator, US Department of Transportation and Connecticut Department of Public Health have no logo in it.

## Facts to re-check before launch

- **Product names that may change:** Copilot Cowork, Microsoft 365 Copilot (Microsoft Learn increasingly says "Microsoft Copilot"), Copilot for Sales and the Sales agents.
- **SharePoint 2013 workflow retirement (April 2, 2026):** confirmed through a Message Center mirror, not learn.microsoft.com.
- **Microsoft Migration Orchestrator:** Microsoft does not say whether it is generally available. The copy tells readers to check with Microsoft.
- **Customer Insights rename year (2023):** from a search snippet, not a Learn page.
- **Unverified general statements:** farm solutions in SharePoint Online, Entra B2B guest sign-in, Teams shared channels, Power Automate desktop flows, Power Apps offline, and the Azure destination table on the legacy migration page. These were written from product knowledge.

## Planned later

- Import the existing blog posts into `prisma/seed-data/blog.ts`, then add their internal links.
- Solutions, Industries and How We Work stay in `content/site-data.json` with no route. Add them when the client wants them, and restore their links from each page's `internal_links`.
- Two or three more pages the client has mentioned.

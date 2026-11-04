# MP-365 redirect plan

For review by Omar. Built on November 3, 2026 from the live mp-365.com site: its three sitemaps, its WordPress REST API and its navigation. The redirects are in `content/redirects.ts` and take effect when the domain moves to the new site.

No Search Console or backlink data was used, so old URLs outside those sources are not covered. Please check the list against Search Console before the move.

## Pages that move (301)

| Old URL | New URL |
|---|---|
| `/about-us/` | `/about/` |
| `/services/business-applications/` | `/services/dynamics-365-crm/` |
| `/services/collaboration-enablement/` | `/services/sharepoint/` |
| `/services/low-code-solutions/` | `/services/power-platform/` |
| `/services/mergers-and-acquisitions/` | `/services/tenant-to-tenant-migration/` |
| `/services/contract-management-enablement/` | `/solutions/contract-management-automation/` |
| `/solutions/sharepoint/` | `/services/sharepoint/` |
| `/solutions/intranet/` | `/solutions/sharepoint-intranet/` |
| `/solutions/automated-crm/` | `/solutions/crm-implementation/` |
| `/solutions/data-analytics/` | `/solutions/executive-dashboards/` |
| `/solutions/financial-management/` | `/industries/financial-services/` |
| `/solutions/healthcare/` | `/industries/healthcare/` |
| `/solutions/manufacturing-it-solutions/` | `/industries/manufacturing/` |
| `/solutions/it-services-solutions-for-retail/` | `/industries/retail/` |

**The four pages pointing at `/services/` are the weak spot.** No live page matches them, and Google may treat a redirect to a general page as a soft 404. They will keep little of their ranking until the Industries pages exist.

## Blog categories and pagination (301)

The new blog has no category pages, so all of these go to `/blog/`.

| Old URL | New URL |
|---|---|
| `/blog/ai/` | `/blog/` |
| `/blog/copilot/` | `/blog/` |
| `/blog/copilot-agents/` | `/blog/` |
| `/blog/copilot-cowork/` | `/blog/` |
| `/blog/dynamics-365/` | `/blog/` |
| `/blog/dynamics-365-customer-service/` | `/blog/` |
| `/blog/dynamics-365-sales/` | `/blog/` |
| `/blog/microsoft-365/` | `/blog/` |
| `/blog/uncategorized/` | `/blog/` |
| `/blog/page/:page(\d+)/` | `/blog/` |

## WordPress leftovers (301)

| Old URL | New URL | Why |
|---|---|---|
| `/thank-you/` | `/contact/` | The form confirmation page |
| `/new-register-form/` | `/` | An unrelated "EAS Business Membership" form |
| `/register-form-2/` | `/` | The same form |
| `/events/` | `/` | An empty events plugin page |
| `/feed/` | `/blog/` | The RSS feed |
| `/comments/feed/` | `/blog/` | The comments feed |

## URLs that stay the same

- **Pages:** `/`, `/contact/`, `/blog/`, `/services/`, `/services/data-governance/`, `/services/application-modernization/` and `/services/microsoft-365-migration/`. The copy on these pages is new, but the URLs need no redirect.
- **Blog posts:** all 26 keep their `/blog/<slug>/` URLs, listed in `content/redirects.ts`.

## Before the domain moves

1. **Import the 26 blog posts.** They have no redirect, so each returns 404 on the new site until it is imported.
2. **Move the images.** The posts use images under `/wp-content/uploads/`, and those URLs stop working when the domain moves.
3. **Check the new site's 404s.** After the move, compare Search Console's top pages against the new site and add any missing redirects.

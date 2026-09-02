// Every URL the live WordPress site publishes, captured during the launch
// audit so the cutover can be verified instead of assumed.
//
// Source: https://mp-365.com/sitemap_index.xml → page-sitemap.xml (24),
// post-sitemap.xml (16) and category-sitemap.xml (6), plus /blog/page/2/,
// which is `index, follow` and internally linked but absent from every
// sitemap. Captured 2026-09-01.
//
// This is a snapshot, not live data: it is read only by lib/redirects.test.ts,
// which asserts that each entry either resolves on the new site, has a
// redirect row, or is a deliberate 404. Nothing imports it at runtime and
// nothing seeds it. When the old site changes, re-capture it — the test is
// only as honest as this list.

export const LEGACY_URLS: string[] = [
  // --- page-sitemap.xml --------------------------------------------------
  "/",
  "/about-us/",
  "/contact/",
  "/services/",
  "/services/application-modernization/",
  "/services/business-applications/",
  "/services/collaboration-enablement/",
  "/services/contract-management-enablement/",
  "/services/data-governance/",
  "/services/low-code-solutions/",
  "/services/mergers-and-acquisitions/",
  "/services/microsoft-365-migration/",
  "/solutions/",
  "/solutions/automated-crm/",
  "/solutions/data-analytics/",
  "/solutions/financial-management/",
  "/solutions/healthcare/",
  "/solutions/intranet/",
  "/solutions/it-services-solutions-for-retail/",
  "/solutions/manufacturing-it-solutions/",
  "/solutions/sharepoint/",
  "/new-register-form/",
  "/register-form-2/",
  "/thank-you/",

  // --- post-sitemap.xml --------------------------------------------------
  "/blog/",
  "/blog/ai-sales-tools-guide/",
  "/blog/copilot-agents-dynamics-365-business-automation/",
  "/blog/difference-between-copilot-m365-copilot-agents-cowork-explained/",
  "/blog/dynamics-365-sales-lead-qualification-setup/",
  "/blog/fixing-manual-sales-forecasting-dynamics-365-client-example/",
  "/blog/how-to-use-microsoft-copilot-to-supercharge-your-productivity/",
  "/blog/microsoft-365-copilot-chat-interface-redesign/",
  "/blog/microsoft-copilot-cowork-in-dynamics-365/",
  "/blog/microsoft-copilot-for-business-dynamics-365-automation/",
  "/blog/sales-ai-tools-for-dynamics-365/",
  "/blog/what-is-copilot-cowork/",
  "/blog/what-is-dynamics-365-sales-professional/",
  "/blog/what-is-microsoft-dynamics-365/",
  "/blog/what-is-microsoft-dynamics-365-sales/",
  "/blog/why-artificial-intelligence-fails-in-projects/",

  // --- category-sitemap.xml ----------------------------------------------
  "/blog/ai/",
  "/blog/copilot/",
  "/blog/copilot-agents/",
  "/blog/copilot-cowork/",
  "/blog/dynamics-365/",
  "/blog/dynamics-365-sales/",

  // --- indexable but in no sitemap ---------------------------------------
  "/blog/page/2/",
];

/**
 * Routes the new site serves that are hand-built React rather than content
 * rows, so they cannot be derived from seed data.
 *
 * Kept in sync with app/ by lib/redirects.test.ts, which reads the route tree
 * off disk and fails if this list and the filesystem disagree — otherwise a
 * deleted page would keep silently "resolving" a redirect target.
 */
export const STATIC_ROUTES: string[] = [
  "/",
  "/about/",
  "/assessments/",
  "/blog/",
  "/case-studies/",
  "/compare/",
  "/contact/",
  "/dynamics-365/",
  "/industries/",
  "/microsoft-consultant-connecticut/",
  "/migrations/",
  "/pricing/",
  "/resources/",
  "/resources/glossary/",
  "/resources/worked-examples/",
  "/services/",
  "/solutions/",
];

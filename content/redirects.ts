// The redirect plan for the live WordPress site, mp-365.com. Every URL in its
// sitemaps, REST API and navigation is accounted for below, as of 2026-11-03.
// content/REDIRECT-PLAN.md is the readable version, and lib/site-content.test.ts
// holds the two in step with the live pages.

export type PlannedRedirect = {
  source: string;
  destination: string;
};

/** Old pages that move, one to one with the closest live page. */
export const PAGE_REDIRECTS: PlannedRedirect[] = [
  { source: "/about-us/", destination: "/about/" },

  // Old service pages.
  { source: "/services/business-applications/", destination: "/services/dynamics-365-crm/" },
  { source: "/services/collaboration-enablement/", destination: "/services/sharepoint/" },
  { source: "/services/low-code-solutions/", destination: "/services/power-platform/" },
  { source: "/services/mergers-and-acquisitions/", destination: "/services/tenant-to-tenant-migration/" },
  {
    source: "/services/contract-management-enablement/",
    destination: "/solutions/contract-management-automation/",
  },

  // Old solution pages.
  { source: "/solutions/sharepoint/", destination: "/services/sharepoint/" },
  {
    source: "/solutions/intranet/",
    destination: "/solutions/sharepoint-intranet/",
  },
  {
    source: "/solutions/automated-crm/",
    destination: "/solutions/crm-implementation/",
  },
  {
    source: "/solutions/data-analytics/",
    destination: "/solutions/executive-dashboards/",
  },
  {
    source: "/solutions/financial-management/",
    destination: "/industries/financial-services/",
  },

  // Old industry pages, which lived under /solutions/.
  { source: "/solutions/healthcare/", destination: "/industries/healthcare/", },
  {
    source: "/solutions/manufacturing-it-solutions/",
    destination: "/industries/manufacturing/",
  },
  {
    source: "/solutions/it-services-solutions-for-retail/",
    destination: "/industries/retail/",
  },

  // Blog categories. The new blog has no category pages.
  ...["ai", "copilot", "copilot-agents", "copilot-cowork", "dynamics-365", "dynamics-365-customer-service", "dynamics-365-sales", "microsoft-365", "uncategorized"].map(
    (slug) => ({ source: `/blog/${slug}/`, destination: "/blog/" })
  ),

  // WordPress leftovers that should not survive the move.
  { source: "/thank-you/", destination: "/contact/" },
  { source: "/new-register-form/", destination: "/" },
  { source: "/register-form-2/", destination: "/" },
  { source: "/events/", destination: "/" },
  { source: "/feed/", destination: "/blog/" },
  { source: "/comments/feed/", destination: "/blog/" },
];

/** Whole URL patterns. Listed apart because they are not single pages. */
export const PATTERN_REDIRECTS: PlannedRedirect[] = [
  { source: "/blog/page/:page(\\d+)/", destination: "/blog/" },
];

/** Live URLs that exist at the same path on the new site, so they need nothing. */
export const UNCHANGED_PATHS = [
  "/",
  "/solutions/",
  "/contact/",
  "/blog/",
  "/services/",
  "/services/data-governance/",
  "/services/application-modernization/",
  "/services/microsoft-365-migration/",
];

/**
 * Live blog posts. They keep their URLs, so they get no redirect. All 26 are
 * imported in prisma/seed-data/blog-posts/.
 */
export const LIVE_BLOG_POSTS = [
  "dynamics-365-sla-breaches",
  "salesforce-vs-dynamics-365-sales",
  "a-clients-fix-duplicate-cases-in-dynamics-365-customer-service",
  "what-is-dynamics-365-sales-premium",
  "dynamics-365-sales-quote-delays-crm-erp-client-fix",
  "what-is-dynamics-365-sales-enterprise",
  "dynamics-365-storage-capacity-issues-client-fix",
  "what-is-microsoft-dynamics-365-customer-service",
  "client-issue-delayed-leads-from-website-dynamics-365-fix",
  "customer-service-case-routing-fixing-shared-inbox",
  "client-fix-manual-to-automatic-sales-tracking",
  "fixing-manual-sales-forecasting-dynamics-365-client-example",
  "what-is-dynamics-365-sales-professional",
  "dynamics-365-sales-lead-qualification-setup",
  "what-is-microsoft-dynamics-365-sales",
  "microsoft-365-copilot-chat-interface-redesign",
  "sales-ai-tools-for-dynamics-365",
  "ai-sales-tools-guide",
  "copilot-agents-dynamics-365-business-automation",
  "microsoft-copilot-cowork-in-dynamics-365",
  "why-artificial-intelligence-fails-in-projects",
  "difference-between-copilot-m365-copilot-agents-cowork-explained",
  "what-is-copilot-cowork",
  "what-is-microsoft-dynamics-365",
  "microsoft-copilot-for-business-dynamics-365-automation",
  "how-to-use-microsoft-copilot-to-supercharge-your-productivity",
];

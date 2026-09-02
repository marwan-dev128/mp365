// Redirects whose destination is not a Service, Solution or Industry row.
//
// WHY THIS FILE EXISTS
// The launch audit compared every URL in the live WordPress sitemaps
// (page-sitemap.xml, post-sitemap.xml, category-sitemap.xml) against the new
// build. 21 of them had no counterpart and no way to be expressed: OldSlug
// carried three foreign keys, so a redirect could only ever point at a
// Service, a Solution or an Industry. Everything below would have returned
// 404 at cutover — including all 15 indexed blog posts, which are the only
// pages on the old site with recent dates (Aug 2026) and topical titles, and
// therefore the only ones plausibly holding rankings today.
//
// HOW TARGETS WERE CHOSEN
// Closest topical match, not "somewhere on the site". A redirect to a
// generic hub reads to Google as a soft 404 and passes nothing, so a post
// about Dynamics 365 Sales goes to the Sales product page rather than to
// /blog/. Where the new site genuinely has no equivalent, the target is the
// service page that owns the subject area.
//
// HONEST CAVEAT: seven retired Copilot posts consolidate onto one article.
// That is the best available mapping today, not a good one — Google may treat
// the weaker matches as soft 404s. The real fix is replacement content for
// the Copilot cluster (see `note` on each row); these redirects are damage
// control for cutover, not a content strategy.
//
// Every `to` is pinned to a real route by lib/redirects.test.ts, so this file
// cannot drift into pointing at a 404.

export type StandaloneRedirect = {
  /** Old path, exactly as the live site serves it (leading + trailing slash). */
  from: string;
  /** New path. Must resolve to a real route — enforced by the test. */
  to: string;
  /** Why this target, so the mapping can be reviewed rather than trusted. */
  note: string;
};

export const standaloneRedirects: StandaloneRedirect[] = [
  // --- Pages -------------------------------------------------------------
  {
    from: "/about-us/",
    to: "/about/",
    note: "Same page, renamed slug.",
  },

  // --- Blog: Dynamics 365 Sales ------------------------------------------
  // The new site covers this subject on the product page rather than in the
  // blog, so that is the honest destination for all five.
  {
    from: "/blog/what-is-dynamics-365-sales-professional/",
    to: "/dynamics-365/sales/",
    note: "Sales SKU explainer — the product page is the direct counterpart.",
  },
  {
    from: "/blog/what-is-microsoft-dynamics-365-sales/",
    to: "/dynamics-365/sales/",
    note: "Sales overview — same subject as the product page.",
  },
  {
    from: "/blog/dynamics-365-sales-lead-qualification-setup/",
    to: "/dynamics-365/sales/",
    note: "Sales configuration how-to; nearest surviving page is the Sales product page.",
  },
  {
    from: "/blog/fixing-manual-sales-forecasting-dynamics-365-client-example/",
    to: "/dynamics-365/sales/",
    note: "Sales forecasting case example; nearest surviving page is the Sales product page.",
  },
  {
    from: "/blog/sales-ai-tools-for-dynamics-365/",
    to: "/dynamics-365/sales/",
    note: "AI features inside Dynamics 365 Sales.",
  },
  {
    from: "/blog/ai-sales-tools-guide/",
    to: "/dynamics-365/sales/",
    note: "Sales AI tooling roundup; closest subject match is the Sales product page.",
  },

  // --- Blog: Dynamics 365 general ----------------------------------------
  {
    from: "/blog/what-is-microsoft-dynamics-365/",
    to: "/services/dynamics-365/",
    note: "Platform overview — the Dynamics 365 service page covers the same ground.",
  },

  // --- Blog: Copilot -----------------------------------------------------
  // The new site has exactly one Copilot article. Seven retired posts point
  // at it; the weaker matches are candidates for replacement content rather
  // than permanent redirects.
  {
    from: "/blog/copilot-agents-dynamics-365-business-automation/",
    to: "/blog/copilot-in-business-central/",
    note: "Copilot inside Dynamics 365 — closest surviving article. Replacement content wanted.",
  },
  {
    from: "/blog/microsoft-copilot-cowork-in-dynamics-365/",
    to: "/blog/copilot-in-business-central/",
    note: "Copilot inside Dynamics 365 — closest surviving article. Replacement content wanted.",
  },
  {
    from: "/blog/microsoft-copilot-for-business-dynamics-365-automation/",
    to: "/blog/copilot-in-business-central/",
    note: "Copilot inside Dynamics 365 — closest surviving article. Replacement content wanted.",
  },
  {
    from: "/blog/what-is-copilot-cowork/",
    to: "/blog/copilot-in-business-central/",
    note: "Copilot feature explainer; no direct counterpart. Replacement content wanted.",
  },
  {
    from: "/blog/difference-between-copilot-m365-copilot-agents-cowork-explained/",
    to: "/blog/copilot-in-business-central/",
    note: "Copilot feature comparison; no direct counterpart. Replacement content wanted.",
  },
  {
    from: "/blog/how-to-use-microsoft-copilot-to-supercharge-your-productivity/",
    to: "/blog/copilot-in-business-central/",
    note: "General Copilot productivity guide; no direct counterpart. Replacement content wanted.",
  },
  {
    from: "/blog/microsoft-365-copilot-chat-interface-redesign/",
    to: "/blog/copilot-in-business-central/",
    note: "Copilot UI news; no direct counterpart. Replacement content wanted.",
  },

  // --- Blog: AI delivery -------------------------------------------------
  {
    from: "/blog/why-artificial-intelligence-fails-in-projects/",
    to: "/services/power-platform/",
    note: "AI project delivery and governance is the Power Platform service's subject area.",
  },

  // --- WordPress category archives ---------------------------------------
  // Indexable listing pages in category-sitemap.xml. Each goes to the page
  // that now owns its topic, not to /blog/ — a topic archive redirected to a
  // generic index is a soft 404.
  {
    from: "/blog/ai/",
    to: "/services/power-platform/",
    note: "AI archive; Copilot Studio and AI delivery live under Power Platform.",
  },
  {
    from: "/blog/copilot/",
    to: "/blog/copilot-in-business-central/",
    note: "Copilot archive; the surviving Copilot article.",
  },
  {
    from: "/blog/copilot-agents/",
    to: "/blog/copilot-in-business-central/",
    note: "Copilot Agents archive; the surviving Copilot article.",
  },
  {
    from: "/blog/copilot-cowork/",
    to: "/blog/copilot-in-business-central/",
    note: "Copilot Cowork archive; the surviving Copilot article.",
  },
  {
    from: "/blog/dynamics-365/",
    to: "/services/dynamics-365/",
    note: "Dynamics 365 archive; the service page owns this topic.",
  },
  {
    from: "/blog/dynamics-365-sales/",
    to: "/dynamics-365/sales/",
    note: "Dynamics 365 Sales archive; the Sales product page owns this topic.",
  },

  // --- Pagination --------------------------------------------------------
  {
    from: "/blog/page/2/",
    to: "/blog/",
    note: "WordPress pagination; listing to listing is the correct mapping.",
  },
];

/**
 * Old URLs that must NOT be redirected.
 *
 * These are indexable on the live site and should not be: two duplicate
 * membership forms and a thank-you page, all `index, follow` and all in
 * page-sitemap.xml. Redirecting a thin utility page to the homepage is a soft
 * 404 and launders index pollution into the new site; letting them 404 is the
 * correct disposition and is what actually removes them from the index.
 *
 * Listed explicitly so lib/redirects.test.ts can assert the launch checklist
 * covers every live URL — a deliberate 404 and a forgotten one look identical
 * otherwise.
 */
export const intentionally404: string[] = [
  "/thank-you/",
  "/register-form-2/",
  "/new-register-form/",
];

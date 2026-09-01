export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  cluster: "M&A Migration" | "Dynamics 365" | "Power Platform" | "Data Governance";
  authorSlug: "mohammed-khaliefa" | "raafat-elfouly";
  datePublished: string; // ISO
  dateModified: string; // ISO
  excerpt: string;
  // Hero artwork, shown inside the article banner and reused as the og:image
  // and BlogPosting.image. Omit it and the post falls back to the site's
  // branded OG card, exactly as every post did before the column existed.
  imageUrl?: string;
  // Alt text for `imageUrl`. Omitted throughout this file on purpose: the
  // site's photography is generic office stock reused across pages, so it
  // carries no information the adjacent H1 does not already state. The
  // template then renders an empty alt attribute, which is the correct
  // treatment for a decorative image. Set this only where an image genuinely
  // says something the copy does not.
  //
  // Line comments, not a JSDoc block: lib/richtext-parse.test.ts scans this
  // file's raw source for unbalanced inline markup, and the leading slash-star
  // of a doc comment reads to it as an unclosed bold token.
  imageAlt?: string;
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "microsoft-365-tenant-to-tenant-migration-timeline",
    title: "Microsoft 365 Tenant-to-Tenant Migration Timeline: What to Expect at Each Stage",
    metaDescription:
      "A realistic Microsoft 365 tenant-to-tenant migration timeline for M&A deals — from due diligence through cutover and stabilization.",
    cluster: "M&A Migration",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
    excerpt:
      "Most tenant migration delays are timeline-planning failures, not technical ones. Here's a realistic stage-by-stage breakdown.",
    imageUrl: "/images/services/ma-tenant-migration.jpg",
    body: [
      {
        paragraphs: [
          "A [Microsoft 365 M&A tenant migration](/services/ma-tenant-migration/) typically runs 8–16 weeks from kickoff to full cutover, though the number that matters more than the total duration is how the phases line up against your deal's [Day-1 coexistence](/resources/glossary/day-1-coexistence/) and [TSA exit](/resources/glossary/tsa-exit/) dates.",
        ],
      },
      {
        heading: "Phase 1: Due diligence (before or immediately after signing)",
        paragraphs: [
          "This is where most avoidable delays get created — or avoided. Both tenants' licensing (EA, CSP, NCE agreements), identity structure, data volume, and any custom Power Platform or Dynamics 365 apps need to be inventoried before a migration plan is finalized, not discovered mid-project.",
        ],
      },
      {
        heading: "Phase 2: Day-1 coexistence design (2–3 weeks)",
        paragraphs: [
          "Mail flow, calendar free/busy, and directory synchronization are configured so both organizations can work together from the moment the deal closes — well before any mailboxes actually move.",
        ],
      },
      {
        heading: "Phase 3: Wave planning and pilot (1–2 weeks)",
        paragraphs: [
          "A pilot group — usually IT and one business unit — migrates first to validate the technical plan before it's applied company-wide.",
        ],
      },
      {
        heading: "Phase 4: Migration execution (4–10 weeks, depending on scale)",
        paragraphs: [
          "Mailboxes, Teams chat history, and SharePoint/OneDrive content migrate in scheduled waves, sequenced to limit business disruption in any single department at once.",
        ],
      },
      {
        heading: "Phase 5: Cutover and stabilization (2 weeks post-migration)",
        paragraphs: [
          "DNS/MX records switch, the source tenant is decommissioned on schedule, and the migration team monitors actively for at least two weeks to catch any delayed sync or permission issues before declaring the project closed.",
          "If your deal timeline is already set, a [tenant migration assessment](/assessments/tenant-migration/) is the fastest way to find out whether these phases fit before your Day-1 date — and roughly what [it will cost](/pricing/tenant-migration-cost/).",
        ],
      },
    ],
  },
  {
    slug: "dynamics-365-business-central-vs-finance-operations",
    title: "Dynamics 365 Business Central vs. Finance & Operations: Which Fits Your Company?",
    metaDescription:
      "A practical comparison of Dynamics 365 Business Central and Finance & Operations to help mid-market and enterprise companies choose the right ERP.",
    cluster: "Dynamics 365",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-03-04",
    dateModified: "2026-03-04",
    excerpt:
      "Both are Dynamics 365 ERP products, but they're built for different company sizes and operational complexity. Here's how to tell which one fits.",
    imageUrl: "/images/compare/business-central-vs-finance-operations.jpg",
    body: [
      {
        paragraphs: [
          "Business Central and Finance & Operations are both [Dynamics 365](/services/dynamics-365/) ERP products, but they're not different tiers of the same thing — they're built for different operational complexity. See our full [Business Central vs. Finance & Operations comparison](/compare/business-central-vs-finance-operations/) for a side-by-side breakdown.",
        ],
      },
      {
        heading: "Choose Business Central if:",
        paragraphs: [],
        list: [
          "You're a single entity or a small number of related entities",
          "You need integrated financials, inventory, and light manufacturing in one system",
          "You're moving off QuickBooks, an older Dynamics GP/NAV/SL instance, or spreadsheets",
          "Your team wants faster implementation timelines and lower total cost of ownership",
        ],
      },
      {
        heading: "Choose Finance & Operations if:",
        paragraphs: [],
        list: [
          "You operate multiple entities across multiple countries or currencies",
          "You have complex, multi-tier supply chain or manufacturing requirements",
          "You need advanced global compliance and localization support",
          "Your organization has the internal capacity to support a larger, more complex ERP",
        ],
      },
      {
        heading: "The migration path between them",
        paragraphs: [
          "Companies sometimes start on Business Central and outgrow it as they add entities and complexity. Because both run on the Dynamics 365 platform, migrating from Business Central to Finance & Operations is more tractable than migrating from an unrelated legacy ERP — but it's still a real project, not a settings toggle.",
          "Coming from QuickBooks or an older Dynamics GP/NAV instance instead? See our [migration guides](/migrations/) and [Business Central implementation cost](/pricing/business-central-implementation-cost/) breakdown, or explore [Financial Management](/solutions/financial-management/) for what a Business Central implementation actually includes.",
        ],
      },
    ],
  },
  {
    slug: "power-platform-governance-checklist",
    title: "Power Platform Governance Checklist: Preventing Shadow IT Without Slowing Teams Down",
    metaDescription:
      "A practical Power Platform governance checklist covering environment strategy, DLP policies, and app lifecycle review.",
    cluster: "Power Platform",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    excerpt:
      "Power Platform governance isn't about slowing citizen developers down — it's about giving them guardrails so IT doesn't find out about an app after it's already touching production data.",
    imageUrl: "/images/services/power-platform.jpg",
    body: [
      {
        paragraphs: [
          "The instinct to lock [Power Platform](/services/power-platform/) down after discovering an ungoverned app is understandable — and usually counterproductive. The fix is guardrails that let citizen developers keep building, safely.",
        ],
      },
      {
        heading: "The checklist",
        paragraphs: [],
        list: [
          "Separate dev, test, and production environments — no citizen-developed app should go straight to a shared production environment",
          "Data loss prevention (DLP) policies that block risky connector combinations (e.g., SharePoint + arbitrary HTTP connectors) by default",
          "A lightweight review gate before any app connects to sensitive data sources or is shared beyond its original team",
          "An inventory of existing apps and flows — most organizations are surprised by how many already exist",
          "A clear owner for each app, so one doesn't outlive the employee who built it with no one able to maintain it",
        ],
      },
      {
        paragraphs: [
          "Not sure how many ungoverned apps already exist in your tenant? A [Power Platform health check](/assessments/power-platform-health-check/) inventories everything currently running before you set policy.",
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Posts 4–12 of the content calendar in plan/seo-growth-plan.md §6.
  // Each one targets a specific query and links to the money page it feeds.
  // Written from general Microsoft-platform practice — REVIEW AND EDIT for
  // MP365's own house view and real project experience before publishing.
  // No client names, project metrics, or engagement specifics are asserted
  // anywhere in these drafts; add those only where you can back them up.
  // ---------------------------------------------------------------------
  {
    slug: "data-governance-gaps-ma-due-diligence",
    title: "The Data Governance Gaps That Surface During M&A Due Diligence",
    metaDescription:
      "Retention conflicts, undocumented sensitive data, and unclear ownership are the governance problems that surface mid-deal. How to find them early.",
    cluster: "Data Governance",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    excerpt:
      "Governance debt stays invisible until two companies' policies have to reconcile. Here's what tends to surface, and when.",
    imageUrl: "/images/services/data-governance.jpg",
    body: [
      {
        paragraphs: [
          "Most organizations discover the true state of their [data governance](/services/data-governance/) during an acquisition — because that is the first time anyone has to reconcile two different retention schedules, two permission models, and two definitions of \"sensitive\" against a legal deadline.",
        ],
      },
      {
        heading: "The four gaps that surface most often",
        paragraphs: [],
        list: [
          "**Conflicting retention policies.** One company deletes at 3 years, the other holds for 7. Merging tenants without resolving this either destroys records someone is obligated to keep, or inherits an indefinite retention liability.",
          "**Undocumented sensitive data.** PII, health data, or contract terms sitting in SharePoint sites nobody has classified. You cannot decide what may legally move between tenants until you know what is there.",
          "**Unclear ownership.** Sites and Teams whose owner left the company. Nobody can approve what happens to the content because nobody is accountable for it.",
          "**Active legal holds.** An eDiscovery hold on the source tenant constrains what can be migrated or deleted, and holds are frequently not communicated to the IT team running the migration.",
        ],
      },
      {
        heading: "Why this belongs in due diligence, not migration",
        paragraphs: [
          "Every item above changes migration scope, and some change deal terms. Discovering an indefinite retention liability or an undisclosed legal hold after signing is materially worse than finding it during diligence — which is why our [M&A tenant migration](/services/ma-tenant-migration/) engagements start with an inventory of both tenants rather than a migration plan.",
        ],
      },
      {
        heading: "A practical starting point",
        paragraphs: [],
        list: [
          "Export both tenants' retention and sensitivity label configuration and diff them",
          "Run a content search for common sensitive-data types across both tenants",
          "List every site and Team whose owner is no longer an active user",
          "Ask legal — explicitly, in writing — for every active hold on either side",
        ],
      },
      {
        paragraphs: [
          "A [tenant migration assessment](/assessments/tenant-migration/) covers all four as part of scoping.",
        ],
      },
    ],
  },
  {
    slug: "microsoft-365-tenant-migration-cost-drivers",
    title: "What Actually Drives Microsoft 365 Tenant Migration Cost",
    metaDescription:
      "Mailbox count is the number everyone asks about, but it is rarely what moves a tenant migration budget. The four factors that do.",
    cluster: "M&A Migration",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-05-26",
    dateModified: "2026-05-26",
    excerpt:
      "Cost scales with complexity, not headcount. A 200-user migration can cost more than an 800-user one.",
    imageUrl: "/images/assessments/tenant-migration.jpg",
    body: [
      {
        paragraphs: [
          "The first question on every tenant migration call is \"how many users?\" It is the wrong first question. Headcount sets a floor on effort, but four other factors determine whether a migration lands at the bottom or the top of its [cost range](/pricing/tenant-migration-cost/).",
        ],
      },
      {
        heading: "1. Data volume, not user count",
        paragraphs: [
          "Two hundred users with 15 years of retained mail, large OneDrive libraries, and full Teams chat history move more slowly than eight hundred users on a recently provisioned tenant. Migration tooling is throughput-bound, and throughput is measured in gigabytes.",
        ],
      },
      {
        heading: "2. Custom apps in scope",
        paragraphs: [
          "Standard mailboxes, files, and Teams have well-trodden migration paths. Custom [Power Platform](/services/power-platform/) apps and [Dynamics 365](/services/dynamics-365/) environments do not — each one needs individual assessment, and some need rebuilding rather than migrating. This is the single largest source of scope surprise.",
        ],
      },
      {
        heading: "3. Whether Day-1 coexistence is required",
        paragraphs: [
          "[Day-1 coexistence](/resources/glossary/day-1-coexistence/) — shared mail flow, calendar free/busy, directory sync from the moment the deal closes — adds real setup cost. It is almost always worth paying, because the alternative is a period where the two companies cannot schedule a meeting with each other. But it is a cost line, and it should be a deliberate decision rather than a surprise.",
        ],
      },
      {
        heading: "4. Compliance and legal-hold constraints",
        paragraphs: [
          "Active holds, regulated data, and jurisdiction-specific retention requirements all constrain how data can move and add verification work. Regulated industries should assume this materially affects both timeline and cost.",
        ],
      },
      {
        paragraphs: [
          "For a scoped estimate against your actual environment rather than a range, start with a [tenant migration assessment](/assessments/tenant-migration/).",
        ],
      },
    ],
  },
  {
    slug: "dynamics-gp-end-of-support-options",
    title: "Dynamics GP End of Support: Your Real Options",
    metaDescription:
      "Microsoft has moved Dynamics GP into maintenance. Here are the three realistic paths forward, and how to tell which one fits.",
    cluster: "Dynamics 365",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-06-09",
    dateModified: "2026-06-09",
    excerpt:
      "Staying on GP is a defensible short-term decision and a poor long-term one. The question is timing, not direction.",
    imageUrl: "/images/migrations/dynamics-gp-to-business-central.jpg",
    body: [
      {
        paragraphs: [
          "Microsoft has moved Dynamics GP out of active feature development and toward end of mainstream support, and is steering customers to Business Central as the modernization path. GP will keep running for now — but the direction of travel is settled, so the real decision is when to move, not whether.",
        ],
      },
      {
        heading: "Option 1: Migrate to Business Central",
        paragraphs: [
          "The path Microsoft designed for GP customers, and the right answer for most single or few-entity organizations. Business Central covers integrated financials, inventory, and light manufacturing, and integrates natively with the Microsoft 365 tools your finance team already uses. See the [GP to Business Central migration guide](/migrations/dynamics-gp-to-business-central/) for what transfers and what does not.",
        ],
      },
      {
        heading: "Option 2: Migrate to Finance & Operations",
        paragraphs: [
          "Right only if you have genuinely outgrown Business Central's envelope — multiple entities across countries and currencies, complex multi-tier manufacturing, or advanced global compliance needs. It is a larger and longer implementation. Our [Business Central vs. Finance & Operations comparison](/compare/business-central-vs-finance-operations/) walks the decision.",
        ],
      },
      {
        heading: "Option 3: Stay on GP for now",
        paragraphs: [
          "Defensible if you are mid-transaction, in a system freeze, or have a capital cycle that makes this year impossible. It is not defensible indefinitely: the ISV ecosystem around GP thins out, hiring GP expertise gets harder, and the eventual migration does not get cheaper for waiting.",
        ],
      },
      {
        heading: "How to decide",
        paragraphs: [],
        list: [
          "Inventory every GP customization and third-party module first — this drives more of the effort than the data migration",
          "Count your legal entities and currencies; that mostly settles Business Central vs Finance & Operations",
          "Establish your real constraint date: an audit, a lease, a system freeze, a transaction",
          "Get a scoped cost before budgeting — see [Business Central implementation cost](/pricing/business-central-implementation-cost/)",
        ],
      },
    ],
  },
  {
    slug: "cross-tenant-mailbox-migration-what-breaks",
    title: "Cross-Tenant Mailbox Migration: What Actually Breaks",
    metaDescription:
      "Mailbox content migrates reliably. Delegate access, calendar permissions, and Teams metadata are where cross-tenant migrations produce surprises.",
    cluster: "M&A Migration",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-06-23",
    dateModified: "2026-06-23",
    excerpt:
      "The mail moves. It is the relationships around the mail that need planning.",
    imageUrl: "/images/services/microsoft-365-migration.jpg",
    body: [
      {
        paragraphs: [
          "Cross-tenant mailbox migration has matured considerably, and moving mail, calendar, and contacts is now a well-understood operation. What still generates support tickets in week one is everything attached to a mailbox rather than inside it.",
        ],
      },
      {
        heading: "Delegate and shared-mailbox access",
        paragraphs: [
          "Delegate permissions and shared mailbox membership do not survive a cross-tenant move automatically. If an executive assistant manages three calendars, that relationship needs to be re-established in the target tenant — and if nobody planned for it, they discover it the morning after cutover. Inventory delegate relationships before migration and re-apply them as part of the wave.",
        ],
      },
      {
        heading: "Calendar permissions and free/busy",
        paragraphs: [
          "During the coexistence window, free/busy lookup across tenants requires explicit configuration. Without it, meeting scheduling between the two organizations silently degrades to \"no information available\" — which people interpret as the migration having broken something.",
        ],
      },
      {
        heading: "Teams chat history and metadata",
        paragraphs: [
          "1:1 and group chat history can migrate with the right tooling, but fidelity varies: reactions, some app data, and certain channel metadata may not carry over completely. Set expectations on this explicitly during planning — it is far easier to agree what will not move beforehand than to explain it afterward.",
        ],
      },
      {
        heading: "Sent-items and reply-ability",
        paragraphs: [
          "After a domain cutover, replies to pre-migration messages can route unexpectedly if the old addresses are not maintained as proxy addresses on the target mailboxes. This is easy to get right and painful to get wrong.",
        ],
      },
      {
        paragraphs: [
          "All of the above belongs in the wave plan, not in the post-cutover support queue. See our [M&A tenant migration](/services/ma-tenant-migration/) approach for how these are sequenced.",
        ],
      },
    ],
  },
  {
    slug: "business-central-implementation-timeline",
    title: "A Realistic Business Central Implementation Timeline",
    metaDescription:
      "What each phase of a Business Central implementation involves, and which ones actually determine whether you hit your go-live date.",
    cluster: "Dynamics 365",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-07-07",
    dateModified: "2026-07-07",
    excerpt:
      "Data quality work, not configuration, is what usually decides whether an ERP go-live slips.",
    imageUrl: "/images/dynamics-365/business-central.jpg",
    body: [
      {
        paragraphs: [
          "A straightforward single-entity [Business Central](/dynamics-365/business-central/) implementation typically runs 8–16 weeks. Multi-entity or manufacturing scope extends that considerably. But the total is less useful than knowing which phases carry the schedule risk.",
        ],
      },
      {
        heading: "Discovery and design (2–3 weeks)",
        paragraphs: [
          "Mapping your current chart of accounts, entity structure, and processes onto Business Central. Underinvesting here is the most common cause of expensive rework later.",
        ],
      },
      {
        heading: "Data preparation (2–6 weeks — the variable one)",
        paragraphs: [
          "This phase determines whether you hit your date. Legacy data is almost always messier than anyone expects: duplicate vendors, inconsistent item codes, historical transactions that do not reconcile. The work is unglamorous and cannot be compressed by adding people. Budget generously and start early.",
        ],
      },
      {
        heading: "Configuration and build (3–5 weeks)",
        paragraphs: [
          "Configuring modules, approval workflows, and reporting, plus any [Power Platform](/services/power-platform/) extensions. Runs in parallel with data preparation.",
        ],
      },
      {
        heading: "Testing and parallel run (2–4 weeks)",
        paragraphs: [
          "Running a full close cycle in both systems and reconciling. Skipping the parallel run to save two weeks is the single riskiest decision available on an ERP project.",
        ],
      },
      {
        heading: "Go-live and stabilization (2–4 weeks)",
        paragraphs: [
          "Cutover plus active support through the first month-end close in the new system — which is when real issues actually surface.",
        ],
      },
      {
        paragraphs: [
          "For budgeting alongside this timeline, see [Business Central implementation cost](/pricing/business-central-implementation-cost/), or start with a [readiness assessment](/assessments/business-central-readiness/).",
        ],
      },
    ],
  },
  {
    slug: "copilot-in-business-central",
    title: "Copilot in Business Central: What It Actually Does Today",
    metaDescription:
      "A grounded look at Copilot features in Dynamics 365 Business Central, what they help with, and what still needs a person.",
    cluster: "Dynamics 365",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
    excerpt:
      "Useful for drafting and summarizing. Not a substitute for a controller.",
    imageUrl: "/images/assessments/business-central-readiness.jpg",
    body: [
      {
        paragraphs: [
          "Copilot capabilities in Business Central have expanded steadily, and the marketing around them has expanded faster. This is a grounded view of where they genuinely reduce work today.",
          "**Verify current capability against Microsoft's documentation before relying on any specific feature — this area changes release to release, and the details below are a starting point rather than a specification.**",
        ],
      },
      {
        heading: "Where it genuinely helps",
        paragraphs: [],
        list: [
          "Drafting product descriptions and item text from limited structured input",
          "Summarizing records and documents so someone can triage faster",
          "Natural-language assistance for navigating and finding data, which lowers the learning curve for occasional users",
          "Reducing repetitive data-entry keystrokes on routine documents",
        ],
      },
      {
        heading: "Where a person is still required",
        paragraphs: [
          "Anything involving judgment, materiality, or accountability: reconciliation decisions, revenue recognition, approvals, and controls. Copilot drafts and summarizes; it does not sign off. Treat its output as a first draft from a fast assistant, subject to the same review as any other draft.",
        ],
      },
      {
        heading: "Prerequisites people miss",
        paragraphs: [
          "Copilot quality is downstream of data quality and permissions hygiene. If your item master is inconsistent and your role assignments are loose, Copilot inherits both problems. Getting value from it usually starts with governance work rather than feature enablement — the same groundwork covered in our [Power Platform governance checklist](/blog/power-platform-governance-checklist/).",
        ],
      },
    ],
  },
  {
    slug: "teams-migration-divestiture",
    title: "Teams Migration in a Divestiture: Separating What Was Shared",
    metaDescription:
      "Divestiture Teams migration is harder than a merger, because the problem is deciding what the departing entity may take.",
    cluster: "M&A Migration",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    excerpt:
      "In a merger you combine. In a divestiture you have to divide shared history — and that is a governance problem before it is a technical one.",
    imageUrl: "/images/services/collaboration-enablement.jpg",
    body: [
      {
        paragraphs: [
          "Divestitures invert the usual migration problem. A merger asks how to bring two environments together. A divestiture asks what the departing business is entitled to take — and Teams, where years of cross-functional conversation accumulate, is where that question is hardest to answer.",
        ],
      },
      {
        heading: "The core difficulty is entitlement, not tooling",
        paragraphs: [
          "A Team used by both the retained and divested business contains conversations belonging to both. There is no technical answer to who owns a channel's history; it is a decision for legal and the deal team, and IT should refuse to guess. Get the decision in writing before touching anything.",
        ],
      },
      {
        heading: "A workable sequence",
        paragraphs: [],
        list: [
          "Inventory every Team and channel, with owner and primary business function",
          "Classify each as retained, transferring, or shared — shared is the category that needs a decision, not a default",
          "Get written sign-off on the shared set from legal and both business leads",
          "Migrate cleanly-transferring Teams first while the shared set is being adjudicated",
          "Plan for the transitional period: people on both sides will need access during the TSA window",
        ],
      },
      {
        heading: "Do not underestimate the TSA window",
        paragraphs: [
          "The divested entity usually depends on the seller's environment until [TSA exit](/resources/glossary/tsa-exit/). Teams access during that window needs to be deliberately designed — broad enough to keep the business running, narrow enough to satisfy the separation the deal requires. See our [M&A tenant migration](/services/ma-tenant-migration/) service for how carve-outs are sequenced.",
        ],
      },
    ],
  },
  {
    slug: "power-platform-licensing-explained",
    title: "Power Platform Licensing, Explained Without the Matrix",
    metaDescription:
      "Seeded rights, premium connectors, per-app versus per-user plans, and the two decisions that account for most Power Platform overspend.",
    cluster: "Power Platform",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-08-18",
    dateModified: "2026-08-18",
    excerpt:
      "Most Power Platform licensing surprises come from one thing: a premium connector nobody realized was premium.",
    imageUrl: "/images/assessments/power-platform-health-check.jpg",
    body: [
      {
        paragraphs: [
          "[Power Platform](/services/power-platform/) licensing is not as complicated as its documentation makes it look, but it does have a small number of edges that generate most of the unpleasant surprises.",
          "**Licensing terms and pricing change regularly — verify current details with Microsoft or your licensing partner before making a purchase decision.**",
        ],
      },
      {
        heading: "The premium connector cliff",
        paragraphs: [
          "This is the one that catches people. Microsoft 365 licenses include seeded Power Apps and Power Automate rights, but only for standard connectors — broadly, Microsoft 365 data sources. The moment an app touches a premium connector (SQL Server, Dataverse, most third-party systems, custom connectors, HTTP), every user of that app needs a premium license.",
          "The failure mode is predictable: someone builds a useful app on seeded rights, it spreads across a department, and then a licensing review reveals a five-figure annual liability nobody budgeted for.",
        ],
      },
      {
        heading: "Per-app vs per-user",
        paragraphs: [
          "Per-app licensing covers one user running a specific number of apps and suits occasional users of a single tool. Per-user licensing covers unlimited apps and suits people who live in several. The right mix is usually both — and getting that mix right is the largest lever on total cost.",
        ],
      },
      {
        heading: "Two decisions that account for most overspend",
        paragraphs: [],
        list: [
          "**Right-sizing the per-app / per-user mix**, rather than defaulting everyone to per-user",
          "**Knowing which apps use premium connectors before they spread** — a [Power Platform health check](/assessments/power-platform-health-check/) inventories this",
        ],
      },
      {
        paragraphs: [
          "Related: [Dynamics 365 licensing](/pricing/dynamics-365-licensing/) follows a similar full-user versus team-member pattern.",
        ],
      },
    ],
  },
  {
    slug: "salesforce-to-dynamics-switching-costs",
    title: "The Real Switching Costs of Salesforce to Dynamics 365",
    metaDescription:
      "Data migration is the easy part. Automation rebuild, reporting rebuild, and user retraining are what a CRM switch actually costs.",
    cluster: "Dynamics 365",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    excerpt:
      "If the business case rests on license savings alone, do the switching-cost math first.",
    imageUrl: "/images/migrations/salesforce-to-dynamics-365.jpg",
    body: [
      {
        paragraphs: [
          "Switching CRM platforms is a real project, and the honest version of the business case accounts for costs that do not appear on any license quote. If you are weighing this, start with the [Dynamics 365 vs. Salesforce comparison](/compare/dynamics-365-vs-salesforce/), then work through the four below.",
        ],
      },
      {
        heading: "1. Automation rebuild — the long pole",
        paragraphs: [
          "Salesforce automation built in Apex and Flow does not convert. It is rebuilt in Power Automate. This is a development project sized by how much automation you have accumulated, and it consistently takes longer than the data migration everyone plans around. Inventory it before committing to a date.",
        ],
      },
      {
        heading: "2. Reporting and dashboard rebuild",
        paragraphs: [
          "Reports are re-created natively, typically in Power BI, not imported. This is often an opportunity — accumulated report sprawl gets pruned — but it is effort, and someone has to decide which of the 200 existing reports anyone actually reads.",
        ],
      },
      {
        heading: "3. Integration rework",
        paragraphs: [
          "Every system currently integrated with Salesforce needs its connection rebuilt against Dataverse. Count them early; the list is usually longer than the CRM team's mental model of it.",
        ],
      },
      {
        heading: "4. User retraining and adoption dip",
        paragraphs: [
          "Expect a temporary productivity dip while a sales team learns a new interface. Native Outlook and Teams integration shortens the curve for Microsoft-centric organizations, but it does not eliminate it. Plan the go-live away from quarter end.",
        ],
      },
      {
        heading: "When the switch is still clearly worth it",
        paragraphs: [
          "When you are already standardized on Microsoft 365 and paying to maintain two identity and collaboration stacks; when sales and service context-switch between systems all day; or when M&A activity is consolidating the combined entity onto one platform. When the only driver is a license-cost comparison, do this arithmetic first.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

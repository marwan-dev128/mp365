import type { Faq } from "./services";

/**
 * FAQs for routes that are hand-built React rather than content rows —
 * the homepage, /about/, the Connecticut local page, and the hub indexes.
 *
 * Keyed by canonical trailing-slash path so the seed writes straight into
 * StaticPageFaq without a FK lookup, and app pages read with
 * getStaticPageFaqs(path). Answers use the same inline markup as the rest of
 * the seeded copy — `[label](/path/)` renders as an internal link and is
 * flattened for JSON-LD by stripInlineMarkup().
 *
 * Sourced from research/FAQ-SEO-RESEARCH-MP365.md §12. Every answer here is
 * supported by SiteSettings/Person data or by a claim already published
 * elsewhere on the site; anything needing business confirmation (§13) is
 * deliberately absent.
 */
export type StaticPageFaqGroup = { path: string; faqs: Faq[] };

export const staticPageFaqs: StaticPageFaqGroup[] = [
  {
    path: "/",
    faqs: [
      {
        q: "Do we need a Microsoft consulting partner, or can we do this in-house?",
        a: "Internal IT teams can run most Microsoft projects — the constraint is usually capacity and repetition, not capability. A partner is worth engaging when the work has a deadline the team can't absorb alongside daily operations, when it's a one-off the team will never do again (a tenant migration, an ERP implementation), or when getting it wrong is expensive to unwind. Routine administration and ongoing configuration are usually better kept in-house.",
      },
      {
        q: "What does MP365 do?",
        a: "MP365 is a Microsoft consulting firm that plans and delivers Microsoft 365 and Dynamics 365 projects — including [tenant migrations for mergers and acquisitions](/services/ma-tenant-migration/), [Microsoft 365 migrations](/services/microsoft-365-migration/), [Dynamics 365](/services/dynamics-365/) and Business Central implementations, [Power Platform solutions](/services/power-platform/), and [data governance](/services/data-governance/). Work is delivered as scoped projects rather than as an ongoing managed service.",
      },
      {
        q: "How does an engagement start?",
        a: "Most engagements start with a short discovery conversation to establish scope, followed by either a fixed-scope proposal or one of MP365's [assessments](/assessments/) — a tenant migration assessment, Business Central readiness assessment, or Power Platform health check — where the right approach isn't yet clear.",
      },
      {
        q: "What size organizations does MP365 work with?",
        a: "MP365 works with mid-market and enterprise organizations, most commonly those with enough complexity that Microsoft 365 and Dynamics 365 decisions have real consequences — multiple entities, an acquisition in progress, or a legacy system reaching end of support.",
      },
    ],
  },
  {
    path: "/about/",
    faqs: [
      {
        q: "How do we choose a Microsoft consulting partner?",
        a: "Judge partners on three things: whether they have done your specific project before (a tenant migration and an ERP implementation are different disciplines), who will actually be on your project rather than who is in the pitch, and whether they will tell you when something is a bad idea. Certifications and partner tiers indicate scale, not fit — the more useful question is which named people will do the work.",
      },
      {
        q: "Who leads MP365?",
        a: "MP365 is led by Mohammed Khaliefa, President, who has over 20 years leading Microsoft platform engagements, and Dr. Raafat Elfouly, Chief Technology Officer, who holds a Ph.D., has authored more than 50 published papers, and has built over 20 software products.",
      },
      {
        q: "Where is MP365 based?",
        a: "MP365 is based in Vernon, Connecticut, near Hartford, and works with clients across Connecticut, New England, and the United States. Hartford-area clients are met [on-site](/microsoft-consultant-connecticut/) for kickoff and key milestones.",
      },
    ],
  },
  {
    path: "/microsoft-consultant-connecticut/",
    faqs: [
      {
        q: "Do you work with clients outside Connecticut?",
        a: "Yes. MP365 is based in Vernon, Connecticut and works with clients across New England and nationally — Microsoft 365 and Dynamics 365 projects are delivered remotely, with on-site presence for kickoff and key milestones where it helps. Being local matters most for Hartford-area clients who want face-to-face working sessions; it does not limit where projects are delivered.",
      },
      {
        q: "Do you meet clients on-site in the Hartford area?",
        a: "Yes — MP365 meets Hartford-area clients on-site for project kickoff and key milestones, with the rest of delivery run remotely. For organizations outside the region, the same milestones are run as scheduled working sessions rather than on-site visits.",
      },
      {
        q: "What kinds of Microsoft projects do Connecticut companies bring to MP365 most often?",
        a: "The most common engagements are [Microsoft 365 migrations](/services/microsoft-365-migration/), [tenant migrations](/services/ma-tenant-migration/) driven by a merger or acquisition, and [Dynamics 365 implementations](/services/dynamics-365/) for companies replacing legacy accounting or CRM systems. Data governance and Power Platform work usually follows once the core environment is in place.",
      },
    ],
  },
  {
    path: "/pricing/",
    faqs: [
      {
        q: "Why don't you publish a single price for these projects?",
        a: "Because the same project name can describe very different amounts of work — a 50-person Microsoft 365 migration and a 5,000-person tenant merger are both “a migration.” The pages in this section publish the factors that actually move cost — user count, entity count, data volume, integrations, legal holds — so you can locate your own situation, and MP365 quotes a fixed scope after a discovery conversation.",
      },
      {
        q: "What is the difference between what we pay Microsoft and what we pay MP365?",
        a: "Microsoft charges the subscription license — per user per month for Microsoft 365 and Dynamics 365. MP365 charges for the project work: assessment, design, configuration, data migration, integration, and training. Licensing is an ongoing operating cost; implementation is a one-off project cost, and they are budgeted separately.",
      },
      {
        q: "What drives cost overruns on Microsoft projects?",
        a: "Almost always things discovered mid-project rather than priced at the start — PST files and legal holds in a mailbox migration, undocumented customizations in a legacy ERP, integrations nobody remembered were running, and data that turns out to need cleaning before it can be moved. Finding these during a paid [assessment](/assessments/) is considerably cheaper than finding them during execution.",
      },
    ],
  },
  {
    path: "/migrations/",
    faqs: [
      {
        q: "Which migration path applies to us?",
        a: "It depends on what you're leaving. Dynamics GP, NAV, and AX each have a different upgrade path into the current Dynamics 365 products, and moving off Salesforce is a CRM data-and-process migration rather than an ERP upgrade. The pages in this section cover each path separately, because what transfers, what has to be rebuilt, and how long it takes differ substantially between them.",
      },
      {
        q: "Is a migration the same as an upgrade?",
        a: "No. An upgrade moves you to a newer version of the same product with the data model largely intact. The moves covered here are re-implementations: the target system has a different data model, so master data and balances are mapped across, customizations are rebuilt rather than carried over, and the project includes process design rather than just a version bump.",
      },
    ],
  },
  {
    path: "/assessments/",
    faqs: [
      {
        q: "What is an assessment, and why start there?",
        a: "An assessment is a fixed-scope engagement that produces a plan — an inventory of what you actually have, the risks in it, and a costed path forward — before anyone commits to an implementation. It exists because the things that blow up Microsoft projects (undocumented customizations, legal holds, unowned apps, dirty data) are discovered during discovery, and finding them on a fixed fee is cheaper than finding them mid-project.",
      },
      {
        q: "What do we get at the end of an assessment?",
        a: "A written deliverable you own and can act on with or without MP365 — the current-state inventory, the risks and dependencies found, a recommended approach, and a scoped plan for the work that follows. The point of a fixed scope is that the output is useful on its own, not a sales document.",
      },
    ],
  },
  {
    path: "/dynamics-365/",
    faqs: [
      {
        q: "Which Dynamics 365 product do we actually need?",
        a: "Dynamics 365 is a suite, not one product. Sales and Customer Service are CRM applications; Business Central and Finance are ERP; Supply Chain and Field Service extend ERP into operations. Most organizations start from a specific problem — pipeline visibility, outgrowing an accounting system, scheduling field technicians — and the problem, not the suite, points to the product.",
      },
      {
        q: "Do we have to buy the whole suite?",
        a: "No — Dynamics 365 applications are licensed individually, so you can start with one and add others later. They share the same underlying Dataverse platform, which is why adding a second application later is a configuration project rather than a second integration project. See [Dynamics 365 licensing](/pricing/dynamics-365-licensing/) for how the licensing model works.",
      },
    ],
  },
];

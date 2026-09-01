import type { Faq } from "./services";
import type { MarketingBlock } from "../../lib/marketing-blocks";

export type MarketingPageSeed = {
  type: "MIGRATION" | "COMPARISON" | "PRICING" | "ASSESSMENT" | "PRODUCT";
  hub: "migrations" | "compare" | "pricing" | "assessments" | "dynamics-365";
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroQuestion: string;
  heroAnswer: string;
  imageUrl?: string;
  sections: MarketingBlock[];
  faqs: Faq[];
  relatedServiceSlugs: string[];
  published: boolean;
};

export const marketingPages: MarketingPageSeed[] = [
  // --- Migrations -----------------------------------------------------
  {
    type: "MIGRATION",
    hub: "migrations",
    slug: "dynamics-gp-to-business-central",
    name: "Dynamics GP to Business Central Migration",
    metaTitle: "Dynamics GP to Business Central Migration Guide",
    metaDescription:
      "What to expect moving from Dynamics GP to Business Central — what data transfers, typical timeline, and how to plan the cutover.",
    heroQuestion: "Should I migrate from Dynamics GP to Business Central?",
    heroAnswer:
      "Most organizations should plan a Dynamics GP to Business Central migration once GP's extended support timeline becomes a real constraint or GP can no longer support current entity/reporting needs — Business Central runs on the same Dynamics 365 platform, integrates natively with Microsoft 365 and Power Platform, and is the direct modernization path Microsoft itself steers GP customers toward.",
    sections: [
      {
        type: "prose",
        heading: "What transfers, and what doesn't",
        paragraphs: [
          "Chart of accounts, vendor/customer master data, open transactions, and historical GL balances migrate in a standard GP-to-BC migration. What doesn't move automatically: heavily customized GP modifications, some third-party ISV add-ons (each needs its own BC equivalent evaluated separately), and old workflow/approval logic built directly into GP's forms.",
          "This is why a proper migration starts with an inventory of customizations, not a straight data-export — the data migration itself is usually the easy part.",
        ],
      },
      {
        type: "table",
        heading: "GP vs. Business Central, at a glance",
        headers: ["", "Dynamics GP", "Business Central"],
        rows: [
          ["Deployment", "On-premises (primarily)", "Cloud-native (or on-prem/hybrid)"],
          ["Microsoft 365 integration", "Limited, add-on based", "Native — Outlook, Teams, Excel"],
          ["Power Platform / Copilot", "Not supported", "Native Dataverse integration"],
          ["Ongoing Microsoft investment", "Maintenance mode", "Active feature development"],
        ],
      },
      {
        type: "steps",
        heading: "Typical migration process",
        steps: [
          { name: "Customization & ISV inventory", description: "Catalog every GP customization and third-party module, and identify its BC equivalent or replacement." },
          { name: "Data migration plan", description: "Map GP's chart of accounts and master data to BC's data model." },
          { name: "Pilot migration", description: "Migrate a test company/environment to validate mappings before touching production." },
          { name: "Parallel run", description: "Run GP and BC side by side for a close cycle to confirm financial results match." },
          { name: "Cutover", description: "Switch users to BC, decommission GP on a set schedule." },
        ],
      },
      {
        type: "prose",
        heading: "Timeline",
        paragraphs: [
          "A single-entity GP migration with standard modules typically takes 8–14 weeks. Multi-entity organizations or those with significant customizations should plan for 4–6 months. See our [Business Central implementation cost](/pricing/business-central-implementation-cost/) guide for what drives the budget.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Dynamics GP being discontinued?",
        a: "Microsoft has moved Dynamics GP into extended/limited support rather than active new-feature development, and has been steering customers toward Business Central as the modernization path. Organizations should treat a GP migration as a when, not an if.",
      },
      {
        q: "Can I keep my GP customizations in Business Central?",
        a: "Direct code-level customizations don't transfer — each one needs to be evaluated and either rebuilt as a BC extension, replaced with a native BC feature, or replaced with a Power Platform app. This evaluation should happen before migration planning, not after.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365"],
    imageUrl: "/images/migrations/dynamics-gp-to-business-central.jpg",
    published: true,
  },
  {
    type: "MIGRATION",
    hub: "migrations",
    slug: "salesforce-to-dynamics-365",
    name: "Salesforce to Dynamics 365 Migration",
    metaTitle: "Salesforce to Dynamics 365 Migration Guide",
    metaDescription:
      "What's involved in migrating CRM data and processes from Salesforce to Dynamics 365 — and when it's worth the switch.",
    heroQuestion: "When does it make sense to migrate from Salesforce to Dynamics 365?",
    heroAnswer:
      "Switching from Salesforce to Dynamics 365 typically makes sense when an organization is already standardized on Microsoft 365 and wants CRM natively integrated with Outlook, Teams, and Power Platform — reducing license sprawl and integration overhead — rather than for feature parity alone, since both platforms cover core CRM functionality well.",
    sections: [
      {
        type: "prose",
        heading: "What actually drives this migration",
        paragraphs: [
          "The switching cost of a CRM migration is real, so the honest driver is almost never \"Dynamics 365 has a feature Salesforce lacks.\" It's usually: the organization is paying for two separate identity/collaboration stacks (Salesforce plus Microsoft 365), sales and service teams are context-switching between systems all day, or a parent company's M&A activity is standardizing the combined entity onto one platform.",
        ],
      },
      {
        type: "list",
        heading: "What migrates",
        items: [
          "Accounts, contacts, and opportunity/pipeline history",
          "Custom objects and fields — mapped to Dynamics 365 / Dataverse equivalents",
          "Historical activity data (calls, emails, notes)",
          "Reports and dashboards — rebuilt natively in Power BI, not a direct import",
        ],
      },
      {
        type: "prose",
        heading: "Where teams get surprised",
        paragraphs: [
          "Salesforce automation built in Apex/Flow doesn't transfer directly — it's rebuilt in Power Automate, which is a genuine rebuild project, not a migration script. Budget time for this specifically; it's usually the long pole in the schedule, not the data migration itself.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a Salesforce to Dynamics 365 migration take?",
        a: "A single-team CRM migration (e.g., one sales org, standard objects) typically takes 6–10 weeks. Migrations involving significant custom Apex automation or multiple business units run 3–5 months.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365"],
    imageUrl: "/images/migrations/salesforce-to-dynamics-365.jpg",
    published: true,
  },

  // --- Compare ----------------------------------------------------------
  {
    type: "COMPARISON",
    hub: "compare",
    slug: "business-central-vs-finance-operations",
    name: "Business Central vs. Finance & Operations",
    metaTitle: "Dynamics 365 Business Central vs. Finance & Operations",
    metaDescription:
      "Business Central and Finance & Operations are both Dynamics 365 ERP — here's how to choose between them by company size and complexity.",
    heroQuestion: "What's the real difference between Business Central and Finance & Operations?",
    heroAnswer:
      "Business Central and Finance & Operations are both Dynamics 365 ERP products, but they're built for different operational complexity — Business Central fits single or few-entity companies needing integrated financials and light manufacturing, while Finance & Operations fits larger, multi-entity, multi-currency organizations with complex supply chain requirements.",
    sections: [
      {
        type: "table",
        heading: "Side-by-side",
        headers: ["", "Business Central", "Finance & Operations"],
        rows: [
          ["Best fit", "Single or few related entities", "Multi-entity, multi-country"],
          ["Currency / localization", "Basic multi-currency", "Advanced global compliance"],
          ["Manufacturing", "Light manufacturing", "Complex, multi-tier manufacturing"],
          ["Typical implementation", "8–16 weeks", "4–9+ months"],
          ["Best for orgs coming from", "QuickBooks, GP, NAV, spreadsheets", "Legacy AX, SAP, large on-prem ERP"],
        ],
      },
      {
        type: "prose",
        heading: "The honest verdict",
        paragraphs: [
          "If you're reading this because your finance team is drowning in spreadsheets and manual consolidation across 2–3 entities, Business Central is very likely the right answer — it's faster to implement and lower total cost of ownership. If you're operating in 5+ countries with complex intercompany transactions and dedicated finance/IT teams to support a larger system, Finance & Operations is the fit.",
          "Companies do sometimes start on Business Central and graduate to Finance & Operations as they grow — because both run on Dynamics 365, that path is more tractable than migrating from an unrelated legacy ERP, though it's still a real project. See our [Financial Management](/solutions/financial-management/) solution page for what we implement, or the [Business Central implementation cost](/pricing/business-central-implementation-cost/) guide for budgeting.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I switch from Business Central to Finance & Operations later?",
        a: "Yes — because both are Dynamics 365 products on related platforms, migrating from Business Central to Finance & Operations as you grow is more tractable than switching from an unrelated ERP, though it's still a genuine implementation project, not a settings change.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365"],
    imageUrl: "/images/compare/business-central-vs-finance-operations.jpg",
    published: true,
  },
  {
    type: "COMPARISON",
    hub: "compare",
    slug: "dynamics-365-vs-salesforce",
    name: "Dynamics 365 vs. Salesforce",
    metaTitle: "Dynamics 365 vs. Salesforce Comparison",
    metaDescription:
      "How Dynamics 365 and Salesforce compare for CRM — integration, cost structure, and which fits organizations already on Microsoft 365.",
    heroQuestion: "Is Dynamics 365 or Salesforce better for CRM?",
    heroAnswer:
      "Neither is universally \"better\" — Dynamics 365 typically wins for organizations already standardized on Microsoft 365 that want CRM natively integrated with Outlook, Teams, and Power Platform without extra license sprawl, while Salesforce's advantage is its larger third-party app ecosystem for organizations not primarily built on Microsoft tools.",
    sections: [
      {
        type: "table",
        heading: "Side-by-side",
        headers: ["", "Dynamics 365", "Salesforce"],
        rows: [
          ["Microsoft 365 / Teams integration", "Native", "Requires connector/add-on"],
          ["Underlying platform", "Dataverse (shared with Power Platform)", "Salesforce Platform"],
          ["Low-code app extension", "Power Apps, native", "Salesforce-specific tooling"],
          ["Third-party app ecosystem", "Smaller (AppSource)", "Larger (AppExchange)"],
          ["Licensing", "Often bundled with existing M365 agreements", "Separate licensing/contract"],
        ],
      },
      {
        type: "prose",
        heading: "The honest verdict",
        paragraphs: [
          "If your organization already runs on Microsoft 365 and your sales/service teams live in Outlook and Teams all day, Dynamics 365 usually reduces total integration cost and the number of systems people context-switch between. If you need a specific capability that only exists in Salesforce's AppExchange ecosystem, or you're not primarily a Microsoft shop, Salesforce may be the better fit despite the integration overhead.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Dynamics 365 cheaper than Salesforce?",
        a: "It depends on your existing Microsoft 365 licensing — organizations with Microsoft 365 E3/E5 agreements often see lower total cost with Dynamics 365 since it shares identity and infrastructure they're already paying for. Direct per-seat CRM pricing between the two is often comparable; the difference shows up in integration and license-sprawl costs, not the CRM license line item alone.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365", "ma-tenant-migration"],
    imageUrl: "/images/compare/dynamics-365-vs-salesforce.jpg",
    published: true,
  },

  // --- Pricing ------------------------------------------------------------
  // Ranges below are general industry benchmarks, not MP365-specific
  // historical project data — clearly labeled as illustrative. Confirm
  // these match MP365's actual pricing model before treating this content
  // as final; see the disclaimer block on each page.
  {
    type: "PRICING",
    hub: "pricing",
    slug: "tenant-migration-cost",
    name: "Microsoft 365 Tenant Migration Cost",
    metaTitle: "Microsoft 365 Tenant Migration Cost",
    metaDescription:
      "What drives the cost of a Microsoft 365 tenant-to-tenant migration for M&A — illustrative ranges by company size and the factors that move them.",
    heroQuestion: "How much does a Microsoft 365 tenant migration cost?",
    heroAnswer:
      "Microsoft 365 tenant-to-tenant migration cost is driven primarily by mailbox/user count, data volume, and how many custom Power Platform or Dynamics 365 apps are in scope — small migrations (under 100 users) commonly run in the low five figures, while larger, multi-thousand-user M&A migrations with complex coexistence requirements can reach six figures.",
    sections: [
      {
        type: "price-range",
        heading: "Illustrative ranges by company size",
        tiers: [
          { label: "Under 100 users", range: "$15K–$40K", note: "Single-wave migration, standard mailbox/Teams/SharePoint scope" },
          { label: "100–500 users", range: "$40K–$120K", note: "Multi-wave, Day-1 coexistence required" },
          { label: "500–2,000 users", range: "$120K–$350K", note: "Complex coexistence, custom app migration" },
          { label: "2,000+ users", range: "Custom scope", note: "Typically phased across multiple engagements tied to TSA milestones" },
        ],
        disclaimer:
          "These are illustrative, industry-typical ranges for planning purposes only — not a quote. Every M&A migration has different licensing, compliance, and coexistence requirements that materially change scope. MP365 provides a fixed-price quote after a discovery call, not a per-mailbox rate card.",
      },
      {
        type: "prose",
        heading: "What actually moves the number",
        paragraphs: [
          "The four biggest cost drivers, in order: mailbox and Teams data volume (more data = more migration time), the number of custom Power Platform/Dynamics 365 apps that need to migrate alongside standard mailboxes, whether Day-1 coexistence is required (adds setup cost but prevents business disruption), and compliance/legal hold requirements that constrain how data can move.",
          "Get a scoped estimate with a [tenant migration assessment](/assessments/tenant-migration/), or read the [migration cost drivers](/blog/microsoft-365-tenant-to-tenant-migration-timeline/) post for the technical detail behind these numbers.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does tenant migration cost scale linearly with user count?",
        a: "No — cost scales with complexity more than raw headcount. A 200-user migration with heavy customization and strict compliance holds can cost more than a straightforward 800-user migration with standard mailboxes.",
      },
    ],
    relatedServiceSlugs: ["ma-tenant-migration"],
    published: true,
  },
  {
    type: "PRICING",
    hub: "pricing",
    slug: "business-central-implementation-cost",
    name: "Business Central Implementation Cost",
    metaTitle: "Dynamics 365 Business Central Implementation Cost",
    metaDescription:
      "What a Business Central implementation typically costs by company size — illustrative ranges and what drives the total.",
    heroQuestion: "How much does a Business Central implementation cost?",
    heroAnswer:
      "Business Central implementation cost commonly ranges from roughly $20K–$60K for a straightforward single-entity setup with standard financials, up to $150K–$400K+ for multi-entity organizations with manufacturing, complex inventory, or significant data migration and integration work.",
    sections: [
      {
        type: "price-range",
        heading: "Illustrative ranges by scope",
        tiers: [
          { label: "Standard financials, single entity", range: "$20K–$60K", note: "GL, AP/AR, basic inventory" },
          { label: "Multi-entity consolidation", range: "$60K–$150K", note: "Financial consolidation across 2–5 entities" },
          { label: "Manufacturing / complex inventory", range: "$150K–$400K+", note: "Production, advanced warehousing, custom integrations" },
        ],
        disclaimer:
          "Illustrative, industry-typical ranges for planning purposes only — not a quote. MP365 scopes a fixed-price implementation after discovery, since hidden complexity (legacy data quality, custom reporting, integrations) is what actually drives cost overruns on ERP projects industry-wide.",
      },
      {
        type: "prose",
        heading: "What drives the total",
        paragraphs: [
          "Legacy data quality and volume (messy historical data costs more to migrate cleanly than the license itself), the number of third-party systems Business Central needs to integrate with, whether manufacturing/production modules are in scope, and user training/change management for teams moving off spreadsheets or an older system like QuickBooks or Dynamics GP.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should we implement Business Central ourselves or use a partner?",
        a: "Business Central can be self-implemented, and for a single-entity company with clean data and standard financial processes that is a reasonable path. A partner earns its fee where the risk sits: multi-entity consolidation, migrating history off a legacy system, integrations to existing tools, and the configuration decisions that are cheap to make correctly up front and expensive to unwind after go-live. The honest test is whether anyone on your team has done it before — a first implementation is a poor place to learn on live financial data.",
      },
      {
        q: "Is Business Central cheaper than Finance & Operations to implement?",
        a: "Generally yes — Business Central's simpler data model and faster implementation methodology typically mean lower total cost for organizations that fit its target profile (single or few entities). See our [Business Central vs. Finance & Operations](/compare/business-central-vs-finance-operations/) comparison for the fuller picture.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365"],
    published: true,
  },

  // --- Assessments ------------------------------------------------------
  {
    type: "ASSESSMENT",
    hub: "assessments",
    slug: "tenant-migration",
    name: "Microsoft 365 Tenant Migration Assessment",
    metaTitle: "Microsoft 365 Tenant Migration Assessment",
    metaDescription:
      "A fixed-scope assessment that inventories both tenants, surfaces licensing and identity conflicts, and produces a migration plan tied to your deal timeline.",
    heroQuestion: "What does a tenant migration assessment include?",
    heroAnswer:
      "A Microsoft 365 tenant migration assessment inventories both tenants' licensing, identity structure, data volume, and custom apps, then delivers a migration plan and cost estimate mapped to your deal's Day-1 and TSA-exit dates — so the technical plan is set before the migration itself begins, not discovered mid-project.",
    sections: [
      {
        type: "list",
        heading: "What's included",
        items: [
          "Full inventory of both tenants — licensing (EA/CSP/NCE), identity structure, mailbox/Teams/SharePoint data volume",
          "Custom Power Platform and Dynamics 365 app inventory and migration-readiness review",
          "Licensing reconciliation recommendation for the combined entity",
          "Day-1 coexistence design (mail flow, calendar, directory sync)",
          "Wave plan and cost estimate mapped to your deal timeline",
        ],
      },
      {
        type: "prose",
        heading: "Duration",
        paragraphs: [
          "Typically 1–2 weeks, scoped to fit before your deal's signing or close date. See the full [M&A tenant migration service](/services/ma-tenant-migration/) for what happens after the assessment.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do we need this before or after the deal closes?",
        a: "Ideally during due diligence, before terms are finalized — licensing and identity conflicts are far cheaper to address before a deal closes than after. It can still be run immediately post-signing if that wasn't possible.",
      },
    ],
    relatedServiceSlugs: ["ma-tenant-migration"],
    imageUrl: "/images/assessments/tenant-migration.jpg",
    published: true,
  },
  {
    type: "ASSESSMENT",
    hub: "assessments",
    slug: "power-platform-health-check",
    name: "Power Platform Health Check",
    metaTitle: "Power Platform Health Check",
    metaDescription:
      "An inventory of every Power App and Power Automate flow already running in your tenant, with a governance plan to close the gaps.",
    heroQuestion: "What is a Power Platform health check?",
    heroAnswer:
      "A Power Platform health check inventories every Power App and Power Automate flow already running in your Microsoft 365 tenant — including ones IT doesn't know about — and evaluates each against data loss prevention policy, ownership, and production-readiness, producing a governance plan instead of a shutdown order.",
    sections: [
      {
        type: "list",
        heading: "What's included",
        items: [
          "Full inventory of existing apps, flows, and connectors across all environments",
          "Risk review — which apps touch sensitive data without proper DLP policy",
          "Ownership audit — apps with no clear maintainer",
          "Environment strategy recommendation (dev/test/prod separation)",
          "A governance plan your team can act on, not just a list of problems",
        ],
      },
    ],
    faqs: [
      {
        q: "Will this shut down apps our teams currently rely on?",
        a: "No — the health check is diagnostic, not disruptive. The output is a governance plan; any changes to existing apps happen on a separate, agreed timeline so teams aren't caught off guard.",
      },
    ],
    relatedServiceSlugs: ["power-platform"],
    imageUrl: "/images/assessments/power-platform-health-check.jpg",
    published: true,
  },
  {
    type: "ASSESSMENT",
    hub: "assessments",
    slug: "business-central-readiness",
    name: "Business Central Readiness Assessment",
    metaTitle: "Business Central Readiness Assessment",
    metaDescription:
      "A fixed-scope assessment that reviews your current financial system, data quality, and integrations to scope a realistic Business Central implementation.",
    heroQuestion: "What does a Business Central readiness assessment include?",
    heroAnswer:
      "A Business Central readiness assessment reviews your current financial system (QuickBooks, GP, NAV, or spreadsheets), evaluates data quality and the third-party systems that need to integrate, and delivers a realistic implementation scope and timeline before you commit to a project.",
    sections: [
      {
        type: "list",
        heading: "What's included",
        items: [
          "Current-system review — chart of accounts, entity structure, data quality",
          "Integration inventory — what other systems need to connect to Business Central",
          "Gap analysis against Business Central's standard capabilities",
          "Scoped implementation timeline and cost range",
        ],
      },
    ],
    faqs: [
      {
        q: "Do we need this if we already know we want Business Central?",
        a: "It's still worth doing — the assessment is what turns \"we want Business Central\" into an accurate project scope and cost, rather than a guess based on a generic implementation package.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365"],
    imageUrl: "/images/assessments/business-central-readiness.jpg",
    published: true,
  },

  // --- Migrations (additional) ------------------------------------------
  {
    type: "MIGRATION",
    hub: "migrations",
    slug: "dynamics-nav-to-business-central",
    name: "Dynamics NAV to Business Central Migration",
    metaTitle: "Dynamics NAV to Business Central Migration Guide",
    metaDescription:
      "What's involved in migrating from Dynamics NAV to Business Central — the closest migration path in the Dynamics family, but still a real project.",
    heroQuestion: "Is migrating from Dynamics NAV to Business Central easier than from GP?",
    heroAnswer:
      "Yes, generally — Business Central was built directly on the NAV codebase, so the data model and much of the business logic map more directly than a GP migration does, though NAV customizations (like GP's) still need individual evaluation rather than a straight data copy.",
    sections: [
      {
        type: "prose",
        heading: "Why NAV to BC is the more direct path",
        paragraphs: [
          "Business Central is, structurally, the cloud evolution of Dynamics NAV — the object model, much of the terminology, and core financial logic carry over more directly than migrations from GP or a non-Microsoft ERP. That doesn't make it a one-click upgrade, but the mapping work is more predictable.",
        ],
      },
      {
        type: "list",
        heading: "What still needs individual review",
        items: [
          "Custom NAV objects (C/AL or AL extensions) — each needs a compatibility check against BC's current extension model",
          "Third-party NAV add-ons — evaluate whether a BC-native equivalent exists",
          "Reports built in classic NAV report objects — often need rebuilding",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a NAV to Business Central migration take?",
        a: "A relatively standard NAV environment with modest customization typically migrates in 6–10 weeks. Heavily customized environments take longer, primarily due to the extension/add-on review, not the core data migration.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365"],
    imageUrl: "/images/migrations/dynamics-nav-to-business-central.jpg",
    published: true,
  },
  {
    type: "MIGRATION",
    hub: "migrations",
    slug: "dynamics-ax-to-dynamics-365",
    name: "Dynamics AX to Dynamics 365 Migration",
    metaTitle: "Dynamics AX to Dynamics 365 Migration Guide",
    metaDescription:
      "What's involved in migrating from Dynamics AX to Dynamics 365 Finance & Operations — the direct upgrade path Microsoft designed for AX customers.",
    heroQuestion: "What does an AX to Dynamics 365 migration involve?",
    heroAnswer:
      "A Dynamics AX to Dynamics 365 migration moves an organization from on-premises AX to Dynamics 365 Finance & Operations — the cloud successor Microsoft built specifically for AX customers — requiring a review of X++ customizations, integrations, and reporting alongside the core data migration.",
    sections: [
      {
        type: "prose",
        heading: "Why AX customers specifically need this",
        paragraphs: [
          "Dynamics AX has followed the same support trajectory as GP — Microsoft has directed AX customers toward Dynamics 365 Finance & Operations as the modernization path, since F&O was built as AX's direct cloud successor and targets the same complex, multi-entity, manufacturing-heavy use cases.",
        ],
      },
      {
        type: "steps",
        heading: "Typical migration process",
        steps: [
          { name: "X++ customization audit", description: "Catalog every AX customization and determine its Dynamics 365 extension equivalent." },
          { name: "Data and configuration mapping", description: "Map AX's data model and configuration to Dynamics 365 F&O." },
          { name: "Integration inventory", description: "Identify every system integrated with AX and plan its Dynamics 365 connection." },
          { name: "Parallel testing", description: "Run both systems in parallel through a close cycle to validate financial results." },
          { name: "Cutover", description: "Switch to Dynamics 365, decommission AX on a defined schedule." },
        ],
      },
    ],
    faqs: [
      {
        q: "Can we keep our AX customizations in Dynamics 365?",
        a: "Direct X++ code doesn't transfer as-is — each customization is evaluated and rebuilt as a Dynamics 365 extension, replaced with a native F&O feature, or replaced with Power Platform. This evaluation is the core of migration planning, not an afterthought.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365"],
    imageUrl: "/images/migrations/dynamics-ax-to-dynamics-365.jpg",
    published: true,
  },

  // --- Compare (additional) -----------------------------------------------
  {
    type: "COMPARISON",
    hub: "compare",
    slug: "business-central-vs-netsuite",
    name: "Business Central vs. NetSuite",
    metaTitle: "Dynamics 365 Business Central vs. NetSuite",
    metaDescription:
      "Business Central and NetSuite both target mid-market ERP — here's how they compare on Microsoft integration, pricing model, and implementation.",
    heroQuestion: "Is Business Central or NetSuite better for a mid-market company?",
    heroAnswer:
      "For organizations already standardized on Microsoft 365, Business Central typically wins on integration cost and user familiarity (native Outlook, Teams, Excel); NetSuite's strength is a longer track record as a pure cloud-native ERP with a broad built-in feature set that doesn't assume a Microsoft-centric stack.",
    sections: [
      {
        type: "table",
        heading: "Side-by-side",
        headers: ["", "Business Central", "NetSuite"],
        rows: [
          ["Microsoft 365 integration", "Native", "Third-party connector"],
          ["Best fit", "Microsoft-standardized orgs", "Platform-agnostic orgs"],
          ["Deployment model", "Cloud-native (Microsoft-hosted)", "Cloud-native (Oracle-hosted)"],
          ["Customization approach", "AL extensions, Power Platform", "SuiteScript, SuiteCloud"],
        ],
      },
      {
        type: "prose",
        heading: "The honest verdict",
        paragraphs: [
          "This comparison usually comes down to your existing stack more than a feature gap — both are credible mid-market ERPs. If your company already runs on Microsoft 365, Business Central's native integration typically reduces total cost. If you're not a Microsoft shop, or need specific SuiteApp ecosystem functionality, NetSuite may fit better despite the added integration work.",
        ],
      },
    ],
    faqs: [],
    relatedServiceSlugs: ["dynamics-365"],
    imageUrl: "/images/compare/business-central-vs-netsuite.jpg",
    published: true,
  },
  {
    type: "COMPARISON",
    hub: "compare",
    slug: "power-apps-vs-custom-development",
    name: "Power Apps vs. Custom Development",
    metaTitle: "Power Apps vs. Custom Software Development",
    metaDescription:
      "When Power Apps low-code development is the right call versus traditional custom software — cost, speed, and where each one breaks down.",
    heroQuestion: "Should I build a Power App or hire developers for custom software?",
    heroAnswer:
      "Power Apps typically wins for internal line-of-business tools — approval workflows, inventory trackers, field data collection — where speed and lower cost matter more than deep customization; traditional custom development wins for customer-facing products or apps needing complex logic outside Dataverse's data model.",
    sections: [
      {
        type: "table",
        heading: "Side-by-side",
        headers: ["", "Power Apps", "Custom development"],
        rows: [
          ["Typical timeline", "Weeks", "Months"],
          ["Best for", "Internal tools, workflows", "Customer-facing products, complex logic"],
          ["Data platform", "Dataverse (or connected sources)", "Any — full flexibility"],
          ["Ongoing maintenance", "Lower — managed platform", "Higher — full ownership"],
        ],
      },
      {
        type: "prose",
        heading: "Where Power Apps breaks down",
        paragraphs: [
          "Power Apps struggles when an app needs complex custom algorithms, has extreme performance/scale requirements outside Dataverse's model, or is meant to be a customer-facing commercial product rather than an internal tool. Those cases usually justify traditional development, even at higher upfront cost.",
        ],
      },
    ],
    faqs: [],
    relatedServiceSlugs: ["power-platform"],
    imageUrl: "/images/compare/power-apps-vs-custom-development.jpg",
    published: true,
  },

  // --- Pricing (additional) -----------------------------------------------
  {
    type: "PRICING",
    hub: "pricing",
    slug: "dynamics-365-licensing",
    name: "Dynamics 365 Licensing Explained",
    metaTitle: "Dynamics 365 Licensing Costs Explained",
    metaDescription:
      "How Dynamics 365 licensing works — per-user pricing tiers, what's bundled, and the mistakes that lead to over-licensing.",
    heroQuestion: "How does Dynamics 365 licensing work?",
    heroAnswer:
      "Dynamics 365 is licensed per user per month, with different tiers for each application (Sales, Customer Service, Business Central, Finance, Supply Chain), plus attach pricing for organizations already licensing one Dynamics 365 app who add another — the most common licensing mistake is over-licensing full users when a lower-cost \"Team Member\" tier covers read-mostly access needs.",
    sections: [
      {
        type: "list",
        heading: "What to check before you buy",
        items: [
          "Full user vs. Team Member licensing — Team Member covers light/read access at a much lower cost per seat",
          "Attach pricing — licensing a second Dynamics 365 app is often discounted if you already license one",
          "Whether your existing Microsoft 365 E3/E5 agreement changes your effective Dynamics 365 cost",
          "Power Platform premium connector licensing if your Power Apps touch non-Microsoft data sources",
        ],
      },
      {
        type: "prose",
        heading: "Where organizations overpay",
        paragraphs: [
          "The most common overspend is licensing every user at the full application tier when a meaningful share only need read/light access — right-sizing the mix of full users and Team Member licenses is usually the single biggest lever on total Dynamics 365 license cost.",
        ],
      },
    ],
    faqs: [],
    relatedServiceSlugs: ["dynamics-365"],
    published: true,
  },

  // --- Dynamics 365 by product --------------------------------------------
  {
    type: "PRODUCT",
    hub: "dynamics-365",
    slug: "sales",
    name: "Dynamics 365 Sales",
    metaTitle: "Dynamics 365 Sales Implementation",
    metaDescription:
      "Dynamics 365 Sales implementation for pipeline management, forecasting, and Copilot-assisted selling — integrated natively with Outlook and Teams.",
    heroQuestion: "What does Dynamics 365 Sales do?",
    heroAnswer:
      "Dynamics 365 Sales is Microsoft's CRM application for pipeline management, opportunity tracking, and sales forecasting, built to work natively inside Outlook and Teams so sellers log activity without switching apps — with Copilot features that draft emails, summarize records, and surface deal-risk signals.",
    imageUrl: "/images/dynamics-365/sales.jpg",
    sections: [
      {
        type: "list",
        heading: "What we configure",
        items: [
          "Pipeline stages and opportunity process matched to how your team actually sells",
          "Forecasting and territory management",
          "Outlook and Teams integration so activity logging doesn't require leaving email",
          "Copilot for Sales — email drafting, meeting summaries, deal-risk signals",
        ],
      },
      {
        type: "prose",
        heading: "Who this fits",
        paragraphs: [
          "Dynamics 365 Sales fits organizations already on Microsoft 365 that want CRM to feel like a natural extension of Outlook and Teams rather than a separate destination. For a fuller comparison against Salesforce, see [Dynamics 365 vs. Salesforce](/compare/dynamics-365-vs-salesforce/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Dynamics 365 Sales replace Outlook?",
        a: "No — it integrates directly into Outlook and Teams rather than replacing them, so sellers can log calls, emails, and meetings from inside the tools they already use daily.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365"],
    published: true,
  },
  {
    type: "PRODUCT",
    hub: "dynamics-365",
    slug: "customer-service",
    name: "Dynamics 365 Customer Service",
    metaTitle: "Dynamics 365 Customer Service Implementation",
    metaDescription:
      "Dynamics 365 Customer Service implementation for case management, omnichannel support, and Copilot-assisted agent workflows.",
    heroQuestion: "What does Dynamics 365 Customer Service include?",
    heroAnswer:
      "Dynamics 365 Customer Service is Microsoft's application for case management, omnichannel support (chat, email, voice), knowledge base search, and Copilot-assisted agent workflows that draft responses and surface relevant knowledge articles during a live case.",
    imageUrl: "/images/dynamics-365/customer-service.jpg",
    sections: [
      {
        type: "list",
        heading: "What we configure",
        items: [
          "Case management and routing rules matched to your support team's structure",
          "Omnichannel setup — chat, email, and voice in one queue",
          "Knowledge base structure so agents (and self-service customers) find answers fast",
          "Copilot for Customer Service — response drafting and case summarization",
        ],
      },
    ],
    faqs: [
      {
        q: "Can Dynamics 365 Customer Service handle live chat and phone support?",
        a: "Yes — the omnichannel add-on brings chat, email, SMS, and voice into a single agent queue with unified case history, rather than separate tools per channel.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365"],
    published: true,
  },
  {
    type: "PRODUCT",
    hub: "dynamics-365",
    slug: "finance",
    name: "Dynamics 365 Finance",
    metaTitle: "Dynamics 365 Finance Implementation",
    metaDescription:
      "Dynamics 365 Finance implementation for multi-entity, multi-currency financial management — the Finance & Operations app for larger organizations.",
    heroQuestion: "What is Dynamics 365 Finance, specifically?",
    heroAnswer:
      "Dynamics 365 Finance is the financial management application within the Finance & Operations product line — general ledger, accounts payable/receivable, budgeting, and multi-entity consolidation for organizations with complex, multi-country financial operations, distinct from Business Central's lighter-weight financials.",
    imageUrl: "/images/dynamics-365/finance.jpg",
    sections: [
      {
        type: "prose",
        heading: "Finance vs. Business Central's financials",
        paragraphs: [
          "Dynamics 365 Finance and Business Central both handle financial management, but at different scales — Finance is built for multi-entity, multi-currency organizations with advanced global compliance and consolidation needs, while Business Central covers single or few-entity companies well at lower cost and faster implementation. See our full [Business Central vs. Finance & Operations](/compare/business-central-vs-finance-operations/) comparison.",
        ],
      },
      {
        type: "list",
        heading: "What we configure",
        items: [
          "Multi-entity chart of accounts and intercompany transactions",
          "Multi-currency and advanced tax/compliance configuration",
          "Budgeting and financial reporting",
          "Integration with Supply Chain Management for organizations running both",
        ],
      },
    ],
    faqs: [],
    relatedServiceSlugs: ["dynamics-365"],
    published: true,
  },
  {
    type: "PRODUCT",
    hub: "dynamics-365",
    slug: "supply-chain",
    name: "Dynamics 365 Supply Chain Management",
    metaTitle: "Dynamics 365 Supply Chain Management Implementation",
    metaDescription:
      "Dynamics 365 Supply Chain Management implementation for inventory, warehousing, and production planning at scale.",
    heroQuestion: "What does Dynamics 365 Supply Chain Management do?",
    heroAnswer:
      "Dynamics 365 Supply Chain Management handles inventory, warehousing, procurement, and production planning for organizations with complex, multi-site supply chains — the Finance & Operations application built for manufacturers and distributors that have outgrown Business Central's lighter inventory features.",
    imageUrl: "/images/dynamics-365/supply-chain.jpg",
    sections: [
      {
        type: "list",
        heading: "What we configure",
        items: [
          "Multi-site inventory and warehouse management",
          "Production planning and scheduling",
          "Procurement and vendor management",
          "Integration with Dynamics 365 Finance for combined ERP operations",
        ],
      },
    ],
    faqs: [],
    relatedServiceSlugs: ["dynamics-365"],
    published: true,
  },
  {
    type: "PRODUCT",
    hub: "dynamics-365",
    slug: "business-central",
    name: "Dynamics 365 Business Central",
    metaTitle: "Dynamics 365 Business Central Implementation",
    metaDescription:
      "Dynamics 365 Business Central implementation — integrated financials, inventory, and light manufacturing for small-to-midsize companies.",
    heroQuestion: "What is Dynamics 365 Business Central built for?",
    heroAnswer:
      "Dynamics 365 Business Central is Microsoft's ERP for small-to-midsize companies — integrated general ledger, accounts payable/receivable, inventory, and light manufacturing in one system, positioned as the modernization path for organizations outgrowing QuickBooks or an older Dynamics GP/NAV instance.",
    imageUrl: "/images/dynamics-365/business-central.jpg",
    sections: [
      {
        type: "prose",
        heading: "What it replaces",
        paragraphs: [
          "Business Central most commonly replaces QuickBooks (once multi-entity consolidation or inventory complexity outgrows it), Dynamics GP or NAV (as Microsoft's designated modernization path), or a patchwork of spreadsheets bolted onto a basic accounting system.",
        ],
      },
      {
        type: "list",
        heading: "What we configure",
        items: [
          "General ledger, AP/AR, and multi-entity consolidation",
          "Inventory and light manufacturing/production",
          "Outlook and Excel integration for finance teams",
          "Migration from QuickBooks, GP, or NAV — see our [migration guides](/migrations/)",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does Business Central cost to implement?",
        a: "Implementation cost is driven by entity count, how much historical data is migrated, the number of integrations, and whether any manufacturing or warehouse functionality is in scope — not by user count alone, which mainly affects licensing. Business Central is licensed per user per month in Essentials and Premium tiers, with Premium adding manufacturing and service management. See our [Business Central implementation cost](/pricing/business-central-implementation-cost/) guide for illustrative ranges by company size.",
      },
      {
        q: "What does Copilot actually do in Business Central today?",
        a: "Copilot in Business Central handles specific, bounded tasks rather than acting as a general assistant — drafting product descriptions, suggesting bank reconciliation matches, assisting with sales line entry, and answering questions about data already in the system. It is useful for reducing repetitive entry work; it does not replace the reporting or analysis layer. See [Copilot in Business Central: what it actually does today](/blog/copilot-in-business-central/) for the current feature set.",
      },
      {
        q: "Is Business Central right for us, or should we look at Finance & Operations?",
        a: "Business Central fits small-to-midsize companies that need integrated financials, inventory, and light manufacturing in a single system. Finance & Operations fits larger, multi-entity, multi-currency organizations with complex supply chain, manufacturing, or global compliance requirements. The threshold is usually operational complexity rather than headcount — the [side-by-side comparison](/compare/business-central-vs-finance-operations/) sets out where the line falls.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365"],
    published: true,
  },
  {
    type: "PRODUCT",
    hub: "dynamics-365",
    slug: "field-service",
    name: "Dynamics 365 Field Service",
    metaTitle: "Dynamics 365 Field Service Implementation",
    metaDescription:
      "Dynamics 365 Field Service implementation for work order management, technician scheduling, and mobile field operations.",
    heroQuestion: "What does Dynamics 365 Field Service manage?",
    heroAnswer:
      "Dynamics 365 Field Service manages work orders, technician scheduling and dispatch, asset/equipment history, and mobile access for field technicians — built on the same Dataverse platform as Dynamics 365 Sales and Customer Service, so a service request can flow from a support case straight into a scheduled field visit.",
    imageUrl: "/images/dynamics-365/field-service.jpg",
    sections: [
      {
        type: "list",
        heading: "What we configure",
        items: [
          "Work order lifecycle and technician scheduling/dispatch",
          "Asset and equipment history tracking",
          "Mobile app configuration for field technicians",
          "Integration with Dynamics 365 Customer Service for case-to-work-order handoff",
        ],
      },
    ],
    faqs: [],
    relatedServiceSlugs: ["dynamics-365"],
    published: true,
  },
];

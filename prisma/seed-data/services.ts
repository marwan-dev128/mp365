export type Faq = { q: string; a: string };
export type ProcessStep = { name: string; description: string };

import type { MarketingBlock } from "../../lib/marketing-blocks";

export type Service = {
  slug: string;
  oldSlugs: string[]; // for the 301 redirect map
  name: string;
  shortName: string; // for nav/cards
  category: "Migration" | "Modernization" | "Business Applications" | "Governance";
  metaTitle: string;
  metaDescription: string;
  heroQuestion: string;
  heroAnswer: string; // 40-60 word snippet-formatted answer
  intro: string[];
  /** Typed content blocks — same renderer as solutions and the hubs. */
  blocks?: MarketingBlock[];
  process?: ProcessStep[];
  faqs: Faq[];
  relatedServiceSlugs: string[];
  /** Bare glossary slugs. */
  relatedTermSlugs?: string[];
  /** Full hub-page paths, e.g. "/pricing/tenant-migration-cost/". */
  relatedPageRefs?: string[];
  /** @deprecated superseded by `blocks`; kept so old rows still render. */
  sections?: { heading: string; body: string[] }[];
};

export const services: Service[] = [
  {
    slug: "ma-tenant-migration",
    oldSlugs: ["/services/mergers-and-acquisitions/"],
    name: "M&A Tenant Migration",
    shortName: "M&A Migration",
    category: "Migration",
    metaTitle: "Microsoft 365 M&A Tenant Migration Services",
    metaDescription:
      "Tenant-to-tenant Microsoft 365 migration for mergers, acquisitions, and divestitures — mailboxes, Teams, and SharePoint moved with zero data loss.",
    heroQuestion: "What is Microsoft 365 M&A tenant migration?",
    heroAnswer:
      "M&A tenant migration is the process of consolidating, splitting, or merging Microsoft 365 tenants when companies combine or separate — moving mailboxes, Teams, SharePoint, and identities between tenants while keeping both organizations operating. MP365 plans and executes these migrations end to end, from Day-1 coexistence through full cutover.",
    intro: [
      "Every merger, acquisition, or divestiture eventually becomes an IT integration project — and the hardest part of that project is almost always Microsoft 365. Mailboxes, Teams conversations, SharePoint sites, and Power Platform automations all live inside a tenant boundary that doesn't merge on its own.",
      "MP365 has guided organizations through tenant consolidations, carve-outs, and cross-tenant mergers for over 15 years, separating, combining, and standing up new Microsoft 365 environments without stalling the deal timeline.",
    ],
    sections: [
      {
        heading: "Where M&A migrations go wrong",
        body: [
          "Most delays trace back to the same three causes: no coexistence plan for the period between signing and cutover, licensing and identity conflicts discovered mid-migration instead of during due diligence, and no tested rollback path if a wave fails.",
          "We build the migration plan backward from the deal's Day-1 and TSA-exit dates, not forward from a generic migration checklist — so the technical plan matches the legal and financial timeline it has to serve.",
        ],
      },
      {
        heading: "What moves in a tenant-to-tenant migration",
        body: [
          "Exchange Online mailboxes and calendars, Teams chat history and channels, SharePoint and OneDrive content, Entra ID (Azure AD) identities and group memberships, Power Automate flows and Power Apps, and any Dynamics 365 or Power Platform environments in scope.",
          "We also handle the parts most vendors skip: DNS and domain cutover sequencing, license reconciliation across the combined entity, and Teams Voice/PSTN continuity so phones keep ringing on cutover day.",
          "Scope drives budget more than headcount does — see [what actually drives tenant migration cost](/pricing/tenant-migration-cost/) for how mailbox count, data volume, and rebuilt content combine, and [data governance](/services/data-governance/) for the retention and legal-hold questions that decide what can legally move.",
        ],
      },
    ],
    process: [
      { name: "Due diligence & assessment", description: "Inventory both tenants — licensing, identity, data volume, custom apps — before terms are finalized." },
      { name: "Day-1 coexistence plan", description: "Design mail flow, calendar free/busy, and directory sync so both companies can work together immediately after close." },
      { name: "Wave planning", description: "Sequence migration waves by business unit or department to limit blast radius and keep the business running." },
      { name: "Migration execution", description: "Move mailboxes, Teams, and SharePoint content with delta syncs to minimize cutover downtime." },
      { name: "Cutover & stabilization", description: "Switch DNS/MX, decommission the source tenant on schedule, and monitor for two weeks post-cutover." },
    ],
    faqs: [
      {
        q: "How long does a Microsoft 365 tenant-to-tenant migration take?",
        a: "A single-department pilot migration typically takes 2–4 weeks; a full-company tenant merger runs 8–16 weeks depending on mailbox count, data volume, and how many custom Power Platform or Dynamics 365 apps are in scope. M&A-driven migrations are usually scoped to hit a specific Day-1 or TSA-exit deadline rather than a fixed duration.",
      },
      {
        q: "Can employees keep working during the migration?",
        a: "Yes. We run migrations in waves with mail flow and calendar coexistence configured from day one, so users in both the source and target tenant can email, schedule meetings with, and (with the right coexistence tooling) chat with each other throughout the project.",
      },
      {
        q: "What happens to Teams chat history during a merger?",
        a: "Teams 1:1 and group chat history can be migrated to the target tenant using cross-tenant migration tooling, though channel conversations and some metadata (reactions, some app data) may have limitations depending on the source and target configuration — we assess this during due diligence and set expectations before migration begins.",
      },
      {
        q: "Do we need to buy new Microsoft 365 licenses for the merged company?",
        a: "Usually you reconcile existing licenses rather than buying entirely new ones — we audit both tenants' license SKUs and agreements (EA, CSP, NCE) during due diligence and recommend the lowest-cost path to cover the combined user count without over-provisioning.",
      },
      {
        q: "How does the TSA exit date affect the migration timeline?",
        a: "The transition services agreement (TSA) exit date is a contractual deadline for leaving the seller's systems, so it sets the migration's end date rather than the other way round. MP365 plans backward from the [TSA exit](/resources/glossary/tsa-exit/) and [Day-1](/resources/glossary/day-1-coexistence/) dates, sequencing waves so the final cutover lands before the agreement expires — which usually means starting identity and licensing work well before the technical migration begins.",
      },
      {
        q: "Can we start migrating before the deal closes?",
        a: "Discovery and planning can start before close; data movement generally cannot, because the acquiring company has no legal right to the target's data until the transaction completes. In practice that means the due-diligence inventory, Day-1 coexistence design, and wave plan are built during the pre-close period so execution can begin immediately at close.",
      },
      {
        q: "What happens if a migration wave fails partway through?",
        a: "Each wave is scoped so a failure affects one business unit rather than the whole company, and every wave has a tested rollback path defined before it runs — users stay on the source tenant and mail flow is unchanged until their wave is verified. This is why we sequence waves by business unit and pilot the plan on a small group first, rather than migrating the organization in a single cutover.",
      },
      {
        q: "How is a divestiture or carve-out different from a merger?",
        a: "A merger consolidates two tenants into one; a divestiture or carve-out extracts one business unit's identities, mailboxes, and content out of a shared tenant into a new one, usually against a TSA deadline. Carve-outs are typically harder, because shared SharePoint sites, Teams, and distribution groups have to be separated rather than merged, and what stays behind matters as much as what moves.",
      },
      {
        q: "What happens to Teams Voice and phone numbers at cutover?",
        a: "Teams Voice and PSTN numbers do not move automatically with a tenant migration — number porting or direct-routing reconfiguration has to be sequenced separately, and it is one of the most common causes of Day-1 disruption when it is left to the end. We plan voice continuity as part of the cutover sequence rather than as a post-migration task.",
      },
      {
        q: "What happens to our Power Automate flows and Power Apps?",
        a: "Power Automate flows and Power Apps do not transfer between tenants automatically; they are exported and re-imported into the target tenant, then reconnected to their data sources and re-owned, because connections authenticate against the tenant they were built in. We inventory [Power Platform](/services/power-platform/) assets during due diligence so this work is scoped rather than discovered at cutover.",
      },
    ],
    relatedServiceSlugs: ["microsoft-365-migration", "data-governance"],
  },
  {
    slug: "microsoft-365-migration",
    // Slug is unchanged from the original WordPress URL — no redirect needed.
    oldSlugs: [],
    name: "Microsoft 365 Migration",
    shortName: "M365 Migration",
    category: "Migration",
    metaTitle: "Microsoft 365 Migration Services",
    metaDescription:
      "Fully managed Microsoft 365 migration from Google Workspace, on-prem Exchange, or another cloud — planned and executed by MP365's Microsoft consulting team.",
    heroQuestion: "What does a Microsoft 365 migration include?",
    heroAnswer:
      "A Microsoft 365 migration moves email, files, and collaboration data from your current platform — Google Workspace, on-prem Exchange, or another tenant — into Microsoft 365, including mailbox migration, file and SharePoint content transfer, identity setup, and user training. MP365 manages the full project so IT teams aren't running it alongside their day job.",
    intro: [
      "Moving to Microsoft 365 touches every employee's inbox, files, and daily workflow — which is exactly why most internal IT teams don't have the bandwidth to run it as a side project.",
      "MP365 provides a fully managed migration from Google Workspace, legacy on-premises Exchange, or another cloud platform into Microsoft 365, so the transition is planned, tested, and executed with minimal disruption to the business.",
    ],
    sections: [
      {
        heading: "Migration paths we run",
        body: [
          "Google Workspace to Microsoft 365, on-premises Exchange to Exchange Online, hybrid Exchange configurations, and consolidating multiple existing Microsoft 365 tenants into one.",
          "Each path has different failure points — Google-to-365 migrations lose calendar and contact fidelity if mapped incorrectly; on-prem migrations need directory synchronization planned before the first mailbox moves. We scope the plan to the specific source platform.",
        ],
      },
      {
        heading: "What's included",
        body: [
          "Pre-migration assessment and license planning, mailbox and file migration with delta syncs to minimize downtime, SharePoint and Teams provisioning aligned to how your teams actually work, security baseline configuration (MFA, conditional access, data loss prevention), and end-user training so adoption doesn't stall after go-live.",
        ],
      },
    ],
    process: [
      { name: "Assessment", description: "Inventory mailboxes, files, and dependencies on the source platform." },
      { name: "Design", description: "Map source data structures to Microsoft 365 and define the security baseline." },
      { name: "Pilot migration", description: "Migrate a test group to validate the plan before full rollout." },
      { name: "Full migration", description: "Migrate remaining users in scheduled waves with minimal downtime." },
      { name: "Adoption & support", description: "Train users and provide post-migration support to stabilize the environment." },
    ],
    faqs: [
      {
        q: "How much does a Microsoft 365 migration cost?",
        a: "Cost depends primarily on user count, data volume, and source platform complexity — a Google Workspace migration for a 50-person company is a different scope than an on-prem Exchange migration with legacy compliance holds. MP365 provides a fixed-scope quote after a short discovery call rather than a per-mailbox rate card, since hidden complexity (PST files, legal holds, custom mail flow rules) is what actually drives cost overruns.",
      },
      {
        q: "Will employees lose email or files during the migration?",
        a: "No — migrations are designed around delta syncs, meaning data continues syncing up to the moment of cutover, and mailboxes/files are verified against source counts before the old system is decommissioned.",
      },
      {
        q: "How long does it take to migrate from Google Workspace to Microsoft 365?",
        a: "A typical 100–300 user Google Workspace to Microsoft 365 migration takes 4–8 weeks from kickoff to full cutover, including a pilot wave, main migration waves, and a stabilization period.",
      },
      {
        q: "Do we pay for both platforms while the migration is running?",
        a: "Yes, for a period — source and destination licenses overlap from the start of the first migration wave until the old platform is decommissioned, and that overlap is a real budget line most migration quotes leave out. The overlap is shortened by keeping the wave schedule tight and decommissioning on a fixed date rather than leaving the old system running “just in case.”",
      },
      {
        q: "How much downtime is there on cutover day?",
        a: "For a wave-based migration with delta syncs, users are typically offline only for the short window between the final sync and the mail-flow switch, not for the whole cutover. The larger practical disruption is the first working day afterwards, when users re-authenticate, re-add mobile devices, and reconnect desktop clients — which is why cutovers are scheduled for a weekend and support is staffed for the following week.",
      },
      {
        q: "What happens to PST files and archived email?",
        a: "PST files scattered on desktops and file shares are not part of a mailbox migration unless they are found and imported deliberately, and they are one of the most common causes of scope and cost overruns. We inventory PST files, archive mailboxes, and any legal holds during the pre-migration assessment so they are either imported into Exchange Online or explicitly ruled out of scope.",
      },
    ],
    relatedServiceSlugs: ["ma-tenant-migration", "collaboration-enablement"],
  },
  {
    slug: "dynamics-365",
    oldSlugs: ["/services/business-applications/"],
    name: "Dynamics 365 Consulting",
    shortName: "Dynamics 365",
    category: "Business Applications",
    metaTitle: "Dynamics 365 Consulting & Implementation",
    metaDescription:
      "Dynamics 365 CRM and ERP implementation — Sales, Customer Service, Business Central, and Finance & Operations — from a senior Microsoft consulting team.",
    heroQuestion: "What is Dynamics 365 and what does it replace?",
    heroAnswer:
      "Dynamics 365 is Microsoft's suite of CRM and ERP applications — including Sales, Customer Service, Business Central, and Finance & Operations — that companies use to replace disconnected spreadsheets, legacy CRMs like older Salesforce or Goldmine instances, or aging on-prem ERP systems. MP365 implements, customizes, and integrates Dynamics 365 with the rest of a company's Microsoft 365 environment.",
    intro: [
      "Microsoft's Business Applications suite streamlines operations, customer engagement, and decision-making — but only when it's configured around how your business actually sells, services, and reports, not the out-of-the-box defaults.",
      "MP365 implements and customizes Dynamics 365 CRM and ERP modules, integrating them with SharePoint, Power Platform, and the rest of your Microsoft 365 environment rather than treating it as a standalone system.",
    ],
    sections: [
      {
        heading: "Dynamics 365 modules we implement",
        body: [
          "Dynamics 365 Sales and Customer Service for CRM; Business Central for small-to-midsize company ERP and financials; Finance & Operations for larger, multi-entity organizations with complex supply chain or manufacturing needs.",
        ],
      },
      {
        heading: "Dynamics 365 vs Salesforce vs Business Central",
        body: [
          "Dynamics 365 CRM is the stronger fit for organizations already standardized on Microsoft 365, since it shares identity, Outlook, Teams, and Power Platform integration natively — reducing the number of separate systems users have to context-switch between. Salesforce has a larger third-party app ecosystem but requires separate licensing and integration work to connect to Microsoft tools.",
          "Business Central fits small-to-midsize companies needing integrated financials, inventory, and light manufacturing in one system; Finance & Operations fits larger, multi-entity, multi-currency organizations with more complex supply chain requirements.",
        ],
      },
    ],
    process: [
      { name: "Discovery", description: "Map current sales, service, or financial processes and where they break down." },
      { name: "Solution design", description: "Configure the right Dynamics 365 modules and integration points." },
      { name: "Build & customize", description: "Configure entities, workflows, and Power Platform extensions." },
      { name: "Migrate & integrate", description: "Move data from the legacy system and connect Dynamics 365 to Microsoft 365." },
      { name: "Go-live & adoption", description: "Train teams and support the rollout through the first business cycle." },
    ],
    faqs: [
      {
        q: "How much does a Dynamics 365 implementation cost?",
        a: "A focused Dynamics 365 Sales or Customer Service implementation for a mid-market team typically starts in the low-to-mid five figures; Business Central or Finance & Operations implementations with financial and inventory data migration run higher depending on entity count and integration complexity. MP365 scopes a fixed-price quote after discovery rather than billing implementation as open-ended hours.",
      },
      {
        q: "Should we choose Dynamics 365 or Salesforce?",
        a: "If your organization is already standardized on Microsoft 365 and wants CRM natively integrated with Outlook, Teams, and Power Platform, Dynamics 365 typically reduces total integration cost and license sprawl. Salesforce may fit better if you need its specific third-party app ecosystem and aren't primarily a Microsoft shop.",
      },
      {
        q: "Can Dynamics 365 integrate with our existing Power Platform apps?",
        a: "Yes — Dynamics 365 is built on the same Dataverse platform as Power Apps and Power Automate, so custom apps and flows can read and write Dynamics 365 data natively without middleware.",
      },
      {
        q: "How long does a Dynamics 365 implementation take?",
        a: "A focused Dynamics 365 Sales or Customer Service deployment for a single team can go live in roughly 4–6 weeks using a [templated configuration](/solutions/crm-deployment/); a Business Central or Finance & Operations implementation involving financial data migration, multiple entities, and integrations takes substantially longer. The variables that move the number most are entity count, how much historical data has to come across, and how many integrations are in scope.",
      },
      {
        q: "What time commitment do you need from our team?",
        a: "Implementations fail more often from unavailable client-side subject-matter experts than from technical problems. Expect to name a decision-maker who can approve process changes, plus one subject-matter expert per functional area for requirements sessions, testing, and user acceptance — concentrated around discovery and the testing period rather than spread evenly across the project.",
      },
      {
        q: "Can we implement Dynamics 365 in phases?",
        a: "Yes, and for most mid-market organizations it is the lower-risk path — going live with core financials or a single sales team first, then adding modules once the first phase is stable. Phasing works best when the split follows a natural business boundary (one entity, one function, one region); splitting a single process across phases usually creates more integration work than it saves.",
      },
    ],
    relatedServiceSlugs: ["power-platform", "data-governance"],
  },
  {
    slug: "power-platform",
    oldSlugs: ["/services/low-code-solutions/"],
    name: "Power Platform Solutions",
    shortName: "Power Platform",
    category: "Business Applications",
    metaTitle: "Power Platform Consulting — Power Apps & Power Automate",
    metaDescription:
      "Low-code Power Apps, Power Automate, and Power BI solutions built and governed by MP365 — rapid app development without the technical debt of shadow IT.",
    heroQuestion: "What is Microsoft Power Platform used for?",
    heroAnswer:
      "Microsoft Power Platform — Power Apps, Power Automate, Power BI, and Copilot Studio — is used to build custom business apps, automate approval and data workflows, and create reporting dashboards without traditional custom-code development. MP365 builds Power Platform solutions and puts governance around them so low-code apps don't turn into unmanaged shadow IT.",
    intro: [
      "Power Platform lets teams build apps and automations quickly — the risk is that \"quickly\" without governance becomes dozens of ungoverned apps nobody in IT knows exist. MP365 builds the apps and puts the environment strategy, data loss prevention policies, and application lifecycle management around them from day one.",
    ],
    sections: [
      {
        heading: "What we build",
        body: [
          "Custom Power Apps for field operations, inventory, and approval workflows; Power Automate flows that eliminate manual, email-based processes; Power BI dashboards connected to Dynamics 365, SharePoint, or SQL data sources; and Copilot Studio agents for internal support and FAQ automation.",
        ],
      },
      {
        heading: "Governance, not just apps",
        body: [
          "We set up environment strategy (dev/test/prod separation), data loss prevention policies, and an application lifecycle management process so citizen-developed apps get reviewed before they touch production data — turning Power Platform from a compliance risk into a managed capability.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Power Apps a replacement for custom software development?",
        a: "For internal line-of-business apps — approval workflows, inventory trackers, field data collection — Power Apps typically replaces the need for custom development and ships in weeks instead of months. For customer-facing products or apps needing complex custom logic outside Dataverse's data model, traditional development is usually still the better fit.",
      },
      {
        q: "What is shadow IT risk in Power Platform, and how is it prevented?",
        a: "Shadow IT risk happens when employees build Power Apps or Power Automate flows connected to sensitive data without IT review or data loss prevention policies in place. It's prevented with an environment strategy that separates dev/test/prod, [DLP policies](/resources/glossary/data-loss-prevention-dlp/) that block risky connector combinations, and a lightweight review process for apps before they go into production use.",
      },
      {
        q: "Do we need premium Power Platform licenses?",
        a: "You need a premium license when an app or flow uses a premium connector — including [Dataverse](/resources/glossary/dataverse/), Azure SQL, and the on-premises data gateway — while apps built only on Microsoft 365 data such as SharePoint lists and Outlook are covered by standard Microsoft 365 licensing. Because premium licensing is per user or per app, the licensing model should be decided during design, not after the app is built. See [Power Platform licensing, explained without the matrix](/blog/power-platform-licensing-explained/) for the full picture.",
      },
      {
        q: "Can Power Apps connect to on-premises SQL and legacy systems?",
        a: "Yes — the on-premises data gateway lets Power Apps and Power Automate read and write to on-premises SQL Server and other supported sources without moving the data to the cloud. It requires a premium license and a gateway server that IT maintains, so it is worth confirming both before designing an app around an on-premises data source.",
      },
      {
        q: "What happens to apps built by employees who have left?",
        a: "Apps and flows owned by a departed employee keep running until their account or license is removed, at which point they can fail silently — a common cause of “the approval process just stopped working.” Preventing it is a governance task: co-owning business-critical apps with a service account or group, keeping an inventory of what exists, and reviewing ownership as part of the leaver process. A [Power Platform health check](/assessments/power-platform-health-check/) surfaces the apps already at risk.",
      },
    ],
    relatedServiceSlugs: ["dynamics-365", "application-modernization"],
  },
  {
    slug: "data-governance",
    // Slug is unchanged from the original WordPress URL — no redirect needed.
    oldSlugs: [],
    name: "Data Governance",
    shortName: "Data Governance",
    category: "Governance",
    metaTitle: "Microsoft 365 Data Governance Services",
    metaDescription:
      "Structured data governance for Microsoft 365 and Microsoft Purview — retention, classification, and access policies that keep data trustworthy and secure.",
    heroQuestion: "What is data governance in Microsoft 365?",
    heroAnswer:
      "Data governance in Microsoft 365 is the set of policies and tools — retention labels, sensitivity labels, access controls, and Microsoft Purview configuration — that ensure company data is accurate, secure, and retained (or deleted) according to legal and business requirements. MP365 designs and implements these policies so growth and M&A activity don't outpace data control.",
    intro: [
      "Data governance is the systematic management of data assets within an organization — the processes, policies, standards, and tools that ensure data integrity, accuracy, security, and usability. Without it, every merger, audit, or legal hold becomes a scramble.",
    ],
    sections: [
      {
        heading: "What we implement",
        body: [
          "Microsoft Purview configuration for data classification and sensitivity labeling, retention and deletion policies aligned to legal and regulatory requirements, access governance (least-privilege permissions, guest access review), and eDiscovery readiness for litigation holds.",
        ],
      },
      {
        heading: "Why it matters most during M&A",
        body: [
          "Data governance gaps surface fastest during a merger or acquisition, when two companies' retention policies, permission structures, and compliance obligations suddenly have to reconcile. We build governance frameworks that hold up under that kind of stress test, not just a compliance checkbox.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Microsoft Purview used for?",
        a: "Microsoft Purview is Microsoft's unified data governance platform, used to classify and label sensitive data, apply retention and deletion policies, manage compliance risk, and support eDiscovery across Microsoft 365, Azure, and other connected data sources.",
      },
      {
        q: "Do we need data governance before an M&A tenant migration?",
        a: "Yes — data governance gaps (missing retention policies, undocumented sensitive data, unclear ownership) should be identified during due diligence, before [migration](/services/ma-tenant-migration/) begins, since they directly affect what can legally be migrated, retained, or must be held separately.",
      },
      {
        q: "Do we still need Microsoft Purview if we already have Microsoft 365 E5?",
        a: "E5 includes the Purview capabilities most organizations need — sensitivity labels, retention policies, data loss prevention, eDiscovery, and insider risk management — so the question is usually not whether to buy Purview but whether the capabilities you already own have been configured. In most environments the licenses are in place and the policies are not, which is where the actual governance gap sits.",
      },
      {
        q: "What's the difference between retention labels and sensitivity labels?",
        a: "Retention labels control how long content is kept and what happens when that period ends — they answer “when can this be deleted?” Sensitivity labels control who can open content and what they can do with it, applying encryption and access restrictions that travel with the file. Most organizations need both, and they are configured independently of each other.",
      },
      {
        q: "Where do we start if we have no data governance policies today?",
        a: "Start by finding out what you actually have — where sensitive data lives, which sites and mailboxes have no clear owner, and what your legal and regulatory retention obligations really are. Policy design before that discovery tends to produce rules nobody can enforce; classification and ownership come first, retention and access controls second.",
      },
    ],
    relatedServiceSlugs: ["ma-tenant-migration", "contract-management"],
  },
  {
    slug: "application-modernization",
    // Slug is unchanged; only the "-2" duplicate WP page needs a redirect.
    oldSlugs: ["/services/application-modernization-2/"],
    name: "Application Modernization",
    shortName: "App Modernization",
    category: "Modernization",
    metaTitle: "Azure Application Modernization Services",
    metaDescription:
      "Modernize legacy applications with Azure cloud infrastructure and agile DevOps practices — improving scalability, security, and delivery speed.",
    heroQuestion: "What does application modernization mean on Azure?",
    heroAnswer:
      "Application modernization on Azure means re-architecting or migrating legacy, on-premises applications onto Azure cloud infrastructure using agile DevOps practices — improving scalability, security, and how fast new features ship. MP365 evaluates legacy applications and executes the modernization path that fits, from lift-and-shift to full re-architecture.",
    intro: [
      "Legacy applications built for on-premises infrastructure become a growth constraint — every new feature takes longer, every scaling event is a fire drill. MP365 leverages AI and cloud-based technology through Azure to help deliver modern, agile solutions without a full rebuild-from-scratch risk.",
    ],
    sections: [
      {
        heading: "Modernization paths",
        body: [
          "Lift-and-shift for applications that just need to leave aging on-prem hardware, containerization for apps that need better scalability without a full rewrite, and re-architecture for applications where the underlying design is the actual constraint.",
        ],
      },
      {
        heading: "DevOps and delivery",
        body: [
          "We set up CI/CD pipelines, infrastructure as code, and monitoring so that after modernization, shipping changes is a routine deployment rather than a scheduled outage.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between lift-and-shift and re-architecture?",
        a: "Lift-and-shift moves an application to Azure with minimal code changes — fastest and lowest risk, but doesn't fix underlying scalability or maintainability problems. Re-architecture redesigns the application to use cloud-native services (containers, managed databases, serverless functions) — more effort upfront, but removes the constraints that lift-and-shift leaves in place.",
      },
    ],
    relatedServiceSlugs: ["power-platform", "data-governance"],
  },
  {
    slug: "collaboration-enablement",
    // Slug is unchanged from the original WordPress URL — no redirect needed.
    oldSlugs: [],
    name: "Collaboration Enablement",
    shortName: "Collaboration",
    category: "Modernization",
    metaTitle: "Microsoft 365 Collaboration Enablement Services",
    metaDescription:
      "Modernize SharePoint, Teams, and search so employees can find information and work together — collaboration enablement from MP365.",
    heroQuestion: "What is collaboration enablement in Microsoft 365?",
    heroAnswer:
      "Collaboration enablement is the practice of restructuring SharePoint sites, Teams, and enterprise search so employees can actually find information and communicate effectively, instead of working around a sprawling, undocumented intranet. MP365 audits and rebuilds the information architecture behind search, Teams sites, and SharePoint.",
    intro: [
      "Most companies don't have a Microsoft 365 collaboration problem — they have an information architecture problem that Microsoft 365 makes visible. MP365 helps maximize search, communication, and Team sites so employees get a more modern experience and can actually find what they need.",
    ],
    sections: [
      {
        heading: "What we fix",
        body: [
          "Sprawling, duplicate SharePoint sites with no clear ownership; Teams created for every project and never archived; enterprise search that returns noise instead of the right document; and onboarding that leaves new hires unable to find basic company information.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why can't employees find documents in SharePoint search?",
        a: "Poor SharePoint search results are usually caused by inconsistent metadata, duplicate or orphaned sites, and unclear information architecture — not a limitation of the search engine itself. Fixing search means fixing site structure and metadata first.",
      },
      {
        q: "Will Microsoft 365 Copilot work better if we fix SharePoint first?",
        a: "Yes — Copilot answers from the content a user already has permission to see, so duplicate documents, stale sites, and over-broad permissions directly degrade the quality of its answers and can surface content to people who should not see it. Cleaning up information architecture and permissions is the practical prerequisite to a Copilot rollout, not an optional follow-up.",
      },
      {
        q: "How do you clean up SharePoint sprawl without deleting content people still use?",
        a: "By measuring before deleting: identifying sites with no activity and no owner, confirming ownership with the business, and archiving rather than deleting anything uncertain. The usual sequence is to inventory and classify sites, agree a retention decision per site with its owner, archive the inactive ones, and only then restructure what remains — so nothing disappears without someone having signed off on it.",
      },
      {
        q: "Should every project get its own Teams site?",
        a: "No — creating a team per project is the single most common cause of sprawl, because projects end and the teams don't. A workable rule is that a team is created for a group of people who work together repeatedly, while short-lived projects get a channel inside an existing team, with an owner and an expiry decision recorded when it is created.",
      },
    ],
    relatedServiceSlugs: ["data-governance", "microsoft-365-migration"],
  },
  {
    slug: "contract-management",
    oldSlugs: ["/contract-management-enablement/", "/services/contract-management-enablement/"],
    name: "Contract Management Enablement",
    shortName: "Contract Management",
    category: "Governance",
    metaTitle: "Contract Management Enablement",
    metaDescription:
      "Replace email-based, manual contract tracking with a governed workflow inside Microsoft 365 — instant visibility into contract status at every stage.",
    heroQuestion: "How do you automate contract management in Microsoft 365?",
    heroAnswer:
      "Contract management is automated in Microsoft 365 by replacing email-based, manual contract handoffs with a structured Power Automate workflow and SharePoint or Dynamics 365 repository — giving every stakeholder instant, accurate visibility into a contract's stage instead of chasing status by email. MP365 designs and builds these workflows around how contracts actually move through your organization.",
    intro: [
      "Contracts handled by email and moved manually between stages waste time on status-chasing with no instant, accurate visibility into where anything stands. MP365 replaces that with a governed, automated workflow inside Microsoft 365.",
    ],
    sections: [
      {
        heading: "What we build",
        body: [
          "A structured contract repository (SharePoint or Dynamics 365), automated routing and approval workflows in Power Automate, status dashboards so stakeholders don't need to ask, and renewal/expiration alerts so contracts don't lapse silently.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can contract management be automated without buying a separate CLM platform?",
        a: "Yes — for many mid-market organizations, a well-designed SharePoint or Dynamics 365 repository combined with Power Automate workflows delivers most of the visibility and automation of a dedicated contract lifecycle management (CLM) platform, without the added license cost and integration overhead.",
      },
      {
        q: "Should contracts live in SharePoint or Dynamics 365?",
        a: "SharePoint is the better repository when contracts are documents that need version control, metadata, and retention; Dynamics 365 is the better home when contract records need to be tied to customer, opportunity, or vendor records that already live in CRM. Most implementations use both — the document in SharePoint, the record and its status in Dynamics 365 — rather than choosing one.",
      },
      {
        q: "Does an automated contract workflow support e-signature?",
        a: "Yes — Power Automate connects to major e-signature platforms, so a signature request can be triggered by an approval step and the executed document filed back into the repository automatically. Which platform you use matters less than making the signature step part of the workflow rather than a manual handoff that breaks the audit trail.",
      },
    ],
    relatedServiceSlugs: ["data-governance", "dynamics-365"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

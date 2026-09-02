import type { CaseStudy } from "./case-studies";

/**
 * Worked examples: illustrative scenarios attributed to no client.
 *
 * These exist because the real case studies in ./case-studies.ts are still
 * awaiting client approval, and a prospect still needs to see how a project
 * of their shape actually unfolds. The rules that keep them honest:
 *
 *   - `kind: "WORKED_EXAMPLE"` — rendered only under /resources/worked-examples/
 *     with a permanent notice, never in the /case-studies/ listing.
 *   - No client, no invented organization name, no logo, no quote.
 *   - No outcome figures. The "result" section describes the STATE the
 *     organization ends up in, not a percentage it achieved.
 *   - Every duration is one the site already publishes on a service or
 *     migration page. Every platform fact is one already verified there.
 *   - lib/worked-examples.test.ts enforces the above.
 */
export const workedExamples: CaseStudy[] = [
  {
    slug: "tenant-merger-with-a-tsa-deadline",
    kind: "WORKED_EXAMPLE",
    client: "A 600-mailbox acquisition with a TSA deadline",
    industry: "M&A / Microsoft 365",
    serviceSlug: "ma-tenant-migration",
    imageUrl: "/images/services/ma-tenant-migration.jpg",
    published: true,
    metaTitle: "Worked Example: Tenant Merger With a TSA Deadline",
    metaDescription:
      "How a Microsoft 365 tenant merger unfolds when an acquired 600-mailbox business unit has to leave the seller's systems before a transition services agreement expires.",
    summary:
      "An illustrative scenario: a mid-market company acquires a 600-person business unit from a larger seller. The unit's mailboxes, Teams, SharePoint and a handful of Power Apps sit in the seller's tenant, and a transition services agreement gives everyone a fixed number of months to get out. This is what the work looks like, decision by decision.",
    problem: [
      "The acquired unit has never had its own Microsoft 365 tenant. Its 600 users, their mailboxes, their Teams and about forty SharePoint sites live inside the seller's much larger tenant, alongside three Power Automate flows and two Power Apps that the unit's operations team built and depends on. The seller's IT department has agreed to keep the lights on under a [transition services agreement](/resources/glossary/tsa-exit/), and that agreement has an end date.",
      "The buyer's own tenant is healthy but small. Its licensing is on a CSP agreement; the seller's is on an Enterprise Agreement. Nobody has yet reconciled which licences move, which are re-bought, and which of the seller's SKUs the buyer does not need. The unit's phone numbers ride on Teams Voice in the seller's tenant, and the sales team's Teams chat history is, in their words, the CRM.",
      "The clock is the real constraint. Data cannot move before the deal closes, because the buyer has no legal right to it until then. Once it closes, both companies have to work together immediately, and the migration has to be complete, verified and the seller's access removed before the [TSA exit](/resources/glossary/tsa-exit/) date. Miss it and the buyer is paying the seller month-to-month for a service the seller wants to stop providing.",
    ],
    approach: [
      "The plan is built backward from two dates, not forward from a migration checklist. The TSA exit date sets the end. The close date sets the earliest moment data can move. Everything else is arranged to fit between them, which is why identity, licensing and coexistence design all happen in the pre-close window while data movement is still legally off the table.",
      "Pre-close, both tenants are inventoried: licence SKUs and agreements on each side, mailbox and site volumes, the Power Platform assets in scope, and the Teams Voice configuration. The licence reconciliation lands early on purpose. It decides whether the buyer's CSP agreement can absorb 600 more users at the tiers they actually need, and it surfaces the SKUs the seller had assigned that the buyer would otherwise re-buy without noticing.",
      "[Day-1 coexistence](/resources/glossary/day-1-coexistence/) is designed before any mailbox moves: mail flow between the two tenants, calendar free/busy, and directory synchronization so that on the first morning after close a buyer employee can find and email an acquired colleague without knowing which tenant they are in. Coexistence is what buys time for the waves; without it, every day between close and cutover is a day the combined company cannot function as one.",
      "Migration runs in waves by business unit rather than in a single cutover, and every wave has a tested rollback path defined before it runs. A pilot wave of one department goes first, which is where the surprises surface at small scale: a shared mailbox nobody documented, a Power App whose connection authenticates against the seller's tenant and has to be re-created rather than moved, a distribution group that spans both companies. Mailboxes, OneDrive and Teams chat move with delta syncs so users keep working up to their wave's cutover. Teams chat migrates through cross-tenant tooling with the known limitations on channel conversations and some metadata, and those limitations are set as expectations with the sales team before the wave, not discovered after it.",
      "Two things most plans skip get their own workstream here. Teams Voice numbers do not move with the tenant: porting or direct-routing reconfiguration is sequenced as part of cutover so phones keep ringing on the day. And the Power Automate flows and Power Apps are exported, re-imported into the buyer's tenant, reconnected to their data sources and re-owned, because connections belong to the tenant they were built in. Both are inventoried during due diligence so they are scoped rather than discovered.",
      "Cutover itself is DNS and MX for the acquired domain, then decommissioning the unit's presence in the seller's tenant on the agreed date, then a stabilization period of monitoring and support before the seller's administrative access is finally removed. The [governance](/services/data-governance/) questions, chiefly which retention policies and legal holds apply to the moved content, are settled during due diligence, because they decide what can legally move at all.",
    ],
    result: [
      "At the end of this scenario the acquired unit lives entirely in the buyer's tenant: 600 mailboxes, their OneDrive content, the forty SharePoint sites, the Teams and their chat history within the documented limits, and the five Power Platform assets rebuilt and re-owned. The seller's tenant no longer holds anything of the unit's, and the seller's administrative access is gone before the TSA expires.",
      "The combined company has one directory, one mail domain configuration, and a licence estate that was reconciled rather than duplicated, on a single CSP agreement the buyer already administers. Phones kept ringing through cutover because voice was treated as part of the migration rather than an afterthought.",
      "On timing, the site's [M&A tenant migration](/services/ma-tenant-migration/) page gives the ranges this scenario would fall inside: a single-department pilot typically runs two to four weeks, and a full merger of this shape eight to sixteen weeks, with the TSA exit date rather than a fixed duration governing the schedule. Where a real engagement lands inside those ranges depends on data volume, how many Power Platform and Dynamics assets are in scope, and how much of the coexistence design can be completed before close. Cost drivers are set out on [tenant migration cost](/pricing/tenant-migration-cost/), and a fixed-scope [tenant migration assessment](/assessments/tenant-migration/) is how this kind of project usually starts.",
    ],
    metrics: [],
  },
  {
    slug: "gp-to-business-central-three-plant-manufacturer",
    kind: "WORKED_EXAMPLE",
    client: "Three plants on Dynamics GP 2016, one Business Central environment",
    industry: "Manufacturing",
    serviceSlug: "dynamics-365",
    imageUrl: "/images/migrations/dynamics-gp-to-business-central.jpg",
    published: true,
    metaTitle: "Worked Example: GP to Business Central, Three Plants",
    metaDescription:
      "How a three-plant manufacturer moves off unsupported Dynamics GP 2016 to Business Central: what transfers, the Premium licence decision, and where planning bites.",
    summary:
      "An illustrative scenario: a discrete manufacturer with three plants and two legal entities is running Dynamics GP 2016, whose extended support ended in July 2026. Finance wants a modern ledger and consolidation. The plants want a schedule they can run. This is how those two demands get reconciled on Business Central.",
    problem: [
      "The company runs three plants across two legal entities on Dynamics GP 2016, plus a third-party manufacturing add-on and a decade of customizations nobody fully documented. GP 2016 and 2016 R2 extended support ended on 14 July 2026, so the system is unpatched. The cyber-insurance renewal questionnaire asked about it, and a large customer's security audit asked about it in the same month. The board wants a plan.",
      "The requirements document that reached the partner reads like a finance project: close days, intercompany eliminations that are still hand-keyed every period, a margin number the controller can defend. The plant managers read it and note that nobody has asked whether the new system's production schedule will be executable, because GP's schedule never was and the planners rebuild it in a spreadsheet every Monday.",
      "Shop-floor data collection is paper travellers re-keyed by a supervisor at end of shift, so work-in-progress and component inventory read wrong for most of every day. Standard costs were last reviewed two years ago. And the IT team is two people, who need to know who will own the integrations after the consultants leave.",
    ],
    approach: [
      "The first decision is not which module to configure but which product the production actually fits. Production here is discrete: bills of material and routings, no recipes, no co-products or by-products. That rules in [Business Central](/dynamics-365/business-central/) and rules out paying roughly double per user for [Supply Chain Management](/dynamics-365/supply-chain/) on the theory of growing into it. The [comparison page](/compare/business-central-vs-finance-operations/) sets out the line; this company sits clearly on the Business Central side of it.",
      "The second decision is licence architecture, made before configuration because it cannot be undone cheaply afterwards. Manufacturing in Business Central is switched on per company through the Experience setting, and Microsoft's rule is asymmetric: a Premium user can open an Essentials company, but an Essentials user cannot open a Premium company at all. So the two legal entities are mapped against who needs to open which company. The manufacturing entity becomes a Premium company. The holding entity, which only finance touches, stays on Essentials. Every AP clerk and controller who has to open the manufacturing company is counted as a Premium seat, and that count goes into the budget before anyone is surprised by it.",
      "Migration follows the sequence on the [GP to Business Central migration guide](/migrations/dynamics-gp-to-business-central/). The customization and ISV inventory comes first, because the data migration is the easy part: every GP modification is catalogued and given a fate, whether a native Business Central feature, an extension, a Power App, or retirement. The manufacturing add-on is evaluated against Business Central's native production BOMs, routings, machine centres and what Microsoft names basic capacity and supply planning, and only the genuine gaps go looking for an extension.",
      "Native planning gets one specific, early conversation. Business Central plans against infinite capacity by default; work and machine centre capacity is ignored unless a centre is marked capacity-constrained, and once it is, Microsoft documents that operations on it are planned serially. That is enough for two of the three plants. The third, with a genuine bottleneck work centre and parallel identical machines, needs a proven advanced planning and scheduling extension rather than bespoke scheduling code, because the extension vendor maintains compatibility across Business Central's twice-yearly updates and bespoke code becomes the system no future partner will touch.",
      "Data moves in a defined shape: chart of accounts, item and vendor and customer masters, open transactions and opening balances. Full transactional history is archived rather than migrated, with GP kept readable for audit access. A pilot company validates the mappings, then both entities run a parallel close, GP and Business Central side by side for one period, so that the financial results are shown to match before anyone is asked to trust the new number.",
      "Shop-floor capture is scoped as a [Power Apps](/services/power-platform/) build on tablets at the work centres, writing output and consumption postings into Business Central, replacing the paper travellers. It is licensed and designed as part of the same project rather than bolted on later, and ownership of it, along with the planning extension, is written down and handed to the two-person IT team with the documentation they will need on the first update after go-live.",
    ],
    result: [
      "At the end of this scenario both legal entities run in a single Business Central environment: the manufacturing entity as a Premium company with native production and a maintained scheduling extension on its bottleneck plant, the holding entity on Essentials, and intercompany consolidation posting automatically instead of being hand-keyed each period. Output and consumption post from the floor as they happen, so inventory and work-in-progress read correctly during the shift rather than after it.",
      "GP has been decommissioned from production use and retained read-only for audit. The customization inventory is a closed document: every modification either exists in the new system as a native feature, an extension or a Power App, or was consciously retired. The cyber-insurance and customer-audit questions now have a supported answer.",
      "On timing, the [migration guide](/migrations/dynamics-gp-to-business-central/) gives the ranges this scenario would fall inside: a single-entity GP migration with standard modules typically eight to fourteen weeks, and a multi-entity organization with significant customizations four to six months. This company is on the multi-entity side. What moves it within that range is the size of the customization inventory and how much of the shop-floor build is delivered in the same phase. Budget drivers are on [Business Central implementation cost](/pricing/business-central-implementation-cost/), and the [Business Central readiness assessment](/assessments/business-central-readiness/) is where the customization inventory and licence mapping are normally produced before anyone commits.",
    ],
    metrics: [],
  },
  {
    slug: "physician-group-phi-in-teams-and-sharepoint",
    kind: "WORKED_EXAMPLE",
    client: "A physician group with PHI in Teams and no retention policy",
    industry: "Healthcare",
    serviceSlug: "data-governance",
    imageUrl: "/images/industries/healthcare.jpg",
    published: true,
    metaTitle: "Worked Example: PHI in Teams and SharePoint",
    metaDescription:
      "How a physician group gets Microsoft 365 from HIPAA-eligible to HIPAA-configured: PHI discovery, sensitivity and retention labels, Teams DLP, eDiscovery and Copilot.",
    summary:
      "An illustrative scenario: a physician group across several sites has held a Microsoft Business Associate Agreement for years and assumed that settled compliance. Protected health information turns out to be in Teams chat, in SharePoint sites nobody owns, and in shared mailboxes, with no retention policy anywhere. This is how it gets configured rather than assumed.",
    problem: [
      "The group's EHR holds the chart. Everything around the chart does not live there: referral coordination, prior authorization packets, credentialing files, payer correspondence, incident reports. That second estate lives in Microsoft 365, and it grew without a plan. Clinical staff coordinate in Teams chat because it is fast. Practice administrators keep patient correspondence in shared mailboxes. Several SharePoint sites were created for projects that ended and never had an owner assigned.",
      "The group signed Microsoft's Business Associate Agreement when it moved to Microsoft 365, and leadership has treated that as the compliance answer since. It is not. The agreement makes the platform eligible to hold PHI; whether the environment is actually compliant depends on how access, retention, data loss prevention and audit are configured, and none of them have been. There is no retention policy on Teams messages or mail, no sensitivity labelling, no data loss prevention rule that knows what a medical record number looks like, and guest access is open by default.",
      "Two events forced the question. A records request required locating every message and file about one patient across Teams and mail, and nobody could say with confidence where to look. And the group has started evaluating Microsoft 365 Copilot, which answers from everything a user is permitted to see, which in this environment is far more than anyone intended.",
    ],
    approach: [
      "Discovery comes before policy, because policies written against an imagined estate produce rules nobody can enforce. The first phase maps where PHI actually is: which SharePoint sites and Teams contain it, which shared mailboxes, which sites have no owner, and where permissions are broad enough that a Copilot prompt would surface a clinical conversation to someone in billing. This is also where the licensing question is answered honestly, because the controls the group needs come with specific tiers and the group has to know what it already owns before buying anything.",
      "Retention and sensitivity are configured as two separate things, because they do two separate jobs. [Retention labels](/resources/glossary/retention-policy/) and policies answer how long content is kept and when it may be deleted, applied to Teams chat and channel messages, mail and SharePoint against the group's legal and state retention obligations, with adaptive scopes so that sites in different states can carry different periods. [Sensitivity labels](/resources/glossary/sensitivity-label/) answer who can open content and what they can do with it, and are applied to the containers holding PHI to control guest access, external sharing and access from unmanaged devices. Container labels do not label the files inside them, so file-level labelling is enabled separately rather than assumed.",
      "[Data loss prevention](/resources/glossary/data-loss-prevention-dlp/) for Teams chat and channel messages is where licensing bites. It requires Office 365 E5, Microsoft 365 E5, or the E5 or F5 compliance add-ons; the E3 licences most of the staff hold do not include it. So the DLP design covers what the group's licences actually permit, and the gap is presented as a licensing decision with a cost attached, not hidden inside a configuration that silently does nothing for half the users.",
      "Teams is configured for clinical use rather than merely permitted for it: retention on chat and meetings, DLP where licensed, guest access restricted to named external collaborators, and device policies for staff reading messages on personal phones. The eDiscovery configuration that would have answered the records request is set up and tested against a real search, so the next request is a procedure rather than a scramble. [Microsoft Purview](/resources/glossary/microsoft-purview/) is the console for all of it, and the group already owned most of what it needed there without knowing it.",
      "Copilot is treated as the reason to fix permissions rather than a project to defer. Over-broad site permissions are corrected, unowned sites are given owners or archived, and the discovery findings are used to decide which sites should be excluded from Copilot and search until access has been reviewed. Only then is a Copilot pilot scoped, because Copilot in an unreviewed tenant is a very efficient way to surface PHI to the wrong people.",
      "Everything lands with an owner. Each site and Team has a named owner and a review date. The retention and labelling decisions are recorded with the reasoning, so that when a state retention period changes or an auditor asks why a label exists, the answer is written down rather than reconstructed. The [collaboration](/services/collaboration-enablement/) structure and the [governance](/services/data-governance/) configuration are delivered together, because a clean information architecture is what makes the governance rules enforceable.",
    ],
    result: [
      "At the end of this scenario the group can say where its PHI is, and prove it. Teams, mail and SharePoint content carrying PHI is retained for the period the group's obligations require and deleted when that period ends, rather than kept forever or lost at random. Containers holding PHI are labelled so that guest access, external sharing and unmanaged-device access are controlled by policy rather than by whoever created the site.",
      "A records request is now a documented eDiscovery procedure with a tested search, not a manual hunt across three systems. Data loss prevention covers Teams for the licences that permit it, and the remaining gap is a decision leadership has made consciously with a price on it. Every site and Team has an owner and a review date, and the ones nobody could account for have been archived.",
      "The Business Associate Agreement now sits on top of an environment configured to honour it. Copilot can be piloted because the permissions it would inherit have been reviewed. The site publishes no duration for this kind of engagement, because it depends almost entirely on how much PHI discovery finds and how many sites have to be re-owned, so this example does not invent one. It typically starts with the discovery phase scoped on its own, and the [healthcare](/industries/healthcare/) page sets out the decisions in more depth.",
    ],
    metrics: [],
  },
];

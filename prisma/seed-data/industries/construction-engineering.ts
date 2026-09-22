import type { Industry } from "../industries";

export const industry: Industry = {
  slug: "construction-engineering",
  oldSlugs: [],
  name: "Construction & Engineering",
  metaTitle: "Business Central for Construction: Honest ERP Fit",
  metaDescription:
    "When Business Central Projects fits a contractor, when Project Operations or a construction ERP is the honest answer, and where Procore, SharePoint and Power Apps fit.",
  heroQuestion:
    "Should a contractor or engineering firm run job costing in Business Central, Project Operations, or a construction-specific ERP?",
  heroAnswer:
    "It depends on how you bill and how you pay people. Business Central Projects handles project tasks, budgets against actuals and five WIP methods well, and suits engineering firms and specialty contractors billing on time and materials or milestones. It has no native AIA pay applications, retainage or US payroll. A union, prevailing-wage general contractor usually needs extensions or a construction-native ERP instead.",
  intro: [
    "Most contractors arrive at this question from one of two directions. Either QuickBooks or Sage 100 has stopped producing a job cost report anyone trusts, or the firm acquired another contractor and now runs two accounting systems, two tenants and two ways of calling a cost code. In both cases the brief is written as an ERP selection, and the question underneath it is narrower: which of your billing and payroll obligations does the software have to carry natively, and which can live in an extension or a neighbouring system.",
    "That distinction is where most construction ERP advice goes wrong. Partners with a Microsoft practice tend to answer Business Central for everyone; construction-only resellers tend to answer their own platform for everyone. A mechanical subcontractor billing AIA pay applications with retainage on a certified-payroll public job and a 60-person civil engineering consultancy billing hourly against fee budgets have almost nothing in common operationally, and the right answer differs.",
    "MP365 is a Microsoft consulting firm in Vernon, Connecticut, doing project-based [Dynamics 365](/services/dynamics-365/), [Power Platform](/services/power-platform/) and [M and A tenant migration](/services/ma-tenant-migration/) work for mid-market organizations in Connecticut, New England and across the US. We do not resell a construction ERP, which is the point of this page: it covers what Business Central actually does for project-based firms, where it stops, when Project Operations or a construction-native system is the honest recommendation, and how the Microsoft 365 side of a jobsite should be governed regardless of which ERP wins."
  ],
  challenges: [
    "Job cost reports that close three weeks after month-end because costs arrive from field paperwork, subcontractor invoices and a separate payroll service",
    "Pay applications built in Excel from the schedule of values, with retainage tracked on a separate sheet nobody reconciles to the ledger",
    "Over and under billings calculated by hand for the bonding company and the bank, and argued about every quarter",
    "Owners, architects and subcontractors given access to project folders through anonymous links that never expire",
    "Daily logs and safety inspections on paper or in three different apps, none of which post to job cost",
    "An acquired contractor on its own accounting system, cost code structure and Microsoft tenant, with a deal deadline to consolidate",
    "Procore or Autodesk Construction Cloud holding commitments and change orders that never reconcile to the ERP"
  ],
  blocks: [
    {
      type: "prose",
      heading: "What Business Central Projects does, and where it stops",
      paragraphs: [
        "Microsoft renamed Jobs to Projects in Business Central in 2023 release wave 2, so job tasks, job journals and job planning lines became project tasks, project journals and project planning lines. Only captions and documentation changed; the underlying table and field names did not, which matters for anyone reading older integration code. The core model is sound for project accounting. A project carries a task structure with posting, heading and total lines, planning lines typed as Budget, Billable, or Both Budget and Billable, resource and item usage posted through project journals, time sheets tied to project tasks, and purchases posted directly against a project and task.",
        "[Business Central](/dynamics-365/business-central/) ships five WIP methods out of the box, named by Microsoft as Cost Value, Cost of Sales, Sales Value, Percentage of Completion and Completed Contract, and lets you build custom ones by combining Recognized Cost and Recognized Sales rules. Percentage of Completion recognises sales as Billable multiplied by actual cost over budgeted cost, which is the cost-to-cost method most contractors already use, and Microsoft notes that it only works if Billable and Budget totals are entered correctly for the whole project. That caveat is the whole implementation: if estimators do not load the budget into planning lines, WIP is fiction.",
        "Where it stops is equally specific. Standard Business Central invoices projects from planning lines, either when work completes or on an invoicing schedule. It has no AIA G702 Application and Certificate for Payment or G703 Continuation Sheet, no retainage receivable or payable, no subcontractor compliance tracking for insurance certificates and lien waivers, and no US payroll at all: Microsoft's own payroll story is importing journal entries from a provider through the pre-installed Ceridian or QuickBooks payroll file import extensions. Certified payroll on prevailing-wage work and multi-union fringe calculation therefore live either in a construction extension from AppSource or in a separate payroll system."
      ]
    },
    {
      type: "table",
      heading: "Which platform fits which kind of firm",
      headers: ["Firm profile", "Usually the right fit", "What to check before you commit"],
      rows: [
        [
          "Engineering, architecture or consulting firm billing hourly or against fee budgets",
          "Business Central Projects with time sheets and resource pricing. Payroll stays with a payroll provider and posts in as a journal.",
          "Whether project managers need resource scheduling across a large bench. If they do, that points towards Project Operations rather than a bolt-on."
        ],
        [
          "Specialty or MEP subcontractor, private work, some AIA billing",
          "Business Central plus a construction extension for pay applications, retainage and subcontractor compliance.",
          "Who maintains the extension through twice-yearly Business Central major updates, and whether its retainage postings reconcile to your WIP method."
        ],
        [
          "Larger project-based firm with a big billable bench and complex revenue recognition",
          "[Project Operations](/compare/business-central-vs-finance-operations/) integrated with Finance, which adds unified resource management, subcontracting, customer-facing invoicing and revenue recognition for projects.",
          "Microsoft states there is no supported data migration between Project Operations deployment types, so the deployment choice is made once."
        ],
        [
          "Self-performing general contractor or heavy civil firm with union crews, prevailing wage and equipment costing",
          "A construction-native ERP such as Viewpoint Vista, Sage 300 CRE or Foundation, with Microsoft 365 and Power Platform around it.",
          "Whether the Microsoft case rests on anything beyond familiarity. If payroll is the hard part, the ERP that carries payroll natively usually wins."
        ],
        [
          "Group of acquired contractors on different systems",
          "A deliberate target: one ERP where operations are genuinely alike, consolidation from separate systems where they are not.",
          "Business Central consolidation accepts business units on different charts of accounts and even other accounting software, so a single ERP is not a prerequisite for a single close."
        ]
      ]
    },
    {
      type: "steps",
      heading: "How the work sequences",
      steps: [
        {
          name: "Billing and payroll inventory",
          description:
            "List every way the firm bills (time and materials, fixed fee, milestone, AIA pay application, unit price) and every way it pays field labour (open shop, union locals, prevailing wage). This one page decides the platform more reliably than any demo, and it is where a [Business Central readiness assessment](/assessments/business-central-readiness/) starts for project-based firms."
        },
        {
          name: "Cost code and WIP design",
          description:
            "Agree the cost code structure, how it maps to project tasks, and which WIP method each contract type uses. Over and under billings are only as good as the budgets loaded into planning lines, so estimating hand-off is designed here rather than discovered at the first quarter-end."
        },
        {
          name: "Extension and system-of-record decisions",
          description:
            "Decide which system owns commitments, change orders, pay applications, retainage and payroll. Where Procore or Autodesk Construction Cloud already owns project management, the ERP owns the ledger and the integration carries only what the ledger needs."
        },
        {
          name: "Integration build with published limits in mind",
          description:
            "Each integration gets a direction, an owner, a volume estimate and a schedule, designed against the rate limits each vendor publishes. Commitments and approved change orders move on a schedule; drawings and photos do not move into the ERP at all."
        },
        {
          name: "Microsoft 365 project site template",
          description:
            "A standard project site with external sharing set per site, guest expiration, sensitivity labels on contract and bid content, and a closeout procedure. This is usually [collaboration enablement](/services/collaboration-enablement/) work running in parallel with the ERP build."
        },
        {
          name: "Pilot on live jobs, then cutover at a period end",
          description:
            "Run two or three active jobs through the new system for a full billing cycle, including a change order and a retainage release. Cutover lands on a period end with open job balances, committed costs and billed-to-date figures reconciled before the old system is frozen."
        }
      ]
    },
    {
      type: "list",
      heading: "Where construction ERP projects fail",
      items: [
        "**The platform is chosen on the accounting demo.** Nobody walks the payroll administrator through certified payroll or a multi-union fringe report, and the gap surfaces after contracts are signed.",
        "**Budgets never reach the planning lines.** Estimates stay in the estimating system, Percentage of Completion runs against empty budgets, and over and under billings are rebuilt in Excel for the surety every quarter.",
        "**An extension is treated as core product.** The pay application extension works on day one, then lags a Business Central major update, and billing stops on the one week of the month it cannot.",
        "**Procore and the ERP both claim the commitment.** Subcontract values are edited in two places, change orders are approved in one and posted in the other, and job cost reports disagree with the project manager's numbers.",
        "**Every job gets a Team and nobody closes them.** Two hundred project sites later, owners from finished jobs still hold guest access to folders on the current bid.",
        "**The acquired contractor's tenant is merged before its jobs are.** Email moves on schedule, but project documents, retention obligations and open claims files are split across two tenants for a year."
      ]
    },
    {
      type: "prose",
      heading: "Procore, Autodesk Construction Cloud and the ERP boundary",
      paragraphs: [
        "Most firms at this size already run a construction management platform, and the integration decision matters more than the ERP brand. The principle is one owner per record. Project management owns RFIs, submittals, drawings, daily logs and punch lists. The ERP owns the ledger, vendors, payments and job cost actuals. Commitments, change orders and pay applications sit on the boundary, and each one needs a named system of record written down before anybody configures a connector.",
        "Both vendors publish throttling rules, and they shape the design. Procore documents two rate limits, an hourly window and a 10-second spike window, returns HTTP 429 when either is exceeded, reports remaining quota in X-Rate-Limit headers, and may return 503 with a Retry-After header under heavy platform load. Procore tells developers to treat the headers as authoritative rather than assume a fixed number. Autodesk Platform Services publishes per-endpoint limits for the Autodesk Construction Cloud APIs, expressed as calls per minute per application, and returns 429 with a Retry-After header. On the Business Central side, the per-user OData limits Microsoft publishes, 6,000 requests in a rolling five-minute window, are generous for accounting transactions and a poor fit for document or photo traffic.",
        "The pattern that holds is scheduled, summarised synchronisation of financial records, with documents staying where they were created and links, not files, crossing the boundary. Where a connector does not exist or does not fit, a small integration built with [Power Platform](/services/power-platform/) or Azure is usually cheaper to own than a heavy middleware licence, provided it is documented and monitored."
      ]
    },
    {
      type: "prose",
      heading: "Project sites, external sharing and the jobsite in Microsoft 365",
      paragraphs: [
        "Construction is one of the few industries where external collaboration is the normal case rather than the exception. Owners, architects, engineers of record and dozens of subcontractors need access for the life of a job and none after closeout. SharePoint supports this well when configured per site. Microsoft documents four site-level sharing options, Anyone, New and existing guests, Existing guests and Only people in your organization, and a site setting can only be the same as or more restrictive than the organization setting. Guest access expiration and default link type can also be set per site, overriding the organization default.",
        "The practical design is a project site template with sharing set to guests who authenticate, guest expiration aligned to the contract duration, [sensitivity labels](/resources/glossary/sensitivity-label/) on bid and contract content, and a closeout step that removes guests and applies a [retention policy](/resources/glossary/retention-policy/) matching your claims and warranty exposure. A consistent template is the difference between a governed estate and 200 differently configured sites; our [SharePoint intranet](/solutions/sharepoint-intranet/) and [data governance](/services/data-governance/) work covers both halves.",
        "In the field, Teams handles crew communication and Power Apps handles structured capture: daily logs, toolbox talks, safety inspections and equipment checks, with photos and signatures, writing to [Dataverse](/resources/glossary/dataverse/) or SharePoint and posting hours or quantities onward to job cost. Canvas apps can be built to work offline for sites with poor signal. The licensing question to settle first is whether the app needs a [premium connector](/resources/glossary/premium-connector/) or Dataverse, because that moves every field user onto a Power Apps licence."
      ]
    },
    {
      type: "prose",
      heading: "Joint ventures, multi-entity close and acquired contractors",
      paragraphs: [
        "Contractors accumulate entities: an operating company, an equipment company leasing to it, a real estate holding company, and joint ventures formed for specific bids. Business Central handles this with separate companies in one environment, intercompany postings, and consolidation that transfers general ledger entries into a consolidated company across different charts of accounts, fiscal years and currencies. Eliminations are manual by Microsoft's own documentation, and joint-venture partners usually need their own reporting cut, so the close process is designed rather than assumed; [financial management](/solutions/financial-management/) is where that sits.",
        "Acquiring another contractor adds the tenant question. The acquired firm's email, Teams and project sites have to move under your identity model, often with owners and subcontractors mid-job who must not lose access. That is [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) with an unusually large external population, and it should be sequenced against the ERP cutover so that live jobs never have their documents and their ledger in different organizations at the same time. Where the acquired firm runs Dynamics GP, note that Microsoft has stated GP support ends 31 December 2029, which is runway for a planned [GP to Business Central](/migrations/dynamics-gp-to-business-central/) move rather than an emergency."
      ]
    },
    {
      type: "list",
      heading: "When we would tell you not to do this",
      items: [
        "**Your hardest problem is union and prevailing-wage payroll.** If your payroll office runs multiple locals, fringe remittances and weekly certified payroll, a construction-native ERP that carries payroll in its core is usually the better answer, and we will say so.",
        "**Your current construction ERP works and your people use it.** Moving a well-run Vista or Sage 300 CRE shop to Business Central for platform consistency trades a known fit for a stack of extensions. Improve the Microsoft 365 and reporting layer around it instead.",
        "**You are being sold Finance and Project Operations at 40 users.** Unless you have a large billable bench, complex revenue recognition or genuine multi-country operations, the licence and implementation cost rarely pays back against Business Central. [Dynamics 365 licensing](/pricing/dynamics-365-licensing/) sets out the tiers.",
        "**You want Business Central to replace Procore.** It will not. Business Central is an accounting and project cost system, not a document control, RFI or submittal platform, and forcing it into that role ends in customisation nobody can upgrade.",
        "**Your estimating discipline is the real gap.** If budgets are not built at cost code level before work starts, no ERP produces meaningful WIP. Fix estimating hand-off first; the software decision can wait a quarter.",
        "**You expect one system to do everything on a fixed-fee pilot.** A construction ERP decision touches payroll, billing, compliance and field capture. A proposal that prices all of it as a small fixed engagement has not understood the scope."
      ]
    }
  ],
  faqs: [
    {
      q: "Can Business Central handle construction job costing?",
      a: "Yes for the costing itself. Business Central Projects, renamed from Jobs in 2023 release wave 2, carries project tasks, budget and billable planning lines, time sheets, purchases posted to project tasks, and five standard WIP methods including Percentage of Completion. The gaps are around it rather than in it: no native AIA pay applications, retainage, subcontractor compliance tracking or US payroll. See [Business Central](/dynamics-365/business-central/) for the product overview."
    },
    {
      q: "Does Business Central support AIA G702 and G703 billing and retainage?",
      a: "Not in the standard product. Business Central invoices projects from planning lines, either on completion or on an invoicing schedule, and Microsoft's documentation describes no retainage or AIA pay application function. Construction extensions on AppSource add G702 Application and Certificate for Payment and G703 Continuation Sheet output with retainage. Evaluate the extension vendor's update record as carefully as its features."
    },
    {
      q: "Can Business Central run certified payroll or union payroll?",
      a: "No. Business Central has no US payroll engine; Microsoft's documented approach is importing payroll journal entries from a provider, with the Ceridian and QuickBooks payroll file import extensions pre-installed. Certified payroll and multi-union fringe handling come from a construction payroll service, an extension, or a construction-native ERP that includes payroll."
    },
    {
      q: "When does Project Operations make more sense than Business Central?",
      a: "When resource management across a large billable bench, subcontracting and project revenue recognition are the centre of the business. Microsoft lists unified resource management, subcontracting, customer-facing invoicing and revenue recognition for projects in the Project Operations Integrated with ERP deployment. It is a larger licence and implementation, and Microsoft states there is no supported migration between deployment types. [Business Central vs Finance and Operations](/compare/business-central-vs-finance-operations/) works the comparison through."
    },
    {
      q: "How should Procore integrate with a Microsoft ERP?",
      a: "One owner per record, scheduled synchronisation of financial data, and documents left where they were created. Procore publishes an hourly and a 10-second spike rate limit and returns HTTP 429 when either is exceeded, with remaining quota in response headers, so integrations should read those headers and back off rather than assume a fixed allowance. Commitments, change orders and pay applications each need a named system of record before any connector is configured."
    },
    {
      q: "How do we share project documents with owners, architects and subcontractors safely?",
      a: "Use a standard SharePoint project site template. Set external sharing per site to guests who sign in rather than Anyone links, set guest access expiration per site to match the job, label bid and contract content, and remove guests at closeout. Microsoft documents that a site's sharing setting can be the same as or more restrictive than the organization's, never looser, so the tenant default can stay tight while project sites open up deliberately."
    },
    {
      q: "Can Power Apps replace paper daily logs and safety inspections?",
      a: "Usually, for structured capture. A canvas app on phones or tablets can record daily logs, inspections, photos and signatures, work offline where signal is poor, and post hours or quantities onward to job cost. Settle licensing first: an app that uses Dataverse or a premium connector needs a Power Apps licence for each field user. Our [Power Platform](/services/power-platform/) work covers the build and the environment governance."
    },
    {
      q: "We acquired another contractor. What should move first?",
      a: "Identity and email usually move first, but live jobs should not have their documents and their ledger in different organizations at once. Sequence the [M and A tenant migration](/services/ma-tenant-migration/) against the ERP cutover, carry external guests on active jobs across deliberately, and consolidate financially from day one using business units even if the acquired firm stays on its own accounting system for a while."
    }
  ],
  relatedServiceSlugs: ["dynamics-365", "power-platform", "ma-tenant-migration", "collaboration-enablement", "data-governance"],
  relatedTermSlugs: [
    "dataverse",
    "premium-connector",
    "tenant-to-tenant-migration",
    "sensitivity-label",
    "retention-policy",
    "power-platform-environment"
  ],
  relatedPageRefs: [
    "/dynamics-365/business-central/",
    "/compare/business-central-vs-finance-operations/",
    "/pricing/business-central-implementation-cost/",
    "/assessments/business-central-readiness/",
    "/migrations/dynamics-gp-to-business-central/",
    "/solutions/financial-management/"
  ],
  proofMetrics: [
    { value: "20+ yrs", label: "of Microsoft consulting" },
    { value: "1 business day", label: "reply from a senior engineer" },
    { value: "Vernon, CT", label: "serving New England and the US" }
  ],
  triggers: [
    {
      title: "Job costing has outgrown QuickBooks or Sage 100",
      body: "WIP schedules live in Excel, job cost closes weeks late, and the surety is asking harder questions about over and under billings.",
      topic: "Outgrew our accounting system"
    },
    {
      title: "You acquired another contractor",
      body: "Two tenants, two accounting systems, two cost code structures, and a deal deadline to operate as one company.",
      topic: "Acquisition or tenant merge"
    },
    {
      title: "Owners are asking how you control shared documents",
      body: "A client or insurer wants to know who outside the firm can open project files, and the honest answer involves anonymous links.",
      topic: "External sharing and governance"
    },
    {
      title: "Dynamics GP or NAV is running out of road",
      body: "The current Microsoft ERP has a support end date and you want to choose the successor on fit rather than on a deadline.",
      topic: "Replacing Dynamics GP or NAV"
    }
  ],
  formTopics: [
    "Outgrew our accounting system",
    "Acquisition or tenant merge",
    "External sharing and governance",
    "Replacing Dynamics GP or NAV",
    "Field capture with Power Apps"
  ],
  subSectors: [
    "General contractors",
    "Specialty and MEP contractors",
    "Engineering and design firms",
    "Heavy civil",
    "Building products"
  ],
  relatedIndustrySlug: "manufacturing",
  tool: "cost",
  ctaHeading: "Get a straight answer on your construction ERP fit",
  ctaSubheading:
    "Tell us how you bill and how you pay your crews. A senior engineer will tell you whether Business Central, Project Operations or a construction-native ERP fits, including when it is not Microsoft.",
  sidebarCta: {
    tag: "ERP fit review",
    title: "Business Central, Project Operations, or neither?",
    body: "A short review of your billing methods, payroll obligations and integrations, with a written recommendation that names the gaps.",
    ctaText: "Request a fit review"
  }
};

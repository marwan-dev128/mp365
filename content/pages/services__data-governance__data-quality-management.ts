import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/data-governance/data-quality-management/",
  intro:
    "CRM cleanup from MP-365 removes duplicate and incomplete records from Dynamics 365 and puts rules in place so the mess does not come back. It is built for sales and service leaders who no longer trust their pipeline, and for IT teams preparing for a migration, an integration or a Copilot rollout.",
  atAGlance: {
    bestFor:
      "Teams whose Dynamics 365 reports disagree with reality, or who need clean data before a migration, integration or Copilot rollout.",
    includes:
      "A data quality assessment, duplicate detection rules, bulk duplicate jobs and merges, entry standards, validation rules and an ownership plan for ongoing care.",
    notIncluded:
      "ERP data cleansing, purchased contact lists, master data management platforms and outsourced data entry.",
    howItStarts:
      "A discovery call, then a read-only profile of your most important tables, such as accounts, contacts and leads.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What CRM data cleanup is and why it matters",
      paragraphs: [
        "CRM data cleanup is the work of finding and fixing duplicate, outdated, inconsistent and incomplete records so that reports, forecasts and automation use correct data. A CRM full of duplicates makes every number suspect: one customer shows up as three accounts, and each has a different owner and a different revenue history.",
        "Cleanup alone does not last. Records get messy again within months if nothing changes how they are entered. That is why this service pairs one-time CRM data cleanup with data quality management, which sets the standards and ownership that keep Dynamics 365 trustworthy after the project.",
      ],
    },
    {
      type: "list",
      heading: "Signs your Dynamics 365 data needs attention",
      items: [
        "**Two answers to one question:** Sales and finance report different customer counts or revenue for the same period.",
        "**Duplicate accounts and contacts:** Reps find two or three versions of the same company and do not know which to update.",
        "**Typed-in chaos:** States, countries, job titles and industries are typed a dozen ways, so filters and views miss records.",
        "**Dead records:** Leads from years ago and contacts who have left their companies still sit in active views.",
        "**Stalled projects:** A migration, integration or Copilot rollout keeps slipping because nobody trusts what would move.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 runs a CRM cleanup",
      steps: [
        {
          name: "Profile the data",
          description:
            "Count records, blanks, likely duplicates and inconsistent values on the tables that drive reporting, without changing anything.",
        },
        {
          name: "Agree what clean means",
          description:
            "Sales, service and finance leaders choose the match rules, required fields and standard values, and which record survives a merge.",
        },
        {
          name: "Back up before changing records",
          description:
            "Export the affected tables and confirm a restore path, so every change can be traced and reversed if needed.",
        },
        {
          name: "Set up duplicate detection rules",
          description:
            "Create and publish rules for accounts, contacts, leads and any other tables that need them.",
        },
        {
          name: "Run bulk detection and merge",
          description:
            "Run bulk duplicate detection jobs, review the results with record owners and merge confirmed duplicates in batches.",
        },
        {
          name: "Standardize and fill gaps",
          description:
            "Correct inconsistent values in bulk, replace typed-in text with choice fields where it helps and archive records nobody needs.",
        },
        {
          name: "Add guardrails at entry",
          description:
            "Add required fields, business rules and validation so new records arrive in the agreed format.",
        },
        {
          name: "Hand over data ownership",
          description:
            "Name an owner per table, set a review rhythm and give your team a one-page data standard.",
        },
      ],
    },
    {
      type: "prose",
      heading: "How Dynamics 365 duplicate detection works",
      paragraphs: [
        "Dynamics 365 duplicate detection compares records against rules you define, and warns users or flags records when a match appears. Microsoft's Power Platform documentation (updated 2026) states that model-driven apps include default duplicate detection rules for accounts and contacts only. Every other table, such as leads or custom tables, needs a rule that you create and publish.",
        "A rule has a base record type, a matching record type and one or more criteria. The base and matching types can differ, which lets you compare the email address of a contact against the email address of a lead.",
      ],
    },
    {
      type: "prose",
      heading: "How to design duplicate detection rules that work",
      level: 3,
      paragraphs: [
        "Build rules on fields with values that should be unique, such as email address. Criteria can use exact match, same first characters or same last characters. Options let a rule skip inactive records, ignore case differences and ignore blank values.",
        "Microsoft documents a limit of five published rules for the same base record type at one time. MP-365 designs a small set of rules per table rather than many overlapping ones, because publishing a rule creates a matchcode for every record in the matching type.",
      ],
    },
    {
      type: "prose",
      heading: "How to clean up duplicate records in Dynamics 365",
      level: 3,
      paragraphs: [
        "Clean up duplicates in Dynamics 365 by running a bulk duplicate detection job, reviewing the matches and merging records. Microsoft provides bulk system jobs for detection and a merge function for accounts, contacts and leads. MP-365 checks merge decisions with record owners first, because a merge keeps one record as the survivor and combines the other's data into it.",
        "Rules that match too loosely merge different customers together. MP-365 tests every rule on a sample before running it across the table.",
      ],
    },
    {
      type: "table",
      heading: "Common CRM data problems and the fix",
      headers: ["Problem", "Typical cause", "Fix MP-365 applies"],
      rows: [
        [
          "Duplicate accounts and contacts",
          "Manual entry, imports and integrations that create records without checking",
          "Duplicate detection rules, bulk jobs and reviewed merges",
        ],
        [
          "Inconsistent states, countries and industries",
          "Typed-in text fields",
          "Choice fields, bulk correction and business rules",
        ],
        [
          "Missing key fields",
          "Optional fields nobody fills",
          "Required fields at the right stage, with defaults where possible",
        ],
        [
          "Outdated contacts and leads",
          "No review rhythm",
          "Agreed archive rules and a scheduled review by record owners",
        ],
        [
          "Records created by connected systems",
          "Integrations that skip the checks users see",
          "Matching logic and logging in the integration itself",
        ],
      ],
    },
    {
      type: "prose",
      heading: "How to keep CRM data clean over time",
      paragraphs: [
        "Keep CRM data clean by preventing bad records at entry and by giving each table an owner. Prevention comes from required fields, choice fields, business rules and published duplicate detection rules. Ownership comes from a named person who reviews a short report on a set schedule.",
        "Integrations need the same discipline. When another system writes into Dynamics 365, it creates records outside the screens your users work in. MP-365 builds matching and error handling into the integration, using service accounts and logging, as described on the [Dynamics 365 Integration Services](/services/dynamics-365-crm/integration-services/) page.",
      ],
    },
    {
      type: "list",
      heading: "What you get",
      items: [
        "**Data quality profile:** A before and after view of duplicates, blanks and inconsistent values on the tables in scope.",
        "**Published duplicate detection rules:** Rules tested on a sample, documented and ready for your admins.",
        "**Merged and standardized records:** Duplicates resolved with a record of what was merged and why.",
        "**Entry guardrails:** Required fields, choice fields and business rules that match your data standard.",
        "**Data standard:** A short document that says what a good account, contact and lead record looks like.",
        "**Ownership plan:** Named table owners and a review checklist.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: one process and clean numbers",
      paragraphs: [
        "In one MP-365 sales tracking project, scattered spreadsheets and inconsistent records gave way to one sales process in Dynamics 365 with live dashboards for leadership. Dashboards only work when the underlying records are consistent. In another project, MP-365 built reliable integrations between the CRM and ERP and marketing systems with logging and alerts, so errors surfaced instead of quietly creating bad records. See the [Clients](/clients/) page for named results.",
      ],
    },
    {
      type: "prose",
      heading: "When CRM cleanup is not the right fit",
      paragraphs: [
        "CRM cleanup is not the right move when the real problem is process, not data. If reps skip fields because the process does not fit their work, new mess will follow any cleanup. MP-365 raises that early and may recommend a Dynamics 365 configuration fix first. Cleanup is also not enough for organizations that need a full master data management platform across many systems, which is a different project.",
      ],
    },
    {
      type: "prose",
      heading: "Related services",
      paragraphs: [
        "This service belongs to [Data Governance](/services/data-governance/). It pairs with [Microsoft Purview & Permission Models](/services/data-governance/microsoft-purview/) when you also need to control who can see records. If access to CRM data is part of the concern, see the [Dynamics 365 Security Roles & Access Audit](/services/dynamics-365-crm/security-roles-audit/). For connected systems that create records, see [Dynamics 365 Integration Services](/services/dynamics-365-crm/integration-services/).",
      ],
    },
  ],
  faqs: [
    {
      q: "How do you clean up duplicate records in Dynamics 365?",
      a: "Create and publish duplicate detection rules, run a bulk duplicate detection job, check the matches with record owners and merge confirmed duplicates. Dynamics 365 supports merging accounts, contacts and leads. Test each rule on a sample first so it does not merge different customers.",
    },
    {
      q: "What is CRM data cleanup?",
      a: "CRM data cleanup is the process of finding and correcting duplicate, outdated, inconsistent and incomplete records in your CRM. The goal is reliable reporting, forecasting and automation. A good cleanup also changes how data enters the system, so the same problems do not return.",
    },
    {
      q: "How do you keep CRM data clean over time?",
      a: "Prevent bad records at entry with required fields, choice fields, business rules and published duplicate detection rules. Then give every important table a named owner who reviews a short report on a schedule. Integrations need matching logic too, because they write records outside the user screens.",
    },
    {
      q: "Does Dynamics 365 have built-in duplicate detection?",
      a: "Yes. Microsoft states that model-driven apps include default duplicate detection rules for accounts and contacts. Other tables, such as leads or custom tables, need rules you create and publish. Microsoft limits you to five published rules per base record type at one time.",
    },
    {
      q: "Can a cleanup delete records by mistake?",
      a: "It can if nobody plans for it, which is why MP-365 exports affected tables first, tests rules on a sample, checks merges with record owners and keeps a log of what changed. Merges and deletions happen in batches, so a problem is caught early and can be reversed.",
    },
    {
      q: "How do we know which duplicate record to keep?",
      a: "Agree a survivor rule before merging, such as the record with the most recent activity or the one linked to open opportunities. Business owners decide the rule, and MP-365 applies it consistently. Edge cases, such as parent and child accounts, are handled by hand.",
    },
    {
      q: "Should we clean data before migrating to Dynamics 365?",
      a: "Yes. Every duplicate and blank field you carry over becomes a Dynamics 365 problem. Cleaning first is usually cheaper than cleaning after go-live, when users already work in the system. MP-365 can profile the source data before the migration plan is final.",
    },
    {
      q: "Does data quality affect Microsoft 365 Copilot?",
      a: "Yes. Copilot answers questions from the records in your systems, so duplicates, outdated contacts and missing fields lead to weaker answers. Clean, consistent records make summaries and forecasts easier to trust. Cleanup before a Copilot rollout is a sensible step.",
    },
    {
      q: "How much does CRM cleanup cost?",
      a: "Cost depends on the number of tables, the volume of records, how many rules are needed and how much your team can review. MP-365 scopes after a discovery call and gives a written estimate. The [Pricing](/pricing/) page explains what drives effort.",
    },
    {
      q: "Do you clean ERP or other non-CRM data?",
      a: "No. MP-365's data quality work focuses on Dynamics 365. Where an ERP system such as Business Central feeds the CRM, MP-365 looks at how records are matched and passed through the integration, but it does not cleanse the ERP system itself.",
    },
    {
      q: "Who needs to be involved from our side?",
      a: "You need a business owner who can make match and merge decisions, a Dynamics 365 administrator, and a few record owners from sales or service who check proposed merges. The time required is modest if the decisions are made quickly and in advance.",
    },
  ],
  closing:
    "CRM cleanup is worth doing once and then protecting. MP-365 fixes the records you have, sets the rules for the records you will create and leaves your team with a data standard to follow.",
  cta: {
    heading: "Start with a data profile",
    body: "Tell MP-365 which reports you no longer trust, and we will show you what a cleanup would involve.",
    text: "Book a discovery call",
  },
};

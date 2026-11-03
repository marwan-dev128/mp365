import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/dynamics-365-crm/",
  intro:
    "Dynamics 365 CRM consulting from MP-365 (Modern Partners 365) covers six areas: Sales, Customer Service, Customer Insights, lead management, access audits and integrations. MP-365 is a Microsoft Solutions Partner that helps mid-size and enterprise teams in the United States set up, fix and run Dynamics 365.",
  blocks: [
    {
      type: "table",
      heading: "What Dynamics 365 CRM consulting includes",
      headers: ["Service", "Best for", "What you get"],
      rows: [
        [
          "[Dynamics 365 Sales](/services/dynamics-365-crm/sales/)",
          "Sales teams that track deals in spreadsheets or in a CRM nobody trusts",
          "One pipeline, a sales process that matches how reps work, and forecasts leaders can rely on",
        ],
        [
          "[Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/)",
          "Support teams that work from shared inboxes",
          "Cases with an owner, a status and an urgency, plus queues, service level agreements and knowledge articles",
        ],
        [
          "[Dynamics 365 Customer Insights](/services/dynamics-365-crm/customer-insights/)",
          "Marketing teams that send campaigns but cannot see what happens next",
          "Segments, forms and journeys in Customer Insights - Journeys, connected to Sales",
        ],
        [
          "[Lead Management and Attribution](/services/dynamics-365-crm/lead-management/)",
          "Teams whose leads arrive from several sources and get lost",
          "One lead process: capture, score, route and report by source",
        ],
        [
          "[Security Roles and Access Audit](/services/dynamics-365-crm/security-roles-audit/)",
          "Organizations whose Dynamics 365 users have collected too much access over time",
          "Reviewed roles, documented access levels and a repeatable access report",
        ],
        [
          "[Dynamics 365 Integration Services](/services/dynamics-365-crm/integration-services/)",
          "Teams that re-key data between the CRM and ERP, marketing or file systems",
          "Integrations with logging, alerts and no double entry",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Which Dynamics 365 CRM service should you start with?",
      paragraphs: [
        "Start with the problem that costs you the most time today. If reps cannot say what will close this quarter, start with Sales. If customers chase answers by email, start with Customer Service. If two systems hold different numbers for the same customer, start with Integration Services.",
        "Lead Management, Customer Insights and the access audit usually follow one of those. Most clients begin with a single area, prove it works, then add the next. That keeps the first release small and the risk low.",
      ],
    },
    {
      type: "list",
      heading: "When to hire a Dynamics 365 consulting partner",
      items: [
        "**Adoption has stalled:** reps and agents keep their real notes in Excel, Outlook or a notebook, so the CRM data is out of date.",
        "**Reports take days:** someone builds the monthly sales or service report by hand because the system cannot produce it.",
        "**The system has outgrown its builder:** the person who configured Dynamics 365 left, and nobody knows why a workflow or plug-in exists.",
        "**Releases break things:** changes go straight to production, and users find the bugs.",
        "**Data is re-keyed:** staff copy orders, invoices or contacts between the CRM and another system.",
        "**Access has sprawled:** more users than expected hold the System Administrator role.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 approaches Dynamics 365 CRM projects",
      steps: [
        {
          name: "Understand the business problem",
          description:
            "Talk to the people who use the system and the leaders who rely on its numbers. Write down the one problem to solve first.",
        },
        {
          name: "Review what exists",
          description:
            "Inspect the current Dynamics 365 environment: apps, security roles, workflows, plug-ins, integrations and data quality.",
        },
        {
          name: "Agree a small first release",
          description:
            "Define the minimum viable product (MVP) that proves the fix, and a roadmap for what follows.",
        },
        {
          name: "Build in a test environment",
          description:
            "Make changes in a sandbox, never in production, and keep a backlog that you can see.",
        },
        {
          name: "Validate with real users",
          description:
            "Let the people who do the work try it, collect their corrections and refine before go-live.",
        },
        {
          name: "Deploy and hand off",
          description:
            "Release with a go-live checklist, train the users and document what changed.",
        },
        {
          name: "Support and improve",
          description:
            "Stay on call for fixes and small changes, and review the results against the goals set in step one.",
        },
      ],
    },
    {
      type: "table",
      heading: "Support mode or project mode",
      headers: ["Factor", "Support mode", "Project mode"],
      rows: [
        [
          "Use it when",
          "Something is broken or slow and you need a specialist now",
          "You are building something new or changing how a team works",
        ],
        [
          "How it runs",
          "Understand the issue, jump in, fix and confirm, then brief you",
          "Understand, build a quick MVP, validate and refine, then deploy and hand off",
        ],
        [
          "Your time",
          "A short call to explain the problem and one to confirm the fix",
          "Regular reviews with the users who will own the result",
        ],
      ],
    },
    {
      type: "prose",
      heading: "How much does Dynamics 365 CRM consulting cost?",
      paragraphs: [
        "The cost of a Dynamics 365 CRM project depends on scope: the number of processes, integrations, users and data sources involved. A single dashboard fix and a full Sales rollout sit at very different points. The [pricing page](/pricing/) explains how MP-365 prices consulting and the engagement models available: ad hoc, standard and dedicated.",
        "Dynamics 365 license fees are separate. You pay them to Microsoft or to your license provider, and MP-365 does not resell licenses.",
      ],
    },
    {
      type: "prose",
      heading: "Dynamics 365 CRM work MP-365 has delivered",
      paragraphs: [
        "MP-365 supports Dynamics CRM for Hunter Panels, a manufacturer. The work aligns the platform with how the business operates, cuts manual work and improves performance.",
        "For OTIS Elevator, MP-365 provides platform and operations leadership for Dynamics. Deployments dropped from 13 hours to 4, and manual errors fell to near zero. MP-365 also manages and supports Dynamics 365 CRM for the US Department of Transportation. See the [clients page](/clients/) for more.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft services that sit around the CRM",
      paragraphs: [
        "Most CRM projects touch other Microsoft tools. [Power BI dashboards](/services/power-platform/power-bi/) replace spreadsheet reports. [Power Automate](/services/power-platform/power-automate/) removes repetitive steps such as approvals and notifications. [Power Pages](/services/power-platform/power-pages/) gives customers a portal on top of CRM data, and [Data Quality Management](/services/data-governance/data-quality-management/) cleans up duplicates before they spread.",
        "MP-365 also builds [Dynamics 365 Sales Agents](/services/copilot/sales-agents/), which bring Copilot into the seller's daily work.",
      ],
    },
  ],
  faqs: [
    {
      q: "What does Dynamics 365 CRM consulting include?",
      a: "Dynamics 365 CRM consulting covers designing, building, fixing and supporting Microsoft's customer apps. At MP-365 that means Sales, Customer Service, Customer Insights, lead management, security role and access audits, and integrations with ERP and other systems. It also covers reports, automation and user training.",
    },
    {
      q: "How much does a Dynamics 365 CRM project cost?",
      a: "It depends on scope, not on a fixed package. The main drivers are the number of processes, integrations, users and data sources. License fees go to Microsoft and are separate. MP-365 explains how it prices consulting and its engagement models on the [pricing page](/pricing/).",
    },
    {
      q: "When should you hire a Dynamics 365 consulting partner?",
      a: "Hire a partner when the system no longer fits the business and your team cannot fix it alone. Typical triggers are stalled adoption, hand-built reports, broken releases, re-keyed data and a departed administrator. A partner also helps when a project needs skills you do not keep in house.",
    },
    {
      q: "What is Dynamics 365 CRM?",
      a: "Dynamics 365 CRM is the common name for Microsoft's customer engagement apps, mainly Sales, Customer Service and Customer Insights. Microsoft sells them as separate apps on one data platform, Microsoft Dataverse. They share customer records, so a contact entered in Sales appears in Customer Service.",
    },
    {
      q: "Is Dynamics 365 a good fit for a mid-size company?",
      a: "Yes, when you want a CRM that connects to Microsoft 365, Teams and Power BI and can grow with you. It is a poor fit if you only need a simple contact list. MP-365 works with mid-size and enterprise companies and keeps the first release small.",
    },
    {
      q: "What does a Microsoft Dynamics 365 consultant do day to day?",
      a: "A Microsoft Dynamics 365 consultant studies how your team works, then configures apps, security roles, forms, workflows and reports to match. They also connect Dynamics 365 to other systems, move data, test releases, train users and fix issues. Good consultants spend more time asking questions than building.",
    },
    {
      q: "Do you need Sales, Customer Service and Customer Insights together?",
      a: "No. Each app works alone, and most clients start with one. They do share the same customer records, so adding a second app later is simpler than starting a new system. MP-365 usually recommends the app that fixes your most expensive problem first.",
    },
    {
      q: "Can MP-365 take over a Dynamics 365 system someone else built?",
      a: "Yes. MP-365 starts by reviewing the environment: apps, security roles, workflows, plug-ins, integrations and data quality. It then stabilizes what exists before changing anything. For Carlisle Construction, MP-365 stabilized Dynamics and SharePoint operations within a week and skipped a long discovery phase.",
    },
    {
      q: "Is ERP work part of Dynamics 365 CRM consulting?",
      a: "No. ERP projects are outside MP-365 scope. The team connects Dynamics 365 to the ERP you already run, such as Business Central, so orders, customers and invoices move between the two without double entry. See [Dynamics 365 Integration Services](/services/dynamics-365-crm/integration-services/) for the scope.",
    },
    {
      q: "Who pays for Dynamics 365 licenses?",
      a: "You do, directly to Microsoft or to your license provider. Microsoft sets license prices, and they are separate from consulting fees. MP-365 does not resell licenses or manage subscriptions, but it can help you work out which Dynamics 365 apps your team needs.",
    },
    {
      q: "Can MP-365 work alongside our internal IT team?",
      a: "Yes. MP-365 often acts as an extension of an internal team: the specialist who handles the Dynamics 365 work while your IT staff keep their other priorities. The standard engagement model uses a flat rate with no forced minimum, so you can scale the help up or down.",
    },
    {
      q: "What happens after go-live?",
      a: "MP-365 stays available for fixes, small changes and improvements, using the same support mode it uses for urgent issues. After release, the team reviews results against the goals set at the start and agrees the next step. You can also stop at hand-off.",
    },
  ],
  closing:
    "Dynamics 365 CRM consulting works best when it starts with one clear problem and a small first release. If you know which area hurts most, pick it from the list above. If you are unsure, describe the problem and MP-365 will tell you where to begin.",
  cta: {
    heading: "Talk to MP-365 about your Dynamics 365 setup",
    body: "Describe the problem you want fixed first. MP-365 will tell you which service fits and what a sensible first release looks like.",
    text: "Book a discovery call",
  },
};

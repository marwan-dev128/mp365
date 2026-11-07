import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/power-platform/",
  intro:
    "Power Platform consulting from MP-365 covers four Microsoft tools: Power Apps, Power Pages, Power Automate and Power BI. MP-365 builds them on the Dynamics 365 and Microsoft 365 data you already have, so apps, portals, approvals and reports all work from one source of truth.",
  blocks: [
    {
      type: "prose",
      heading: "What Power Platform consulting includes",
      paragraphs: [
        "Power Platform consulting means designing, building and supporting Microsoft's low-code tools around your business data. MP-365 does this as part of its wider [Microsoft 365 and Dynamics 365 services](/services/), so the work connects to the CRM and the files your teams already use.",
        "The tools share one data layer. Microsoft's documentation says Power Pages sites use the same Microsoft Dataverse data that you use to build apps, workflows, reports and analytics. It also says Dynamics 365 apps store and secure their data in Dataverse, so you can build apps against your core business data without a separate integration.",
      ],
    },
    {
      type: "table",
      heading: "Which Power Platform service fits which problem",
      headers: ["Service", "Best for", "Typical outcome", "Built on"],
      rows: [
        [
          "[Power Apps Development](/services/power-platform/power-apps/)",
          "Teams that run a daily process in spreadsheets, email or paper",
          "One app with clear owners, status and history for each request",
          "Dataverse, SharePoint, Dynamics 365",
        ],
        [
          "[Power Pages Portal Development](/services/power-platform/power-pages/)",
          "Customers, partners or applicants who need to sign in and update their own records",
          "A secure external portal that reads and writes Dynamics 365 data",
          "Dataverse, Dynamics 365",
        ],
        [
          "[Power Automate Workflow Automation](/services/power-platform/power-automate/)",
          "Approvals, notifications and data moves that people repeat by hand",
          "Flows that run on their own and leave an audit trail",
          "Dataverse, SharePoint, Outlook, Teams",
        ],
        [
          "[Power BI Consulting & Dashboards](/services/power-platform/power-bi/)",
          "Leaders who wait on spreadsheet reports",
          "Live dashboards with one set of numbers for sales, service and operations",
          "Dynamics 365, SharePoint, other business systems",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Which service to start with",
      paragraphs: [
        "Start with the service that removes your most expensive manual step. For most mid-size teams that is Power Automate, because one approval flow can save hours across many people.",
        "Start with Power Apps when the pain is a missing system, such as inspections tracked on paper. Start with Power Pages when outsiders need access to your data. Start with Power BI when leaders do not trust the numbers.",
      ],
    },
    {
      type: "list",
      heading: "How to choose by the symptom you see",
      items: [
        "**People re-type the same data into several places:** start with Power Automate to move the data once.",
        "**A process lives in Excel and email threads:** start with Power Apps to give it one record and one owner.",
        "**Customers or partners email you for status updates:** start with Power Pages so they can see their own cases and orders.",
        "**Monthly reports take days to assemble:** start with Power BI and connect it to the source systems.",
        "**You are unsure where to begin:** book a discovery call and MP-365 will rank the options by effort and payoff.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 approaches Power Platform work",
      steps: [
        {
          name: "Understand the process",
          description: "Sit with the people who do the work and map how it runs today, including the workarounds.",
        },
        {
          name: "Pick the data home",
          description: "Decide whether the data belongs in Dataverse, SharePoint or your existing Dynamics 365 tables.",
        },
        {
          name: "Build a small first version",
          description: "Ship a working app, flow, portal page or dashboard for one team before widening scope.",
        },
        {
          name: "Validate with real users",
          description: "Watch people use it, fix what slows them down and confirm the numbers match the source.",
        },
        {
          name: "Set the guardrails",
          description: "Put environments, ownership and data policies in place so makers cannot expose data by accident.",
        },
        {
          name: "Deploy and hand off",
          description: "Move the solution into production, document it and train the people who will run it.",
        },
        {
          name: "Support and improve",
          description: "Fix issues quickly and add the next improvement from the backlog.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Governance: who can build and share what",
      paragraphs: [
        "Power Platform governance decides which connectors, environments and makers are allowed. Microsoft's data policies in the Power Platform admin center let administrators control which connectors apps and flows can use, and Microsoft documents that these policies act as guardrails against accidental data exposure (Microsoft Learn, 2026).",
        "MP-365 sets up this structure early. A department head can still build a quick app, but the app cannot send customer records to a personal mailbox or an unapproved service.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: Power Platform work in client environments",
      paragraphs: [
        "MP-365 provides Dynamics support for Hunter Panels, a manufacturer, where the aim is to align the platform with the business, cut manual work and improve performance. At OTIS Elevator, MP-365 leads platform and operations for Dynamics, and deployments dropped from 13 hours to 4 while manual errors fell to near zero.",
        "Those results come from the same habit that drives Power Platform projects: find the manual step, replace it and measure the change. See more on the [clients page](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "Related Dynamics 365 and Copilot work",
      paragraphs: [
        "Power Platform tools often sit next to other MP-365 services. A customer portal usually pairs with [Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/), and flows that connect the CRM to finance or marketing systems often rely on [Dynamics 365 integration services](/services/dynamics-365-crm/integration-services/).",
        "If you want users to ask questions in plain English, MP-365 also builds [custom Copilot agents](/services/copilot/custom-agents/) on the same data.",
      ],
    },
    {
      type: "prose",
      heading: "When Power Platform is not the right fit",
      paragraphs: [
        "Power Platform is a poor fit for a product you plan to sell, or for a system that handles very high transaction volumes. MP-365 does not do custom software development, so those projects need a software team. Power Platform is also not a replacement for an ERP system, and MP-365 does not implement ERP. It does connect your CRM to the ERP you have.",
      ],
    },
  ],
  faqs: [
    {
      q: "What does Power Platform consulting include?",
      a: "Power Platform consulting includes scoping, building and supporting apps, portals, automated workflows and dashboards. MP-365 works with Power Apps, Power Pages, Power Automate and Power BI, and connects them to Dynamics 365, SharePoint and Microsoft 365. It also covers handover, training and ongoing fixes after go-live.",
    },
    {
      q: "What can you build with the Power Platform?",
      a: "You can build internal apps for approvals and inspections, external portals where customers sign in, automated workflows that move data between systems, and Power BI dashboards. Each one can read and write the same Dataverse and Dynamics 365 data, so you do not maintain separate copies.",
    },
    {
      q: "How much does a Power Platform project cost?",
      a: "Cost depends on the number of tools, the data sources and how many people use the result. Microsoft license fees are separate from consulting fees and are set by Microsoft. MP-365 scopes a first small piece of work so you can see value before committing more. See the [pricing page](/pricing/) for how MP-365 engages.",
    },
    {
      q: "Which Power Platform tool should we start with?",
      a: "Start with the tool that removes your most costly manual step. Power Automate suits repeated approvals and data re-entry. Power Apps suits processes tracked in spreadsheets. Power Pages suits external users, and Power BI suits slow reporting. A discovery call usually settles the order quickly.",
    },
    {
      q: "Do we need Dynamics 365 to use the Power Platform?",
      a: "No. Power Apps, Power Automate and Power BI work with SharePoint, Microsoft 365, Excel and many other sources. Dynamics 365 helps because its apps already store data in Dataverse, which the other tools use directly. Teams without Dynamics 365 usually start from SharePoint lists or a new Dataverse environment.",
    },
    {
      q: "What is Dataverse and do we need it?",
      a: "Microsoft Dataverse is the data platform behind Power Apps and Dynamics 365. You need it for model-driven apps, Power Pages portals and most Dynamics 365 integrations. For a simple internal app, a SharePoint list can be enough. MP-365 recommends the lighter option when it meets the need.",
    },
    {
      q: "How do you control who can build and share apps and flows?",
      a: "MP-365 sets up separate environments, names an owner for each solution and configures Power Platform data policies. Those policies control which connectors apps and flows may use. Makers can still build, but they cannot connect business data to unapproved services without an administrator allowing it.",
    },
    {
      q: "Can business users build their own apps and flows?",
      a: "Yes, and that is part of the appeal. Business users can build simple apps and flows safely when environments and data policies are in place. MP-365 builds the shared foundation, handles complex logic and reviews anything that touches customer or financial data before it goes live.",
    },
    {
      q: "What is the difference between Power Apps and Power Automate?",
      a: "Power Apps gives people a screen to enter, view and approve data. Power Automate runs steps in the background, such as sending an approval request or copying a record. Most solutions use both: an app collects the request and a flow routes it, updates records and notifies people.",
    },
    {
      q: "Can Power Platform replace our custom software?",
      a: "Sometimes. Internal tools for approvals, tracking and field work often run well on Power Apps and Power Automate at lower effort than custom code. Products you sell, or systems with very high transaction loads, usually need a software team. MP-365 works in low-code and will say when a project is not a fit.",
    },
  ],
  closing:
    "Power Platform consulting works best when it starts with one real problem and a small first version. MP-365 can look at your processes, rank the four services by payoff and build the first piece on your existing Microsoft data.",
  cta: {
    heading: "Talk to MP-365 about your Power Platform project",
    body: "Tell us which process wastes the most time. We will suggest where to start and what a first version would involve.",
    text: "Book a free consultation",
  },
};

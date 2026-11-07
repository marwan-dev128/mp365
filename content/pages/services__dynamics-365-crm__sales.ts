import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/dynamics-365-crm/sales/",
  intro:
    "Microsoft Dynamics 365 Sales is Microsoft's CRM app for tracking leads, opportunities and customers in one pipeline. MP-365 provides Dynamics 365 Sales consulting and implementation for mid-size and enterprise sales teams, built around the way your reps actually sell.",
  atAGlance: {
    bestFor:
      "Sales leaders at mid-size and enterprise companies who need one trusted pipeline, forecasts they can defend and less manual reporting.",
    includes:
      "Sales process design, Dynamics 365 Sales configuration, forecasting, lead-to-opportunity flow, data import, Outlook and Teams setup, Power BI dashboards, user training and support.",
    notIncluded:
      "ERP implementation, Microsoft license resale, custom software development and managed IT support.",
    howItStarts:
      "A discovery call about your sales process, then a review of your current CRM and a plan for a small first release.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What is Microsoft Dynamics 365 Sales?",
      paragraphs: [
        "Microsoft Dynamics 365 Sales is a cloud CRM that runs on Microsoft Dataverse and is built as a Power Apps model-driven app. Sellers use it to manage accounts, contacts, leads, opportunities and quotes, and leaders use it to see the pipeline and forecast revenue.",
        "Microsoft sells Dynamics 365 Sales in tiers. According to Microsoft Learn (2026), Sales Enterprise automates the process from lead to cash, Sales Premium adds AI features such as predictive scoring and relationship intelligence, and Sales Professional is a lighter app that includes a subset of the Enterprise tables. Which tier fits depends on your process, not your company size.",
      ],
    },
    {
      type: "list",
      heading: "Sales problems this work solves",
      items: [
        "**The pipeline lives in spreadsheets:** each rep keeps a private version, so leadership cannot see the real number.",
        "**Forecasts are guesses:** stages mean different things to different reps, so the forecast moves every week.",
        "**Reporting eats days:** someone pulls data from several places each month to build the sales review.",
        "**Reps enter data twice:** once in the CRM and again in email, quotes or the ERP.",
        "**Leads go cold:** nobody owns a new lead for the first day, and follow-up depends on who noticed it.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 delivers a Dynamics 365 Sales implementation",
      steps: [
        {
          name: "Map the sales process",
          description:
            "Sit with reps, managers and operations to write down how a deal moves from first contact to signed order, including where it stalls.",
        },
        {
          name: "Audit what you have",
          description:
            "Review the current CRM or spreadsheets, the data you want to keep and the systems that must connect.",
        },
        {
          name: "Design the first release",
          description:
            "Agree stages, required fields, ownership rules and the three reports leadership wants, and leave everything else for later.",
        },
        {
          name: "Build a working MVP",
          description:
            "Configure the app in a sandbox so reps can click through a real pipeline within the first sprints.",
        },
        {
          name: "Import and clean the data",
          description:
            "Load accounts, contacts and open deals, remove duplicates and standardize fields before users see them.",
        },
        {
          name: "Validate with reps",
          description:
            "Let a pilot group sell in the system, collect their corrections and refine the forms and views.",
        },
        {
          name: "Deploy, train and hand off",
          description:
            "Release with a go-live checklist, train each role and leave short guides your team can use.",
        },
        {
          name: "Support and improve",
          description:
            "Stay available for fixes and small changes, and review pipeline quality against the goals set at the start.",
        },
      ],
    },
    {
      type: "table",
      heading: "Dynamics 365 Sales features MP-365 sets up",
      headers: ["Feature", "What it does", "How MP-365 sets it up"],
      rows: [
        [
          "Lead-to-opportunity process",
          "Guides a seller through stages with a business process flow",
          "Stages and required fields that match your real process, not the default template",
        ],
        [
          "Opportunity pipeline",
          "Shows open deals by stage and owner",
          "Views and a pipeline layout for each role, with stale-deal flags",
        ],
        [
          "Sales forecasting",
          "Rolls up seller commitments and compares them with quota",
          "A forecast hierarchy that mirrors your sales teams and the columns managers review",
        ],
        [
          "Sales accelerator and sequences",
          "Gives sellers a work list and a set of next activities",
          "Sequences for follow-up steps you already expect from reps",
        ],
        [
          "Predictive scoring",
          "Scores leads and opportunities from past outcomes",
          "Set up only when you have enough closed history to train a model",
        ],
        [
          "Outlook and Teams integration",
          "Shows CRM records beside email and chat",
          "Dynamics 365 App for Outlook and Teams for the roles that use them",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Microsoft products involved in a Dynamics 365 Sales project",
      paragraphs: [
        "A Dynamics 365 Sales project uses Dynamics 365 Sales, Microsoft Dataverse and Power Apps for the app and data. [Power BI](/services/power-platform/power-bi/) provides the dashboards, and Power Automate handles approvals, notifications and routine record updates. Outlook, Teams and SharePoint connect the CRM to daily work.",
        "When your sellers use Copilot, MP-365 sets up [Dynamics 365 Sales Agents](/services/copilot/sales-agents/) on top of clean CRM data. Agents are only as good as the records they read, so the clean-up comes first.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: one sales process and live dashboards",
      paragraphs: [
        "A sales organization tracked deals in separate spreadsheets, and building the monthly sales report took several business days each month. MP-365 set up one sales process in Dynamics 365 with live dashboards for leadership.",
        "Leaders now open a dashboard instead of waiting for a compiled report, and every rep works the same stages. See more delivery work on the [clients page](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "How long does a Dynamics 365 Sales implementation take?",
      paragraphs: [
        "A Dynamics 365 Sales implementation takes as long as the scope you choose, and MP-365 keeps the first release small so reps use it early. Duration depends on the number of sales processes, the data to import, the integrations and how fast your team can review and approve.",
        "The [pricing page](/pricing/) explains how MP-365 prices consulting. License fees are paid to Microsoft and are separate.",
      ],
    },
    {
      type: "prose",
      heading: "When Dynamics 365 Sales is not the right fit",
      paragraphs: [
        "Dynamics 365 Sales is a poor fit if you have two or three sellers and a simple contact list, or if your main need is billing or order fulfillment. A spreadsheet or a lighter tool will cost less to run. If your problem is service rather than selling, look at [Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/) instead. If your pain is on the finance side, the fix is in your ERP, and MP-365 only connects the two.",
      ],
    },
    {
      type: "prose",
      heading: "Related Dynamics 365 CRM services",
      paragraphs: [
        "Sales works best with a clear lead process, so many teams pair it with [lead management and attribution](/services/dynamics-365-crm/lead-management/). Teams that run campaigns add [Customer Insights](/services/dynamics-365-crm/customer-insights/), and teams that need quotes or orders from the ERP use [Dynamics 365 Integration Services](/services/dynamics-365-crm/integration-services/). Browse everything under [Dynamics 365 CRM consulting](/services/dynamics-365-crm/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What is Dynamics 365 Sales?",
      a: "Dynamics 365 Sales is Microsoft's cloud CRM for sales teams. It tracks accounts, contacts, leads, opportunities and quotes in one place, runs on Microsoft Dataverse, and connects to Outlook, Teams and Power BI. Leaders use it for pipeline views and forecasts. Sellers use it to plan their day.",
    },
    {
      q: "How long does a Dynamics 365 Sales implementation take?",
      a: "It depends on scope: the number of sales processes, data to import, integrations and approval speed. MP-365 releases a small working version first so reps start using the system early, then adds features. Describe your process on a discovery call and MP-365 will outline the stages.",
    },
    {
      q: "Is Dynamics 365 Sales a good fit for a mid-size company?",
      a: "Yes, if you have several sellers, more than one lead source and leaders who need a reliable forecast. Mid-size teams benefit from the Microsoft 365 connection and Power BI reporting. It is less suitable for a very small team that only needs a contact list.",
    },
    {
      q: "What is the difference between Sales Professional, Enterprise and Premium?",
      a: "Microsoft Learn (2026) describes Sales Enterprise as the full sales automation app, Sales Premium as Enterprise plus AI features such as predictive scoring and relationship intelligence, and Sales Professional as a lighter app with a subset of Enterprise tables. MP-365 helps you choose before you buy.",
    },
    {
      q: "What does a Dynamics 365 Sales consultant do?",
      a: "A Dynamics 365 Sales consultant maps your sales process, configures the app to match it, imports and cleans data, builds forecasts and dashboards, trains users and supports the system afterward. The best ones also tell you which features you do not need yet, which keeps the system simple.",
    },
    {
      q: "Can we move from an older CRM or on-premises Dynamics to Dynamics 365 Sales?",
      a: "Yes. MP-365 moves data from spreadsheets, other CRMs and on-premises Dynamics into the cloud app, with zero data loss as the goal. The team maps fields, removes duplicates and checks record counts before go-live so reps trust the data from the first day.",
    },
    {
      q: "Does Dynamics 365 Sales include forecasting?",
      a: "Yes. According to Microsoft Learn (2026), Sales Enterprise includes forecasting that compares seller commitments with quota, and Sales Premium adds predictive forecasting. MP-365 sets up the forecast hierarchy and columns so the numbers managers review match how your teams are organized.",
    },
    {
      q: "Can Dynamics 365 Sales connect to our ERP?",
      a: "Yes. MP-365 integrates Dynamics 365 Sales with ERP systems such as Business Central so customers, products and orders flow without double entry. MP-365 builds the connection, not the ERP itself. Read about [integration services](/services/dynamics-365-crm/integration-services/) for the approach.",
    },
    {
      q: "Can sellers work from Outlook and Teams?",
      a: "Yes. The Dynamics 365 App for Outlook shows CRM records beside email, and the Teams integration brings records into chats and meetings. MP-365 sets these up for the roles that need them, which reduces tab switching and the temptation to keep notes outside the CRM.",
    },
    {
      q: "Does Copilot work with Dynamics 365 Sales?",
      a: "Yes. Microsoft offers sales agents that research leads and summarize opportunities, and full capabilities require Microsoft 365 Copilot. Their output depends on CRM data quality. MP-365 cleans the data first, then sets up [Dynamics 365 Sales Agents](/services/copilot/sales-agents/).",
    },
  ],
  closing:
    "Microsoft Dynamics 365 Sales pays off when the process is simple, the data is clean and reps use it daily. MP-365 builds it that way, starting small and expanding as the team adopts it.",
  cta: {
    heading: "Plan your Dynamics 365 Sales project",
    body: "Tell MP-365 how your reps sell today. You will get a straight view of what to build first and what can wait.",
    text: "Book a free consultation",
  },
};

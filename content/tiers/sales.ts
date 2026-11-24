import type { TierPage } from "./types";

export const SALES_TIERS: TierPage = {
  path: "/dynamics-365-sales-tiers/",
  title: "Dynamics 365 Sales Professional vs Enterprise vs Premium",
  description:
    "Dynamics 365 Sales Professional vs Enterprise vs Premium, feature by feature: forecasting, Copilot, agents, limits and mixing rules. Find your tier.",
  h1: "Dynamics 365 Sales Professional vs Enterprise vs Premium",
  primaryKeyword: "dynamics 365 sales professional vs enterprise",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Dynamics 365 CRM Consultation", path: "/services/dynamics-365-crm/" },
    { name: "Dynamics 365 Sales", path: "/services/dynamics-365-crm/sales/" },
    { name: "Sales tiers compared", path: "/dynamics-365-sales-tiers/" },
  ],
  intro:
    "Dynamics 365 Sales Professional vs Enterprise comes down to process: Professional covers a straightforward pipeline, Enterprise adds forecasting, territories and Copilot, and Premium removes the AI limits and includes Copilot Credits for agents. Compare the three tiers below, or answer six questions and see which one fits your team.",
  reviewed: "November 2026",
  reviewedIso: "2026-11-24",
  sources: [
    {
      label: "Dynamics 365 Licensing Guide, November 2026",
      href: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/bizapps/Dynamics365LicensingGuide.pdf",
    },
    { label: "Microsoft Learn: Dynamics 365 Sales overview", href: "https://learn.microsoft.com/en-us/dynamics365/sales/overview" },
    { label: "Microsoft Learn: upgrade your Sales license", href: "https://learn.microsoft.com/en-us/dynamics365/sales/upgrade-sales-license" },
  ],
  priceHref: "https://www.microsoft.com/en-us/dynamics-365/products/sales/pricing",
  product: "Dynamics 365 Sales",
  tiers: [
    {
      id: "professional",
      mockup: "pipeline",
      name: "Professional",
      shortName: "Pro",
      quote: "Core sales force automation, Microsoft 365 interoperation, reporting, and dashboards.",
      role: "One clean pipeline for a team with a simple sales process.",
      pickWhen: [
        "You sell one way, through one pipeline",
        "Leads, opportunities and quotes cover the job",
        "Standard forms with a few extra fields are enough",
      ],
      thinkTwice: "You need forecasts against quota, territories or Copilot. Professional has none of them.",
    },
    {
      id: "enterprise",
      mockup: "forecast",
      name: "Enterprise",
      quote: "Industry-leading sales force automation with contextual insights, AI, and advanced customization.",
      role: "The full Sales Hub for teams with several stages, regions or product lines.",
      pickWhen: [
        "Managers forecast against quota by team",
        "Deals route by territory or product family",
        "Sellers want Copilot in Dynamics 365, Outlook and Teams",
      ],
      thinkTwice: "Your sellers will run sequences or AI scoring on more than 1,500 records a month.",
      badge: "The full Sales Hub",
    },
    {
      id: "premium",
      mockup: "agents",
      name: "Premium",
      quote: "Advanced sales intelligence, agentic insights and automation.",
      role: "Enterprise plus unlimited sales AI and Copilot Credits for agents.",
      pickWhen: [
        "Sequences and predictive scoring run at volume",
        "Leaders want predictive forecasting and relationship health",
        "Sales agents will work leads every day",
      ],
      thinkTwice: "Nobody will use the AI yet. The extra cost buys capacity your team will not touch.",
    },
  ],
  highlight: 1,
  productHref: "https://www.microsoft.com/en-us/dynamics-365/products/sales",
  shortAnswer: {
    heading: "Dynamics 365 Sales tiers: the short answer",
    items: [
      "**Professional** fits a team that sells one way, through one pipeline, with standard forms and no need for forecasting, territories or Copilot.",
      "**Enterprise** fits teams that forecast against quota, sell by territory or product line, customize heavily, or want Copilot in Dynamics 365, Outlook and Teams.",
      "**Premium** fits teams that run sequences, predictive scoring and sales agents across the whole pipeline every day.",
    ],
  },
  overview: {
    heading: "Three Dynamics 365 Sales tiers, three different jobs",
    intro:
      "Microsoft sells Dynamics 365 Sales in three tiers. The quotes are Microsoft's own descriptions; the rest is how they play out in a real sales team.",
  },
  ladder: {
    heading: "What each step up adds",
    intro: "Every tier includes everything in the one below it. Read the staircase left to right to see what you gain when you move up.",
    steps: [
      {
        title: "Professional",
        items: [
          "Accounts, contacts, leads and opportunities",
          "Quotes, orders and invoices with price lists",
          "Dynamics 365 App for Outlook and the mobile app",
          "Up to 15 custom tables",
        ],
      },
      {
        title: "Enterprise adds",
        items: [
          "Forecasting against quota",
          "Territories, competitors and sales goals",
          "Copilot in Dynamics 365 Sales, Outlook and Teams",
          "Sales accelerator and AI scoring, 1,500 records a month",
          "Conversation intelligence and mobile offline",
          "No limit on custom tables, plus custom apps",
        ],
      },
      {
        title: "Premium adds",
        items: [
          "No limit on sequences and predictive scoring",
          "Premium predictive forecasting",
          "Relationship analytics and health scores",
          "1,000 Copilot Credits per user each month for agents",
          "More Dataverse storage per tenant and per user",
        ],
      },
    ],
  },
  finder: {
    heading: "Which Dynamics 365 Sales tier fits your team?",
    intro: "Answer six questions. The tier updates as you go, with the reason behind it. Nothing is sent until you choose to send it.",
    questions: [
      {
        id: "process",
        label: "How does your team sell?",
        options: [
          { label: "One pipeline, one way of selling", needs: 0 },
          {
            label: "Several regions, teams or product lines",
            needs: 1,
            why: "Territories and product families are only in Enterprise and Premium.",
          },
        ],
      },
      {
        id: "forecast",
        label: "How do managers forecast?",
        options: [
          { label: "A pipeline view is enough", needs: 0 },
          { label: "Forecasts against quota, by team", needs: 1, why: "Forecasting is not included in Professional." },
          {
            label: "Predictive forecasts from past deals",
            needs: 2,
            why: "Predictive forecasting is included only in Premium.",
          },
        ],
      },
      {
        id: "customize",
        label: "How much will you customize?",
        options: [
          { label: "Standard forms with a few extra fields", needs: 0 },
          {
            label: "Custom apps, or more than 15 custom tables",
            needs: 1,
            why: "Professional allows up to 15 custom tables and no custom apps.",
          },
        ],
      },
      {
        id: "copilot",
        label: "Do your sellers want Copilot?",
        options: [
          { label: "Not yet", needs: 0 },
          {
            label: "Yes, summaries and email help",
            needs: 1,
            why: "Copilot in Dynamics 365 Sales, Outlook and Teams starts at Enterprise.",
          },
        ],
      },
      {
        id: "engagement",
        label: "Will sellers work from sequences and AI scores?",
        options: [
          { label: "No", needs: 0 },
          {
            label: "Some, on a smaller book of records",
            needs: 1,
            why: "Enterprise includes sequences and scoring for 1,500 records per environment per month.",
          },
          {
            label: "Yes, across the whole pipeline",
            needs: 2,
            why: "Premium removes the 1,500-record limit on sequences and predictive scoring.",
          },
        ],
      },
      {
        id: "agents",
        label: "Will AI sales agents work your leads?",
        options: [
          { label: "Not on the roadmap", needs: 0 },
          {
            label: "A pilot first",
            needs: 0,
            why: "Agents run on Copilot Credits, which you can buy separately on any tier.",
          },
          {
            label: "Every day, across the team",
            needs: 2,
            why: "Premium includes 1,000 Copilot Credits per user each month.",
          },
        ],
      },
    ],
  },
  matrix: {
    heading: "Dynamics 365 Sales tiers, feature by feature",
    intro: "Read from Microsoft's Dynamics 365 Licensing Guide. A dash means the tier does not include it.",
    groups: [
      {
        title: "Core sales records",
        rows: [
          { feature: "Accounts, contacts and activities", cells: [true, true, true] },
          { feature: "Leads and opportunities", cells: [true, true, true] },
          { feature: "Quotes, orders and invoices", cells: [true, true, true] },
          { feature: "Products, price lists and bundles", cells: [true, true, true] },
          { feature: "Product families and relationships", cells: [false, true, true] },
          { feature: "Competitors, sales goals and sales literature", cells: [false, true, true] },
          { feature: "Territories", cells: [false, true, true] },
          { feature: "Marketing lists and quick campaigns", cells: [true, true, true] },
        ],
      },
      {
        title: "Pipeline and forecasting",
        rows: [
          { feature: "Business process flows", note: "Professional can customize up to 5", cells: ["Up to 5", true, true] },
          { feature: "Forecasting against quota", cells: [false, true, true] },
          { feature: "Premium predictive forecasting", cells: [false, false, true] },
          { feature: "Mobile app", cells: [true, true, true] },
          { feature: "Mobile offline", cells: [false, true, true] },
        ],
      },
      {
        title: "Selling tools and AI",
        rows: [
          { feature: "Sales accelerator and sequences", cells: [false, "1,500 records a month", "No limit"] },
          { feature: "Predictive lead and opportunity scoring", cells: [false, "1,500 records a month", "No limit"] },
          { feature: "Conversation intelligence", cells: [false, true, true] },
          { feature: "Relationship analytics", cells: [false, "Basic", "Advanced, with health scores"] },
          { feature: "Email engagement and auto capture", cells: [false, true, true] },
          { feature: "Copilot in Dynamics 365 Sales", cells: [false, true, true] },
          { feature: "Copilot in Outlook and Teams", cells: [false, true, true] },
          { feature: "Sales agents", note: "Qualification, Opportunity and Research agents", cells: ["Credits bought separately", "Credits bought separately", "1,000 credits per user a month"] },
          { feature: "AI-powered data enrichment", cells: [false, false, true] },
        ],
      },
      {
        title: "Customization and platform",
        rows: [
          { feature: "Custom tables", cells: ["Up to 15", "No limit", "No limit"] },
          { feature: "Custom reports, charts and dashboards", cells: ["Up to 5", true, true] },
          { feature: "Custom apps", cells: [false, true, true] },
          { feature: "Embedded intelligence", cells: [false, true, true] },
          { feature: "Customer Voice surveys", note: "Per tenant", cells: [false, "2,000 responses a month", "2,000 responses a month"] },
          { feature: "App your sellers use", cells: ["Sales Professional app", "Sales Hub", "Sales Hub"] },
        ],
      },
      {
        title: "Dataverse storage",
        rows: [
          { feature: "Database, default per tenant", cells: ["30 GB", "30 GB", "45 GB"] },
          { feature: "Database, added per user license", cells: [false, "250 MB", "500 MB"] },
          { feature: "File, default per tenant", cells: ["40 GB", "40 GB", "60 GB"] },
          { feature: "File, added per user license", cells: [false, "2 GB", "2 GB"] },
        ],
      },
    ],
  },
  outgrow: {
    heading: "Signs Professional will hold your sales team back",
    intro: "Professional is a good tier for the right team. These are the signals that a team has outgrown it, usually found after the contract is signed.",
    cards: [
      {
        title: "The forecast lives in a spreadsheet",
        body: "Professional has no forecasting. If managers already roll up commitments by team, they will keep doing it outside the CRM.",
      },
      {
        title: "You sell by region or product line",
        body: "Territories and product families are Enterprise features. Without them, ownership rules end up in people's heads.",
      },
      {
        title: "Table 16 is on the roadmap",
        body: "Professional allows up to 15 custom tables and no custom apps. Industry-specific records such as projects, sites or equipment fill that fast.",
      },
      {
        title: "Sellers ask for Copilot",
        body: "Copilot in Dynamics 365 Sales, Outlook and Teams starts at Enterprise. On Professional, the answer to that request is an upgrade.",
      },
      {
        title: "Service is moving onto Enterprise",
        body: "Professional and Enterprise users cannot share an environment. If Customer Service Enterprise is coming, a Professional sales team ends up on its own island.",
      },
    ],
  },
  rules: {
    heading: "Mixing Dynamics 365 Sales tiers and moving up",
    intro: "The licensing rules decide more than the feature list does. These come straight from Microsoft's licensing guide.",
    items: [
      {
        title: "One environment, one family",
        body: "Microsoft does not allow Enterprise and Professional users in the same environment. You can run both in one tenant, in separate environments, and each user reaches only the environment their license covers.",
      },
      {
        title: "Premium and Enterprise mix",
        body: "Premium includes everything in Enterprise, and both use the Sales Hub app. The guide's rule against combining tiers in one environment is written about Professional.",
      },
      {
        title: "The base license is the priciest one",
        body: "Every full user needs a base license, and it must be the highest-priced app they use. A second Dynamics 365 app is then added at a lower attach price.",
      },
    ],
    stepsHeading: "How an upgrade from Professional works",
    steps: [
      { name: "Buy the new licenses", description: "Purchase Sales Enterprise or Sales Premium for the users who move." },
      { name: "Assign them", description: "Assign the new licenses in the Microsoft 365 admin center." },
      { name: "Install the Sales Hub", description: "Install the app that matches the new license. Data is kept when you switch." },
      { name: "Remove the old solution", description: "Remove the Sales Professional solution, then rebuild the forms, views and app settings it held." },
    ],
  },
  ai: {
    heading: "Copilot and AI agents in each Dynamics 365 Sales tier",
    intro: "AI is now the biggest difference between the tiers. Here is what each one gets.",
    columns: [
      "**No Copilot in the app.** Sales agents can still run if you buy Copilot Credits separately, but sellers get no Copilot summaries, email help or meeting prep inside Dynamics 365.",
      "**Copilot is built in.** Record summaries, meeting prep and email help in Dynamics 365, Outlook and Teams. Sequences and AI scoring cover 1,500 records a month. Agents run on Copilot Credits you buy.",
      "**AI without the limits.** No cap on sequences or scoring, predictive forecasting, relationship health, and 1,000 Copilot Credits per user each month to run the sales agents.",
    ],
  },
  setup: {
    heading: "What MP-365 sets up once you choose",
    intro: "A tier is a set of permissions. The value comes from how it is configured for your sellers.",
    cards: [
      {
        title: "The pipeline your reps use",
        body: "Stages, required fields, ownership rules and forecasts built around how your team actually sells.",
        href: "/services/dynamics-365-crm/sales/",
        linkText: "Dynamics 365 Sales consulting",
      },
      {
        title: "Agents on clean data",
        body: "Qualification and research agents set up on top of records your team trusts, with credits sized to real use.",
        href: "/services/copilot/sales-agents/",
        linkText: "Dynamics 365 Sales Agents",
      },
      {
        title: "Dashboards leaders open",
        body: "Pipeline and forecast dashboards in Power BI, so the monthly sales review stops being a compiled report.",
        href: "/services/power-platform/power-bi/",
        linkText: "Power BI dashboards",
      },
    ],
  },
  related: {
    heading: "Read more about each Dynamics 365 Sales tier",
    links: [
      { href: "/blog/what-is-dynamics-365-sales-professional/", title: "Dynamics 365 Sales Professional", body: "What the entry tier covers and where its ceiling is." },
      { href: "/blog/what-is-dynamics-365-sales-enterprise/", title: "Dynamics 365 Sales Enterprise", body: "The middle tier for multi-stage sales processes." },
      { href: "/blog/what-is-dynamics-365-sales-premium/", title: "Dynamics 365 Sales Premium", body: "The AI tier, agents and the credit math." },
      { href: "/blog/salesforce-vs-dynamics-365-sales/", title: "Salesforce vs Dynamics 365 Sales", body: "How the two CRMs compare for a Microsoft shop." },
    ],
  },
  faqs: [
    {
      q: "What is the difference between Dynamics 365 Sales Professional and Enterprise?",
      a: "Professional covers core records: accounts, contacts, leads, opportunities, quotes, orders and invoices. Enterprise adds forecasting, territories, competitors, sales goals, Copilot, the sales accelerator, conversation intelligence and unlimited custom tables. Professional users work in the Sales Professional app, Enterprise users in the Sales Hub.",
    },
    {
      q: "What does Sales Premium add over Sales Enterprise?",
      a: "Premium removes the 1,500-record monthly limit on sequences and predictive scoring, and adds premium predictive forecasting, advanced relationship analytics with health scores, AI data enrichment, extra Dataverse storage and 1,000 Copilot Credits per user each month for the sales agents.",
    },
    {
      q: "Is Copilot included in Dynamics 365 Sales Professional?",
      a: "No. According to Microsoft's licensing guide, Copilot in Dynamics 365 Sales and Copilot in Outlook and Teams start at Sales Enterprise. Professional users can still use sales agents if the organization buys Copilot Credits separately, but they get no Copilot inside the app.",
    },
    {
      q: "Can we mix Sales Professional and Sales Enterprise users?",
      a: "Not in the same environment. Microsoft allows both tiers in one tenant only in separate environments, and each user can reach only the environment their license covers. Enterprise and Premium users can share an environment, because Premium includes everything in Enterprise.",
    },
    {
      q: "Can we upgrade from Sales Professional to Enterprise later?",
      a: "Yes. You buy and assign the new licenses, install the Sales Hub app and remove the Sales Professional solution. Microsoft says your data is kept. Forms, views and app settings tied to the old solution need rebuilding, so plan the move instead of treating it as a license swap.",
    },
    {
      q: "How many custom tables does Sales Professional allow?",
      a: "Up to 15 custom tables per application, on top of the standard tables. Professional also caps customized business process flows at 5 and custom reports, charts and dashboards at 5, and it allows no custom apps. Enterprise and Premium have no limit on custom tables.",
    },
    {
      q: "Is LinkedIn Sales Navigator included in any Sales tier?",
      a: "Not in Professional, Enterprise or Premium. Microsoft bundles LinkedIn Sales Navigator Advanced Plus only in Microsoft Relationship Sales, which pairs Sales Enterprise with Sales Navigator and needs at least 10 seats. Dynamics 365 agents are not included in that bundle.",
    },
    {
      q: "Which Dynamics 365 Sales tier is right for a mid-size B2B company?",
      a: "It depends on process, not size. A single pipeline with standard forms fits Professional. Forecasts by team, territories or Copilot need Enterprise. Premium pays off when sellers run sequences, scoring or agents across the whole pipeline every day. The tier finder above maps your answers to a tier.",
    },
  ],
  closing:
    "Choosing between Dynamics 365 Sales Professional vs Enterprise vs Premium is a licensing decision that shapes your whole CRM, so make it on process and AI use, not on headcount. If a lower tier covers your team, MP-365 will say so before you buy more.",
  cta: {
    heading: "Get a second opinion on your Dynamics 365 Sales tier",
    body: "Tell MP-365 how your team sells. You get a straight answer on the tier, and what it takes to set it up.",
    text: "Book a free consultation",
  },
};

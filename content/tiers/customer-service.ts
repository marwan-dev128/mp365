import type { TierPage } from "./types";

export const CUSTOMER_SERVICE_TIERS: TierPage = {
  path: "/dynamics-365-customer-service-tiers/",
  title: "Dynamics 365 Customer Service Professional vs Enterprise",
  description:
    "Dynamics 365 Customer Service Professional vs Enterprise vs Premium: routing, channels, Copilot, agents and mixing rules side by side. Find your tier.",
  h1: "Dynamics 365 Customer Service Professional vs Enterprise vs Premium",
  primaryKeyword: "dynamics 365 customer service professional vs enterprise",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: "Dynamics 365 CRM Consultation", path: "/services/dynamics-365-crm/" },
    { name: "Dynamics 365 Customer Service", path: "/services/dynamics-365-crm/customer-service/" },
    { name: "Customer Service tiers compared", path: "/dynamics-365-customer-service-tiers/" },
  ],
  intro:
    "Dynamics 365 Customer Service Professional vs Enterprise comes down to how cases reach your team: Professional covers case and knowledge management, Enterprise adds routing, a multisession workspace, Copilot and analytics, and Premium adds voice and digital channels with Copilot Credits for agents. Compare the three tiers below, or answer six questions and see which one fits.",
  reviewed: "November 2026",
  reviewedIso: "2026-11-24",
  sources: [
    {
      label: "Dynamics 365 Licensing Guide, November 2026",
      href: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/bizapps/Dynamics365LicensingGuide.pdf",
    },
    { label: "Microsoft: Customer Service plans and features", href: "https://www.microsoft.com/en-us/dynamics-365/products/customer-service/pricing" },
    { label: "Microsoft Learn: unified routing overview", href: "https://learn.microsoft.com/en-us/dynamics365/customer-service/administer/overview-unified-routing" },
  ],
  priceHref: "https://www.microsoft.com/en-us/dynamics-365/products/customer-service/pricing",
  product: "Dynamics 365 Customer Service",
  tiers: [
    {
      id: "professional",
      name: "Professional",
      shortName: "Pro",
      quote: "Streamlined case management resources for service representatives and self-service in simpler scenarios.",
      role: "Cases and knowledge for a team that works one queue.",
      pickWhen: [
        "Cases arrive by email and web form",
        "Representatives pick work from a shared queue",
        "Standard case forms fit your process",
      ],
      thinkTwice: "You need routing by skill, Teams, Copilot or live chat. Professional includes none of them.",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      quote: "Advanced AI-based customer service resources for representatives and self-service for complex scenarios.",
      role: "Routing, a multisession workspace, Copilot and analytics for a growing service team.",
      pickWhen: [
        "Cases route by skill, priority or customer",
        "Representatives handle several sessions at once",
        "Leaders want KPIs, forecasting and quality reviews",
      ],
      thinkTwice: "Chat and voice are core to your service. Enterprise adds them only through paid add-ons.",
      badge: "Routing and Copilot included",
    },
    {
      id: "premium",
      name: "Premium",
      quote: "Transform customer engagement with an integrated contact center and CRM service solution, all powered by generative AI.",
      role: "Enterprise plus voice and digital channels, bots, IVR and Copilot Credits.",
      pickWhen: [
        "Phone, chat and messaging run in one workspace",
        "Self-service bots and IVR take the first contact",
        "Service agents will handle work every day",
      ],
      thinkTwice: "You run email cases only. Premium's channels and credits would go unused.",
    },
  ],
  highlight: 1,
  productHref: "https://www.microsoft.com/en-us/dynamics-365/products/customer-service",
  shortAnswer: {
    heading: "Dynamics 365 Customer Service tiers: the short answer",
    items: [
      "**Professional** fits a team that works email and web cases from one shared queue, with standard case forms.",
      "**Enterprise** fits teams that route cases by skill or priority, handle several sessions at once, want Copilot, or need KPIs and workforce planning.",
      "**Premium** fits teams that run phone, chat and messaging in one workspace, with service agents working cases every day.",
    ],
  },
  overview: {
    heading: "Three Dynamics 365 Customer Service tiers, three different teams",
    intro:
      "Microsoft sells Dynamics 365 Customer Service in three tiers. The quotes are Microsoft's own descriptions; the rest is how they play out on a real service floor.",
  },
  ladder: {
    heading: "What each step up adds",
    intro: "Every tier includes everything in the one below it, with one exception noted. Read the staircase left to right.",
    steps: [
      {
        title: "Professional",
        items: [
          "Case management",
          "Knowledge management and authoring",
          "Outlook, Exchange, Excel and SharePoint",
          "Up to 15 custom tables",
        ],
      },
      {
        title: "Enterprise adds",
        items: [
          "Unified routing with skills-based assignment",
          "Multisession workspace and Teams integration",
          "Copilot summaries, email and chat drafts",
          "Analytics, KPIs and Customer Service Insights",
          "Workforce engagement: forecasting, shifts, quality",
          "Custom apps and no limit on custom tables",
        ],
      },
      {
        title: "Premium adds",
        items: [
          "Live chat, messaging and social channels",
          "Native voice, with call intelligence",
          "Self-service bots and IVR",
          "1,000 Copilot Credits per user each month",
          "Note: Customer Voice surveys are not included",
        ],
      },
    ],
  },
  finder: {
    heading: "Which Dynamics 365 Customer Service tier fits your team?",
    intro: "Answer six questions. The tier updates as you go, with the reason behind it. Nothing is sent until you choose to send it.",
    questions: [
      {
        id: "channels",
        label: "How do customers reach you?",
        options: [
          { label: "Email and web forms", needs: 0 },
          {
            label: "Add chat or messaging",
            needs: 1,
            why: "Chat and messaging need Enterprise with the digital channel add-on, or Premium.",
          },
          {
            label: "Phone, chat and messaging together",
            needs: 2,
            why: "Premium includes voice and digital channels in one license.",
          },
        ],
      },
      {
        id: "routing",
        label: "How does work reach representatives?",
        options: [
          { label: "They pick from a shared queue", needs: 0 },
          {
            label: "By skill, priority or customer",
            needs: 1,
            why: "Unified routing with skills-based assignment starts at Enterprise.",
          },
        ],
      },
      {
        id: "workspace",
        label: "How do representatives work?",
        options: [
          { label: "One case at a time", needs: 0 },
          {
            label: "Several sessions at once, with Teams",
            needs: 1,
            why: "The multisession workspace and Teams integration are not in Professional.",
          },
        ],
      },
      {
        id: "copilot",
        label: "Do you want Copilot to help representatives?",
        options: [
          { label: "Not yet", needs: 0 },
          {
            label: "Yes, summaries and drafted replies",
            needs: 1,
            why: "Copilot in Customer Service starts at Enterprise.",
          },
        ],
      },
      {
        id: "operations",
        label: "What do service leaders need?",
        options: [
          { label: "Basic case reports", needs: 0 },
          {
            label: "KPIs, forecasting, shifts and quality reviews",
            needs: 1,
            why: "Analytics and workforce engagement management start at Enterprise.",
          },
        ],
      },
      {
        id: "agents",
        label: "Will AI agents handle cases, intent or knowledge?",
        options: [
          { label: "Not on the roadmap", needs: 0 },
          {
            label: "A pilot first",
            needs: 0,
            why: "Agents run on Copilot Credits, which you can buy separately on any tier.",
          },
          {
            label: "Every day, at volume",
            needs: 2,
            why: "Premium includes 1,000 Copilot Credits per user each month.",
          },
        ],
      },
    ],
  },
  matrix: {
    heading: "Dynamics 365 Customer Service tiers, feature by feature",
    intro: "Read from Microsoft's feature table and Dynamics 365 Licensing Guide. A dash means the tier does not include it.",
    groups: [
      {
        title: "Cases and knowledge",
        rows: [
          { feature: "Case management", cells: [true, true, true] },
          { feature: "Knowledge management and authoring", cells: [true, true, true] },
          { feature: "Outlook, Exchange, Excel and SharePoint", cells: [true, true, true] },
          { feature: "Microsoft Teams integration", cells: [false, true, true] },
          { feature: "Embedded intelligence", cells: [false, true, true] },
        ],
      },
      {
        title: "Routing and workspace",
        rows: [
          { feature: "Unified routing", note: "Classification and skills-based assignment. Enterprise lists 50 record routes per user a month", cells: [false, true, true] },
          { feature: "Multisession workspace", cells: [false, true, true] },
        ],
      },
      {
        title: "Channels",
        rows: [
          { feature: "Live chat, messaging and social", cells: [false, "Add-on", true] },
          { feature: "Voice", note: "Calling runs on Azure Communication Services, billed separately", cells: [false, "Add-on", true] },
          { feature: "Self-service bots and IVR", cells: [false, "Add-on", true] },
        ],
      },
      {
        title: "Copilot and agents",
        rows: [
          { feature: "Copilot in Customer Service", note: "Summaries, email and chat drafts, questions on case data", cells: [false, true, true] },
          { feature: "Copilot side chat in the app", cells: [false, true, true] },
          {
            feature: "Service agents",
            note: "Case Management, Customer Intent, Knowledge Management, Quality Evaluation",
            cells: ["Credits bought separately", "Credits bought separately", "1,000 credits per user a month"],
          },
        ],
      },
      {
        title: "Analytics and operations",
        rows: [
          { feature: "Analytics and KPI reporting", cells: [false, true, true] },
          { feature: "Customer Service Insights", cells: [false, true, true] },
          { feature: "Workforce engagement management", note: "Forecasting, shift planning, quality management", cells: [false, true, true] },
          { feature: "Power BI", note: "A separate Power BI license may be needed", cells: [true, true, true] },
          { feature: "Customer Voice surveys", cells: ["Add-on", "2,000 responses a month", false] },
        ],
      },
      {
        title: "Customization and storage",
        rows: [
          { feature: "Custom tables", cells: ["Up to 15", "No limit", "No limit"] },
          { feature: "Custom apps with Power Apps", cells: [false, true, true] },
          { feature: "Workflow automation with Power Automate", cells: [false, true, true] },
          { feature: "Dataverse database, default per tenant", cells: ["30 GB", "30 GB", "30 GB"] },
          { feature: "Dataverse database, added per user license", cells: [false, "250 MB", "250 MB"] },
        ],
      },
    ],
  },
  outgrow: {
    heading: "Signs Professional will hold your service team back",
    intro: "Professional suits a small team on one queue. These are the signals that a team has outgrown it, usually found after go-live.",
    cards: [
      {
        title: "Urgent cases wait behind easy ones",
        body: "Professional has no unified routing. Everyone picks from the same queue, so priority depends on who looks first.",
      },
      {
        title: "Customers ask for chat",
        body: "Chat, messaging and voice are not available on Professional. The channel add-ons require an Enterprise deployment.",
      },
      {
        title: "Representatives juggle tabs",
        body: "The multisession workspace and Teams integration start at Enterprise. On Professional, a representative works one case at a time.",
      },
      {
        title: "Leaders want real KPIs",
        body: "Analytics, Customer Service Insights and workforce engagement management are Enterprise features. Professional leaders build their reports by hand.",
      },
      {
        title: "Sales is on Enterprise",
        body: "Professional and Enterprise users cannot share an environment. If your sales team runs Sales Enterprise, a Professional service team sits apart from it.",
      },
    ],
  },
  rules: {
    heading: "Mixing Dynamics 365 Customer Service tiers and moving up",
    intro: "The licensing rules decide more than the feature list does. These come from Microsoft's licensing guide and Microsoft Learn.",
    items: [
      {
        title: "One environment, one family",
        body: "Microsoft does not allow Enterprise and Professional users in the same environment. Both can live in one tenant in separate environments, and each user reaches only the environment their license covers.",
      },
      {
        title: "Channel add-ons need Enterprise",
        body: "Enterprise users can add digital channels, voice or both. The add-ons require a Customer Service Enterprise deployment, so they are not an option on Professional.",
      },
      {
        title: "Enterprise can step up to Premium",
        body: "Microsoft added a step-up from Customer Service Enterprise to Premium in March 2026, for teams that grow into voice and digital channels.",
      },
    ],
    stepsHeading: "How a move between tiers works",
    steps: [
      { name: "Decide who moves", description: "Choose the representatives and supervisors who need the higher tier, environment by environment." },
      { name: "Buy and assign licenses", description: "Purchase the new licenses and replace the old ones in the Microsoft 365 admin center." },
      { name: "Set up the new features", description: "Configure routing, the workspace, Copilot or channels. A license unlocks them; it does not configure them." },
      { name: "Check the licensing guide", description: "Microsoft Learn asks admins to review the guide after a move, since use rights change with the tier." },
    ],
  },
  ai: {
    heading: "Copilot and AI agents in each Customer Service tier",
    intro: "AI is now one of the biggest differences between the tiers. Here is what each one gets.",
    columns: [
      "**No Copilot in the app.** The four service agents can still run if you buy Copilot Credits separately, but representatives get no Copilot summaries or drafted replies.",
      "**Copilot is built in.** Case and conversation summaries, drafted emails and chat replies, and answers from your knowledge base. Agents run on Copilot Credits you buy.",
      "**Copilot plus credits.** Everything in Enterprise, voice and chat for Copilot to work in, and 1,000 Copilot Credits per user each month to run the service agents.",
    ],
  },
  setup: {
    heading: "What MP-365 sets up once you choose",
    intro: "A tier is a set of permissions. The value comes from how cases, queues and knowledge are configured.",
    cards: [
      {
        title: "Cases that route themselves",
        body: "Queues, routing rules, SLAs and the representative workspace built around how your team handles work.",
        href: "/services/dynamics-365-crm/customer-service/",
        linkText: "Dynamics 365 Customer Service consulting",
      },
      {
        title: "Service connected to the rest",
        body: "Customer, order and product data flowing between Dynamics 365 and the systems your representatives check today.",
        href: "/services/dynamics-365-crm/integration-services/",
        linkText: "Dynamics 365 integration",
      },
      {
        title: "A portal customers use",
        body: "A self-service site on Power Pages where customers open cases and find answers before they call.",
        href: "/services/power-platform/power-pages/",
        linkText: "Power Pages portals",
      },
    ],
  },
  related: {
    heading: "Read more about Dynamics 365 Customer Service",
    links: [
      { href: "/blog/what-is-microsoft-dynamics-365-customer-service/", title: "What is Dynamics 365 Customer Service?", body: "The app, the tiers and who it suits." },
      { href: "/blog/customer-service-case-routing-fixing-shared-inbox/", title: "Fixing the shared inbox", body: "How case routing replaces a busy shared mailbox." },
      { href: "/blog/dynamics-365-sla-breaches/", title: "Stopping SLA breaches", body: "Why SLAs slip in Dynamics 365 and how to fix them." },
      { href: "/blog/a-clients-fix-duplicate-cases-in-dynamics-365-customer-service/", title: "Fixing duplicate cases", body: "A client fix for cases created twice." },
    ],
  },
  faqs: [
    {
      q: "What is the difference between Customer Service Professional and Enterprise?",
      a: "Professional covers case management, knowledge management and Microsoft 365 integration. Enterprise adds unified routing, the multisession workspace, Teams integration, Copilot, analytics and KPIs, workforce engagement management, custom apps and unlimited custom tables. Enterprise is also the only base for the chat and voice add-ons.",
    },
    {
      q: "What does Customer Service Premium include over Enterprise?",
      a: "Premium bundles Enterprise with Microsoft's voice and digital channels: live chat, messaging, social, voice, self-service bots and IVR. It also includes 1,000 Copilot Credits per user each month for the service agents. One difference runs the other way: Customer Voice surveys are included with Enterprise but not with Premium.",
    },
    {
      q: "Does Customer Service Professional include Copilot?",
      a: "No. Microsoft's feature table lists Copilot in Customer Service for Enterprise and Premium only, and Copilot side chat in the app needs an Enterprise or Premium license. Professional users can still use service agents if the organization buys Copilot Credits separately.",
    },
    {
      q: "Can we mix Customer Service Professional and Enterprise users?",
      a: "Not in the same environment. Microsoft's licensing guide and Microsoft Learn both say Enterprise and Professional users cannot share one. You can run both tiers in one tenant in separate environments, and each user can access only the environment their license covers.",
    },
    {
      q: "Does Customer Service Professional support live chat or voice?",
      a: "No. Live chat, messaging, social, voice, bots and IVR are not available on Professional. Enterprise users can buy digital and voice add-ons, which require an Enterprise deployment, and Premium includes both channels in the license.",
    },
    {
      q: "Which tier includes unified routing?",
      a: "Enterprise and Premium. Unified routing classifies incoming work and assigns it by skill, priority or capacity, and Microsoft's licensing guide lists 50 record routes per user each month with Enterprise. Professional has no unified routing, so representatives pick work from shared queues.",
    },
    {
      q: "How do Copilot Credits work for the service agents?",
      a: "The Case Management, Customer Intent, Knowledge Management and Quality Evaluation agents use Copilot Credits. Premium includes 1,000 credits per user each month, pooled at the tenant level. On Professional and Enterprise you buy credits separately, through a pre-purchase plan or pay-as-you-go. Unused credits do not carry over.",
    },
    {
      q: "Which Customer Service tier is right for a growing support team?",
      a: "Start from how cases arrive and how they should be assigned. Email cases picked from one queue fit Professional. Routing by skill, multisession work, Copilot or real KPIs need Enterprise. Premium fits teams running phone and chat in one workspace. The tier finder above maps your answers.",
    },
  ],
  closing:
    "Choosing between Dynamics 365 Customer Service Professional vs Enterprise vs Premium is a decision about channels, routing and AI, not headcount. If a lower tier covers your service team, MP-365 will say so before you buy more.",
  cta: {
    heading: "Get a second opinion on your Customer Service tier",
    body: "Tell MP-365 how cases reach your team. You get a straight answer on the tier, and what it takes to set it up.",
    text: "Book a free consultation",
  },
};

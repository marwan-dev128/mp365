import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/dynamics-365-crm/customer-service/",
  intro:
    "Dynamics 365 Customer Service gives support teams one place to track every customer issue as a case, with an owner, a status and a deadline. MP-365 handles the Dynamics 365 Customer Service implementation for mid-size and enterprise teams that run support from shared inboxes, spreadsheets or an outgrown help desk.",
  atAGlance: {
    bestFor:
      "Service and operations leaders whose customers wait on email replies, and whose agents cannot see who owns which issue.",
    includes:
      "Case design, queues and routing, service level agreements, entitlements, knowledge articles, email and portal intake, dashboards, user training and support.",
    notIncluded:
      "ERP implementation, outsourced help desk or managed IT support, Microsoft license resale and custom software development.",
    howItStarts:
      "A discovery call about how requests reach you today, then a review of your inboxes, tools and current case data.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What is Dynamics 365 Customer Service?",
      paragraphs: [
        "Dynamics 365 Customer Service is Microsoft's case management app for support teams. It turns each request into a case, records every interaction against it, and lets agents share answers from a knowledge base.",
        "According to Microsoft Learn (2026), the app also covers unified routing, service level agreements (SLAs), entitlements, conversations across channels including voice, and collaboration in Microsoft Teams. Copilot Service workspace is the main app for service representatives. For new organizations with Enterprise licenses, it replaces the older Customer Service Hub.",
      ],
    },
    {
      type: "steps",
      heading: "How case management works in Dynamics 365 Customer Service",
      steps: [
        {
          name: "A request arrives",
          description:
            "A customer emails a monitored mailbox, calls, chats or submits a portal form.",
        },
        {
          name: "The system creates a case",
          description:
            "Rules create a case from the message and link it to the right customer account and contact.",
        },
        {
          name: "The case is classified and routed",
          description:
            "Routing rules set priority and send the case to a queue, or straight to an agent with the right skills.",
        },
        {
          name: "An SLA timer starts",
          description:
            "The SLA tracks the first response and the resolution deadline and warns the team before a deadline is missed.",
        },
        {
          name: "An agent works the case",
          description:
            "The agent sees the full history, searches knowledge articles and pulls in colleagues through Teams.",
        },
        {
          name: "The case is resolved",
          description:
            "The agent records the resolution and closes the case, and reports update the same day.",
        },
      ],
    },
    {
      type: "list",
      heading: "Customer service problems this work solves",
      items: [
        "**Nobody owns the issue:** three people reply to the same email, or none do.",
        "**Status lives in someone's head:** a manager asks for updates by chat because the system cannot show them.",
        "**Urgent cases look like normal ones:** a plant-down call sits behind a password reset.",
        "**Answers get rewritten:** each agent solves the same question from scratch because knowledge is not shared.",
        "**Customers repeat themselves:** a new agent has no history, so the customer explains the problem again.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 delivers a Dynamics 365 Customer Service implementation",
      steps: [
        {
          name: "Trace how requests arrive",
          description:
            "List every channel customers use today, the mailboxes involved and who answers each one.",
        },
        {
          name: "Define case types and priorities",
          description:
            "Agree what counts as a case, the categories you report on and what makes a case urgent.",
        },
        {
          name: "Design queues and routing",
          description:
            "Decide which team gets which case and how work is assigned when someone is away.",
        },
        {
          name: "Set up SLAs and entitlements",
          description:
            "Translate your service promises into first-response and resolution timers, tied to customer terms where they apply.",
        },
        {
          name: "Build the agent workspace",
          description:
            "Configure Copilot Service workspace so agents see the case, history and knowledge in one view.",
        },
        {
          name: "Load knowledge and past cases",
          description:
            "Import the answers your team already uses and any case history worth keeping.",
        },
        {
          name: "Pilot, refine and go live",
          description:
            "Run one team in the system, fix what slows them down, then release to everyone with training.",
        },
        {
          name: "Support and tune",
          description:
            "Review SLA misses and reopened cases after launch and adjust routing and knowledge.",
        },
      ],
    },
    {
      type: "table",
      heading: "Customer Service building blocks MP-365 configures",
      headers: ["Building block", "What it does", "Decision MP-365 helps you make"],
      rows: [
        [
          "Cases",
          "Tracks one customer issue from request to resolution",
          "Which fields agents must fill and which they can skip",
        ],
        [
          "Queues",
          "Holds work for a team until someone picks it up",
          "One queue per team, product or region",
        ],
        [
          "Unified routing",
          "Classifies work and assigns it to the right queue or agent",
          "Whether simple queues are enough, or skill-based assignment pays off",
        ],
        [
          "Service level agreements",
          "Times first response and resolution against a target",
          "Which targets you can honestly meet",
        ],
        [
          "Entitlements",
          "Defines what support a customer is owed",
          "Whether contract terms need to drive the SLA",
        ],
        [
          "Knowledge articles",
          "Stores approved answers that agents and customers can search",
          "Who writes, reviews and retires articles",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Microsoft products involved in a Customer Service project",
      paragraphs: [
        "Customer Service runs on Microsoft Dataverse and shares customer records with Dynamics 365 Sales, so account teams see open cases. Copilot Service workspace is the agent app, and Teams, Outlook and SharePoint support daily collaboration and documents.",
        "Customers can log and follow their own cases through a portal built with [Power Pages](/services/power-platform/power-pages/). [Power Automate](/services/power-platform/power-automate/) handles notifications and approvals, and [Power BI](/services/power-platform/power-bi/) reports on SLA performance. Microsoft also provides Copilot features in the workspace that help agents summarize cases and find information, and MP-365 turns them on once knowledge and case data are in good shape.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: replacing email-based support with one case system",
      paragraphs: [
        "A company handled customer issues through email threads. Nobody could see who owned a request, what state it was in or how urgent it was. MP-365 set up case tracking in Dynamics 365 so each issue shows its owner, status and urgency in one system.",
        "Managers now filter by urgency instead of asking for updates. The [clients page](/clients/) lists more MP-365 work.",
      ],
    },
    {
      type: "prose",
      heading: "When Dynamics 365 Customer Service is not the right fit",
      paragraphs: [
        "Dynamics 365 Customer Service is not the right fit if one or two people answer a handful of emails a day, or if you want an outsourced help desk. MP-365 builds and supports the system, but it does not staff your support team or run an IT help desk. For internal IT tickets, a tool built for that purpose is usually simpler.",
      ],
    },
    {
      type: "prose",
      heading: "Related Dynamics 365 CRM services",
      paragraphs: [
        "Service data gets more useful when it reaches other systems, so see [Dynamics 365 Integration Services](/services/dynamics-365-crm/integration-services/) for connecting orders, assets or invoices to your cases. The full set of services sits under [Dynamics 365 CRM consulting](/services/dynamics-365-crm/). For cost, read the [pricing page](/pricing/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What is Dynamics 365 Customer Service?",
      a: "Dynamics 365 Customer Service is Microsoft's case management app for support teams. It tracks customer issues as cases, records every interaction, shares knowledge articles, routes work to the right team and times responses with service level agreements. It runs on Microsoft Dataverse and shares records with Dynamics 365 Sales.",
    },
    {
      q: "How does case management work in Dynamics 365 Customer Service?",
      a: "A request becomes a case linked to the customer. Routing rules set priority and send it to a queue or an agent, an SLA timer tracks the deadline, and the agent resolves it using the case history and knowledge articles. Managers see status and urgency on dashboards without asking for updates.",
    },
    {
      q: "How long does a Customer Service implementation take?",
      a: "It depends on the number of channels, case types, routing rules and SLAs, plus how quickly your team reviews decisions. MP-365 pilots with one team first, then expands. A discovery call that traces how requests arrive today lets MP-365 outline the stages for your situation.",
    },
    {
      q: "What is the difference between Customer Service and Sales?",
      a: "Sales manages leads and deals before the purchase. Customer Service manages issues and questions after it. They share the same customer records, so an account manager sees open cases and an agent sees the account's deals. Many clients start with one and add the other later.",
    },
    {
      q: "What are SLAs and entitlements in Dynamics 365?",
      a: "An SLA is a timer that tracks targets such as first response and resolution time. An entitlement defines what support a customer is owed, such as the channels or the number of cases. Entitlements can drive which SLA applies, so contract terms and deadlines stay in step.",
    },
    {
      q: "Do we need unified routing?",
      a: "Not always. Simple queues are enough when a small team shares all work. Unified routing helps when cases need classification, skills or workload balancing across several teams. MP-365 starts with the simplest option that works and adds routing rules only when the volume justifies them.",
    },
    {
      q: "Can customers submit and track cases themselves?",
      a: "Yes. A customer portal built with [Power Pages](/services/power-platform/power-pages/) lets signed-in customers log cases, add details and follow progress, using the same case data your agents see. This cuts status emails. MP-365 builds portals on existing Microsoft data.",
    },
    {
      q: "Can Dynamics 365 Customer Service create cases from email?",
      a: "Yes. A monitored shared mailbox can create a case from each incoming message and link it to the matching customer. MP-365 sets rules for what becomes a case and what is ignored, such as auto-replies, so agents are not buried in noise.",
    },
    {
      q: "What is the Customer Service Hub, and should we still use it?",
      a: "Customer Service Hub is the older single-session agent app. Microsoft Learn (2026) says it is not available for new organizations with Enterprise licenses, where Copilot Service workspace replaces it. MP-365 builds new implementations on Copilot Service workspace and helps existing users move over.",
    },
    {
      q: "Does Dynamics 365 Customer Service include Copilot?",
      a: "Yes. Microsoft Learn (2026) lists Copilot features in Copilot Service workspace that help agents find information, summarize cases and conversations, and complete tasks. Availability depends on your licenses. MP-365 turns them on after knowledge articles and case data are tidy, since Copilot answers from that content.",
    },
  ],
  closing:
    "A good Dynamics 365 Customer Service setup is simple: every issue has an owner, a status and a deadline. MP-365 builds that foundation first, then adds routing, knowledge and a portal as your team is ready.",
  cta: {
    heading: "Plan your Dynamics 365 Customer Service rollout",
    body: "Describe how requests reach your team today. MP-365 will show you the smallest case setup that fixes the biggest gap.",
    text: "Book a discovery call",
  },
};

import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/copilot/",
  intro:
    "Microsoft Copilot consulting from MP-365 covers four things: checking that your data is ready, rolling Copilot out to the right people, building agents that work with Dynamics 365 and Microsoft 365 data, and reviewing who can reach what. This page compares the five services in the area so you can pick a starting point.",
  blocks: [
    {
      type: "prose",
      heading: "What Microsoft Copilot consulting includes",
      paragraphs: [
        "Microsoft Copilot consulting is the work between buying Copilot licenses and getting reliable value from them. MP-365 (Modern Partners 365), a Microsoft Solutions Partner, handles that work for mid-size and enterprise companies that run Microsoft 365 and Dynamics 365.",
        "The scope is deliberately narrow. MP-365 works with Microsoft Copilot and the Microsoft tools around it. It does not offer general AI strategy, and it does not build AI on non-Microsoft platforms. If you are looking for broader [Microsoft 365 consulting](/services/), the Services hub shows the other areas.",
      ],
    },
    {
      type: "table",
      heading: "The five Copilot services compared",
      headers: ["Service", "Best for", "Typical outcome", "Starting point"],
      rows: [
        [
          "[Microsoft 365 Copilot Readiness](/services/copilot/readiness/)",
          "Teams about to buy or pilot Microsoft 365 Copilot",
          "A prioritized list of data, permission and adoption fixes before launch",
          "Start here if no pilot has run yet",
        ],
        [
          "[AI Data Governance Audit](/services/copilot/ai-data-governance-audit/)",
          "IT and compliance leads worried about oversharing",
          "A data access and permissions review with a ranked cleanup list",
          "Start here if files are widely shared",
        ],
        [
          "[Dynamics 365 Sales Agents](/services/copilot/sales-agents/)",
          "Sales teams with high lead volume in Dynamics 365 Sales",
          "Configured agents for lead research, qualification and pipeline questions",
          "Start here if the CRM is already in good shape",
        ],
        [
          "[Custom Copilot Agent Development](/services/copilot/custom-agents/)",
          "Teams with a repeatable task that needs company data",
          "A Copilot Studio agent connected to Dynamics 365 or Microsoft 365 data",
          "Start here if one process is the clear target",
        ],
        [
          "[Copilot Cowork](/services/copilot/cowork/)",
          "Organizations that want Copilot to complete multistep work",
          "A controlled rollout with permissions, approvals and training in place",
          "Start here after readiness is done",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Which Copilot service to start with",
      paragraphs: [
        "Start with readiness or the data access review in almost every case. Copilot answers from content that each user can already open, so messy permissions become visible the day Copilot goes live.",
        "Pick the sales agents first only when the work is limited to Dynamics 365 Sales and your lead data is clean. Pick custom agents first when one named process, such as answering order status questions, is the whole reason for the project.",
        "Skip the early steps only if you have already cleaned up site permissions and sharing links. Most mid-size tenants have not.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 approaches a Copilot project",
      steps: [
        {
          name: "Pick one business outcome",
          description:
            "Agree on the team, the task and the measure of success before any license or agent is touched.",
        },
        {
          name: "Review data and access",
          description:
            "Check which SharePoint sites, Teams and OneDrive content Copilot would reach, and who can open it today.",
        },
        {
          name: "Fix the highest-risk permissions",
          description:
            "Remove broad sharing, assign owners to orphaned sites and tighten access where the review found gaps.",
        },
        {
          name: "Pilot with a small group",
          description:
            "Turn Copilot on for a defined set of users with real tasks, and collect what works and what does not.",
        },
        {
          name: "Add agents where the pilot shows a need",
          description:
            "Configure the Dynamics 365 agents or build a Copilot Studio agent for the one process that earned it.",
        },
        {
          name: "Train and hand off",
          description:
            "Teach each role the prompts and habits that fit its work, then document what MP-365 set up.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Proof: a stable Dynamics 365 platform for OTIS Elevator",
      paragraphs: [
        "Agents and Copilot rely on a platform that behaves predictably. MP-365 provides platform and operations leadership for Dynamics 365 at OTIS Elevator, where deployments dropped from 13 hours to 4 and manual errors fell to near zero.",
        "See all [MP-365 client results](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "What Copilot consulting costs",
      paragraphs: [
        "Consulting cost depends on how many services you combine and how much cleanup the review finds. The [MP-365 pricing page](/pricing/) explains the engagement models without a fixed price list.",
        "Microsoft licenses are separate. You pay Microsoft, or your own license provider, for Microsoft 365 Copilot. Some agents also consume usage-based capacity that Microsoft bills directly. MP-365 does not resell licenses.",
      ],
    },
    {
      type: "prose",
      heading: "Related Copilot topics",
      paragraphs: [
        "Dynamics 365 agents sit on top of a working CRM, so [Dynamics 365 Sales consulting](/services/dynamics-365-crm/sales/) is the natural companion to the sales agents. Permission cleanup overlaps with [Microsoft Purview and permission models](/services/data-governance/microsoft-purview/), and role design in the CRM is covered by the [Dynamics 365 security roles audit](/services/dynamics-365-crm/security-roles-audit/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What does Microsoft Copilot consulting include?",
      a: "Microsoft Copilot consulting includes readiness checks, a data access and permissions review, a controlled rollout, Dynamics 365 sales agents, custom agents built in Copilot Studio, and Copilot Cowork rollout. MP-365 covers Microsoft tools only. It does not provide general AI strategy.",
    },
    {
      q: "What should a company do before rolling out Copilot?",
      a: "Review who can access which files, then fix broad sharing first. Copilot returns content that each user is already allowed to open, so oversharing shows up quickly. Also choose a pilot group, define success measures and decide who owns training. The [readiness assessment](/services/copilot/readiness/) covers all three.",
    },
    {
      q: "What does a Microsoft 365 Copilot rollout cost?",
      a: "Cost has two parts: Microsoft's license fees and consulting fees. Microsoft sets license prices, and they are separate from MP-365's work. Consulting depends on scope, such as the number of sites reviewed and agents built. The [pricing page](/pricing/) explains how MP-365 engages.",
    },
    {
      q: "Does MP-365 sell Copilot licenses?",
      a: "No. MP-365 does not resell Microsoft licenses or manage CSP subscriptions. You buy Microsoft 365 Copilot from Microsoft or your usual license provider. MP-365 advises on who should get seats first and how to configure the tenant for them.",
    },
    {
      q: "Can Copilot show people files they should not see?",
      a: "Copilot does not bypass permissions. According to Microsoft's 2026 documentation, it can only summarize or reference content the user is authorized to access. The risk is that many users are authorized to open files nobody intended them to read. A data access review finds those cases.",
    },
    {
      q: "What is the difference between Microsoft 365 Copilot and Copilot Studio?",
      a: "Microsoft 365 Copilot is the assistant that works across your Microsoft 365 apps and data. Copilot Studio is the low-code tool for building your own agents that use your knowledge sources and connect to business systems. Companies often use both, with agents built in Studio.",
    },
    {
      q: "Which Copilot service should we start with?",
      a: "Start with readiness or the AI Data Governance Audit unless you have already cleaned up sharing and permissions. If your team lives in Dynamics 365 Sales and the lead data is accurate, the Dynamics 365 sales agents can run in parallel with that cleanup.",
    },
    {
      q: "Does MP-365 build AI outside the Microsoft stack?",
      a: "No. MP-365 works with Microsoft Copilot, Copilot Studio and the Dynamics 365 and Microsoft 365 data they use. It does not build models, set general AI strategy or integrate non-Microsoft AI platforms. If a request falls outside Microsoft tools, MP-365 will say so on the first call.",
    },
    {
      q: "How do Dynamics 365 agents relate to Microsoft 365 Copilot?",
      a: "They are separate products that work together. Dynamics 365 Sales includes agents such as the Sales Qualification Agent. Microsoft also offers a Sales agent inside Microsoft 365 Copilot that lets sellers query CRM data in plain language. Both depend on clean CRM data and sensible access.",
    },
    {
      q: "Who is Copilot consulting for, and who is it not for?",
      a: "It suits mid-size and enterprise companies that already use Microsoft 365 or Dynamics 365 and want a structured rollout. It is a poor fit for companies without Microsoft 365, for those wanting a non-Microsoft AI build, or for a single user who only needs to switch Copilot on.",
    },
  ],
  closing:
    "Microsoft Copilot consulting works best when the data comes first and the agents come second. Pick the service that matches your situation from the table above, or talk through your setup with MP-365 and we will recommend a starting point.",
  cta: {
    heading: "Talk to MP-365 about Copilot",
    body: "Tell us which Microsoft 365 and Dynamics 365 tools you use today and what you want Copilot to do. MP-365 will recommend where to start.",
    text: "Book a discovery call",
  },
};

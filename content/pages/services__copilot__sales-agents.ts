import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/copilot/sales-agents/",
  intro:
    "Microsoft Dynamics 365 AI for sales means the agents built into Dynamics 365 Sales, such as the Sales Qualification Agent, plus the Sales agent that sellers use inside Microsoft 365 Copilot. MP-365 sets them up on top of your CRM data, tests them in a sandbox and trains your sellers to work with what they hand over.",
  atAGlance: {
    bestFor:
      "Sales leaders with steady inbound leads in Dynamics 365 Sales who want less manual research and faster follow-up.",
    includes:
      "Agent selection, CRM data checks, Sales Qualification Agent setup, hand-off rules, sandbox testing, seller training and monitoring guidance.",
    notIncluded:
      "ERP implementation, license resale, non-Microsoft AI tools and managed help desk support.",
    howItStarts:
      "A discovery call about your lead sources, your current Dynamics 365 Sales setup and how sellers qualify leads today.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What are Dynamics 365 sales agents?",
      paragraphs: [
        "Dynamics 365 sales agents are AI agents inside Dynamics 365 Sales that research leads and opportunities, draft or send outreach, and surface risks without a seller starting each task. Microsoft's documentation describes them as agents that autonomously research and engage with leads and opportunities.",
        "They are part of MP-365's [Microsoft Copilot consulting](/services/copilot/) work, and they run on your own CRM records. Weak CRM data produces weak agent output, which is why setup starts with the data and not the agent.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft Dynamics 365 AI for sales: the agents compared",
      headers: ["Agent", "What it does", "Where it fits"],
      rows: [
        [
          "Sales Qualification Agent",
          "Researches leads, checks fit against your target customer profile, drafts outreach and hands promising leads to sellers",
          "Teams with more inbound leads than sellers can research",
        ],
        [
          "Sales Opportunity Agent",
          "Researches open opportunities, shows emerging risks and highlights promising deals",
          "Managers who review pipeline by hand",
        ],
        [
          "Sales Close Agent",
          "Engages customers near the end of the cycle, recommends products and handles objections",
          "Transactional sales with repeatable offers",
        ],
        [
          "Sales Research Agent",
          "Answers complex questions about sales data in natural language",
          "Leaders and analysts who now request custom reports",
        ],
        [
          "Recommended Actions Agent",
          "Gives sellers prioritized next actions on their opportunities",
          "Sellers who lose track of follow-up",
        ],
        [
          "Sales agent in Microsoft 365 Copilot",
          "Lets sellers query CRM, email and meeting data in plain language",
          "Sellers who work mostly in Outlook and Teams",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Which sales agent to start with",
      paragraphs: [
        "Start with the Sales Qualification Agent if lead volume is your bottleneck. Start with the Sales agent in Microsoft 365 Copilot if sellers waste time searching across CRM pages and inboxes.",
        "Microsoft labels some of these agents as preview, and availability differs by region. MP-365 checks the current status for your tenant before recommending one, so you do not build a process around a feature that is not ready for production.",
      ],
    },
    {
      type: "prose",
      heading: "What does the Sales Qualification Agent do?",
      paragraphs: [
        "The Sales Qualification Agent researches each assigned lead using CRM data and public sources, scores its fit against your target customer profile and prepares outreach. It does not replace the seller's judgment. Microsoft states the agent is designed to be a productivity tool.",
        "It runs in one of two modes. Your organization deploys one mode at a time.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Research-only mode",
      paragraphs: [
        "In research-only mode the agent researches leads, checks them against the target customer profile and generates an outreach email. Sellers read the insights and send the email themselves. Choose this mode first when your team is nervous about automated contact.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Research and engage mode",
      paragraphs: [
        "In research and engage mode the agent also sends outreach, follows up, detects purchase interest and checks BANT criteria (budget, authority, need, timeline). Leads that meet your hand-off rules go to a seller, and the rest are disqualified. Microsoft allows an upgrade from research-only to engage later, but not the reverse.",
      ],
    },
    {
      type: "prose",
      heading: "Copilot for Sales and Dynamics 365 sales agents",
      paragraphs: [
        "Copilot for Sales is the name many people still search for. Microsoft documents it today as the Sales agent in Microsoft 365 Copilot, a conversational agent that works across Microsoft 365 apps and your connected CRM. It answers questions and drafts emails for the seller who asks.",
        "The Dynamics 365 sales agents work differently: they run inside the CRM and act on leads in the background. Many teams use both. MP-365 sets them up so they draw on the same clean records and the same security roles.",
      ],
    },
    {
      type: "list",
      heading: "Problems AI sales agents can solve",
      items: [
        "**Idle leads:** inbound leads from web forms, events and webinars sit in the CRM without a first touch.",
        "**Manual research:** sellers open several tabs to learn about a company before one email.",
        "**Slow hand-off:** marketing says a lead is ready, but sellers disagree and the lead goes cold.",
        "**Unseen pipeline risk:** managers find stalled deals at the quarterly review instead of during the quarter.",
        "**Report requests:** leaders wait for an analyst to answer a simple pipeline question.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 sets up Dynamics 365 sales agents",
      steps: [
        {
          name: "Review lead and account data",
          description:
            "Check required fields, duplicates, lead sources and ownership so the agent works from accurate records.",
        },
        {
          name: "Confirm prerequisites",
          description:
            "Verify the Copilot Studio license, admin permissions, data policies and Exchange email synchronization the agent needs.",
        },
        {
          name: "Define the target customer profile",
          description:
            "Write down the criteria that make a lead worth a seller's time, and the hand-off rules for those who qualify.",
        },
        {
          name: "Configure the agent",
          description:
            "Set selection criteria, email instructions, assignment rules and knowledge sources, and check roles for custom security setups.",
        },
        {
          name: "Test in a sandbox",
          description:
            "Run the agent on a small set of leads in a test environment and review every email and hand-off decision.",
        },
        {
          name: "Move to production",
          description:
            "Export the agent as a solution and import it into production, then start with a narrow segment of leads.",
        },
        {
          name: "Train sellers and supervisors",
          description:
            "Show sellers how to work handed-over leads and show supervisors how to monitor the agent's activity.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get",
      items: [
        "**Agent recommendation:** which Dynamics 365 and Microsoft 365 agents fit your sales process.",
        "**Data fixes:** a short list of CRM data issues to correct before launch.",
        "**Configured agent:** target customer profile, selection criteria, hand-off and assignment rules.",
        "**Tested outreach:** email instructions reviewed against real leads.",
        "**Seller guide:** how to work handed-over leads and give feedback.",
        "**Monitoring routine:** what supervisors should check and how often.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft products involved",
      paragraphs: [
        "The work uses Dynamics 365 Sales, Copilot Studio (the platform the Sales Qualification Agent runs on), Microsoft Dataverse, Exchange Online for email synchronization and Microsoft 365 Copilot for the Sales agent. Microsoft says the Sales Qualification Agent uses capacity assigned to your tenant, either prepaid or pay-as-you-go, and that capacity is billed by Microsoft.",
        "The agent's output depends on your pipeline setup, so most clients pair this work with [Dynamics 365 Sales consulting](/services/dynamics-365-crm/sales/) and a clear [lead management and attribution](/services/dynamics-365-crm/lead-management/) process.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: one lead process with live dashboards",
      paragraphs: [
        "MP-365 built lead tracking for a client with one lead process and dashboards for marketing and sales leaders. The aim was to replace spreadsheet reporting with a single, trusted view of every lead.",
        "That work is the foundation sales agents need: consistent lead sources, statuses and owners. See the [client results page](/clients/) for named projects.",
      ],
    },
    {
      type: "prose",
      heading: "When sales agents are not the right fit",
      paragraphs: [
        "Sales agents are a poor fit when lead volume is low, when your CRM data is unreliable or when your sellers do not use Dynamics 365 Sales. Fix the process first in those cases. They also do not suit teams that cannot allow automated email, though research-only mode may still help. A broader [readiness assessment](/services/copilot/readiness/) is the better first step if your main worry is data access.",
      ],
    },
    {
      type: "prose",
      heading: "Related Copilot work",
      paragraphs: [
        "If your process needs behavior the standard agents do not offer, [custom Copilot agents](/services/copilot/custom-agents/) can fill the gap. MP-365 can discuss scope and cost on a call, and the [pricing page](/pricing/) explains how engagements work.",
      ],
    },
  ],
  faqs: [
    {
      q: "What are Dynamics 365 sales agents?",
      a: "Dynamics 365 sales agents are AI agents inside Dynamics 365 Sales that research and engage with leads and opportunities. Microsoft's list includes the Sales Qualification, Sales Opportunity, Sales Close, Sales Research and Recommended Actions agents. They work from your CRM data and follow rules your administrators set.",
    },
    {
      q: "What does the Sales Qualification Agent do?",
      a: "It researches each assigned lead from CRM and public sources, checks fit against your target customer profile and drafts outreach. In research and engage mode it also sends emails, follows up and hands qualified leads to sellers. Leads that do not qualify are disqualified, with supervisors notified.",
    },
    {
      q: "How is Copilot for Sales different from Dynamics 365 sales agents?",
      a: "Copilot for Sales is now documented as the Sales agent in Microsoft 365 Copilot. It answers a seller's questions and drafts emails across Outlook, Teams and the CRM. Dynamics 365 sales agents work inside the CRM and act on leads in the background without a prompt.",
    },
    {
      q: "What do we need before turning on the Sales Qualification Agent?",
      a: "Microsoft lists admin permissions in Dynamics 365 Sales, a Copilot Studio license, the modern Sales Hub interface, allowed data policy connectors and Exchange server-side synchronization. Without email synchronization, the agent does not generate outreach emails. MP-365 checks each item before configuration starts.",
    },
    {
      q: "Can the agent send emails without a seller approving them?",
      a: "Only in research and engage mode. In research-only mode, the agent drafts the email and the seller sends it. Engage mode sends outreach autonomously, so MP-365 recommends a simulation run and a small first segment of leads, then a review of the emails before widening it.",
    },
    {
      q: "How much do AI sales agents cost?",
      a: "Microsoft bills agent usage through tenant capacity, either prepaid or pay-as-you-go, and sets those prices. MP-365's consulting fee is separate and depends on scope. The [pricing page](/pricing/) explains the engagement models. MP-365 does not resell Microsoft licenses or capacity.",
    },
    {
      q: "Do the agents work with custom security roles?",
      a: "Yes, with extra setup. Microsoft says out-of-the-box roles such as Salesperson and Sales Manager need no changes, while custom roles need specific table permissions to work agent-handed leads. MP-365 reviews those roles during configuration so sellers can open and reassign handed-over leads.",
    },
    {
      q: "Can we test the agent before sellers see it?",
      a: "Yes. Microsoft recommends testing at a smaller scale first, and agents can be exported as a solution and imported into another environment. MP-365 configures and tests in a sandbox, reviews the agent's emails and hand-off decisions, and then moves the agent to production.",
    },
    {
      q: "Can we switch the Sales Qualification Agent from one mode to the other?",
      a: "You can upgrade from research-only to research and engage, but not go back. Microsoft also notes that only one mode can be deployed in an organization, and that a configured agent cannot be deleted without contacting Microsoft support. Mode choice deserves care at the start.",
    },
    {
      q: "Does the agent replace our sales development team?",
      a: "No. Microsoft states the agent does not replace human judgment. It handles research and first contact so sellers spend time on leads that show intent. Your team still owns relationships, pricing and closing, and still reviews the leads that the agent hands over.",
    },
  ],
  closing:
    "Microsoft Dynamics 365 AI for sales pays off when the CRM data is clean and the hand-off rules are clear. MP-365 can review your lead process, recommend the right agents and set them up with your sellers in mind.",
  cta: {
    heading: "Talk to MP-365 about Dynamics 365 sales agents",
    body: "Share how leads reach your team today and where they stall. MP-365 will advise which agents fit.",
    text: "Book a discovery call",
  },
};

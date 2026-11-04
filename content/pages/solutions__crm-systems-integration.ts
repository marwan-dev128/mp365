import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/solutions/crm-systems-integration/",
  intro:
    "CRM and marketing automation integration connects Dynamics 365 to your marketing, service and third-party tools through secure APIs, so leads, orders and customer updates arrive without retyping or dropped records. MP-365 is a Microsoft Solutions Partner that builds integrations with logging and alerts, so problems show up before customers notice.",
  blocks: [
    {
      type: "prose",
      heading: "When your systems do not talk to each other",
      paragraphs: [
        "A lead fills in a form on your website, lands in the marketing tool, and then waits for someone to copy it into the CRM. A customer emails support, and the service tool has no idea what sales promised last week. Each tool holds part of the story, and people fill the gaps by hand.",
        "Integration removes the hand work. Data moves between systems automatically, in the right direction, with a record of what moved and what failed.",
      ],
    },
    {
      type: "list",
      heading: "Who feels disconnected systems",
      items: [
        "**Marketing managers:** campaign leads reach sales late, with missing fields, and nobody can tell which campaign produced a won deal.",
        "**Sales reps:** they re-enter details or work from stale contact records.",
        "**Service agents:** they answer a customer without seeing open deals, past orders or earlier cases.",
        "**Operations leaders:** order and status updates reach the CRM late, so customer promises rest on guesses.",
        "**IT leaders:** they inherit scripts and personal logins that break without warning.",
      ],
    },
    {
      type: "table",
      heading: "What disconnected systems cost the business",
      headers: ["Symptom", "Business impact"],
      rows: [
        ["Leads copied by hand into the CRM", "Follow-up is slow, and leads get lost between tools."],
        ["Two records for the same customer", "Marketing and sales contact the same person with different messages."],
        ["Failed syncs nobody notices", "Records go missing for days, and trust in the data erodes."],
        ["Integrations running on a personal login", "The connection stops when that person changes roles or changes a password."],
        ["No view of which campaign won the deal", "Marketing budget is spent without evidence of what works."],
      ],
    },
    {
      type: "prose",
      heading: "How CRM and marketing automation integration works",
      paragraphs: [
        "CRM and marketing automation integration moves data between Dynamics 365 and a marketing platform on rules you define. Forms, campaign responses and email activity flow into the CRM as leads and contacts, and lead status and ownership flow back out to marketing.",
        "The same pattern applies to other tools. A service platform can read account and order details from the CRM. A SharePoint library can hold a customer's documents beside the CRM record. A third-party application can read or update CRM data through its API (application programming interface), the secure doorway the software offers for exactly this purpose.",
      ],
    },
    {
      type: "table",
      heading: "Ways to connect a CRM to other systems",
      headers: ["Method", "Best for", "Watch out for"],
      rows: [
        [
          "Built-in connectors",
          "Common tools with a ready connector and simple one-way or two-way sync.",
          "Limited control over rules, field mapping and error handling.",
        ],
        [
          "Power Automate flows",
          "Event-based steps, such as sending a new lead to a team or updating a record after an approval.",
          "Very large volumes or complex logic can need a more robust design.",
        ],
        [
          "Custom API integration",
          "Tools without a connector, or rules that need exact control and monitoring.",
          "Needs careful design, testing and someone to own it later.",
        ],
        [
          "Manual export and import",
          "One-off loads and rare updates.",
          "Slow and error-prone when done repeatedly.",
        ],
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 builds reliable integrations",
      steps: [
        {
          name: "List every system and the data that moves",
          description:
            "Write down which tools hold customers, leads, orders and cases, and which direction each field should travel.",
        },
        {
          name: "Pick one source of truth for each record",
          description:
            "Decide which system owns each type of data, so two tools never fight over the same field.",
        },
        {
          name: "Choose the connection method",
          description:
            "Use a built-in connector or Power Automate flow where it fits, and a custom API integration where it does not.",
        },
        {
          name: "Map fields and matching rules",
          description:
            "Match records by agreed keys such as email or account number, and set rules for duplicates and missing values.",
        },
        {
          name: "Use service accounts and secure storage",
          description:
            "Run each connection on a dedicated service account, not a personal login, and store passwords and keys in secure storage.",
        },
        {
          name: "Add logging and alerts",
          description:
            "Record every run, and alert the right person when a record fails, so nothing is dropped silently.",
        },
        {
          name: "Test with real records",
          description:
            "Send sample leads, orders and cases through the connection and compare the results in both systems before going live.",
        },
        {
          name: "Hand off with documentation",
          description:
            "Document what connects to what, who owns it and how to restart a failed run.",
        },
      ],
    },
    {
      type: "table",
      heading: "What you get from MP-365",
      headers: ["What MP-365 builds", "The result"],
      rows: [
        ["Connections between Dynamics 365 and your marketing tools", "Leads reach sales with their campaign details, and sales status flows back to marketing."],
        ["Links to customer service tools and SharePoint", "Agents see customer context, and documents sit beside the CRM record."],
        ["Integrations with third-party applications through secure APIs", "Data moves in the right direction without retyping."],
        ["Service accounts and secure credential storage", "Connections keep running when people change roles."],
        ["Logging and alerts on every run", "Failures are visible within the system, not discovered by customers."],
        ["Documentation and an owner for each connection", "Your team knows how the flow works and who maintains it."],
      ],
    },
    {
      type: "prose",
      heading: "Proof: integrations with logging and alerts",
      paragraphs: [
        "In client work, MP-365 has built integrations between the CRM and marketing systems that use logging and alerts, service accounts instead of personal accounts, and secure password storage. The result is connections that report their own failures instead of dropping records quietly.",
        "Hunter Panels, a manufacturer, uses MP-365 for Dynamics CRM support that cuts manual work and aligns the platform with the business.",
      ],
    },
    {
      type: "prose",
      heading: "Who this is not the right fit for",
      paragraphs: [
        "This service is not the right fit if you want to replace every tool you own, or if the systems involved have no way to connect, such as software with no export or API. MP-365 connects Dynamics 365 to other tools. It does not build new software products from scratch.",
      ],
    },
    {
      type: "prose",
      heading: "Related services and industries",
      paragraphs: [
        "Start with [Dynamics 365 Integration Services](/services/dynamics-365-crm/integration-services/) for the service view of this work. Marketing activity runs in [Dynamics 365 Customer Insights](/services/dynamics-365-crm/customer-insights/), the product formerly called Dynamics 365 Marketing. Event-based steps come from [Power Automate Workflow Automation](/services/power-platform/power-automate/).",
        "Teams in [Logistics & Supply Chain](/industries/logistics-supply-chain/) often connect order and shipment updates to the CRM, and [Retail](/industries/retail/) teams connect customer and campaign data. For the full list of outcomes, see [Solutions](/solutions/). Effort depends on how many systems are involved, as the [Pricing](/pricing/) page explains.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do you connect a CRM to marketing automation?",
      a: "You map which data moves in each direction, then connect the two systems through a built-in connector, a Power Automate flow or a custom API integration. Forms and campaign responses flow into Dynamics 365 as leads, and lead status flows back to marketing, with logging on every run.",
    },
    {
      q: "How do you sync a CRM with other business systems?",
      a: "Name one system as the owner of each type of record, match records by an agreed key such as email or account number, and run the sync on a dedicated service account. MP-365 tests with real records and adds alerts so failures are visible.",
    },
    {
      q: "How do you avoid dropped records in an integration?",
      a: "Log every run, alert a named person when a record fails, and make sure failed records can be retried. MP-365 also tests with real sample data and uses matching rules for duplicates, so records are not lost or doubled when two systems disagree.",
    },
    {
      q: "What is the difference between a connector and an API integration?",
      a: "A connector is a prebuilt link to a known product, set up with configuration. An API integration is custom logic written against a product's programming interface. Connectors are quicker for common cases, while API work gives exact control when no connector exists or rules are complex.",
    },
    {
      q: "Can Dynamics 365 connect to our existing marketing platform?",
      a: "Usually yes. If the platform offers a connector or an API, MP-365 can link it to Dynamics 365. During discovery, MP-365 checks what the platform exposes, which fields need to move and whether the sync should run one way or both ways.",
    },
    {
      q: "Why use a service account instead of a personal login?",
      a: "A personal login stops working when that person leaves, changes roles or resets a password, and it ties data changes to one name. A service account belongs to the integration itself. MP-365 uses service accounts and secure password storage for every connection.",
    },
    {
      q: "Can we integrate SharePoint with our CRM?",
      a: "Yes. Dynamics 365 can link customer records to SharePoint document libraries, so contracts, proposals and files sit beside the account or case. MP-365 sets up the structure and permissions so people see only the documents that belong to their records.",
    },
    {
      q: "How much does a CRM integration cost?",
      a: "Cost depends on how many systems connect, how much data moves, how often, and whether a connector exists. License fees for the tools involved are separate from MP-365 fees. The [Pricing](/pricing/) page explains how MP-365 engagements work.",
    },
  ],
  closing:
    "CRM and marketing automation integration pays off when records arrive complete and failures are visible. MP-365 connects Dynamics 365 to your marketing, service and third-party tools through secure APIs, with logging and alerts that show you what moved and what did not.",
  cta: {
    heading: "Plan your integration",
    body: "List the tools that should share data with Dynamics 365. MP-365 will help you choose the connection method and the owner of each record.",
    text: "Plan your integration",
  },
};

import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/industries/logistics-supply-chain/",
  intro:
    "A CRM for logistics should keep shipper accounts, lanes, rate quotes and service issues in one record, so sales and operations work from the same facts. MP-365 sets up Dynamics 365 and Microsoft 365 for freight brokers, carriers and supply chain companies that run on email, spreadsheets and memory.",
  triggers: [
    {
      title: "Rate quotes vanish in email",
      body: "Quote requests come in by email and phone, and nobody can see which shippers asked, what you answered or why you lost.",
    },
    {
      title: "Account knowledge sits with one person",
      body: "A rep leaves and takes the shipper relationships, lane history and contact details along.",
    },
    {
      title: "Service problems repeat",
      body: "A missed pickup or damaged load is handled by whoever picks up the phone, with no record of the cause or the follow-up.",
    },
    {
      title: "Growth outpaces the spreadsheet",
      body: "A new branch, a new service line or an acquisition doubles the accounts and the shared workbook breaks.",
    },
  ],
  blocks: [
    {
      type: "prose",
      heading: "What to look for in a CRM for logistics companies",
      paragraphs: [
        "A logistics CRM must match how freight is sold, not how software is usually sold. A shipper rarely buys once. They send quote requests for specific lanes, compare you with other carriers or brokers, and expect fast answers when something goes wrong. A good CRM records that whole relationship.",
        "Before you pick a tool, check that it handles the points below. Most generic CRMs cover the first and last. Few handle the middle well without setup.",
      ],
    },
    {
      type: "list",
      heading: "Features that matter in a logistics CRM",
      items: [
        "**Shipper and carrier accounts:** one place for the customer, their locations, contacts and the carriers or partners you use for them.",
        "**Lane and rate history:** the routes, volumes and quoted rates for each shipper, so a rep sees what was offered last time.",
        "**Quote tracking:** every request has an owner, a status and an outcome, including why a quote was lost.",
        "**Service cases:** a missed delivery or claim becomes a case with an owner, a cause and a due date.",
        "**Connections to your other systems:** load, tracking and billing data should reach the account record without retyping.",
        "**Mobile access:** reps and operations staff are often away from a desk, so the CRM must work on a phone.",
      ],
    },
    {
      type: "prose",
      heading: "How freight brokers use a CRM",
      paragraphs: [
        "A freight broker uses a CRM to manage two sides of the business: the shippers who need freight moved and the carriers who move it. For the shipper side, the CRM tracks prospects, quote requests, lanes and win or loss reasons. For the carrier side, it tracks capacity, contacts and past performance.",
        "A broker CRM is not a transportation management system. It does not dispatch loads or settle payments. It supplies the relationship and sales view that those systems lack, which is why connecting the two matters.",
      ],
    },
    {
      type: "list",
      heading: "Common challenges in logistics and supply chain",
      items: [
        "**Quotes are answered from memory:** a rep quotes a lane without seeing what the same shipper paid last month.",
        "**Service issues have no owner:** problems pass between sales, dispatch and billing with no single record.",
        "**Teams are scattered:** dispatchers, account managers and drivers work across offices and vehicles, so information stays in individual inboxes.",
        "**Data lives in separate tools:** load status, billing and customer history sit in different places.",
      ],
    },
    {
      type: "table",
      heading: "How MP-365 supports logistics teams",
      headers: ["Challenge", "What MP-365 sets up", "Where to read more"],
      rows: [
        [
          "Quotes are answered from memory",
          "Quote and opportunity tracking by shipper and lane, with history and loss reasons.",
          "[Dynamics 365 Sales](/services/dynamics-365-crm/sales/)",
        ],
        [
          "Service issues have no owner",
          "Alerts, routing and approvals that notify the right person when a case opens or a quote waits too long.",
          "[Power Automate Workflow Automation](/services/power-platform/power-automate/)",
        ],
        [
          "Teams are scattered",
          "Shared Teams channels and SharePoint libraries for each major account, with permissions that match each role.",
          "[Modern Company Intranet](/solutions/sharepoint-intranet/)",
        ],
        [
          "Data lives in separate tools",
          "Connections that bring load, billing and marketing data into the CRM record, with logging and alerts.",
          "[CRM & Systems Integration](/solutions/crm-systems-integration/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "How Microsoft 365 helps logistics teams collaborate",
      paragraphs: [
        "Microsoft 365 gives logistics teams shared spaces around each account. Teams carries the conversation, SharePoint stores rate sheets, contracts and proof of delivery, and the CRM record links to both. A dispatcher in one office sees what the account manager in another office promised.",
        "Permissions matter here. MP-365 sets access so a carrier contact list or a customer's rate sheet is visible only to the people who need it. Power Automate can then post alerts into a Teams channel when a high-value quote is waiting.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: case tracking from a similar project",
      paragraphs: [
        "MP-365 replaced email-based support at another organization with one case system that shows each issue's owner, status and urgency. The client and industry are withheld, and the project was not in logistics. The same pattern applies to a missed pickup or a damaged load.",
        "The [clients page](/clients/) lists the results MP-365 can name.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft tools used for logistics CRM",
      headers: ["Product", "Role for a logistics company"],
      rows: [
        ["Dynamics 365 Sales", "Tracks shipper accounts, lanes, quote requests and the pipeline."],
        ["Dynamics 365 Customer Service", "Manages claims, missed deliveries and other service cases."],
        ["Power Automate", "Routes cases, sends alerts and moves data between systems."],
        ["Microsoft Teams and SharePoint", "Give each account a shared channel and a document library."],
        ["Power BI", "Reports on quote volume, win rate and case turnaround."],
      ],
    },
    {
      type: "prose",
      heading: "When a logistics CRM is not the right fit",
      paragraphs: [
        "A CRM is not a transportation management system. It will not dispatch loads, plan routes, track a truck by GPS or settle carrier payments. MP-365 does not implement those systems. It builds the sales and service layer and connects it to them.",
        "A CRM is also a poor fit for a very small broker with a handful of shippers, where a shared mailbox works. For wider context, see [Microsoft solutions by industry](/industries/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What should a logistics company look for in a CRM?",
      a: "A logistics company should look for shipper and carrier accounts, lane and rate history, quote tracking with loss reasons, service cases, and connections to load and billing data. Phone access also matters, because reps and dispatchers often work away from a desk. Ease of use decides whether staff keep records current.",
    },
    {
      q: "How do freight brokers use a CRM?",
      a: "Freight brokers use a CRM to track shippers, quote requests, lanes and win or loss reasons, and to keep carrier contacts and capacity notes. It supplies the relationship view that a transportation system lacks. It does not dispatch loads or settle payments, so it works alongside those tools.",
    },
    {
      q: "How can Microsoft 365 help logistics teams collaborate?",
      a: "Microsoft 365 gives each account a Teams channel for conversation and a SharePoint library for rate sheets, contracts and delivery documents. Linked to the CRM record, they let dispatch and account managers see the same facts. MP-365 sets permissions so each role sees only what it needs.",
    },
    {
      q: "Can a CRM track lanes and rates for each shipper?",
      a: "Yes. Dynamics 365 can store lanes, volumes and quoted rates as records linked to the shipper's account. A rep preparing a new quote then sees what was offered before. MP-365 sets up the fields and views to match the way your team names lanes.",
    },
    {
      q: "Does a logistics CRM replace a transportation management system?",
      a: "No. A CRM manages customer relationships, quotes and service cases. A transportation management system plans and dispatches freight. Most logistics firms need both, connected so load status appears on the account. MP-365 builds the CRM side and the connection, not the dispatch system.",
    },
    {
      q: "Can we manage service claims and missed deliveries in Dynamics 365?",
      a: "Yes. Dynamics 365 Customer Service turns each claim or missed delivery into a case with an owner, status, priority and due date. Power Automate can alert the account manager when a case ages. This replaces the shared inbox where issues are easy to lose.",
    },
    {
      q: "Is a CRM worth it for a small freight brokerage?",
      a: "It depends on volume. A broker with a few shippers can run on a shared mailbox and a spreadsheet. A CRM pays off when several reps share accounts, when staff turnover would cost relationships, or when leaders need quote and win-rate reporting.",
    },
    {
      q: "How does MP-365 approach a logistics CRM project?",
      a: "MP-365 starts with a short conversation about how quotes, accounts and service issues work today, then builds a small working version for your team to test. It adjusts that version before widening it. Your Microsoft licenses are bought separately from MP-365's fees.",
    },
  ],
  closing:
    "A CRM for logistics works when quote requests, lanes and service issues are recorded once and visible to everyone who needs them. MP-365 builds that on Dynamics 365 and Microsoft 365, connected to the systems you already run.",
  cta: {
    heading: "Plan your logistics CRM with MP-365",
    body: "Tell us how quotes, shipper accounts and service issues flow today. We will show where Dynamics 365 and Microsoft 365 fit.",
    text: "Talk to MP-365 about logistics",
  },
};

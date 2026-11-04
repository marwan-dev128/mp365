import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/industries/manufacturing/",
  intro:
    "A CRM for manufacturing should track RFQs, quotes and distributor accounts in one place, connect to your other systems, and be simple enough for sales to use every day. MP-365 is a Microsoft Solutions Partner that sets up Dynamics 365 for mid-size manufacturers that have outgrown spreadsheets and inbox-based quoting.",
  triggers: [
    {
      title: "Quotes live in inboxes",
      body: "Each RFQ arrives by email, gets priced in a spreadsheet, and nobody can say which quotes are still open.",
    },
    {
      title: "Distributor sales are invisible",
      body: "You sell through distributors and dealers, but you cannot see which accounts are growing and which have gone quiet.",
    },
    {
      title: "The forecast is a guess",
      body: "Sales leaders rebuild the pipeline by hand before every planning meeting, and the numbers disagree with what plant managers expect.",
    },
    {
      title: "The old CRM no longer fits",
      body: "A legacy CRM or a heavily customized Dynamics setup is slow, hard to change, and avoided by the people it was meant to help.",
    },
  ],
  blocks: [
    {
      type: "list",
      heading: "What to look for in a CRM for manufacturing",
      items: [
        "**Quote and RFQ tracking:** every request for quote should become a record with an owner, a due date, line items and revisions, so nothing sits unanswered.",
        "**Account structure that matches how you sell:** direct customers, distributors, dealers and the end users behind them need separate but linked records.",
        "**Long, multi-step deals:** a custom job or a spec-driven order moves through engineering, pricing and approval, and the CRM stages should reflect that.",
        "**Connections to your other systems:** quotes, orders and shipping status should flow in without retyping, so sales sees one version of the facts.",
        "**Reporting leaders trust:** pipeline, win rate by product line and quote turnaround should come from live data, not a monthly spreadsheet.",
        "**Low effort for the sales team:** if logging a call takes more than a minute, people stop doing it and the data decays.",
      ],
    },
    {
      type: "list",
      heading: "Common challenges in manufacturing sales and service",
      items: [
        "**RFQs get lost or answered late:** requests come in through email, portals and phone calls, and a slow quote often loses the order.",
        "**Distributor and dealer data is thin:** you know what the distributor ordered, but not who the end customer is or what the pipeline looks like.",
        "**Systems do not talk to each other:** sales checks one tool for quotes, another for order status, and a spreadsheet for everything else.",
        "**Reporting takes days:** leaders wait on analysts to compile the pipeline instead of opening a dashboard.",
      ],
    },
    {
      type: "table",
      heading: "How MP-365 helps with each manufacturing challenge",
      headers: ["Challenge", "What MP-365 sets up", "Where to read more"],
      rows: [
        [
          "RFQs get lost or answered late",
          "Quote and opportunity records with owners, stages, line items and reminders in Dynamics 365.",
          "[Dynamics 365 Sales](/services/dynamics-365-crm/sales/)",
        ],
        [
          "Distributor and dealer data is thin",
          "Account hierarchies that link distributors, dealers and end customers, with a pipeline view for each channel.",
          "[Microsoft Dynamics 365 Sales](/services/dynamics-365-crm/sales/)",
        ],
        [
          "Systems do not talk to each other",
          "Integrations that bring order, shipping and billing information into the CRM, with logging and alerts when a connection fails.",
          "[Dynamics 365 Integration Services](/services/dynamics-365-crm/integration-services/)",
        ],
        [
          "Reporting takes days",
          "Live dashboards for pipeline, quote turnaround and win rate that leaders open on their own.",
          "[Executive Dashboards & Analytics](/solutions/executive-dashboards/)",
        ],
        [
          "Plant and office staff are not informed",
          "A SharePoint intranet where product, policy and procedure updates reach everyone, including people who do not sit at a desk.",
          "[Modern Company Intranet](/solutions/sharepoint-intranet/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "How Dynamics 365 handles quotes and RFQs",
      paragraphs: [
        "Dynamics 365 Sales treats a request for quote as an opportunity with a quote attached. The opportunity holds the customer, the stage and the owner. The quote holds the product lines, quantities and revisions, so a changed spec becomes a new version instead of a new email thread.",
        "MP-365 configures the stages to match your own process. A made-to-order manufacturer might add an engineering review. A distributor-led manufacturer might add a channel approval. Reminders and approvals can run through Power Automate, so late quotes surface before the customer asks.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: Hunter Panels",
      paragraphs: [
        "Hunter Panels is a manufacturer that works with MP-365 on Dynamics CRM support. The work aligns the platform with how the business runs, cuts manual work and improves performance.",
        "Read the broader set of results on the [clients page](/clients/).",
      ],
    },
    {
      type: "table",
      heading: "Microsoft tools used in manufacturing CRM projects",
      headers: ["Product", "Role for a manufacturer"],
      rows: [
        ["Dynamics 365 Sales", "Holds accounts, contacts, opportunities, quotes and the sales pipeline."],
        ["Power Automate", "Handles quote approvals, reminders and data hand-offs between systems."],
        ["Power BI", "Shows pipeline, quote turnaround and distributor performance on one dashboard."],
        ["SharePoint Online", "Stores drawings, specs and quote documents next to the account they belong to."],
        ["Microsoft Teams", "Lets sales, engineering and customer service discuss a quote without leaving the record."],
      ],
    },
    {
      type: "prose",
      heading: "When this is not the right fit",
      paragraphs: [
        "A CRM does not run production. It does not schedule your plant, manage inventory or replace the system that takes and ships orders. MP-365 builds the customer-facing side and connects it to your other systems. It does not implement or manage those systems.",
        "Dynamics 365 also will not fix an unclear sales process. If nobody agrees on what counts as a qualified RFQ, settle that first. Microsoft licenses are bought from Microsoft or your license provider, and their fees are separate from MP-365's.",
      ],
    },
    {
      type: "prose",
      heading: "Related Microsoft work for manufacturers",
      paragraphs: [
        "Most manufacturers start with quoting, then add reporting and connections. For the wider picture, see [Microsoft solutions by industry](/industries/). If you already run Dynamics 365 and want a team on call, MP-365 can also take over support of the setup you have.",
      ],
    },
  ],
  faqs: [
    {
      q: "What should a manufacturer look for in a CRM?",
      a: "A manufacturer should look for quote and RFQ tracking, accounts that separate distributors, dealers and end customers, connections to existing systems, and reports that run on live data. Ease of use matters as much as features, because a CRM that sales avoids will hold stale information.",
    },
    {
      q: "How does Dynamics 365 handle quotes and RFQs?",
      a: "Dynamics 365 Sales links each RFQ to an opportunity, then attaches a quote with product lines, quantities and revisions. Owners, stages and due dates keep requests moving. MP-365 tailors the stages to your process and adds Power Automate approvals so pricing reviews do not stall.",
    },
    {
      q: "Can a CRM connect to other manufacturing systems?",
      a: "Yes. Dynamics 365 connects to order, shipping, billing and document systems through integrations, so sales sees current information without retyping. MP-365 builds these with logging and alerts, so a broken connection is noticed quickly instead of surfacing weeks later as bad data.",
    },
    {
      q: "Can a CRM track distributor and dealer sales?",
      a: "Yes. Dynamics 365 can model a distributor as an account, link the dealers and end customers beneath it, and show the pipeline for each channel. That helps you see which partners are growing and which have gone quiet, even when the distributor places the final order.",
    },
    {
      q: "Is a CRM different from the system that runs the plant?",
      a: "Yes. A CRM manages customer relationships, quotes and the sales pipeline. Plant systems manage production, inventory and orders. The two work best when connected, so sales can see order status without calling operations. MP-365 handles the CRM and its connections, not the plant systems.",
    },
    {
      q: "Can plant and field staff use Dynamics 365?",
      a: "Yes. Dynamics 365 runs in a browser and on phones, and Teams and SharePoint put customer files and updates in front of people who do not sit at a desk. MP-365 sets permissions so each person sees only the accounts and documents their role needs.",
    },
    {
      q: "Who should own the CRM inside a manufacturing company?",
      a: "A sales operations or commercial lead should own it, with IT supporting access and integrations. Ownership matters because someone must decide on stages, required fields and reporting. MP-365 helps define those rules during setup and trains your owner to maintain them afterward.",
    },
    {
      q: "Can MP-365 take over a Dynamics 365 setup we already have?",
      a: "Yes. MP-365 reviews your existing configuration, finds what slows people down, and fixes it in priority order. It works this way with current clients such as Hunter Panels, where the focus is aligning the platform with the business and cutting manual work.",
    },
  ],
  closing:
    "A CRM for manufacturing earns its place when quotes stop getting lost, distributor sales become visible and leaders trust the pipeline without asking for a spreadsheet. MP-365 builds that on Dynamics 365 and the Microsoft 365 tools you already use.",
  cta: {
    heading: "Plan your manufacturing CRM with MP-365",
    body: "Tell us how RFQs, quotes and distributor accounts work today. We will show how Dynamics 365 can fit your process.",
    text: "Talk to MP-365 about manufacturing",
  },
};

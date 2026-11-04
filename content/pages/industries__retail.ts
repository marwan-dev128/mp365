import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/industries/retail/",
  intro:
    "A retail CRM should give you one view of each shopper across stores and online, connect to your point of sale and ecommerce platform, and report across every location. MP-365 builds retail customer service, reporting and system connections on Dynamics 365 and Power BI.",
  triggers: [
    {
      title: "Returns and complaints get lost",
      body: "Shoppers email one address, call another and visit a store, and nobody sees the full history.",
    },
    {
      title: "Store reports disagree",
      body: "Each location sends its own spreadsheet, and head office spends days reconciling them before a meeting.",
    },
    {
      title: "Loyalty data sits apart from service data",
      body: "Marketing knows who your best shoppers are, but the service team cannot see it when they call.",
    },
    {
      title: "Point of sale and online data never meet",
      body: "A shopper who buys in store and online appears as two different customers.",
    },
  ],
  blocks: [
    {
      type: "prose",
      heading: "What a retailer should look for in a retail CRM",
      paragraphs: [
        "A retail CRM earns its place when store staff, the service team and marketing all work from the same shopper record. Search results for this topic are mostly software lists, so start with your own needs before you compare products.",
        "Retail also has a rhythm that other industries lack: seasonal peaks, high transaction counts and staff who rotate often. A CRM that needs long training or slows down a till queue will not be used.",
      ],
    },
    {
      type: "list",
      heading: "Checks before you choose retail CRM software",
      items: [
        "**One shopper record:** purchases from stores, ecommerce and phone orders should resolve to the same person.",
        "**Point of sale and ecommerce connections:** transactions should reach the customer record without retyping.",
        "**Returns and complaint handling:** each case needs an owner, a status and a link to the order.",
        "**Loyalty and segments:** the CRM should hold member status and let marketing build groups, such as lapsed shoppers.",
        "**Multi-store reporting:** leaders should compare stores, regions and product groups from one source.",
        "**Store-level access:** a store manager should see their location, while head office sees all of them.",
        "**Simple for store staff:** the screens a floor employee uses should take seconds, not minutes.",
      ],
    },
    {
      type: "list",
      heading: "Common challenges for retailers",
      items: [
        "**Shoppers contact you in many places:** store, email, phone, chat and social channels create separate threads.",
        "**Reporting is manual:** weekly sales and returns packs are built from exports from the point of sale.",
        "**Systems do not talk:** the point of sale, ecommerce platform and marketing tools each hold a different version of the shopper.",
        "**Seasonal peaks overload service:** returns and questions spike, and staff track them on shared inboxes.",
        "**Duplicate customer records:** the same shopper appears several times with different spellings and addresses.",
      ],
    },
    {
      type: "table",
      heading: "How MP-365 helps retail teams",
      headers: ["Challenge", "What MP-365 does", "Where to read more"],
      rows: [
        [
          "Shoppers contact you in many places",
          "Sets up cases, queues, owners and status tracking so every request has one record.",
          "[Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/)",
        ],
        [
          "Reporting is manual",
          "Builds live dashboards across stores, regions and product groups to replace weekly spreadsheets.",
          "[Power BI Consulting & Dashboards](/services/power-platform/power-bi/)",
        ],
        [
          "Systems do not talk",
          "Connects the CRM to your point of sale, ecommerce platform and marketing tools, with logging and alerts when a connection fails.",
          "[CRM & Systems Integration](/solutions/crm-systems-integration/)",
        ],
        [
          "Seasonal peaks overload service",
          "Adds routing, queues and templates so cases reach the right person during busy periods.",
          "[Power Automate](/services/power-platform/power-automate/)",
        ],
        [
          "Duplicate customer records",
          "Finds and merges duplicates and sets rules that stop new ones.",
          "[Data Quality Management](/services/data-governance/data-quality-management/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Proof: case tracking and reliable connections from similar projects",
      paragraphs: [
        "MP-365 has replaced email-based support with one case system that shows owner, status and urgency. It has also built reliable connections between a CRM and marketing tools, using logging and alerts and service accounts instead of personal ones. The clients and industries are withheld, and these are not retail results.",
        "See more project summaries on the [clients page](/clients/).",
      ],
    },
    {
      type: "table",
      heading: "Microsoft tools used in a retail setup",
      headers: ["Product", "Role for a retailer"],
      rows: [
        ["Dynamics 365 Customer Service", "Tracks shopper questions, returns and complaints as cases with owners and status."],
        ["[Customer Insights](/services/dynamics-365-crm/customer-insights/)", "Builds shopper segments and email journeys. Customer Insights - Journeys was formerly Dynamics 365 Marketing."],
        ["Power BI", "Compares stores, products and periods in dashboards that refresh from your data."],
        ["Power Apps", "Provides small mobile screens for store staff, such as a return lookup, built on existing data."],
        ["Microsoft Teams", "Lets store managers and head office talk about a case without leaving the record."],
      ],
    },
    {
      type: "prose",
      heading: "How retailers use Dynamics 365 and Power BI together",
      paragraphs: [
        "Retailers use Dynamics 365 to hold the shopper relationship and Power BI to show what is happening across the business. The CRM records cases, segments and contact history, and Power BI combines that with sales and returns data for managers.",
        "The value comes from joining the two. A regional manager can see which stores have the most open returns, then open the case list behind the number.",
      ],
    },
    {
      type: "prose",
      heading: "When this is not the right fit",
      paragraphs: [
        "MP-365 is not the right fit if you want a packaged point of sale, a store design or a new ecommerce site, because it does none of these. It connects the CRM to the systems you already run.",
        "MP-365 also does not resell Microsoft licenses or run help desk support for your stores. If you need a ready-made loyalty engine, buy one and let MP-365 connect it to the shopper record.",
      ],
    },
    {
      type: "prose",
      heading: "Related services for retail teams",
      paragraphs: [
        "Retail teams that run campaigns often start with [Customer Insights](/services/dynamics-365-crm/customer-insights/) and shopper segments. For the wider picture, see all [industries](/industries/) MP-365 serves.",
      ],
    },
  ],
  faqs: [
    {
      q: "What should a retailer look for in a CRM?",
      a: "Look for one shopper record across stores and online, a way to log returns and complaints, and reporting that covers every location. The CRM should connect to your point of sale and ecommerce platform so data is not retyped. Check that store staff can use it quickly.",
    },
    {
      q: "How can Power BI help retail reporting?",
      a: "Power BI combines sales, returns and customer data from several sources into live dashboards, so you compare stores, product groups and periods without spreadsheets. Managers open one report instead of requesting exports. MP-365 builds these through its [Power BI consulting](/services/power-platform/power-bi/).",
    },
    {
      q: "How do retailers use Dynamics 365?",
      a: "Retailers use Dynamics 365 Customer Service to handle shopper questions, returns and complaints, and Customer Insights to manage campaigns and segments. Dynamics 365 Sales supports wholesale and business accounts. The apps share the customer record, so every team sees the same history.",
    },
    {
      q: "Does a retail CRM replace our point of sale system?",
      a: "No. The point of sale records transactions at the till, while the CRM records the relationship around them, such as service cases, preferences and campaigns. MP-365 connects the two so purchase data reaches the shopper record without double entry.",
    },
    {
      q: "Can Dynamics 365 support a loyalty program?",
      a: "Partly. Dynamics 365 can hold member records, segments and campaign journeys, and Customer Insights - Journeys can send targeted messages. If your points engine lives in another platform, MP-365 connects it to the shopper record rather than replacing it.",
    },
    {
      q: "How should a CRM handle returns and complaints?",
      a: "Log each return or complaint as a case with an owner, status and urgency, linked to the shopper and the order. Store staff and the service team then see the same history. Dynamics 365 Customer Service supports queues, routing and status tracking for this work.",
    },
    {
      q: "Can store managers see only their own store's data?",
      a: "Yes. Dynamics 365 security roles and business units can limit each manager to one store or region, while head office sees all locations. MP-365 documents these access levels so later changes are easy to review.",
    },
    {
      q: "Should we buy retail CRM software or build on Dynamics 365?",
      a: "Buy a packaged product if your needs are standard and you want little configuration. Build on Dynamics 365 if you already use Microsoft 365, need to connect several systems, or want multi-store reports in Power BI. MP-365 builds on Dynamics 365 and does not resell licenses.",
    },
  ],
  closing:
    "A retail CRM should make life easier for store staff and give head office a trusted view of every shopper and every location. MP-365 builds that on Dynamics 365 and Power BI, connected to the point of sale and online systems you already use.",
  cta: {
    heading: "Talk to MP-365 about your retail CRM",
    body: "Tell us how shoppers reach you and which reports your team rebuilds by hand. We will outline a first version you can react to.",
    text: "Talk to MP-365 about retail",
  },
};

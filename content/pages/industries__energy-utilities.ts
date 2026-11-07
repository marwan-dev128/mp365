import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/industries/energy-utilities/",
  intro:
    "A CRM for utilities keeps each customer account, service request and contact conversation in one record, so staff stop searching several systems for the full story. It does not replace your billing system. MP-365 builds it on Dynamics 365, with SharePoint for the documents that sit behind each account.",
  triggers: [
    {
      title: "Customer history is scattered",
      body: "Service staff open three screens and a shared drive to answer one customer's question about an outage or a work order.",
    },
    {
      title: "Service requests get lost",
      body: "Requests arrive by phone, email, web form and field crews, and no one can say which are still open.",
    },
    {
      title: "Files pile up on shared drives",
      body: "Contracts, easements, inspection notes and permits sit in folder trees that only a few people understand.",
    },
    {
      title: "Reporting is manual",
      body: "Leaders ask for request volume and response patterns, and an analyst spends days assembling the answer.",
    },
  ],
  blocks: [
    {
      type: "prose",
      heading: "What a CRM does for a utility",
      paragraphs: [
        "A CRM gives a utility one record for each customer relationship. That record shows the account, the service address, past requests, planned work, key contacts and the conversations around them. Staff stop asking customers to repeat themselves and managers can see where requests stall.",
        "The goal is a better view of the customer, not a new place to enter every number. Rates, meter reads and invoices stay where they are. The CRM connects to them so staff can see the customer's whole situation from one screen.",
      ],
    },
    {
      type: "list",
      heading: "What to look for in a CRM for utilities and energy",
      items: [
        "**Account and site structure:** a customer may have several service locations, contacts and contracts, and the record should show how they relate.",
        "**Service request tracking:** every call, email or crew report becomes a case with an owner, a status and a target date.",
        "**Large and commercial accounts:** key accounts need account managers, planned work and contract dates, not just a case queue.",
        "**Links to documents:** contracts, permits and inspection notes should open from the account instead of a separate folder search.",
        "**Role-based access:** field crews, call center staff and executives should each see only what their role requires.",
        "**Reporting:** request volume, age and resolution patterns should come from live data.",
      ],
    },
    {
      type: "prose",
      heading: "How energy companies manage customer accounts in a CRM",
      paragraphs: [
        "Energy companies manage accounts in a CRM by treating the customer as a parent record with linked sites, contacts, contracts and cases. A commercial customer with five locations has one account and five linked sites. A residential service request attaches to one address and one contact.",
        "In Dynamics 365, MP-365 sets up these relationships, adds the fields your team uses, and builds views for account managers, service staff and supervisors. The account record also links to its SharePoint folder, so a contract or permit opens in one click.",
      ],
    },
    {
      type: "table",
      heading: "How a CRM differs from a billing system",
      headers: ["Question", "CRM", "Billing system"],
      rows: [
        ["Main purpose", "Manage relationships, requests and conversations", "Calculate usage, rates and invoices"],
        ["Typical records", "Accounts, contacts, cases, notes and planned work", "Meter data, tariffs, bills and payments"],
        ["Typical users", "Service staff, account managers and supervisors", "Billing, finance and collections staff"],
        ["Who changes it", "Business teams, with admin help", "Specialist staff, under strict controls"],
        ["How they relate", "Shows billing information on the customer record through a connection", "Remains the source for charges and balances"],
      ],
    },
    {
      type: "list",
      heading: "Common challenges for utility and energy teams",
      items: [
        "**No single customer view:** service, account management and billing each hold a different piece of the story.",
        "**Service requests have no clear owner:** requests pass between the call center, dispatch and field crews without a shared record.",
        "**Documents are hard to find:** contracts, easement records and inspection notes live in nested folders.",
        "**Reports take too long to build:** leaders want a trend, and the data sits in several exports.",
      ],
    },
    {
      type: "table",
      heading: "How MP-365 helps utility teams",
      headers: ["Challenge", "What MP-365 sets up", "Where to read more"],
      rows: [
        [
          "No single customer view",
          "Account, site and contact records in Dynamics 365, with a case history on the same screen.",
          "[Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/)",
        ],
        [
          "Service requests have no clear owner",
          "Cases with owners, priorities and due dates, plus alerts when a request ages.",
          "[Customer Service in Dynamics 365](/services/dynamics-365-crm/customer-service/)",
        ],
        [
          "Documents are hard to find",
          "A clean SharePoint structure with metadata, so files open from the account record.",
          "[File Share to SharePoint Migration](/services/sharepoint/file-share-migration/)",
        ],
        [
          "Reports take too long to build",
          "Live dashboards for request volume, age and resolution.",
          "[Power BI Consulting & Dashboards](/services/power-platform/power-bi/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Proof: case tracking from a similar project",
      paragraphs: [
        "At another organization, MP-365 replaced email-based support with a single case system that shows each issue's owner, status and urgency. The client and industry are withheld, and the project was not in energy or utilities. It shows the pattern a utility service desk would use.",
        "See the results MP-365 can name on the [clients page](/clients/).",
      ],
    },
    {
      type: "table",
      heading: "Microsoft tools used for a utility CRM",
      headers: ["Product", "Role for a utility"],
      rows: [
        ["Dynamics 365 Customer Service", "Holds accounts, contacts and service requests as cases."],
        ["SharePoint Online", "Stores contracts, permits and inspection records, linked to each account."],
        ["Power BI", "Reports on request volume, age and resolution."],
        ["Power Automate", "Routes cases, sends reminders and moves data between systems."],
        ["Microsoft Teams", "Lets service, dispatch and account staff discuss a case beside its record."],
      ],
    },
    {
      type: "prose",
      heading: "When a utility CRM is not the right fit",
      paragraphs: [
        "A CRM is not the right fit if you expect it to bill customers, read meters or run outage and grid systems. MP-365 does not implement those systems. It builds the customer and service layer and connects it to them.",
        "MP-365 also does not promise compliance with any regulation or provide security operations. It does set up permission models, access audits and document control, so the right people see the right records. For wider context, see [Microsoft solutions by industry](/industries/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What does a CRM do for a utility?",
      a: "A CRM gives a utility one record per customer, showing accounts, service locations, contacts, requests and conversations. Staff answer questions faster and supervisors see where requests stall. Rates and invoices stay in the billing system, which the CRM connects to for reference.",
    },
    {
      q: "How do energy companies manage customer accounts in a CRM?",
      a: "Energy companies treat the customer as a parent account with linked sites, contacts, contracts and cases. A commercial customer with several locations keeps one account and many sites. MP-365 builds these relationships in Dynamics 365 and links each account to its SharePoint folder.",
    },
    {
      q: "How is a utility CRM different from a billing system?",
      a: "A CRM manages relationships, requests and conversations, while a billing system calculates usage, applies rates and issues invoices. The two serve different users and follow different change controls. MP-365 connects them so service staff can see billing facts without editing them.",
    },
    {
      q: "Can Dynamics 365 track service requests from phone, email and crews?",
      a: "Yes. Dynamics 365 Customer Service can turn requests from several channels into cases with an owner, priority and due date. Field crew reports can enter through a form or a Power Automate flow. Supervisors then see one queue instead of separate inboxes.",
    },
    {
      q: "Does a utility need a CRM if it already has a billing system?",
      a: "Usually yes, if staff cannot see customer history in one place. A billing system records charges, not conversations or service work. A CRM adds that missing view. Smaller utilities with simple needs may manage with the billing tools they have.",
    },
    {
      q: "How can SharePoint help with contracts and field documents?",
      a: "SharePoint can hold contracts, permits and inspection notes in libraries with metadata, version control and permissions. Linked to the account record, a document opens in one click. MP-365 can also move existing shared-drive folders into SharePoint Online in an organized structure.",
    },
    {
      q: "Does MP-365 promise regulatory compliance for utilities?",
      a: "No. MP-365 does not provide compliance certification or security operations. It builds permission models, audits who has access to Dynamics 365 and Microsoft 365 content, and sets up document control. Your own compliance team decides whether those controls meet the rules you must follow.",
    },
    {
      q: "Can executives see request trends without waiting for an analyst?",
      a: "Yes. Power BI can read case data from Dynamics 365 and show volume, age and resolution on a live dashboard. Executives open it themselves instead of requesting a spreadsheet. MP-365 builds the dashboard around the measures your leaders already use.",
    },
  ],
  closing:
    "A CRM for utilities pays off when staff can see one clear record for every customer, request and document, while billing stays in its own system. MP-365 builds that on Dynamics 365 and SharePoint, with permissions that match each role.",
  cta: {
    heading: "Plan your utility CRM with MP-365",
    body: "Tell us how accounts, requests and documents work today. We will show how Dynamics 365 and SharePoint can fit.",
    text: "Book a free energy and utilities consultation",
  },
};

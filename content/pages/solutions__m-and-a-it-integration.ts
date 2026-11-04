import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/solutions/m-and-a-it-integration/",
  intro:
    "M&A IT integration brings two companies onto one Microsoft 365 environment after a merger or acquisition (M&A, mergers and acquisitions), and splits one apart when a business unit is sold. MP-365 is a Microsoft Solutions Partner that plans the email, files and Teams moves so people keep working on Day 1.",
  blocks: [
    {
      type: "prose",
      heading: "What M&A IT integration means on Microsoft 365",
      paragraphs: [
        "M&A IT integration is the technical work of joining or separating two companies' systems when ownership changes. On Microsoft 365, that work centers on the tenant, which is each company's own Microsoft 365 environment holding its users, mailboxes, Teams and files.",
        "When you buy a company, you usually combine tenants. When you sell a unit, you split one tenant in two, which people call a carve out. Either way, the same people who close the deal depend on email, calendars and documents working on the first morning.",
      ],
    },
    {
      type: "prose",
      heading: "What Day 1 IT readiness means",
      paragraphs: [
        "Day 1 IT readiness means the people affected can sign in, send email and reach the files they need on the first day the deal takes effect. It is a short list of must-work items, agreed before closing, not a full integration.",
        "Everything else, such as moving every mailbox and merging every site, happens afterward in planned waves. Separating Day 1 from the longer program keeps the deal from stalling while IT finishes the full job.",
      ],
    },
    {
      type: "table",
      heading: "Combine tenants or separate them",
      headers: ["Deal type", "What IT does", "What can go wrong"],
      rows: [
        [
          "Acquisition: bring a company in",
          "Move users, mailboxes, Teams and files into the buyer's tenant, or run both side by side first.",
          "Duplicate addresses, broken sharing links and staff who cannot find shared documents.",
        ],
        [
          "Merger: two equals",
          "Choose which tenant becomes the main one, or plan a new one, then move both sides in waves.",
          "Arguments over naming and permissions that delay the work.",
        ],
        [
          "Divestiture: sell a unit",
          "Copy the unit's data out of the parent tenant into a new tenant and remove access it should no longer have.",
          "Data that belongs to the buyer stays behind, or data that should stay is copied out.",
        ],
        [
          "Coexistence period",
          "Keep both tenants live while users see each other in address books and calendars.",
          "Calendar availability gaps and mail loops if the setup is not tested.",
        ],
      ],
    },
    {
      type: "list",
      heading: "Who feels it when integration goes wrong",
      items: [
        "**Deal and finance leaders:** they need the new organization to work on schedule, or promised savings slip.",
        "**IT leaders:** they have a fixed date, two sets of administrators and little time to learn the other side's setup.",
        "**Employees on both sides:** they lose email, cannot find documents or see strange address books.",
        "**Legal and compliance teams:** they need to know who can see which data after the deal.",
      ],
    },
    {
      type: "table",
      heading: "What a rough integration costs the deal",
      headers: ["Symptom", "Business impact"],
      rows: [
        ["Email or calendars break on Day 1", "Customers and employees miss messages, and the deal starts with a visible failure."],
        ["Two sets of files and Teams", "Staff keep duplicates, and nobody trusts which version is current."],
        ["Permissions copied without review", "People see data they should not, or lose access to data they need."],
        ["Separation left half done", "Seller and buyer both hold data that belongs to the other, which creates legal risk."],
        ["IT team stretched across the deal", "Regular work stalls while a few people handle the move."],
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 runs M&A IT integration and separation",
      steps: [
        {
          name: "Map both sides' Microsoft 365 setups",
          description:
            "List users, domains, mailboxes, Teams, SharePoint sites, shared files and licenses on each side, and note who owns what.",
        },
        {
          name: "Define Day 1 and the later waves",
          description:
            "Agree on the must-work list for the first morning, then group everything else into planned moves with owners.",
        },
        {
          name: "Design the target tenant",
          description:
            "Decide naming, domains, groups and permissions in the surviving or new tenant before any user is moved.",
        },
        {
          name: "Set up coexistence",
          description:
            "Connect the tenants so users see each other in the address book and calendar while the moves run.",
        },
        {
          name: "Pilot with a small group",
          description:
            "Move a few mailboxes, a Team and a file library first. Check that mail flows, sharing links hold and users can sign in.",
        },
        {
          name: "Move mailboxes, Teams and files in waves",
          description:
            "Migrate groups on a schedule that avoids busy business periods, and compare results with the source after each wave.",
        },
        {
          name: "Cut over domains and clean up access",
          description:
            "Switch mail domains on the agreed date, then review permissions so each side keeps only the data it should.",
        },
        {
          name: "Hand off with documentation",
          description:
            "Give your administrators the final structure, the permission model and a list of what was moved or retired.",
        },
      ],
    },
    {
      type: "table",
      heading: "What you get from MP-365",
      headers: ["What MP-365 builds", "The result"],
      rows: [
        ["An inventory of both tenants", "Both sides see the same picture before a single user moves."],
        ["A Day 1 readiness checklist", "Everyone knows what must work on the first day and who is responsible."],
        ["A coexistence setup between tenants", "Staff see colleagues in both organizations while the moves continue."],
        ["Cross-tenant mailbox, Teams and file moves in waves", "Work continues during the move, with checks after each wave."],
        ["A permission model for the final tenant", "Each group sees the data it should, and sensitive areas stay limited."],
        ["Handoff notes for your administrators", "Your team can run the result without MP-365."],
      ],
    },
    {
      type: "prose",
      heading: "Proof: fast starts and large file moves",
      paragraphs: [
        "Carlisle Construction asked MP-365 to steady its Dynamics and SharePoint operations. MP-365 stabilized them within a week, with no long discovery phase. That same fast, hands-on start suits a deal, where the calendar matters more than a thick planning document.",
        "In another client project, MP-365 moved file shares holding hundreds of thousands of files into organized SharePoint libraries with metadata, version control and workflows.",
      ],
    },
    {
      type: "prose",
      heading: "Who this is not the right fit for",
      paragraphs: [
        "This service is not the right fit if your deal needs network, data center or phone system work, or if you only need advice on deal strategy. MP-365 focuses on Microsoft 365 tenants, SharePoint and Dynamics 365. It also does not suit teams who want to start the plan after closing, because Day 1 decisions need to happen before it.",
      ],
    },
    {
      type: "prose",
      heading: "Related services for your deal",
      paragraphs: [
        "For the delivery side of a deal, see [M&A Tenant Migration](/services/tenant-to-tenant-migration/). Moves of mailboxes, Teams and files are covered in [Cross-Tenant Mailbox, Teams & File Migration](/services/tenant-to-tenant-migration/mailbox-teams-files/), and the period when both tenants run together is covered in [Tenant Coexistence & Domain Cutover](/services/tenant-to-tenant-migration/coexistence/).",
        "Access reviews after the move use [Microsoft Purview & Permission Models](/services/data-governance/microsoft-purview/). The [Pricing](/pricing/) page explains how effort and fees are handled, and [Solutions](/solutions/) lists other outcomes MP-365 delivers.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is M&A IT integration?",
      a: "M&A IT integration is the technical work of joining two companies' systems after a merger or acquisition, or splitting them after a divestiture. On Microsoft 365, it covers tenants, mailboxes, Teams, files, domains and permissions, so employees keep working while ownership changes.",
    },
    {
      q: "How do you separate IT after a divestiture?",
      a: "You build a new tenant for the unit being sold, copy its mailboxes, Teams and files out of the parent tenant, switch its domains, then remove access each side should no longer have. MP-365 plans the split in waves and checks the data after each one.",
    },
    {
      q: "What does Day 1 IT readiness mean?",
      a: "Day 1 IT readiness means employees can sign in, send email and reach the documents they need on the first day the deal takes effect. MP-365 agrees a short must-work list with you before closing, and handles the larger moves in later waves.",
    },
    {
      q: "What is an IT carve out?",
      a: "An IT carve out is the separation of one business unit's systems from its parent company so the unit can be sold or run alone. On Microsoft 365, that means moving the unit's users and data into their own tenant and cutting shared access.",
    },
    {
      q: "Can we integrate Office 365 and Microsoft 365 tenants after an acquisition?",
      a: "Yes. Office 365 is now called Microsoft 365, and tenants on either name are combined the same way. MP-365 inventories both sides, sets up coexistence so staff see each other, then moves mailboxes, Teams and files into the surviving tenant in planned waves.",
    },
    {
      q: "Do both companies need to keep working during the move?",
      a: "Yes. The plan is built so people keep using email, Teams and files while moves run. Coexistence keeps address books and calendars connected, and waves are scheduled around busy periods. Some users may see a short change at their own cutover, which is announced beforehand.",
    },
    {
      q: "When should IT planning start in a deal?",
      a: "Start as soon as the deal is likely, and before closing if you can. Day 1 decisions, such as domains, sign-in and who needs access, take time to agree. Starting early lets MP-365 test the setup before real users depend on it.",
    },
    {
      q: "How much does M&A IT integration cost?",
      a: "Cost depends on how many users, mailboxes, Teams and files move, and whether you are combining or separating. License fees go to Microsoft and are separate from MP-365 fees. The [Pricing](/pricing/) page describes how engagements are structured.",
    },
  ],
  closing:
    "M&A IT integration works best when Day 1 is planned before closing and the rest is moved in tested waves. MP-365 maps both tenants, sets up coexistence and hands your administrators a clean result, whether you are combining companies or splitting one apart.",
  cta: {
    heading: "Plan your deal",
    body: "Tell MP-365 whether you are combining or separating Microsoft 365 environments. You will leave the first conversation with a clear view of Day 1 and the waves that follow.",
    text: "Plan your deal",
  },
};

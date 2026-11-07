import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/industries/construction-engineering/",
  intro:
    "A CRM for construction industry firms should track bids, clients, subcontractors and active projects in one place, and connect to the project documents your team already works from. MP-365 is a Microsoft Solutions Partner that builds this on Dynamics 365 and SharePoint for construction and engineering companies.",
  triggers: [
    {
      title: "Bids live in spreadsheets",
      body: "Estimators track open bids, due dates and follow-ups in personal files, and nobody can see the full pipeline.",
    },
    {
      title: "Project documents are scattered",
      body: "Drawings, RFIs and submittals sit in email, shared drives and a few SharePoint sites with no clear owner.",
    },
    {
      title: "Past clients go quiet",
      body: "Repeat work from owners and general contractors slips because nobody records who to call after a project closes.",
    },
    {
      title: "Reports take a manual rebuild",
      body: "Leadership wants backlog and win rates, and someone spends days stitching them together from separate lists.",
    },
  ],
  blocks: [
    {
      type: "list",
      heading: "What to look for in a CRM for construction industry firms",
      items: [
        "**Bid and opportunity tracking:** each bid has a due date, an estimator, a status and a result, and you can see every open bid in one view.",
        "**Relationships beyond the client:** owners, general contractors, architects, engineers and subcontractors all appear as linked contacts on the same job.",
        "**A path from won bid to project:** the record carries over to the project instead of being retyped.",
        "**Project documents you can reach:** drawings, contracts and RFIs open from the CRM record, with version control and permissions that match the project team.",
        "**Connection to your other systems:** estimating tools, scheduling and accounting data can feed the CRM so staff do not enter it twice.",
        "**Easy use from the field:** project managers and superintendents can read and update records from a phone or tablet.",
        "**Reports leadership trusts:** backlog, bid volume and win rate come from live data, not a monthly spreadsheet.",
      ],
    },
    {
      type: "list",
      heading: "Common challenges in construction and engineering firms",
      items: [
        "**Bid pipeline hidden in personal files:** estimators keep their own lists, so leadership cannot forecast work or see which bids need attention.",
        "**Subcontractor and client history is lost:** who bid, who performed and who to invite next time lives in people's heads.",
        "**Project documents sprawl:** drawings and specs exist in several places, and teams build from an old revision.",
        "**Closeout hand-offs break:** sales, preconstruction and project teams each keep a separate record of the same job.",
        "**Reporting costs days:** backlog and win-rate numbers need manual assembly every month.",
      ],
    },
    {
      type: "table",
      heading: "How MP-365 helps construction teams with each challenge",
      headers: ["Challenge", "What MP-365 does", "Where to read more"],
      rows: [
        [
          "Bid pipeline hidden in personal files",
          "Sets up bids as opportunities with stages, owners, due dates and a shared pipeline view",
          "[Dynamics 365 Sales](/services/dynamics-365-crm/sales/)",
        ],
        [
          "Subcontractor and client history is lost",
          "Models owners, contractors and subcontractors as linked accounts and contacts with job history",
          "[Dynamics 365 Sales](/services/dynamics-365-crm/sales/)",
        ],
        [
          "Project documents sprawl",
          "Builds project libraries in SharePoint with metadata, version control and permission groups per job",
          "[SharePoint Intranet Development](/services/sharepoint/intranet-development/)",
        ],
        [
          "Closeout hand-offs break",
          "Links the CRM record to the project site and automates approvals and notices with Power Automate",
          "[Contract Management Automation](/solutions/contract-management-automation/)",
        ],
        [
          "Reporting costs days",
          "Replaces spreadsheet reports with live Power BI dashboards on backlog and bids",
          "[Power BI Consulting & Dashboards](/services/power-platform/power-bi/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Proof: Carlisle Construction",
      paragraphs: [
        "Carlisle Construction is a construction client of MP-365. MP-365 stabilized its Dynamics and SharePoint operations without a long discovery phase, so the team could keep working on projects while the platform was brought under control.",
      ],
    },
    {
      type: "list",
      heading: "Microsoft tools used for construction work",
      items: [
        "**Dynamics 365 Sales:** bids, accounts, contacts and the pipeline.",
        "**SharePoint Online:** project libraries for drawings, contracts and RFIs, with version control.",
        "**Power Automate:** approvals, reminders and hand-offs between preconstruction and project teams.",
        "**Power BI:** backlog, bid volume and win-rate dashboards.",
        "**Microsoft Teams and Outlook:** project channels and email that link back to CRM records.",
      ],
    },
    {
      type: "prose",
      heading: "When MP-365 is not the right fit",
      paragraphs: [
        "MP-365 does not run your estimating, scheduling or accounting software, and it does not write custom construction software. It connects the CRM to the systems you already use.",
        "MP-365 sets up SharePoint permissions and document control, but it does not provide cybersecurity services or certify your project data. If you need a dedicated construction project management product, MP-365 can link it to Dynamics 365, not replace it.",
      ],
    },
    {
      type: "prose",
      heading: "Related Microsoft services for construction teams",
      paragraphs: [
        "Construction firms often start with the bid pipeline in [Dynamics 365 Sales](/services/dynamics-365-crm/sales/) and then add project document control in SharePoint.",
        "Many also build a company site for crews and office staff, which is covered in [SharePoint Intranet Development](/services/sharepoint/intranet-development/). See the full list of [microsoft solutions by industry](/industries/) for other sectors MP-365 serves.",
      ],
    },
  ],
  faqs: [
    {
      q: "What should a construction company look for in a CRM?",
      a: "A construction company should look for bid tracking, links between owners, contractors and subcontractors, and access to project documents from the same record. It should also report on backlog and win rate. A CRM built only for single sales deals will not fit project-based work.",
    },
    {
      q: "How can a CRM track bids and projects?",
      a: "A CRM tracks bids by treating each one as an opportunity with a due date, estimator, stage and result. When a bid is won, the same record becomes the project record. Everyone then sees one history from first contact through closeout.",
    },
    {
      q: "How do you manage project documents in SharePoint?",
      a: "You manage project documents in SharePoint by giving each job its own library, adding metadata such as discipline and revision, and turning on version control. Permission groups limit who can edit drawings. Teams then open one current copy instead of emailing attachments.",
    },
    {
      q: "Is Dynamics 365 a good CRM for a construction company?",
      a: "Yes, Dynamics 365 Sales can fit a construction company when it is configured for bids and projects instead of generic deals. It links to SharePoint for documents and to Power BI for reports. The fit depends on how your team bids and delivers work.",
    },
    {
      q: "Can a CRM show subcontractor history?",
      a: "Yes, if subcontractors are set up as accounts and contacts linked to each job. Your team can then see who bid, who worked on which project and who to invite next. MP-365 designs these relationships with you so the data stays clean.",
    },
    {
      q: "Does a construction CRM replace project management software?",
      a: "No, a CRM covers relationships, bids and pipeline, while project management software runs schedules, costs and field work. The two should share key data. MP-365 connects Dynamics 365 to the project and estimating tools your firm already uses.",
    },
    {
      q: "Can field staff use the CRM from a job site?",
      a: "Yes, Dynamics 365 has mobile access, so project managers and superintendents can read and update records from a phone or tablet. MP-365 keeps the mobile forms short so crews enter only what they need on site.",
    },
    {
      q: "How does MP-365 start a construction CRM project?",
      a: "MP-365 starts with a discovery call about how you bid and deliver work, then builds a small working version for you to react to. You see real bids in the system early, and adjustments follow before the wider rollout. Contact MP-365 to begin.",
    },
  ],
  closing:
    "A CRM for construction industry teams works best when bids, relationships and project documents sit together and your people actually use them. MP-365 builds that on Dynamics 365 and SharePoint, and hands it over in a form your team can run.",
  cta: {
    heading: "Plan a construction CRM with MP-365",
    body: "Tell MP-365 how your firm tracks bids and project documents today, and the team will outline what to change first.",
    text: "Book a free construction consultation",
  },
};

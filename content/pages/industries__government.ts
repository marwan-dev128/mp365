import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/industries/government/",
  intro:
    "A gov CRM should track constituents, cases and agency programs in one system, with clear roles for who can see and change each record. MP-365 is a Microsoft Solutions Partner that supports federal and state government organizations on Dynamics 365, SharePoint and Microsoft 365.",
  triggers: [
    {
      title: "Cases are tracked by email",
      body: "Requests from the public or other offices arrive in shared inboxes, and nobody can see status or owner at a glance.",
    },
    {
      title: "Access has grown without review",
      body: "Staff have moved between programs for years, and nobody has checked who still needs access to which records.",
    },
    {
      title: "Records live across offices",
      body: "Program files and correspondence sit in several libraries and drives, so finding the official copy takes time.",
    },
    {
      title: "A contract or program change is coming",
      body: "A new award, reorganization or platform decision means the CRM needs fresh support before it slows the work down.",
    },
  ],
  blocks: [
    {
      type: "prose",
      heading: "What a gov CRM needs to handle",
      paragraphs: [
        "A government CRM manages relationships with the public, partner agencies and program participants, and it records each request from receipt to closure. The tools differ from a sales CRM because the main goal is service and accountability, not revenue.",
        "Public sector procurement shapes the decision as well. Teams usually need a platform that fits an existing Microsoft environment, supports defined roles, and leaves a clear record of who did what.",
      ],
    },
    {
      type: "list",
      heading: "What a government agency should look for in a CRM",
      items: [
        "**Case management:** every request has an owner, a status, a due date and a history, so nothing sits unassigned.",
        "**Constituent and partner records:** people, organizations and programs are linked, with a shared view across offices.",
        "**Role-based access:** each staff role sees only the records it needs, with documented access levels and a way to review them.",
        "**Audit trail:** changes to records and access are logged so you can answer who changed what.",
        "**Document control:** correspondence and program files stay in a managed library with version history.",
        "**Fit with Microsoft 365:** the CRM works with Outlook, Teams and SharePoint your staff already use.",
        "**Reporting for program leaders:** workload, aging cases and outcomes appear in live dashboards.",
      ],
    },
    {
      type: "table",
      heading: "How MP-365 supports government CRM and Microsoft 365 work",
      headers: ["Challenge", "What MP-365 does", "Where to read more"],
      rows: [
        [
          "Email-based request tracking",
          "Sets up cases with owner, status and urgency in Dynamics 365",
          "[Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/)",
        ],
        [
          "Access that grew without review",
          "Audits Dynamics 365 security roles, documents access levels and reports on extra access",
          "[Dynamics 365 Security Roles & Access Audit](/services/dynamics-365-crm/security-roles-audit/)",
        ],
        [
          "Records spread across libraries",
          "Designs permission models and document control for Microsoft 365 content",
          "[Microsoft Purview & Permission Models](/services/data-governance/microsoft-purview/)",
        ],
        [
          "Ongoing CRM support needs",
          "Manages and supports the Dynamics 365 CRM so staff focus on the mission",
          "[Dynamics 365 CRM](/services/dynamics-365-crm/)",
        ],
        [
          "Reports built by hand",
          "Builds Power BI dashboards on live case and program data",
          "[Power BI Consulting & Dashboards](/services/power-platform/power-bi/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Proof: federal and state government clients",
      paragraphs: [
        "MP-365 manages and supports Dynamics 365 CRM for the US Department of Transportation, a federal client. It also works with the Connecticut Department of Public Health, a state government client.",
        "In similar projects, MP-365 has replaced email-based support with case tracking that shows owner, status and urgency, and has set up CRM access control with an approval process and documented access levels.",
      ],
    },
    {
      type: "list",
      heading: "Microsoft tools used for government teams",
      items: [
        "**Dynamics 365 Customer Service:** cases, queues and constituent history.",
        "**Dynamics 365 Sales:** partner, vendor and program relationship tracking where it fits.",
        "**SharePoint Online:** controlled libraries for program and case documents.",
        "**Power Automate:** routing, approvals and reminders for case steps.",
        "**Power BI:** dashboards for workload, aging and outcomes.",
      ],
    },
    {
      type: "prose",
      heading: "Where MP-365 is not the right fit",
      paragraphs: [
        "MP-365 does not promise that a system meets any federal or state compliance standard, and it does not provide certification or cybersecurity services. Your security and compliance officers remain responsible for approvals.",
        "What MP-365 does is build permission models, run access audits for Dynamics 365 and Microsoft 365, and set up document control. MP-365 also does not handle contract vehicles or procurement paperwork on your behalf.",
      ],
    },
    {
      type: "prose",
      heading: "Related services for agencies",
      paragraphs: [
        "Agencies commonly begin with [Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/) for case tracking, then add an access review. The sections above cover where each fits.",
        "For other sectors that use the same tools, see [microsoft solutions by industry](/industries/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What should a government agency look for in a CRM?",
      a: "A government agency should look for case management, role-based access, an audit trail and document control that fits Microsoft 365. Reports for program leaders matter too. The goal is accountable service to the public, so confirm who can see each record and how changes are logged.",
    },
    {
      q: "How do government teams use Dynamics 365?",
      a: "Government teams use Dynamics 365 to log requests as cases, assign owners and track status through closure. Staff see the history of a constituent or partner before responding. MP-365 supports Dynamics 365 CRM for a federal client, the US Department of Transportation.",
    },
    {
      q: "What is a government contracting CRM?",
      a: "A government contracting CRM tracks opportunities, agencies, contacts and proposals for companies that sell to the public sector. It differs from an agency CRM, which tracks constituents and cases. Dynamics 365 Sales can fit contractors who need a clear pipeline across agency buyers.",
    },
    {
      q: "Is Dynamics 365 a good public sector CRM?",
      a: "Yes, Dynamics 365 can serve as a public sector CRM when it is set up for cases, roles and document control. It works with Outlook, Teams and SharePoint. Whether it meets your agency's requirements is a decision for your own security and procurement teams.",
    },
    {
      q: "Does MP-365 make a system compliant?",
      a: "No, MP-365 does not certify systems or promise compliance with any federal or state standard. It builds permission models, audits access and sets up document control in Microsoft tools. Your compliance officers decide whether those controls meet the standard you must follow.",
    },
    {
      q: "Can MP-365 review who has access to our CRM?",
      a: "Yes, MP-365 audits Dynamics 365 security roles and finds users with more access than they need, such as unnecessary Admin rights. The review documents access levels and recommends changes. It covers CRM roles, not security operations or monitoring.",
    },
    {
      q: "Has MP-365 worked with government agencies?",
      a: "Yes, MP-365 manages and supports Dynamics 365 CRM for the US Department of Transportation and works with the Connecticut Department of Public Health. These are the only government results MP-365 names. Other details of those engagements are not published here.",
    },
    {
      q: "How do we start with MP-365 on a government CRM?",
      a: "Start with a discovery call about your cases, roles and current system. MP-365 then proposes a small first piece of work, such as an access review or a case-tracking pilot, before any wider change. Use the contact page to set up the call.",
    },
  ],
  closing:
    "A gov CRM works when every request has an owner, every record has the right access, and leaders can see the workload without waiting for a report. MP-365 supports federal and state teams on Dynamics 365 and Microsoft 365 with that in mind.",
  cta: {
    heading: "Review your agency's CRM and access setup",
    body: "Tell MP-365 how your team tracks cases and who can reach which records today, and the team will outline a first step.",
    text: "Book a free government consultation",
  },
};

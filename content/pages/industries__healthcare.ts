import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/industries/healthcare/",
  intro:
    "In Dynamics 365 healthcare work, organizations use the CRM for the administrative side of the business, such as service requests, referral sources and provider relations. MP-365 pairs it with Microsoft 365 for document control and permission models, and does not touch clinical records.",
  triggers: [
    {
      title: "Service requests arrive by email",
      body: "Requests from patients, partners and staff sit in shared inboxes with no owner, status or due date.",
    },
    {
      title: "Referral sources go untracked",
      body: "Liaison staff keep referral contacts in spreadsheets, so nobody knows which sources are growing or going quiet.",
    },
    {
      title: "Policies exist in several versions",
      body: "Staff find three copies of the same procedure and cannot tell which one is current.",
    },
    {
      title: "Access has grown without a plan",
      body: "Former staff, contractors and whole departments still reach folders and records they no longer need.",
    },
  ],
  blocks: [
    {
      type: "prose",
      heading: "Dynamics 365 healthcare use cases for administrative teams",
      paragraphs: [
        "Healthcare organizations use Dynamics 365 to manage the relationships and requests around care, not the care record itself. Typical uses include service request tracking, referral management, provider relations, community partner outreach and constituent inquiries.",
        "MP-365 scopes work to this administrative side. It does not build electronic health record, clinical or validated systems, and your clinical record stays in the system built for it.",
      ],
    },
    {
      type: "list",
      heading: "What a healthcare provider should look for in a CRM",
      items: [
        "**Request tracking:** every inquiry needs an owner, a category, a status and a due date.",
        "**Referral and provider records:** the CRM should show referral sources, provider contacts and the history of each relationship.",
        "**Clear permission controls:** access should follow job role, and someone should be able to report who can see what.",
        "**Defined data scope:** decide in advance what the CRM will hold, and keep clinical details out of it.",
        "**Reporting leaders trust:** queue size, overdue items and referral trends should come from the same data.",
        "**Connection to documents:** policies, forms and agreements should link to the record from SharePoint.",
        "**Healthcare CRM software that staff use:** busy teams will not tolerate a tool that adds steps.",
      ],
    },
    {
      type: "list",
      heading: "Common challenges for healthcare organizations",
      items: [
        "**Requests lack owners:** email threads hide who is handling what and what is overdue.",
        "**Provider and referral data is scattered:** liaison teams keep their own lists, and reports disagree.",
        "**Document control is weak:** policies and forms live on shared drives with unclear versions and wide access.",
        "**Permissions drift:** access granted for one project is never removed.",
        "**Teams work in separate tools:** scheduling, requests and files do not connect.",
      ],
    },
    {
      type: "table",
      heading: "How MP-365 helps with each challenge",
      headers: ["Challenge", "What MP-365 does", "Where to read more"],
      rows: [
        [
          "Requests lack owners",
          "Sets up cases, queues, categories and status tracking in one system.",
          "[Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/)",
        ],
        [
          "Provider and referral data is scattered",
          "Builds one set of provider and referral records with a documented process for updating them.",
          "[Dynamics 365 Sales](/services/dynamics-365-crm/sales/)",
        ],
        [
          "Document control is weak",
          "Designs SharePoint libraries, metadata, version control and search so staff find the current version.",
          "[SharePoint Search & Information Architecture](/services/sharepoint/information-architecture/)",
        ],
        [
          "Permissions drift",
          "Documents access levels, reviews who has what and sets up reports for later checks.",
          "[Microsoft Purview & Permission Models](/services/data-governance/microsoft-purview/)",
        ],
        [
          "Teams work in separate tools",
          "Uses Power Automate to move approvals and notifications between systems.",
          "[Power Automate](/services/power-platform/power-automate/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Microsoft 365 for healthcare organizations and SharePoint document control",
      paragraphs: [
        "SharePoint for healthcare gives teams a controlled home for policies, procedures, forms and agreements. Libraries keep version history, metadata and approval steps, and owners decide who may read or edit.",
        "Microsoft 365 for healthcare organizations also includes Teams for communication and Power Automate for routing approvals. MP-365 designs the structure and permissions. Your compliance staff decide whether the result meets your own rules.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: public health agency and case tracking experience",
      paragraphs: [
        "MP-365 has worked with the Connecticut Department of Public Health, a state government client. This page does not claim a specific result for that engagement.",
        "MP-365 has also replaced email-based support with one case system showing owner, status and urgency. That client and industry are withheld, and the result is not a healthcare result. See the [clients page](/clients/) for more.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft tools used in healthcare administration",
      headers: ["Product", "Role for a healthcare team"],
      rows: [
        ["Dynamics 365 Customer Service", "Tracks service requests and inquiries with queues, owners and status."],
        ["SharePoint Online", "Holds controlled policies, forms and agreements with version history and defined access."],
        ["Microsoft Purview", "Supports permission models and reviews of who can reach which information."],
        ["Power Automate", "Routes approvals, reminders and notifications."],
        ["Power BI", "Reports on queue size, overdue items and referral trends."],
      ],
    },
    {
      type: "prose",
      heading: "When this is not the right fit",
      paragraphs: [
        "MP-365 does not provide certification, compliance or cybersecurity services, and it does not promise that any setup meets HIPAA or another regulation. It builds permission models, runs access audits and sets up document control. Your privacy and compliance officers decide what the CRM may hold.",
        "This is also not the right fit if you want an electronic health record, a clinical workflow or a validated system, because MP-365 does not do clinical systems work.",
      ],
    },
    {
      type: "prose",
      heading: "Related industries",
      paragraphs: [
        "Public health agencies share needs with other public sector bodies. See [government](/industries/government/) for that work, or browse all [industries](/industries/) MP-365 serves.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do healthcare organizations use Dynamics 365?",
      a: "Healthcare organizations use Dynamics 365 for relationship and service work, such as tracking service requests, referral sources, provider relations and partner organizations. It does not replace a clinical record. MP-365's scope is the administrative side, and it does not build electronic health record or clinical systems.",
    },
    {
      q: "How can Microsoft 365 support a healthcare team?",
      a: "Microsoft 365 gives teams SharePoint for controlled documents, Teams for communication and Power Automate for approvals. Policies and forms sit in libraries with version history and defined access. MP-365 designs the structure and permissions, and your compliance staff decide what meets your regulations.",
    },
    {
      q: "What should a healthcare provider look for in a CRM?",
      a: "Look for service request tracking with owners and status, referral and provider relationship records, clear permission controls, and reports leaders can trust. Confirm what data the CRM will hold, and keep clinical records in a system built for them. Dynamics 365 fits administrative and relationship workflows.",
    },
    {
      q: "Can Dynamics 365 by itself satisfy HIPAA requirements?",
      a: "No. MP-365 does not provide certification, compliance or cybersecurity services, and no CRM satisfies HIPAA alone. It builds permission models, access audits and document control, which can support your own compliance program. Your privacy and compliance officers decide what data enters the CRM and which controls you need.",
    },
    {
      q: "Can Dynamics 365 replace our electronic health record?",
      a: "No. Dynamics 365 is not an electronic health record, and MP-365 does not do clinical systems work. It manages the administrative side, such as inquiries, referrals and provider relationships, and it can run beside your clinical system without holding clinical details.",
    },
    {
      q: "How can SharePoint help with document control in healthcare?",
      a: "SharePoint libraries keep policies, procedures and forms in one place with version history, metadata and approval workflows. Owners control who may edit and who may read. MP-365 designs the library structure through its [information architecture work](/services/sharepoint/information-architecture/) so staff find the current version.",
    },
    {
      q: "Has MP-365 worked with public health agencies?",
      a: "Yes. MP-365 has worked with the Connecticut Department of Public Health, a state government client. This page does not publish results from that engagement. You can ask about relevant experience on a discovery call, and MP-365 will explain what it can share.",
    },
    {
      q: "How do you track service requests in a healthcare organization?",
      a: "Log each request as a case with a requester, owner, category, status and urgency. Queues route requests to the right team, and dashboards show what is overdue. Dynamics 365 Customer Service supports this, and MP-365 configures categories and routing to match how your departments work.",
    },
  ],
  closing:
    "Dynamics 365 healthcare projects work best when the scope stays on administrative work: requests, referrals, provider relations and controlled documents. MP-365 builds that on Dynamics 365 and Microsoft 365, and says clearly what it leaves to your clinical and compliance teams.",
  cta: {
    heading: "Talk to MP-365 about healthcare administration",
    body: "Tell us how requests, referrals and documents move through your organization today. We will outline a first version you can react to.",
    text: "Book a free healthcare consultation",
  },
};

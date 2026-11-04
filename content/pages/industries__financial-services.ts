import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/industries/financial-services/",
  intro:
    "A credit union CRM should give every staff member one view of each member, their accounts, conversations and open requests, while keeping sensitive records behind the right permissions. MP-365 is a Microsoft Solutions Partner that builds this on Dynamics 365 and SharePoint for credit unions and other financial services teams.",
  triggers: [
    {
      title: "Member history sits in many places",
      body: "Branch staff, call center agents and lenders each see a different slice of the same member.",
    },
    {
      title: "Advisor work runs on spreadsheets",
      body: "Client files, calculations and notes live in workbooks that are hard to version and hard to audit.",
    },
    {
      title: "Loan paperwork moves by email",
      body: "Applications and supporting documents travel as attachments, so status checks take phone calls.",
    },
    {
      title: "An old SharePoint site is due for replacement",
      body: "Policies, forms and procedures sit on an aging server that staff avoid and IT wants to retire.",
    },
  ],
  blocks: [
    {
      type: "prose",
      heading: "What to look for in a credit union CRM",
      paragraphs: [
        "A credit union CRM is measured by how well it supports member relationships, not how many sales features it has. The right system helps staff answer a member once, with full context, instead of asking the member to repeat their story.",
        "Compare any option on a short list: a single member record, service and sales in one place, controlled access to sensitive notes, and a way to connect to your core banking system.",
      ],
    },
    {
      type: "list",
      heading: "Features a credit union should check before choosing a CRM",
      items: [
        "**One member record:** accounts, household relationships, recent contacts and open cases appear on a single screen.",
        "**Role-based access:** tellers, lenders, advisors and managers each see only what their job requires, and changes to access are recorded.",
        "**Service and sales together:** a member service request can lead to a loan or product conversation without switching tools.",
        "**Workflow for loans and requests:** applications, document requests and approvals move through defined steps with owners.",
        "**Connection to core banking:** data from your core banking systems appears in the CRM through a controlled integration, not manual copy.",
        "**Reporting for leadership:** member service volume, referral sources and product interest come from live data.",
        "**Document control:** forms, disclosures and member files are stored with version history and the right permissions.",
      ],
    },
    {
      type: "table",
      heading: "How MP-365 helps credit unions and finance teams",
      headers: ["Challenge", "What MP-365 does", "Where to read more"],
      rows: [
        [
          "Member history in many places",
          "Builds one member and relationship view in Dynamics 365 with service history and notes",
          "[Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/)",
        ],
        [
          "Spreadsheets used for advisor work",
          "Moves workbooks into SharePoint Online with metadata, version control and automated calculations",
          "[SharePoint Intranet Development](/services/sharepoint/intranet-development/)",
        ],
        [
          "Unclear who can see what",
          "Designs permission models and reviews access to member and policy documents",
          "[Microsoft Purview & Permission Models](/services/data-governance/microsoft-purview/)",
        ],
        [
          "Leadership reports built by hand",
          "Replaces manual reports with Power BI dashboards on live data",
          "[Power BI Consulting & Dashboards](/services/power-platform/power-bi/)",
        ],
        [
          "Loan and request paperwork",
          "Automates document requests, reminders and approvals with Power Automate",
          "[Power Automate](/services/power-platform/power-automate/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Common challenges for financial services teams",
      paragraphs: [
        "Credit unions and advisory firms share a few recurring problems. Member and client information is split across systems, which forces staff to ask people to repeat themselves. Spreadsheets carry important calculations with no version history. Document access is set up by habit instead of by role.",
        "Old SharePoint environments add another burden. Policies and forms live on servers that are out of date, and nobody is sure which copy is current. Each of these slows down service and makes audits harder to prepare for.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: a similar project in financial services",
      paragraphs: [
        "In a similar project, MP-365 moved a SharePoint financial advisory system out of spreadsheets and into SharePoint Online. The result was version control, metadata and automated calculations in place of manual workbooks.",
        "MP-365 has also upgraded financial-sector SharePoint environments from older versions to Microsoft 365 in stages, so staff kept working during the change.",
      ],
    },
    {
      type: "list",
      heading: "Microsoft tools used for credit unions and finance",
      items: [
        "**Dynamics 365 Customer Service and Sales:** member records, cases, referrals and follow-up.",
        "**SharePoint Online:** policies, forms and member or client files with version control.",
        "**Power Automate:** loan document requests, reminders and approval steps.",
        "**Power BI:** dashboards for service volume, referrals and advisor activity.",
        "**Microsoft Purview and Microsoft 365 permissions:** reviews of who can reach which records.",
      ],
    },
    {
      type: "prose",
      heading: "Where MP-365 is not the right fit",
      paragraphs: [
        "MP-365 does not promise compliance with any banking or credit union regulation, and it does not provide certification or cybersecurity services. Your compliance and security teams stay responsible for those.",
        "What MP-365 does is set up permission models, review access and build document control inside Microsoft tools. MP-365 also does not replace or implement your core banking platform. It connects Dynamics 365 to it.",
      ],
    },
    {
      type: "prose",
      heading: "Related services for financial institutions",
      paragraphs: [
        "Teams often begin with one of two paths: a member or client view in Dynamics 365, or a cleaner document environment in SharePoint. Both link to [Microsoft Purview & Permission Models](/services/data-governance/microsoft-purview/) for access reviews.",
        "For wider context, see [microsoft solutions by industry](/industries/) to compare how other sectors use the same tools.",
      ],
    },
  ],
  faqs: [
    {
      q: "What should a credit union look for in a CRM?",
      a: "A credit union should look for one member record, role-based access, linked service and sales activity, and a controlled connection to its core banking system. Reporting on member service should also be built in. A CRM that only tracks sales leads will miss the member relationship.",
    },
    {
      q: "How do credit unions use Dynamics 365?",
      a: "Credit unions use Dynamics 365 to keep member contacts, cases and product conversations in one place. Staff see history before they speak with a member, and managers see service volume. Dynamics 365 Customer Service handles requests, while Sales tracks referrals and product interest.",
    },
    {
      q: "How can SharePoint support financial services teams?",
      a: "SharePoint gives financial services teams controlled libraries for policies, forms and client files, with version history and permission groups. Advisors can replace spreadsheets with lists that calculate automatically. Managers then know which version is current and who changed it.",
    },
    {
      q: "Can Dynamics 365 connect to our core banking system?",
      a: "Yes, Dynamics 365 can connect to core banking systems through a built integration, and MP-365 designs these with logging and alerts. The scope depends on what the core system exposes. MP-365 reviews your systems first and then recommends a way to link them.",
    },
    {
      q: "Does MP-365 make a credit union compliant?",
      a: "No, MP-365 does not provide compliance certification or cybersecurity services. It builds permission models, reviews access and sets up document control in Microsoft tools. Your compliance team decides whether those controls meet the rules that apply to your institution.",
    },
    {
      q: "Can SharePoint replace our advisor spreadsheets?",
      a: "Yes, for many cases. A SharePoint financial advisory system can hold client files with metadata, version history and automated calculations. MP-365 has built this kind of system by moving spreadsheets into SharePoint Online. Complex models may still need a specialist tool alongside it.",
    },
    {
      q: "Who sees member information in the CRM?",
      a: "Only the roles you define. Dynamics 365 security roles control which staff can view or edit member records, and MP-365 can audit those roles for extra access. Tellers, lenders and managers each get the level their work requires.",
    },
    {
      q: "How do we start a credit union CRM project?",
      a: "Start with a discovery call about how members move through your branches, call center and loan teams. MP-365 then builds a small working version of the member view for staff to try before the wider rollout. Use the contact page to begin.",
    },
  ],
  closing:
    "A credit union CRM earns its place when staff stop asking members to repeat themselves and managers can see the service picture without a manual report. MP-365 builds this on Dynamics 365 and SharePoint, with access and document control set up for your roles.",
  cta: {
    heading: "Talk through your member and advisor workflows",
    body: "Share how members, advisors and documents move through your organization today, and MP-365 will suggest where to start.",
    text: "Talk to MP-365 about financial services",
  },
};

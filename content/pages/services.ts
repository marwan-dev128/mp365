import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/",
  intro:
    "Microsoft 365 consulting from MP-365 covers eight service areas, from Dynamics 365 CRM and SharePoint to Copilot, Power Platform, migration and data governance. Find your situation below, and the table points you to the right page.",
  blocks: [
    {
      type: "prose",
      heading: "Microsoft 365 consulting and Dynamics 365 services by area",
      paragraphs: [
        "MP-365 groups its 28 services under eight categories. Each category page explains the area and compares its services. Each service page covers one piece of work in detail: what it includes, how it starts and what it leaves out.",
        "Microsoft 365 was formerly called Office 365. MP-365 uses the current name throughout.",
      ],
    },
    {
      type: "table",
      level: 3,
      heading: "Dynamics 365 CRM consulting",
      headers: ["Page", "What MP-365 does"],
      rows: [
        ["Category overview: [Dynamics 365 CRM Consultation](/services/dynamics-365-crm/)", "How the six CRM services fit together and where to start."],
        ["[Dynamics 365 Sales](/services/dynamics-365-crm/sales/)", "Pipeline visibility, forecasting and customer tracking that follow the way your sales team works."],
        ["[Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/)", "Case tracking with an owner, status and urgency on every request, replacing email-based support."],
        ["[Dynamics 365 Customer Insights](/services/dynamics-365-crm/customer-insights/)", "Customer Insights - Journeys (formerly Dynamics 365 Marketing) for campaigns and customer journeys."],
        ["[Lead Management & Attribution](/services/dynamics-365-crm/lead-management/)", "One lead process in Dynamics 365: capture, score, route and attribute."],
        ["[Dynamics 365 Security Roles & Access Audit](/services/dynamics-365-crm/security-roles-audit/)", "A review of Dynamics 365 roles and access, with documented access levels and reports."],
        ["[Dynamics 365 Integration Services](/services/dynamics-365-crm/integration-services/)", "Connections between Dynamics 365, ERP systems such as Business Central and marketing tools."],
      ],
    },
    {
      type: "table",
      level: 3,
      heading: "SharePoint and intranet consulting",
      headers: ["Page", "What MP-365 does"],
      rows: [
        ["Category overview: [SharePoint & Intranets](/services/sharepoint/)", "How intranets, upgrades, migrations and portals fit together."],
        ["[SharePoint Intranet Development](/services/sharepoint/intranet-development/)", "A modern intranet with a clear information architecture and a simpler security model."],
        ["[SharePoint Server Upgrade & Migration](/services/sharepoint/migration/)", "Staged moves from older SharePoint Server versions to Microsoft 365."],
        ["[File Share to SharePoint Migration](/services/sharepoint/file-share-migration/)", "File shares moved into organized libraries with metadata, version control and workflows."],
        ["[SharePoint Supplier & Partner Portals](/services/sharepoint/supplier-partner-portals/)", "Controlled spaces where outside suppliers and partners share files with your team."],
        ["[SharePoint Search & Information Architecture](/services/sharepoint/information-architecture/)", "Site structure, metadata and search settings that help people find the right document."],
      ],
    },
    {
      type: "table",
      level: 3,
      heading: "Microsoft Copilot and AI consulting",
      headers: ["Page", "What MP-365 does"],
      rows: [
        ["Category overview: [Microsoft Copilot & AI](/services/copilot/)", "How readiness, agents and governance fit together in a Copilot rollout."],
        ["[Microsoft 365 Copilot Readiness](/services/copilot/readiness/)", "Preparing data, permissions and people before Copilot goes live."],
        ["[Dynamics 365 Sales Agents](/services/copilot/sales-agents/)", "AI agents inside Dynamics 365 that help sellers with research and follow-up."],
        ["[Custom Copilot Agent Development](/services/copilot/custom-agents/)", "Agents built with Copilot Studio and connected to Dynamics 365 and Microsoft 365 data."],
        ["[Copilot Cowork](/services/copilot/cowork/)", "Rollout, permissions and training for Microsoft's Copilot Cowork."],
        ["[AI Data Governance Audit](/services/copilot/ai-data-governance-audit/)", "A data access and permissions review before Copilot can reach your content."],
      ],
    },
    {
      type: "table",
      level: 3,
      heading: "Power Platform consulting",
      headers: ["Page", "What MP-365 does"],
      rows: [
        ["Category overview: [Power Platform](/services/power-platform/)", "How the four Power Platform tools work together on one set of data."],
        ["[Power Apps Development](/services/power-platform/power-apps/)", "Internal apps and self-service tools built on existing Microsoft data."],
        ["[Power Pages Portal Development](/services/power-platform/power-pages/)", "External portals where customers and partners sign in and work with business data."],
        ["[Power Automate Workflow Automation](/services/power-platform/power-automate/)", "Approvals, notifications and data moves that run without manual steps."],
        ["[Power BI Consulting & Dashboards](/services/power-platform/power-bi/)", "Live dashboards that replace spreadsheet reports."],
      ],
    },
    {
      type: "table",
      level: 3,
      heading: "Microsoft 365 migration services",
      headers: ["Page", "What MP-365 does"],
      rows: [
        ["Category overview: [Microsoft 365 Migration](/services/microsoft-365-migration/)", "How mail and file moves are planned, run and cut over."],
        ["[Exchange to Microsoft 365 Migration](/services/microsoft-365-migration/exchange-online-migration/)", "Mailboxes moved from Exchange to Exchange Online with the least disruption to users."],
        ["[OneDrive Migration](/services/microsoft-365-migration/onedrive-migration/)", "Personal and team files moved into OneDrive, organized and ready to use."],
      ],
    },
    {
      type: "table",
      level: 3,
      heading: "M&A tenant migration",
      headers: ["Page", "What MP-365 does"],
      rows: [
        ["Category overview: [M&A Tenant Migration](/services/tenant-to-tenant-migration/)", "Tenant to tenant migration for mergers, acquisitions and divestitures."],
        ["[Cross-Tenant Mailbox, Teams & File Migration](/services/tenant-to-tenant-migration/mailbox-teams-files/)", "Mailboxes, Teams and files moved from one Microsoft 365 tenant to another."],
        ["[Tenant Coexistence & Domain Cutover](/services/tenant-to-tenant-migration/coexistence/)", "Two tenants working side by side until the domain cutover."],
      ],
    },
    {
      type: "table",
      level: 3,
      heading: "Data governance consulting",
      headers: ["Page", "What MP-365 does"],
      rows: [
        ["Category overview: [Data Governance](/services/data-governance/)", "How permissions, Purview and data quality support each other."],
        ["[Microsoft Purview & Permission Models](/services/data-governance/microsoft-purview/)", "Permission models and Microsoft Purview settings that match how your teams share data."],
        ["[Data Quality Management](/services/data-governance/data-quality-management/)", "CRM data cleanup: duplicates, inconsistent entries and standardization."],
      ],
    },
    {
      type: "table",
      level: 3,
      heading: "Application modernization and DevOps",
      headers: ["Page", "What MP-365 does"],
      rows: [
        ["Category overview: [Application Modernization & DevOps](/services/application-modernization/)", "Moving legacy applications to Azure and automating releases."],
        ["[Legacy Application Migration](/services/application-modernization/legacy-migration/)", "Legacy applications moved to Azure as a modernization project."],
        ["[DevOps & Release Automation](/services/application-modernization/devops-release-automation/)", "Pipelines, testing and release notes for Dynamics 365 and Power Platform."],
      ],
    },
    {
      type: "table",
      heading: "Your situation, start with this Microsoft 365 consulting service",
      headers: ["Your situation", "Start with", "Why"],
      rows: [
        ["Our sales data is scattered across spreadsheets and inboxes", "[Dynamics 365 Sales](/services/dynamics-365-crm/sales/)", "One pipeline gives managers a forecast they can trust."],
        ["Leads come from many sources and nobody knows which ones pay off", "[Lead Management & Attribution](/services/dynamics-365-crm/lead-management/)", "A single lead process shows where each lead came from."],
        ["Customer requests live in shared inboxes", "[Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/)", "Every case gets an owner, a status and an urgency."],
        ["Our CRM does not talk to our ERP", "[Dynamics 365 Integration Services](/services/dynamics-365-crm/integration-services/)", "Data flows between systems with no double entry."],
        ["Too many people have admin rights in Dynamics 365", "[Dynamics 365 Security Roles & Access Audit](/services/dynamics-365-crm/security-roles-audit/)", "An audit finds unnecessary access and documents the right levels."],
        ["Our CRM is full of duplicate and inconsistent records", "[Data Quality Management](/services/data-governance/data-quality-management/)", "Cleanup and standards make reports reliable again."],
        ["We run SharePoint Server 2016 or 2019, which lost Microsoft support on July 14, 2026", "[SharePoint Server Upgrade & Migration](/services/sharepoint/migration/)", "A staged move to Microsoft 365 removes the unsupported servers."],
        ["Hundreds of thousands of files sit on network file shares", "[File Share to SharePoint Migration](/services/sharepoint/file-share-migration/)", "Files land in organized libraries with metadata and version control."],
        ["Our intranet is out of date and hard to update", "[SharePoint Intranet Development](/services/sharepoint/intranet-development/)", "A new structure makes content faster to publish and easier to find."],
        ["We want Copilot but worry what it can see", "[Microsoft 365 Copilot Readiness](/services/copilot/readiness/)", "Data and permissions get fixed before the rollout."],
        ["Approvals and notifications still run on email", "[Power Automate Workflow Automation](/services/power-platform/power-automate/)", "Flows handle the repetitive steps for you."],
        ["Monthly reports take days to assemble", "[Power BI Consulting & Dashboards](/services/power-platform/power-bi/)", "Live dashboards replace manual compilation."],
        ["Customers or partners need to sign in and work with our data", "[Power Pages Portal Development](/services/power-platform/power-pages/)", "A portal gives outside users controlled access to business data."],
        ["Our mail is still on Exchange servers", "[Exchange to Microsoft 365 Migration](/services/microsoft-365-migration/exchange-online-migration/)", "Mailboxes move to Exchange Online in a planned cutover."],
        ["A merger or divestiture means combining or splitting tenants", "[Cross-Tenant Mailbox, Teams & File Migration](/services/tenant-to-tenant-migration/mailbox-teams-files/)", "Mail, Teams and files move to the right tenant."],
        ["Releases to Dynamics 365 keep breaking things", "[DevOps & Release Automation](/services/application-modernization/devops-release-automation/)", "Pipelines and testing make each release repeatable."],
      ],
    },
    {
      type: "prose",
      heading: "How Microsoft 365 and Dynamics 365 work together",
      paragraphs: [
        "Microsoft 365 and Dynamics 365 share the same Microsoft identities, files and data connections. Dynamics 365 holds customer, sales and service records. Microsoft 365 holds mail, Teams chats, documents and SharePoint sites.",
        "Many MP-365 projects touch both. A Dynamics 365 Sales rollout may link to SharePoint document libraries. A Copilot rollout depends on clean Microsoft 365 permissions. That is why the services above sit side by side.",
      ],
    },
    {
      type: "list",
      heading: "What MP-365 does not offer",
      items: [
        "**ERP implementation.** MP-365 connects Dynamics 365 to ERP systems such as Business Central. It does not implement them.",
        "**Licenses.** MP-365 does not resell Microsoft licenses. Those fees are paid to Microsoft or your license provider. See [pricing](/pricing/) for how MP-365 fees work.",
        "**Managed IT.** MP-365 does not run help desks or outsourced IT support.",
        "**Cybersecurity.** The access audits cover Dynamics 365 roles and Microsoft 365 permissions, not security operations.",
        "**Custom software.** Power Apps and Power Pages are low-code tools. MP-365 does not run a general software or web design agency.",
      ],
    },
  ],
  faqs: [
    {
      q: "What Microsoft 365 consulting services do mid-size companies need?",
      a: "Most mid-size companies start with one pain: scattered customer data, an outdated intranet, a mail migration or unclear permissions. MP-365 groups its services into eight areas so you can start where the pain is, then add others later.",
    },
    {
      q: "How do Microsoft 365 and Dynamics 365 work together?",
      a: "Dynamics 365 manages customer, sales and service records, while Microsoft 365 handles mail, Teams, files and SharePoint. They share sign-in and data connections, so a sales record can link to a SharePoint folder or a Teams conversation. MP-365 configures both sides.",
    },
    {
      q: "Which Microsoft service should a company start with?",
      a: "Start with the area that hurts most. Scattered sales data points to Dynamics 365 Sales, messy files to SharePoint, and a planned Copilot rollout to permissions work first. The situation table on this page maps common problems to a starting service.",
    },
    {
      q: "Does MP-365 offer Office 365 consulting?",
      a: "Yes. Office 365 is now Microsoft 365, and MP-365 covers it through SharePoint, migration, Copilot and data governance work. If you are searching for an Office 365 consultant, the migration and SharePoint categories are the closest match.",
    },
    {
      q: "Can I hire MP-365 for a single small task?",
      a: "Yes. The Ad hoc engagement model has no commitment, minimum or retainer, so you pay only when you engage the team. A single fix, an audit or a short build all fit. The [pricing page](/pricing/) compares the three models.",
    },
    {
      q: "Does MP-365 implement ERP systems?",
      a: "No. MP-365 integrates Dynamics 365 with ERP systems such as Business Central so data flows without double entry. It does not implement, configure or consult on the ERP itself. The integration services page describes exactly what is covered.",
    },
    {
      q: "Does MP-365 resell Microsoft licenses?",
      a: "No. MP-365 does not resell licenses or manage Microsoft subscriptions. You pay license fees to Microsoft or your license provider, and MP-365 fees are separate. MP-365 can tell you what a project needs, but you buy licenses elsewhere.",
    },
    {
      q: "Do I need Dynamics 365 to use MP-365 for SharePoint or migration?",
      a: "No. SharePoint, Microsoft 365 migration, tenant migration and data governance work stand alone. Many clients use a single area. Others combine areas, for example a SharePoint upgrade followed by a CRM project.",
    },
    {
      q: "Can MP-365 take over a project another partner started?",
      a: "Yes. MP-365 often steps into existing systems. The work starts by understanding what was built, then fixing and confirming what matters most. Its [client results](/clients/) include platform stabilization and ongoing support for existing Dynamics environments.",
    },
    {
      q: "How do I start with a service?",
      a: "Pick the closest page and read its At a glance block, then contact MP-365 with your problem. A discovery call confirms whether the service fits and what the first step is. If you are unsure which service you need, describe the situation and MP-365 will point you to one.",
    },
  ],
  closing:
    "Microsoft 365 consulting from MP-365 spans eight areas, and each one has detailed pages for the work you may need. Use the situation table to pick a starting point, or describe your problem and let the team recommend one.",
  cta: {
    heading: "Not sure which service fits?",
    body: "Tell MP-365 what is going wrong. The team will point you to the right starting service.",
    text: "Book a discovery call",
  },
};

import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/industries/",
  intro:
    "Microsoft solutions by industry from MP-365 start from the same tools, Dynamics 365, Microsoft 365 and Power Platform, and adapt them to how your sector works. Pick your industry below to see the challenges that come up and where to start.",
  childSummaries: {
    "/industries/manufacturing/":
      "Quotes, orders and customer history sit in separate files, so sales teams cannot see the full picture of an account.",
    "/industries/logistics-supply-chain/":
      "Shipment questions and customer requests move through email, so teams lose track of who owns what.",
    "/industries/energy-utilities/":
      "Customer cases and service records are spread across systems, which slows down answers to customers.",
    "/industries/construction-engineering/":
      "Bids, project documents and contracts live in different places, and the office and the field work from different versions.",
    "/industries/financial-services/":
      "Client records and internal documents need tight control over who can see what, along with an easy way to find them.",
    "/industries/government/":
      "Agencies need to track requests and records in one system while keeping a clear, documented view of who has access.",
    "/industries/medical-devices/":
      "Contracts, customer accounts and clean data all have to stay current across long sales and renewal cycles.",
    "/industries/retail/":
      "Customer service, reporting and other systems run separately, so teams cannot see one view of each customer.",
    "/industries/healthcare/":
      "Teams need organized shared documents and controlled access to information, along with a simple way to track service requests.",
  },
  blocks: [
    {
      type: "prose",
      heading: "Microsoft solutions by industry: what changes and what stays",
      paragraphs: [
        "MP-365 (Modern Partners 365) is a Microsoft Solutions Partner. Its clients include construction, manufacturing, healthcare, federal and state government organizations. For the other industries listed here, MP-365 describes what the Microsoft tools do for that sector. It does not claim client work there.",
        "Each industry page covers common challenges, the Microsoft tools that address them and the services and solutions that apply. Use the table below to find yours.",
      ],
    },
    {
      type: "table",
      heading: "Industry, main challenge, where to start",
      headers: ["Industry", "Main challenge", "Where to start"],
      rows: [
        [
          "[Manufacturing](/industries/manufacturing/)",
          "Quotes, orders and account history are scattered",
          "[Dynamics 365 Sales](/services/dynamics-365-crm/sales/)",
        ],
        [
          "[Logistics & Supply Chain](/industries/logistics-supply-chain/)",
          "Customer requests are tracked through email",
          "[CRM & Systems Integration](/solutions/crm-systems-integration/)",
        ],
        [
          "[Energy & Utilities](/industries/energy-utilities/)",
          "Customer cases are split across systems",
          "[Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/)",
        ],
        [
          "[Construction & Engineering](/industries/construction-engineering/)",
          "Bids, documents and contracts are in different places",
          "[Contract Management Automation](/solutions/contract-management-automation/)",
        ],
        [
          "[Financial Services & Credit Unions](/industries/financial-services/)",
          "Client records need controlled access",
          "[Microsoft Purview & Permission Models](/services/data-governance/microsoft-purview/)",
        ],
        [
          "[Federal Government](/industries/government/)",
          "Requests and records need one system with documented access",
          "[Dynamics 365 Security Roles & Access Audit](/services/dynamics-365-crm/security-roles-audit/)",
        ],
        [
          "[Medical Devices](/industries/medical-devices/)",
          "Contracts and customer data must stay current",
          "[Data Quality Management](/services/data-governance/data-quality-management/)",
        ],
        [
          "[Retail](/industries/retail/)",
          "Customer, sales and reporting data are separate",
          "[Power BI Consulting & Dashboards](/services/power-platform/power-bi/)",
        ],
        [
          "[Healthcare](/industries/healthcare/)",
          "Shared documents and access need structure",
          "[SharePoint Search & Information Architecture](/services/sharepoint/information-architecture/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "What stays the same across industries",
      paragraphs: [
        "The core work does not change from sector to sector. Every industry needs a clear CRM process, documents that are easy to find, data that is clean and reports that people trust. MP-365 builds these on the same Microsoft tools each time.",
        "The platform is the constant, and the setup is what varies. See [Solutions](/solutions/) for the problems MP-365 fixes in any sector, and [Services](/services/) for the work behind them.",
      ],
    },
    {
      type: "list",
      heading: "What changes from one industry to the next",
      items: [
        "**Permission models:** who may see which records and documents differs between a hospital, a credit union and a construction firm.",
        "**Document control:** contracts, drawings, policies and case files each follow different approval and version rules.",
        "**Data quality:** the records that matter most, such as accounts, projects or customers, differ by sector and need different clean-up rules.",
        "**Reporting:** leaders in each industry track different numbers, so dashboards are built around your measures.",
      ],
    },
    {
      type: "prose",
      heading: "Industry rules and data governance",
      paragraphs: [
        "MP-365 does not provide certifications or security operations, and it does not promise compliance with any regulation. What MP-365 does is set up permission models, run access audits and organize document control so your team can follow its own rules.",
        "Those practices are covered under [Data Governance](/services/data-governance/). Your own compliance and legal teams decide which rules apply to you.",
      ],
    },
  ],
  faqs: [
    {
      q: "Which industries does MP-365 work with?",
      a: "MP-365 has worked with construction, manufacturing, healthcare, federal government and state government organizations. Its pages for logistics, energy, financial services, medical devices and retail explain what Dynamics 365 and Microsoft 365 can do in those sectors, not past client work. Each industry page is linked in the table above.",
    },
    {
      q: "How does MP-365 adapt Dynamics 365 to an industry?",
      a: "MP-365 starts with how your team works, then configures Dynamics 365 around your records, approvals and reports. The platform stays the same and the setup changes. A manufacturer tracks quotes, a utility tracks cases and a government office tracks requests, all inside the same set of tools.",
    },
    {
      q: "Which Microsoft tools fit which industry?",
      a: "Dynamics 365 Sales and Customer Service suit most industries that manage accounts and requests. SharePoint suits document-heavy sectors like construction and healthcare. Power BI suits any team that reports to leadership. The table above lists the best first service or solution for each sector.",
    },
    {
      q: "What if my industry is not listed?",
      a: "MP-365 can still help if your needs match the tools. Dynamics 365, Microsoft 365 and Power Platform are not tied to one sector. Start with the [services](/services/) or [contact page](/contact/) and describe your situation. MP-365 will tell you honestly whether it is a good fit.",
    },
    {
      q: "Does MP-365 promise compliance for regulated industries?",
      a: "No. MP-365 does not certify systems or promise compliance with any regulation. It sets up permission models, access audits and document control inside Microsoft tools. Your compliance team decides which rules apply and whether the setup meets them, so involve that team early in any project.",
    },
    {
      q: "Is the work different for a federal agency than for a private company?",
      a: "The tools are the same, but the access rules and approval steps are usually stricter for a federal agency. MP-365 manages and supports Dynamics 365 CRM for the US Department of Transportation. The setup centers on documented roles and clear records of who can see what.",
    },
    {
      q: "Where should an industry team start?",
      a: "Start with the first service or solution listed for your industry in the table, since it addresses the most common challenge. Then review the full industry page for related work. If you are unsure, a short call with MP-365 can narrow it to one starting point.",
    },
  ],
  closing:
    "Microsoft solutions by industry share one foundation and differ in the details that matter to your sector. Open your industry page to see the challenges and tools that apply, or talk to MP-365 about where your team should begin.",
  cta: {
    heading: "Talk to MP-365 about your industry",
    body: "Tell MP-365 what your team struggles with, and it will suggest where to start on Dynamics 365 and Microsoft 365.",
    text: "Talk to MP-365",
  },
};

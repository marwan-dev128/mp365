import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/clients/",
  intro:
    "These Dynamics 365 case studies show who MP-365 works with and what changed for them. Clients include construction, manufacturing and elevator companies, plus federal and state government agencies. Below you find named client results first, then the kinds of problems MP-365 solves.",
  blocks: [
    {
      type: "table",
      heading: "Dynamics 365 case studies: results by client",
      headers: ["Client", "Industry", "What MP-365 did", "Result"],
      rows: [
        [
          "Carlisle Construction",
          "[Construction](/industries/construction-engineering/)",
          "Stepped into Dynamics and SharePoint operations with no long discovery phase.",
          "Operations were stabilized within a week.",
        ],
        [
          "Hunter Panels",
          "[Manufacturing](/industries/manufacturing/)",
          "Supports Dynamics CRM so the platform fits how the business works.",
          "Less manual work and better performance.",
        ],
        [
          "OTIS Elevator",
          "Elevator and facilities",
          "Provides platform and operations leadership for Dynamics.",
          "Deployments dropped from 13 hours to 4, and manual errors fell to near zero.",
        ],
        [
          "US Department of Transportation",
          "[Federal government](/industries/government/)",
          "Manages and supports Dynamics 365 CRM.",
          "Ongoing support of the agency's CRM platform.",
        ],
        [
          "Connecticut Department of Public Health",
          "[State government](/industries/government/)",
          "Client work for a state agency.",
          "State government work.",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Who MP-365 works with",
      paragraphs: [
        "MP-365 works with mid-size and enterprise organizations that run on Microsoft. Typical clients are in construction, manufacturing, healthcare and elevator and facilities services, along with federal and state government agencies.",
        "The people who ask for help are usually sales, service and operations leaders with a business pain, and IT leaders who must deliver a Microsoft project. Read more [about MP-365](/about/) and the way the team works.",
      ],
    },
    {
      type: "prose",
      heading: "Problems MP-365 has solved, and the results",
      paragraphs: [
        "The stories below are anonymous examples. Each one follows the same pattern: the problem, what MP-365 built, and the result. Each links to the service page that describes the work in detail.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "SharePoint upgrade from old versions to Microsoft 365",
      paragraphs: [
        "**Problem:** the organization ran an older SharePoint version (2007, 2010, 2013 or 2016) and needed to reach Microsoft 365.",
        "**What MP-365 built and the result:** a staged [SharePoint Server upgrade and migration](/services/sharepoint/migration/) to Microsoft 365. The upgrade ran in stages.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "File shares with hundreds of thousands of files",
      paragraphs: [
        "**Problem:** network file shares held hundreds of thousands of files that needed structure.",
        "**What MP-365 built and the result:** a [file share to SharePoint migration](/services/sharepoint/file-share-migration/) into organized libraries with metadata, version control and workflows.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "A modern intranet for a manufacturer",
      paragraphs: [
        "**Problem:** the intranet needed a clearer structure, a simpler security model and faster content updates.",
        "**What MP-365 built and the result:** a modern [SharePoint intranet](/services/sharepoint/intranet-development/) with a clear information architecture, a simpler security model and faster content updates.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "A financial advisory system moved from spreadsheets",
      paragraphs: [
        "**Problem:** a financial advisory team tracked its work in spreadsheets.",
        "**What MP-365 built and the result:** a system in SharePoint Online with version control, metadata and automated calculations. See the [SharePoint and intranet services](/services/sharepoint/) for the full range.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Sales tracking with live dashboards for leadership",
      paragraphs: [
        "**Problem:** sales reports took several business days each month to compile.",
        "**What MP-365 built and the result:** one sales process in [Dynamics 365 Sales](/services/dynamics-365-crm/sales/) with live dashboards for leadership.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Lead tracking for marketing and sales leaders",
      paragraphs: [
        "**Problem:** marketing and sales leaders spent business days each month on lead reports.",
        "**What MP-365 built and the result:** one lead process with dashboards for both teams, using [lead management and attribution](/services/dynamics-365-crm/lead-management/) in Dynamics 365.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Case tracking that replaced email-based support",
      paragraphs: [
        "**Problem:** support requests lived in email, so nobody could see who owned a request or how urgent it was.",
        "**What MP-365 built and the result:** one case system in [Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/) that shows the owner, status and urgency of every case.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Contract management with stages and reminders",
      paragraphs: [
        "**Problem:** legal and finance needed contracts to move through defined stages with clear owners.",
        "**What MP-365 built and the result:** defined stages, owners, reminders and dashboards for legal and finance, with [workflow automation](/services/power-platform/power-automate/) handling the repetitive steps.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "CRM deployments that ship on a reliable schedule",
      paragraphs: [
        "**Problem:** CRM changes needed automatic deployment, a reliable quality assurance cycle and a record of what changed.",
        "**What MP-365 built and the result:** automatic deployment, a reliable quality assurance cycle, release notes and a trackable backlog, delivered through [DevOps and release automation](/services/application-modernization/devops-release-automation/).",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "CRM access control with an approval process",
      paragraphs: [
        "**Problem:** CRM access needed an approval process and documented access levels.",
        "**What MP-365 built and the result:** an approval process, documented access levels and automatic access reports, through a [Dynamics 365 security roles and access audit](/services/dynamics-365-crm/security-roles-audit/).",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Reliable integrations with ERP and marketing systems",
      paragraphs: [
        "**Problem:** the CRM needed reliable connections to ERP and marketing systems.",
        "**What MP-365 built and the result:** integrations with logging and alerts, service accounts instead of personal accounts and secure password storage, delivered as [Dynamics 365 integration services](/services/dynamics-365-crm/integration-services/).",
      ],
    },
  ],
  faqs: [
    {
      q: "Who does MP-365 work with?",
      a: "MP-365 works with mid-size and enterprise organizations. Named clients include Carlisle Construction, Hunter Panels, OTIS Elevator, the US Department of Transportation and the Connecticut Department of Public Health. The industries covered are construction, manufacturing, healthcare, elevator and facilities, and government.",
    },
    {
      q: "What results has MP-365 delivered?",
      a: "At OTIS Elevator, Dynamics deployments dropped from 13 hours to 4, and manual errors fell to near zero. Carlisle Construction had its Dynamics and SharePoint operations stabilized within a week. Hunter Panels cut manual work and improved performance.",
    },
    {
      q: "Does MP-365 work with government agencies?",
      a: "Yes. Clients include federal and state government organizations. MP-365 manages and supports Dynamics 365 CRM for the US Department of Transportation, and it has worked with the Connecticut Department of Public Health. MP-365 makes no compliance promises on this page.",
    },
    {
      q: "Are these client results typical?",
      a: "Results depend on the starting point, the scope and how much your team can help. These cases show the kinds of change MP-365 aims for, such as fewer manual steps and faster releases. Your own result is agreed during scoping, not assumed from another client.",
    },
    {
      q: "Can MP-365 fix a Dynamics 365 system that is already live?",
      a: "Yes. Several results here come from stepping into an existing system. MP-365 starts by understanding the setup, then fixes what matters most and confirms the result. Carlisle Construction saw its operations stabilized within a week.",
    },
    {
      q: "Does MP-365 only work with Dynamics 365?",
      a: "No. The stories above also cover SharePoint upgrades, file share moves, intranets, workflow automation and release automation. Dynamics 365 is the core offering, and the [services overview](/services/) lists everything MP-365 does around it.",
    },
    {
      q: "Are the problem-and-result stories real?",
      a: "Yes. They describe real kinds of work MP-365 has delivered, with client details removed. The named clients appear in the results table. The anonymous stories show the pattern of problem, solution and result without identifying the organization.",
    },
    {
      q: "How do I know MP-365 can handle a project my size?",
      a: "MP-365 works with mid-size and enterprise organizations, including federal and state agencies. In a discovery call you describe your users, systems and data, and MP-365 tells you plainly whether it is a fit. [Contact MP-365](/contact/) to start that conversation.",
    },
    {
      q: "What does it cost to get results like these?",
      a: "Cost depends on scope: users, integrations, data and your timeline. MP-365 does not publish prices, but the [pricing page](/pricing/) explains the engagement models, the cost drivers and how to compare bids.",
    },
    {
      q: "Can I see a case study for my industry?",
      a: "Ask during your discovery call, and describe your industry and systems. The problems on this page, such as scattered sales data, messy files, manual reports and slow releases, apply across industries even when the sector differs, so a story from another field often fits.",
    },
  ],
  closing:
    "These Dynamics 365 case studies show the pattern behind MP-365 work: understand the problem, build a working fix quickly and confirm the result with the people who use it. If your situation looks like one of them, tell the team what you are facing.",
  cta: {
    heading: "Talk to MP-365 about your Dynamics 365 results",
    body: "Describe your current setup and the outcome you want. MP-365 will tell you how it would approach it.",
    text: "Book a discovery call",
  },
};

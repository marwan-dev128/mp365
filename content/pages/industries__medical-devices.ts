import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/industries/medical-devices/",
  intro:
    "A medical device CRM should track hospital accounts, distributors, contracts and rep activity in one place, with permissions that match who may see what. MP-365 builds this on Dynamics 365 Sales and SharePoint for medical device companies that have outgrown spreadsheets and shared inboxes.",
  triggers: [
    {
      title: "Reps keep their own account lists",
      body: "Hospital contacts, visit notes and quotes sit in personal spreadsheets, so a territory change means starting over.",
    },
    {
      title: "Contract renewals surprise you",
      body: "Hospital and distributor agreements expire before sales, legal and finance agree who owns the renewal.",
    },
    {
      title: "Forecasts take days to assemble",
      body: "Sales leaders chase reps for pipeline updates and still cannot trust the numbers they present.",
    },
    {
      title: "Distributor and hospital data do not match",
      body: "The same hospital system appears under three names, and nobody can see which facilities a distributor serves.",
    },
  ],
  blocks: [
    {
      type: "list",
      heading: "What to look for in a medical device CRM",
      items: [
        "**Account hierarchies:** a hospital system, its facilities and its departments should sit in one structure, so a rep sees the whole buying group.",
        "**Contacts by role:** clinicians, materials management, procurement and value analysis committees each need to be recorded with their part in the decision.",
        "**Distributor and direct channels:** the CRM should show which accounts you serve directly and which a distributor covers.",
        "**Contract tracking:** every agreement needs a stage, an owner, key dates and a link to the signed document.",
        "**Territory-based access:** a rep should see their own accounts, a manager their region, and finance only what it needs.",
        "**Quick updates for reps:** if a visit note takes longer than a minute, it will not get written.",
        "**Clean, shared account data:** duplicates and inconsistent names undo every report built on top.",
      ],
    },
    {
      type: "prose",
      heading: "How a CRM supports medical device sales",
      paragraphs: [
        "A CRM supports medical device sales by giving each rep one view of their hospital accounts, open opportunities and next steps. Managers forecast from live pipeline data instead of a spreadsheet that someone rebuilds every reporting period.",
        "Device sales cycles often involve several buyers and long evaluation stages, so the record of who said what matters. When a rep changes territory, the history stays with the account instead of leaving with the person.",
      ],
    },
    {
      type: "list",
      heading: "Common challenges for medical device companies",
      items: [
        "**Contracts live in email and folders:** renewal dates are tracked by memory, and legal asks sales for documents that finance also needs.",
        "**Pipeline visibility depends on reps:** updates arrive in meetings, not in the system, so forecasts lag behind the real situation.",
        "**Duplicate hospital and distributor records:** one health system appears under several spellings, which breaks territory reports and mailing lists.",
        "**Access is too broad or too narrow:** either everyone sees every price list, or reps cannot see the accounts they need.",
        "**Reports built by hand:** leadership packs come from exports and manual copying.",
      ],
    },
    {
      type: "table",
      heading: "How MP-365 helps with each challenge",
      headers: ["Challenge", "What MP-365 does", "Where to read more"],
      rows: [
        [
          "Contracts in email and folders",
          "Sets up stages, owners, reminders and dashboards, with signed documents stored in SharePoint and linked to the account.",
          "[Contract Management Automation](/solutions/contract-management-automation/)",
        ],
        [
          "Pipeline depends on rep updates",
          "Configures a single sales process, pipeline views and forecasting in Dynamics 365 Sales, shaped around your stages.",
          "[Dynamics 365 Sales](/services/dynamics-365-crm/sales/)",
        ],
        [
          "Duplicate hospital and distributor records",
          "Reviews account data, removes duplicates and sets standards for names and fields before and after migration.",
          "[Data Quality Management](/services/data-governance/data-quality-management/)",
        ],
        [
          "Access too broad or too narrow",
          "Documents security roles by territory and function, then audits them so they stay accurate.",
          "[Security roles and access audit](/services/dynamics-365-crm/security-roles-audit/)",
        ],
        [
          "Reports built by hand",
          "Builds live dashboards over CRM data so leaders open one report.",
          "[Power BI consulting](/services/power-platform/power-bi/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Proof: contract tracking and CRM support from similar projects",
      paragraphs: [
        "MP-365 has built contract management with defined stages, owners, reminders and dashboards for legal and finance teams. The client and industry are withheld, and the same pattern applies to hospital and distributor agreements.",
        "MP-365 also supports Hunter Panels, a manufacturing client, where Dynamics CRM support aligned the platform with the business and cut manual work. That result comes from manufacturing, not from a medical device company. More summaries are on the [clients page](/clients/).",
      ],
    },
    {
      type: "table",
      heading: "Microsoft tools used for medical device teams",
      headers: ["Product", "Role for a device company"],
      rows: [
        ["Dynamics 365 Sales", "Holds accounts, contacts, opportunities, pipeline and forecasts for reps and managers."],
        ["SharePoint Online", "Stores contracts, price documents and controlled files with version history and defined access."],
        ["[Power Automate](/services/power-platform/power-automate/)", "Sends renewal reminders and routes approvals so contract steps do not depend on email."],
        ["Power BI", "Shows pipeline, contract status and territory results in live dashboards."],
        ["Microsoft Teams", "Gives account teams one place to talk, with files linked back to the CRM."],
      ],
    },
    {
      type: "prose",
      heading: "When this is not the right fit",
      paragraphs: [
        "MP-365 does not provide certification, regulatory submissions or cybersecurity services, and it does not promise that a CRM meets any FDA or other regulatory requirement. It sets up permission models, access audits and document control, which your quality and regulatory teams can use inside their own processes.",
        "MP-365 also does not build validated systems or quality management software. If you need those, your quality team should choose a product built for them, and the CRM can sit beside it.",
      ],
    },
    {
      type: "prose",
      heading: "Related industries and services",
      paragraphs: [
        "Device companies often manufacture as well as sell. If your sales team also works with a production site, the lessons in [manufacturing](/industries/manufacturing/) apply to account support and reporting. Browse every sector MP-365 serves under [industries](/industries/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What should a medical device company look for in a CRM?",
      a: "Look for a CRM that tracks hospital accounts, contacts and contracts in one record, supports distributor and rep territories, and controls who sees what. Check that reps can update it quickly. Dynamics 365 Sales covers these needs when it is configured around your own sales process.",
    },
    {
      q: "How do medical device companies manage contracts?",
      a: "Most use defined stages, a named owner for each agreement and reminders before renewal dates. A CRM links each contract to its hospital or distributor account, so sales, legal and finance see the same status. MP-365 builds this through [contract management automation](/solutions/contract-management-automation/).",
    },
    {
      q: "How can a CRM support medical device sales?",
      a: "A CRM shows each rep which hospital accounts, buying committees and open opportunities need attention. It records visits, quotes and follow-ups in one place, so managers forecast from live data instead of spreadsheets. Dynamics 365 Sales adds pipeline views and forecasting built around your sales stages.",
    },
    {
      q: "Can Dynamics 365 handle hospital and distributor account hierarchies?",
      a: "Yes. Dynamics 365 stores parent and child accounts, so a hospital system, its facilities and its departments can sit in one hierarchy. Distributors link to the accounts they serve. MP-365 designs the structure with you so reports roll up by region, territory and account group.",
    },
    {
      q: "Will MP-365 make our CRM compliant with FDA rules?",
      a: "No. MP-365 does not provide certification or compliance services, and it does not build validated systems. It does set up permission models, access audits and document control in Dynamics 365 and SharePoint, which your quality and regulatory teams can use as part of their own processes.",
    },
    {
      q: "Can reps see only the accounts in their own territory?",
      a: "Yes. Dynamics 365 uses security roles and business units to limit what each person sees, such as one territory or product line. MP-365 documents the access levels and can review them later through its [security roles audit](/services/dynamics-365-crm/security-roles-audit/).",
    },
    {
      q: "Is our account data clean enough to move into Dynamics 365?",
      a: "Probably not yet, so check first. Device company CRMs often hold duplicate hospital accounts, outdated contacts and inconsistent names. MP-365 reviews the data before migration and removes duplicates, so territories and reports start accurate. The [data quality service](/services/data-governance/data-quality-management/) covers this work.",
    },
    {
      q: "Where should signed contract documents be stored?",
      a: "Store signed contracts in SharePoint document libraries with version history and metadata, then link them to the account record in Dynamics 365. Sales reaches documents from the CRM while the files stay under document control. MP-365 designs the libraries, permissions and naming rules with your legal team.",
    },
  ],
  closing:
    "A medical device CRM works when it matches how your reps sell to hospitals and how your teams manage contracts, not when it holds the longest feature list. MP-365 builds that setup on Dynamics 365 and SharePoint, and tells you plainly where its scope ends.",
  cta: {
    heading: "Talk to MP-365 about your device sales process",
    body: "Tell us how your reps, distributors and contracts work today. We will outline a first version of the CRM you can react to.",
    text: "Book a free medical devices consultation",
  },
};

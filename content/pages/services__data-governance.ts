import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/data-governance/",
  intro:
    "Data governance consulting from MP-365 sets clear rules for who can see, share and keep information in Microsoft 365 and Dynamics 365. The work covers permission models, Microsoft Purview and data quality, so people see what their job needs and nothing more. MP-365 is a Microsoft Solutions Partner, and this is one of eight service areas on the [Services](/services/) page.",
  blocks: [
    {
      type: "prose",
      heading: "What data governance consulting means in Microsoft 365",
      paragraphs: [
        "Data governance in Microsoft 365 is the set of decisions and settings that control who owns data, who can open it, how it is labeled and when it is cleaned up. Without those decisions, Teams, SharePoint sites and CRM tables grow on their own, and access spreads further than anyone intended.",
        "MP-365 treats governance as a business control, not a security operation. The team designs the permission model, configures the Microsoft tools that enforce it and fixes the records that undermine it. MP-365 does not provide cybersecurity monitoring, compliance certification or audits.",
      ],
    },
    {
      type: "table",
      heading: "Data governance consulting services compared",
      headers: ["Service", "Best for", "Typical outcome", "Page"],
      rows: [
        [
          "Microsoft Purview and permission models",
          "Companies with overshared SharePoint sites, no file labels or no rules for sharing",
          "Clean SharePoint permissions, sensitivity labels and data loss prevention policies tested before they block anyone",
          "[Microsoft Purview & Permission Models](/services/data-governance/microsoft-purview/)",
        ],
        [
          "Data quality management",
          "Sales and service teams that no longer trust the numbers in Dynamics 365",
          "Duplicates merged, entries standardized and rules that keep new records clean",
          "[Data Quality Management](/services/data-governance/data-quality-management/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Which data governance service to start with",
      paragraphs: [
        "Start with Microsoft Purview and permission models if the worry is who can see what. Start with data quality management if the worry is that reports and forecasts are wrong. Both problems often exist together, and the order depends on which one costs you more today.",
        "Two upcoming projects change the order. If you plan a Microsoft 365 Copilot rollout, fix permissions first, because Copilot only surfaces what a user can already open. If you plan a CRM migration or a new integration, clean the data first, because every duplicate moves with it. For Copilot-specific access reviews, see the [AI Data Governance Audit](/services/copilot/ai-data-governance-audit/).",
      ],
    },
    {
      type: "list",
      heading: "Problems that bring teams to data governance consulting",
      items: [
        "**Oversharing:** Files sit in sites that the whole company can open, and nobody knows how that happened.",
        "**No labels:** Contracts, HR files and customer lists look the same as meeting notes, so nothing can be protected differently.",
        "**Access sprawl:** Former project members, vendors and guests still have access long after the work ended. The CRM version of this problem is covered by the [Dynamics 365 Security Roles & Access Audit](/services/dynamics-365-crm/security-roles-audit/).",
        "**Duplicate and stale records:** The same customer exists three times in Dynamics 365, and each copy has a different owner.",
        "**Copilot hesitation:** Leaders want Microsoft 365 Copilot but cannot say what it would find. The [Microsoft 365 Copilot readiness](/services/copilot/readiness/) service picks up from there.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 approaches data governance",
      steps: [
        {
          name: "Find out where the data lives",
          description:
            "MP-365 reviews SharePoint sites, Teams, OneDrive sharing and the Dynamics 365 tables that matter, and lists who owns each one.",
        },
        {
          name: "Measure the exposure",
          description:
            "The team uses Microsoft's own reports, such as SharePoint data access governance reports, to see which sites are shared too widely.",
        },
        {
          name: "Agree the rules with business owners",
          description:
            "Department heads decide which data is sensitive and who needs it. MP-365 writes those decisions down in plain language before touching a setting.",
        },
        {
          name: "Design the permission model",
          description:
            "MP-365 replaces one-off permissions with groups and a small set of site and role patterns that people can understand.",
        },
        {
          name: "Configure Microsoft Purview",
          description:
            "Sensitivity labels, data loss prevention policies and retention settings go live in test mode first, then in enforcement once the results look right.",
        },
        {
          name: "Clean and standardize the data",
          description:
            "Duplicate detection rules, merges and entry standards fix Dynamics 365 records and keep them fixed.",
        },
        {
          name: "Hand over with owners and a review rhythm",
          description:
            "Your team gets documentation, named owners and a short checklist for the periodic reviews that keep the model from drifting.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Proof from a data governance engagement",
      paragraphs: [
        "In one MP-365 engagement, Dynamics 365 access was granted by email and nobody could say who held which role. MP-365 introduced an approval process, documented the access levels and set up automatic access reports. Access now follows a written process instead of memory.",
        "The company stays anonymous in this example. See the [Clients](/clients/) page for named results across other projects.",
      ],
    },
    {
      type: "prose",
      heading: "Data governance work that connects to other MP-365 services",
      paragraphs: [
        "Permissions drive the design of intranets and portals. The [SharePoint Search & Information Architecture](/services/sharepoint/information-architecture/) service structures content so that access follows the structure. Teams that inherit another company's tenant after a deal often start governance from scratch, which is where [M&A tenant migration](/services/tenant-to-tenant-migration/) and this service meet.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is data governance in Microsoft 365?",
      a: "Data governance in Microsoft 365 is the practice of deciding who owns data, who can access it and how long it is kept, then enforcing those decisions with tools such as SharePoint permissions, sensitivity labels and Microsoft Purview policies. It turns informal habits into written, enforceable rules.",
    },
    {
      q: "Why do companies need data governance before Copilot?",
      a: "Microsoft 365 Copilot answers from content the asking user can already open. If a site is shared with everyone, Copilot can quote it to anyone. Cleaning permissions and labeling sensitive files before the rollout keeps answers useful and prevents unpleasant surprises on the first day.",
    },
    {
      q: "How much does data governance consulting cost?",
      a: "Cost depends on the number of sites and tables in scope, how much cleanup is needed and how much your team can help. MP-365 sets scope in a discovery call and gives a written estimate. The [Pricing](/pricing/) page explains the three engagement models and what drives effort.",
    },
    {
      q: "Is data governance the same as cybersecurity?",
      a: "No. Data governance decides who should have access and how data is handled. Cybersecurity detects and stops attacks. MP-365 provides the first and does not offer security operations or threat monitoring. Your security team or provider can build on a clean governance foundation.",
    },
    {
      q: "Does MP-365 make us compliant with HIPAA or similar regulations?",
      a: "No. MP-365 does not certify compliance or promise a regulatory outcome. The team builds permission models, labels and policies that support your own compliance program. Your compliance officer or auditor decides whether those controls meet a specific regulation.",
    },
    {
      q: "What do you need from us to start?",
      a: "MP-365 needs a named business owner, read access to the tenant and the Dynamics 365 environment, and a few short sessions with department heads who know which data is sensitive. Admin changes are made together with your IT team so nothing happens without approval.",
    },
    {
      q: "Do we need Microsoft Purview licenses?",
      a: "Some Purview features need higher Microsoft 365 license tiers, so the answer depends on what you want to enforce. MP-365 checks your current plan during the first review and tells you what is already included. Microsoft sets license fees, and they are separate from MP-365's fees.",
    },
    {
      q: "Can you fix permissions without disrupting our users?",
      a: "Yes, with planning. MP-365 changes permissions in stages, starts with the most exposed sites, tells site owners ahead of time and tests data loss prevention policies in simulation mode before enforcing them. Users see fewer surprises because the rules are explained first.",
    },
    {
      q: "Should we clean our CRM data or fix permissions first?",
      a: "Fix permissions first if Copilot or an external sharing project is coming. Clean data first if a migration, integration or forecasting rollout is coming. If both are on the list, MP-365 usually starts with whichever one blocks the nearest project. The two services can run in parallel.",
    },
    {
      q: "What happens after the engagement ends?",
      a: "Your team owns the model. MP-365 hands over documentation, the policy settings, named owners and a review checklist. If you want help with periodic reviews or new projects, you can call MP-365 again on the ad hoc, standard or dedicated engagement model.",
    },
  ],
  closing:
    "Good data governance consulting leaves your team with clear owners, a permission model people understand and policies that run quietly in the background. If you are not sure whether to begin with Purview or with data quality, a short call will settle it.",
  cta: {
    heading: "Talk to MP-365 about your data",
    body: "Tell us where information is overshared, messy or hard to trust, and we will suggest the first step.",
    text: "Book a free consultation",
  },
};

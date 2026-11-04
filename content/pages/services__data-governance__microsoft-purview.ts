import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/data-governance/microsoft-purview/",
  intro:
    "Microsoft Purview implementation from MP-365 puts sensitivity labels, data loss prevention (DLP) policies and clean SharePoint permissions in place, so each file is visible only to the people who should see it. It is built for IT leaders and business owners at mid-size and enterprise companies who need a governed Microsoft 365 tenant, not a security operations program.",
  atAGlance: {
    bestFor:
      "Companies with overshared SharePoint sites, unlabeled sensitive files or a Microsoft 365 Copilot rollout coming up.",
    includes:
      "SharePoint permission cleanup, a sensitivity label scheme, DLP policies tested in simulation mode, label defaults for sites and libraries, and handover documentation.",
    notIncluded:
      "Cybersecurity operations, threat monitoring, identity management, compliance certification or audits, and Microsoft license resale.",
    howItStarts:
      "A discovery call, then a read-only review of your SharePoint sharing reports and current Purview settings.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What Microsoft Purview is and what it does for you",
      paragraphs: [
        "Microsoft Purview is the set of Microsoft 365 tools that classify, protect and govern data. For most mid-size companies, the useful pieces are sensitivity labels, data loss prevention (DLP), retention settings and the reports that show who can open what.",
        "Microsoft renames and regroups Purview features often. As of November 2026, the admin experience lives in the Microsoft Purview portal, and some features, such as DLP for Microsoft 365 Copilot, are still in preview in Microsoft's documentation. MP-365 checks the current names and status before each project and writes the handover in your terms.",
      ],
    },
    {
      type: "list",
      heading: "Problems Microsoft Purview implementation solves",
      items: [
        "**Everyone can open it:** Sites and libraries are shared with the whole company or with \"Everyone except external users\" because that was the quickest setting.",
        "**Nothing is labeled:** Customer lists, pricing sheets and HR files look like any other document, so no rule can treat them differently.",
        "**Sharing links keep multiplying:** Staff send anyone-with-the-link URLs and nobody can find them later.",
        "**Copilot worries:** Leaders ask what Microsoft 365 Copilot would reveal, and nobody can answer with confidence.",
        "**Rules exist only on paper:** The information policy says \"confidential files stay internal,\" but no setting enforces it.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 delivers a Microsoft Purview implementation",
      steps: [
        {
          name: "Review the current state",
          description:
            "Pull SharePoint data access governance reports, sharing link activity and your existing label and DLP settings, read-only.",
        },
        {
          name: "Rank sites by exposure",
          description:
            "List the sites that hold sensitive content and are shared too widely, and agree with business owners which to fix first.",
        },
        {
          name: "Design the permission model",
          description:
            "Replace one-off grants with Microsoft 365 groups and a short list of site patterns, with named owners for every site.",
        },
        {
          name: "Design the label scheme",
          description:
            "Define a small set of sensitivity labels with names, descriptions and protection settings that employees can understand in one read.",
        },
        {
          name: "Publish labels and defaults",
          description:
            "Release labels through label policies, set default labels for libraries and containers, and brief site owners and users.",
        },
        {
          name: "Run DLP in simulation mode",
          description:
            "Create policies for the data types you named, watch what they would have blocked and tune them with the business owners.",
        },
        {
          name: "Turn on enforcement in stages",
          description:
            "Move policies from simulation to policy tips, then to blocking with override, then to hard blocks only where the business agrees.",
        },
        {
          name: "Hand over and set a review rhythm",
          description:
            "Document the model, train site owners and give your IT team a short checklist for site access reviews.",
        },
      ],
    },
    {
      type: "prose",
      heading: "SharePoint sensitivity labels, explained",
      paragraphs: [
        "SharePoint sensitivity labels classify files and the sites that hold them. A label is stored in the file's metadata, so it stays with the content when someone downloads or moves it. A label can add encryption, add a watermark or header, or simply record how sensitive the file is.",
        "Labels also work on containers. Microsoft's Purview documentation (updated October 2026) states that a label applied to a Teams team, Microsoft 365 group or SharePoint site controls privacy, external sharing and access from unmanaged devices. A container label does not label the files inside it.",
      ],
    },
    {
      type: "prose",
      heading: "How sensitivity labels work in daily use",
      level: 3,
      paragraphs: [
        "People pick a label from the ribbon in Word, Excel, PowerPoint and Outlook, or the label applies automatically when a policy finds a defined data type. MP-365 sets a default label for libraries so unlabeled files get a baseline, and chooses the option that keeps SharePoint permissions attached to files after download.",
        "Label policy changes can take up to 24 hours to reach users, according to Microsoft's documentation. MP-365 plans communications around that delay.",
      ],
    },
    {
      type: "prose",
      heading: "How many labels to create",
      level: 3,
      paragraphs: [
        "Fewer labels work better. Microsoft's Purview documentation (October 2026) notes that effectiveness drops when users face more than five main labels or more than five sublabels under a main label. MP-365 keeps the starting scheme small and adds sublabels only when a department shows it needs them.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft 365 data loss prevention and SharePoint DLP",
      paragraphs: [
        "Microsoft 365 data loss prevention is a policy engine that watches sharing activity and acts when a rule matches. A policy can show a tip to the user, block sharing with an override and a written reason, or block it outright. Microsoft's documentation lists SharePoint sites, OneDrive, Exchange email, Teams chat and channel messages, and Windows and macOS devices among the locations it covers.",
        "SharePoint DLP scans existing items as well as new ones. Exchange DLP scans new email only, not mail already in a mailbox. That difference matters when you plan your cleanup, and MP-365 builds it into the test plan.",
      ],
    },
    {
      type: "prose",
      heading: "Office 365 DLP is now Microsoft 365 DLP",
      level: 3,
      paragraphs: [
        "Office 365 DLP is the older name for the same capability, which Microsoft now documents as data loss prevention in Microsoft Purview. If your team still searches for Office 365 DLP policies, MP-365 migrates old rules into the Purview portal and retires duplicates.",
      ],
    },
    {
      type: "prose",
      heading: "Why simulation mode comes first",
      level: 3,
      paragraphs: [
        "Microsoft advises deploying DLP policies in simulation mode before using restrictive actions, and MP-365 follows that rule on every project. Simulation shows what a policy would have done without stopping anyone from working. Microsoft notes that policies usually take effect about an hour after you turn them on.",
      ],
    },
    {
      type: "prose",
      heading: "How to clean up SharePoint permissions",
      paragraphs: [
        "Clean up SharePoint permissions by finding the broadest grants first, then replacing them with groups. MP-365 starts with sites shared with large groups or with \"Everyone except external users,\" removes stale sharing links and fixes places where unique permissions override the site's group structure.",
        "SharePoint Advanced Management gives administrators the tools for this. Microsoft's documentation lists data access governance reports, site access reviews that site owners complete, and restricted content discovery that keeps selected sites out of Copilot results. Prerequisites and license requirements are set by Microsoft, and MP-365 confirms them during the first review.",
      ],
    },
    {
      type: "list",
      heading: "What you get from the engagement",
      items: [
        "**Permission model:** A written pattern for sites, groups and owners, with exceptions listed.",
        "**Cleaned permissions:** The most exposed sites fixed, with before and after reports.",
        "**Label scheme and policies:** Sensitivity labels, label policies and default labels, published and explained.",
        "**DLP policies:** Tested rules for the data types you chose, moved from simulation to enforcement in agreed stages.",
        "**Owner guide:** A short document for site owners on sharing, labels and access reviews.",
        "**Handover session:** A working session with your IT team on reports to check and settings to leave alone.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft tools involved",
      headers: ["Tool", "What MP-365 uses it for", "Who works with it day to day"],
      rows: [
        [
          "Microsoft Purview portal",
          "Sensitivity labels, label policies, DLP policies and activity reports",
          "Your Microsoft 365 administrators",
        ],
        [
          "SharePoint admin center",
          "Data access governance reports, site access reviews and sharing settings",
          "SharePoint administrators and site owners",
        ],
        [
          "Microsoft 365 groups",
          "The base for site membership instead of individual grants",
          "Site owners",
        ],
        [
          "Microsoft 365 Copilot",
          "Respects labels and the permissions you clean up",
          "All licensed users",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Proof from a SharePoint cleanup",
      paragraphs: [
        "MP-365 moved file shares holding hundreds of thousands of files into organized SharePoint libraries with metadata, version control and workflows for one client. Clear structure makes access rules simple to apply, and that structure-first approach is the basis for this service. See the [Clients](/clients/) page for other results.",
      ],
    },
    {
      type: "prose",
      heading: "When Microsoft Purview implementation is not the right fit",
      paragraphs: [
        "Purview is not the right first step if your tenant has no basic structure yet, such as unmanaged Teams creation and no site owners. MP-365 would begin with a smaller cleanup. It is also not a substitute for a security program. If you need threat detection or compliance audits, work with a security provider, and use this service to give them a cleaner tenant.",
      ],
    },
    {
      type: "prose",
      heading: "Related services",
      paragraphs: [
        "This service sits under [Data Governance](/services/data-governance/) and pairs with [Data Quality Management](/services/data-governance/data-quality-management/) for Dynamics 365 records. For CRM roles, see the [Dynamics 365 Security Roles & Access Audit](/services/dynamics-365-crm/security-roles-audit/). Before a Copilot rollout, the [AI Data Governance Audit](/services/copilot/ai-data-governance-audit/) reviews what Copilot would reach. External collaboration projects can pair with [SharePoint Supplier & Partner Portals](/services/sharepoint/supplier-partner-portals/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What is Microsoft Purview?",
      a: "Microsoft Purview is Microsoft's set of tools for classifying, protecting and governing data across Microsoft 365. It includes sensitivity labels, data loss prevention, retention settings and reports that show how data is shared. Administrators manage it in the Microsoft Purview portal.",
    },
    {
      q: "How do sensitivity labels work?",
      a: "A sensitivity label is a tag stored in a file's metadata. It can add encryption, a watermark or a header, and it stays with the file when it moves. Users choose a label in Office apps, or a policy applies one automatically when it finds a defined type of data.",
    },
    {
      q: "How do you clean up SharePoint permissions?",
      a: "Start with the broadest grants, such as sites shared with the whole company, then replace individual permissions with Microsoft 365 groups and name an owner for each site. Use SharePoint data access governance reports to find the worst cases and ask site owners to confirm who still needs access.",
    },
    {
      q: "What is the difference between a sensitivity label and a DLP policy?",
      a: "A sensitivity label classifies a file and can protect it with encryption or markings. A DLP policy watches activity, such as sharing or copying, and acts when a rule matches. They work together, because a DLP policy can use a label as a condition, for example blocking external sharing of files marked Confidential.",
    },
    {
      q: "Can DLP stop people from sharing files in SharePoint?",
      a: "Yes. A DLP policy can show a policy tip, block sharing with a written override reason, or block it entirely. MP-365 first runs policies in simulation mode, then enforces them in stages, so legitimate work is not interrupted by a rule nobody tested.",
    },
    {
      q: "Is Office 365 DLP the same as Microsoft 365 DLP?",
      a: "Yes. Office 365 is the former name of Microsoft 365, and the same data loss prevention capability is now managed in the Microsoft Purview portal. Older rules can be reviewed and rebuilt there. MP-365 checks old policies for overlap before moving or deleting them.",
    },
    {
      q: "Will sensitivity labels affect Microsoft 365 Copilot?",
      a: "Yes. Microsoft states that Copilot and agents recognize sensitivity labels. When a label applies encryption, Copilot returns content only if the user holds the right to copy it. Labels and clean permissions together reduce what Copilot can surface to the wrong person.",
    },
    {
      q: "How much does a Microsoft Purview implementation cost?",
      a: "Cost depends on how many sites need cleanup, how many data types need policies and how much time your team can give. MP-365 estimates after a discovery call. The [Pricing](/pricing/) page lists the engagement models. Microsoft license fees are separate and set by Microsoft.",
    },
    {
      q: "Do we need Microsoft 365 E5 for Purview?",
      a: "Not always. Some capabilities are included in other Microsoft 365 plans and some need higher tiers or add-ons, so it depends on the features you want. MP-365 reviews your current plan first and suggests a scope that fits what you already own.",
    },
    {
      q: "Does MP-365 provide cybersecurity or compliance certification?",
      a: "No. MP-365 does permission models, labels and DLP policies as data governance work. It does not run security operations, monitor threats, certify compliance or audit against standards. Your security or compliance team can rely on these controls as part of their own program.",
    },
  ],
  closing:
    "A Microsoft Purview implementation succeeds when labels are few, permissions are simple and policies are tested before they block anyone. MP-365 builds that foundation and leaves your team able to run it.",
  cta: {
    heading: "Plan your Microsoft Purview rollout",
    body: "Share your biggest sharing or labeling problem, and MP-365 will tell you where to start.",
    text: "Book a discovery call",
  },
};

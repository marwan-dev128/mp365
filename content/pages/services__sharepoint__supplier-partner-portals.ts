import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/sharepoint/supplier-partner-portals/",
  intro:
    "A SharePoint extranet gives suppliers, subcontractors and partners one controlled place to exchange files and updates with you, instead of email attachments and personal file-sharing accounts. MP-365 is a Microsoft Solutions Partner that designs and builds vendor and partner portals on SharePoint Online, with a separate space for each outside company and permissions your team can explain.",
  atAGlance: {
    bestFor:
      "Companies that trade documents with vendors, subcontractors or partners and want one managed place, using the Microsoft 365 licenses they already have.",
    includes:
      "Portal design, one site per partner or program, guest access setup, permission groups, document libraries and lists, onboarding and offboarding steps, and owner training.",
    notIncluded:
      "Identity and access management services, cybersecurity services, custom software development, ERP implementation and Microsoft licenses.",
    howItStarts:
      "A discovery call about who you share with and what moves back and forth, followed by a written portal design covering sites, access and ownership.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What is a SharePoint extranet?",
      paragraphs: [
        "A SharePoint extranet is a set of SharePoint sites that people outside your company can open after signing in. Typical users are suppliers, contractors, distributors and customers' project teams. It is often called a vendor portal when the outside users are suppliers.",
        "A good extranet is not one big shared folder. It is a group of small sites, each with a clear owner on your side, a short list of outside users and only the content that company needs.",
      ],
    },
    {
      type: "list",
      heading: "Problems a vendor portal solves",
      items: [
        "**Files travel by email:** purchase documents, specifications and insurance certificates sit in inboxes, and nobody knows which version is current.",
        "**Everyone shares through personal tools:** staff use consumer file-sharing accounts, so IT cannot see who has what.",
        "**Onboarding is slow:** each new supplier needs a manual set of emails and folder invitations.",
        "**Offboarding is forgotten:** people from past contracts keep access because nobody removes them.",
        "**Suppliers see too much:** one shared folder lets one company see another company's files.",
      ],
    },
    {
      type: "prose",
      heading: "How do you share files with vendors in SharePoint?",
      paragraphs: [
        "The safest pattern is one SharePoint site per outside company or program, shared with named guests. MP-365 builds this pattern and sets the rules that keep it clean.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "One site for each partner or program",
      paragraphs: [
        "Separate sites keep each company's content apart. Microsoft notes that when you share a folder with several guests, those guests can see each other's names in the Manage Access panel. Separate sites avoid that exposure and make offboarding simple.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Sharing settings at organization and site level",
      paragraphs: [
        "SharePoint external sharing is set at both the organization level and the site level, and the more restrictive setting always applies. Microsoft recommends keeping confidential information in sites with external sharing turned off and creating separate sites for external sharing. MP-365 follows that rule when it lays out your tenant.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "How outside users sign in",
      paragraphs: [
        "SharePoint can share through Microsoft Entra B2B integration, which always creates a guest account, or through SharePoint external authentication. Which one fits depends on your policies. MP-365 explains the trade-offs, configures the chosen one with your administrators, and avoids anonymous Anyone links for portal content.",
      ],
    },
    {
      type: "table",
      heading: "SharePoint extranet or Power Pages portal?",
      headers: ["Question", "SharePoint extranet", "Power Pages portal"],
      rows: [
        ["Main purpose", "Exchange and co-author files, share lists and updates", "Let outside users sign in and work with business data, such as records, forms and statuses"],
        ["Where data lives", "In SharePoint libraries and lists", "In Dataverse, often alongside Dynamics 365"],
        ["Who it suits", "Suppliers and partners who mostly send and receive documents", "Customers, dealers or suppliers who submit requests, track cases or update records"],
        ["Look and feel", "SharePoint site pages with your branding", "A portal with its own pages, forms and sign-in options"],
        ["Effort to build", "Lower; uses standard SharePoint features", "Higher; needs data model design and form setup"],
      ],
    },
    {
      type: "prose",
      heading: "Should a vendor portal use SharePoint or Power Pages?",
      paragraphs: [
        "Use SharePoint when the main need is file sharing and simple lists, and use [Power Pages](/services/power-platform/power-pages/) when outside users must work with structured business data. If suppliers only need to download specifications and upload certificates, SharePoint is enough. If they must submit orders, track cases or edit records in Dynamics 365, Power Pages is the better base. MP-365 builds both and will tell you which fits.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 builds a SharePoint extranet",
      steps: [
        {
          name: "Map who shares what",
          description:
            "List each type of outside user, what they send and receive, and who inside your company owns the relationship.",
        },
        {
          name: "Design the site model",
          description:
            "Choose one site per company or per program. Decide which libraries, lists and pages each site needs and how templates will be reused.",
        },
        {
          name: "Choose the sharing settings",
          description:
            "Set organization and site sharing levels, guest sign-in method and rules for link sharing, with your administrators.",
        },
        {
          name: "Create permission groups",
          description:
            "Define who on your side owns and edits, who on the partner side contributes, and who may only read.",
        },
        {
          name: "Build a template and one live site",
          description:
            "Create a reusable site template and one real partner site. Test with a friendly supplier before others join.",
        },
        {
          name: "Add automation",
          description:
            "Use Power Automate for onboarding requests, document approvals and notifications to your owners when partners upload files.",
        },
        {
          name: "Onboard partners in groups",
          description:
            "Send clear guest invitations with a short how-to. Add companies in batches so questions can be handled in time.",
        },
        {
          name: "Hand off and set a review routine",
          description:
            "Train your owners and document a regular check of who still has access. Offboarding is part of the design, not an afterthought.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get from MP-365",
      items: [
        "**Portal design:** a written site model showing which sites exist, who owns them and who is invited.",
        "**Partner site template:** a repeatable site with libraries, lists, a landing page and permissions already set.",
        "**Sharing configuration:** settings documented at organization and site level.",
        "**Onboarding and offboarding flow:** a request form and approval built with Power Automate, plus a removal checklist.",
        "**Guest guide:** a one-page how-to partners can follow to sign in and upload.",
        "**Owner training:** a working session for your people who manage partner sites.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft products used in a SharePoint extranet",
      headers: ["Product", "Role"],
      rows: [
        ["SharePoint Online", "Hosts partner sites, document libraries and lists."],
        ["Microsoft Entra B2B", "Provides guest accounts so outside users can sign in with their own work email."],
        ["Microsoft 365 groups", "Group-connected team sites use group membership to control access."],
        ["Power Automate", "Handles onboarding requests, approvals and upload notices."],
        ["Microsoft Purview sensitivity labels", "Label and protect sensitive documents; see [Microsoft Purview and permission models](/services/data-governance/microsoft-purview/)."],
      ],
    },
    {
      type: "prose",
      heading: "What guests can and cannot do",
      paragraphs: [
        "Guests who are not licensed in your organization are limited to basic collaboration, according to Microsoft's external sharing documentation. They can view and edit documents in the browser and work within the permission level you give them. If a guest needs more, such as OneDrive storage or creating a Power Automate flow, they need an appropriate license. MP-365 designs portals so that guests need nothing beyond basic access.",
      ],
    },
    {
      type: "prose",
      heading: "What does a SharePoint extranet cost?",
      paragraphs: [
        "Cost depends on the number of partner types, the number of sites, the amount of automation and your approval rules. A template-based design keeps the cost of each added partner low. MP-365 gives a written estimate after discovery; the [pricing page](/pricing/) explains engagement models. Microsoft license fees are separate.",
      ],
    },
    {
      type: "prose",
      heading: "When a SharePoint extranet is not the right fit",
      paragraphs: [
        "A SharePoint extranet is not the right fit for large public audiences, for sign-ups from unknown users, or for transaction-heavy portals; Power Pages fits those better. It is also not a substitute for security operations. MP-365 designs sharing and permission models but does not provide cybersecurity or identity and access management services.",
      ],
    },
    {
      type: "prose",
      heading: "Related SharePoint services",
      paragraphs: [
        "Internal staff often need an [intranet](/services/sharepoint/intranet-development/) next to the portal, so that partner content and internal content stay on separate sites. See all services under [SharePoint & Intranets](/services/sharepoint/).",
      ],
    },
  ],
  faqs: [
    {
      q: "How do you share files securely with vendors in SharePoint?",
      a: "Create one SharePoint site per vendor or program, share it with named guests, and give them the lowest permission level they need. Avoid anonymous Anyone links for business files. MP-365 also sets a routine for removing access when contracts end.",
    },
    {
      q: "What is a SharePoint extranet?",
      a: "A SharePoint extranet is a set of SharePoint sites that external users, such as suppliers, subcontractors and partners, can open after signing in. It gives you a managed place to exchange documents, lists and updates, with each outside company seeing only its own content.",
    },
    {
      q: "Should a vendor portal use SharePoint or Power Pages?",
      a: "Use SharePoint when vendors mainly exchange files and simple lists. Use Power Pages when they must sign in and work with business data, such as submitting orders or updating records in Dynamics 365. MP-365 builds both and recommends one after a discovery call.",
    },
    {
      q: "Can suppliers see each other's files?",
      a: "Not if the portal is designed correctly. Each company gets its own site, and nobody from another company is a member. Microsoft notes that guests invited to the same shared folder can see each other's names, so MP-365 avoids sharing one folder with many companies.",
    },
    {
      q: "Do external users need a Microsoft license?",
      a: "Usually no. Microsoft states that unlicensed guests can do basic collaboration, such as viewing and editing documents in the browser. They need a license for things like OneDrive storage or creating a Power Automate flow. MP-365 designs partner sites to stay within basic access.",
    },
    {
      q: "How are vendors added and removed?",
      a: "MP-365 builds an onboarding request and approval flow in Power Automate, so adding a vendor follows a set path with a named owner. Removal is part of the design: a checklist and a review routine make sure old contract partners lose access.",
    },
    {
      q: "Can we control what external users can download or edit?",
      a: "Yes. Permission levels let you give read, contribute or edit access per site or library. Sensitivity labels from Microsoft Purview can add protection to specific documents. MP-365 recommends the simplest model that fits and documents it so your owners understand it.",
    },
    {
      q: "Does the vendor portal work with Dynamics 365?",
      a: "It can. Documents related to accounts or orders can live in SharePoint and link to Dynamics 365 records, and approvals can run through Power Automate. If vendors need to update Dynamics 365 data directly, Power Pages is usually a better fit than SharePoint alone.",
    },
    {
      q: "Is a SharePoint vendor portal an alternative to Teams shared channels?",
      a: "Sometimes. Teams shared channels suit active, chat-based projects with one or two partners. A SharePoint extranet suits many partners, formal document exchange and a stable structure. Both store files in SharePoint, so MP-365 can use them together.",
    },
    {
      q: "How much does a SharePoint extranet cost?",
      a: "The cost depends on the number of partner types, sites, automations and approval rules. Using a site template lowers the cost of each added partner. MP-365 gives a written estimate after discovery. Microsoft licenses are billed separately by Microsoft or your license provider.",
    },
  ],
  closing:
    "A SharePoint extranet works when every outside company has its own space, a named owner on your side and a way to be removed when the work ends. MP-365 designs and builds that structure on the Microsoft 365 licenses you already own.",
  cta: {
    heading: "Plan your vendor and partner portal with MP-365",
    body: "Tell us who you share with and what moves back and forth. We will recommend SharePoint or Power Pages and outline the first version.",
    text: "Book a discovery call",
  },
};

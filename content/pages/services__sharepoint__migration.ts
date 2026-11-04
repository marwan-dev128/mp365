import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/sharepoint/migration/",
  intro:
    "SharePoint migration consulting from MP-365 moves SharePoint Server 2010, 2013, 2016 and 2019 sites, content and workflows to SharePoint Online. Microsoft ended support for SharePoint Server 2016 and 2019 on July 14, 2026, so those farms no longer receive security fixes. MP-365 is a Microsoft Solutions Partner that plans the move, handles the customizations and cuts over in stages.",
  atAGlance: {
    bestFor:
      "IT leaders running SharePoint Server 2010, 2013, 2016 or 2019 who need to move to SharePoint Online, or decide between the cloud and SharePoint Server Subscription Edition.",
    includes:
      "Farm assessment, customization and workflow review, target site design, pilot, staged content migration, cutover, link cleanup and hand-off documentation.",
    notIncluded:
      "Azure infrastructure or hosting management, cybersecurity services, custom software development, ERP implementation and Microsoft licenses.",
    howItStarts:
      "A discovery call about your current farm, followed by a scan of sites, content and customizations and a written migration plan.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What happens now that SharePoint 2016 and 2019 support has ended?",
      paragraphs: [
        "SharePoint Server 2016 and 2019 keep running after July 14, 2026, but Microsoft no longer issues security updates or technical support for them. Every new vulnerability stays open, and compatibility with newer Microsoft 365 services slowly erodes.",
        "Older versions are already further behind. SharePoint Server 2013 support ended on April 11, 2023, according to Microsoft's lifecycle documentation. If your farm is on any of these versions, the question is no longer whether to move, but where and in what order.",
      ],
    },
    {
      type: "table",
      heading: "Where each SharePoint Server version stands",
      headers: ["Version", "Support status (October 2026)", "Move to SharePoint Online with Microsoft's tool"],
      rows: [
        ["SharePoint Server 2010", "Out of support", "Supported by the SharePoint Migration Tool"],
        ["SharePoint Server 2013", "Support ended April 11, 2023", "Supported by the SharePoint Migration Tool"],
        ["SharePoint Server 2016", "Support ended July 14, 2026", "Supported by the SharePoint Migration Tool"],
        ["SharePoint Server 2019", "Support ended July 14, 2026", "Supported by the SharePoint Migration Tool"],
        ["SharePoint Server Subscription Edition", "In support, updated twice a year in Microsoft's documentation", "Not a migration target for this move; it stays on-premises"],
      ],
    },
    {
      type: "prose",
      heading: "Migrate to SharePoint Online or move to Subscription Edition?",
      paragraphs: [
        "Migrate to SharePoint Online when you want Microsoft to run the platform and you want Teams, Power Automate and Copilot to work against the same content. Choose SharePoint Server Subscription Edition only when a business or regulatory reason keeps data on-premises. Subscription Edition still needs servers, patching and upgrades from your team.",
        "MP-365 gives a plain recommendation after the assessment. Some companies split the move: most sites go to SharePoint Online, and a few stay on Subscription Edition behind a hybrid setup.",
      ],
    },
    {
      type: "steps",
      heading: "How SharePoint migration consulting works, from scan to cutover",
      steps: [
        {
          name: "Scan the farm",
          description:
            "Run Microsoft's SharePoint Migration Assessment Tool against SharePoint 2010, 2013 or 2016 farms to find blocking issues, then inventory sites, sizes, workflows and custom code by hand where the tool does not reach.",
        },
        {
          name: "Decide what moves",
          description:
            "Sort every site and library into move, merge, archive or delete. Most farms hold years of unused content that does not need to travel.",
        },
        {
          name: "Design the target",
          description:
            "Map old site collections and subsites to modern sites and hub sites. Decide permission groups and the Microsoft Entra ID accounts that users will sign in with.",
        },
        {
          name: "Rebuild what will not move",
          description:
            "Replace unsupported workflows, InfoPath forms and custom code with Power Automate, Power Apps or standard SharePoint features.",
        },
        {
          name: "Run a pilot migration",
          description:
            "Move one real site with its owners involved. Check permissions, metadata, versions and links before touching larger sites.",
        },
        {
          name: "Migrate in waves",
          description:
            "Move sites in groups. Repeat passes to catch changes made during the move, and record every exception in a log that owners can read.",
        },
        {
          name: "Cut over and fix links",
          description:
            "Switch users to the new sites, make old sites read-only, and update links in documents, emails and bookmarks that pointed to the old URLs.",
        },
        {
          name: "Decommission and hand off",
          description:
            "Archive or remove the old farm once owners sign off. Give your administrators the new structure, permission map and documentation.",
        },
      ],
    },
    {
      type: "prose",
      heading: "What does not migrate cleanly from SharePoint Server",
      paragraphs: [
        "Customizations are the main risk in any SharePoint Server migration. Content moves well. Code and legacy features need replacement.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Workflows and InfoPath forms",
      paragraphs: [
        "Microsoft retired SharePoint 2013 workflows in SharePoint Online starting April 2, 2026, according to its Message Center notice MC542767, and recommends Power Automate instead. Workflows built in SharePoint Designer or InfoPath forms need to be rebuilt as Power Automate flows or Power Apps forms. MP-365 lists each one during the scan and rebuilds the ones that still matter.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Farm solutions and custom code",
      paragraphs: [
        "Farm solutions that run full-trust code on your servers cannot run in SharePoint Online. MP-365 reviews what each one does and replaces it with a modern equivalent, such as a standard web part, a Power Automate flow or a retired feature nobody needs.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Classic pages, permissions and subsites",
      paragraphs: [
        "Classic pages work, but they miss modern features, so MP-365 rebuilds key pages as modern pages. Permissions carry over cleanly only when on-premises accounts match accounts in Microsoft Entra ID, so identity mapping is checked before the first copy. Deep subsite trees are flattened into sites and hubs.",
      ],
    },
    {
      type: "list",
      heading: "What you get from MP-365",
      items: [
        "**Assessment report:** sites, sizes, versions, workflows and custom code, each with a move, rebuild or retire decision.",
        "**Migration plan:** waves, owners, a communication note for each group and a rollback step for every wave.",
        "**Target design:** the new site and hub structure with the permission model.",
        "**Rebuilt workflows and forms:** Power Automate flows and Power Apps forms for the ones you keep.",
        "**Migration logs:** a record of what moved, what was skipped and why.",
        "**Cutover support and link cleanup:** redirected or updated links in key documents and navigation.",
        "**Hand-off pack:** structure, permissions and owner guidance for your administrators.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft tools used in a SharePoint migration",
      headers: ["Tool", "What MP-365 uses it for"],
      rows: [
        ["SharePoint Migration Assessment Tool", "Scans SharePoint 2010, 2013 and 2016 farms and reports issues to fix before the move."],
        ["SharePoint Migration Tool", "Copies content from SharePoint Server 2010, 2013, 2016 and 2019 and from file shares to SharePoint, OneDrive and Teams."],
        ["SharePoint admin center", "Manages the new sites, hub sites, sharing settings and storage in SharePoint Online."],
        ["Power Automate and Power Apps", "Replace old SharePoint workflows and InfoPath forms."],
        ["Microsoft Entra ID", "Holds the user accounts that permissions map to after the move."],
      ],
    },
    {
      type: "prose",
      heading: "Proof: staged upgrades from SharePoint 2007 through 2016",
      paragraphs: [
        "MP-365 has upgraded SharePoint 2007, 2010, 2013 and 2016 environments to Microsoft 365 in stages for financial and manufacturing companies. Staging let each business unit move when it was ready and kept the old environment available until owners approved the new one. Client names for these projects are withheld.",
        "Read more on the [clients page](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "How much does a SharePoint migration cost?",
      paragraphs: [
        "SharePoint migration cost depends on the number of sites, the amount of content, the volume of customizations and the state of permissions. Customizations usually matter more than size. MP-365 gives a written estimate after the assessment. The [pricing page](/pricing/) explains how engagements are structured, and Microsoft licenses are separate.",
      ],
    },
    {
      type: "prose",
      heading: "When this is not the right fit",
      paragraphs: [
        "This service is not the right fit if you only need to move network drives; use [File Share to SharePoint Migration](/services/sharepoint/file-share-migration/) instead. It is also not the right fit if you want MP-365 to host or operate SharePoint servers, because MP-365 does not provide Azure infrastructure or hosting management. If your plan includes mail and OneDrive, see [Microsoft 365 Migration](/services/microsoft-365-migration/).",
      ],
    },
    {
      type: "prose",
      heading: "Related SharePoint services",
      paragraphs: [
        "Many migrations end with a new intranet. [SharePoint Intranet Development](/services/sharepoint/intranet-development/) builds one on the modern site model after the content has landed. Browse all services under [SharePoint & Intranets](/services/sharepoint/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What happens now that SharePoint 2016 and 2019 support has ended?",
      a: "Both versions keep running, but Microsoft ended support on July 14, 2026. They receive no security updates or technical help, so new vulnerabilities stay open. Staying put carries growing risk. Most organizations plan a move to SharePoint Online, or to SharePoint Server Subscription Edition if data must stay on-premises.",
    },
    {
      q: "How do you migrate SharePoint Server to SharePoint Online?",
      a: "Scan the farm, decide what moves, design the target sites, rebuild unsupported workflows, pilot one site, then migrate in waves with Microsoft's SharePoint Migration Tool. Cut over, fix links and decommission the old farm after owners sign off. MP-365 manages each step with your team.",
    },
    {
      q: "How long does a SharePoint migration take?",
      a: "Duration depends on content volume, number of sites, customizations and how fast owners approve each wave. A farm with few customizations moves faster than one with years of custom code. MP-365 gives a plan with waves and owners after the assessment, not before.",
    },
    {
      q: "Can we migrate SharePoint 2010 or 2013 straight to SharePoint Online?",
      a: "Yes. Microsoft's SharePoint Migration Tool supports SharePoint Server 2010, 2013, 2016 and 2019 as sources. Older versions such as 2007 usually move in stages first. The harder part is replacing old workflows, forms and custom code, which MP-365 identifies in the assessment.",
    },
    {
      q: "What happens to our SharePoint workflows during migration?",
      a: "Most old workflows need to be rebuilt. Microsoft retired SharePoint 2013 workflows in SharePoint Online starting April 2, 2026 and recommends Power Automate. MP-365 lists every workflow, retires the ones nobody uses, and rebuilds the rest as Power Automate flows.",
    },
    {
      q: "Do permissions carry over to SharePoint Online?",
      a: "Permissions can carry over when on-premises accounts map to Microsoft Entra ID accounts. MP-365 checks identity mapping before the first copy and also uses the move to clean up broken inheritance and old groups, so the new site starts with a model people can explain.",
    },
    {
      q: "Should we move to SharePoint Online or SharePoint Server Subscription Edition?",
      a: "Choose SharePoint Online for most organizations because Microsoft runs the platform and it works with Teams, Power Automate and Copilot. Choose Subscription Edition only when data must stay on-premises. It remains supported, but your team still patches and upgrades the servers. MP-365 recommends after the assessment.",
    },
    {
      q: "Will our URLs and links change?",
      a: "Yes. Sites in SharePoint Online get new addresses, so links in documents, emails and bookmarks pointing to the old farm break unless they are updated. MP-365 identifies key links during planning, updates them where possible, and keeps old sites read-only until the new ones are approved.",
    },
    {
      q: "Can users keep working during the migration?",
      a: "Yes. MP-365 migrates in waves, so each group keeps working on the old site until its wave. Repeated passes pick up changes made during the move, and a short freeze on edits applies only at cutover. Owners are told the date in advance.",
    },
    {
      q: "Does MP-365 host or manage our SharePoint servers?",
      a: "No. MP-365 does not provide Azure infrastructure, hosting management or managed IT services. It plans and carries out the migration, hands off documentation, and can return in support mode when something needs fixing. SharePoint Online is run by Microsoft.",
    },
  ],
  closing:
    "SharePoint migration consulting helps you leave an unsupported farm with a plan, not a rush. MP-365 assesses what you have, rebuilds what will not move, and cuts over in stages so your teams keep working.",
  cta: {
    heading: "Plan your SharePoint migration with MP-365",
    body: "Share which SharePoint Server version you run and what is customized. We will tell you what is involved and in what order to move.",
    text: "Book a discovery call",
  },
};

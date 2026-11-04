import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/sharepoint/",
  intro:
    "SharePoint consulting services from MP-365 cover five jobs: building an intranet, upgrading or migrating SharePoint Server, moving file shares into SharePoint Online, running supplier and partner portals, and fixing site structure and search. MP-365 is a Microsoft Solutions Partner that works with mid-size and enterprise teams in the United States. Pick the service that matches the problem you have today, then use the guide below to confirm.",
  blocks: [
    {
      type: "prose",
      heading: "What SharePoint consulting services include",
      paragraphs: [
        "SharePoint consulting services cover the design, build, migration and cleanup of SharePoint sites so that people can find, share and control company information. The work sits between Microsoft 365 administration and day-to-day business use. It answers questions such as where files should live, who should see them, and how staff will find them.",
        "MP-365 groups this work into five services. Each one has its own page with steps, deliverables and limits. The table below shows what each service is for and what changes once it is done.",
      ],
    },
    {
      type: "table",
      heading: "The five SharePoint services compared",
      headers: ["Service", "Best for", "Typical outcome"],
      rows: [
        [
          "[SharePoint Intranet Development](/services/sharepoint/intranet-development/)",
          "Companies with no intranet, or one that staff avoid",
          "One company portal with news, policies, department sites, clear owners and working search",
        ],
        [
          "[SharePoint Server Upgrade & Migration](/services/sharepoint/migration/)",
          "Teams still on SharePoint Server 2010, 2013, 2016 or 2019",
          "Content, sites and workflows moved to SharePoint Online, with a plan for customizations",
        ],
        [
          "[File Share to SharePoint Migration](/services/sharepoint/file-share-migration/)",
          "Teams with network drives full of old folders and unclear permissions",
          "Files in organized libraries with metadata, version history and permissions people understand",
        ],
        [
          "[SharePoint Supplier & Partner Portals](/services/sharepoint/supplier-partner-portals/)",
          "Teams that swap files with vendors, subcontractors and partners by email",
          "A controlled extranet where each outside company sees only its own content",
        ],
        [
          "[SharePoint Search & Information Architecture](/services/sharepoint/information-architecture/)",
          "Organizations where staff say they cannot find anything in SharePoint",
          "A site structure, metadata model and search setup that surface the right file in seconds",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Which SharePoint service to start with",
      paragraphs: [
        "Start with the service that removes the most urgent risk. For most companies that is either an unsupported SharePoint Server farm or a file share nobody trusts. An intranet, a portal or a search fix can follow once the content lives in the right place.",
        "If you are not sure, book a discovery call. MP-365 will ask what is broken, who is affected and what already exists, then recommend one starting point instead of a full program.",
      ],
    },
    {
      type: "list",
      heading: "Your situation and the service that fits",
      items: [
        "**You run SharePoint Server 2016 or 2019:** start with [SharePoint Server Upgrade & Migration](/services/sharepoint/migration/), because Microsoft support ended on July 14, 2026.",
        "**You store files on Windows file servers or NAS drives:** start with moving the [file share to SharePoint Online](/services/sharepoint/file-share-migration/) before you design anything else.",
        "**Staff ask where things are posted:** start with the [intranet](/services/sharepoint/intranet-development/), or with the information architecture work if the intranet already exists.",
        "**You email files to suppliers and partners:** start with a [vendor and partner extranet](/services/sharepoint/supplier-partner-portals/).",
        "**Search returns nothing useful:** start with [information architecture and search](/services/sharepoint/information-architecture/), because moving more content in will not fix it.",
      ],
    },
    {
      type: "prose",
      heading: "When should a company move to SharePoint Online?",
      paragraphs: [
        "A company should move to SharePoint Online when its on-premises SharePoint can no longer be supported or patched, or when staff need to reach files without a VPN. Microsoft ended support for SharePoint Server 2016 and 2019 on July 14, 2026, so those farms no longer receive security updates.",
        "SharePoint Online also connects directly to Teams, Power Automate and Microsoft 365 Copilot. Those tools respect the permissions you set in SharePoint, so clean permissions matter more once Copilot is in use. The [Microsoft 365 Copilot readiness](/services/copilot/readiness/) service covers that side.",
        "Staying on-premises is a valid choice for some organizations. Microsoft still ships updates for SharePoint Server Subscription Edition, and its documentation lists version 26H2 as of October 2026. MP-365 will tell you if that path fits better than the cloud.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 approaches SharePoint consulting",
      steps: [
        {
          name: "Listen to the business problem",
          description:
            "Hold one focused session with the people who feel the pain. Capture what they cannot do today, not a list of features.",
        },
        {
          name: "Inventory what exists",
          description:
            "Scan current sites, libraries, workflows, permissions and customizations. Mark what to keep, fix, merge or retire.",
        },
        {
          name: "Design structure before building",
          description:
            "Decide site types, hub sites, content types, metadata and permission groups on paper first. Changing a diagram is cheaper than changing a live site.",
        },
        {
          name: "Build a working version fast",
          description:
            "Stand up a small, real slice, such as the home page and one department site, so your team reacts to something they can click.",
        },
        {
          name: "Validate with your team",
          description:
            "Let the people who will use it test it. Feedback changes the design before the larger build or migration begins.",
        },
        {
          name: "Migrate or launch in stages",
          description:
            "Move content and open sites in waves, with a rollback plan for each wave and a check with the site owner after it.",
        },
        {
          name: "Hand off with documentation",
          description:
            "Document the structure, train the owners and give your administrators what they need to run it without MP-365.",
        },
      ],
    },
    {
      type: "list",
      heading: "What to look for in a SharePoint consulting firm",
      items: [
        "**Named people doing the work:** ask who builds, who migrates and who you talk to. A small senior team answers faster than layers of account management.",
        "**Structure before screens:** a good SharePoint expert asks about content types, owners and permissions before talking about web parts and colors.",
        "**A written scope with exclusions:** the proposal should say what is not included, such as custom code, licenses or hosting.",
        "**A plan for hand-off:** you should be able to run the result yourself. Ask for documentation and owner training.",
        "**Honest limits:** a firm that never says no to a request probably has not shipped many SharePoint projects.",
      ],
    },
    {
      type: "prose",
      heading: "What SharePoint consulting services cost",
      paragraphs: [
        "SharePoint consulting cost depends on scope, not on a fixed rate card. The main drivers are the number of sites, the volume and condition of the content, how many source systems feed the project, how complex the permissions are, and how much time your own team can give.",
        "Microsoft licenses are paid separately to Microsoft or your license provider, and MP-365 does not resell them. Most Microsoft 365 business and enterprise plans already include SharePoint. See the [MP-365 pricing page](/pricing/) for how engagements are structured.",
      ],
    },
    {
      type: "prose",
      heading: "Proof from SharePoint projects",
      paragraphs: [
        "At Carlisle Construction, MP-365 stabilized Dynamics 365 and SharePoint operations without a long discovery phase. The team started on the live problems first. See [client results](/clients/) for more.",
        "MP-365 has also upgraded SharePoint 2007, 2010, 2013 and 2016 environments to Microsoft 365 in stages for financial and manufacturing companies. Another project moved file shares holding hundreds of thousands of files into organized SharePoint libraries with metadata, version control and workflows.",
      ],
    },
    {
      type: "prose",
      heading: "How SharePoint connects to the rest of Microsoft 365",
      paragraphs: [
        "SharePoint is the document layer under Teams, OneDrive and many Power Platform apps, so its structure affects all of them. Approval flows and reminders on top of a library are built with [Power Automate](/services/power-platform/power-automate/). Sensitivity labels and permission models are covered in [Microsoft Purview and permission models](/services/data-governance/microsoft-purview/).",
        "If the larger goal is moving mail, OneDrive and sites together, the [Microsoft 365 migration](/services/microsoft-365-migration/) category covers the full move. Dynamics 365 users who store customer documents in SharePoint can see [Dynamics 365 integration services](/services/dynamics-365-crm/integration-services/).",
      ],
    },
    {
      type: "prose",
      heading: "When SharePoint consulting is not the right fit",
      paragraphs: [
        "SharePoint consulting is the wrong choice when you need custom software, a branded public website or a full intranet product with its own support desk. MP-365 builds with SharePoint's own features, Power Automate and Power Apps. It does not offer custom software development, web design agency work or managed IT support.",
        "If your real need is a customer-facing portal where outside users sign in and work with business data, [Power Pages](/services/power-platform/power-pages/) is usually a better fit than a SharePoint extranet.",
      ],
    },
  ],
  faqs: [
    {
      q: "What does SharePoint consulting include?",
      a: "SharePoint consulting includes designing site structure, building intranets and portals, migrating content from SharePoint Server or file shares, setting permissions, and fixing metadata and search. MP-365 covers these five areas and hands each project off with documentation so your administrators can run it afterward.",
    },
    {
      q: "How much does SharePoint consulting cost?",
      a: "SharePoint consulting cost depends on the number of sites, the amount and condition of content, the systems involved and how much your team can help. MP-365 does not publish fixed prices because scope varies so much. The pricing page explains the engagement models, and a discovery call produces a written estimate.",
    },
    {
      q: "When should a company move to SharePoint Online?",
      a: "Move to SharePoint Online when your on-premises farm is out of support, when staff need access without a VPN, or when you want Teams, Power Automate and Copilot to work with the same files. SharePoint Server 2016 and 2019 support ended on July 14, 2026.",
    },
    {
      q: "Which SharePoint service should we start with?",
      a: "Start with the problem that carries the most risk. An unsupported SharePoint Server farm or an untrusted file share usually comes first. Intranets, portals and search fixes work better once content sits in the right place. A discovery call will confirm the order for your situation.",
    },
    {
      q: "What is the difference between a SharePoint expert and a SharePoint developer?",
      a: "A SharePoint expert focuses on structure, permissions, migration and configuration. A developer writes custom code. Most SharePoint Online projects need the first skill far more than the second. MP-365 works with built-in features, Power Automate and Power Apps, and does not offer custom software development.",
    },
    {
      q: "Does MP-365 support SharePoint Server 2016 and 2019 after July 14, 2026?",
      a: "MP-365 helps companies move off SharePoint Server 2016 and 2019 rather than keep them running. Microsoft ended support for both on July 14, 2026, so they no longer get security fixes. The [migration service](/services/sharepoint/migration/) covers assessment, customizations and the move to SharePoint Online.",
    },
    {
      q: "Can SharePoint be shared safely with vendors and partners?",
      a: "Yes. SharePoint Online supports external sharing at the organization and site level, and the stricter setting always wins. A separate site per partner or program keeps one company's files away from another. MP-365 designs this under [supplier and partner portals](/services/sharepoint/supplier-partner-portals/).",
    },
    {
      q: "Does MP-365 resell Microsoft licenses?",
      a: "No. MP-365 does not resell Microsoft licenses or manage subscriptions. You pay Microsoft or your license provider separately. Most Microsoft 365 business and enterprise plans already include SharePoint, so a consulting project usually does not require a new SharePoint purchase.",
    },
    {
      q: "Can you work on SharePoint and Dynamics 365 together?",
      a: "Yes. MP-365 is a Microsoft Solutions Partner that works on Dynamics 365 as well as SharePoint, so document storage, permissions and CRM data can be planned together. Common examples are customer documents stored in SharePoint and approvals built in Power Automate.",
    },
    {
      q: "What size of company does MP-365 work with?",
      a: "MP-365 works with mid-size and enterprise organizations in the United States, including construction, manufacturing, healthcare and government clients. It is a focused team of Microsoft specialists, not a large consulting firm with layers of management.",
    },
  ],
  closing:
    "SharePoint consulting services work best when they start with one clear problem and a structure designed before anything is built. If you are weighing an intranet, a migration, a portal or a search fix, MP-365 can help you choose the first step.",
  cta: {
    heading: "Talk to MP-365 about your SharePoint project",
    body: "Tell us what is broken or missing in SharePoint today. We will recommend one starting point and explain what it involves.",
    text: "Book a discovery call",
  },
};

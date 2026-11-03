import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/sharepoint/intranet-development/",
  intro:
    "SharePoint intranet services from MP-365 design and build a company intranet on SharePoint Online, with clear ownership, working search and no VPN needed. MP-365 is a Microsoft Solutions Partner that builds intranets for mid-size and enterprise teams replacing an old SharePoint Server site, a shared drive or a portal nobody opens.",
  atAGlance: {
    bestFor:
      "Mid-size and enterprise companies that need one trusted place for news, policies, department sites and tools, built on the Microsoft 365 licenses they already own.",
    includes:
      "Site architecture, hub sites, home page, news, navigation, permission groups, search setup, page templates and owner training.",
    notIncluded:
      "Custom software development, web design agency work, ERP implementation, cybersecurity services and Microsoft licenses.",
    howItStarts:
      "A discovery call about who the intranet is for and what is broken today, followed by a working prototype of the home page and one department site.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What SharePoint intranet services include",
      paragraphs: [
        "SharePoint intranet services turn a set of SharePoint sites into one company portal that staff actually use. A SharePoint intranet is not one site. It is a group of communication sites, team sites and hub sites that share navigation, search and a common look.",
        "MP-365 handles the whole path: what the intranet should do, how the sites connect, who owns each page, how permissions work, and how staff will find things. It builds with SharePoint's own features and Power Automate, so your team can keep editing it after launch.",
      ],
    },
    {
      type: "list",
      heading: "Problems a SharePoint intranet fixes",
      items: [
        "**Nobody knows where the latest policy is:** the same handbook sits in email, a shared drive and three old sites, and staff trust none of them.",
        "**News never reaches the people who need it:** announcements go out by email and get lost, especially for field and plant staff.",
        "**Everything needs a VPN:** staff outside the office cannot reach basic documents without connecting to the network first.",
        "**Content has no owner:** pages go stale because nobody is named as responsible, and updates wait for IT.",
        "**Search returns noise:** old versions, duplicates and files with no titles bury the page you need.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 delivers SharePoint intranet development",
      steps: [
        {
          name: "Define who the intranet serves",
          description:
            "Interview a few people from each audience, such as office staff, field teams and managers. Write down the top tasks they need done.",
        },
        {
          name: "Audit existing content and sites",
          description:
            "List what lives on the old intranet, shared drives and Teams. Mark each item to keep, rewrite, move or delete.",
        },
        {
          name: "Design the site structure",
          description:
            "Plan communication sites, team sites and hub sites, and decide which function gets a hub. Use flat sites and hubs, not nested subsites.",
        },
        {
          name: "Set the permission model",
          description:
            "Create a small number of permission groups with named owners. Keep broad read access for the intranet itself and tighter access for sensitive sites.",
        },
        {
          name: "Build the home page and one department site",
          description:
            "Create the working slice first: navigation, news, quick links and one real department site. Your team reacts to something they can click.",
        },
        {
          name: "Test with real users",
          description:
            "Ask a mixed group to complete their top tasks. Change navigation, labels and layout based on what they struggle with.",
        },
        {
          name: "Migrate content and open sites in waves",
          description:
            "Move approved content, retire the old pages, and launch department by department so owners can learn in small groups.",
        },
        {
          name: "Train owners and hand off",
          description:
            "Teach page owners to publish and update. Document the structure, templates and governance rules for your administrators.",
        },
      ],
    },
    {
      type: "prose",
      heading: "How a SharePoint intranet is structured",
      paragraphs: [
        "A modern SharePoint intranet is built from three site types, and each has a different job. Microsoft's own intranet planning guidance names them as team sites for collaboration, communication sites for broadcasting, and hub sites for connecting related sites. MP-365 uses all three.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Communication sites for company news and policies",
      paragraphs: [
        "Communication sites suit content that a few people publish and many people read. Examples are the home page, HR policies, safety procedures and leadership updates. They are private by default and do not need a Microsoft 365 group behind them.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Team sites for departments and projects",
      paragraphs: [
        "Team sites suit groups that create and edit content together. Each team site sits behind a Microsoft 365 group, which gives the team a shared mailbox, calendar and Planner alongside the document library. They connect to Microsoft Teams when a team wants chat.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Hub sites to connect related sites",
      paragraphs: [
        "A hub site links a family of sites under shared navigation, theme and search. An HR hub, for example, can bring together benefits, recruiting and the manager portal. A site can join only one hub, but its news can roll up to the hub. Hubs do not change the permissions on the sites inside them.",
      ],
    },
    {
      type: "list",
      heading: "What you get from MP-365",
      items: [
        "**Information architecture:** a site map showing which sites exist, which hubs connect them and who owns each one.",
        "**Home page and navigation:** a configured home page, global and hub navigation, quick links and audience targeting where it helps.",
        "**Page and news templates:** reusable layouts so owners publish consistent pages without help.",
        "**Permission model:** documented groups and access levels, with owners named for every site.",
        "**Search setup:** titles, metadata and scoping so staff find policies and people quickly.",
        "**Automations:** approvals, review reminders and request forms built with Power Automate where they save time.",
        "**Governance guide and training:** a short document and a working session for site owners and administrators.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft products used in a SharePoint intranet",
      headers: ["Product", "Role in the intranet"],
      rows: [
        ["SharePoint Online", "Hosts the communication sites, team sites and hub sites. Staff reach it from any device after signing in with their work account."],
        ["Microsoft 365 groups and Microsoft Teams", "Give team sites their membership, shared mailbox and chat. Teams links back to the intranet."],
        ["Microsoft Entra ID", "Provides the work sign-in that replaces the VPN requirement for reading intranet content."],
        ["Microsoft Search", "Lets staff find pages, files and people from the SharePoint start page and the search box on each site."],
        ["[Power Automate](/services/power-platform/power-automate/)", "Runs approvals, review reminders and request forms attached to intranet libraries and lists."],
        ["Power Apps", "Adds small forms or lookups, such as an equipment request, when a list form is not enough."],
      ],
    },
    {
      type: "prose",
      heading: "How much does a SharePoint intranet cost to build?",
      paragraphs: [
        "The cost of a SharePoint intranet depends on scope, not on a flat price. SharePoint is already included in most Microsoft 365 business and enterprise plans, so the main cost is design and build effort. MP-365 does not resell licenses, and Microsoft's license fees are separate.",
        "The [pricing page](/pricing/) explains how MP-365 engagements work. A short discovery call is enough to produce a written estimate for your intranet.",
      ],
    },
    {
      type: "list",
      heading: "What drives intranet effort and timeline",
      items: [
        "**Number of audiences and sites:** one company home page is simple. Ten departments with their own sites take more design and testing.",
        "**Amount of content to migrate:** pages, documents and forms from the old intranet each need a decision.",
        "**Integration needs:** links to HR, time tracking or CRM systems add build and test effort.",
        "**Permission complexity:** restricted sites, contractors and multiple regions change the access model.",
        "**Your team's availability:** content owners who answer quickly keep the project moving.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: a modern intranet for a manufacturer",
      paragraphs: [
        "A manufacturing company needed a modern intranet to replace an older setup. MP-365 delivered one built on a clear information architecture, with a simpler security model and faster content updates. The client name is withheld.",
        "See more project summaries on the [clients page](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "When a SharePoint intranet is not the right fit",
      paragraphs: [
        "A SharePoint intranet is not the right fit if you want a packaged intranet product with built-in analytics, a vendor help desk and no configuration. Buying software suits teams with no one to own the site. It is also not the right fit if you need a public website or heavy custom coding, which MP-365 does not offer.",
        "If your main need is storing and organizing files, start with [moving file shares to SharePoint Online](/services/sharepoint/file-share-migration/). If you are still on SharePoint Server, the [upgrade and migration service](/services/sharepoint/migration/) comes first.",
      ],
    },
    {
      type: "prose",
      heading: "Related SharePoint services",
      paragraphs: [
        "An intranet depends on good structure and search. If staff already complain that nothing can be found, [information architecture and search](/services/sharepoint/information-architecture/) fixes the base. If suppliers or partners also need access, a separate [extranet for vendors](/services/sharepoint/supplier-partner-portals/) keeps their content apart from internal pages. All of these sit under [SharePoint & Intranets](/services/sharepoint/).",
      ],
    },
  ],
  faqs: [
    {
      q: "How much does a SharePoint intranet cost to build?",
      a: "The cost depends on how many audiences and sites you need, how much content moves from the old intranet, which systems connect, and how much time your team gives. SharePoint is already part of most Microsoft 365 plans. MP-365 prepares a written estimate after a discovery call.",
    },
    {
      q: "How long does it take to build a SharePoint intranet?",
      a: "The timeline depends on the number of sites, the amount of content to migrate, and how quickly owners review pages. MP-365 builds a working home page and one department site first, so you see progress early, then adds departments in waves. A discovery call gives a plan specific to your scope.",
    },
    {
      q: "Should we build a SharePoint intranet or buy intranet software?",
      a: "Build on SharePoint if you already license Microsoft 365 and have owners who can maintain pages. Buy packaged software if you want built-in features and vendor support with little configuration. Software adds a license cost and a second platform. A SharePoint intranet uses what you already pay for.",
    },
    {
      q: "What is a SharePoint intranet?",
      a: "A SharePoint intranet is a company portal built from SharePoint Online sites. It combines communication sites for news and policies, team sites for departments, and hub sites that connect them with shared navigation and search. Staff open it in a browser after signing in with their work account.",
    },
    {
      q: "Do employees need a VPN to use a SharePoint Online intranet?",
      a: "No. SharePoint Online runs in Microsoft 365, so staff reach it from any device by signing in with their work account. Your organization can still add conditions, such as requiring a managed device, but a VPN is not required just to read the intranet.",
    },
    {
      q: "Is a communication site or a team site better for an intranet home page?",
      a: "A communication site is better for the home page. It is built for a few publishers and many readers, and it does not need a Microsoft 365 group. Team sites are better for departments that edit content together. Most intranets use both, connected by hub sites.",
    },
    {
      q: "Can you reuse content from our old SharePoint Server intranet?",
      a: "Yes, after review. MP-365 audits the old sites and decides what to keep, rewrite or retire. Document libraries and many pages can be moved. Classic pages and custom code usually need rebuilding as modern pages. The [migration service](/services/sharepoint/migration/) covers the server side.",
    },
    {
      q: "Who owns and updates the intranet after launch?",
      a: "Your people do. MP-365 names an owner for every site during design, trains them to publish and update pages, and documents the structure and templates. Ownership matters because intranets fail when pages go stale. MP-365 can return later for changes or fixes.",
    },
    {
      q: "Do you design the branding and visual style?",
      a: "MP-365 applies your colors, logo and layout choices using SharePoint themes, templates and page designs. It does not do web design agency work or build custom front ends. If you have brand guidelines, share them during discovery and they will guide the theme and page templates.",
    },
    {
      q: "How are permissions handled on a SharePoint intranet?",
      a: "MP-365 sets a small number of permission groups with named owners. Most intranet content is readable by everyone in the company, while sensitive sites such as HR or finance have tighter access. Hub sites do not change permissions, so each site keeps its own.",
    },
    {
      q: "Does MP-365 provide ongoing intranet support?",
      a: "MP-365 does not provide managed services or a help desk. It can return in support mode when something breaks or needs improvement, and it hands off documentation so your administrators run the intranet day to day. Engagement options are described on the pricing page.",
    },
  ],
  closing:
    "SharePoint intranet services should leave you with an intranet that people open on purpose: structured sites, named owners and search that finds the right page. MP-365 builds it on the Microsoft 365 licenses you already own and trains your team to run it.",
  cta: {
    heading: "Plan your SharePoint intranet with MP-365",
    body: "Tell us who the intranet is for and what is broken today. We will outline a first version you can react to.",
    text: "Book a discovery call",
  },
};

import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/microsoft-365-migration/",
  intro:
    "Microsoft 365 migration services move your email, files and, in a deal, your whole tenant into Microsoft 365 without stopping the business. MP-365 (Modern Partners 365), a Microsoft Solutions Partner, plans each move around how your users work, not around the tool.",
  blocks: [
    {
      type: "prose",
      heading: "What Microsoft 365 migration services include",
      paragraphs: [
        "A Microsoft 365 migration moves data and habits. The data is mailboxes, personal files, team sites and sometimes an entire tenant. The habits are how people open Outlook, find a file and share a document on Monday morning.",
        "Microsoft 365 was formerly called Office 365, and many teams still search for office 365 migration. The work is the same under either name. MP-365 groups it into three areas: [email moves to Exchange Online](/services/microsoft-365-migration/exchange-online-migration/), files moves to OneDrive and SharePoint, and tenant moves between companies.",
        "Each area has its own Microsoft tools, limits and cutover risks. A plan that treats them as one copy job misses things users notice first, such as a broken Outlook profile or a shared link that no longer opens.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft 365 migration services compared",
      headers: ["Service", "Best for", "Typical outcome", "Typical sources"],
      rows: [
        [
          "[Exchange to Microsoft 365 Migration](/services/microsoft-365-migration/exchange-online-migration/)",
          "Organizations whose mailboxes still sit on Exchange Server or another mail system",
          "Mailboxes, calendars and contacts in Exchange Online, with mail routing to the right place",
          "Exchange Server (cutover, hybrid or staged) and IMAP mail systems",
        ],
        [
          "[OneDrive Migration](/services/microsoft-365-migration/onedrive-migration/)",
          "Moving personal files and home drives into OneDrive",
          "Files in OneDrive with folder structure kept and users shown where everything went",
          "File shares, Windows known folders, another Microsoft 365 tenant",
        ],
        [
          "[SharePoint Server upgrade and migration](/services/sharepoint/migration/)",
          "Teams still running SharePoint Server 2010 to 2019",
          "Sites, libraries and permissions rebuilt in SharePoint Online",
          "SharePoint Server and SharePoint Foundation",
        ],
        [
          "[Tenant to tenant migration for mergers](/services/tenant-to-tenant-migration/)",
          "Mergers, acquisitions and divestitures",
          "Mail, files and users moved from one Microsoft 365 tenant to another",
          "A Microsoft 365 tenant",
        ],
      ],
    },
    {
      type: "list",
      heading: "How to choose where to start",
      items: [
        "**Email is still on-premises.** Start with Exchange. Mail is the workload users notice most, and it sets the identity and domain decisions for everything else.",
        "**Files sit on file servers or local PCs.** Start with OneDrive for personal files, and move shared departmental folders into SharePoint libraries.",
        "**You run SharePoint Server.** Plan the site migration first, because Microsoft ended support for SharePoint Server 2016 and 2019 on July 14, 2026.",
        "**A deal is closing.** Start with the tenant plan. The surviving tenant and the domain decision shape every other step.",
        "**You are unsure.** Book a discovery call and bring a list of your systems. MP-365 will map them to a sequence.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 approaches a Microsoft 365 migration",
      steps: [
        {
          name: "Inventory the source",
          description:
            "List mailboxes, shared mailboxes, file shares, sites, sizes and owners, so nothing is found for the first time on cutover day.",
        },
        {
          name: "Confirm licensing and identity",
          description:
            "Check that every user has the right Microsoft 365 license and that directory sync or user accounts exist where the method needs them.",
        },
        {
          name: "Pick the method per workload",
          description:
            "Choose cutover, hybrid, SharePoint Migration Tool, Migration Manager or a cross-tenant tool for each workload, and write down why.",
        },
        {
          name: "Pilot with a small group",
          description:
            "Move a few mailboxes and folders first, then check the user experience before scaling up.",
        },
        {
          name: "Migrate in batches",
          description:
            "Copy data in the background while people keep working, and report on every item that fails.",
        },
        {
          name: "Cut over in a planned window",
          description:
            "Switch mail routing, update DNS, and tell users exactly what changes on their device.",
        },
        {
          name: "Verify and hand over",
          description:
            "Confirm results with data owners, then retire the old system only after they sign off.",
        },
      ],
    },
    {
      type: "table",
      heading: "Which Microsoft tool fits which source",
      headers: ["Source", "Microsoft tool", "What it moves", "What to know"],
      rows: [
        [
          "Exchange 2010, 2013 or 2016 with fewer than 150 mailboxes",
          "Cutover or express (minimal hybrid) migration",
          "Mail, calendar items, tasks and contacts",
          "Microsoft recommends this size range for a fast move; express migration needs a one-time directory sync",
        ],
        [
          "Exchange with more than 150 mailboxes",
          "Exchange hybrid migration",
          "Mail, calendar items, tasks and contacts",
          "Moves a limited number of users at a time",
        ],
        [
          "Other IMAP mail systems",
          "IMAP migration",
          "Email only",
          "Calendars and contacts do not move",
        ],
        [
          "On-premises file shares",
          "SharePoint Migration Tool or Migration Manager",
          "Files and folders to SharePoint, OneDrive or Teams",
          "Migration Manager supports files up to 250 GB",
        ],
        [
          "Windows user folders",
          "OneDrive Known Folder Move",
          "Desktop, Documents and Pictures",
          "Controlled by policy, rolled out in stages",
        ],
        [
          "SharePoint Server 2010 to 2019",
          "SharePoint Migration Tool",
          "Sites, lists, permissions, versions and some workflows",
          "Run a scan first to find issues",
        ],
      ],
    },
    {
      type: "prose",
      heading: "What drives the cost of Microsoft 365 migration services",
      paragraphs: [
        "Cost follows the number of users, the volume of data, the number of source systems and how much cleanup the data needs. The size of the mailbox or file share matters less than the number of exceptions inside it, such as shared mailboxes, long file paths and legal holds.",
        "Microsoft license fees are separate and are paid to Microsoft or your license provider. MP-365 does not resell licenses. See [MP-365 pricing](/pricing/) for how engagements are scoped and billed.",
      ],
    },
    {
      type: "list",
      heading: "Common migration problems MP-365 plans for",
      items: [
        "**Outlook profiles.** Users can need a new profile when the primary address or tenant changes.",
        "**Shared mailboxes and delegates.** Permissions are easy to miss and users notice immediately.",
        "**Long paths and blocked names.** Files with paths over 400 characters or reserved names fail on upload.",
        "**Local PST files.** Old archives sit on laptops and need a decision, not a surprise.",
        "**Mail routing during coexistence.** Mail between migrated and unmigrated users must keep arriving.",
        "**Mobile devices.** Phones that sync mail can need to be re-added after the switch.",
      ],
    },
    {
      type: "prose",
      heading: "Why many Microsoft 365 migrations have a deadline",
      paragraphs: [
        "Microsoft ended support for Exchange Server 2016 and 2019 on October 14, 2025, and for SharePoint Server 2016 and 2019 on July 14, 2026. Servers keep running after those dates, but they no longer receive fixes. That is the reason most mid-size organizations call MP-365 for a [SharePoint Server migration](/services/sharepoint/migration/) or a mailbox move.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: staged upgrades to Microsoft 365",
      paragraphs: [
        "MP-365 has moved SharePoint environments from versions 2007, 2010, 2013 and 2016 to Microsoft 365 in stages for financial services and manufacturing organizations. Staging let each business unit move when its content was ready. See other work on the [MP-365 clients page](/clients/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What is included in a Microsoft 365 migration?",
      a: "A Microsoft 365 migration includes planning, moving the data, cutting over mail routing or access, and supporting users afterward. The data can be mailboxes, OneDrive files, SharePoint sites or a whole tenant. MP-365 scopes each workload separately, because each uses a different Microsoft method.",
    },
    {
      q: "How long does a Microsoft 365 migration take?",
      a: "It depends on mailbox sizes, file volume, network capacity and how many exceptions your data has. Microsoft also throttles mailbox moves to protect the service, so speed varies. MP-365 sizes your environment first, then gives a plan with dates tied to your own data rather than a generic estimate.",
    },
    {
      q: "How much do Microsoft 365 migration services cost?",
      a: "Cost depends on user count, data volume, number of source systems and data cleanup. Microsoft license fees are separate and set by Microsoft. MP-365 does not resell licenses. The [pricing page](/pricing/) explains engagement models and the factors that move a quote up or down.",
    },
    {
      q: "Is an Office 365 migration different from a Microsoft 365 migration?",
      a: "No. Microsoft renamed Office 365 to Microsoft 365, so the terms describe the same service. The tools are the same, including Exchange Online, OneDrive and SharePoint Online. Some older documents still say Office 365, which is why both phrases appear in searches.",
    },
    {
      q: "Will users lose email or files during the migration?",
      a: "No, not when the migration is planned correctly. Data copies in the background while users keep working, and the final switch is short. What users do notice is a changed Outlook profile, a new file location or an updated sign-in, so MP-365 sends clear instructions before cutover.",
    },
    {
      q: "Do we need an Office 365 migration consultant, or can our IT team do it?",
      a: "Your IT team can do a small move with Microsoft's tools. Outside help pays off when you have many mailboxes, a hybrid Exchange environment, long file paths, a tight cutover window or a tenant move. MP-365 can lead the project or support your team on the hard parts.",
    },
    {
      q: "Can Exchange, OneDrive and SharePoint be migrated in one project?",
      a: "Yes. MP-365 sequences them in one plan, usually mail first because it affects identity and domains, then files. Each workload still uses its own method and has its own limits, so the plan lists them separately. Moves between companies follow the [tenant migration](/services/tenant-to-tenant-migration/) path.",
    },
    {
      q: "What should we do before a migration starts?",
      a: "Name an owner, list your systems and gather admin access. Clean up what you do not want to move, such as unused mailboxes and old shares. Check that licenses are available. A short discovery call with MP-365 turns this into a checklist for your environment.",
    },
    {
      q: "What happens to our old servers after the migration?",
      a: "Keep them read-only until data owners confirm the results, then retire them. In a hybrid Exchange setup, decommissioning needs planning because mail flow and directory sync may still depend on the old servers. MP-365 documents what the old servers did before anyone turns them off.",
    },
    {
      q: "Does MP-365 migrate between two Microsoft 365 tenants?",
      a: "Yes. MP-365 handles tenant moves for mergers, acquisitions and divestitures, including mailboxes, OneDrive, SharePoint content and domain cutover. Microsoft's own tools have limits, especially for Teams. The [cross-tenant migration page](/services/tenant-to-tenant-migration/mailbox-teams-files/) explains what moves and what does not.",
    },
  ],
  closing:
    "Good Microsoft 365 migration services keep your users working, report every failure and leave your team in control of the new environment. MP-365 starts with an inventory of what you have, then sequences email, files and tenant moves around your business calendar.",
  cta: {
    heading: "Plan your Microsoft 365 migration",
    body: "Tell MP-365 what you are moving and from where. You will get a clear view of the method, the risks and the order of work.",
    text: "Book a discovery call",
  },
};

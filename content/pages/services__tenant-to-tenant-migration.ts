import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/tenant-to-tenant-migration/",
  intro:
    "Tenant to tenant migration moves email, files and users from one Microsoft 365 tenant to another when companies merge, one buys another or a division is sold. MP-365 plans the move around what Microsoft's tools can and cannot carry, so IT leaders see the gaps before they commit to a deal timeline.",
  blocks: [
    {
      type: "prose",
      heading: "What is a tenant to tenant migration?",
      paragraphs: [
        "A tenant to tenant migration moves user data from one organization's Microsoft 365 tenant into another's. A tenant is the Microsoft 365 environment your company owns, with its own users, domains, mailboxes and SharePoint sites. People also search for an Office 365 tenant migration, and Microsoft 365 is the current name for the same service.",
        "Microsoft describes the work as moving content, not identities. You create and configure the users in the target tenant, and the tools move the data to match them. That is why a good plan starts with the user list, not the mailbox copy.",
        "The work sits inside a wider M&A IT effort, and it has one fixed rule: each tenant owns its own domains, so email addresses and sign-ins change at some point in the move.",
      ],
    },
    {
      type: "table",
      heading: "What Microsoft's cross-tenant tools do and do not support",
      headers: ["Tool", "What it moves", "What it does not move", "What to know"],
      rows: [
        [
          "Cross-tenant mailbox migration",
          "Email, contacts, calendar, tasks and notes, plus Recoverable Items and voicemail",
          "Teams chat folder content, Teams meeting links, signatures, Microsoft 365 Groups, mailboxes on hold",
          "The source mailbox is deleted after a successful move",
        ],
        [
          "Cross-tenant OneDrive migration",
          "User OneDrive accounts, with a redirect left at the old location",
          "Accounts on hold, or above 5 TB or 1 million items",
          "One-time move with no incremental passes; not supported for GCC, GCC High or DoD",
        ],
        [
          "Cross-tenant SharePoint migration",
          "Group-connected, modern, classic and communication sites, including the files of Teams-connected sites",
          "Teams content and channels, 2010 and 2013 workflows, apps, Power Apps and automations",
          "Licensed per 100 GB, and Microsoft's page says Enterprise Agreement customers only",
        ],
        [
          "Migration Orchestrator",
          "Mailboxes, OneDrive, Teams chats and Teams meetings in one batch",
          "Identities, Teams and channels, SharePoint sites",
          "Batches are limited to 100 users; migrations are not subject to SLAs",
        ],
        [
          "FastTrack cross-tenant service",
          "Exchange Online, SharePoint and OneDrive",
          "Teams, Microsoft 365 Groups and Planner",
          "Invitation only, with a minimum of 150 licenses; US Government and Education not supported",
        ],
        [
          "Microsoft Entra cross-tenant synchronization",
          "Nothing; it creates guest-style users for access",
          "All data",
          "Microsoft says it is not a migration tool, because the source tenant is still needed to sign in",
        ],
      ],
    },
    {
      type: "prose",
      heading: "What the Microsoft tool limits mean for a deal",
      paragraphs: [
        "As of November 2026, Microsoft's own cross-tenant tools cover mailboxes, OneDrive accounts and SharePoint site content. They do not move Teams channels, and the mailbox tool does not move Microsoft 365 Groups. A deal that depends on Teams history, group structures or Planner boards needs a separate plan.",
        "MP-365 lists those gaps during scoping and tells you which items to rebuild, which to archive and which to leave behind. Where a Microsoft tool does not cover a workload, MP-365 says so before you commit rather than during cutover.",
      ],
    },
    {
      type: "prose",
      heading: "Merger, acquisition or divestiture: how the plan differs",
      paragraphs: [
        "The deal type decides which tenant survives and which way data flows. Microsoft describes three migration models: a single-event cutover, a phased move in batches, and a tenant move or split for divestitures.",
      ],
    },
    {
      type: "prose",
      heading: "Acquisition: move into the buyer's tenant",
      level: 3,
      paragraphs: [
        "In an acquisition, the acquired company's users, mail and files usually move into the buyer's tenant. The buyer's IT sets the naming, license and policy standards. Plan for the acquired company's domains, which must leave their old tenant before the buyer's tenant can use them.",
      ],
    },
    {
      type: "prose",
      heading: "Merger: choose the surviving tenant",
      level: 3,
      paragraphs: [
        "In a merger of equals, pick the surviving tenant on facts: user count, licenses, data volume, policies and compliance posture. The other tenant moves in. Until the cutover, the two sides run side by side, which is covered by [tenant coexistence and domain cutover](/services/tenant-to-tenant-migration/coexistence/).",
      ],
    },
    {
      type: "prose",
      heading: "Divestiture: split users out into a new tenant",
      level: 3,
      paragraphs: [
        "In a divestiture, a subset of users leaves for a new tenant while everyone else stays. The hard part is deciding which shared mailboxes, sites and groups belong to which side. MP-365 builds that ownership list first, then moves the divested users' data.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 approaches tenant to tenant migration",
      steps: [
        {
          name: "Inventory both tenants",
          description:
            "List users, domains, mailboxes, shared mailboxes, Teams, SharePoint sites, groups, licenses and any data on hold.",
        },
        {
          name: "Pick the target and the model",
          description:
            "Decide which tenant survives, then choose single-event, phased or split migration for the deal.",
        },
        {
          name: "Map what moves and what does not",
          description:
            "Match each workload to a Microsoft tool and list items that must be rebuilt, such as Teams channels and Microsoft 365 Groups.",
        },
        {
          name: "Confirm licensing",
          description:
            "Check that every migrating user has the Cross-Tenant User Data Migration add-on before any move starts.",
        },
        {
          name: "Prepare the target users",
          description:
            "Create the user objects and mail users in the target tenant with the attributes Microsoft's tools require.",
        },
        {
          name: "Set up trust and coexistence",
          description:
            "Configure cross-tenant trust, directory visibility and calendar sharing so both companies keep working.",
        },
        {
          name: "Pilot, then migrate in batches",
          description:
            "Move a pilot group, review results with their managers, then migrate mailboxes, OneDrive and sites in batches.",
        },
        {
          name: "Cut over the domain",
          description:
            "Move the email domain to the surviving tenant, update DNS, and walk users through their new sign-in.",
        },
        {
          name: "Close out the source",
          description:
            "Confirm data owners are satisfied, then retire or reduce the source tenant on an agreed schedule.",
        },
      ],
    },
    {
      type: "table",
      heading: "Tenant migration services at MP-365",
      headers: ["Service", "Best for", "Typical outcome"],
      rows: [
        [
          "[Cross-Tenant Mailbox, Teams & File Migration](/services/tenant-to-tenant-migration/mailbox-teams-files/)",
          "Moving mailboxes, Teams data and files between Microsoft 365 tenants",
          "Mail, OneDrive and SharePoint content in the target tenant, with a clear list of what was rebuilt",
        ],
        [
          "[Tenant Coexistence & Domain Cutover](/services/tenant-to-tenant-migration/coexistence/)",
          "Keeping two tenants working together until the domain moves",
          "Shared directory view, calendar sharing and a planned domain cutover",
        ],
      ],
    },
    {
      type: "list",
      heading: "What cannot move between tenants and what to do instead",
      items: [
        "**Teams channels and posts.** Microsoft's tools do not move them. Rebuild the team structure and decide what history to archive.",
        "**Microsoft 365 Groups.** The mailbox tool does not move them, so recreate groups in the target tenant.",
        "**Sensitivity labels.** Microsoft says labels are not exported, so recreate them in the target tenant.",
        "**Outlook signatures.** They are not migrated and must be recreated.",
        "**Teams meeting links.** Existing meeting URLs are invalid in the target tenant, so meetings must be recreated.",
        "**Workflows, apps and Power Apps on SharePoint sites.** Rebuild and reconnect them after the site moves.",
        "**Mailboxes and OneDrive accounts on hold.** Microsoft blocks the move, so a hold plan is part of scoping.",
      ],
    },
    {
      type: "prose",
      heading: "Licensing and cost for tenant to tenant migration",
      paragraphs: [
        "Microsoft requires a Cross-Tenant User Data Migration license for each migrating user. It is a one-time fee per user, can be assigned to either the source or target user, and covers mailbox and OneDrive migration. Microsoft says it makes no exceptions to this requirement, and migrations fail without it.",
        "MP-365 does not resell Microsoft licenses, so you buy the add-on from Microsoft or your license provider. MP-365's own fees depend on user count, data, number of domains and how many items need rebuilding. See [pricing](/pricing/) for how engagements are scoped.",
      ],
    },
    {
      type: "prose",
      heading: "How long does a tenant to tenant migration take?",
      paragraphs: [
        "The time depends on the number of users, the amount of content, the workloads selected and overall Microsoft service traffic. Microsoft states that cross-tenant migrations are not subject to SLAs, so no one can promise a fixed finish.",
        "MP-365 plans around dependencies you control: user preparation, licensing, trust setup, the pilot and the domain cutover. It then builds the schedule backward from your deal milestones, such as the day one legal entity change.",
      ],
    },
    {
      type: "prose",
      heading: "Related Microsoft 365 migration work",
      paragraphs: [
        "Not every deal needs a tenant move. If you are consolidating mail into your own tenant, see [Exchange to Microsoft 365 migration](/services/microsoft-365-migration/exchange-online-migration/). The wider [Microsoft 365 migration services](/services/microsoft-365-migration/) page covers files, mail and SharePoint outside of deals, and the [MP-365 services overview](/services/) lists everything else.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is a tenant-to-tenant migration?",
      a: "A tenant-to-tenant migration moves user data from one Microsoft 365 tenant to another, usually because of a merger, acquisition or divestiture. It covers mailboxes, OneDrive files and SharePoint content, plus a plan for domains and users. Microsoft's tools move content, so you must prepare the user accounts in the target tenant.",
    },
    {
      q: "How long does a tenant-to-tenant migration take?",
      a: "It depends on user count, data volume, the workloads you choose and Microsoft service traffic. Microsoft states that these migrations are not subject to SLAs. MP-365 builds your schedule from the preparation steps you control and the deal milestones you must meet, rather than from a generic estimate.",
    },
    {
      q: "What happens to Teams and SharePoint in a merger?",
      a: "SharePoint site content can move with Microsoft's cross-tenant SharePoint migration, but Teams channels and their posts do not move with Microsoft's tools. A Teams-connected site moves as a SharePoint site only. MP-365 rebuilds the team structure in the target tenant and helps you decide what history to archive.",
    },
    {
      q: "Does Microsoft have a built-in tool for tenant migration?",
      a: "Yes. Microsoft offers cross-tenant mailbox migration, cross-tenant OneDrive migration, cross-tenant SharePoint migration and Migration Orchestrator. They need a per-user license and prepared target users. They do not cover everything, especially Teams channels and Microsoft 365 Groups, so most projects still involve rebuilding some items.",
    },
    {
      q: "Can Teams chats move between tenants?",
      a: "Partly. Microsoft's Migration Orchestrator lists Teams chats and meetings as workloads, and it copies them rather than moving them, so duplicate threads can exist in both tenants. Teams channels are not moved. The older mailbox tool does not migrate the Teams chat folder. Check current availability with Microsoft before planning around it.",
    },
    {
      q: "What licenses do we need for a tenant migration?",
      a: "Each migrating user needs the Microsoft Cross-Tenant User Data Migration add-on, a one-time per-user fee that can be assigned to the source or target user. Users also need normal Microsoft 365 licenses in the target tenant. MP-365 does not resell licenses, so you buy through Microsoft or your provider.",
    },
    {
      q: "Can two tenants use the same domain name?",
      a: "No. Microsoft states that source and target tenant domain names must be unique for mailbox migration, and a domain can be verified in only one tenant. So users get target-tenant addresses during the move, and the domain cutover happens later. See [coexistence and domain cutover](/services/tenant-to-tenant-migration/coexistence/).",
    },
    {
      q: "Is Microsoft Entra cross-tenant synchronization a migration tool?",
      a: "No. Microsoft states that cross-tenant synchronization is not a migration tool, because the source tenant is still required for users to sign in, and data such as OneDrive and SharePoint would still need to move. It is useful for access between tenants during coexistence, not for the move itself.",
    },
    {
      q: "Can we migrate between tenants in GCC, GCC High or DoD?",
      a: "Support is limited. Microsoft says cross-tenant OneDrive migration is not supported for GCC, GCC High or DoD, cross-cloud moves are not supported, and its FastTrack service excludes US Government customers. MP-365 does not provide compliance certification, so confirm requirements with Microsoft and your compliance team early.",
    },
    {
      q: "What is the difference between coexistence and migration?",
      a: "Migration moves the data. Coexistence keeps the two companies working together before, during and after the move, with shared directory visibility, calendar sharing and mail routing. Most deals need both. MP-365 covers coexistence in its tenant coexistence and domain cutover service.",
    },
    {
      q: "Will our users keep their email addresses?",
      a: "Eventually, yes, if the domain moves to the surviving tenant. During the migration, users have target-tenant addresses because only one tenant can own a domain. At cutover, the domain is released from the source tenant and added to the target tenant, and users sign in with the final address.",
    },
  ],
  closing:
    "Tenant to tenant migration works when you know early what Microsoft's tools carry and what they leave behind. MP-365 scopes the gaps first, then runs mail, files and the domain cutover to fit your deal calendar.",
  cta: {
    heading: "Plan your tenant to tenant migration",
    body: "Tell MP-365 about the deal: which tenants, how many users and which Microsoft 365 workloads matter most. You will get a clear list of what moves and what needs rebuilding.",
    text: "Book a discovery call",
  },
};

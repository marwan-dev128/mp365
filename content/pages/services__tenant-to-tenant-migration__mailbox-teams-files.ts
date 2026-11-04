import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/tenant-to-tenant-migration/mailbox-teams-files/",
  intro:
    "Cross-tenant mailbox migration moves users' Exchange Online mailboxes from one Microsoft 365 tenant to another during a merger, acquisition or divestiture, and MP-365 pairs it with OneDrive, SharePoint and a rebuild plan for Teams. You get a clear list of what Microsoft's tools move, what they skip, and what your users will see on day one.",
  atAGlance: {
    bestFor:
      "IT teams in a merger, acquisition or divestiture who must move users between two Microsoft 365 tenants.",
    includes:
      "Scoping of mailbox, OneDrive, SharePoint and Teams moves, target user preparation, trust and endpoint setup, pilot and batch migration, day-one user guidance, and a rebuild list for items Microsoft's tools do not move.",
    notIncluded:
      "Cybersecurity services, managed IT or help desk, Microsoft license resale and ERP implementation. The Cross-Tenant User Data Migration add-on is bought from Microsoft.",
    howItStarts:
      "A discovery call about both tenants, followed by a written scope that lists what moves and what is rebuilt.",
  },
  blocks: [
    {
      type: "table",
      heading: "Cross-tenant mailbox migration: what moves and what does not",
      headers: ["Item", "Moves?", "What to know"],
      rows: [
        [
          "Email, contacts, calendar, tasks and notes",
          "Yes",
          "Microsoft moves user-visible content plus Recoverable Items (deletions, versions and purges)",
        ],
        [
          "Archive mailboxes",
          "Yes",
          "The archive GUID must exist on the target user; users with up to 12 auxiliary archives are supported",
        ],
        [
          "Shared mailboxes",
          "Yes",
          "Only store permissions are kept, so check access after the move",
        ],
        [
          "Voicemail",
          "Yes",
          "Voicemail attachments arrive in the target mailbox; they do not show in the Teams client in the target",
        ],
        [
          "Teams meetings in the calendar",
          "Moved, but links break",
          "The meeting URL is not updated, so recreate the meetings",
        ],
        [
          "Teams chat folder content",
          "No",
          "The source admin can still search and export it with a content search",
        ],
        [
          "Outlook Outbox items",
          "No",
          "The Outbox is stored locally in the Outlook client",
        ],
        [
          "Signatures",
          "No",
          "Users must recreate them",
        ],
        [
          "Microsoft 365 Groups",
          "No",
          "Recreate the groups in the target tenant",
        ],
        [
          "Mailboxes on any hold",
          "Blocked",
          "Remove or plan the hold before the move",
        ],
      ],
    },
    {
      type: "prose",
      heading: "How do you migrate mailboxes between Microsoft 365 tenants?",
      paragraphs: [
        "You prepare both tenants, create matching mail users in the target tenant, then run the move from the target tenant as migration batches. Exchange's mailbox replication service copies the mailbox, and at completion the source mailbox becomes a mail user that points to the target.",
        "Microsoft supports cross-tenant mailbox moves for cloud-only tenants, hybrid tenants or a mix of the two. Admins use Exchange Online PowerShell or the new Exchange admin center to submit batches.",
      ],
    },
    {
      type: "list",
      heading: "What must be in place before a cross-tenant mailbox move",
      items: [
        "**Licenses.** Each migrating user needs the Cross-Tenant User Data Migration add-on, or the migration fails.",
        "**A scoping group.** The source tenant needs a mail-enabled security group that limits which mailboxes may leave.",
        "**Trust.** The target tenant needs a migration application and endpoint. Both tenants need an organization relationship that allows mailbox moves.",
        "**Target mail users.** Each user must exist in the target with the source ExchangeGUID, ArchiveGUID where used, and x500 addresses copied over.",
        "**Unique domains.** The source and target tenants cannot use the same domain name during the move.",
        "**Role holders.** An Organization Administrator sets the move capability, and the Move Mailboxes role runs the batches.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 runs a cross-tenant migration",
      steps: [
        {
          name: "Scope users and workloads",
          description:
            "Agree which mailboxes, OneDrive accounts and SharePoint sites move, and which Teams items are rebuilt.",
        },
        {
          name: "Confirm licenses and holds",
          description:
            "Check the Cross-Tenant User Data Migration add-on for each user and list every mailbox or OneDrive account on hold.",
        },
        {
          name: "Set up trust between tenants",
          description:
            "Create the migration application, endpoint and organization relationships, and scope the source with a mail-enabled security group.",
        },
        {
          name: "Create the target mail users",
          description:
            "Build mail users in the target tenant with the matching GUIDs, x500 addresses and target-tenant addresses.",
        },
        {
          name: "Validate before any move",
          description:
            "Test the endpoint and run Microsoft's validation script to catch attribute mismatches on all objects at once.",
        },
        {
          name: "Pilot, then submit batches",
          description:
            "Move a pilot group, then submit larger batches early so content syncs before the agreed completion date.",
        },
        {
          name: "Complete and fix day-one issues",
          description:
            "Update on-premises mail users if you run hybrid, rebuild Outlook profiles and confirm shared mailbox access.",
        },
        {
          name: "Move files and rebuild Teams",
          description:
            "Run OneDrive and SharePoint moves, then recreate teams, channels and groups in the target tenant.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Teams migration tenant to tenant: what Microsoft supports",
      paragraphs: [
        "Microsoft supports moving Teams chats and meetings for individual users, but not Teams channels. The three parts of Teams behave differently, so MP-365 plans each one on its own.",
      ],
    },
    {
      type: "prose",
      heading: "Teams chats and meetings",
      level: 3,
      paragraphs: [
        "Microsoft's Migration Orchestrator can migrate Teams chats and meetings with mailboxes and OneDrive. It copies them, so the original content stays in the source tenant and duplicate threads can appear in both. After the move, users should use only their target identity in Teams.",
        "The standalone mailbox tool does not migrate the Teams chat folder. The source tenant administrator can still search and export that content with a content search.",
      ],
    },
    {
      type: "prose",
      heading: "Teams channels and their files",
      level: 3,
      paragraphs: [
        "Microsoft's Migration Orchestrator documentation states that Teams and channels stay in the source tenant. The cross-tenant SharePoint tool moves the SharePoint site behind a team, but not the Teams content, channels or structure.",
        "That means the files of a team can arrive in the target tenant while the team itself does not.",
      ],
    },
    {
      type: "prose",
      heading: "Rebuilding teams in the target tenant",
      level: 3,
      paragraphs: [
        "MP-365 recreates teams and channels in the target tenant from a list you approve, then connects them to the migrated sites. Microsoft requires the target Microsoft 365 Groups for group-connected sites to be precreated in a specific way, and they cannot be linked to an existing site. The order of work therefore matters.",
      ],
    },
    {
      type: "prose",
      heading: "Cross tenant SharePoint migration and user data migration",
      paragraphs: [
        "Microsoft's cross-tenant tools split into user data (mailboxes and OneDrive) and shared data (SharePoint sites). The two use different licenses and different prerequisites.",
      ],
    },
    {
      type: "prose",
      heading: "How cross tenant SharePoint migration works",
      level: 3,
      paragraphs: [
        "The cross-tenant SharePoint tool moves group-connected sites, modern sites, classic sites and communication sites, and leaves a redirect at the old location so existing links keep working. It is a one-time move with no incremental passes.",
        "Target sites must not exist before the move, source sites must be in read and write mode, and each site can hold at most 5 TB or 1 million items. Paths cannot exceed 400 characters. Workflows, apps and Power Apps must be recreated.",
      ],
    },
    {
      type: "prose",
      heading: "How cross tenant user data migration is licensed",
      level: 3,
      paragraphs: [
        "User data migration needs the Cross-Tenant User Data Migration add-on, a one-time per-user fee that can be assigned on the source or target user. As of November 2026, Microsoft's SharePoint page says shared data licenses are priced per 100 GB moved and are offered to Enterprise Agreement customers. MP-365 does not resell either license.",
      ],
    },
    {
      type: "prose",
      heading: "What users see on day one after the move",
      paragraphs: [
        "Users have to rebuild their Outlook profile with their new sign-in name and primary email address, then let Outlook resync their data. Microsoft explains that the old primary address is no longer on the mailbox, so the existing profile cannot find it. Plan the network load, because many profiles download data at once.",
        "Mail sent before the move stays replyable only if the old x500 addresses were copied to the target user. Teams in the source tenant also has limited functionality for the user, and the source mailbox and calendar are no longer reachable there. MP-365 turns these facts into a short user guide for each batch.",
      ],
    },
    {
      type: "prose",
      heading: "When cross-tenant migration is not the right fit",
      paragraphs: [
        "If you only need people from two companies to share calendars and find each other, see [tenant coexistence and domain cutover](/services/tenant-to-tenant-migration/coexistence/) instead of moving data. If you are consolidating mail inside one tenant, use [Exchange to Microsoft 365 migration](/services/microsoft-365-migration/exchange-online-migration/).",
        "Microsoft also directs customers with more than 50,000 mailboxes to their account team for guidance. For the wider tenant plan, see [M&A tenant migration](/services/tenant-to-tenant-migration/), and for effort and cost, see [MP-365 pricing](/pricing/).",
      ],
    },
  ],
  faqs: [
    {
      q: "How do you migrate mailboxes between Microsoft 365 tenants?",
      a: "Prepare both tenants with a migration application, endpoint and organization relationship, create matching mail users in the target tenant, then submit migration batches from the target. The source mailbox becomes a mail user that points to the target. Each migrating user needs the Cross-Tenant User Data Migration license.",
    },
    {
      q: "Can Teams chats move between tenants?",
      a: "Partly. Microsoft's Migration Orchestrator lists Teams chats and meetings as workloads and copies them, so duplicates can exist in both tenants. The standalone mailbox tool does not migrate the Teams chat folder. Teams channels do not move with Microsoft's tools. Confirm current availability with Microsoft before you build the plan around it.",
    },
    {
      q: "What cannot be migrated between tenants?",
      a: "Microsoft's mailbox tool does not move Teams chat folder content, Outbox items, signatures, Microsoft 365 Groups or mailboxes on hold. Teams channels stay in the source tenant. SharePoint workflows, apps and Power Apps must be recreated, and sensitivity labels are not exported. MP-365 lists each item in your scope.",
    },
    {
      q: "Can I migrate SharePoint sites between tenants?",
      a: "Yes. Microsoft's cross-tenant SharePoint migration moves site content, leaves a redirect behind and supports sites up to 5 TB or 1 million items. Target sites must not exist beforehand, and Microsoft's page states that licenses are offered to Enterprise Agreement customers as of November 2026. The move cannot run incrementally.",
    },
    {
      q: "How many mailboxes can go in one batch?",
      a: "Microsoft advises no more than 2,000 mailboxes per batch for the standard mailbox tool, and Migration Orchestrator batches are limited to 100 users. Submitting batches early lets content sync with no impact on users until completion. For over 50,000 mailboxes, Microsoft points customers to their account team.",
    },
    {
      q: "What happens to a mailbox on legal hold?",
      a: "Microsoft blocks the move for any mailbox on any type of hold. You need to plan for these users before scoping ends, either by removing the hold under your legal team's direction or by choosing another approach. OneDrive accounts with a hold policy are blocked the same way.",
    },
    {
      q: "Do users need to rebuild their Outlook profile?",
      a: "Yes, for the first sign-in after the move. The old primary email address no longer exists on the target mailbox, so Outlook cannot find it. Users create a profile with the new sign-in name and address, then Outlook resyncs the mailbox. MP-365 provides a step-by-step guide for each batch.",
    },
    {
      q: "Do shared mailboxes move and keep working?",
      a: "Yes, shared mailboxes move, but only the store permissions are kept. Check full access and send-as rights after the move, and confirm that the people who need them have migrated. MP-365 includes shared mailboxes in the access review so no team loses its inbox on cutover day.",
    },
    {
      q: "Are Microsoft 365 Groups migrated across tenants?",
      a: "No. Microsoft states that the cross-tenant mailbox feature does not support migrating Microsoft 365 Groups. You recreate them in the target tenant, and group-connected SharePoint sites need their target groups precreated in a specific way. MP-365 builds the group list with you before any site moves.",
    },
    {
      q: "Can the source admin still access a mailbox after it moves?",
      a: "No. Microsoft deletes the source mailbox after a successful move, so it is not available, discoverable or accessible in the source tenant, and eDiscovery there stops working. If the source needs a copy, copy the content to another mailbox before the move. MP-365 flags this during scoping.",
    },
  ],
  closing:
    "Cross-tenant mailbox migration is predictable when you know its limits before the first batch. MP-365 prepares both tenants, moves the data Microsoft's tools support, and gives your users a plain guide for the parts that change.",
  cta: {
    heading: "Plan your cross-tenant migration",
    body: "Share the number of users, the workloads in scope and any holds. MP-365 will return a list of what moves and what is rebuilt.",
    text: "Book a discovery call",
  },
};

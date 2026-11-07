import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/microsoft-365-migration/exchange-online-migration/",
  intro:
    "Exchange Online migration services move your mailboxes from Exchange Server or another mail system into Microsoft 365, using a cutover, express or hybrid plan chosen for your size and risk. MP-365 runs the project for IT leaders who need email to keep working while it happens.",
  atAGlance: {
    bestFor:
      "Organizations moving mailboxes from Exchange Server, or another mail system, to Exchange Online in Microsoft 365.",
    includes:
      "Method selection, readiness checks, domain verification, directory sync and licensing, pilot and batch mailbox moves, mail flow and DNS cutover, Outlook and phone guidance, and decommissioning guidance.",
    notIncluded:
      "Help desk or managed IT, Microsoft license resale, cybersecurity services and ERP implementation.",
    howItStarts:
      "A discovery call about your Exchange version, mailbox count and domains, followed by a written scope.",
  },
  blocks: [
    {
      type: "table",
      heading: "Exchange Online migration: which method fits",
      headers: ["Method", "Source", "Fits when", "Watch for"],
      rows: [
        [
          "Cutover",
          "Exchange Server",
          "You have fewer than 150 mailboxes and want to move them in one short window",
          "Microsoft supports up to 2,000 mailboxes but calls 150 or fewer more reasonable; by default 20 mailboxes migrate at once",
        ],
        [
          "Express (minimal hybrid)",
          "Exchange 2010, 2013 or 2016",
          "You have a small number of mailboxes and no plan to keep directory sync running",
          "Directory sync runs once and then stops, so you manage users in the cloud afterward",
        ],
        [
          "Full hybrid",
          "Exchange 2010 or later",
          "You have more than 150 mailboxes, or users must live on both sides for a while",
          "Needs directory sync and the Hybrid Configuration Wizard, so setup takes more care",
        ],
        [
          "Staged",
          "Exchange 2003 or 2007",
          "You have an older Exchange organization with more than 150 mailboxes",
          "Needs directory sync, and users move in groups you define",
        ],
        [
          "IMAP",
          "Other email systems, or Exchange 2000 and earlier",
          "The source supports IMAP and you only need mail",
          "Moves email only, not calendars, tasks or contacts",
        ],
      ],
    },
    {
      type: "list",
      heading: "Problems an Exchange Online migration solves",
      items: [
        "**Unsupported servers.** Microsoft ended support for Exchange Server 2016 and 2019 on October 14, 2025, so the server no longer gets fixes.",
        "**Server upkeep.** Patching, certificates and storage on an on-premises mail server cost your team time every month.",
        "**Mailbox limits.** Users hit quotas and keep PST files on laptops that nobody backs up.",
        "**Mobile and remote access.** Staff outside the office depend on VPN or published servers to reach mail.",
        "**A deal or reorganization.** A new company structure needs mail in a tenant you can manage.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 runs an Exchange Online migration",
      steps: [
        {
          name: "Inventory the mail environment",
          description:
            "Record the Exchange version, mailbox count and sizes, shared and resource mailboxes, public folders, journaling and any third-party archive.",
        },
        {
          name: "Verify your domains",
          description:
            "Add each email domain to Microsoft 365 and prove ownership with a DNS TXT record before any mailbox moves.",
        },
        {
          name: "Choose the method",
          description:
            "Match cutover, express hybrid, full hybrid, staged or IMAP to your size, Exchange version and timeline, and document the reason.",
        },
        {
          name: "Prepare identity and licenses",
          description:
            "Set up Microsoft Entra Connect where the method needs it and assign Exchange Online licenses to every user who will move.",
        },
        {
          name: "Configure coexistence",
          description:
            "Run the Hybrid Configuration Wizard or create the migration endpoint so mail flows between old and new mailboxes.",
        },
        {
          name: "Pilot with test users",
          description:
            "Move a few mailboxes first and check Outlook, mobile and shared mailbox access with the people who use them.",
        },
        {
          name: "Migrate in batches",
          description:
            "Copy mailbox data in the background, watch failures and skipped items, and complete batches in the window you agreed.",
        },
        {
          name: "Cut over mail routing",
          description:
            "Point the MX record and other mail DNS records to Microsoft 365 and confirm inbound and outbound mail.",
        },
        {
          name: "Support users and decommission",
          description:
            "Handle profile and device issues, then retire Exchange servers only after you confirm nothing still depends on them.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Hybrid Exchange migration explained",
      paragraphs: [
        "A hybrid Exchange migration connects your on-premises Exchange organization to Exchange Online so mailboxes can move a few at a time while both sides keep working. Microsoft calls the setup tool the Hybrid Configuration Wizard.",
      ],
    },
    {
      type: "prose",
      heading: "When minimal hybrid is enough",
      level: 3,
      paragraphs: [
        "Minimal hybrid, also called express migration, suits organizations running Exchange 2010, 2013 or 2016 that plan to move everyone in a short period. It runs directory sync once, then turns it off, so you manage users in Microsoft 365 afterward.",
      ],
    },
    {
      type: "prose",
      heading: "When full hybrid is worth the setup",
      level: 3,
      paragraphs: [
        "Full hybrid fits larger organizations that move users in groups, or that need on-premises and cloud mailboxes to coexist for a long time. It keeps directory sync running, which adds setup work but gives you control over who moves and when.",
      ],
    },
    {
      type: "prose",
      heading: "How to migrate Exchange to Office 365 without disruption",
      paragraphs: [
        "Disruption comes from three places: mail routing, Outlook profiles and mobile devices. MP-365 plans each one before the first mailbox moves. Mail routing stays correct during coexistence, Outlook is tested on a pilot group, and phones get written instructions.",
        "Microsoft also throttles mailbox moves to protect the service, so copy speed varies. MP-365 starts copying early and keeps the final switch for a planned window, so a slow day for Microsoft's service does not move your cutover.",
      ],
    },
    {
      type: "prose",
      heading: "Will users lose email during the migration?",
      paragraphs: [
        "No, not with a planned migration. Mail keeps arriving at either the old or the new mailbox while data copies in the background, and the final switch for each user is short.",
        "What users notice is smaller: Outlook may prompt a restart or need a profile refresh, and phones may need to be re-added. MP-365 sends users clear instructions before cutover and watches for support requests on the first day.",
      ],
    },
    {
      type: "list",
      heading: "What you get from the migration",
      items: [
        "**A written migration plan.** Method, order of batches, coexistence design and rollback points.",
        "**Migrated mailboxes.** User, shared and resource mailboxes in Exchange Online, with a report of any skipped items.",
        "**Working mail flow.** Inbound and outbound mail verified after the DNS change.",
        "**User guidance.** Short instructions for Outlook and phones, ready to send.",
        "**A decommissioning checklist.** What to confirm before shutting down old Exchange servers.",
      ],
    },
    {
      type: "list",
      heading: "Microsoft products and tools involved",
      items: [
        "**Exchange Online** in Microsoft 365, the destination for the mailboxes.",
        "**Exchange Server 2010 and later** or another mail system as the source.",
        "**Hybrid Configuration Wizard** to connect on-premises Exchange to Exchange Online.",
        "**Microsoft Entra Connect** to sync users from on-premises Active Directory.",
        "**Exchange admin center and Exchange Online PowerShell** to create and monitor migration batches.",
        "**Microsoft Purview Import service** for PST files that need to come into mailboxes.",
      ],
    },
    {
      type: "prose",
      heading: "What affects the effort and cost of an Exchange Online migration",
      paragraphs: [
        "Effort depends on the mailbox count, the Exchange version, whether you need coexistence, and how many shared mailboxes, public folders and PST files you have. Public folders move separately from user mailboxes, so MP-365 scopes them as their own task.",
        "Microsoft license fees are separate and MP-365 does not resell licenses. For how engagements are priced, see [MP-365 pricing](/pricing/).",
      ],
    },
    {
      type: "prose",
      heading: "When Exchange Online migration is not the right fit",
      paragraphs: [
        "This service is for moving into your own Microsoft 365 tenant. If you are moving mailboxes between two Microsoft 365 tenants after a deal, you need [tenant to tenant migration](/services/tenant-to-tenant-migration/), which uses different Microsoft tools. If your main problem is files rather than mail, start with [OneDrive migration](/services/microsoft-365-migration/onedrive-migration/).",
        "For a very small team with a handful of mailboxes, an admin can often use Microsoft's guided tools without outside help. See the wider [Microsoft 365 migration services](/services/microsoft-365-migration/) page to compare options.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do you migrate Exchange to Exchange Online?",
      a: "You verify your domain, choose a method, license users, then move mailboxes with cutover, hybrid, staged or IMAP migration. Mail data copies in the background. Finally you change the MX record to Microsoft 365 and retire the old servers. MP-365 picks the method from your Exchange version and mailbox count.",
    },
    {
      q: "What is a hybrid Exchange migration?",
      a: "A hybrid Exchange migration connects on-premises Exchange to Exchange Online so mailboxes can move in groups while both sides keep working. You set it up with the Hybrid Configuration Wizard. It suits larger organizations or any move that needs coexistence between old and new mailboxes.",
    },
    {
      q: "Will users lose email during the migration?",
      a: "No. Mail continues to arrive at the old or new mailbox while data copies in the background. The final switch for each mailbox is short. Users may need to restart Outlook or refresh their profile, and phones may need to be re-added. MP-365 sends instructions before cutover.",
    },
    {
      q: "Which Exchange Online migration method should we choose?",
      a: "Choose by mailbox count and Exchange version. Microsoft suggests cutover or express migration for fewer than 150 mailboxes on Exchange 2010 to 2016, and hybrid for more. Staged migration applies to Exchange 2003 and 2007, and IMAP covers other systems. MP-365 documents the reason in your plan.",
    },
    {
      q: "How many mailboxes can a cutover migration handle?",
      a: "Microsoft states that cutover migration supports up to 2,000 mailboxes, but calls 150 or fewer a more reasonable number because of how long creating and moving 2,000 users takes. Larger organizations are better served by a hybrid migration that moves limited groups of users at a time.",
    },
    {
      q: "Why does mailbox migration speed vary?",
      a: "Microsoft throttles discretionary workloads such as mailbox moves to protect the service for all customers. Speed also depends on mailbox size, network capacity and the migration method. By default, simple Exchange migrations move 20 mailboxes at once across all batches, so MP-365 plans around that limit.",
    },
    {
      q: "Is Exchange Server 2016 or 2019 still supported?",
      a: "No. Microsoft ended support for Exchange Server 2016 and 2019 on October 14, 2025, according to Microsoft Learn. The servers still run, but they receive no fixes. Microsoft's guidance points to Microsoft 365 or Exchange Server Subscription Edition, and MP-365 can help with the Microsoft 365 route.",
    },
    {
      q: "What happens to Outlook and phones after migration?",
      a: "Outlook usually finds the migrated mailbox after the DNS and profile settings are correct, though some users need a restart or a new profile. Phones that sync mail often need to be re-added. MP-365 tests these on a pilot group first and prepares short instructions for everyone.",
    },
    {
      q: "Can an IMAP migration move calendars and contacts?",
      a: "No. IMAP migration copies email only. Microsoft states that cutover, staged and hybrid migrations copy mail, contacts, calendar items and tasks, while IMAP does not. If you must keep calendars, MP-365 looks for another route or plans a manual calendar export.",
    },
    {
      q: "What happens to public folders and shared mailboxes?",
      a: "Shared and resource mailboxes are part of the inventory and move with the users who rely on them. Public folders move separately from user mailboxes, so MP-365 scopes them as their own task. Both need a check after migration, because permissions are easy to miss.",
    },
  ],
  closing:
    "A good Exchange Online migration keeps mail flowing, tells users exactly what changes and leaves your team with a clean Microsoft 365 setup. MP-365 chooses the method from your real mailbox count and Exchange version, then runs the pilot, batches and cutover with you.",
  cta: {
    heading: "Plan your Exchange Online migration",
    body: "Share your Exchange version, mailbox count and domains. MP-365 will recommend a method and show you the steps.",
    text: "Book a free consultation",
  },
};

import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/microsoft-365-migration/onedrive-migration/",
  intro:
    "OneDrive migration moves users' files from file shares, laptops or another Microsoft 365 tenant into each person's OneDrive, with folder structure, permissions and sharing in mind. MP-365 picks the Microsoft tool that fits your source, cleans up what would fail, and tells users where everything went.",
  atAGlance: {
    bestFor:
      "Organizations moving personal files from file shares, home drives, local PCs or another Microsoft 365 tenant into OneDrive.",
    includes:
      "Content scan, tool selection, path and file name cleanup, pilot, bulk upload, Known Folder Move policy, sharing and permission guidance, and user communication.",
    notIncluded:
      "Help desk or managed IT, Microsoft license resale, cybersecurity services and ERP implementation. Shared department folders are scoped as SharePoint work.",
    howItStarts:
      "A discovery call about where the files live today and how many users are involved, then a scan of the source.",
  },
  blocks: [
    {
      type: "list",
      heading: "Common OneDrive migration scenarios",
      items: [
        "**Home drives on a file server.** Each user's personal folder becomes that user's OneDrive.",
        "**Files on local PCs.** Desktop, Documents and Pictures move into OneDrive and keep syncing.",
        "**Files in an older SharePoint Server library.** Personal content moves to OneDrive, team content to SharePoint Online.",
        "**Users leaving another tenant.** After a merger or divestiture, OneDrive accounts move between Microsoft 365 tenants.",
      ],
    },
    {
      type: "table",
      heading: "OneDrive migration tool options compared",
      headers: ["Tool", "What it moves", "Best for", "Limits to know"],
      rows: [
        [
          "SharePoint Migration Tool",
          "Files from file shares and SharePoint Server 2010 to 2019 into SharePoint, OneDrive or Teams",
          "An admin running tasks from one machine, with saved tasks that re-run for new or changed files",
          "Run its scan first; it does not support Windows authentication when several providers are set up",
        ],
        [
          "Migration Manager",
          "File share content into SharePoint, OneDrive or Teams",
          "Many users at once, using agents on several servers and a CSV file for multiple user migrations",
          "Files up to 250 GB; the source must support SMB 2.0 or higher",
        ],
        [
          "Known Folder Move",
          "Desktop, Documents, Pictures, Screenshots and Camera Roll from Windows PCs",
          "Files that already sit on user devices",
          "Policy-driven; roll it out in stages to protect the network",
        ],
        [
          "OneDrive sync app or browser upload",
          "Small sets of files added by the user or admin",
          "A handful of users with little data",
          "The website copies up to 2,500 files at once; use the desktop app for large transfers",
        ],
        [
          "Cross-tenant OneDrive migration",
          "OneDrive accounts between two Microsoft 365 tenants",
          "Mergers, acquisitions and divestitures",
          "One-time move with no incremental passes; not supported for GCC, GCC High or DoD",
        ],
      ],
    },
    {
      type: "list",
      heading: "OneDrive migration limits to check before you start",
      items: [
        "**File size.** Microsoft supports files up to 250 GB for OneDrive and SharePoint upload, download and sync.",
        "**Path length.** The full path, including the OneDrive URL, cannot exceed 400 characters, so deep folder trees fail.",
        "**Invalid characters.** File and folder names cannot use characters such as quotation marks, colons, asterisks or question marks.",
        "**Reserved names.** Names such as CON, PRN, AUX, NUL and desktop.ini are blocked.",
        "**Sync size.** Microsoft recommends syncing no more than 300,000 items in total, so very large libraries need a plan for what stays online-only.",
        "**Account size in cross-tenant moves.** A migrated OneDrive account can hold at most 5 TB or 1 million items, and holds block the move.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 runs a OneDrive migration",
      steps: [
        {
          name: "Scan the source",
          description:
            "Find file counts, sizes, deep paths, blocked names and files over 250 GB before anything moves.",
        },
        {
          name: "Decide what goes where",
          description:
            "Send personal files to OneDrive and shared team folders to SharePoint, and agree the mapping with data owners.",
        },
        {
          name: "Clean up what would fail",
          description:
            "Shorten paths, rename blocked files and remove duplicates and abandoned folders with the owners' approval.",
        },
        {
          name: "Choose the tool",
          description:
            "Select SharePoint Migration Tool, Migration Manager, Known Folder Move or a cross-tenant move for each source.",
        },
        {
          name: "Pilot with a small group",
          description:
            "Migrate a few users, check their files and sync, and fix issues before the main run.",
        },
        {
          name: "Run the migration in waves",
          description:
            "Upload in batches that suit your network, re-run saved tasks for late changes, and review reports for failed items.",
        },
        {
          name: "Switch users over",
          description:
            "Retire the old drive mapping, turn on OneDrive sync and send each user a short guide to their new location.",
        },
      ],
    },
    {
      type: "prose",
      heading: "OneDrive migration questions MP-365 hears most",
      paragraphs: [
        "Three questions come up on almost every project: how files get to OneDrive, whether anything limits size, and what happens to links people already use. The answers depend on the source system.",
      ],
    },
    {
      type: "prose",
      heading: "How do you migrate user files to OneDrive?",
      level: 3,
      paragraphs: [
        "You scan the source, then copy files with a Microsoft migration tool into each user's OneDrive. Admins use the SharePoint Migration Tool or Migration Manager for file shares, and Known Folder Move for files already on Windows PCs.",
      ],
    },
    {
      type: "prose",
      heading: "Is there a size limit when migrating files to OneDrive?",
      level: 3,
      paragraphs: [
        "Yes. Microsoft supports individual files up to 250 GB, and a full path of no more than 400 characters. The tool reports files that break these rules, and MP-365 fixes or excludes them with the owner's agreement.",
      ],
    },
    {
      type: "prose",
      heading: "What happens to sharing links after migration?",
      level: 3,
      paragraphs: [
        "Links that point to the old file share stop working, because OneDrive is a new location with its own links. Users re-share what they need from OneDrive. In a cross-tenant move, Microsoft leaves a redirect at the old OneDrive so old links keep opening for people who still have access to the new one.",
      ],
    },
    {
      type: "prose",
      heading: "OneDrive or SharePoint: where should files go?",
      paragraphs: [
        "Personal working files belong in OneDrive, and files that a team owns belong in SharePoint. A file that sits in one person's OneDrive depends on that person staying with the company and sharing it correctly.",
        "For shared department folders, use [file share to SharePoint migration](/services/sharepoint/file-share-migration/), which maps folders to libraries with metadata and permissions. MP-365 splits a file server between the two so each file lands in the right home.",
      ],
    },
    {
      type: "list",
      heading: "What you get from the migration",
      items: [
        "**A source scan report.** File counts, sizes and every item that would fail.",
        "**A mapping document.** Which folders go to OneDrive, which go to SharePoint, and who approved it.",
        "**Migrated files.** Folder structure kept, with a report of anything excluded.",
        "**A Known Folder Move policy.** Configured and staged where it applies to your Windows devices.",
        "**User guidance.** A short guide to the new location, sync and sharing.",
      ],
    },
    {
      type: "prose",
      heading: "What affects the effort and cost of OneDrive migration",
      paragraphs: [
        "Effort follows the number of users, the volume of files, how clean the source is and how many exceptions need a decision. A tidy file share with short paths moves with little rework. An old share with deep folders, duplicates and blocked names needs cleanup first.",
        "Microsoft license fees are separate, and MP-365 does not resell licenses. [MP-365 pricing](/pricing/) explains how engagements are scoped.",
      ],
    },
    {
      type: "prose",
      heading: "When OneDrive migration is not the right fit",
      paragraphs: [
        "OneDrive is not the right home for files that many people edit together, such as project folders or department records. Those belong in SharePoint or Teams. If the real need is email, see [Exchange to Microsoft 365 migration](/services/microsoft-365-migration/exchange-online-migration/).",
        "If you are moving OneDrive accounts between companies, the work follows [tenant to tenant migration](/services/tenant-to-tenant-migration/), with Microsoft's cross-tenant tools. The wider [Microsoft 365 migration services](/services/microsoft-365-migration/) page shows how these pieces fit together.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do you migrate user files to OneDrive?",
      a: "Scan the source, clean up what would fail, then copy files into each user's OneDrive. Use the SharePoint Migration Tool or Migration Manager for file shares, and Known Folder Move for files on Windows PCs. MP-365 picks the tool per source, pilots it, then runs the migration in waves.",
    },
    {
      q: "Is there a size limit when migrating files to OneDrive?",
      a: "Yes. Microsoft supports individual files up to 250 GB, and Migration Manager supports the same size for file share migrations. Full paths are limited to 400 characters. Cross-tenant OneDrive accounts can hold at most 5 TB or 1 million items. Your scan shows what exceeds these limits.",
    },
    {
      q: "What happens to sharing links after migration?",
      a: "Links to the old file share stop working, so users re-share files from OneDrive. In a cross-tenant OneDrive move, Microsoft leaves a redirect at the old location, and shared links keep opening for people who still have access to the new one. Redirects stay until the source tenant is deprovisioned.",
    },
    {
      q: "Which OneDrive migration tool should we use?",
      a: "Use the tool that matches the source. SharePoint Migration Tool suits an admin moving file shares or SharePoint Server content. Migration Manager suits many users through agents. Known Folder Move suits files already on PCs. Cross-tenant tools handle moves between Microsoft 365 tenants. MP-365 chooses after scanning.",
    },
    {
      q: "Can Known Folder Move replace a file migration?",
      a: "Only for files on user devices. Known Folder Move redirects Desktop, Documents and Pictures to OneDrive on Windows PCs. It does not pull files from a file server. If folders are redirected to a network share, Microsoft advises using Migration Manager first, then turning on Known Folder Move.",
    },
    {
      q: "Do file permissions carry over from a file share?",
      a: "It depends on the tool settings. Migration Manager and the SharePoint Migration Tool have options to preserve file share permissions. Most personal OneDrive content needs only the owner, so MP-365 usually keeps permissions for shared folders going to SharePoint and applies owner-only access to home drives.",
    },
    {
      q: "Does version history move with the files?",
      a: "From SharePoint Server, the SharePoint Migration Tool lets you decide how much file history to keep. File shares hold no version history to carry over, so files arrive as current versions. MP-365 sets this per source and records the choice in your migration plan.",
    },
    {
      q: "What happens to Outlook PST files in user folders?",
      a: "Microsoft supports PST files in OneDrive, but they sync less often, and Known Folder Move migrates them when Group Policy is set up for it. MP-365 usually recommends importing PST content into mailboxes with the Microsoft Purview Import service instead of leaving archives in OneDrive.",
    },
    {
      q: "What happens to files with long paths or blocked names?",
      a: "They fail the upload. Microsoft limits full paths to 400 characters and blocks names such as CON, PRN, AUX, NUL and desktop.ini. The scan lists every affected item. MP-365 shortens paths and renames files with the owner's approval, or excludes them and documents why.",
    },
    {
      q: "Can OneDrive accounts move between Microsoft 365 tenants?",
      a: "Yes. Microsoft's cross-tenant OneDrive migration moves accounts during mergers and divestitures. It is a one-time move without incremental passes, needs a per-user license, and is not supported for GCC, GCC High or DoD. See [cross-tenant migration](/services/tenant-to-tenant-migration/mailbox-teams-files/) for the full picture.",
    },
  ],
  closing:
    "A OneDrive migration succeeds when files arrive where users expect them, in a structure that does not break. MP-365 scans the source, fixes what would fail and chooses the right Microsoft tool for each group of users.",
  cta: {
    heading: "Plan your OneDrive migration",
    body: "Tell MP-365 where your files live and how many users you have. You will get a scan plan and a recommended tool.",
    text: "Book a discovery call",
  },
};

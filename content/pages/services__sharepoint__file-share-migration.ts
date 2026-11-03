import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/sharepoint/file-share-migration/",
  intro:
    "Planning to migrate file share to SharePoint Online? The hard part is deciding what to keep, how to organize it and who may see it, not copying files. MP-365 is a Microsoft Solutions Partner that moves network drives and file servers into SharePoint libraries with clean structure, metadata, version history and permissions people can explain.",
  atAGlance: {
    bestFor:
      "Companies with Windows file servers or NAS drives holding years of folders, duplicate files and unclear access, and a goal of working in Microsoft 365.",
    includes:
      "Content scan and cleanup plan, library and metadata design, permission model, pilot, staged migration with Microsoft's tools, cutover and owner training.",
    notIncluded:
      "Hardware or Azure infrastructure management, cybersecurity services, custom software development, ERP implementation and Microsoft licenses.",
    howItStarts:
      "A discovery call about your shares, followed by a scan of folder depth, file types, duplicates and access, and a written plan for what goes where.",
  },
  blocks: [
    {
      type: "prose",
      heading: "How to migrate file share to SharePoint Online without moving the mess",
      paragraphs: [
        "Migrating a file share to SharePoint Online works best as a redesign with a copy step in the middle, not a lift and shift. A copied folder tree keeps every old problem: deep paths, duplicate files, unclear owners and permissions nobody remembers granting.",
        "MP-365 starts with a scan of the share, agrees with department heads what to archive or delete, designs libraries and metadata, and only then moves the files. People can then find things on day one instead of recreating the old maze online.",
      ],
    },
    {
      type: "list",
      heading: "Problems with file servers that this fixes",
      items: [
        "**Files are hard to find:** folder names rely on one person's memory, and the same file exists in four places.",
        "**Remote access is awkward:** people use a VPN or copy files to laptops and USB drives.",
        "**Version confusion:** files named final, final2 and final-REAL circulate by email.",
        "**Unclear access:** old Windows groups and inherited folder permissions give the wrong people access to some folders and block others.",
        "**Servers are aging:** hardware, backups and storage all cost time to maintain.",
      ],
    },
    {
      type: "table",
      heading: "Should files go to SharePoint, OneDrive or Teams?",
      headers: ["Destination", "Use it for", "Why"],
      rows: [
        ["SharePoint document library", "Department, project and company files that several people use", "Shared ownership, permissions by site or library, version history and metadata"],
        ["OneDrive", "One person's working files and drafts", "Tied to a person, so files can disappear from view when someone leaves unless it is planned"],
        ["Microsoft Teams", "Files discussed in a team's channels", "A team's channel files are stored in the SharePoint site behind that team, so Teams is a view of SharePoint, not a separate place"],
      ],
    },
    {
      type: "prose",
      heading: "Most shared files belong in SharePoint, personal files in OneDrive",
      paragraphs: [
        "Shared business files belong in SharePoint, and personal working files belong in OneDrive. If a file will outlive one person's job, put it in a SharePoint library with named owners. MP-365 sorts each folder on the share into one of these homes during planning. The [OneDrive migration](/services/microsoft-365-migration/onedrive-migration/) service covers moving personal home drives.",
      ],
    },
    {
      type: "table",
      heading: "SharePoint limits that shape a file share plan",
      headers: ["Limit", "Value", "What it means for the plan"],
      rows: [
        ["Single file size", "250 GB per file", "Very large files such as CAD or video archives still fit, but plan the upload time"],
        ["Path length", "400 characters including the file name", "Deeply nested folders must be shortened before migration"],
        ["Library size", "Up to 30 million files and folders", "A single library can hold most shares, but search and views work better with a sound structure"],
        ["Sync client", "Syncing no more than 300,000 files per library is recommended", "Large libraries are split by department or year so sync stays fast"],
        ["Unique permissions", "50,000 supported, 5,000 recommended per library", "Permissions are set at library or site level, not folder by folder"],
      ],
    },
    {
      type: "prose",
      heading: "What happens to folder permissions during migration?",
      paragraphs: [
        "Windows folder permissions do not map one to one to SharePoint, and copying them folder by folder creates trouble. Microsoft documents a supported limit of 50,000 unique permissions in a list or library and recommends staying near 5,000. In libraries with more than 100,000 items you also cannot break or restore permission inheritance on the library or folder.",
        "MP-365 therefore designs permissions at the site and library level, using a few groups with named owners. Where a folder truly needs its own access, it becomes its own library or site. This is also the point where old access that nobody can explain is removed.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 moves a file server to SharePoint Online",
      steps: [
        {
          name: "Scan the shares",
          description:
            "Report folder depth, path lengths, file types, last-modified dates, duplicates and access, so decisions use facts.",
        },
        {
          name: "Agree what to keep",
          description:
            "Ask department owners to mark folders to migrate, archive or delete. Old files without an owner follow a written default rule.",
        },
        {
          name: "Design libraries and metadata",
          description:
            "Decide which departments get which sites and libraries, and which fields such as document type, project or year replace deep folders.",
        },
        {
          name: "Set the permission model",
          description:
            "Create groups with named owners and apply access at the site and library level. Document who can see what.",
        },
        {
          name: "Fix names and paths",
          description:
            "Shorten paths over the limit, remove invalid characters and resolve name clashes before the copy starts.",
        },
        {
          name: "Pilot with one department",
          description:
            "Migrate one real share, let the team use it, and adjust libraries, views and metadata from their feedback.",
        },
        {
          name: "Migrate in waves",
          description:
            "Copy departments in groups with Microsoft Migration Manager, run extra passes to catch changes, and review the logs for failures.",
        },
        {
          name: "Cut over and retire the share",
          description:
            "Make the old share read-only, move users to the new libraries and sync, then archive or remove the share after owners sign off.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Should we replace folders with metadata?",
      paragraphs: [
        "Replace folders with metadata where people search by attributes, and keep a light folder layer where people browse. Fields such as customer, project and document type let one file appear in several views without being copied. Too many required fields annoy users, so MP-365 usually starts with a few and adds more once people are working.",
        "Design of fields, content types and search is covered in depth in [SharePoint information architecture and search](/services/sharepoint/information-architecture/).",
      ],
    },
    {
      type: "list",
      heading: "What you get from MP-365",
      items: [
        "**Share scan report:** folder, file, path and duplicate findings with recommended actions.",
        "**Cleanup decisions:** a signed-off list of what migrates, archives or is deleted.",
        "**Library and metadata design:** sites, libraries, content types, columns and views.",
        "**Permission map:** groups, owners and access levels, documented in plain language.",
        "**Migration logs:** what moved, what failed, and how each failure was resolved.",
        "**Sync and user guidance:** how to sync libraries with the OneDrive app and where each type of file belongs.",
        "**Hand-off:** owner training and a short governance note for future folders and libraries.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft tools used to migrate a file server",
      headers: ["Tool", "What MP-365 uses it for"],
      rows: [
        ["Migration Manager in the SharePoint admin center", "Installs lightweight agents on servers or virtual machines, runs migration tasks from file shares to SharePoint, OneDrive and Teams, and reports progress. The source server must support SMB 2.0 or higher."],
        ["SharePoint Migration Tool", "Handles smaller or scripted moves from file shares, including through PowerShell."],
        ["OneDrive sync app", "Gives users offline access to libraries they need on their computers."],
        ["Power Automate", "Adds approvals, review reminders or routing to libraries after the move."],
      ],
    },
    {
      type: "prose",
      heading: "Proof: hundreds of thousands of files into organized libraries",
      paragraphs: [
        "MP-365 moved file shares holding hundreds of thousands of files into organized SharePoint libraries for a client. The new libraries use metadata, version control and workflows, so staff search by attributes and see one current version. The client name is withheld.",
        "See [client results](/clients/) for more examples.",
      ],
    },
    {
      type: "prose",
      heading: "How much does it cost to move a file server to SharePoint?",
      paragraphs: [
        "The cost depends on the amount of content, the quality of the folder structure, the number of departments and the complexity of permissions. Cleanup decisions take the most time, not the copy. MP-365 gives a written estimate after the scan. The [pricing page](/pricing/) explains engagement models, and Microsoft licenses are separate.",
      ],
    },
    {
      type: "prose",
      heading: "When this is not the right fit",
      paragraphs: [
        "This service is not the right fit if you want to leave files exactly where they are, or if you only need a cloud backup of a server. SharePoint is a collaboration platform, not an archive tool. If your files sit in an old SharePoint environment rather than on a network drive, the [SharePoint Server upgrade and migration](/services/sharepoint/migration/) service applies instead. All services are listed under [SharePoint & Intranets](/services/sharepoint/).",
      ],
    },
  ],
  faqs: [
    {
      q: "How do you migrate a network file share to SharePoint?",
      a: "Scan the share, agree what to keep, design libraries and metadata, set permissions, then copy in waves with Migration Manager in the SharePoint admin center. Agents installed on your servers do the transfer. After cutover the old share becomes read-only until owners confirm the new libraries work.",
    },
    {
      q: "Should files go to SharePoint or OneDrive?",
      a: "Put shared business files in SharePoint and one person's working files in OneDrive. SharePoint keeps ownership with the team, so files stay when someone leaves. OneDrive is tied to an individual. MP-365 sorts each folder into one of these during planning.",
    },
    {
      q: "What happens to folder permissions during migration?",
      a: "Windows folder permissions do not carry over cleanly. Microsoft recommends staying near 5,000 unique permissions per library, so MP-365 sets access at the site and library level with named groups. Folders needing their own access become separate libraries or sites, and old unexplained access is dropped.",
    },
    {
      q: "Can we migrate a file server to SharePoint Online without downtime?",
      a: "Mostly yes. Staff keep using the old share while content is copied in waves. Extra passes catch files changed during the move. A short window where the old share is read-only happens at cutover for each department, and owners are told the date ahead of time.",
    },
    {
      q: "What is the maximum file size and path length in SharePoint?",
      a: "Microsoft allows files up to 250 GB in SharePoint document libraries, and the full decoded path including the file name cannot exceed 400 characters. Long paths are the most common migration failure, so MP-365 reports and shortens them before the copy starts.",
    },
    {
      q: "How many files can one SharePoint library hold?",
      a: "A library can hold up to 30 million files and folders. Microsoft recommends syncing no more than 300,000 files per library with the OneDrive app. MP-365 splits large shares by department or period so search, views and sync stay fast.",
    },
    {
      q: "Do we need to clean up files before migrating?",
      a: "Yes, and it is worth the effort. Migrating duplicates and dead folders makes search worse and increases storage use. MP-365 scans for duplicates, old files and long paths, then asks owners to approve what to archive or delete before any copy starts.",
    },
    {
      q: "Will our users still see a folder structure?",
      a: "Yes, but a lighter one. MP-365 keeps folders where people browse and adds metadata, such as project or document type, where people search or filter. Views let users group files in several ways without copying them. Training shows the new habits.",
    },
    {
      q: "Do users need the OneDrive app to work with SharePoint files?",
      a: "No, but it helps. Users can work in the browser or in Office apps directly. The OneDrive sync app gives offline access and a File Explorer view for libraries they choose. MP-365 explains which libraries to sync and which to open online.",
    },
    {
      q: "Can version history replace our old backups?",
      a: "No, not completely. Version history shows earlier edits of a file, and the recycle bin restores deleted files for a limited period. These help with mistakes but are not a full backup strategy. MP-365 does not provide backup services or managed IT.",
    },
    {
      q: "What does MP-365 not do on a file share migration?",
      a: "MP-365 does not manage hardware, Azure infrastructure or backups, and it does not provide cybersecurity services. It designs the SharePoint structure and permissions, runs the migration, and hands off documentation so your administrators run it afterward.",
    },
  ],
  closing:
    "To migrate file share to SharePoint Online well, clean up first, design for how people search, and set permissions at the library level. MP-365 handles the scan, the design and the staged copy, and trains your team to run the result.",
  cta: {
    heading: "Plan your file share move with MP-365",
    body: "Tell us how large your shares are and who uses them. We will outline what to clean up and how to organize the new libraries.",
    text: "Book a discovery call",
  },
};

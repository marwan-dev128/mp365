import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/sharepoint/information-architecture/",
  intro:
    "SharePoint information architecture is the way your sites, libraries, content types, metadata, navigation and permissions are organized so people can find the right file without asking a colleague. MP-365 is a Microsoft Solutions Partner that redesigns SharePoint structure and search for mid-size and enterprise teams whose staff say they cannot find anything.",
  atAGlance: {
    bestFor:
      "Organizations whose SharePoint or Microsoft 365 content is hard to find, duplicated or inconsistently labeled, and teams planning an intranet or migration who want the structure right first.",
    includes:
      "Content and site review, site and hub model, content types and metadata, term sets, navigation design, search configuration, library templates, naming rules and owner guidance.",
    notIncluded:
      "Custom software development, cybersecurity services, ERP implementation, content writing for every page and Microsoft licenses.",
    howItStarts:
      "A discovery call about what people cannot find, followed by a review of your busiest sites and a few user searches to see where the structure fails.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What is information architecture in SharePoint?",
      paragraphs: [
        "SharePoint information architecture is the plan for where content lives, how it is labeled and how people reach it. It covers site types, hub sites, libraries, content types, columns, term sets, navigation and permissions. It decides whether a person finds a contract in seconds or gives up and emails a colleague.",
        "Information architecture is not the same as design. Design is how a page looks. Architecture is how the information is organized so that navigation, search and filters all point to the same files.",
      ],
    },
    {
      type: "table",
      heading: "Why SharePoint search is not working for your team",
      headers: ["What people see", "Likely cause", "Fix"],
      rows: [
        ["A new column does not appear as a filter, or its values are not found", "Search has not re-crawled the library since the column was added", "Request re-indexing of the library after all changes are made, and map the column to a managed property"],
        ["A colleague sees more results than I do", "Search results are trimmed to what each person is allowed to open", "Review permissions rather than search settings, and fix overshared or locked-down areas"],
        ["Numbers inside Excel files are not found", "Microsoft does not index purely numeric data in Excel files, though text such as PO123456789 is indexed", "Add the number to a metadata column or file name pattern that search can read"],
        ["Product codes with dashes or symbols fail", "Search breaks identifiers into pieces differently when indexing and querying", "Map the code to its own managed property and adjust tokenization settings"],
        ["Results show empty or odd titles", "Several title sources compete and the highest-ranked mapped value wins", "Set titles in a required column and use consistent file naming"],
        ["The same file appears in many places", "Content was copied between sites instead of linked or stored once", "Pick one home per file and link to it from other sites"],
      ],
    },
    {
      type: "prose",
      heading: "Why can't employees find files in SharePoint?",
      paragraphs: [
        "Employees usually cannot find files in SharePoint because the structure grew without a plan, not because the search engine is broken. Typical causes are sites created for every request, folders nested many levels deep, files with no metadata, copies in several places, and permissions that hide content from the people who need it.",
        "Microsoft's intranet planning guidance describes three situations people are in: they know a file exists and where it is, they know it exists but not where, or they do not know whether it exists. Navigation helps the first, search the second and discovery features the third. MP-365 designs for all three.",
      ],
    },
    {
      type: "prose",
      heading: "How do metadata and search work together in SharePoint?",
      paragraphs: [
        "Metadata tells search what each file is, and search only returns what is in its index and what the user may open. When someone adds a site column to a library, SharePoint's search crawler creates a matching crawled property and an automatic managed property. MP-365 sets this up deliberately so the right fields can be searched, filtered and refined.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Content types and site columns",
      paragraphs: [
        "A content type defines a kind of document, such as a contract or a safety report, with the columns it must carry. Site columns are reusable fields. Using the same columns across libraries lets one search or view find matching files across many sites.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Crawled and managed properties",
      paragraphs: [
        "Search reads crawled properties, and only managed properties go into the index. In SharePoint in Microsoft 365, custom managed properties can only be text or yes/no. For other types, such as dates or numbers, MP-365 renames an unused built-in property with an alias and maps it to the column. Microsoft warns against changing the mappings of default properties, because other Microsoft 365 features depend on them.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Re-indexing after changes",
      paragraphs: [
        "Search schema changes take effect only after content is re-crawled. For existing libraries, you request re-indexing in the library's advanced settings. Microsoft notes this can create heavy load on the search system, so MP-365 batches changes and re-indexes once.",
      ],
    },
    {
      type: "list",
      heading: "SharePoint site structure best practices",
      items: [
        "**One site per unit of work:** give each team, function or project its own site, so permissions and lifecycle are managed separately.",
        "**Hub sites instead of deep subsites:** Microsoft recommends hubs for organizing intranet sites, because hubs link sites without locking them into a hierarchy that breaks when the company reorganizes.",
        "**Libraries for topics, sites for owners:** do not create a site for every topic. A library with good metadata often serves search better.",
        "**Keep navigation short:** Microsoft recommends no more than 100 links in navigation, even though the technical limit is 500 child links per level.",
        "**Name things once:** use one naming rule for sites, libraries and files, written down and enforced through templates.",
      ],
    },
    {
      type: "prose",
      heading: "SharePoint navigation design that people can follow",
      paragraphs: [
        "Good SharePoint navigation shows where things are in the terms staff use, not how IT built them. Hub navigation can have up to three levels, but fewer is better. Use department names and common tasks as labels, and test them by asking people where they would look for a handful of real files.",
        "Audience targeting can hide links that are irrelevant to a group. Private sites listed in shared navigation can show people an access request they cannot use, so MP-365 decides case by case whether to show them.",
      ],
    },
    {
      type: "list",
      heading: "A SharePoint metadata strategy people follow",
      items: [
        "**Few required fields:** start with three or four, such as document type, owner and project. People skip long forms.",
        "**Shared vocabularies:** use term sets in the managed metadata service for values reused across sites, such as departments or regions.",
        "**Defaults where possible:** set default values by library or folder so users enter less.",
        "**Content types for document kinds:** a contract has different fields than a meeting note.",
        "**Views over folders:** build filtered and grouped views so one file shows up in the places people look.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 improves SharePoint structure and search",
      steps: [
        {
          name: "Find out what people cannot find",
          description:
            "Gather ten to twenty real searches and tasks from different departments. Time how long each takes today.",
        },
        {
          name: "Review sites, libraries and usage",
          description:
            "Inventory sites, owners, sizes, activity and permissions. Flag duplicates, empty sites and content with no owner.",
        },
        {
          name: "Design the target model",
          description:
            "Draft the site and hub map, content types, columns, term sets and navigation on paper before changing anything live.",
        },
        {
          name: "Set naming and metadata rules",
          description:
            "Agree short rules owners can remember. Build library templates that apply them by default.",
        },
        {
          name: "Configure search properties",
          description:
            "Map columns to managed properties, set up refiners and result scopes, and tune key libraries.",
        },
        {
          name: "Test with the same searches",
          description:
            "Run the original tasks again with real users. Fix labels and navigation where people still hesitate.",
        },
        {
          name: "Roll out by area",
          description:
            "Apply the model to one department first, adjust, then extend to others. Re-index once per round of changes.",
        },
        {
          name: "Train owners and hand off",
          description:
            "Show site owners how to add content types, keep metadata clean and request changes. Document the rules.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get from MP-365",
      items: [
        "**Findability baseline:** before-and-after results for the real searches your staff run.",
        "**Site and hub map:** a diagram of sites, hubs, owners and permissions.",
        "**Content type and metadata model:** documented columns, content types and term sets.",
        "**Navigation design:** global, hub and site navigation with labels tested on users.",
        "**Search configuration:** managed property mappings, refiners and any query rules required.",
        "**Library templates and naming guide:** ready-to-use patterns for owners.",
        "**Governance note:** who may create sites, who approves new columns and how often to review.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft products used in this work",
      headers: ["Product", "Role"],
      rows: [
        ["SharePoint Online", "Sites, libraries, content types, columns and the managed metadata service."],
        ["Microsoft Search", "The search experience across SharePoint and Microsoft 365 content."],
        ["SharePoint admin center", "Hub sites, search schema, site settings and sharing controls."],
        ["Microsoft Purview", "Labels and retention for content; see [Microsoft Purview and permission models](/services/data-governance/microsoft-purview/)."],
        ["Power Automate", "Prompts owners to review stale content and routes requests for new sites or columns."],
      ],
    },
    {
      type: "prose",
      heading: "Proof: spreadsheets turned into a SharePoint system",
      paragraphs: [
        "A financial advisory business ran on spreadsheets. MP-365 moved them into a SharePoint Online system with version control, metadata and automated calculations. The client name is withheld.",
        "See [client results](/clients/) for more projects.",
      ],
    },
    {
      type: "prose",
      heading: "Why good structure matters before Copilot",
      paragraphs: [
        "Microsoft 365 Copilot can only draw on content a user is allowed to open, so permission mistakes become answers. A clean structure with clear owners and labels also gives Copilot better material to find. The [AI data governance audit](/services/copilot/ai-data-governance-audit/) reviews data access before a Copilot rollout.",
      ],
    },
    {
      type: "prose",
      heading: "What does SharePoint information architecture work cost?",
      paragraphs: [
        "The cost depends on the number of sites, the number of document types and the state of existing metadata. Planning and testing take more effort than configuration. MP-365 gives a written estimate after reviewing your busiest sites. The [pricing page](/pricing/) explains how engagements are structured. Microsoft licenses are separate.",
      ],
    },
    {
      type: "prose",
      heading: "When this is not the right fit",
      paragraphs: [
        "This service is not the right fit if your files are still on network drives; start with [File Share to SharePoint Migration](/services/sharepoint/file-share-migration/) so the structure is built once. It also does not replace a records management program or a content writing team. If you are building a new portal, [SharePoint Intranet Development](/services/sharepoint/intranet-development/) includes structure design. Browse everything under [SharePoint & Intranets](/services/sharepoint/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What is information architecture in SharePoint?",
      a: "Information architecture in SharePoint is the plan for how sites, hubs, libraries, content types, metadata, navigation and permissions fit together. A good one lets people reach the right file through navigation, search or filters. A poor one produces duplicate files and unanswered requests for where things are.",
    },
    {
      q: "Why can't employees find files in SharePoint?",
      a: "Usually the structure is the cause: many sites with no plan, deep folders, files without metadata, copies in several places and permissions that hide content. Search can only return what is indexed and what the person is allowed to open. Fixing structure and metadata solves most cases.",
    },
    {
      q: "How do metadata and search work together in SharePoint?",
      a: "Search crawls files and their columns, maps them to managed properties and builds an index. Metadata columns become searchable, filterable and refinable when mapped correctly. Changes take effect after content is re-crawled, so MP-365 requests re-indexing once after a batch of changes.",
    },
    {
      q: "Why is SharePoint search not working?",
      a: "Common causes are a library that has not been re-indexed after a new column, permission trimming that hides files from some users, numbers inside Excel files that are not indexed, and poor titles. MP-365 tests real searches to find which cause applies before changing anything.",
    },
    {
      q: "Should we use hub sites or subsites?",
      a: "Use hub sites for most organizations. Microsoft recommends them for intranets because they connect sites through links, so a reorganization does not break the structure. Subsites remain supported, but they tie content to a hierarchy and share features across the whole site collection.",
    },
    {
      q: "How many levels of navigation should a SharePoint site have?",
      a: "Keep it to two levels where you can. Hub navigation supports up to three, and Microsoft recommends no more than 100 links. Long menus slow people down. MP-365 tests labels with staff by asking where they would look for real files.",
    },
    {
      q: "What is a good SharePoint metadata strategy?",
      a: "Use a small set of required columns, shared term sets for values reused across sites, content types for each document kind, and defaults to reduce typing. Add fields only when someone will filter or search by them. MP-365 starts with three or four and expands later.",
    },
    {
      q: "Can we fix search without moving content?",
      a: "Often yes. Mapping columns, adding titles and metadata, adjusting navigation and removing duplicates can improve results on existing sites. If the content sits in the wrong places or has no structure, restructuring comes first. MP-365 reviews your busiest sites to decide.",
    },
    {
      q: "Does MP-365 redesign SharePoint sites after an intranet or migration?",
      a: "Yes. Structure work can follow a migration or intranet launch, or be done before to prevent problems. MP-365 treats it as a separate, small project with measured searches before and after, so you can see whether findability improved.",
    },
    {
      q: "Does information architecture affect Microsoft 365 Copilot?",
      a: "Yes. Copilot only uses content a person can access, so oversharing becomes visible in answers. Clear structure, owners and labels also make good content easier to find. The AI data governance audit reviews access before rollout, and structure work supports it.",
    },
  ],
  closing:
    "Good SharePoint information architecture makes the right file easy to find through navigation, search and filters that all agree. MP-365 reviews what people cannot find today, redesigns the structure and metadata, and tests the result with the same searches.",
  cta: {
    heading: "Fix SharePoint structure and search with MP-365",
    body: "Tell us which files people cannot find. We will review your busiest sites and show where the structure breaks.",
    text: "Book a discovery call",
  },
};

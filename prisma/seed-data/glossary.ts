import type { MarketingBlock } from "../../lib/marketing-blocks";

export type GlossaryTerm = {
  slug: string;
  term: string;
  /** 40-60 words, self-contained — the block answer engines quote. */
  shortDefinition: string;
  /** Other names people search for the same concept. */
  aliases?: string[];
  /** Typed content blocks — same renderer as the marketing hubs. */
  sections?: MarketingBlock[];
  faqs?: { q: string; a: string }[];
  relatedTermSlugs?: string[];
  /** Bare Service slugs. The first one also picks the index-page group. */
  relatedServiceSlugs: string[];
  /** @deprecated superseded by `sections`; kept so old rows still build. */
  expansion?: string[];
};

// Facts about Microsoft licensing, tooling scope, and product behaviour were
// verified against Microsoft Learn when these were written. They go stale —
// re-check any specific limit, threshold, or SKU before relying on it.

export const glossaryTerms: GlossaryTerm[] = [
  {
    "slug": "tenant-to-tenant-migration",
    "term": "Tenant-to-Tenant Migration",
    "shortDefinition": "A tenant-to-tenant migration moves users' mailboxes, OneDrive files and Teams chats from one Microsoft 365 tenant to another, usually after a merger, acquisition or divestiture. Microsoft 365 tenants cannot be merged: the tooling moves content, not identity, so every user and group is recreated in the target before anything is copied, and the source tenant is later decommissioned.",
    "aliases": [
      "tenant to tenant migration",
      "T2T migration",
      "cross-tenant migration",
      "cross-tenant user data migration",
      "Microsoft 365 tenant migration",
      "Office 365 tenant migration",
      "tenant consolidation",
      "tenant merge",
      "M365 tenant-to-tenant move",
      "divestiture IT separation"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "Why two tenants can't just be merged",
        "paragraphs": [
          "A Microsoft 365 tenant is a single Entra ID directory with its own identities, licenses, security policy and compliance boundary. There is no supported way to fuse two directories and no merge button in any admin center. You pick a surviving tenant and move everything else into it, object by object.",
          "Microsoft's own tooling — the Microsoft 365 migration orchestrator, paid for with a one-time per-user Cross-Tenant User Data Migration license assignable on either the source or target user — is explicit that it moves **content, not identities**. Each user must already exist in the target as a correctly configured mail user carrying the source mailbox GUID before a single message moves. That provisioning and mapping work, not the data copy, is where most [M&A tenant migration](/services/ma-tenant-migration/) programs spend their time."
        ]
      },
      {
        "type": "table",
        "heading": "What moves, and what you rebuild",
        "headers": [
          "Workload",
          "Native cross-tenant support",
          "What you still have to handle"
        ],
        "rows": [
          [
            "Exchange mailboxes",
            "Yes",
            "Only user-visible content and Recoverable Items move; signatures and the in-mailbox Teams chat folder do not. The source mailbox is converted away at cutover, so it is no longer searchable in the source tenant. Mailboxes on any type of hold are blocked — Microsoft asks you to engage them before attempting those users."
          ],
          [
            "Mailbox delegates, shared mailboxes, calendar permissions",
            "No",
            "Cross-tenant delegate permissions aren't supported. Managers, delegates and the shared mailboxes they touch must move in the same batch or access breaks on day one."
          ],
          [
            "OneDrive",
            "Yes",
            "Single pass — no incremental or delta catch-up, so the user must stop working in the source at cutover. A redirect is left on the old location."
          ],
          [
            "Teams chats and meetings",
            "Yes, alongside the mailbox",
            "Source threads remain and can duplicate, with participant lists changing as users move. Meetings migrate but their join URLs are invalid in the target and must be recreated."
          ],
          [
            "Teams teams and channels, SharePoint sites",
            "No — out of scope for user data migration",
            "Separate Cross-Tenant Shared Data Migration, licensed per 100 GB and, at the time of writing, offered only to Enterprise Agreement customers — or third-party tooling. Channel structure isn't migrated even when the underlying site is."
          ],
          [
            "Identity, groups, Conditional Access, Intune devices",
            "No",
            "Rebuilt in the target. Entra-joined and Intune-managed machines must be re-registered or rebuilt."
          ],
          [
            "Power Platform and Dataverse",
            "Partly",
            "Production and sandbox Dataverse environments move via a request in the Power Platform admin center that the target tenant approves; default, developer, trial and Dataverse for Teams environments can't move. Security group assignments and connections are rebuilt, and every federated app is re-pointed."
          ],
          [
            "Custom email domain",
            "N/A",
            "A domain can be verified in only one tenant at a time — it must be removed from the source before it can be added to the target."
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "How a tenant-to-tenant migration actually runs",
        "steps": [
          {
            "name": "Discovery and inventory",
            "description": "Users, mailbox and site sizes, licenses, compliance holds, devices, line-of-business apps and anything using the old tenant for SSO. Commonly 2-4 weeks, and the first place deal deadlines meet reality."
          },
          {
            "name": "Identity design and mapping",
            "description": "Agree the target UPN and SMTP scheme, then match each source object to its target. [Cross-tenant identity mapping](/resources/glossary/cross-tenant-identity-mapping/) is a hard prerequisite — the orchestrator requires it, and a correctly stamped target mail user, even for people whose mailboxes are not moving."
          },
          {
            "name": "Coexistence build",
            "description": "Mail routing, directory sync, free/busy and Teams federation so both companies can work together before anyone moves. See [Day 1 coexistence](/resources/glossary/day-1-coexistence/)."
          },
          {
            "name": "Pilot wave",
            "description": "20-50 users covering every persona, device type and app dependency — and deliberately including a manager/delegate pair and a shared mailbox, because that is where permission gaps surface. Fix the runbook here, not in wave three."
          },
          {
            "name": "Production waves",
            "description": "Move mailbox, OneDrive, chats and meetings for the same user in one batch; the orchestrator sequences the dependencies and will refuse a meetings batch that omits chats and mailboxes. Splitting a user across batches produces broken calendars and duplicate threads."
          },
          {
            "name": "Domain cutover and decommission",
            "description": "Release the shared domain from the source, verify it in the target, then close the source. Anything legal or archival must be exported or held before users move, not after — the source mailbox is gone once the move completes."
          }
        ]
      },
      {
        "type": "list",
        "heading": "What actually drives the cost",
        "items": [
          "**Migration licensing.** The per-user Cross-Tenant User Data Migration add-on is a one-time cost covering mail, OneDrive and Teams chat. SharePoint and Teams shared data is licensed separately per 100 GB moved and is currently Enterprise Agreement only. Third-party tools charge per seat. See [tenant migration cost](/pricing/tenant-migration-cost/).",
          "**Double licensing during coexistence.** Most users hold a paid license in both tenants for the whole overlap, so every extra month of coexistence carries a running cost.",
          "**Devices.** Entra-joined and Intune-managed machines have to be re-registered or rebuilt. Deskside effort is usually the largest labor line, and it scales with headcount, not data volume.",
          "**Workload count.** Mail and OneDrive is a fraction of the effort of mail plus Teams, SharePoint sites, Power Platform and Dynamics 365.",
          "**Compliance scope.** Mailboxes under eDiscovery or litigation hold need a legal decision before they can be released to move. Sensitivity-labeled files are a second trap: migrated content keeps the label but loses the protection and policy behind it, and sites using labels with user-defined permissions cannot migrate until those labels are removed."
        ]
      },
      {
        "type": "prose",
        "heading": "The mistake that costs the most — and when not to migrate",
        "paragraphs": [
          "The most common planning error is scoping this as a data project. The mailbox move is the most predictable part of the program. What overruns is identity, endpoints and applications: every SaaS app federated to the old tenant, every service account, every shared mailbox, every device to be re-enrolled.",
          "Three honest limits. Native tooling does not cross cloud boundaries — commercial to GCC High or DoD, or Worldwide to 21Vianet, needs third-party tooling and a different plan. Migration harmonizes platforms, not organizations: it will not reconcile ERP or CRM data, retention schedules or naming standards. And it is not always the right answer — if the acquired business is small, runs standalone or may be resold, leaving the tenants separate with solid coexistence is often cheaper and faster. Elapsed time is commonly 8-16 weeks for a few hundred users on mail and files only, and 6-12 months for a multi-thousand-user enterprise with devices, applications and regulatory holds in scope. Microsoft's cross-tenant feature set changes release to release, so confirm current scope and licensing before you commit to a plan."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can two Microsoft 365 tenants be merged?",
        "a": "No. There is no merge function. One tenant survives, every in-scope object is recreated inside it, content is copied across, and the other tenant is eventually decommissioned."
      },
      {
        "q": "How long does a tenant-to-tenant migration take?",
        "a": "Industry-typical ranges are roughly 8-16 weeks for a few hundred users moving mail and files only, and 6-12 months for a multi-thousand-user enterprise once devices, applications and compliance holds are in scope. Discovery alone is commonly 2-4 weeks."
      },
      {
        "q": "Does Teams chat history move between tenants?",
        "a": "User chats and meetings move with the mailbox under Microsoft's cross-tenant user data migration, but shared data — teams, channels and SharePoint sites — is out of scope and needs separate licensing or third-party tooling. Source threads remain and can duplicate, and migrated meetings keep an invalid join URL, so they have to be recreated. This capability changes release to release; confirm current behavior before fixing scope."
      },
      {
        "q": "What happens to the source mailbox after it migrates?",
        "a": "It is converted to a mail user so mail keeps routing to the target, and the mailbox contents are no longer available or discoverable in the source tenant. Any export, hold or archive the source organization needs for legal reasons has to be handled before the move, not after."
      },
      {
        "q": "Can we keep the same email domain?",
        "a": "Eventually, yes — but a custom domain can be verified in only one tenant at a time. It must be removed from the source before it can be added and verified in the target, which is the constraint that forces a hard cutover window rather than a gradual drift."
      }
    ],
    "relatedTermSlugs": [
      "day-1-coexistence",
      "cross-tenant-identity-mapping",
      "carve-out",
      "tsa-exit",
      "cutover-migration",
      "ediscovery-hold",
      "sensitivity-label"
    ],
    "relatedServiceSlugs": [
      "ma-tenant-migration",
      "microsoft-365-migration",
      "data-governance",
      "collaboration-enablement"
    ]
  },
  {
    "slug": "day-1-coexistence",
    "term": "Day-1 Coexistence",
    "shortDefinition": "Day-1 coexistence is the set of Microsoft 365 configurations that lets two separate tenants behave like one organization from the day a deal legally closes — cross-tenant mail routing, free/busy calendar lookup, a combined address list and Teams chat — while mailboxes, files and identities stay where they are until the migration finishes months later.",
    "aliases": [
      "day one coexistence",
      "tenant coexistence",
      "Microsoft 365 coexistence",
      "cross-tenant coexistence",
      "day 1 readiness M&A IT",
      "interim coexistence"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "What \"Day 1\" means in a deal",
        "paragraphs": [
          "Day 1 is the day the transaction legally closes, not the day IT finishes anything. Entities change hands, reporting lines move, and on that morning employees on both sides expect to email each other, book meetings and find colleagues in the directory. The [tenant migration](/services/ma-tenant-migration/) behind it runs for months afterwards, in waves. Coexistence covers the gap.",
          "A divestiture inverts it: on Day 1 the carved-out staff are legally outside the parent, but still have to work with retained teams for the life of the transition services agreement — commonly 6 to 18 months, up to the [TSA exit](/resources/glossary/tsa-exit/)."
        ]
      },
      {
        "type": "list",
        "heading": "What coexistence actually delivers",
        "items": [
          "**Cross-tenant mail flow.** Between two different domains, mail already routes over public MX — it does not bounce. What coexistence adds is connectors between the tenants so messages take an authenticated TLS path and filtering can be scoped. The internal-relay accepted domain plus targetAddress pattern matters later, once some @contoso.com mailboxes sit in the target while the domain still lives in the source.",
          "**Free/busy lookup.** Historically an Exchange organization relationship running over EWS. Microsoft is retiring EWS in Exchange Online — gradual disabling from 1 October 2026, hard stop 1 April 2027 — and has moved cross-tenant free/busy, MailTips and calendar sharing to Microsoft 365 Cross-Tenant Access Policy. Build on the policy model, and inventory any existing organization relationships, availability address spaces and sharing policies before they stop working.",
          "**A combined address list.** Mail contacts or MailUser objects created by a migration tool, or B2B member users from Entra cross-tenant synchronization. The trap: cross-tenant sync does not mail-enable the accounts it creates, so those users stay out of the Exchange address list until you mail-enable them and clear the hidden-from-address-lists flag. Teams people search and the Exchange GAL are separate problems.",
          "**Teams chat and calls.** External access federation covers 1:1 and group chat, calls and meetings with little more than a domain allow-list each side. Shared channels additionally need B2B direct connect. Cross-tenant people search needs a multitenant organization plus cross-tenant synchronization, which requires Entra ID P1 in every participating tenant — and Microsoft notes a synced user can take up to seven days to become searchable, so start sync well before close.",
          "**Identity groundwork.** The MailUser objects behind the address list are what a native cross-tenant mailbox move later targets, and the move will not run unless each carries the source mailbox's ExchangeGuid, its ArchiveGuid where an archive exists, and the source LegacyExchangeDN as an x500 proxy address. Microsoft's [cross-tenant identity mapping](/resources/glossary/cross-tenant-identity-mapping/) tooling automates that; done at Day 1, it removes rework at cutover."
        ]
      },
      {
        "type": "list",
        "heading": "What it does not solve",
        "items": [
          "**One domain, one tenant.** A verified domain belongs to exactly one tenant, so both sides cannot own contoso.com at once and you cannot carry the other company's SMTP addresses on your own objects. The visible symptom, for the whole coexistence period: their mail is external to your tenant, so it keeps external-sender tags and first-contact safety tips. Microsoft ran a private preview of cross-tenant SMTP domain sharing, then dropped it from the public roadmap — plan as if it does not exist. Domain rewrite in third-party migration tooling is the usual substitute.",
          "**Content.** Teams chat history, channel conversations, OneDrive and SharePoint files do not federate. Cross-tenant file access means per-site B2B guest sharing — a workaround, not a directory-wide fix. Content moves by migration, not by trust.",
          "**Compliance boundaries.** DLP, sensitivity labels, retention and eDiscovery holds stop at the tenant edge. Through a long TSA you are running two compliance estates under different rules, and a hold placed in one tenant does not reach data sitting in the other.",
          "**Permanence.** Coexistence is scaffolding with real running cost and admin overhead. Left in place for years it accumulates directory drift, stale contacts and duplicate objects that the eventual migration then has to clean up."
        ]
      },
      {
        "type": "steps",
        "heading": "How it gets stood up",
        "steps": [
          {
            "name": "Discovery and design",
            "description": "Inventory domains, MX and outbound relay paths, distribution lists, shared mailboxes, room resources, and any existing organization relationships or sharing policies. Commonly 2-4 weeks, and often the only work legally permitted before close."
          },
          {
            "name": "Establish tenant trust",
            "description": "Cross-tenant access policy for free/busy and MailTips, Teams external access allow-lists, B2B collaboration and direct connect settings. Days of work once both sets of admins can act — the constraint is access, not effort."
          },
          {
            "name": "Directory sync and object prep",
            "description": "Stand up sync, mail-enable the objects, validate targetAddress values and hidden-from-GAL flags. Do not assign mailbox-bearing licences to target users before their objects are mapped: Exchange provisions a mailbox and the object stops being usable as a migration target."
          },
          {
            "name": "Mail flow build and test",
            "description": "Set accepted domain modes, connectors and any address rewriting, then run a full test matrix — external inbound, both internal directions, distribution lists, shared mailboxes, automatic replies, calendar invitations."
          },
          {
            "name": "Day-1 dry run",
            "description": "Rehearse with a cross-section of both companies, executives and their assistants included, one to two weeks before close. Malformed contact objects are the most common cause of Day-1 mail failures and only a real test surfaces them."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "When it is not worth building",
        "paragraphs": [
          "Coexistence is not always the right answer. For a small acquisition — a few dozen people with a short migration runway — standing up trusts, sync and connectors can cost more than moving everyone into the target tenant in a single weekend shortly after close and issuing target-tenant accounts on Day 1. Coexistence earns its cost when the population is large enough that migration must run in waves, when a TSA holds the two estates apart for months, or when legal holds or regulatory constraints stop data moving quickly."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How long does Day-1 coexistence take to stand up?",
        "a": "Commonly 4-8 weeks from design to rehearsal. The trust configuration itself takes days; discovery, directory sync validation and mail flow testing consume the rest. The binding constraint is usually legal — pre-close restrictions often prevent either side touching the other's tenant until the deal signs."
      },
      {
        "q": "What happens if we skip coexistence and just migrate later?",
        "a": "On the morning of close, meeting invitations cannot resolve attendees, free/busy lookups fail, and nobody can find anyone in the address list. It is one of the few IT failures visible to the entire combined workforce on the deal's highest-profile day, and the helpdesk absorbs it for weeks."
      },
      {
        "q": "Is coexistence the same as a tenant-to-tenant migration?",
        "a": "No. Coexistence makes two tenants interoperate temporarily; [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) moves mailboxes, files and identities so one tenant can be retired. Coexistence is what keeps the business working while that migration runs in waves."
      },
      {
        "q": "Can both companies keep using the same email domain during coexistence?",
        "a": "Not natively — a verified domain lives in one tenant only, and Microsoft's cross-tenant domain sharing preview never shipped. The usual approach is to leave the domain authoritative in the source tenant, set it to internal relay, and route to migrated users in the target until the domain moves at cutover."
      }
    ],
    "relatedTermSlugs": [
      "tenant-to-tenant-migration",
      "cross-tenant-identity-mapping",
      "tsa-exit",
      "cutover-migration",
      "carve-out"
    ],
    "relatedServiceSlugs": [
      "ma-tenant-migration",
      "microsoft-365-migration",
      "collaboration-enablement",
      "data-governance"
    ]
  },
  {
    "slug": "tsa-exit",
    "term": "TSA Exit",
    "shortDefinition": "A TSA exit is the point at which a carved-out or acquired business stops using the seller's IT systems and runs entirely on its own. In Microsoft 365 terms, the mail, files, identities and applications covered by the Transition Services Agreement have left the seller's tenant by the contractual end date, after which extension fees apply.",
    "aliases": [
      "transition services agreement exit",
      "TSA exit meaning",
      "TSA expiry migration",
      "transition services agreement IT separation",
      "TSA exit deadline",
      "TSA exit plan for IT"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "What a Transition Services Agreement actually is",
        "paragraphs": [
          "When a company sells a division, the buyer rarely gets a working business at close: the unit's email, files, ERP and network still sit inside the seller's infrastructure. A **Transition Services Agreement** is the contract under which the seller keeps running those systems for a fixed period and fee while the buyer stands up its own. The **TSA exit** is the point where that dependency ends and the seller's obligations terminate.",
          "IT is almost always the long pole. Separation gates finance, HR and sales rather than running beside them, and the data is entangled at record level — a shared mailbox or SharePoint site rarely splits along the deal perimeter.",
          "The date does not move. Extension clauses typically step the fee up at each renewal, and many agreements let the seller decline to extend a specific service at all. Overrun is also visible to deal sponsors and often the lender, where it reads as an integration failure. Treat the exit date as fixed and flex scope instead."
        ]
      },
      {
        "type": "list",
        "heading": "What \"exit\" concretely requires",
        "items": [
          "Every in-scope mailbox, OneDrive, SharePoint site and Teams team out of the seller's tenant, with the destination as system of record.",
          "**The business's own email domains removed from the seller's tenant and verified in the destination.** A domain can be verified in only one tenant at a time, and the seller cannot remove it until every object still referencing it has been cleaned up — a routine cause of late slippage.",
          "Line-of-business applications rehosted, integrations repointed away from seller-owned endpoints, and devices re-enrolled under the new tenant.",
          "Seller-side access revoked and residual data deleted or formally certified as retained under a records schedule.",
          "Written confirmation both ways that services have terminated — sellers usually require this before they stop invoicing."
        ]
      },
      {
        "type": "steps",
        "heading": "Planning backward from the exit date",
        "steps": [
          {
            "name": "Fix the date, then subtract",
            "description": "Work backward from the contractual exit and reserve the final 4-6 weeks for hypercare, cleanup and seller sign-off. That time is not available for migration."
          },
          {
            "name": "Discover before you commit",
            "description": "Inventory mailboxes, sites, domains, applications, integrations and legal holds first; scope found late is the most common cause of overrun. A [tenant migration assessment](/assessments/tenant-migration/) belongs in month one, not month three."
          },
          {
            "name": "Build the destination and coexistence layer",
            "description": "Stand up the target tenant, identity, security baseline and device management, then establish [day 1 coexistence](/resources/glossary/day-1-coexistence/) — shared free/busy, mail routing and directory sync — so the two organizations can still work together."
          },
          {
            "name": "Pilot with real users",
            "description": "Run 30-100 users spanning every profile: heavy mailbox, shared mailbox, mobile-only, regulated. Pilot findings set wave sizing for everything after."
          },
          {
            "name": "Migrate in waves by dependency",
            "description": "Group users by application dependency and business unit rather than alphabetically, and pre-stage whatever the workload allows so each cutover window stays short."
          },
          {
            "name": "Decommission and certify",
            "description": "Revoke access, complete deletion or retention certification, and obtain the seller's written service termination. The TSA is not exited until that is documented."
          }
        ]
      },
      {
        "type": "list",
        "heading": "Microsoft 365 constraints that shape the schedule",
        "items": [
          "**Mailboxes on hold are blocked.** Microsoft's cross-tenant mailbox migration will not move a mailbox with any type of hold applied. Because the source mailbox is deleted after a successful move, an [eDiscovery hold](/resources/glossary/ediscovery-hold/) has to be resolved with legal before the batch runs, not after.",
          "**A per-user migration license is required.** Cross-Tenant User Data Migration is a separately purchased one-time add-on, assignable on the source or the target object, and Microsoft states plainly that migrations fail without it. Price it during discovery.",
          "**SharePoint and OneDrive moves are one-and-done.** Native cross-tenant site and OneDrive migrations move the content and leave a redirect behind; incremental and delta passes are not supported. Each site gets one window with editing frozen, which constrains wave sequencing.",
          "**Shared data sits outside the per-user tooling.** Teams, channels and SharePoint sites are not moved by the user-level orchestrator; cross-tenant SharePoint site migration is a separate feature with its own availability and licensing terms.",
          "**Sensitivity labels do not survive intact.** Protection attached to a label generally does not carry across tenants, and sites using labels with user-defined permissions must be unlocked before they can move."
        ]
      },
      {
        "type": "prose",
        "heading": "Limits and honest caveats",
        "paragraphs": [
          "A TSA exit is not the same as being finished. It means the seller's obligations have ended, not that the environment is well designed. Carve-outs routinely exit on time into a tenant built for speed that then needs a governance pass.",
          "Legal obligations survive the exit. Data under a statutory retention schedule cannot simply be deleted from the seller's tenant on the exit date, and responsibility for producing it later must be assigned in the agreement. Get that language right during negotiation, not in month nine.",
          "Check the tooling before you size the plan. Microsoft's native cross-tenant capability has broadened well beyond mailboxes, but parts of it ship in preview and coverage and licensing change release to release. Verify against current Microsoft documentation, not a vendor deck. Sizing that gap honestly is most of what [M&A tenant migration](/services/ma-tenant-migration/) work involves."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How long is a typical IT TSA?",
        "a": "Industry practice varies, but IT transition services agreements commonly run 6-18 months, with around 12 months typical for a mid-sized carve-out. The clock starts at close, not at signing, and the first weeks are usually consumed by discovery and contracting before any migration work begins. Treat the usable window as noticeably shorter than the headline term."
      },
      {
        "q": "What happens if you miss the TSA exit date?",
        "a": "Rarely a shutdown on day one. Far more often the seller invokes an extension at a stepped-up rate, or passes through its costs plus a margin — extension pricing is normally written to escalate at each renewal period. The outcome that actually hurts is the clause, common in well-drafted TSAs, that lets the seller refuse to extend a specific service at all. Read the extension terms before assuming the date is soft."
      },
      {
        "q": "What is the difference between a TSA exit and a tenant-to-tenant migration?",
        "a": "A tenant-to-tenant migration is the technical work of moving mail, files and identities between Microsoft 365 tenants. A TSA exit is the contractual event that work serves, and it is broader: ERP, HR systems, networks, third-party contracts and the formal termination of services. Every TSA exit with a Microsoft estate contains a tenant-to-tenant migration; not every tenant-to-tenant migration is driven by a TSA."
      },
      {
        "q": "Can you exit a TSA without moving all the data?",
        "a": "Sometimes, and it is worth considering. Archived mail, closed-matter files and legacy record sets can be left behind under a separate data-retrieval or records-access schedule, with only active content migrated. That narrows migration scope considerably. It requires the seller's agreement and clear ownership language, so raise it during TSA negotiation rather than in month nine."
      },
      {
        "q": "Do you need a new tenant, or can you migrate into an existing one?",
        "a": "Either works. Divestitures usually need a new tenant built from scratch, which adds tenant design, security baseline and device management work ahead of any data movement. Acquisitions typically migrate into the buyer's existing tenant: faster to set up, harder on conflict resolution, with duplicate identities, clashing policies and existing compliance configuration the incoming users inherit. Either way the target objects must be created and matched first — Microsoft's cross-tenant tooling moves content, not identities, and a target user who already has a mailbox will fail the move until that is cleaned up."
      }
    ],
    "relatedTermSlugs": [
      "carve-out",
      "tenant-to-tenant-migration",
      "day-1-coexistence",
      "cutover-migration",
      "cross-tenant-identity-mapping",
      "ediscovery-hold"
    ],
    "relatedServiceSlugs": [
      "ma-tenant-migration",
      "microsoft-365-migration",
      "data-governance"
    ]
  },
  {
    "slug": "cutover-migration",
    "term": "Cutover Migration",
    "shortDefinition": "A cutover migration moves every mailbox, user and group from a source environment to a target in one batch, on a single switchover date, with no period of running both systems. Microsoft's Exchange cutover method allows up to 2,000 mailboxes but recommends 150 or fewer; above that, a phased or hybrid approach is safer.",
    "aliases": [
      "cutover migration Exchange",
      "big bang migration",
      "single-event migration",
      "cutover vs staged migration",
      "cutover migration Office 365",
      "what is a cutover migration"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "Two things people mean by \"cutover\"",
        "paragraphs": [
          "The term does double duty. In Microsoft's documentation, **cutover migration** is a specific Exchange method: Exchange Online connects to an on-premises Exchange organization over Outlook Anywhere, discovers it, and migrates mailboxes, mail users, mail contacts and mail-enabled groups with their membership in one batch. The documented ceiling is 2,000 mailboxes, with a recommendation of 150 or fewer — Microsoft's stated reason is not a throughput cliff but simple elapsed time: creating and migrating 2,000 users takes far too long to sit inside one event.",
          "Read that method as a legacy path. Microsoft scopes it to Exchange 2003 through 2013, and every one of those versions is past end of support. If you are a small organisation on Exchange 2010, 2013 or 2016 today, **minimal hybrid** (\"express migration\") is usually the better route to the same outcome — it is the live, supported way to move a small org quickly.",
          "In M&A work the word is used more loosely. The cutover is the switchover event inside a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) — the night the domain, mail routing and identities move from the seller's tenant to the buyer's. Different mechanics; the defining property is the same, one moment where everybody moves with no coexistence period to fall back into."
        ]
      },
      {
        "type": "table",
        "heading": "Cutover vs staged vs hybrid",
        "headers": [
          "Approach",
          "Best fit",
          "The trade-off"
        ],
        "rows": [
          [
            "Cutover (one batch)",
            "On-premises Exchange 2003–2013, realistically under 150 mailboxes, no directory sync running",
            "Shortest project, highest concentration of risk. Creates brand-new cloud accounts — passwords do not come across"
          ],
          [
            "Staged",
            "Exchange 2003 or 2007 with more than 2,000 mailboxes",
            "Requires directory sync and batch scheduling. Microsoft never offered it for Exchange 2010 or later, and both source versions are long out of support — rarely a live option now"
          ],
          [
            "Minimal hybrid (\"express\")",
            "At least one Exchange 2010/2013/2016 server, moving inside a few weeks, no wish to keep running directory sync",
            "Runs a one-time Entra Connect sync of users and passwords, then turns dirsync off — users keep their existing passwords. No long-term coexistence"
          ],
          [
            "Full hybrid / batched coexistence",
            "Exchange 2013 or later, more than ~150 mailboxes, or any org that cannot take a hard freeze",
            "Cross-premises mail flow and free/busy work during the move; longer project, hybrid infrastructure to build and then retire"
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "What actually happens in the cutover window",
        "steps": [
          {
            "name": "Lower TTLs ahead of the freeze",
            "description": "Microsoft's guidance is an MX record TTL of **3,600 seconds or lower** before you start; many teams go to 300. Do the autodiscover CNAME as well. Cheapest step in the plan, most commonly forgotten."
          },
          {
            "name": "Clear the domain blockers days early",
            "description": "For a tenant-to-tenant cutover, removal of the domain from the source is blocked by any remaining UPN, primary SMTP address or group still carrying it — and by soft-deleted users sitting in the recycle bin. Rename and purge in advance so the removal itself is a formality. This is where cutovers stall."
          },
          {
            "name": "Freeze and run the final delta",
            "description": "Stop changes in the source and run the last incremental sync, so you are catching up hours of mail rather than weeks."
          },
          {
            "name": "Verify the domain in the target, then stamp addresses",
            "description": "A domain can be verified in only one Microsoft 365 tenant at a time. Add and verify it in the target with the TXT record, then stamp addresses onto the migrated objects."
          },
          {
            "name": "Repoint routing last",
            "description": "Change MX and autodiscover only once mailboxes and addresses are in place. Microsoft notes it can take **up to 72 hours** for external senders' systems to pick up an MX change — the switchover moment and full external propagation are not the same thing."
          },
          {
            "name": "Prove mail flow, then stand down the source",
            "description": "Inbound and outbound test mail from outside the organization, autodiscover resolving, one real device profile rebuilt. For an Exchange cutover, do not delete the migration batch until mail is confirmed flowing to the cloud and the batch has synced again after the routing change — Microsoft's guidance is to wait at least 72 hours."
          }
        ]
      },
      {
        "type": "list",
        "heading": "What a cutover does not carry across (Exchange method)",
        "items": [
          "**Directory synchronisation has to be off.** If Entra Connect is running you must turn it off before the cutover batch — this is a documented prerequisite, not a preference.",
          "**Passwords.** The migration service creates new cloud accounts; you distribute temporary passwords. Budget the help-desk load, or use minimal hybrid, which syncs passwords once.",
          "**Security groups as security groups.** The service cannot tell which on-premises groups were security groups, so pre-create empty mail-enabled security groups in the target before the batch runs.",
          "**Delegates and managers pointing at objects that are not migrating** — strip them beforehand or the objects fail. Mailboxes hidden from address lists are skipped, and Unified Messaging must be disabled first.",
          "**Licences.** Migrated users land unlicensed; assign licences or the mailbox is disabled when the grace period ends."
        ]
      },
      {
        "type": "prose",
        "heading": "The rollback question nobody asks",
        "paragraphs": [
          "Ask it before you approve the plan: at what point does rollback stop being possible? Usually earlier than people assume. Data copy is often reversible — a copy-based tool leaves the source mailbox intact, so you can abandon the target. Identity and routing are not. Once the domain is verified in the target and MX is repointed, mail delivered after that moment exists only there; reversing means stripping the domain out of the target and re-verifying it in the source, which takes hours and drops mail while it happens.",
          "Know which tooling you are using, because it changes the answer. Microsoft's native cross-tenant mailbox migration **moves** rather than copies — on completion the source mailbox is converted to a mail user with a forwarding address to the target — so its rollback profile is genuinely different from a third-party copy. It also carries a hard commercial gate: a per-user Cross-Tenant User Data Migration add-on licence, assignable on either the source or target user, without which moves fail. Confirm current licensing terms before you build a plan around it.",
          "In practice most cutovers have a forward-fix plan, not a rollback plan: a defined set of failures you will repair in place, a communications path, and a named person authorised to pause the remaining scope. Write that down. Treat \"we can roll back\" as a claim to test in the [migration assessment](/assessments/tenant-migration/), not one to accept."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How long does a cutover migration take?",
        "a": "For a small Exchange cutover, a weekend covers the visible part: Friday evening freeze, batch running Saturday, routing changed and validated Sunday — but external mail systems can take up to 72 hours to honour the new MX record, and Microsoft advises waiting that long before deleting the migration batch. For a tenant-to-tenant cutover the constrained step is domain release and re-verification, commonly a few hours inside a longer freeze. The surrounding project — discovery, mapping, pilot, remediation — commonly runs 8–16 weeks regardless of how short the window is."
      },
      {
        "q": "Is a cutover cheaper than a phased migration?",
        "a": "The event is cheaper; the risk is not. Cutover removes the coexistence engineering — no cross-tenant free/busy, no dual mail routing, no [Day 1 coexistence](/resources/glossary/day-1-coexistence/) design — and that is real savings. It buys them by concentrating everything into one night affecting everyone, and by pushing cost into the help desk the following week. Under about 150 users that trade is usually right. Over it, rarely."
      },
      {
        "q": "What breaks after a cutover that nobody planned for?",
        "a": "Outlook profiles and cached OST files need rebuilding for every user, and mobile devices need re-authenticating. Shared mailbox and calendar permissions frequently do not survive intact. Anything with a hard-coded address — scanners, SMTP relay, line-of-business apps — surfaces Monday morning rather than in the plan, as do third-party services federated to the old tenant."
      },
      {
        "q": "Can we use a cutover for an M&A tenant consolidation?",
        "a": "Sometimes. It fits a small acquired entity with a clean tenant and no regulatory hold requirements. It fits poorly where there is a TSA clock, a shared domain, active eDiscovery, or users who must collaborate across both sides before the move completes. Those cases need a coexistence design — see [M&A tenant migration](/services/ma-tenant-migration/)."
      }
    ],
    "relatedTermSlugs": [
      "tenant-to-tenant-migration",
      "day-1-coexistence",
      "cross-tenant-identity-mapping",
      "tsa-exit",
      "carve-out"
    ],
    "relatedServiceSlugs": [
      "ma-tenant-migration",
      "microsoft-365-migration",
      "collaboration-enablement"
    ]
  },
  {
    "slug": "cross-tenant-identity-mapping",
    "term": "Cross-Tenant Identity Mapping",
    "shortDefinition": "Cross-tenant identity mapping is the one-to-one link between each user, group and mailbox in a source Microsoft 365 tenant and its counterpart in the target tenant. Migration tools read that map to decide whose mail, files, chats and permissions land where. Get a row wrong and the data moves to the wrong person.",
    "aliases": [
      "identity mapping",
      "user mapping in tenant migration",
      "CTIM",
      "CTIM PowerShell module",
      "Cross-Tenant Identity Mapping tool",
      "source to target user mapping",
      "identity mapping file Microsoft 365",
      "tenant migration user matching"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "Why identity is the hardest part of a tenant migration",
        "paragraphs": [
          "Mail, files and chats are, mechanically, copy jobs. Identity is not. Source and target are separate Entra ID directories with no shared authority, different object GUIDs, and a verified domain that can only live in one tenant at a time. Nothing knows that Jane Smith in the source is J.Smith in the target. You assert it, and the tooling executes your assertion faithfully, at scale, whether or not it is right.",
          "No single map covers every workload. Microsoft's orchestrated cross-tenant migration requires Cross-Tenant Identity Mapping (CTIM), a PowerShell module that copies source mailbox attributes into the target tenant and then stamps ExchangeGuid, ArchiveGuid, the source LegacyExchangeDN as an x500 proxy address, PrimarySmtpAddress and proxy addresses onto the target MailUser. That one map drives the orchestrator's Exchange, OneDrive, Teams chat and Teams meeting moves. SharePoint sites and Teams channels sit outside it entirely; the separate cross-tenant SharePoint and OneDrive feature uses its own six-column CSV, uploaded with no header row via Add-SPOTenantIdentityMap. CTIM is still a preview module and its cmdlet behaviour changes between versions, so verify against current Microsoft documentation before scripting a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/)."
        ]
      },
      {
        "type": "table",
        "heading": "What you actually match on",
        "headers": [
          "Match key",
          "Why it gets used",
          "Where it breaks"
        ],
        "rows": [
          [
            "Primary SMTP address",
            "CTIM's recommended automatic mode. It searches the target tenant for a MailUser carrying the source user's PrimarySmtpAddress, which is why Microsoft tells you to stamp that value into the target object's ExternalEmailAddress.",
            "Addresses get reused after leavers, and shared and resource mailboxes follow the same naming patterns as people. Unmatched objects are simply left unmapped; the dangerous outcome is a match that is confidently wrong, not one that is missing."
          ],
          [
            "Target directory object GUID",
            "CTIM's manual fallback: download the copied-identity CSV, populate TargetExternalDirectoryObjectId with the target MailUser's GUID, upload, and map from the file. GUIDs do not collide or get recycled.",
            "Unreadable to the HR and business people who have to sign the list off. It is an execution format, not a review format, so the decision still has to be made in names first."
          ],
          [
            "UPN",
            "Readable in a spreadsheet, so business reviewers can check it.",
            "UPNs nearly always change at migration because the domain changes. Source-to-target UPN matching only works where target UPNs are generated deterministically from source ones."
          ],
          [
            "Employee ID or HR identifier",
            "Stable through name changes, rebrands and dual accounts, and the only key finance or HR can reconcile against a transferring-employee schedule.",
            "Rarely populated consistently in either directory. You usually seed it from an HR extract, then use it to build the SMTP or GUID map the tools actually consume."
          ]
        ]
      },
      {
        "type": "list",
        "heading": "Resolve these before you map anything",
        "items": [
          "**Users who already exist in both tenants** — common when the acquirer onboarded leadership early. Decide which mailbox is authoritative. Nothing in the toolchain merges two mailboxes for you.",
          "**The target object must be the right shape.** Each in-scope person needs a mailbox in the source and a MailUser — not a mailbox — in the target before mapping runs. That holds even if you are not moving mailboxes at all.",
          "**Sites and OneDrives owned by an admin account.** The SharePoint identity map is strictly one-to-one, so one admin listed as owner of dozens of sites cannot be mapped to dozens of target users. Reassign ownership first, or that content does not migrate.",
          "**Anything on hold.** Microsoft blocks the migration of mailboxes on any type of hold, including an [eDiscovery hold](/resources/glossary/ediscovery-hold/), litigation hold or retention hold. Leavers inside the deal perimeter are exactly the population most likely to be held, so find them during mapping rather than during the pilot.",
          "**Your scope groups.** CTIM takes its scope from the mail-enabled security groups named in MailboxMovePublishedScope on the organization relationship, and an object must not appear in two scopes. Re-running a copy request with -Overwrite discards previously completed mapping work with no recovery unless you saved the mapping file first."
        ]
      },
      {
        "type": "list",
        "heading": "What breaks downstream when the mapping is wrong",
        "items": [
          "**Replies to old mail bounce.** If the source LegacyExchangeDN is not carried over as an x500 proxy address, the addresses embedded in historic messages and in Outlook's autocomplete cache resolve to nothing and delivery fails with a 5.1.1 NDR.",
          "**An empty mailbox appears in the target.** License a target user before mapping and Exchange provisions a fresh mailbox instead of leaving a MailUser, and the move will not run against it. The order is map, write attributes, then license.",
          "**Files land on the wrong person.** One wrong row moves an employee's OneDrive to a colleague. That is a data-exposure incident, not a migration defect, and it is usually found by the wrong person.",
          "**Permissions disappear rather than translate.** Delegate access, Send As, Full Access and site permissions held by unmapped identities are dropped. A rebuild list is standard post-[cutover](/resources/glossary/cutover-migration/) work.",
          "**Downstream systems orphan their owners.** Dynamics 365 record ownership, Power Automate flow owners and connection references, and Power BI workspace access all resolve against an Entra object that does not exist in the target. A re-created identity is a new object with a new GUID, and none of this follows the mapping file."
        ]
      },
      {
        "type": "list",
        "heading": "Limits worth stating out loud",
        "items": [
          "It does not merge anything. Two mailboxes, two OneDrives or two accounts for the same human stay two things; you choose one and deal with the other manually.",
          "It does not move your domain. Because a verified domain belongs to one tenant at a time, target objects carry target-tenant addresses until the domain is removed from the source and verified in the target — and the old addresses then have to be re-added as proxies.",
          "It is not a rollback. In the orchestrated path the source mailbox is deleted after a successful move and replaced with a MailUser for routing; the source copy is not a safety net.",
          "It does not cover shared content. Teams and channels and SharePoint sites are out of the orchestrator's scope and remain in the source tenant, which is a separate project with its own identity map.",
          "If the two organisations are going to keep operating independently — no TSA deadline, no shared identity requirement — a fully mapped migration is more work than a guest-access and coexistence arrangement. Map identities when you genuinely intend to consolidate."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is cross-tenant identity mapping the same thing as Microsoft's CTIM tool?",
        "a": "No. Identity mapping is the decision — which source identity becomes which target identity. CTIM is Microsoft's PowerShell module that automates executing that decision on the Exchange objects. It is required for the orchestrated migration method and optional for standalone cross-tenant mailbox moves. SharePoint sites use a separate identity map of their own."
      },
      {
        "q": "Can users keep their existing email addresses?",
        "a": "Not immediately, and not automatically. A verified domain can belong to only one tenant, so target accounts are created with target-tenant addresses and you cannot pre-stamp source-domain proxies on them. The domain is removed from the source and verified in the target during a short cutover window, after which the old addresses are added back as proxy addresses so inbound mail still delivers."
      },
      {
        "q": "When should the mapping be built?",
        "a": "Before any target user is licensed, and well before the first pilot wave. It is often the longest task in migration prep because it forces HR, IT and the deal team to agree who is actually transferring — a scoping deliverable, not something IT can infer from a directory export. On [M&A tenant migrations](/services/ma-tenant-migration/) that list is normally the long pole."
      },
      {
        "q": "How do we validate a mapping before we trust it?",
        "a": "Run a pilot wave that deliberately includes the awkward cases: a dual-tenant employee, a shared mailbox, an admin-owned site and a heavy delegate user. Then check reply-ability to pre-migration mail, OneDrive ownership and delegate access after the move — not just whether the move job reported success."
      },
      {
        "q": "Does the migration itself need extra licensing?",
        "a": "Microsoft's orchestrated cross-tenant migration requires a per-user, one-time migration add-on that can be assigned on either the source or the target user object, on top of normal Microsoft 365 licensing. Eligible plans and terms change, so confirm current details with Microsoft or your licensing partner. Identity mapping itself is not separately licensed; its cost is people time."
      }
    ],
    "relatedTermSlugs": [
      "tenant-to-tenant-migration",
      "cutover-migration",
      "carve-out",
      "day-1-coexistence",
      "ediscovery-hold"
    ],
    "relatedServiceSlugs": [
      "ma-tenant-migration",
      "microsoft-365-migration"
    ]
  },
  {
    "slug": "carve-out",
    "term": "Carve-Out (IT Separation)",
    "shortDefinition": "A carve-out is the IT separation of a divested business — a sold division, spin-off or subsidiary — out of its parent's Microsoft 365 tenant. No operation splits a tenant in two, so a carve-out means standing up a target tenant and migrating only the identities, data and applications the purchase agreement actually transfers.",
    "aliases": [
      "divestiture IT separation",
      "IT carve-out",
      "Microsoft 365 tenant split",
      "spin-off migration",
      "tenant separation",
      "divestiture migration",
      "separating a business unit from a Microsoft 365 tenant"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "Why a carve-out is harder than a merger",
        "paragraphs": [
          "A merger is additive: two tenants become one and the worst thing that happens to a user is a duplicate account. A carve-out is subtractive. You have to draw a defensible line through an estate that was deliberately built without one — a SharePoint site holding contracts for both businesses, a distribution list spanning both, one Dataverse table with both customer sets. The mechanics are those of a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/); what makes a carve-out hard is deciding what is in scope."
        ]
      },
      {
        "type": "table",
        "headers": [
          "",
          "Merger / consolidation",
          "Carve-out / divestiture"
        ],
        "rows": [
          [
            "Data decision",
            "Move everything, de-duplicate later",
            "Every object needs an owner decision before it moves"
          ],
          [
            "Target",
            "Already exists and is running",
            "Often built from zero: tenant, domains, licensing, security baseline"
          ],
          [
            "Deadline",
            "Business-driven, movable",
            "Legal close and [TSA exit](/resources/glossary/tsa-exit/) — slipping costs real money"
          ],
          [
            "Cost of error",
            "Users inconvenienced",
            "Over-share is a disclosure; under-share stops the buyer trading"
          ],
          [
            "Rollback",
            "Re-run the move",
            "Data now sits with a separate legal entity; you cannot un-send it"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Entitlement is a legal decision, not a technical one",
        "paragraphs": [
          "The hardest question is not how to move data — it is who is entitled to it. A transferring employee's mailbox holds a decade of retained-business email; a finance folder covers both entities. IT cannot answer that and should not try. Counsel and the purchase agreement decide; IT produces an inventory precise enough for them to rule on, then executes the ruling.",
          "Preservation duties narrow the options and also stop the tooling. Microsoft blocks cross-tenant migration of mailboxes on any type of hold, and of OneDrive accounts under a hold policy, so every [eDiscovery hold](/resources/glossary/ediscovery-hold/) has to be resolved before that object can move. A successful cross-tenant mailbox move then deletes the source mailbox, and the seller can no longer search it — so if the seller needs its own copy of a transferring user's mail, it takes that copy before the move, not after."
        ]
      },
      {
        "type": "list",
        "heading": "What actually has to be separated",
        "items": [
          "**Identity and domains.** Accounts, groups, guests, conditional access, app registrations and service principals. Domains are the sharp edge: a custom domain can be verified in only one tenant, so if both businesses trade under it, one side has to move off it and tell every customer and vendor that its addresses changed.",
          "**Email and mail flow.** Mailboxes, shared mailboxes, distribution lists, connectors and transport rules. The native cross-tenant move needs a MailUser pre-created in the target and stamped with the source mailbox's ExchangeGUID and proxy addresses; Microsoft's guidance is batches under roughly 2,000 mailboxes, submitted about two weeks before cutover.",
          "**Files, Teams and sites.** Microsoft's cross-tenant user data migration covers per-user content — mailboxes, OneDrive, and more recently Teams chats and meetings — under the per-user Cross-Tenant User Data Migration add-on license, which has to be purchased before you start. Shared data sits outside it: Teams and channels and SharePoint sites need a separate site-migration path, licensed by data volume rather than per user. OneDrive moves are one-shot, with no incremental or delta pass. Confirm current licensing and workload scope before you budget — Microsoft has changed both more than once.",
          "**Business applications.** A Dataverse environment can be moved between tenants with the destination admin's approval, but it carries data, not people: target users must already exist and be listed in a mapping file, security groups are not migrated, and canvas apps, custom connectors, connections and Power Pages sites have to be exported and rebuilt. A Dataverse organization linked to a finance and operations environment cannot be moved at all. None of it helps when one environment serves both businesses — then you are filtering rows out of shared tables.",
          "**Compliance and endpoints.** Purview retention policies, DLP rules and sensitivity labels do not travel. Cross-tenant migration does not export labels and labels cannot be shared between tenants, so the target has to recreate them — and label-encrypted content usually needs its protection removed before it moves, or it arrives unreadable. Intune enrollment and every SaaS app federated to the old tenant need re-pointing."
        ]
      },
      {
        "type": "prose",
        "heading": "Limits and honest caveats",
        "paragraphs": [
          "A carve-out is not finished when the buyer is live. The retained tenant still needs decommissioning — revoking guest access, converting or removing transferred accounts, retiring orphaned sites, right-sizing licenses. That workstream is routinely skipped, and it is where the seller's residual risk sits.",
          "Not everything should move, either. Buyers often do not want twelve years of mailbox history they will then be obliged to preserve and produce. And if the divested unit is small and folding straight into an acquirer's existing tenant, building a standalone tenant first is wasted money — migrate once, into the destination. MP365 runs carve-outs as part of its [M&A tenant migration](/services/ma-tenant-migration/) practice."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can you split a Microsoft 365 tenant?",
        "a": "No. Nothing divides an existing tenant in two. You provision a new tenant (or use the buyer's), pre-create the in-scope users there and migrate their content across. Microsoft's tooling calls this a tenant move or split, but mechanically it is a migration of a subset of users. The original tenant keeps running and stays with the seller."
      },
      {
        "q": "How long does a carve-out take?",
        "a": "Entitlement decisions drive the timeline more than data volume does. Separating a small single-workload unit can run in weeks; a mid-market carve-out spanning email, files, Dynamics 365 and endpoints commonly runs several months from first inventory to TSA exit. The usual bottleneck is legal sign-off on shared data, not migration throughput."
      },
      {
        "q": "Who owns email and files that relate to both businesses?",
        "a": "The purchase agreement and counsel decide. A frequent outcome is that both parties keep a copy of jointly relevant content, with the seller retaining the authoritative record for anything under retention or legal hold. IT supplies the inventory and executes; it does not adjudicate."
      },
      {
        "q": "Do Teams and SharePoint move with the users?",
        "a": "Not with the per-user tooling. Microsoft's cross-tenant user data migration handles mailboxes, OneDrive and Teams chats and meetings; Teams and channels and SharePoint sites sit outside it and need the separate site-migration path or a third-party tool. Chat history that does move can land as new or duplicate threads rather than continuing in place."
      }
    ],
    "relatedTermSlugs": [
      "tenant-to-tenant-migration",
      "tsa-exit",
      "day-1-coexistence",
      "cross-tenant-identity-mapping",
      "ediscovery-hold"
    ],
    "relatedServiceSlugs": [
      "ma-tenant-migration",
      "microsoft-365-migration",
      "data-governance"
    ]
  },
  {
    "slug": "data-loss-prevention-dlp",
    "term": "Data Loss Prevention (DLP)",
    "shortDefinition": "Data Loss Prevention (DLP) is a policy engine that detects sensitive content — card numbers, patient identifiers, contract terms, source code — and then audits, warns, or blocks the way it is shared. In Microsoft's stack the name covers two separate systems: Purview DLP, which inspects content across Microsoft 365, and Power Platform data policies, which restrict connectors.",
    "aliases": [
      "DLP",
      "Microsoft 365 DLP",
      "Purview DLP",
      "data leak prevention",
      "DLP policy",
      "Power Platform DLP",
      "endpoint DLP"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "What Purview DLP actually inspects",
        "paragraphs": [
          "Purview DLP evaluates content against **sensitive information types** (a pattern plus checksum, supporting keywords and a confidence threshold), **trainable classifiers**, **exact data match** against a hashed copy of your own record set, document fingerprints, and applied [sensitivity labels](/resources/glossary/sensitivity-label/). A policy is scoped to locations: Exchange email, SharePoint sites, OneDrive accounts, Teams chat and channel messages, Office desktop apps, Windows and macOS devices onboarded to Purview, on-premises file shares and on-premises SharePoint via the Purview information protection scanner, Fabric and Power BI workspaces, non-Microsoft cloud apps through Defender for Cloud Apps, and — in preview at the time of writing — Microsoft 365 Copilot.",
          "Evaluation differs by location, which surprises people. SharePoint and OneDrive scan existing items as well as new and changed ones; Exchange, Teams and devices only evaluate activity that happens after the policy is live, and DLP never retro-scans an existing mailbox or archive. The conditions available to a policy are also the intersection of what its selected locations support, so bundling every workload into one policy quietly removes options — Teams chat supports far fewer condition types than SharePoint does. Check the location matrix in Microsoft's DLP policy reference before combining locations, and expect several narrow policies rather than one broad one."
        ]
      },
      {
        "type": "table",
        "heading": "Purview DLP vs Power Platform DLP — not the same product",
        "headers": [
          "",
          "Microsoft Purview DLP",
          "Power Platform data policies (DLP)"
        ],
        "rows": [
          [
            "What it evaluates",
            "The content itself — message bodies, attachments, files, endpoint activity",
            "The connectors an app, flow or agent uses. It never looks at the data passing through them"
          ],
          [
            "Where it applies",
            "Exchange, SharePoint, OneDrive, Teams, Office apps, endpoints, on-premises repositories, Fabric/Power BI, cloud apps via Defender for Cloud Apps",
            "Power Apps, Power Automate flows and Copilot Studio agents, scoped tenant-wide or to specific [environments](/resources/glossary/power-platform-environment/)"
          ],
          [
            "How it decides",
            "A classifier, pattern, fingerprint, EDM or label match above a set confidence and instance count",
            "Connectors sit in Business, Non-Business or Blocked. One app or flow cannot combine connectors from two different groups; new connectors land in whichever default group you set"
          ],
          [
            "What the user hits",
            "A policy tip, a justification prompt, or a block",
            "A maker cannot save a non-compliant app or flow. Existing resources are suspended and violating connections disabled when a policy changes — usually within an hour, up to 24 hours in large tenants"
          ],
          [
            "Administered in",
            "Microsoft Purview portal",
            "Power Platform admin center, under Security > Data and privacy"
          ]
        ]
      },
      {
        "type": "list",
        "heading": "Choosing the action",
        "items": [
          "**Audit only, no tip.** Activity is recorded to the audit log and Activity explorer; the user sees nothing. This is the mode you tune in.",
          "**Policy tips** are in-client warnings shown before the user sends or shares, and they depend on the client rendering them. A tip a client cannot display simply never appears, and some endpoint activities are audited without any tip at all — so a tip-only policy is awareness, not control.",
          "**Block with override plus business justification** is the pragmatic default for most rules. It stops the accidental send, lets the legitimate one through, and the justifications users type are far better tuning input than a raw match count.",
          "**Hard block, no override** belongs on a short list: regulated identifiers leaving the tenant, downloads to unmanaged devices, bulk copy to removable media. Every hard block you add is a ticket queue you own."
        ]
      },
      {
        "type": "steps",
        "heading": "A rollout sequence that avoids a support flood",
        "steps": [
          {
            "name": "Name the data, not the category",
            "description": "\"PII\" is not a scope. \"Member IDs in this format\", \"the customer master export from the ERP\", \"signed MSAs\" are. Generic out-of-the-box patterns are the single biggest source of false positives; exact data match and fingerprints exist because of this."
          },
          {
            "name": "Run in simulation mode, tips off",
            "description": "Simulation runs the policy as if enforcing, takes no action, and reports matches to a separate dashboard rather than the live alerts console. Leave the \"show policy tips while in simulation mode\" box unchecked for this pass, and leave the option that auto-enables the policy after fifteen untouched days off unless you actually mean it. Results are kept 30 days — older runs show as expired — and only the first 100 matched SharePoint and OneDrive items are listed for review, so treat the item list as a sample, not a census."
          },
          {
            "name": "Tune before anyone sees anything",
            "description": "Raise confidence levels, require a minimum instance count, and exclude the service accounts, migration jobs and archive libraries that dominate the first pass. Expect a handful of sources to generate most of the volume."
          },
          {
            "name": "Re-run simulation with tips on",
            "description": "Two to three weeks with policy tips and still no enforcement. Tip volume is a direct forecast of your support wave, and it lets users self-correct before anything is blocked."
          },
          {
            "name": "Enforce narrowly",
            "description": "Start with the highest-confidence rule, external recipients only, block with override. Then widen scope, and only afterwards consider removing overrides on the narrowest rules. Policies generally take about an hour to take effect after being turned on."
          },
          {
            "name": "Review justifications monthly",
            "description": "Overrides tell you where the policy is wrong and where a business process needs a sanctioned alternative. A DLP programme with no feedback loop degrades into noise people route around."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Limits and caveats",
        "paragraphs": [
          "DLP reduces accidental and casual leakage. It does not stop someone determined to photograph a screen or retype a number, and it does not classify your estate for you — it acts on what its classifiers happen to match. It also has mechanical limits: only a bounded amount of text is extracted per file and only a few levels of nested archives are inspected, so a sensitive workbook zipped twice can pass. Coverage of endpoints, Copilot interactions and non-Microsoft apps depends on device onboarding and licensing tier, and Microsoft moves capabilities between tiers release to release, so verify current service descriptions rather than assuming what was true last year.",
          "Two scoping traps catch most first rollouts. A Teams policy scoped to individual user accounts covers 1:1 and group chats but not standard, private or shared channel messages — channel coverage requires scoping to security, distribution or Microsoft 365 groups. And in cross-tenant Teams chat, enforcement follows the tenant hosting the conversation rather than the sender's home tenant, while in shared channels each sender is evaluated against their own tenant's policies. Both matter if you are running two tenants alongside each other during an integration.",
          "Power Platform DLP is a governance control, not a data control: a flow using only approved Business connectors can still email an entire customer list to the wrong address, and some first-party connectors are non-blockable by design — they stay in Non-Business whatever you do. Environment-level policies also cannot override a tenant-level one. Purview DLP policies, meanwhile, are tenant objects that do not travel with mailboxes or sites: in a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) they have to be rebuilt and running in the target before cutover, or the first weeks in the new tenant are unprotected. Exporting the source configuration with Security & Compliance PowerShell gives you a starting point, but custom sensitive information types, EDM schemas and label dependencies have to be recreated by hand. Designing that in as part of a wider [data governance](/services/data-governance/) programme is cheaper than retrofitting it after an incident."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is DLP included in Microsoft 365 E3, or do I need E5?",
        "a": "Office 365 and Microsoft 365 E3 include DLP for Exchange, SharePoint and OneDrive — which covers files shared through Teams, because those files live in SharePoint and OneDrive. DLP for Teams chat and channel messages requires E5 or an equivalent compliance SKU, as do endpoint DLP and the richer classifier set. Microsoft adjusts and renames these boundaries, so confirm against current licensing terms before you budget."
      },
      {
        "q": "My DLP policy is not catching anything in Teams channels. Why?",
        "a": "Most often, policy scoping. A Teams DLP policy scoped to individual user accounts applies to 1:1 and group chats only. To cover standard, private and shared channel messages, scope the policy to security groups, distribution groups or Microsoft 365 groups instead."
      },
      {
        "q": "What is the difference between a DLP policy and a retention policy?",
        "a": "DLP controls how content moves — who it can be shared with and what a user is allowed to do with it. A retention policy controls how long content is kept and when it is deleted. Both live in Purview, but they are separate engines and neither substitutes for the other."
      },
      {
        "q": "Will Power Platform DLP stop a Power App from exposing sensitive data?",
        "a": "No. It only restricts which connectors can be combined in one app, flow or agent. It never inspects the data. Content-level protection inside Power Platform comes from Dataverse security roles, column-level security and sensitivity labels, not from connector grouping."
      },
      {
        "q": "How long does a first DLP rollout take?",
        "a": "For a defined scope — one or two data categories across email and SharePoint — 8 to 12 weeks is a common industry range, with most of it spent in simulation and tuning rather than configuration. Building the policies is days. Getting the false-positive rate low enough that people do not learn to ignore the tips is the actual work."
      }
    ],
    "relatedTermSlugs": [
      "microsoft-purview",
      "sensitivity-label",
      "retention-policy",
      "power-platform-environment",
      "premium-connector",
      "tenant-to-tenant-migration",
      "day-1-coexistence"
    ],
    "relatedServiceSlugs": [
      "data-governance",
      "power-platform",
      "ma-tenant-migration"
    ]
  },
  {
    "slug": "microsoft-purview",
    "term": "Microsoft Purview",
    "shortDefinition": "Microsoft Purview is Microsoft's brand for data security, data governance, and risk and compliance tooling: sensitivity labels, data loss prevention, retention, eDiscovery, insider risk and data cataloging, run from one portal and covering Microsoft 365 plus, increasingly, data outside it. Microsoft 365 E3 covers a basic subset; most advanced capabilities require E5 or the Purview Suite add-on.",
    "aliases": [
      "Purview",
      "Microsoft 365 Purview",
      "Purview portal",
      "Purview compliance portal",
      "Microsoft 365 compliance center",
      "Azure Purview",
      "Microsoft Purview data governance"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "What Purview is, and what it replaced",
        "paragraphs": [
          "Purview is a brand covering a set of solutions, not one application. In April 2022 Microsoft folded two products under the name: the Microsoft 365 compliance center — labels, retention, DLP, eDiscovery, audit — and Azure Purview, which cataloged data outside Microsoft 365. Everything now runs from purview.microsoft.com; the classic compliance portal is retired.",
          "Anything written before 2023 uses names gone from the interface — Security & Compliance Center, Azure Information Protection, Azure Purview — and the tooling went with them: classic Content Search and classic eDiscovery (Standard) and (Premium) were retired on August 31, 2025.",
          "Classification is the thread connecting all of it. Sensitive information types, trainable classifiers and labels are defined once, then consumed by DLP, retention, insider risk and reporting. If the classification layer is wrong, every control built on top of it is wrong in the same direction."
        ]
      },
      {
        "type": "list",
        "heading": "The main capability areas",
        "items": [
          "**Information Protection** — [sensitivity labels](/resources/glossary/sensitivity-label/) that classify and optionally encrypt content, so protection travels with the file outside your tenant.",
          "**Data Loss Prevention** — [DLP](/resources/glossary/data-loss-prevention-dlp/) policies that warn on or block sensitive data leaving through Exchange, SharePoint and OneDrive; Teams messages, endpoints and browser traffic are licensed or metered separately.",
          "**Data Lifecycle and Records Management** — retention policies and labels, disposition review, immutable records.",
          "**eDiscovery and Audit** — search, hold, review and export across Exchange, SharePoint, OneDrive and Teams, plus the unified audit log (on by default, 180 days at the base tier).",
          "**Insider Risk Management and Communication Compliance** — behavioral signals for data theft and policy-violating messages; both carry HR and privacy implications, so involve legal before enabling them.",
          "**Data Map and Unified Catalog** — scanning, lineage and cataloging outside Microsoft 365, billed pay-as-you-go against an Azure subscription rather than Microsoft 365 seats.",
          "**Compliance Manager and posture management** — control assessments mapped to regulatory frameworks, and reporting on where sensitive data sits and what Copilot can reach. AI-facing features change release to release."
        ]
      },
      {
        "type": "table",
        "heading": "What E3 gets you, and what needs E5",
        "headers": [
          "Capability",
          "Microsoft 365 E3",
          "E5 or Purview Suite add-on"
        ],
        "rows": [
          [
            "Sensitivity labels",
            "Manual labeling by users",
            "Automatic and recommended labeling, trainable classifiers"
          ],
          [
            "Data loss prevention",
            "Exchange, SharePoint, OneDrive, including files shared via Teams",
            "Adds Teams chat and channel messages, endpoint DLP (Windows and macOS), advanced Outlook policy tips"
          ],
          [
            "Retention",
            "Retention policies and published labels",
            "Adaptive scopes, auto-applied labels, disposition review, records management"
          ],
          [
            "eDiscovery",
            "Search, hold, export",
            "Review sets, analytics, advanced processing"
          ],
          [
            "Audit",
            "180 days of audit records",
            "One year, high-value events such as mailbox item access; 10-year add-on"
          ],
          [
            "Insider risk, communication compliance",
            "Not included",
            "Included"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Owning it is not the same as being compliant",
        "paragraphs": [
          "Microsoft moves the E3/E5 split and the SKU names between releases — the E5 Compliance add-on is now sold as the Purview Suite — so confirm the split in the current service description, and license the users a policy applies to, not only the admins configuring it.",
          "Little of value is on by default. Audit logging runs from day one and new tenants get a stock Teams DLP policy that alerts on credit card numbers, but nothing reflecting your organization exists until you build it: expect a few weeks for discovery and taxonomy, several more with policies in simulation, and phased enforcement across a couple of quarters. An E5 tenant with no taxonomy, every policy still in simulation and nobody owning false positives is as exposed as an E3 tenant that never bought the licenses.",
          "The failure modes are consistent: twenty labels nobody can tell apart; DLP left in test mode for a year because no one will accept the first false positive; retention published before legal confirmed the schedule, which then deletes irreversibly; endpoints, file shares and third-party SaaS assumed to be covered when they need agents, connectors or pay-as-you-go meters. Most [data governance](/services/data-governance/) engagements start by cutting a proposed taxonomy down, not extending it.",
          "It can also be the wrong first purchase: if most of your regulated data sits in an ERP, a clinical system or a file server rather than Microsoft 365, Purview governs the least exposed part of your estate at enterprise-license prices.",
          "Purview configuration is tenant-scoped and does not travel. In a migration, labels, DLP rules, retention and holds are rebuilt in the target; source-tenant label identifiers are not recognized there, so encrypted content can arrive unreadable, and SharePoint cross-tenant moves will not carry sites holding files encrypted with user-defined permissions. Preserving what is under legal hold is a standard workstream in any [M&A tenant migration](/services/ma-tenant-migration/)."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is Microsoft Purview included in Microsoft 365 E3?",
        "a": "Partly. E3 covers manual sensitivity labels, DLP for Exchange, SharePoint and OneDrive (including files shared through Teams, but not Teams chat and channel messages), retention policies and published labels, eDiscovery search, hold and export, and 180 days of audit records. Automatic labeling, Teams-message and endpoint DLP, insider risk management, communication compliance, records management and premium eDiscovery need E5 or the Purview Suite add-on. Confirm the current split in Microsoft's Purview service description before you budget."
      },
      {
        "q": "What happened to Azure Purview?",
        "a": "Renamed, not retired. Data estate scanning and cataloging now appear as Purview Data Map and Unified Catalog in the Purview portal, billed pay-as-you-go through an associated Azure subscription rather than Microsoft 365 seats. Documentation that says Azure Purview or Microsoft 365 compliance center describes the same lineage under older names."
      },
      {
        "q": "What is the difference between Microsoft Purview and Microsoft Defender?",
        "a": "Defender defends against attackers across identities, endpoints, email and cloud apps. Purview governs the data itself: classifying it, restricting where it can go, keeping or deleting it on schedule, and producing evidence. They share signals and sit in adjacent portals; neither substitutes for the other."
      },
      {
        "q": "Does Microsoft Purview make us GDPR or HIPAA compliant?",
        "a": "No. Purview provides controls and evidence; compliance is a legal determination about your processes, contracts and records. Compliance Manager scores your configuration against a framework's technical controls, which is useful for gap analysis, but the score is not an audit result and says nothing about data outside Microsoft 365."
      },
      {
        "q": "Do Purview policies survive a tenant-to-tenant migration?",
        "a": "No. They are tenant-scoped configuration rather than mailbox or file content, so labels, DLP rules, retention and holds are rebuilt in the target and reapplied after content lands. Encrypted labeled content needs handling before the move, and anything under legal hold in the source needs a documented preservation plan before that tenant is decommissioned."
      }
    ],
    "relatedTermSlugs": [
      "sensitivity-label",
      "data-loss-prevention-dlp",
      "retention-policy",
      "ediscovery-hold",
      "tenant-to-tenant-migration"
    ],
    "relatedServiceSlugs": [
      "data-governance",
      "ma-tenant-migration",
      "microsoft-365-migration"
    ]
  },
  {
    "slug": "retention-policy",
    "term": "Retention Policy",
    "shortDefinition": "A retention policy in Microsoft Purview automatically keeps content for a set period, deletes it after a set period, or both. It applies to whole locations — Exchange mailboxes, SharePoint sites, OneDrive, Teams messages, Copilot interactions — and enforces itself invisibly: if a user deletes an item early, a hidden copy is preserved until the period ends.",
    "aliases": [
      "Microsoft 365 retention policy",
      "Purview retention policy",
      "data retention policy",
      "retention schedule",
      "retain and delete policy",
      "Exchange Online retention policy",
      "SharePoint retention policy",
      "Teams retention policy",
      "Microsoft 365 retention settings"
    ],
    "sections": [
      {
        "type": "table",
        "heading": "The three things a retention policy can do",
        "headers": [
          "Setting",
          "What actually happens",
          "When it fits"
        ],
        "rows": [
          [
            "Retain only",
            "Content is kept for the period even if a user deletes it early. At the end, nothing is removed — the item simply stops being protected.",
            "Litigation exposure, contract repositories, anything you would rather over-keep than lose."
          ],
          [
            "Delete only",
            "Content older than the period is permanently deleted. Nothing is protected before that, so users can still delete early.",
            "Capping Teams chat sprawl, trimming stale mailbox and OneDrive content."
          ],
          [
            "Retain then delete",
            "Content is protected for the period, then permanently deleted. The only setting that implements an actual schedule.",
            "A real records requirement — keep email seven years, then dispose of it."
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Policy vs label — and why the distinction matters",
        "paragraphs": [
          "A **retention policy** targets a location. Point it at all Exchange mailboxes, a set of SharePoint sites, or Teams messages, and everything inside inherits the rule. Users cannot see it and cannot opt out. It is a floor.",
          "A **retention label** targets an individual item, or acts as the default for a library or folder. It is visible in the interface, it travels with the item if the item moves elsewhere in the tenant, and it does things a policy cannot: declare a record, start the clock from an event rather than a date, and route items to disposition review instead of silent deletion. Labels are not supported for Teams messages, Viva Engage or Exchange public folders — those require policies. The advanced label behaviours (auto-apply by classifier, event-based retention, disposition review) sit in higher licensing tiers, and Microsoft revises those lines fairly often; confirm against current terms rather than assuming.",
          "Retention labels are a different mechanism from [sensitivity labels](/resources/glossary/sensitivity-label/), which control access and encryption. One governs how long content lives, the other who can open it. Both can apply to the same file."
        ]
      },
      {
        "type": "list",
        "heading": "What happens when two rules conflict",
        "items": [
          "**Retention wins over deletion.** If one rule says keep and another says delete, the content is kept and the delete action is suspended until retention lapses. The documented exception is **priority cleanup**, a data lifecycle feature that deliberately overrides retention and eDiscovery holds — for data spillage, or for purging large Teams recordings that block a departed user's OneDrive from being deleted. It does not apply to items marked as records.",
          "**The longest retention period wins.** Three-year and ten-year rules on the same item produce ten years. Watch where the clock starts: a five-year period counted from *last modified* can outlast a seven-year period counted from *created*, because every edit restarts it.",
          "**Explicit beats implicit.** For deletion, a label's delete action beats any policy's. A policy scoped to named users or sites, or by adaptive scope, also beats an org-wide \"all mailboxes\" policy.",
          "**The shortest deletion period wins** — but only once nothing else is still retaining the item.",
          "Net effect: policies stack, they do not override. Adding one can only make content live longer, never shorter. Tenants accumulate overlapping schedules nobody remembers approving, so use **Policy lookup** in the Purview portal to see every policy that actually applies to a given mailbox, site or group before you change anything."
        ]
      },
      {
        "type": "prose",
        "heading": "Where the retained copy goes, and how slow this is",
        "paragraphs": [
          "Retention does not move content out of its working location — it intercepts deletion. Edit or delete a file in a site or OneDrive account under a retain setting and the original is written to that site's **Preservation Hold library**, a hidden system library that counts against the site's storage quota. Exchange does the equivalent in the mailbox's **Recoverable Items** folder; Teams, Viva Engage and Copilot interactions land in a **SubstrateHolds** subfolder inside it. Storage grows where nobody is looking, and you are not meant to clean it out by hand.",
          "None of this is fast. Allow up to seven days for a new policy to be applied to content. Release is slower still: when a SharePoint or OneDrive policy is deleted or disabled, affected content stays retained for a 30-day grace period, after which a cleanup timer job that runs roughly every seven days removes it — up to about 37 days end to end. Re-enable inside 30 days and nothing is lost. The trap is the exception: if instead of deleting the policy you edit it to *exclude* specific sites or accounts, the grace period does not apply and cleanup begins without the delay."
        ]
      },
      {
        "type": "prose",
        "heading": "Retention during a merger, carve-out or divestiture",
        "paragraphs": [
          "**Configuration does not travel.** Migration tooling moves mail, files and messages. It does not move retention policies, label configuration, or the preserved copies sitting in Preservation Hold libraries and Recoverable Items. You rebuild the schedule in the target tenant and re-apply label assignments — scope that explicitly in the [M&A tenant migration](/services/ma-tenant-migration/) plan rather than discovering it after cutover.",
          "**The target tenant's schedule governs arriving data from day one.** If the acquirer keeps everything ten years and the acquired business kept three, the deal just bought seven extra years of discoverable email, usually with nobody having decided that.",
          "**Check for Preservation Lock during diligence.** A locked retention policy cannot be turned off, deleted or made less restrictive by anyone, including a global administrator — it exists to satisfy rules such as SEC 17a-4. Find one in a source tenant and your decommissioning timeline is no longer yours to set.",
          "**Resolve holds before you decommission anything.** An [eDiscovery hold](/resources/glossary/ediscovery-hold/) overrides retention settings, and source-tenant data you have not preserved is unrecoverable once the tenant is deleted. Confirm custodians and matters with legal in writing before source shutdown.",
          "**Adaptive scopes carry the acquired population through coexistence.** An attribute-based query keeps acquired users on their own schedule instead of flattening everyone onto one rule at cutover, and it sidesteps the per-policy location limits that static include-lists hit at enterprise scale. The trade-off: adaptive scopes currently cannot be Preservation-Locked, so a schedule that must be locked has to use a static scope. Adaptive scoping also sits in higher-tier licensing — verify against current terms."
        ]
      },
      {
        "type": "list",
        "heading": "What retention does not do",
        "items": [
          "**It does not classify, protect or block sharing.** Retention answers one question: how long does this exist. Stopping a retained file being emailed to a competitor is [DLP](/resources/glossary/data-loss-prevention-dlp/); controlling who can open it is a sensitivity label. Retention encrypts nothing.",
          "**It is not a backup.** A retain-only policy prevents deletion; it gives you no point-in-time restore and will not recover a corrupted or ransomware-encrypted file set.",
          "**It is not storage management.** Retention makes SharePoint and OneDrive consume more quota, not less, because of the Preservation Hold library.",
          "**Its settings do not follow the content.** A policy applies to a container. Move an item out and a copy is retained, but the destination's rules govern from there. If the requirement is \"this contract keeps its seven-year clock wherever it lives,\" that is a retention label, not a policy — this is the most common case where a retention policy is the wrong tool.",
          "**Deleting a user does not delete their mail.** A mailbox under retention becomes an inactive mailbox when the account is deleted: preserved, consuming no licence, invisible to offboarding checklists. If an org-wide retain policy covers it, it never becomes eligible for automatic deletion until that retention expires."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between a retention policy and a retention label?",
        "a": "A policy applies invisibly to an entire location (all mailboxes, a set of sites) and sets a baseline. A label applies to an individual item, is visible to users, travels with the item if it moves within the tenant, and supports records declaration, event-based retention and disposition review. Most organisations need both: a policy as the floor, labels for the narrow set of content with a genuine records requirement."
      },
      {
        "q": "Does deleting a retention policy delete the content it was retaining?",
        "a": "Not immediately. For SharePoint and OneDrive, releasing a policy starts a 30-day grace period during which nothing is cleaned up, then a timer job running roughly every seven days removes the content — about 37 days end to end. Re-enable inside 30 days and nothing is lost. The exception catches people out: editing the policy to exclude specific sites or accounts skips the grace period entirely and cleanup starts straight away."
      },
      {
        "q": "Do retention policies carry over in a tenant-to-tenant migration?",
        "a": "No. Migration tools move mail, files and Teams content; they do not recreate retention policies, label configuration, or the preserved copies held in Preservation Hold libraries and Recoverable Items. The target tenant's existing schedule applies to migrated data from arrival, so reconcile the two schedules deliberately before cutover, not afterwards."
      },
      {
        "q": "How long does a retention policy take to take effect?",
        "a": "Allow up to seven days for retention settings to be applied to content, and longer for auto-apply label policies. Test on a pilot scope and verify behaviour before rolling a delete action across the tenant — deletion under retention is permanent, and there is no undo once the timer job has run."
      },
      {
        "q": "Do retention policies cover Teams and Copilot?",
        "a": "Yes. Teams chats, channel messages and call logs are retention policy locations, as are Microsoft Copilot experiences and AI app interactions — these are now configured as separate locations rather than bundled with older Teams policies. Retention labels are not supported for Teams or Viva Engage messages, so a policy is the only mechanism there. Exact location names and behaviour change release to release; check the current Purview portal rather than a screenshot from last year."
      }
    ],
    "relatedTermSlugs": [
      "microsoft-purview",
      "ediscovery-hold",
      "sensitivity-label",
      "data-loss-prevention-dlp",
      "tenant-to-tenant-migration",
      "carve-out"
    ],
    "relatedServiceSlugs": [
      "data-governance",
      "ma-tenant-migration",
      "microsoft-365-migration"
    ]
  },
  {
    "slug": "sensitivity-label",
    "term": "Sensitivity Label",
    "shortDefinition": "A sensitivity label is a Microsoft Purview classification you apply to a file, email, meeting invite, or container such as a Teams site. It records how sensitive the content is and can enforce protection with it — headers, footers, watermarks, encryption and usage rights that stay with the file wherever it goes, including outside your tenant.",
    "aliases": [
      "Microsoft Purview sensitivity label",
      "MIP label",
      "Microsoft Information Protection label",
      "Azure Information Protection label",
      "AIP label",
      "Microsoft 365 sensitivity labels",
      "document classification label"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "What a label actually does",
        "paragraphs": [
          "A sensitivity label does up to four jobs, and which of them are even configurable depends on the label's scope. It **classifies** — writing clear-text metadata into the file or email that Purview reports on, that [DLP policies](/resources/glossary/data-loss-prevention-dlp/) can use as a condition, and that eDiscovery searches can filter on. It **marks** — headers, footers and watermarks, though watermarks apply to documents rather than to email or meeting invites. It **encrypts** — wrapping the content in Azure Rights Management protection with usage rights granted to named people, groups or whole domains. And scoped to a Team, Microsoft 365 Group, SharePoint site, Viva Engage community or Loop workspace, it **sets container controls**: privacy, guest access, external sharing, access from unmanaged devices, default sharing link. A container label governs the container only. It does not label the files inside it.",
          "An item carries one sensitivity label at a time, and separately one retention label. Labels reach users through label policies published to people and groups — not to locations, which is how retention works — so two colleagues can legitimately see different label sets. The policy settings that decide whether labeling actually happens are the default label, mandatory labeling, and the justification prompt a user gets when downgrading. Labels can also be recommended or applied automatically; automatic labeling and several service-side scenarios have generally required the higher Microsoft 365 compliance tier, but licensing here moves release to release, so confirm against current Microsoft terms rather than assuming. Coverage also extends past Office to Power BI and Fabric items and to data assets in the Purview Data Map."
        ]
      },
      {
        "type": "table",
        "heading": "Sensitivity label vs retention label",
        "headers": [
          "",
          "Sensitivity label",
          "Retention label"
        ],
        "rows": [
          [
            "Controls",
            "Who can open the content and what they can do with it",
            "How long the content is kept, and what happens at the end"
          ],
          [
            "Enforced by",
            "The file itself, through encryption and markings",
            "The service holding the item (Exchange, SharePoint, OneDrive, Teams)"
          ],
          [
            "Outside your tenant",
            "Encryption and markings still apply",
            "No effect — retention stops at the service boundary"
          ],
          [
            "Published to",
            "Users and groups",
            "Locations"
          ],
          [
            "Usual owner",
            "Security and risk",
            "Legal and records management"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Encryption travels with the file",
        "paragraphs": [
          "Encryption is the part people underestimate. Once a label encrypts a document the protection lives inside the file: mail it to a competitor, copy it to a USB stick, rename it — it stays encrypted, and every open is an authorization check against the tenant that issued the protection. That is the point, and also the cost. The classification metadata is clear text, so third-party tools can read what the label says; the content underneath is opaque to most external scanners, backup indexers and older line-of-business applications. Co-authoring on encrypted Office files is a tenant setting you have to turn on deliberately.",
          "Three behaviors cause most of the tickets. The permission scope that covers everyone in your organization does not include guest accounts, which is the usual reason an external reviewer cannot open a file everyone assumed was shareable. The Azure Rights Management super user feature exists so administrators and eDiscovery services can still read protected content — without it, encrypted material is invisible to the processes you need most in an investigation. And encryption now gates AI as well: Microsoft 365 Copilot returns content from an encrypted item only when the user holds the copy (EXTRACT) usage right on it. One more trap: deleting a label in Purview does not remove it from content, and encryption already applied keeps being enforced, so retire labels deliberately rather than by cleanup."
        ]
      },
      {
        "type": "steps",
        "heading": "Labels in a tenant migration — the sequence that avoids permanent loss",
        "steps": [
          {
            "name": "Inventory before you plan",
            "description": "In a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/), use Content Explorer and Activity Explorer in the source tenant to establish two numbers: which labels are genuinely in use, and how much content is encrypted rather than merely marked. Those are different problems, and only the second one can destroy data."
          },
          {
            "name": "Rebuild the taxonomy in the destination",
            "description": "Labels do not move with content. There is no supported export and import of label configuration between tenants, and labels you recreate in the destination get new GUIDs. The GUID stamped into each migrated file still refers to the source tenant, which the destination does not recognize — Microsoft's documented behavior is that users simply do not see labels from another organization, and some tools surface the bare GUID instead. Build the old-label-to-new-label mapping before content moves."
          },
          {
            "name": "Decide what happens to the encrypted subset",
            "description": "Migration tooling generally needs a super user account in the source tenant to read protected items, and anything that moves while still protected by the source key stays bound to that key. The usual answer on an [M&A tenant migration](/services/ma-tenant-migration/) is to decrypt on the way out and re-protect with a destination label."
          },
          {
            "name": "Keep the source tenant alive until re-protection is verified",
            "description": "This is the failure mode you cannot undo. If the source tenant is decommissioned while files are still protected by its key — a real risk on a [TSA exit](/resources/glossary/tsa-exit/) with a contractual deadline — nothing can open that content again. Verify re-protection first, decommission second."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Where labels stop",
        "paragraphs": [
          "Labels constrain machines, not people. An authorized user can still photograph the screen or retype the contents, and encryption is only as trustworthy as the group memberships sitting behind it. Labels are also the wrong instrument for two jobs they routinely get assigned: keeping records for seven years is a retention policy's work, and stopping unlabeled sensitive data from leaving is DLP's. A labeling program that is really a retention program will disappoint everyone involved.",
          "Two failure patterns are worth naming. Taxonomies rot — organizations publish eight or ten labels, users cannot distinguish three of them, and application degrades into noise; Microsoft's own guidance is that effectiveness drops noticeably past roughly five top-level labels, and plain-English descriptions do more for accuracy than any additional label. And do not make an encrypting label the default for documents: it is the fastest available way to break external sharing across an entire tenant. A label nobody applies correctly is worse than no label, because it produces false assurance in a governance review."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can someone outside my organization open a file with a sensitivity label?",
        "a": "If the label only classifies and marks, yes — it opens normally, though they will not see your label name in their apps. If the label encrypts, they can open it only if the label's permissions include them, which means a named external user, their domain, or a group they belong to. The scope covering everyone in your organization does not include guest accounts, so external reviewers are blocked by default."
      },
      {
        "q": "What happens to sensitivity labels during a tenant-to-tenant migration?",
        "a": "They do not come with the content. There is no supported way to export label configuration between tenants, and the GUID written into each file refers to the source tenant, so migrated items land in the destination with a label reference nothing there recognizes. You recreate the labels, map old to new, and deal with encrypted items separately before the source tenant is retired."
      },
      {
        "q": "Can an item have both a sensitivity label and a retention label?",
        "a": "Yes — one of each, doing unrelated jobs. The sensitivity label decides who may open the item and what they may do with it; the retention label decides how long it is kept and whether it can be deleted. Neither substitutes for the other, and an eDiscovery hold preserves content regardless of what either says."
      },
      {
        "q": "Do I need Microsoft 365 E5 for sensitivity labels?",
        "a": "Manual labeling and basic protection are included well below the top tier; automatic labeling, service-side application and several advanced scenarios have generally sat in the higher compliance tier. Microsoft revises this packaging regularly, so treat that split as a starting point and validate the specific features you intend to use against current licensing terms before you build a business case on them."
      }
    ],
    "relatedTermSlugs": [
      "microsoft-purview",
      "retention-policy",
      "data-loss-prevention-dlp",
      "ediscovery-hold",
      "tenant-to-tenant-migration"
    ],
    "relatedServiceSlugs": [
      "data-governance",
      "ma-tenant-migration",
      "microsoft-365-migration"
    ]
  },
  {
    "slug": "ediscovery-hold",
    "term": "eDiscovery Hold",
    "shortDefinition": "An eDiscovery hold is a preservation policy attached to a case in Microsoft Purview that stops content in named mailboxes, SharePoint and OneDrive sites, Teams and Microsoft 365 Groups from being permanently deleted or overwritten. Users notice nothing and keep deleting as normal; copies are kept invisibly until the hold is released.",
    "aliases": [
      "Purview eDiscovery hold",
      "eDiscovery case hold",
      "eDiscovery hold policy",
      "legal hold Microsoft 365",
      "case hold policy",
      "compliance hold",
      "litigation hold vs eDiscovery hold"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "What a hold actually does",
        "paragraphs": [
          "A hold changes nothing users can see. People keep deleting mail and overwriting documents as before; what changes is what happens underneath. In Exchange Online, deleted and edited items are captured in the hidden Recoverable Items folder — Deletions, Versions, Purges — and placing a mailbox on hold raises that folder's quota from 30 GB to 100 GB. In SharePoint and OneDrive a Preservation Hold Library appears, and every deleted or modified file drops a copy of the original into it. Allow up to 24 hours for a new hold to take effect; anything purged in that window is gone.",
          "What it does **not** do matters as much. A hold preserves; it does not collect, review or export — that is a separate search step. It cannot recover content purged before it went on. Teams content is preserved through mailboxes, so holding a team's group mailbox and site covers channel messages but not members' 1:1 and group chats, which sit in the participants' own mailboxes and OneDrive accounts. And it reaches only the locations you scoped: file shares, ERP records and third-party chat sit outside it, even though counsel's preservation duty does not."
        ]
      },
      {
        "type": "table",
        "heading": "Legal hold, eDiscovery hold and retention are not the same thing",
        "headers": [
          "Control",
          "What it is",
          "Typical scope",
          "Ends when"
        ],
        "rows": [
          [
            "Legal hold",
            "The duty to preserve evidence once litigation is reasonably anticipated. A decision by counsel, not a product feature.",
            "Every system holding relevant data",
            "Counsel issues a written release"
          ],
          [
            "Litigation Hold",
            "A per-mailbox flag in Exchange Online. Preserves everything, indefinitely or for a set duration. Still supported, but Microsoft now points new work at retention policies.",
            "One mailbox, primary and archive",
            "An admin disables it, or the set duration expires"
          ],
          [
            "eDiscovery hold",
            "A hold policy attached to a Purview eDiscovery case. Can be scoped by condition, keyword (KeyQL) or date range.",
            "Mailboxes, SharePoint and OneDrive sites, Teams, Microsoft 365 and Viva Engage groups",
            "The policy is released or deleted, or the case is closed"
          ],
          [
            "In-Place Hold (legacy)",
            "The old Exchange admin center hold. Retired — new ones could not be created after 1 July 2020 — but existing ones still preserve content.",
            "One mailbox",
            "An admin removes the hold"
          ],
          [
            "Retention policy or label",
            "Records management: retain, or retain and then delete, for a fixed period.",
            "Broad — whole workloads or the whole tenant",
            "The retention period expires, or the policy is released (with a grace period)"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Why holds constrain what you can migrate or delete",
        "paragraphs": [
          "Holds are tenant-scoped configuration, which is where they collide with [M&A tenant migration](/services/ma-tenant-migration/). They do not travel with a mailbox, and Microsoft's native cross-tenant mailbox migration will not move a mailbox that is on **any** type of hold — the move is blocked outright. Releasing the hold to unblock it applies a 30-day delay hold, which itself counts as a hold, so the real sequence is: agree preservation with counsel, release, clear the delay hold, then move. A native move also deletes the source mailbox on completion and does not carry Teams chat folder content across; Microsoft's guidance is that the chat content stays searchable and exportable by source-tenant admins, which means the source tenant has to stay alive if that history is in scope.",
          "That bites hardest at [TSA exit](/resources/glossary/tsa-exit/). Deleting the account of a held user does not remove the mailbox — it becomes an inactive mailbox, retained unlicensed with no expiry date, so the source tenant cannot be decommissioned on schedule. An inactive mailbox with an auto-expanding archive cannot be recovered or restored at all; the only route to its contents is an eDiscovery export. Sites on hold cannot be deleted, and changing a site's URL silently breaks the hold's reference to it, because eDiscovery does not track location changes after the policy is applied. In the other direction, releasing a hold or closing the case behind an inactive mailbox permanently deletes that mailbox — which makes \"tidy up the old eDiscovery cases\" a dangerous ticket to hand an admin mid-migration."
        ]
      },
      {
        "type": "list",
        "heading": "Where holds catch teams out",
        "items": [
          "Holds are set in Purview by legal or compliance, often years earlier and often by someone who has since left, and nobody tells infrastructure. The first symptom is usually a mailbox quota complaint caused by Recoverable Items filling up.",
          "Holds stack and hide. One mailbox can carry a Litigation Hold, several eDiscovery hold policies, retention policies and retention labels at once; removing one achieves nothing while the others stand. Enumerating them needs Exchange Online PowerShell *and* Security & Compliance PowerShell — and newer retention locations such as Teams chats, Copilot interactions and Viva Engage no longer stamp on the mailbox object, so an empty **InPlaceHolds** does not mean an unheld mailbox.",
          "Group membership on a hold is a point-in-time snapshot. When you hold a distribution list, Team or Microsoft 365 group, members are expanded at the moment the policy is created: people who join later are not held, people who leave stay held. Distribution list expansion also caps at 100 members.",
          "Query-based holds are not immediately selective. Everything in the location is held first, and a timer job clears non-matching content only every seven to fourteen days — and stops clearing altogether once more than five holds of any type apply to that location.",
          "Delay holds do not always expire on their own. The Managed Folder Assistant clears the 30-day delay hold the next time it processes the mailbox, and it skips mailboxes whose accounts are disabled. Disabling accounts before clearing holds is a reliable way to strand a source tenant.",
          "In a [carve-out](/resources/glossary/carve-out/), the seller's counsel may be holding data the buyer is contractually entitled to receive. Whether it can leave at all is a legal question, and it never surfaces in a technical discovery workshop."
        ]
      },
      {
        "type": "prose",
        "heading": "When an eDiscovery hold is the wrong tool",
        "paragraphs": [
          "Microsoft's own position is that case holds are for specific, time-bound legal matters, not for retention. There is no duration setting — content is held until someone releases it — and releasing it destroys any inactive mailbox behind it. If the requirement is \"keep everything for seven years,\" or \"this leaver's mailbox must survive,\" use a retention policy or label: apply it, confirm the hold has landed, then delete the account. Licensing is charged per preserved user rather than per case, and which subscriptions carry eDiscovery hold rights (frontline plans in particular) shifts between releases, so check Microsoft's current compliance licensing guidance rather than an old runbook. The same applies to the tooling itself: the classic eDiscovery experiences were retired on 31 August 2025, so holds inherited from an older tenant should be re-verified in the current Purview portal. On any deal, inventory every hold, its owner and its matter in the first weeks of discovery — before wave planning — as part of the [data governance](/services/data-governance/) workstream."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does an eDiscovery hold survive a tenant-to-tenant migration?",
        "a": "No — and it is worse than that. Holds are source-tenant configuration and do not travel with the mailbox, and Microsoft's native cross-tenant mailbox migration refuses to move a mailbox on any type of hold at all. The sequence is: agree the preservation plan with counsel, release or re-scope the hold, clear the resulting 30-day delay hold, move the user, then re-create an equivalent hold in the target. Content already sitting in the Preservation Hold Library is a separate decision, usually keeping the source tenant alive longer or exporting to an archive with counsel's sign-off."
      },
      {
        "q": "Can you delete a user who is on eDiscovery hold?",
        "a": "You can delete the account, but the mailbox becomes an inactive mailbox and is preserved, unlicensed and with no expiry, until every hold on it is released. Microsoft explicitly advises against using eDiscovery case holds to create inactive mailboxes: when the hold is released or the case is closed or deleted, the inactive mailbox is permanently deleted. A retention policy is the supported route."
      },
      {
        "q": "How do I find every hold on a mailbox?",
        "a": "Start with `Get-Mailbox <user> | FL LitigationHoldEnabled,InPlaceHolds,ComplianceTagHoldApplied,*HoldApplied*` in Exchange Online PowerShell. GUID prefixes in InPlaceHolds tell you the type — `UniH` is an eDiscovery hold policy, `mbx`/`skp`/`grp` are retention policies. Org-wide policies appear on `Get-OrganizationConfig`. Then resolve an eDiscovery GUID to a named case in Security & Compliance PowerShell with `Get-CaseHoldPolicy` and `Get-ComplianceCase`. Retention that covers Teams chats, Copilot interactions or Viva Engage may not appear on the mailbox object at all, so check those separately."
      }
    ],
    "relatedTermSlugs": [
      "tsa-exit",
      "carve-out",
      "microsoft-purview",
      "retention-policy",
      "tenant-to-tenant-migration"
    ],
    "relatedServiceSlugs": [
      "data-governance",
      "ma-tenant-migration",
      "microsoft-365-migration"
    ]
  },
  {
    "slug": "dataverse",
    "term": "Dataverse",
    "shortDefinition": "Dataverse is Microsoft's managed cloud database behind Power Platform and Dynamics 365. Renamed from Common Data Service in 2020, it stores data in tables of rows and columns and enforces security, server-side business logic and auditing at the data layer itself. Dynamics 365 Sales, Customer Service and Field Service run directly on it; using it requires a premium licence.",
    "aliases": [
      "Microsoft Dataverse",
      "Common Data Service",
      "CDS",
      "Dataverse database",
      "Dataverse tables",
      "Dataverse for Teams",
      "Dynamics 365 database"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "What it is, and where it sits",
        "paragraphs": [
          "Dataverse lives inside a [Power Platform environment](/resources/glossary/power-platform-environment/). An environment holds zero or one Dataverse database, and adding one is a one-way door: there is no remove-database operation, only deleting the environment. Every environment also consumes at least 1 GB of tenant capacity whether or not it has a database, so environment sprawl shows up on the storage bill before it shows up anywhere else.",
          "Dynamics 365 Sales, Customer Service and Field Service **are** Dataverse — Account, Contact and Opportunity are Dataverse standard tables. Business Central and the finance and operations apps are not: they keep their own data stores and reach Dataverse through virtual tables and dual-write. \"We run Dynamics 365\" therefore tells you nothing about whether you have Dataverse until you know which apps.",
          "Microsoft renamed the objects along with the service: entities became tables, records became rows, fields became columns, option sets became choices. SDK method names, connector identifiers and most pre-2021 documentation still use the old words for the same objects."
        ]
      },
      {
        "type": "list",
        "heading": "Why it is not \"just a database\"",
        "items": [
          "**Security is in the platform, not in each app.** Security roles, business units, owner and Entra-group teams, field-level security, hierarchical security and record sharing are enforced under every access path — an API call, a data import and a canvas app all obey the same rules.",
          "**Business logic runs server-side.** Business rules, calculated and rollup columns, plug-ins and background flows fire regardless of how a row arrived, so a bulk load cannot quietly skip validation. The exceptions are deliberate and worth knowing: an admin can set the bypass-custom-plug-in flag on an operation, and reads through the SQL endpoint do not fire plug-ins registered on Retrieve or RetrieveMultiple.",
          "**One schema, several front doors.** The OData Web API, the Dataverse connector and the read-only TDS (SQL) endpoint all sit on the same schema and the same security model, so apps, flows, reports and agents do not each invent an access layer.",
          "**Solutions give it real ALM.** Schema, logic and apps are packaged into solutions and promoted dev → test → prod as managed layers, with auditing and long-term retention configurable per table. SharePoint lists have no equivalent, and that is usually the point at which a list-backed app stops being maintainable.",
          "**Analytics egress is built in.** Azure Synapse Link and Link to Microsoft Fabric push data out for reporting instead of pointing BI tools at the transactional store."
        ]
      },
      {
        "type": "table",
        "heading": "Dataverse vs SharePoint lists vs Azure SQL",
        "headers": [
          "",
          "Dataverse",
          "SharePoint list",
          "Azure SQL"
        ],
        "rows": [
          [
            "Best fit",
            "Multi-table business processes with roles and approvals",
            "Lightweight tracking, document-centric lists",
            "Custom apps, heavy transactions, existing SQL skills"
          ],
          [
            "Security granularity",
            "Row, column, business unit, hierarchy",
            "List and item level, coarse",
            "Whatever you write yourself"
          ],
          [
            "Business logic",
            "Declarative + plug-ins, enforced at the data layer",
            "Very limited",
            "Stored procedures, triggers — you own it"
          ],
          [
            "ALM / promotion",
            "Solutions, managed layers",
            "Manual rebuild",
            "DACPAC, migrations, your pipeline"
          ],
          [
            "Practical ceiling",
            "Millions of rows; service-protection API limits cap sustained throughput",
            "5,000-item list view threshold; degrades as a relational store",
            "Very high; you size and tune it"
          ],
          [
            "Licensing",
            "Premium: Power Apps Premium or per app, Power Automate Premium, or a qualifying Dynamics 365 licence",
            "Included with Microsoft 365",
            "Azure consumption + premium connector licensing"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "The licensing consequence of touching it",
        "paragraphs": [
          "Dataverse is a premium capability. The Power Apps and Power Automate use rights seeded into Microsoft 365 licences cover standard connectors and SharePoint- or Excel-backed apps; they do not cover Dataverse. The moment an app or flow reads a Dataverse table in a production or sandbox environment, every user of it needs a standalone Power Apps licence (Power Apps Premium, formerly per user, or Power Apps per app), a Power Automate Premium licence, or a qualifying Dynamics 365 licence. This is the same premium boundary as a [premium connector](/resources/glossary/premium-connector/), and it is where pilots quietly become budget line items.",
          "Dataverse for Teams is the exception: included with Microsoft 365 licences that carry Teams, one environment per team, capped at roughly 2 GB and about a million rows. It is deliberately reduced — no plug-ins, no API access, no model-driven apps, no auditing, no field-level security, no record sharing, no Entra-group teams, no Synapse Link, and a single business unit. It upgrades in place to full Dataverse, and that upgrade is a licensing event.",
          "Capacity is entitled at tenant level in three separate buckets — database, file and log — with database and file pooled across Dataverse and finance and operations workloads. Borrowing runs one way only: database can offset log and file, log can offset file, never the reverse. Running short blocks admin work before users notice anything: creating, copying, restoring, recovering or converting an environment, and adding a database, all stop. Licensing and capacity terms change release to release, so price and entitlement decisions should be checked against the current Power Platform licensing guide rather than a blog post."
        ]
      },
      {
        "type": "steps",
        "heading": "Moving Dataverse between tenants in an M&A deal",
        "steps": [
          {
            "name": "Confirm the environment can move at all",
            "description": "Only production and sandbox environments with Dataverse are supported. Default, developer, trial and Dataverse for Teams environments are not, and a Dataverse organisation linked to a finance and operations org cannot be moved to another tenant under any circumstances. Customer Voice, Omnichannel for Customer Service and component libraries are not carried across. Scope this as its own workstream inside [M&A migration planning](/services/ma-tenant-migration/) — it does not ride along with the mailbox move."
          },
          {
            "name": "Build and licence the destination users first",
            "description": "Every user you want migrated must already exist in the destination tenant with a licence assigned, and appear in a usermapping.csv of source-to-destination UPNs. Users absent from the file are not mapped; an unlicensed mapped user fails the migration outright. Application users are never mapped and must be recreated by hand."
          },
          {
            "name": "Export and then delete what will not survive",
            "description": "Solution-aware canvas apps, custom pages, component libraries and Copilot Studio agents must be exported and then deleted from the source environment before the move — if they are left in place they do not work afterwards. Cloud flows must be inside solutions to travel. Power Pages sites must be deleted and reprovisioned on the far side."
          },
          {
            "name": "Submit, approve, move, then rebuild",
            "description": "The source admin submits the request and the destination admin approves it; requests expire after seven days. The environment runs in administration mode during the move, so background operations stop. Afterwards: security groups, connections, custom connectors and gateways are not migrated, flows import switched off, HTTP trigger URLs are reissued, and Managed Environments must be re-enabled. The environment URL and organisation ID stay the same, and the source tenant is left holding an empty environment shell to delete."
          }
        ]
      },
      {
        "type": "list",
        "heading": "Limits and when Dataverse is the wrong answer",
        "items": [
          "**It is not a data warehouse.** Reporting at scale belongs in Fabric or Synapse via the link services, not in live queries against the transactional store.",
          "**Standard tables are not a high-throughput ingestion target.** Service-protection API limits throttle sustained bulk writes. Elastic tables, backed by Azure Cosmos DB, do target spiky, high-volume, semi-structured workloads such as telemetry — but they give up multi-record transactions, deep insert and SQL-endpoint access, and they consume log capacity. They are a specific tool, not a general upgrade.",
          "**It is not a document store.** Attachments burn file capacity quickly; keep documents in SharePoint and use the built-in integration.",
          "**It is not for teams who want SQL control.** No custom stored procedures, no hand-tuned indexes, no write access over SQL. If that is the requirement, see [Power Apps vs custom development](/compare/power-apps-vs-custom-development/)."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is Dataverse the same as Common Data Service?",
        "a": "Yes. Common Data Service (CDS) was renamed Microsoft Dataverse in late 2020. The rename also changed the object names — entities became tables, records became rows, fields became columns — but it is the same service. Older APIs, SDK method names and connector identifiers still carry the CDS naming, so seeing \"CDS\" usually dates the document rather than describing a different product."
      },
      {
        "q": "Is Dataverse included with Microsoft 365?",
        "a": "No, with one exception. The Power Apps and Power Automate rights seeded into Microsoft 365 licences cover standard connectors and SharePoint- or Excel-backed apps, not Dataverse. The exception is Dataverse for Teams, which is included with Microsoft 365 licences that carry Teams but is capped at one environment per team, roughly 2 GB and about a million rows, with no plug-ins, API access, model-driven apps or auditing."
      },
      {
        "q": "Do I need Dynamics 365 to use Dataverse?",
        "a": "No. A standalone Power Apps or Power Automate premium licence gives you Dataverse without any Dynamics 365 app. The reverse is not true: Dynamics 365 Sales, Customer Service and Field Service cannot exist without Dataverse, because they are built on it."
      },
      {
        "q": "Can I query Dataverse with SQL?",
        "a": "Read-only, yes. The TDS endpoint lets SQL Server Management Studio and Power BI query Dataverse directly under the caller's Dataverse security. Writes must go through the Web API or connectors. Practical limits: Microsoft Entra ID authentication only (SQL and Windows auth fail), a five-minute query timeout that drops to two minutes for SELECT *, nested FROMs and JOINs, no elastic tables, and plug-ins registered on Retrieve or RetrieveMultiple do not fire — so any query or result rewriting they normally perform is skipped. It is not available in Dataverse for Teams."
      },
      {
        "q": "When should I keep using SharePoint lists instead?",
        "a": "When the data is genuinely simple, document-adjacent, low-volume, and everyone who touches it already has Microsoft 365. Move to Dataverse when you need multiple related tables, row- or column-level security, enforced business rules, or a proper dev/test/prod promotion path — those are the points where lists start costing more in workarounds than the premium licences would."
      }
    ],
    "relatedTermSlugs": [
      "power-platform-environment",
      "premium-connector",
      "tenant-to-tenant-migration",
      "carve-out"
    ],
    "relatedServiceSlugs": [
      "power-platform",
      "dynamics-365",
      "ma-tenant-migration"
    ]
  },
  {
    "slug": "power-platform-environment",
    "term": "Power Platform Environment",
    "shortDefinition": "A Power Platform environment is a container inside a Microsoft Entra tenant that holds apps, flows, agents, connections and at most one Dataverse database. It is the boundary for admin roles, data policies and data residency. Dataverse data is scoped to the environment it sits in, which is how you separate development, test and production.",
    "aliases": [
      "Power Apps environment",
      "Dataverse environment",
      "Power Automate environment",
      "default environment",
      "Power Platform environment types",
      "Power Platform environment strategy",
      "managed environment",
      "dev test prod environments Power Platform"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "What an environment isolates — and what it doesn't",
        "paragraphs": [
          "Every environment lives under one Entra tenant and is bound to a geography chosen at creation; the default environment takes the tenant home region. Everything built inside it — canvas and model-driven apps, cloud flows, connections, gateways, custom connectors, Copilot Studio agents — is routed to datacentres in that geography. Region can't be edited afterwards; changing it means a Microsoft-assisted geo migration.",
          "Two built-in roles govern it. **Environment Admin** manages the environment, provisions Dataverse and sets environment-level data policies. **Environment Maker** creates apps, flows, connections and custom connectors. Neither grants access to the data inside [Dataverse](/resources/glossary/dataverse/) — security roles are assigned separately, and once a database exists you administer through the System Administrator security role rather than Environment Admin.",
          "The isolation is narrower than most people assume. Dataverse is genuinely environment-scoped: an app in Test can't read the Dev database, and connections, gateways and custom connectors exist in exactly one environment. But a connection created in Dev can still point at the production SharePoint site or the production SQL server. The boundary contains Power Platform objects, not the systems behind them. Keeping dev apps off production data is a discipline you enforce with environment variables, connection references and data policies — the environment does not do it for you."
        ]
      },
      {
        "type": "prose",
        "heading": "The default environment problem",
        "paragraphs": [
          "Every tenant gets a default environment automatically, named *{tenant name} (default)* and placed in the tenant home region. Every licensed user — Microsoft 365, Dynamics 365, standalone, free and trial licences alike — is added to the Environment Maker role. Nobody is added as Environment Admin. It can't be deleted or manually backed up, it's capped at 1 TB of storage with 3 GB of Dataverse database capacity included, and Microsoft states plainly that it carries no backup guarantee and shouldn't hold production workloads.",
          "The predictable result is a business-critical flow built by someone who has since left, running on their personal connection, with no source control, no lifecycle and no data policy covering it. Four things help."
        ]
      },
      {
        "type": "list",
        "items": [
          "**Rename it** to something like *Personal Productivity Environment* so its intended use is visible to every maker who lands there. You can still identify it in the admin centre by its environment **Type** of **Default**.",
          "**Bring it inside a tenant-level data policy.** Tenant policies can include or exclude named environments, and the default environment is the one most often sitting outside every policy. You can also set the default group for newly released connectors to **Blocked** so nothing new is usable until reviewed — Microsoft's own guidance recommends leaving it at **Non-business**, so choose deliberately, and note that connectors which can't be blocked land in Non-business either way.",
          "**Turn on environment routing** so makers land in their own personal developer environment instead. Routing is a premium governance feature and every routed environment is a Managed Environment: creating and previewing an app there needs no premium licence, but *running* one does, and the free Developer Plan doesn't cover that. Budget for it before you switch it on.",
          "**Inventory before you lock down.** Tightening a policy retroactively breaks live work — non-compliant flows are suspended and app connections fail. Find out what is actually running, decide what moves to a governed environment and what gets switched off, then enforce. An [environment health check](/assessments/power-platform-health-check/) is the usual way to get that list."
        ]
      },
      {
        "type": "table",
        "heading": "Environment types and what constrains each",
        "headers": [
          "Type",
          "Intended use",
          "Key constraint"
        ],
        "rows": [
          [
            "Default",
            "Personal productivity, experimentation",
            "One per tenant; every licensed user is a maker; can't be deleted or manually backed up; 1 TB cap; no backup guarantee"
          ],
          [
            "Production",
            "Anything the business depends on",
            "Needs 1 GB of available Dataverse database capacity to create"
          ],
          [
            "Sandbox",
            "Development and UAT",
            "Supports copy and reset; admins can restrict who creates them, but converting a production environment to sandbox can't be blocked"
          ],
          [
            "Developer",
            "A single maker's personal build space",
            "Owner-only, no security groups; doesn't consume tenant capacity; disabled after 30 days idle (60 if Managed), deleted 15 days later"
          ],
          [
            "Dataverse for Teams",
            "Lightweight apps scoped to one Team",
            "Security follows Teams membership, no custom security roles; disabled after 90 days idle"
          ],
          [
            "Trial (standard)",
            "Short-term evaluation",
            "Expires after 30 days, one per user; can be created and deleted only — no reset, copy, backup or restore"
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "A dev/test/prod pattern that holds up",
        "steps": [
          {
            "name": "Split by solution, not by department",
            "description": "Each meaningful application family gets its own trio. Departmental environments sound tidy and then become a second default environment with a smaller audience."
          },
          {
            "name": "Dev and test as sandbox, prod as production",
            "description": "Makers hold Environment Maker in dev only. Test is refreshed by copying production. Nobody builds directly in production."
          },
          {
            "name": "Deploy managed solutions only downstream",
            "description": "Unmanaged in dev; managed into test and production, through Power Platform pipelines, Azure DevOps or GitHub Actions. Without this the environments are folders, not a lifecycle."
          },
          {
            "name": "Group and standardise",
            "description": "Environment groups apply one rule set — sharing limits, solution checker, backup retention, generative AI settings — across many environments and lock those settings read-only locally. Design around the constraints: groups take only Managed Environments with Dataverse, an environment belongs to one group at a time, and per-environment exceptions aren't supported."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Limits and caveats",
        "paragraphs": [
          "**Dataverse is a one-way decision.** An environment has zero or one database, and there's no supported way to remove it — you delete the environment instead. Production and sandbox environments each consume 1 GB of tenant database capacity to provision; developer and trial environments don't, so sprawl there costs you administrative surface rather than capacity.",
          "**An environment is not a permissions model.** Creating one per department, or one per customer, to control who sees what is the most expensive common mistake: you end up maintaining duplicate solutions, duplicate policies and cross-environment reporting nobody wanted to build. Row- and record-level access belongs in Dataverse business units, teams and security roles. Split environments for lifecycle, data residency and blast radius — not for read access.",
          "**[Data policies](/resources/glossary/data-loss-prevention-dlp/) are connector-combination control, not exfiltration prevention.** Tenant-level policies can include or exclude named environments; environment-level policies cover exactly one environment, can't override a tenant policy, and environment admins can't edit or delete a policy a tenant admin created. Classic policies can't block core connectors at all — Dataverse, Approvals, SharePoint, Microsoft 365 Outlook, Teams and the rest of the Microsoft 365 standard set. Advanced connector policies use an allowlist model and can restrict those, but at the time of writing they cover certified connectors only, with custom, HTTP and virtual connectors still governed by classic policies. Verify current scope before designing around it.",
          "**In M&A, environments are tenant-scoped and the move is narrower than it sounds.** Microsoft supports a tenant-to-tenant move for sandbox and production environments with Dataverse: the source admin submits a request, the destination approves it, and requests expire after seven days. What transfers is the Dataverse organisation — URL, organisation ID and name stay the same, and the source tenant is left holding an empty environment shell to clean up. Default, developer, trial and Teams environments aren't supported and must be rebuilt. Connections, custom connectors and gateways don't migrate; solution-aware apps must be exported *and* deleted before the move or they won't work afterwards; security groups don't transfer; Managed Environments must be re-enabled at the destination; and a Dataverse organisation linked to finance and operations apps can't be moved at all. Support boundaries shift between releases, so confirm current behaviour before committing to a cutover date — scope this alongside the [M&A tenant migration](/services/ma-tenant-migration/), not after it."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can you delete the default environment?",
        "a": "Not as an admin. Every tenant has exactly one, it can't be deleted, and it can't be manually backed up. You can rename it, bring it inside a restrictive tenant-level data policy, and route new makers into personal developer environments instead. The platform itself will delete a long-dormant default environment and provision a replacement, but tenants with premium licences are excluded from that cleanup — don't plan around it."
      },
      {
        "q": "What is the difference between an environment and a Managed Environment?",
        "a": "Managed Environments isn't an environment type — it's a toggle applied to an existing environment that unlocks governance features: sharing limits, solution checker enforcement, usage insights, maker welcome content and membership in environment groups. The type stays whatever it was. The cost sits with the users: everyone running an app or flow in a Managed Environment needs a premium Power Apps, Power Automate, Copilot Studio, Power Pages or qualifying Dynamics 365 licence."
      },
      {
        "q": "How many environments should we have?",
        "a": "Enough to give each significant application a dev, test and production separation, plus one governed environment for citizen-developer work. Fewer and you have no lifecycle; far more and you're spending Dataverse capacity and admin attention on environments nobody owns. Retire unused ones deliberately — and remember idle developer and Teams environments are disabled and deleted automatically, so 'nobody noticed' is not the same as 'still there'."
      },
      {
        "q": "Does every environment need a Dataverse database?",
        "a": "No. Canvas apps and flows built over SharePoint, SQL or Excel run fine in an environment with no database. Add Dataverse when you need relational data, row-level security or model-driven apps — and note the decision is one-way: you can't remove the database afterwards. Environments without Dataverse also can't be added to an environment group."
      },
      {
        "q": "Can a Power Platform environment be moved to another Microsoft 365 tenant?",
        "a": "Sandbox and production environments with Dataverse can be, through a request the source tenant submits and the destination approves. What actually moves is the Dataverse organisation; the environment URL and organisation ID stay the same and the source tenant is left with an empty shell. Default, developer, trial and Dataverse for Teams environments can't be moved and have to be rebuilt by exporting and importing solutions. Connections, gateways and custom connectors are reconfigured by hand either way. Confirm current support boundaries before planning a cutover."
      }
    ],
    "relatedTermSlugs": [
      "dataverse",
      "data-loss-prevention-dlp",
      "premium-connector",
      "tenant-to-tenant-migration"
    ],
    "relatedServiceSlugs": [
      "power-platform",
      "data-governance",
      "ma-tenant-migration"
    ]
  },
  {
    "slug": "premium-connector",
    "term": "Premium Connector",
    "shortDefinition": "A premium connector is a Power Platform data connection — SQL Server, Dataverse, custom connectors, on-premises gateways — that falls outside the Power Apps and Power Automate rights bundled with Microsoft 365. One premium connection makes an app or flow premium, so everyone who runs it needs a standalone Power Apps or Power Automate licence, not just the maker.",
    "aliases": [
      "premium connectors Power Platform",
      "standard vs premium connectors",
      "Power Apps premium connector licensing",
      "premium connector Power Automate",
      "what makes an app premium in Power Apps"
    ],
    "sections": [
      {
        "type": "prose",
        "heading": "Standard tier, premium tier, and the cliff between them",
        "paragraphs": [
          "Microsoft splits the connector catalogue into standard and premium tiers. Standard connectors — SharePoint, Microsoft 365 Outlook, Teams, OneDrive, Excel Online, Planner, Approvals — are covered by the Power Apps and Power Automate use rights seeded into Microsoft 365 licences. Premium connectors are not. The line is commercial, not technical: same designer, same runtime, different entitlement. Microsoft moved a large batch of connectors across it on 1 October 2019, including SQL Server, most Azure services and every Dynamics 365 connector.",
          "Licensing behaves as a cliff, not a slope. An app that touches one premium connector, one custom connector or an on-premises gateway is designated **Premium**, and every user who opens it needs a standalone plan. There is no partial coverage and no metering by call volume.",
          "At US list, Power Apps Premium is $20 per user per month ($12 at 2,000+ licences), Power Automate Premium $15 per user per month, Power Automate Process $150 per bot per month. The $5 per-app plan closed to new purchase on 2 January 2026 — existing Enterprise Agreement and CSP customers keep it, MPSA does not — leaving Premium or the Azure-metered pay-as-you-go plan for most new buyers. Confirm prices and plan availability before you budget; both have changed more than once."
        ]
      },
      {
        "type": "table",
        "heading": "Commonly assumed standard, actually premium",
        "headers": [
          "Connector or capability",
          "Tier",
          "The assumption that causes the surprise"
        ],
        "rows": [
          [
            "SQL Server, Azure SQL, Blob Storage, Service Bus, Data Lake",
            "Premium (reclassified 1 October 2019)",
            "\"It's a Microsoft data service, so our M365 agreement covers it.\""
          ],
          [
            "Microsoft Dataverse",
            "Premium",
            "\"It ships with Power Platform, so it must be included.\""
          ],
          [
            "HTTP, HTTP with Microsoft Entra ID",
            "Premium in Power Apps and Power Automate; the same connectors are standard in Azure Logic Apps",
            "\"A REST call isn't really a connector.\""
          ],
          [
            "Custom connectors",
            "Premium",
            "\"We wrote the wrapper ourselves, so there's nothing to licence.\""
          ],
          [
            "On-premises data gateway",
            "Not a connector, but any app or flow using one is designated Premium",
            "\"The gateway is just plumbing to data we already own.\" Gateways were premium before 2019 and were excluded from the grace period that followed."
          ],
          [
            "Dynamics 365, Business Central, Dynamics NAV, Finance & Operations",
            "Premium",
            "\"Our D365 licences cover it.\" Those licences carry Power Apps and Power Automate rights only within the context of the licensed Dynamics application, not for standalone apps and flows."
          ],
          [
            "Dataverse for Teams, in a Teams environment",
            "Designated Premium, but users whose Microsoft 365 plan includes Dataverse for Teams rights can run the app inside Teams",
            "\"The designation says Premium, so we must be exposed.\" Outside Teams, a standalone plan genuinely is required."
          ],
          [
            "SharePoint, Microsoft 365 Outlook, Teams, Excel Online, OneDrive, Planner, Approvals",
            "Standard",
            "Correctly assumed — these are the ones seeded with Microsoft 365."
          ]
        ]
      },
      {
        "type": "list",
        "heading": "How the unbudgeted bill arrives",
        "items": [
          "The pilot is built on a developer plan — which Microsoft states is not for production use — or on a trial: 30 days for Power Apps, 90 for Power Automate. Nothing prompts for money, so nothing reaches finance.",
          "The app is useful, so it gets shared. Licensing follows the people who run it, not the person who built it, and the count goes from one to a whole business unit overnight.",
          "A gap Microsoft documents as a known issue: a premium connector used inside a flow the app calls is not recognised by the app's licence designation. Microsoft's own example is an app on standard connectors calling a flow that uses HTTP — it reports as **Standard** while its users need premium rights. The self-check passes; compliance does not.",
          "The 2019 reclassification finally landed. Extended use rights for apps and flows created before 1 October 2019 ended on 1 October 2024, and in-product enforcement began 1 April 2025 — after which users without premium licences cannot run those apps and flows at all."
        ]
      },
      {
        "type": "steps",
        "heading": "Getting ahead of it",
        "steps": [
          {
            "name": "Classify the data sources before you design",
            "description": "List every system the app or flow will touch and check each one's tier in Microsoft's connector reference. Assume any line-of-business system outside Microsoft 365 is premium until proven otherwise — including [Dataverse](/resources/glossary/dataverse/) itself."
          },
          {
            "name": "Count runners, not makers",
            "description": "Model cost against everyone who will open the app or trigger the flow, at the headcount you expect in year two. Power Apps Premium is per user regardless of how many apps they use, so the curve follows headcount, not app count. For a flow many people trigger, one Power Automate Process licence on the flow itself can beat licensing every user."
          },
          {
            "name": "Ask whether the design needs to be premium at all",
            "description": "A SharePoint list will carry a departmental app that would otherwise sit on SQL, and an app kept inside Teams on Dataverse for Teams runs on Microsoft 365 rights. If you genuinely need relational data, row-level security or scale, take Dataverse deliberately and budget for it — don't arrive there by accident."
          },
          {
            "name": "Fence the blast radius",
            "description": "Keep premium builds in their own [environment](/resources/glossary/power-platform-environment/) and use DLP policies to stop premium connectors spreading into shared ones — noting that how you classify the HTTP connectors also decides whether child flows run there. The admin centre's Power Apps and Power Automate inventory reports list which apps and flows use which connectors; a [Power Platform health check](/assessments/power-platform-health-check/) turns that into a remediation list."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Caveats worth knowing",
        "paragraphs": [
          "Premium says nothing about quality, support or reliability — it is a commercial boundary, and Microsoft has moved connectors across it before and can again. DLP classification (business / non-business / blocked) is a separate axis from the licensing tier: putting a connector in the business group does not licence it. And Dataverse is the one premium connector a classic DLP policy cannot block, because the platform depends on it — the newer advanced connector policies use an allowlist that can restrict even those, but for most tenants environment strategy, not DLP, is the real containment tool.",
          "Premium is also sometimes the wrong answer entirely. Per-user licensing is efficient for a few hundred people across several apps and unattractive for a few thousand people using one narrow screen; at that shape a purpose-built application or a bought product can be cheaper over three years. Run the comparison before committing — [Power Apps versus custom development](/compare/power-apps-vs-custom-development/) covers the trade-off."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is Dataverse a premium connector?",
        "a": "Yes. The Microsoft Dataverse connector is premium, so an app or flow storing data in Dataverse requires standalone Power Apps or Power Automate licences for the people who use it. It is also the only premium connector a classic DLP policy cannot block, since Power Platform itself depends on it."
      },
      {
        "q": "Do we need premium licences if only the developer uses the premium connector?",
        "a": "Yes, once anyone else uses the app. Licensing follows the people who run the app or trigger the flow, not the person who built it. A developer plan or trial covers building and testing only; the moment the app is shared, every runner needs a licence."
      },
      {
        "q": "Are custom connectors a way to avoid premium licensing?",
        "a": "No. Custom connectors are premium by definition, as are the HTTP and HTTP with Microsoft Entra ID connectors and any app or flow that reaches data through an on-premises gateway. Wrapping an API yourself changes the engineering, not the entitlement."
      },
      {
        "q": "Can Dataverse for Teams avoid premium licensing?",
        "a": "Partly. Apps built in a Microsoft Teams environment on Dataverse for Teams carry a Premium designation, but users whose Microsoft 365 subscription includes Dataverse for Teams rights can run them inside Teams. Run the same app outside Teams and a per-user Power Apps plan is required, and the capacity and feature limits of Dataverse for Teams are tighter than full Dataverse."
      },
      {
        "q": "How do I check whether an existing app is premium?",
        "a": "In Power Apps, open the app's Settings or Details page and read its licence designation — Standard, Extended or Premium. Treat that as a floor rather than the truth: Microsoft documents that it does not account for premium connectors used inside a flow the app calls."
      }
    ],
    "relatedTermSlugs": [
      "dataverse",
      "power-platform-environment",
      "data-loss-prevention-dlp"
    ],
    "relatedServiceSlugs": [
      "power-platform",
      "dynamics-365",
      "application-modernization"
    ]
  }
];

export function getTermBySlug(slug: string) {
  return glossaryTerms.find((t) => t.slug === slug);
}

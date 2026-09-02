import type { Faq } from "./services";
import type { MarketingBlock } from "../../lib/marketing-blocks";

// Blog content.
//
// These twelve posts averaged 265 words each — too thin to rank for the
// queries they target and too thin for an answer engine to cite. They are now
// written as reference articles: 1,200-2,000 words, a comparison table or a
// sequenced process where the subject has one, and FAQs that answer the
// question-shaped queries the article competes for.
//
// Two authoring rules, both enforced by lib/blog-content.test.ts:
//
//   No invented authority. Every figure here is either a Microsoft-published
//   platform fact (a lifecycle date, a service limit, a licensing rule) or a
//   duration range stated as MP365's own delivery experience. There are no
//   client names, no measured percentages we did not measure, and no dollar
//   figures — pricing lives on the /pricing/ hub and is linked, never restated
//   here, so the two can never contradict each other.
//
//   Illustrative scenarios are labelled as such. Where an article needs a
//   worked example it describes a typical shape ("a 900-user manufacturer
//   consolidating two tenants"), never a real engagement presented as one.

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  cluster: "M&A Migration" | "Dynamics 365" | "Power Platform" | "Data Governance";
  authorSlug: "mohammed-khaliefa" | "raafat-elfouly";
  datePublished: string; // ISO
  dateModified: string; // ISO
  excerpt: string;
  // Hero artwork, shown inside the article banner and reused as the og:image
  // and BlogPosting.image. Omit it and the post falls back to the site's
  // branded OG card, exactly as every post did before the column existed.
  imageUrl?: string;
  // Alt text for `imageUrl`. Omitted throughout this file on purpose: the
  // site's photography is generic office stock reused across pages, so it
  // carries no information the adjacent H1 does not already state. The
  // template then renders an empty alt attribute, which is the correct
  // treatment for a decorative image. Set this only where an image genuinely
  // says something the copy does not.
  //
  // Line comments, not a JSDoc block: lib/richtext-parse.test.ts scans this
  // file's raw source for unbalanced inline markup, and the leading slash-star
  // of a doc comment reads to it as an unclosed bold token.
  imageAlt?: string;
  // Ordered typed blocks, the same union Solution.blocks and
  // MarketingPage.sections use. `level: 3` renders an H3 under the preceding
  // H2 and indents its table-of-contents entry.
  body: (MarketingBlock & { level?: 2 | 3 })[];
  faqs: Faq[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "microsoft-365-tenant-to-tenant-migration-timeline",
    title: "Microsoft 365 Tenant-to-Tenant Migration Timeline",
    metaDescription:
      "A realistic Microsoft 365 tenant-to-tenant migration timeline for M&A deals: what each phase actually gates, and why the domain cutover cannot be parallelised.",
    cluster: "M&A Migration",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-02-10",
    dateModified: "2026-09-02",
    excerpt:
      "Most tenant migration delays are timeline-planning failures, not technical ones. Here is what each phase gates, and the one sequence you cannot compress.",
    imageUrl: "/images/services/ma-tenant-migration.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "A [Microsoft 365 M&A tenant migration](/services/ma-tenant-migration/) typically runs 8 to 16 weeks from kickoff to full cutover. The total is less useful than the shape, though, because the phases are not equally compressible. Two of them scale with headcount and can be parallelised with more hands; one of them is a fixed serial dependency that no amount of budget shortens.",
          "That distinction is what most plans get wrong. A schedule built on \"how many mailboxes divided by how fast we can move them\" produces a number that looks achievable and then slips, because the constraint was never mailbox throughput. It was a [Day-1 coexistence](/resources/glossary/day-1-coexistence/) design that had not been agreed, or a domain that could not be released from the source tenant on the date the plan assumed.",
          "This article walks the five phases, what each one gates, and where the schedule actually breaks.",
        ],
      },
      {
        type: "table",
        heading: "The five phases and what each one gates",
        headers: ["Phase", "Typical duration", "What it gates", "Compressible?"],
        rows: [
          [
            "Due diligence and discovery",
            "2-4 weeks",
            "Everything. Licensing model, identity topology, data volume, and any custom Power Platform or Dynamics apps have to be known before a plan means anything.",
            "Partly. Can start pre-close under an NDA, which is where the time is actually found.",
          ],
          [
            "Day-1 coexistence design and build",
            "2-3 weeks",
            "The close date. Mail flow, free/busy and directory sync have to work the day the deal closes, well before any mailbox moves.",
            "No. This is design work with a fixed close date behind it.",
          ],
          [
            "Wave planning and pilot",
            "1-2 weeks",
            "Production migration. The pilot is what proves the runbook before it is applied to everyone.",
            "No. Skipping it moves the discovery of problems into the production waves.",
          ],
          [
            "Migration execution",
            "4-10 weeks",
            "Cutover. Scales with user count, mailbox and OneDrive volume, and how many waves the business can absorb.",
            "Yes. More parallel waves, if the service desk and the business can take them.",
          ],
          [
            "Cutover and stabilisation",
            "2 weeks",
            "Source tenant decommission and [TSA exit](/resources/glossary/tsa-exit/).",
            "No. Domain release, DNS propagation and the post-move support tail are serial.",
          ],
        ],
      },
      {
        type: "prose",
        heading: "Phase 1: due diligence, ideally before signing",
        paragraphs: [
          "This is where avoidable delay is created or avoided, and it is almost always the phase that gets skipped because the deal team is busy. Both tenants' licensing agreements (EA, CSP, NCE), identity structure, data volume, and any custom workloads need to be inventoried before a migration plan is written, not discovered halfway through it.",
          "The findings that most often reset a timeline are not exotic. An on-premises Active Directory still authoritative for identity, so [cross-tenant identity mapping](/resources/glossary/cross-tenant-identity-mapping/) has to account for a sync source neither tenant fully controls. A [Dynamics 365](/services/dynamics-365/) instance nobody mentioned because it is run by the finance team. Litigation holds on a subset of mailboxes, which change what may be deleted and when.",
          "An [M&A tenant migration assessment](/assessments/tenant-migration/) is the fastest way to get this on paper. It also produces the input for [what the migration will cost](/pricing/tenant-migration-cost/), which is otherwise a guess.",
        ],
      },
      {
        type: "prose",
        heading: "Phase 2: Day-1 coexistence is a separate project",
        paragraphs: [
          "Coexistence is the work that makes two organisations able to function as one from close, before a single mailbox has moved. Mail routing between the tenants, calendar free/busy through an Exchange organisation relationship, a shared global address list, and directory synchronisation so people can find each other.",
          "Treating this as the first step of migration rather than as its own deliverable is a common and expensive mistake. Coexistence has a fixed deadline — the close date — while migration has a negotiable one. When they are planned as one stream, coexistence work gets pushed by migration work and arrives late, which is the failure the business actually notices.",
          "Coexistence also has to be designed to be dismantled. Organisation relationships, sync rules and routing connectors all have to come down cleanly at the end, and a design that did not plan for removal leaves artefacts in the surviving tenant.",
        ],
      },
      {
        type: "steps",
        heading: "The cutover sequence you cannot parallelise",
        steps: [
          {
            name: "Lower DNS TTLs ahead of the window",
            description: "MX and Autodiscover TTLs are dropped days in advance so the switch propagates in minutes rather than hours. This costs nothing and has to happen before the window, not during it.",
          },
          {
            name: "Complete the final delta sync",
            description: "Mailboxes move online while users keep working; the final incremental pass is what makes the target authoritative. Only after it completes can mail routing change.",
          },
          {
            name: "Switch mail flow to the target tenant",
            description: "MX records repoint. Until this is done, mail is still arriving in the source tenant and any mailbox already switched is behind.",
          },
          {
            name: "Remove the domain from the source tenant",
            description: "This is the hard serialisation point. A custom domain can be verified in only one tenant at a time, so it must be fully removed from the source — including from every user, group, and alias that still carries it — before the target can claim it.",
          },
          {
            name: "Verify and assign the domain in the target tenant",
            description: "Only now can target users take their real addresses. Everything before this ran on temporary routing addresses, which is why the user-visible switch feels sudden even though the data moved weeks earlier.",
          },
          {
            name: "Rebuild client profiles and monitor",
            description: "Outlook profiles have to be re-created and OSTs re-downloaded; this is the support spike. Two weeks of active monitoring catches delayed sync and permission issues before the project is declared closed.",
          },
        ],
      },
      {
        type: "prose",
        heading: "What an illustrative 900-user consolidation looks like",
        paragraphs: [
          "To make the shape concrete, here is a typical mid-market pattern rather than a specific engagement: an acquirer consolidating a 900-user manufacturer into its own tenant, with a TSA giving nine months of runway.",
          "Discovery starts six weeks before close under an NDA and finds two things that matter — 140 shared mailboxes nobody had inventoried, and a Power Automate estate built on [premium connectors](/resources/glossary/premium-connector/) licensed under the seller's agreement, which does not travel with the deal. Coexistence is designed in parallel and live on day one. The pilot runs one week with IT and one business unit. Production waves run five weeks, sequenced by department so no single function is disrupted twice. Cutover takes a weekend; stabilisation runs two weeks.",
          "Total elapsed time from kickoff to decommission is about fourteen weeks. The two discovery findings would each have cost two to three weeks had they surfaced mid-project, which is the entire argument for spending money on discovery before close.",
        ],
      },
      {
        type: "list",
        heading: "The five things that most often reset the schedule",
        items: [
          "A Day-1 coexistence design that had not been agreed, discovered when the close date arrives and free/busy does not work.",
          "Litigation or [eDiscovery holds](/resources/glossary/ediscovery-hold/) on source content, which block deletion and therefore block source tenant decommission — see [the data governance gaps that surface in due diligence](/blog/data-governance-gaps-ma-due-diligence/).",
          "Teams chat history assumed to migrate natively. It does not, and the workaround is a separate decision with its own budget — covered in [Teams migration in a divestiture](/blog/teams-migration-divestiture/).",
          "A domain still attached to objects in the source tenant on cutover weekend, stalling the release and pushing the whole window.",
          "Shared mailboxes, resource mailboxes and distribution groups discovered late, because the inventory counted licensed users only.",
        ],
      },
      {
        type: "prose",
        heading: "How to compress the timeline honestly",
        paragraphs: [
          "There are two legitimate levers. The first is starting discovery before close, which converts the longest fixed-cost phase into work that happens in parallel with deal negotiation. The second is running more migration waves concurrently, which is bounded not by tooling but by how much change the service desk and the business can absorb in a week.",
          "What does not work is cutting the pilot or shortening stabilisation. Both convert a scheduled cost into an unscheduled one, and the unscheduled version lands during the period when the business is least tolerant of disruption.",
          "If your deal already has a fixed Day-1 or [TSA exit](/resources/glossary/tsa-exit/) date, the useful first step is finding out whether these phases fit inside it. That is what a [tenant migration assessment](/assessments/tenant-migration/) is for, and it is a considerably cheaper way to discover a problem than a slipped cutover.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can coexistence and migration run at the same time?",
        a: "Yes, and they usually have to. Coexistence has a fixed deadline at close while migration waves run for weeks afterwards. The mistake is planning them as one stream, which lets migration work push coexistence work past the close date.",
      },
      {
        q: "What is the longest pole in a tenant-to-tenant migration?",
        a: "For most mid-market deals it is migration execution, which scales with user count and data volume. But the phase that most often causes a missed date is due diligence, because everything discovered late converts directly into schedule.",
      },
      {
        q: "Does Teams chat history migrate between tenants?",
        a: "Not natively. Microsoft provides no supported cross-tenant migration for one-to-one chat or channel message history, so the options are a third-party tool, an export for compliance retention only, or a documented decision to leave it behind.",
      },
      {
        q: "Can a tenant migration be done in under eight weeks?",
        a: "Sometimes, for a small user count with clean identity and no custom workloads. The compressible phases are discovery, if it starts before close, and execution, if the business can absorb more parallel waves. The cutover sequence itself cannot be shortened.",
      },
    ],
  },

  {
    slug: "microsoft-365-tenant-migration-cost-drivers",
    title: "What Drives Microsoft 365 Tenant Migration Cost",
    metaDescription:
      "Tenant migration cost scales with complexity, not headcount. The drivers that actually move the number: identity topology, data volume, holds, and custom workloads.",
    cluster: "M&A Migration",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-06-09",
    dateModified: "2026-09-02",
    excerpt:
      "Cost scales with complexity, not headcount. Two 500-user migrations can differ by a factor of three, and the reasons are predictable.",
    imageUrl: "/images/assessments/tenant-migration.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "Almost every request for a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) quote starts with a user count, and user count is close to the least useful input available. Two 500-user migrations can differ by a factor of three in effort, and the difference is never the mailboxes.",
          "The variables that actually move the number are structural: how identity is arranged, how much unstructured data exists and where, what compliance obligations attach to it, and what has been built on top of the platform that has to be rebuilt rather than moved. This article walks each of them, and what a low-complexity version looks like next to a high-complexity one.",
          "For indicative ranges by scenario, see [tenant migration cost](/pricing/tenant-migration-cost/); this article is about why the range is wide rather than what the numbers are.",
        ],
      },
      {
        type: "table",
        heading: "The seven drivers, low to high complexity",
        headers: ["Driver", "Low complexity", "High complexity"],
        rows: [
          [
            "Identity topology",
            "Both tenants cloud-only, no on-premises directory, no third-party identity provider.",
            "On-premises Active Directory still authoritative, hybrid Exchange in play, or a federated identity provider that has to be re-pointed. Each adds a workstream.",
          ],
          [
            "Unstructured data volume",
            "Mailboxes near default sizes, OneDrive lightly used, a handful of SharePoint sites.",
            "Large archives, heavy OneDrive adoption, and hundreds of SharePoint sites with bespoke permissions. Volume drives elapsed time; permission sprawl drives effort.",
          ],
          [
            "Compliance obligations",
            "No holds, no retention policies, no regulated data categories.",
            "[eDiscovery holds](/resources/glossary/ediscovery-hold/) and [retention policies](/resources/glossary/retention-policy/) that constrain what can be deleted, plus [sensitivity labels](/resources/glossary/sensitivity-label/) that do not survive a tenant boundary and have to be re-applied.",
          ],
          [
            "Custom workloads",
            "No Power Platform, no Dynamics, no line-of-business integrations touching Microsoft 365.",
            "Power Apps and flows on [premium connectors](/resources/glossary/premium-connector/), Dynamics 365 environments, and integrations authenticating against the source tenant. These are rebuilds, not moves.",
          ],
          [
            "Coexistence duration",
            "Short overlap; users cut over within weeks.",
            "Months of [Day-1 coexistence](/resources/glossary/day-1-coexistence/) under a long TSA, which is a running operational cost as well as a build cost.",
          ],
          [
            "Teams estate",
            "Teams used lightly, chat history not required.",
            "Teams central to how the business works, with chat history, private channels and shared channels all in scope. No native cross-tenant path exists for chat history.",
          ],
          [
            "Device and endpoint management",
            "Devices already managed by the target tenant, or out of scope.",
            "Intune-enrolled devices that have to be migrated between tenants, which for many device types means a re-enrolment touch per device.",
          ],
        ],
      },
      {
        type: "prose",
        heading: "Why identity topology dominates",
        paragraphs: [
          "Identity is the driver that most often surprises people, because it does not correlate with company size at all. A 200-user business with an on-premises Active Directory that still owns authentication, synchronising to the source tenant, is materially harder than an 800-user cloud-only business.",
          "The reason is that [cross-tenant identity mapping](/resources/glossary/cross-tenant-identity-mapping/) has to reconcile objects that exist in three places rather than two, and the on-premises directory is frequently not in the transaction. In a carve-out especially, the seller keeps the directory and the buyer inherits users who are still authenticating against something they do not own. Resolving that is a project in its own right, and it has to finish before mailbox moves can be scheduled reliably.",
          "This is also why a user count quoted without a topology question behind it is not a quote. If nobody has asked whether there is an on-premises directory, the estimate is missing its largest variable.",
        ],
      },
      {
        type: "prose",
        heading: "Data volume drives duration; permissions drive effort",
        paragraphs: [
          "These two get conflated and behave differently. Volume — total mailbox and OneDrive size — mostly determines how long the copy takes, and copy time is largely unattended. It affects the calendar more than the invoice.",
          "Permission complexity is the opposite. Hundreds of SharePoint sites with unique permissions, individually-shared documents and orphaned sites with no owner produce a decision per site rather than a transfer per site, and decisions need people. A site inventory that turns up broken inheritance across most of the estate will add more to the cost than a terabyte of mail.",
          "This is one of the few places where pre-migration cleanup genuinely pays for itself. Retiring dead sites and rationalising permissions before a migration is cheaper than migrating them and rationalising afterwards, because the migration itself forces a per-site decision either way. Where the estate needs that work independently of any deal, it is a [data governance](/services/data-governance/) engagement rather than a migration one.",
        ],
      },
      {
        type: "list",
        heading: "Costs that are consistently underestimated",
        items: [
          "Shared mailboxes, resource mailboxes and distribution groups. Inventories built from licensed user counts miss them, and they can outnumber user mailboxes in an organisation with many meeting rooms and functional addresses.",
          "The service desk spike after cutover. Outlook profiles are rebuilt and OSTs re-download; that is a support cost even when the migration itself is clean.",
          "Rebuilding Power Platform assets. Flows and apps do not move between tenants as running artefacts, and connections have to be re-authorised in the target — the licensing implications are covered in [Power Platform licensing explained](/blog/power-platform-licensing-explained/).",
          "Re-applying sensitivity labels. Labels are tenant-scoped, so the taxonomy has to exist in the target and be re-applied to content that arrives unlabelled.",
          "Coexistence teardown. Organisation relationships, sync rules and routing connectors all have to be removed cleanly, and a design that did not plan for removal leaves work at the end.",
        ],
      },
      {
        type: "prose",
        heading: "How to get an estimate that survives contact with the project",
        paragraphs: [
          "The useful move is to price discovery separately and first. A short [tenant migration assessment](/assessments/tenant-migration/) produces the inventory that makes the rest of the estimate defensible: identity topology, mailbox and site counts including the non-user objects, hold and retention posture, and a list of custom workloads with an owner beside each one.",
          "That inventory turns a range into a number. It also has value independent of the migration, because most of what it finds — unowned sites, unmanaged sharing, undocumented integrations — is worth knowing regardless of whether the deal closes.",
          "For the schedule side of the same question, see [the tenant-to-tenant migration timeline](/blog/microsoft-365-tenant-to-tenant-migration-timeline/), which covers which phases can be compressed and which cannot.",
        ],
      },
      {
        type: "prose",
        heading: "The fixed floor, and why small migrations feel expensive",
        paragraphs: [
          "A significant share of tenant migration effort does not scale with size at all. Coexistence has to be designed whether there are 80 users or 800. The cutover sequence takes a weekend either way. Project management, communications and the runbook are the same artefacts. Discovery is cheaper for a small estate but not proportionally cheaper, because the questions that have to be asked are the same questions.",
          "That fixed floor is why a 100-user migration frequently looks poor value on a per-user basis and a 1,000-user migration looks efficient. It is also why splitting one migration into several smaller ones — a common instinct when a business wants to reduce risk by phasing — usually increases total cost rather than reducing it, because the fixed component is paid more than once.",
          "The corollary is that the variable component is where negotiation is possible. Wave count, how much cleanup happens before rather than during, and how much of the endpoint work the internal service desk absorbs are all genuine levers. The fixed floor is not.",
          "This also explains a pattern that looks irrational from outside: an acquirer with several small acquisitions in flight is often better served migrating them together into one programme, even though each business would prefer its own timeline. The fixed component is paid once instead of four times, and the runbook improves with each wave rather than being rebuilt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does tenant migration cost scale with user count?",
        a: "Only loosely. User count sets a floor, but identity topology, permission complexity and custom workloads move the number far more. Two 500-user migrations can differ by a factor of three.",
      },
      {
        q: "What is the single biggest cost driver?",
        a: "Identity topology. A cloud-only tenant pair is straightforward; an on-premises Active Directory that still owns authentication, especially one the buyer does not control after a carve-out, adds a workstream that has to finish before migration waves can start.",
      },
      {
        q: "Is it cheaper to clean up before migrating or after?",
        a: "Before, for permissions and dead content. The migration forces a per-site decision either way, so making those decisions in advance avoids paying to move content you were going to retire.",
      },
      {
        q: "Why do estimates change after discovery?",
        a: "Because the inputs that matter are not visible from outside. Shared and resource mailboxes, holds, undocumented integrations and permission sprawl are all invisible in a headcount and all material to effort.",
      },
    ],
  },

  {
    slug: "cross-tenant-mailbox-migration-what-breaks",
    title: "Cross-Tenant Mailbox Migration: What Actually Breaks",
    metaDescription:
      "The mail moves reliably. What breaks in a cross-tenant mailbox migration is everything attached to it: profiles, delegates, rules, labels and Teams chat history.",
    cluster: "M&A Migration",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-06-23",
    dateModified: "2026-09-02",
    excerpt:
      "The mail moves. It is the relationships around the mail — delegates, rules, labels, profiles — that need planning.",
    imageUrl: "/images/services/microsoft-365-migration.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "Microsoft's cross-tenant mailbox migration feature moves mailbox content between tenants using the same Mailbox Replication Service that handles moves inside a tenant. The content transfer itself is well-trodden and rarely the problem.",
          "What generates the support tickets is everything attached to a mailbox that is not the mailbox: the Outlook profile on the endpoint, delegate and Send As permissions, client-side rules, sensitivity labels applied to messages, and the Teams estate that users think of as part of the same system. Some of these move, some are re-created, and some have no migration path at all.",
          "This article sorts them into those three categories, so a migration plan can budget for the ones that need human work.",
        ],
      },
      {
        type: "table",
        heading: "What moves, what is re-created, what does not travel",
        headers: ["Item", "Behaviour", "What the plan needs"],
        rows: [
          [
            "Mailbox content and folder structure",
            "Moves. Mail, calendar and contacts transfer with the mailbox.",
            "Nothing beyond the move itself. This is the part that works.",
          ],
          [
            "Archive mailbox",
            "Moves, provided the target object carries the archive identifier copied from the source before the move starts.",
            "Object preparation. Missing archive identifiers are a common cause of a move that completes without the archive.",
          ],
          [
            "Outlook profile and offline cache",
            "Does not move. The profile points at the old tenant and has to be re-created; the OST re-downloads.",
            "A per-user endpoint action and a support desk ready for the spike. This is the single largest user-visible disruption.",
          ],
          [
            "Delegates, Send As and Full Access",
            "Do not transfer with the mailbox. They are directory permissions, not mailbox content.",
            "Export before, re-apply after, and sequence delegate pairs into the same wave — a migrated executive and an unmigrated assistant is a broken workflow.",
          ],
          [
            "Server-side and client-side rules",
            "Rules generally survive, but rules referencing objects that did not move — a shared mailbox still in the source, a distribution group not yet created — silently stop working.",
            "Inventory rules that target other objects and validate them after the wave completes.",
          ],
          [
            "Sensitivity labels on messages",
            "Labels are tenant-scoped. Content arrives carrying a label identifier the target tenant does not recognise.",
            "The label taxonomy has to exist in the target before migration, and protected content needs a tested access path.",
          ],
          [
            "Teams chat and channel messages",
            "No native cross-tenant migration path exists.",
            "An explicit decision: third-party tooling, export for compliance only, or documented data loss. See [Teams migration in a divestiture](/blog/teams-migration-divestiture/).",
          ],
          [
            "Free/busy across the boundary",
            "Works during coexistence via an organisation relationship, then has to be dismantled.",
            "Coexistence design and a teardown plan. See [Day-1 coexistence](/resources/glossary/day-1-coexistence/).",
          ],
        ],
      },
      {
        type: "prose",
        heading: "Object preparation is where silent failures start",
        paragraphs: [
          "Before a mailbox can move, a corresponding object has to exist in the target tenant as a mail user carrying specific identifiers copied from the source — the mailbox and archive identifiers, and the source primary address as a proxy address so mail routes correctly during the transition.",
          "This preparation is scripted, which makes it feel low-risk, and it is where the quiet failures live. An object missing its archive identifier migrates the primary mailbox and leaves the archive behind. An object with the wrong proxy addresses routes mail to the wrong place after cutover. Neither throws an error at move time; both surface days later as a user complaint.",
          "The mitigation is unglamorous: validate the prepared objects against the source before each wave rather than trusting the script that created them, and treat a mismatch as a wave blocker rather than a warning.",
        ],
      },
      {
        type: "steps",
        heading: "Sequencing a wave so the breakage is contained",
        steps: [
          {
            name: "Group by working relationship, not by alphabet",
            description: "Delegates, their principals, and the shared mailboxes they depend on go in the same wave. Splitting them produces a broken workflow that lasts until the second half migrates.",
          },
          {
            name: "Move the shared and resource mailboxes with their department",
            description: "Room mailboxes and functional addresses are invisible in a licensed-user inventory and highly visible when they are missing. They belong with the team that books them.",
          },
          {
            name: "Export permissions and rules before the move",
            description: "Delegate rights, Send As and Full Access are directory state, not mailbox content. Capture them per wave so re-application is a known list rather than a reconstruction from tickets.",
          },
          {
            name: "Complete the move, then re-apply permissions",
            description: "Re-application happens after the target mailboxes exist. Doing it as a scripted step immediately after the wave, rather than reactively, is what keeps the support volume down.",
          },
          {
            name: "Rebuild client profiles in a supported window",
            description: "Users need a new Outlook profile and a re-downloaded cache. Scheduling this rather than letting users discover it is the difference between a planned task and a help desk queue.",
          },
          {
            name: "Validate before closing the wave",
            description: "Archive present, delegates working, rules still firing, mail routing to the right place. A wave is not done when the move completes; it is done when the checks pass.",
          },
        ],
      },
      {
        type: "prose",
        heading: "An illustrative failure and what it cost",
        paragraphs: [
          "A typical shape, rather than a specific engagement: a wave of 120 users completes cleanly over a weekend. On Monday the executive assistants cannot open the calendars they manage, because delegate rights were never exported and the executives were in a different wave.",
          "Nothing is lost and nothing is technically broken. But re-establishing delegate access for around thirty pairs by hand, while the affected people are the most senior and least patient users in the business, consumes most of a week of a senior engineer and does lasting damage to confidence in the project.",
          "The preventive step was an export that takes minutes. This is the general shape of cross-tenant migration risk: the expensive failures are cheap to prevent and expensive to discover.",
        ],
      },
      {
        type: "prose",
        heading: "Planning around it",
        paragraphs: [
          "Two practical rules cover most of this. Migrate people together who work together, and treat everything attached to a mailbox as a separate inventory with its own re-application step.",
          "The rest is discovery. Delegate maps, rules referencing external objects, and the label taxonomy are all knowable before the first wave, and all invisible unless somebody goes looking. That work sits inside a [tenant migration assessment](/assessments/tenant-migration/), or inside the discovery phase of an [M&A tenant migration](/services/ma-tenant-migration/) engagement.",
          "For how these waves fit into the wider schedule, see [the tenant-to-tenant migration timeline](/blog/microsoft-365-tenant-to-tenant-migration-timeline/).",
        ],
      },
      {
        type: "prose",
        heading: "OneDrive and SharePoint move on a separate track",
        paragraphs: [
          "Mailbox migration and file migration are different mechanisms with different tooling, different prerequisites and different failure modes, and treating them as one workstream is a reliable way to produce a bad plan.",
          "OneDrive content moves per user and needs the target account to exist first, which puts it downstream of identity work. SharePoint sites move per site and raise a question mailboxes never do: what happens to the permissions. A site whose access is granted to individuals rather than groups arrives in the target as a set of assignments that may no longer refer to anyone, and someone has to decide the correct state rather than reproduce the old one.",
          "Sequencing matters here too. Moving a user's mailbox before their OneDrive leaves them with mail in one tenant and files in the other, which is workable for a few days and unpleasant for a few weeks. Where files are the primary workload — which is common in engineering and professional services — the file migration should lead and the mailbox follow.",
          "This is one of the reasons a [Microsoft 365 migration](/services/microsoft-365-migration/) engagement plans file and mail as parallel tracks with explicit dependencies rather than as one sequential list. Where the SharePoint estate is genuinely disordered, the cleanup belongs with an [intranet and SharePoint](/solutions/sharepoint-intranet/) workstream rather than inside the migration.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do users lose email during a cross-tenant mailbox migration?",
        a: "No. Mailbox moves run online while people keep working, and a final incremental sync makes the target authoritative at cutover. The visible disruption is having to re-create the Outlook profile and re-download the offline cache, not data loss.",
      },
      {
        q: "Do delegate permissions migrate with the mailbox?",
        a: "No. Delegate rights, Send As and Full Access are directory permissions rather than mailbox content, so they have to be exported before the move and re-applied afterwards. Migrating delegates and their principals in the same wave avoids a broken workflow in between.",
      },
      {
        q: "What happens to sensitivity labels on migrated mail?",
        a: "Labels are scoped to the tenant that created them, so migrated content arrives referencing a label the target does not recognise. The taxonomy has to exist in the target tenant before migration, and protected content needs a tested access path afterwards.",
      },
      {
        q: "Can Teams chat history be migrated between tenants?",
        a: "Not with native Microsoft tooling. The realistic options are a third-party migration tool, exporting content for compliance retention without restoring it into the target, or accepting the loss as a documented decision.",
      },
    ],
  },

  {
    slug: "teams-migration-divestiture",
    title: "Teams Migration in a Divestiture",
    metaDescription:
      "In a divestiture you divide shared history rather than combine it. Teams makes that a governance problem first, because ownership was never modelled to be split.",
    cluster: "M&A Migration",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-08-04",
    dateModified: "2026-09-02",
    excerpt:
      "In a merger you combine. In a divestiture you have to divide shared history — and that is a governance problem before it is a technical one.",
    imageUrl: "/images/services/collaboration-enablement.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "A merger asks how two estates combine. A [carve-out](/resources/glossary/carve-out/) asks something harder: how a single estate divides, when nothing in it was ever structured with division in mind.",
          "Teams is where this bites hardest. A team is not a self-contained object — it is a Microsoft 365 group, a SharePoint site behind it, a chat store, and a membership list, with private channels holding their own separate sites and shared channels potentially reaching into other tenants entirely. Splitting that means deciding, per team, who owns the content, and the answer is frequently \"both\".",
          "This article covers what that decision looks like and the technical constraints that shape it.",
        ],
      },
      {
        type: "prose",
        heading: "Why a team is harder to divide than a mailbox",
        paragraphs: [
          "A mailbox has one owner. Its content belongs to a person, and in a divestiture that person goes to one side or the other, taking the mailbox with them. The decision is a lookup.",
          "A team has collective content. The engineering team's channel history contains conversations between people who are about to end up in different companies, attached to files that may be commercially sensitive to one side and operationally necessary to the other. There is no per-item owner to look up, so somebody has to make a judgement about the whole.",
          "That judgement is legal and commercial before it is technical, which is why Teams separation should start with the deal team rather than with the migration tooling. The technical question — how content moves — is downstream of a question the technology cannot answer.",
        ],
      },
      {
        type: "table",
        heading: "Teams components and how each behaves in a separation",
        headers: ["Component", "What it actually is", "Separation behaviour"],
        rows: [
          [
            "Standard channel",
            "Content lives in the SharePoint site behind the team's Microsoft 365 group; conversations live in the chat store.",
            "Files can be moved with SharePoint site migration. Channel conversation history has no native cross-tenant path.",
          ],
          [
            "Private channel",
            "Has its own separate SharePoint site collection, distinct from the parent team's site.",
            "Frequently missed in inventories built from team lists. Each private channel is an additional site to assess and move.",
          ],
          [
            "Shared channel",
            "Also its own site, and can include members from other tenants without guest accounts.",
            "Needs explicit review during separation: an external participant may belong to the entity being divested, or to a third party that should lose access at close.",
          ],
          [
            "One-to-one and group chat",
            "Stored per user rather than in a team.",
            "No native cross-tenant migration. Usually the largest single data-loss decision in a divestiture.",
          ],
          [
            "Meeting recordings and transcripts",
            "Stored in OneDrive for the organiser or in the channel's SharePoint site.",
            "Move with the underlying site or account, which means ownership follows the organiser rather than the subject matter.",
          ],
          [
            "Team membership and guests",
            "Directory objects, not content.",
            "Rebuilt in the target. Guest access is a review point, because guests invited for the divested entity should not persist afterwards.",
          ],
        ],
      },
      {
        type: "steps",
        heading: "Working through the separation",
        steps: [
          {
            name: "Inventory teams with their private and shared channels",
            description: "An inventory built from the team list alone understates the estate, because private and shared channels carry their own sites. Count sites, not teams.",
          },
            {
            name: "Assign an owner and a disposition to each team",
            description: "Goes with the divested entity, stays with the parent, or is duplicated. Duplication is the expensive answer and needs a named approver, because it means the same content ends up in two companies.",
          },
          {
            name: "Get the ambiguous ones decided by legal, not by IT",
            description: "Teams containing mixed commercial content are a deal question. IT can surface them and describe the options; it should not be the function that decides who keeps a customer negotiation history.",
          },
          {
            name: "Review external and guest access",
            description: "Guests invited on behalf of the divested business, and shared channels reaching other tenants, both need an explicit keep-or-revoke decision timed to close.",
          },
          {
            name: "Decide the chat history position and write it down",
            description: "Third-party tooling, compliance export, or accepted loss. Whichever it is, it needs to be a recorded decision with a named owner, because it will be questioned later.",
          },
          {
            name: "Check holds before deleting anything",
            description: "Content under an [eDiscovery hold](/resources/glossary/ediscovery-hold/) cannot be deleted, which constrains both source cleanup and the timing of tenant decommission.",
          },
        ],
      },
      {
        type: "prose",
        heading: "The compliance constraint that catches people",
        paragraphs: [
          "Holds and [retention policies](/resources/glossary/retention-policy/) are scoped to the tenant that created them and do not follow content across a tenant boundary. Two consequences follow, and both matter in a divestiture.",
          "First, content that arrives in the acquiring tenant is not under the source's retention or hold posture. If an obligation attaches to that content, it has to be re-established in the target, and nobody is automatically reminded to do it.",
          "Second, content still under hold in the source cannot be deleted, which means the source tenant cannot be fully decommissioned on schedule if a hold is still active. On a TSA with a fixed [exit date](/resources/glossary/tsa-exit/), that turns a compliance detail into a schedule risk. This is one of several reasons a [data governance](/services/data-governance/) review belongs in due diligence rather than after close — the pattern is covered in more depth in [the data governance gaps that surface in M&A due diligence](/blog/data-governance-gaps-ma-due-diligence/).",
        ],
      },
      {
        type: "list",
        heading: "What to settle before the technical work starts",
        items: [
          "A per-team disposition, approved by someone with authority to decide what the divested entity is entitled to keep.",
          "A written position on chat history, including who signed off on any accepted data loss.",
          "A hold and retention inventory, so decommission timing is based on what may legally be deleted rather than on the project plan.",
          "A guest and shared-channel review scheduled to complete before close, not after.",
          "A [Day-1 coexistence](/resources/glossary/day-1-coexistence/) design, because separated entities usually still have to work together through a transition period.",
        ],
      },
      {
        type: "prose",
        heading: "Where this sits in the wider programme",
        paragraphs: [
          "Teams separation is rarely the largest workstream by volume, and it is frequently the largest by contention. The mailboxes and files have owners; the collaboration history does not, and every ambiguous team is a decision that needs a person rather than a tool.",
          "Planning for that means starting the disposition work early and in parallel with the technical discovery, rather than treating it as an input the deal team will supply on request. In practice the list of ambiguous teams is the useful artefact, because it converts an open-ended question into a finite set of decisions.",
          "For how the rest of the estate moves, see [the tenant-to-tenant migration timeline](/blog/microsoft-365-tenant-to-tenant-migration-timeline/) and [what actually breaks in a cross-tenant mailbox migration](/blog/cross-tenant-mailbox-migration-what-breaks/). For the engagement itself, [M&A tenant migration](/services/ma-tenant-migration/).",
        ],
      },
      {
        type: "prose",
        heading: "The group underneath the team",
        paragraphs: [
          "Every standard team is backed by a Microsoft 365 group, and the group rather than the team is what actually owns membership and the SharePoint site behind it. That indirection is why Teams separation work keeps producing surprises: changing something in Teams changes a group object, and the group may also be used by things that have nothing to do with Teams.",
          "In a divestiture this matters in two places. Group ownership frequently sits with someone who has left, which means there is no one entitled to make changes at the moment changes are needed. And groups created for a project years ago often still hold membership that nobody has reviewed, so the population inheriting the content is not the population anyone would choose today.",
          "Both are cheap to fix and expensive to discover late. An ownership and membership review across the group estate, run early, converts a set of blocked decisions into a list of ordinary ones — and it is worth doing whether or not the deal proceeds, which is the same argument that applies to most [collaboration enablement](/services/collaboration-enablement/) housekeeping.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can Teams chat history be split between two companies?",
        a: "Not natively. Microsoft provides no supported cross-tenant migration for one-to-one chat or channel messages, so a divestiture has to choose between third-party tooling, exporting for compliance retention only, or accepting the loss as a recorded decision.",
      },
      {
        q: "Do private channels migrate with their parent team?",
        a: "They have to be handled separately. A private channel has its own SharePoint site collection distinct from the parent team's site, so an inventory built from the team list alone will understate the number of sites in scope.",
      },
      {
        q: "Who should decide which side keeps a shared team?",
        a: "The deal or legal team, with IT surfacing the list and describing the options. Teams containing mixed commercial history raise entitlement questions that IT is not positioned to answer.",
      },
      {
        q: "Why do holds affect the divestiture schedule?",
        a: "Content under an eDiscovery hold cannot be deleted, so an active hold blocks full decommission of the source tenant. On a transition services agreement with a fixed exit date, that turns a compliance detail into a schedule dependency.",
      },
    ],
  },

  {
    slug: "dynamics-365-business-central-vs-finance-operations",
    title: "Business Central vs Finance & Operations: Which Fits",
    metaDescription:
      "Business Central and Finance & Operations are not tiers of one product. They are built for different operational complexity, and the choice is hard to reverse.",
    cluster: "Dynamics 365",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-03-04",
    dateModified: "2026-09-02",
    excerpt:
      "They are not two tiers of the same product. They are different products for different operational complexity, and moving between them later is a reimplementation.",
    imageUrl: "/images/compare/business-central-vs-finance-operations.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "The most common framing of this decision is wrong in a way that costs money. Business Central and Finance & Operations get described as the small and large versions of [Dynamics 365](/services/dynamics-365/) ERP, as though the choice were about company size and the upgrade path were a licence change.",
          "They are separate products with separate codebases, separate extension models, separate implementation methodologies and separate operational disciplines. Moving from one to the other later is a reimplementation, not an upgrade. That makes this a decision worth getting right the first time, and worth making on operational complexity rather than on revenue or headcount.",
          "This article covers the dimensions that actually separate them, the signals that point each way, and the migration path between them for organisations that outgrow the smaller one.",
        ],
      },
      {
        type: "table",
        heading: "The dimensions that actually decide it",
        headers: ["", "Business Central", "Finance & Operations"],
        rows: [
          [
            "Designed around",
            "One legal entity, or a small number of related ones sharing a chart of accounts and a way of working.",
            "Many legal entities across countries and currencies, with intercompany trading and consolidation as first-class concerns rather than add-ons.",
          ],
          [
            "Functional footprint",
            "Financials, sales, purchasing, inventory, projects and light manufacturing in one application.",
            "Deep, separately-licensed modules for finance, supply chain, manufacturing and warehouse, each considerably more configurable than the Business Central equivalent.",
          ],
          [
            "Extension model",
            "AL extensions, sandbox environments, and a smaller surface to learn. A capable partner or a strong internal developer can maintain it.",
            "X++ with a heavier application lifecycle management discipline. Realistically needs a dedicated technical function or a retained partner.",
          ],
          [
            "Localisation coverage",
            "Country localisations exist for many markets, but the list is narrower and some are partner-supplied.",
            "Broader native country and regulatory coverage, which is often the deciding factor for a genuinely multinational operation.",
          ],
          [
            "Implementation shape",
            "Months for a single entity with clean data. Configuration-led, with customisation the exception.",
            "Substantially longer and design-led. Multi-entity structure, process design and testing dominate the schedule.",
          ],
          [
            "Team it assumes",
            "A finance lead who can make decisions, and an implementation partner. No permanent ERP team required.",
            "An internal owner, functional analysts, and a defined change-control process. The product assumes that structure exists.",
          ],
          [
            "Realistic risk",
            "Outgrowing it as entities are added, then facing a reimplementation.",
            "Over-buying capability that is never configured, and carrying the operational overhead of a platform sized for a business you do not yet run.",
          ],
        ],
      },
      {
        type: "list",
        heading: "Signals that point to Business Central",
        items: [
          "One legal entity, or a handful sharing a chart of accounts and a common way of operating.",
          "Coming off QuickBooks, spreadsheets, or an ageing Dynamics GP, NAV or SL install — the [Dynamics GP to Business Central](/migrations/dynamics-gp-to-business-central/) and [NAV to Business Central](/migrations/dynamics-nav-to-business-central/) paths are both well-defined.",
          "Integrated financials, inventory and light manufacturing needed in one system rather than best-of-breed components.",
          "No appetite to staff a permanent ERP function, and a preference for a shorter implementation with lower total cost of ownership.",
          "Reporting needs that [Power BI](/solutions/data-analytics/) can serve on top of the ERP rather than requiring deep in-application financial reporting.",
        ],
      },
      {
        type: "list",
        heading: "Signals that point to Finance & Operations",
        items: [
          "Multiple legal entities across countries or currencies, with intercompany trading and statutory consolidation as routine operations.",
          "Complex multi-tier supply chain, advanced warehouse management, or process and discrete manufacturing running together — see [supply chain](/dynamics-365/supply-chain/) and [finance](/dynamics-365/finance/).",
          "Regulatory and localisation requirements in markets where the deeper native coverage matters.",
          "Existing internal capacity to own an ERP: named functional owners, a change process, and a testing discipline.",
          "A transaction volume or organisational complexity that a single-entity-shaped product would have to be customised into handling.",
        ],
      },
      {
        type: "prose",
        heading: "The trap in the middle",
        paragraphs: [
          "The genuinely difficult cases sit between these lists: three to five legal entities, one country, moderate manufacturing, and a finance team of six. Both products can be made to work, and the decision turns on trajectory rather than on the current state.",
          "The question worth asking is what the entity count looks like in three years. Business Central handles a small number of related entities well; it handles a growing portfolio of acquired entities with divergent processes considerably less well, and organisations that acquire regularly tend to find the ceiling faster than their revenue would suggest.",
          "The second question is about the team. Finance & Operations rewards an organisation that can staff it and punishes one that cannot. Choosing the larger platform without the operating model to run it is the most expensive version of this mistake, because the licence and implementation costs land immediately while the capability never gets configured.",
        ],
      },
      {
        type: "prose",
        heading: "Moving between them later",
        paragraphs: [
          "Companies do outgrow Business Central, usually by adding entities and complexity rather than by adding revenue. Because both products sit on the Dynamics 365 platform, the move to Finance & Operations is more tractable than migrating from an unrelated legacy ERP — the data model is familiar and integration patterns carry over.",
          "It is still a reimplementation. Configuration does not transfer, extensions have to be rewritten in a different language against a different application, and processes get redesigned rather than lifted. Budget it as a new ERP project with a head start, not as an upgrade.",
          "That is the argument for spending real effort on this decision up front. A [readiness assessment](/assessments/business-central-readiness/) is designed to answer it with evidence rather than instinct, and the [side-by-side comparison](/compare/business-central-vs-finance-operations/) covers the functional detail this article summarises.",
        ],
      },
      {
        type: "prose",
        heading: "What to do next",
        paragraphs: [
          "If the answer looks like Business Central, the next questions are schedule and cost: [a realistic Business Central implementation timeline](/blog/business-central-implementation-timeline/) covers the first, and [implementation cost](/pricing/business-central-implementation-cost/) the second.",
          "If it looks like Finance & Operations, the useful next step is a design conversation rather than a demo, because the risk in that product is organisational readiness rather than functional fit.",
          "If it genuinely sits in the middle, that is worth an outside opinion — and it is the conversation [our Dynamics 365 practice](/services/dynamics-365/) has most often.",
        ],
      },
      {
        type: "prose",
        heading: "What the licensing model tells you about fit",
        paragraphs: [
          "Licensing is usually treated as a cost question after the product decision, but the shape of each licensing model is itself a signal about who the product is for, and reading it that way is more useful than comparing totals.",
          "Business Central licenses full users and lighter users who only need to read or approve, which suits an organisation where a modest finance and operations team transacts and everyone else consumes. Finance & Operations licenses by functional module, which assumes an organisation large enough that finance, supply chain and manufacturing are staffed by different people doing genuinely different work.",
          "If your organisation cannot cleanly answer which module each person belongs to, that is a signal about fit rather than a licensing inconvenience. Conversely, if the module boundaries map neatly onto real teams, the larger product is likely to be a better structural match regardless of what the headcount suggests.",
          "For current figures see [Dynamics 365 licensing](/pricing/dynamics-365-licensing/), and if the shortlist extends beyond Microsoft, [Business Central vs NetSuite](/compare/business-central-vs-netsuite/) covers the comparison people most often run alongside this one.",
          "One caution about reading licensing this way: it is a signal about fit, not a substitute for a functional assessment. An organisation can map cleanly onto module boundaries and still be better served by the smaller product because its transaction volumes and process complexity do not justify the operational overhead of the larger one.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Finance & Operations just a bigger version of Business Central?",
        a: "No. They are separate products with different codebases, extension models and implementation methodologies. Finance & Operations is built around many legal entities and deep module configuration; Business Central is built around one entity and an integrated footprint.",
      },
      {
        q: "Can we start on Business Central and upgrade later?",
        a: "You can move, but it is a reimplementation rather than an upgrade. Configuration does not transfer and extensions have to be rewritten. The platform similarity gives you a head start on data and integration, not on the project.",
      },
      {
        q: "How many legal entities can Business Central handle?",
        a: "There is no single number. It handles a small group of entities sharing a chart of accounts and a common way of working; it struggles as the portfolio grows and processes diverge, which is why acquisitive companies hit the ceiling sooner than their revenue suggests.",
      },
      {
        q: "What is the most expensive mistake in this decision?",
        a: "Choosing Finance & Operations without the operating model to run it. Licence and implementation costs land immediately, while the capability that justified the choice never gets configured because nobody owns it.",
      },
    ],
  },

  {
    slug: "dynamics-gp-end-of-support-options",
    title: "Dynamics GP End of Support: Your Real Options",
    metaDescription:
      "Microsoft has published an end date for Dynamics GP. Staying is defensible short-term; what is not defensible is treating a known date as a surprise.",
    cluster: "Dynamics 365",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-05-26",
    dateModified: "2026-09-02",
    excerpt:
      "Staying on GP is a defensible short-term position. Treating a published end date as a surprise is not — and the planning window is shorter than it looks.",
    imageUrl: "/images/migrations/dynamics-gp-to-business-central.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "Microsoft has published a fixed end date for Dynamics GP, closed it to new customers, and set a defined window during which security updates continue after mainstream support ends. Confirm the current dates against Microsoft's own lifecycle policy before you plan against them — they have been revised before and the exact figures matter less than the shape.",
          "The shape is this: you have a known deadline, a security-update tail that buys time but not capability, and a replacement project whose length you control by starting it early. Staying on GP for now is a legitimate decision. Arriving at the deadline without having made one is not.",
          "This article covers the four real options, what each costs you, and how to work backwards from your own end date to a decision date.",
        ],
      },
      {
        type: "table",
        heading: "The four options and what each actually commits you to",
        headers: ["Option", "What it buys", "What it costs"],
        rows: [
          [
            "Stay on GP through the security-update window",
            "Time, and no project. Payroll and core financials keep working; security updates continue for the published period.",
            "No new functionality, a shrinking pool of GP consultants, and increasing integration friction as everything around GP modernises. The cost is deferred, not avoided.",
          ],
          [
            "Move to Business Central",
            "The intended successor path. Familiar concepts, a supported migration route from GP, and a cloud platform with two feature releases a year.",
            "A real implementation. Chart of accounts, historical data policy and integrations all get decided rather than carried over.",
          ],
          [
            "Move to Finance & Operations",
            "Headroom for genuine multi-entity, multi-country complexity that Business Central would strain against.",
            "A materially larger project and an operating model most GP-sized organisations do not have. Usually the wrong answer unless complexity genuinely warrants it.",
          ],
          [
            "Move to a non-Microsoft ERP",
            "A legitimate option if the rest of your estate is not Microsoft-centric.",
            "You give up the integration advantages with Microsoft 365, Power Platform and Power BI that make the Business Central path cheaper than its licence cost suggests.",
          ],
        ],
      },
      {
        type: "prose",
        heading: "Why the planning window is shorter than the deadline",
        paragraphs: [
          "The instinct is to count backwards from the end-of-support date by the length of the implementation. That produces a decision date that is too late, for three reasons.",
          "First, the implementation is not the whole project. Data preparation — deciding what history moves, cleaning master data, reconciling sub-ledgers — routinely takes as long as configuration and starts earlier. Second, finance systems have a natural go-live window: most organisations will only cut over at a period or year end, which means the calendar offers a handful of viable dates rather than a continuous range. Miss one and you wait months for the next.",
          "Third, the supply of experienced GP-to-Business Central consultants is finite and gets scarcer as the deadline approaches. Organisations that start late compete for the same people at the same time.",
          "In practice, the useful arithmetic is: pick your go-live period end, subtract the implementation, subtract the data preparation, subtract a procurement and partner-selection cycle, and treat the result as the date the decision has to be made — not the date the project starts.",
        ],
      },
      {
        type: "steps",
        heading: "Working backwards from your own end date",
        steps: [
          {
            name: "Confirm the current lifecycle dates",
            description: "Check Microsoft's published lifecycle policy rather than a partner blog, including your own version's position within it. This is the only date in the exercise you do not control.",
          },
          {
            name: "Choose the go-live period end you are aiming at",
            description: "Year end is cleanest; a quarter end is workable. This is a finance decision, not an IT one, and it constrains everything upstream.",
          },
          {
            name: "Size the data preparation honestly",
            description: "How many years of history actually have to move, how clean the customer and vendor masters are, and whether sub-ledgers reconcile. This is the phase that most often runs long — see [a realistic Business Central implementation timeline](/blog/business-central-implementation-timeline/).",
          },
          {
            name: "Inventory the integrations and customisations",
            description: "Every GP customisation, report and interface is a keep-or-drop decision. Most organisations discover that a meaningful share of them are unused, which shortens the project once it is established.",
          },
          {
            name: "Decide the target and validate the fit",
            description: "Business Central for most GP estates; Finance & Operations only where multi-entity complexity genuinely warrants it. [Business Central vs Finance & Operations](/blog/dynamics-365-business-central-vs-finance-operations/) covers the distinction.",
          },
          {
            name: "Set the decision date and hold it",
            description: "The output of the arithmetic above. Passing it without a decision means the security-update tail is now load-bearing, which is a materially worse position than choosing to stay.",
          },
        ],
      },
      {
        type: "prose",
        heading: "What a GP estate usually looks like at discovery",
        paragraphs: [
          "An illustrative but typical shape: a manufacturer running GP for fifteen years, with a dozen customisations, four integrations to systems nobody fully documents, and a decade of transactional history that finance assumes must all migrate.",
          "Discovery usually reverses two of those assumptions. Several customisations turn out to replicate functionality that is now standard, and much of the history does not need to be live in the new system — an archived, queryable copy satisfies the actual requirement, which is being able to answer a question about an old transaction rather than to post against it.",
          "Both findings shorten the project. Neither is discoverable without doing the inventory, which is the argument for starting discovery well before the implementation budget is approved rather than after.",
        ],
      },
      {
        type: "prose",
        heading: "If you decide to stay for now",
        paragraphs: [
          "That is a defensible position, provided it is a decision with a review date rather than an absence of one. Three things make it safer.",
          "Write down what the security-update window actually covers, so nobody assumes it includes functional updates or new regulatory changes. Keep an eye on the integration surface, because the systems around GP will keep moving and each new interface built against an end-of-life platform is a cost you pay twice. And set a calendar review, tied to the arithmetic above, at the point where deferring further removes the option of a clean go-live.",
          "When you are ready, the [Dynamics GP to Business Central migration path](/migrations/dynamics-gp-to-business-central/) covers the mechanics, and a [Business Central readiness assessment](/assessments/business-central-readiness/) turns the inventory work above into a plan.",
        ],
      },
      {
        type: "prose",
        heading: "The integrations and reports are the hidden half",
        paragraphs: [
          "GP replacement projects get scoped as an ERP project and then discover they are also an integration and reporting project. A system that has been in place for a decade or more has accumulated interfaces to warehouse systems, payroll providers, bank feeds and reporting tools, plus a reporting layer built in whatever was current when each report was needed.",
          "None of that migrates. Each interface is rebuilt against the new platform, and each report is re-created — which makes the inventory of both the single most valuable artefact produced during planning, and the one most likely to change the estimate in either direction.",
          "It changes it downwards more often than people expect. Interfaces built for a process that has since been retired, and reports that exist because somebody asked for them once, make up a meaningful share of most GP estates. The exercise of finding an owner for each one resolves most of that without any technical work.",
          "Where reporting is concerned, the replacement is usually not like-for-like. Reports that were built inside GP because that was the only option are frequently better served by [Power BI over the new platform](/solutions/data-analytics/), which also gives one reporting layer across systems rather than one per system. And where an interface exists because a legacy application could not talk to anything modern, that application is its own conversation — see [application modernization](/services/application-modernization/).",
          "For the destination itself, [Business Central](/dynamics-365/business-central/) covers the product in more detail.",
        ],
      },
    ],
    faqs: [
      {
        q: "When does Dynamics GP support actually end?",
        a: "Microsoft publishes fixed lifecycle dates for GP, including an end of mainstream support and a subsequent window of security updates. Confirm the current dates on Microsoft's lifecycle policy pages rather than from secondary sources, because they have been revised.",
      },
      {
        q: "Can we keep running GP after support ends?",
        a: "Technically it will keep working, and the security-update window buys real time. What it does not buy is new functionality, regulatory updates, or a growing supply of people who know the product. Treat it as a runway, not a destination.",
      },
      {
        q: "Does all our GP history have to move to the new system?",
        a: "Usually not. The requirement is normally being able to answer questions about old transactions, which an archived queryable copy satisfies. Migrating a decade of history into a live ERP is expensive and rarely necessary.",
      },
      {
        q: "How early should we start planning a GP replacement?",
        a: "Work backwards from a viable finance go-live period rather than from the end-of-support date. Subtract implementation, data preparation and partner selection, and treat the result as your decision date. That is typically much earlier than people expect.",
      },
    ],
  },

  {
    slug: "business-central-implementation-timeline",
    title: "A Realistic Business Central Implementation Timeline",
    metaDescription:
      "A single-entity Business Central implementation runs 12 to 20 weeks. Data quality work, not configuration, is what usually decides whether the go-live date holds.",
    cluster: "Dynamics 365",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-07-07",
    dateModified: "2026-09-02",
    excerpt:
      "Data quality work, not configuration, is what usually decides whether an ERP go-live date holds.",
    imageUrl: "/images/dynamics-365/business-central.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "A straightforward single-entity Business Central implementation typically runs 12 to 20 weeks from kickoff to go-live. Multi-entity scope, manufacturing, or heavy integration requirements push it further, and none of that is the interesting part of the estimate.",
          "The interesting part is that configuration is rarely the constraint. Business Central is configuration-led by design, and a competent team can set up a chart of accounts, posting groups, dimensions and workflows in weeks. What decides whether the date holds is the state of the data being brought into it, and how many decisions the business is able to make per week.",
          "This article covers the phases, what runs long, and how the release cadence and the finance calendar constrain the go-live date more than the project plan does.",
        ],
      },
      {
        type: "table",
        heading: "Phases and where the time actually goes",
        headers: ["Phase", "Typical share", "What decides its length"],
        rows: [
          [
            "Discovery and fit-gap",
            "2-3 weeks",
            "How well current processes are documented, and whether the business can get decision-makers into the same room. Undocumented processes turn discovery into process design.",
          ],
          [
            "Data preparation and cleansing",
            "Runs across most of the project",
            "Master data quality. Duplicate customers and vendors, inconsistent item numbering and sub-ledgers that do not reconcile are all found here, and all have to be fixed by the business rather than by the partner.",
          ],
          [
            "Configuration",
            "3-5 weeks",
            "Rarely the constraint. Chart of accounts, dimensions, posting groups and approval workflows are configuration decisions, and the bottleneck is decision-making speed, not setup effort.",
          ],
          [
            "Integration and extensions",
            "2-6 weeks",
            "How many interfaces exist and how well the systems on the other end are understood. Anything needing an AL extension carries a design, build and test cycle of its own.",
          ],
          [
            "User acceptance testing",
            "2-4 weeks",
            "Whether the business tests with real scenarios and real data, or clicks through a script. Compressed UAT is the most common cause of a bad first month after go-live.",
          ],
          [
            "Cutover and hypercare",
            "2-4 weeks",
            "Fixed by the finance calendar. Opening balances, sub-ledger reconciliation and the first period close all have to land inside a specific window.",
          ],
        ],
      },
      {
        type: "prose",
        heading: "Why data preparation is the long pole",
        paragraphs: [
          "Every ERP implementation surfaces the true condition of an organisation's master data, and the condition is usually worse than believed. The same customer exists three times with slightly different names. Item numbering carries a convention that was abandoned years ago and never reconciled. An inventory sub-ledger does not tie to the general ledger, and nobody has needed it to until now.",
          "None of this can be delegated to the implementation partner, because the decisions are commercial. Which of the three customer records is authoritative is a question only the business can answer, and it has to answer it several hundred times.",
          "That makes data preparation the phase most likely to run long, and the one most worth starting before the project formally begins. Cleaning master data in the existing system is useful work whether or not the ERP project proceeds on schedule, which makes it unusually low-risk to start early.",
        ],
      },
      {
        type: "prose",
        heading: "Two constraints outside the project plan",
        paragraphs: [
          "The first is the finance calendar. Practically, ERP go-lives happen at a period end and preferably a year end, because opening balances and comparative reporting are cleaner. That means the calendar offers a small number of viable dates. A four-week slip is frequently not a four-week slip — it is a three-month slip to the next viable window, which is why schedule discipline matters more here than the raw duration suggests.",
          "The second is the platform's own release cadence. Business Central ships two major feature releases a year, in April and October, alongside monthly service updates. Planning a go-live to land immediately on top of a major release means testing against a version that changes underneath the project. Landing just after one, on a version that has settled, is the lower-risk choice.",
          "Neither constraint is negotiable by the project team, and both are knowable at kickoff. Building the plan around them is straightforward; discovering them in month three is not.",
        ],
      },
      {
        type: "list",
        heading: "What most often extends a Business Central timeline",
        items: [
          "Master data worse than expected — duplicates, inconsistent numbering, and sub-ledgers that do not reconcile to the general ledger.",
          "Undocumented current processes, which turn a fit-gap exercise into a process design exercise with no budget for it.",
          "Integrations to systems whose owners are unavailable or whose behaviour is undocumented.",
          "Decision latency. Configuration questions that wait two weeks for an answer set the pace of the whole project.",
          "Scope added mid-project, most often a report or an integration that was assumed rather than specified. Reporting is frequently better served by [Power BI](/solutions/data-analytics/) on top of the ERP than by in-application development.",
          "Compressed user acceptance testing, which does not shorten the project so much as move its problems past go-live.",
        ],
      },
      {
        type: "prose",
        heading: "An illustrative single-entity project",
        paragraphs: [
          "A typical shape rather than a specific engagement: a 120-person distributor moving off an ageing on-premises system, single entity, one country, three integrations, and a year-end go-live twenty weeks out.",
          "Discovery runs three weeks and finds that two of the three integrations are used by one person each and can be retired. Data preparation starts in week two and runs to week fourteen, driven by around 4,000 customer and item records needing de-duplication. Configuration takes four weeks and finishes early because the finance lead is empowered to decide. UAT runs three weeks with real transactions. Cutover lands at year end, hypercare runs three weeks through the first close.",
          "The project finishes on schedule, and the reason is not the configuration work. It is that data preparation started in week two rather than week ten, and that one person could make decisions without a committee.",
        ],
      },
      {
        type: "prose",
        heading: "How to protect the date",
        paragraphs: [
          "Three things do most of the work. Start master data cleansing before the project formally begins, because it is the longest dependency and the least reversible. Name a single business decision-maker with actual authority, because decision latency compounds through every other phase. And protect user acceptance testing, because it is the phase most easily compressed and the one whose compression is most visible after go-live.",
          "For where the money goes rather than the time, see [Business Central implementation cost](/pricing/business-central-implementation-cost/). If the product choice itself is not settled, [Business Central vs Finance & Operations](/blog/dynamics-365-business-central-vs-finance-operations/) covers that decision, and a [readiness assessment](/assessments/business-central-readiness/) covers both.",
        ],
      },
      {
        type: "prose",
        heading: "Who has to be available, and when",
        paragraphs: [
          "The resourcing question that decides ERP schedules is not how many consultants are assigned. It is how much of the right internal people's time is genuinely available, and at which points.",
          "Three roles carry the project. A finance lead with authority to decide configuration questions — chart of accounts structure, dimensions, approval thresholds — without escalating each one. A data owner who can adjudicate master data conflicts, which is a decision-heavy role during preparation and quiet afterwards. And process owners from each operational area who can say what actually happens today rather than what the procedure document says.",
          "Their load is not evenly distributed. Discovery and configuration are decision-intensive and need the finance lead available in near-real time; data preparation needs the data owner for a sustained period; user acceptance testing needs the process owners heavily for a short window. A plan that assumes a flat allocation across the project will under-resource the peaks and waste the troughs.",
          "This is also the most common reason a well-run project slips: not that the work was harder than expected, but that the people who had to make decisions were doing their day jobs. Naming them and protecting their time at the specific points above is worth more to the schedule than adding consultants — a pattern that holds across [Dynamics 365](/services/dynamics-365/) work generally, and equally on the [NAV to Business Central](/migrations/dynamics-nav-to-business-central/) path.",
          "Where the finance function itself is being redesigned rather than lifted, that is a broader piece of work — see [financial management](/solutions/financial-management/).",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a Business Central implementation take?",
        a: "A single-entity implementation with reasonable data quality typically runs 12 to 20 weeks. Multi-entity scope, manufacturing, or heavy integration requirements extend it, and poor master data extends it more than any of those.",
      },
      {
        q: "What is the most common cause of ERP go-live slippage?",
        a: "Master data. Duplicate records, inconsistent numbering and sub-ledgers that do not reconcile all surface during migration, and the decisions needed to fix them can only be made by the business.",
      },
      {
        q: "Does the Business Central release cadence affect go-live planning?",
        a: "Yes. Business Central ships two major feature releases a year alongside monthly service updates. Going live immediately on top of a major release means testing against a version that is still changing; landing after one has settled is lower risk.",
      },
      {
        q: "Can an ERP go-live happen mid-year?",
        a: "It can, but most organisations cut over at a period or year end because opening balances and comparative reporting are cleaner. That limits the viable dates, which is why a four-week slip often becomes a three-month one.",
      },
    ],
  },

  {
    slug: "copilot-in-business-central",
    title: "Copilot in Business Central: What It Actually Does",
    metaDescription:
      "Copilot in Business Central drafts, matches and summarises. It does not approve, reconcile or take responsibility — and its output quality depends on your data.",
    cluster: "Dynamics 365",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-07-21",
    dateModified: "2026-09-02",
    excerpt:
      "Genuinely useful for drafting, matching and summarising. Not a substitute for a controller, and its output is only as good as the data underneath.",
    imageUrl: "/images/assessments/business-central-readiness.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "Copilot in Business Central is best understood as a set of assistance features embedded in specific tasks, rather than as a general-purpose assistant bolted onto the ERP. That distinction matters, because the demo impression and the day-to-day value are quite different things.",
          "Where it works, it removes drudgery from tasks that were always tedious and never valuable: drafting item descriptions, proposing matches during reconciliation, summarising a record so somebody can get oriented quickly. Where it does not work is anywhere the requirement is accountability rather than throughput.",
          "This article covers what the capabilities actually do, what they depend on, and how to decide whether your data is in a state to benefit.",
        ],
      },
      {
        type: "table",
        heading: "Capability, real-world value, and what it depends on",
        headers: ["Capability", "What it genuinely helps with", "What it depends on"],
        rows: [
          [
            "Drafting product and marketing text",
            "Producing a first-pass description for a new item, from its attributes, in seconds rather than minutes. Useful at volume when onboarding a catalogue.",
            "Item attributes being populated. With sparse attributes the output is generic and someone rewrites it anyway.",
          ],
          [
            "Reconciliation assistance",
            "Proposing matches between bank statement lines and ledger entries, including the fuzzier ones a rule-based match misses.",
            "Consistent payment references and a reasonably clean ledger. It proposes; a person still confirms, and should.",
          ],
          [
            "Document matching and capture",
            "Reducing manual keying when incoming documents have to be matched to orders or receipts.",
            "Document consistency. Highly variable supplier formats reduce the hit rate.",
          ],
          [
            "Chat and record summarisation",
            "Orienting quickly in an unfamiliar record or finding where something is configured, which is genuinely valuable for occasional users.",
            "Nothing much. This is the lowest-dependency, most consistently useful capability.",
          ],
          [
            "Analysis assistance on lists",
            "Letting a non-technical user pivot and filter a list without building a report, for ad-hoc questions.",
            "Not a substitute for [Power BI](/solutions/data-analytics/) where the requirement is a governed, repeatable report with a definition people agree on.",
          ],
        ],
      },
      {
        type: "prose",
        heading: "What it does not do",
        paragraphs: [
          "Copilot does not approve anything. Approval workflows, segregation of duties and posting permissions are unchanged, and a suggestion that arrives inside a task still passes through whatever controls governed that task before. This is the correct design, and it means Copilot reduces effort without reducing the number of people required for control purposes.",
          "It also does not reconcile. Proposing candidate matches is not the same as taking responsibility for the match being right, and treating a suggestion as an answer is how a control gets quietly weakened. The useful framing for a finance audience is that Copilot changes how long a task takes, not who is accountable for its outcome.",
          "And it does not fix data. Every capability above degrades with poor input, which means an organisation with inconsistent master data will find Copilot underwhelming for reasons that have nothing to do with the feature.",
        ],
      },
      {
        type: "steps",
        heading: "Deciding whether to turn it on",
        steps: [
          {
            name: "Check the regional and data-movement position",
            description: "Copilot availability depends on the environment's region, and some capabilities require an administrator to permit data movement across geographies. This is a governance decision with a data residency dimension, not a toggle.",
          },
          {
            name: "Confirm the licensing position for the capabilities you want",
            description: "Entitlements differ between capabilities and change over time. Confirm against current licensing rather than assuming a blanket entitlement — see [Dynamics 365 licensing](/pricing/dynamics-365-licensing/).",
          },
          {
            name: "Assess the data the features depend on",
            description: "Item attributes for description generation, payment reference consistency for reconciliation, document consistency for matching. Poor input here is the main reason pilots disappoint.",
          },
          {
            name: "Pilot on one task with one team",
            description: "Pick the task where the manual effort is highest and the accountability lowest — catalogue description drafting is usually the best first candidate for exactly that reason.",
          },
          {
            name: "Decide the review standard before rollout",
            description: "Who checks a suggestion before it is accepted, and what evidence of that check exists. Deciding this after people are already relying on suggestions is considerably harder.",
          },
          {
            name: "Keep the controls unchanged",
            description: "Copilot should not be a reason to remove an approval step. If a control was justified before, faster drafting does not change the justification.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Where the value actually lands",
        paragraphs: [
          "In practice the durable value sits in high-volume, low-accountability work. Catalogue onboarding, first-draft text, and orientation in unfamiliar records are all tasks where a good-enough draft in seconds beats a perfect one in minutes, and where a mistake is cheap and visible.",
          "The value is thinner in period-end work, precisely because the requirement there is confidence rather than speed. A reconciliation that takes half as long but needs the same review to be trusted has saved less than the time saved suggests.",
          "That is not an argument against the feature — it is an argument for choosing where to deploy it. Organisations that pick the high-volume tasks first get a clear result and build confidence; those that lead with month-end tend to conclude it does not work.",
        ],
      },
      {
        type: "prose",
        heading: "The prerequisite nobody wants to hear",
        paragraphs: [
          "If master data is inconsistent, Copilot will surface that rather than compensate for it. Duplicate items produce contradictory descriptions, inconsistent payment references produce weak match suggestions, and a chart of accounts nobody agrees on produces summaries that are technically correct and practically useless.",
          "This makes a Copilot evaluation an unusually good forcing function for data quality work that was worth doing anyway. It is also why the sequencing question — Copilot before or after a data cleanup — usually answers itself.",
          "If you are still implementing, the same data quality dependency is the largest variable in the schedule; [a realistic Business Central implementation timeline](/blog/business-central-implementation-timeline/) covers why. For the platform decision underneath all of this, see [Business Central vs Finance & Operations](/blog/dynamics-365-business-central-vs-finance-operations/) and [our Dynamics 365 practice](/services/dynamics-365/).",
        ],
      },
      {
        type: "prose",
        heading: "How it differs from Copilot elsewhere in Microsoft 365",
        paragraphs: [
          "People arrive at Copilot in Business Central with expectations set by Copilot in Microsoft 365, and the two work differently enough that the mismatch causes real disappointment.",
          "Copilot in Microsoft 365 is broadly a retrieval and drafting assistant over documents, mail and chat: it finds things and writes about them, and its usefulness depends mostly on what a user has access to. Copilot in Business Central is a set of task-specific features embedded at particular points in particular processes. It is not a general assistant that happens to live in the ERP, and asking it open-ended questions about the business is not what it is for.",
          "The practical consequence is that value in Business Central comes from identifying which of its specific capabilities map onto work your people actually do in volume, rather than from a general rollout. A finance team that does not onboard many new items will get little from description generation, however good that feature is.",
          "There is also a governance difference worth noting. Because the Microsoft 365 assistant surfaces content a user already has permission to see, it tends to expose pre-existing oversharing rather than create new exposure — which is a [data governance](/services/data-governance/) finding rather than an AI one, and is covered in [the governance gaps that surface in M&A diligence](/blog/data-governance-gaps-ma-due-diligence/). The Business Central features operate inside ERP permissions that are usually far tighter to begin with, so they raise the question much less sharply.",
          "The practical implication is that these two rollouts should be planned separately and judged separately. Treating them as one AI programme produces a single business case in which the weaker half is carried by the stronger, and a single set of expectations that neither half quite meets.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Copilot in Business Central replace a controller or accountant?",
        a: "No. It drafts, proposes and summarises, but it does not approve, reconcile or take responsibility. Approval workflows, segregation of duties and posting permissions are unchanged, so it changes how long a task takes rather than who is accountable for it.",
      },
      {
        q: "What do we need in place before Copilot is useful?",
        a: "Reasonable master data. Item attributes drive description quality, payment reference consistency drives reconciliation suggestions, and document consistency drives matching accuracy. Poor input is the usual reason a pilot disappoints.",
      },
      {
        q: "Are there data residency implications?",
        a: "Yes. Copilot availability depends on the environment's region, and some capabilities require an administrator to allow data movement across geographies. Treat that as a governance decision with a data residency dimension rather than a setting.",
      },
      {
        q: "Where should we pilot Copilot first?",
        a: "On a high-volume, low-accountability task such as drafting catalogue descriptions. Leading with period-end work tends to disappoint, because the requirement there is confidence rather than speed.",
      },
    ],
  },

  {
    slug: "salesforce-to-dynamics-switching-costs",
    title: "Salesforce to Dynamics 365: Real Switching Costs",
    metaDescription:
      "Data migration is the easy part of a Salesforce to Dynamics 365 move. Automation rebuild, reporting rebuild and integration rework are what it actually costs.",
    cluster: "Dynamics 365",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-09-01",
    dateModified: "2026-09-02",
    excerpt:
      "If the business case rests on licence savings alone, do the switching-cost arithmetic first. Four categories decide whether the move pays back.",
    imageUrl: "/images/migrations/salesforce-to-dynamics-365.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "Switching CRM platforms is a real project, and the honest version of the business case accounts for costs that never appear on a licence quote. If you are weighing this, start with the [Dynamics 365 vs Salesforce comparison](/compare/dynamics-365-vs-salesforce/) for the functional picture, then work through the four categories below.",
          "The thing most business cases get wrong is which part is hard. Contacts, accounts and opportunities move reliably — that is a well-understood data migration with mature tooling. What does not move is everything built on top of the data: the automation, the reports, and the integrations. Those are rebuilds, and they are where the budget goes.",
          "The good news is that all four are estimable before you commit, and three of them usually shrink once somebody counts properly.",
        ],
      },
      {
        type: "table",
        heading: "The four switching costs, and how to size each one",
        headers: ["Cost", "Why it does not transfer", "How to size it before committing"],
        rows: [
          [
            "Automation rebuild",
            "Apex classes, triggers and Flow do not convert to Power Automate or Dataverse logic. They are re-implemented against a different platform with different primitives.",
            "Count the automations that actually fire. Export the inventory, then check execution history — a meaningful share of most estates has not run in a year.",
          ],
          [
            "Reporting and dashboard rebuild",
            "Salesforce reports and dashboards do not import. Reports are re-created natively, typically in [Power BI](/solutions/data-analytics/) rather than in-application.",
            "Count reports with a real audience, not reports that exist. Usage data usually shows a small fraction carrying nearly all the views.",
          ],
          [
            "Integration rework",
            "Every system integrated with Salesforce authenticates against Salesforce and speaks its object model. Each connection is rebuilt against [Dataverse](/resources/glossary/dataverse/).",
            "List the integrations, then find each one's owner. The list is almost always longer than the CRM team believes, and the owners are the ones who know whether it is still needed.",
          ],
          [
            "Retraining and the adoption dip",
            "A sales team that is fluent in one interface is temporarily slower in another, regardless of which is objectively better.",
            "Assume a productivity dip through the first full sales cycle. Native Outlook and Teams integration shortens the curve for Microsoft-centric organisations but does not remove it.",
          ],
        ],
      },
      {
        type: "prose",
        heading: "Automation is the long pole",
        paragraphs: [
          "Salesforce automation built in Apex and Flow does not convert. It is rebuilt in Power Automate and Dataverse logic, and the size of that project is set by how much automation has accumulated rather than by how much of it anyone still relies on.",
          "This is consistently the phase that runs longest and the one most often left out of the initial estimate, because automation is invisible until you go looking. It is also the phase where the inventory usually produces good news: organisations that count find that a substantial share of their automations were built for a process that has since changed and no longer fire at all.",
          "The practical sequence is to inventory before estimating, and to make the keep-or-drop decision explicitly rather than defaulting to rebuilding everything. Rebuilding automation nobody uses is the most expensive way to fail this project.",
        ],
      },
      {
        type: "prose",
        heading: "Reporting is an opportunity disguised as a cost",
        paragraphs: [
          "Reports are re-created natively rather than imported, and the same counting exercise applies. Most CRM estates carry hundreds of reports of which a small number are viewed regularly, and the migration forces the question of which ones deserve to exist.",
          "It is genuine effort, and somebody has to decide which of the existing reports anyone actually reads. But an organisation that comes out of this with a smaller set of governed reports with agreed definitions is usually better served than it was, which makes this the one switching cost with a real upside attached.",
          "The related decision is where reporting should live. Building reports inside the CRM reproduces the pattern you are leaving; building them in Power BI over Dataverse gives one reporting layer across CRM, ERP and anything else, which is a large part of the integration argument for the Microsoft stack in the first place.",
        ],
      },
      {
        type: "prose",
        heading: "Integration rework, and why the list is always longer",
        paragraphs: [
          "Every system currently integrated with Salesforce needs its connection rebuilt against Dataverse. Marketing automation, quoting, ERP, support tooling, data warehouse feeds, and the point-to-point script somebody wrote four years ago that still runs on a schedule.",
          "Counting them early matters because the list is reliably longer than the CRM team's mental model of it. Integrations get built by people who have since moved on, documented in a ticket that was closed, and remembered only when they break.",
          "The useful move is to find an owner for each integration rather than just an inventory entry. The owner is the person who can say whether it is still needed, and \"no\" is a much cheaper answer than a rebuild.",
        ],
      },
      {
        type: "list",
        heading: "What the inventory usually reveals",
        items: [
          "A meaningful share of automations have not executed in the last year and can be retired rather than rebuilt.",
          "A small fraction of reports carry the large majority of actual views.",
          "At least one integration nobody currently owns, which is a risk independent of the CRM decision.",
          "Custom objects that duplicate standard functionality and can be collapsed during the move.",
          "Sandbox and test artefacts mixed into the production inventory, inflating every count until somebody separates them.",
        ],
      },
      {
        type: "prose",
        heading: "When the switch is still clearly worth it",
        paragraphs: [
          "The case is strongest when you are already standardised on Microsoft 365 and paying to maintain two identity and collaboration stacks; when sales and service teams context-switch between systems all day; or when M&A activity is consolidating a combined entity onto one platform, which is a different and usually more compelling argument than licence cost.",
          "It is weakest when licence comparison is the only driver. The switching costs above are real, they are front-loaded, and a payback calculation that ignores them will be wrong in the first year.",
          "The practical first step is the inventory, not the decision. Counting automations, reports and integrations — with owners and usage data attached — turns an argument into arithmetic. That is also the input to the [Salesforce to Dynamics 365 migration path](/migrations/salesforce-to-dynamics-365/) and to [what a CRM deployment involves](/solutions/crm-deployment/).",
        ],
      },
      {
        type: "prose",
        heading: "What does move cleanly, and why that matters",
        paragraphs: [
          "It is worth being precise about the part of this project that works, because a business case built only on the costs will overstate the risk.",
          "Core CRM records — accounts, contacts, leads, opportunities and their history — migrate reliably with mature tooling. Custom objects map onto [Dataverse](/resources/glossary/dataverse/) tables with a well-understood translation. Attachments and notes move. Relationship structures survive. This is a solved problem, and it is usually the part that a nervous stakeholder assumes will be hardest.",
          "The reason that matters for planning is sequencing. Because the data migration is predictable, it can be rehearsed early and repeatedly, which takes the largest perceived risk off the table before the genuinely uncertain work begins. Teams that leave data migration until late spend the whole project carrying an anxiety they could have discharged in week three.",
          "The one caveat is data quality, which is the same caveat as everywhere else. A migration is a good moment to decide that duplicate accounts and dormant leads do not need to make the trip, and a bad moment to discover that nobody is willing to make that decision. For the target platform itself, see [Dynamics 365 Sales](/dynamics-365/sales/) and [our Dynamics 365 practice](/services/dynamics-365/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Salesforce automation convert to Power Automate?",
        a: "No. Apex, triggers and Flow are re-implemented against different platform primitives rather than converted. This is normally the longest phase of the project, and the one most often left out of initial estimates.",
      },
      {
        q: "Do Salesforce reports migrate to Dynamics 365?",
        a: "They are rebuilt, typically in Power BI over Dataverse rather than inside the CRM. Because most estates have far more reports than readers, this is also an opportunity to reduce the set to the ones people actually use.",
      },
      {
        q: "What is the most underestimated cost of switching CRM?",
        a: "Integration rework. Every connected system authenticates against Salesforce and speaks its object model, and the list of integrations is reliably longer than the CRM team believes because they were built by people who have since moved on.",
      },
      {
        q: "How long does the adoption dip last?",
        a: "Plan for a reduction in productivity through the first full sales cycle. Native Outlook and Teams integration shortens the curve for Microsoft-centric organisations, but familiarity with the old interface is real and temporary regardless of which product is better.",
      },
    ],
  },

  {
    slug: "power-platform-governance-checklist",
    title: "Power Platform Governance Without the Bottleneck",
    metaDescription:
      "Power Platform governance is guardrails, not gatekeeping. Environment strategy, DLP policy and lifecycle review, in the order that actually reduces risk.",
    cluster: "Power Platform",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-04-18",
    dateModified: "2026-09-02",
    excerpt:
      "Governance is not about slowing citizen developers down. It is about guardrails, so IT does not find out about an app after it is touching production data.",
    imageUrl: "/images/services/power-platform.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "Power Platform governance gets framed as a brake, and that framing produces bad governance. The organisations that lock the platform down hardest tend to get the least value from it and no less shadow IT — the work simply moves somewhere with even less oversight.",
          "The goal is narrower and more achievable: make sure IT knows what exists, that data cannot cross boundaries it should not cross, and that an application people depend on does not stop working because the person who built it left. Everything else is optional.",
          "This article covers the four controls that do most of the work, in the order that reduces risk fastest.",
        ],
      },
      {
        type: "prose",
        heading: "Start with the default environment, because that is where the risk is",
        paragraphs: [
          "Every tenant has a default [environment](/resources/glossary/power-platform-environment/), every licensed user can create in it, and it cannot be deleted. That combination makes it the single highest-risk object on the platform, and it is where an ungoverned estate accumulates.",
          "The default environment is where somebody builds the flow that quietly runs a business process, using their own credentials, with no documentation and no second owner. It works fine until they change roles.",
          "The first governance move is therefore not a policy — it is finding out what is already in there. An inventory of apps and flows in the default environment, with owners and last-run dates, is usually the single most informative artefact in the whole exercise, and it reliably surprises people.",
        ],
      },
      {
        type: "table",
        heading: "The four controls, in order of risk reduction",
        headers: ["Control", "What it prevents", "What it costs makers"],
        rows: [
          [
            "Environment strategy",
            "Production data and experimental apps sharing a boundary. Separate environments give development, test and production genuinely different blast radii.",
            "Very little, if makers get a sandbox by default. It costs a lot if the only environment they can reach requires a ticket.",
          ],
          [
            "Data loss prevention policy",
            "Business data leaving through a connector nobody evaluated. [DLP](/resources/glossary/data-loss-prevention-dlp/) groups connectors as business, non-business or blocked, and an app combining groups is stopped.",
            "Real friction if the classification is wrong. This is the control most worth getting right before it is turned on.",
          ],
          [
            "Ownership and lifecycle review",
            "Business-critical apps with a single owner who has left. Co-ownership and a periodic review catch this before it becomes an outage.",
            "Almost nothing. This is the highest return per unit of effort on the list.",
          ],
          [
            "Managed Environments controls",
            "Uncontrolled sharing, unreviewed solutions, and no visibility into what changed. Adds sharing limits, usage insights and solution checks.",
            "Licensing. The controls require premium licensing for the users of those environments, which is a real budget decision rather than a switch.",
          ],
        ],
      },
      {
        type: "prose",
        heading: "Getting DLP classification right before you enforce it",
        paragraphs: [
          "A DLP policy sorts connectors into business, non-business and blocked groups, and prevents a single app or flow from combining connectors across the first two. It is the most effective control on the list and the one that causes the most damage when it is rolled out badly.",
          "The failure mode is predictable: a policy is written from a list of connector names by someone who does not know which ones are load-bearing, published tenant-wide, and a set of working flows stop that afternoon. The recovery is technically easy and reputationally expensive — after that, makers route around the platform rather than through it.",
          "The sequence that avoids this is to inventory connector usage first, classify against what is actually in use, communicate the change with a date, and enforce in a pilot environment before the tenant. It is slower by a few weeks and considerably cheaper than the alternative. Note also that a [premium connector](/resources/glossary/premium-connector/) raises a licensing question as well as a governance one — those are separate decisions that get confused with each other.",
        ],
      },
      {
        type: "steps",
        heading: "A sequence that works",
        steps: [
          {
            name: "Inventory what exists, starting with the default environment",
            description: "Apps, flows, owners, last-run dates and connectors in use. Without this, every subsequent decision is a guess, and the default environment is where the unpleasant findings live.",
          },
          {
            name: "Identify the business-critical and single-owner assets",
            description: "The intersection of those two lists is your actual risk register. Everything else can wait; these need a second owner this month.",
          },
          {
            name: "Design the environment strategy",
            description: "At minimum: a locked-down production environment, a shared development environment, and personal productivity staying in the default. Makers need somewhere legitimate to build, or they will build in production.",
          },
          {
            name: "Classify connectors against actual usage",
            description: "Use the inventory rather than the connector catalogue. Classify what people use, communicate the classification, and give a date before enforcement.",
          },
          {
            name: "Pilot the DLP policy, then enforce",
            description: "Enforce in one environment first. A policy that breaks working flows on day one costs more credibility than it saves risk.",
          },
          {
            name: "Set a lifecycle review cadence",
            description: "Quarterly is enough: confirm owners, retire what has not run, and check that anything business-critical has more than one person who can maintain it.",
          },
        ],
      },
      {
        type: "list",
        heading: "The findings that recur in almost every review",
        items: [
          "A flow running a genuinely important process, owned by one person, with no documentation and no second owner.",
          "Apps in the default environment connected to production data, built before anyone thought about environments.",
          "Connections authenticated as an individual rather than a service principal, so the asset dies with the account.",
          "Premium connectors in use without the licensing to match, which is a compliance exposure as well as a cost one — see [Power Platform licensing explained](/blog/power-platform-licensing-explained/).",
          "A large tail of abandoned apps and flows that have not run in a year, inflating every count and obscuring the ones that matter.",
        ],
      },
      {
        type: "prose",
        heading: "Governance that makers cooperate with",
        paragraphs: [
          "The pattern that works is to pair every restriction with a legitimate alternative. If personal productivity flows are fine in the default environment, say so. If production data requires a managed environment, make getting one straightforward rather than a quarterly committee. If a connector is blocked, name the approved way to solve that problem.",
          "Governance that only says no produces exactly the shadow IT it was meant to prevent, and it does so in tools with no audit trail at all. Governance that says \"not there, here\" gets adopted.",
          "A [Power Platform health check](/assessments/power-platform-health-check/) produces the inventory that step one requires, which is usually the fastest way to turn this from a policy discussion into a prioritised list. For the wider practice, see [Power Platform solutions](/services/power-platform/), and for when a citizen-developed app should become a real application, [Power Apps vs custom development](/compare/power-apps-vs-custom-development/).",
        ],
      },
      {
        type: "prose",
        heading: "Somebody has to own this",
        paragraphs: [
          "The control that fails most often is not technical. It is that no one is accountable for the platform, so inventories are produced once for a project and never again, policies are written and never reviewed, and the next audit starts from the same place as the last one.",
          "Power Platform sits awkwardly between functions, which is why this happens. It is not quite an application, so application owners do not claim it; it is not quite infrastructure, so infrastructure teams do not either; and the people getting the most value from it are in the business rather than in IT. The result is a capability with real operational dependency and no named owner.",
          "The fix is unremarkable and effective: name someone accountable, give them a recurring review rather than a project, and make the inventory a standing artefact rather than a deliverable. In larger organisations this becomes a small centre of excellence; in mid-market organisations it is usually one person with a few hours a month, which is enough if the hours are actually protected.",
          "The test of whether ownership is real is simple. Ask who would notice if a business-critical flow stopped, and how long it would take. If the answer is that the affected department would notice, and that finding out why would take days, the platform does not yet have an owner — and no amount of [data governance](/services/data-governance/) policy compensates for that.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the default Power Platform environment be deleted or locked down?",
        a: "It cannot be deleted, and every licensed user can create in it. That is precisely why it needs an inventory first: it is where ungoverned apps and flows accumulate, and where a business-critical flow with a single owner is most likely to be hiding.",
      },
      {
        q: "What is the fastest way to reduce Power Platform risk?",
        a: "Find business-critical assets with a single owner and give them a second one. It requires no licensing change and no policy, and it removes the most common cause of an unplanned outage.",
      },
      {
        q: "Will a DLP policy break existing flows?",
        a: "It will if it is classified from a connector catalogue rather than from actual usage. Inventory what is in use, classify against that, communicate a date, and pilot in one environment before enforcing tenant-wide.",
      },
      {
        q: "Does governance require Managed Environments?",
        a: "No. Environment separation, DLP and ownership review deliver most of the risk reduction without it. Managed Environments adds sharing controls and usage insight, and carries a premium licensing requirement for the users of those environments.",
      },
    ],
  },

  {
    slug: "power-platform-licensing-explained",
    title: "Power Platform Licensing, Explained",
    metaDescription:
      "Power Platform licensing turns on one question: does the app use premium connectors or Dataverse? Everything else follows from that, including who has to be licensed.",
    cluster: "Power Platform",
    authorSlug: "raafat-elfouly",
    datePublished: "2026-08-18",
    dateModified: "2026-09-02",
    excerpt:
      "Most surprise licence costs come from one thing: a premium connector nobody realised was premium. Here is the decision tree that avoids it.",
    imageUrl: "/images/assessments/power-platform-health-check.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "Power Platform licensing has a reputation for complexity that is only partly deserved. Most of the confusion comes from reading it as a product matrix, when in practice almost every question resolves through a single decision: does this app or flow use a premium connector or [Dataverse](/resources/glossary/dataverse/)?",
          "If the answer is no, it is generally covered by the Power Apps and Power Automate capabilities included with Microsoft 365. If the answer is yes, somebody needs a premium licence — and the somebody is usually more people than expected.",
          "This article walks that decision tree, then covers the three places organisations most often get an unwelcome surprise. Licence prices change; this article deliberately does not quote them, and [Dynamics 365 and Power Platform licensing](/pricing/dynamics-365-licensing/) is the place to check current figures.",
        ],
      },
      {
        type: "table",
        heading: "The decision that determines everything else",
        headers: ["If the app or flow…", "Licensing position", "Typical example"],
        rows: [
          [
            "Uses only standard connectors, and stores data in SharePoint or Excel",
            "Generally covered by the Power Apps and Power Automate use rights included with Microsoft 365. No additional licence.",
            "A leave request form writing to a SharePoint list and notifying a manager in Teams.",
          ],
          [
            "Uses any [premium connector](/resources/glossary/premium-connector/)",
            "Every user who runs the app or is the flow owner needs a premium licence — not just the person who built it.",
            "A flow reading from SQL Server, or an app talking to a third-party service over a custom connector.",
          ],
          [
            "Stores data in Dataverse",
            "Premium. Dataverse is a premium capability regardless of which connectors are involved.",
            "Any app that outgrew a SharePoint list and needs relational data with real security.",
          ],
          [
            "Runs unattended or acts as a service rather than as a person",
            "Needs a process-level licence rather than a per-user one, licensed to the process instead of to a human.",
            "A nightly integration that moves data between two systems with no user present.",
          ],
          [
            "Runs inside a Managed Environment",
            "All users of that environment need premium licensing, independent of what the individual app uses.",
            "A production environment where the governance controls have been switched on.",
          ],
        ],
      },
      {
        type: "prose",
        heading: "Surprise one: the premium connector nobody flagged",
        paragraphs: [
          "This is the most common and the most expensive. A maker builds something useful in the default environment using a connector that happens to be premium, shares it with a department, and the department comes to depend on it. Nobody checked the classification because nothing stopped them.",
          "The exposure is not the builder's licence — it is everyone who uses the app. A tool with forty users built on a premium connector implies forty premium licences, which is a materially different number from the one anybody budgeted.",
          "The mitigation is inventory rather than policy. Knowing which connectors are actually in use across the estate turns this from a discovery during a licensing true-up into a decision you make deliberately, and it is the same inventory that [Power Platform governance](/blog/power-platform-governance-checklist/) starts with.",
        ],
      },
      {
        type: "prose",
        heading: "Surprise two: who counts as a user",
        paragraphs: [
          "The intuition is that the person who built the app needs the licence. The rule is closer to the opposite: licensing follows use. Everyone who runs a premium app needs to be licensed for it, and for flows the entitlement attaches to the flow's owner, which is why an owner change can quietly alter the licensing position of something that has been running for months.",
          "This has a governance consequence that is easy to miss. Reassigning a flow from a departing employee — exactly the remediation good governance recommends — moves the licensing requirement to whoever inherits it. Doing that in bulk without checking entitlements can produce a compliance gap created by the cleanup itself.",
          "The practical rule is to treat ownership changes and licensing as one exercise rather than two.",
        ],
      },
      {
        type: "prose",
        heading: "Surprise three: capacity is pooled and finite",
        paragraphs: [
          "Dataverse capacity — database, file and log — accrues to the tenant from licences and is consumed by whatever is running. It is shared across environments rather than allocated per app, which means one badly-behaved application can consume capacity that everything else depends on.",
          "The usual culprits are unbounded logging, an integration writing more history than anyone intended, and abandoned environments nobody deleted because deleting things feels risky. None of these announce themselves; capacity is quietly consumed until something fails.",
          "Reviewing capacity consumption alongside the app and flow inventory catches it early. It also tends to make the case for retiring abandoned environments, which is otherwise a job with no obvious owner.",
        ],
      },
      {
        type: "list",
        heading: "A short checklist before you commit budget",
        items: [
          "Inventory connectors in use across every environment, not just the ones IT built.",
          "Identify apps with a user base larger than their licensing implies — that gap is the exposure.",
          "Check flow ownership, and confirm that ownership changes have not silently moved a licensing requirement.",
          "Review Dataverse capacity consumption and identify anything writing more than it should.",
          "Confirm whether the environments you are governing require premium licensing for all their users, because that is a budget decision rather than a control decision.",
          "Confirm current pricing directly rather than from any article, including this one — see [licensing](/pricing/dynamics-365-licensing/).",
        ],
      },
      {
        type: "prose",
        heading: "How to think about it going forward",
        paragraphs: [
          "The useful mental model is that standard connectors are free and premium capability is per-person. That single sentence resolves the large majority of licensing questions correctly, and it makes the design conversation more productive: if an app can meet its requirement on standard connectors and SharePoint, that is a licensing decision as much as an architectural one.",
          "It also clarifies when to stop. An application whose requirements genuinely need Dataverse, relational data and real security is a premium application, and trying to keep it on standard connectors to avoid licensing usually produces something fragile that costs more to maintain than the licences would have cost. [Power Apps vs custom development](/compare/power-apps-vs-custom-development/) covers where that line sits.",
          "A [Power Platform health check](/assessments/power-platform-health-check/) produces the connector and capacity inventory this article keeps referring to, which is the input every one of these decisions needs.",
        ],
      },
      {
        type: "prose",
        heading: "Where pay-as-you-go fits",
        paragraphs: [
          "There is a third option between standard entitlements and per-user premium licences that is frequently overlooked: metering consumption through an Azure subscription rather than pre-purchasing seats.",
          "It suits a specific shape of application well — one with a large, intermittent audience. An app used twice a year by several hundred people is badly served by per-user licensing, because the licences are idle almost all the time. Metered consumption matches the cost to the actual usage, which in that shape is dramatically lower.",
          "It suits the opposite shape badly. An application used daily by a stable team is cheaper on per-user licences, and metering it introduces variable cost with no offsetting benefit. The failure mode is choosing metered consumption for a heavily-used application and receiving a bill nobody forecast.",
          "The useful discipline is to categorise applications by usage pattern before choosing a licensing model, and to revisit the categorisation as usage changes — an app that was occasional at launch and became daily is on the wrong model and nothing will tell you. That review belongs with the same inventory that [Power Platform governance](/blog/power-platform-governance-checklist/) depends on, and it is part of what [our Power Platform practice](/services/power-platform/) covers.",
          "One operational caveat: metered consumption bills to an Azure subscription rather than to the licensing agreement, which means it lands with a different budget owner and often a different approval path. That is an administrative detail rather than a technical one, and it is the reason the option gets discounted more often than its economics deserve.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does everyone using a Power App need a premium licence?",
        a: "If the app uses a premium connector or Dataverse, yes — licensing follows use, not authorship. An app with forty users built on a premium connector implies forty premium licences, which is usually the source of an unwelcome surprise.",
      },
      {
        q: "What makes a connector premium?",
        a: "Microsoft classifies connectors as standard or premium, and premium generally covers connections to external and enterprise data sources such as SQL Server and third-party business systems. Dataverse is premium regardless of the connectors involved.",
      },
      {
        q: "Do flows need a licence if no person runs them?",
        a: "Yes. A flow running unattended or acting as a service is licensed at the process level rather than per user. The entitlement for a user-owned flow attaches to its owner, which is why reassigning ownership can change the licensing position.",
      },
      {
        q: "Why did our Dataverse capacity run out?",
        a: "Capacity is pooled at tenant level rather than allocated per app, so one application logging heavily or an abandoned environment nobody deleted can consume capacity that everything else depends on. It is worth reviewing alongside the app inventory.",
      },
    ],
  },

  {
    slug: "data-governance-gaps-ma-due-diligence",
    title: "Data Governance Gaps That Surface in M&A Diligence",
    metaDescription:
      "Holds, retention and labels are tenant-scoped and do not follow content across a migration. In an acquisition that turns a compliance detail into a schedule risk.",
    cluster: "Data Governance",
    authorSlug: "mohammed-khaliefa",
    datePublished: "2026-05-12",
    dateModified: "2026-09-02",
    excerpt:
      "Governance debt is invisible until a deal forces someone to look. By then it constrains the migration schedule rather than just the risk register.",
    imageUrl: "/images/services/data-governance.jpg",
    body: [
      {
        type: "prose",
        paragraphs: [
          "Data governance is the workstream most likely to be discovered late in an acquisition, and the one whose findings most directly constrain the schedule. Not because it is complicated, but because nothing forces anyone to look at it until a tenant has to be migrated or decommissioned.",
          "The core issue is structural: holds, [retention policies](/resources/glossary/retention-policy/), [sensitivity labels](/resources/glossary/sensitivity-label/) and DLP rules are all scoped to the tenant that created them. None of them follow content across a tenant boundary. That means a migration silently changes the compliance posture of everything it moves, and an obligation that was being met on Friday may not be met on Monday.",
          "This article covers the four gaps that recur, and what diligence should ask for to surface them before they become schedule risk.",
        ],
      },
      {
        type: "table",
        heading: "Four gaps, and what each one costs if found late",
        headers: ["Gap", "Why it matters in a deal", "Cost of finding it late"],
        rows: [
          [
            "Active holds on source content",
            "Content under an [eDiscovery hold](/resources/glossary/ediscovery-hold/) cannot be deleted, which blocks full decommission of the source tenant.",
            "Direct schedule risk. On a [TSA](/resources/glossary/tsa-exit/) with a fixed exit date, an unresolved hold can mean paying to keep a tenant alive past the date you planned to leave it.",
          ],
          [
            "Retention that does not follow the content",
            "Retention policies are tenant-scoped. Migrated content arrives with no retention applied unless the target has an equivalent policy.",
            "A silent compliance gap. Nothing alerts anyone; the obligation is simply no longer being met, and the discovery usually happens during an audit.",
          ],
          [
            "Labels the target tenant does not recognise",
            "Sensitivity labels are tenant-specific. Migrated content references a label identifier that means nothing in the destination.",
            "Protected content that cannot be opened, or protection that silently stops applying. Both are bad; the second is worse because it is invisible.",
          ],
          [
            "Oversharing in the source estate",
            "Broad sharing links and sites open to everyone are inherited along with the content, and become the acquirer's exposure at close.",
            "Cleanup effort, plus real risk if the acquired estate is more open than the acquirer's own standard. Rarely a schedule blocker; frequently a nasty surprise.",
          ],
        ],
      },
      {
        type: "prose",
        heading: "Holds are the one that moves the date",
        paragraphs: [
          "Of the four, holds are the gap most likely to affect the plan rather than just the risk register, because the constraint is absolute: content under hold cannot be deleted, so a tenant carrying one cannot be fully decommissioned.",
          "The awkward part is that holds are frequently placed for a matter that has since concluded, by someone who has since left, and never removed. There is no natural process that surfaces them — they simply persist. In an acquisition where the plan assumes the source tenant is retired at TSA exit, an unreviewed hold can mean carrying licence and administrative cost past the date the deal budgeted for.",
          "The remedy is to ask early. A hold inventory with the matter each one relates to, and its status, is a small request that produces a disproportionately useful answer.",
        ],
      },
      {
        type: "prose",
        heading: "The silent gap: retention that stops applying",
        paragraphs: [
          "Holds fail loudly, in the sense that something cannot be deleted and somebody notices. Retention fails silently.",
          "When content migrates into a tenant with no equivalent policy, the retention obligation simply stops being met. No error is raised, no report flags it, and the content looks entirely normal. The gap is typically discovered during an audit or an eDiscovery request, at which point the question is not just what the current posture is but how long the gap has existed.",
          "This is the strongest argument for treating governance as a pre-migration workstream rather than a post-migration cleanup. Establishing the equivalent policy in the target before content arrives is straightforward; reconstructing what should have applied to content that arrived eight months ago is not.",
        ],
      },
      {
        type: "steps",
        heading: "What diligence should actually ask for",
        steps: [
          {
            name: "A hold inventory with matter status",
            description: "Every active hold, what it relates to, and whether that matter is still open. Expect at least one hold from a concluded matter that nobody removed.",
          },
          {
            name: "The retention policy set, with scope",
            description: "Which policies exist, what they cover, and what obligation each is meeting. This is what has to be re-established in the target, and it cannot be inferred after the fact.",
          },
          {
            name: "The sensitivity label taxonomy and its usage",
            description: "Which labels exist, which are actually applied, and whether any apply encryption. Encrypted content that migrates to a tenant without the equivalent label needs a tested access path before, not after.",
          },
          {
            name: "A sharing and external access report",
            description: "Broad sharing links, sites shared with everyone, and guest accounts. This is inherited exposure and it becomes the acquirer's at close.",
          },
          {
            name: "The DLP policy set",
            description: "[DLP](/resources/glossary/data-loss-prevention-dlp/) rules are tenant-scoped like everything else here. Migrated users are covered by the target's policies, which may be narrower than the ones they were used to.",
          },
          {
            name: "Named owners for each of the above",
            description: "The absence of an owner is itself a finding, and usually the one that predicts how much remediation the rest of the list will need.",
          },
        ],
      },
      {
        type: "list",
        heading: "What a governance review typically turns up",
        items: [
          "Holds from matters that concluded years ago, still blocking deletion.",
          "Retention policies covering mailboxes but not the collaboration surfaces where the equivalent content now actually lives.",
          "A label taxonomy that was designed thoughtfully and applied to a small fraction of content.",
          "Sites and files shared far more broadly than anyone intended, which surfaces sharply the moment an AI assistant makes that content easier to find.",
          "No single owner for any of it, which is usually the root cause of the other four.",
        ],
      },
      {
        type: "prose",
        heading: "Doing it in the right order",
        paragraphs: [
          "The sequence that works is to inventory during diligence, decide the target-tenant posture before migration, and re-establish policies before content arrives rather than after. That ordering costs very little when it is planned and a great deal when it is not.",
          "It also produces something valuable independent of the deal. Most of what this review finds — stale holds, unowned policies, oversharing — is worth fixing regardless of whether the transaction completes, which makes it one of the easier diligence workstreams to justify.",
          "For the migration mechanics this interacts with, see [the tenant-to-tenant migration timeline](/blog/microsoft-365-tenant-to-tenant-migration-timeline/) and [Teams migration in a divestiture](/blog/teams-migration-divestiture/). For the practice itself, [data governance](/services/data-governance/) and [Microsoft Purview](/resources/glossary/microsoft-purview/).",
        ],
      },
      {
        type: "prose",
        heading: "Why oversharing surfaces now and did not before",
        paragraphs: [
          "Broad sharing has been accumulating in most estates for a decade without causing visible harm, because finding content still required knowing it existed. Permissions were technically wide and practically narrow.",
          "AI assistants remove that gap. An assistant that searches everything a user is permitted to see will surface content that was permitted but effectively invisible, which means an organisation discovers its true permission posture at the moment it turns one on rather than at the moment it was created. Nothing has changed about the permissions; what changed is that they now have consequences.",
          "In an acquisition this becomes the acquirer's problem twice over. The inherited estate carries its own accumulated oversharing, and the acquirer's standards are the ones that will be applied to it afterwards. An estate that was acceptable under the seller's practices can be a real exposure under the buyer's.",
          "The practical response is to treat a sharing report as a standard diligence artefact rather than a specialist request, and to sequence any AI rollout after the remediation rather than before it. The same dynamic applies inside ERP-adjacent tooling, though far less sharply — see [Copilot in Business Central](/blog/copilot-in-business-central/) for why permissions there are usually tighter to begin with.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do retention policies follow content to a new tenant?",
        a: "No. Retention policies are scoped to the tenant that created them, so migrated content arrives with no retention applied unless an equivalent policy already exists in the target. Nothing raises an alert, which is why this gap is usually found during an audit.",
      },
      {
        q: "Can a tenant be decommissioned while content is under hold?",
        a: "Not fully. Content under an eDiscovery hold cannot be deleted, so an active hold blocks decommission. On a transition services agreement with a fixed exit date, that becomes a schedule and cost issue rather than just a compliance one.",
      },
      {
        q: "What happens to sensitivity labels after a tenant migration?",
        a: "Labels are tenant-specific, so migrated content references an identifier the destination does not recognise. The taxonomy has to exist in the target before migration, and any content protected with encryption needs a tested access path.",
      },
      {
        q: "When should governance review happen in an acquisition?",
        a: "During diligence, before the migration plan is finalised. The findings constrain what can be deleted and when, which means they constrain the decommission schedule — and discovering that after the plan is agreed is how a fixed TSA exit date gets missed.",
      },
    ],
  },
];

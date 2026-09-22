import type { BlogPost } from "../blog";

export const post: BlogPost = {
  slug: "credit-union-merger-microsoft-365",
  title: "Credit Union Mergers: Merging Microsoft 365",
  metaDescription:
    "A credit union merger has a legal effective date. What Microsoft 365 must do on that day, what can wait, and why holds and member NPI decide the migration order.",
  cluster: "Data Governance",
  authorSlug: "mp365-team",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  excerpt:
    "The effective date of a credit union merger is fixed by the boards, NCUA and the members. The tenant plan has to work backwards from it, and it should not try to finish on it.",
  imageUrl: "/images/industries/financial-services.jpg",
  body: [
    {
      type: "prose",
      paragraphs: [
        "On the effective date of a credit union merger, the continuing credit union takes on the merging credit union's assets, liabilities and members, and with them every mailbox, SharePoint site and OneDrive account that holds its records. Microsoft 365 does not need to be merged on that day. It needs **coexistence**: mail flowing between the two tenants, a shared address list, calendar availability across both, and the merging credit union's retention and holds still intact. The [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) itself is safer as a separate event in the weeks that follow.",
        "That ordering matters more for a credit union than for most acquirers. The merging institution's mail and files carry member nonpublic personal information, loan correspondence and BSA material, and the continuing credit union inherits the obligation to keep and protect it. Microsoft's native cross-tenant tools will not move a mailbox or OneDrive account that is under a hold, and a mailbox that does move is deleted from the source. Both facts shape the plan before a single user is migrated.",
        "This article sets out what the effective date means legally, what has to be true in the tenants on that day, and the sequence that gets there without putting records at risk.",
      ],
    },
    {
      type: "prose",
      heading: "What the effective date is, and who sets it",
      paragraphs: [
        "For federally insured credit unions the process is in 12 CFR Part 708b. The boards approve a merger proposal and prepare a merger plan under section 708b.103, then submit it to the NCUA Regional Director under 708b.104 with board resolutions, the proposed merger agreement and the member notice and ballot. NCUA acts on the proposal under 708b.105. Members of the merging credit union, and only the merging credit union, then vote: section 708b.106 requires written notice at least 45 and no more than 90 calendar days before the meeting, and approval by a majority of the members who vote. A state-chartered credit union also needs its state supervisory authority.",
        "The effective date itself is set by signature. NCUA's merger agreement form (NCUA 6304) states that the date the officials sign it is the effective date, and its terms have the merging credit union transfer all of its assets, rights and property while the continuing credit union assumes and pays all of its liabilities. Within 30 days after that date the continuing credit union certifies completion to the Regional Director under 708b.108, and NCUA cancels the merging charter and insurance certificate.",
        "The records consequence is direct. The merging credit union stops existing as a legal entity, but its records do not, and the continuing credit union's records preservation program under 12 CFR Part 749 now has to cover them. NCUA's retention guidance in Appendix A to Part 749 is advisory rather than mandatory, but it expects electronically stored records to be accurate, reproducible and accessible to an examiner. The same examiner who reviews your [financial services](/industries/financial-services/) controls will expect the merging credit union's mail and files to be findable after the tenant it lived in is gone.",
      ],
    },
    {
      type: "table",
      heading: "What must be true on the effective date, and what can wait",
      headers: ["Workstream", "Must be true on the effective date", "Can wait until after"],
      rows: [
        [
          "Mail flow",
          "Mail between the two domains routes reliably, and external mail to both domains still arrives. Nobody's address changes that morning.",
          "Consolidating onto one domain and one MX record, which depends on the domain move at the end of the migration.",
        ],
        [
          "Directory and calendars",
          "Staff from both credit unions can find each other in the address list and see free/busy. An Exchange organisation relationship has to be configured in both tenants for availability to work.",
          "Merging distribution lists, shared mailboxes and room resources into a single set.",
        ],
        [
          "Identity and access",
          "Staff who serve members of both credit unions can reach the systems they need, under Conditional Access and MFA in whichever tenant they sign in to.",
          "Single sign-in for everyone, which only arrives when users move into the surviving tenant.",
        ],
        [
          "Holds and retention",
          "Every hold on the merging credit union's content is inventoried, still in place and owned by named counsel at the continuing credit union.",
          "Rebuilding the [retention policy](/resources/glossary/retention-policy/) set in the target, which must be finished before content arrives rather than before the effective date.",
        ],
        [
          "Member NPI and DLP",
          "DLP in both tenants is still enforcing. No policy is switched off to make coexistence easier.",
          "A single DLP policy set in the surviving tenant, tuned in simulation against the merged workforce's real traffic.",
        ],
        [
          "Mailbox, OneDrive and Teams content",
          "Nothing has to move. Content moved under deadline is the most common source of lost data and missed holds.",
          "Migration waves, starting once target controls exist and the pilot has proved the runbook.",
        ],
      ],
    },
    {
      type: "steps",
      heading: "Working backwards from the effective date",
      steps: [
        {
          name: "When the boards approve the merger plan",
          description:
            "Inventory both tenants: licences, identity source, mailbox and OneDrive volume, shared mailboxes, Teams, Power Platform apps, and every retention policy, DLP rule and hold. The published range for a full [M&A tenant migration](/services/ma-tenant-migration/) is 8 to 16 weeks, and discovery is the part that can start this early.",
        },
        {
          name: "Before the member notice goes out",
          description:
            "Decide which tenant survives, on control set and audit history rather than asset size. Agree with counsel which holds relate to open matters and which relate to concluded ones, because that decision governs what can move.",
        },
        {
          name: "Build the target controls",
          description:
            "Retention, sensitivity labels, DLP and Conditional Access exist in the surviving tenant before any content is scheduled to arrive, so migrated content lands under policy rather than waiting for it.",
        },
        {
          name: "Stand up coexistence ahead of the date",
          description:
            "Organisation relationships for free/busy, mail routing between the tenants and a shared directory, tested with real users from both credit unions. [Day 1 coexistence](/resources/glossary/day-1-coexistence/) has a fixed deadline and should be finished before the week of the effective date.",
        },
        {
          name: "The effective date",
          description:
            "Coexistence is live, both control sets are enforcing, and nothing is mid-migration. Member service staff work as one credit union on the first morning without anyone's mailbox moving.",
        },
        {
          name: "Migrate in waves, then move the domain",
          description:
            "Pilot, then production waves. The merging credit union's domain moves last, because Microsoft will not allow a domain to be verified in more than one Entra tenant, and it cannot be removed from the source while any user or group still carries it.",
        },
        {
          name: "Decommission only when holds are resolved",
          description:
            "The source tenant is retired after every hold has either been re-established in the target or released by counsel, and after compliance confirms the preserved content is accessible from the surviving tenant.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Holds and member records decide the migration method",
      paragraphs: [
        "Microsoft's cross-tenant mailbox migration documentation is explicit that mailboxes on any type of hold are not migrated and the move is blocked. It also says that only user-visible content moves, and that after a successful migration the source mailbox is deleted and is not discoverable in the source tenant. Cross-tenant OneDrive migration blocks accounts under a hold too, and Microsoft's documented route is to remove the hold, migrate, then reapply it in the target.",
        "For a credit union that route is a legal decision, not an administrative one. Removing an [eDiscovery hold](/resources/glossary/ediscovery-hold/) on a collections dispute or an employment claim, even for an afternoon, has to be approved by counsel with the preservation obligation documented. The common alternatives are migrating held custodians with a third-party tool that copies rather than moves, exporting held content for preservation, or keeping a small, licensed source tenant for held custodians until the matters close. Each has a cost, which is why [what drives migration cost](/pricing/tenant-migration-cost/) depends heavily on the hold inventory.",
        "DLP needs the same deliberate treatment. Policies are tenant-scoped, so the merging credit union's staff are covered by the surviving tenant's DLP from the moment they move, and not before. The rules that protect member account numbers, routing numbers and SSNs in mail and Teams should be rebuilt in the target from the sensitive information types that match financial data, with [DLP](/resources/glossary/data-loss-prevention-dlp/) running in simulation against both workforces before anything blocks. The same gaps appear in any deal, as covered in [the data governance gaps that surface in due diligence](/blog/data-governance-gaps-ma-due-diligence/).",
      ],
    },
    {
      type: "prose",
      heading: "Identity mapping and the core conversion",
      level: 3,
      paragraphs: [
        "Every migrated user needs a target identity prepared in advance. For mailboxes that means a MailUser in the surviving tenant carrying the source ExchangeGUID and the source LegacyExchangeDN as an X.500 address, so replies to old messages still resolve. For OneDrive it means an identity mapping file that tells the move which source user becomes which target user. Getting [cross-tenant identity mapping](/resources/glossary/cross-tenant-identity-mapping/) right for two credit unions that each have a j.smith is dull work that decides whether the pilot succeeds.",
        "Entra cross-tenant synchronisation can make the merging credit union's staff visible in the surviving tenant's people search during coexistence. It is not a migration tool: Microsoft states the source tenant is still required for those users to authenticate.",
        "The core conversion is a separate project run by the core vendor, and the core stays in place as the system of record. Its conversion date and the legal effective date are not always the same day. The Microsoft 365 plan should avoid putting a mailbox wave or a domain move on the core conversion weekend, when the service desk and the member contact centre are already at capacity.",
      ],
    },
    {
      type: "list",
      heading: "Where credit union merger migrations fail",
      items: [
        "**Cutover scheduled for the effective date.** Two irreversible events on one weekend, with no rollback for either. Coexistence on the date and cutover weeks later is the safer shape.",
        "**The hold inventory arrives after the migration batches are built.** Held mailboxes fail to move, users end up split across two tenants, and counsel is asked to make a preservation decision under a deadline.",
        "**The surviving tenant chosen by size.** The larger credit union's tenant becomes the default even when the merging one has the stronger retention, audit and DLP configuration.",
        "**DLP relaxed for coexistence.** A rule is disabled so cross-tenant mail flows cleanly, and nobody switches it back on.",
        "**The source tenant cancelled with the old charter.** Licences lapse on a finance timetable while preserved content is still only reachable there.",
        "**Teams chat history assumed to move.** It does not move natively between tenants, so the decision to migrate it with a tool, export it for retention or leave it behind should be made and recorded before the effective date.",
      ],
    },
    {
      type: "prose",
      heading: "Where to start",
      paragraphs: [
        "If the boards have approved a plan, the useful first step is a comparison of the two tenants' control sets and a hold inventory with matter status, before the member notice goes out. A [tenant migration assessment](/assessments/tenant-migration/) produces both, and a date-by-date plan that fits the effective date rather than chasing it.",
        "The same merged tenant also has to support the continuing credit union's incident obligations from the first day. See [NCUA cyber incident notification in Microsoft 365](/blog/ncua-cyber-incident-notification-microsoft-365/) for what the 72-hour clock asks of the audit trail, and the wider [financial services](/industries/financial-services/) page for how retention, DLP and access reviews fit together. For the migration phases in detail, see [the tenant-to-tenant migration timeline](/blog/microsoft-365-tenant-to-tenant-migration-timeline/).",
      ],
    },
  ],
  faqs: [
    {
      q: "Should the Microsoft 365 cutover happen on the merger effective date?",
      a: "Usually not. The effective date needs coexistence: mail routing between the tenants, a shared address list and free/busy, with both control sets still enforcing. Mailbox and OneDrive waves, and the move of the merging credit union's domain, are safer in the weeks after, once target controls exist and the hold inventory is resolved. Putting both on one weekend removes any way to roll back.",
    },
    {
      q: "Do legal holds move with mailboxes in a tenant-to-tenant migration?",
      a: "No. Microsoft's cross-tenant mailbox migration blocks mailboxes on any type of hold, and cross-tenant OneDrive migration blocks held accounts too. Holds are tenant-scoped, so they have to be re-established in the target. Removing a hold to migrate is a decision for counsel, and the alternatives are copying held content with a third-party tool, exporting it for preservation, or keeping the source tenant until matters close.",
    },
    {
      q: "Which members vote on a credit union merger?",
      a: "Under 12 CFR 708b.106, members of the merging credit union vote, and approval requires a majority of the members who vote on the proposal. They must receive written notice at least 45 and no more than 90 calendar days before the meeting. The continuing credit union's members do not vote under Part 708b.",
    },
    {
      q: "When should Microsoft 365 planning start in a credit union merger?",
      a: "When the boards approve the merger plan, well before the member notice goes out. A full tenant migration typically runs 8 to 16 weeks, and the decisions that take longest, which tenant survives and what happens to each hold, need both credit unions' compliance teams and counsel. Starting then leaves time to build coexistence before the effective date.",
    },
  ],
};

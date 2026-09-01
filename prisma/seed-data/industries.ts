import type { Faq } from "./services";
import type { MarketingBlock } from "../../lib/marketing-blocks";

export type Industry = {
  slug: string;
  oldSlugs: string[];
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroQuestion: string;
  heroAnswer: string;
  intro: string[];
  challenges: string[];
  /** Typed content blocks — same renderer as the solutions and marketing hubs. */
  blocks?: MarketingBlock[];
  faqs: Faq[];
  /** Bare Service slugs, most relevant first. */
  relatedServiceSlugs?: string[];
  /** Bare glossary term slugs. */
  relatedTermSlugs?: string[];
  /** Full marketing-hub paths, e.g. "/pricing/dynamics-365-licensing/". */
  relatedPageRefs?: string[];
};

// Data is JSON-shaped so it can be regenerated wholesale rather than
// hand-merged — the same treatment solutions.ts gets. Every factual specific
// below was checked by an independent adversarial fact-check pass; anything
// two checkers could not agree on was removed rather than published.

export const industries: Industry[] = [
  {
    "slug": "manufacturing",
    "oldSlugs": [
      "/solutions/manufacturing-it-solutions/"
    ],
    "name": "Manufacturing",
    "metaTitle": "Business Central or Supply Chain for Manufacturing",
    "metaDescription": "How mid-market manufacturers choose between Business Central and Supply Chain Management, what the Premium licence gate costs, and where ERP projects fail.",
    "heroQuestion": "Should a mid-market manufacturer implement Business Central or Dynamics 365 Supply Chain Management?",
    "heroAnswer": "The deciding factor is your production data model, not your headcount. Business Central models production as BOMs and routings and has no formula concept, so any manufacturer whose batch yields co-products or by-products is ruled out on data model alone. Discrete manufacturers, however complex, usually belong on Business Central Premium, and Supply Chain Management is over-buying at roughly twice the list price per user.",
    "intro": [
      "Most manufacturing ERP conversations start with a date. Dynamics GP, NAV 2018 or AX 2012 is running the plant, the support clock has a number on it, and finance has been asked to have a plan by the next board meeting. By the time a requirements document reaches a partner it reads like a finance project: close days, consolidation, a margin number the CFO can defend. The plant director reads it and correctly concludes that nobody has asked whether the schedule the new system produces will be executable.",
      "That is the deal that stalls. The CFO signs, the operations director blocks, and the IT director, covering the whole estate with two to four people, blocks again on who owns the MES integration afterwards. A proposal that answers only the CFO's question converts finance and dies in the plant.",
      "MP365 does project-based [Dynamics 365](/services/dynamics-365/) implementation work for manufacturers in Connecticut, New England and across the US. This page covers the decisions made before anyone configures anything: which product your production actually fits, what the licence architecture costs three years out, what Business Central's planning engine will and will not do, and where these projects fail. Cost drivers live on [Business Central implementation cost](/pricing/business-central-implementation-cost/)."
    ],
    "challenges": [
      "A production schedule the planner rebuilds in Excel, because the system planned against infinite capacity",
      "Operators on paper travellers that a supervisor re-keys at end of shift, so WIP and component inventory read wrong all day",
      "A machine or MES integration that passed the two-machine pilot and started failing intermittently at twenty",
      "Month-end consolidation that still takes a week because intercompany eliminations are hand-keyed every period",
      "An acquired plant arriving on an unpatched ERP inside your security perimeter on the day the deal closes",
      "Standard costs last reviewed two years ago, so the margin finance defends is not the margin the plant runs",
      "A legacy ERP that fails the cyber-insurance questionnaire and a customer security audit before it fails technically"
    ],
    "blocks": [
      {
        "type": "prose",
        "heading": "Which Microsoft product your production actually fits",
        "paragraphs": [
          "Ask one question before any other. Does a single production run consume a recipe and yield more than one saleable output? If it does, a main product plus a co-product plus a waste by-product, Business Central cannot represent that transaction. Its model is production BOMs plus routings, with no formula concept in it at all. [Supply Chain Management](/dynamics-365/supply-chain/) models exactly this: a formula version carries co-products and by-products along with yield and cost-distribution instructions, executed as a batch order. That is a data-model boundary, not a maturity gap, and no extension closes it.",
          "If the answer is no, discrete BOMs and routings however deep, then [Business Central](/dynamics-365/business-central/) Premium is usually right and Supply Chain Management is over-buying. Microsoft list pricing puts Supply Chain Management at roughly double Business Central Premium per user per month, before the longer implementation, and the argument that you will grow into it rarely survives a three-year comparison at 50 to 300 employees. Many mid-market manufacturers land on the larger product because partners recommend whichever practice has bench capacity. [Business Central vs Finance and Operations](/compare/business-central-vs-finance-operations/) works it through.",
          "Two other requirements should drive the platform choice rather than surface in phase two. If quoting runs off a rules-based configurator, Business Central has no native equivalent to Supply Chain Management's product configuration model. And if you need a touch-optimised shop-floor terminal out of the box, Supply Chain Management ships one, the production floor execution interface, with parallel job start, material consumption, batch and serial traceability and time and attendance. Business Central has none."
        ]
      },
      {
        "type": "table",
        "heading": "Decisions made before configuration, and what each one costs later",
        "headers": [
          "Decision",
          "What it gives you",
          "What it costs you later"
        ],
        "rows": [
          [
            "Business Central Premium instead of Supply Chain Management",
            "Discrete manufacturing at roughly half the per-user list price: production BOMs, routings, version management, machine centres, and what Microsoft names Basic Capacity Planning and Basic Supply Planning.",
            "No formula, co-product or by-product model, no native configurator, no native shop-floor terminal. If the business moves into process manufacturing later, that is a re-platform rather than a module purchase."
          ],
          [
            "Which legal entities carry the Premium experience",
            "Manufacturing switches on per company through the Experience field on Company Information, so a manufacturing entity can run Premium while distribution or holding entities stay on Essentials.",
            "Microsoft's rule is asymmetric. A Premium user can sign in to an Essentials company; an **Essentials user cannot sign in to a Premium company at all**. Every AP clerk, sales admin and controller who needs to open that company has to move to a Premium licence."
          ],
          [
            "Putting manufacturing and distribution in one company to simplify reporting",
            "One chart of accounts, one set of masters, no intercompany postings between the two sides of the business.",
            "That company is now a Premium company, so every full user who needs to open it has to hold a Premium licence. Team Member licences are a separate plan and are not affected. On a large multi-entity full-user count, the annual cost of that configuration checkbox is the Premium-minus-Essentials delta multiplied by every full user in the company."
          ],
          [
            "Relying on native Business Central planning",
            "MRP, routings and lead-time-based scheduling with no extra product to license, integrate or upgrade at each release.",
            "Business Central plans **infinite capacity by default**; work and machine centre capacity is ignored unless a centre is marked capacity-constrained. Once constrained, Microsoft documents that its operations are always planned serially, so three identical machines are sequenced rather than run in parallel."
          ],
          [
            "An APS extension instead of building scheduling logic yourself",
            "Finite, bottleneck-aware scheduling that survives Business Central's update cadence because the vendor maintains compatibility.",
            "Another vendor and another renewal to sequence the project around. Still the cheaper option: bespoke scheduling code is the most reliable way to build a system no future partner will touch."
          ],
          [
            "One environment for every legal entity",
            "Up to 300 companies in a single Business Central environment, one upgrade cadence, one place to look for group reporting.",
            "Each additional production environment brings three more sandboxes but only 4 GB of additional tenant-wide database capacity. Entity sprawl is an architecture decision, not a purchase, so the template has to be right before the first bolt-on."
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "How the work sequences",
        "steps": [
          {
            "name": "Production model and platform fit",
            "description": "Establish whether production is BOM-shaped or formula-shaped, whether quoting runs off a rules-based configurator, and how many legal entities are in scope now and in the acquisition pipeline. Those three answers decide the product, and it is the only decision here that cannot be corrected later without re-implementing. A [Business Central readiness assessment](/assessments/business-central-readiness/) is where this normally lands."
          },
          {
            "name": "Entity and licence architecture",
            "description": "Which legal entities exist, which carry the Premium experience flag, and which users need to open which company. This is where the licence bill is actually set, and it is a paper exercise done before anyone opens a configuration screen. The output is an entity map with a tier and a headcount against each company."
          },
          {
            "name": "Master data before features",
            "description": "Item master, production BOMs, routings, work and machine centre definitions, standard costs and flushing methods. Stale routings and two-year-old standards produce a system that runs correctly and reports numbers nobody trusts. This is also the honest gate on AI: Copilot and analytics run on this data and return confident wrong answers faster when it is bad."
          },
          {
            "name": "Integration pattern, decided before it is built",
            "description": "MES, machine telemetry, EDI, CAD or PLM, and the label printers. Each gets a named owner, a direction, a volume estimate and a write interval, with aggregation happening outside the ERP. Where the surface is genuinely custom, that work belongs with [application modernization](/services/application-modernization/) rather than being absorbed by whoever is available."
          },
          {
            "name": "Scheduling and shop-floor capture",
            "description": "Decide explicitly whether native planning is enough, whether an APS extension is warranted, and how operators will report time, output and scrap. This is the plant director's section and they should own the acceptance criteria. If the answer on capture is a [Power Platform](/services/power-platform/) app on tablets, it gets built and tested here, not after go-live."
          },
          {
            "name": "Conference room pilot against real orders",
            "description": "Run last quarter's actual orders through the configured system, including the awkward ones: the rework, the partial receipt, the substitution a buyer made over the phone. Planners and supervisors drive it, not consultants. The point is to find where people would go back to the spreadsheet, because they say so here and not in the go-live meeting."
          },
          {
            "name": "Cutover and the first close",
            "description": "Inventory count, open order conversion, WIP position, and a defined window with a named rollback point. The project is finished when the first month-end closes with a consolidated trial balance that ties out, not at go-live, so support is planned for that close specifically."
          }
        ]
      },
      {
        "type": "list",
        "heading": "Where manufacturing ERP projects actually fail",
        "items": [
          "Finance writes the requirements and the plant reads them for the first time in user acceptance testing. The schedule is rejected by the person who has to run it, three weeks before cutover.",
          "Someone flips a company to the Premium experience during configuration because they needed to see a production order, and nobody prices the consequence until the renewal quote arrives.",
          "Native planning is accepted as finite scheduling because nobody asked. The planner keeps the real schedule in a spreadsheet, promise dates drift away from it, and within two quarters people stop running MRP.",
          "Components are left on backward flushing without tracing the consequence: consumption posts only when output is posted against the linked operation, or later still when the order is set to Finished where there is no routing link, so WIP is invisible between release and output, unreported scrap is never deducted, and on-hand quietly overstates until someone counts.",
          "The machine integration is validated on two machines and scaled to twenty. Throttling surfaces as intermittent failure rather than a clean error, and the team spends weeks blaming the network."
        ]
      },
      {
        "type": "prose",
        "heading": "Machine data, MES, and the limit that decides the architecture",
        "paragraphs": [
          "The numbers that decide whether an MES or machine integration survives are published, not a matter of opinion. Business Central online publishes operational limits on its OData endpoints, and since late 2023 the strictly enforced ones are per user rather than per environment: 6,000 requests in a rolling five-minute window, 100 simultaneous connections, and 5 concurrent requests before the rest queue. Exceeding those returns HTTP 429, and a request that times out waiting in the queue returns HTTP 503. The older per-environment rate of 600 requests per minute in production is still documented, but Microsoft states it was never strictly enforced and has been superseded by the per-user limit. Separately, an individual request is cut off at an eight-minute operation timeout with HTTP 408, and a response over the 20,000-entity page size returns HTTP 413.",
          "An integration that writes each machine cycle, each scan or each sensor reading straight into the ERP will pass a two-machine pilot and then degrade once twenty machines are connected. Because throttling appears as intermittent failure rather than a clean error, teams routinely misdiagnose it as network flakiness for weeks. The pattern that holds is to aggregate at the edge, post summarised transactions on an interval, and distribute load across multiple users or service principals, which is Microsoft's own documented mitigation.",
          "The corollary is to buy the MES rather than build one. Data collection, OEE and downtime tracking are solved products, and a bespoke layer written against a throttled API becomes a permanent dependency for an IT team of three and the reason the next upgrade stalls."
        ]
      },
      {
        "type": "prose",
        "heading": "Multi-entity close, and the bolt-on template nobody sells",
        "paragraphs": [
          "Business Central's consolidation mechanics are genuinely strong, and the part CFOs assume is automatic is not. It transfers general ledger entries from business units into a consolidated company, and it does that across different charts of accounts, different fiscal years, different currencies, subsidiaries in separate Business Central environments, and companies running other accounting software. Eliminations, by Microsoft's own documentation, are manual: you identify the intercompany transactions, key general journal lines to eliminate them, simulate with the G/L Consolidation Eliminations report, then post.",
          "For an acquisitive group that is the whole game. Every entity added without a standard template adds recurring manual close effort, and the subsidiary-to-consolidated account mapping drifts after each acquisition until the trial balance stops tying out. The deliverable worth paying for is a repeatable bolt-on template: a standard chart of accounts, a standard entity configuration, a defined data-migration scope, a defined cutover window, and a day-one assessment of what the acquired plant is running. Close time that does not grow with entity count is a sharper promise than visibility.",
          "The tenant and identity side of an acquisition runs on its own timetable, covered under [M and A tenant migration](/services/ma-tenant-migration/), and should be sequenced against the ERP cutover rather than discovered alongside it. The close process itself sits with [financial management](/solutions/financial-management/)."
        ]
      },
      {
        "type": "prose",
        "heading": "The support clock is now a contract condition, not an IT preference",
        "paragraphs": [
          "AX 2012 R3 mainstream support ended in October 2021 and extended support ended on 11 January 2023, so it receives no security patches today. GP 2016 and 2016 R2 extended support ended on 14 July 2026, so those versions are already unpatched. GP 2018 and NAV 2018 both run to 11 January 2028. Microsoft has stated that Dynamics GP support ends 31 December 2029, with security updates available if needed until 30 April 2031.",
          "For anyone in the defence supply chain the clock is sharper. The CMMC acquisition rule took effect on 10 November 2025, making CMMC a pre-award condition on new DoD contracts, with Level 2 certification requirements phasing into new and renewing contracts from twelve months after that date. An unpatchable ERP holding controlled unclassified information becomes a reason to lose an award rather than an audit finding, and cyber-insurance renewals ask a version of the same question.",
          "The route out depends on where you start: [GP to Business Central](/migrations/dynamics-gp-to-business-central/), [NAV to Business Central](/migrations/dynamics-nav-to-business-central/), or [AX to Dynamics 365](/migrations/dynamics-ax-to-dynamics-365/)."
        ]
      },
      {
        "type": "list",
        "heading": "When we would tell you not to do this",
        "items": [
          "**You are a process manufacturer.** If production runs from a formula with co-products, by-products, potency or catch weight, Business Central has no data model for it and three extensions will not create one. Food, chemical, coatings and nutraceutical businesses belong on Supply Chain Management or a process-native ERP.",
          "**You are being sold Supply Chain Management at 60 users on the headroom argument.** At roughly double the per-user list price plus a longer implementation, that rarely survives a three-year comparison. Ask which practice at the partner has bench capacity.",
          "**Your shop floor is on paper because of process discipline, not tooling.** If nobody enforces scrap reporting and supervisors override the schedule, ERP makes that visible rather than fixing it. That is a change-management project with a software component, and it should be priced and staffed as one.",
          "**You need validated GxP systems.** Microsoft's advantage in life sciences is platform breadth, not shrink-wrapped 21 CFR Part 11 compliance, and the validation effort is real on either product. A specialist validated ERP can be cheaper all in.",
          "**Your current ERP fits and your people use it properly.** GP has support into late 2029 with security updates beyond that, and NAV 2018 runs to January 2028. That is runway to do this once and do it properly. A partner telling you the sky falls this quarter is selling urgency, not advice.",
          "**You are a 200-person manufacturer holding a quote from an enterprise practice.** Those firms are built around a different deal size and staffing model, and at this size you typically get a junior team at enterprise rates."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does Business Central handle process manufacturing?",
        "a": "No, and it is a hard boundary rather than a gap to configure around. Business Central models production as production BOMs and routings with no formula concept, so a batch yielding a main product plus a saleable co-product plus a waste by-product cannot be represented. Formulas, co-products, by-products, yield and cost distribution are [Supply Chain Management](/dynamics-365/supply-chain/) features executed through batch orders."
      },
      {
        "q": "Why did our Business Central licence bill jump after go-live?",
        "a": "Usually because a company was switched to the Premium experience. Manufacturing is Premium-only and the gate is set per company on the Company Information page, not per tenant. Microsoft's rule is asymmetric: a Premium user can open an Essentials company, but an Essentials user cannot sign in to a Premium company at all. Every full user who needs that company has to move to Premium, while Team Member licences are a separate plan and are not affected. [Dynamics 365 licensing](/pricing/dynamics-365-licensing/) compares the tiers."
      },
      {
        "q": "Will Business Central give our planner a schedule the plant can actually run?",
        "a": "Not on its own. Business Central plans against infinite capacity by default, scheduling on lead times and routing sequence without considering work centre or machine centre capacity unless a centre is explicitly marked as a capacity-constrained resource. Microsoft further documents that operations on constrained resources are always planned serially, so a centre with three identical machines is sequenced rather than run in parallel. For a bottleneck-constrained shop, budget for an APS extension whose vendor maintains compatibility with the update cadence."
      },
      {
        "q": "How should machine and MES data get into the ERP?",
        "a": "Aggregated at the edge and written on an interval, never streamed transaction by transaction. Business Central online publishes hard limits, and the strictly enforced ones are per user: 6,000 OData requests per rolling five-minute window, 100 simultaneous connections, and 5 concurrent requests before queuing, all returning HTTP 429 when exceeded. Microsoft's older per-environment rate of 600 requests per minute is documented as superseded and was never strictly enforced. Individual requests also time out at eight minutes. A pattern that writes every cycle passes a two-machine pilot and fails at twenty."
      },
      {
        "q": "Does Business Central have native quality management now?",
        "a": "Yes. Quality Management was introduced in Business Central 2026 release wave 1 as a Microsoft-published extension covering automatic inspection generation on purchase receipt, production and assembly output and warehouse movements, pass and fail templates, automatic lot blocking, quarantine bins, disposal adjustments and vendor returns. It installs automatically on new environments but must be installed manually on existing ones."
      },
      {
        "q": "Will moving to Business Central shorten our multi-entity month-end close?",
        "a": "It improves the foundation but not the part that takes the week. Consolidation transfers general ledger entries from business units into a consolidated company across different charts of accounts, fiscal years, currencies and even separate environments. Microsoft documents eliminations as a manual process. The durable win comes from a standard entity template and account mapping that keeps close effort flat as entities are added."
      },
      {
        "q": "How long do we have before our legacy Dynamics ERP becomes a real problem?",
        "a": "It depends which one, and AX and GP 2016 customers are already past it. AX 2012 R3 extended support ended 11 January 2023, so it gets no security patches. GP 2016 and 2016 R2 extended support ended on 14 July 2026, and GP 2018 and NAV 2018 both run to 11 January 2028. Microsoft has said Dynamics GP support ends 31 December 2029, with security updates until 30 April 2031."
      },
      {
        "q": "Can a Power App replace a shop-floor data collection system?",
        "a": "For operator data entry, often yes. A tablet or handheld app writing to [Dataverse](/resources/glossary/dataverse/) or directly into Business Central can replace paper travellers and end-of-shift re-keying. Watch the licensing, though: Microsoft's multiplexing rule means a Power App front end does not remove the need to license the people behind it, so operators writing into Business Central still need Business Central entitlements. The saving comes from licensing the shared device rather than every operator as a full user, and Microsoft's device licence use rights cover clock in and out, starting and finishing production jobs, reporting progress, consumption and completion. It is the wrong tool for machine telemetry and OEE."
      }
    ],
    "relatedServiceSlugs": [
      "dynamics-365",
      "power-platform",
      "application-modernization",
      "ma-tenant-migration"
    ],
    "relatedTermSlugs": [
      "dataverse",
      "power-platform-environment",
      "premium-connector",
      "tenant-to-tenant-migration"
    ],
    "relatedPageRefs": [
      "/compare/business-central-vs-finance-operations/",
      "/migrations/dynamics-gp-to-business-central/",
      "/pricing/business-central-implementation-cost/",
      "/assessments/business-central-readiness/",
      "/dynamics-365/business-central/",
      "/dynamics-365/supply-chain/"
    ]
  },
  {
    "slug": "healthcare",
    "oldSlugs": [
      "/solutions/healthcare/"
    ],
    "name": "Healthcare",
    "metaTitle": "Microsoft 365 HIPAA Configuration for Healthcare",
    "metaDescription": "HIPAA in Microsoft 365 is a configuration state, not a licence. Audit retention, Teams DLP, Copilot permissions, Part 2 records, and tenant consolidation.",
    "heroQuestion": "Is Microsoft 365 HIPAA compliant?",
    "heroAnswer": "Microsoft 365 can hold PHI. The HIPAA Business Associate Agreement reaches Exchange Online, SharePoint Online, Teams, OneDrive, Entra ID, the Microsoft Purview portal and Microsoft 365 Copilot, and it applies by default through the Data Protection Addendum. Microsoft's own answer to whether that agreement makes an organization compliant is no. Compliance is a configuration and documentation state you have to build, and then evidence.",
    "intro": [
      "Most healthcare requests arrive with the answer already assumed. We have the Microsoft BAA, so we are covered. The question underneath is usually narrower and more urgent: an auditor asked for access records going back four years and the tenant holds 180 days, a merger closed and there are now two tenants with a contractual deadline to consolidate, or an executive saw a Copilot demo and the compliance officer wants to know what it is going to surface.",
      "Microsoft's own position is the right place to start. Asked whether a Business Associate Agreement with Microsoft ensures compliance with HIPAA and HITECH, Microsoft answers no. The BAA allocates liability between two parties. It says nothing about whether external sharing is on, whether MFA is enforced, whether a departing clinician's OneDrive was preserved, or whether the audit records still exist when somebody asks for them. What OCR asks for under 45 CFR 164.308(a)(1)(ii)(A) and (B) is a risk analysis and evidence of risk management, and no contract produces those.",
      "MP365 is a Microsoft consulting firm in Vernon, Connecticut, working with organizations across Connecticut, New England and the rest of the US on project-based engagements. This page is about the half of a provider's data estate that is not the chart. We do not touch your EHR. We govern everything around it. One thing to settle before anyone is handed tenant access, whoever the administrator turns out to be: under 45 CFR 160.103 a firm that administers a tenant where PHI lives is a business associate whether it says so or not, so the paperwork governing that relationship belongs at the start of the engagement rather than after the first ticket."
    ],
    "challenges": [
      "Audit logging retained for 180 days against an auditor or plaintiff lookback measured in years",
      "PHI accumulating in Teams chat and SharePoint as a shadow record nobody has classified",
      "A practice acquisition that produced two tenants, a deal-mandated consolidation date, and no plan for the controls",
      "An executive Copilot request sitting on top of a decade of SharePoint permission drift",
      "Retention policies designed against a rule that does not exist, because HIPAA sets no medical-record retention period",
      "eDiscovery discovered mid-matter, when the licences have to be bought under a deadline",
      "Offboarding run as a manual checklist, which is where the unauthorized-access findings actually come from",
      "Behavioral health records under 42 CFR Part 2 sitting in the same library, under the same permissions, as everything else"
    ],
    "blocks": [
      {
        "type": "prose",
        "heading": "Where the EHR stops and this work starts",
        "paragraphs": [
          "Epic, athenahealth, eClinicalWorks, NextGen, TherapyNotes and SimplePractice hold the chart. Referral coordination, prior authorization packets, credentialing files, payer correspondence, incident reports, policy manuals and clinical employment files do not. That second estate lives in Microsoft 365, it is fully indexed and searchable, and it carries none of the record-management discipline the chart does. It is where the risk concentrates, because nobody ever declared it a record system.",
          "So the scope boundary is explicit: we do not store the legal medical record in SharePoint, and we do not build a Power App that duplicates chart content. Microsoft draws the same line in its Epic connector documentation, stating that the virtual-visit chat \"doesn't constitute a legal medical record or a designated record set.\" That is Microsoft disclaiming, not an answer to the question the provider still has to settle: where the designated record set boundary sits, and how it gets enforced. The engagement is governance of the non-chart estate, which in our service list is [data governance](/services/data-governance/) and [Microsoft Purview](/resources/glossary/microsoft-purview/) configuration, with the adoption half handled as [collaboration enablement](/services/collaboration-enablement/)."
        ]
      },
      {
        "type": "prose",
        "heading": "The BAA is the starting condition. The risk analysis is the artifact.",
        "paragraphs": [
          "Two facts about the Microsoft BAA are worth having straight, because most pages on this subject get them wrong. It is not a document you request or negotiate: it reaches covered entities and business associates by default through the Microsoft Online Services Data Protection Addendum. And Microsoft will not accept your own BAA form. A consultant offering to chase Microsoft for a signed BAA has not read the terms you already hold.",
          "What gets examined is something else. OCR's Risk Analysis Initiative has produced a sustained run of resolution agreements, each turning on a failure to conduct an accurate and thorough risk analysis of ePHI, and the corrective action plans attached to them reach past the analysis into risk management: evidence that identified risks were actually reduced. A gap list with nothing closed against it is worse than no gap list, because it documents that you knew. The answer is a standing evidence object rather than a one-off report. Purview Compliance Manager carries a premium HIPAA and HITECH assessment template that maps controls to Security Rule citations and gives a compliance officer something to hand an auditor and refresh on a cadence. It also means compliance is not a project with an end date: a buyer funding one fixed-scope remediation is buying a baseline and a gap list, and the gap list has a shelf life."
        ]
      },
      {
        "type": "table",
        "heading": "What each licence tier actually buys, and where it stops",
        "headers": [
          "Control",
          "Lowest licence that delivers it",
          "What it costs you to assume E3 covers it"
        ],
        "rows": [
          [
            "Audit log retention",
            "Audit (Standard) is on by default across the Office 365 and Microsoft 365 subscriptions these organizations already hold, including Office 365 E1 and E3, Microsoft 365 E3 and Business Premium, and retains 180 days. One year for Entra ID, Exchange, SharePoint and OneDrive needs Audit (Premium); ten years needs a per-user add-on and a policy created in advance.",
            "Silent and unrecoverable. Microsoft states the ten-year policy is not retroactive and cannot retain logs generated before it was created, so records proving who opened what in month two are gone by month fourteen."
          ],
          [
            "DLP for Teams chat and channel messages",
            "Office 365 E5, Microsoft 365 E5, the Microsoft 365 E5 Information Protection and Governance add-on, or the Microsoft 365 E5 or F5 Compliance add-on. Microsoft 365 E3 and Office 365 E3 cover DLP for Exchange, SharePoint and OneDrive only, which catches files shared through Teams but not the messages themselves.",
            "On E3 you cannot inspect Teams chat for PHI patterns at all. The policy manual says PHI stays out of chat and nothing enforces it, which is the distance between a written control and an operating one."
          ],
          [
            "eDiscovery beyond search and export",
            "Search, hold and export across mail, sites and files come with E3. Review sets, advanced indexing, conversation threading and analytics including near-duplicate detection are the premium eDiscovery features, and those need E5 or the E5 eDiscovery and Audit add-on.",
            "Licensing follows the data, not the operator: every user whose content you analyze with the premium features needs E5 or the add-on, while the administrators, compliance officers and lawyers running the case do not. You buy mid-matter, on a court schedule, with no negotiating position."
          ],
          [
            "Placing a shared mailbox on hold",
            "Exchange Online Plan 2, or Plan 1 with the Exchange Online Archiving add-on.",
            "The referrals, intake and billing mailboxes, where inbound PHI actually lands, are the ones you cannot preserve. Normally discovered on the day it matters."
          ],
          [
            "SharePoint Advanced Management governance reporting",
            "One Microsoft Copilot licence assigned to any single user in the tenant, on an Office 365 E3 or E5 or Microsoft 365 E1, E3 or E5 base. The SharePoint Advanced Management Plan 1 add-on is the alternative.",
            "No permission-state reporting, no \"Everyone except external users\" insight, no sharing-link activity view. A Copilot rollout then gets approved on the basis of nobody having looked."
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Audit retention is the highest-consequence gap and the cheapest to close",
        "paragraphs": [
          "The numbers matter more than the argument. Purview Audit (Standard) retains audit records for 180 days, raised from 90 for records generated on or after 17 October 2023. Audit (Premium) retains Entra ID, Exchange, OneDrive and SharePoint records for one year by default and leaves everything else at 180 days unless custom retention policies are written. Ten-year retention is a separate per-user add-on and is not retroactive. Set that against 45 CFR 164.316(b)(2)(i), which requires six-year retention of Security Rule documentation, and against malpractice and negligent-disclosure lookbacks that run longer. A complaint about an inappropriate chart access does not arrive within six months of the access.",
          "The work is small and provable: an audit posture assessment covering which workloads emit records and what is retained, then some combination of Audit (Premium) retention policies, the ten-year add-on scoped to privileged administrators and the clinical accounts that touch PHI at volume, and export to a SIEM through the Office 365 Management Activity API. Because the add-on is per user, the scope argument is a modelling exercise rather than a tenant-wide purchase, which is what makes it fundable in a group that will not buy E5 for everybody."
        ]
      },
      {
        "type": "steps",
        "heading": "How the work sequences",
        "steps": [
          {
            "name": "Audit and evidence posture",
            "description": "First, because it is the only finding that gets worse while you deliberate. We establish what the tenant retains today, for which workloads, and how that compares with what the compliance officer has been told. The output is a retention decision with a named user scope and, where the answer is a SIEM rather than an add-on, a log-source inventory."
          },
          {
            "name": "Permission-state reporting before anything is labeled",
            "description": "Data Access Governance reports, sharing-link activity, \"Everyone except external users\" insights and site access reviews. This step routinely surfaces a migrated shared drive with permissive ACLs, a billing site shared to a distribution list that has since absorbed half the organization, and broken inheritance nobody remembers creating."
          },
          {
            "name": "Designated record set boundary",
            "description": "A decision, made with counsel and the compliance officer, about what in Microsoft 365 is part of the record and what is explicitly not. It determines what is responsive to a right-of-access request, what a retention schedule applies to, and what has to be collected in a matter. Most provider organizations have never made it, so it gets made for them by whatever eDiscovery returns."
          },
          {
            "name": "Retention design with legal input",
            "description": "Separate policies for Security Rule documentation, for clinical-adjacent operational content, and for everything else, with adaptive scopes doing the multi-state work: user scopes keyed to Entra ID attributes such as state or province, and site scopes keyed to site URL, site name or custom refinable site properties, so a Massachusetts site and a Florida site can carry different periods. Static-scope policies cap at 100 SharePoint sites and 1,000 Exchange mailboxes each, which is why multi-site groups end up hand-maintaining dozens of near-identical policies. A [retention policy](/resources/glossary/retention-policy/) also changes what deletion means, so the cleanup plan is designed alongside it."
          },
          {
            "name": "Control build",
            "description": "Conditional Access and MFA, [sensitivity labels](/resources/glossary/sensitivity-label/) on the content that warrants them, [DLP](/resources/glossary/data-loss-prevention-dlp/) scoped to where PHI actually travels, and Entra ID lifecycle workflows for joiners and leavers. Offboarding gets its own attention because that is where the enforcement pattern lives: an account disabled, a mailbox converted to shared without a hold, and a OneDrive that left with its owner."
          },
          {
            "name": "Hold and eDiscovery rehearsal",
            "description": "Custodian tiers defined, licence coverage verified for every user whose content would be analyzed, hold capability tested against a shared mailbox and a Teams chat, and the collection procedure documented. An [eDiscovery hold](/resources/glossary/ediscovery-hold/) that has never been placed in your tenant is a hypothesis, not a control."
          },
          {
            "name": "Copilot, last",
            "description": "Rollout after the permission estate is remediated and PHI-bearing content is labeled. The counter-intuitive part is to buy one Copilot licence back at the second step, because a single assigned licence unlocks SharePoint Advanced Management's governance reporting. Used that way it is an audit tool for months before it is a productivity tool for anyone."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Copilot does not break permissions, and that is the problem",
        "paragraphs": [
          "Microsoft 365 Copilot and Copilot Chat are named in the in-scope services covered by Microsoft's BAA, so eligibility has a clean answer. The risk is configuration. Copilot enforces the permissions that already exist and applies no judgement about whether a user has a clinical or business reason to see a document. Ten or fifteen years of SharePoint drift was survivable while discovery required somebody to know a file existed and go looking for it; Copilot removes the search cost. HIPAA's minimum necessary standard at 164.502(b) is a use-and-disclosure test rather than an access-control test, so an organization can be correctly permissioned by its own ACL model and still be out of compliance the day Copilot ships.",
          "Restricted Content Discovery gets offered as the answer and it is not one. Microsoft is explicit that it does not change permissions, does not remove content from the search index, and does not affect Purview eDiscovery or auto-labeling; it cannot be applied to OneDrive at all; and on very large sites an update can take substantially longer to reflect in search and Copilot than an administrator expects. Microsoft describes it as a temporary governance control. It buys time during a remediation, and selling it as a PHI control would be a misrepresentation. The honest sequence is permission-state reporting, remediation of broad grants and broken inheritance, labeling, and only then Copilot licences at scale."
        ]
      },
      {
        "type": "prose",
        "heading": "Behavioral health carries two record classes the tenant treats identically",
        "paragraphs": [
          "Psychotherapy notes under 45 CFR 164.501 are only psychotherapy notes if they are separated from the rest of the individual's medical record. Separation is part of the definition rather than a filing preference, and it has to be real separation, not a differently-labeled section of the same chart. Substance use disorder records under 42 CFR Part 2 carry consent and re-disclosure restrictions HIPAA does not impose; the 2024 final rule set a compliance date of 16 February 2026, and OCR has since moved to civil enforcement for Part 2 records, so the gap between a written consent process and an enforced one now has a penalty attached to it.",
          "Inside a Microsoft 365 tenant both fail the same way. A therapist's notes and a general clinical document sit in the same library, inherit the same permissions, fall under the same retention policy, are returned by the same eDiscovery search, and are indexed for the same Copilot. No native construct distinguishes them, so the distinction has to be built: genuinely separate SharePoint sites rather than subfolders, sensitivity labels carrying their own container settings, Restricted Access Control or a Conditional Access authentication context on those sites, exclusion from Copilot discovery, separate retention, and Information Barriers where clinical and billing populations must not see each other's content."
        ]
      },
      {
        "type": "prose",
        "heading": "After an acquisition, the surviving tenant is a compliance decision",
        "paragraphs": [
          "Practice-group roll-ups produce two or three tenants and a deal term mandating IT consolidation within six to twelve months of close, which is how the work comes to be scheduled as an IT project rather than a PHI-handling event. The technical asymmetry is what breaks it. Microsoft's native cross-tenant migration covers Exchange mailboxes, OneDrive and Teams chats, and a separate cross-tenant SharePoint site migration exists but is Enterprise Agreement only, licensed per 100 GB moved, one-shot with no delta passes, and explicitly excluding Teams content, channels and structure. Retention policies, DLP policies, Conditional Access and eDiscovery holds do not migrate at all; sensitivity labels arrive stripped of their protection and policy; and permissions carry over only for the users and groups precreated and accounted for in identity mapping, so everything else has to be rebuilt in the target. In practice PHI lands in the surviving tenant days or weeks before the compliance configuration catches up, and a hold in the source tenant does not follow the data, which can quietly spoliate evidence in an active matter.",
          "Which tenant survives should therefore be decided on which one has the mature control set and the more defensible audit history, not on seat counts and domain names. We run these controls-first: target-tenant Conditional Access, DLP, retention, labels and audit configuration stood up before data moves, and source data preserved until counsel signs off. The mechanics of [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) and [cross-tenant identity mapping](/resources/glossary/cross-tenant-identity-mapping/) sit under [M and A tenant migration](/services/ma-tenant-migration/); for the sequence and cost drivers first, start with the [tenant migration assessment](/assessments/tenant-migration/) and [what actually drives the cost](/pricing/tenant-migration-cost/)."
        ]
      },
      {
        "type": "list",
        "heading": "Where these projects actually fail",
        "items": [
          "**Retention designed against a misremembered rule.** HIPAA sets no medical-record retention period. Section 164.316(b)(2)(i) governs Security Rule documentation for six years; the clinical record is governed by state law layered with federal program rules, commonly five to ten years from last date of service and longer for minors. One tenant-wide policy built on \"HIPAA says seven years\" is too short for the documentation and too long for everything else.",
          "**Audit posture left until an auditor asks for it.** Nearly every other finding here can be remediated after discovery. This one cannot, and it is the one nobody checks until it is quoted back to them.",
          "**Compliance treated as a one-time project.** A risk analysis with no risk-management evidence behind it hands OCR a tidy list of the things you knew about and did not fix.",
          "**Buying a second product instead of configuring the first.** Practices routinely pay for a third-party DLP or email-security layer on top of Defender for Office 365 and Purview, and have none of the three tuned.",
          "**Offboarding as a human checklist.** High clinical turnover, heavy locum and per-diem use, and a two-person IT team working under pressure. The account gets disabled. The OneDrive does not get preserved.",
          "**Copilot approved on the strength of a licence question.** The licence question has an easy answer. The permission question determines what gets surfaced, and it has to be answered first."
        ]
      },
      {
        "type": "list",
        "heading": "Things we will tell you not to buy",
        "items": [
          "**GCC or GCC High for commercial healthcare.** Eligibility turns on CUI, ITAR-controlled data, FCI, or DFARS and CMMC obligations, and Microsoft vets organizations before provisioning. PHI held by a commercial provider is not CUI: the CUI Health Information category attaches to information handled for or on behalf of a federal agency, which a private practice group is not doing. Office 365 Commercial is fully in scope for the Microsoft BAA and is where HIPAA compliance is achieved. Government cloud costs more, delays features and complicates integrations for no compliance benefit.",
          "**E5 for everyone.** Staff who touch PHI at volume, privileged admin accounts and named custodians justify E5-class compliance features. Front desk, facilities, dietary, transport and per-diem staff generally do not. Mixed licensing with targeted add-ons is usually defensible, with the caveat that some capabilities are tenant-level and premium eDiscovery is licensed for every user whose content gets analyzed, so under-licensing has a real failure mode too.",
          "**Microsoft Cloud for Healthcare, in most mid-market cases.** It is priced and scoped for health systems, its Dynamics-based components carry their own implementation weight, and the Teams EHR connector it can license — there is also a standalone connector offer, so this is one of two paths rather than a gate — has had new customer onboarding paused. A two-hundred-provider group is usually better served by correctly configured Microsoft 365 plus Purview than by an industry SKU it will use a tenth of.",
          "**Products you already own the replacement for.** Purview Message Encryption sits unconfigured inside the Office 365 and Microsoft 365 E3 licences these organizations already hold; Advanced Message Encryption, with its expiry and revocation controls, is the part that needs E5 or an E5 Compliance add-on. SIEM licensing bought before the audit sources are settled buys a pipeline carrying the wrong logs. Where the need is patient-facing secure messaging at scale or compliant fax workflow, purpose-built platforms beat bending Teams into the role, and an organization on a mature Google Workspace estate should hear that Google offers a BAA too and that HIPAA alone rarely justifies a [Microsoft 365 migration](/services/microsoft-365-migration/)."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is Microsoft Teams HIPAA compliant?",
        "a": "Teams is in scope for Microsoft's HIPAA BAA, which makes it eligible to carry PHI rather than compliant in itself. Teams also has a wrinkle worth knowing: chat messages live in a hidden folder in each participant's Exchange mailbox and channel messages in the group mailbox, so chat PHI is discoverable under eDiscovery, subject to whatever retention is or is not set, and potentially responsive to a right-of-access request, while staying invisible to your EHR's record management. Note also that [DLP](/resources/glossary/data-loss-prevention-dlp/) for Teams chat and channel messages requires Office 365 E5, Microsoft 365 E5, the Microsoft 365 E5 Information Protection and Governance add-on, or the Microsoft 365 E5 or F5 Compliance add-on. Microsoft 365 E3 and Office 365 E3 do not include it: their DLP covers Exchange, SharePoint and OneDrive, which catches files shared through Teams but not the messages themselves."
      },
      {
        "q": "Is SharePoint HIPAA compliant for storing patient documents?",
        "a": "Yes, SharePoint Online is in scope for the Microsoft BAA and can hold PHI, but the real question behind this one is a document-management question rather than a licensing one. Before storing patient documents you need a decision about whether that content forms part of the designated record set, a permission model that survives inspection, retention matched to the applicable state clinical-record rule rather than to a remembered number, and labeling on the content that warrants restriction. The legal medical record belongs in the EHR."
      },
      {
        "q": "Does Microsoft sign a HIPAA Business Associate Agreement, and how do we request it?",
        "a": "You do not request it. Microsoft's HIPAA BAA is available by default through the Microsoft Online Services Data Protection Addendum to all customers who are covered entities or business associates, so if you hold a current Microsoft 365 agreement you already have it, and Microsoft will not accept a customer's own BAA form. In-scope services include Exchange Online, SharePoint Online, Teams, OneDrive for Business, Entra ID, the Purview portal, Defender for Office 365, Power Apps, Power Automate, Power BI and Microsoft 365 Copilot. Microsoft states plainly that holding the BAA does not ensure your organization's compliance. Separately from Microsoft's paperwork, note that under 45 CFR 160.103 any firm administering a tenant where PHI lives is itself a business associate, so the agreements covering your administrators and consultants are a distinct question from the one covering the platform."
      },
      {
        "q": "Is Microsoft 365 Copilot HIPAA compliant?",
        "a": "Copilot and Copilot Chat are named in the in-scope services under Microsoft's BAA, so coverage is not the issue; configuration is. Copilot enforces existing permissions and applies no judgement about appropriateness, which means years of accumulated over-sharing in SharePoint become retrievable by plain-language question on the day it is switched on. That is a minimum-necessary problem under 164.502(b) rather than a permissions breach. Remediate permissions first, and note that one Copilot licence assigned to one user unlocks SharePoint Advanced Management's governance reporting, so buy that one early and use it as an audit tool."
      },
      {
        "q": "How long does Microsoft 365 keep audit logs, and is that enough for HIPAA?",
        "a": "Purview Audit (Standard) retains audit records for 180 days, which is shorter than any lookback that matters in this industry. Audit (Premium) holds Entra ID, Exchange, OneDrive and SharePoint records for one year by default and leaves other workloads at 180 days unless you write custom retention policies. Ten-year retention needs a separate per-user add-on and a policy created in advance, because Microsoft states the policy is not retroactive and cannot retain logs generated before it existed. Against a six-year documentation obligation under 164.316(b)(2)(i), the default is a gap that cannot be closed after the fact."
      },
      {
        "q": "Do we need Microsoft 365 E5 for HIPAA compliance?",
        "a": "No, and E5 for everyone is usually the wrong purchase for a mid-market provider group. HIPAA does not name a licence tier. What licensing decides is which controls you can operate: DLP for Teams chat and channel messages, the premium eDiscovery features, Insider Risk Management, Communication Compliance and Audit (Premium) all sit above Microsoft 365 E3. The defensible pattern is E5 or targeted add-ons for the population that touches PHI at volume, for privileged administrators and for named custodians, with E3 elsewhere. The counterweight is that premium eDiscovery is licensed for every user whose content you analyze rather than for the people running the case, so an under-licensed population turns into an emergency purchase during a matter."
      },
      {
        "q": "Does HIPAA require six years of medical record retention?",
        "a": "No. HIPAA sets no retention period for medical records at all. 45 CFR 164.316(b)(2)(i) requires six-year retention of Security Rule documentation, meaning policies, procedures, risk analyses, business associate agreements, notices of privacy practices and breach records. Clinical-record retention is set by state law layered with federal program rules, commonly five to ten years from the last date of service, with minors' records typically running to the age of majority plus a term. A multi-state group therefore carries conflicting obligations that a single tenant-wide policy cannot express, which is what adaptive scopes exist for."
      },
      {
        "q": "What is changing in the HIPAA Security Rule update, and when do we need to be ready?",
        "a": "As of now it remains a proposal, and anyone selling you a countdown is inventing one. The notice of proposed rulemaking published in the Federal Register on 6 January 2025 and comments closed on 7 March 2025; HHS has since moved the amendments to its long-term actions agenda under RIN 0945-AA22, and no final rule is currently scheduled, with the agenda's own target date having already moved once. The proposed changes would convert currently addressable controls into mandatory ones, including encryption at rest and in transit, MFA, network segmentation, defined restoration timelines and annual business-associate certification. All of those already appear on cyber-insurance renewal questionnaires, so implement them on their own merits and treat the proposed rule as a reason not to build anything you would later have to undo."
      }
    ],
    "relatedServiceSlugs": [
      "data-governance",
      "ma-tenant-migration",
      "collaboration-enablement",
      "microsoft-365-migration"
    ],
    "relatedTermSlugs": [
      "microsoft-purview",
      "data-loss-prevention-dlp",
      "retention-policy",
      "sensitivity-label",
      "ediscovery-hold",
      "tenant-to-tenant-migration",
      "cross-tenant-identity-mapping"
    ],
    "relatedPageRefs": [
      "/assessments/tenant-migration/",
      "/pricing/tenant-migration-cost/"
    ]
  },
  {
    "slug": "retail",
    "oldSlugs": [
      "/solutions/it-services-solutions-for-retail/"
    ],
    "name": "Retail",
    "metaTitle": "Microsoft 365 and Dynamics 365 for Multi-Store Retail",
    "metaDescription": "Business Central, Teams and Power Platform for multi-location retail: keep the POS you have, get inventory visibility across stores, and see the license limits first.",
    "heroQuestion": "Does a multi-store retailer need Dynamics 365 Commerce or Business Central?",
    "heroAnswer": "Most multi-location specialty retailers are better served by Business Central than by Dynamics 365 Commerce. Commerce lists at $210 per headquarters user per month against Business Central Premium's $110, both US list, plus a separately priced e-commerce add-on and a Commerce Scale Unit sized by device count. Commerce earns that cost only when one pricing, promotion and loyalty engine has to execute identically across physical POS, web and call center on shared inventory.",
    "intro": [
      "Retail Dynamics projects almost never start as software decisions. They start with an event: stores eight through twelve opening on a schedule set last year, a physical inventory that came back short with no explanation, a POS vendor sunsetting the version you run, or a Q4 that broke the spreadsheet the chain was steering by.",
      "The expensive mistake at that moment is scope. A retailer with a visibility problem gets sold a platform replacement that absorbs the POS, the online channel and the customer database, then answers the operations director's week-one question a year and a half later. The reverse error costs as much, and this page names both.",
      "MP365 implements [Business Central](/dynamics-365/business-central/), [Power Platform](/services/power-platform/) and Microsoft 365 for multi-location businesses, including retail, from Vernon, Connecticut. What follows is the license boundaries, product limits and update mechanics that decide whether a retail deployment holds up, including the ones that argue against buying."
    ],
    "challenges": [
      "Store tasks live on paper, a clipboard and a group chat, and head office cannot tell a completed task from a reported one",
      "Each store's POS knows its own stock, the chain-wide number is assembled overnight, and nobody trusts it",
      "Transfers between stores get counted twice by two systems with different cutoffs, so safety stock piles up everywhere",
      "District managers verify execution by driving to stores, so verification cost scales with store count and the ops team does not",
      "Seasonal hires stand on the floor without a login in the highest-revenue weeks, and their accounts are still live in March",
      "Customer identity is split across POS, the email platform and CRM, with three different primary keys and no owner",
      "The POS-to-ERP sync is a per-tenant extension one former employee wrote, untested against the next Business Central release"
    ],
    "blocks": [
      {
        "type": "prose",
        "heading": "Commerce or Business Central, and why the answer is usually Business Central",
        "paragraphs": [
          "Both products are sold under the word retail and they sit on different stacks. Commerce runs on the Finance and Operations platform, and its cost is not one number: a license listed at $210 per user per month, a separately priced e-commerce add-on, and a Commerce Scale Unit sized by device count. Business Central Premium lists at $110 and Essentials at $80. Those are US list prices as of September 2026, and the Business Central figures only took effect on 1 November 2025, so treat every number here as a starting point to re-check rather than a quote.",
          "One detail rarely appears on partner pages: full Commerce user licenses are meant for headquarters staff, while store employees are generally licensed as Operations Device or Operations Activity, and one licensed device can be operated by several people. That is why a headline per-user comparison flatters Commerce as often as it damns it, and why any real comparison has to be built from a role-by-role count rather than headcount.",
          "The decision rule is not a preference. If one pricing, promotion and loyalty engine has to execute identically across physical POS, web and a call center on shared inventory, Commerce is right and Business Central will be rebuilt into a worse version of it. Below that line it is overkill, and the platform-level version of the question sits in [Business Central vs Finance and Operations](/compare/business-central-vs-finance-operations/)."
        ]
      },
      {
        "type": "table",
        "heading": "Five ways to solve multi-store retail, and what each costs you later",
        "headers": [
          "Approach",
          "What it gives you",
          "What it costs you later"
        ],
        "rows": [
          [
            "Dynamics 365 Commerce",
            "One engine for pricing, promotions, loyalty and stock across POS, web and call center, with store staff licensed as devices.",
            "Highest license and implementation cost in the Microsoft retail range, plus a scale unit sized by device count and a separately priced e-commerce add-on."
          ],
          [
            "Business Central plus the POS you already run",
            "One inventory and financial ledger across every location, with the till untouched.",
            "You own an integration. Shopify has a first-party connector; Square, Lightspeed and Clover mean middleware, plus a regression test at every major update."
          ],
          [
            "Business Central plus an ISV retail POS",
            "A single vendor stack with retail features Business Central lacks natively, including matrix items in some products.",
            "A POS replacement, the highest-risk project a multi-store retailer can run, plus an ISV release cadence between you and the platform update schedule."
          ],
          [
            "Power Platform on top of what you have",
            "Task capture, counts and issue reporting on a phone or shared tablet writing to [Dataverse](/resources/glossary/dataverse/), with no ERP project.",
            "It does not fix the ledger; wrong numbers just become visible faster. Re-price it: Power Apps per app licensing is being retired for new customers, so confirm current terms with your licensing channel before you design around it."
          ],
          [
            "Nothing yet",
            "Under roughly five to eight locations with one stockroom and one online channel, a good POS plus solid accounting is enough.",
            "It stops working between eight and twelve stores, usually as transfers become routine, and then you design under pressure inside a peak season."
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Keeping the POS you already have",
        "paragraphs": [
          "If the POS reliably takes money and the pain is visibility, integrate rather than replace. That is counter-revenue advice and it holds: replacement consumes the change budget the visibility work needs, and it solves a reporting problem by rebuilding a transaction system. There is also no first-party Microsoft POS in the Business Central stack, so any Business Central retail story involves an ISV till or the one you already own.",
          "For Shopify the path is first-party. Microsoft's connector is preinstalled for new sign-ups and trials, supports more than one shop each with its own products and locations, syncs items and customers, pushes inventory levels to multiple Shopify locations and prices and discounts, and imports orders from the online store, Shopify POS and B2B. An environment that predates the connector does not receive it automatically, so on an older tenant confirm it is installed before scoping around it.",
          "For Square, Lightspeed, Clover and most vertical POS products there is no first-party connector. The honest answer is middleware or a custom integration: a build with an owner, a test environment and a support path, whether it lands in code or in a [Power Platform](/services/power-platform/) flow on a [premium connector](/resources/glossary/premium-connector/)."
        ]
      },
      {
        "type": "prose",
        "heading": "Store execution runs on tools you already pay for",
        "paragraphs": [
          "The task problem is not laziness. Head office publishes intent by email, PDF or group chat and the store returns a claim, with nothing binding that claim to a record carrying a timestamp, an author and an artifact. The only verification instrument left is a district manager in a car, so verification cost scales with store count while the operations team does not.",
          "The Planner app in Teams with task publishing, Lists and Shifts already sit inside licenses most of these retailers hold, and the frontline experience pins Shifts, Tasks and Approvals for F-license users. Publishing a list to a store and reading completion back by location needs no new purchase, but it does need a team-targeting hierarchy set up once, which makes it a [collaboration enablement](/services/collaboration-enablement/) exercise more than a development one.",
          "The honest part: Microsoft is weaker than the retail point solutions on photo-validated planogram audits, execution scoring and prebuilt SOP libraries. The argument for it is economic, not functional. If merchandising executed identically across a large estate is your real differentiator, buy the specialist tool and integrate it."
        ]
      },
      {
        "type": "prose",
        "heading": "Seasonal staff, shared terminals, and the license lines that move the budget",
        "paragraphs": [
          "Provisioning fails loudly and offboarding fails silently. A new hire without a login complains during the busiest week of the year, so onboarding self-corrects. Nobody is measured on account deletion, so orphaned accounts accumulate in the population with the weakest credential hygiene and the most shared devices.",
          "Here is the boundary that changes proposals. Microsoft Entra ID P1 is included in Microsoft 365 Business Premium, E3, E5, F1 and F3, and gives you Conditional Access and dynamic membership groups, enough to drive access from attributes like store and role. Lifecycle Workflows, the automated joiner, mover and leaver engine, require Microsoft Entra ID Governance: not P1, not P2, not Business Premium, and licensed for every user a workflow processes.",
          "Two more before anyone quotes seats. The Business Central Device license is concurrent, so several people can use one covered device such as a point of sale or stockroom PC, with members added to a security group named exactly Dynamics 365 Business Central Device Users. And the 90-day rule bars only short-term reassignment: inside 90 days of its last assignment a license can move only to cover an absence or a device out of service, and any other reassignment must be permanent. Because termination of employment is an exception, a seat freed when a seasonal worker leaves can be reassigned straight away. What you cannot do is park a seat and pass it between two people each quarter."
        ]
      },
      {
        "type": "steps",
        "heading": "How the work sequences",
        "steps": [
          {
            "name": "Name the event and the number it has to move",
            "description": "Every project here has a trigger: a store opening plan, a failed count, a POS sunset, an acquisition. Name it, and name the operational number that has to change as a result."
          },
          {
            "name": "Inventory the systems, the keys and the integrations",
            "description": "List every system holding stock, transactions or a customer record, with the key it uses and how data leaves it. This is where the nightly export a former employee wrote gets found."
          },
          {
            "name": "Decide the platform, then write down what you are not buying",
            "description": "Commerce or Business Central, Essentials or Premium, ISV till or incumbent. Write the exclusions down explicitly, because the second invoice a finance director fears is always for something nobody named."
          },
          {
            "name": "Stand up the ledger before the integrations",
            "description": "Get locations, item master, transfer orders and counting working on clean data before anything is wired to them. Integrating into an unsettled ledger produces drift nobody can attribute, and drift teaches staff to distrust the number."
          },
          {
            "name": "Integrate the channels, then build the regression pack",
            "description": "Connect the online channel and the POS, and write the regression pack alongside the integration rather than after it. That pack decides whether a break appears in a sandbox or on a Saturday in December."
          },
          {
            "name": "Land store execution and identity together",
            "description": "Task publishing, Shifts and the counting app go live with the access model that provisions and deprovisions staff by store and role. A task published where half the staff have no login looks like a store that ignored it."
          }
        ]
      },
      {
        "type": "list",
        "heading": "Where retail projects on this stack actually fail",
        "items": [
          "Replacing a POS that worked because the demo included a till. The visibility problem was solvable without touching the transaction system.",
          "Buying Premium on the assumption that Premium must be better. It adds Service Order Management and Manufacturing to Essentials and nothing else, which most specialty retailers never open.",
          "Discovering after go-live that Team Members cannot create a sales order or an invoice. That license creates quotes, not orders.",
          "Granting SUPER to a Team Members user and expecting it to work. In Business Central entitlements always override permissions.",
          "Buying a customer data platform before anyone with authority has declared which system owns customer identity and what the merge key is. The blocker is governance, and buying early just presents the same ambiguity better.",
          "Treating style, color and size handling as a configuration detail. Business Central has item variants but no native style, color and size matrix or size-curve handling, and deep size curves deserve an honest look at purpose-built systems."
        ]
      },
      {
        "type": "prose",
        "heading": "Business Central is not upgrade-free, and the retail consequence is specific",
        "paragraphs": [
          "Every partner in this market says evergreen cloud, no more upgrades. The mechanism is narrower. Business Central online ships two major updates a year, in April and October. Each has a five-month update period the administrator can schedule within, then a one-month grace period, then an enforced period during which extensions that cause the update to fail may be automatically uninstalled so it can succeed. Data is retained; the extension is not running. For a retailer whose POS sync is a per-tenant extension, the platform can switch off an untested integration on a date you did not choose.",
          "The Shopify case makes it dated and concrete. Shopify ships a new Admin API version quarterly and supports each for twelve months, while Business Central adopts a new API version only at a major release, and Microsoft's documentation states the timelines do not align. Update readiness is a standing discipline with a cost line, which is why a [Business Central readiness assessment](/assessments/business-central-readiness/) belongs before the integration design is frozen."
        ]
      },
      {
        "type": "prose",
        "heading": "Compliance the operations director owns without knowing it",
        "paragraphs": [
          "Predictive scheduling surprises people because obligations attach per location while scheduling happens centrally, from one template and one manager habit. As of 2026 Oregon has the only statewide law, covering retail, hospitality and food service employers with 500 or more employees worldwide and requiring a written schedule at least 14 calendar days ahead. A number of city and county jurisdictions have their own rules, and the New York City retail rule bites far lower, at 20 or more retail employees in New York City, with 72 hours' notice and a ban on on-call shifts. Read those two thresholds carefully, because they are counted differently: Oregon's 500 is worldwide headcount, New York City's 20 is retail employees inside the city. A chain can be exempt across most of its footprint and liable in two stores.",
          "Microsoft Teams Shifts is the evidence layer for that, not a compliance engine. It gives one schedule of record, with Shifts events written to the Microsoft 365 audit log from the point auditing was turned on. Know the limits Microsoft documents: Shifts keeps no immutable copy of the schedule, a manager can edit a past schedule at any time, and Shifts does not yet support retention policies or eDiscovery content search. The audit log is the evidence trail, not the schedule itself. It also does not calculate predictability pay, does not track jurisdiction-specific notice windows, and does not support guests, so guest-account workers cannot be scheduled in it at all.",
          "Two other regimes touch the platform decision. PCI DSS v4.x future-dated requirements became mandatory on 31 March 2025, and note the version number: v4.0 itself retired on 31 December 2024 and v4.0.1 is the version in force. Those requirements include multi-factor authentication for all access into the cardholder data environment rather than remote access only. The revised SAQ A published in January 2025 dropped requirements 6.4.3, 11.6.1 and the 12.3.1 targeted risk analysis supporting them from its scope while adding a new eligibility criterion, which many summaries still state backwards. CCPA counts consumers, not customers: a retailer is in scope at 100,000 California consumers or households whose personal information it buys, sells or shares in a year, a number that ad-tech sharing on a website reaches long before the till does, or on gross annual revenue alone, $26,625,000 for the 2026 compliance year. A retailer who cannot enumerate the systems holding a customer record cannot honor a deletion request, which is where [data governance](/services/data-governance/) stops being abstract."
        ]
      },
      {
        "type": "prose",
        "heading": "Franchise groups and multi-entity chains",
        "paragraphs": [
          "In a franchise network the technology question arrives second. The franchisor wants standardization and consolidated reporting, the franchisee owns the profit and loss and resents a mandated system, and data-sharing rights between them are a contract question before an architecture one. A rollout without that settled in writing stalls at the first franchisee who declines to share transaction detail.",
          "One platform limit matters early where each entity is separately incorporated: a Business Central environment supports a maximum of 300 companies. Past that number, or wherever franchisees insist on holding their own tenants, you are running more than one environment and the group number has to be assembled outside the ledger. Consolidation usually belongs in the reporting layer anyway, which makes it a [data and analytics](/solutions/data-analytics/) decision as much as a [Dynamics 365](/services/dynamics-365/) one."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Do we have to replace our POS to get inventory visibility across stores?",
        "a": "No, and in most cases you should not. If the POS reliably takes money and the pain is visibility, make Business Central the inventory and financial ledger and integrate the till to it. Replacement is the highest-disruption project a multi-location retailer can run and it eats the budget the visibility work needs. Replace the till when it is failing, being sunset by its vendor, or blocking a channel you have to open."
      },
      {
        "q": "Is Business Central or Dynamics 365 Commerce right for a twelve-store retailer?",
        "a": "Business Central, in almost every case at that size. Commerce lists at $210 per user per month against Business Central Premium's $110, and also carries a separately priced e-commerce add-on plus a Commerce Scale Unit sized by device count. Those are US list prices as of September 2026 and should be re-checked before they go into a business case. Commerce earns that cost only when one pricing, promotion and loyalty engine must execute identically across POS, web and call center on shared inventory."
      },
      {
        "q": "Does Business Central integrate with Square or Lightspeed?",
        "a": "Not through a first-party connector. Shopify is the exception: Microsoft builds that one, it is preinstalled for new sign-ups and trials, and it handles items, customers, inventory levels to multiple Shopify locations, prices, discounts and orders from the online store, Shopify POS and B2B. For Square, Lightspeed, Clover and most vertical POS products the path is middleware or a custom integration, which is a build with an owner and a test path."
      },
      {
        "q": "Do we need Business Central Premium or is Essentials enough?",
        "a": "Essentials is enough for most specialty retailers. Premium adds exactly two things, Service Order Management and Manufacturing, and a multi-location apparel, homeware or beauty retailer opens neither. The common exception is light assembly, or repair and alteration work run as service orders, and price that exception carefully: Essentials and Premium full users cannot be mixed in one environment, so one repair desk moves every full user in that environment to Premium unless you split environments. Current list pricing sits on the [Dynamics 365 licensing](/pricing/dynamics-365-licensing/) page and scope drivers on [Business Central implementation cost](/pricing/business-central-implementation-cost/)."
      },
      {
        "q": "How do we license shared store terminals and seasonal staff?",
        "a": "Use the Business Central Device license for shared terminals rather than named seats. It is concurrent, so several people can use one covered device such as a point of sale or stockroom PC, and users go into a security group named exactly Dynamics 365 Business Central Device Users. Two traps: a Device user cannot be the first person to sign in to a new tenant, and short-term license shuffling is restricted, so inside 90 days of its last assignment a license can move only to cover an absence or a device out of service, and any other reassignment must be permanent. A seat freed when a seasonal worker's employment ends can be reassigned immediately."
      },
      {
        "q": "Can Microsoft Teams replace our store task checklists?",
        "a": "For most retailers yes, at no additional license cost. The Planner app in Teams with task publishing, Lists and Shifts are already in the licenses these organizations hold, and the frontline experience pins the relevant apps for F-license users. Publishing needs a team-targeting hierarchy configured once rather than a new purchase. The trade is real: Microsoft is weaker than dedicated retail execution tools on photo-validated planogram audits, scoring and prebuilt SOP libraries. If that is your differentiator, buy the specialist tool and integrate it."
      },
      {
        "q": "Does Microsoft Shifts keep us compliant with predictive scheduling laws?",
        "a": "No. Shifts writes its events to the Microsoft 365 audit log from the point auditing is enabled, which is the evidence layer a compliance process needs, but the schedule itself is not the evidence: Shifts keeps no immutable copy, schedules stay editable after the fact, and it does not yet support retention policies or eDiscovery content search. It also does not calculate predictability pay, does not track jurisdiction-specific notice windows, and does not flag that changing a shift in New York City inside 72 hours creates an obligation. Exposure in those jurisdictions needs a workforce management product or a documented legal process on top."
      },
      {
        "q": "We have six stores. Are we too early for an ERP project?",
        "a": "Probably, and it is worth hearing before you spend. Under roughly five to eight locations with one stockroom and a single online channel, a good POS plus solid accounting plus disciplined process will serve you, and an implementation at that scale consumes management attention out of proportion to the return. The signal to start is structural: multi-store transfers becoming routine, a physical inventory you cannot explain, or a second channel with its own stock pool."
      }
    ],
    "relatedServiceSlugs": [
      "dynamics-365",
      "power-platform",
      "collaboration-enablement",
      "data-governance"
    ],
    "relatedTermSlugs": [
      "dataverse",
      "premium-connector",
      "power-platform-environment"
    ],
    "relatedPageRefs": [
      "/dynamics-365/business-central/",
      "/compare/business-central-vs-finance-operations/",
      "/pricing/dynamics-365-licensing/",
      "/assessments/business-central-readiness/",
      "/pricing/business-central-implementation-cost/"
    ]
  }
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}

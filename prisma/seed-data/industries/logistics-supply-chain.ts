import type { Industry } from "../industries";

export const industry: Industry = {
  slug: "logistics-supply-chain",
  oldSlugs: [],
  name: "Logistics & Supply Chain",
  metaTitle: "Business Central for 3PL, Freight and Distribution",
  metaDescription:
    "Where Business Central runs a warehouse well, where it stops for a 3PL, and when a 3PL vertical or Supply Chain Management is the honest answer. EDI limits included.",
  heroQuestion: "Can Business Central run a 3PL, freight or distribution operation without a separate WMS or TMS?",
  heroAnswer:
    "For a distributor running its own warehouses, usually yes. Business Central Essentials includes bins, zones, directed put-away and pick, and warehouse receipts and shipments. For a 3PL it usually does not on its own: standard Business Central has no inventory owner concept, no storage or activity-based client billing, and no EDI translator. Those gaps are closed by a 3PL vertical built on Business Central or by Supply Chain Management, not by custom code.",
  intro: [
    "Logistics ERP conversations tend to start from the wrong question. A distributor asks whether Business Central has a WMS, gets told yes, and signs. A 3PL asks the same question, gets the same answer, and discovers in the second month of the project that the warehouse module was never the problem. The problem is that the goods on the racking belong to forty different customers, each on a different contract, each expecting a monthly invoice built from pallets stored, cartons picked and labels applied, and each sending orders by EDI on their own schedule.",
    "Those are two different businesses that share a building type. A wholesale distributor owns its inventory, sells it, and needs the warehouse to pick accurately and the ledger to value stock correctly. A 3PL owns none of the inventory, sells space, labour and time, and needs the system to know whose goods are where and to turn every movement into a billable line. Freight forwarders and carriers add a third shape again: shipments, legs, rates and carrier invoices rather than stock. A platform decision that does not start by naming which of these you are is a decision made by the partner's product list.",
    "MP365 does project-based [Dynamics 365](/services/dynamics-365/) implementation work for distributors, 3PLs and logistics businesses in Connecticut, New England and across the US. This page covers the decisions that come before configuration: whether [Business Central](/dynamics-365/business-central/) alone fits, when a 3PL vertical or [Supply Chain Management](/dynamics-365/supply-chain/) is the right answer, how EDI and scanning volume meet published platform limits, and what changes when a logistics arm is carved out or an acquired distributor arrives on another ERP. Cost drivers live on [Business Central implementation cost](/pricing/business-central-implementation-cost/)."
  ],
  challenges: [
    "Client inventory tracked in a spreadsheet beside the ERP, because the ERP assumes every pallet on hand belongs to you",
    "Storage and handling invoices built by hand each month from warehouse exports, so billing lags the work and leaks unbilled activity",
    "Onboarding a new 3PL customer takes weeks because every trading partner's EDI map is a separate project",
    "Pickers on paper pick lists that a supervisor keys back in, so on-hand is wrong until the end of the shift",
    "An integration that handled one customer's order volume and starts returning intermittent errors at peak season",
    "Customers asking for a portal or a daily inventory feed that nobody can produce without a report request to IT",
    "An acquired distributor running a different ERP and a different Microsoft 365 tenant, with a transition services agreement clock already running"
  ],
  blocks: [
    {
      type: "prose",
      heading: "Which Microsoft product your operation actually fits",
      paragraphs: [
        "Ask one question first. Do you own the inventory in your buildings? If you do, you are a distributor, and Business Central's warehouse functionality is more capable than most buyers assume. Microsoft documents six warehouse complexity levels, from posting receipts and shipments straight from orders up to what it calls directed put-away and pick: bins grouped into zones, warehouse classes that keep frozen or hazardous goods in the right place, bin ranking, bin capacity by quantity, cubage and weight, replenishment from bulk to pick bins, and first-expired-first-out picking for lot-tracked items. All of that sits in the Essentials licence. Premium adds only service order management and manufacturing, so a pure distributor should not be paying for it.",
        "If you do not own the inventory, you are a 3PL, and the answer changes. Standard Business Central has no inventory owner dimension: every item on hand is valued as the company's own stock. It also has no concept of a storage contract, a handling rate card, or a billing run that turns warehouse activity into client invoices. Supply Chain Management does have an **Owner inventory dimension**, which Microsoft uses for vendor-owned consignment stock and for shared warehouses serving other legal entities, but Microsoft does not document a client storage and activity billing engine in either product. For a 3PL, billing is the product, and it comes from a vertical solution or it gets built.",
        "Freight forwarders, brokers and asset carriers are a third case. Supply Chain Management includes transportation management with rate and route engines, load building and carrier invoice reconciliation, aimed at a shipper planning its own inbound and outbound freight. Business Central has shipping agents and agent services, not a TMS. A forwarder whose core record is a multi-leg shipment with customs milestones is usually better served by a forwarding-specific product integrated to the finance system than by bending either ERP. [Business Central vs Finance and Operations](/compare/business-central-vs-finance-operations/) works through the broader platform split."
      ]
    },
    {
      type: "table",
      heading: "Decisions made before configuration, and what each one costs later",
      headers: ["Decision", "What it gives you", "What it costs you later"],
      rows: [
        [
          "Business Central Essentials with directed put-away and pick, for a distributor",
          "Zones, bins, bin ranking, warehouse classes, replenishment and FEFO at the Essentials list price of $80 per user per month, with no manufacturing or service modules paid for and unused.",
          "Handheld scanning is a developer framework rather than a finished RF application. Every scan-driven warehouse process needs an AL extension or a third-party mobile WMS, and that code has to survive two major updates a year."
        ],
        [
          "A 3PL vertical built on Business Central",
          "Multi-client inventory, contract and activity billing, customer portals and EDI message handling on the same ledger as finance, maintained by a vendor whose whole business is logistics.",
          "A second vendor on your critical path. Their release cadence has to track Business Central's, their partner network in the US may be thinner than in Europe, and leaving later means leaving both at once."
        ],
        [
          "Supply Chain Management for the warehouse and transport operation",
          "An enterprise WMS with the Warehouse Management mobile app, owner inventory dimension, transportation management, load building and freight reconciliation, all Microsoft-built.",
          "List price of $210 per user per month against $80 for Business Central Essentials, a longer implementation, and still no native 3PL client billing. It earns that cost for high-volume, multi-site or automation-heavy warehouses, not for a single building."
        ],
        [
          "Supply Chain Management in warehouse management only mode beside another ERP",
          "Microsoft's WMS running in a dedicated legal entity, exchanging lightweight inbound and outbound shipment orders with an external ERP that keeps orders and finance.",
          "Two platforms, two licence estates and an integration to own. Microsoft documents gaps in this mode, including no catch weight items on shipment orders and no charges or direct invoicing on inbound or outbound shipment orders."
        ],
        [
          "Building 3PL billing yourself in AL",
          "Exactly the rate logic your contracts contain, with no vendor dependency.",
          "The most expensive option by year three. Billing rules change with every new customer contract, and a bespoke engine becomes the thing nobody wants to touch during an upgrade."
        ]
      ]
    },
    {
      type: "steps",
      heading: "How the work sequences",
      steps: [
        {
          name: "Operating model and product fit",
          description: "Establish whether you own the inventory, whether you bill for storage and activity, whether your core record is an order or a shipment, and how many customers send EDI. Those four answers decide between Business Central alone, a 3PL vertical, and Supply Chain Management. A [Business Central readiness assessment](/assessments/business-central-readiness/) is where this normally lands."
        },
        {
          name: "Warehouse model on paper",
          description: "Locations, zones, bin types, bin ranking, warehouse classes and the put-away template, drawn against the real building before anyone opens a configuration page. Bin capacity by weight and cubage only works when item dimensions and units of measure are correct, so the item master audit starts here."
        },
        {
          name: "Billing model, if you are a 3PL",
          description: "Every active customer contract reduced to billable events: pallet in, pallet stored per day or week, carton picked, label applied, special project hours. If a contract cannot be expressed as events and rates, it will be billed by hand forever, so this is where the commercial team earns its seat on the project."
        },
        {
          name: "Integration and EDI design",
          description: "Each trading partner gets an owner, a message set, a volume estimate and an interval. High-volume flows are designed around the published API limits from the start, with batching and more than one integration identity. Custom connectors that outgrow a standard pattern belong with [application modernization](/services/application-modernization/)."
        },
        {
          name: "Scanning and mobile",
          description: "Decide which warehouse steps are scan-driven, on which Android devices, and under which licence. Shared handhelds usually belong on the Business Central Device licence rather than named user seats. Build and test the scanning flows in a sandbox with real labels and real barcode formats, not a demo item."
        },
        {
          name: "Pilot against last month's volume",
          description: "Replay a real month through the configured system: the short-shipped order, the customer who sent the same 940 twice, the returns that arrived without paperwork, the month-end billing run. Warehouse leads drive it. The point is to find where people would reach for the spreadsheet, while there is still time to fix it."
        },
        {
          name: "Cutover and the first billing cycle",
          description: "Physical count by bin, open order conversion, EDI partners switched in a planned sequence rather than all at once, and a named rollback point. For a 3PL the project is finished when the first month's client invoices go out complete and on time, so support is planned for that run specifically."
        }
      ]
    },
    {
      type: "list",
      heading: "Where logistics ERP projects actually fail",
      items: [
        "**A 3PL buys a distributor's system.** The warehouse module demos well, the owner and billing gaps surface in design, and the project quietly becomes a custom billing build that nobody priced.",
        "**Scanning is assumed to be included.** Business Central's mobile app supports camera scanning and dedicated Android scanners, but Microsoft documents it as capability for developers to build on. Nobody scoped the build, so the warehouse runs on paper for the first six months.",
        "**EDI partners are cut over on the same weekend.** One bad map stops one customer's orders. Twenty maps switched together stop the building.",
        "**The integration is load-tested at average volume.** Peak season arrives, the per-user API rate limit is reached, and throttling shows up as intermittent failure that the team blames on the network for weeks.",
        "**Item dimensions are left blank.** Bin capacity, cubage-based put-away and load building all depend on them, so the system suggests bins the pallet will not fit into and the floor stops trusting the suggestions.",
        "**Billing is left to phase two.** It is the revenue line. A 3PL that goes live without it has moved its biggest manual process into a new system without automating it."
      ]
    },
    {
      type: "prose",
      heading: "EDI volume and the API limits that decide the architecture",
      paragraphs: [
        "Logistics runs on EDI. A 3PL typically exchanges the warehouse set with each depositor: the X12 940 warehouse shipping order in, the 945 warehouse shipping advice out, 943 and 944 for stock transfers, 947 for inventory adjustments, and the 856 advance ship notice where the 3PL ships on the customer's behalf. Business Central does not translate X12 itself. That work sits with an EDI provider or integration platform, which then posts documents into Business Central through its APIs, and those APIs have published limits.",
        "Business Central online enforces its OData limits per user. Microsoft publishes 6,000 requests in a rolling five-minute window, 5 requests processed concurrently, 100 simultaneous connections including queued requests, and a queue of 95. Exceeding the connection or rate limit returns HTTP 429; a queued request that waits eight minutes returns HTTP 503. A single request is cut off at eight minutes with HTTP 408, a $batch request is capped at 100 operations, and an environment can hold at most 200 webhook subscriptions. The older per-environment rate of 600 requests per minute in production is still listed, but Microsoft states it was never strictly enforced and has been replaced by the per-user limits, which apply to service principals in exactly the same way.",
        "The practical rule follows. An integration that posts every EDI line, every scan and every tracking event as its own call works for one customer in March and fails for thirty customers in November. Batch at the integration layer, post documents rather than lines, and spread load across more than one integration identity, which is Microsoft's own documented mitigation. Design this before the first trading partner is mapped, not after the first peak."
      ]
    },
    {
      type: "prose",
      heading: "Scanning, handhelds and the licence behind them",
      paragraphs: [
        "Business Central's barcode support is real and narrower than the sales demo implies. From 2023 release wave 2 the mobile app can scan with a device camera, and from 2024 release wave 1 it can take input from dedicated Android scanners such as Zebra or Datalogic, which must run Android 11 or later. Microsoft describes all three supported scenarios as things developers add in AL, and it lists QR, Data Matrix, Code 128, EAN, UPC and PDF 417 among the supported formats. What it does not ship is a finished receive, put-away, pick and ship application for a warehouse floor. Plan for an extension, a third-party mobile WMS, or a vertical that includes one.",
        "Supply Chain Management is different here. Its Warehouse Management mobile app is a Microsoft product with configurable menu items and GS1 barcode support, and it is one of the strongest reasons a high-volume or automated warehouse moves up a product. For Business Central, shared handhelds usually belong on the Device licence, which Microsoft documents as letting multiple users sign in to a covered device such as a warehouse device, with users placed in a security group that must be named exactly Dynamics 365 Business Central Device Users. [Dynamics 365 licensing](/pricing/dynamics-365-licensing/) covers the tiers."
      ]
    },
    {
      type: "prose",
      heading: "Carve-outs, acquired distributors and the second tenant",
      paragraphs: [
        "Logistics businesses change hands in pieces. A manufacturer sells its distribution arm, a private equity platform buys three regional 3PLs in two years, or a distributor acquires a competitor running NetSuite, Sage or an old NAV database. Each of those is two projects on two clocks: the ERP, and the Microsoft 365 tenant that email, Teams, SharePoint and identity live in.",
        "In a [carve-out](/resources/glossary/carve-out/) the tenant clock usually runs first, because the transition services agreement sets a date and the seller wants its users off its tenant. [Day-1 coexistence](/resources/glossary/day-1-coexistence/) keeps the warehouse invoicing and customers emailing while both sides are still separating, and the ERP cutover should be sequenced against the [TSA exit](/resources/glossary/tsa-exit/) date rather than discovered alongside it. The tenant work sits under [M and A tenant migration](/services/ma-tenant-migration/).",
        "For an acquired distributor on another ERP, the default is to consolidate at the ledger first and move operations second. Business Central consolidation can bring in business units on different charts of accounts and even other accounting software, which buys time to plan the warehouse cutover properly. Legacy Dynamics estates have their own routes: [GP to Business Central](/migrations/dynamics-gp-to-business-central/) and [NAV to Business Central](/migrations/dynamics-nav-to-business-central/)."
      ]
    },
    {
      type: "prose",
      heading: "Visibility, traceability and the date food distributors should know",
      paragraphs: [
        "Most visibility requests are a reporting problem before they are a platform problem. Microsoft ships free Power BI apps for Business Central covering inventory and inventory valuation, among other areas, each made of a connector app and a Power BI template app; the only requirement is a paid Power BI licence for the people viewing them. Customer-facing inventory feeds and portals are a different job, and they should read from a reporting layer rather than hit the ERP's API on every refresh. That work sits with [data analytics](/solutions/data-analytics/).",
        "For anyone holding food, the FDA's Food Traceability Rule under 21 CFR Part 1 Subpart S applies to those who hold foods on the Food Traceability List as well as those who make them. Shipping and receiving are critical tracking events with key data elements attached, and records must be produced to FDA within 24 hours of a request, with an electronic sortable spreadsheet required in some circumstances. Congress directed FDA not to enforce the rule before 20 July 2028. That is runway, not a reason to wait: lot tracking by bin is a warehouse design decision, and it is far cheaper to set up at implementation than to retrofit."
      ]
    },
    {
      type: "list",
      heading: "When we would tell you not to do this",
      items: [
        "**You are a 3PL and someone is proposing Business Central with custom billing.** Buy a vertical built for 3PL billing, or choose a platform that has one. Custom billing code is the most reliable way to build a system no future partner will touch.",
        "**You are a single-building distributor being sold Supply Chain Management.** At $210 against $80 per user per month list, plus a longer implementation, the headroom argument rarely survives a three-year comparison. Business Central Essentials with directed put-away and pick covers most single-site operations.",
        "**Your core business is freight forwarding.** Multi-leg shipments, house and master bills, and customs milestones belong in a forwarding system. The ERP should receive the financial result, not try to be the operational record.",
        "**Your warehouse problem is process discipline.** If cycle counts are skipped and pickers override locations, a new WMS will record that accurately and fix none of it. Price and staff it as a change project with a software component.",
        "**Your current platform works and your people use it properly.** A working WMS integrated to an older ERP is not an emergency. Replacing both at once doubles the risk for a benefit that often lands on only one side.",
        "**You need automation integration this year.** Conveyor, sortation and goods-to-person systems want a WMS that the automation vendor already integrates with. Confirm that list before choosing a platform, not after."
      ]
    }
  ],
  faqs: [
    {
      q: "Does Business Central have a warehouse management system?",
      a: "Yes, and it is more capable than its reputation. The directed put-away and pick level supports zones, bin types, bin ranking, warehouse classes, bin capacity by quantity, cubage and weight, replenishment and FEFO picking, all within the Essentials licence. What it does not ship is a finished handheld application or any concept of client-owned inventory. For a distributor running its own buildings it is usually enough; for a 3PL it is the foundation rather than the answer. See [Business Central](/dynamics-365/business-central/)."
    },
    {
      q: "Can Business Central manage inventory for multiple 3PL clients?",
      a: "Not in standard form. Standard Business Central has no inventory owner dimension, so everything on hand is treated as the company's own stock, and it has no storage or activity billing. 3PL verticals built on Business Central add both. Boltrics 3PL Dynamics is one example listed on Microsoft AppSource, covering warehouse, transport, billing, a customer portal and message exchange. Check any vertical's US partner coverage and release cadence before committing."
    },
    {
      q: "Does Business Central support handheld barcode scanners?",
      a: "Yes, with development. The Business Central mobile app supports camera scanning from 2023 release wave 2, and from 2024 release wave 1 it accepts input from dedicated Android scanners such as Zebra and Datalogic running Android 11 or later. Microsoft documents all three scanning scenarios as capabilities developers add in AL, so the receive, put-away and pick flows your floor uses have to be built or bought. Shared handhelds can be licensed with the Business Central Device licence rather than a named seat per picker."
    },
    {
      q: "Can Business Central handle our EDI volume?",
      a: "Usually, if the integration is designed for it. Business Central does not translate X12 itself, so an EDI provider or integration platform posts documents through the API. The enforced limits are per user: 6,000 OData requests per rolling five minutes, 5 concurrent requests and 100 connections, returning HTTP 429 when exceeded, with $batch capped at 100 operations. Post whole documents rather than lines, batch at the integration layer and spread load across more than one integration identity."
    },
    {
      q: "When is Supply Chain Management the right choice for a logistics business?",
      a: "When the warehouse is high volume, multi-site or automated, when transportation planning is core to the operation, or when you need an owner inventory dimension in a Microsoft-built product. [Supply Chain Management](/dynamics-365/supply-chain/) includes the Warehouse Management mobile app, transportation management with rate and route engines, load building and freight reconciliation. It lists at $210 per user per month against $80 for Business Central Essentials, and it still has no native 3PL client billing."
    },
    {
      q: "Can we use Microsoft's warehouse system with a different ERP?",
      a: "Yes. Supply Chain Management's warehouse management only mode runs the WMS in a dedicated legal entity and exchanges inbound and outbound shipment orders with an external ERP or order management system, which keeps orders and finance. Microsoft documents what it does not support, including catch weight items on shipment orders and charges or direct invoicing on those orders, so read that list against your processes before designing around it."
    },
    {
      q: "Does the FDA food traceability rule affect a warehouse?",
      a: "Yes, if you hold foods on the Food Traceability List. The rule at 21 CFR Part 1 Subpart S covers persons who hold those foods, treats shipping and receiving as critical tracking events with required key data elements, and requires records to be produced to FDA within 24 hours of a request. Congress directed FDA not to enforce it before 20 July 2028. Lot tracking by bin is cheapest to design in at implementation."
    },
    {
      q: "We just acquired a distributor on a different ERP. What moves first?",
      a: "Usually the tenant and the ledger, then the warehouse. Business Central consolidation can take in business units on different charts of accounts and other accounting software, which gives group reporting without rushing an operational cutover. The Microsoft 365 tenant often has its own deadline in the purchase agreement or a transition services agreement. [M and A tenant migration](/services/ma-tenant-migration/) covers that side, and a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) should be sequenced against the ERP cutover rather than run in parallel by accident."
    }
  ],
  relatedServiceSlugs: ["dynamics-365", "ma-tenant-migration", "power-platform", "application-modernization"],
  relatedTermSlugs: ["carve-out", "tsa-exit", "day-1-coexistence", "tenant-to-tenant-migration", "cutover-migration"],
  relatedPageRefs: [
    "/dynamics-365/business-central/",
    "/dynamics-365/supply-chain/",
    "/compare/business-central-vs-finance-operations/",
    "/pricing/business-central-implementation-cost/",
    "/pricing/dynamics-365-licensing/",
    "/assessments/business-central-readiness/"
  ],
  proofMetrics: [
    { value: "20+ yrs", label: "of Microsoft consulting" },
    { value: "1 business day", label: "reply from a senior engineer" },
    { value: "6,000", label: "Business Central OData requests per user per 5 minutes" },
    { value: "Vernon, CT", label: "serving New England and the US" }
  ],
  triggers: [
    {
      title: "A new 3PL customer is about to go live",
      body: "Their EDI maps, rate card and inventory are landing on a system that tracks client stock in a spreadsheet. Every new customer makes the monthly billing run longer.",
      topic: "3PL billing & multi-client inventory"
    },
    {
      title: "The warehouse is still on paper",
      body: "Pick lists are printed, confirmed by hand and keyed back in, so on-hand is wrong until the end of the shift. You need scanning without building a fragile custom app.",
      topic: "Warehouse scanning & WMS fit"
    },
    {
      title: "Peak season broke the integration",
      body: "Orders or EDI documents started failing intermittently at volume. The cause is often a published API limit rather than the network.",
      topic: "EDI & integration volume"
    },
    {
      title: "An acquisition or carve-out just closed",
      body: "A distributor arrived on another ERP and tenant, or your logistics arm is separating on a transition services clock. The ERP and tenant timelines need sequencing now.",
      topic: "Acquisition or carve-out"
    }
  ],
  formTopics: [
    "3PL billing & multi-client inventory",
    "Warehouse scanning & WMS fit",
    "EDI & integration volume",
    "Acquisition or carve-out",
    "Legacy ERP replacement"
  ],
  subSectors: [
    "Third-party logistics (3PL)",
    "Wholesale distribution",
    "Freight forwarding and brokerage",
    "Cold chain and food distribution",
    "E-commerce fulfilment",
    "Regional trucking and carriers"
  ],
  relatedIndustrySlug: "manufacturing",
  tool: "cost",
  ctaHeading: "Find out whether Business Central fits your warehouse",
  ctaSubheading:
    "Tell us whether you own the inventory, how you bill, and how many trading partners send EDI. A senior engineer will tell you which product fits and where the gaps are.",
  sidebarCta: {
    tag: "Logistics",
    title: "3PL or distributor?",
    body: "The answer decides the platform. We will map your billing, scanning and EDI needs against what Business Central does natively.",
    ctaText: "Talk to a Dynamics lead"
  }
};

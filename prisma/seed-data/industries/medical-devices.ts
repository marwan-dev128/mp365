import type { Industry } from "../industries";

export const industry: Industry = {
  slug: "medical-devices",
  oldSlugs: [],
  name: "Medical Devices",
  metaTitle: "Business Central and Dynamics 365 for Medical Devices",
  metaDescription:
    "Can Business Central or Dynamics 365 be validated for 21 CFR Part 11 and the QMSR? What Microsoft covers, what it leaves to you, and when a specialist ERP is cheaper.",
  heroQuestion: "Can Business Central or Dynamics 365 be validated for FDA 21 CFR Part 11 and the QMSR?",
  heroAnswer:
    "Yes, but validation is always your job, not Microsoft's. Microsoft states that no certification exists for Part 11 and that customers building FDA-regulated applications are responsible for meeting FDA requirements. Business Central gives you lot and serial traceability and, since 2026 release wave 1, quality inspections, but no built-in electronic signature. Supply Chain Management has one. A small device maker with little ERP history is often better served by a specialist validated ERP.",
  intro: [
    "Most medical device ERP conversations start with a question nobody on the sales call can answer honestly: is it Part 11 compliant? Neither product is, because no software is. Part 11 compliance is a property of a validated system in use, meaning the configuration, the procedures, the people, the records and the evidence that ties them together. Microsoft's own compliance page says so plainly: no certification exists for 21 CFR Part 11, its SOC and ISO 27001 audit reports can feed your risk analysis, and **customers who build and deploy applications subject to FDA regulation are responsible for ensuring those applications meet FDA requirements**.",
    "The regulatory ground also moved this year. FDA's Quality Management System Regulation took effect on 2 February 2026, amending 21 CFR 820 to incorporate ISO 13485:2016 by reference. The device master record, device history record and design history file are no longer defined terms in Part 820, although the records behind them are still required. FDA has also stopped inspecting with QSIT, and it can now inspect management review, internal audit and supplier audit reports that the old 820.180(c) exception used to shield. A paper or spreadsheet quality system that survived the old inspection model is being looked at differently now.",
    "MP365 is a Microsoft consulting firm in Vernon, Connecticut, founded in 2005, doing project-based [Dynamics 365](/services/dynamics-365/), [Power Platform](/services/power-platform/) and [data governance](/services/data-governance/) work for mid-market organizations across Connecticut, New England and the US. This page covers the decisions a small or mid-sized device manufacturer or contract manufacturer should make before anyone configures anything: which product fits, what Microsoft actually covers, what the update cadence does to a validated state, and when a specialist validated ERP is simply the cheaper answer."
  ],
  challenges: [
    "Device history records assembled from paper travellers, a spreadsheet and the ERP, and reconciled by hand before every release decision",
    "An ERP change log that was never switched on, so nobody can show who changed a routing, a BOM or an inspection limit, or when",
    "Approvals captured as an email reply or a Power Automate click, with no signature meaning and no printed name in the record itself",
    "A validation package written once at go-live and never touched again, while the SaaS platform underneath has been updated every month since",
    "Controlled documents in a SharePoint library that anyone in the Members group can edit, move or delete",
    "Complaint and service records for the installed base living in a helpdesk tool with no link to the UDI, the lot or the device record",
    "An acquisition that brought a second quality system, a second tenant and a decade of design records with no agreed retention plan"
  ],
  blocks: [
    {
      type: "prose",
      heading: "What each Microsoft product actually gives a device manufacturer",
      paragraphs: [
        "[Business Central](/dynamics-365/business-central/) covers the traceability core well. Item tracking handles lot and serial numbers with expiration dates, item tracing runs forward and backward through production and sales, and the Quality Management extension introduced in Business Central 2026 release wave 1 adds inspections generated automatically on purchase receipt, production and assembly output and warehouse movements, pass and fail templates, automatic lot blocking and quarantine handling. That is a real improvement for component suppliers and contract manufacturers who previously needed a third-party app to hold a lot on a failed inspection.",
        "What Business Central does not have is equally specific. Microsoft documents no built-in electronic signature for Business Central, so there is nothing that captures the printed name, date and time and meaning of a signature that 21 CFR 11.50 requires to appear in the human-readable record. Its change log is off until you choose tables and fields to track, Microsoft states it is turned off while the environment upgrades to the next version, and its entries can be deleted by a retention policy. It has no device history record object, no CAPA or complaint-handling module, and no GUDID submission: FDA accepts GUDID data through its own web interface or as HL7 SPL through the Electronic Submissions Gateway, and the labeler submits it.",
        "[Supply Chain Management](/dynamics-365/supply-chain/) is different here. The Finance and Operations apps ship an electronic signature feature that Microsoft describes in terms of 21 CFR Part 11: signature requirements can be set on built-in processes or on any table and field, each signer holds a certificate unlocked with a password only they know, a reason code is selected at signing, and the signature is written to a log for an auditor role to review. That does not make Supply Chain Management compliant either, but it moves the signature question from custom build to configuration and validation. [Business Central vs Finance and Operations](/compare/business-central-vs-finance-operations/) covers the wider trade-off."
      ]
    },
    {
      type: "table",
      heading: "Decisions made before configuration, and what each one costs later",
      headers: ["Decision", "What it gives you", "What it costs you later"],
      rows: [
        [
          "Business Central for a device maker",
          "Lot and serial tracking, item tracing, native quality inspections with lot blocking, and a mid-market licence and implementation cost.",
          "Electronic signatures, device history record assembly, complaints and CAPA are all built, bought as extensions, or held in an eQMS. **Each extension is another component your validation has to cover at every update.**"
        ],
        [
          "Supply Chain Management instead",
          "A built-in electronic signature framework, deeper production and quality order functionality, and an audit role designed around the signature log.",
          "A heavier licence and a longer implementation. At 40 to 150 users with simple discrete assembly, the signature feature rarely justifies the difference on its own."
        ],
        [
          "An eQMS alongside the ERP",
          "Document control, training records, CAPA, complaints and design controls in a tool built for them, usually with a vendor validation package, with the ERP left to do inventory, production and finance.",
          "An integration to own: item and lot master data, nonconformance holds and released-for-distribution status have to agree in both systems, and that interface is itself inside validation scope."
        ],
        [
          "SharePoint as the controlled document system",
          "Version history, retention labels, records declaration and approval flows on licences you already hold.",
          "**It is not an eQMS out of the box.** Signature meaning, training linkage, periodic review and change control are all things you design, build and validate yourself."
        ],
        [
          "A specialist validated ERP built for device makers",
          "Signatures, device history records and UDI handling as standard features, and a vendor validation package to leverage under the risk-based approach FDA now describes.",
          "A narrower ecosystem, less flexible finance and reporting, and a harder exit if you later scale into multi-entity or non-device lines."
        ]
      ]
    },
    {
      type: "steps",
      heading: "How the work sequences",
      steps: [
        {
          name: "Intended use and risk, before product choice",
          description:
            "List which processes the system will touch that fall under Part 820 or produce Part 11 records: receiving inspection, production records, release for distribution, complaints, service. Classify each by risk to product quality and patient safety. This is the input FDA's Computer Software Assurance guidance, finalised in September 2025, asks for, and it decides how much testing each function needs. A [Business Central readiness assessment](/assessments/business-central-readiness/) is where this normally starts."
        },
        {
          name: "System boundary and platform decision",
          description:
            "Decide what lives in the ERP, what lives in an eQMS and what lives in Microsoft 365, and write the boundary down. The signature question is usually the tie-breaker: if signed ERP transactions are unavoidable, Supply Chain Management or a specialist ERP moves up; if signatures live in the eQMS, Business Central is usually enough."
        },
        {
          name: "Configuration with the evidence built in",
          description:
            "Item tracking codes, inspection templates, lot blocking rules, permission sets and change log scope, each tied to a requirement and a risk rating. The change log gets switched on for the tables that matter on day one, with its retention policy set to match your records procedure rather than left at whatever deletes first."
        },
        {
          name: "Risk-based testing your quality unit owns",
          description:
            "Scripted testing where risk is high, unscripted and exploratory testing where it is not, and Microsoft's audit reports from the Service Trust Portal used as supplier evidence. We build and document the configuration and support the testing; your quality unit writes the plan, approves the results and makes the release decision."
        },
        {
          name: "An update process, not a one-off validation",
          description:
            "Business Central takes two major updates a year, in April and October, and minor updates in each of the remaining ten months. Define which changes trigger a regression pass, run it in a sandbox before production updates, and use the five-month update window deliberately rather than letting it run into the grace period."
        },
        {
          name: "Cutover and the first release decision",
          description:
            "Open lots, serial numbers, quarantined stock and in-process work orders migrate with their status intact, and legacy device history records stay retrievable. The project is finished when the first batch is released on the new system with a complete record, not at go-live."
        }
      ]
    },
    {
      type: "list",
      heading: "Where these projects actually fail",
      items: [
        "**The partner's Part 11 slide is taken as the validation.** An accelerator's documentation covers the accelerator as the partner configured it, not your processes, your procedures or your extensions.",
        "**Validation is treated as a go-live milestone.** On a SaaS product that updates monthly, a validation package that is never revisited describes a system that no longer exists.",
        "**The change log is assumed rather than configured.** Nobody chose the tables, a retention policy set up to save database space quietly deletes entries, and the audit trail question is answered in an inspection rather than in design.",
        "**Power Automate approvals are called electronic signatures.** An approval that records who clicked and when is useful evidence, but a Part 11 signature also needs its meaning and the signer's printed name bound into the record, and two distinct identification components when it is not biometric.",
        "**Extensions multiply the validation surface.** Every AppSource app added to fill a gap is another vendor's release cadence your regression testing has to follow."
      ]
    },
    {
      type: "prose",
      heading: "Microsoft's update cadence and your validated state",
      paragraphs: [
        "This is the question most proposals skip. Business Central online has two major update cycles a year, with releases every April and October, and minor updates in each of the remaining ten months. Each major update period lasts five calendar months, followed by a one-month grace period and then an enforced period in which extensions blocking the update may be uninstalled so the update succeeds. You control the date within the window. You do not control whether the update happens.",
        "Under traditional IQ, OQ and PQ thinking that looks unmanageable. The Computer Software Assurance guidance FDA finalised in September 2025 is what makes it workable. It supersedes Section 6 of the 2002 General Principles of Software Validation for production and quality system software, covers cloud services including SaaS, and endorses a risk-based approach that can lean on unscripted testing and on supplier evidence where risk is lower. In practice that means a documented assessment of each release against your risk-rated functions, an automated or scripted regression pass for the high-risk ones in a sandbox copy of production, and a lighter touch everywhere else.",
        "That process has to exist before go-live, and it has to be owned by someone inside the business. A partner can build it, and can run the regression pass on a support contract, but a validated state that depends on one consultant remembering the release calendar is not a validated state."
      ]
    },
    {
      type: "prose",
      heading: "SharePoint and Purview for controlled documents, honestly",
      paragraphs: [
        "SharePoint is a capable foundation for controlled documents and it is not an eQMS out of the box. [Microsoft Purview](/resources/glossary/microsoft-purview/) records management gives you real controls: a [retention policy](/resources/glossary/retention-policy/) or label that stops deletion, a locked record that blocks content edits, event-based retention that starts a clock from a device's end of life, and disposition review with proof of disposal. A regulatory record goes further, since once applied nobody, not even a global administrator, can remove the label, and its retention period can only be extended. That option is hidden until an administrator enables it in PowerShell, for good reason.",
        "What Purview does not give you is signature meaning, training linkage, periodic review, change control workflow or a document number scheme. Those are built with Power Automate, Power Apps and SharePoint metadata, and then they are in validation scope like anything else. For a 30-person start-up with a handful of SOPs that can be the right answer. For a contract manufacturer running hundreds of controlled documents and customer audits every quarter, a purpose-built eQMS is usually cheaper to own than a validated custom build. The SharePoint side of the build sits with [SharePoint intranet](/solutions/sharepoint-intranet/) work, and the labelling and retention design with data governance."
      ]
    },
    {
      type: "prose",
      heading: "Acquiring a device company means inheriting its records",
      paragraphs: [
        "When you buy a device maker you inherit its design records, its production records, its complaint files and the systems that hold them. ISO 13485, now incorporated into Part 820, requires those records to be kept for at least the lifetime of the device as the organization defines it, and not less than two years from release. For an implant or a long-life capital device that is a long time, and FDA has said it does not expect records made before 2 February 2026 to be recreated, only that a manufacturer may find a comparative analysis useful.",
        "The tenant work is where records get lost. A [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) does not carry retention policies or holds across, so a design history protected in the seller's SharePoint can arrive in yours without the controls that protected it unless the target is built first. We run these controls-first under [M and A tenant migration](/services/ma-tenant-migration/): retention and record labels stood up in the target, source content preserved until quality and counsel sign off, and a written map of where every legacy device record now lives."
      ]
    },
    {
      type: "list",
      heading: "When we would tell you not to do this",
      items: [
        "**You are a single-product start-up approaching first commercial launch.** A specialist validated ERP or an eQMS paired with simple accounting is usually cheaper and faster than validating a general-purpose ERP, and the vendor's validation package does real work under a risk-based approach.",
        "**Signed ERP transactions are central to your process and you want Business Central.** Building and validating a custom signature layer is expensive and permanent. Choose Supply Chain Management, a specialist ERP, or move the signatures into an eQMS.",
        "**You want SharePoint to replace an eQMS at 200 controlled documents and growing.** It can be done, but you will own the build, the validation and every regression pass for as long as it runs.",
        "**Nobody in the business can own the update process.** Without an internal owner for release assessment and regression testing, a SaaS ERP will drift out of its validated state within a year.",
        "**You are a 60-person device maker holding a quote from an enterprise accelerator practice.** Those firms are built around larger deals and a pre-packaged scope. Ask what the accelerator covers that your intended-use assessment actually needs."
      ]
    }
  ],
  faqs: [
    {
      q: "Is Dynamics 365 Business Central 21 CFR Part 11 compliant?",
      a: "No software is Part 11 compliant on its own, and Microsoft says no certification exists. Microsoft includes Dynamics 365 among the cloud services whose SOC and ISO 27001 audits you can use in your own Part 11 risk analysis, and it states that customers deploying FDA-regulated applications are responsible for meeting FDA requirements. Business Central also has no built-in electronic signature, so signed records need an extension, a custom build or an eQMS."
    },
    {
      q: "What changed for ERP and quality systems when the QMSR took effect?",
      a: "From 2 February 2026, Part 820 incorporates ISO 13485:2016 by reference. The device master record, device history record and design history file are no longer defined terms, though the records themselves are still required under ISO 13485's own structure. Section 820.35 adds specific content for complaint and servicing records and requires the UDI to be recorded. FDA replaced QSIT with a new inspection process and can now inspect management review, internal audit and supplier audit reports."
    },
    {
      q: "Does Business Central handle lot and serial traceability for medical devices?",
      a: "Yes. Item tracking covers lot and serial numbers with expiration dates, and item tracing follows a lot forward to customers or backward to suppliers. The Quality Management extension from 2026 release wave 1 adds automatic inspections and lot blocking. What it does not do is assemble a device history record, submit to GUDID or capture Part 11 signatures, so plan those deliberately."
    },
    {
      q: "How do Microsoft's monthly updates affect a validated system?",
      a: "They mean validation is a process, not an event. Business Central gets major updates in April and October and minor updates in the remaining ten months, with a five-month window to schedule each major update before a grace period and enforcement. FDA's Computer Software Assurance guidance, finalised in September 2025, supports a risk-based approach that covers SaaS, so each release is assessed against your risk-rated functions and regression-tested in a sandbox where risk warrants it."
    },
    {
      q: "Is SharePoint a compliant document control system for a device QMS?",
      a: "It can be part of one, but it is not an eQMS out of the box. Purview records management can lock records, block deletion and, with a regulatory record label, prevent anyone from removing the label. It does not provide signature meaning, training linkage or change control; those have to be built and validated. For small document sets that can work; for large ones a purpose-built eQMS is usually cheaper to own. [Data governance](/services/data-governance/) covers the Purview side."
    },
    {
      q: "Should a device maker choose Supply Chain Management instead of Business Central?",
      a: "Only if the requirements justify it. Supply Chain Management includes an electronic signature feature Microsoft describes in terms of Part 11, with certificate-based signing, reason codes and a signature log, which removes the biggest custom build. It also costs more to license and implement. If signatures can live in an eQMS, Business Central is usually the better mid-market fit. [Dynamics 365 licensing](/pricing/dynamics-365-licensing/) compares the costs."
    },
    {
      q: "Can Dynamics 365 Field Service manage installed-base service and complaints?",
      a: "It can hold the installed base as customer assets, run service work orders and record what was done, which maps well to the servicing record content in 820.35. Complaint investigation and CAPA usually stay in the eQMS, with an integration carrying the UDI, lot and service history across. See [Field Service](/dynamics-365/field-service/) for scope."
    },
    {
      q: "Does MP365 validate the system for us?",
      a: "No partner can take that responsibility from you, and one that offers to is overstating its role. We design and configure the system, write the configuration and traceability documentation, and support the risk assessment and testing. Your quality unit owns the validation plan, approves the evidence and makes the release decision, because FDA holds the manufacturer accountable."
    }
  ],
  relatedServiceSlugs: ["dynamics-365", "data-governance", "power-platform", "ma-tenant-migration"],
  relatedTermSlugs: ["microsoft-purview", "retention-policy", "tenant-to-tenant-migration", "dataverse"],
  relatedPageRefs: [
    "/assessments/business-central-readiness/",
    "/compare/business-central-vs-finance-operations/",
    "/dynamics-365/business-central/",
    "/dynamics-365/supply-chain/",
    "/dynamics-365/field-service/",
    "/pricing/dynamics-365-licensing/"
  ],
  proofMetrics: [
    { value: "20+ yrs", label: "of Microsoft consulting" },
    { value: "1 business day", label: "reply from a senior engineer" },
    { value: "2 Feb 2026", label: "QMSR took effect, incorporating ISO 13485" },
    { value: "2 per year", label: "major Business Central releases to re-assess" }
  ],
  triggers: [
    {
      title: "The QMSR exposed a paper device history record",
      body: "Batch records reconciled by hand from travellers and spreadsheets are harder to defend under the new inspection process.",
      topic: "QMSR transition"
    },
    {
      title: "An inspection or customer audit questioned your audit trail",
      body: "Nobody could show who changed a BOM, routing or inspection limit, or the change log was never switched on.",
      topic: "Audit trail or Part 11 finding"
    },
    {
      title: "First commercial launch on QuickBooks",
      body: "Lot traceability, release status and complaint records now need a system, and the choice of ERP decides the validation burden.",
      topic: "Outgrowing entry-level accounting"
    },
    {
      title: "You acquired another device maker",
      body: "A second tenant, a second quality system and design records that must stay retrievable for the life of the device.",
      topic: "Acquisition or integration"
    }
  ],
  formTopics: [
    "QMSR transition",
    "Audit trail or Part 11 finding",
    "Outgrowing entry-level accounting",
    "Acquisition or integration",
    "ERP or eQMS selection"
  ],
  subSectors: [
    "Class II device manufacturers",
    "Contract manufacturers (CMOs)",
    "Orthopaedic and implant makers",
    "Diagnostics and IVD",
    "Component suppliers to device OEMs",
    "Capital equipment with a serviced installed base"
  ],
  relatedIndustrySlug: "healthcare",
  tool: "readiness",
  readinessQuestions: [
    {
      q: "Do you assemble device history records by hand from paper travellers and spreadsheets?",
      riskIfYes: "Manual reconciliation is where missing entries and release errors hide, and it gets harder to defend under the QMSR inspection process."
    },
    {
      q: "Is your ERP change log switched off, or scoped without a documented decision?",
      riskIfYes: "Without a configured audit trail you cannot show who changed a BOM, routing or inspection limit, or when."
    },
    {
      q: "Are approvals captured as emails or workflow clicks without signature meaning or the signer's printed name?",
      riskIfYes: "21 CFR 11.50 requires the printed name, date and time and meaning of each signature in the human-readable record."
    },
    {
      q: "Has your ERP been updated since its validation package was last reviewed?",
      riskIfYes: "On a SaaS product with monthly updates, an unrevisited validation describes a system that no longer exists."
    },
    {
      q: "Are controlled documents in a SharePoint library where members can edit or delete them?",
      riskIfYes: "Without record labels and change control, SharePoint version history alone does not make a controlled document system."
    }
  ],
  ctaHeading: "Decide the ERP and eQMS boundary before you validate anything",
  ctaSubheading:
    "Send us your current systems and the processes under Part 820. A senior engineer replies within one business day with an honest view of fit, including when a specialist ERP is the better answer.",
  sidebarCta: {
    tag: "Medical devices",
    title: "Business Central or a validated specialist ERP?",
    body: "We map your intended use and risk first, then tell you which platform keeps the validation burden smallest.",
    ctaText: "Talk to an engineer"
  }
};

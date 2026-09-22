import type { Industry } from "../industries";

export const industry: Industry = {
  slug: "federal-contractors",
  oldSlugs: [],
  name: "Federal & Defense Contractors",
  metaTitle: "GCC High or Commercial Microsoft 365 for CMMC Level 2",
  metaDescription:
    "When a defence contractor needs GCC High for CMMC Level 2, when GCC or an enclave is enough, and why the move is a tenant migration rather than a licence change.",
  heroQuestion: "Do we need GCC High for CMMC Level 2, or is commercial Microsoft 365 configured properly enough?",
  heroAnswer:
    "If you hold export-controlled data, plan on GCC High. Microsoft positions commercial Microsoft 365 for CMMC Level 1 and GCC High for Levels 2 and 3, and states GCC is not suitable for CUI Specified such as ITAR data. Configuration cannot turn a commercial tenant into GCC High: it is a separate environment with its own identity, so getting there is a tenant-to-tenant migration.",
  intro: [
    "Most defence contractors reach this question because a prime has asked for it. A purchase order arrives with DFARS 252.204-7012 in it, a supplier questionnaire asks for your SPRS score and CMMC status, or an engineer notices that drawings marked with a distribution statement have been sitting in a commercial SharePoint library for three years. The question on the table is usually phrased as a licence decision: do we buy GCC High or not. It is really a data decision, then an architecture decision, and only then a licence decision.",
    "The rules are set in two places. The CMMC program rule, 32 CFR Part 170, took effect on 16 December 2024. The DFARS acquisition rule that puts CMMC into contracts took effect on 10 November 2025, which started Phase 1: Level 1 and Level 2 self-assessments as a condition of award, with DoD free to require a Level 2 third-party assessment on individual solicitations. In July 2026 DoD suspended the move to Phase 2, when Level 2 certification by a C3PAO was due to become the default, pending a reform task force review. The pause changed the timetable, not the obligation. DFARS 7012, the NIST SP 800-171 requirements, SPRS scores and annual affirmations all still apply, and a contractor affirming compliance it does not have carries the same exposure it did before.",
    "MP365 is a Microsoft consulting firm in Vernon, Connecticut, founded in 2005, working with defence suppliers in Connecticut, New England and across the US. We do the Microsoft side: cloud selection, the [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) into GCC High, [Microsoft Purview](/resources/glossary/microsoft-purview/) labelling and data governance, and the Dynamics 365 and Power Platform decisions that follow. We do not perform CMMC assessments and we are not an assessment organization. The assessment is done by an authorised C3PAO, or by you as a self-assessment, against an environment we help you build and document. Related work sits under [M and A tenant migration](/services/ma-tenant-migration/) and [data governance](/services/data-governance/)."
  ],
  challenges: [
    "A prime asking for your SPRS score and CMMC status before renewal, and nobody inside the business sure which information systems are in scope",
    "Controlled technical information and export-controlled drawings sitting in commercial SharePoint, OneDrive and Outlook alongside everything else",
    "A GCC High quote treated as a licence swap, with no budget for the tenant migration it actually requires",
    "A self-assessment score posted to SPRS years ago that no longer describes the environment, and an annual affirmation someone is now expected to sign",
    "An enclave that looked cheap on paper and leaks CUI back into the commercial tenant through email every week",
    "An acquisition of a smaller supplier whose tenant, score and export-control exposure arrive on closing day",
    "ERP and CRM decisions made without checking which Dynamics 365 products Microsoft actually offers in GCC High"
  ],
  blocks: [
    {
      type: "prose",
      heading: "What Microsoft says each cloud is for",
      paragraphs: [
        "Start with Microsoft's own positioning, because it is more specific than most partner pages admit. Microsoft's CMMC documentation describes Microsoft 365 for Enterprise, the commercial cloud, as supporting organizations in meeting CMMC Level 1 requirements. It describes **Microsoft 365 GCC High** as supporting CMMC Level 2 and Level 3 requirements when configured appropriately, along with FedRAMP High, DFARS, DISA Impact Level 4 and ITAR. On GCC it is blunt: GCC is not suitable to hold CUI Specified, giving ITAR as the example, because that data requires US sovereignty which only GCC High offers.",
        "DFARS 252.204-7012 is the clause that makes the cloud choice contractual. If you use an external cloud provider to store, process or transmit covered defence information, paragraph (b)(2)(ii)(D) requires that provider to meet security requirements equivalent to the FedRAMP Moderate baseline and to comply with the clause's paragraphs on incident reporting, malicious software, media preservation, forensic access and damage assessment. Microsoft has announced support for those cloud-provider obligations in GCC as well as GCC High, which is why GCC is a legitimate answer for a contractor whose CUI is not export-controlled. It is not the answer once ITAR or EAR data is in the estate.",
        "So the honest reading of the question in the page title is this. Commercial Microsoft 365, however well configured, is where Microsoft positions Level 1 work on federal contract information. For CUI you are choosing between GCC and GCC High, and the deciding question is whether any of that CUI is export-controlled. For most Connecticut aerospace, submarine and jet-engine supply chain firms the answer is yes, because the drawings and specifications that define the parts are the CUI."
      ]
    },
    {
      type: "table",
      heading: "Commercial, GCC, GCC High or an enclave",
      headers: ["Option", "What it supports", "What it costs you later"],
      rows: [
        [
          "Commercial Microsoft 365, hardened",
          "Microsoft positions it for CMMC Level 1, where the data is federal contract information and the requirements are the 15 basic safeguards in FAR 52.204-21. Full feature set, CSP licensing, no eligibility validation.",
          "If CUI turns up in it, you have a spillage and a scoping problem rather than a configuration task. Getting CUI out later means discovery, clean-up and a **tenant migration**, usually under a prime's deadline."
        ],
        [
          "Microsoft 365 GCC",
          "CUI that is not export-controlled. Microsoft has announced DFARS 7012 support in GCC, and GCC still uses public Microsoft Entra ID, so collaboration with commercial tenants behaves much as it does today.",
          "Microsoft states GCC is not suitable for CUI Specified, including ITAR. Win one export-controlled programme and you are migrating again, this time to GCC High."
        ],
        [
          "Microsoft 365 GCC High, whole company",
          "All CUI including export-controlled data, with US-based data storage, US-citizen screened Microsoft personnel for access to customer content, and Microsoft Entra Government identities. Microsoft's guidance for multiple business units is to put them all in GCC High.",
          "Higher licence cost, purchase only through an Enterprise Agreement or an AOS-G partner rather than CSP, no trials, and feature gaps against commercial. SharePoint and OneDrive sharing reaches only other GCC High organizations."
        ],
        [
          "GCC High enclave for the CUI population",
          "A smaller GCC High tenant for engineering, programme and quality staff who touch CUI, with the rest of the company left on commercial. Lower licence spend and a narrower assessment scope.",
          "Two tenants to run, two identities for enclave users, and a boundary that has to be enforced every day. Microsoft notes the most common spillage happens through personal storage, especially email, which is exactly where an enclave boundary tends to break."
        ]
      ]
    },
    {
      type: "prose",
      heading: "Why GCC High is a migration, not a licence change",
      paragraphs: [
        "There is no setting that converts a commercial tenant to GCC High. GCC High is a separate environment: Microsoft's Dynamics 365 documentation describes it as requiring Microsoft Entra Government for identities, where GCC uses public Entra ID, and the service is only provisioned after Microsoft validates your eligibility. Everything that lives in the old tenant, mailboxes, SharePoint sites, Teams, OneDrive, Intune device enrolment, conditional access, service accounts and application registrations, has to be rebuilt or moved. Microsoft's own CMMC guidance says to allocate at least three months for the migration phase.",
        "That makes it the same class of project as a post-acquisition consolidation, and it fails in the same places: [cross-tenant identity mapping](/resources/glossary/cross-tenant-identity-mapping/), a coexistence period where mail flows between two tenants, and a cutover weekend that has to land between contract milestones. We run it as a [Microsoft 365 migration](/services/microsoft-365-migration/) with a defined [cutover](/resources/glossary/cutover-migration/) rather than as a licence order. Budget ranges are on [tenant migration cost](/pricing/tenant-migration-cost/).",
        "The buying path is also different. Microsoft sells Microsoft 365 GCC High through an Enterprise Agreement via a licensing solution provider, or through an AOS-G partner for organizations under 500 seats. It is not sold through the Cloud Solution Provider programme and there are no trials. Validation typically has to clear before provisioning, so start it early."
      ]
    },
    {
      type: "steps",
      heading: "How the work sequences",
      steps: [
        {
          name: "Find the CUI before choosing the cloud",
          description: "Identify which contracts carry DFARS 7012, what CUI and export-controlled data you actually receive and generate, and where it lives today across Microsoft 365, file shares, ERP, PLM and personal mailboxes. The output is a data inventory and a boundary diagram, and it decides everything that follows. A [tenant migration assessment](/assessments/tenant-migration/) is usually where this lands."
        },
        {
          name: "Choose the cloud and the scope",
          description: "GCC or GCC High, whole company or enclave, decided on the data inventory rather than the licence price. This is also where Dynamics 365, Power Platform and third-party applications get checked against what Microsoft actually offers in the target cloud."
        },
        {
          name: "Validate and purchase",
          description: "Submit Microsoft's eligibility validation and place the order through an Enterprise Agreement or AOS-G partner. Run this in parallel with design, because provisioning waits on validation."
        },
        {
          name: "Build the target tenant to the control set",
          description: "Conditional access, multifactor authentication, Intune device compliance, audit logging, FIPS-validated encryption settings and administrative separation, configured and documented against the NIST SP 800-171 requirements so the evidence exists before anyone asks for it."
        },
        {
          name: "Label and govern CUI",
          description: "Deploy [sensitivity labels](/resources/glossary/sensitivity-label/) for CUI and export-controlled data, [DLP policies](/resources/glossary/data-loss-prevention-dlp/) that stop labelled content leaving the boundary, and retention that matches your contracts. This is what makes an enclave hold, and what an assessor looks at when asking how CUI is controlled rather than just stored."
        },
        {
          name: "Migrate with coexistence and cut over",
          description: "Pilot group, identity mapping, mail coexistence, then waves by department with a named rollback point. Old tenant content is cleaned or retained under a documented decision, not left behind as an unmanaged copy of CUI."
        },
        {
          name: "Hand over evidence for the assessment",
          description: "System security plan inputs, configuration exports, data flow diagrams and a list of what remains open. Your self-assessment or a C3PAO assessment follows. MP365 does not perform or sign off that assessment."
        }
      ]
    },
    {
      type: "prose",
      heading: "SPRS, POA&M rules and what the pause did not change",
      paragraphs: [
        "CMMC Level 2 requirements are identical to the 110 requirements in NIST SP 800-171 Revision 2. Under 32 CFR 170.21, a Level 2 assessment can end in conditional status with open items only if the score is at least 80 percent of the total, no open item carries a point value above one (with a narrow exception for encryption that is in place but not FIPS-validated), and none of six named requirements is open, including the **system security plan** and several physical-access controls. Open items must be closed and confirmed within 180 days or the conditional status expires. Level 1 allows no plan of action at all.",
        "Level 2 self-assessments are repeated every three years and affirmed in SPRS annually by a named affirming official. That affirmation is a statement a senior person signs, and it is the part of the regime most exposed to the question of whether the environment matches the paperwork. The July 2026 suspension of Phase 2 paused the default requirement for C3PAO certification; DoD's own announcement kept Phase 1 self-assessments and enforcement of NIST SP 800-171 through self-assessments and government-led assessments in place.",
        "DFARS 7012 has its own operational teeth that are worth building into the tenant design rather than a policy binder. Cyber incidents must be reported to DoD within 72 hours of discovery, which requires a DoD-approved medium assurance certificate you should obtain before you need it. Images of affected systems and relevant monitoring data must be preserved for at least 90 days from the report. In Microsoft 365 terms that means audit retention, [eDiscovery holds](/resources/glossary/ediscovery-hold/) and a runbook that someone has actually rehearsed."
      ]
    },
    {
      type: "list",
      heading: "Where these projects fail",
      items: [
        "GCC High is bought before anyone has found the CUI. The enclave is scoped around the org chart rather than the data, and the first sweep after cutover finds export-controlled drawings still in the commercial tenant.",
        "The migration is priced as a licence change. Nobody budgets for identity rebuild, device re-enrolment or the coexistence period, so the project stalls between tenants with CUI in both.",
        "An enclave is built with no DLP or labelling at the boundary. Engineers forward drawings from their enclave mailbox to their commercial one so they can read them on a phone, and the scope quietly becomes the whole company.",
        "Collaboration with primes and suppliers is discovered in week six. GCC High SharePoint and OneDrive sharing only reaches other GCC High organizations, so the external sharing model has to be designed rather than assumed.",
        "The SPRS score is treated as a number to raise rather than a description of the environment. A score posted on intent, followed by an annual affirmation, is the exposure, not the audit finding.",
        "Line-of-business systems are forgotten. The ERP, PLM or quoting tool that stores the same drawings is outside the new boundary, and the assessor asks about it on day one."
      ]
    },
    {
      type: "prose",
      heading: "Dynamics 365, Power Platform and acquisitions",
      paragraphs: [
        "Microsoft lists Dynamics 365 Sales, Customer Service, Field Service, Finance and Supply Chain Management among the products available in GCC High, and Power Apps, Power Automate and Power BI appear in Microsoft's GCC High service scope. Business Central does not appear in Microsoft's list of Dynamics 365 US Government products. For a mid-market manufacturer on [Business Central](/dynamics-365/business-central/), the practical design is to keep CUI out of the ERP, reference drawings by part number rather than attaching them, and hold the controlled files inside the GCC High boundary. For [Dynamics 365](/services/dynamics-365/) and [Power Platform](/services/power-platform/) work, check the feature parity list for the target cloud before a design depends on a feature that is not there.",
        "Acquisitions are where this gets expensive quietly. Buying a DIB supplier means inheriting its tenant, its SPRS score, its affirmation history and whatever CUI its engineers have been emailing. CMMC status attaches to information systems, so the acquired tenant does not inherit your posture and yours does not inherit theirs. The integration plan needs a [day-one coexistence](/resources/glossary/day-1-coexistence/) design that keeps CUI inside a compliant boundary from closing, and a consolidation into the right cloud rather than into whichever tenant is bigger. Our wider view of the manufacturing side sits on [manufacturing](/industries/manufacturing/).",
        "Flow-down runs the other way too. Under 32 CFR 170.23 a subcontractor that handles only FCI needs Level 1, one that handles CUI needs at least Level 2 (Self), and where the prime contract requires Level 2 or Level 3 certification the subcontractor needs Level 2 (C3PAO). Primes also have to confirm subcontractor status before award, which is why the request for your score tends to arrive with a deadline attached."
      ]
    },
    {
      type: "list",
      heading: "When we would tell you not to do this",
      items: [
        "**You only handle federal contract information.** If your contracts carry FAR 52.204-21 and no CUI, Level 1 on a properly configured commercial tenant is where Microsoft positions you. Buying GCC High for FCI is spending money to solve a problem you do not have.",
        "**Your CUI is not export-controlled and your collaboration is mostly with commercial companies.** GCC may be the better fit, with less disruption than GCC High. Revisit it the day an ITAR programme appears.",
        "**Five people touch CUI and it all lives in one system.** A well-governed enclave, or keeping that data in a system that already meets the requirement, may be cheaper and simpler than moving two hundred mailboxes.",
        "**You want someone to guarantee a passing assessment.** Nobody honest can. MP365 builds and documents the Microsoft environment; the assessment result belongs to you and the C3PAO.",
        "**You need an assessor, not an implementer.** If the environment is already built and you want it scored, engage a C3PAO directly. We do not assess, and the assessor should be independent of whoever built the environment anyway.",
        "**You are planning to migrate before you know where the CUI is.** Moving an unknown estate into GCC High moves the mess and the cost. Do the inventory first, even if it delays the purchase order."
      ]
    }
  ],
  faqs: [
    {
      q: "Is commercial Microsoft 365 enough for CMMC Level 2?",
      a: "Not by Microsoft's own positioning. Microsoft's CMMC documentation describes commercial Microsoft 365 as supporting CMMC Level 1 requirements, and GCC High as supporting Levels 2 and 3 when configured appropriately. DFARS 252.204-7012 also requires a cloud provider holding covered defence information to meet FedRAMP Moderate equivalent requirements and the clause's incident and media-preservation paragraphs. For CUI, the real choice is GCC or GCC High."
    },
    {
      q: "When is GCC enough instead of GCC High?",
      a: "When your CUI is not export-controlled. Microsoft has announced DFARS 7012 support in GCC, but states that GCC is not suitable for CUI Specified such as ITAR data because that requires the US sovereignty only GCC High offers. Most aerospace and defence manufacturing suppliers hold export-controlled technical data, which usually settles it."
    },
    {
      q: "Can Microsoft switch our existing tenant to GCC High?",
      a: "No. GCC High is a separate environment using Microsoft Entra Government identities, provisioned after Microsoft validates your eligibility. Moving to it is a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) of mail, files, Teams, identities and devices, and Microsoft's own guidance says to allow at least three months for the migration phase."
    },
    {
      q: "How do we buy GCC High licences?",
      a: "Through Microsoft's eligibility validation first, then an Enterprise Agreement via a licensing solution provider or, for organizations under 500 seats, an AOS-G partner. Microsoft does not sell GCC High through the Cloud Solution Provider programme and offers no GCC High trials."
    },
    {
      q: "Did the July 2026 CMMC pause mean we can stop?",
      a: "No. DoD suspended Phase 2, when Level 2 certification by a C3PAO was due to become the default from 10 November 2026, pending a reform task force review. Phase 1 self-assessments, DFARS 7012, SPRS scores and annual affirmations remain. The pause changes when a third party checks your work, not whether the requirements apply."
    },
    {
      q: "Can we get a conditional CMMC status with open items?",
      a: "For Level 2, yes, within limits set by 32 CFR 170.21. The score must be at least 80 percent, open items must carry no more than one point each apart from a narrow encryption exception, six named requirements including the system security plan cannot be open, and everything must be closed within 180 days. Level 1 allows no open items."
    },
    {
      q: "Should we build an enclave or move the whole company to GCC High?",
      a: "It depends on how contained your CUI really is. An enclave cuts licence cost and assessment scope, but Microsoft notes that the most common spillage happens through personal storage, especially email, and its guidance for multiple business units is to put them all in GCC High. An enclave only holds with [sensitivity labels](/resources/glossary/sensitivity-label/) and DLP enforcing the boundary."
    },
    {
      q: "Is MP365 a C3PAO or an RPO?",
      a: "No. MP365 does not perform CMMC assessments and does not hold itself out as an assessment or registered provider organization. We do the Microsoft architecture, GCC High migration and Purview configuration work, and hand over evidence for your self-assessment or an assessment by an authorised C3PAO. If you want a conversation first, [contact us](/contact/)."
    }
  ],
  relatedServiceSlugs: ["microsoft-365-migration", "ma-tenant-migration", "data-governance", "dynamics-365", "power-platform"],
  relatedTermSlugs: [
    "tenant-to-tenant-migration",
    "sensitivity-label",
    "data-loss-prevention-dlp",
    "microsoft-purview",
    "cross-tenant-identity-mapping",
    "ediscovery-hold"
  ],
  relatedPageRefs: [
    "/assessments/tenant-migration/",
    "/pricing/tenant-migration-cost/",
    "/dynamics-365/business-central/",
    "/dynamics-365/supply-chain/"
  ],
  proofMetrics: [
    { value: "20+ yrs", label: "of Microsoft consulting" },
    { value: "110", label: "NIST SP 800-171 requirements at CMMC Level 2" },
    { value: "72 hrs", label: "DFARS 7012 incident reporting window" },
    { value: "1 business day", label: "reply from a senior engineer" }
  ],
  triggers: [
    {
      title: "A prime asked for your SPRS score or CMMC status",
      body: "You need to know which systems are in scope and whether the score you posted still describes them before anyone signs an affirmation.",
      topic: "Prime asked for SPRS or CMMC status"
    },
    {
      title: "Export-controlled data is in commercial Microsoft 365",
      body: "ITAR or EAR drawings in commercial SharePoint or Outlook mean a GCC High decision and a migration plan, not a settings change.",
      topic: "Moving to GCC High"
    },
    {
      title: "You acquired a supplier on a different tenant",
      body: "Their tenant, score and CUI arrive on closing day. The consolidation needs a compliant boundary from day one.",
      topic: "Acquired a defence supplier"
    },
    {
      title: "A new contract carries DFARS 7012",
      body: "The clause brings cloud, incident reporting and media preservation obligations that the tenant has to be able to meet.",
      topic: "New DFARS 7012 contract"
    }
  ],
  formTopics: [
    "Prime asked for SPRS or CMMC status",
    "Moving to GCC High",
    "Acquired a defence supplier",
    "New DFARS 7012 contract",
    "Something else"
  ],
  subSectors: [
    "Aerospace and defence suppliers",
    "Machine shops and precision manufacturers",
    "Engineering services firms",
    "Shipbuilding and submarine supply chain",
    "IT and professional services contractors"
  ],
  relatedIndustrySlug: "manufacturing",
  tool: "readiness",
  readinessQuestions: [
    {
      q: "Is CUI or export-controlled data stored in a commercial Microsoft 365 tenant today?",
      riskIfYes: "Microsoft positions commercial Microsoft 365 for Level 1, so CUI there is a scoping and spillage problem that usually ends in a migration."
    },
    {
      q: "Was your SPRS score last calculated more than a year ago, or by someone who has since left?",
      riskIfYes: "The annual affirmation is a signed statement that the environment still matches the score, and nobody can currently stand behind it."
    },
    {
      q: "Are you budgeting GCC High as a licence purchase with no migration line?",
      riskIfYes: "GCC High is a separate tenant, so mail, files, identities and devices all have to move, and the project stalls without that budget."
    },
    {
      q: "Do engineers email drawings between company and personal or commercial accounts to work on them?",
      riskIfYes: "Email is where Microsoft says spillage most often happens, and it widens your assessment scope to everything the mail touched."
    },
    {
      q: "Do you lack a rehearsed plan to report a cyber incident to DoD within 72 hours?",
      riskIfYes: "DFARS 7012 requires the report, a medium assurance certificate and 90 days of preserved images, none of which can be improvised mid-incident."
    }
  ],
  ctaHeading: "Find out which cloud your CUI actually needs",
  ctaSubheading:
    "A senior engineer reviews your contracts, data and tenant, and tells you whether it is commercial, GCC, GCC High or an enclave, and what the move involves.",
  sidebarCta: {
    tag: "GCC High decision",
    title: "Commercial, GCC or GCC High?",
    body: "We map where your CUI lives and what the right boundary costs to build. We do not assess; we build what the assessor looks at.",
    ctaText: "Talk to an engineer"
  }
};

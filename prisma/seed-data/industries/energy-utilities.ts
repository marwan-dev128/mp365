import type { Industry } from "../industries";

export const industry: Industry = {
  slug: "energy-utilities",
  oldSlugs: [],
  name: "Energy & Utilities",
  metaTitle: "Microsoft 365 for Utilities: BCSI, CIP Scope and OT Lines",
  metaDescription:
    "How utilities and energy firms standardise on Microsoft 365 without blurring OT and IT: CIP-011 and CIP-004 scope, BCSI labels, field apps, Copilot and records.",
  heroQuestion:
    "How do energy and utility organizations keep OT and IT separated when they standardise on Microsoft 365?",
  heroAnswer:
    "Keep Microsoft 365 as corporate IT and keep BES Cyber Systems off it entirely. The separation that matters is drawn in identity and data, not only in the network: separate privileged accounts and Conditional Access for OT-adjacent staff, and BES Cyber System Information identified, labelled and access-managed under CIP-011-3 and CIP-004-7 wherever it lands in SharePoint or Teams. Low-impact-only entities carry far lighter obligations than most vendors imply.",
  intro: [
    "Most utility Microsoft 365 conversations start with somebody asking whether the tenant is in scope for NERC CIP. The honest answer is usually that the tenant is not a BES Cyber System and never should be, but that pieces of the information about those systems have already drifted into it: a substation network diagram attached to a Teams chat during a storm, a relay-settings export in someone's OneDrive, an access list for the control centre in a SharePoint library shared to the whole engineering department. The obligation follows the information, not the platform.",
    "The second truth is that CIP applies to fewer organizations than vendors suggest. CIP-011-3 and CIP-004-7 R6, the requirements that govern BES Cyber System Information, apply to high and medium impact BES Cyber Systems and their associated access control and monitoring systems. A municipal utility, a distribution co-op, a propane distributor or a solar operator with only low impact assets, or with no registered functions at all, is running ordinary corporate governance with a critical-infrastructure flavour. Treating it as a full CIP programme wastes a year and a budget.",
    "MP365 is a Microsoft consulting firm in Vernon, Connecticut, doing project-based work for mid-market organizations in Connecticut, New England and across the US. For energy and utility organizations that means [data governance](/services/data-governance/) and Purview configuration, tenant consolidation after an acquisition through [M and A tenant migration](/services/ma-tenant-migration/), and field and inspection workflows on [Power Platform](/services/power-platform/) and [Dynamics 365 Field Service](/dynamics-365/field-service/). We do not configure control systems, SCADA, EMS or anything inside an Electronic Security Perimeter. We govern the corporate side and the line where it meets OT.",
  ],
  challenges: [
    "Substation diagrams, relay settings and control centre access lists sitting in SharePoint and Teams with no label and no owner",
    "Engineers and operators who hold OT access using the same everyday account for email, Teams and the corporate intranet",
    "Storm and outage response run in Teams chats that nobody retains, classifies or can reconstruct for the after-action review",
    "Line crews and inspectors on paper forms or photos texted to a supervisor, re-keyed into the asset system days later",
    "A Copilot pilot requested by leadership on a tenant where nobody knows which libraries hold BES Cyber System Information",
    "Rate case exhibits, regulatory filings and work papers scattered across shares with no retention schedule behind them",
    "An acquired utility, co-op or distributor arriving with its own tenant, its own admins and a deal-mandated consolidation date",
  ],
  blocks: [
    {
      type: "prose",
      heading: "What is actually in scope before anyone configures anything",
      paragraphs: [
        "Start with the CIP-002 categorisation you already hold, not with the Microsoft product list. If your organization has high or medium impact BES Cyber Systems, CIP-011-3 R1 requires methods to identify BES Cyber System Information and methods to protect and securely handle it, and CIP-004-7 R6 requires an access management programme that authorizes, verifies and revokes provisioned access to it. Both versions took effect on 1 January 2024 and were written specifically to make cloud storage of that information workable. NERC's own measures for CIP-011-3 name labels or classification on the information, and defined storage locations, as acceptable evidence of identification. That is a [sensitivity label](/resources/glossary/sensitivity-label/) and a governed site, which Microsoft 365 does well.",
        "If you have only low impact assets, CIP-011 and CIP-004 R6 do not apply to you, and the obligations sit in CIP-003. If you are a fuel distributor, an energy services company or a renewable developer without registered functions, CIP does not apply at all, and the drivers are cyber insurance, customer and lender security questionnaires, and state requirements. The work looks similar, but the evidence burden and the cost do not. Pricing a low impact co-op as if it were a transmission operator is the most common way this work gets oversold.",
        "One more boundary, stated plainly. NERC's cloud implementation guidance for BCSI states that it does not address operating a BES Cyber System, EACMS or PACS in the cloud. Microsoft states that neither Azure nor Azure Government constitutes a BES or a BES Cyber Asset, and that cloud providers are not themselves subject to CIP. The tenant holds information about the OT estate. It never becomes part of it.",
      ],
    },
    {
      type: "table",
      heading: "Decisions that set the OT and IT line, and what each one costs later",
      headers: ["Decision", "What it gives you", "What it costs you later"],
      rows: [
        [
          "Permit BCSI in Microsoft 365 at all, or keep it on premises",
          "One collaboration platform for engineering, operations and compliance, and an access programme that can be evidenced from Entra ID and Purview rather than from spreadsheets.",
          "Every storage location becomes an audited BCSI repository under CIP-004-7 R6: authorization based on need, verification of provisioned access at least once every 15 calendar months, and removal by the end of the next calendar day after a termination action. Microsoft's own NERC page says BCSI in Microsoft 365 is a conversation to have with your Microsoft account team, so budget for that conversation.",
        ],
        [
          "Dedicated BCSI sites instead of labels scattered across general libraries",
          "A short, named list of storage locations that maps directly to CIP-011-3's identification evidence and to a single access review.",
          "Engineers have to be told, and reminded, where BCSI goes. Without **auto-labelling** and [DLP](/resources/glossary/data-loss-prevention-dlp/) watching general sites, drift back into team chats starts within a quarter.",
        ],
        [
          "Separate cloud identities for staff who hold OT access",
          "A corporate account phished through email cannot be the same credential that reaches OT jump hosts or BCSI repositories, and Conditional Access can treat the two populations differently.",
          "Two identities per person for a subset of staff, and a joiner, mover and leaver process that has to revoke both on the CIP-004 clock.",
        ],
        [
          "Encryption with customer-controlled keys on BCSI labels",
          "NERC's guidance treats access to encrypted BCSI plus the keys as provisioned access, so key control changes who counts as having access, including provider personnel.",
          "Key management becomes an operational process with its own evidence. **Double Key Encryption** keeps content out of Copilot entirely, which is the intent, but also breaks search, co-authoring and most previews on that content.",
        ],
        [
          "One tenant for a holding company with regulated and unregulated subsidiaries",
          "One identity platform, one set of policies, one licence agreement and simpler shared services.",
          "Separation that used to be structural now depends on configuration: information barriers, scoped admin roles and site-level controls. Get it wrong and the unregulated side can find the regulated side's information in search.",
        ],
      ],
    },
    {
      type: "steps",
      heading: "How the work sequences",
      steps: [
        {
          name: "Scope from the CIP-002 list, not the tenant",
          description:
            "Confirm registered functions and impact ratings with the compliance lead, then decide whether BCSI is permitted in Microsoft 365 at all. For low impact and non-registered organizations, this step is short and says so, and the rest of the plan is scaled down to match.",
        },
        {
          name: "Find where BCSI and CEII already live",
          description:
            "Content search and trainable classifiers across SharePoint, OneDrive and Teams for network diagrams, IP schedules, relay and protection settings, access lists and security procedures, plus a permissions report on every hit. The finding is almost never zero, and it tells you where the real storage locations already are.",
        },
        {
          name: "Identity separation and Conditional Access",
          description:
            "Separate privileged and OT-adjacent accounts from everyday ones, phishing-resistant MFA for those accounts, Conditional Access requiring compliant devices, and an authentication context on BCSI sites so opening them demands a stronger check than reading email. Revocation is tested against the next-calendar-day clock, including directory sync intervals and any break-glass accounts.",
        },
        {
          name: "Labels, sites and the access programme",
          description:
            "A small label taxonomy with a BCSI label that restricts sharing and applies encryption, dedicated sites as the defined storage locations, and an access review cadence that produces the evidence CIP-004-7 R6 asks for. This is where [Microsoft Purview](/resources/glossary/microsoft-purview/) earns its keep.",
        },
        {
          name: "Retention for filings, storm records and the rest",
          description:
            "Retention labels for rate case material, regulatory filings, storm and outage records and CIP evidence, built with counsel against the schedule that actually applies to you. A [retention policy](/resources/glossary/retention-policy/) also changes what deletion means, so cleanup is planned alongside it.",
        },
        {
          name: "Field and storm workflows",
          description:
            "Inspection, work order and damage-assessment apps built offline-first and tested in the dead zones your crews actually work in, with Teams structures for storm response decided before the next event rather than during it.",
        },
        {
          name: "Copilot, last",
          description:
            "Copilot licences at scale only after BCSI is labelled and permission drift on engineering sites is remediated. Before that, a small pilot group whose access has been reviewed.",
        },
      ],
    },
    {
      type: "prose",
      heading: "BCSI in SharePoint and Teams without pretending the tenant is OT",
      paragraphs: [
        "The mechanics are not exotic. NERC defines BES Cyber System Information as information about a BES Cyber System that could be used to gain unauthorized access or pose a security threat, and explicitly excludes individual pieces such as a device name or an IP address without context. That exclusion matters for classifier design: a policy that fires on every IP address will bury the compliance team in false positives within a week, while a trainable classifier seeded with your actual one-line diagrams, relay setting sheets and access procedures finds the documents that count.",
        "CIP-004-7 R6 defines access to BCSI as having both the ability to obtain and use it, and NERC's implementation guidance treats someone who holds encrypted BCSI plus the keys to decrypt it as having provisioned access. That is the logic behind putting encryption on the BCSI label: a file copied to the wrong place, or reached by the wrong person through a sharing link, stays unreadable to anyone the label does not authorize. It also means the access list you evidence is the label's permission set and the site's membership together, reviewed on the 15-month cycle.",
        "Critical Energy/Electric Infrastructure Information is a separate category governed by FERC under 18 CFR 388.113, covering information designated by FERC or the Department of Energy. Utilities that submit CEII to FERC, or receive it under a non-disclosure agreement, usually want a label for it too. Keep the two labels distinct, because the rules for who may see each one are different and an auditor will ask which applies.",
      ],
    },
    {
      type: "prose",
      heading: "Field crews, inspections and storm response",
      paragraphs: [
        "Field workflows fail on connectivity before they fail on design. Power Apps canvas apps built on [Dataverse](/resources/glossary/dataverse/) can run offline-first: data the crew needs is synchronised to the device, the app works against local data whether or not there is signal, and changes sync with conflict detection when the connection returns. That offline capability is built for Dataverse tables, so an inspection app built on SharePoint lists is the wrong starting point for crews who work in rural territory. For work orders, scheduling and dispatch at volume, Dynamics 365 Field Service's mobile app runs on an offline profile that controls which tables and records sync to the device. [Power Apps vs custom development](/compare/power-apps-vs-custom-development/) covers where a bespoke app is still the right answer.",
        "Storm response is the moment the OT and IT line gets tested. Operators, engineers, crews, contractors and communications staff all converge in Teams, and the fastest path to getting a substation schematic to a crew is to drop it in a chat. Decide the structure before the season: a standing storm team with contractor guest access scoped away from BCSI sites, a channel for operational coordination that carries a retention label, and a rule that BCSI is shared as a link to the governed site rather than as an attachment. Microsoft's archived energy-industry guidance describes exactly this scenario, schematics shared with field staff during outages, as high impact data that must be protected.",
      ],
    },
    {
      type: "prose",
      heading: "Copilot, rate cases and the records you must be able to produce",
      paragraphs: [
        "Copilot enforces the permissions that already exist, and engineering libraries in utilities tend to be broadly shared because the work is collaborative. Two Purview controls matter here. Content encrypted by a label that does not grant the EXTRACT usage right cannot be summarised by Copilot, and a DLP policy for Copilot can stop it summarising labelled files and emails. Microsoft also states that Copilot cannot access content protected by Double Key Encryption. Configure the BCSI label deliberately with those behaviours in mind, then run the pilot.",
        "Records are the quieter risk. For FERC-jurisdictional public utilities and licensees, 18 CFR Part 125 sets the record schedule, requires storage media with a life expectancy at least equal to the retention period, and requires records to be indexed so they can be made available to Commission representatives. State commissions layer their own rules on rate case records, and many municipal utilities and cooperatives answer to state and board requirements rather than Part 125. A retention design that cannot say which rule it is implementing will not survive the next rate case discovery request. The [eDiscovery hold](/resources/glossary/ediscovery-hold/) you need during a contested proceeding should be rehearsed before one opens.",
      ],
    },
    {
      type: "prose",
      heading: "After an acquisition, the OT line has to be redrawn in the surviving tenant",
      paragraphs: [
        "Utility and energy deals, a co-op merger, a distributor roll-up, a developer buying operating assets, produce two tenants and a date. The native cross-tenant tools move mailboxes, OneDrive and Teams chats, but retention policies, DLP, Conditional Access and holds do not migrate, and labels arrive stripped of their policy. If the acquired organization held BCSI, the surviving tenant has to have its BCSI sites, labels and access programme in place before that content moves, or the CIP-004 evidence chain breaks mid-migration.",
        "We run these controls-first, with [cross-tenant identity mapping](/resources/glossary/cross-tenant-identity-mapping/) that accounts for which acquired staff hold OT access. Sequence and cost drivers are on the [tenant migration assessment](/assessments/tenant-migration/) and [tenant migration cost](/pricing/tenant-migration-cost/) pages. Organizations that design and build as well as operate should also read the [construction and engineering](/industries/construction-engineering/) page, because project document control raises many of the same questions.",
      ],
    },
    {
      type: "list",
      heading: "Where energy and utility projects actually fail",
      items: [
        "**Scope set by the vendor, not the CIP-002 list.** A low impact co-op gets sold a medium impact programme, spends its budget on evidence nobody will ask for, and never finishes the basics.",
        "**BCSI labels without defined storage locations.** Labels get applied inconsistently, content keeps landing in general libraries, and the access review has no boundary to review.",
        "**One account for everything.** The engineer who can reach OT jump hosts is phished through ordinary email, and the investigation discovers the corporate credential was the OT credential.",
        "**Revocation tested on paper only.** Directory sync intervals, cached sessions and a break-glass account nobody rotated turn a same-day termination into a missed next-calendar-day deadline.",
        "**Storm channels created during the storm.** Contractors get guest access to whatever team exists, schematics go out as attachments, and nobody can reconstruct the timeline for the after-action review.",
        "**Field apps piloted in the office car park.** The inspection app works on Wi-Fi, fails in the first valley without signal, and crews go back to paper within a month.",
      ],
    },
    {
      type: "list",
      heading: "When we would tell you not to do this",
      items: [
        "**You want the tenant inside the Electronic Security Perimeter.** Microsoft 365 is corporate IT. Control systems, EMS and SCADA, and the systems that manage access to them, belong in the OT estate, and anyone proposing otherwise is proposing a different compliance problem.",
        "**You are low impact only and are being quoted a full CIP information protection programme.** CIP-011 and CIP-004 R6 do not apply to low impact BES Cyber Systems. Good labelling and access hygiene are still worth doing, priced as ordinary governance.",
        "**Your BCSI lives happily in a dedicated on-premises document system with a working access programme.** Moving it to SharePoint for the sake of consolidation adds audit exposure without solving a problem. Move the corporate content and leave that repository alone.",
        "**You need GCC or GCC High because you are a utility.** Being a utility is not the eligibility test. Microsoft ties government cloud eligibility to government entities and specific regulated data such as CUI and ITAR. Most commercial utilities, co-ops and energy companies belong in commercial Microsoft 365.",
        "**You are buying Copilot before anyone has looked at engineering site permissions.** Buy one licence for a reviewed pilot group, fix the permissions and labels, then scale.",
        "**You are an energy company with a working non-Microsoft platform.** If Google Workspace or another suite is mature and governed, CIP alone does not justify a [Microsoft 365 migration](/services/microsoft-365-migration/).",
      ],
    },
  ],
  faqs: [
    {
      q: "Does NERC CIP apply to our Microsoft 365 tenant?",
      a: "The tenant is not a BES Cyber System, and Microsoft states that cloud providers are not themselves subject to CIP. What CIP reaches is BES Cyber System Information stored there. If you have high or medium impact BES Cyber Systems, CIP-011-3 R1 requires you to identify and protect that information wherever it lives, and CIP-004-7 R6 requires you to authorize, verify and revoke provisioned access to it. If you are low impact only, neither of those requirements applies.",
    },
    {
      q: "Can we store BES Cyber System Information in SharePoint or Teams?",
      a: "CIP-004-7 and CIP-011-3, effective 1 January 2024, were revised to make off-premises storage workable, and NERC's implementation guidance covers software-as-a-service scenarios. Microsoft's NERC page says entities interested in BCSI in Microsoft 365 should contact their Microsoft account team. In practice it means dedicated sites as defined storage locations, a [sensitivity label](/resources/glossary/sensitivity-label/) with encryption, an access programme with 15-month verification, and revocation by the end of the next calendar day.",
    },
    {
      q: "What changed in CIP-004-7 and CIP-011-3?",
      a: "Access management for BCSI moved into a new CIP-004-7 Requirement R6, focused on provisioned access, meaning the specific actions that give someone the means to obtain and use BCSI, such as user accounts, rights and encryption keys. CIP-011-3 R1 kept identification and protection of BCSI but made room for logical protection such as encryption rather than physical protection alone. FERC approved further revisions in Order No. 919 in March 2026, including CIP-004-8 and CIP-011-4.1, which have not taken effect yet.",
    },
    {
      q: "How should we separate OT-adjacent users from everyone else in Entra ID?",
      a: "Give staff who hold OT or BCSI access a separate account for that work, with phishing-resistant MFA and Conditional Access requiring compliant devices. Put an authentication context on BCSI sites so opening them requires a stronger check than reading email. Then test revocation end to end, including directory sync intervals and break-glass accounts, against the next-calendar-day deadline in CIP-004-7 R6.",
    },
    {
      q: "Will Copilot surface BCSI or CEII to people who should not see it?",
      a: "Copilot respects existing permissions, so anything a user can open it can surface. Labelled content encrypted without the EXTRACT usage right is not summarised, a Purview DLP policy for Copilot can block summarisation of labelled content, and Microsoft states Copilot cannot access content protected by Double Key Encryption. Label and remediate permissions first, then pilot with a reviewed group.",
    },
    {
      q: "Can Power Apps and Field Service work where crews have no signal?",
      a: "Yes, with conditions. Power Apps canvas apps built on [Dataverse](/resources/glossary/dataverse/) can run offline-first, working against data synchronised to the device and syncing changes with conflict detection when a connection returns. The Dynamics 365 Field Service mobile app uses an offline profile that controls which tables and records sync. Test in the actual territory, not the office.",
    },
    {
      q: "How long must we keep rate case and regulatory records?",
      a: "It depends on who regulates you. FERC-jurisdictional public utilities and licensees follow the schedule in 18 CFR Part 125, which also requires storage media that lasts the full retention period and records indexed so they can be produced to Commission representatives. State commissions set their own rules on top, and many municipal utilities and co-ops answer to state and board requirements instead. Build retention labels against the named rule, with counsel.",
    },
    {
      q: "Do utilities need GCC or GCC High?",
      a: "Usually not. Government cloud eligibility is tied to government entities and particular regulated data such as CUI and ITAR, not to being a utility. Most commercial utilities, co-ops and energy companies belong in commercial Microsoft 365, where CIP information protection is achieved through configuration and evidence. Municipal utilities should check with Microsoft, because government ownership can change the answer.",
    },
  ],
  relatedServiceSlugs: [
    "data-governance",
    "ma-tenant-migration",
    "power-platform",
    "collaboration-enablement",
    "microsoft-365-migration",
  ],
  relatedTermSlugs: [
    "sensitivity-label",
    "microsoft-purview",
    "data-loss-prevention-dlp",
    "retention-policy",
    "ediscovery-hold",
    "dataverse",
    "tenant-to-tenant-migration",
    "cross-tenant-identity-mapping",
  ],
  relatedPageRefs: [
    "/dynamics-365/field-service/",
    "/assessments/tenant-migration/",
    "/pricing/tenant-migration-cost/",
    "/compare/power-apps-vs-custom-development/",
    "/assessments/power-platform-health-check/",
  ],
  proofMetrics: [
    { value: "20+ yrs", label: "of Microsoft consulting" },
    { value: "1 business day", label: "reply from a senior engineer" },
    { value: "Vernon, CT", label: "serving New England and the US" },
    { value: "1 Jan 2024", label: "CIP-004-7 and CIP-011-3 took effect" },
  ],
  triggers: [
    {
      title: "An audit or internal review found BCSI in SharePoint or Teams",
      body: "Network diagrams, relay settings or access lists turned up in general libraries or chats, and you need identification, labelling and an access programme that holds up at the next audit.",
      topic: "BCSI and CIP information protection",
    },
    {
      title: "You acquired or merged with another utility, co-op or distributor",
      body: "Two tenants, two sets of admins and a consolidation date, with OT-adjacent staff and possibly BCSI on both sides that must not lose their controls in transit.",
      topic: "Tenant consolidation after an acquisition",
    },
    {
      title: "Leadership wants Copilot and compliance wants to know what it will see",
      body: "Engineering and operations libraries are broadly shared, and nobody can say which ones hold BCSI or CEII before licences are assigned.",
      topic: "Copilot governance",
    },
    {
      title: "Crews and inspectors are still on paper",
      body: "Inspection forms, damage assessments and work orders are re-keyed days later, and the last app attempt failed the first time crews lost signal.",
      topic: "Field and inspection apps",
    },
  ],
  formTopics: [
    "BCSI and CIP information protection",
    "Tenant consolidation after an acquisition",
    "Copilot governance",
    "Field and inspection apps",
    "Records retention for regulatory filings",
  ],
  subSectors: [
    "Municipal and cooperative utilities",
    "Investor-owned electric, gas and water utilities",
    "Renewable developers and operators",
    "Fuel and propane distribution",
    "Energy services companies",
  ],
  relatedIndustrySlug: "construction-engineering",
  tool: "readiness",
  readinessQuestions: [
    {
      q: "Is BES Cyber System Information stored in SharePoint, OneDrive or Teams without a sensitivity label or a defined storage location?",
      riskIfYes:
        "You cannot evidence identification under CIP-011-3 R1 or scope an access review under CIP-004-7 R6 for content you have not located.",
    },
    {
      q: "Do staff with OT or BCSI access use the same Microsoft 365 account for email and everyday work?",
      riskIfYes:
        "A single phished corporate credential becomes a path to your most sensitive engineering information.",
    },
    {
      q: "Would a terminated employee's access to BCSI sites survive past the end of the next calendar day?",
      riskIfYes:
        "Directory sync delays or unrotated break-glass accounts can put you outside the CIP-004-7 R6 revocation deadline.",
    },
    {
      q: "Are storm and outage coordination run in ad hoc Teams chats with contractor guests and no retention?",
      riskIfYes:
        "Schematics shared as attachments leave your control, and you cannot reconstruct the event for the after-action review.",
    },
    {
      q: "Are Copilot licences assigned or planned before engineering site permissions have been reviewed?",
      riskIfYes:
        "Copilot will surface whatever broadly shared libraries already expose, including labelled but unencrypted BCSI.",
    },
  ],
  ctaHeading: "Draw the OT and IT line in your tenant before an auditor does",
  ctaSubheading:
    "Tell us your registered functions and what is in the tenant today. A senior engineer replies within one business day with what is in scope and what is not.",
  sidebarCta: {
    tag: "Energy and utilities",
    title: "Find the BCSI already in your tenant",
    body: "A scoped review of where BES Cyber System Information and CEII sit in SharePoint, OneDrive and Teams, who can reach it, and what CIP-011 and CIP-004 actually require of you.",
    ctaText: "Scope a review",
  },
};

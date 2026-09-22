import type { Industry } from "../industries";

export const industry: Industry = {
  slug: "financial-services",
  oldSlugs: [],
  name: "Financial Services & Credit Unions",
  metaTitle: "Microsoft 365 for Credit Unions: NCUA and GLBA Setup",
  metaDescription:
    "NCUA and GLBA compliance in Microsoft 365 is a configuration state, not a licence. Audit retention, DLP for member NPI, Copilot readiness and merger consolidation.",
  heroQuestion: "Is Microsoft 365 compliant for a credit union or community bank under NCUA and GLBA?",
  heroAnswer:
    "Microsoft 365 can hold member and customer nonpublic personal information, and Microsoft documents its controls against GLBA and FFIEC guidance. No licence makes an institution compliant. The Interagency Guidelines and NCUA Part 748 require a written, board-approved information security program with access controls, encryption and monitoring. That is a configuration and evidence state you build in the tenant, then prove to an examiner.",
  intro: [
    "Most requests from credit unions and community banks start with a question that sounds like licensing and is actually about evidence. An examiner asked for access reviews and the tenant has no record of one. The merger was approved and there are two tenants with a single effective date. The board read about Copilot and the CIO has to explain what it will surface from ten years of shared drives. Or the incident response plan says the institution will notify NCUA within 72 hours, and nobody has tested whether the audit trail would let anyone establish when the clock started.",
    "The regulatory anchor is the same wherever you sit, but the citation is not. A federally insured credit union answers to NCUA under 12 CFR Part 748, whose Appendix A sets the Guidelines for Safeguarding Member Information and Appendix B the guidance on response programs and member notice. An FDIC-supervised bank works from the Interagency Guidelines Establishing Information Security Standards in Appendix B to 12 CFR Part 364. Mortgage companies, finance companies, non-SEC-registered advisers and privately insured credit unions fall under the FTC Safeguards Rule at 16 CFR Part 314 instead. All three require a risk assessment, access controls, encryption, monitoring and service provider oversight. None of them names a product, and none is satisfied by one.",
    "MP365 is a Microsoft consulting firm in Vernon, Connecticut, working with mid-market organizations across Connecticut, New England and the rest of the US on project-based engagements. For financial institutions that means [data governance](/services/data-governance/) and [Microsoft Purview](/resources/glossary/microsoft-purview/) configuration, [M and A tenant migration](/services/ma-tenant-migration/) when two institutions become one, and [Dynamics 365](/services/dynamics-365/) for member relationships and back office. The core stays where it is. We govern the estate around it."
  ],
  challenges: [
    "Audit records retained for 180 days in a tenant whose incident plan, examiner requests and litigation lookbacks all assume years",
    "Member account numbers, SSNs and loan documents circulating in Teams chat and Exchange with no DLP policy watching either",
    "An approved merger with a legal effective date, two tenants, two domains and no plan for which control set survives",
    "A board asking about Copilot while SharePoint still carries permissions inherited from a file-server migration a decade ago",
    "A 72-hour NCUA notification obligation, or a 36-hour one for banks, with no rehearsed way to establish what happened and when",
    "Cyber risk assessments still built on the FFIEC CAT, which the FFIEC removed from its website on 31 August 2025",
    "Loan pipeline and member relationship data held in spreadsheets and personal mailboxes because the core was never meant to hold it"
  ],
  blocks: [
    {
      type: "prose",
      heading: "Where the core stops and this work starts",
      paragraphs: [
        "Symitar, Fiserv DNA and Corelation KeyStone hold the share and loan ledger, and they stay in place. Nothing on this page replaces or re-platforms a core. What the core does not hold is the second estate: loan files assembled in email, member correspondence, board packets, collections notes, vendor due diligence, BSA working papers, HR files and the spreadsheets that track the commercial pipeline. That estate lives in Microsoft 365, it carries member nonpublic personal information in volume, and it rarely has the access discipline the core has.",
        "So the scope is explicit. We configure identity, retention, labelling, DLP and audit in the Microsoft 365 tenant; we build the member relationship and loan pipeline layer in [Dynamics 365 Sales](/dynamics-365/sales/) or [Dynamics 365 Customer Service](/dynamics-365/customer-service/) where a CRM is warranted; and where a CUSO or a non-bank lender needs its own general ledger, payables and fixed assets, that is [Business Central](/dynamics-365/business-central/). Integration to the core is read-only reporting or a vendor-supported interface, never a second system of record for balances."
      ]
    },
    {
      type: "prose",
      heading: "Which rule applies to you, precisely",
      paragraphs: [
        "Getting the citation right matters because the examiner will use theirs. Section 748.0 requires every federally insured credit union to maintain a security program designed to ensure the security and confidentiality of member records and to respond to incidents of unauthorized access that could cause substantial harm or serious inconvenience to a member. Appendix A adds the operating detail: the board approves the written program, management reports to the board or a board committee at least annually, and the controls include access controls on member information systems, encryption of electronic member information and monitoring to detect actual and attempted attacks. Appendix B covers response programs and member notice.",
        "Incident notification is where the institutions diverge. Since 1 September 2023, section 748.1(c) has required a federally insured credit union to notify NCUA as soon as possible and no later than 72 hours after it reasonably believes it has experienced a reportable cyber incident, including one reported to it by a third party. Banks work to the joint OCC, Federal Reserve and FDIC computer-security incident notification rule, which requires notice to the primary regulator within 36 hours of determining that a notification incident has occurred. Non-bank financial institutions under the FTC Safeguards Rule must notify the FTC no later than 30 days after discovering unauthorized acquisition of unencrypted information for at least 500 consumers, a requirement in force since May 2024. The tenant work is the same in all three cases. The deadline you rehearse against is not."
      ]
    },
    {
      type: "table",
      heading: "What the regulation asks for and what the tenant has to show",
      headers: ["Requirement", "Microsoft 365 configuration that evidences it", "What examiners find when it is missing"],
      rows: [
        [
          "Access controls on member information systems (Part 748 Appendix A)",
          "Entra ID Conditional Access with MFA for every user and phishing-resistant methods for administrators, access reviews on groups that reach member data, and lifecycle workflows for joiners, movers and leavers.",
          "A finding on access reviews, usually because a teller who moved to lending kept both sets of permissions and nobody can show when access was last certified."
        ],
        [
          "Encryption of electronic member information",
          "Sensitivity labels with encryption on loan and member files, Purview Message Encryption for outbound email carrying NPI, and BitLocker enforced through Intune on every endpoint that syncs OneDrive.",
          "Loan packages emailed to title companies and appraisers in the clear, with a written policy saying they are not."
        ],
        [
          "Monitoring to detect actual and attempted attacks",
          "Purview Audit with retention set deliberately rather than left at the 180-day Audit (Standard) default, Defender alerts routed to someone who responds, and export to a SIEM where one exists.",
          "An incident that cannot be scoped because the sign-in and mailbox access records aged out before anyone looked."
        ],
        [
          "Response programs and member notice (Appendix B)",
          "A documented playbook that names who decides reportability, the audit queries that establish scope, and a tested eDiscovery hold on the affected mailboxes and sites.",
          "A 72-hour clock that started on a Friday with no one able to say which members' information was in the compromised mailbox."
        ],
        [
          "Annual report to the board",
          "Purview Compliance Manager assessments against the GLBA and NIST CSF premium templates, refreshed on a cadence, with improvement actions tied to named owners.",
          "A board report assembled by hand once a year from screenshots, with no link between the risks it lists and the controls that were changed."
        ]
      ]
    },
    {
      type: "steps",
      heading: "How the work sequences",
      steps: [
        {
          name: "Audit and incident evidence posture",
          description:
            "First, because it is the only gap that cannot be closed after the fact. We establish what the tenant retains today and for which workloads, then decide between Audit (Premium) retention policies, the ten-year add-on for administrators and high-volume member-facing staff, or a SIEM feed. The test is simple: could you scope a compromised mailbox from records that still exist?"
        },
        {
          name: "Identity and access baseline",
          description:
            "Conditional Access and MFA without exceptions for service accounts nobody owns, privileged roles separated from daily accounts, and access reviews scheduled on the groups that reach member information. Access certification is a frequent examiner question, and it is fixable in weeks rather than quarters."
        },
        {
          name: "Permission-state reporting",
          description:
            "Data access governance reports, sharing-link activity and site access reviews across SharePoint and OneDrive. This routinely finds a lending site shared with a group that has since absorbed the whole institution, and board packets readable by anyone with a login."
        },
        {
          name: "Classification and DLP for member NPI",
          description:
            "Sensitivity labels on the content that warrants them, and [data loss prevention](/resources/glossary/data-loss-prevention-dlp/) built on the sensitive information types that match financial data, such as US bank account numbers, ABA routing numbers, credit card numbers and SSNs, tuned in simulation mode against real mail before anything is blocked."
        },
        {
          name: "Retention and eDiscovery rehearsal",
          description:
            "A [retention policy](/resources/glossary/retention-policy/) set designed with compliance and counsel, separating vital records, loan files, BSA material and everything else, followed by a live [eDiscovery hold](/resources/glossary/ediscovery-hold/) test on a shared mailbox and a Teams chat. A hold that has never been placed is not evidence of anything."
        },
        {
          name: "Copilot, last",
          description:
            "Licences at scale only after permissions are remediated and member data is labelled. One Copilot licence bought early unlocks SharePoint Advanced Management reporting, which makes it an audit tool for the months before it becomes a productivity tool."
        }
      ]
    },
    {
      type: "prose",
      heading: "Credit union mergers run on an effective date, not a project plan",
      paragraphs: [
        "Credit union consolidation is routine, and a merger lands on IT with a date already fixed by the boards, the members and NCUA. On that date the continuing credit union takes on the merging credit union's members, records and obligations, including whatever sits in its tenant. The common mistake is treating the tenant as a later problem. Member service staff from both institutions need to find each other, share files and answer member calls as one organization from the first morning, which means [Day 1 coexistence](/resources/glossary/day-1-coexistence/) in calendars, directory and Teams is part of the merger plan rather than an afterthought.",
        "The technical asymmetry is the same one every [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) meets. Mailboxes, OneDrive and Teams chat can move with native tooling or third-party platforms; retention policies, DLP rules, Conditional Access and eDiscovery holds do not move at all, and sensitivity labels arrive without their protection. If the merging credit union has a hold in place for a collections matter, that hold does not follow the data. Which tenant survives should be decided on which one has the stronger control set and the more defensible audit history, not on seat counts. We build the target controls before data moves and keep the source preserved until compliance signs off. For sequence and cost, start with the [tenant migration assessment](/assessments/tenant-migration/) and [what drives migration cost](/pricing/tenant-migration-cost/)."
      ]
    },
    {
      type: "prose",
      heading: "After the CAT: what to assess against now",
      paragraphs: [
        "The FFIEC Cybersecurity Assessment Tool was removed from the FFIEC website on 31 August 2025. The FFIEC chose not to update it and pointed institutions to newer government resources instead, naming NIST Cybersecurity Framework 2.0 and the CISA Cybersecurity Performance Goals. NCUA's Automated Cybersecurity Evaluation Toolbox remains available as a voluntary maturity assessment for credit unions. None of these frameworks mandates a specific tool, and nothing in them says an institution must assess inside Microsoft's own portal.",
        "The practical value of Purview Compliance Manager here is narrower and more useful: it carries premium assessment templates for GLBA and NIST CSF, maps Microsoft-managed controls separately from the ones you own, and keeps improvement actions with owners and dates. That gives the information security officer a standing object to refresh before each board report instead of a spreadsheet rebuilt once a year. It is evidence of the Microsoft 365 slice of the program, not of the program, and we say so in the report. The same logic applies in regulated healthcare, which is why our [healthcare](/industries/healthcare/) work follows the same sequence."
      ]
    },
    {
      type: "list",
      heading: "Where these projects actually fail",
      items: [
        "**Audit retention discovered during the incident.** Every other control can be improved after an examiner finding. Records that have already aged out cannot be recovered, and they are what a 72-hour notification decision depends on.",
        "**DLP switched to block on day one.** Policies that stop loan officers emailing appraisers get turned off within a week. Simulation against real traffic, then tuned enforcement, is the only sequence that survives.",
        "**The merger tenant decided by the bigger institution.** Size is not a control set. The surviving tenant inherits the weaker institution's gaps if nobody compares them first.",
        "**Copilot approved because the licence question has an easy answer.** Copilot respects existing permissions, which is exactly the problem when those permissions have never been reviewed.",
        "**A CRM built as a shadow core.** Balances and transaction history belong in the core. A Dynamics 365 build that copies them creates a reconciliation problem and a second system for examiners to question.",
        "**Offboarding run from a checklist.** The account is disabled, the mailbox is converted without a hold, and the departed loan officer's OneDrive is deleted on schedule while a dispute is still open."
      ]
    },
    {
      type: "list",
      heading: "When we would tell you not to do this",
      items: [
        "**E5 for every employee.** Member-facing staff who handle NPI at volume, administrators and likely custodians justify E5-class compliance features. Most back-office and facilities staff do not, and mixed licensing with targeted add-ons is usually the defensible answer.",
        "**A CRM before the process exists.** If the loan pipeline is not defined on paper, Dynamics 365 will only automate the disagreement. For small teams a well-governed SharePoint list or a [Power Platform](/services/power-platform/) app may be enough for a year.",
        "**A full ERP for a CUSO with one entity and a few hundred transactions a month.** Business Central is the right size for most CUSOs and non-bank lenders, but if the existing accounting package is closing on time, replacing it is not a compliance project.",
        "**A migration timed to land on the merger effective date.** Coexistence on the effective date, cutover weeks later once both control sets are settled, is safer than a single weekend nobody can roll back.",
        "**Anything that replaces or duplicates the core.** If a proposal moves balances or transaction history out of Symitar, DNA or KeyStone, it is a core conversion under a different name, and it is not what we do."
      ]
    }
  ],
  faqs: [
    {
      q: "Is Microsoft 365 GLBA compliant?",
      a: "Microsoft publishes documentation of how its services map to GLBA and FFIEC guidance, which tells you the platform can support a compliant program. It does not make your institution compliant. GLBA's safeguards obligations fall on the financial institution, through Part 748 for federally insured credit unions, the Interagency Guidelines for banks, or the FTC Safeguards Rule for non-bank institutions. Each requires a written program, risk assessment, access controls, encryption and monitoring, and each is evidenced by how the tenant is configured and what it records."
    },
    {
      q: "Does NCUA require credit unions to report cyber incidents within 72 hours?",
      a: "Yes. Since 1 September 2023, 12 CFR 748.1(c) requires a federally insured credit union to notify NCUA as soon as possible and no later than 72 hours after it reasonably believes it has experienced a reportable cyber incident, or after a third party notifies it of one. The initial notice is an early alert, not a full assessment. The tenant question is whether your audit records and alerting let you form that reasonable belief quickly and scope the incident afterwards."
    },
    {
      q: "What replaced the FFIEC Cybersecurity Assessment Tool?",
      a: "Nothing replaced it one for one. The FFIEC removed the CAT from its website on 31 August 2025 and pointed institutions to NIST Cybersecurity Framework 2.0 and the CISA Cybersecurity Performance Goals. NCUA's ACET remains available to credit unions as a voluntary tool. Many institutions now assess against NIST CSF 2.0, and Purview Compliance Manager has a premium NIST CSF template covering the Microsoft 365 portion of that assessment."
    },
    {
      q: "Is Microsoft 365 Copilot safe to deploy at a credit union?",
      a: "Copilot works within the permissions users already have, so it is as safe as your SharePoint and OneDrive permission state. If member files, board packets or HR records are broadly shared, Copilot makes them easy to find by plain-language question. Remediate permissions, label member NPI with [sensitivity labels](/resources/glossary/sensitivity-label/), then license at scale. A single early licence unlocks SharePoint Advanced Management reporting, which is the fastest way to see the problem."
    },
    {
      q: "How long does Microsoft 365 keep audit logs?",
      a: "Purview Audit (Standard) keeps audit records for 180 days. Audit (Premium) keeps Entra ID, Exchange, OneDrive and SharePoint records for one year by default, and ten-year retention needs a per-user add-on and a policy created in advance, because the policy is not retroactive. For an institution that may need to scope an incident, answer an examiner or respond to litigation long after the event, the default is a gap that has to be closed before it is needed."
    },
    {
      q: "Can Dynamics 365 replace our core banking system?",
      a: "No, and we would not propose it. Symitar, Fiserv DNA and Corelation KeyStone stay in place as the system of record for accounts and balances. Dynamics 365 Sales or Customer Service sits alongside the core for member relationships, service cases, referrals and the loan pipeline, reading from the core rather than duplicating it. For a CUSO or non-bank lender that needs its own accounting, Business Central handles the general ledger and payables; the [Business Central readiness assessment](/assessments/business-central-readiness/) is the place to start."
    },
    {
      q: "Which tenant should survive a credit union merger?",
      a: "The one with the stronger control set and the more defensible audit history, which is not always the continuing credit union's. Retention policies, DLP, Conditional Access and eDiscovery holds do not migrate between tenants, so choosing the weaker tenant means rebuilding controls under deadline while member data is already moving. Compare the two control sets before the effective date and plan coexistence for Day 1, with cutover once the target is ready."
    },
    {
      q: "Does the FTC Safeguards Rule apply to credit unions?",
      a: "Not to federally insured credit unions, which are covered by NCUA under Part 748. The FTC lists non-federally insured credit unions among the institutions its Safeguards Rule covers, alongside mortgage lenders and brokers, finance companies and investment advisers not registered with the SEC. The FTC rule is more prescriptive on some points, including MFA for anyone accessing customer information and encryption of customer information in transit and at rest."
    }
  ],
  relatedServiceSlugs: ["data-governance", "ma-tenant-migration", "dynamics-365", "microsoft-365-migration"],
  relatedTermSlugs: [
    "microsoft-purview",
    "data-loss-prevention-dlp",
    "sensitivity-label",
    "retention-policy",
    "ediscovery-hold",
    "tenant-to-tenant-migration",
    "day-1-coexistence"
  ],
  relatedPageRefs: [
    "/assessments/tenant-migration/",
    "/pricing/tenant-migration-cost/",
    "/dynamics-365/sales/",
    "/dynamics-365/customer-service/",
    "/assessments/business-central-readiness/"
  ],
  proofMetrics: [
    { value: "20+ yrs", label: "of Microsoft consulting" },
    { value: "72 hrs", label: "NCUA cyber incident notification window" },
    { value: "1 business day", label: "reply from a senior engineer" },
    { value: "Vernon, CT", label: "serving New England and the US" }
  ],
  triggers: [
    {
      title: "A merger has an effective date",
      body: "Two tenants, two domains and member service staff who need to work as one institution on the first morning.",
      topic: "Credit union merger"
    },
    {
      title: "An examiner finding on access or retention",
      body: "Access reviews nobody can evidence, or audit records that aged out before the question was asked.",
      topic: "Examiner finding"
    },
    {
      title: "The board asked about Copilot",
      body: "Leadership wants the productivity case and the risk answer before anything is licensed at scale.",
      topic: "Copilot readiness"
    },
    {
      title: "An incident drill exposed the gaps",
      body: "The 72-hour or 36-hour notification plan exists, but the tabletop showed nobody could scope a compromised mailbox.",
      topic: "Incident readiness"
    }
  ],
  formTopics: [
    "Credit union merger",
    "Examiner finding",
    "Copilot readiness",
    "Incident readiness",
    "Dynamics 365 for member relationships"
  ],
  subSectors: ["Credit unions", "Community banks", "CUSOs", "Non-bank lenders", "Wealth and advisory firms"],
  relatedIndustrySlug: "healthcare",
  tool: "readiness",
  readinessQuestions: [
    {
      q: "Is your tenant still on the default 180-day audit retention?",
      riskIfYes: "An incident or examiner question about anything older than six months cannot be answered from records that no longer exist."
    },
    {
      q: "Can staff send member account numbers or SSNs in Teams chat or email without any DLP policy inspecting it?",
      riskIfYes: "Member NPI is leaving through channels your written policy says it does not use, and nothing records it."
    },
    {
      q: "Are there accounts, including service accounts, that can sign in without MFA?",
      riskIfYes: "Those accounts are the most likely route into member information and among the first things an examiner or insurer asks about."
    },
    {
      q: "Is anyone asking for Copilot before SharePoint permissions have been reviewed?",
      riskIfYes: "Copilot will surface whatever users can already reach, including over-shared member files and board material."
    },
    {
      q: "Is a merger or acquisition planned with no decision yet on which tenant survives?",
      riskIfYes: "Controls do not migrate between tenants, so the decision made by default often lands on the weaker control set."
    }
  ],
  ctaHeading: "Find out what your tenant would show an examiner",
  ctaSubheading:
    "A senior engineer reviews your audit, identity and DLP posture against Part 748 or the Interagency Guidelines and tells you what to fix first.",
  sidebarCta: {
    tag: "Credit unions and banks",
    title: "Merger or exam on the calendar?",
    body: "Tell us the date and the two tenants. We will tell you what has to be in place before it.",
    ctaText: "Talk to an engineer"
  }
};

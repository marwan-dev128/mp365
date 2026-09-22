import type { BlogPost } from "../blog";

export const post: BlogPost = {
  slug: "ncua-cyber-incident-notification-microsoft-365",
  title: "NCUA's 72-Hour Cyber Rule in Microsoft 365",
  metaDescription:
    "What counts as a reportable cyber incident under 12 CFR 748.1(c), when the NCUA 72-hour clock starts, and which Microsoft 365 logs you need to meet it.",
  cluster: "Data Governance",
  authorSlug: "mp365-team",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  excerpt:
    "The NCUA rule gives a credit union 72 hours from reasonable belief, not from certainty. Whether you can form that belief in time depends on Microsoft 365 records that may already have aged out.",
  imageUrl: "/images/industries/financial-services.jpg",
  body: [
    {
      type: "prose",
      paragraphs: [
        "Since 1 September 2023, 12 CFR 748.1(c) has required every federally insured credit union to notify NCUA as soon as possible, and no later than 72 hours, after it reasonably believes it has experienced a reportable cyber incident. Where the incident sits at a CUSO, cloud provider or other third party, the clock also runs from the moment that third party notifies you, whichever comes first. The first notice is an early alert, not a finished investigation.",
        "The regulation is short. The hard part is the evidence underneath it. A credit union forms a reasonable belief from sign-in records, mailbox access records, file activity and security alerts, and in most credit unions those live in Microsoft 365, retained for periods set by licence defaults nobody chose. This article covers what the rule requires, how it differs from the bank and FTC rules, and how to configure the tenant so the 72 hours are spent deciding rather than searching.",
      ],
    },
    {
      type: "prose",
      heading: "What 748.1(c) counts as reportable",
      paragraphs: [
        "The rule starts with a cyber incident, defined as an occurrence that actually or imminently jeopardises, without lawful authority, the integrity, confidentiality or availability of information on an information system, or the system itself. Only a substantial cyber incident that leads to one of three outcomes is reportable. Good-faith activity requested by the system owner, such as a contracted penetration test, is excluded.",
      ],
    },
    {
      type: "list",
      level: 3,
      heading: "The three prongs",
      items: [
        "**Substantial loss of confidentiality, integrity or availability** of a network or member information system, resulting from unauthorised access to or exposure of sensitive data, disruption of vital member services, or a serious impact on the safety and resiliency of operational systems and processes.",
        "**Disruption of business operations, vital member services or a member information system** resulting from a cyberattack or exploitation of vulnerabilities. NCUA's own example in the final rule is a distributed denial of service attack that disrupts member account access.",
        "**Disruption or unauthorised access through a third party**, meaning a compromise of a credit union service organisation, cloud service provider or other third-party data hosting provider, or a supply chain compromise. The preamble limits this to third parties that have a relationship with the credit union, such as a payroll provider, not any organisation that happens to hold data about your members.",
      ],
    },
    {
      type: "prose",
      heading: "When the clock starts and how to report",
      paragraphs: [
        "The trigger is reasonable belief, not confirmation. Commenters asked NCUA to start the clock only on actual discovery, as the banking agencies do, and the Board declined. The final rule preamble is explicit that notice cannot wait until the credit union or its vendor has finished investigating, and that an initial report may be incomplete or even inaccurate. For third-party incidents it adds a practical test: you may not know about a vendor breach until the vendor tells you, but if you lose access to member accounts you reasonably should be aware your core provider has a problem. NCUA also says blocked phishing, failed access attempts and unsuccessful malware do not have to be reported, and encourages a credit union that is unsure to contact the agency.",
        "NCUA's quick reference guide lists three channels: the online form at cyberreports.ncua.gov, a voicemail to 1-833-CYBERCU (1-833-292-3728), or a secure email to cybercu@ncua.gov through the NCUA Secure Email Message Center. Be ready with the reporter's name and title, a callback number, the charter number without leading zeros, the credit union name, the date and time you reasonably believe the incident took place, and a general description of services affected, whether sensitive data was compromised and the operational impact. The same guide says not to send sensitive personal information, indicators of compromise, specific vulnerabilities or attachments in the initial notice. The 72-hour notice sits alongside, not in place of, the response program and member notice framework in Appendix B to Part 748.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "How the bank and FTC rules differ",
      paragraphs: [
        "Banks answer to the joint computer-security incident notification rule, codified by the FDIC at 12 CFR Part 304 subpart C, with parallel OCC and Federal Reserve rules at 12 CFR Part 53 and Part 225 subpart N. A banking organisation must notify its primary federal regulator as soon as possible and no later than 36 hours after it determines that a notification incident has occurred, meaning a computer-security incident that has materially disrupted or degraded, or is reasonably likely to, its operations, material business lines or US financial stability. Bank service providers must separately notify their bank customers of incidents likely to disrupt covered services for four or more hours. The clock is shorter, but it starts on determination rather than on reasonable belief.",
        "Non-bank lenders, finance companies and privately insured credit unions covered by the FTC Safeguards Rule have a different test again. Section 314.4(j) requires notice to the FTC as soon as possible and no later than 30 days after discovering unauthorised acquisition of unencrypted information about at least 500 consumers, with discovery treated as the first day the event is known to any employee, officer or agent other than the person responsible. The FTC notes that reports may be made public. The [financial services](/industries/financial-services/) overview sets out which regime applies to which institution.",
      ],
    },
    {
      type: "prose",
      heading: "Reasonable belief depends on records that still exist",
      paragraphs: [
        "Nothing in the rule mentions Microsoft 365, but the tenant decides how quickly a credit union can move from an odd alert to a defensible belief, and how well it can scope the incident afterwards. Four retention facts matter, all from Microsoft's current documentation.",
        "First, Purview Audit (Standard) is on by default and keeps records for 180 days. Second, Audit (Premium) keeps Entra ID, Exchange, OneDrive and SharePoint records for one year by default, but only for activity by users holding an E5 licence or the E5 Compliance or E5 eDiscovery and Audit add-on; everyone else, including guests, stays at 180 days. Ten years needs a per-user add-on and a policy created in advance, because it is not retroactive. Third, the Entra admin centre keeps sign-in and audit logs for seven days on Entra ID Free and 30 days on P1 or P2, and upgrading does not bring expired data back. Fourth, Defender XDR advanced hunting queries up to 30 days of raw data unless a Sentinel workspace or the streaming API extends it.",
        "The MailItemsAccessed action is the record that answers the question examiners and members will ask after a mailbox compromise: which messages did the attacker actually reach. Microsoft documents it as part of Audit (Standard), enabled by default for users with an Office 365 or Microsoft 365 E3 or E5 licence. Our [Microsoft Purview](/resources/glossary/microsoft-purview/) work starts by checking that it is in fact being recorded for the mailboxes that hold member information.",
      ],
    },
    {
      type: "table",
      heading: "Incident types, evidence sources and default retention",
      headers: ["Incident shape", "Microsoft 365 evidence source", "Default retention"],
      rows: [
        [
          "Compromised mailbox or business email compromise",
          "Unified audit log: sign-ins, MailItemsAccessed, inbox rule creation, send activity",
          "180 days in Audit (Standard); one year for Exchange records of E5-licensed users under Audit (Premium)",
        ],
        [
          "Credential theft or sign-in from attacker infrastructure",
          "Entra sign-in logs and risky sign-ins in the Entra admin centre; Entra records in the unified audit log",
          "Sign-ins seven days on Free, 30 days on P1 or P2; risky sign-ins up to 90 days on P2; audit log copy as above",
        ],
        [
          "Mass download or external sharing of member files",
          "Unified audit log file and sharing events for SharePoint and OneDrive",
          "180 days, or one year for E5-licensed users",
        ],
        [
          "Ransomware or malware on endpoints",
          "Defender XDR advanced hunting device tables and alerts",
          "30 days of raw data unless extended through Sentinel or streaming",
        ],
        [
          "Phishing campaign delivered and clicked",
          "Defender for Office 365 email and URL click tables in advanced hunting",
          "30 days of raw data unless extended",
        ],
        [
          "CUSO, core or cloud vendor incident",
          "Vendor notice, plus Entra sign-in and audit logs for the vendor's guest accounts and app registrations",
          "Seven or 30 days in the Entra admin centre unless exported; the vendor notice is only as durable as where you file it",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Who owns the clock",
      paragraphs: [
        "The rule puts the obligation on the credit union, not on IT, so the decision that starts the clock needs a named owner with authority to make it, a deputy for weekends and leave, and a written record of when the belief was formed and on what evidence. In most credit unions that is the information security officer with the CEO or chief risk officer as the escalation point, but the name matters less than the fact that it is written down before the incident. IT's job is to put the evidence in front of that person within hours; the tenant configuration is what makes that possible.",
        "The failure pattern is familiar. An alert fires on a Friday evening, goes to a shared mailbox nobody reads until Monday, and by the time someone asks whether it is reportable, a third of the window has gone. Clear ownership fixes that faster than any tool.",
      ],
    },
    {
      type: "steps",
      heading: "Building a 72-hour-ready runbook in Microsoft 365",
      steps: [
        {
          name: "Record what the tenant retains today",
          description:
            "List audit retention policies, count which users actually hold E5 or the audit add-on, confirm the Entra edition, and note whether any logs leave the tenant for a SIEM. Most credit unions find the answer is 180 days for most staff and 30 days of sign-ins.",
        },
        {
          name: "Close the retention gap before it is needed",
          description:
            "Scope Audit (Premium) policies or the ten-year add-on to administrators and staff who handle member information at volume, and export Entra sign-in and audit logs through diagnostic settings to Log Analytics or storage. None of this is retroactive, which is why it comes first.",
        },
        {
          name: "Route the alerts that start the clock",
          description:
            "The built-in alert policies are on by default, including creation of forwarding or redirect rules, suspicious email forwarding, users restricted from sending, and elevation of Exchange admin privilege. Point their notifications at a monitored address, not a shared mailbox nobody reads at weekends.",
        },
        {
          name: "Pre-write the scoping queries",
          description:
            "Saved audit searches for MailItemsAccessed, inbox rule creation, file downloads and sign-ins for a named user, plus the advanced hunting queries for email and device events. Running a tested query on day one beats writing one under pressure.",
        },
        {
          name: "Document the reportability decision",
          description:
            "A one-page record: owner, deputy, the three prongs as a checklist, the time reasonable belief was formed, and the NCUA channel used. It doubles as the evidence that the notice went out on time.",
        },
        {
          name: "Rehearse the hold",
          description:
            "Place a test [eDiscovery hold](/resources/glossary/ediscovery-hold/) on a mailbox, a OneDrive and a Teams chat so the procedure and permissions are proven before a real incident needs them.",
        },
        {
          name: "Keep a vendor register the runbook can use",
          description:
            "Every CUSO, core processor and cloud provider with tenant access, the guest accounts and app registrations they use, and the contract contact who will notify you. A third-party notice received by an unmonitored inbox still starts the clock.",
        },
      ],
    },
    {
      type: "list",
      heading: "Where 72-hour readiness actually fails",
      items: [
        "**Logs aged out before anyone looked.** A compromise found on day 40 cannot be scoped from Entra sign-in logs kept for 30 days, and one found in month seven cannot be scoped from 180 days of audit records. No later purchase recovers them.",
        "**Premium assumed, not licensed.** The one-year default applies only to users with E5 or the audit add-on. Tenants on mixed licensing often discover that the teller whose mailbox was compromised was on 180 days.",
        "**The third-party incident discovered late.** A CUSO notice lands in a generic vendor-management inbox, or a core outage is treated as a technical fault for two days before anyone asks whether prong three applies.",
        "**Legal hold not placed.** Offboarding or a [retention policy](/resources/glossary/retention-policy/) removes a mailbox or OneDrive that turned out to matter. A hold preserves what still exists when it is placed; it does not bring back what was purged before.",
        "**Waiting for the full picture.** The preamble is clear that notice cannot wait for the investigation to finish. Holding the report until the forensics firm has written its findings is the most common way to miss 72 hours with good intentions.",
      ],
    },
    {
      type: "prose",
      heading: "Where to start",
      paragraphs: [
        "The retention step is the only one that cannot be done after the fact, so it goes first. The rest, alert routing, queries, the decision record and a rehearsed hold, is weeks of work rather than a programme, and it maps directly onto the monitoring and response obligations in Part 748 that the [financial services](/industries/financial-services/) page walks through control by control. The same audit-first sequence applies in our [healthcare](/industries/healthcare/) work, where the lookback periods are longer still.",
        "Mergers add a complication: records in the merging credit union's tenant keep their own retention, and a hold placed there does not follow the data. We cover that in [the credit union merger guide](/blog/credit-union-merger-microsoft-365/). For the wider [data governance](/services/data-governance/) practice, or to have a senior engineer review your tenant's audit posture against the rule, [contact us](/contact/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What counts as a reportable cyber incident under NCUA rules?",
      a: "A substantial cyber incident that leads to a substantial loss of confidentiality, integrity or availability of a network or member information system; a disruption of business operations or vital member services from a cyberattack; or a disruption or unauthorised access caused by a compromise at a CUSO, cloud provider, other third-party data host or in the supply chain. Blocked phishing, failed access attempts and unsuccessful malware do not have to be reported.",
    },
    {
      q: "When does the NCUA 72-hour clock start?",
      a: "When the credit union reasonably believes it has experienced a reportable cyber incident, or, for third-party incidents, when the third party notifies it, whichever is sooner. It does not wait for the investigation to finish. NCUA treats the first notice as an early alert and accepts that it may be incomplete.",
    },
    {
      q: "Do we have to report a vendor's or CUSO's breach to NCUA?",
      a: "Yes, if the vendor has a relationship with the credit union and the compromise disrupts your operations or exposes your sensitive data. The rule names CUSOs, cloud service providers and other third-party data hosts, plus supply chain compromises. It does not require reporting a breach at an unrelated organisation that happens to hold data about your members.",
    },
    {
      q: "How long does Microsoft 365 keep the logs needed to scope an incident?",
      a: "Purview Audit (Standard) keeps 180 days. Audit (Premium) keeps Entra ID, Exchange, OneDrive and SharePoint records for one year for E5-licensed users, and ten years needs a per-user add-on and a policy created in advance. Entra sign-in logs are kept seven days on Free and 30 days on P1 or P2, and Defender advanced hunting covers 30 days.",
    },
  ],
};

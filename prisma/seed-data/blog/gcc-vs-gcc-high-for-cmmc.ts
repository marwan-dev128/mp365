import type { BlogPost } from "../blog";

export const post: BlogPost = {
  slug: "gcc-vs-gcc-high-for-cmmc",
  title: "GCC vs GCC High for CMMC Level 2",
  metaDescription:
    "Commercial, GCC, GCC High or an enclave for CMMC Level 2, decided by data type, with what Microsoft and DFARS 252.204-7012 actually say and what choosing wrong costs.",
  cluster: "Data Governance",
  authorSlug: "mp365-team",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  excerpt:
    "CMMC does not name a Microsoft cloud, but Microsoft's own documentation all but decides it. The deciding question is whether any of your CUI is export-controlled.",
  imageUrl: "/images/industries/federal-contractors.jpg",
  body: [
    {
      type: "prose",
      paragraphs: [
        "CMMC Level 2 does not name a Microsoft product. It names a security baseline, and Microsoft's own documentation then does most of the deciding. Microsoft positions commercial Microsoft 365 for CMMC Level 1, positions **GCC High** for Levels 2 and 3 when configured appropriately, and states that GCC is not suitable for CUI Specified such as ITAR data. So the short answer is this: if any of your controlled unclassified information is export-controlled, plan on GCC High, for the whole company or for an enclave. If your CUI is not export-controlled, GCC is a defensible answer. Commercial Microsoft 365 is the right home for federal contract information and nothing more sensitive.",
        "The choice matters more than the licence line suggests, because GCC High is a separate environment, not a setting. A contractor that picks commercial or GCC today and finds export-controlled drawings next year is not buying an upgrade. It is standing up a new tenant and running a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/), usually under a prime's deadline.",
        "This article sets out the decision by data type, what Microsoft and the regulations say in their own words, how the purchase path differs, what an enclave does and does not take out of scope, and what choosing wrong costs. It is the detailed version of the cloud question on our [federal and defence contractors](/industries/federal-contractors/) page. MP365 does the Microsoft architecture and migration work; we do not perform CMMC assessments.",
      ],
    },
    {
      type: "table",
      heading: "Which Microsoft cloud each type of data needs",
      headers: ["Data you hold", "Commercial Microsoft 365", "GCC", "GCC High", "GCC High enclave"],
      rows: [
        [
          "Federal contract information only (FAR 52.204-21, CMMC Level 1)",
          "Fits. Microsoft positions commercial Microsoft 365 for Level 1, which is the 15 basic safeguards in FAR 52.204-21.",
          "Works, but buys eligibility validation and a narrower purchase path you do not yet need.",
          "Over-specified for FCI alone, unless CUI work is already on the horizon.",
          "Not needed. There is no CUI to separate.",
        ],
        [
          "CUI Basic",
          "Not by Microsoft's positioning. Its DFARS documentation names its US Government Office 365 services, not commercial, as adequate for DFARS 7012.",
          "Defensible. FedRAMP High, DFARS support, and public Microsoft Entra ID, so collaboration with commercial tenants changes little.",
          "Fits, and removes the question if export-controlled work arrives later.",
          "Viable in GCC or GCC High if the CUI genuinely sits with a defined group of people.",
        ],
        [
          "CUI Specified",
          "No.",
          "Microsoft states GCC is not suitable for CUI Specified, giving ITAR and nuclear information as its examples, because that data requires US sovereignty.",
          "Fits. Microsoft says only GCC High offers that sovereignty.",
          "Viable, with the boundary enforced by labelling and DLP rather than by policy.",
        ],
        [
          "ITAR or EAR-controlled technical data",
          "No. Microsoft lists GCC High and DoD as its in-scope Office 365 environments for both ITAR and EAR.",
          "No. Win one export-controlled programme and GCC becomes a second migration.",
          "The expected answer. US-based storage, US-citizen screened personnel for content access, and ITAR contractual commitments.",
          "Common where a defined engineering group handles the drawings. Email is where it tends to break.",
        ],
      ],
    },
    {
      type: "prose",
      heading: "What Microsoft's own documentation says",
      paragraphs: [
        "Partner guides tend to paraphrase Microsoft. It is worth reading the source, because it is more direct than most of them. Microsoft's CMMC page describes Microsoft 365 for Enterprise as supporting organisations in meeting CMMC Level 1 requirements. It describes Microsoft 365 GCC High as supporting CMMC Level 2 and Level 3 requirements when configured appropriately, alongside FedRAMP High, DFARS, DISA Impact Level 4 and ITAR. The same page answers the GCC question plainly: GCC is not suitable to hold CUI Specified, because that data requires US sovereignty, which only GCC High offers.",
        "Microsoft's buying guide for Microsoft 365 Government goes further. It describes GCC as the lead offering for all customers that do not hold FedRAMP High or DoD CUI. Read literally, that sentence steers any holder of DoD CUI towards GCC High, which is why Microsoft account teams often start the conversation there. The CMMC page's narrower wording, which rules GCC out only for CUI Specified, is why GCC remains a legitimate answer for a contractor whose CUI is Basic and not export-controlled. Decide which reading your prime and your assessor will apply before you buy.",
        "Two more statements shape the architecture. On multiple business units, Microsoft's guidance is to put all of them in one GCC High environment rather than splitting them by compliance requirement. On enclaves, it notes that the most common spillage happens through personal storage, especially email, which puts much more scope outside the boundary than the shared data suggests. For ITAR data specifically, Microsoft's ITAR page says customers must sign additional agreements notifying Microsoft that they intend to store ITAR-controlled data. That is a contract step, not a configuration one, and it belongs in the plan.",
      ],
    },
    {
      type: "prose",
      heading: "The DFARS 7012 cloud requirement",
      paragraphs: [
        "DFARS 252.204-7012 is what makes the cloud choice contractual. Paragraph (b)(2)(ii)(D) says that if you use an external cloud service provider to store, process or transmit covered defence information, you must require and ensure that provider meets security requirements equivalent to the **FedRAMP Moderate baseline**, and complies with the clause's paragraphs on incident reporting, malicious software, media preservation, access for forensic analysis and damage assessment. Those are the paragraphs that bring the 72-hour reporting window and the 90-day image preservation requirement.",
        "The CMMC rule carries the same test into assessment. Under 32 CFR 170.16, a contractor may use a cloud offering for CUI at Level 2 if it is FedRAMP Authorized at the Moderate baseline or higher on the FedRAMP Marketplace, or meets equivalent requirements in accordance with DoD policy. DoD CIO has published a memo setting out what that equivalency means, and it is a demanding standard that the contractor, not the provider, has to evidence.",
        "The clause does not name a Microsoft product, so the practical question is which Microsoft services Microsoft stands behind for it. Its DFARS documentation names the Office 365 US Government services as having a FedRAMP Moderate authorisation and being adequate for DFARS. That is the documentary gap commercial Microsoft 365 cannot close by configuration: hardening a commercial tenant improves your own controls, but it does not change what Microsoft contractually commits to for the service underneath them.",
      ],
    },
    {
      type: "prose",
      heading: "Why export control usually settles it",
      level: 3,
      paragraphs: [
        "Both ITAR and the EAR contain an end-to-end encryption carve-out, at 22 CFR 120.54(a)(5) and 15 CFR 734.18(a)(5). Sending or storing unclassified technical data secured with end-to-end encryption and FIPS 140-2 or successor modules, and not intentionally stored in a proscribed country, is not treated as an export. It is sometimes offered as a reason commercial cloud is acceptable for export-controlled data.",
        "Read the definition before relying on it. The EAR defines end-to-end encryption as data that is not unencrypted between originator and intended recipient, with the means of decryption not provided to any third party. A collaboration service that indexes, previews and co-authors your drawings does not normally work that way. Microsoft's EAR page lists GCC High and DoD as its in-scope Office 365 environments, and reminds customers that under the EAR the customer, not the cloud provider, is the exporter. Treat the carve-out as a question for export counsel, not as a cloud strategy.",
      ],
    },
    {
      type: "list",
      heading: "How the purchase path differs",
      items: [
        "**Eligibility comes first for both.** GCC and GCC High are only provisioned after Microsoft validates that your organisation is eligible. Commercial companies qualify by holding regulated data such as ITAR data or CUI, with proof.",
        "**GCC can be bought through most channels.** Microsoft lists Enterprise Agreement through a licensing solution provider, AOS-G, MPSA, Web Direct and the Cloud Solution Provider programme.",
        "**GCC High has two.** An Enterprise Agreement through a licensing solution provider for organisations of 500 seats and above, or an AOS-G partner below that. It is not sold through CSP.",
        "**There are no GCC High trials.** Microsoft does not offer trials of GCC High or DoD, and does not offer GCC trials to commercial customers, so proof-of-concept work happens after purchase.",
        "**ITAR storage needs its own paperwork.** The additional agreement Microsoft requires for ITAR-controlled data runs alongside the order, and validation typically has to clear before a tenant exists, so start both early.",
      ],
    },
    {
      type: "prose",
      heading: "What an enclave actually takes out of scope",
      paragraphs: [
        "An enclave means putting only the people and systems that touch CUI into GCC High, and leaving the rest of the company on commercial Microsoft 365. It reduces licence spend and can narrow the assessment. The regulation is what decides whether it works. 32 CFR 170.19 sorts Level 2 assets into CUI assets, security protection assets, contractor risk managed assets and specialised assets, and treats assets as out of scope only where they are physically or logically separated from CUI assets.",
        "That has two consequences people miss. First, the security protection assets in scope include whatever provides security to the enclave: the identity provider, device management, the logging platform and the administrators' workstations. An enclave managed from the commercial side pulls that side into scope. Second, separation has to hold every day. An illustrative but typical shape is a 200-person machine shop that puts 30 engineers into a GCC High enclave. Within weeks, drawings are being forwarded from enclave mailboxes to commercial ones so people can read them on a phone, and the scope has quietly become the whole company.",
        "What makes an enclave hold is [sensitivity labels](/resources/glossary/sensitivity-label/) that identify CUI and export-controlled content, [DLP policies](/resources/glossary/data-loss-prevention-dlp/) that stop labelled content leaving the boundary, and conditional access that keeps enclave identities on compliant devices. That is [data governance](/services/data-governance/) work, and it is what an assessor looks at when asking how CUI is controlled rather than where it is stored. If most of your company touches CUI, Microsoft's guidance to move the whole organisation into GCC High is usually the cheaper answer over the life of the contract.",
      ],
    },
    {
      type: "prose",
      heading: "The cost of choosing wrong",
      paragraphs: [
        "There is no switch that converts a commercial or GCC tenant to GCC High. GCC uses public Microsoft Entra ID, as commercial does; GCC High sits in a separate government environment with its own identities, provisioned after validation. Mailboxes, SharePoint sites, Teams, OneDrive, device enrolment, conditional access, service accounts and app registrations all have to be rebuilt or moved. Microsoft's CMMC guidance says to allocate at least three months for the migration phase.",
        "That makes a wrong first choice expensive in a particular way. Choosing commercial and then finding CUI means discovery, clean-up of a spillage, and a [Microsoft 365 migration](/services/microsoft-365-migration/) with coexistence and a cutover. Choosing GCC and then winning an ITAR programme means doing the same migration a second time. Neither is a licence change, and budgeting them as one is the most common reason these projects stall between two tenants with CUI in both. We cover the mechanics in [moving from commercial Microsoft 365 to GCC High](/blog/commercial-to-gcc-high-migration/), and budget ranges sit on [tenant migration cost](/pricing/tenant-migration-cost/).",
        "The July 2026 suspension of CMMC Phase 2 does not change this arithmetic. It paused when third-party certification becomes the default, not DFARS 7012, the NIST SP 800-171 requirements or the annual affirmation a senior person signs in SPRS. The cloud decision is driven by the data you already hold.",
      ],
    },
    {
      type: "list",
      heading: "Where the decision goes wrong",
      items: [
        "**The cloud is chosen before the CUI is found.** The inventory of contracts, data types and storage locations comes first; a [tenant migration assessment](/assessments/tenant-migration/) is usually where it lands.",
        "**GCC is chosen for price, without asking about export control.** The first ITAR or EAR programme then forces a second migration.",
        "**The enclave is drawn around the org chart.** Engineering is enclosed, but quality, purchasing and the ERP that stores the same drawings are not.",
        "**External collaboration is assumed.** GCC High SharePoint and OneDrive sharing reaches only other GCC High organisations, so the model for sharing with primes and suppliers has to be designed.",
        "**Line-of-business systems are forgotten.** Dynamics 365, Power Platform and third-party tools need checking against what Microsoft offers in the target cloud, which is where [manufacturing](/industries/manufacturing/) suppliers most often find a gap, in the ERP.",
      ],
    },
    {
      type: "prose",
      heading: "Where to start",
      paragraphs: [
        "Start with the data, not the licence. List the contracts that carry DFARS 7012, the CUI and export-controlled data those contracts create, and every place it lives today. The answer to GCC or GCC High, whole company or enclave, usually falls out of that list. If you want a senior engineer to work through it with you, the [federal and defence contractors](/industries/federal-contractors/) page sets out how we approach it and how to reach us. We build and document the Microsoft environment; the assessment belongs to you or an authorised C3PAO.",
      ],
    },
  ],
  faqs: [
    {
      q: "Does CMMC Level 2 require GCC High?",
      a: "Not by name. CMMC and DFARS 252.204-7012 require a cloud provider meeting the FedRAMP Moderate baseline or its equivalent. Microsoft positions GCC High for Levels 2 and 3, and says GCC is not suitable for CUI Specified such as ITAR data. If your CUI is export-controlled, GCC High is the practical answer; if it is CUI Basic only, GCC is defensible.",
    },
    {
      q: "Can commercial Microsoft 365 meet CMMC Level 2?",
      a: "Not by Microsoft's own positioning. Microsoft describes commercial Microsoft 365 as supporting CMMC Level 1, and its DFARS documentation names the US Government Office 365 services as adequate for DFARS. Hardening a commercial tenant improves your controls but does not change what Microsoft commits to for the service. Keep commercial for federal contract information only.",
    },
    {
      q: "Can we move from commercial or GCC to GCC High later?",
      a: "Yes, but only by migration. GCC High is a separate environment with its own identities, provisioned after Microsoft validates eligibility, so mail, files, Teams, devices and identities all move in a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/). Microsoft advises allowing at least three months for the migration phase.",
    },
    {
      q: "Is a GCC High enclave cheaper than moving the whole company?",
      a: "On licences, usually. Over the life of the contract, only if the CUI is genuinely contained. The enclave's identity, device management and logging are in scope too, and Microsoft notes most spillage happens through email. Without labels and DLP enforcing the boundary, the scope tends to grow to the whole company anyway.",
    },
  ],
};

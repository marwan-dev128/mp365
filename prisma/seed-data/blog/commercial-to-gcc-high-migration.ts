import type { BlogPost } from "../blog";

export const post: BlogPost = {
  slug: "commercial-to-gcc-high-migration",
  title: "Moving From Commercial Microsoft 365 to GCC High",
  metaDescription:
    "Moving to GCC High is a tenant-to-tenant migration into a new tenant, not a licence switch. What moves, what is rebuilt, and where CUI spills during the move.",
  cluster: "Data Governance",
  authorSlug: "mp365-team",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  excerpt:
    "GCC High is a separate tenant with separate identities. Getting there is a tenant-to-tenant migration, and Microsoft's own cross-tenant tools stop at the cloud boundary.",
  imageUrl: "/images/industries/federal-contractors.jpg",
  body: [
    {
      type: "prose",
      paragraphs: [
        "Moving from commercial Microsoft 365 to GCC High is a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) into a new, separate tenant. There is no licence change, support ticket or admin setting that converts an existing commercial tenant. GCC High runs on Microsoft Entra Government rather than public Entra ID, it is provisioned only after Microsoft validates your eligibility, and your custom domain can be verified in only one tenant at a time. Mail, files, Teams, identities, devices and every application registration have to be moved or rebuilt.",
        "Two facts shape the plan more than any other. First, Microsoft's native cross-tenant mailbox and OneDrive migration features do not work across the commercial to government cloud boundary, so the move relies on third-party tooling and a longer coexistence period than a commercial consolidation. Second, the coexistence period is when controlled unclassified information is most likely to end up in the wrong tenant, and Microsoft names email as the most common route.",
        "This article covers the sequence as we run it for defence suppliers, what moves and what is rebuilt, and the failure modes that matter. Whether you need GCC High at all, as opposed to GCC or a hardened commercial tenant, is covered on the [federal and defence contractors](/industries/federal-contractors/) page and in [GCC vs GCC High for CMMC](/blog/gcc-vs-gcc-high-for-cmmc/)."
      ]
    },
    {
      type: "prose",
      heading: "Eligibility and the purchase path come first",
      paragraphs: [
        "GCC High is not something you can sign up for. Microsoft 365 Government is available to government entities and to non-government organisations that hold regulated data such as ITAR data or CUI, and Microsoft requires proof before it will establish the environment. The first step in Microsoft's buying guidance is submitting the eligibility validation form; the order comes after.",
        "The sales channel is narrower than commercial. Microsoft lists GCC High as available through an Enterprise Agreement via a licensing solution provider, generally for 500 seats and above, or through an AOS-G partner for organisations under 500 seats. It is not sold through the Cloud Solution Provider programme, and Microsoft states there are no trials of GCC High. The Power Apps and Power Automate government service descriptions say the same about CSP for GCC High customers, and Microsoft lists Dynamics 365 GCC High subscriptions as Volume Licensing only.",
        "The practical consequence is that validation sits on the critical path. Nothing can be built until the tenant exists, and the tenant does not exist until validation clears and the order is placed. Start it in parallel with discovery rather than after the design is signed off."
      ]
    },
    {
      type: "prose",
      heading: "A new tenant means new identities and one domain move",
      paragraphs: [
        "Every user gets a new account in a new directory. Microsoft's Power Platform and Dynamics 365 government documentation describes the GCC High deployment as one that requires Microsoft Entra Government for customer identities, where GCC uses public Entra ID. Sign-in moves to government endpoints such as microsoftonline.us, which matters for firewall rules and for any line-of-business application that hard-codes commercial endpoints. Conditional access, multifactor registration, groups, service accounts and app registrations are recreated, not copied, and [cross-tenant identity mapping](/resources/glossary/cross-tenant-identity-mapping/) is what ties each source object to its new counterpart for every tool in the migration.",
        "The domain is the hard serialisation point, exactly as it is in a commercial consolidation. Microsoft does not allow a domain name to be verified in more than one Entra tenant, and a domain cannot be removed from a tenant while any user, group or application still references it in a user name, email or proxy address, or app ID URI. Until cutover, the GCC High tenant runs on interim addresses and mail routes between the two tenants on those addresses. The [cutover](/resources/glossary/cutover-migration/) weekend is when the domain is stripped from the commercial tenant, verified in GCC High and assigned to the real mailboxes.",
        "Collaboration between the two tenants during the move is not on by default either. Microsoft Entra B2B collaboration across the Azure global and Azure Government clouds has to be enabled through Microsoft cloud settings in both tenants, followed by inbound and outbound cross-tenant access settings. That is worth doing deliberately, because it is also the channel by which data crosses the boundary during [Day-1 coexistence](/resources/glossary/day-1-coexistence/)."
      ]
    },
    {
      type: "prose",
      heading: "Microsoft's cross-tenant tools stop at the cloud boundary",
      paragraphs: [
        "This is the part most commercial migration plans get wrong. Microsoft's cross-tenant mailbox migration documentation states that cross-cloud tenant to tenant migration is not supported, and gives Office 365 Worldwide to Office 365 Government as its example. The cross-tenant OneDrive migration documentation states that the feature is not supported for Government Cloud users, naming GCC High specifically. The native tooling that makes a commercial consolidation comparatively predictable, covered in [what breaks in a cross-tenant mailbox migration](/blog/cross-tenant-mailbox-migration-what-breaks/), is therefore not available for this move.",
        "Microsoft's own CMMC guidance says the migration from a commercial to a government cloud is similar to any other cloud migration, and advises allocating at least three months for the migration phase and using tools to facilitate the process. In practice that means third-party migration tooling that supports GCC High as a target, run with copy passes and incremental syncs rather than the mailbox moves and OneDrive redirects a commercial move can rely on. Without the native OneDrive feature there is no automatic redirect from old shared links, so users will notice broken links to files that were shared before the move.",
        "Teams is the weakest area, as it is in any tenant migration. There is no native cross-tenant path for chat and channel message history, the same position described in [Teams migration in a divestiture](/blog/teams-migration-divestiture/), and the decision about what history is carried, exported for retention or left behind has to be made and documented before the first wave."
      ]
    },
    {
      type: "table",
      heading: "What moves and what is rebuilt",
      headers: ["Workload", "What happens", "What the plan needs"],
      rows: [
        [
          "Mailboxes and archives",
          "Copied by third-party tooling. Microsoft's native cross-tenant mailbox migration does not support a commercial to government move.",
          "Tool licensing, copy and delta passes, archive sizing, and an Outlook profile rebuild on every device at cutover."
        ],
        [
          "OneDrive",
          "Copied by third-party tooling. Microsoft's cross-tenant OneDrive migration is not supported for GCC High, so there is no automatic redirect from old links.",
          "Target accounts provisioned first, a freeze window per wave, and user communication about broken shared links."
        ],
        [
          "SharePoint sites and Teams files",
          "Copied site by site. Permissions granted to individuals arrive as assignments that must be mapped to new identities.",
          "A site inventory, a decision per site about what is retired, and permission clean-up before rather than after."
        ],
        [
          "Teams chat and channel messages",
          "No native cross-tenant migration path.",
          "An explicit decision: third-party tooling, export for retention only, or a documented choice to leave history behind."
        ],
        [
          "Identities, groups and conditional access",
          "Rebuilt in Microsoft Entra Government. Nothing is copied from the commercial directory.",
          "Identity mapping, MFA re-registration, and access policies written to the NIST SP 800-171 control set from the start."
        ],
        [
          "Intune devices",
          "Re-enrolled into the new tenant, which for many device types means a touch per device.",
          "Device inventory, an enrolment runbook, and a service desk ready for the spike."
        ],
        [
          "Sensitivity labels, DLP and retention",
          "Rebuilt. Labels are tenant-scoped, so migrated content arrives referencing labels the new tenant does not know.",
          "The [sensitivity label](/resources/glossary/sensitivity-label/) taxonomy and [DLP policies](/resources/glossary/data-loss-prevention-dlp/) live in GCC High before the first wave lands."
        ],
        [
          "Power Platform, Dataverse and Dynamics 365",
          "Rebuilt in government environments, on different URLs, with connections re-authorised against new identities.",
          "A feature and connector availability check against Microsoft's US Government availability summary before design."
        ]
      ]
    },
    {
      type: "prose",
      heading: "Dynamics 365, Power Platform and third-party apps",
      paragraphs: [
        "Microsoft lists Dynamics 365 Sales, Customer Service, Field Service, Finance, Supply Chain Management, Project Service Automation and Remote Assist among the products available in GCC High. Several GCC products are not on the GCC High list, including Customer Voice, Guides, Human Resources and Project Operations, and Business Central does not appear in the Dynamics 365 US Government product list at all. If a design depends on any of these, check before the licence order rather than after.",
        "Power Apps and Power Automate run in GCC High on separate government URLs, with Dataverse environments hosted in Azure Government. Environments, solutions and flows are rebuilt and redeployed, not moved, and every connection is re-authorised against the new identities. Microsoft states that exceptions to feature parity exist and points to its Business Applications US Government availability summary; that document, not the commercial documentation, is the one to design against. Governance work described in our [Power Platform](/services/power-platform/) practice applies unchanged, just in a new admin centre.",
        "Connectors deserve their own line in the inventory. In GCC High and DoD, Microsoft disables all new connectors by default until an administrator reviews and enables them, and Microsoft notes that third-party connectors can store or process data on systems outside the government accreditation boundary. The same applies to SaaS applications integrated with Entra ID: each one needs a supported path to authenticate against Entra Government, and some commercial add-ins and integrations simply have no GCC High option."
      ]
    },
    {
      type: "steps",
      heading: "How the migration sequences",
      steps: [
        {
          name: "Inventory the CUI and the estate",
          description: "Find where CUI and export-controlled data actually live, then inventory mailboxes including shared and resource mailboxes, OneDrive, SharePoint, Teams, devices, apps and flows. A [tenant migration assessment](/assessments/tenant-migration/) is where this usually lands, and it is the input to any honest [cost estimate](/pricing/tenant-migration-cost/)."
        },
        {
          name: "Submit eligibility validation and order",
          description: "Validation first, then an Enterprise Agreement through a licensing solution provider or an AOS-G partner. Run it in parallel with discovery because everything else waits on the tenant existing."
        },
        {
          name: "Build the GCC High tenant to the control set",
          description: "Conditional access, MFA, Intune compliance, audit retention, labels, DLP and administrative separation, configured and documented before any content arrives, so the first migrated file lands inside a governed boundary."
        },
        {
          name: "Design coexistence and identity mapping",
          description: "Interim addresses, mail routing between the tenants, cross-cloud B2B settings if needed, and a mapping file every tool uses. Decide what users may and may not send across the boundary during the overlap."
        },
        {
          name: "Pilot, then migrate in waves",
          description: "A pilot with IT and one engineering group proves the tooling and the runbook. Waves follow working relationships, with files leading mail for engineering teams whose work lives in drawings."
        },
        {
          name: "Cut over the domain",
          description: "Final delta passes, domain removed from the commercial tenant, verified and assigned in GCC High, MX records repointed, Outlook profiles rebuilt. This step is serial and cannot be parallelised."
        },
        {
          name: "Clean up and decommission the source",
          description: "Sweep the commercial tenant for residual CUI, apply a documented retention or deletion decision, remove coexistence configuration, and hand over configuration evidence for your self-assessment or a C3PAO assessment."
        }
      ]
    },
    {
      type: "list",
      heading: "Where these migrations fail",
      items: [
        "**Spillage during coexistence.** For weeks two tenants are live and people are working in both. Microsoft notes that the most common spillage happens through personal storage, especially email. An engineer replying from the old mailbox with a drawing attached puts CUI back into the commercial tenant, and DLP in the new tenant cannot see it.",
        "**Forwarding rules left in place.** Users and administrators set up forwarding from old to new mailboxes, or the reverse, to make coexistence painless. Every rule is a route for controlled content to cross the boundary, and they tend to survive cutover unnoticed.",
        "**The plan assumes native tooling.** A schedule built on Microsoft's cross-tenant mailbox and OneDrive features, which do not support this move, slips as soon as the tool choice is revisited.",
        "**Labels and DLP configured after migration.** Content lands in GCC High unlabelled and uncontrolled, and the first weeks of the new environment are exactly the period an assessor will ask about.",
        "**The old tenant is left running.** A commercial tenant still holding copies of CUI after cutover is an unmanaged copy outside the boundary. Clean-up and decommissioning are part of the project, not a later task.",
        "**Integrations discovered at cutover.** A quoting tool, PLM connector or scanner sending mail through the commercial tenant stops working, or keeps working and keeps sending controlled data to the wrong place."
      ]
    },
    {
      type: "prose",
      heading: "Before you order licences",
      paragraphs: [
        "Treat this as a migration project with a licence line in it, not a licence order with a migration afterthought. The effort sits in identity, coexistence, tooling and clean-up, and it scales with how disordered the commercial estate is rather than with seat count. We run it the same way as a post-acquisition consolidation under our [M and A tenant migration](/services/ma-tenant-migration/) and [Microsoft 365 migration](/services/microsoft-365-migration/) work, with the Purview design handled as [data governance](/services/data-governance/) rather than left to the end.",
        "MP365 builds and migrates the Microsoft environment; we do not perform CMMC assessments and are not an assessment organisation. The wider context for defence suppliers, including when GCC or an enclave is the better answer, is on the [federal and defence contractors](/industries/federal-contractors/) page. If you already know you are going, a conversation about sequence and tooling is the useful next step, and you can [contact us](/contact/) to have it with a senior engineer."
      ]
    }
  ],
  faqs: [
    {
      q: "Can Microsoft convert our commercial tenant to GCC High?",
      a: "No. GCC High is a separate environment that uses Microsoft Entra Government identities and is provisioned only after Microsoft validates your eligibility. Getting there means creating a new tenant and running a [tenant-to-tenant migration](/resources/glossary/tenant-to-tenant-migration/) of mail, files, Teams, identities and devices, with a domain cutover at the end."
    },
    {
      q: "Does Microsoft's cross-tenant migration tooling work for GCC High?",
      a: "Not for a move from commercial. Microsoft's cross-tenant mailbox migration documentation states that cross-cloud migration, such as Worldwide to Government, is not supported, and cross-tenant OneDrive migration is not supported for GCC High users. The move is done with third-party tooling that supports GCC High as a target."
    },
    {
      q: "How long does a commercial to GCC High migration take?",
      a: "Microsoft's CMMC guidance says to allocate at least three months for the migration phase. Eligibility validation and building the new tenant to the control set come before that, and the duration then depends on identity complexity, data volume and how many waves the business can absorb."
    },
    {
      q: "Can we use Dynamics 365 and Power Platform in GCC High?",
      a: "Partly. Power Apps and Power Automate are available in GCC High, as are Dynamics 365 Sales, Customer Service, Field Service, Finance and Supply Chain Management. Business Central is not in Microsoft's US Government product list, new connectors are disabled by default in GCC High, and feature parity has exceptions worth checking before design."
    }
  ]
};

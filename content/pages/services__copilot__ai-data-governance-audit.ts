import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/copilot/ai-data-governance-audit/",
  intro:
    "Copilot data protection starts with knowing who can open which files, because Microsoft 365 Copilot answers from whatever each user can already reach. MP-365's AI Data Governance Audit is a data access and permissions review for SharePoint, OneDrive, Teams and Dynamics 365, run before you enable Copilot.",
  atAGlance: {
    bestFor:
      "IT, compliance and business leaders who suspect their files are shared too widely and want that fixed before Copilot goes live.",
    includes:
      "SharePoint and OneDrive permission and sharing review, label coverage check, Dynamics 365 role review, ranked cleanup list and owner review support.",
    notIncluded:
      "Cybersecurity services, identity and access management services, compliance certification, managed IT support and license resale.",
    howItStarts:
      "A discovery call about your tenant, the Copilot plans you have and any areas where you already know files are overshared.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What Copilot data protection means in this audit",
      paragraphs: [
        "Copilot data protection, as MP-365 uses the term, is about access: making sure Copilot can only draw on content the right people should see. The audit is a permissions review, not a security operations service.",
        "People often search for Microsoft 365 Copilot security when they mean this question. Microsoft states that Copilot honors the same access controls that apply across Microsoft 365. The work is therefore to make those controls accurate. The audit is one service in MP-365's [Microsoft Copilot consulting](/services/copilot/).",
      ],
    },
    {
      type: "prose",
      heading: "What is Copilot oversharing?",
      paragraphs: [
        "Copilot oversharing is when Copilot surfaces content to a user who can technically open it but was never meant to read it. Copilot did not break a rule. The permission was too broad to begin with.",
        "Typical causes are sites shared with \"Everyone except external users\", old sharing links that never expired, owner-less project sites and files stored in the wrong library. Before Copilot, those files were hard to find. With Copilot, a single question can pull them up.",
      ],
    },
    {
      type: "list",
      heading: "Signs your tenant has an oversharing problem",
      items: [
        "**Whole-company access:** sites or files shared with every internal user through built-in groups.",
        "**Link sprawl:** hundreds of sharing links created over the years, some open to \"Anyone\" or to the whole organization.",
        "**Orphaned sites:** project and team sites with no active owner to approve access.",
        "**Unlabeled sensitive files:** HR, finance and legal documents with no sensitivity label.",
        "**Guest leftovers:** external users who still have access after a project ended.",
        "**Admin-level CRM roles:** Dynamics 365 users with broader security roles than their jobs need.",
      ],
    },
    {
      type: "table",
      heading: "What the data access review examines",
      headers: ["Area", "What MP-365 reviews", "Typical finding"],
      rows: [
        [
          "Site permissions",
          "Snapshot of who can reach each SharePoint and OneDrive site",
          "Sites open to thousands of users or to external guests",
        ],
        [
          "Everyone-style groups",
          "Items shared with all internal users or with Everyone",
          "Files exposed because of a built-in group",
        ],
        [
          "Sharing links",
          "Sites with the most new links in the last 28 days",
          "Links created for convenience and never removed",
        ],
        [
          "Sensitivity labels",
          "Where labeled files live and where labels are missing",
          "Sensitive libraries with no label",
        ],
        [
          "Site ownership",
          "Owners, inactive sites and site attestations",
          "Sites with no accountable owner",
        ],
        [
          "Dynamics 365 roles",
          "Security roles assigned to CRM users",
          "Users with unnecessary Admin access",
        ],
      ],
    },
    {
      type: "steps",
      heading: "How do you audit data access before enabling Copilot?",
      steps: [
        {
          name: "Agree the scope",
          description:
            "List the workloads, departments and Dynamics 365 environments that Copilot users will touch first.",
        },
        {
          name: "Generate the access reports",
          description:
            "Run the SharePoint data access governance reports and collect label and sharing link data for the scope.",
        },
        {
          name: "Rank sites by exposure",
          description:
            "Order sites by how many people can open them, whether guests are present and how sensitive the content appears.",
        },
        {
          name: "Review Dynamics 365 roles",
          description:
            "Check which CRM security roles each user holds and flag access beyond the job.",
        },
        {
          name: "Ask site owners to confirm",
          description:
            "Start site access reviews so the people who know each site confirm members and sharing.",
        },
        {
          name: "Apply interim restrictions",
          description:
            "Where cleanup will take time, limit access or keep chosen sites out of Copilot while the real fix proceeds.",
        },
        {
          name: "Deliver the cleanup list",
          description:
            "Hand over a ranked list with owners and recommended actions, and support the fixes if you ask us to.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Which permissions should be cleaned up first?",
      paragraphs: [
        "Clean up the widest permissions on the most sensitive content first. That order gives the largest risk reduction for the least effort, and it matches Microsoft's own deployment blueprint, which starts with remediating oversharing.",
      ],
    },
    {
      type: "list",
      level: 3,
      heading: "Priority order MP-365 uses",
      items: [
        "**First:** items shared with Everyone or Everyone except external users, where the content is sensitive.",
        "**Second:** sites open to external guests that no longer need them.",
        "**Third:** sites with the broadest membership and no owner.",
        "**Fourth:** sharing links on finance, HR, legal and executive libraries.",
        "**Fifth:** inactive sites that still hold old, widely shared files.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Interim measures versus real fixes",
      paragraphs: [
        "Microsoft's Restricted Content Discovery keeps selected sites and files from surfacing in Copilot, and Restricted Access Control limits a site to specific groups. Both buy time. Neither replaces correct permissions, because the files stay shared. MP-365 labels each as temporary in the report.",
      ],
    },
    {
      type: "prose",
      heading: "Copilot data governance beyond the first cleanup",
      paragraphs: [
        "Copilot data governance is the ongoing routine that stops oversharing from returning. It combines site ownership policies, inactive site reviews, regular access reports and Microsoft Purview labels and policies. Microsoft recommends running site permission snapshots quarterly and activity reports monthly.",
        "MP-365 sets up the first cycle and trains your administrators to repeat it. For the label and policy side, see [Microsoft Purview and permission models](/services/data-governance/microsoft-purview/).",
      ],
    },
    {
      type: "list",
      heading: "What you get from the audit",
      items: [
        "**Exposure report:** every site in scope, ranked by exposure and sensitivity.",
        "**Cleanup list:** specific actions with owners and priority.",
        "**Dynamics 365 role findings:** users and roles that exceed job needs, as covered in the [Dynamics 365 security roles audit](/services/dynamics-365-crm/security-roles-audit/).",
        "**Interim controls plan:** which sites to restrict now and when to lift each restriction.",
        "**Governance routine:** a schedule for repeating reports and owner reviews.",
        "**Admin handover:** a working session with your SharePoint and Microsoft 365 administrators.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft tools used in the audit",
      paragraphs: [
        "The review uses SharePoint Advanced Management, the SharePoint admin center, Microsoft Purview, the Microsoft 365 admin center and the Dynamics 365 security role settings. Microsoft says SharePoint Advanced Management is included with a Microsoft Copilot license. Microsoft 365 E5 alone gives limited data access governance reporting, without the snapshot reports or remedial actions. MP-365 checks what your licenses allow before the audit starts.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: access control with approvals and reports",
      paragraphs: [
        "For one client, MP-365 set up CRM access control with an approval process, documented access levels and automatic access reports. The same habits drive this audit: someone approves access, the levels are written down and reports show drift.",
        "The [clients page](/clients/) lists named projects.",
      ],
    },
    {
      type: "prose",
      heading: "When this audit is not the right fit",
      paragraphs: [
        "This audit is not a cybersecurity assessment, a threat review or a compliance certification. MP-365 does not provide those services, so look to a specialist security provider if you need them. A smaller tenant with tidy permissions may only need the broader [Copilot readiness assessment](/services/copilot/readiness/), and teams about to launch an agentic assistant should also read about [Copilot Cowork rollout](/services/copilot/cowork/).",
        "Effort depends on the number of sites and users in scope. The [pricing page](/pricing/) explains how MP-365 engages.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is Copilot oversharing?",
      a: "Copilot oversharing happens when Copilot shows a user content they can open but were never meant to read. The files were already too widely shared. Copilot makes them easy to find. Typical causes are company-wide groups, old sharing links and sites with no owner.",
    },
    {
      q: "How do you audit data access before enabling Copilot?",
      a: "Run permission, sharing link and label reports, rank sites by exposure, review Dynamics 365 roles and ask site owners to confirm access. Then apply temporary limits where needed and produce a cleanup list. MP-365 follows this sequence in the AI Data Governance Audit.",
    },
    {
      q: "Which permissions should be cleaned up first?",
      a: "Start with sensitive content shared to Everyone or Everyone except external users. Then address external guests who no longer need access, sites with broad membership and no owner, and sharing links on finance, HR and legal libraries. Inactive sites come after, because their files matter less.",
    },
    {
      q: "Can Copilot access files a user is not allowed to open?",
      a: "No. According to Microsoft's 2026 documentation, Copilot can only summarize or reference content the user is authorized to access. For encrypted content, the user also needs the EXTRACT and VIEW usage rights. The practical risk is content that users are allowed to open but should not.",
    },
    {
      q: "Is the AI Data Governance Audit a security service?",
      a: "No. It is a data access and permissions review. It checks who can open which content in SharePoint, OneDrive and Dynamics 365 so Copilot draws on the right sources. MP-365 does not provide cybersecurity, identity management or compliance certification.",
    },
    {
      q: "What is Microsoft 365 Copilot security, and does this audit cover it?",
      a: "Copilot security in Microsoft's model mostly means permissions, labels and policies that control what Copilot can use. This audit covers the permissions part for SharePoint, OneDrive and Dynamics 365 roles. Threat detection, incident response and compliance programs fall outside it.",
    },
    {
      q: "Do we need SharePoint Advanced Management for the audit?",
      a: "It helps a great deal. Microsoft says SharePoint Advanced Management is included with a Microsoft Copilot license and provides the data access governance reports and site access reviews. MP-365 checks what your licenses include first and adapts the method if some reports are unavailable.",
    },
    {
      q: "Will the audit change our permissions?",
      a: "Not on its own. The audit reads reports and produces a ranked list. Changes follow only after you approve them, and site owners confirm access for their own sites. MP-365 can carry out approved fixes or hand the list to your administrators.",
    },
    {
      q: "Can we hide risky sites from Copilot while we clean up?",
      a: "Yes, temporarily. Microsoft offers Restricted Content Discovery to keep chosen sites and files from surfacing in Copilot, and Restricted Access Control to limit a site to certain groups. Both are stopgaps, so MP-365 records each one with a plan to remove it.",
    },
    {
      q: "How often should we repeat the review?",
      a: "Microsoft recommends running site permission snapshot reports quarterly and sharing activity reports monthly. MP-365 sets that routine during handover. Repeat sooner after a merger, a reorganization or a large Copilot expansion, because each of those changes who can reach what.",
    },
  ],
  closing:
    "Copilot data protection comes down to accurate permissions on the content Copilot can reach. MP-365's audit finds the gaps, ranks them and helps your owners close them, so Copilot launches on data you have reviewed.",
  cta: {
    heading: "Review your data access before Copilot",
    body: "Tell MP-365 which sites and Dynamics 365 environments Copilot will touch. We will scope a data access and permissions review.",
    text: "Book a free consultation",
  },
};

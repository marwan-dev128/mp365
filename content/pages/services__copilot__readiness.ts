import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/copilot/readiness/",
  intro:
    "A Microsoft 365 Copilot readiness assessment checks your permissions, sharing, content and people before you switch Copilot on. MP-365 runs it for mid-size and enterprise companies, and the result is a ranked list of fixes plus a pilot plan.",
  atAGlance: {
    bestFor:
      "IT leaders and business sponsors who have bought, or are about to buy, Microsoft 365 Copilot and want a safe first launch.",
    includes:
      "Permission and sharing review, content cleanup priorities, pilot group selection, role-based training plan and a written readiness report.",
    notIncluded:
      "Microsoft license sales, cybersecurity services, managed IT support and non-Microsoft AI tools.",
    howItStarts:
      "A discovery call about your tenant, your Copilot plans and the teams that will use it first.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What a Microsoft 365 Copilot readiness assessment is",
      paragraphs: [
        "A Copilot readiness assessment is a structured review of your Microsoft 365 tenant before Copilot users arrive. It is one part of MP-365's wider [Microsoft Copilot consulting](/services/copilot/), and it answers three questions: what could Copilot reach, who is it ready for, and what must change first.",
        "Microsoft states that Copilot grounds its answers in data users already have permission to access. That sentence is the reason for the assessment. Any file that is shared too widely becomes easy to find the moment someone asks Copilot a question.",
      ],
    },
    {
      type: "list",
      heading: "Problems a readiness assessment solves",
      items: [
        "**\"Our SharePoint permissions are a mess.\"** Years of sharing links, old project sites and broad groups mean nobody can say who sees what.",
        "**\"We bought licenses and nobody uses them.\"** Seats sit idle because no pilot group, training or success measure was set.",
        "**\"HR and finance files worry me.\"** Sensitive libraries sit in sites shared with the whole company.",
        "**\"Copilot answers are poor.\"** Outdated, duplicate and unlabeled documents produce weak results.",
        "**\"Leadership wants a date, and IT wants a plan.\"** Sponsors and administrators have no shared list of blockers.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 runs the readiness assessment",
      steps: [
        {
          name: "Confirm scope and goals",
          description:
            "Agree which departments, workloads and use cases the first Copilot users will cover.",
        },
        {
          name: "Pull the access reports",
          description:
            "Run SharePoint and OneDrive permission, sharing link and sensitivity label reports for your tenant.",
        },
        {
          name: "Rank the exposure",
          description:
            "Sort sites by how many people can open them, whether external guests are present and how sensitive the content looks.",
        },
        {
          name: "Review content quality",
          description:
            "Spot inactive sites, duplicate libraries and files without owners that would dilute Copilot answers.",
        },
        {
          name: "Choose the pilot group",
          description:
            "Select users and tasks where Copilot is likely to save time, and set the measures you will track.",
        },
        {
          name: "Write the remediation plan",
          description:
            "List each fix, its owner and its priority, from quick wins to tasks that need site owner input.",
        },
        {
          name: "Present and hand over",
          description:
            "Walk IT and business sponsors through the findings and leave a plan your team can execute or MP-365 can carry out.",
        },
      ],
    },
    {
      type: "table",
      heading: "What MP-365 checks before Copilot goes live",
      headers: ["Area", "Question we ask", "Typical fix"],
      rows: [
        [
          "Site permissions",
          "Which sites are open to large groups or the whole organization?",
          "Replace broad groups with named owners and members",
        ],
        [
          "Sharing links",
          "Where have people created many new links recently?",
          "Remove stale links and set tighter defaults",
        ],
        [
          "Sensitivity labels",
          "Is sensitive content labeled where it lives?",
          "Define labels and apply them to priority libraries",
        ],
        [
          "Site ownership",
          "Does every active site have an accountable owner?",
          "Assign owners and archive inactive sites",
        ],
        [
          "Content quality",
          "Are the files Copilot would cite current and unique?",
          "Retire duplicates and clean up library structure",
        ],
        [
          "Users and training",
          "Who needs Copilot first, and what will they do with it?",
          "Select a pilot group and write role-based guides",
        ],
      ],
    },
    {
      type: "prose",
      heading: "How do you fix oversharing before deploying Copilot?",
      paragraphs: [
        "You fix oversharing by finding the widest-exposed sites first, then narrowing access with the owners' approval. Microsoft's SharePoint Advanced Management includes data access governance reports for this, and it can start site access reviews that ask site owners to confirm members and sharing.",
        "For sites that cannot be fixed immediately, Microsoft offers Restricted Content Discovery, which stops chosen sites from surfacing in Copilot while the cleanup continues. MP-365 treats that as a temporary measure and not as the fix.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft 365 Copilot adoption after the assessment",
      paragraphs: [
        "Microsoft 365 Copilot adoption depends on habits more than on settings. The assessment ends with an adoption plan with three parts.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Start with a defined pilot group",
      paragraphs: [
        "A pilot of users with real, repeatable tasks gives you evidence. Meeting summaries, document drafting and email catch-up are common starting tasks.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Train by role, not by feature",
      paragraphs: [
        "A salesperson, an accountant and a project manager need different prompts. MP-365 writes short guides for each role, built on your own documents and processes.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Measure and review usage",
      paragraphs: [
        "Choose two or three measures before the pilot starts, such as active users and time saved on one named task. Review them with the sponsor, then decide who gets seats next.",
      ],
    },
    {
      type: "list",
      heading: "What you get from the assessment",
      items: [
        "**Readiness report:** a plain-language summary of findings for business sponsors and IT.",
        "**Exposure ranking:** sites ordered by how widely they are shared and how sensitive they look.",
        "**Remediation plan:** each fix with an owner and a priority.",
        "**Pilot plan:** the user group, use cases and measures for the first rollout.",
        "**Training outline:** role-based guidance your team can reuse.",
        "**Handover session:** a walkthrough with your administrators.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft tools involved in the assessment",
      paragraphs: [
        "The work uses the SharePoint admin center, the Microsoft 365 admin center and SharePoint Advanced Management. Microsoft says SharePoint Advanced Management is included with a Microsoft Copilot license. Where sensitivity labels are in play, the work touches Microsoft Purview. See [Microsoft Purview and permission models](/services/data-governance/microsoft-purview/) for the follow-on work.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: moving messy files into governed libraries",
      paragraphs: [
        "MP-365 moved a client's file shares with hundreds of thousands of files into organized SharePoint libraries with metadata, version control and workflows. That work is the same cleanup readiness points to: clear structure, known owners and files that are easy to classify.",
        "You can see named clients on the [MP-365 clients page](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "When a readiness assessment is not the right fit",
      paragraphs: [
        "A full assessment is more than you need if you have a small tenant, a handful of sites and clear permissions already. In that case a short [permissions and data access review](/services/copilot/ai-data-governance-audit/) may be enough. It is also the wrong tool if you want help choosing between AI vendors, because MP-365 works only with Microsoft Copilot.",
      ],
    },
    {
      type: "prose",
      heading: "Related Copilot services",
      paragraphs: [
        "After the assessment, many clients move to [Copilot Cowork](/services/copilot/cowork/) for multistep tasks, [custom Copilot agents](/services/copilot/custom-agents/) for a single process, or the [Dynamics 365 sales agents](/services/copilot/sales-agents/) for lead work. Effort for any of these depends on tenant size; the [pricing page](/pricing/) explains how MP-365 engages.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is a Copilot readiness assessment?",
      a: "A Copilot readiness assessment reviews permissions, sharing, content quality and user plans before Copilot goes live. It produces a ranked list of fixes, a pilot plan and a training outline. MP-365 treats permission cleanup as the first priority because Copilot works with whatever each user can already open.",
    },
    {
      q: "How do you fix oversharing before deploying Copilot?",
      a: "Find the most widely exposed sites, confirm each owner, then remove broad groups and stale sharing links. Microsoft's data access governance reports and site access reviews support this. For urgent cases, Restricted Content Discovery can hide a site from Copilot while the real fix is made.",
    },
    {
      q: "How long does Copilot readiness take?",
      a: "It depends on the number of sites, the volume of shared content and how many teams join the pilot. A small tenant moves quickly, while a tenant with years of sprawl takes longer. MP-365 sets the schedule after scoping, once the first reports show how much needs attention.",
    },
    {
      q: "Do we need a readiness assessment before buying Microsoft 365 Copilot?",
      a: "No, but it helps. Doing it before you buy lets you size the pilot and avoid paying for idle seats. Doing it after you buy still works. The only poor order is launching to everyone first and discovering overshared files from users' prompts.",
    },
    {
      q: "What does the assessment cost?",
      a: "Cost depends on tenant size and scope, and MP-365 does not publish a fixed price. Microsoft's license fees are separate and are paid to Microsoft or your license provider. The [pricing page](/pricing/) explains how engagements are structured, and a discovery call gives you a scoped answer.",
    },
    {
      q: "Does the assessment change any of our settings?",
      a: "No. The assessment reads reports and configuration, then writes findings. Changes happen only after you approve the remediation plan, and site owners confirm access decisions for their own sites. MP-365 can carry out approved fixes or hand the plan to your administrators.",
    },
    {
      q: "What licenses do we need for the assessment?",
      a: "Microsoft states that SharePoint Advanced Management is included with a Microsoft Copilot license, and several data access governance reports depend on it. If your tenant has no Copilot license yet, MP-365 will check what reporting is available to you and tell you what is missing.",
    },
    {
      q: "What is Microsoft 365 Copilot adoption planning?",
      a: "It is the plan for getting people to use Copilot well after launch. It covers who joins the pilot, which tasks they try, how they are trained and which measures show success. MP-365 builds this plan at the end of the assessment, using your own roles and documents.",
    },
    {
      q: "Is this a security assessment?",
      a: "No. The assessment reviews data access and permissions in SharePoint, OneDrive and Microsoft 365, so Copilot answers from the right content. It is not a cybersecurity service or a compliance certification. For CRM roles, see the [Dynamics 365 security roles audit](/services/dynamics-365-crm/security-roles-audit/).",
    },
    {
      q: "Who should be involved from our side?",
      a: "Involve a business sponsor, a SharePoint or Microsoft 365 administrator and one leader from each pilot department. Site owners join briefly to confirm access on their sites. The total time asked of each person is small, but owner decisions are what keep the cleanup moving.",
    },
    {
      q: "Can you run the readiness work and the rollout?",
      a: "Yes. MP-365 can run the assessment, carry out approved permission fixes, support the pilot and train users. You can also take the plan and run it yourselves. Both options are valid, and the plan is written so a different team could follow it.",
    },
  ],
  closing:
    "A Microsoft 365 Copilot readiness assessment turns a vague worry about oversharing into a ranked list your team can act on. If you are planning a Copilot pilot, MP-365 can scope the assessment around your tenant and your first use cases.",
  cta: {
    heading: "Plan your Copilot pilot with MP-365",
    body: "Tell us about your tenant and the teams that will use Copilot first. MP-365 will scope the readiness assessment.",
    text: "Book a discovery call",
  },
};

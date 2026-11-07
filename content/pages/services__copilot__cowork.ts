import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/copilot/cowork/",
  intro:
    "Copilot Cowork consulting from MP-365 prepares your Microsoft 365 tenant for Microsoft's agentic assistant: who gets access, what it can reach, which actions need approval and how users learn to delegate. Microsoft made Copilot Cowork generally available on June 16, 2026, and MP-365 helps you roll it out without surprises.",
  atAGlance: {
    bestFor:
      "IT leaders and department heads who want Copilot to complete multistep work, such as inbox triage, meeting prep and document drafts, under clear controls.",
    includes:
      "Access and spending policy design, data permission checks, approval and automation rules, model and plugin decisions, pilot, and role-based training.",
    notIncluded:
      "License resale, custom software development, cybersecurity services, managed IT support and non-Microsoft AI tools.",
    howItStarts:
      "A discovery call about your Microsoft 365 Copilot licensing, your data permissions and the teams that should try Cowork first.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What Copilot Cowork consulting covers",
      paragraphs: [
        "Copilot Cowork carries out tasks on a user's behalf across Microsoft 365. Microsoft's documentation says it can send emails, schedule meetings, create documents, post in Teams and handle multistep work. It is reached through the Microsoft Copilot app.",
        "This page covers rollout, permissions and training. It is part of MP-365's wider [Microsoft Copilot consulting](/services/copilot/).",
      ],
    },
    {
      type: "prose",
      heading: "How do you roll out Copilot Cowork safely?",
      paragraphs: [
        "You roll out Copilot Cowork safely by deciding who may use it, cleaning up what they can reach and setting the rules for actions before the first pilot user logs in. Five decisions cover most of the risk.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Control access with a spending policy",
      paragraphs: [
        "Microsoft states that Cowork access is granted through a spending policy that selects Cowork. The old agent setting under All Agents in the Microsoft 365 admin center no longer controls access. Anyone inside the scope of such a policy can use Cowork, so MP-365 builds the policy around security groups, not around a limit.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Fix data permissions first",
      paragraphs: [
        "Cowork inherits the user's permissions, so it reaches only the files and emails that user can already open. That is reassuring only if those permissions are sound. A [Copilot data access review](/services/copilot/ai-data-governance-audit/) comes before a wide rollout.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Set rules for approvals and automations",
      paragraphs: [
        "Cowork asks for approval before sensitive actions, such as sending an email or posting in Teams. Users can approve once or skip the prompt for similar actions during a session. MP-365 sets guidance on when skipping is acceptable, and reviews event-driven tasks, which prepare actions for approval by default.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Decide on models, plugins and browser use",
      paragraphs: [
        "Admins can turn off the Anthropic model family, control which plugins are deployed and switch the Cowork Browsing setting on or off. Microsoft notes that organizations inside the EU Data Boundary can use only GPT models. MP-365 documents each choice for your records.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Teach people to delegate well",
      paragraphs: [
        "Good Cowork results come from clear task descriptions and careful review. MP-365 trains users to state the goal, name the source files and check the preview before approving.",
      ],
    },
    {
      type: "table",
      heading: "Copilot Cowork controls and the decision behind each",
      headers: ["Control", "Where it is set", "Decision for your organization"],
      rows: [
        [
          "Who can use Cowork",
          "Spending policy in Copilot cost management",
          "Which security groups join the pilot, and which do not",
        ],
        [
          "How much it can spend",
          "Limits per tenant, group and user",
          "Monthly budgets and who gets alerts",
        ],
        [
          "Which models are offered",
          "Copilot settings in the Microsoft 365 admin center",
          "Whether to allow the Anthropic models",
        ],
        [
          "Plugins and connectors",
          "Plugin management in the admin center",
          "Which plugins are deployed or hidden",
        ],
        [
          "Browser tasks",
          "Cowork Browsing tenant setting",
          "Whether web tasks in Microsoft Edge are allowed",
        ],
        [
          "Audit trail",
          "Unified audit log and Microsoft Purview",
          "Who reviews Cowork activity, and how often",
        ],
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 handles a Copilot Cowork implementation",
      steps: [
        {
          name: "Confirm licensing and billing",
          description:
            "Check that pilot users hold Microsoft 365 Copilot licenses and that usage-based billing is set up with your finance owner.",
        },
        {
          name: "Review data access",
          description:
            "Run the permission and sharing checks for the sites and mailboxes your pilot users depend on.",
        },
        {
          name: "Create the access policy",
          description:
            "Build the spending policy and security groups that decide who can use Cowork, with limits and alerts.",
        },
        {
          name: "Configure admin settings",
          description:
            "Set model, plugin and browser options, then record each decision and the reason for it.",
        },
        {
          name: "Pick pilot tasks",
          description:
            "Choose repeatable tasks such as daily briefings, meeting preparation and document drafting, with a named reviewer for each.",
        },
        {
          name: "Train the pilot group",
          description:
            "Run role-based sessions on writing tasks, reviewing previews and using approvals and pauses.",
        },
        {
          name: "Review usage and widen access",
          description:
            "Read the Cowork usage report with sponsors, adjust limits and add the next group.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get from a Copilot Cowork setup",
      items: [
        "**Access design:** the spending policy, groups and limits that control who uses Cowork.",
        "**Permission findings:** data access risks found before the pilot, with fixes ranked.",
        "**Settings record:** every admin decision on models, plugins and browser use.",
        "**Pilot playbook:** the tasks, reviewers and measures for the first users.",
        "**Role-based training:** short guides and live sessions for each pilot role.",
        "**Review routine:** how to read usage reports and decide on wider access.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft products involved",
      paragraphs: [
        "A Copilot Cowork setup touches Microsoft 365 Copilot licensing, the Microsoft Copilot app, the Microsoft 365 admin center, Microsoft Entra ID security groups, SharePoint, OneDrive, Microsoft Purview and the unified audit log. Cowork saves the files it creates to your OneDrive and SharePoint workspace.",
        "Microsoft documents Dynamics 365 Sales skills that work in Cowork, which ties this service to the [Dynamics 365 sales agents](/services/copilot/sales-agents/).",
      ],
    },
    {
      type: "prose",
      heading: "Proof: a simpler security model for a manufacturer",
      paragraphs: [
        "MP-365 built a modern intranet for a manufacturing client with a clear information architecture, a simpler security model and faster content updates. A simpler model matters for Cowork, because every action it takes depends on what the user can already reach.",
        "The [clients page](/clients/) lists named projects.",
      ],
    },
    {
      type: "prose",
      heading: "When Copilot Cowork is not the right fit",
      paragraphs: [
        "Cowork is not the right first step if your tenant has no Microsoft 365 Copilot licenses, if sharing and permissions are unreviewed or if nobody owns the spending budget. Start with a [Copilot readiness assessment](/services/copilot/readiness/) in those cases. Cowork also cannot delete files in OneDrive or SharePoint, or read encrypted files, so tasks that need either are out of scope.",
        "Cost has two sides: Microsoft's usage-based charges, billed directly by Microsoft, and MP-365's consulting fee. The [pricing page](/pricing/) covers the second.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is Copilot Cowork?",
      a: "Copilot Cowork is Microsoft's agentic assistant in the Microsoft Copilot app. It carries out multistep tasks for a user, such as sending emails, scheduling meetings, creating documents and posting in Teams. Microsoft made it generally available on June 16, 2026. It acts only with that user's own access.",
    },
    {
      q: "How is Copilot Cowork different from Microsoft 365 Copilot?",
      a: "Per Microsoft's documentation, Copilot Chat helps with drafting and answers in one session, while Cowork completes multistep work across apps by taking action for you. Cowork needs a Microsoft 365 Copilot license and adds usage-based billing. Both respect the user's existing permissions.",
    },
    {
      q: "How do you roll out Copilot Cowork safely?",
      a: "Review data permissions first, then grant access through a spending policy tied to a pilot security group. Set approval rules, decide on models and plugins, train the pilot users and watch the usage report. MP-365 runs these steps in that order.",
    },
    {
      q: "Who is allowed to use Copilot Cowork in our tenant?",
      a: "Only users inside the scope of a spending policy that selects Cowork. Microsoft says the older agent setting no longer controls access. To keep someone out, leave them out of every such policy, rather than lowering their limit. MP-365 designs these policies around security groups.",
    },
    {
      q: "What does Copilot Cowork cost?",
      a: "Microsoft bills Cowork by usage on top of the Microsoft 365 Copilot license, and admins can set limits per tenant, group and user. Microsoft sets those prices. MP-365's fee for setup is separate, and the [pricing page](/pricing/) explains how engagements are structured.",
    },
    {
      q: "Can Copilot Cowork see all our company files?",
      a: "No. Cowork inherits the signed-in user's permissions, so it reaches only files and emails that user can already open. The risk is overshared content, where many users can open files they should not. That is why MP-365 reviews permissions before a broad rollout.",
    },
    {
      q: "Will Copilot Cowork send emails without asking?",
      a: "By default, no. Cowork shows an approval prompt before sensitive actions such as sending an email or posting in Teams, and users can see a preview. Users can skip prompts for similar actions in a session, so MP-365 sets guidance on when that is acceptable.",
    },
    {
      q: "Can we turn Copilot Cowork off for some people?",
      a: "Yes. Access follows spending policy scope, so leaving a user out of every Cowork policy keeps them out. Admins can also turn off the Anthropic model family, manage plugins and switch off browser use in the admin center. MP-365 documents these settings during setup.",
    },
    {
      q: "Does Copilot Cowork use Anthropic models?",
      a: "Yes, in part. Microsoft documents that Cowork can use Anthropic Claude models as a subprocessor, and admins can turn that model family off. Microsoft also says organizations inside the EU Data Boundary are limited to GPT models. Check your data residency needs with MP-365 before the pilot.",
    },
    {
      q: "Do we need a readiness assessment before Cowork?",
      a: "It is strongly advised. Cowork amplifies whatever access users already have, so a permissions problem becomes a faster problem. A [readiness assessment](/services/copilot/readiness/) is a sensible first step for tenants that have never reviewed sharing and site ownership.",
    },
  ],
  closing:
    "Copilot Cowork consulting is mostly about preparation: access, data permissions, approvals and training. MP-365 can scope a pilot for your tenant and leave you with settings, a playbook and users who know how to delegate.",
  cta: {
    heading: "Plan your Copilot Cowork pilot",
    body: "Tell MP-365 how many users hold Copilot licenses and which teams want Cowork first. We will outline a safe pilot.",
    text: "Book a free consultation",
  },
};

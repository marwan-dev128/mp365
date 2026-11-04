import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/solutions/dynamics-365-migration/",
  intro:
    "Dynamics 365 migration services move a classic Dynamics CRM from your own servers to Dynamics 365 online, and replace old workflows and plugins with modern automation along the way. MP-365 is a Microsoft Solutions Partner that treats zero data loss as the goal of every move.",
  blocks: [
    {
      type: "prose",
      heading: "What a classic Dynamics CRM is and why it ages",
      paragraphs: [
        "A classic Dynamics CRM is an older, on-premises installation of Microsoft Dynamics CRM, running on servers your own team patches and backs up. Over the years it collects custom workflows, plugins written in code, old-style forms and reports that only one person understands.",
        "The system still works, which is why it stays. The cost shows up elsewhere: upgrades are painful, outside tools are hard to connect, and every change depends on the few people who remember how it was built.",
      ],
    },
    {
      type: "list",
      heading: "Who feels the weight of an old CRM",
      items: [
        "**IT leaders:** they keep servers and customizations alive, and each upgrade feels like a risk.",
        "**Sales and service managers:** screens are dated, mobile access is limited and small changes take a long time.",
        "**Operations leaders:** reports need manual exports, and data does not flow between the CRM and other systems.",
        "**The one CRM expert:** the person who built the customizations carries knowledge nobody else has.",
      ],
    },
    {
      type: "table",
      heading: "What staying on a classic CRM costs",
      headers: ["Symptom", "Business impact"],
      rows: [
        ["Servers and databases managed in house", "IT time goes to maintenance instead of improving how sales and service work."],
        ["Classic workflows nobody fully understands", "A small change can break a process, so people avoid changing anything."],
        ["Plugins written in code", "Fixes need a developer, and every upgrade needs the plugins re-tested."],
        ["Old forms and screens", "Users work around the system, and new hires take longer to learn it."],
        ["Few ways to connect modern tools", "Teams copy data by hand between the CRM and the tools they actually use."],
      ],
    },
    {
      type: "table",
      heading: "Your options for an on-premises Dynamics CRM",
      headers: ["Option", "What happens", "Best for"],
      rows: [
        [
          "Stay as it is",
          "You keep the current system and manage servers yourself.",
          "Systems close to retirement with few users and no plans for change.",
        ],
        [
          "Move to the cloud as it is",
          "The database moves to Dynamics 365 online, and customizations are carried over without redesign.",
          "Teams that want the cloud first and have simple customizations.",
        ],
        [
          "Migrate and modernize",
          "Data moves to Dynamics 365 online while classic workflows, plugins and forms are replaced with current tools.",
          "Teams that want the move to remove old technical debt, not carry it along.",
        ],
        [
          "Start fresh in a new tenant",
          "You configure a new Dynamics 365 setup and import only the data you still need.",
          "Teams whose process has changed so much that the old design no longer fits.",
        ],
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 migrates Dynamics CRM to Dynamics 365 online",
      steps: [
        {
          name: "Inventory what you run today",
          description:
            "List entities, custom fields, classic workflows, plugins, reports, integrations and users. Mark each one to keep, replace or retire.",
        },
        {
          name: "Choose the target and the order",
          description:
            "Decide with you whether to move as is, modernize or rebuild, and which parts move first.",
        },
        {
          name: "Prepare and clean the data",
          description:
            "Remove duplicates and dead records worth leaving behind, and map every field from the old system to the new one.",
        },
        {
          name: "Rebuild workflows in Power Automate",
          description:
            "Replace classic workflows with Power Automate flows that your team can read, test and change without a developer.",
        },
        {
          name: "Replace plugins with low-code automation",
          description:
            "Move logic that lived in custom code into configuration and flows where possible, and keep code only where nothing else fits.",
        },
        {
          name: "Upgrade old forms to modern custom pages",
          description:
            "Redesign dated forms so users get cleaner screens, with fields arranged around the work they actually do.",
        },
        {
          name: "Rehearse the move and compare the data",
          description:
            "Run a trial migration into a test environment and compare record counts and sample records against the source until they match.",
        },
        {
          name: "Cut over and support the first days",
          description:
            "Switch users to Dynamics 365 online on an agreed date, keep the old system available for checks and fix issues as they appear.",
        },
      ],
    },
    {
      type: "table",
      heading: "What you get from MP-365",
      headers: ["What MP-365 builds", "The result"],
      rows: [
        ["A written inventory of customizations and a migration plan", "You see exactly what moves, what changes and what is retired before work starts."],
        ["Your data in Dynamics 365 online, checked against the source", "Records arrive complete, and the old system stays a safe fallback during cutover."],
        ["Power Automate flows replacing classic workflows", "Business rules become visible and editable by your own administrators."],
        ["Low-code replacements for plugins", "Fewer fixes depend on a developer, and upgrades carry less risk."],
        ["Modern custom pages in place of old forms", "Users get cleaner screens that match how they work."],
        ["Tested releases with release notes", "Changes after the move reach production in a predictable way."],
      ],
    },
    {
      type: "prose",
      heading: "Why Dynamics 365 migration services start with an inventory",
      paragraphs: [
        "The riskiest part of a Dynamics 365 upgrade is what nobody remembers. A workflow that fires on a hidden field, a plugin that updates a related record: these are the things that break quietly after cutover. MP-365 reads what is actually in the system before it plans the move.",
        "That is why the plan is written from the inventory, not from a sales estimate. Effort follows what you find, and the [Pricing](/pricing/) page explains how MP-365 engagements work. When the move is done, [DevOps & Release Automation](/services/application-modernization/devops-release-automation/) keeps later changes tested and documented.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: Dynamics platforms MP-365 already runs",
      paragraphs: [
        "OTIS Elevator relies on MP-365 for platform and operations leadership on Dynamics. Deployments became faster and smoother, dropping from 13 hours to 4, and manual errors fell to near zero.",
        "Hunter Panels, a manufacturer, uses MP-365 for Dynamics CRM support that aligns the platform with the business, cuts manual work and improves performance. The US Department of Transportation also relies on MP-365 to manage and support Dynamics 365 CRM.",
      ],
    },
    {
      type: "prose",
      heading: "When a migration is not the right fit",
      paragraphs: [
        "A migration is not the right fit if your CRM is close to retirement and few people use it, or if you plan to replace it with a different product entirely. It also does not suit teams that expect every old customization to be copied exactly. MP-365 will tell you which parts of a classic design are better left behind.",
      ],
    },
    {
      type: "prose",
      heading: "Related services and solutions",
      paragraphs: [
        "Start with [Dynamics 365 CRM Consultation](/services/dynamics-365-crm/) for the wider service area. Flows that replace classic workflows come from [Power Automate Workflow Automation](/services/power-platform/power-automate/). If you want a new setup rather than a move, see [Rapid CRM Deployment](/solutions/crm-implementation/).",
        "More outcomes MP-365 delivers sit under [Solutions](/solutions/).",
      ],
    },
  ],
  faqs: [
    {
      q: "How do you migrate Dynamics CRM on-premises to Dynamics 365 online?",
      a: "MP-365 inventories your customizations, maps every field to the online system, rehearses the data move in a test environment and compares results with the source. After the data matches, users switch on an agreed date, and the old system stays available for checks during the first days.",
    },
    {
      q: "What happens to classic workflows and plugins?",
      a: "Classic workflows are rebuilt as Power Automate flows, and plugin logic moves into low-code automation where possible. Code stays only where no configured option fits. MP-365 reviews each one in the inventory and agrees with you whether to keep, replace or retire it.",
    },
    {
      q: "When should you modernize a classic Dynamics CRM?",
      a: "Modernize when upgrades keep getting postponed, changes depend on one person, or outside tools cannot connect to the CRM. A planned move beats a forced one. If the system is close to retirement and rarely used, leaving it alone may make more sense.",
    },
    {
      q: "Is a Dynamics 365 upgrade the same as a migration?",
      a: "No. An upgrade moves the same system to a newer version, while a migration moves your data and customizations into a different environment, such as Dynamics 365 online. Most classic CRM projects combine both and clean up old customizations during the move.",
    },
    {
      q: "Will we lose data or history during the move?",
      a: "Zero data loss is the goal, and MP-365 builds the process around it. Every field is mapped, a trial migration is compared with the source, and the old system remains available during cutover. Records you choose to leave behind are agreed in writing beforehand.",
    },
    {
      q: "Do we have to move everything to Dynamics 365 online?",
      a: "No. You choose what moves. Old records with no business value can be archived, and unused customizations can be retired. MP-365 helps you decide during the inventory, so the new system carries only what your team will use.",
    },
    {
      q: "Will users need training after the migration?",
      a: "Yes, mostly short and role-based. Users see familiar data on cleaner screens, so training focuses on what changed in their daily work. MP-365 walks each role through its own screens before cutover and stays close to the team during the first days.",
    },
    {
      q: "How much does a Dynamics 365 migration cost?",
      a: "Cost depends on how many customizations, integrations and records you have, and whether you move as is or modernize. License fees go to Microsoft and are separate from MP-365 fees. The [Pricing](/pricing/) page describes how engagements are structured.",
    },
  ],
  closing:
    "Dynamics 365 migration services let you leave aging servers and fragile customizations behind without losing the history your team relies on. MP-365 inventories first, rebuilds the logic with current tools and checks the data against the source before cutover.",
  cta: {
    heading: "Plan your CRM upgrade",
    body: "Share what your classic Dynamics CRM runs today. MP-365 will help you decide what to move, what to rebuild and what to retire.",
    text: "Plan your CRM upgrade",
  },
};

import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/application-modernization/devops-release-automation/",
  intro:
    "Power Platform pipelines move your Dynamics 365 and Power Platform changes from development through test to production in a controlled, repeatable way. MP-365 sets them up, adds testing and release notes around them, and connects Azure DevOps or GitHub where the work needs more than Microsoft's built-in tool. The goal is simple: releases that no longer break the CRM.",
  atAGlance: {
    bestFor:
      "Dynamics 365 and Power Platform teams that deploy by hand, break production with releases or cannot say what changed.",
    includes:
      "Environment strategy, solution structure, Power Platform pipelines or Azure DevOps and GitHub pipelines, a QA cycle, release notes and a trackable backlog.",
    notIncluded:
      "Azure infrastructure management, managed services, help desk, custom software development and ERP implementation.",
    howItStarts:
      "A discovery call, then a review of your environments, solutions and how changes reach production today.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What are Power Platform pipelines?",
      paragraphs: [
        "Power Platform pipelines are Microsoft's built-in way to deploy solutions between environments. Microsoft's documentation (updated September 2026) describes them as application lifecycle management (ALM) automation with continuous integration and continuous delivery (CI/CD) capabilities built into the service. Makers start a deployment from their development environment in a few clicks, and admins control the stages and approvals.",
        "A pipeline deploys solutions, plus target settings such as connections, connection references and environment variables. It does not deploy the data in Dataverse tables. The same pipeline handles Power Apps, Power Automate flows and Dynamics 365 customizations that sit inside a solution.",
      ],
    },
    {
      type: "list",
      heading: "Problems release automation solves",
      items: [
        "**Hand-built releases:** Someone exports a solution, imports it elsewhere and fixes connections by hand, and each release goes slightly differently.",
        "**Fixes that break something else:** A change that worked in development fails in production because the environments differ.",
        "**Nobody knows what changed:** Users report new behavior, and there are no release notes to check.",
        "**Weekend deployments:** Releases need a long, careful window because errors are common.",
        "**Skipped testing:** Nobody has time to retest, so users find the bugs.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 sets up Dynamics 365 DevOps",
      steps: [
        {
          name: "Map how changes reach production today",
          description:
            "List environments, solutions, who changes what, and where releases fail or slow down.",
        },
        {
          name: "Design the environments",
          description:
            "Agree on development, test and production environments, plus a pipelines host, and name an owner for each.",
        },
        {
          name: "Structure the solutions",
          description:
            "Split customizations into solutions with clear ownership, environment variables and connection references instead of hardcoded values.",
        },
        {
          name: "Build the deployment pipeline",
          description:
            "Configure Power Platform pipelines, or Azure DevOps or GitHub pipelines where you need source control and gated builds.",
        },
        {
          name: "Add automated checks",
          description:
            "Run solution checks on every build and add regression tests for the processes that matter most.",
        },
        {
          name: "Set the QA cycle",
          description:
            "Define who tests in the test environment, what passes a release and who approves production.",
        },
        {
          name: "Produce release notes and a backlog",
          description:
            "Generate a short note for every release and keep a single backlog that links work to releases.",
        },
        {
          name: "Train your team and hand over",
          description:
            "Walk makers and admins through a live release and give them a one-page runbook.",
        },
      ],
    },
    {
      type: "prose",
      heading: "How to move Dynamics 365 changes from development to production",
      paragraphs: [
        "Move Dynamics 365 changes by packaging them in a solution, exporting a managed version and importing it into test, then into production, in that order. Microsoft recommends deploying managed solutions to every non-development environment. Pipelines do this for you: the same exported file passes through each stage in sequence, so nobody can skip QA by pushing a different version.",
        "Environment settings differ between stages. Connection references and environment variables hold those differences, so the solution itself does not change between test and production.",
      ],
    },
    {
      type: "table",
      heading: "Power Platform pipelines requirements and limits",
      headers: ["Topic", "What Microsoft's documentation says", "What it means for you"],
      rows: [
        [
          "Environments",
          "The pipelines host should be a production environment. Development and QA can be developer environments",
          "Plan at least a host, a development, a test and a production environment",
        ],
        [
          "Managed Environments",
          "All other environments used in pipelines, including the target, must be managed environments",
          "Target environments need premium-use licenses. Microsoft sets license fees",
        ],
        [
          "Enforcement from October 2026",
          "Admins are notified when pipelines deploy to unmanaged targets and have 30 days to approve enabling managed environments before deployments are blocked",
          "Convert targets early and avoid a blocked release",
        ],
        [
          "Scope",
          "One solution per deployment, one development environment per solution",
          "Large teams may need Azure DevOps or GitHub for parallel work",
        ],
        [
          "Tenants",
          "Pipelines cannot deploy to a different tenant",
          "Cross-tenant moves need Azure DevOps or GitHub",
        ],
        [
          "Rollback",
          "Past solution versions can be redeployed if the setting is enabled",
          "MP-365 turns it on and tests it",
        ],
      ],
    },
    {
      type: "table",
      heading: "Power Platform pipelines or Azure DevOps and GitHub",
      headers: ["Need", "Use Power Platform pipelines", "Add Azure DevOps or GitHub"],
      rows: [
        [
          "Simple promotion from development to production",
          "Yes, with approvals",
          "Not required",
        ],
        [
          "Source control and code review for solution files",
          "Only through pipeline extensions",
          "Yes",
        ],
        [
          "Several developers on one solution",
          "Not supported with one development environment",
          "Yes, with branches and merges",
        ],
        [
          "Deployment to another tenant",
          "Not supported",
          "Yes",
        ],
        [
          "Custom steps such as notifications or extra tests",
          "Through pipeline extensions and Power Automate",
          "Yes, in build and release stages",
        ],
      ],
    },
    {
      type: "prose",
      heading: "What Dynamics 365 release management involves",
      paragraphs: [
        "Dynamics 365 release management is the discipline of deciding what ships, testing it and telling users what changed. It sits on top of the pipeline. The pipeline moves files, and release management makes sure the right files move at the right time.",
      ],
    },
    {
      type: "prose",
      heading: "Testing before every release",
      level: 3,
      paragraphs: [
        "Testing happens in the test environment with a copy of real processes, not only in development. MP-365 uses solution checks for quality rules and builds regression tests for the paths that would hurt most if they broke, such as lead conversion, quote approval and case routing.",
      ],
    },
    {
      type: "prose",
      heading: "Release notes and the backlog",
      level: 3,
      paragraphs: [
        "Release notes tell users what changed and what to try. Each note lists the items shipped, who requested them and how to reach support. A single backlog links requests to releases, so \"when did that change?\" has an answer.",
      ],
    },
    {
      type: "list",
      heading: "What you get",
      items: [
        "**Environment plan:** A diagram and owner list for every environment and the pipelines host.",
        "**Solution structure:** Solutions, environment variables and connection references organized for clean deployment.",
        "**Working pipelines:** Power Platform pipelines, plus Azure DevOps or GitHub pipelines where needed.",
        "**QA cycle:** A written test and approval routine with named testers.",
        "**Release notes template:** A short format your team can fill in each time.",
        "**Runbook and training:** A one-page guide and a live walkthrough for makers and admins.",
      ],
    },
    {
      type: "prose",
      heading: "Proof from OTIS Elevator and CRM deployments",
      paragraphs: [
        "At OTIS Elevator, MP-365 gave platform and operations leadership for Dynamics, and deployments fell from 13 hours to 4, with manual errors reduced to near zero. In another engagement, MP-365 set up automatic deployment, a reliable QA cycle, release notes and a trackable backlog for a CRM. Both follow the pattern on this page. The [Clients](/clients/) page has more results.",
      ],
    },
    {
      type: "prose",
      heading: "When this service is not the right fit",
      paragraphs: [
        "A full DevOps setup is not worth it for a small tenant with one maker and a handful of simple apps. A manual process with a checklist may be enough, and MP-365 will say so. Teams that want software engineering for non-Microsoft products should look elsewhere, since MP-365 focuses on Dynamics 365 and Power Platform.",
      ],
    },
    {
      type: "prose",
      heading: "Related services",
      paragraphs: [
        "This service belongs to [Application Modernization & DevOps](/services/application-modernization/). Moving older applications to Azure is covered by [Legacy Application Migration](/services/application-modernization/legacy-migration/), and pipelines can then carry the migrated apps. Pipeline extensions can use [Power Automate](/services/power-platform/power-automate/). For roles that control who can deploy, see the [Dynamics 365 Security Roles & Access Audit](/services/dynamics-365-crm/security-roles-audit/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What are Power Platform pipelines?",
      a: "Power Platform pipelines are a Microsoft feature that deploys solutions from a development environment through test to production with admin-defined stages and approvals. They add ALM and CI/CD capabilities inside the platform, so makers deploy in a few clicks instead of exporting and importing files by hand.",
    },
    {
      q: "How do you move Dynamics 365 changes from development to production?",
      a: "Put the changes in a solution, export it as managed and import it to test, then production, in sequence. Pipelines automate those steps and ensure the same file passes every stage. Environment variables and connection references handle the differences between environments.",
    },
    {
      q: "What does Dynamics 365 release management involve?",
      a: "It covers deciding what ships, testing it in a non-production environment, getting approval, deploying and telling users what changed. The pipeline moves the solution. Release management adds the QA cycle, release notes and a backlog that shows when each change was released.",
    },
    {
      q: "What is ALM in Dynamics 365?",
      a: "ALM, or application lifecycle management, is the set of practices that govern how a system is built, tested, released and maintained. In Dynamics 365 it means solutions, separate environments, version control, testing and controlled deployments, instead of editing production directly.",
    },
    {
      q: "Do Power Platform pipelines deploy data?",
      a: "No. Pipelines deploy solutions and target settings such as connections, connection references and environment variables. Microsoft states that solutions do not contain data stored in Dataverse tables. Data moves through separate import, integration or migration tools.",
    },
    {
      q: "Do we need Managed Environments for pipelines?",
      a: "Yes for most environments. Microsoft states that environments used in pipelines, other than the host and developer environments, must be managed environments with premium-use licenses. Starting October 2026, deployments to unmanaged targets are blocked after a notice period. Microsoft sets those license fees.",
    },
    {
      q: "Should we use pipelines or Azure DevOps?",
      a: "Use Power Platform pipelines for straightforward promotion with approvals. Add Azure DevOps or GitHub when you need source control, several developers on one solution, cross-tenant deployment or custom build steps. Microsoft itself suggests extending pipelines with other CI/CD tools when needed.",
    },
    {
      q: "Can we roll back a bad release?",
      a: "Yes, if the setting that redeploys past solution versions is enabled in the pipelines host. Microsoft's documentation describes redeploying earlier versions from the run history. MP-365 enables it, tests a rollback during setup and writes the steps into the runbook.",
    },
    {
      q: "How much does release automation cost?",
      a: "Cost depends on the number of environments and solutions, whether you need Azure DevOps or GitHub, and how much testing you want automated. MP-365 estimates after a discovery call. The [Pricing](/pricing/) page explains the engagement models. Microsoft licenses are separate.",
    },
    {
      q: "Does this replace our developers or admins?",
      a: "No. Your makers and admins keep making changes, and the pipeline gives them a safe way to ship. MP-365 builds the process, trains your team and steps back. The pipeline is easier to maintain than a collection of manual steps.",
    },
  ],
  closing:
    "Power Platform pipelines will not fix a team's habits on their own, but they give you a release path that is the same every time, with tests and notes around it. MP-365 builds that path and teaches your team to use it.",
  cta: {
    heading: "Fix your release process",
    body: "Tell MP-365 how changes reach production today, and we will show you where the risk sits.",
    text: "Book a free consultation",
  },
};

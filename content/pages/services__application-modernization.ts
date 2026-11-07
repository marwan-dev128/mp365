import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/application-modernization/",
  intro:
    "Azure application modernization moves older on-premises business applications to Microsoft Azure and gives their releases a safer, automated path to production. MP-365 is a Microsoft Solutions Partner that does this work for mid-size and enterprise companies whose important systems are tied to Windows servers, SQL Server and the Microsoft stack. Azure is the destination, and your team keeps running it afterward.",
  blocks: [
    {
      type: "prose",
      heading: "What Azure application modernization includes",
      paragraphs: [
        "Azure application modernization means choosing, for each older application, the lightest change that makes it safe, supportable and ready for the cloud, then moving it to Azure. For some applications that means moving the servers as they are. For others it means moving the database to a managed Azure service, changing code, or replacing the application with a Power Platform app.",
        "MP-365 groups this work into two services. One handles the migration itself. The other builds the release pipelines that stop changes from breaking production. MP-365 does not manage Azure infrastructure after cutover, does not provide managed services and does not build custom software products.",
      ],
    },
    {
      type: "table",
      heading: "Application modernization services compared",
      headers: ["Service", "Best for", "Typical outcome", "Page"],
      rows: [
        [
          "Legacy application migration",
          "Aging on-premises applications on old servers or old SQL Server versions",
          "Applications running on supported Azure services, with a tested cutover and a retirement plan for the old servers",
          "[Legacy Application Migration](/services/application-modernization/legacy-migration/)",
        ],
        [
          "DevOps and release automation",
          "Teams that break Dynamics 365 or Power Platform with every release",
          "Automated deployments through development, test and production, with testing and release notes",
          "[DevOps & Release Automation](/services/application-modernization/devops-release-automation/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Which application modernization service to start with",
      paragraphs: [
        "Start with legacy application migration if a server, database or operating system is reaching the end of support. Start with DevOps and release automation if your applications are already modern but releases are slow, manual or risky. Many teams need both, and the order follows the nearest deadline.",
        "Deadlines are real. According to Microsoft's lifecycle pages, SQL Server 2016 reached the end of extended support on July 14, 2026, and Windows Server 2016 reaches it on January 12, 2027. Microsoft also ended support for SharePoint Server 2016 and 2019 on July 14, 2026. Applications that depend on these products need a plan.",
      ],
    },
    {
      type: "table",
      heading: "Migration strategies for legacy applications",
      headers: ["Strategy", "What changes", "Best used when"],
      rows: [
        [
          "Rehost",
          "Servers move to Azure with minimal change",
          "The application works well and needs a fast exit from old hardware",
        ],
        [
          "Replatform",
          "The application moves to managed Azure services with small code changes",
          "The application is healthy but the database or web server should be managed by Microsoft",
        ],
        [
          "Refactor",
          "Code is restructured for maintainability without changing behavior",
          "Technical debt blocks updates, testing or automation",
        ],
        [
          "Rearchitect",
          "The design changes to use cloud capabilities",
          "The application cannot scale or integrate in its current form",
        ],
        [
          "Replace",
          "A packaged product or a Power Platform app takes over",
          "The application mostly stores records and routes approvals",
        ],
      ],
    },
    {
      type: "prose",
      heading: "How to choose a path for each application",
      paragraphs: [
        "Choose the lightest strategy that solves the real problem. Microsoft's Cloud Adoption Framework notes that a rehost changes where a workload runs but does not improve what it can do. If the application is stable and supported, rehosting is a good first step. If it blocks the business, change it.",
        "MP-365 scores each application on business value, technical health and dependencies, then proposes a path and an order. Simple, low-risk applications go first so your team learns the process before the critical systems move.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 approaches Azure application modernization",
      steps: [
        {
          name: "List the applications and owners",
          description:
            "Build an inventory with business owner, users, hosting, database, integrations and support status for each application.",
        },
        {
          name: "Assess technical fit",
          description:
            "Use Azure Migrate and the Azure Migrate application and code assessment tools for .NET and Java to find blockers and dependencies.",
        },
        {
          name: "Choose a path and an order",
          description:
            "Assign rehost, replatform, refactor, rearchitect or replace to each application, and group them into waves.",
        },
        {
          name: "Build a landing target",
          description:
            "Agree the Azure subscription, networking and access setup with your IT team, who own it from then on.",
        },
        {
          name: "Migrate and test in non-production first",
          description:
            "Move development and test copies, run the full test cycle and rehearse the cutover and rollback.",
        },
        {
          name: "Cut over and verify",
          description:
            "Switch users to the Azure version in an agreed window, check data and integrations, and keep the old system ready for rollback.",
        },
        {
          name: "Automate releases",
          description:
            "Set up pipelines so future changes move through test and into production the same way every time.",
        },
        {
          name: "Retire the old servers and hand over",
          description:
            "Document the new setup, switch off the old environment and train your team to run it.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Proof from release automation at OTIS Elevator",
      paragraphs: [
        "At OTIS Elevator, MP-365 provided platform and operations leadership for Dynamics, which made deployments faster and smoother. A deployment that took 13 hours now takes 4, and manual errors fell to near zero. The [DevOps & Release Automation](/services/application-modernization/devops-release-automation/) page explains the approach. More results are on the [Clients](/clients/) page.",
      ],
    },
    {
      type: "prose",
      heading: "Related work across MP-365 services",
      paragraphs: [
        "SharePoint farms that run on Server 2016 or 2019 are covered by [SharePoint Migration](/services/sharepoint/migration/), and the full list of service areas is on the [Services](/services/) page.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is Azure application modernization?",
      a: "Azure application modernization is the process of moving an existing business application to Azure and updating it as much as needed to run well there. Depending on the application, that can mean moving servers as they are, switching to managed services, restructuring code or replacing the application.",
    },
    {
      q: "How long does application modernization take?",
      a: "It depends on the number of applications, their dependencies, the amount of data and how fast your team can test and approve. MP-365 sets a plan after the assessment and groups applications into waves. Simple applications move first, and critical ones follow once the process is proven.",
    },
    {
      q: "How much does application modernization cost?",
      a: "Cost depends on the strategy for each application, the number of integrations, data volume and your team's available time. MP-365 gives a written estimate after the assessment. Azure usage is billed by Microsoft and is separate from MP-365's fees. The [Pricing](/pricing/) page explains how projects are priced.",
    },
    {
      q: "What is the difference between rehost and replatform?",
      a: "Rehost moves servers to Azure with minimal change, like for like. Replatform moves the application onto managed services, such as a managed database or web hosting service, with small code changes. Replatforming removes more maintenance work, while rehosting is usually faster.",
    },
    {
      q: "Does MP-365 manage our Azure environment after migration?",
      a: "No. MP-365 does not provide managed services or Azure infrastructure management. The team sets up the migration, documents the new environment and trains your IT staff. After handover, your team or your hosting provider runs Azure day to day.",
    },
    {
      q: "Is MP-365 a custom software development company?",
      a: "No. MP-365 moves and modernizes existing applications and automates their releases. It does not build new software products for sale or act as a development agency. Where an old application fits low-code, MP-365 may replace it with Power Apps or Power Automate.",
    },
    {
      q: "Which applications are good candidates for modernization?",
      a: "Good candidates run on aging servers or unsupported database versions, depend on one person who knows how they work, or block integration with Dynamics 365 and Microsoft 365. Applications that still work and are supported may only need a lighter move or no change.",
    },
    {
      q: "What risks come with legacy application migration?",
      a: "The main risks are hidden dependencies, data differences, performance changes and cutover problems. MP-365 reduces them by mapping dependencies first, migrating test environments before production and rehearsing rollback. The risks of staying put grow as vendors end support.",
    },
    {
      q: "How does DevOps fit into application modernization?",
      a: "DevOps makes modernized applications easier to change safely. Pipelines build, test and deploy each change the same way, and release notes record what shipped. MP-365 focuses on Dynamics 365 and Power Platform releases, and sets up pipelines for migrated applications where they apply.",
    },
    {
      q: "Do you work with Microsoft only?",
      a: "Yes, with a Microsoft focus. MP-365 works on applications that run on or connect to Dynamics 365, Microsoft 365, SQL Server, .NET and Azure. Applications on other stacks are outside the service and may be better served by a provider that specializes in them.",
    },
  ],
  closing:
    "Azure application modernization works best when each application gets the lightest change that solves its real problem. MP-365 plans the order, moves the applications and hands your team a running, documented environment.",
  cta: {
    heading: "Plan your application moves",
    body: "List the applications that worry you most, and MP-365 will suggest a path and an order.",
    text: "Book a free consultation",
  },
};

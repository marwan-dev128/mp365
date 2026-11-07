import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/application-modernization/legacy-migration/",
  intro:
    "MP-365 is a legacy software modernization company for Microsoft-based applications: it re-engineers older on-premises software so it runs on supported Azure services. The work is for IT and operations leaders who depend on systems that run on aging servers, old SQL Server versions or one person's memory. Your team keeps ownership of the result.",
  atAGlance: {
    bestFor:
      "Business applications on aging Windows servers, old SQL Server versions or unsupported platforms that need to move to Azure.",
    includes:
      "Application inventory and assessment, a path for each application, database and data migration, test migrations, a rehearsed cutover and rollback plan, and handover documentation.",
    notIncluded:
      "Ongoing Azure hosting or management, managed services, building new software products, non-Microsoft technology stacks, and ERP implementation.",
    howItStarts:
      "A discovery call, then a short inventory of the applications, their owners, servers, databases and connections.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What a legacy software modernization company actually does",
      paragraphs: [
        "A legacy software modernization company assesses old applications, picks the right change for each one and moves it to a supported platform without losing data or stopping the business. MP-365 does this for Microsoft-based applications and moves them to Azure.",
        "The key skill is restraint. Not every application needs a rewrite. Some need a move, some need a new database, and some should be replaced by a Power Apps app that costs less to maintain. This page is part of [Application Modernization & DevOps](/services/application-modernization/).",
      ],
    },
    {
      type: "list",
      heading: "Problems that lead to legacy system migration",
      items: [
        "**End of support:** The operating system, database or web server no longer gets updates from Microsoft. SQL Server 2016, for example, left extended support on July 14, 2026, according to Microsoft's lifecycle page.",
        "**Hardware risk:** The application runs on a server nobody wants to restart.",
        "**Key-person risk:** One employee or contractor knows how it works, and that person is leaving.",
        "**Integration blockers:** The application cannot connect to Dynamics 365, Microsoft 365 or Power BI without fragile workarounds.",
        "**Slow, risky changes:** Every update is a manual copy that someone hopes works.",
      ],
    },
    {
      type: "table",
      heading: "Legacy items and where they usually go in Azure",
      headers: ["What you have", "Common Azure destination", "Typical approach"],
      rows: [
        [
          "Windows servers running a stable internal app",
          "Azure virtual machines",
          "Rehost, then plan later improvements",
        ],
        [
          ".NET web application on IIS",
          "Azure App Service",
          "Replatform after a code assessment",
        ],
        [
          "SQL Server database",
          "Azure SQL or SQL Server on Azure virtual machines",
          "Move with a tested data migration and a rollback plan",
        ],
        [
          "Access databases, spreadsheets and old forms",
          "Power Apps with Dataverse or SharePoint",
          "Replace with a low-code app",
        ],
        [
          "Old SharePoint farm",
          "SharePoint in Microsoft 365",
          "Staged migration, covered under the SharePoint services",
        ],
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 migrates a legacy application to Azure",
      steps: [
        {
          name: "Take inventory",
          description:
            "Record the owner, users, servers, database, scheduled jobs and every connection to other systems.",
        },
        {
          name: "Assess the code and configuration",
          description:
            "Run Azure Migrate for servers and its application and code assessment tools for .NET and Java to find blockers before any move.",
        },
        {
          name: "Pick a path per application",
          description:
            "Choose rehost, replatform, refactor or replace, and say in writing why, so the decision can be challenged.",
        },
        {
          name: "Map dependencies and group them",
          description:
            "Group applications that share databases, services or sign-in so they move together.",
        },
        {
          name: "Build the target and migrate a test copy",
          description:
            "Set up the Azure target with your IT team, move a development copy and run the full test cycle with business users.",
        },
        {
          name: "Migrate the data and rehearse",
          description:
            "Choose a data transfer path, rehearse the cutover and write the rollback steps before the real date.",
        },
        {
          name: "Cut over and verify",
          description:
            "Switch users in the agreed window, check data counts and integrations, and keep the old system on hold.",
        },
        {
          name: "Retire the old system and hand over",
          description:
            "Switch off the old servers once the business confirms, update documents and train your team.",
        },
      ],
    },
    {
      type: "prose",
      heading: "How do you migrate a legacy application to Azure?",
      paragraphs: [
        "Migrate a legacy application by assessing it, choosing a strategy, moving a test copy, rehearsing cutover and only then moving production. Microsoft's Cloud Adoption Framework recommends migrating non-production environments before production and defining rollback criteria before the move. MP-365 follows that order.",
        "Data moves by the path that fits its size and sensitivity. The Cloud Adoption Framework lists ExpressRoute, VPN, Azure Data Box for large volumes and the public internet, and MP-365 helps your IT team choose.",
      ],
    },
    {
      type: "table",
      heading: "Rebuild, rehost or replace a legacy app",
      headers: ["Option", "Choose it when", "Watch out for"],
      rows: [
        [
          "Rehost",
          "The app works, the deadline is close and the code is stable",
          "Problems move with the app, because nothing is improved",
        ],
        [
          "Replatform or refactor",
          "The app is valuable but its database, web server or code needs updating",
          "Hidden dependencies and old libraries",
        ],
        [
          "Rebuild",
          "The design is the problem and the business needs new behavior",
          "Cost and scope growth, and MP-365 does not run large product builds",
        ],
        [
          "Replace",
          "The app handles forms, records or approvals that Power Apps or a packaged product can cover",
          "Staff habits and data mapping",
        ],
      ],
    },
    {
      type: "prose",
      heading: "What are the risks of legacy system migration?",
      paragraphs: [
        "The main risks of legacy system migration are hidden dependencies, data loss or corruption, performance surprises and a failed cutover. Dependencies hide in scheduled jobs, shared folders, service accounts and reports that nobody remembers. MP-365 maps them before choosing a path.",
        "Data risk is handled with counts, sample checks and a rollback plan. Cutover risk is handled by rehearsal. Microsoft's guidance separates migrations with downtime from near-zero downtime migrations, and a critical application may need continuous replication for the second kind. MP-365 asks the business what outage it can accept before choosing.",
      ],
    },
    {
      type: "list",
      heading: "What you get",
      items: [
        "**Application inventory:** A single list of applications, owners, servers, databases and connections.",
        "**Assessment report:** Blockers, dependencies and a recommended path for each application.",
        "**Migration plan:** Waves, cutover windows, data transfer path and rollback criteria.",
        "**Migrated applications:** Running on Azure services your IT team has approved.",
        "**Release pipeline:** A repeatable deployment path where it applies, built with the [DevOps & Release Automation](/services/application-modernization/devops-release-automation/) service.",
        "**Handover pack:** Architecture notes, runbooks and a training session.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft products involved",
      headers: ["Product", "Role in the project"],
      rows: [
        ["Azure Migrate", "Server discovery, assessment and migration"],
        [
          "Azure Migrate application and code assessment",
          "Code and configuration analysis for .NET and Java applications",
        ],
        ["Azure App Service", "Hosting for replatformed web applications"],
        ["Azure SQL and SQL Server", "Database targets and sources"],
        ["Power Apps and Dataverse", "Replacement for form and workflow applications"],
        ["Azure DevOps and GitHub Actions", "Automated deployment for migrated applications"],
      ],
    },
    {
      type: "prose",
      heading: "Proof from staged Microsoft migrations",
      paragraphs: [
        "MP-365 has moved SharePoint from 2007, 2010, 2013 and 2016 to Microsoft 365 in stages for financial and manufacturing clients, and has moved Dynamics 365 from on-premises to the cloud with zero data loss as the goal. The staged method, where each stage is tested before the next begins, is the same one used for applications. See the [Clients](/clients/) page for named results.",
      ],
    },
    {
      type: "prose",
      heading: "When legacy migration is not the right fit",
      paragraphs: [
        "Legacy migration is not the right fit when the application should be retired, when it runs on a non-Microsoft stack, or when the real need is a new product. MP-365 will say so in the assessment. Retiring an unused application is cheaper than moving it. For ongoing hosting and support, work with a managed services provider, since MP-365 does not offer those services.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do you migrate a legacy application to Azure?",
      a: "Take inventory, assess code and dependencies, choose a path per application, migrate a test copy, rehearse the cutover and migrate production with a rollback plan ready. Azure Migrate and its application and code assessment tools help with the assessment. Non-production environments always move before production.",
    },
    {
      q: "Should we rebuild, rehost or replace a legacy app?",
      a: "Rehost if the app works and the deadline is close. Replatform or refactor if the app is valuable but its database or code needs updating. Rebuild only if the design itself is the problem. Replace with Power Apps or a packaged product when the app mainly handles forms, records and approvals.",
    },
    {
      q: "What are the risks of legacy system migration?",
      a: "The main risks are hidden dependencies, data loss, performance changes and a failed cutover. MP-365 reduces them by mapping dependencies first, checking data with counts and samples, testing in non-production and rehearsing rollback. Waiting also carries risk when vendors end support.",
    },
    {
      q: "What is cloud modernization?",
      a: "Cloud modernization is the practice of updating applications so they run well on cloud platforms such as Azure. It ranges from moving servers unchanged to redesigning an application. Microsoft treats replatforming, refactoring and rearchitecting as steps along a range of complexity and value.",
    },
    {
      q: "How long does a legacy migration take?",
      a: "It depends on the number of applications, dependencies, data volume and how quickly your team can test and approve. MP-365 gives a plan after the assessment and groups applications into waves. We do not quote a duration before knowing what is in scope.",
    },
    {
      q: "How much does legacy application migration cost?",
      a: "Cost depends on the path chosen for each application, the amount of data, the number of integrations and how much your team can test. MP-365 provides a written estimate after the assessment. Azure usage is billed separately by Microsoft. See the [Pricing](/pricing/) page for the engagement models.",
    },
    {
      q: "Will we have downtime during the move?",
      a: "Possibly, and you decide how much. Microsoft separates migrations with a planned outage from near-zero downtime migrations that use continuous replication. A noncritical app may accept a maintenance window, while a customer-facing app may need the second method. MP-365 agrees the window with the business.",
    },
    {
      q: "Does MP-365 rewrite applications from scratch?",
      a: "Rarely, and only as a considered choice. MP-365 prefers the lightest change that solves the problem, such as a move, a database upgrade or a low-code replacement. Large custom product builds are outside the service, and MP-365 will say so in the assessment.",
    },
    {
      q: "Do you manage the application on Azure afterward?",
      a: "No. MP-365 hands over documentation, runbooks and training, and your team or provider runs the environment. MP-365 does not offer managed services or Azure infrastructure management. You can call MP-365 again for changes or the next wave of applications.",
    },
    {
      q: "Can you move our old Access databases and forms?",
      a: "Often yes, and usually by replacing them rather than moving them. Access databases, spreadsheets and old forms that track records and approvals fit Power Apps with Dataverse or SharePoint. MP-365 reviews each one first, because some are better retired than rebuilt.",
    },
  ],
  closing:
    "A good legacy software modernization company does not push one answer. MP-365 assesses each application, chooses the lightest change that works and moves it to Azure with a tested rollback, then hands the result to your team.",
  cta: {
    heading: "Start with an application inventory",
    body: "Send MP-365 the list of systems that worry you, and we will propose a path for each.",
    text: "Book a free consultation",
  },
};

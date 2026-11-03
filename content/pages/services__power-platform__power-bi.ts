import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/power-platform/power-bi/",
  intro:
    "Power BI consulting from MP-365 replaces spreadsheet reports with live dashboards built on your Dynamics 365, SharePoint and business system data. MP-365 designs the data model, builds the reports and sets who can see which numbers.",
  atAGlance: {
    bestFor:
      "Sales, service and operations leaders whose reports are assembled by hand and whose numbers differ between teams.",
    includes:
      "Report requirements, connections to Dynamics 365 and other sources, data model, dashboards, row-level security, refresh setup, testing and handover.",
    notIncluded:
      "Data warehouse builds for unrelated systems, ERP implementation, custom software development, Microsoft license resale.",
    howItStarts:
      "A discovery call about the decisions your leaders need to make. MP-365 lists the questions each dashboard must answer and where the data lives.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What Power BI consulting includes",
      paragraphs: [
        "Power BI consulting includes working out which questions your leaders ask, finding the data that answers them, and building dashboards they trust. It also covers refresh schedules, security and training, so the reports keep working after launch.",
        "MP-365 starts from the decision, not the chart. A pipeline dashboard exists to show a sales director which deals need attention this week, not to display every field in the CRM.",
      ],
    },
    {
      type: "list",
      heading: "Reporting problems MP-365 fixes first",
      items: [
        "**Reports built by hand:** someone exports data, pastes it into Excel and fixes formulas before every meeting.",
        "**Two sets of numbers:** sales and finance quote different totals because each uses its own file.",
        "**Stale data:** leaders see last month's picture when they need this week's.",
        "**Everyone sees everything:** a regional manager can open data that belongs to another region.",
        "**Dashboards nobody opens:** the visuals answer questions that nobody asked.",
      ],
    },
    {
      type: "table",
      heading: "How Power BI connects to Dynamics 365 data",
      headers: ["Connection option", "How it works", "Use it when", "Watch for"],
      rows: [
        [
          "Dataverse connector, import mode",
          "Data is cached in Power BI and refreshed on a schedule",
          "Most reports; Microsoft recommends import wherever possible",
          "Data is as fresh as the last refresh",
        ],
        [
          "Dataverse connector, DirectQuery",
          "Power BI queries Dataverse each time a report opens",
          "A report needs near real-time data or stricter use of Dataverse security",
          "Slower visuals on large tables",
        ],
        [
          "Dataverse (Legacy) connector",
          "Reads data through the older Dataverse service interface",
          "Query results larger than 80 MB, or image columns",
          "Older connector; keep it for these cases only",
        ],
        [
          "SharePoint, Excel and other sources",
          "Power BI connectors read lists, files and other databases",
          "You need to combine CRM data with files or another business system",
          "Messy source data needs cleaning first",
        ],
      ],
    },
    {
      type: "prose",
      heading: "What it takes to connect Power BI to Dynamics 365",
      paragraphs: [
        "Connecting Power BI to Dynamics 365 is quick when the setup is right and confusing when it is not. Per Microsoft Learn (2026), the Dataverse connector needs the TDS endpoint setting enabled in your environment, and the connector needs TCP port 1433 or 5558 open. Many proxy servers do not handle this protocol.",
        "Microsoft also documents a result-size limit of 80 MB per query on the Dataverse connector. MP-365 handles this by filtering rows, dropping unused columns and shaping the model before the report grows. Choice and lookup columns arrive as two columns each, so the model needs tidying before users see it.",
      ],
    },
    {
      type: "prose",
      heading: "Power BI dashboards by audience",
      paragraphs: [
        "A good Power BI implementation gives each audience its own view of the same data. MP-365 designs these views with the people who use them, then tests each against the source system.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Sales leadership dashboards",
      paragraphs: [
        "Sales dashboards show pipeline by stage, forecast against target, deals at risk and rep activity. They read directly from [Dynamics 365 Sales](/services/dynamics-365-crm/sales/), so the numbers match what reps see in the CRM. Managers can drill from region to rep to deal.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Lead and marketing dashboards",
      paragraphs: [
        "Lead dashboards show where leads come from, how fast they are followed up and which sources turn into revenue. They depend on a clean lead process, which is why they pair with [lead management and attribution](/services/dynamics-365-crm/lead-management/). Teams using [Dynamics 365 Customer Insights](/services/dynamics-365-crm/customer-insights/) can add journey results.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Service and operations dashboards",
      paragraphs: [
        "Operations dashboards show open work, ageing, ownership and backlog. For service teams they track cases by owner and urgency. For project teams they track milestones and late items, drawing on SharePoint lists and other sources where needed.",
      ],
    },
    {
      type: "prose",
      heading: "Row-level security: who sees which rows",
      paragraphs: [
        "Row-level security limits each user to the rows they are allowed to see. In Power BI you define roles with DAX filter expressions in Power BI Desktop, publish the model, then add members to roles in the Power BI service (Microsoft Learn, 2026).",
        "Two details matter in practice. Row-level security applies to workspace viewers, not to admins, members or contributors. And a dynamic role that uses the signed-in user's name lets one rule serve every manager, so a regional lead sees only their region.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 delivers Power BI implementation services",
      steps: [
        {
          name: "List the decisions",
          description: "Interview leaders and write down the decisions each dashboard must support.",
        },
        {
          name: "Locate the data",
          description: "Identify where each number lives and who owns it, and note gaps and duplicates.",
        },
        {
          name: "Build the data model",
          description: "Shape tables and relationships, choose import or DirectQuery, and define measures once.",
        },
        {
          name: "Draft the first dashboard",
          description: "Build one dashboard for one audience and review it with its users.",
        },
        {
          name: "Reconcile the numbers",
          description: "Compare each figure to the source system until finance and sales agree.",
        },
        {
          name: "Apply security and refresh",
          description: "Set row-level security roles, workspace access and a refresh schedule.",
        },
        {
          name: "Publish and train",
          description: "Release to the Power BI service, train viewers and hand over the model to its owner.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get from Power BI consulting services",
      items: [
        "**Dashboards:** published reports for each audience, built on one shared model.",
        "**A documented data model:** tables, relationships and measures with plain-language definitions.",
        "**Security setup:** row-level security roles and workspace access matched to your org chart.",
        "**Refresh and monitoring:** a refresh schedule and an owner who is alerted when it fails.",
        "**Reconciliation notes:** proof that the dashboard totals match the source systems.",
        "**Training and backlog:** a session for viewers and a ranked list of next reports.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft products involved in a Power BI project",
      paragraphs: [
        "A Power BI project uses Power BI Desktop to build the model and reports, and the Power BI service to publish, share and refresh them. Data usually comes from Microsoft Dataverse and Dynamics 365, with SharePoint, Excel and other business systems alongside. Microsoft's documentation calls the published data models semantic models.",
        "Licensing for Power BI is set by Microsoft and is separate from consulting fees. The [pricing page](/pricing/) explains how MP-365 engages, and the license needs depend on who builds and who views.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: live dashboards that replaced hand-built sales reports",
      paragraphs: [
        "One MP-365 client lacked a single sales process, and reports were compiled by hand each month. MP-365 set up one tracking process and live dashboards for leadership, so the numbers came straight from the system. A second client got one lead process and dashboards for marketing and sales leaders.",
        "For named client results, see the [clients page](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "How to choose among Power BI consulting companies",
      paragraphs: [
        "Choose a Power BI partner that asks about decisions before charts and that can explain your source data. Ask who will build the model, how they check totals against source systems and what you own at handover. Ask also how they handle security, since many dashboards fail on access rather than design.",
        "MP-365 is a small senior team that works in Dynamics 365, SharePoint and the Power Platform, so CRM data does not need translation.",
      ],
    },
    {
      type: "prose",
      heading: "When Power BI is not the right fit",
      paragraphs: [
        "Power BI is not the right fit if your real problem is bad data entry. A dashboard on messy CRM records only shows the mess faster, and cleanup comes first. It also does not suit transaction screens where staff create records; that is a job for [Power Apps](/services/power-platform/power-apps/). MP-365 does not build enterprise data warehouses for unrelated systems.",
      ],
    },
    {
      type: "prose",
      heading: "Related Power Platform services",
      paragraphs: [
        "Dashboards are one part of the wider [Power Platform](/services/power-platform/) service. Teams often pair them with Power Apps, which captures clean data at the source.",
      ],
    },
  ],
  faqs: [
    {
      q: "What does Power BI consulting include?",
      a: "Power BI consulting includes defining the decisions your reports must support, finding and connecting the data, building a shared data model, designing dashboards, setting row-level security and refresh, and training users. MP-365 also reconciles dashboard totals against the source system so leaders trust them.",
    },
    {
      q: "How do you connect Power BI to Dynamics 365?",
      a: "MP-365 uses the Dataverse connector in Power BI Desktop, which needs the TDS endpoint setting enabled in your environment. You then choose import mode for scheduled refresh or DirectQuery for near real-time data. Microsoft recommends import wherever possible, so MP-365 chooses DirectQuery only when a report needs it.",
    },
    {
      q: "How long does a Power BI dashboard project take?",
      a: "It depends on the number of data sources, the state of the data and how many audiences need dashboards. A single dashboard on clean Dynamics 365 data moves fast. Combining several systems or fixing messy records takes longer. MP-365 delivers one audience first, then expands.",
    },
    {
      q: "What does Power BI implementation cost?",
      a: "Cost depends on data sources, dashboard count and security needs. Microsoft sets Power BI license prices separately, based on who builds and who views reports. MP-365 scopes a first dashboard so you see value before committing more. See the [pricing page](/pricing/) for how engagements work.",
    },
    {
      q: "Do we need a data warehouse for Power BI?",
      a: "Not usually. For Dynamics 365 and SharePoint reporting, Power BI can read the source data directly and model it in the report. A warehouse becomes useful when many unrelated systems must be combined at scale. MP-365 recommends the simplest design that meets your reporting needs.",
    },
    {
      q: "Can Power BI show real-time data from Dynamics 365?",
      a: "Yes, with DirectQuery on the Dataverse connector, which queries the data when a report opens. Import mode refreshes on a schedule instead. Microsoft recommends import where possible, so MP-365 uses DirectQuery for reports where fresh data matters more than speed, such as a live service queue.",
    },
    {
      q: "How do you control who sees which data?",
      a: "MP-365 uses row-level security. Roles are defined with DAX filters in Power BI Desktop, and members are assigned in the Power BI service. Microsoft notes that row-level security applies to workspace viewers, not admins, members or contributors, so MP-365 also designs workspace access carefully.",
    },
    {
      q: "Why do our reports show different numbers than the CRM?",
      a: "The usual causes are different filters, stale refreshes, duplicate records or measures defined in several places. MP-365 defines each measure once in a shared model and reconciles totals against Dynamics 365 until the numbers agree. That also reveals data quality issues worth fixing at the source.",
    },
    {
      q: "Can you fix or redesign our existing Power BI reports?",
      a: "Yes. MP-365 reviews existing reports for slow visuals, duplicated measures, broken refresh and loose access. Often the fix is to move to a shared data model rather than patch each report. The first step is a short review of the reports your leaders use most.",
    },
    {
      q: "Is Power BI the same as Excel?",
      a: "No. Excel works well for ad hoc analysis by one person, while Power BI is built for shared, refreshed reports with a governed data model and role-based access. Many teams keep using Excel for analysis and use Power BI for the numbers leaders review each week.",
    },
    {
      q: "What should we look for in a Power BI consultant?",
      a: "Look for someone who asks about decisions before charts, understands your source systems, reconciles totals to the source and explains security. Ask what you will own at handover. MP-365 works inside Dynamics 365 and SharePoint, so the person building your Power BI dashboards also understands the data behind them.",
    },
  ],
  closing:
    "Power BI consulting works when it starts with the decisions your leaders make and ends with numbers they trust. MP-365 can build the first dashboard on your Dynamics 365 data, reconcile it to the source and set up the security around it.",
  cta: {
    heading: "Talk to MP-365 about your dashboards",
    body: "Tell us which report takes the longest to produce. We will outline a dashboard and where the data would come from.",
    text: "Book a discovery call",
  },
};

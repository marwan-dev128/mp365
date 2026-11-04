import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/solutions/executive-dashboards/",
  intro:
    "A Power BI executive dashboard puts live sales, service and operations numbers in front of leaders, so decisions stop waiting on a monthly spreadsheet. MP-365 builds these dashboards on Dynamics 365 and your other business systems, with one agreed definition for every number.",
  blocks: [
    {
      type: "prose",
      heading: "The problem: leaders get the numbers after the moment has passed",
      paragraphs: [
        "In many companies the monthly report is a person with a stack of exports and a spreadsheet. By the time it reaches the leadership meeting, the data is stale, and two managers show two different revenue figures for the same period.",
        "Leaders then argue about whose number is right instead of what to do. The fix is not a prettier chart. It is a single, trusted source that refreshes on its own and shows the same figure to everyone.",
      ],
    },
    {
      type: "list",
      heading: "Who feels it",
      items: [
        "**CEOs and general managers:** you steer by gut feel because the numbers arrive late.",
        "**Sales leaders:** you cannot see pipeline, forecast and rep activity in one view.",
        "**Service and operations leaders:** you learn about backlogs and missed commitments after customers complain.",
        "**Finance and analysts:** you spend days each month compiling reports by hand.",
        "**IT:** you field report requests that never end, each one a custom export.",
      ],
    },
    {
      type: "table",
      heading: "What slow, manual reporting costs the business",
      headers: ["Symptom", "Business impact"],
      rows: [
        ["Reports built by hand each month", "Skilled people spend days compiling numbers instead of analyzing them."],
        ["Numbers differ between teams", "Meetings go to reconciling figures, and trust in the data drops."],
        ["Data is out of date at review time", "Leaders react to last month's problems, not today's."],
        ["Pipeline and forecast live in separate files", "Forecast misses surface late, when there is little time to respond."],
        ["No view of service backlog", "Customers wait, and leaders find out through escalations."],
      ],
    },
    {
      type: "list",
      heading: "What a Power BI executive dashboard should show",
      items: [
        "**Sales:** pipeline by stage, forecast against target, win rate and the deals at risk.",
        "**Service:** open cases by age and urgency, response and resolution trends, and repeat issues.",
        "**Operations:** the handful of volume and throughput measures that tell you if work is flowing.",
        "**Customers:** growth, renewals and churn signals drawn from the CRM.",
        "**Targets and trends:** each number beside its goal and its direction, not just a total.",
        "**One drill path:** from a headline number to the records behind it, so questions get answered in the meeting.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 builds your Power BI executive dashboard",
      steps: [
        {
          name: "Ask leaders what decisions they make",
          description:
            "Start from the questions each leader needs answered every week, not from the data that happens to exist.",
        },
        {
          name: "Agree on a definition for each number",
          description:
            "Write down what counts as a qualified lead, a closed deal or an open case, and who owns each definition.",
        },
        {
          name: "Map the data sources",
          description:
            "List where each number comes from, such as Dynamics 365, SharePoint lists and your other systems, and note gaps in quality.",
        },
        {
          name: "Clean and connect the data",
          description:
            "Fix duplicates and missing fields at the source where possible, then connect the sources to one Power BI data model.",
        },
        {
          name: "Build a first dashboard on real data",
          description:
            "Create a working page with a few headline measures so leaders react to something real, then refine it.",
        },
        {
          name: "Set refresh and access rules",
          description:
            "Schedule data refresh, and control who sees what, so each leader sees the right slice of the business.",
        },
        {
          name: "Validate against the old reports",
          description:
            "Compare the dashboard with the spreadsheet figures, resolve every difference and sign off the numbers with their owners.",
        },
        {
          name: "Train users and hand off",
          description:
            "Show leaders how to filter and drill down, and give your team a short guide for changes and new measures.",
        },
      ],
    },
    {
      type: "table",
      heading: "What you get from MP-365",
      headers: ["What MP-365 builds", "The result"],
      rows: [
        ["A measure dictionary with named owners", "Everyone uses the same definition for every number."],
        ["A Power BI data model on your sources", "Sales, service and operations data sits in one place that updates on schedule."],
        ["Executive and team dashboards", "Leaders see headline numbers and can drill into the detail."],
        ["Sales dashboard views in Power BI", "Pipeline, forecast and activity are visible without exporting to a spreadsheet."],
        ["Access rules by role", "Each person sees the data they should, and no more."],
        ["Data quality checks", "Bad records get flagged before they distort a chart."],
        ["User guide and training", "Your team can adjust and extend the dashboards."],
      ],
    },
    {
      type: "prose",
      heading: "How to keep dashboard data accurate",
      paragraphs: [
        "Accurate dashboards start at the source. If sales reps enter deals inconsistently, no chart can fix it. MP-365 sets required fields and clear stages in Dynamics 365 first, then builds the dashboard on top, so the report reflects how the business actually works.",
        "Each measure then gets an owner, a written definition and a reconciliation against the old report before launch. Quality checks flag duplicates and missing values after launch, so problems surface early and do not sit hidden in a total.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: from spreadsheets to live sales dashboards",
      paragraphs: [
        "One client tracked sales across scattered spreadsheets and compiled reports by hand every month. MP-365 set up one sales process and live dashboards for leadership, so the team stopped assembling reports and started using them. The client name is withheld.",
        "Read more project summaries on the [clients page](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "Scope, effort and cost",
      paragraphs: [
        "A dashboard project grows with the number of data sources, the state of the data and how many audiences need their own view. A single sales dashboard on clean CRM data is a smaller job than a company-wide view that joins several systems.",
        "MP-365 scopes this after a short discovery call. The [pricing page](/pricing/) explains how engagements work, and Power BI license fees are set by Microsoft and are separate.",
      ],
    },
    {
      type: "prose",
      heading: "When this is not the right fit",
      paragraphs: [
        "An executive dashboard is not the right fit if your underlying process is undefined, for example no agreed sales stages or case statuses. Fix the process and data entry first, or build them together. It is also not for teams that need real-time machine monitoring or a data warehouse project, which are outside what MP-365 delivers.",
      ],
    },
    {
      type: "prose",
      heading: "Related services for manufacturers and others",
      paragraphs: [
        "The hands-on build sits under [Power BI consulting and dashboards](/services/power-platform/power-bi/). When data comes from several systems, [Dynamics 365 integration services](/services/dynamics-365-crm/integration-services/) connect them first. Operations leaders can see how this fits [manufacturing companies](/industries/manufacturing/). For other outcomes, browse all [Microsoft solutions for mid-size companies](/solutions/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What should an executive dashboard show?",
      a: "An executive dashboard should show the few measures leaders use to decide, each beside its target and trend. Typical sets cover pipeline and forecast for sales, open cases and response times for service, and a few throughput measures for operations. Keep it to one screen and let people drill down for detail.",
    },
    {
      q: "How do you build a sales dashboard in Power BI?",
      a: "Connect Power BI to your CRM, define each measure, and build a model for deals, stages and owners. Then add pages for pipeline, forecast and activity. The hard part is consistent data entry, so MP-365 sets required fields and stages in Dynamics 365 before building the report.",
    },
    {
      q: "How do you keep dashboard data accurate?",
      a: "Fix data at the source, write one definition for each measure, and name an owner for it. Before launch, reconcile the dashboard against the old report and resolve every gap. After launch, run checks for duplicates and missing values so errors surface early instead of hiding inside totals.",
    },
    {
      q: "Can Power BI use Dynamics 365 data?",
      a: "Yes. Power BI connects to Dynamics 365 and to many other sources, so one dashboard can combine CRM data with other systems. MP-365 builds the data model, sets refresh, and controls who sees which records. Quality of the dashboard still depends on how consistently the CRM is used.",
    },
    {
      q: "Do executives need Power BI licenses to view the dashboards?",
      a: "It depends on how you share them. Microsoft sets licensing rules for Power BI, and they differ between viewing, creating and sharing in a workspace. MP-365 checks your current Microsoft 365 plan during discovery and tells you what viewers need, so there are no surprises later.",
    },
    {
      q: "How often does the dashboard refresh?",
      a: "You choose the refresh schedule, and it depends on the data source and the need. Many leadership views refresh daily, while service views may refresh more often. MP-365 sets the schedule for each dataset during the build and documents it, so users know how current each number is.",
    },
    {
      q: "Can different leaders see different data?",
      a: "Yes. Power BI supports row-level security, so a regional manager sees only their region while the CEO sees everything. MP-365 sets access by role and tests it with real accounts before launch. Clear rules matter because executives often share screenshots outside the meeting.",
    },
    {
      q: "Is this a replacement for our finance reporting?",
      a: "No. An executive dashboard covers operational and commercial measures that leaders watch day to day. It does not replace your official financial statements or close process. It can show finance-related measures from approved sources, but the accounting records stay in the systems that own them.",
    },
    {
      q: "Can we change the dashboard ourselves after launch?",
      a: "Yes. MP-365 documents the data model and measures and trains your team to adjust pages and add measures. Keep changes tied to the measure dictionary, so new numbers get a definition and an owner. MP-365 can return when you need larger changes or new data sources.",
    },
  ],
  closing:
    "A Power BI executive dashboard earns its place when leaders open it before the weekly meeting and trust what they see. MP-365 gets you there by fixing definitions and data first, then building views your team can keep improving.",
  cta: {
    heading: "Plan your executive dashboard",
    body: "Tell us which decisions your leaders make each week and where the numbers come from. We will outline a first dashboard on your real data.",
    text: "Plan your dashboard",
  },
};

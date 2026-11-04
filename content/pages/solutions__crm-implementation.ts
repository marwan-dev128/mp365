import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/solutions/crm-implementation/",
  intro:
    "CRM implementation services from MP-365 put Dynamics 365 Sales or Customer Service into daily use quickly, so your team stops living in spreadsheets and inboxes. MP-365 is a Microsoft Solutions Partner that starts with a working first version instead of a long design phase.",
  blocks: [
    {
      type: "prose",
      heading: "What CRM implementation services include",
      paragraphs: [
        "CRM implementation is the work of turning a CRM license into a system your team uses every day. It covers setting up your process in the software, loading your existing customer data, connecting the tools around it, testing, training people and switching them over.",
        "The software itself is rarely the hard part. Most of the effort goes into deciding how leads, accounts, cases and approvals should move, then building exactly that and nothing extra. A Dynamics 365 implementation follows the same path whether you start with sales, service or both.",
      ],
    },
    {
      type: "table",
      heading: "Three ways to run a Dynamics 365 implementation",
      headers: ["Approach", "Best for", "Trade-off"],
      rows: [
        [
          "Big-bang build from a full requirements document",
          "Organizations with unusual processes and a long runway before users need the system.",
          "Users see nothing until late, so misunderstandings surface after most of the work is done.",
        ],
        [
          "Template-based build with a working first version",
          "Mid-size sales and service teams whose process looks like most other teams in their field.",
          "Starts from proven patterns, so very unusual rules are added in later releases rather than on day one.",
        ],
        [
          "Do it yourself with the in-house IT team",
          "Teams with a Dynamics 365 administrator who has time to spare.",
          "Day-to-day work competes with the project, and the first release often slips.",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Why CRM projects take longer than planned",
      paragraphs: [
        "CRM projects slow down when the team tries to design everything before anyone touches the system. Requirements grow, each department adds a wish list, and the go-live date keeps moving.",
        "The other common cause is the release process. When changes move to production by hand with no test cycle, each release is risky, so teams release rarely and in large batches.",
      ],
    },
    {
      type: "list",
      heading: "Who feels a slow CRM rollout",
      items: [
        "**Sales leaders:** pipeline numbers come from spreadsheets assembled by hand, and forecasts lag the real deals.",
        "**Service managers:** cases live in shared inboxes with no clear owner, status or urgency.",
        "**Sales and service reps:** they enter the same details twice and stop trusting the system.",
        "**IT leaders:** they carry a half-finished project, a backlog with no order and releases nobody wants to run.",
        "**Executives:** they approve the budget and still ask for reports in a spreadsheet.",
      ],
    },
    {
      type: "table",
      heading: "What a delayed CRM costs the business",
      headers: ["Symptom", "Business impact"],
      rows: [
        ["Go-live date keeps moving", "Reps keep working in spreadsheets, so customer history stays scattered while you pay for licenses nobody uses."],
        ["Releases are manual and untested", "Each change risks breaking sales or service screens, so improvements wait and bugs reach users."],
        ["No single lead or case process", "Leads go unanswered and customer requests fall through, which costs revenue and goodwill."],
        ["Reports built by hand", "Leaders wait on monthly numbers and make decisions on stale data."],
        ["Low user adoption", "The CRM fills with partial records, so the data cannot support forecasts or service decisions."],
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 gets your CRM live fast",
      steps: [
        {
          name: "Pick the first release",
          description:
            "Agree on the one sales or service process that hurts most. That process becomes the scope of the first go-live, and everything else goes on a backlog.",
        },
        {
          name: "Start from a template",
          description:
            "Configure Dynamics 365 from a proven setup for leads, accounts, opportunities or cases instead of designing screens from scratch.",
        },
        {
          name: "Build a working first version",
          description:
            "Put a real, clickable version in front of your users early. They react to the system itself, not to a document describing it.",
        },
        {
          name: "Validate and refine with your team",
          description:
            "Run short feedback rounds with the people who will use the CRM. Change fields, views and rules until the daily workflow fits.",
        },
        {
          name: "Load and check your data",
          description:
            "Move accounts, contacts and open records from your old tools, then check them against the source before anyone relies on them.",
        },
        {
          name: "Test each release before it ships",
          description:
            "Run changes through a test environment and an automated release path, with release notes for every deployment.",
        },
        {
          name: "Train users and go live",
          description:
            "Walk each role through its own screens, run the go-live checklist and stay close to the team through the first days of real use.",
        },
        {
          name: "Keep improving from the backlog",
          description:
            "Ship the next releases from the ordered backlog, so the CRM keeps growing after launch without a second big project.",
        },
      ],
    },
    {
      type: "table",
      heading: "What you get from MP-365",
      headers: ["What MP-365 builds", "The result"],
      rows: [
        ["A configured Dynamics 365 Sales or Customer Service setup", "Your team works leads, opportunities or cases in one place from the first day."],
        ["A migrated and checked set of starting data", "Reps open the CRM and find their accounts and history already there."],
        ["A tested release path with release notes", "Changes reach production in a predictable way, and your team can see what changed."],
        ["Role-based training and a go-live checklist", "Each group knows its own screens before the switch."],
        ["An ordered backlog of next improvements", "Your next requests are queued and prioritized, not lost in email."],
        ["Live dashboards for leaders", "Pipeline and case status come from the CRM, not from a spreadsheet."],
      ],
    },
    {
      type: "prose",
      heading: "What makes a CRM go live in weeks",
      paragraphs: [
        "Three things shorten a CRM go-live without cutting corners: templates, tested releases and a working first version. Templates remove the blank-page design work. A tested release path removes the fear and the rework that come with manual deployments. A working first version removes the long wait before users can judge the result.",
        "MP-365 does not promise a fixed calendar, because scope, data quality and your team's availability change it. The first conversation sets out what the first release includes, so you can plan around it. Cost depends on the same factors, and the [Pricing](/pricing/) page explains how MP-365 engagements work.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: faster, steadier Dynamics deployments",
      paragraphs: [
        "OTIS Elevator relies on MP-365 for platform and operations leadership on Dynamics. Deployments became faster and smoother, dropping from 13 hours to 4, and manual errors fell to near zero.",
        "In another CRM deployment, MP-365 set up automatic deployment, a reliable quality-assurance cycle, release notes and a backlog the team can track. The result was releases that no longer depended on one person's memory.",
      ],
    },
    {
      type: "prose",
      heading: "Who this is not the right fit for",
      paragraphs: [
        "A fast, template-based implementation is not the right fit if your process is so unusual that no standard sales or service pattern applies. It is also a poor match if nobody on your side can give users and decision makers a few hours a week for feedback. MP-365 builds Dynamics 365 CRM, not custom software from scratch.",
      ],
    },
    {
      type: "prose",
      heading: "Related services and solutions",
      paragraphs: [
        "Choose [Dynamics 365 Sales](/services/dynamics-365-crm/sales/) when your first release is about pipeline, forecasting and lead routing. Choose [Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/) when cases and support queues come first. Releases stay predictable with [DevOps & Release Automation](/services/application-modernization/devops-release-automation/), which covers pipelines, testing and release notes for Dynamics 365.",
        "If you already run an older Dynamics CRM, see [Classic CRM Modernization](/solutions/dynamics-365-migration/). To compare other outcomes MP-365 delivers, browse all [Solutions](/solutions/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What is CRM implementation?",
      a: "CRM implementation is the project that makes a customer relationship management system ready for daily use. It includes configuring the software for your process, loading existing data, connecting other tools, testing, training users and going live. The goal is a system your team trusts, not just installed software.",
    },
    {
      q: "How long does a CRM implementation take?",
      a: "A CRM implementation takes as long as its first release is large. A narrow scope, clean starting data and available users shorten it, while many departments, messy records and many integrations lengthen it. MP-365 sets the scope of the first release in the discovery conversation so you can plan around it.",
    },
    {
      q: "How can a CRM go live in weeks?",
      a: "A CRM goes live quickly when the first release is small and built from a proven template. MP-365 pairs templates with a tested release path and puts a working first version in front of users early. Later needs move to a backlog instead of delaying the launch.",
    },
    {
      q: "Should we start with Dynamics 365 Sales or Customer Service?",
      a: "Start with the team whose process hurts most. Sales fits when pipeline visibility and lead follow-up are the problem, and Customer Service fits when cases are scattered across inboxes. Many companies launch one first, then add the other from the backlog once the first is running.",
    },
    {
      q: "Do we need to clean our data before the project starts?",
      a: "No, but the cleaner the starting data, the smoother the go-live. MP-365 checks your accounts and contacts during migration, flags duplicates and gaps, and agrees with you what to fix first. Deeper cleanup can run alongside the project or follow it.",
    },
    {
      q: "Who on our team needs to be involved?",
      a: "You need a business owner who can make decisions, a few daily users from each role, and an IT contact who knows your current tools and logins. Their time goes mostly into short feedback sessions on the working version, not long workshops.",
    },
    {
      q: "What happens after the CRM goes live?",
      a: "Work continues from the backlog. MP-365 stays close to your team through the first days of real use, fixes issues quickly, and ships further improvements as tested releases with release notes. You can then call MP-365 only when you need it or keep a steadier arrangement.",
    },
    {
      q: "How much does a Dynamics 365 implementation cost?",
      a: "Cost depends on scope, data, integrations and the number of user groups. Microsoft sets license fees separately, and MP-365 consulting fees are separate from them. See the [Pricing](/pricing/) page for how engagements are structured, then book a call to scope your first release.",
    },
  ],
  closing:
    "Good CRM implementation services shorten the distance between buying Dynamics 365 and seeing your team use it. MP-365 builds a working first version from proven templates, tests every release and keeps improving the system from an ordered backlog.",
  cta: {
    heading: "Plan your CRM go-live",
    body: "Tell MP-365 which sales or service process hurts most. You will leave the first conversation with a clear first release to build.",
    text: "Plan your CRM go-live",
  },
};

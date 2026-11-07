import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/power-platform/power-automate/",
  intro:
    "Power Automate consulting from MP-365 removes the repeated manual steps that slow your team: approvals by email, copy-and-paste between systems and status updates typed by hand. MP-365 designs, builds and fixes cloud flows across Dynamics 365, SharePoint, Outlook, Teams and other business systems.",
  atAGlance: {
    bestFor:
      "Teams that route approvals by email, re-type data between systems or run classic Dynamics 365 workflows that are hard to maintain.",
    includes:
      "Process mapping, cloud flow design and build, approvals, notifications, Dynamics 365 and SharePoint connections, error handling, testing, deployment and handover.",
    notIncluded:
      "ERP implementation, custom software development, managed services or help desk support, Microsoft license resale.",
    howItStarts:
      "A discovery call about one repeated process. MP-365 walks through it step by step and marks what can run on its own.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What Power Automate consulting covers",
      paragraphs: [
        "Power Automate consulting covers finding, designing and building the automations that save your team the most time. A Microsoft Power Automate consultant at MP-365 works from your real process, not a template. MP-365's Power Automate developers build flows that handle errors, owners and audit needs.",
        "Microsoft describes cloud flows as automated workflows that connect apps and services and can be triggered by events or by a schedule. MP-365 uses them to move data, route approvals and keep systems in step.",
      ],
    },
    {
      type: "list",
      heading: "Problems Power Automate solves in daily work",
      items: [
        "**Approvals stuck in inboxes:** a manager is away and a purchase request sits for days with no one tracking it.",
        "**Double entry:** a sales rep updates the CRM, then types the same facts into a spreadsheet or another tool.",
        "**Missed follow-ups:** nobody is reminded when a contract, quote or case is about to go stale.",
        "**Fragile classic workflows:** old Dynamics 365 workflows and plug-ins that nobody dares to change.",
        "**File chaos:** documents saved by hand into folders, with no naming or permissions rule.",
      ],
    },
    {
      type: "table",
      heading: "Types of cloud flow and when to use each",
      headers: ["Flow type", "Starts when", "Example at work"],
      rows: [
        [
          "Automated cloud flow",
          "An event happens, such as a new email or a changed record",
          "When a Dynamics 365 opportunity is won, create a project folder in SharePoint and notify the delivery team",
        ],
        [
          "Instant cloud flow",
          "Someone selects a button",
          "A manager selects a button in Teams to request approval for a purchase",
        ],
        [
          "Scheduled cloud flow",
          "A set time arrives",
          "Every night, upload that day's transactions to SharePoint or a database",
        ],
      ],
    },
    {
      type: "prose",
      heading: "What Power Automate can automate",
      paragraphs: [
        "Power Automate can automate anything with a trigger and a series of actions across the many apps it connects to. Beyond cloud flows, desktop flows can automate tasks in Windows applications that have no modern interface. MP-365 uses desktop flows only when no connector exists.",
        "Good first candidates share three traits: people repeat the task often, the rules are clear, and the data already lives in a Microsoft system.",
      ],
    },
    {
      type: "steps",
      heading: "How an approval workflow works in Power Automate",
      steps: [
        {
          name: "Start from a trigger",
          description: "A new request record, a form submission or a button in Teams starts the flow.",
        },
        {
          name: "Look up the approver",
          description: "The flow reads the manager or owner from Dataverse, Dynamics 365 or Microsoft Entra, so no one hard-codes names.",
        },
        {
          name: "Send the approval",
          description: "The approver receives a request in Teams, Outlook or the Approvals app with the key details.",
        },
        {
          name: "Wait for the decision",
          description: "The flow pauses until a response arrives, with a reminder or escalation if nothing happens.",
        },
        {
          name: "Branch on the answer",
          description: "An approved request moves on to the next step. A rejected one returns to the requester with comments.",
        },
        {
          name: "Record the outcome",
          description: "The flow writes the decision, time and approver back to the record for audit.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Replacing classic workflows and plug-ins with cloud flows",
      paragraphs: [
        "MP-365 replaces fragile classic Dynamics 365 workflows and plug-ins with cloud flows where it lowers the cost of change. A flow is visible in a designer, so an administrator can read what it does. Plug-in code often needs a developer for every tweak.",
        "Not every plug-in should move. Logic that must run inside a database transaction may stay as code. MP-365 reviews each one and tells you which to move, which to keep and why.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 delivers a Power Automate project",
      steps: [
        {
          name: "Map the current process",
          description: "Walk through each step with the people who do it and note exceptions.",
        },
        {
          name: "Pick the first flows",
          description: "Rank candidates by hours saved and risk, and choose one or two to build first.",
        },
        {
          name: "Design the flow",
          description: "Define the trigger, conditions, approvers, data fields and failure handling before building.",
        },
        {
          name: "Build in a solution",
          description: "Create flows inside a Power Platform solution, using connection references so they move cleanly between environments.",
        },
        {
          name: "Add error alerts",
          description: "Log failures and notify a named owner instead of failing silently.",
        },
        {
          name: "Test with real data",
          description: "Run live cases in a test environment and confirm each branch behaves.",
        },
        {
          name: "Deploy and hand off",
          description: "Release to production, document each flow and show the owner how to monitor it.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get from Power Automate consulting services",
      items: [
        "**Working flows:** deployed to production in a managed solution.",
        "**Approval routing:** approvers, reminders and escalation rules that match your policy.",
        "**Connected systems:** flows linking Dynamics 365, SharePoint, Outlook and Teams.",
        "**Error handling:** alerts that tell a named owner when a run fails.",
        "**Documentation:** a plain-language description of each flow, its trigger and its owner.",
        "**Next-step list:** ranked automations to build next.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft products and controls involved",
      paragraphs: [
        "MP-365 builds with Power Automate cloud flows, Microsoft Dataverse, SharePoint, Outlook, Teams and Dynamics 365. Microsoft says you can also describe what you want to Copilot in the new designer and have it suggest the actions, as of Microsoft's July 2026 documentation. MP-365 uses that for drafts, then reviews each step.",
        "Administrators control which connectors flows may use through Power Platform data policies. MP-365 checks your policies before building so a flow does not fail at deployment.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: automation that cut deployment time",
      paragraphs: [
        "MP-365 leads platform and operations for Dynamics at OTIS Elevator. Deployments went from 13 hours to 4, and manual errors fell to near zero. The principle is the one behind every flow MP-365 builds: replace a repeated manual step with a repeatable one.",
        "Read more on the [clients page](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "When Power Automate is not the right fit",
      paragraphs: [
        "Power Automate is not the right fit for simple field logic, such as making a field required, which a Dynamics 365 business rule handles better. It is also not ideal for moving very large data volumes between systems on a strict schedule. For that, MP-365 uses [Dynamics 365 integration services](/services/dynamics-365-crm/integration-services/) with logging and alerts.",
      ],
    },
    {
      type: "prose",
      heading: "Cost and related services",
      paragraphs: [
        "Cost depends on the number of flows, the systems involved and the approval rules. Microsoft's license fees are separate from consulting; see the [pricing page](/pricing/) for how MP-365 engages.",
        "Flows pair naturally with [Power Apps](/services/power-platform/power-apps/) for the screen people use, and with [custom Copilot agents](/services/copilot/custom-agents/) that call a flow to take action. The wider [Power Platform](/services/power-platform/) page shows how the four tools connect.",
      ],
    },
  ],
  faqs: [
    {
      q: "What can Power Automate automate?",
      a: "Power Automate can automate approvals, notifications, document handling and data moves between apps such as Dynamics 365, SharePoint, Outlook and Teams. Cloud flows run on triggers or schedules, and desktop flows handle Windows applications. The best candidates are repeated tasks with clear rules.",
    },
    {
      q: "How do approval workflows work in Power Automate?",
      a: "A trigger starts the flow, the flow sends an approval request to Teams or Outlook, waits for a response, then branches on approve or reject. It writes the outcome back to the record. Reminders and escalation rules handle approvers who are away or slow to answer.",
    },
    {
      q: "How long does a workflow automation project take?",
      a: "It depends on the number of flows, systems and approval rules. A single approval flow is a small job, while a chain of flows across several systems takes longer. MP-365 builds the highest-value flow first so you see results early, then adds more from a ranked list.",
    },
    {
      q: "What is the difference between a cloud flow and a desktop flow?",
      a: "A cloud flow connects online services through connectors and runs without a person at a computer. A desktop flow automates actions in Windows applications, usually where no connector exists. MP-365 prefers cloud flows because they are easier to monitor and maintain.",
    },
    {
      q: "Can Power Automate replace our classic Dynamics 365 workflows?",
      a: "Often, yes. Cloud flows can take over most classic workflow and plug-in logic, and they are easier for administrators to read and change. MP-365 reviews each existing workflow and plug-in, then recommends which to move and which to leave alone.",
    },
    {
      q: "Do we need a developer to maintain flows?",
      a: "Not usually. Cloud flows are built in a visual designer, so a trained administrator can handle small changes. MP-365 documents each flow, names an owner and sets up failure alerts. For larger changes you can call MP-365 on an ad hoc or ongoing basis.",
    },
    {
      q: "What happens when a flow fails?",
      a: "A well-built flow records the failure and alerts a named owner. MP-365 adds error handling to each flow, such as retries for temporary problems and clear notifications for data issues. Without it, a failed run can go unnoticed for days.",
    },
    {
      q: "Can Power Automate connect to our ERP system?",
      a: "Yes, when the ERP offers a connector or an API. MP-365 does not implement ERP, but it connects Dynamics 365 and Power Automate to ERP systems such as Business Central so data flows without double entry. Larger or higher-volume links use the [integration services](/services/dynamics-365-crm/integration-services/) approach.",
    },
    {
      q: "How much does Power Automate consulting cost?",
      a: "Cost depends on how many flows you need, the systems they touch and the approval rules. Microsoft sets license fees separately from consulting. MP-365 scopes a small first flow so you see the value before committing more. The [pricing page](/pricing/) explains how engagements work.",
    },
    {
      q: "Is Power Automate secure for business data?",
      a: "Flows run under controls your administrators set. Power Platform data policies limit which connectors flows may use, and flows use connections with defined permissions. MP-365 reviews connectors and ownership before building, but it does not provide cybersecurity services.",
    },
  ],
  closing:
    "Power Automate consulting pays back fastest when it starts with one process people already complain about. MP-365 can map that process, build the first flow on your Microsoft systems and show you what to automate next. For one common use, read about [contract management automation](/solutions/contract-management-automation/).",
  cta: {
    heading: "Talk to MP-365 about automating your first process",
    body: "Name the task your team repeats the most. We will tell you whether a flow fits and how a first version would work.",
    text: "Book a free consultation",
  },
};

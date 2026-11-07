import type { BlogPost } from "../blog";

export const post: BlogPost = {
  slug: "microsoft-copilot-cowork-in-dynamics-365",
  title: "Copilot Cowork in Dynamics 365: How It Works",
  metaDescription:
    "See how Copilot Cowork connects to Dynamics 365 through plugins, which Sales and Service workflows it speeds up, and how it differs from agents. Book a call.",
  cluster: "Copilot & AI",
  authorSlug: "mp365-team",
  imageUrl: "/images/blog/microsoft-copilot-cowork-in-dynamics-365.webp",
  datePublished: "2026-06-28",
  dateModified: "2026-11-07",
  excerpt:
    "Copilot Cowork is an agentic layer in Microsoft 365 Copilot that reaches into Dynamics 365 through plugins. You direct it in natural language, it does the multi-step work, and nothing happens until you approve it. It is not a Dynamics 365 feature and not an autonomous agent.",
  body: [
    {
      type: "prose",
      paragraphs: [
        "**Copilot Cowork Dynamics 365** is a combination of two connected but separate things. Copilot Cowork is an agentic execution layer built into Microsoft 365 Copilot. Dynamics 365 provides the business data (accounts, opportunities, pipeline records and customer interactions) that Cowork pulls from to complete real work.",
        "When the two are connected through a plugin, sales teams can stop switching between apps to gather information, draft communications and update records. They describe the outcome they want in natural language and Cowork handles the steps. This is not a Dynamics 365 feature and it is not a Copilot agent. It is a user-directed, multi-step AI workflow tool that becomes far more powerful when it has access to your CRM data.",
      ],
    },
    {
      type: "prose",
      heading: "What Is Microsoft Copilot Cowork?",
      paragraphs: [
        "**Microsoft Copilot Cowork** is an agentic orchestrator built into Microsoft 365 Copilot. It executes multi-step tasks across your Microsoft 365 environment on your behalf, not just assists with them. In practice, it works like this:",
      ],
    },
    {
      type: "list",
      items: [
        "You describe an outcome in natural language, such as “prepare a briefing for my meeting with this account” or “follow up on all open opportunities this week”",
        "Cowork breaks it into a sequence of steps",
        "It works through those steps across Outlook, Teams, Word, Excel, SharePoint and your calendar",
        "Before each action, it surfaces what it plans to do and waits for your approval",
        "Nothing is sent, created or updated without you confirming it first",
      ],
    },
    {
      type: "prose",
      heading: "How Is Copilot Cowork Different From Copilot Agents?",
      paragraphs: [
        "This is where most people get confused, and it matters. [Copilot Agents](/blog/copilot-agents-dynamics-365-business-automation/) are built to run **autonomously**. They execute on a trigger or a schedule, without someone directing each step. Cowork is fundamentally different:",
      ],
    },
    {
      type: "list",
      items: [
        "Agents run on their own once configured",
        "Cowork runs with you: it handles the execution while you stay in control of every decision",
        "Agents are designed to remove human involvement from a process",
        "Cowork is designed to handle the effort of a process while keeping you in the loop at every checkpoint",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "This human-in-the-loop design is not a limitation of Cowork. It is the point. For complex, judgment-driven work involving customer relationships and live business data, having a human review each step before it happens is exactly what most organizations need.",
      ],
    },
    {
      type: "prose",
      heading: "Copilot Cowork Availability",
      level: 3,
      paragraphs: [
        "As of May 2026, **Microsoft Copilot Cowork** is available to Microsoft 365 Copilot customers enrolled in the Frontier program. It runs across:",
      ],
    },
    {
      type: "list",
      items: ["Desktop and browser", "Outlook and Teams", "iOS and Android"],
    },
    {
      type: "prose",
      heading: "How Does Copilot Cowork Connect to Dynamics 365?",
      paragraphs: [
        "**Copilot Cowork Dynamics 365** integration works through a dedicated plugin model. Cowork does not live inside Dynamics 365. Instead, it reaches into your Dynamics 365 environment, pulls the business data it needs to complete the task you described, then acts on that data across your Microsoft 365 tools in a single connected workflow.",
      ],
    },
    {
      type: "prose",
      heading: "The Dynamics 365 Plugins: How They Work",
      level: 3,
      paragraphs: [
        "To connect Cowork to Dynamics 365, your admin enables the relevant plugin through the Microsoft 365 admin center. Microsoft provides dedicated Dynamics 365 plugins for Cowork, including:",
      ],
    },
    {
      type: "list",
      items: [
        "**Dynamics 365 Sales:** access to accounts, contacts, leads, opportunities and pipeline data",
        "**Dynamics 365 Customer Service:** access to cases, customer interactions and service history",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "The Sales and Customer Service plugins are enabled by default for Microsoft 365 Copilot Frontier customers. Authentication runs through Microsoft Entra ID, and Cowork respects the exact same user-level permissions already set inside your Dynamics 365 environment. Users can only access data they are already authorized to see.",
      ],
    },
    {
      type: "prose",
      heading: "What Dynamics 365 Data Can Cowork Access?",
      level: 3,
      paragraphs: [
        "Once the plugin is active, Cowork can surface and work with Dynamics 365 data as part of a broader task. This includes:",
      ],
    },
    {
      type: "list",
      items: [
        "Account and contact records",
        "Open and closed opportunities",
        "Lead information and qualification history",
        "Activity history and meeting notes",
        "Customer interaction records",
        "Sales pipeline data",
        "Case records and service history",
      ],
    },
    {
      type: "prose",
      heading: "Why This Matters for Dynamics 365 Users",
      level: 3,
      paragraphs: [
        "Most Dynamics 365 users already spend time manually pulling this information together: reviewing records before a meeting, checking pipeline status before a review call, or searching activity history before a follow-up. The **Copilot Cowork Dynamics 365** plugin changes that. Instead of navigating between records and apps to gather context, users describe what they need. Cowork assembles it, grounded in live CRM data, and then takes the next steps across Outlook, Teams and the rest of Microsoft 365. Our [Copilot Cowork service](/services/copilot/cowork/) helps teams set this up.",
        "This is also where the difference from Copilot Agents becomes visible. An agent connected to Dynamics 365 might automatically update a record when a deal stage changes, or send a notification when an opportunity goes cold, running in the background without anyone asking.",
        "**Microsoft Copilot Cowork**, by contrast, brings that same Dynamics 365 data into a task you initiate. It combines the data with emails, documents and calendar context to help you complete something more complex and judgment-driven than an agent would handle on its own.",
      ],
    },
    {
      type: "prose",
      heading: "What Can Copilot Cowork Do With Dynamics 365 Data?",
      paragraphs: [
        "This is where **Copilot Cowork Dynamics 365** moves from concept to measurable business value. Because Cowork can combine live CRM data with emails, documents, meetings and calendar context, it can support end-to-end workflows that would otherwise require a salesperson to switch between several applications and piece everything together by hand. Below are the most useful real-world scenarios: pipeline reviews, meeting preparation, post-meeting follow-up and case resolution.",
      ],
    },
    {
      type: "prose",
      heading: "Pipeline Reviews",
      level: 3,
      paragraphs: [
        "A pipeline review typically means opening Dynamics 365, filtering opportunities by stage, cross-referencing recent emails, checking Teams conversations, and then building a summary or presentation manually. With **Copilot Cowork Dynamics 365**, that entire process becomes a single request:",
      ],
    },
    {
      type: "list",
      items: [
        "Cowork pulls open opportunities directly from Dynamics 365 Sales",
        "Cross-references recent emails and Teams conversations related to those accounts",
        "Identifies at-risk deals based on activity history and last contact dates",
        "Builds a formatted pipeline summary or PowerPoint presentation",
        "Surfaces it for your review before anything is shared",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "What would take 45 minutes of manual work gets handed off and comes back as a finished, reviewable output.",
      ],
    },
    {
      type: "prose",
      heading: "Meeting Preparation",
      level: 3,
      paragraphs: [
        "Before a customer meeting, salespeople typically need account history, open opportunities, recent interactions and outstanding action items pulled from at least three different places. Cowork handles all of it in one workflow:",
      ],
    },
    {
      type: "list",
      items: [
        "Pulls the account record and opportunity details from Dynamics 365",
        "Reviews recent email threads with the contact in Outlook",
        "Surfaces open action items from previous meetings in Teams",
        "Combines everything into a single pre-meeting briefing document",
        "Has it ready before the meeting, without the manual preparation",
      ],
    },
    {
      type: "prose",
      heading: "Post-Meeting Follow-Up",
      level: 3,
      paragraphs: [
        "Follow-up is where deals are won or lost, and it is also where salespeople lose the most time to repetitive administrative work. After a meeting, Cowork can:",
      ],
    },
    {
      type: "list",
      items: [
        "Draft a follow-up email based on meeting notes and Dynamics 365 activity history",
        "Create an action-item list from what was discussed",
        "Schedule next steps directly in the calendar",
        "Update the relevant opportunity record in Dynamics 365",
        "Post a summary to the relevant Teams channel for internal visibility",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "People sometimes ask whether a Copilot agent could do this instead. An agent could be configured to send a follow-up email automatically after a meeting ends, but it would apply the same template to every meeting, every time, without reading the room.",
        "Cowork reads the actual meeting context, the relationship history from Dynamics 365 and the tone of recent emails, then drafts something that reflects the specific conversation. It still puts the draft in front of you for review before it goes anywhere.",
      ],
    },
    {
      type: "prose",
      heading: "Case Resolution in Customer Service",
      level: 3,
      paragraphs: [
        "For teams using [Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/), Cowork can bring case data into a resolution workflow without the agent ever leaving their current working context:",
      ],
    },
    {
      type: "list",
      items: [
        "Pulls the full case history and previous interactions from Dynamics 365",
        "Reviews related emails and any attached documents",
        "Drafts a resolution response grounded in both the case record and recent communication",
        "Surfaces it for review before sending",
      ],
    },
    {
      type: "prose",
      heading: "What Are Copilot Cowork Skills and Why Do They Matter for Dynamics 365 Users?",
      paragraphs: [
        "One of the most practical and most misunderstood features of **Microsoft Copilot Cowork** is Skills. Once you have run a workflow a few times, you start to notice that certain tasks follow the same structure every time: the same pipeline review format every Monday, the same meeting prep checklist before every customer call, the same follow-up email structure after every demo. Skills are how Cowork turns those repeatable processes into something you never have to rebuild from scratch.",
      ],
    },
    {
      type: "prose",
      heading: "What Exactly Is a Cowork Skill?",
      level: 3,
      paragraphs: [
        "A Skill is a reusable set of instructions that tells Cowork how to complete a specific task or workflow. It captures:",
      ],
    },
    {
      type: "list",
      items: [
        "The structure you want the output to follow",
        "The tone and format that fits your team or brand",
        "The data sources Cowork should pull from, including Dynamics 365",
        "The steps it should take and in what order",
        "Any specific checkpoints where you want to review before proceeding",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "Once a Skill is saved, you can trigger the entire workflow with a single prompt instead of re-explaining the process every time.",
      ],
    },
    {
      type: "prose",
      heading: "A Real Example: Weekly Pipeline Review Skill",
      level: 3,
      paragraphs: [
        "Here is what a pipeline review Skill connected to **Copilot Cowork Dynamics 365** might look like in practice:",
      ],
    },
    {
      type: "list",
      items: [
        "Every time it is triggered, Cowork pulls open opportunities from Dynamics 365 Sales",
        "It filters by stage, deal size or last activity date based on your saved preferences",
        "It cross-references recent emails and Teams conversations for each account",
        "It builds the pipeline summary in your preferred format: a Word document, a PowerPoint or a structured Teams post",
        "It delivers the summary to the right people before the review meeting",
      ],
    },
    {
      type: "prose",
      paragraphs: ["Same output. Same structure. Every week. Without starting over."],
    },
    {
      type: "prose",
      heading: "Skills vs. Copilot Agents: The Most Common Confusion",
      level: 3,
      paragraphs: [
        "This is the point where most people conflate Cowork with Copilot Agents, so it is worth being clear about the difference.",
        "A Skill does not run on its own. It does not wake up on Monday morning, pull your pipeline data and send a report to your team automatically. That is what a Copilot agent would do: configured once in Copilot Studio, connected to Dynamics 365, set to trigger on a schedule, and fully autonomous from that point forward. A Skill is more like a saved recipe:",
      ],
    },
    {
      type: "list",
      items: [
        "**Copilot Agent:** the chef who shows up every Monday and makes the same dish automatically, whether you asked or not",
        "**Cowork Skill:** the recipe that makes it effortless to cook the dish yourself, but you still decide when to make it, review it before it leaves the kitchen and confirm it is ready to serve",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "For organizations that want consistency without removing human judgment from the process, Skills are the right tool. For processes that are so well-defined and repetitive that no human review is needed, a Copilot agent is the better fit. Many Dynamics 365 organizations will eventually use both: agents handling the fully automated background work, and Cowork Skills handling the structured but judgment-driven workflows that still need a human in the loop.",
      ],
    },
    {
      type: "prose",
      heading: "Copilot Cowork vs. Copilot Agents: What Is the Actual Difference?",
      paragraphs: [
        "This is the question that comes up most often when organizations start exploring **Copilot Cowork Dynamics 365**, and it is also the one most frequently answered incorrectly. Both [Copilot Cowork and Copilot Agents](/blog/difference-between-copilot-m365-copilot-agents-cowork-explained/) are part of Microsoft’s agentic AI ecosystem. Both can connect to Dynamics 365. Both can automate work. But they are built for fundamentally different situations, and choosing the wrong one will leave you with either too little automation or too little control.",
      ],
    },
    {
      type: "prose",
      heading: "The Core Distinction",
      level: 3,
      paragraphs: ["The clearest way to separate them is this:"],
    },
    {
      type: "list",
      items: [
        "**Copilot Cowork** is for complex, judgment-driven work that spans multiple apps and data sources, where a human needs to stay involved, review outputs and approve actions before they happen",
        "**Copilot Agents** are for repetitive, rule-based, high-volume processes where the workflow is well-defined enough to run autonomously without someone directing each step",
      ],
    },
    {
      type: "prose",
      paragraphs: ["Neither is more advanced than the other. They solve different problems."],
    },
    {
      type: "table",
      heading: "Copilot Cowork vs. Copilot Agents: Full Comparison",
      level: 3,
      headers: ["Criteria", "Copilot Cowork", "Copilot Agents"],
      rows: [
        [
          "What it is",
          "M365 Copilot agentic execution layer you direct conversationally",
          "Purpose-built autonomous bots for specific automated tasks",
        ],
        ["How it runs", "You trigger it and approve each step", "Runs autonomously on triggers or schedules"],
        [
          "User control",
          "High, approval required at every action",
          "Low to none, designed to run without interruption",
        ],
        [
          "Best for",
          "Multi-step tasks spanning several apps and data sources",
          "Repetitive, rule-based, high-volume processes",
        ],
        [
          "Dynamics 365 access",
          "Via plugin, on demand, as part of a broader task",
          "Via connector or Power Automate, on trigger or schedule",
        ],
        [
          "Where it lives",
          "Microsoft 365 Copilot Frontier program",
          "Copilot Studio and Microsoft 365 agent ecosystem",
        ],
        [
          "Requires human input",
          "Yes, conversational direction and approval required",
          "No, runs to completion independently once configured",
        ],
        [
          "Output type",
          "Documents, emails, summaries, briefings, calendar events",
          "Data updates, automated notifications, triggered responses",
        ],
        [
          "Who controls the workflow",
          "The user, at every checkpoint",
          "The organization at setup, then fully autonomous",
        ],
        [
          "Customization",
          "Via Skills and Dynamics 365 plugins",
          "Via Copilot Studio, Power Automate flows and connectors",
        ],
        [
          "Human review before action",
          "Always",
          "Not required, depends on configuration",
        ],
        [
          "Ideal Dynamics 365 scenario",
          "Pipeline reviews, meeting prep, follow-up workflows, case resolution",
          "Auto-updating records, lead scoring, scheduled reporting, alerts",
        ],
      ],
    },
    {
      type: "prose",
      heading: "How to Decide Which One Your Organization Needs",
      level: 3,
      paragraphs: ["Use this as a practical decision framework:"],
    },
    {
      type: "list",
      items: [
        "**Choose Copilot Cowork** when the task is complex, involves multiple data sources, requires reading context and tone, and benefits from a human reviewing the output before it reaches a customer or stakeholder",
        "**Choose Copilot Agents** when the task is clearly defined, follows the same rules every time, needs to run at scale or on a schedule, and does not require human judgment to complete correctly",
        "**Use both** when your Dynamics 365 workflows include a mix: agents handling the predictable background automation while Cowork handles the complex, relationship-driven work that still needs a person in the loop",
      ],
    },
    {
      type: "prose",
      heading: "A Practical Example Inside Dynamics 365",
      level: 3,
      paragraphs: [
        "Consider a sales team managing a large pipeline in Dynamics 365 Sales. A **Copilot agent** could be configured to flag opportunities that have had no activity in 14 days, update the opportunity stage and send an internal alert to the account owner. No human is needed, and it runs every night.",
        "**Copilot Cowork** could then be used by that account owner to take action: pulling the flagged opportunity from Dynamics 365, reviewing the email history with the contact, drafting a re-engagement message and scheduling a follow-up call, all in one workflow, with the account owner approving each step before anything is sent. The agent does the monitoring. Cowork does the thinking and the doing, with a human still in the seat.",
      ],
    },
    {
      type: "prose",
      heading: "What Does Your Organization Need Before Implementing Copilot Cowork With Dynamics 365?",
      paragraphs: [
        "Getting value from **Copilot Cowork Dynamics 365** does not start with turning on a plugin. It starts with making sure the right foundations are in place, because Cowork is only as good as the data, permissions and processes it has access to. Organizations that skip this step often find that their outputs are incomplete, inconsistent, or need more manual correction than the workflow was supposed to eliminate.",
      ],
    },
    {
      type: "prose",
      heading: "1. Licensing and Program Enrollment",
      level: 3,
      paragraphs: ["Before anything else, confirm that your organization meets the baseline requirements:"],
    },
    {
      type: "list",
      items: [
        "An active **Microsoft 365 Copilot license** is required. Cowork is not available on standard Microsoft 365 plans",
        "Enrollment in the **Microsoft 365 Frontier program** is required to access Cowork",
        "A **Dynamics 365 Sales or Customer Service license** is required, depending on which plugin you intend to use",
        "Plugin deployment is handled through the **Microsoft 365 admin center**, and the Dynamics 365 Sales and Customer Service plugins are enabled by default for eligible tenants",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "If your organization is not yet on Microsoft 365 Copilot or has not enrolled in Frontier, that is the starting point. Our [Microsoft 365 Copilot readiness](/services/copilot/readiness/) work covers exactly this.",
      ],
    },
    {
      type: "prose",
      heading: "2. Dynamics 365 Data Quality",
      level: 3,
      paragraphs: [
        "This is the foundation that most organizations underestimate. **Microsoft Copilot Cowork** pulls its business context directly from Dynamics 365. If the data inside your CRM is incomplete, outdated or inconsistently maintained, the workflows Cowork builds around that data will reflect those gaps. Before enabling the Dynamics 365 plugin, review the following:",
      ],
    },
    {
      type: "list",
      items: [
        "**Account and contact records:** are they complete, deduplicated and up to date?",
        "**Opportunity records:** do they accurately reflect current stage, value and expected close date?",
        "**Activity history:** are meetings, calls and emails being logged consistently?",
        "**Lead records:** is qualification information captured in a structured way?",
        "**Pipeline hygiene:** are closed, stale or inactive records being managed and archived?",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "A Cowork workflow built on clean Dynamics 365 data produces reliable, usable outputs. The same workflow built on messy CRM data produces outputs that need significant manual correction, which defeats the purpose. If your records need work first, our [data quality management](/services/data-governance/data-quality-management/) service can help.",
      ],
    },
    {
      type: "prose",
      heading: "3. User Readiness and Adoption",
      level: 3,
      paragraphs: [
        "Cowork requires users to describe outcomes clearly in natural language. This sounds simple, but in practice it is a skill that needs to be developed, especially for teams used to navigating Dynamics 365 manually rather than delegating work to an AI system. Best practices for user readiness include:",
      ],
    },
    {
      type: "list",
      items: [
        "**Start with high-impact, familiar workflows.** Pipeline reviews and meeting prep are the easiest entry points because users already know what a good output looks like",
        "**Provide role-specific guidance.** A salesperson and a customer service manager will use Cowork very differently, and training should reflect that",
        "**Set clear expectations** about what Cowork handles and what still needs human judgment, especially for customer-facing outputs",
        "**Gather feedback early.** The first stretch of usage will reveal which workflows save the most time and which need refinement",
        "**Measure before and after.** Time spent on pipeline admin, meeting prep and follow-up communication are all measurable baselines",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "Organizations that invest in user readiness get faster returns. Organizations that simply turn Cowork on and expect adoption to happen organically tend to see underutilization.",
      ],
    },
    {
      type: "prose",
      heading: "4. Governance and Security",
      level: 3,
      paragraphs: [
        "Because **Copilot Cowork Dynamics 365** works with live customer data, opportunity records and business communications, governance is a prerequisite for scaling confidently. The good news is that Cowork operates within Microsoft’s existing security and permission framework:",
      ],
    },
    {
      type: "list",
      items: [
        "Users can only access Dynamics 365 data they are already authorized to see. Cowork does not create new data access, it uses existing permissions",
        "Microsoft Purview audit logs capture all Copilot Cowork activity, including plugin interactions with Dynamics 365",
        "Plugins can be restricted by user group or disabled entirely through the Microsoft 365 admin center",
      ],
    },
    {
      type: "prose",
      paragraphs: ["Beyond the technical controls, organizations should also define:"],
    },
    {
      type: "list",
      items: [
        "**AI usage policies:** what types of outputs require human review before being sent externally?",
        "**Approval workflows:** who reviews Cowork outputs for customer-facing communications?",
        "**Role-based access:** which teams or individuals should have access to which Dynamics 365 plugins?",
        "**Change management procedures:** how will process changes driven by Cowork be communicated and documented across the organization?",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "Cowork governance also differs from agent governance. With Copilot agents, governance is mainly about what the agent is configured to do upfront, because once it runs, it runs autonomously. With Cowork, governance is more about what happens at the output stage. Because a human is always in the loop, the risk is less about runaway automation and more about making sure human approvals are applied thoughtfully rather than rubber-stamped.",
      ],
    },
    {
      type: "prose",
      heading: "Is Copilot Cowork the Right Fit for Your Dynamics 365 Organization?",
      paragraphs: [
        "**Copilot Cowork Dynamics 365** is not the right tool for every organization at every stage, and being honest about that is more useful than overselling it. The organizations that get the most value from Cowork share a few characteristics, and knowing where you sit relative to them is the most practical starting point.",
      ],
    },
    {
      type: "prose",
      heading: "Copilot Cowork Is a Strong Fit If Your Organization:",
      level: 3,
      paragraphs: [],
    },
    {
      type: "list",
      items: [
        "Is already using **Microsoft 365 Copilot** and wants to move beyond single-prompt assistance into multi-step workflow execution",
        "Has sales or customer service teams spending significant time on manual **coordination**: meeting prep, pipeline reviews, follow-up communication, case research",
        "Uses Dynamics 365 Sales or Customer Service and maintains reasonably clean, up-to-date CRM data",
        "Wants to introduce AI-driven automation while keeping human oversight in place, especially for customer-facing outputs",
        "Is not yet ready to fully automate processes end-to-end but wants to meaningfully reduce the manual effort involved in completing them",
      ],
    },
    {
      type: "prose",
      heading: "Copilot Cowork May Not Be the Right Starting Point If Your Organization:",
      level: 3,
      paragraphs: [],
    },
    {
      type: "list",
      items: [
        "Does not yet have a Microsoft 365 Copilot license or Frontier program enrollment in place. That is the prerequisite, and it needs to come first",
        "Has significant Dynamics 365 data quality issues that have not been addressed. Investing in Cowork before the CRM data is reliable will produce unreliable outputs",
        "Is looking for fully autonomous, trigger-based automation that runs without any human involvement. That is a Copilot agent use case, not a Cowork use case",
        "Expects Cowork to replace Dynamics 365 Copilot inside the CRM. They are complementary tools, not alternatives to each other",
      ],
    },
    {
      type: "prose",
      heading: "Where Cowork, Agents and Dynamics 365 Copilot Fit Together",
      level: 3,
      paragraphs: [
        "One of the most common mistakes organizations make when evaluating **Microsoft Copilot Cowork** is treating it as an either/or decision against agents or Dynamics 365 Copilot. In practice, the most effective Microsoft AI strategies use all three layers together:",
      ],
    },
    {
      type: "list",
      items: [
        "**Copilot inside Dynamics 365** handles AI assistance within the CRM itself: summarizing records, generating emails from within a lead or opportunity, and answering questions about a specific account without leaving the app",
        "**Copilot Agents** handle fully autonomous background automation: flagging stale opportunities, triggering notifications, updating records based on rules and running scheduled reporting without anyone initiating it",
        "**Copilot Cowork** sits in the middle, handling the complex, multi-step, judgment-driven work that is too nuanced for an agent to run autonomously but too time-consuming for a human to do manually every time",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "These three layers do not compete with each other. They cover different parts of the same workflow. An agent surfaces the problem, Cowork helps the human address it, and Dynamics 365 Copilot supports the detailed CRM work that happens inside the record itself.",
      ],
    },
    {
      type: "prose",
      heading: "Next Step",
      paragraphs: [
        "If your organization is already on Microsoft 365 Copilot and using Dynamics 365, the most practical next step is to identify which workflows consume the most manual time right now: pipeline reviews, meeting preparation, post-meeting follow-up and case resolution. Then map them against what **Copilot Cowork Dynamics 365** can handle with the Sales or Customer Service plugin enabled.",
        "That mapping exercise does not need to be complex. It needs to be honest about where your data quality stands, which teams are ready to adopt a new way of working, and which processes still need enough human judgment that removing oversight would create risk rather than efficiency. The organizations that get this right start with one or two high-impact workflows, run Cowork against them with real Dynamics 365 data, measure the time saved and the output quality, and then expand.",
        "Want help choosing the first workflows? [Book a free consultation](/contact/) and we will walk through your Dynamics 365 setup with you.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is Copilot Cowork a Dynamics 365 feature?",
      a: "No. Copilot Cowork is an agentic execution layer built into Microsoft 365 Copilot. It does not live inside Dynamics 365. It connects to your Dynamics 365 environment through plugins, pulls the business data a task needs, and then acts on that data across Outlook, Teams, Word, Excel and the rest of Microsoft 365.",
    },
    {
      q: "How does Copilot Cowork connect to Dynamics 365?",
      a: "Your admin enables the relevant plugin in the Microsoft 365 admin center. Dedicated plugins exist for Dynamics 365 Sales and Customer Service, and both are enabled by default for Microsoft 365 Copilot Frontier customers. Authentication runs through Microsoft Entra ID, and Cowork follows the user-level permissions already set in Dynamics 365.",
    },
    {
      q: "What is the difference between Copilot Cowork and Copilot Agents?",
      a: "Agents run autonomously on a trigger or schedule, without someone directing each step. Cowork runs with you: you describe the outcome, it executes the steps, and you approve each action before anything is sent or updated. Use agents for repetitive, rule-based work and Cowork for complex, judgment-driven tasks.",
    },
    {
      q: "What do I need before I can use Copilot Cowork with Dynamics 365?",
      a: "You need an active Microsoft 365 Copilot license, enrollment in the Microsoft 365 Frontier program, and a Dynamics 365 Sales or Customer Service license, depending on the plugin. Clean CRM data, trained users and clear governance rules matter just as much, because Cowork is only as good as the data it works from.",
    },
    {
      q: "What is a Copilot Cowork Skill?",
      a: "A Skill is a reusable set of instructions that captures the output structure, tone, data sources, steps and review checkpoints for a specific workflow. Once saved, you can trigger the whole workflow with one prompt, such as a weekly pipeline review. A Skill does not run on its own, so you still decide when to use it.",
    },
    {
      q: "Can Cowork see Dynamics 365 data I am not allowed to access?",
      a: "No. Cowork does not create new data access. It uses the same user-level permissions already set inside Dynamics 365, so users only reach records they are authorized to see. Microsoft Purview audit logs capture Cowork activity, and admins can restrict plugins by user group or disable them in the Microsoft 365 admin center.",
    },
  ],
};

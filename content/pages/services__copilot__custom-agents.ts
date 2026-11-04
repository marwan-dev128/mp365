import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/copilot/custom-agents/",
  intro:
    "Custom Copilot agents are AI assistants you build in Microsoft Copilot Studio for one defined job, using your own knowledge sources and business systems. MP-365 designs, builds and tests them against Dynamics 365 and Microsoft 365 data, then trains your team to maintain them.",
  atAGlance: {
    bestFor:
      "Operations, sales and service leaders with one repeatable task that depends on company data and currently eats staff time.",
    includes:
      "Use case selection, agent design, knowledge source and connector setup, testing, publishing to Teams or Microsoft Copilot, and team handover.",
    notIncluded:
      "Custom software development, non-Microsoft AI models, general AI strategy, license resale and managed help desk support.",
    howItStarts:
      "A discovery call about the process you want to improve and where its data lives today.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What are custom Copilot agents?",
      paragraphs: [
        "Custom Copilot agents are agents you configure to answer questions and complete tasks for a specific team or process. Microsoft describes an agent as an AI assistant that follows your instructions, draws on the knowledge sources you connect and uses tools to take action.",
        "They are one part of MP-365's [Microsoft Copilot consulting](/services/copilot/). They differ from the ready-made [Dynamics 365 Sales agents](/services/copilot/sales-agents/), which Microsoft ships for sales work. A custom agent covers the process Microsoft did not build for, such as a project status assistant or an internal policy desk.",
      ],
    },
    {
      type: "prose",
      heading: "What is Copilot Studio used for?",
      paragraphs: [
        "Copilot Studio is Microsoft's low-code studio for building and managing agents and workflows. It is where Copilot Studio agents are created, tested and published to channels such as Microsoft Teams, Microsoft Copilot and websites.",
        "It also provides agent flows, which have an authoring experience similar to Power Automate. A flow can run as a standalone automation or serve as a tool the agent calls. Analytics, evaluations and administration features help you watch agents once they are live.",
      ],
    },
    {
      type: "table",
      heading: "What a custom Copilot agent can do for sales or service teams",
      headers: ["Team", "Example job", "Data it uses", "Action it can take"],
      rows: [
        [
          "Sales",
          "Prepare an account briefing before a call",
          "Dynamics 365 accounts, opportunities and notes",
          "Draft a summary for the seller to review",
        ],
        [
          "Customer service",
          "Suggest an answer from approved articles",
          "Knowledge articles and case history in Dynamics 365",
          "Draft a reply or update a case through a flow",
        ],
        [
          "Operations",
          "Answer questions about an internal procedure",
          "Policy documents in SharePoint",
          "Point to the source document and the owner",
        ],
        [
          "Project teams",
          "Report on status across active projects",
          "Project lists and documents in Microsoft 365",
          "Compile a status update on request",
        ],
        [
          "Field and facilities",
          "Log an issue from a chat message",
          "Forms and Dataverse tables",
          "Create a record and notify the owner",
        ],
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 builds a custom Copilot agent",
      steps: [
        {
          name: "Choose one job",
          description:
            "Pick a single, repeatable task with a clear owner and a way to tell whether the agent got it right.",
        },
        {
          name: "Map the data",
          description:
            "List where the answers live, who may see them and how the agent will sign in to each source.",
        },
        {
          name: "Write the instructions",
          description:
            "Define what the agent should do, what it must refuse and how it should cite its sources.",
        },
        {
          name: "Connect knowledge and tools",
          description:
            "Add SharePoint and Dynamics 365 sources, connectors and agent flows for the actions the job requires.",
        },
        {
          name: "Test with real questions",
          description:
            "Run a test set drawn from your own tickets, emails and chats, and fix the gaps before anyone else sees the agent.",
        },
        {
          name: "Publish to a pilot group",
          description:
            "Release the agent in Teams or Microsoft Copilot to a small group and collect their feedback.",
        },
        {
          name: "Hand over and monitor",
          description:
            "Train your owners to update knowledge sources and read the analytics, and document how the agent is built.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Agent, agent flow or Power Automate?",
      paragraphs: [
        "Use an agent when people ask questions in their own words and the next step depends on what they say. Use a flow when the steps are fixed and the trigger is clear. Many solutions need both.",
        "A flow that approves an invoice does not need an agent. An agent that decides which flow to call does. MP-365 also builds standalone automations through [Power Automate workflow automation](/services/power-platform/power-automate/) when no conversation is needed.",
      ],
    },
    {
      type: "list",
      heading: "What you get",
      items: [
        "**Working agent:** configured in Copilot Studio and published to the channel your users already open.",
        "**Connected data:** knowledge sources and connectors set up with the access model agreed in advance.",
        "**Test set:** the questions used to check quality, kept so you can repeat the test after changes.",
        "**Design record:** instructions, data sources, connections and known limits written in plain language.",
        "**Owner training:** how to update knowledge, review analytics and request changes.",
        "**Next-step list:** further agents or actions that the pilot suggests.",
      ],
    },
    {
      type: "prose",
      heading: "Copilot Studio consulting and development considerations",
      paragraphs: [
        "Good Copilot Studio development starts with decisions about access. For each connection, decide whether the agent acts with the signed-in user's own access or with a shared service account. A shared account can reveal more than any individual user should see.",
        "Microsoft also notes that Copilot agents can't read files that have user-defined sensitivity label permissions. Check your labels before you promise an agent will answer from those files. A [data access review](/services/copilot/ai-data-governance-audit/) catches these issues early.",
      ],
    },
    {
      type: "prose",
      heading: "What does a custom Copilot agent cost to build?",
      paragraphs: [
        "The cost depends on the number of data sources, the actions the agent takes and the testing needed. A read-only question-answering agent costs less to build than one that updates Dynamics 365 records. MP-365 gives a scoped answer after a discovery call, and the [pricing page](/pricing/) explains the engagement models.",
        "Microsoft bills agent usage separately, and the model depends on the type of agent. Those charges go to Microsoft and are not part of MP-365's fee.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: integrations that run on service accounts",
      paragraphs: [
        "MP-365 built reliable integrations between Dynamics 365, ERP and marketing systems with logging and alerts, service accounts instead of personal accounts and secure password storage. Agents that call business systems need the same discipline, because a connection tied to one person's login breaks when that person leaves.",
        "Named projects are on the [clients page](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "When a custom agent is not the right fit",
      paragraphs: [
        "A custom agent is the wrong choice when the process changes weekly, when the data is scattered across unmanaged files or when a ready-made agent already covers the task. A readiness check on your data comes first in those cases, and the [Microsoft 365 Copilot readiness assessment](/services/copilot/readiness/) is the usual route. It is also not for projects that need a custom-coded application, which MP-365 does not build.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is Copilot Studio used for?",
      a: "Copilot Studio is a low-code studio for building and managing AI agents and workflows. You write instructions, connect knowledge sources and tools, test the agent and publish it to channels like Teams, Microsoft Copilot and websites. MP-365 uses it to build agents on Dynamics 365 and Microsoft 365 data.",
    },
    {
      q: "How much does it cost to build a custom Copilot agent?",
      a: "Cost depends on the data sources, the actions the agent takes and the amount of testing. A question-answering agent is simpler than one that writes to Dynamics 365. MP-365 scopes each build after a call. Microsoft's usage charges for running the agent are billed separately by Microsoft.",
    },
    {
      q: "What can a custom Copilot agent do for sales or service teams?",
      a: "It can answer questions from approved knowledge, draft account briefings or case replies, look up Dynamics 365 records and trigger flows that create or update records. Sellers and service agents review the output. MP-365 scopes each agent to one job so results can be tested.",
    },
    {
      q: "What is the difference between a Copilot Studio agent and Microsoft 365 Copilot?",
      a: "Microsoft 365 Copilot is the general assistant across Microsoft 365 apps. A Copilot Studio agent is a purpose-built assistant for one task, with its own instructions, knowledge and tools. Agents can be published into Microsoft Copilot, so users reach them where they already work.",
    },
    {
      q: "Can an agent use our Dynamics 365 data?",
      a: "Yes. Copilot Studio connects to Microsoft Dataverse, which holds Dynamics 365 data, and to other systems through prebuilt or custom connectors. MP-365 decides which tables the agent may read or write, and how it signs in, before any data is connected.",
    },
    {
      q: "Do custom agents respect user permissions?",
      a: "It depends on how each connection is set up. An agent can use the signed-in user's access or a shared account. MP-365 chooses per connection and documents the decision, because a shared account can expose more data than any one user should see.",
    },
    {
      q: "How long does it take to build a custom Copilot agent?",
      a: "It depends on the number of knowledge sources, the actions and the testing needed. A single-job agent with clean data goes faster than one that touches several systems. MP-365 sets the schedule after the first call, once the data and access questions are answered.",
    },
    {
      q: "Who maintains the agent after launch?",
      a: "Your named owners do, with MP-365 training them. Owners update knowledge sources, read analytics and ask for changes. MP-365 documents the design so another team could take over, and it can stay involved for later additions or fixes if you want it to.",
    },
    {
      q: "Does MP-365 build agents with non-Microsoft AI?",
      a: "No. MP-365 builds agents with Copilot Studio and connects them to Dynamics 365 and Microsoft 365 data. It does not provide general AI development, custom software or agents on other AI platforms. The work stays low-code.",
    },
    {
      q: "What licenses do we need for Copilot Studio?",
      a: "Licensing depends on the type of agent you build and how it is used, and Microsoft sets those terms in its Copilot Studio licensing documentation. You buy from Microsoft or your license provider. MP-365 does not resell licenses, but it will list what your design requires.",
    },
  ],
  closing:
    "Custom Copilot agents work best when they have one job, clean data and a named owner. If you have a process in mind, MP-365 can tell you whether Copilot Studio fits and what the build would involve.",
  cta: {
    heading: "Talk to MP-365 about a custom agent",
    body: "Describe the task you want an agent to handle and where its data lives. MP-365 will tell you if it is a good fit.",
    text: "Book a discovery call",
  },
};

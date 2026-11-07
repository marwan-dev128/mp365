import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/dynamics-365-crm/integration-services/",
  intro:
    "Dynamics 365 integration services connect your CRM to the other systems your business runs on, including ERP, marketing tools and SharePoint, so data moves automatically and nobody types it twice. MP-365 builds, tests and supports these integrations for mid-size and enterprise teams, and it connects ERP systems without implementing them.",
  atAGlance: {
    bestFor:
      "Operations, sales and IT leaders whose staff re-key orders, customers or invoices between Dynamics 365 and another system.",
    includes:
      "Integration design, field mapping, Power Automate flows, API and Azure-based connections, SharePoint document integration, logging, alerts, service accounts, testing and support.",
    notIncluded:
      "ERP implementation or configuration, Azure hosting management, Microsoft license resale and custom software development.",
    howItStarts:
      "A discovery call to list the systems and the data that must move, then a review of current connections and any manual re-keying.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What Dynamics 365 integration services cover",
      paragraphs: [
        "Dynamics 365 integration services cover the design, build and support of connections between Dynamics 365 and other systems. The most common are ERP systems such as Business Central, marketing and email tools, SharePoint document libraries and reporting platforms.",
        "MP-365 works on the connection, not on the system at the other end. The aim is simple: when a customer, order or invoice changes in one place, the other system learns about it without a person copying it over.",
      ],
    },
    {
      type: "prose",
      heading: "How do you integrate Dynamics 365 with an ERP?",
      paragraphs: [
        "Integrate Dynamics 365 with an ERP by deciding which system owns each type of data, then moving it with the lightest tool that is reliable enough. Customer and product records usually sync on a schedule or on change. Orders and invoices move when an event happens, such as an order being submitted.",
        "The right tool depends on the ERP and the volume. Some connections are built in, some use Power Automate, and some need code against the Dataverse Web API. MP-365 picks per data flow instead of forcing one tool onto everything.",
      ],
    },
    {
      type: "table",
      heading: "Dynamics 365 integration options and when each fits",
      headers: ["Approach", "Best for", "Watch out for"],
      rows: [
        [
          "Built-in Business Central connection through Dataverse",
          "Business Central customers who want products, price lists, opportunities, invoices and sales orders shared with Dynamics 365 Sales",
          "Reconnecting resets default synchronization settings, so changes need to be documented",
        ],
        [
          "Dual-write",
          "Dynamics 365 finance and operations apps that need near-real-time, two-way data with Dataverse",
          "It is tightly coupled and adds concepts such as company and party to Dataverse, so the design needs planning",
        ],
        [
          "Power Automate cloud flows",
          "Event-driven moves, approvals and notifications between the CRM and systems with a connector",
          "Flows tied to a person's account stop when that person leaves",
        ],
        [
          "Dataverse Web API with Azure Logic Apps or Functions",
          "High volume, unusual ERP structures or complex data transformation",
          "Needs developer support and careful handling of Dataverse request limits",
        ],
        [
          "SharePoint document integration",
          "Contracts, quotes and files stored against CRM records",
          "Folder design and permissions must be planned before documents pile up",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Can Dynamics 365 connect to Business Central?",
      paragraphs: [
        "Yes. Microsoft Learn (2026) states that Business Central integrates with Dynamics 365 Sales through Dataverse. The standard mappings cover items and products, price lists, opportunities, posted sales invoices and sales orders. Sales orders can sync in one direction or both, and sellers can see Business Central information while working in Dynamics 365 Sales.",
        "Microsoft Learn also describes dedicated Business Central integration security roles for the integration user account. MP-365 runs the connection under a dedicated account with only those privileges and reviews it against your [security roles](/services/dynamics-365-crm/security-roles-audit/). The result is a connection that does not depend on one person's login.",
      ],
    },
    {
      type: "prose",
      heading: "How Dynamics 365 SharePoint integration works",
      paragraphs: [
        "Dynamics 365 SharePoint integration stores documents in SharePoint but shows them on the CRM record. According to Microsoft Learn, server-based integration lets users sign in once, see SharePoint documents in lists and run SharePoint actions from the command bar. Users outside the CRM can open the same documents if they have SharePoint permissions.",
        "The decisions that matter come first: which tables get document libraries, how folders are named, and who may open what. MP-365 settles those before turning it on for the sales or service teams.",
      ],
    },
    {
      type: "list",
      heading: "How to make sure no records are lost in an integration",
      items: [
        "**Log every transfer:** record what moved, when and the result, so a missing record has a trail.",
        "**Alert on failure:** send a message to a named person when a run fails, instead of waiting for users to notice.",
        "**Retry with care:** Dataverse returns a 429 error with a Retry-After value when a user sends too many requests, and the integration must wait and try again.",
        "**Match on stable keys:** use an ID from the source system, not a name, so retries update a record instead of duplicating it.",
        "**Use a service account:** run the integration under a dedicated account, never under a person's login.",
        "**Store secrets safely:** keep passwords and keys in a secure store, not in a flow or a file.",
        "**Reconcile counts:** compare record totals on both sides on a schedule and report differences.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 delivers Dynamics 365 integration services",
      steps: [
        {
          name: "List the systems and data flows",
          description:
            "Write down every system, what data moves, in which direction and how often it must happen.",
        },
        {
          name: "Decide who owns each record type",
          description:
            "Pick the system of record for customers, products, prices and orders, so conflicts have a rule.",
        },
        {
          name: "Map the fields",
          description:
            "Match each field between systems, including formats, required values and what happens when one is blank.",
        },
        {
          name: "Choose the tool for each flow",
          description:
            "Use a built-in connection, Power Automate or code against the API, based on volume and complexity.",
        },
        {
          name: "Build in a sandbox",
          description:
            "Create the connection in a test environment, with a dedicated integration account and logging from the start.",
        },
        {
          name: "Test with real data",
          description:
            "Run a sample of real records, including awkward ones, and compare totals on both sides.",
        },
        {
          name: "Go live and monitor",
          description:
            "Release in stages, watch the logs and alerts, and fix issues before users see them.",
        },
        {
          name: "Document and hand off",
          description:
            "Leave a map of every flow, its owner and its alert recipient, and stay available for support.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get from integration work",
      items: [
        "**Integration map:** a one-page view of systems, data flows and owners.",
        "**Field mapping document:** agreed matches and rules for each record type.",
        "**Working connections:** built, tested and running under dedicated accounts.",
        "**Logging and alerts:** a way to see what moved and to be told when something fails.",
        "**Reconciliation report:** record counts compared across systems on a schedule.",
        "**Runbook:** short instructions for restarting a failed flow.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: reliable integrations with ERP and marketing systems",
      paragraphs: [
        "A company needed Dynamics 365 to exchange data with its ERP and its marketing system. MP-365 built the integrations with logging and alerts, service accounts instead of personal accounts, and secure password storage.",
        "Failures now produce an alert and a log entry rather than a silent gap in the data. See the [clients page](/clients/) for more MP-365 work.",
      ],
    },
    {
      type: "prose",
      heading: "When Dynamics 365 integration services are not the right fit",
      paragraphs: [
        "Dynamics 365 integration services are not the right fit if your real need is to choose, install or reconfigure an ERP. MP-365 does not do ERP implementation, so that work belongs with an ERP partner. Integration is also unnecessary if two systems share a handful of records a month, because a manual process may cost less than a maintained connection.",
      ],
    },
    {
      type: "prose",
      heading: "Related Dynamics 365 CRM services",
      paragraphs: [
        "Integrations usually serve a CRM team first. See how they support [Dynamics 365 Sales](/services/dynamics-365-crm/sales/) and [Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/). For lighter automation, [Power Automate workflow automation](/services/power-platform/power-automate/) covers approvals and notifications, and [Data Quality Management](/services/data-governance/data-quality-management/) cleans duplicates before they travel between systems. All services sit under [Dynamics 365 CRM consulting](/services/dynamics-365-crm/). For cost, read the [pricing page](/pricing/).",
      ],
    },
  ],
  faqs: [
    {
      q: "How do you integrate Dynamics 365 with an ERP?",
      a: "Decide which system owns each type of data, map the fields, then pick the connection method for each flow: a built-in connection, Power Automate or code against the Dataverse API. Test with real records, then add logging and alerts. MP-365 builds the connection but not the ERP itself.",
    },
    {
      q: "Can Dynamics 365 connect to Business Central?",
      a: "Yes. Business Central integrates with Dynamics 365 Sales through Dataverse, according to Microsoft Learn (2026). Standard mappings cover items and products, price lists, opportunities, invoices and sales orders. MP-365 sets up and supports the connection, and it does not do ERP implementation.",
    },
    {
      q: "How do you make sure no records are lost in an integration?",
      a: "Log every transfer, alert a named person on failure, retry when Dataverse asks you to wait, and match records on stable IDs so retries update rather than duplicate. Run a scheduled count comparison between systems. These steps turn silent data loss into a visible, fixable error.",
    },
    {
      q: "What is the difference between Dynamics 365 integration and dual-write?",
      a: "Dual-write is one specific method. Microsoft Learn describes it as tightly coupled, near-real-time, two-way integration between finance and operations apps and Dataverse. Integration is the broader job and includes Power Automate, APIs and built-in connections. MP-365 chooses the method per data flow.",
    },
    {
      q: "How much do Dynamics 365 integration services cost?",
      a: "Cost depends on the number of systems, data flows, volume and the complexity of the mapping. A single scheduled sync is a small job, while two-way order flow with error handling is larger. The [pricing page](/pricing/) explains how MP-365 prices work. License fees go to Microsoft separately.",
    },
    {
      q: "How long does an integration project take?",
      a: "It depends on how many data flows are involved, how clean the source data is and how quickly your team can answer mapping questions. MP-365 starts with the flow that removes the most re-keying, goes live with it, and adds the next. A discovery call produces a realistic sequence.",
    },
    {
      q: "Is a real-time integration always better than a scheduled one?",
      a: "No. Real-time is worth the extra cost for orders, availability or anything a person waits on. Scheduled sync is simpler and more robust for master data such as products or price lists. Dataverse also limits request volume per user, so bulk loads often work better in batches.",
    },
    {
      q: "What are Dataverse service protection limits?",
      a: "Microsoft Learn (2026) says Dataverse applies default limits per user and per web server, including 6,000 requests within a five-minute sliding window. When a client exceeds a limit, Dataverse returns a 429 error with a Retry-After value. A good integration waits and retries instead of failing.",
    },
    {
      q: "Why should integrations use a service account?",
      a: "A dedicated account keeps the connection running when staff change jobs, and it limits what the integration can do. Microsoft's Business Central documentation provides dedicated integration roles for this purpose. MP-365 builds integrations under service accounts with only the privileges they need and stores their credentials securely.",
    },
    {
      q: "Can Dynamics 365 integrate with SharePoint?",
      a: "Yes. Microsoft Learn describes server-based SharePoint integration that shows documents in the CRM record while storing them in SharePoint. Users sign in once and can run SharePoint actions from the command bar. MP-365 plans libraries, folders and permissions before turning the feature on.",
    },
  ],
  closing:
    "Dynamics 365 integration services pay off when staff stop re-keying data and the numbers match across systems. MP-365 builds each connection with logging, alerts and a clear owner, so problems surface early. For the business view of this work, read about [CRM and systems integration](/solutions/crm-systems-integration/).",
  cta: {
    heading: "Talk to MP-365 about connecting your systems",
    body: "List the systems that should share data with Dynamics 365. MP-365 will tell you which connection to build first.",
    text: "Book a free consultation",
  },
};

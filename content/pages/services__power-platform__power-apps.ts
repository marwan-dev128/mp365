import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/power-platform/power-apps/",
  intro:
    "Power Apps consulting services from MP-365 turn spreadsheets, email chains and paper forms into apps your team uses every day. MP-365 designs and builds canvas and model-driven apps on Dataverse, SharePoint and Dynamics 365 data for approvals, inspections and daily operations.",
  atAGlance: {
    bestFor:
      "Operations, sales and service teams that run a daily process in Excel, email or paper and need one app with clear owners and status.",
    includes:
      "App design, data model in Dataverse or SharePoint, canvas or model-driven build, connections to Dynamics 365 and Microsoft 365, testing, deployment and handover.",
    notIncluded:
      "Custom software development, web design agency work, ERP implementation, Microsoft license resale.",
    howItStarts:
      "A discovery call about one process. MP-365 maps how the work runs today and proposes the smallest app that would help.",
  },
  blocks: [
    {
      type: "list",
      heading: "Problems a custom Power App solves",
      items: [
        "**\"Nobody knows who owns this request.\"** An app gives every request one record, one owner and a visible status.",
        "**\"We keep the master list in Excel and it has five copies.\"** An app on Dataverse or SharePoint keeps one shared copy with change history.",
        "**\"Inspectors fill in paper forms and someone re-types them.\"** A mobile app captures the data, photos and signatures once, at the site.",
        "**\"Approvals get lost in email.\"** An app with a Power Automate flow routes each approval and records the decision.",
        "**\"Our CRM screens do not fit how this team works.\"** A focused app shows only the fields and actions that team needs, on top of Dynamics 365 data.",
      ],
    },
    {
      type: "prose",
      heading: "What our Power Apps consulting services cover",
      paragraphs: [
        "MP-365 builds three kinds of apps most often. Each solves a different daily pain, and each is small enough to ship quickly and improve in use.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Approval and request apps",
      paragraphs: [
        "A request app replaces the email-and-spreadsheet routine for purchases, access, time off or change requests. The app captures the request, a flow routes it to the right approver, and the decision is stored with the record. Managers approve from Teams or a phone.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Inspection and site visit apps",
      paragraphs: [
        "A field app lets crews complete checklists on a phone or tablet, attach photos and capture a signature. Data lands in Dataverse the moment the form is saved, so the office sees it without waiting for paperwork. This suits safety walks, equipment checks and site visits.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Companion apps for Dynamics 365",
      paragraphs: [
        "A companion app gives one team a simplified view of CRM data. A coordinator might see only open orders to confirm, with two buttons and a note field. Because Dynamics 365 stores its data in Dataverse, the app reads the live records directly. See [Dynamics 365 Sales](/services/dynamics-365-crm/sales/) for the CRM side.",
      ],
    },
    {
      type: "table",
      heading: "Canvas apps and model-driven apps compared",
      headers: ["App type", "How it is built", "Best for", "Example"],
      rows: [
        [
          "Canvas app",
          "You design each screen freely in Power Apps Studio, much like a slide deck",
          "Task-focused mobile or tablet apps with a custom layout",
          "Site inspection checklist",
        ],
        [
          "Model-driven app",
          "You choose tables, forms and views in the app designer, and the layout follows from the data model",
          "Data-heavy apps with many related records and role-based access",
          "Case or project tracker with several linked tables",
        ],
        [
          "Dynamics 365 app",
          "Microsoft builds the app on Dataverse and MP-365 configures it",
          "Standard sales or service processes",
          "Sales pipeline and customer cases",
        ],
      ],
    },
    {
      type: "prose",
      heading: "How to choose between canvas and model-driven",
      paragraphs: [
        "Choose a canvas app when the screen design matters most, such as a phone checklist. Choose a model-driven app when the relationships between records matter most. Microsoft's Power Apps documentation describes both types and says apps run in a browser and on phones and tablets.",
        "Many MP-365 projects use both: a model-driven app for the back office and a canvas app for people in the field, sharing the same tables.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 delivers a Power Apps project",
      steps: [
        {
          name: "Watch the process",
          description: "Spend time with the users and note each step, hand-off and workaround in the current routine.",
        },
        {
          name: "Choose the data home",
          description: "Pick Dataverse for relational data and security roles, or SharePoint lists for simple tracking.",
        },
        {
          name: "Sketch the screens",
          description: "Draw the screens with the users and agree what each role sees before building.",
        },
        {
          name: "Build the first version",
          description: "Build the smallest app that handles the core path from request to completion.",
        },
        {
          name: "Add flows and connections",
          description: "Connect Power Automate for routing and notifications, and link to Dynamics 365 or Outlook where needed.",
        },
        {
          name: "Test with real users",
          description: "Have the team run live cases, then fix what slows them down.",
        },
        {
          name: "Deploy and train",
          description: "Move the app to production through a managed solution, document it and train the owners.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get from a Power Apps engagement",
      items: [
        "**A working app:** deployed to your production environment and shared with the right users.",
        "**A data model:** tables and columns documented so others can extend them.",
        "**Role-based access:** security roles or SharePoint permissions that match who should see what.",
        "**Connected flows:** approvals and notifications built in Power Automate.",
        "**Handover notes and training:** a short guide for owners and a walkthrough for users.",
        "**A backlog:** a ranked list of next improvements so the app grows in order.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft products involved in a Power Apps build",
      paragraphs: [
        "A typical build uses Power Apps for the interface, Microsoft Dataverse or SharePoint for the data, and Power Automate for routing. Dynamics 365, Microsoft Teams, Outlook and Excel often supply or receive data.",
        "As of October 2026, Microsoft's documentation says you can describe an app to Microsoft Copilot in Power Apps and have it design a first draft. MP-365 treats that as a starting sketch. The data model, security and testing still need an experienced builder.",
      ],
    },
    {
      type: "prose",
      heading: "Power Apps or custom software: how to decide",
      paragraphs: [
        "Use Power Apps when the app serves your own staff, relies on Microsoft data and needs to change often. Use custom software when you are building a product for sale, need a highly specialized interface or expect very large transaction volumes.",
        "MP-365 builds low-code apps and does not offer custom software development. If your idea belongs in custom code, we will say so at the discovery call instead of forcing it into Power Apps.",
      ],
    },
    {
      type: "prose",
      heading: "What affects the cost of a Power Apps build",
      paragraphs: [
        "The main cost drivers are the number of screens, the number of data sources and how complex the approval rules are. Microsoft license fees are set by Microsoft and are separate from consulting fees. The [pricing page](/pricing/) explains how MP-365 engages, and the first conversation usually produces a small first scope.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: replacing email-based tracking with one system",
      paragraphs: [
        "One MP-365 client ran support through email. MP-365 moved case tracking into one system that shows the owner, status and urgency of every case. That is the shape of work Power Apps suits: one record per item and a clear owner.",
        "For named client results, see the [clients page](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "When a Power App is not the right fit",
      paragraphs: [
        "A Power App is not the right fit if the process is already handled well in Dynamics 365 or SharePoint without extra screens. It is also wrong for public-facing sites, where [Power Pages](/services/power-platform/power-pages/) is the tool, and for pure reporting, where [Power BI](/services/power-platform/power-bi/) fits better.",
      ],
    },
    {
      type: "prose",
      heading: "Related Power Platform services",
      paragraphs: [
        "Apps rarely work alone. [Power Automate workflow automation](/services/power-platform/power-automate/) handles the routing behind an app, and the wider [Power Platform](/services/power-platform/) service page shows how all four tools fit together.",
      ],
    },
  ],
  faqs: [
    {
      q: "What can a custom Power App do for our business?",
      a: "A custom Power App replaces a manual routine with a screen your team uses. Common examples are approval requests, site inspections, asset checks and simple trackers. It stores data once, shows who owns each item and works on desktop, phone and tablet. It can also read and update Dynamics 365 records.",
    },
    {
      q: "How long does it take to build a Power App?",
      a: "It depends on the number of screens, data sources and approval rules. MP-365 builds a small first version for one team, puts it in front of real users and then expands. Simple trackers come together faster than apps with several connected systems. The discovery call gives a realistic scope.",
    },
    {
      q: "Should we use Power Apps or custom software?",
      a: "Use Power Apps for internal tools that rely on Microsoft data and change often. Use custom software for a product you sell or a system with very high transaction volume. MP-365 works in low-code and does not do custom software development, so it tells you early when a project belongs elsewhere.",
    },
    {
      q: "What is the difference between a canvas app and a model-driven app?",
      a: "A canvas app lets you design each screen freely, which suits phone and tablet tasks. A model-driven app builds its screens from your Dataverse tables, which suits data-heavy work with many related records. Many projects use both, with a model-driven app for the office and a canvas app for the field.",
    },
    {
      q: "Do Power Apps work offline?",
      a: "Canvas apps can be built to work with limited connectivity, and Microsoft documents offline options for mobile use. Offline design adds effort because the app must store data locally and sync later. MP-365 confirms the need during discovery, since a site crew with poor signal needs this and an office team does not.",
    },
    {
      q: "Where is the data stored?",
      a: "Data lives in Microsoft Dataverse, SharePoint lists or an existing system such as Dynamics 365 or SQL Server. MP-365 picks the home based on how many related records you have and who needs which access. Dataverse offers security roles and relationships, and SharePoint suits simple tracking.",
    },
    {
      q: "Can a Power App connect to Dynamics 365?",
      a: "Yes. Dynamics 365 apps such as Sales and Customer Service store data in Dataverse, which Power Apps reads directly, so there is no separate integration to build. A Power App can show a simplified view of CRM records or add a step that the standard screens lack, such as a field checklist.",
    },
    {
      q: "Who can use the app, and what licenses are needed?",
      a: "Anyone you share the app with can use it, provided they hold a suitable Microsoft license. Requirements depend on the connectors and Dataverse features the app uses, and Microsoft sets the prices. MP-365 checks the license needs during design so there are no surprises at rollout.",
    },
    {
      q: "Can you fix or take over an app someone else built?",
      a: "Yes. MP-365 reviews apps built by internal makers or other vendors, fixes slow screens and broken connections, and tidies the data model. Sometimes a rebuild of one screen is enough. The first step is a short review of the app, its owner and where it breaks.",
    },
    {
      q: "Who maintains the app after go-live?",
      a: "You decide. A named owner in your team can handle small changes after training, and MP-365 can support the app on an ad hoc or ongoing basis for bigger fixes and new features. Either way, the app is documented and deployed through a managed solution so changes stay controlled.",
    },
  ],
  closing:
    "Good Power Apps consulting services start with one painful process and a small first app that people want to use. MP-365 can map your process, choose the right data home and build the first version on your existing Microsoft data.",
  cta: {
    heading: "Talk to MP-365 about your first Power App",
    body: "Describe the process that costs your team the most time. We will propose the smallest app that would help.",
    text: "Book a discovery call",
  },
};

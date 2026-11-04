import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/dynamics-365-crm/customer-insights/",
  intro:
    "Microsoft Dynamics 365 Marketing is now called Dynamics 365 Customer Insights - Journeys, Microsoft's app for building customer segments and running email, text message and push journeys. MP-365 sets it up for mid-size and enterprise teams and connects it to Dynamics 365 Sales, so marketing and sales work from one customer record.",
  atAGlance: {
    bestFor:
      "Marketing and sales leaders who run campaigns but cannot see which contacts engaged, or which leads the campaign created.",
    includes:
      "Customer Insights - Journeys setup, segments, forms, email and text templates, trigger-based journeys, lead handoff to Sales, reporting and user training.",
    notIncluded:
      "Creative or copywriting for campaigns, ERP implementation, Microsoft license resale and managed marketing operations.",
    howItStarts:
      "A discovery call about your current campaigns and tools, then a review of your contact data and what you already use in Dynamics 365.",
  },
  blocks: [
    {
      type: "prose",
      heading: "Is Microsoft Dynamics 365 Marketing the same as Customer Insights - Journeys?",
      paragraphs: [
        "Yes. Microsoft renamed Dynamics 365 Marketing as Customer Insights - Journeys in 2023, and people still search for the old name. The product now sits in the Dynamics 365 Customer Insights family, next to Customer Insights - Data, which unifies customer data from many sources.",
        "One change matters if you used the older product. According to Microsoft Learn (2026), the outbound marketing module was removed in May 2026, and real-time journeys is the version that remains. Emails, forms, journeys and segments built in outbound marketing cannot be used in real-time journeys, so they need to be rebuilt.",
      ],
    },
    {
      type: "list",
      heading: "What Customer Insights - Journeys can do",
      items: [
        "**Segments:** group contacts by attributes and behavior, and refresh the group as data changes.",
        "**Trigger-based journeys:** start a journey when a contact does something, such as submitting a form.",
        "**Segment-based journeys:** send a planned series of messages to a defined audience.",
        "**Channels:** email, text message and push notification, used alone or in the same journey.",
        "**Forms and events:** capture sign-ups on your website and manage event registrations.",
        "**Customer Insights - Data link:** use segments and profiles from Customer Insights - Data in journeys.",
      ],
    },
    {
      type: "table",
      heading: "Do you need Customer Insights if you already use Dynamics 365 Sales?",
      headers: ["Question", "Dynamics 365 Sales alone", "Sales plus Customer Insights - Journeys"],
      rows: [
        [
          "Who is it for?",
          "Sellers and sales managers",
          "Marketers who plan and send customer communication",
        ],
        [
          "How are campaigns run?",
          "Campaigns and marketing lists inside the sales app",
          "Segments and multi-step journeys across email, text and push",
        ],
        [
          "What triggers a message?",
          "A person decides to send it",
          "A contact action or a schedule",
        ],
        [
          "What do sales see?",
          "Records sellers enter or import",
          "Contact engagement shown on the same customer record",
        ],
        [
          "Best for",
          "Occasional campaigns to small lists",
          "Regular, targeted communication to larger audiences",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Customer Insights - Journeys and Sales share one customer record",
      paragraphs: [
        "The main value of Customer Insights - Journeys is not email. Both apps run on Microsoft Dataverse, so a contact who clicked a link or filled in a form is the same contact a seller sees in [Dynamics 365 Sales](/services/dynamics-365-crm/sales/).",
        "That shared record removes the usual handoff problem, where marketing exports a list and sales never learns what happened to it. The rules for when a contact becomes a lead belong in your [lead management process](/services/dynamics-365-crm/lead-management/).",
      ],
    },
    {
      type: "list",
      heading: "Marketing problems this work solves",
      items: [
        "**Lists are exported by hand:** someone downloads contacts to a spreadsheet and uploads them to another email tool.",
        "**Marketing cannot see results in sales:** campaigns get credit for clicks, not for pipeline.",
        "**Messages ignore behavior:** everyone on the list gets the same email regardless of what they did.",
        "**Consent is scattered:** opt-outs live in one tool, while another keeps sending.",
        "**An older setup is going stale:** journeys and emails built in outbound marketing no longer run.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 delivers a Customer Insights - Journeys setup",
      steps: [
        {
          name: "Review current campaigns and tools",
          description:
            "List the email tools, forms, event tools and spreadsheets you use, and which ones you want to keep.",
        },
        {
          name: "Audit the contact data",
          description:
            "Check duplicates, missing emails, consent fields and how contacts and leads are related.",
        },
        {
          name: "Set up the sending foundation",
          description:
            "Configure the sending domain and its DNS records, consent and subscription settings, and the roles who can publish.",
        },
        {
          name: "Build segments",
          description:
            "Create the audiences you use most, such as new leads, current customers and event attendees.",
        },
        {
          name: "Build one journey end to end",
          description:
            "Create a form, a trigger, the messages and the handoff to a seller, and test it with real addresses.",
        },
        {
          name: "Connect results to Sales",
          description:
            "Show engagement on contact and lead records and report on pipeline, not only on opens.",
        },
        {
          name: "Rebuild older assets",
          description:
            "Recreate useful outbound marketing emails, forms and journeys in real-time journeys.",
        },
        {
          name: "Train and hand off",
          description:
            "Train marketers on segments and journeys, and leave short guides for the routine tasks.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get from the setup",
      items: [
        "**A working sending setup:** domain, consent and subscription settings ready for real campaigns.",
        "**Core segments:** reusable audiences built from your own data.",
        "**One tested journey:** a form-to-seller flow your team can copy.",
        "**Sales connection:** engagement visible on contacts and leads in Dynamics 365.",
        "**Reporting:** a view of campaign results tied to leads and opportunities, with [Power BI](/services/power-platform/power-bi/) for deeper reports.",
        "**Documentation and training:** short guides for the people who run campaigns.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: integrations that keep marketing data reliable",
      paragraphs: [
        "MP-365 has built reliable integrations between ERP and marketing systems. They use logging and alerts, service accounts instead of personal accounts, and secure password storage.",
        "The same practices apply when Journeys must exchange data with an outside email or event tool. See the [clients page](/clients/) for other MP-365 work.",
      ],
    },
    {
      type: "prose",
      heading: "When Customer Insights - Journeys is not the right fit",
      paragraphs: [
        "Customer Insights - Journeys is not the right fit if you send a monthly newsletter to a small list, or if nobody on your team will own segments and journeys after launch. A simple email tool costs less and is easier to run. MP-365 does not write campaign content or run campaigns for you. It builds the system your marketers operate.",
      ],
    },
    {
      type: "prose",
      heading: "Related Dynamics 365 CRM services",
      paragraphs: [
        "Customer Insights works best alongside [Dynamics 365 Sales](/services/dynamics-365-crm/sales/) and a clear lead process. The full range sits under [Dynamics 365 CRM consulting](/services/dynamics-365-crm/). For cost, see the [pricing page](/pricing/).",
      ],
    },
  ],
  faqs: [
    {
      q: "Is Dynamics 365 Marketing the same as Customer Insights - Journeys?",
      a: "Yes. Microsoft renamed Dynamics 365 Marketing as Customer Insights - Journeys in 2023. It is the same product family, now part of Dynamics 365 Customer Insights. The outbound marketing module was removed in May 2026, according to Microsoft Learn, and real-time journeys is the version that remains.",
    },
    {
      q: "What can Customer Insights - Journeys do?",
      a: "It builds customer segments and sends email, text message and push notification journeys, either on a schedule or when a contact acts. It also handles forms, events and consent. Because it shares Dataverse with Sales, engagement appears on the same contact record a seller opens.",
    },
    {
      q: "Do we need Customer Insights if we already use Dynamics 365 Sales?",
      a: "Not necessarily. Sales can run basic campaigns and marketing lists. Add Customer Insights - Journeys when you need targeted segments, multi-step journeys and behavior-based triggers for larger audiences. If you only send occasional messages, the sales app may be enough.",
    },
    {
      q: "What is the difference between Customer Insights - Data and Journeys?",
      a: "Customer Insights - Data unifies customer data from many sources into profiles and segments. Customer Insights - Journeys uses those segments, or ones built in the app, to send messages and run journeys. You can use Journeys alone. MP-365 only adds Data when your information sits in several systems.",
    },
    {
      q: "What happened to outbound marketing?",
      a: "Microsoft Learn (2026) says outbound marketing was removed from all environments in May 2026. Tables and data remain, but emails, forms, journeys and segments built there cannot be used in real-time journeys. MP-365 rebuilds the assets that still matter instead of copying everything.",
    },
    {
      q: "Can we reuse our older marketing emails and journeys?",
      a: "Partly. Content you wrote, such as copy and images, can be reused, but the emails, forms and journeys themselves must be recreated in real-time journeys. MP-365 starts with the few assets that produce results and retires the rest, which also cleans up old campaigns.",
    },
    {
      q: "How does a lead move from marketing to sales?",
      a: "A journey or form creates or updates a contact or lead in Dataverse, and a rule assigns it to a seller when it meets your criteria. The seller sees the engagement history on the record. See [lead management and attribution](/services/dynamics-365-crm/lead-management/) for how MP-365 defines those criteria.",
    },
    {
      q: "Which channels does Customer Insights - Journeys support?",
      a: "Microsoft Learn (2026) lists email, text message and push notification as the channels for real-time journeys. You can use them separately or in the same journey. Forms and events handle sign-ups and registrations. MP-365 configures the channels you actually plan to use, not all of them.",
    },
    {
      q: "How does consent and opt-out management work?",
      a: "Customer Insights - Journeys records consent and subscription choices on the contact, and journeys respect them. MP-365 sets up the fields, subscription settings and forms and checks that opt-outs stop messages. Your legal team still decides what consent your business needs. MP-365 does not give legal advice.",
    },
    {
      q: "Is Customer Insights - Journeys a good fit for a mid-size company?",
      a: "Yes, when you have a marketing owner, a contact list large enough to segment and a sales team that follows up leads in Dynamics 365. It is less suitable if you send a few messages a year. MP-365 keeps the first setup small so the team can run it.",
    },
  ],
  closing:
    "If you were running Microsoft Dynamics 365 Marketing before the rename, the job now sits in Customer Insights - Journeys, and some assets need rebuilding. MP-365 handles the setup, the rebuild and the connection to Sales.",
  cta: {
    heading: "Talk to MP-365 about Customer Insights - Journeys",
    body: "Share what you run today. MP-365 will tell you what to keep, what to rebuild and what to leave out.",
    text: "Book a discovery call",
  },
};

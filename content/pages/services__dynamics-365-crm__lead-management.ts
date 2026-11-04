import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/dynamics-365-crm/lead-management/",
  intro:
    "Dynamics 365 lead scoring ranks open leads so sellers call the likeliest buyers first, and it is one part of a four-step lead process: capture, score, route and attribute. MP-365 builds that process in Dynamics 365 for mid-size and enterprise teams that lose leads between marketing, sales and the spreadsheet in between.",
  atAGlance: {
    bestFor:
      "Sales and marketing leaders whose leads arrive from forms, events, partners and email, and whose reports cannot say which source produced revenue.",
    includes:
      "Lead capture design, qualification flow, rule-based or predictive scoring, routing rules, duplicate handling, source and campaign tracking, dashboards and training.",
    notIncluded:
      "Lead generation or advertising, campaign copywriting, ERP implementation and Microsoft license resale.",
    howItStarts:
      "A discovery call to trace where leads come from and where they stall, then a review of your lead data in the CRM.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What is CRM lead management?",
      paragraphs: [
        "CRM lead management is the process of capturing every inquiry, deciding which ones deserve attention, assigning each to an owner and tracking it until it becomes a deal or is closed. Good sales lead management makes sure nothing waits in an inbox and every lead has a recorded source.",
        "In Dynamics 365, a lead is a record for a person or company you have not yet qualified. When a seller qualifies it, the system can create an account, a contact and an opportunity, and the opportunity keeps a link to the originating lead.",
      ],
    },
    {
      type: "prose",
      heading: "Capture: get every lead into one place",
      level: 3,
      paragraphs: [
        "Lead capture means every channel writes to the same lead table. Typical channels are website forms, event lists, partner referrals, LinkedIn Lead Gen Forms and email requests. Microsoft provides a Dynamics 365 connector that syncs leads from LinkedIn Lead Gen Forms.",
        "Capture quality sets everything after it. Required fields, a clean source value and duplicate detection stop bad records at the door.",
      ],
    },
    {
      type: "prose",
      heading: "Dynamics 365 lead scoring: rule-based and predictive",
      level: 3,
      paragraphs: [
        "Lead scoring assigns each lead a number that estimates how likely it is to become a customer. In Dynamics 365 you can use predictive scoring, which learns from past outcomes, or a rule-based score you define yourself.",
        "According to Microsoft Learn (2026), predictive lead scoring needs at least 40 qualified and 40 disqualified leads in the training period, and Sales Insights features must be enabled. New leads are scored within about five minutes. Updated leads are rescored every 24 hours.",
      ],
    },
    {
      type: "prose",
      heading: "Route: give each lead an owner fast",
      level: 3,
      paragraphs: [
        "Routing assigns a new lead to a person or a queue by rules such as region, product, company size or score. The aim is simple: no lead sits unowned. Rules should be few and explainable, because a rep who does not understand why a lead arrived will ignore it.",
        "MP-365 also adds a visible follow-up deadline, so an untouched lead surfaces on a manager's view instead of going quiet.",
      ],
    },
    {
      type: "prose",
      heading: "Attribute: how to track lead sources in a CRM",
      level: 3,
      paragraphs: [
        "Lead attribution links each lead, and the revenue that follows, to where it came from. To track lead sources in a CRM, store the source and campaign on the lead at capture, carry both to the opportunity when the lead is qualified, and report on closed revenue by source.",
        "Simple first-touch attribution credits the first source. Last-touch credits the final one. Richer models need extra fields and reports, and MP-365 builds them only if your team will act on the answer.",
      ],
    },
    {
      type: "table",
      heading: "Rule-based or predictive lead scoring",
      headers: ["Factor", "Rule-based score", "Predictive score"],
      rows: [
        [
          "How the score is set",
          "Points you assign, such as job title, company size and form activity",
          "A model trained on your past qualified and disqualified leads",
        ],
        [
          "Data needed",
          "A clear idea of your ideal buyer",
          "At least 40 qualified and 40 disqualified leads in the training period",
        ],
        [
          "Explainability",
          "Easy to explain, because every point has a reason",
          "Shows top influencing factors, but the model decides the weights",
        ],
        [
          "Licensing",
          "Built with columns and automation you already have",
          "Needs Sales Insights features; Sales Enterprise includes 1,500 scored records a month, and Sales Premium covers more",
        ],
        [
          "Best for",
          "New programs, small history, or teams that want full control",
          "Teams with enough closed leads and steady lead volume",
        ],
      ],
    },
    {
      type: "list",
      heading: "Where lead management usually breaks",
      items: [
        "**Sources are typed by hand:** reps type different names for one source, so reports split it.",
        "**Scores nobody trusts:** a number appears on the form, but no one knows what it means.",
        "**Duplicates:** the same person enters as three leads, and sellers contact them three times.",
        "**No handoff rule:** marketing calls a lead ready, sales calls it junk, and neither measures the difference.",
        "**Qualification stops reports:** leads are closed without a reason, so you cannot see why deals fail.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 delivers Dynamics 365 lead management",
      steps: [
        {
          name: "Trace the lead journey",
          description:
            "Follow real leads from first contact to closed, and note where each one waited or disappeared.",
        },
        {
          name: "Define qualified",
          description:
            "Write the criteria sales and marketing both accept, with a reason list for disqualified leads.",
        },
        {
          name: "Standardize sources and campaigns",
          description:
            "Replace hand-typed sources with controlled choices and map each capture channel to them.",
        },
        {
          name: "Set up capture and duplicate rules",
          description:
            "Connect forms and imports to the lead table and add rules that flag likely duplicates.",
        },
        {
          name: "Build the scoring model",
          description:
            "Start with a rule-based score, or train a predictive model if your history qualifies.",
        },
        {
          name: "Configure routing and follow-up",
          description:
            "Assign owners by clear rules and add follow-up deadlines that show up in manager views.",
        },
        {
          name: "Build source and funnel dashboards",
          description:
            "Report lead volume, conversion and revenue by source in Power BI or in-app dashboards.",
        },
        {
          name: "Train and tune",
          description:
            "Train the teams, then review score accuracy and rejection reasons after real use.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get from lead management work",
      items: [
        "**One lead process:** documented stages from capture to qualified or closed.",
        "**A scoring model:** rule-based or predictive, with a short note on how to read it.",
        "**Routing rules:** assignment logic your managers can explain.",
        "**Clean source data:** controlled values carried from lead to opportunity.",
        "**Dashboards:** funnel and source views built with [Power BI](/services/power-platform/power-bi/).",
        "**Training:** short guides for sellers, marketers and administrators.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: one lead process and dashboards for marketing and sales",
      paragraphs: [
        "A company tracked leads in different places, and building lead reports took marketing and sales leaders several business days each month. MP-365 set up one lead process in Dynamics 365 with dashboards for marketing and sales leaders.",
        "Both teams now work from the same lead data. The [clients page](/clients/) shows more MP-365 work.",
      ],
    },
    {
      type: "prose",
      heading: "When lead management work is not the right fit",
      paragraphs: [
        "Lead management work is not the right fit if you get a few leads a month, because a simple list will do. It also will not create demand. MP-365 does not run advertising or lead generation. It makes sure the leads you earn are captured, owned and measured.",
      ],
    },
    {
      type: "prose",
      heading: "Related Dynamics 365 CRM services",
      paragraphs: [
        "Lead management sits between marketing and selling. See [Customer Insights - Journeys](/services/dynamics-365-crm/customer-insights/) for campaigns that create leads and [Dynamics 365 Sales](/services/dynamics-365-crm/sales/) for the pipeline that follows. All services are listed under [Dynamics 365 CRM consulting](/services/dynamics-365-crm/). For cost, read the [pricing page](/pricing/).",
      ],
    },
  ],
  faqs: [
    {
      q: "How does lead scoring work in Dynamics 365?",
      a: "Dynamics 365 lead scoring gives each open lead a number that estimates its chance of becoming an opportunity. Predictive scoring trains a model on past qualified and disqualified leads. A rule-based score uses points you define. Sellers see the score in views and on the lead form.",
    },
    {
      q: "How do you track lead sources in a CRM?",
      a: "Record the source and campaign on each lead at capture, using controlled choices rather than typed text. Carry both values to the opportunity when the lead is qualified, then report closed revenue by source. This is what lets you compare channels by revenue instead of lead count.",
    },
    {
      q: "What is lead attribution?",
      a: "Lead attribution links a lead, and the revenue it produces, to the source that brought it in. First-touch attribution credits the first source, last-touch the final one. MP-365 usually starts with a simple model, because a clean source field beats a complicated model with bad data.",
    },
    {
      q: "How many leads do you need for predictive lead scoring?",
      a: "Microsoft Learn (2026) says you need at least 40 qualified and 40 disqualified leads created and closed within the training period you choose, and Sales Insights features must be enabled. If you have fewer, MP-365 sets up a rule-based score first and revisits predictive scoring later.",
    },
    {
      q: "Is lead scoring included in Dynamics 365 Sales Enterprise?",
      a: "Partly. Microsoft Learn (2026) says Sales Enterprise can use predictive lead scoring with 1,500 scored records per month, and Sales Premium gives more capacity. Check your license before planning. Rule-based scoring uses standard columns and automation, so it does not depend on the premium features.",
    },
    {
      q: "How often are Dynamics 365 lead scores updated?",
      a: "According to Microsoft Learn (2026), new leads are scored in near real time, with the score showing within about five minutes of saving. Updated leads are rescored every 24 hours. Models can retrain automatically so they learn from recent outcomes without manual work.",
    },
    {
      q: "What happens when a lead is qualified in Dynamics 365?",
      a: "Qualifying a lead can create an account, a contact and an opportunity, automatically or by the seller's choice. Notes from the lead appear on the opportunity, and mapped fields carry over. If duplicate detection finds a match, the seller resolves it before qualification completes.",
    },
    {
      q: "How should leads be routed to sellers?",
      a: "Route by a few clear rules, such as region, product line, company size or score, and send leftovers to a shared queue with a visible deadline. Avoid long rule chains. Sellers follow up on leads they understand, and managers can fix a simple rule quickly.",
    },
    {
      q: "Can Dynamics 365 stop duplicate leads?",
      a: "Yes. Duplicate detection rules flag matching records, and Dynamics 365 Sales can also use fuzzy matching on lead and company names. When a duplicate exists, qualification pauses until the seller merges or resolves it. MP-365 tunes the rules so they catch real duplicates without blocking good leads.",
    },
    {
      q: "Can we import LinkedIn leads into Dynamics 365?",
      a: "Yes. Microsoft provides the Dynamics 365 Connector for LinkedIn Lead Gen Forms, which syncs leads from LinkedIn forms into Dynamics 365 Sales. MP-365 maps the form fields and source value so those leads follow the same scoring and routing as every other channel.",
    },
  ],
  closing:
    "Dynamics 365 lead scoring helps only when the lead process around it is clear: every lead captured once, scored, routed to an owner and tied to a source. MP-365 builds that process, then tunes it with your team's results.",
  cta: {
    heading: "Talk to MP-365 about your lead process",
    body: "Bring a sample of recent leads. MP-365 will show you where they stall and what to fix first.",
    text: "Book a discovery call",
  },
};

import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/contact/",
  intro:
    "Contact MP-365 to talk about a Dynamics 365, SharePoint, Power Platform, Copilot or Microsoft 365 project. Tell the team what you are working on, and send your message with the form or the email address on this page.",
  blocks: [
    {
      type: "steps",
      heading: "What happens after you contact MP-365",
      steps: [
        { name: "MP-365 reads your message", description: "A specialist reviews the problem, the systems involved and what you want to achieve." },
        { name: "You get a reply with next steps", description: "MP-365 answers your questions or suggests a discovery call to talk through the details." },
        { name: "Scoping and a written estimate", description: "If the work looks like a fit, MP-365 scopes it with you and sends a written estimate, so you decide with the facts." },
      ],
    },
    {
      type: "list",
      heading: "What to include in your message",
      items: [
        "**The problem.** Describe what is slow, broken or missing, in your own words.",
        "**The systems.** Name the Microsoft products and other systems involved, such as Dynamics 365, SharePoint or an ERP.",
        "**The users.** Say roughly how many people use the system and who they are.",
        "**The deadline.** Mention any date that drives the work, such as a contract end or a rollout date.",
        "**Your estimator result.** If you used the estimator on the [pricing page](/pricing/), include the summary it produced.",
      ],
    },
  ],
  faqs: [
    {
      q: "How do I contact MP-365?",
      a: "Use the contact form on this page or send an email to the address shown here. Include the problem, the systems involved and any deadline. MP-365 reads every message and replies with questions or a suggested call.",
    },
    {
      q: "What happens after I request a consultation?",
      a: "A specialist reads your message and replies with next steps, usually a discovery call. If the work looks like a fit, MP-365 scopes it with you and sends a written estimate. You decide whether to proceed once you have those details.",
    },
    {
      q: "Does a discovery call cost anything?",
      a: "MP-365 explains the terms for a first call when you book it, before any paid work begins. The call itself is for understanding your problem and judging whether MP-365 is the right fit. Ask about terms in your first message if it matters.",
    },
    {
      q: "What should I know before I write?",
      a: "You do not need a formal brief. A short description of the problem, the Microsoft products you use and your deadline is enough. The estimator on the [pricing page](/pricing/) can also help you size the project first.",
    },
    {
      q: "Can I ask about a single small issue?",
      a: "Yes. The Ad hoc engagement model has no commitment, no minimum and no retainer, so you pay only when you engage MP-365. Describe the issue in your message, and the team will tell you whether it can help. See the [services overview](/services/) for the range of work.",
    },
    {
      q: "Where is MP-365 based?",
      a: "MP-365 is based in Vernon, Connecticut, and works with clients across the United States. Most of the work runs remotely, so your location does not limit the project. The office address and phone number are on this page.",
    },
  ],
  closing:
    "To contact MP-365, send a short message about the problem you want solved. The team reads it, replies with next steps and, if it is a fit, scopes the work with you.",
  cta: {
    heading: "Ready to talk to MP-365?",
    body: "Tell the team about your project and what you want to change.",
    text: "Book a free consultation",
  },
};

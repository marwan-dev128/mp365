import type { BlogPost } from "../blog";

export const post: BlogPost = {
  slug: "a-clients-fix-duplicate-cases-in-dynamics-365-customer-service",
  title: "Duplicate Cases in Dynamics 365 Customer Service: Fix",
  metaDescription:
    "Stop duplicate cases in Dynamics 365 Customer Service with record identification rules, one email intake and safe case merging. Book a free consultation.",
  cluster: "Dynamics 365",
  authorSlug: "mp365-team",
  imageUrl: "/images/blog/a-clients-fix-duplicate-cases-in-dynamics-365-customer-service.webp",
  datePublished: "2026-10-18",
  dateModified: "2026-11-07",
  excerpt:
    "Duplicate cases in Dynamics 365 Customer Service happen because each channel creates its own case before anything checks whether the customer already has one open. The fix is an identity layer: recognize the customer on every channel, stop new cases when one is open, and merge the few that slip through.",
  body: [
    {
      type: "prose",
      paragraphs: [
        "Duplicate cases in Dynamics 365 Customer Service happen because email, phone and web form requests each open a separate case, and no rule ties them to one customer record. This guide walks through each layer of the fix in the order it should be built.",
        "The fix is to set up Dynamics 365 record identification rules in Omnichannel, funnel email through one intake rule, and use case merging for the remainder. The result is a single customer timeline in Dynamics 365, one case per issue and one consistent answer for the customer. One reality check: fully automatic merging is not a built-in switch. It takes custom automation with guardrails.",
      ],
    },
    {
      type: "prose",
      heading: "Why duplicate cases start before an agent opens a ticket",
      paragraphs: [
        "Picture a customer whose online ordering portal stops working on a Monday morning. They email support, submit the web form, and then phone the support line because nobody has replied yet. Three channels, one problem.",
        "Each channel is its own front door. The email lands in a queue, the form creates a record through its own path, and the call opens a conversation for whichever representative picks up. None of them asks whether this customer already has an open case.",
        "That missing question is the root cause. Without contact matching and multi-channel case deduplication, Dynamics 365 treats every touchpoint as a new problem. Duplicate cases are rarely an agent mistake. They are what a system produces when its channels do not know about each other.",
        "You are in the right place if you recognize these symptoms:",
      ],
    },
    {
      type: "list",
      items: [
        "The same customer has two or three open cases with near-identical descriptions.",
        "Different representatives give the customer conflicting answers about one issue.",
        "Representatives discover the overlap only when the customer says \"I already contacted you.\"",
        "Phone conversations open with no customer attached, so the representative searches manually.",
        "Case volume and handling-time reports look inflated while resolution looks slower than it really is.",
      ],
    },
    {
      type: "prose",
      heading: "The fix is an identity layer, not a merge button",
      paragraphs: [
        "Many teams respond to duplicate cases by training agents to merge cases by hand. It helps, but it cleans up after the damage instead of preventing it.",
        "The durable fix works in order. First, Dynamics 365 Omnichannel customer identification recognizes who is contacting you. Second, intake rules stop a new case from being created when one is already open. Third, you merge duplicate cases only for the few that get through.",
        "Done well, this gives agents a single customer timeline, where the email, the form and the call sit on one record. One honest note before the steps: out of the box, merging is an agent action, so automatic merging needs a small piece of custom logic, covered in the last step below.",
      ],
    },
    {
      type: "steps",
      heading: "Step by step: teach Dynamics 365 to recognize the customer",
      steps: [
        {
          name: "Clean the data your matching depends on",
          description:
            "Standardize phone numbers (E.164 format for voice) and email addresses on contacts and accounts, and run duplicate detection on both. Matching only considers active records. If a search returns more than one contact, account or case, nothing is linked to the conversation. Our [Data Quality Management](/services/data-governance/data-quality-management/) service covers this clean-up.",
        },
        {
          name: "Configure Dynamics 365 record identification rules",
          description:
            "Open your Omnichannel workstream and review the rule that matches conversations to customers. This is where customer identification gets its accuracy, because the rule decides which fields count as a match. Default matching uses name, email and phone number. If customers identify themselves another way, such as an account number entered through a phone menu, extend the rule to match on that field. Add a pre-conversation survey on chat so those details are captured before a representative accepts the conversation. The way [record identification rules](https://learn.microsoft.com/en-us/dynamics365/customer-service/record-identification-rule) handle multiple matches is worth reading before you design yours. Omnichannel is also not part of the Professional edition, so confirm your licensing first. Our [Dynamics 365 Customer Service guide](/blog/what-is-microsoft-dynamics-365-customer-service/) breaks down the editions.",
        },
        {
          name: "Route all email through one automatic record creation and update rule",
          description:
            "When several mailboxes feed separate rules, the same email can be processed twice and create duplicate cases. Forward your support mailboxes into a single dedicated queue, using mail-flow rules or a simple flow, and point one rule at that queue. Then review the rule's conditions so a follow-up from a customer with an open case lands on that case instead of starting another. This is the core of multi-channel case deduplication on the email side.",
        },
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "Most support teams do not start from one clean setup. They have a legacy phone system, two shared mailboxes and a web form somebody built years ago. Our [Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/) team can map where duplicate cases are being created in your environment today, and which of these layers you actually need.",
      ],
    },
    {
      type: "steps",
      heading: "Step by step, continued: catch what still slips through",
      steps: [
        {
          name: "Bring the web form into the same path",
          description:
            "A form that creates cases through its own integration is the quiet third front door. Have it submit through the same intake rule, or look up the contact by email address before creating anything. If a contact with an open case is found, attach the submission to that case.",
        },
        {
          name: "Give representatives similar case suggestions",
          description:
            "Set up advanced similarity rules under Case Settings in the Copilot Service admin center, so representatives see possible matches while they work a case. This turns an invisible duplicate into a visible prompt, and it is the first place AI-assisted matching pays off. It also gives any [Copilot agent in Dynamics 365](/blog/copilot-agents-dynamics-365-business-automation/) a complete history to work from, because every request sits on one single customer timeline.",
        },
        {
          name: "Merge the duplicates, then automate the safe ones",
          description:
            "To merge duplicate cases by hand, select at least two active cases and choose Merge Cases in the command bar. Pick the case the others merge into. You can [merge up to 10 cases](https://learn.microsoft.com/en-us/dynamics365/customer-service/use/customer-service-hub-user-guide-merge-cases) in one action. Activities, notes and attachments move to the primary case, and the merged cases appear on its Case Relationships tab. For automation, build a [Power Automate](/services/power-platform/power-automate/) flow or plug-in that fires when a case is created and looks for open cases from the same customer. Merge only on a tight match, such as the same customer, the same product and a short time window. Send anything uncertain to a representative for review. Wrongly merging two genuinely different issues is worse than leaving a duplicate.",
        },
      ],
    },
    {
      type: "prose",
      heading: "Keeping duplicate cases from coming back",
      paragraphs: [
        "**Treat data hygiene as a standing job.** Schedule duplicate detection on contacts and accounts, and require standard phone and email formats on every intake form. Dynamics 365 record identification rules are only as good as the records beneath them.",
        "**Watch your merge rate by channel.** Track how often your team has to merge duplicate cases, and between which channels. A rising number means one door is not connected to the identity layer.",
        "**Plug in every new channel before it goes live.** A new mailbox, chat widget or messaging number should connect to Omnichannel customer identification and the single intake rule on day one.",
      ],
    },
    {
      type: "prose",
      heading: "One customer, one timeline",
      paragraphs: [
        "Duplicate cases in Dynamics 365 Customer Service are not a training problem. They are an identity problem, and the fix is to recognize the customer first, protect the intake second and merge last. Treat multi-channel case deduplication as part of your service design, not a cleanup task.",
        "Once email, phone and web requests land on a single customer timeline, three agents stop working three tickets. The customer hears one answer, and your team recovers the hours that duplicate work was quietly consuming.",
        "Once duplicates are under control, routing decides who handles the one remaining case. Our [shared inbox routing fix](/blog/customer-service-case-routing-fixing-shared-inbox/) picks up where this guide ends.",
      ],
    },
    {
      type: "prose",
      heading: "Next step",
      paragraphs: [
        "If duplicate cases are inflating your volume and confusing your customers, [book a free consultation](/contact/) and we will look at how your channels create cases today.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why does Dynamics 365 Customer Service create duplicate cases?",
      a: "Each channel, such as email, phone and web form, is its own front door and creates a case through its own path. Nothing checks whether the customer already has an open case, so one problem raised on three channels becomes three tickets.",
    },
    {
      q: "Can Dynamics 365 merge duplicate cases automatically?",
      a: "Not out of the box. Merging is an agent action in the command bar. Automatic merging needs custom logic, such as a Power Automate flow or plug-in, and it should merge only on a tight match like the same customer, product and a short time window.",
    },
    {
      q: "How many cases can you merge at once in Dynamics 365?",
      a: "You can merge up to 10 cases in one action. Select at least two active cases, choose Merge Cases, and pick the primary case. Activities, notes and attachments move to the primary case, and the merged cases appear on its Case Relationships tab.",
    },
    {
      q: "What do record identification rules do in Omnichannel?",
      a: "They decide which fields match an incoming conversation to a customer record. Default matching uses name, email and phone number. You can extend the rule to match on another field, such as an account number entered through a phone menu.",
    },
    {
      q: "Why should all support email go through one rule?",
      a: "When several mailboxes feed separate automatic record creation rules, the same email can be processed twice and create duplicate cases. Forwarding the mailboxes into one queue with one rule lets a follow-up land on the customer's open case instead of starting another.",
    },
    {
      q: "How do you keep duplicate cases from coming back?",
      a: "Schedule duplicate detection on contacts and accounts, require standard phone and email formats on intake forms, and track your merge rate by channel. Connect every new mailbox, chat widget or messaging number to customer identification and the single intake rule before it goes live.",
    },
  ],
};

import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/solutions/contract-management-automation/",
  intro:
    "Contract management automation moves contracts out of inboxes and shared folders into one process with defined stages, named owners and renewal reminders. MP-365 builds it on SharePoint and Power Automate, so legal and finance see every contract and what is due next.",
  blocks: [
    {
      type: "prose",
      heading: "What contract management automation is",
      paragraphs: [
        "Contract management automation is a way of running contracts through a defined process, with software handling the routine steps. A request comes in, the contract moves through drafting, review, approval and signature, and then sits in a central place with its key dates and owner.",
        "The software does the chasing: it routes approvals, sends reminders before a renewal date and updates a status that anyone can read. People still negotiate and decide. They just stop managing the process by email.",
      ],
    },
    {
      type: "prose",
      heading: "The problem: contracts live everywhere and expire quietly",
      paragraphs: [
        "In many companies, contracts sit in email attachments, personal folders and shared drives. Nobody has a full list. Renewal dates live in one person's calendar, and approvals run on forwarded messages that nobody can trace afterward.",
        "The result is predictable. A contract auto-renews on terms nobody reviewed, or lapses before anyone noticed. Finance cannot tell what is committed, and legal answers the same status questions again and again.",
      ],
    },
    {
      type: "list",
      heading: "Who feels it",
      items: [
        "**Legal and contract managers:** you answer status questions all day and chase approvers by email.",
        "**Finance:** you cannot see upcoming commitments or confirm what was approved.",
        "**Sales and account teams:** you wait on approvals with no view of where the contract is stuck.",
        "**Procurement and operations:** you miss renewal windows with suppliers and partners.",
        "**Executives:** you sign off without a clear picture of obligations across the company.",
      ],
    },
    {
      type: "table",
      heading: "What unmanaged contracts cost the business",
      headers: ["Symptom", "Business impact"],
      rows: [
        ["Missed renewal or notice dates", "Contracts auto-renew on old terms, or lapse and interrupt service."],
        ["Approvals by email", "Deals stall, and nobody can show who approved what."],
        ["Several versions of one contract", "Teams work from the wrong draft, which creates disputes."],
        ["No central list of contracts", "Finance and legal cannot report on obligations or spend."],
        ["Status questions answered by hand", "Skilled staff spend time on updates instead of review."],
      ],
    },
    {
      type: "table",
      heading: "Options for contract management automation",
      headers: ["Option", "Where it fits", "Watch for"],
      rows: [
        ["Spreadsheet and shared folder", "A small number of contracts and one person who manages them.", "No reminders, no audit trail, and it breaks as volume grows."],
        ["Built on Microsoft 365", "You use Microsoft 365 and want contracts with your existing permissions and tools.", "It needs a defined process and an owner, since it is built to your rules."],
        ["Dedicated contract software", "Complex clause libraries, heavy e-signature use and a large legal team.", "A separate license and system, and a second place for your content."],
      ],
    },
    {
      type: "prose",
      heading: "Can SharePoint manage contracts?",
      paragraphs: [
        "Yes, for many companies. A SharePoint library can hold each contract with fields such as counterparty, type, owner, start date, end date and status. Version history keeps earlier drafts, and permissions limit who can see sensitive agreements.",
        "On its own, SharePoint stores and organizes. Add Power Automate, and it also routes approvals, sends renewal reminders and updates status. That combination is what turns a folder into a contract management automation process.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 builds contract management automation",
      steps: [
        {
          name: "Map how contracts move today",
          description:
            "Walk through a request, review, approval and signature with legal, finance and the business owners, and note where it stalls.",
        },
        {
          name: "Define stages, owners and contract types",
          description:
            "Agree on the stages every contract passes through, who owns each stage and which contract types need different handling.",
        },
        {
          name: "Design the contract record",
          description:
            "Choose the fields you need, such as counterparty, value, end date and notice period, and keep them to what people will actually fill in.",
        },
        {
          name: "Build the library and permissions in SharePoint",
          description:
            "Create the contract library with views by stage and owner, and set access so sensitive agreements stay restricted.",
        },
        {
          name: "Automate requests and approvals",
          description:
            "Build the request form and approval routing in Power Automate, so each contract moves forward without email chasing.",
        },
        {
          name: "Set up renewal and notice reminders",
          description:
            "Send alerts to the contract owner and backup before key dates, and escalate if nobody acts.",
        },
        {
          name: "Load existing contracts",
          description:
            "Bring current agreements into the library with their key dates, starting with those closest to renewal.",
        },
        {
          name: "Add dashboards and train the team",
          description:
            "Build a view for legal and finance of what is due and where contracts are stuck, then train owners and administrators.",
        },
      ],
    },
    {
      type: "prose",
      heading: "How renewal reminders work in Power Automate",
      paragraphs: [
        "A Power Automate flow reads the end date and notice period from each contract record. It runs on a schedule, finds contracts reaching a set number of days before the notice date, and sends a message to the owner. If nobody marks the contract as reviewed, it can alert a manager.",
        "You choose the lead times, the recipients and the escalation rules. MP-365 tests the flows against real contracts before launch, so the first reminder is not the first time anyone sees it work.",
      ],
    },
    {
      type: "table",
      heading: "What you get from MP-365",
      headers: ["What MP-365 builds", "The result"],
      rows: [
        ["A defined contract process with stages and owners", "Everyone knows who acts next and where each contract stands."],
        ["A SharePoint contract library with key fields", "Contracts live in one searchable place with version history."],
        ["Request and approval flows in Power Automate", "Approvals move on their own and leave a record."],
        ["Renewal and notice reminders", "Owners hear about key dates before they pass."],
        ["Dashboards for legal and finance", "Both teams see what is due, what is stuck and what is committed."],
        ["Role-based access", "Sensitive agreements stay with the people who need them."],
        ["Owner training and a short guide", "Your team runs the process and adjusts it as rules change."],
      ],
    },
    {
      type: "prose",
      heading: "Proof: contracts with stages, owners and reminders",
      paragraphs: [
        "One MP-365 client managed contracts without a clear process. MP-365 set up defined stages, named owners, reminders and dashboards for legal and finance, so both teams could see the state of every contract. The client name is withheld.",
        "Read more project summaries on the [clients page](/clients/).",
      ],
    },
    {
      type: "prose",
      heading: "Scope, effort and cost",
      paragraphs: [
        "Effort depends on how many contract types you have, how many existing contracts to load, how many approval paths exist and whether other systems need links. A single contract type with one approval path is a smaller build than several types across regions.",
        "MP-365 scopes this on a discovery call. The [pricing page](/pricing/) explains how engagements work, and Microsoft license fees are set by Microsoft and are separate.",
      ],
    },
    {
      type: "prose",
      heading: "When this is not the right fit",
      paragraphs: [
        "This is not the right fit if you need a large clause library, redlining inside a dedicated legal tool or a full legal department platform. It is also not the right fit if you have no agreed contract process yet and nobody to own it. MP-365 does not provide legal advice or review contract wording.",
      ],
    },
    {
      type: "prose",
      heading: "Related services for your industry",
      paragraphs: [
        "The automation behind this solution is covered in [Power Automate workflow automation](/services/power-platform/power-automate/). The storage side sits under [SharePoint and intranets](/services/sharepoint/). Teams in [construction and engineering](/industries/construction-engineering/) often manage subcontract and supplier agreements, and [medical device companies](/industries/medical-devices/) manage supplier and distributor agreements. For other outcomes, browse all [Microsoft solutions for mid-size companies](/solutions/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What is contract management automation?",
      a: "Contract management automation runs contracts through a defined process using software for the routine steps. Requests, approvals, reminders and status updates happen automatically, and every contract sits in one place with an owner and key dates. People still negotiate and decide, but they stop managing the process by email.",
    },
    {
      q: "Can SharePoint manage contracts?",
      a: "Yes. A SharePoint library can store contracts with fields for counterparty, owner, dates and status, keep version history and restrict access. Alone it stores and organizes. With Power Automate added, it also routes approvals and sends reminders. For clause libraries and redlining, dedicated software may suit better.",
    },
    {
      q: "How do renewal reminders work in Power Automate?",
      a: "A flow reads each contract's end date and notice period on a schedule. When a contract reaches the lead time you set, it messages the owner. If nobody marks it reviewed, the flow can alert a manager. You choose the lead times, recipients and escalation steps.",
    },
    {
      q: "What is a contract governance process?",
      a: "A contract governance process is the set of rules for how contracts are requested, reviewed, approved, stored and renewed. It defines stages, owners and who may sign what. Automation enforces those rules so they hold under pressure. Write the rules down first, because software cannot fix a process nobody agreed on.",
    },
    {
      q: "Do we need dedicated contract software or can Microsoft 365 do it?",
      a: "Microsoft 365 handles many contract needs: storage, approvals, reminders and dashboards, using licenses you may already own. Dedicated software fits better when you need a large clause library, heavy redlining or a big legal team. Start by listing your real requirements, then compare them honestly.",
    },
    {
      q: "Can we automate approvals for sales contracts?",
      a: "Yes. A request form can route a sales contract to the right approvers based on its type or value, and record each decision. Sales sees where the contract is stuck without asking legal. The rules for who approves what come from your business, and MP-365 helps you write them down first.",
    },
    {
      q: "Can you load our existing contracts into the new system?",
      a: "Yes. MP-365 loads current agreements into the SharePoint library with their key dates and owners, starting with those closest to renewal. Documents without clear dates need a person to read them and fill in the fields. Plan time for that review, because it decides how reliable your reminders are.",
    },
    {
      q: "Who can see sensitive contracts?",
      a: "Only the people you grant access to. MP-365 sets permissions by contract type and role, so a sales agreement and an executive employment contract can sit in the same system with different audiences. Access is reviewed with legal and finance during the build and can be adjusted later.",
    },
    {
      q: "Does this include e-signatures?",
      a: "That depends on the signature tool you already use. MP-365 builds the process around signing, such as approvals before sending and storing the signed copy with its dates. It can connect to a signature service where one is available. Discuss your current tool on the discovery call.",
    },
  ],
  closing:
    "Contract management automation works when the process is simple, every contract has an owner and nobody learns about a renewal after the date has passed. MP-365 builds it on SharePoint and Power Automate, using the Microsoft 365 tools your team already knows.",
  cta: {
    heading: "Plan your contract rollout",
    body: "Tell us how contracts move through your company today and where they get stuck. We will outline a first version for legal and finance.",
    text: "Plan your rollout",
  },
};

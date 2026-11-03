import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/pricing/",
  intro:
    "Dynamics 365 implementation cost depends on scope, not on a fixed price list. MP-365 prices work through three engagement models, Ad hoc, Standard and Dedicated, and agrees the figure for each project after scoping.",
  blocks: [
    {
      type: "table",
      heading: "MP-365 engagement models, as of November 2026",
      headers: ["Model", "Best for", "How it is billed", "Minimum commitment", "Response time", "What is included"],
      rows: [
        [
          "Ad hoc",
          "One-off needs: call MP-365 when something comes up",
          "Pay only when engaged",
          "None. No retainer.",
          "Agreed during scoping",
          "Specialist help on the problem in front of you, with no ongoing obligation.",
        ],
        [
          "Standard",
          "Small projects and pre-defined pains. The recommended starting point.",
          "A flat rate, whatever the volume of work",
          "No forced minimum, and no penalty for quiet months",
          "Agreed during scoping",
          "MP-365 works as an extension of your team. You scale the work up or down as needs change.",
        ],
        [
          "Dedicated",
          "Teams that need MP-365 consistently, like a Dynamics specialist embedded in the operation",
          "Agreed during scoping",
          "Agreed during scoping",
          "Agreed during scoping",
          "Priority access and availability, with a specialist who knows your environment.",
        ],
      ],
    },
    {
      type: "prose",
      heading: "How MP-365 prices a Dynamics 365 project",
      paragraphs: [
        "MP-365 does not publish prices, because two Dynamics 365 projects with the same product can differ widely in effort. A ten-user sales pipeline and a multi-system rollout are different jobs. Cost follows the drivers in the next table, and the [services overview](/services/) shows what each area of work covers.",
        "The tables on this page show how MP-365 engages and bills. They contain no price figures. The exact amount for your work is agreed in writing after scoping.",
      ],
    },
    {
      type: "table",
      heading: "What drives Dynamics 365 implementation cost, as of November 2026",
      headers: ["Cost driver", "Why it matters", "The question MP-365 asks"],
      rows: [
        ["Number of users", "More users mean more roles, more training and more testing.", "How many people will use the system, and in which roles?"],
        ["Systems to integrate", "Every connection to an ERP, marketing tool or database adds design and testing.", "Which systems must exchange data with Dynamics 365, and in which direction?"],
        ["Data to migrate", "Volume and cleanliness decide how much mapping and cleanup is needed.", "Where does the data live today, and how clean is it?"],
        ["Customization", "Standard setup is faster than custom forms, automation and reports.", "Which processes are unique to your business, and which can follow standard behavior?"],
        ["Number of environments", "Test, staging and production environments each need setup and release steps.", "Do you need separate environments for testing and training?"],
        ["Timeline", "A tight deadline can mean more people working in parallel.", "Is there a fixed date, such as a contract end or a fiscal year start?"],
        ["How much your team can help", "Fast answers and available testers shorten the work.", "Who on your side can make decisions, test and sign off?"],
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 produces a Dynamics 365 cost estimate",
      steps: [
        { name: "Hold a discovery call", description: "[Contact MP-365](/contact/) and describe the problem, the systems involved and the result you want." },
        { name: "Scope the work", description: "MP-365 asks about users, data, integrations and environments, the drivers in the table above." },
        { name: "Receive a written estimate", description: "You get the scope, the engagement model and the cost in writing." },
        { name: "Agree the terms", description: "You confirm the scope, what is excluded and how changes are handled." },
        { name: "Kick off the project", description: "MP-365 starts with a working first version and refines it with your users." },
      ],
    },
    {
      type: "list",
      heading: "How to compare Dynamics 365 consulting bids",
      items: [
        "**Who does the work.** Ask who will build your solution, and whether senior people or subcontractors do the work.",
        "**What is excluded.** Compare scope line by line. A low bid often leaves out data migration, testing or training.",
        "**How changes are handled.** Ask how a change request is priced and approved before the project starts.",
        "**What the hand-off includes.** Look for documentation, training for your users and a defined support period.",
        "**How success is measured.** Agree on a result you can check, such as hours saved, errors removed or reports produced automatically.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft licenses are priced separately",
      paragraphs: [
        "Microsoft sets Dynamics 365 and Microsoft 365 license prices, and you pay them to Microsoft or your license provider. MP-365 does not resell licenses, so license fees never appear in an MP-365 estimate. Check Microsoft's current price list for those figures.",
      ],
    },
    {
      type: "prose",
      heading: "Estimate your project complexity",
      paragraphs: [
        "The short estimator below helps you size a Dynamics 365 or Microsoft 365 project. It asks about the service area, users, systems to connect, data and timeline. It then suggests an engagement model and a complexity tier, and lists the cost drivers that apply to your answers. Results are guidance, not a quote, and you do not need to enter an email address.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much does Dynamics 365 implementation cost?",
      a: "It depends on the number of users, the systems to connect, the data to migrate, customization and your timeline. MP-365 does not publish a price list. It scopes the work first, then provides a written estimate. The tables above show each cost driver.",
    },
    {
      q: "How is Dynamics 365 consulting priced?",
      a: "MP-365 prices through three engagement models. Ad hoc means you pay only when engaged. Standard uses a flat rate whatever the volume. Dedicated gives you priority access to an embedded specialist. Specific rates are agreed during scoping.",
    },
    {
      q: "What affects the cost of a Dynamics 365 project?",
      a: "Seven things move cost most: number of users, systems to integrate, data to migrate, customization, number of environments, timeline and how much your team can help. Each is explained in the cost drivers table, with the question MP-365 asks about it.",
    },
    {
      q: "Is there a minimum commitment?",
      a: "No forced minimum applies to the Ad hoc and Standard models. Ad hoc has no retainer, and Standard has no penalty for quiet months. Dedicated terms, including any minimum, are agreed during scoping because the model reserves priority availability for you.",
    },
    {
      q: "Does the cost include Microsoft licenses?",
      a: "No. Microsoft sets license prices, and you pay them to Microsoft or your license provider. MP-365 does not resell licenses, so its estimates cover consulting and implementation work only. Budget for both, and ask Microsoft for current license pricing.",
    },
    {
      q: "Which engagement model should I choose?",
      a: "Choose Standard for a small project or a known pain, since it is the recommended option. Choose Ad hoc for occasional help with no commitment. Choose Dedicated if you need MP-365 consistently, like an embedded Dynamics specialist. The estimator suggests one based on your answers.",
    },
    {
      q: "What does the Dynamics 365 cost estimator do?",
      a: "The estimator asks about your project and returns a suggested engagement model, a complexity tier of light, standard or complex, and the cost drivers that apply. It is guidance, not a quote. You can send the answers with your message to MP-365.",
    },
    {
      q: "How do I get an accurate quote?",
      a: "Book a discovery call and describe the problem. MP-365 then scopes the work with you, covering users, integrations, data and environments, and sends a written estimate. A precise figure is only possible after that scoping step.",
    },
    {
      q: "Why is one bid much cheaper than another?",
      a: "Differences usually come from scope. A cheaper bid may exclude data migration, testing, training or hand-off, or use less senior staff. Compare who does the work, what is excluded, how changes are handled and how success is measured before you judge on price.",
    },
    {
      q: "Can I start small and expand later?",
      a: "Yes. Start with a single problem under the Ad hoc or Standard model, then scale the work up or down as needs change. Standard has no forced minimum and no penalty for quiet months. See the [client results](/clients/) for how engagements have run.",
    },
  ],
  closing:
    "Dynamics 365 implementation cost becomes clear once the scope is clear. Use the cost drivers and the estimator to prepare, then talk to MP-365 about your project so it can scope the work and send a written estimate.",
  cta: {
    heading: "Plan your Dynamics 365 project with MP-365",
    body: "Share your goal, your users and the systems involved. MP-365 will scope it and explain the right engagement model.",
    text: "Book a discovery call",
  },
};

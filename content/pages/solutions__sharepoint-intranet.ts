import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/solutions/sharepoint-intranet/",
  intro:
    "A SharePoint intranet gives every employee one trusted place for news, policies, people and tools, built on the Microsoft 365 licenses you may already own. This guide explains how it works, how it compares with buying intranet software, and what MP-365 builds when you want help.",
  blocks: [
    {
      type: "prose",
      heading: "What a SharePoint intranet is and how it works",
      paragraphs: [
        "A SharePoint intranet is a company portal made from SharePoint Online sites. A communication site holds the home page, news and policies. Team sites hold the working files of departments and projects. Hub sites tie related sites together with shared navigation, a common look and combined search.",
        "Staff sign in with their work account and open the intranet in a browser or inside Microsoft Teams. Page owners edit pages in the browser, with no code. Because SharePoint ships with ready-made site and page templates, most of the work is deciding structure, ownership and content, not programming.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft 365 intranet, SharePoint intranet and Teams intranet",
      headers: ["Term", "What it means in practice"],
      rows: [
        ["SharePoint intranet", "The sites, pages, news and document libraries in SharePoint Online. This is where company content is published and found."],
        ["Microsoft 365 intranet", "The SharePoint intranet plus the services around it: Microsoft Entra sign-in, Microsoft Search, Teams, Power Automate and Power Apps."],
        ["Microsoft Teams intranet", "The intranet opened as a tab or app inside Teams, so staff reach news and policies where they already chat and meet."],
      ],
    },
    {
      type: "prose",
      heading: "The day-to-day problem: nobody trusts where things live",
      paragraphs: [
        "Most companies do not lack content. They lack one agreed place for it. The handbook sits in email, on a shared drive and on an old site, each with a different date. Announcements go out by email and vanish. Staff in plants, branches and job sites cannot reach documents without a VPN or a call to a colleague.",
        "Search makes it worse. Old versions, duplicates and files with no titles bury the page someone needs, so people ask a coworker instead. Every question answered that way is time taken from someone else.",
      ],
    },
    {
      type: "list",
      heading: "Who feels the problem",
      items: [
        "**HR and internal communications:** you send the same policy reminder again because nobody can find the last one.",
        "**Operations and plant managers:** your teams work from printed or outdated procedures.",
        "**IT leaders:** you maintain an old SharePoint Server site or a portal that nobody owns.",
        "**New hires:** you spend the first days asking where things are.",
        "**Executives:** your announcements reach only the people who read email.",
      ],
    },
    {
      type: "table",
      heading: "What a weak intranet costs the business",
      headers: ["Symptom", "Business impact"],
      rows: [
        ["Several copies of the same policy", "Staff follow an outdated rule, and managers spend time correcting it."],
        ["News sent only by email", "Frontline and field teams miss changes that affect their work."],
        ["Pages with no named owner", "Content goes stale and updates queue up behind IT."],
        ["Search returns noise", "People interrupt colleagues instead of finding answers themselves."],
        ["VPN needed for basic documents", "Remote and field staff lose time, or work around the system."],
      ],
    },
    {
      type: "list",
      heading: "What features a modern intranet should have",
      items: [
        "**A clear home page:** news, quick links to the top tasks and a search box, with the most used items one click away.",
        "**Structure by audience and function:** hubs for areas such as HR, IT and operations, with consistent navigation.",
        "**Search that works:** titles, metadata and scoped results so the right page rises to the top.",
        "**Named owners and review dates:** every page has a person responsible for it.",
        "**Mobile and Teams access:** staff reach content from a phone or from inside Teams.",
        "**Targeted news:** the right announcement reaches the right audience, such as one site or one region.",
        "**Simple permissions:** broad read access for company content, tighter access for sensitive sites.",
      ],
    },
    {
      type: "table",
      heading: "Build a SharePoint intranet or buy intranet software",
      headers: ["Question", "Build on Microsoft 365", "Buy intranet software"],
      rows: [
        ["License cost", "SharePoint is part of most Microsoft 365 business and enterprise plans, so there is no second platform license.", "A separate subscription on top of Microsoft 365, usually priced by user."],
        ["Time to a working site", "Depends on design and content work. Templates speed up the page layouts.", "Faster to a polished start, because many features come packaged."],
        ["Built-in extras", "Basics are included. Analytics, surveys or recognition may need extra setup or add-ons.", "Often bundled, with vendor support."],
        ["Control and fit", "High. You shape structure, permissions and automation to your company.", "Limited to what the vendor offers and how it connects to Microsoft 365."],
        ["Ownership after launch", "Your page owners and administrators run it with Microsoft's own tools.", "Your team plus the vendor's admin console and support."],
        ["Data and security", "Content stays in your Microsoft 365 tenant under your existing permissions.", "Content or identities may sync to another vendor's platform."],
      ],
    },
    {
      type: "prose",
      heading: "Our verdict on building versus buying",
      paragraphs: [
        "Build on Microsoft 365 if you already license it, you have people who can own content, and you want the intranet to share permissions and search with the rest of your tenant. This is the better fit for most mid-size companies that run on Microsoft.",
        "Buy software if nobody will own the site, you want analytics and engagement tools out of the box, and you accept paying for a second platform. A packaged product can be the right call. It is worth choosing on purpose rather than by default.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 builds your SharePoint intranet",
      steps: [
        {
          name: "Interview each audience",
          description:
            "Talk with office staff, field teams and managers, and write down the ten tasks they most need to finish on the intranet.",
        },
        {
          name: "Audit what exists today",
          description:
            "List the old site pages, shared drives and Teams content, and mark each item to keep, rewrite, move or retire.",
        },
        {
          name: "Design the site map and hubs",
          description:
            "Lay out communication sites, team sites and hubs, with one owner named for each. Plan navigation around tasks, not the org chart.",
        },
        {
          name: "Set permissions and sign-in rules",
          description:
            "Create a small set of permission groups and decide which sites stay open to everyone and which are restricted.",
        },
        {
          name: "Build the home page and one department site",
          description:
            "Deliver a working first slice you can click, so your team reacts to something real before the rest is built.",
        },
        {
          name: "Test with real staff",
          description:
            "Ask a mixed group to complete their top tasks, then adjust labels, navigation and layout where they struggle.",
        },
        {
          name: "Migrate content and launch in waves",
          description:
            "Move approved content, retire old pages and open departments one group at a time.",
        },
        {
          name: "Train owners and document the rules",
          description:
            "Teach page owners to publish and review, and hand your administrators a short governance guide.",
        },
      ],
    },
    {
      type: "table",
      heading: "What you get from MP-365",
      headers: ["What MP-365 builds", "The result"],
      rows: [
        ["Site map with hubs and named owners", "Staff and owners know where content lives and who keeps it current."],
        ["Home page, navigation and news setup", "Employees land on one page that shows what matters today."],
        ["Page and news templates", "Owners publish consistent pages without waiting for IT."],
        ["Permission model and documentation", "Access is simple to explain and easy to audit."],
        ["Search tuning with titles and metadata", "People find policies and forms without asking a colleague."],
        ["Approvals and review reminders in Power Automate", "Policies get reviewed on schedule, with no manual chasing."],
        ["Owner training and governance guide", "Your team runs the intranet after launch."],
      ],
    },
    {
      type: "prose",
      heading: "What it takes: scope, effort and cost",
      paragraphs: [
        "Effort depends on the number of audiences and sites, the amount of content to move, the systems you want linked and how quickly owners review pages. MP-365 scopes this on a discovery call and does not guess from a page of questions.",
        "SharePoint license fees are set by Microsoft and are separate from consulting. The [pricing page](/pricing/) explains how MP-365 engagements work.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: a modern intranet for a manufacturer",
      paragraphs: [
        "A manufacturing company needed a modern intranet to replace an older setup. MP-365 delivered an information architecture that fits how the company works, a simpler security model and faster content updates. The client name is withheld.",
        "Read more project summaries on the [clients page](/clients/), or see how we serve [manufacturing companies](/industries/manufacturing/).",
      ],
    },
    {
      type: "prose",
      heading: "When this is not the right fit",
      paragraphs: [
        "A custom SharePoint intranet is not for companies that want a packaged product with analytics, a vendor help desk and little setup. It is also not for teams that need a public marketing website or heavy custom software, which MP-365 does not build. If nobody can own content after launch, fix that first or choose software with managed support.",
      ],
    },
    {
      type: "prose",
      heading: "Related services and next steps",
      paragraphs: [
        "If you want a team to design and deliver the build, see [SharePoint intranet development](/services/sharepoint/intranet-development/). If search is the weak spot, [SharePoint search and information architecture](/services/sharepoint/information-architecture/) fixes the base. For other business outcomes, browse all [Microsoft solutions for mid-size companies](/solutions/).",
      ],
    },
  ],
  faqs: [
    {
      q: "What is a SharePoint intranet?",
      a: "A SharePoint intranet is a private company portal built on SharePoint Online. It brings news, policies, department pages and tools together on sites that share navigation and search. Employees sign in with their work account and use it in a browser or in Teams. Page owners update content without writing code.",
    },
    {
      q: "Should you build an intranet on Microsoft 365 or buy software?",
      a: "Build on Microsoft 365 if you already license it and have people to own content. You avoid a second platform and keep content under your existing permissions. Buy software if you want built-in analytics and vendor support with little setup. Compare the cost of the extra subscription against the extra control.",
    },
    {
      q: "What features should a modern intranet have?",
      a: "A modern intranet needs a clear home page, news that reaches the right audience, search that returns the right page, simple navigation by task, and a named owner for every page. It should also work on phones and inside Teams. Fancy extras matter less than these basics.",
    },
    {
      q: "What is the difference between a SharePoint intranet and a Microsoft 365 intranet?",
      a: "The SharePoint intranet is the set of sites and pages. A Microsoft 365 intranet is that plus the services around it: Entra sign-in, Microsoft Search, Teams and Power Automate. Most companies mean the same thing by both terms, but the second includes how people reach and use the content.",
    },
    {
      q: "Can Microsoft Teams act as an intranet?",
      a: "Not on its own. Teams is built for chat, meetings and team collaboration, while an intranet publishes content to the whole company. The usual setup is a SharePoint intranet shown inside Teams as an app, so staff read news and policies where they already work and chat there too.",
    },
    {
      q: "Are there SharePoint intranet templates we can start from?",
      a: "Yes. SharePoint includes site and page templates you can adapt, and MP-365 builds reusable page and news templates for your owners. Templates save layout work, but they do not decide your structure, permissions or content. Plan those first, then apply the template that fits.",
    },
    {
      q: "Do employees need a VPN to reach a SharePoint intranet?",
      a: "No. SharePoint Online runs in Microsoft 365, so staff reach it from any device by signing in with their work account. Your organization can still add rules, such as requiring a managed device or a second sign-in step, but the intranet itself does not need a VPN.",
    },
    {
      q: "Who should own a company intranet?",
      a: "Give the intranet a business owner, usually from communications or HR, and name a content owner for each site. IT runs the platform and permissions, but it should not write every page. Intranets go stale when ownership sits only with IT. MP-365 sets these roles during design.",
    },
    {
      q: "Can you move content from an old intranet or shared drive?",
      a: "Yes, after review. MP-365 sorts content into keep, rewrite, move and retire, then moves the approved items into the new sites. Old classic pages and custom code usually need rebuilding as modern pages. Moving everything unchanged only carries the old clutter into the new site.",
    },
    {
      q: "How does MP-365 keep an intranet from going stale?",
      a: "MP-365 puts a named owner and a review reminder on each section, using Power Automate where it helps. Owners are trained to publish and update, and a short governance guide records the rules. Stale pages usually come from missing ownership, so the design fixes that first.",
    },
  ],
  closing:
    "A SharePoint intranet works when it has clear structure, named owners and search that finds the right page. Build it on Microsoft 365 or buy software, but decide on purpose. If you want help, MP-365 designs and builds it with your team.",
  cta: {
    heading: "Plan your intranet with MP-365",
    body: "Tell us who the intranet is for and what is broken today. We will outline a first version you can react to.",
    text: "Plan your intranet",
  },
};

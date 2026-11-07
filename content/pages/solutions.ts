import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/solutions/",
  intro:
    "Microsoft solutions for mid-size companies from MP-365 each fix one business problem, such as a dated intranet, slow reporting, a stalled CRM rollout or a merger that needs two companies on one set of systems. Find your problem below and the table points you to the right page.",
  childSummaries: {
    "/solutions/sharepoint-intranet/":
      "Your news, policies and forms live in too many places, and people cannot find them. A modern intranet on Microsoft 365 gives staff one home page.",
    "/solutions/executive-dashboards/":
      "Leaders wait on spreadsheet reports that are out of date by the time they arrive. Power BI dashboards show live numbers in one view.",
    "/solutions/crm-implementation/":
      "Your sales or service team is still working from email and spreadsheets. A focused Dynamics 365 rollout gives them one process to follow.",
    "/solutions/dynamics-365-migration/":
      "Your classic Dynamics CRM is hard to change and hard to release. Moving to Dynamics 365 online replaces old workflows and plugins with current tools.",
    "/solutions/contract-management-automation/":
      "Contracts sit in inboxes and renewals get missed. Stages, owners and reminders on Microsoft 365 show where every contract stands.",
    "/solutions/m-and-a-it-integration/":
      "A merger, acquisition or divestiture leaves two companies needing one set of mailboxes, Teams and files. Planned tenant moves get both sides working together.",
    "/solutions/crm-systems-integration/":
      "Records get retyped or dropped between your CRM, marketing tools and other systems. Logged, monitored connections move the data for you.",
  },
  blocks: [
    {
      type: "prose",
      heading: "Microsoft solutions for mid-size companies, by business problem",
      paragraphs: [
        "MP-365 (Modern Partners 365) is a Microsoft Solutions Partner that works with mid-size and enterprise companies on Dynamics 365, Microsoft 365 and Copilot. It has built its solutions around the problems that clients bring most often.",
        "Each solution page starts with what the problem looks like day to day, then explains the options and how MP-365 approaches the work. Pick the page that sounds like your situation: [Modern Company Intranet](/solutions/sharepoint-intranet/), [Executive Dashboards & Analytics](/solutions/executive-dashboards/), [Rapid CRM Deployment](/solutions/crm-implementation/), [Classic CRM Modernization](/solutions/dynamics-365-migration/), [Contract Management Automation](/solutions/contract-management-automation/), [M&A IT Integration & Separation](/solutions/m-and-a-it-integration/) or [CRM & Systems Integration](/solutions/crm-systems-integration/).",
      ],
    },
    {
      type: "prose",
      heading: "How solutions differ from services",
      paragraphs: [
        "A solution starts from an outcome you want. A service starts from a Microsoft tool and the work MP-365 does with it. A solution usually combines several services, so the two sets of pages cover the same work from different directions.",
        "If you know the tool you need, such as Power BI or SharePoint, start at [Services](/services/). If you know the problem but not the tool, start with the table below. Each row links the solution to the service that sits closest to it.",
      ],
    },
    {
      type: "table",
      heading: "Problem, solution, related service",
      headers: ["Problem", "Solution", "Related service"],
      rows: [
        [
          "Staff cannot find policies, news or forms",
          "[Modern Company Intranet](/solutions/sharepoint-intranet/)",
          "[SharePoint Intranet Development](/services/sharepoint/intranet-development/)",
        ],
        [
          "Reports take days to build and are out of date",
          "[Executive Dashboards & Analytics](/solutions/executive-dashboards/)",
          "[Power BI Consulting & Dashboards](/services/power-platform/power-bi/)",
        ],
        [
          "Sales or service work happens in email and spreadsheets",
          "[Rapid CRM Deployment](/solutions/crm-implementation/)",
          "[Dynamics 365 Sales](/services/dynamics-365-crm/sales/)",
        ],
        [
          "A classic Dynamics CRM is hard to change and release",
          "[Classic CRM Modernization](/solutions/dynamics-365-migration/)",
          "[Dynamics 365 CRM Consultation](/services/dynamics-365-crm/)",
        ],
        [
          "Contracts and renewals are tracked by hand",
          "[Contract Management Automation](/solutions/contract-management-automation/)",
          "[Power Automate Workflow Automation](/services/power-platform/power-automate/)",
        ],
        [
          "A merger or divestiture needs mailboxes, Teams and files moved",
          "[M&A IT Integration & Separation](/solutions/m-and-a-it-integration/)",
          "[M&A Tenant Migration](/services/tenant-to-tenant-migration/)",
        ],
        [
          "Data is retyped or dropped between systems",
          "[CRM & Systems Integration](/solutions/crm-systems-integration/)",
          "[Dynamics 365 Integration Services](/services/dynamics-365-crm/integration-services/)",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Not sure which solution fits your situation",
      paragraphs: [
        "Several problems often sit together. A CRM rollout may need an integration and a dashboard, and a merger may need both a migration and a permission review. A short conversation with MP-365 sorts out which piece to start with and which can wait.",
        "If your question is about your industry, the [Industries](/industries/) page shows where each solution applies. If your question is about cost, the [Pricing](/pricing/) page explains how MP-365 works with clients.",
      ],
    },
  ],
  faqs: [
    {
      q: "What business problems do Microsoft solutions solve?",
      a: "Microsoft solutions from MP-365 solve everyday operating problems: staff who cannot find information, slow reports, CRM work trapped in email, contracts tracked by hand, mergers that need systems joined, and data that does not move between tools. Each solution page describes the problem first and the Microsoft tools second.",
    },
    {
      q: "How are solutions different from services?",
      a: "A solution is built around a business outcome, while a service is built around a Microsoft tool. One solution often draws on several services. For example, Executive Dashboards uses Power BI consulting, and Rapid CRM Deployment uses Dynamics 365 Sales or Customer Service work. Choose whichever view matches how you describe your need.",
    },
    {
      q: "Which solution should we start with?",
      a: "Start with the solution that matches the problem costing you the most time right now. If several apply, begin with the one the others depend on. Data connections and a clear CRM process usually come before dashboards. MP-365 can help you set the order in a first conversation.",
    },
    {
      q: "Can we combine more than one solution?",
      a: "Yes. Many clients need two or three solutions in sequence, such as a CRM rollout followed by an integration and then executive dashboards. MP-365 plans them so each piece builds on the one before and nothing is built twice. You can also add the next solution later.",
    },
    {
      q: "Do the solutions run on Microsoft tools?",
      a: "Yes. Every MP-365 solution is built on Dynamics 365, Microsoft 365, SharePoint, Power Platform or Copilot, using low-code tools where they fit. Microsoft licenses are priced by Microsoft or your license provider and are separate from MP-365 fees, so check your current plan early.",
    },
    {
      q: "How does a solution project begin?",
      a: "A solution project begins with MP-365 listening to how your team works today and what is going wrong. From there it builds a small first version, checks it with the people who use it, refines it and hands it off. Book a conversation on the [contact page](/contact/) to begin.",
    },
    {
      q: "Does MP-365 replace our internal IT team?",
      a: "No. MP-365 works as an extension of your team, not a replacement for it. Your people keep ownership of the systems, and MP-365 documents what it builds and briefs you at hand-off so your staff can run it. The aim is that your team spends time on the business instead of the system.",
    },
  ],
  closing:
    "Microsoft solutions for mid-size companies work best when they start from one clear problem. Choose the page above that matches yours, or tell MP-365 what is slowing your team down and it will point you to the right starting place.",
  cta: {
    heading: "Tell MP-365 which problem to fix first",
    body: "Describe the problem your team deals with most, and MP-365 will suggest the solution and the first step.",
    text: "Book a free consultation",
  },
};

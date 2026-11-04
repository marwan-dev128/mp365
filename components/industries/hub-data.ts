import type { Pattern } from "./HubPatterns";

export const INDUSTRY_PATTERNS: Pattern[] = [
  {
    step: "01",
    title: "Permissions and access",
    subtitle: "Who can see what",
    body: "Every industry needs to know who can open which records and files. MP-365 reviews Dynamics 365 security roles and Microsoft 365 permissions, then documents the access levels. This work is an access review, not a certification or a security service.",
    linkText: "See permissions work",
    linkHref: "/services/data-governance/microsoft-purview/",
  },
  {
    step: "02",
    title: "Data people trust",
    subtitle: "Clean CRM records",
    body: "Reports only help when the records behind them are right. MP-365 cleans CRM data, removes duplicates and sets the rules that keep new records consistent.",
    linkText: "See data quality work",
    linkHref: "/services/data-governance/data-quality-management/",
  },
  {
    step: "03",
    title: "One place for the work",
    subtitle: "CRM and documents together",
    body: "Teams lose time moving between email, spreadsheets and shared drives. MP-365 brings customer records into Dynamics 365 and documents into SharePoint, then connects them to the other systems you run.",
    linkText: "See Dynamics 365 consulting",
    linkHref: "/services/dynamics-365-crm/",
  },
];

export const SOLUTION_PATTERNS: Pattern[] = [
  {
    step: "01",
    title: "Understand the problem",
    subtitle: "One focused session",
    body: "MP-365 captures the business goal, reproduces what is broken and confirms the impact before any work starts. There is no waiting for kickoff meetings.",
    linkText: "See how pricing works",
    linkHref: "/pricing/",
  },
  {
    step: "02",
    title: "Build a working first version",
    subtitle: "Quick MVP, then refine",
    body: "The team gets access and delivers a first version early, so your people can react to something real. Their feedback shapes the build before anything goes live.",
    linkText: "See client results",
    linkHref: "/clients/",
  },
  {
    step: "03",
    title: "Deploy and hand off",
    subtitle: "You own the result",
    body: "MP-365 releases the solution, trains your team and documents the build, then stays available for continuous improvement.",
    linkText: "Book a discovery call",
    linkHref: "/contact/",
  },
];

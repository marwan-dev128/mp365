export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  problem: string[];
  approach: string[];
  result: string[];
  // Metrics are intentionally left as placeholders. Do not publish invented
  // numbers under a real client's name — replace with client-approved figures
  // (or remove the field) before this page goes live.
  metrics: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "otis-elevator",
    client: "OTIS Elevator",
    industry: "Manufacturing / Industrial",
    serviceSlug: "application-modernization",
    metaTitle: "OTIS Elevator Case Study",
    metaDescription:
      "How MP365 supported OTIS Elevator's Microsoft cloud and application modernization initiatives.",
    summary:
      "A global industrial organization needed its Microsoft platform to keep pace with the scale and complexity of its operations.",
    problem: [
      "[CONTENT NEEDED: describe the specific business problem OTIS Elevator brought to MP365 — legacy system constraints, scale challenges, or timeline pressure. Confirm exact scope with client before publishing, including whether OTIS Elevator has approved being named publicly.]",
    ],
    approach: [
      "[CONTENT NEEDED: describe MP365's specific engagement — which services were delivered (e.g., application modernization, Azure migration), timeline, and team structure.]",
    ],
    result: [
      "[CONTENT NEEDED: qualitative and quantitative outcomes, confirmed with the client's marketing/legal contact before publication.]",
    ],
    metrics: [],
  },
  {
    slug: "carlisle-construction",
    client: "Carlisle Construction Materials",
    industry: "Manufacturing / Construction Materials",
    serviceSlug: "ma-tenant-migration",
    metaTitle: "Carlisle Construction Materials Case Study",
    metaDescription:
      "How MP365 supported Carlisle Construction Materials through a Microsoft 365 environment transition.",
    summary:
      "A construction materials manufacturer needed a Microsoft 365 environment restructured to support organizational change.",
    problem: [
      "[CONTENT NEEDED: describe the specific driver — acquisition, divestiture, or environment consolidation — and the constraints (timeline, compliance, business continuity) MP365 had to work within.]",
    ],
    approach: [
      "[CONTENT NEEDED: describe the migration or governance approach taken, referencing the M&A Tenant Migration or Data Governance service pages.]",
    ],
    result: [
      "[CONTENT NEEDED: confirmed outcomes and, if available, a client quote.]",
    ],
    metrics: [],
  },
  {
    slug: "hunter-panels",
    client: "Hunter Panels",
    industry: "Manufacturing",
    serviceSlug: "dynamics-365",
    metaTitle: "Hunter Panels Case Study",
    metaDescription:
      "How MP365 supported Hunter Panels' Microsoft Business Applications initiatives.",
    summary:
      "A manufacturing organization needed its business applications platform aligned with how the business actually operates.",
    problem: [
      "[CONTENT NEEDED: describe the specific process or system gap Hunter Panels needed solved.]",
    ],
    approach: [
      "[CONTENT NEEDED: describe the Dynamics 365 / Power Platform engagement delivered.]",
    ],
    result: [
      "[CONTENT NEEDED: confirmed outcomes and, if available, a client quote.]",
    ],
    metrics: [],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

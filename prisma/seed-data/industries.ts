import type { Faq } from "./services";
import type { MarketingBlock } from "../../lib/marketing-blocks";

export type Industry = {
  slug: string;
  oldSlugs: string[];
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroQuestion: string;
  heroAnswer: string;
  intro: string[];
  challenges: string[];
  /** Typed content blocks — same renderer as the solutions and marketing hubs. */
  blocks?: MarketingBlock[];
  faqs: Faq[];
  /** Bare Service slugs, most relevant first. */
  relatedServiceSlugs?: string[];
  /** Bare glossary term slugs. */
  relatedTermSlugs?: string[];
  /** Full marketing-hub paths, e.g. "/pricing/dynamics-365-licensing/". */
  relatedPageRefs?: string[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    oldSlugs: ["/solutions/manufacturing-it-solutions/"],
    name: "Manufacturing",
    metaTitle: "Microsoft 365 & Dynamics 365 IT Solutions for Manufacturing",
    metaDescription:
      "Microsoft 365, Dynamics 365, and Power Platform solutions built for manufacturers — inventory visibility, shop-floor data, and multi-site collaboration.",
    heroQuestion: "How does Dynamics 365 support manufacturing operations?",
    heroAnswer:
      "Dynamics 365 Finance & Operations and Business Central support manufacturing operations with integrated inventory, production scheduling, and supply chain visibility, while Power Platform connects shop-floor data collection to the same system — replacing the spreadsheet-and-whiteboard tracking common at mid-market manufacturers.",
    intro: [
      "Manufacturers run on inventory accuracy and multi-site coordination — MP365 implements Dynamics 365 and Power Platform to give plant floor and back office the same real-time picture, without a rip-and-replace of every existing system.",
    ],
    challenges: [
      "Inventory and production data trapped in spreadsheets or a legacy, unsupported ERP",
      "Multi-site or multi-entity operations with no consolidated reporting",
      "Shop-floor data collection disconnected from planning and finance",
      "Vendor and supply chain visibility gaps that surface only after a shortage hits",
    ],
    faqs: [
      {
        q: "Can Power Apps replace a shop-floor data collection system?",
        a: "For many mid-market manufacturers, yes — a Power App on a tablet or handheld device connected to Dataverse or Dynamics 365 can replace paper logs or a standalone data collection tool at a fraction of the licensing cost, as long as the shop floor doesn't need specialized industrial protocol integration.",
      },
      {
        q: "Does Business Central handle manufacturing, or do we need Finance & Operations?",
        a: "Business Central covers discrete and light manufacturing — production BOMs, routings, capacity planning, and shop-floor postings — which is enough for many single-site and small multi-site manufacturers. Finance & Operations becomes the better fit with high-volume production, complex multi-site or multi-country operations, advanced warehouse management, or process-manufacturing requirements such as formulas and batch traceability.",
      },
      {
        q: "Can Dynamics 365 connect to machines and MES systems on the shop floor?",
        a: "Yes, though not directly — machine and MES data typically flows through an integration layer (Azure IoT, a middleware connector, or the existing MES vendor's API) into Dataverse or Dynamics 365, rather than the ERP polling equipment itself. Where the requirement is operator data entry rather than machine telemetry, a Power App on a tablet is usually the faster and cheaper route.",
      },
    ],
  },
  {
    slug: "healthcare",
    oldSlugs: ["/solutions/healthcare/"],
    name: "Healthcare",
    metaTitle: "HIPAA-Ready Microsoft 365 Solutions for Healthcare",
    metaDescription:
      "Microsoft 365 data governance, collaboration, and migration for healthcare organizations — configured around HIPAA compliance requirements.",
    heroQuestion: "Is Microsoft 365 HIPAA compliant?",
    heroAnswer:
      "Microsoft 365 can support HIPAA compliance when configured correctly — Microsoft will sign a Business Associate Agreement (BAA) for eligible plans, but compliance depends on how retention, access controls, and data loss prevention are configured, not on the license alone. MP365 configures Microsoft Purview and access governance to meet HIPAA requirements for healthcare clients.",
    intro: [
      "Healthcare organizations need Microsoft 365 configured, not just licensed, to meet HIPAA requirements. MP365 builds the data governance, access control, and retention framework that makes compliance real rather than assumed.",
    ],
    challenges: [
      "PHI stored without proper sensitivity labeling or access restrictions",
      "Retention policies that don't match HIPAA's required retention periods",
      "Hospital system mergers requiring tenant migration under compliance constraints",
      "Legacy on-prem systems slowing collaboration between clinical and administrative staff",
    ],
    faqs: [
      {
        q: "Does Microsoft sign a HIPAA Business Associate Agreement (BAA)?",
        a: "Yes — Microsoft will sign a BAA covering Microsoft 365 and Azure services for eligible healthcare customers, but the organization is still responsible for configuring access controls, retention, and data handling correctly. A signed BAA alone does not make an environment compliant.",
      },
      {
        q: "What happens to PHI during a hospital or practice merger migration?",
        a: "Protected health information has to stay inside the compliance boundary throughout the migration, which means the migration tooling and any staging location must be covered by a business associate agreement, access must be restricted to named migration staff, and every movement of PHI has to be logged for audit. Practically, this makes the [data governance](/services/data-governance/) review a prerequisite to the [migration plan](/services/ma-tenant-migration/) rather than a parallel workstream — you need to know where PHI lives and what retention applies to it before deciding what moves.",
      },
      {
        q: "Can Microsoft Teams be used for clinical communication under HIPAA?",
        a: "Teams is covered by Microsoft's business associate agreement for eligible plans, so it can be used for clinical communication — but only when configured for it: retention policies applied to chat and meetings, data loss prevention rules for PHI, controlled guest access, and device policies for staff using personal phones. The license makes it eligible; the configuration makes it compliant.",
      },
    ],
  },
  {
    slug: "retail",
    oldSlugs: ["/solutions/it-services-solutions-for-retail/"],
    name: "Retail",
    metaTitle: "Microsoft 365 & Power Platform Solutions for Retail",
    metaDescription:
      "Power Platform, Dynamics 365, and Microsoft 365 solutions for retail operations — inventory, store collaboration, and customer data in one system.",
    heroQuestion: "How can retail companies use Power Platform for store operations?",
    heroAnswer:
      "Retail companies use Power Apps and Power Automate to digitize store-level processes — inventory counts, task checklists, and issue reporting — that otherwise run on paper or disconnected spreadsheets, feeding data back into Dynamics 365 or existing POS and inventory systems in real time.",
    intro: [
      "Retail operations live or die on inventory accuracy and store-to-corporate communication. MP365 builds Power Platform and Dynamics 365 solutions that close that gap without replacing point-of-sale systems that already work.",
    ],
    challenges: [
      "Inventory counts and store checklists still run on paper or spreadsheets",
      "Customer data spread across POS, email marketing, and CRM with no single view",
      "Seasonal staff onboarding slowed by inconsistent training and access provisioning",
      "Multi-location reporting that takes days to consolidate instead of hours",
    ],
    faqs: [
      {
        q: "Does Dynamics 365 integrate with existing POS systems?",
        a: "Dynamics 365 can integrate with most major POS platforms through standard connectors or custom Power Platform integrations, letting sales and inventory data flow into CRM and reporting without replacing the POS system itself.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}

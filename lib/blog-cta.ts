import type { BlogSection } from "./blog";

export interface InContentCta {
  badge: string;
  title: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  iconType: "calculator" | "assessment" | "blueprint" | "checklist" | "matrix" | "shield";
}

/**
 * Maps specific high-intent blog post slugs to their optimal interactive tool,
 * pricing model, assessment, or specialized service.
 */
const SPECIFIC_SLUG_CTAS: Record<string, InContentCta> = {
  // M&A Migration Cluster
  "microsoft-365-tenant-to-tenant-migration-timeline": {
    badge: "INTERACTIVE TIMELINE & SCOPE",
    title: "Planning a tenant migration around a deal deadline?",
    description:
      "Run our Tenant Migration Assessment to calculate realistic wave durations, identify identity sync dependencies, and protect Day-1 continuity.",
    primaryText: "Take Tenant Migration Assessment",
    primaryHref: "/assessments/tenant-migration/",
    secondaryText: "Or review migration pricing benchmarks",
    secondaryHref: "/pricing/tenant-migration-cost/",
    iconType: "assessment",
  },
  "microsoft-365-tenant-migration-cost-drivers": {
    badge: "TRANSPARENT PRICING MODEL",
    title: "Need an accurate budget for your M&A migration?",
    description:
      "Explore transparent fixed-price tiers broken down by mailbox volume, SharePoint storage, Teams chat history, and coexistence requirements.",
    primaryText: "View Tenant Migration Pricing",
    primaryHref: "/pricing/tenant-migration-cost/",
    secondaryText: "Or speak with a principal migration lead",
    secondaryHref: "/contact/",
    iconType: "calculator",
  },
  "cross-tenant-mailbox-migration-what-breaks": {
    badge: "CUTOVER BLUEPRINT",
    title: "Prevent cross-tenant profile & delegate failure",
    description:
      "Review our proven coexistence framework for hybrid Exchange, Outlook profile recreation, and domain cutover sequencing without downtime.",
    primaryText: "Explore M&A Migration Framework",
    primaryHref: "/services/ma-tenant-migration/",
    secondaryText: "Or schedule a scoping consultation",
    secondaryHref: "/contact/",
    iconType: "blueprint",
  },
  "teams-migration-divestiture": {
    badge: "DIVESTITURE SCOPING",
    title: "Carving out shared Teams channels and files?",
    description:
      "Our tenant assessment maps shared dependencies, guest permissions, and governance guardrails before your TSA exit date lapses.",
    primaryText: "Review Migration Assessment",
    primaryHref: "/assessments/tenant-migration/",
    secondaryText: "Or speak with a migration lead",
    secondaryHref: "/contact/",
    iconType: "assessment",
  },

  // Dynamics 365 Cluster
  "dynamics-365-business-central-vs-finance-operations": {
    badge: "ARCHITECTURE COMPARISON",
    title: "Choosing between Business Central and F&O?",
    description:
      "Examine our side-by-side matrix comparing operational complexity, warehouse scale, multi-entity consolidation, and total cost of ownership.",
    primaryText: "Compare BC vs. F&O Architectures",
    primaryHref: "/compare/business-central-vs-finance-operations/",
    secondaryText: "Or review implementation costs",
    secondaryHref: "/pricing/business-central-implementation-cost/",
    iconType: "matrix",
  },
  "dynamics-gp-end-of-support-options": {
    badge: "MIGRATION ACCELERATOR",
    title: "Ready to migrate from Dynamics GP before support ends?",
    description:
      "See how our fixed-price Business Central transition migrates historical general ledgers, subledgers, and custom reporting in 12 to 16 weeks.",
    primaryText: "View GP to BC Migration Blueprint",
    primaryHref: "/migrations/dynamics-gp-to-business-central/",
    secondaryText: "Or speak with an ERP architect",
    secondaryHref: "/contact/",
    iconType: "blueprint",
  },
  "business-central-implementation-timeline": {
    badge: "IMPLEMENTATION ESTIMATOR",
    title: "Planning a Business Central rollout?",
    description:
      "Review our fixed-fee implementation model covering core financials, supply chain, automated workflows, and data cleansing milestones.",
    primaryText: "View Implementation Pricing & Tiers",
    primaryHref: "/pricing/business-central-implementation-cost/",
    secondaryText: "Or request an ERP scoping call",
    secondaryHref: "/contact/",
    iconType: "calculator",
  },
  "copilot-in-business-central": {
    badge: "ENTERPRISE ERP SOLUTIONS",
    title: "Deploying Copilot and automation in Dynamics 365?",
    description:
      "We design clean data schemas and governance guardrails so AI assistants in Business Central draft, reconcile, and match with reliable accuracy.",
    primaryText: "Explore Dynamics 365 Consulting",
    primaryHref: "/services/dynamics-365/",
    secondaryText: "Or speak with an ERP architect",
    secondaryHref: "/contact/",
    iconType: "blueprint",
  },
  "salesforce-to-dynamics-switching-costs": {
    badge: "SWITCHING BLUEPRINT",
    title: "Evaluating a switch from Salesforce to Dynamics 365?",
    description:
      "Inspect our detailed cost model covering license savings, Dataverse entity mapping, automation rebuilds, and user adoption strategies.",
    primaryText: "See Salesforce to Dynamics 365 Blueprint",
    primaryHref: "/migrations/salesforce-to-dynamics-365/",
    secondaryText: "Or compare CRM platforms side by side",
    secondaryHref: "/compare/dynamics-365-vs-salesforce/",
    iconType: "matrix",
  },

  // Power Platform Cluster
  "power-platform-governance-checklist": {
    badge: "TECHNICAL ASSESSMENT",
    title: "Auditing your Power Platform environment risk?",
    description:
      "Take our self-serve health check covering environment sprawl, DLP policy enforcement, orphan app lifecycle, and maker licensing exposure.",
    primaryText: "Take Power Platform Health Check",
    primaryHref: "/assessments/power-platform-health-check/",
    secondaryText: "Or view Power Platform solutions",
    secondaryHref: "/services/power-platform/",
    iconType: "checklist",
  },
  "power-platform-licensing-explained": {
    badge: "GOVERNANCE & ARCHITECTURE",
    title: "Need to optimize Power Platform licensing?",
    description:
      "We audit premium connectors, Dataverse capacity, and pipeline security so your organization builds scalable apps without surprise license spikes.",
    primaryText: "Explore Power Platform Consulting",
    primaryHref: "/services/power-platform/",
    secondaryText: "Or run the governance health check",
    secondaryHref: "/assessments/power-platform-health-check/",
    iconType: "assessment",
  },

  // Data Governance Cluster
  "data-governance-gaps-ma-due-diligence": {
    badge: "COMPLIANCE & RISK",
    title: "Closing data governance gaps before a deal closes?",
    description:
      "Identify overshared links, unindexed sensitive data, and retention risks with our Microsoft Purview compliance and data discovery audit.",
    primaryText: "Explore Data Governance Solutions",
    primaryHref: "/services/data-governance/",
    secondaryText: "Or speak with a governance lead",
    secondaryHref: "/contact/",
    iconType: "shield",
  },
};

/**
 * Cluster-level intelligent defaults for newly added or unmapped posts.
 */
const CLUSTER_DEFAULTS: Record<string, InContentCta> = {
  "M&A Migration": {
    badge: "M&A MIGRATION ARCHITECTURE",
    title: "Planning a tenant-to-tenant migration?",
    description:
      "Our senior team engineers migrations backward from Day-1 and TSA dates with full coexistence and zero business interruption.",
    primaryText: "Explore M&A Migration Framework",
    primaryHref: "/services/ma-tenant-migration/",
    secondaryText: "Or calculate migration costs",
    secondaryHref: "/pricing/tenant-migration-cost/",
    iconType: "blueprint",
  },
  "Dynamics 365": {
    badge: "ERP & CRM ARCHITECTURE",
    title: "Scoping an enterprise Dynamics 365 initiative?",
    description:
      "We walk through your data, reporting, and integration dependencies before you commit to a rollout date or license tier.",
    primaryText: "View Dynamics 365 Services",
    primaryHref: "/services/dynamics-365/",
    secondaryText: "Or review implementation costs",
    secondaryHref: "/pricing/business-central-implementation-cost/",
    iconType: "calculator",
  },
  "Power Platform": {
    badge: "LOW-CODE GOVERNANCE",
    title: "Scaling Power Apps and automations safely?",
    description:
      "Establish enterprise environment tiers, automated ALM pipelines, and DLP guardrails without restricting maker productivity.",
    primaryText: "Take Power Platform Health Check",
    primaryHref: "/assessments/power-platform-health-check/",
    secondaryText: "Or explore consulting services",
    secondaryHref: "/services/power-platform/",
    iconType: "checklist",
  },
  "Data Governance": {
    badge: "PURVIEW & COMPLIANCE",
    title: "Securing your Microsoft 365 data estate?",
    description:
      "We implement sensitivity labeling, retention policies, and automated insider risk management tailored to your regulatory requirements.",
    primaryText: "View Data Governance Services",
    primaryHref: "/services/data-governance/",
    secondaryText: "Or speak with a principal architect",
    secondaryHref: "/contact/",
    iconType: "shield",
  },
};

/** Universal fallback for any unmapped post */
const UNIVERSAL_FALLBACK: InContentCta = {
  badge: "DIRECT ARCHITECT ACCESS",
  title: "Need expert guidance on your Microsoft roadmap?",
  description:
    "Speak directly with principal Microsoft architects who scope the plan, configure the tenant, and execute the delivery with zero bureaucracy.",
  primaryText: "Book a Consultation",
  primaryHref: "/contact/",
  secondaryText: "Or explore enterprise client stories",
  secondaryHref: "/case-studies/",
  iconType: "blueprint",
};

/**
 * Resolves the most relevant in-content CTA for a given blog post.
 * Uses a multi-tiered strategy:
 * 1. Exact slug match
 * 2. Keyword/intent match (pricing, compare, assessment, etc.)
 * 3. Cluster intelligent default
 * 4. Universal fallback
 */
export function getPostInContentCta(post: {
  slug: string;
  cluster: string;
  title?: string;
  excerpt?: string;
}): InContentCta {
  // 1. Direct slug match
  if (SPECIFIC_SLUG_CTAS[post.slug]) {
    return SPECIFIC_SLUG_CTAS[post.slug];
  }

  const searchable = `${post.slug} ${post.title ?? ""} ${post.excerpt ?? ""}`.toLowerCase();

  // 2. Keyword/intent heuristics for newly added articles
  if (searchable.includes("cost") || searchable.includes("pricing") || searchable.includes("budget")) {
    if (post.cluster === "Dynamics 365") {
      return SPECIFIC_SLUG_CTAS["business-central-implementation-timeline"];
    }
    return SPECIFIC_SLUG_CTAS["microsoft-365-tenant-migration-cost-drivers"];
  }

  if (searchable.includes("compare") || searchable.includes(" vs ") || searchable.includes("versus")) {
    if (searchable.includes("salesforce")) {
      return SPECIFIC_SLUG_CTAS["salesforce-to-dynamics-switching-costs"];
    }
    return SPECIFIC_SLUG_CTAS["dynamics-365-business-central-vs-finance-operations"];
  }

  if (searchable.includes("gp") || searchable.includes("great plains")) {
    return SPECIFIC_SLUG_CTAS["dynamics-gp-end-of-support-options"];
  }

  if (searchable.includes("timeline") || searchable.includes("phases") || searchable.includes("schedule")) {
    return SPECIFIC_SLUG_CTAS["microsoft-365-tenant-to-tenant-migration-timeline"];
  }

  if (searchable.includes("health check") || searchable.includes("audit") || searchable.includes("checklist")) {
    if (post.cluster === "Power Platform") {
      return SPECIFIC_SLUG_CTAS["power-platform-governance-checklist"];
    }
  }

  // 3. Cluster default
  if (CLUSTER_DEFAULTS[post.cluster]) {
    return CLUSTER_DEFAULTS[post.cluster];
  }

  // 4. Safe universal fallback
  return UNIVERSAL_FALLBACK;
}

/**
 * Determines the optimal insertion index in the sections array.
 *
 * Requirements for editorial perfection:
 * - Articles with < 3 sections should not be interrupted (returns -1).
 * - Finds a natural breathing point at ~40%-50% through the post.
 * - Prefers landing right before a major H2 section, avoiding disruption of
 *   sub-steps or tightly coupled lists.
 */
export function getCtaInsertionIndex(sections: BlogSection[]): number {
  if (sections.length < 3) {
    return -1;
  }

  // Target roughly 40-50% through the article
  const targetIndex = Math.max(1, Math.floor(sections.length * 0.45));

  // Look for an upcoming section with an H2 heading around the target index
  for (let i = targetIndex; i < sections.length - 1; i++) {
    if (sections[i + 1]?.level === 2 && sections[i + 1]?.heading) {
      return i;
    }
  }

  // If no H2 found forward, look backward
  for (let i = targetIndex - 1; i >= 1; i--) {
    if (sections[i + 1]?.level === 2 && sections[i + 1]?.heading) {
      return i;
    }
  }

  // Fallback: place after targetIndex, ensuring at least one section follows
  return Math.min(targetIndex, sections.length - 2);
}

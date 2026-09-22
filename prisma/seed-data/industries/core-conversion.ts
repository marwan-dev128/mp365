import type { Industry } from "../industries";

// Conversion-layer fields for the three industries that shipped before the
// conversion layer existed. Kept apart from their long-form content in
// ../industries.ts so the content can be regenerated wholesale without
// hand-merging these back in. Every specific here restates a claim already
// made and fact-checked on the same page.

type ConversionFields = Pick<
  Industry,
  | "proofMetrics"
  | "triggers"
  | "subSectors"
  | "relatedIndustrySlug"
  | "tool"
  | "readinessQuestions"
  | "formTopics"
  | "ctaHeading"
  | "ctaSubheading"
  | "sidebarCta"
>;

const FIRM_METRICS = [
  { value: "20+ yrs", label: "of Microsoft consulting" },
  { value: "1 day", label: "to a written reply from a senior engineer" },
  { value: "Vernon, CT", label: "serving New England and the US" },
];

export const coreConversion: Record<string, ConversionFields> = {
  manufacturing: {
    proofMetrics: [
      ...FIRM_METRICS.slice(0, 2),
      { value: "Jan 2028", label: "end of support for NAV 2018 and GP 2018" },
    ],
    formTopics: [
      "Choosing Business Central or Supply Chain Management",
      "Leaving GP, NAV or AX",
      "Acquired plant or entity to integrate",
      "Scheduling, MES or shop-floor capture",
      "Month-end close and consolidation",
    ],
    triggers: [
      {
        title: "Your legacy ERP has a support date on it",
        body: "GP, NAV 2018 or AX is running the plant and finance has been asked for a plan by the next board meeting.",
        topic: "Leaving GP, NAV or AX",
      },
      {
        title: "Two partners quoted two different products",
        body: "One says Business Central Premium, one says Supply Chain Management at twice the per-user price, and nobody has asked about your production model.",
        topic: "Choosing Business Central or Supply Chain Management",
      },
      {
        title: "An acquisition closes and the plant comes with its own ERP",
        body: "Day one puts an unpatched system inside your perimeter and another entity into a close that is already too long.",
        topic: "Acquired plant or entity to integrate",
      },
      {
        title: "The planner rebuilds the schedule in Excel",
        body: "The system plans against infinite capacity, operators are on paper travellers, and WIP reads wrong all day.",
        topic: "Scheduling, MES or shop-floor capture",
      },
    ],
    subSectors: [
      "Discrete and make-to-order manufacturers",
      "Industrial equipment and machinery",
      "Building products and materials",
      "Contract and job-shop manufacturers",
      "Multi-plant and acquisitive groups",
    ],
    relatedIndustrySlug: "logistics-supply-chain",
    tool: "cost",
    ctaHeading: "Pick the right product before anyone configures it",
    ctaSubheading:
      "Tell us your production model, entity count and support date. We will tell you which product fits and what the licence bill looks like three years out.",
    sidebarCta: {
      tag: "Manufacturing ERP",
      title: "Business Central or Supply Chain?",
      body: "One question about your production model usually settles it. Ask a senior engineer.",
      ctaText: "Get a straight answer",
    },
  },

  healthcare: {
    proofMetrics: [
      ...FIRM_METRICS.slice(0, 2),
      { value: "180 days", label: "default audit log retention in Audit (Standard)" },
    ],
    formTopics: [
      "Audit and retention evidence for HIPAA",
      "Copilot readiness and permission clean-up",
      "Practice acquisition or tenant consolidation",
      "Part 2 and behavioral health records",
    ],
    triggers: [
      {
        title: "An auditor asked for access records going back years",
        body: "The tenant holds 180 days of audit logs and the lookback is measured in years.",
        topic: "Audit and retention evidence for HIPAA",
      },
      {
        title: "An executive wants Copilot switched on",
        body: "Copilot respects permissions, which is the problem when a decade of SharePoint sharing has never been reviewed.",
        topic: "Copilot readiness and permission clean-up",
      },
      {
        title: "A practice acquisition left you with two tenants",
        body: "There is a contractual date to consolidate and no plan yet for the controls on the surviving tenant.",
        topic: "Practice acquisition or tenant consolidation",
      },
      {
        title: "Behavioral health records share a library with everything else",
        body: "42 CFR Part 2 records sit under the same permissions as general correspondence.",
        topic: "Part 2 and behavioral health records",
      },
    ],
    subSectors: [
      "Physician groups and specialty practices",
      "Behavioral health providers",
      "Community health centres",
      "Home health and post-acute care",
      "Healthcare services and billing companies",
    ],
    relatedIndustrySlug: "medical-devices",
    tool: "readiness",
    readinessQuestions: [
      {
        q: "Is your tenant still on the default audit log retention?",
        riskIfYes:
          "Access evidence older than the retention window no longer exists when an auditor or plaintiff asks for it.",
      },
      {
        q: "Is PHI shared in Teams chats or SharePoint without sensitivity labels or DLP?",
        riskIfYes: "Unclassified PHI becomes a shadow record that nobody can find, retain or defend.",
      },
      {
        q: "Are you planning Copilot before reviewing SharePoint permissions?",
        riskIfYes:
          "Copilot will surface whatever each user can already reach, including content overshared years ago.",
      },
      {
        q: "Is offboarding a manual checklist rather than an automated identity process?",
        riskIfYes: "Accounts that outlive employment are where unauthorized-access findings come from.",
      },
      {
        q: "Do Part 2 records sit under the same permissions as other clinical correspondence?",
        riskIfYes:
          "Two record classes with different disclosure rules are being governed as one, which the tenant cannot evidence.",
      },
    ],
    ctaHeading: "HIPAA in Microsoft 365 is a configuration you can evidence",
    ctaSubheading:
      "Tell us what the auditor, the deal or the executive asked for. We will tell you which controls close it and in what order.",
    sidebarCta: {
      tag: "HIPAA configuration",
      title: "Audit request with a deadline?",
      body: "Audit retention is the highest-consequence gap and the cheapest to close. Start there.",
      ctaText: "Talk to a governance lead",
    },
  },

  retail: {
    proofMetrics: FIRM_METRICS,
    formTopics: [
      "Commerce or Business Central decision",
      "Keeping our POS and fixing inventory sync",
      "Store execution and district visibility",
      "Seasonal staff access and licensing",
    ],
    triggers: [
      {
        title: "Nobody trusts the chain-wide stock number",
        body: "Each POS knows its own stock and the group total is assembled overnight from systems with different cutoffs.",
        topic: "Keeping our POS and fixing inventory sync",
      },
      {
        title: "You were quoted Dynamics 365 Commerce",
        body: "For most multi-store retailers Business Central plus the POS you already run is the better fit. Check before you sign.",
        topic: "Commerce or Business Central decision",
      },
      {
        title: "District managers drive to stores to check execution",
        body: "Store tasks live on paper and group chats, and verification cost grows with every store you open.",
        topic: "Store execution and district visibility",
      },
      {
        title: "Peak season starts in weeks",
        body: "Seasonal hires need logins on day one, the right licences, and accounts that close when they leave.",
        topic: "Seasonal staff access and licensing",
      },
    ],
    subSectors: [
      "Multi-store specialty retailers",
      "Franchise groups",
      "Retail and wholesale distributors",
      "Garden, hardware and farm stores",
      "Regional grocery and convenience",
    ],
    relatedIndustrySlug: "logistics-supply-chain",
    tool: "cost",
    ctaHeading: "One stock number the whole chain trusts",
    ctaSubheading:
      "Tell us your store count, your POS and where the numbers disagree. We will tell you whether this is an ERP project or an integration fix.",
    sidebarCta: {
      tag: "Multi-store retail",
      title: "Commerce, or Business Central and your POS?",
      body: "The answer is usually the cheaper one. A senior engineer will tell you which applies.",
      ctaText: "Ask before you sign",
    },
  },
};

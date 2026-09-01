// Sidebar CTA copy for the blog article template, one row per BlogCluster.
//
// This used to be a `CLUSTER_CTA` constant in lib/data.ts. It is content —
// the wording a reader is asked to act on — so changing "Talk to a Dynamics
// consultant" should be a content edit, not a deploy. The template reads it
// through getBlogClusterCta() and falls back to a neutral default if a row is
// missing, so a new cluster can never break a live article.

export type BlogClusterCtaSeed = {
  cluster: "M&A Migration" | "Dynamics 365" | "Power Platform" | "Data Governance";
  /** Small uppercase eyebrow above the title. */
  tag: string;
  title: string;
  body: string;
  ctaText: string;
  /** Defaults to /contact/ in the database; only set it to point elsewhere. */
  ctaHref?: string;
};

export const blogClusterCtas: BlogClusterCtaSeed[] = [
  {
    cluster: "M&A Migration",
    tag: "Migration guidance",
    title: "Working to a Day-1 or TSA-exit date?",
    body: "Tell us the deal timeline and we will tell you whether the migration plan fits it.",
    ctaText: "Talk to a migration lead",
  },
  {
    cluster: "Dynamics 365",
    tag: "Dynamics 365",
    title: "Scoping a Dynamics 365 move?",
    body: "We will walk your automation, reporting and integration inventory before you commit to a date.",
    ctaText: "Talk to a Dynamics consultant",
  },
  {
    cluster: "Power Platform",
    tag: "Power Platform",
    title: "Governing Power Platform at scale?",
    body: "Environment strategy, DLP and app lifecycle review, without slowing your makers down.",
    ctaText: "Talk to a governance lead",
  },
  {
    cluster: "Data Governance",
    tag: "Data governance",
    title: "Need the data picture before you commit?",
    body: "Purview, DLP and retention assessed against what your deal or audit actually requires.",
    ctaText: "Talk to a governance lead",
  },
];

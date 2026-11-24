// The shape of a Dynamics 365 tier comparison page. These pages sit outside the
// menu and outside content/site-data.json: they are reached through internal
// links from the service pages and the blog. Facts come from Microsoft's
// Dynamics 365 Licensing Guide and Microsoft Learn, dated in `reviewed`.
import type { Faq } from "../types";

/** A cell in the feature matrix: included, not included, or a short qualifier. */
export type TierCell = true | false | string;

export type TierInfo = {
  id: string;
  /** Short name, such as "Professional". */
  name: string;
  /** Phone-width label for the matrix header, such as "Pro". */
  shortName?: string;
  /** Microsoft's own positioning line, quoted. */
  quote: string;
  /** One line on the job this tier does. */
  role: string;
  pickWhen: string[];
  thinkTwice: string;
  /** Shown on the highlighted tier only. */
  badge?: string;
};

export type FinderOption = {
  label: string;
  /** Index of the lowest tier that covers this answer. */
  needs: number;
  /** Why the answer needs that tier, shown in the result. */
  why?: string;
};

export type FinderQuestion = { id: string; label: string; options: FinderOption[] };

export type TierPage = {
  path: string;
  /** The full <title>, at most 60 characters. */
  title: string;
  /** 120 to 155 characters. */
  description: string;
  h1: string;
  primaryKeyword: string;
  breadcrumbs: { name: string; path: string }[];
  /** 1 to 3 sentences, answer first. */
  intro: string;
  /** Month and year the facts were checked, such as "November 2026". */
  reviewed: string;
  /** ISO date of that check, for structured data. */
  reviewedIso: string;
  sources: { label: string; href: string }[];
  /** Microsoft's own price page, linked instead of quoting prices. */
  priceHref: string;
  product: string;
  tiers: TierInfo[];
  /** The tier the matrix and cards highlight. */
  highlight: number;
  /** Answer-first summary, one line per tier, for readers and answer engines. */
  shortAnswer: { heading: string; items: string[] };
  /** The product's page on microsoft.com, for the schema's `about` entity. */
  productHref: string;
  overview: { heading: string; intro: string };
  ladder: { heading: string; intro: string; steps: { title: string; items: string[] }[] };
  finder: { heading: string; intro: string; questions: FinderQuestion[] };
  matrix: { heading: string; intro: string; groups: { title: string; rows: { feature: string; note?: string; cells: TierCell[] }[] }[] };
  outgrow: { heading: string; intro: string; cards: { title: string; body: string }[] };
  rules: { heading: string; intro: string; items: { title: string; body: string }[]; stepsHeading: string; steps: { name: string; description: string }[] };
  ai: { heading: string; intro: string; columns: string[] };
  setup: { heading: string; intro: string; cards: { title: string; body: string; href: string; linkText: string }[] };
  related: { heading: string; links: { href: string; title: string; body: string }[] };
  faqs: Faq[];
  closing: string;
  cta: { heading: string; body: string; text: string };
};

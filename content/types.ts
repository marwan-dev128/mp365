// The shape of one page's written content. URLs, keywords, titles, descriptions,
// H1s and breadcrumbs live in content/site-data.json; the copy lives here, one
// file per page under content/pages/, so it can be edited without touching code.
import type { MarketingBlock } from "../lib/marketing-blocks";

export type Faq = { q: string; a: string };

/** A block in reading order. `level: 3` renders an H3 under the preceding H2. */
export type ContentBlock = MarketingBlock & { level?: 2 | 3 };

export type AtAGlance = {
  bestFor: string;
  includes: string;
  notIncluded: string;
  howItStarts: string;
  /** Omitted until the client confirms a figure. */
  typicalTimeline?: string;
};

export type PageContent = {
  /** Must match a `path` in content/site-data.json exactly. */
  path: string;
  /** Opening paragraph, 1 to 3 sentences, shown directly under the H1. */
  intro: string;
  /** Service pages only: the same labels on every page. */
  atAGlance?: AtAGlance;
  blocks: ContentBlock[];
  faqs: Faq[];
  /** Closing paragraph, placed before the call to action. */
  closing: string;
  /** Closing call to action. Always links to /contact/. */
  cta: { heading: string; body: string; text: string };
};

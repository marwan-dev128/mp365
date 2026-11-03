type Faq = { q: string; a: string };
import type { MarketingBlock } from "../../lib/marketing-blocks";

// Blog content. Empty until the existing posts are imported from the live site.

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  cluster: "M&A Migration" | "Dynamics 365" | "Power Platform" | "Data Governance";
  authorSlug: "mp365-team";
  datePublished: string; // ISO
  dateModified: string; // ISO
  excerpt: string;
  // Hero artwork, shown inside the article banner and reused as the og:image
  // and BlogPosting.image. Omit it and the post falls back to the site's
  // branded OG card, exactly as every post did before the column existed.
  imageUrl?: string;
  // Alt text for `imageUrl`. Omitted throughout this file on purpose: the
  // site's photography is generic office stock reused across pages, so it
  // carries no information the adjacent H1 does not already state. The
  // template then renders an empty alt attribute, which is the correct
  // treatment for a decorative image. Set this only where an image genuinely
  // says something the copy does not.
  //
  // Line comments, not a JSDoc block: lib/richtext-parse.test.ts scans this
  // file's raw source for unbalanced inline markup, and the leading slash-star
  // of a doc comment reads to it as an unclosed bold token.
  imageAlt?: string;
  // Ordered typed blocks, the same union Solution.blocks and
  // MarketingPage.sections use. `level: 3` renders an H3 under the preceding
  // H2 and indents its table-of-contents entry.
  body: (MarketingBlock & { level?: 2 | 3 })[];
  faqs: Faq[];
};

export const blogPosts: BlogPost[] = [];

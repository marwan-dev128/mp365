import { stripInlineMarkup } from "./richtext";
import type { MarketingBlock } from "./marketing-blocks";

// Blog article utilities — heading IDs, table of contents, and reading time.
//
// These are template-level, not per-post: every blog route derives its TOC,
// anchors and reading time from the CMS body through here, so a new post
// picks all three up with no extra authoring.
//
// The single most important invariant: the IDs rendered onto the <h2>/<h3>
// elements and the IDs the table of contents links to come from ONE pass
// (buildSections) rather than from two independent slugify calls. Two passes
// drift the moment a post has duplicate headings — the deduped "-2" suffix
// would land on one side only, and the TOC would link to nothing.

/**
 * A body block as stored in BlogPost.body — the same typed-block union that
 * Solution.blocks, Industry.blocks and MarketingPage.sections use, so a blog
 * post can carry a comparison table or a numbered process without inventing a
 * second vocabulary for the same shapes.
 *
 * `level` is blog-specific: articles are long enough to want an H3 tier under
 * an H2, which landing pages are not.
 */
export type BlogBodyBlock = MarketingBlock & { level?: 2 | 3 };

/** A body block after ID assignment. `headingId` is set iff `heading` is. */
export type BlogSection = BlogBodyBlock & { headingId?: string; level: 2 | 3 };

export type TocItem = { id: string; label: string; level: 2 | 3 };

/**
 * IDs already used by the page shell. A heading called "Main content" would
 * otherwise mint `id="main-content"`, duplicating the skip-link target in
 * app/layout.tsx — a real duplicate-ID accessibility failure, and the skip
 * link would start jumping into the article.
 */
const RESERVED_IDS = new Set([
  "main-content",
  "article-top",
  "article-body",
  "faq-heading",
  "toc-heading",
  "toc-heading-mobile",
]);

/**
 * A URL-fragment-safe slug for a heading. Inline markup is stripped first so
 * a heading like `**Cost** of [switching](/x/)` yields `cost-of-switching`
 * rather than leaking asterisks and paths into the anchor.
 */
export function slugifyHeading(text: string): string {
  return stripInlineMarkup(text)
    .normalize("NFKD")
    // Strip combining marks so "Café" → "cafe" instead of "caf".
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    // Curly quotes/apostrophes vanish rather than becoming separators, so
    // "don't" → "dont", not "don-t".
    .replace(/['\u2018\u2019\u02bc]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64)
    .replace(/-+$/g, "");
}

export function parseBlogBody(body: unknown): BlogBodyBlock[] {
  return Array.isArray(body) ? (body as BlogBodyBlock[]) : [];
}

/** Every rendered string in a block, flattened — used for word count. */
function blockStrings(block: BlogBodyBlock): string[] {
  const out: string[] = [block.heading ?? ""];
  switch (block.type) {
    case "prose":
      out.push(...block.paragraphs);
      break;
    case "list":
      out.push(...block.items);
      break;
    case "steps":
      for (const s of block.steps) out.push(s.name, s.description);
      break;
    case "table":
      out.push(...block.headers, ...block.rows.flat());
      break;
    case "price-range":
      for (const t of block.tiers) out.push(t.label, t.range, t.note ?? "");
      if (block.disclaimer) out.push(block.disclaimer);
      break;
  }
  return out;
}

/**
 * Assigns a stable, unique DOM id to every block that has a heading.
 *
 * Uniqueness is enforced against both the reserved shell IDs and the IDs
 * already handed out within this article, so a post that repeats a heading
 * (or whose headings all slugify to nothing, e.g. "1.", "2.") still emits
 * valid, individually addressable anchors.
 */
export function buildSections(blocks: BlogBodyBlock[]): BlogSection[] {
  const used = new Set(RESERVED_IDS);

  return blocks.map((block, i) => {
    const level: 2 | 3 = block.level === 3 ? 3 : 2;
    if (!block.heading) return { ...block, level };

    const base = slugifyHeading(block.heading) || `section-${i + 1}`;
    let id = base;
    for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    used.add(id);

    return { ...block, level, headingId: id };
  });
}

export function tocFromSections(sections: BlogSection[]): TocItem[] {
  return sections
    .filter((s): s is BlogSection & { heading: string; headingId: string } =>
      Boolean(s.heading && s.headingId)
    )
    .map((s) => ({ id: s.headingId, label: stripInlineMarkup(s.heading), level: s.level }));
}

/**
 * Words across every rendered string in the body — headings, paragraphs and
 * list items — with inline markup flattened first so `[label](/path/)` counts
 * as its visible label and not as its URL.
 */
export function countWords(blocks: BlogBodyBlock[]): number {
  let words = 0;
  for (const block of blocks) {
    for (const s of blockStrings(block)) {
      const flat = stripInlineMarkup(s).trim();
      if (flat) words += flat.split(/\s+/).length;
    }
  }
  return words;
}

/** Average adult reading speed for non-fiction prose. */
export const WORDS_PER_MINUTE = 225;

export type ReadingTime = {
  words: number;
  minutes: number;
  /** Human label, e.g. "4 min read". */
  text: string;
  /** ISO-8601 duration for schema.org `timeRequired`, e.g. "PT4M". */
  iso: string;
};

export function readingTime(blocks: BlogBodyBlock[]): ReadingTime {
  const words = countWords(blocks);
  // Never advertise "0 min read" for a short post.
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return { words, minutes, text: `${minutes} min read`, iso: `PT${minutes}M` };
}

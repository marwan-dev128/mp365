// The plan's page-level QA (content/BUILD-INSTRUCTIONS.md, Section 9) as code.
// Used by lib/site-content.test.ts and by scripts/check-page.ts.
import type { ContentBlock, PageContent } from "../content/types";
import { childrenOf, getSitePage, LIVE_PATHS } from "./site-data";
import { inlineTokenPattern, stripInlineMarkup } from "./richtext";

const words = (s: string) => stripInlineMarkup(s).trim().split(/\s+/).filter(Boolean).length;
const norm = (s: string) =>
  stripInlineMarkup(s).toLowerCase().replace(/[-‐-―]/g, " ").replace(/\s+/g, " ");
const hasMarkup = (s: string) => inlineTokenPattern().test(s);
const linksIn = (s: string) =>
  [...s.matchAll(inlineTokenPattern())].map((m) => m[2]).filter(Boolean) as string[];

// Facts the client has not confirmed, or asked us to leave out.
const BANNED: [RegExp, string][] = [
  [/\bMP365\b/, 'brand is written "MP-365"'],
  [
    /\bsince (2005|2010)\b|\bfounded\b|\b\d+\+? ?(years|yrs)\b( of| in| with)?( experience| Microsoft| Dynamics)?/i,
    "no founding date or years of experience",
  ],
  [/\breviewed by\b/i, "no reviewer line"],
  [/\b\d+\+? hours (a|per) week\b/i, "Dedicated hours are unconfirmed"],
  [/\bnot billed\b|\bat no charge\b|\b(first|for) 8 hours\b|\bunder (2|two) hours\b/i, "offers are unconfirmed"],
  [/\b(4 to 8|0 to 4) hours?\b/i, "response times are unconfirmed"],
  [/\b\d+( to \d+)? (weeks?|months?)\b/i, "timelines are unconfirmed; write the copy without the figure"],
  [/[$£€]\s?\d/, "no prices"],
  // The client confirmed one offer: a free consultation. "free" stays banned everywhere else.
  [
    /\bfree\b(?! (?:[a-z&]+ ){0,3}consultation\b)|\bguaranteed?\b|#1\b|\bbest-in-class\b|\bcutting-edge\b|\bworld-class\b/i,
    "banned claim wording",
  ],
  [/\bkey takeaways\b|\bTBD\b|\[CLIENT|in today's fast-paced|have you ever wondered/i, "banned filler or placeholder"],
  [/\bGoogle Workspace\b|\bContact Center\b|\bField Service\b|\bpenetration test/i, "out-of-scope service"],
  [
    /\b(implement|configur|deploy|customi[sz]|migrat)\w*\b[^.]{0,50}\b(Business Central|Finance and Operations|Supply Chain Management|Dynamics GP|NetSuite|Sage)\b/i,
    "ERP is integration only",
  ],
  [/\bMP-365\b[^.]{0,60}\b(HIPAA|FedRAMP|CMMC|SOC ?2|ISO ?27001)[- ]?(compliant|certified|authori[sz]ed)\b/i, "no compliance claims"],
  [/—/, "no em dashes"],
];

// The client does no ERP work, so Solutions and Industries do not mention it at all.
const ERP_TERMS =
  /\bERPs?\b|\bBusiness Central\b|\bFinance and Operations\b|\bSupply Chain Management\b|\bDynamics GP\b|\bNetSuite\b|\bSAP\b|\bSage\b/;

const VAGUE_HEADING = /^(overview|more info|introduction|other|summary|details|about)$/i;

function blockText(b: ContentBlock): string[] {
  switch (b.type) {
    case "prose":
      return b.paragraphs;
    case "list":
      return b.items;
    case "steps":
      return b.steps.flatMap((s) => [s.name, s.description]);
    case "table":
      return [...b.headers, ...b.rows.flat()];
    default:
      return [];
  }
}

export function pageText(page: PageContent): string[] {
  return [
    page.intro,
    page.closing,
    page.cta.heading,
    page.cta.body,
    page.cta.text,
    ...Object.values(page.atAGlance ?? {}),
    ...(page.triggers ?? []).flatMap((t) => [t.title, t.body]),
    ...Object.values(page.childSummaries ?? {}),
    ...page.blocks.flatMap((b) => [b.heading ?? "", ...blockText(b)]),
    ...page.faqs.flatMap((f) => [f.q, f.a]),
  ];
}

export function pageLinks(page: PageContent): string[] {
  return linksIn(pageText(page).join("\n"));
}

export function validatePage(page: PageContent): string[] {
  const errs: string[] = [];
  const ok = (c: unknown, m: string) => {
    if (!c) errs.push(m);
  };
  const plan = getSitePage(page.path);
  const isContact = page.path === "/contact/";
  const isService = plan.type === "Service";
  const isSolutionOrIndustry =
    plan.type === "Solution" || plan.type === "Industry" || page.path === "/solutions/" || page.path === "/industries/";

  const allText = pageText(page);
  const blob = allText.join("\n");

  // Opening and keyword placement.
  const kw = norm(plan.primary_keyword);
  const sentences = stripInlineMarkup(page.intro).split(/(?<=[.?!])\s+/).filter(Boolean);
  ok(sentences.length >= 1 && sentences.length <= 3, `intro has ${sentences.length} sentences, want 1 to 3`);
  ok(norm(page.intro).includes(kw), `intro must contain the primary keyword "${plan.primary_keyword}"`);
  ok(norm(page.closing).includes(kw), `closing must contain the primary keyword "${plan.primary_keyword}"`);
  const headings = page.blocks.map((b) => b.heading ?? "").filter(Boolean);
  ok(isContact || headings.some((h) => norm(h).includes(kw)), `at least one heading must contain "${plan.primary_keyword}"`);
  ok(words(plan.h1) <= 10, `h1 "${plan.h1}" is over 10 words`);

  // Headings.
  for (const h of headings) {
    ok(!hasMarkup(h), `markup in heading "${h}"`);
    ok(!VAGUE_HEADING.test(h.trim()), `vague heading "${h}"`);
    ok(words(h) <= 12, `heading too long: "${h}"`);
    ok(!/frequently asked questions/i.test(h), `the template renders the FAQ heading: "${h}"`);
  }
  let h3Run = 0;
  page.blocks.forEach((b, i) => {
    ok(b.heading, `block ${i} has no heading`);
    if (b.level === 3) {
      h3Run++;
      const next = page.blocks[i + 1];
      if (!next || next.level !== 3) {
        ok(h3Run >= 2, `block ${i}: use at least two H3s under an H2, or none`);
        h3Run = 0;
      }
    }
  });
  ok(page.blocks[0]?.level !== 3, "first block cannot be an H3");
  for (const b of page.blocks) {
    if (b.type === "table") {
      ok(b.headers.length >= 2 && b.headers.length <= 6, `table "${b.heading}" needs 2 to 6 columns`);
      for (const h of b.headers) ok(!hasMarkup(h), `markup in table header "${h}"`);
      for (const r of b.rows) {
        ok(r.length === b.headers.length, `table "${b.heading}": row length differs from headers`);
        for (const c of r) ok(c.trim(), `table "${b.heading}": empty cell`);
      }
    }
    if (b.type === "steps") {
      ok(b.steps.length >= 3 && b.steps.length <= 10, `steps "${b.heading}" has ${b.steps.length} steps`);
      for (const s of b.steps) ok(!hasMarkup(s.name), `markup in step name "${s.name}"`);
    }
    if (b.type === "list") {
      ok(b.items.length >= 3 && b.items.length <= 8, `list "${b.heading}" has ${b.items.length} items, want 3 to 8`);
    }
    ok(b.type !== "price-range", "no price-range blocks");
  }

  // FAQs.
  // 6 to 10 per the SEO team's feedback, which replaces the plan's "at least 10".
  ok(page.faqs.length >= 6 && page.faqs.length <= 10, `${page.faqs.length} FAQs, want 6 to 10`);
  for (const f of page.faqs) {
    const n = words(f.a);
    ok(n >= 30 && n <= 75, `FAQ answer is ${n} words, want about 40 to 60: "${f.q}"`);
    ok(f.q.trim().endsWith("?"), `FAQ question must end with ?: "${f.q}"`);
    ok(!hasMarkup(f.q), `markup in FAQ question: "${f.q}"`);
    ok(linksIn(f.a).length <= 2, `more than two links in FAQ answer: "${f.q}"`);
  }

  // Service pages.
  if (isService) {
    ok(page.atAGlance, "service pages need atAGlance");
    ok(page.atAGlance?.notIncluded, "atAGlance.notIncluded is required");
  } else {
    ok(!page.atAGlance, "only service pages use atAGlance");
  }

  // Links.
  const links = linksIn(blob);
  for (const href of links) {
    ok(LIVE_PATHS.has(href), `link to "${href}", which is not a live page`);
    ok(href !== page.path, `page links to itself: ${href}`);
  }
  if ((isService || plan.type === "Solution" || plan.type === "Industry") && plan.parent_path) {
    ok(links.includes(plan.parent_path), `link up to the parent ${plan.parent_path} in body text`);
  }
  for (const child of childrenOf(page.path)) {
    ok(links.includes(child.path), `link to child page ${child.path}`);
  }

  // Banned wording, ignoring URLs.
  const plain = allText.map(stripInlineMarkup).join("\n");
  for (const [re, why] of BANNED) {
    const m = plain.match(re);
    ok(!m, `${why}: "${m?.[0]}"`);
  }
  ok(!/&amp;|&lt;|&gt;/.test(blob), "HTML entity in copy");

  // Solutions and Industries.
  if (isSolutionOrIndustry) {
    const erp = plain.match(ERP_TERMS);
    ok(!erp, `no ERP on Solutions or Industries: "${erp?.[0]}"`);
    ok(page.blocks.some((b) => b.type === "table"), "needs a table");
  }
  if (plan.type === "Industry") {
    ok((page.triggers?.length ?? 0) === 4, `${page.triggers?.length ?? 0} triggers, want 4`);
  } else {
    ok(!page.triggers, "only industry pages use triggers");
  }
  if (page.path === "/solutions/" || page.path === "/industries/") {
    for (const child of childrenOf(page.path)) {
      ok(page.childSummaries?.[child.path], `childSummaries needs ${child.path}`);
    }
  } else {
    ok(!page.childSummaries, "only the Solutions and Industries overviews use childSummaries");
  }
  return errs;
}

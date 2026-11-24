// Regenerates public/llms.txt and public/llms-full.txt from content/, so the
// LLM-readable versions can never drift from the pages. Runs on `prebuild`.
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { PAGE_CONTENT } from "../content/pages";
import { TIER_PAGES } from "../content/tiers";
import type { TierCell, TierPage } from "../content/tiers/types";
import type { ContentBlock } from "../content/types";
import { SITE_URL } from "../lib/config";
import { stripInlineMarkup } from "../lib/richtext";
import { CATEGORY_PAGES, childrenOf, getSitePage, SITE } from "../lib/site-data";

const plain = stripInlineMarkup;

function blockLines(b: ContentBlock): string[] {
  const out = [`### ${plain(b.heading ?? "")}`];
  switch (b.type) {
    case "prose":
      out.push(...b.paragraphs.map(plain));
      break;
    case "list":
      out.push(...b.items.map((i) => `- ${plain(i)}`));
      break;
    case "steps":
      out.push(...b.steps.map((s, i) => `${i + 1}. ${plain(s.name)}: ${plain(s.description)}`));
      break;
    case "table":
      out.push(b.headers.map(plain).join(" | "));
      out.push(...b.rows.map((r) => r.map(plain).join(" | ")));
      break;
  }
  out.push("");
  return out;
}

const INTRO =
  "MP-365 (Modern Partners 365) is a Microsoft Solutions Partner that helps mid-size and enterprise companies get more out of Dynamics 365, Microsoft 365 and Copilot.";

function short() {
  const lines = ["# MP-365", "", `> ${INTRO}`, "", "## Services", ""];
  lines.push(`- [All services](${SITE_URL}/services/)`);
  for (const c of CATEGORY_PAGES) {
    lines.push(`- [${c.name}](${SITE_URL}${c.path})`);
    for (const s of childrenOf(c.path)) lines.push(`  - [${s.name}](${SITE_URL}${s.path})`);
  }
  for (const [title, hub] of [["Solutions", "/solutions/"], ["Industries", "/industries/"]]) {
    lines.push("", `## ${title}`, "", `- [${getSitePage(hub).name}](${SITE_URL}${hub})`);
    for (const s of childrenOf(hub)) lines.push(`  - [${s.name}](${SITE_URL}${s.path})`);
  }
  lines.push("", "## Compare tiers", "");
  for (const t of TIER_PAGES) lines.push(`- [${t.h1}](${SITE_URL}${t.path}): ${plain(t.description)}`);
  lines.push("", "## Company", "");
  for (const path of ["/clients/", "/pricing/", "/about/", "/contact/", "/blog/"]) {
    lines.push(`- [${getSitePage(path).name}](${SITE_URL}${path})`);
  }
  lines.push("", "## Not offered", "", ...SITE.out_of_scope_services.map((s) => `- ${s}`), "");
  return lines.join("\n");
}

const cell = (c: TierCell) => (c === true ? "Yes" : c === false ? "No" : c);

function tierLines(t: TierPage): string[] {
  const names = t.tiers.map((x) => x.name);
  const out = [`## ${t.h1}`, `URL: ${SITE_URL}${t.path}`, `Last reviewed: ${t.reviewed}`, "", plain(t.intro), ""];
  out.push(`### ${plain(t.shortAnswer.heading)}`, ...t.shortAnswer.items.map((i) => `- ${plain(i)}`), "");
  for (const x of t.tiers) out.push(`### ${t.product} ${x.name}`, `Microsoft: "${x.quote}"`, plain(x.role), ...x.pickWhen.map((p) => `- Pick it when: ${plain(p)}`), `- Think twice if: ${plain(x.thinkTwice)}`, "");
  out.push(`### ${plain(t.matrix.heading)}`, ["Feature", ...names].join(" | "));
  for (const g of t.matrix.groups) for (const r of g.rows) out.push([`${g.title}: ${r.feature}`, ...r.cells.map(cell)].join(" | "));
  out.push("", `### ${plain(t.outgrow.heading)}`, ...t.outgrow.cards.map((c) => `- ${plain(c.title)}: ${plain(c.body)}`), "");
  out.push(`### ${plain(t.rules.heading)}`, ...t.rules.items.map((r) => `- ${plain(r.title)}: ${plain(r.body)}`));
  out.push(`${plain(t.rules.stepsHeading)}:`, ...t.rules.steps.map((st, i) => `${i + 1}. ${plain(st.name)}: ${plain(st.description)}`), "");
  out.push(`### ${plain(t.ai.heading)}`, ...t.ai.columns.map((c, i) => `- ${names[i]}: ${plain(c)}`), "");
  out.push("### Frequently Asked Questions");
  for (const f of t.faqs) out.push(`Q: ${plain(f.q)}`, `A: ${plain(f.a)}`);
  out.push("", `Sources: ${t.sources.map((x) => `${x.label} (${x.href})`).join("; ")}`, "", plain(t.closing), "");
  return out;
}

function full() {
  const lines = ["# MP-365: full content", "", INTRO, ""];
  for (const page of PAGE_CONTENT) {
    const plan = getSitePage(page.path);
    lines.push(`## ${plan.h1}`, `URL: ${SITE_URL}${page.path}`, "", plain(page.intro), "");
    if (page.atAGlance) {
      for (const [k, v] of Object.entries(page.atAGlance)) lines.push(`${k}: ${plain(v as string)}`);
      lines.push("");
    }
    for (const b of page.blocks) lines.push(...blockLines(b));
    lines.push("### Frequently Asked Questions");
    for (const f of page.faqs) lines.push(`Q: ${plain(f.q)}`, `A: ${plain(f.a)}`);
    lines.push("", plain(page.closing), "");
  }
  for (const t of TIER_PAGES) lines.push(...tierLines(t));
  return lines.join("\n");
}

writeFileSync(join(process.cwd(), "public/llms.txt"), short());
writeFileSync(join(process.cwd(), "public/llms-full.txt"), full());
console.log("Wrote public/llms.txt and public/llms-full.txt");

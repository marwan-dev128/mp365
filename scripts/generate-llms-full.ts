// Regenerates public/llms-full.txt from the database (via lib/data.ts), so
// the flattened LLM-readable dump can never drift out of sync with the
// pages themselves. Run via `npm run generate:llms` (wired into `prebuild`,
// so it also runs automatically before every `next build`) — requires
// DATABASE_URL to be reachable at build time.
import "dotenv/config";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  getSiteSettings,
  getServices,
  getSolutions,
  getIndustries,
  getCaseStudies,
  getGlossaryTerms,
  getMarketingPages,
  MARKETING_HUBS,
  HUB_LABELS,
} from "../lib/data";
import { stripInlineMarkup } from "../lib/richtext";

async function main() {
  const [settings, services, solutions, industries, caseStudies, glossaryTerms, marketingByHub] =
    await Promise.all([
      getSiteSettings(),
      getServices(),
      getSolutions(),
      getIndustries(),
      getCaseStudies(),
      getGlossaryTerms(),
      Promise.all(MARKETING_HUBS.map((hub) => getMarketingPages(hub))),
    ]);

  const lines: string[] = [];
  // llms-full.txt is a PLAIN-TEXT surface. Authored copy carries the inline
  // markup defined in lib/richtext.ts, so every line is flattened on the way
  // in — otherwise the dump ships literal `[label](/path/)` and `**` to every
  // model that reads it, which is exactly the audience this file exists for.
  const push = (s = "") => lines.push(stripInlineMarkup(s));

  push(`# ${settings.brandName} — Full Site Content`);
  push();
  push(settings.description);
  push();
  push(
    `Legal name: ${settings.legalName}. Address: ${settings.street}, ${settings.city}, ${settings.region} ${settings.postalCode}. Phone: ${settings.phoneDisplay}. Email: ${settings.email}. Serves: ${settings.areaServed.join(", ")}.`
  );
  push();

  push("## Services");
  for (const s of services) {
    push();
    push(`### ${s.name}`);
    push(`Q: ${s.heroQuestion}`);
    push(`A: ${s.heroAnswer}`);
    for (const p of s.intro) push(p);
    for (const sec of s.sections) {
      push(`#### ${sec.heading}`);
      for (const p of sec.body) push(p);
    }
    if (s.faqs.length) {
      push("FAQ:");
      for (const f of s.faqs) push(`- Q: ${f.q}\n  A: ${f.a}`);
    }
  }

  push();
  push("## Solutions");
  for (const s of solutions) {
    push();
    push(`### ${s.name}`);
    push(`Q: ${s.heroQuestion}`);
    push(`A: ${s.heroAnswer}`);
  }

  push();
  push("## Industries");
  for (const i of industries) {
    push();
    push(`### ${i.name}`);
    push(`Q: ${i.heroQuestion}`);
    push(`A: ${i.heroAnswer}`);
  }

  if (caseStudies.length) {
    push();
    push("## Case Studies");
    for (const c of caseStudies) {
      push();
      push(`### ${c.client} (${c.industryLabel})`);
      push(c.summary);
    }
  }

  push();
  push("## Glossary");
  for (const t of glossaryTerms) {
    push();
    push(`### ${t.term}`);
    push(t.shortDefinition);
  }

  for (const [i, hub] of MARKETING_HUBS.entries()) {
    const pages = marketingByHub[i];
    if (!pages.length) continue;
    push();
    push(`## ${HUB_LABELS[hub]}`);
    for (const p of pages) {
      push();
      push(`### ${p.name}`);
      push(`Q: ${p.heroQuestion}`);
      push(`A: ${p.heroAnswer}`);
    }
  }

  const outPath = join(process.cwd(), "public", "llms-full.txt");
  writeFileSync(outPath, lines.join("\n") + "\n", "utf-8");
  console.log(`Wrote ${outPath}`);
}

main()
  .catch((e) => {
    console.warn(
      "Warning: Could not regenerate public/llms-full.txt from database. Preserving existing file.",
      e instanceof Error ? e.message : e
    );
    process.exit(0);
  })
  .finally(() => process.exit(0));

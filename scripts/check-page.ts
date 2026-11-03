// Validates page content against the plan.
// Usage: npx tsx scripts/check-page.ts [id ...]   (no ids: every file in content/pages/)
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { validatePage } from "../lib/site-content-rules";

const dir = join(process.cwd(), "content/pages");
const ids = process.argv.slice(2);
const targets = ids.length
  ? ids
  : readdirSync(dir)
      .filter((f) => f.endsWith(".ts") && f !== "index.ts")
      .map((f) => f.replace(/\.ts$/, ""));

async function main() {
  let failed = 0;
  for (const id of targets) {
    const { page } = await import(pathToFileURL(join(dir, `${id}.ts`)).href);
    const errs = validatePage(page);
    if (errs.length) failed++;
    console.log(errs.length ? `FAIL ${id}\n  - ${errs.join("\n  - ")}` : `PASS ${id}`);
  }
  process.exit(failed ? 1 : 0);
}
main();

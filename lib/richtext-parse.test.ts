import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { stripInlineMarkup } from "./richtext";

// RichText is a .tsx React component, so rather than importing JSX into the
// node test runner we re-derive its token grammar here and assert the seeded
// content actually matches it. The regression this guards: blog list items
// used to render `{item}` directly, printing raw `**bold**` and `[label](/x/)`
// onto three live articles and silently dropping two internal links.
const TOKEN = /\[([^\]]+)\]\((\/[^)]*)\)|\*\*([^*]+)\*\*/g;

function unparsedMarkup(text: string): string[] {
  // Repeat until stable: bold can wrap a link, so one pass isn't enough.
  let stripped = text;
  for (let i = 0; i < 5; i++) {
    const next = stripped.replace(TOKEN, "");
    if (next === stripped) break;
    stripped = next;
  }
  const leftovers: string[] = [];
  if (/\*\*/.test(stripped)) leftovers.push("unclosed **");
  if (/\[[^\]]*\]\(/.test(stripped)) leftovers.push("unparsed link");
  return leftovers;
}

test("the token grammar matches both inline forms", () => {
  const out = [...`See [the guide](/blog/x/) and **note this**`.matchAll(TOKEN)];
  assert.equal(out.length, 2);
  assert.equal(out[0][1], "the guide");
  assert.equal(out[0][2], "/blog/x/");
  assert.equal(out[1][3], "note this");
});

test("a link nested inside bold is flattened, not left as raw syntax", () => {
  // Regression: the bold branch consumes the whole span including the link,
  // so a single strip pass published `[Data policies](/x/)` into JSON-LD.
  const nested = "**[Data policies](/resources/glossary/x/) are not exfiltration control.**";
  assert.equal(stripInlineMarkup(nested), "Data policies are not exfiltration control.");
  assert.deepEqual(unparsedMarkup(nested), []);
});

test("every seeded blog string is fully parseable — no leftover raw markup", () => {
  const src = readFileSync(join(process.cwd(), "prisma/seed-data/blog.ts"), "utf8");
  // Pull every double-quoted string in the seed file; good enough to catch
  // authored copy carrying syntax the renderer cannot handle.
  const strings = src.match(/"(?:[^"\\]|\\.){20,}"/g) ?? [];
  assert.ok(strings.length > 50, "expected to find seeded copy to check");

  const bad: string[] = [];
  for (const raw of strings) {
    const text = raw.slice(1, -1);
    const issues = unparsedMarkup(text);
    if (issues.length) bad.push(`${issues.join(", ")} in: ${text.slice(0, 70)}…`);
  }
  assert.deepEqual(bad, [], `unparseable inline markup found:\n${bad.join("\n")}`);
});

import { test } from "node:test";
import assert from "node:assert/strict";
import {
  buildSections,
  countWords,
  readingTime,
  slugifyHeading,
  tocFromSections,
  parseBlogBody,
} from "./blog";

// The TOC and the rendered headings must always agree. These tests pin the
// three ways that can break: duplicate headings, headings that slugify to
// nothing, and headings that collide with the page shell's own element IDs.

test("slugifies a heading, dropping inline markup and punctuation", () => {
  assert.equal(
    slugifyHeading("1. Automation rebuild — the **long** pole"),
    "1-automation-rebuild-the-long-pole"
  );
  assert.equal(
    slugifyHeading("See the [Dynamics 365 comparison](/compare/dynamics-365-vs-salesforce/)"),
    "see-the-dynamics-365-comparison"
  );
});

test("apostrophes close up rather than becoming separators", () => {
  assert.equal(slugifyHeading("Don’t rebuild what you don't read"), "dont-rebuild-what-you-dont-read");
});

test("accented headings keep their base letters", () => {
  assert.equal(slugifyHeading("Café résumé"), "cafe-resume");
});

test("duplicate headings get distinct ids and the TOC follows them", () => {
  const sections = buildSections([
    { type: "prose", heading: "Costs", paragraphs: ["a"] },
    { type: "prose", heading: "Costs", paragraphs: ["b"] },
    { type: "prose", heading: "Costs", paragraphs: ["c"] },
  ]);
  assert.deepEqual(
    sections.map((s) => s.headingId),
    ["costs", "costs-2", "costs-3"]
  );
  assert.deepEqual(
    tocFromSections(sections).map((t) => t.id),
    ["costs", "costs-2", "costs-3"]
  );
});

test("headings that slugify to nothing still get a usable anchor", () => {
  const sections = buildSections([
    { type: "prose", paragraphs: ["intro"] },
    { type: "prose", heading: "— —", paragraphs: ["x"] },
  ]);
  assert.equal(sections[0].headingId, undefined, "a headingless block gets no id");
  assert.equal(sections[1].headingId, "section-2");
});

test("a heading cannot steal an id the page shell already owns", () => {
  const [section] = buildSections([
    { type: "prose", heading: "Main content", paragraphs: ["x"] },
  ]);
  assert.equal(section.headingId, "main-content-2");
});

test("blocks with no heading are excluded from the TOC", () => {
  const sections = buildSections([
    { type: "prose", paragraphs: ["lead paragraph"] },
    { type: "prose", heading: "First", paragraphs: ["x"] },
  ]);
  const toc = tocFromSections(sections);
  assert.equal(toc.length, 1);
  assert.equal(toc[0].label, "First");
  assert.equal(toc[0].level, 2);
});

test("a table block can carry a heading and reach the TOC", () => {
  // Blog bodies gained table blocks so an article can answer an "X vs Y"
  // question in the shape that actually answers it. A table with a heading is
  // a section like any other and has to appear in the contents.
  const sections = buildSections([
    { type: "table", heading: "Cost drivers", headers: ["a"], rows: [["b"]] },
  ]);
  assert.equal(sections[0].headingId, "cost-drivers");
  assert.deepEqual(tocFromSections(sections).map((t) => t.label), ["Cost drivers"]);
});

test("word count covers every rendered string, markup-free", () => {
  const words = countWords([
    { type: "prose", heading: "**Two** words", paragraphs: [] },
    { type: "prose", paragraphs: ["one two three"] },
    { type: "list", items: ["[four](/x/) five"] },
  ]);
  assert.equal(words, 7);
});

test("word count reaches inside steps and table cells", () => {
  // Regression guard: countWords originally read only `paragraphs` and
  // `list`, so a post built largely from tables and steps would have reported
  // a reading time near zero and a wordCount in the schema that understated
  // the article.
  const words = countWords([
    { type: "steps", steps: [{ name: "One two", description: "three four five" }] },
    { type: "table", headers: ["a", "b"], rows: [["c d", "e"]] },
  ]);
  assert.equal(words, 5 + 5);
});

test("reading time rounds to whole minutes and never reports zero", () => {
  assert.equal(readingTime([{ type: "prose", paragraphs: ["a b c"] }]).minutes, 1);
  assert.equal(readingTime([]).text, "1 min read");
  const long = readingTime([
    { type: "prose", paragraphs: [Array(900).fill("word").join(" ")] },
  ]);
  assert.equal(long.minutes, 4);
  assert.equal(long.iso, "PT4M");
});

test("a malformed body degrades to an empty article instead of throwing", () => {
  assert.deepEqual(parseBlogBody(null), []);
  assert.deepEqual(parseBlogBody({ nope: true }), []);
  assert.deepEqual(buildSections(parseBlogBody(undefined)), []);
});

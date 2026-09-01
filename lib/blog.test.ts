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
  assert.equal(slugifyHeading("Don\u2019t rebuild what you don't read"), "dont-rebuild-what-you-dont-read");
});

test("accented headings keep their base letters", () => {
  assert.equal(slugifyHeading("Caf\u00e9 r\u00e9sum\u00e9"), "cafe-resume");
});

test("duplicate headings get distinct ids and the TOC follows them", () => {
  const sections = buildSections([
    { heading: "Costs", paragraphs: ["a"] },
    { heading: "Costs", paragraphs: ["b"] },
    { heading: "Costs", paragraphs: ["c"] },
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
  const sections = buildSections([{ paragraphs: ["intro"] }, { heading: "\u2014 \u2014", paragraphs: ["x"] }]);
  assert.equal(sections[0].headingId, undefined, "a headingless block gets no id");
  assert.equal(sections[1].headingId, "section-2");
});

test("a heading cannot steal an id the page shell already owns", () => {
  const [section] = buildSections([{ heading: "Main content", paragraphs: ["x"] }]);
  assert.equal(section.headingId, "main-content-2");
});

test("blocks with no heading are excluded from the TOC", () => {
  const sections = buildSections([
    { paragraphs: ["lead paragraph"] },
    { heading: "First", paragraphs: ["x"] },
  ]);
  const toc = tocFromSections(sections);
  assert.equal(toc.length, 1);
  assert.equal(toc[0].label, "First");
  assert.equal(toc[0].level, 2);
});

test("word count covers headings, paragraphs and list items, markup-free", () => {
  const words = countWords([
    { heading: "**Two** words" },
    { paragraphs: ["one two three"], list: ["[four](/x/) five"] },
  ]);
  assert.equal(words, 7);
});

test("reading time rounds to whole minutes and never reports zero", () => {
  assert.equal(readingTime([{ paragraphs: ["a b c"] }]).minutes, 1);
  assert.equal(readingTime([]).text, "1 min read");
  const long = readingTime([{ paragraphs: [Array(900).fill("word").join(" ")] }]);
  assert.equal(long.minutes, 4);
  assert.equal(long.iso, "PT4M");
});

test("a malformed body degrades to an empty article instead of throwing", () => {
  assert.deepEqual(parseBlogBody(null), []);
  assert.deepEqual(parseBlogBody({ nope: true }), []);
  assert.deepEqual(buildSections(parseBlogBody(undefined)), []);
});

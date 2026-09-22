import { test } from "node:test";
import assert from "node:assert/strict";
import { blogPosts } from "../prisma/seed-data/blog";
import { getPostInContentCta, getCtaInsertionIndex } from "./blog-cta";
import type { BlogSection } from "./blog";

test("every seeded blog post resolves a valid contextual in-content CTA", () => {
  for (const post of blogPosts) {
    const cta = getPostInContentCta(post);
    assert.ok(cta, `${post.slug}: CTA must be defined`);
    assert.ok(cta.title.length > 10, `${post.slug}: CTA title too short`);
    assert.ok(cta.description.length > 20, `${post.slug}: CTA description too short`);
    assert.ok(cta.primaryText.length > 3, `${post.slug}: CTA primaryText too short`);

    // Hrefs must be absolute paths with trailing slash
    assert.match(cta.primaryHref, /^\/.*\/$/, `${post.slug}: primaryHref must start and end with /`);
    if (cta.secondaryHref) {
      assert.match(cta.secondaryHref, /^\/.*\/$/, `${post.slug}: secondaryHref must start and end with /`);
    }
  }
});

test("smart heuristics resolve appropriate CTAs for unknown slugs by keyword intent", () => {
  const costPost = getPostInContentCta({
    slug: "custom-cloud-migration-cost-estimates",
    cluster: "M&A Migration",
    title: "How to estimate cloud migration budget",
  });
  assert.equal(costPost.iconType, "calculator");
  assert.ok(costPost.primaryHref.includes("pricing") || costPost.primaryHref.includes("cost"));

  const comparePost = getPostInContentCta({
    slug: "salesforce-crm-vs-dynamics-comparison",
    cluster: "Dynamics 365",
    title: "Salesforce vs Dynamics 365 comparison",
  });
  assert.equal(comparePost.iconType, "matrix");
  assert.ok(comparePost.primaryHref.includes("compare") || comparePost.primaryHref.includes("salesforce"));

  const auditPost = getPostInContentCta({
    slug: "enterprise-power-platform-audit-guide",
    cluster: "Power Platform",
    title: "How to run an environment audit",
  });
  assert.equal(auditPost.iconType, "checklist");
  assert.ok(auditPost.primaryHref.includes("assessments"));
});

test("smart insertion index avoids interrupting short articles and targets ~40-50% depth", () => {
  // 0, 1, 2 sections: should not interrupt
  assert.equal(getCtaInsertionIndex([]), -1);
  assert.equal(getCtaInsertionIndex([{ type: "prose", paragraphs: ["a"], level: 2 } as BlogSection]), -1);
  assert.equal(
    getCtaInsertionIndex([
      { type: "prose", paragraphs: ["a"], level: 2 } as BlogSection,
      { type: "prose", paragraphs: ["b"], level: 2 } as BlogSection,
    ]),
    -1
  );

  // 6 sections: target is ~2 or 3
  const sixSections: BlogSection[] = [
    { type: "prose", paragraphs: ["lead"], level: 2 } as BlogSection,
    { type: "prose", heading: "Heading 1", headingId: "h1", paragraphs: ["p1"], level: 2 } as BlogSection,
    { type: "prose", heading: "Heading 2", headingId: "h2", paragraphs: ["p2"], level: 2 } as BlogSection,
    { type: "prose", heading: "Heading 3", headingId: "h3", paragraphs: ["p3"], level: 2 } as BlogSection,
    { type: "prose", heading: "Heading 4", headingId: "h4", paragraphs: ["p4"], level: 2 } as BlogSection,
    { type: "prose", heading: "Heading 5", headingId: "h5", paragraphs: ["p5"], level: 2 } as BlogSection,
  ];
  const idx6 = getCtaInsertionIndex(sixSections);
  assert.ok(idx6 >= 1 && idx6 <= 4, `expected 1 <= idx <= 4, got ${idx6}`);

  // Never places after the last section
  assert.ok(idx6 < sixSections.length - 1);
});

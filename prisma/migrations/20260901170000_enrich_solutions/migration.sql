-- Solution pages averaged 299 words with a single 30-word content section,
-- because the model had no way to express anything richer than flat
-- paragraphs. This adds the typed-block field used by MarketingPage and
-- GlossaryTerm, plus the cross-link arrays that were previously a hardcoded
-- map inside app/solutions/[slug]/page.tsx.
--
-- Named `blocks`, not `sections`: Solution.sections is the existing
-- ContentSection relation, which these supersede but do not drop.
-- All additive with defaults, so existing rows keep rendering.

-- AlterTable
ALTER TABLE "Solution" ADD COLUMN "blocks" JSONB NOT NULL DEFAULT '[]';
ALTER TABLE "Solution" ADD COLUMN "relatedServiceSlugs" TEXT[] DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Solution" ADD COLUMN "relatedTermSlugs" TEXT[] DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Solution" ADD COLUMN "relatedPageRefs" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- Service pages averaged ~650 words with 2 flat ContentSection rows each and
-- no way to express a table or a decision list. This adds the same typed-block
-- field Solution/MarketingPage/GlossaryTerm use, plus the cross-link arrays.
-- Additive with defaults; existing rows keep rendering from ContentSection.

-- AlterTable
ALTER TABLE "Service" ADD COLUMN "blocks" JSONB NOT NULL DEFAULT '[]';
ALTER TABLE "Service" ADD COLUMN "relatedTermSlugs" TEXT[] DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Service" ADD COLUMN "relatedPageRefs" TEXT[] DEFAULT ARRAY[]::TEXT[];

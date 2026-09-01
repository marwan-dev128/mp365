-- Gives Industry the same structured-content shape Solution already has:
-- typed blocks plus editor-controlled cross-links. Industry pages were the
-- last stub page type on the site (intro + a bullet list, ~150 words), and
-- their "related services" list was a hardcoded map in the route component.
--
-- All four columns are additive with defaults, so existing rows keep working
-- and render exactly as before until blocks are seeded.

-- AlterTable
ALTER TABLE "Industry" ADD COLUMN IF NOT EXISTS "blocks" JSONB NOT NULL DEFAULT '[]';
ALTER TABLE "Industry" ADD COLUMN IF NOT EXISTS "relatedServiceSlugs" TEXT[] DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Industry" ADD COLUMN IF NOT EXISTS "relatedTermSlugs" TEXT[] DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Industry" ADD COLUMN IF NOT EXISTS "relatedPageRefs" TEXT[] DEFAULT ARRAY[]::TEXT[];

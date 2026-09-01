-- Same class of drift 20260901150000_add_image_urls fixed for Service and
-- MarketingPage: Industry."imageUrl" and Solution."imageUrl" exist in
-- schema.prisma and in every provisioned database, but no migration ever
-- created them. `prisma migrate dev` therefore diffs the migration history
-- against the schema, sees two columns it cannot account for, and offers to
-- reset the database — which is not an acceptable answer on a database that
-- holds content.
--
-- IF NOT EXISTS because the columns are already present wherever the app is
-- running; both are nullable, so this is purely additive either way.

-- AlterTable
ALTER TABLE "Industry" ADD COLUMN IF NOT EXISTS "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "Solution" ADD COLUMN IF NOT EXISTS "imageUrl" TEXT;

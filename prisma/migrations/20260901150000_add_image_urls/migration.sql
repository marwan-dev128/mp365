-- Backfills the `imageUrl` columns that were introduced on Service and
-- MarketingPage in schema.prisma without an accompanying migration, which
-- left `prisma migrate status` reporting "up to date" while Service queries
-- failed at runtime with P2022 (ColumnNotFound).
--
-- IF NOT EXISTS because MarketingPage."imageUrl" had already been added to
-- some databases by hand before this migration existed; both columns are
-- nullable, so this is purely additive either way.

-- AlterTable
ALTER TABLE "Service" ADD COLUMN IF NOT EXISTS "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "MarketingPage" ADD COLUMN IF NOT EXISTS "imageUrl" TEXT;

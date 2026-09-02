-- A redirect target for old URLs whose destination is not a Service,
-- Solution or Industry row.
--
-- The three FKs on OldSlug could only express three kinds of redirect. The
-- launch audit found 15 indexed WordPress blog posts and 6 category archives
-- whose closest counterparts are a BlogPost, a MarketingPage or a hand-built
-- route — none of them representable, so all 21 would have 404'd at cutover.
--
-- Nullable and additive: every existing FK-based row keeps working unchanged.

-- AlterTable
ALTER TABLE "OldSlug" ADD COLUMN IF NOT EXISTS "targetPath" TEXT;

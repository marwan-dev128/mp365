-- FAQs on blog posts.
--
-- Blog was the only content type without them, which is backwards: an article
-- ranks for question-shaped queries, and the article template already renders
-- FaqSection and emits FAQPage structured data for services, solutions,
-- industries, glossary terms and marketing pages.
--
-- Reuses the existing polymorphic Faq table rather than adding a sixth FAQ
-- model, matching how service/solution/industry FAQs are already stored.

-- AlterTable
ALTER TABLE "Faq" ADD COLUMN IF NOT EXISTS "blogPostId" TEXT;

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Faq_blogPostId_idx" ON "Faq"("blogPostId");

-- AddForeignKey
DO $$
BEGIN
  ALTER TABLE "Faq" ADD CONSTRAINT "Faq_blogPostId_fkey"
    FOREIGN KEY ("blogPostId") REFERENCES "BlogPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- Splits CaseStudy into real client engagements and illustrative worked
-- examples so the two can never be conflated at render time. Existing rows
-- default to CLIENT, which is what they all are.

-- CreateEnum
DO $$ BEGIN
  CREATE TYPE "CaseStudyKind" AS ENUM ('CLIENT', 'WORKED_EXAMPLE');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- AlterTable
ALTER TABLE "CaseStudy" ADD COLUMN IF NOT EXISTS "kind" "CaseStudyKind" NOT NULL DEFAULT 'CLIENT';
ALTER TABLE "CaseStudy" ADD COLUMN IF NOT EXISTS "imageUrl" TEXT;

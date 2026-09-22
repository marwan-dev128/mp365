-- AlterTable
ALTER TABLE "ContactSubmission" ADD COLUMN     "industry" TEXT,
ADD COLUMN     "sourcePath" TEXT,
ADD COLUMN     "topic" TEXT;

-- AlterTable
ALTER TABLE "Industry" ADD COLUMN     "ctaHeading" TEXT,
ADD COLUMN     "ctaSubheading" TEXT,
ADD COLUMN     "formTopics" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "proofMetrics" JSONB NOT NULL DEFAULT '[]',
ADD COLUMN     "readinessQuestions" JSONB NOT NULL DEFAULT '[]',
ADD COLUMN     "relatedIndustrySlug" TEXT,
ADD COLUMN     "sidebarCta" JSONB,
ADD COLUMN     "subSectors" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "tool" TEXT,
ADD COLUMN     "triggers" JSONB NOT NULL DEFAULT '[]';

-- CreateIndex
CREATE INDEX "ContactSubmission_industry_idx" ON "ContactSubmission"("industry");

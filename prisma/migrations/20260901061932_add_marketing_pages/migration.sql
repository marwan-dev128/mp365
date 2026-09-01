-- CreateEnum
CREATE TYPE "MarketingPageType" AS ENUM ('MIGRATION', 'COMPARISON', 'PRICING', 'ASSESSMENT');

-- CreateTable
CREATE TABLE "MarketingPage" (
    "id" TEXT NOT NULL,
    "type" "MarketingPageType" NOT NULL,
    "hub" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "metaTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "heroQuestion" TEXT NOT NULL,
    "heroAnswer" TEXT NOT NULL,
    "sections" JSONB NOT NULL DEFAULT '[]',
    "relatedServiceSlugs" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "relatedPageRefs" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "published" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MarketingPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq2" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "pageId" TEXT NOT NULL,

    CONSTRAINT "Faq2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MarketingPage_hub_slug_key" ON "MarketingPage"("hub", "slug");

-- CreateIndex
CREATE INDEX "Faq2_pageId_idx" ON "Faq2"("pageId");

-- AddForeignKey
ALTER TABLE "Faq2" ADD CONSTRAINT "Faq2_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "MarketingPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

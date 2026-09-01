-- AlterTable
ALTER TABLE "GlossaryTerm" ADD COLUMN     "aliases" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "relatedTermSlugs" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "sections" JSONB NOT NULL DEFAULT '[]';

-- CreateTable
CREATE TABLE "GlossaryFaq" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "termId" TEXT NOT NULL,

    CONSTRAINT "GlossaryFaq_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GlossaryFaq_termId_idx" ON "GlossaryFaq"("termId");

-- AddForeignKey
ALTER TABLE "GlossaryFaq" ADD CONSTRAINT "GlossaryFaq_termId_fkey" FOREIGN KEY ("termId") REFERENCES "GlossaryTerm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

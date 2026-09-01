-- CreateTable
CREATE TABLE "StaticPageFaq" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StaticPageFaq_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StaticPageFaq_path_idx" ON "StaticPageFaq"("path");

-- CreateIndex
CREATE UNIQUE INDEX "StaticPageFaq_path_question_key" ON "StaticPageFaq"("path", "question");

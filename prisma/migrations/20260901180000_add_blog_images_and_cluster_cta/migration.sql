-- Blog article hero artwork, and the per-cluster sidebar CTA copy that used
-- to be a constant in lib/data.ts.
--
-- Both columns on BlogPost are nullable: every existing post keeps rendering
-- exactly as it did, falling back to the site's branded OG card, until an
-- editor sets an image.

-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN IF NOT EXISTS "imageUrl" TEXT,
                       ADD COLUMN IF NOT EXISTS "imageAlt" TEXT;

-- CreateTable
CREATE TABLE IF NOT EXISTS "BlogClusterCta" (
    "id" TEXT NOT NULL,
    "cluster" "BlogCluster" NOT NULL,
    "tag" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "ctaText" TEXT NOT NULL,
    "ctaHref" TEXT NOT NULL DEFAULT '/contact/',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BlogClusterCta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "BlogClusterCta_cluster_key" ON "BlogClusterCta"("cluster");

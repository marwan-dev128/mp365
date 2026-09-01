-- The glossary index groups terms by their primary service. That primary was
-- being read as relatedServices[0], but relatedServices is an implicit
-- many-to-many whose row order is not defined — so the grouping was
-- nondeterministic and filed governance terms under Migration. Store it.
-- Nullable and additive; the seeder populates it from relatedServiceSlugs[0].

-- AlterTable
ALTER TABLE "GlossaryTerm" ADD COLUMN "primaryServiceSlug" TEXT;

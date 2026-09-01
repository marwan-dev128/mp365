import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getGlossaryTerms, getBlogPosts } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { collectionPageSchema } from "@/lib/schema";
import { ArrowUpRight } from "@/components/ui/Icons";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Resources — Glossary & Guides",
  description: "Glossary terms and guides on Microsoft 365 migration, Dynamics 365, and Power Platform governance.",
  path: "/resources/",
});

export default async function ResourcesPage() {
  const [glossaryTerms, blogPosts] = await Promise.all([getGlossaryTerms(), getBlogPosts()]);
  return (
    <>
      {/* One CollectionPage listing both lists this hub renders — glossary
          terms and guides — rather than two competing page-level nodes. */}
      <JsonLd
        data={collectionPageSchema({
          path: "/resources/",
          name: "Resources — Glossary & Guides",
          description:
            "Glossary terms and guides on Microsoft 365 migration, Dynamics 365, and Power Platform governance.",
          items: [
            ...glossaryTerms.map((t) => ({
              name: t.term,
              path: `/resources/glossary/${t.slug}/`,
            })),
            ...blogPosts.map((p) => ({ name: p.title, path: `/blog/${p.slug}/` })),
          ],
        })}
      />
      <PageHero
        eyebrow="Resources"
        h1="Glossary and guides"
        breadcrumbs={[{ name: "Resources", path: "/resources/" }]}
      />
      <Container className="pt-14 pb-20">
        {/* Quick Resource Cards Grid */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/pricing/"
            className="group flex flex-col justify-between rounded-[var(--mp-radius-card)] border border-line bg-white p-5 shadow-[0_2px_12px_rgba(0,16,51,0.03)] transition-all hover:-translate-y-1 hover:border-azure/40 hover:shadow-mp-hover"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-azure">Scoping</span>
              <p className="mt-1 font-display text-[15.5px] font-bold text-navy transition-colors group-hover:text-azure">
                Pricing & Cost Guides
              </p>
              <p className="mt-1 text-[12.5px] text-muted">
                Transparent tenant and project price models
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-bold text-azure">
              View ranges <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link
            href="/assessments/"
            className="group flex flex-col justify-between rounded-[var(--mp-radius-card)] border border-line bg-white p-5 shadow-[0_2px_12px_rgba(0,16,51,0.03)] transition-all hover:-translate-y-1 hover:border-azure/40 hover:shadow-mp-hover"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-azure">Audits</span>
              <p className="mt-1 font-display text-[15.5px] font-bold text-navy transition-colors group-hover:text-azure">
                Cloud Assessments
              </p>
              <p className="mt-1 text-[12.5px] text-muted">
                Security, licensing, and architecture audits
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-bold text-azure">
              Explore audits <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link
            href="/compare/"
            className="group flex flex-col justify-between rounded-[var(--mp-radius-card)] border border-line bg-white p-5 shadow-[0_2px_12px_rgba(0,16,51,0.03)] transition-all hover:-translate-y-1 hover:border-azure/40 hover:shadow-mp-hover"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-azure">Evaluations</span>
              <p className="mt-1 font-display text-[15.5px] font-bold text-navy transition-colors group-hover:text-azure">
                Platform Comparisons
              </p>
              <p className="mt-1 text-[12.5px] text-muted">
                Detailed side-by-side technology breakdowns
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-bold text-azure">
              Compare options <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <Link
            href="/migrations/"
            className="group flex flex-col justify-between rounded-[var(--mp-radius-card)] border border-line bg-white p-5 shadow-[0_2px_12px_rgba(0,16,51,0.03)] transition-all hover:-translate-y-1 hover:border-azure/40 hover:shadow-mp-hover"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-azure">Playbooks</span>
              <p className="mt-1 font-display text-[15.5px] font-bold text-navy transition-colors group-hover:text-azure">
                Migration Hub
              </p>
              <p className="mt-1 text-[12.5px] text-muted">
                Step-by-step tenant migration frameworks
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-bold text-azure">
              View playbooks <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>

        {/* 2-Column Glossary & Guides Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Glossary Card */}
          <div className="flex flex-col justify-between rounded-[var(--mp-radius-card)] border border-line bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,16,51,0.04)]">
            <div>
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-azure-subtle px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-azure">
                <span className="h-1.5 w-1.5 rounded-full bg-azure" />
                Terminology
              </div>
              <h2 className="font-display text-[22px] sm:text-[24px] font-bold text-navy">
                Glossary Terms
              </h2>
              <p className="mt-1.5 text-[14px] text-muted">
                Key enterprise cloud concepts, migration protocols, and governance definitions.
              </p>
              <ul className="mt-6 flex flex-col gap-2">
                {glossaryTerms.slice(0, 8).map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/resources/glossary/${t.slug}/`}
                      className="group flex items-center justify-between rounded-xl bg-surface-light/70 px-4 py-3 text-[14px] font-semibold text-navy transition-all hover:bg-azure-subtle hover:text-azure"
                    >
                      <span>{t.term}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-azure" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/resources/glossary/"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface-light px-4 py-3 text-sm font-bold text-navy transition-all hover:border-azure hover:bg-azure-subtle hover:text-azure"
            >
              <span>View Full Glossary ({glossaryTerms.length} terms)</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Guides Card */}
          <div className="flex flex-col justify-between rounded-[var(--mp-radius-card)] border border-line bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,16,51,0.04)]">
            <div>
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-cyan/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                Technical Insights
              </div>
              <h2 className="font-display text-[22px] sm:text-[24px] font-bold text-navy">
                Guides & Architecture Playbooks
              </h2>
              <p className="mt-1.5 text-[14px] text-muted">
                Practical breakdowns of migration timelines, licensing architectures, and cost drivers.
              </p>
              <ul className="mt-6 flex flex-col gap-2">
                {blogPosts.slice(0, 8).map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}/`}
                      className="group flex items-center justify-between gap-3 rounded-xl bg-surface-light/70 px-4 py-3 text-[14px] font-semibold text-navy transition-all hover:bg-azure-subtle hover:text-azure"
                    >
                      <span className="line-clamp-1">{p.title}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-azure" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/blog/"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface-light px-4 py-3 text-sm font-bold text-navy transition-all hover:border-azure hover:bg-azure-subtle hover:text-azure"
            >
              <span>Browse All Guides & Articles</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
      <CtaBand />
    </>
  );
}

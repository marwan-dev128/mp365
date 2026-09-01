import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { personSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { getSiteSettings, getPeople, getStaticPageFaqs } from "@/lib/data";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "About MP365 — Microsoft Consulting Partner",
  description:
    "MP365 (Modern Partners 365) is a Microsoft consulting partner based in Vernon, Connecticut, with over 20 years of experience leading Microsoft 365 and Dynamics 365 engagements.",
  path: "/about/",
  isFullTitle: true,
});

export default async function AboutPage() {
  const [settings, people, faqs] = await Promise.all([
    getSiteSettings(),
    getPeople(),
    getStaticPageFaqs("/about/"),
  ]);

  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: "AboutPage",
          path: "/about/",
          name: `About ${settings.brandName}`,
          description: settings.description,
        })}
      />
      {people.map((p) => (
        <JsonLd
          key={p.slug}
          data={personSchema({
            slug: p.slug,
            name: p.name,
            jobTitle: p.role,
            description: p.credentials,
            // "Dr." is part of the seeded name string for Elfouly; surface it
            // as a separate honorific so `name` stays the plain personal name.
            ...(p.name.startsWith("Dr. ")
              ? { honorificPrefix: "Dr.", name: p.name.replace(/^Dr\.\s+/, "") }
              : {}),
          })}
        />
      ))}
      <PageHero
        eyebrow="About"
        h1={`${settings.brandName} is a Microsoft consulting partner based in ${settings.city}, ${settings.region}`}
        breadcrumbs={[{ name: "About", path: "/about/" }]}
      />
      <Container className="max-w-2xl pt-14">
        <div className="flex flex-col gap-6">
          <p className="text-ink-2 leading-relaxed">
            {settings.legalName} — {settings.brandName} — is a team of Microsoft platform specialists with
            more than 20 years of combined experience in Microsoft 365, Dynamics 365, Power Platform, and
            Azure. The firm was built around a specific gap in the market: mid-market and enterprise
            organizations that need senior, hands-on Microsoft expertise without the multi-month discovery
            cycle and account-management overhead of a large systems integrator.
          </p>
          <p className="text-ink-2 leading-relaxed">
            {settings.brandName} has led Microsoft 365 tenant consolidations, carve-outs, and cross-tenant
            mergers for organizations navigating acquisitions and divestitures, and has implemented Dynamics
            365 and Power Platform solutions for manufacturing and industrial clients including OTIS
            Elevator, Carlisle Construction Materials, and Hunter Panels.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-extrabold text-ink mb-6">Leadership</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {people.map((p) => (
              <div key={p.slug} className="rounded-lg border border-line bg-surface-card p-6">
                <h3 className="font-display text-[16px] font-bold text-navy">{p.name}</h3>
                <p className="mt-0.5 text-sm font-semibold text-azure">{p.role}</p>
                <p className="text-sm text-ink-2 mt-3 leading-relaxed">{p.credentials}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-lg border border-line bg-surface-light p-6">
          <h2 className="text-lg font-bold text-ink mb-3">Where we work</h2>
          <p className="text-sm text-ink-2 leading-relaxed">
            {settings.legalName} is headquartered at {settings.street}, {settings.city},{" "}
            {settings.region} {settings.postalCode}, and serves clients across{" "}
            {settings.areaServed.join(", ")}.
          </p>
        </div>

        <div className="mt-14">
          <FaqSection faqs={faqs} path="/about/" />
        </div>
      </Container>
      <CtaBand />
    </>
  );
}

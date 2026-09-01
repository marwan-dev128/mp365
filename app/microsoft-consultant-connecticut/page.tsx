import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { getServices, getSiteSettings, getStaticPageFaqs } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";
import { webPageSchema, ORG_ID } from "@/lib/schema";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Microsoft Consultant in Connecticut | MP365",
  description:
    "MP365 is a Microsoft consulting partner based in Vernon, CT, serving Hartford and Connecticut businesses with Microsoft 365, Dynamics 365, and M&A tenant migration.",
  path: "/microsoft-consultant-connecticut/",
  isFullTitle: true,
});

export default async function ConnecticutPage() {
  const [services, settings, faqs] = await Promise.all([
    getServices(),
    getSiteSettings(),
    getStaticPageFaqs("/microsoft-consultant-connecticut/"),
  ]);
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/microsoft-consultant-connecticut/",
          name: "Microsoft Consultant in Connecticut",
          description:
            "MP365 is a Microsoft consulting partner based in Vernon, CT, serving Hartford and Connecticut businesses with Microsoft 365, Dynamics 365, and M&A tenant migration.",
          mainEntityId: ORG_ID,
        })}
      />
      <PageHero
        eyebrow="Connecticut"
        h1="A Microsoft consultant based in Connecticut, working with clients nationwide"
        answerQuestion="Is there a Microsoft consulting partner based in Connecticut?"
        answerText={`Yes — ${settings.brandName} is headquartered at ${settings.street}, ${settings.city}, ${settings.region}, serving Hartford-area and Connecticut businesses in person, with the rest of its client base supported remotely across the U.S.`}
        breadcrumbs={[{ name: "Microsoft Consultant Connecticut", path: "/microsoft-consultant-connecticut/" }]}
      />
      <Container className="max-w-2xl pt-14">
        <div className="flex flex-col gap-6">
          <p className="text-ink-2 leading-relaxed">
            Connecticut manufacturers, insurers, and mid-market companies looking for Microsoft 365 and
            Dynamics 365 expertise don&rsquo;t need to work with a remote-only national firm or a
            generalist local IT provider. {settings.brandName} is based in {settings.city},{" "}
            {settings.region}, and works with Hartford-area businesses on-site when it matters — M&amp;A
            due diligence meetings, executive workshops, go-live support — while running day-to-day
            project work remotely, the same way most modern Microsoft engagements are delivered.
          </p>
          <p className="text-ink-2 leading-relaxed">
            Our services most requested by Connecticut clients: Microsoft 365 migration, M&amp;A tenant
            migration for regional manufacturers going through ownership changes, and Dynamics 365
            implementations for companies replacing spreadsheet-based operations.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold text-ink mb-4">Popular services for Connecticut businesses</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="rounded-lg border border-line bg-surface-card p-4 hover:border-azure transition-colors"
              >
                <p className="font-bold text-sm text-ink">{s.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <FaqSection faqs={faqs} path="/microsoft-consultant-connecticut/" />
        </div>
      </Container>
      <CtaBand
        heading="Based in Connecticut? Let's talk in person."
        subheading="We meet with Hartford-area clients on-site for kickoff and key milestones — reach out to set up a time."
      />
    </>
  );
}

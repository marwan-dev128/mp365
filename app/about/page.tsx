import { JsonLd } from "@/components/JsonLd";
import { ClientLogos } from "@/components/ClientLogos";
import { FaqSection } from "@/components/FaqSection";
import { DarkHighlightBanner } from "@/components/home/DarkHighlightBanner";
import { AboutHero } from "@/components/about/AboutHero";
import { ApproachGrid } from "@/components/about/ApproachGrid";
import { LeadershipGrid } from "@/components/about/LeadershipGrid";
import { OfficeLocationCard } from "@/components/about/OfficeLocationCard";
import { personSchema, webPageSchema, ORG_ID } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { getSiteSettings, getPeople, getStaticPageFaqs } from "@/lib/data";
import clientsData from "@/store/clients.json";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "About MP365 — Microsoft Consulting Partner",
  description:
    "Modern Partners 365 (MP365) is a Microsoft solutions consulting partner in Vernon, Connecticut, with 20+ years leading Microsoft 365 and Dynamics 365 enterprise engagements.",
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
          mainEntityId: ORG_ID,
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
            ...(p.name.startsWith("Dr. ")
              ? { honorificPrefix: "Dr.", name: p.name.replace(/^Dr\.\s+/, "") }
              : {}),
          })}
        />
      ))}

      {/* 1. Brand Hero with Microsoft solutions partner pill & 4-stat ribbon */}
      <AboutHero />

      {/* 2. Kinetic Client Proof Marquee */}
      <ClientLogos label={clientsData.label} clients={clientsData.clients} />

      {/* 3. Core Philosophy & Value Pillars */}
      <ApproachGrid />

      {/* 4. Executive Leadership Profiles */}
      <LeadershipGrid people={people} />

      {/* 5. Headquarters & Service Area Card */}
      <OfficeLocationCard
        address={`${settings.street}, ${settings.city}, ${settings.region} ${settings.postalCode}`}
        phone={settings.phoneDisplay}
        phoneHref={`tel:${settings.phone}`}
        email={settings.email}
        emailHref={`mailto:${settings.email}`}
      />

      {/* 6. FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="w-full bg-white py-16 sm:py-24 border-t border-mp-border/50">
          <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-12">
            <FaqSection faqs={faqs} path="/about/" />
          </div>
        </section>
      )}

      {/* 7. Closing High-Contrast Dark Banner */}
      <DarkHighlightBanner />
    </>
  );
}

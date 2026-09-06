import { JsonLd } from "@/components/JsonLd";
import { ClientLogos } from "@/components/ClientLogos";
import { DarkHighlightBanner } from "@/components/home/DarkHighlightBanner";
import { ContactHero } from "@/components/contact/ContactHero";
import { ConsultationHub } from "@/components/contact/ConsultationHub";
import { buildMetadata } from "@/lib/metadata";
import { getSiteSettings } from "@/lib/data";
import { webPageSchema, ORG_ID } from "@/lib/schema";
import clientsData from "@/store/clients.json";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Contact MP365 — Senior Microsoft Consulting",
  description:
    "Get in touch with MP365 for direct senior Microsoft consulting — Microsoft 365 M&A tenant migration, Dynamics 365, and Power Platform.",
  path: "/contact/",
  isFullTitle: true,
});

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: "ContactPage",
          path: "/contact/",
          name: `Contact ${settings.brandName}`,
          description:
            "Get in touch with MP365 for direct senior Microsoft consulting — Microsoft 365 M&A tenant migration, Dynamics 365, and Power Platform.",
          mainEntityId: ORG_ID,
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": ORG_ID,
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "sales",
              telephone: settings.phone,
              email: settings.email,
              areaServed: settings.areaServed,
              availableLanguage: "English",
            },
          ],
        }}
      />

      {/* 1. Dedicated Contact Hero with Microsoft Partner Badge & Direct Dial Button */}
      <ContactHero
        phoneDisplay={settings.phoneDisplay}
        phoneHref={`tel:${settings.phone}`}
      />

      {/* 2. Kinetic Client Proof Marquee */}
      <ClientLogos label={clientsData.label} clients={clientsData.clients} />

      {/* 3. Two-Column Consultation Hub (Direct Access & Guarantees + Modernized Form) */}
      <ConsultationHub
        phoneDisplay={settings.phoneDisplay}
        phoneHref={`tel:${settings.phone}`}
        email={settings.email}
        emailHref={`mailto:${settings.email}`}
        address={`${settings.street}, ${settings.city}, ${settings.region} ${settings.postalCode}`}
      />

      {/* 4. High-Contrast Closing Banner */}
      <DarkHighlightBanner />
    </>
  );
}

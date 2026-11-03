import { ClientLogos } from "@/components/ClientLogos";
import { Container } from "@/components/Container";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";
import { ConsultationHub } from "@/components/contact/ConsultationHub";
import { ContactHero } from "@/components/contact/ContactHero";
import { MarketingPageBody } from "@/components/marketing/PageBody";
import { getPageContent } from "@/content/pages";
import { getSiteSettings } from "@/lib/data";
import { planMetadata } from "@/lib/metadata";
import { stripInlineMarkup } from "@/lib/richtext";
import { ORG_ID, breadcrumbSchema } from "@/lib/schema";
import { getSitePage } from "@/lib/site-data";
import clientsData from "@/store/clients.json";

const PATH = "/contact/";

export const metadata = planMetadata(PATH);

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const plan = getSitePage(PATH);
  const content = getPageContent(PATH);
  const address = `${settings.street}, ${settings.city}, ${settings.region} ${settings.postalCode}`;

  return (
    <>
      <JsonLd data={breadcrumbSchema(plan.breadcrumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
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

      <ContactHero
        title={plan.h1}
        subtitle={stripInlineMarkup(content.intro)}
        phoneDisplay={settings.phoneDisplay}
        phoneHref={`tel:${settings.phone}`}
      />

      <ClientLogos label={clientsData.label} clients={clientsData.clients} />

      <ConsultationHub
        phoneDisplay={settings.phoneDisplay}
        phoneHref={`tel:${settings.phone}`}
        email={settings.email}
        emailHref={`mailto:${settings.email}`}
        address={address}
      />

      <Container className="py-14 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-12">
          <MarketingPageBody blocks={content.blocks} />
          <FaqSection faqs={content.faqs} />
          <p className="text-[15.5px] leading-[1.75] text-ink-2">
            <RichText text={content.closing} />
          </p>
        </div>
      </Container>
    </>
  );
}

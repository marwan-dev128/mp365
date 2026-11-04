import { ClientLogos } from "@/components/ClientLogos";
import { Container } from "@/components/Container";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";
import { AboutHero } from "@/components/about/AboutHero";
import { ApproachGrid } from "@/components/about/ApproachGrid";
import { EvolutionTimeline } from "@/components/about/EvolutionTimeline";
import { OfficeLocationCard } from "@/components/about/OfficeLocationCard";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { DarkHighlightBanner } from "@/components/home/DarkHighlightBanner";
import { getPageContent } from "@/content/pages";
import { getSiteSettings } from "@/lib/data";
import { planMetadata } from "@/lib/metadata";
import { stripInlineMarkup } from "@/lib/richtext";
import { breadcrumbSchema } from "@/lib/schema";
import { getSitePage } from "@/lib/site-data";
import clientsData from "@/store/clients.json";

const PATH = "/about/";
const PARTNER_DIRECTORY =
  "https://appsource.microsoft.com/en-US/marketplace/partner-dir/263f1063-d5d7-4d25-ac90-7b75e302003c/overview";

export const metadata = planMetadata(PATH);

// The designed sections take their copy from store/about.json. The blocks in
// content/pages/about.ts feed llms-full.txt; its FAQ, closing and call to action
// render here.
export default async function AboutPage() {
  const settings = await getSiteSettings();
  const content = getPageContent(PATH);

  return (
    <>
      <JsonLd data={breadcrumbSchema(getSitePage(PATH).breadcrumbs)} />
      <AboutHero />
      <WhoWeAre />
      <ClientLogos label={clientsData.label} clients={clientsData.clients} />
      <ApproachGrid />
      <EvolutionTimeline />
      <OfficeLocationCard
        address={`${settings.street}, ${settings.city}, ${settings.region} ${settings.postalCode}`}
        phone={settings.phoneDisplay}
        phoneHref={`tel:${settings.phone}`}
        email={settings.email}
        emailHref={`mailto:${settings.email}`}
      />
      <Container className="py-14 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-10">
          <p className="text-[15.5px] leading-[1.75] text-ink-2">
            MP-365 is listed in the{" "}
            <a
              href={PARTNER_DIRECTORY}
              target="_blank"
              rel="noopener"
              data-track="partner_directory_click"
              className="font-semibold text-azure underline underline-offset-2"
            >
              Microsoft partner directory
            </a>
            .
          </p>
          <FaqSection faqs={content.faqs} />
          <p className="text-[15.5px] leading-[1.75] text-ink-2">
            <RichText text={content.closing} />
          </p>
        </div>
      </Container>
      <DarkHighlightBanner
        headline={stripInlineMarkup(content.cta.heading)}
        subheading={stripInlineMarkup(content.cta.body)}
        ctaText={stripInlineMarkup(content.cta.text)}
        ctaHref="/contact/"
      />
    </>
  );
}

import { ClientLogos } from "@/components/ClientLogos";
import { OfficeLocationCard } from "@/components/about/OfficeLocationCard";
import { ContentPage } from "@/components/site/ContentPage";
import { getPageContent } from "@/content/pages";
import { getSiteSettings } from "@/lib/data";
import { planMetadata } from "@/lib/metadata";
import clientsData from "@/store/clients.json";

const PATH = "/about/";
const PARTNER_DIRECTORY =
  "https://appsource.microsoft.com/en-US/marketplace/partner-dir/263f1063-d5d7-4d25-ac90-7b75e302003c/overview";

export const metadata = planMetadata(PATH);

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <ContentPage
      content={getPageContent(PATH)}
      eyebrow="About"
      beforeBlocks={<ClientLogos label={clientsData.label} clients={clientsData.clients} />}
      afterBlocks={
        <>
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
          <OfficeLocationCard
            address={`${settings.street}, ${settings.city}, ${settings.region} ${settings.postalCode}`}
            phone={settings.phoneDisplay}
            phoneHref={`tel:${settings.phone}`}
            email={settings.email}
            emailHref={`mailto:${settings.email}`}
          />
        </>
      }
    />
  );
}

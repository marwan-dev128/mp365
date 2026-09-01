import { MarketingHubIndex } from "@/components/marketing/HubIndex";
import { CostEstimator } from "@/components/CostEstimator";
import { getMarketingPages, getStaticPageFaqs } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Dynamics 365 & Microsoft 365 Pricing Guides",
  description:
    "What Dynamics 365, Business Central, and Microsoft 365 M&A tenant migration actually cost — real ranges and the factors that move them.",
  path: "/pricing/",
});

export default async function PricingHubPage() {
  const [pages, faqs] = await Promise.all([
    getMarketingPages("pricing"),
    getStaticPageFaqs("/pricing/"),
  ]);
  return (
    <MarketingHubIndex
      eyebrow="Pricing"
      h1="What things actually cost"
      breadcrumbName="Pricing"
      breadcrumbPath="/pricing/"
      emptyText="Pricing guides are being published — check back soon, or contact us for a scoped quote."
      pages={pages}
      hub="pricing"
      faqs={faqs}
      tool={<CostEstimator />}
    />
  );
}

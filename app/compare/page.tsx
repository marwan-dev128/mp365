import { MarketingHubIndex } from "@/components/marketing/HubIndex";
import { getMarketingPages } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 0;

export const metadata = buildMetadata({
  title: "Dynamics 365 & Microsoft 365 Comparisons",
  description:
    "Side-by-side comparisons of Dynamics 365, Business Central, and Microsoft 365 against alternatives — features, pricing model, and best-fit guidance.",
  path: "/compare/",
});

export default async function CompareHubPage() {
  const pages = await getMarketingPages("compare");
  return (
    <MarketingHubIndex
      eyebrow="Compare"
      h1="Honest comparisons, not marketing spin"
      breadcrumbName="Compare"
      breadcrumbPath="/compare/"
      emptyText="Comparison guides are being published — check back soon."
      pages={pages}
      hub="compare"
    />
  );
}

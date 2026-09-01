import { MarketingHubIndex } from "@/components/marketing/HubIndex";
import { getMarketingPages, getStaticPageFaqs } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Dynamics 365 Products — Sales, Finance, Business Central & More",
  description:
    "Every Dynamics 365 application MP365 implements — Sales, Customer Service, Finance, Supply Chain, Business Central, and Field Service.",
  path: "/dynamics-365/",
});

export default async function DynamicsHubPage() {
  const [pages, faqs] = await Promise.all([
    getMarketingPages("dynamics-365"),
    getStaticPageFaqs("/dynamics-365/"),
  ]);
  return (
    <MarketingHubIndex
      eyebrow="Dynamics 365"
      h1="Dynamics 365, by product"
      breadcrumbName="Dynamics 365"
      breadcrumbPath="/dynamics-365/"
      emptyText="Product pages are being published — see our full Dynamics 365 Consulting service in the meantime."
      pages={pages}
      hub="dynamics-365"
      faqs={faqs}
    />
  );
}

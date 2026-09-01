import { MarketingHubIndex } from "@/components/marketing/HubIndex";
import { getMarketingPages, getStaticPageFaqs } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 0;

export const metadata = buildMetadata({
  title: "Microsoft Dynamics 365 & Business Central Migration Guides",
  description:
    "Migration guides for moving off Dynamics GP, NAV, AX, Salesforce, or QuickBooks onto Dynamics 365 — what transfers, timelines, and cost factors.",
  path: "/migrations/",
});

export default async function MigrationsHubPage() {
  const [pages, faqs] = await Promise.all([
    getMarketingPages("migrations"),
    getStaticPageFaqs("/migrations/"),
  ]);
  return (
    <MarketingHubIndex
      eyebrow="Migrations"
      h1="Moving off a legacy system? Start here."
      breadcrumbName="Migrations"
      breadcrumbPath="/migrations/"
      emptyText="Migration guides are being published — check back soon, or contact us directly about your specific system."
      pages={pages}
      hub="migrations"
      faqs={faqs}
    />
  );
}

import { MarketingHubIndex } from "@/components/marketing/HubIndex";
import { getMarketingPages, getStaticPageFaqs } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Microsoft 365 & Dynamics 365 Assessments",
  description:
    "Fixed-scope assessments for tenant migration readiness, Power Platform governance, Business Central readiness, and Copilot readiness.",
  path: "/assessments/",
});

export default async function AssessmentsHubPage() {
  const [pages, faqs] = await Promise.all([
    getMarketingPages("assessments"),
    getStaticPageFaqs("/assessments/"),
  ]);
  return (
    <MarketingHubIndex
      eyebrow="Assessments"
      h1="Know the scope before you commit"
      breadcrumbName="Assessments"
      breadcrumbPath="/assessments/"
      emptyText="Assessment offers are being published — check back soon."
      pages={pages}
      hub="assessments"
      faqs={faqs}
    />
  );
}

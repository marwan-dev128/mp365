import { ContentPage } from "@/components/site/ContentPage";
import { ProjectEstimator } from "@/components/site/ProjectEstimator";
import { getPageContent } from "@/content/pages";
import { planMetadata } from "@/lib/metadata";

const PATH = "/pricing/";

export const metadata = planMetadata(PATH);

export default function PricingPage() {
  return <ContentPage content={getPageContent(PATH)} eyebrow="Pricing" afterBlocks={<ProjectEstimator />} />;
}

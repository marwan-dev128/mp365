import { ContentPage } from "@/components/site/ContentPage";
import { getPageContent } from "@/content/pages";
import { planMetadata } from "@/lib/metadata";

const PATH = "/services/";

export const metadata = planMetadata(PATH);

export default function ServicesPage() {
  return <ContentPage content={getPageContent(PATH)} eyebrow="Services" />;
}

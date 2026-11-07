import { ClientShowcase } from "@/components/site/ClientShowcase";
import { ContentPage } from "@/components/site/ContentPage";
import { getPageContent } from "@/content/pages";
import { planMetadata } from "@/lib/metadata";
import clientsData from "@/store/clients.json";

const PATH = "/clients/";

export const metadata = planMetadata(PATH);

export default function ClientsPage() {
  return (
    <ContentPage
      content={getPageContent(PATH)}
      eyebrow="Clients"
      beforeBlocks={<ClientShowcase clients={clientsData.clients} />}
    />
  );
}

import { TierComparePage } from "@/components/tiers/TierComparePage";
import { CUSTOMER_SERVICE_TIERS as PAGE } from "@/content/tiers/customer-service";
import { buildMetadata } from "@/lib/metadata";

// Not in the menu: reached through internal links from the Customer Service pages and the blog.
export const metadata = buildMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, isFullTitle: true });

export default function CustomerServiceTiersPage() {
  return <TierComparePage page={PAGE} />;
}

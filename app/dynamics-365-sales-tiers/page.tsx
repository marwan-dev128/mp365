import { TierComparePage } from "@/components/tiers/TierComparePage";
import { SALES_TIERS as PAGE } from "@/content/tiers/sales";
import { buildMetadata } from "@/lib/metadata";

// Not in the menu: reached through internal links from the Sales pages and the blog.
export const metadata = buildMetadata({ title: PAGE.title, description: PAGE.description, path: PAGE.path, isFullTitle: true });

export default function SalesTiersPage() {
  return <TierComparePage page={PAGE} />;
}

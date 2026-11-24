import { tierOgImage, OG_SIZE } from "@/components/tiers/og";
import { SALES_TIERS } from "@/content/tiers/sales";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = SALES_TIERS.h1;

export default function Image() {
  return tierOgImage(SALES_TIERS);
}

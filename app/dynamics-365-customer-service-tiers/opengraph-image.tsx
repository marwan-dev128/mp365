import { tierOgImage, OG_SIZE } from "@/components/tiers/og";
import { CUSTOMER_SERVICE_TIERS } from "@/content/tiers/customer-service";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = CUSTOMER_SERVICE_TIERS.h1;

export default function Image() {
  return tierOgImage(CUSTOMER_SERVICE_TIERS);
}

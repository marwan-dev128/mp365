import { CUSTOMER_SERVICE_TIERS } from "./customer-service";
import { SALES_TIERS } from "./sales";
import type { TierPage } from "./types";

/** The tier comparison pages. They are live but stay out of the menu. */
export const TIER_PAGES: TierPage[] = [SALES_TIERS, CUSTOMER_SERVICE_TIERS];

export const TIER_PATHS = TIER_PAGES.map((p) => p.path);

export function getTierPage(path: string): TierPage {
  const page = TIER_PAGES.find((p) => p.path === path);
  if (!page) throw new Error(`No tier page at ${path}`);
  return page;
}

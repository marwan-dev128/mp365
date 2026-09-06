import { siteStore } from "@/store";
import type { SiteStore } from "@/types/store";

/**
 * Returns the entire typed store tree.
 */
export function getSiteStore(): SiteStore {
  return siteStore as unknown as SiteStore;
}

/**
 * Returns typed navigation (Header) store data.
 */
export function getNavigationStore() {
  return siteStore.navigation;
}

/**
 * Returns typed footer store data.
 */
export function getFooterStore() {
  return siteStore.footer;
}

/**
 * Returns typed hero section store data.
 */
export function getHeroStore() {
  return siteStore.hero;
}

/**
 * Returns typed client logos store data.
 */
export function getClientsStore() {
  return siteStore.clients;
}

/**
 * Returns typed integrations hero store data.
 */
export function getIntegrationsStore() {
  return siteStore.integrations;
}

/**
 * Returns all home section store data.
 */
export function getHomeStore() {
  return siteStore.home;
}

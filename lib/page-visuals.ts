// Which photo represents each page on overview cards and carousels.
const PREFIX_IMAGES: [string, string][] = [
  // Service pages first, so the sliders on a category page show different photos.
  ["/services/dynamics-365-crm/sales/", "/images/services/dynamics-365.jpg"],
  ["/services/dynamics-365-crm/customer-service/", "/images/mp365/personas/end-users-microsoft-365-adoption.webp"],
  ["/services/dynamics-365-crm/customer-insights/", "/images/solutions/data-analytics.jpg"],
  ["/services/dynamics-365-crm/lead-management/", "/images/services/power-platform.jpg"],
  ["/services/dynamics-365-crm/security-roles-audit/", "/images/services/data-governance.jpg"],
  ["/services/dynamics-365-crm/integration-services/", "/images/services/application-modernization.jpg"],
  ["/services/sharepoint/intranet-development/", "/images/solutions/sharepoint-intranet.jpg"],
  ["/services/sharepoint/migration/", "/images/mp365/personas/it-leadership-microsoft-migration.webp"],
  ["/services/sharepoint/file-share-migration/", "/images/services/contract-management.jpg"],
  ["/services/sharepoint/supplier-partner-portals/", "/images/services/microsoft-365-migration.jpg"],
  ["/services/sharepoint/information-architecture/", "/images/services/collaboration-enablement.jpg"],
  ["/services/copilot/readiness/", "/images/mp365/discovery/tenant-migration-due-diligence.webp"],
  ["/services/copilot/sales-agents/", "/images/solutions/crm-deployment.jpg"],
  ["/services/copilot/custom-agents/", "/images/services/application-modernization.jpg"],
  ["/services/copilot/cowork/", "/images/mp365/personas/end-users-microsoft-365-adoption.webp"],
  ["/services/copilot/ai-data-governance-audit/", "/images/services/data-governance.jpg"],
  ["/services/power-platform/power-apps/", "/images/services/collaboration-enablement.jpg"],
  ["/services/power-platform/power-pages/", "/images/services/microsoft-365-migration.jpg"],
  ["/services/power-platform/power-automate/", "/images/services/power-platform.jpg"],
  ["/services/power-platform/power-bi/", "/images/solutions/data-analytics.jpg"],
  ["/services/microsoft-365-migration/exchange-online-migration/", "/images/mp365/personas/it-leadership-microsoft-migration.webp"],
  ["/services/microsoft-365-migration/onedrive-migration/", "/images/mp365/personas/end-users-microsoft-365-adoption.webp"],
  ["/services/tenant-to-tenant-migration/mailbox-teams-files/", "/images/services/ma-tenant-migration.jpg"],
  ["/services/tenant-to-tenant-migration/coexistence/", "/images/mp365/personas/ma-integration-tenant-migration.webp"],
  ["/services/data-governance/microsoft-purview/", "/images/services/data-governance.jpg"],
  ["/services/data-governance/data-quality-management/", "/images/mp365/discovery/tenant-migration-due-diligence.webp"],
  ["/services/application-modernization/legacy-migration/", "/images/services/application-modernization.jpg"],
  ["/services/application-modernization/devops-release-automation/", "/images/services/dynamics-365.jpg"],
  ["/industries/manufacturing/", "/images/mp365/industries/manufacturing.webp"],
  ["/industries/logistics-supply-chain/", "/images/mp365/industries/logistics-supply-chain.webp"],
  ["/industries/energy-utilities/", "/images/mp365/industries/energy-utilities.webp"],
  ["/industries/construction-engineering/", "/images/mp365/industries/construction-engineering.webp"],
  ["/industries/financial-services/", "/images/mp365/industries/financial-services.webp"],
  ["/industries/government/", "/images/services/microsoft-365-migration.jpg"],
  ["/industries/medical-devices/", "/images/mp365/industries/medical-devices.webp"],
  ["/industries/retail/", "/images/mp365/industries/retail.webp"],
  ["/industries/healthcare/", "/images/mp365/industries/healthcare.webp"],
  ["/solutions/sharepoint-intranet/", "/images/solutions/sharepoint-intranet.jpg"],
  ["/solutions/executive-dashboards/", "/images/solutions/data-analytics.jpg"],
  ["/solutions/crm-implementation/", "/images/solutions/crm-deployment.jpg"],
  ["/solutions/dynamics-365-migration/", "/images/services/application-modernization.jpg"],
  ["/solutions/contract-management-automation/", "/images/services/contract-management.jpg"],
  ["/solutions/m-and-a-it-integration/", "/images/services/ma-tenant-migration.jpg"],
  ["/solutions/crm-systems-integration/", "/images/services/power-platform.jpg"],
  ["/services/dynamics-365-crm/", "/images/services/dynamics-365.jpg"],
  ["/services/sharepoint/", "/images/services/collaboration-enablement.jpg"],
  ["/services/copilot/", "/images/services/application-modernization.jpg"],
  ["/services/power-platform/", "/images/services/power-platform.jpg"],
  ["/services/microsoft-365-migration/", "/images/services/microsoft-365-migration.jpg"],
  ["/services/tenant-to-tenant-migration/", "/images/services/ma-tenant-migration.jpg"],
  ["/services/data-governance/", "/images/services/data-governance.jpg"],
  ["/services/application-modernization/", "/images/services/application-modernization.jpg"],
];

export function imageForPath(path: string) {
  return PREFIX_IMAGES.find(([prefix]) => path.startsWith(prefix))?.[1] ?? "/images/services/dynamics-365.jpg";
}

// General office photos for sections inside a page.
const PHOTO_POOL = [
  "/images/services/dynamics-365.jpg",
  "/images/services/collaboration-enablement.jpg",
  "/images/mp365/personas/it-leadership-microsoft-migration.webp",
  "/images/services/application-modernization.jpg",
  "/images/solutions/data-analytics.jpg",
  "/images/services/microsoft-365-migration.jpg",
  "/images/mp365/discovery/tenant-migration-due-diligence.webp",
  "/images/services/power-platform.jpg",
  "/images/solutions/crm-deployment.jpg",
  "/images/mp365/personas/end-users-microsoft-365-adoption.webp",
  "/images/services/contract-management.jpg",
  "/images/services/ma-tenant-migration.jpg",
  "/images/mp365/personas/ma-integration-tenant-migration.webp",
  "/images/solutions/sharepoint-intranet.jpg",
];

/** The page's own photo first, then the pool, starting at a point set by the path so pages differ. */
export function imagesForPage(path: string) {
  const own = imageForPath(path);
  const pool = PHOTO_POOL.filter((image) => image !== own);
  const start = [...path].reduce((sum, c) => sum + c.charCodeAt(0), 0) % pool.length;
  return [own, ...pool.slice(start), ...pool.slice(0, start)];
}

const DIR = "/images/mp365/illustrations";
const ILLUSTRATIONS: [RegExp, string][] = [
  [/copilot|agent|\bAI\b|assistant/i, `${DIR}/ai-assistant.webp`],
  [/contract|renew|\bbid|sign|agreement/i, `${DIR}/signed-contract.webp`],
  [/permission|security|access|role|govern|complian|privacy|protect/i, `${DIR}/security-shield.webp`],
  [/migrat|move|cloud|online|upgrade|cutover|tenant/i, `${DIR}/cloud-migration.webp`],
  [/connect|integrat|sync|system|\bAPI\b/i, `${DIR}/connected-systems.webp`],
  [/intranet|portal|site|sharepoint|home page|news/i, `${DIR}/company-intranet.webp`],
  [/file|document|folder|librar|paper|record/i, `${DIR}/document-shelves.webp`],
  [/sales|lead|pipeline|quote|rfq|forecast|account|deal|crm|customer/i, `${DIR}/crm-pipeline.webp`],
  [/report|dashboard|data|kpi|power bi|numbers/i, "/images/mp365/automation/microsoft-data-integration.webp"],
  [/inventory|review|scan|assess|search|find|understand|listen|audit|inspect|problem/i, `${DIR}/magnifying-glass.webp`],
  [/test|validate|check|go-live|pilot|approv|scope|confirm/i, `${DIR}/project-checklist.webp`],
  [/plan|roadmap|design|structure|deploy|launch|release|stage|build/i, `${DIR}/project-roadmap.webp`],
  [/team|train|hand|people|user|staff|owner|member|adopt/i, `${DIR}/team-table.webp`],
  [/automat|workflow|flow|reminder/i, "/images/mp365/automation/power-automate-process-flow.webp"],
];
const ILLUSTRATION_FALLBACKS = [
  "/images/mp365/insights/microsoft-case-studies-illustration.webp",
  "/images/mp365/insights/ma-tenant-migration-risks-illustration.webp",
  "/images/mp365/insights/tenant-migration-questions-answered-illustration.webp",
  "/images/mp365/why/one-microsoft-partner-eight-services.webp",
  "/images/mp365/delivery/named-senior-engagement-team.webp",
  "/images/mp365/why/governance-approvals-workflow.webp",
  ...ILLUSTRATIONS.map(([, image]) => image),
];

/** One illustration per label, matched to its wording, with no repeats in a row. */
export function pickIllustrations(labels: string[]) {
  const used = new Set<string>();
  return labels.map((label) => {
    const match = ILLUSTRATIONS.find(([pattern, image]) => pattern.test(label) && !used.has(image))?.[1];
    const image = match ?? ILLUSTRATION_FALLBACKS.find((f) => !used.has(f)) ?? ILLUSTRATION_FALLBACKS[0];
    used.add(image);
    return image;
  });
}

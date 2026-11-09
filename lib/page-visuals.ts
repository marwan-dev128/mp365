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
const DATA = "/images/mp365/automation/microsoft-data-integration.webp";
const FLOW = "/images/mp365/automation/power-automate-process-flow.webp";
const i = (name: string) => `${DIR}/${name}.webp`;

// Most specific wording first. Each topic can hold more than one picture, so
// two cards on the same theme, or the same theme on two pages, still differ.
const ILLUSTRATIONS: [RegExp, string[]][] = [
  [/copilot|agent|AI|assistant/i, [i("ai-assistant")]],
  [/merger|acquisition|divest|two companies|both tenants|surviving tenant|buyer/i, [i("two-buildings")]],
  [/duplicate|merge|dedup|clean|quality|stale|dead record/i, [i("duplicate-merge")]],
  [/spreadsheet|excel|by hand|re-?key|re-?type|manual|twice/i, [i("spreadsheet-grid")]],
  [/mail routing|mailbox|exchange|outlook|PST|domain|signature/i, [i("mail-routing")]],
  [/e-?mail|inbox/i, [i("email-inbox")]],
  [/SLA|timer|late|slow|takes? days|too long|costs days|wait|delay|cold|idle/i, [i("stopwatch-alarm")]],
  [/case|service request|ticket|support|complaint|returns and|request/i, [i("support-desk")]],
  [/licens|identity|sign-in|login|entra|badge|onboard|offboard/i, [i("id-badge")]],
  [/server|on-prem|file share|NAS|farm|aging|2016|2019|legacy|hardware/i, [i("server-rack")]],
  [/contract|renew|bid|agreement/i, [i("signed-contract")]],
  [/label|tag|segment|classif|content type/i, [i("labelled-folder")]],
  [/permission|security|access|role|govern|complian|privacy|protect|oversharing|exposure|guardrail/i, [i("security-shield")]],
  [/campaign|journey|marketing|news|announce|outreach|consent|loyalty/i, [i("megaphone")]],
  [/migrat|move|cloud|online|upgrade|tenant/i, [i("cloud-migration")]],
  [/connect|integrat|sync|system|API/i, [i("connected-systems")]],
  [/intranet|portal|site|sharepoint|home page/i, [i("company-intranet")]],
  [/file|document|folder|librar|paper|record/i, [i("document-shelves")]],
  [/report|dashboard|kpi|power bi|numbers|trend|metric/i, [i("laptop-dashboard"), DATA]],
  [/data/i, [DATA]],
  [/sales|lead|pipeline|quote|rfq|forecast|account|deal|crm|customer|shopper/i, [i("crm-pipeline")]],
  [/pilot|test|sandbox|QA|validate/i, [i("test-lab")]],
  [/schedule|calendar|wave|batch|weekend|timeline|peak|season/i, [i("calendar-schedule")]],
  [/go live|go-live|launch|release|deploy|ship|cut ?over/i, [i("rocket-launch")]],
  [/agree|terms|scope|hand-?off|hand over|handover|supplier|partner/i, [i("handshake")]],
  [/relationship|referral|network|member|constituent|contacts|knowledge/i, [i("people-network")]],
  [/configur|setting|admin|set up|setup|rule/i, [i("settings-gears")]],
  [/unsure|begin|idea|outcome|honest|why/i, [i("lightbulb-idea")]],
  [/inventory|review|scan|assess|search|find|understand|listen|audit|inspect|problem/i, [i("magnifying-glass")]],
  [/check|approv|confirm/i, [i("project-checklist")]],
  [/plan|roadmap|design|structure|stage|build/i, [i("project-roadmap")]],
  [/team|train|people|user|staff|owner|adopt|executive|leader/i, [i("team-table"), i("people-network")]],
  [/automat|workflow|flow|reminder/i, [FLOW]],
];
const ILLUSTRATION_FALLBACKS = [
  ...new Set([
    ...ILLUSTRATIONS.flatMap(([, images]) => images),
    "/images/mp365/insights/microsoft-case-studies-illustration.webp",
    "/images/mp365/insights/ma-tenant-migration-risks-illustration.webp",
    "/images/mp365/insights/tenant-migration-questions-answered-illustration.webp",
    "/images/mp365/why/one-microsoft-partner-eight-services.webp",
  ]),
];

/** A stable number from the card labels, so each section starts somewhere different. */
function seedOf(labels: string[]) {
  return [...labels.join("|")].reduce((sum, c) => (sum * 31 + c.charCodeAt(0)) >>> 0, 7);
}

/**
 * One illustration per label, matched to its wording, never repeated inside a
 * section, or across a page when the page passes one shared `used` set. Cards
 * with no matching wording take the next unused picture from a rotating start,
 * so sections across the site do not all land on the same one.
 */
export function pickIllustrations(labels: string[], used = new Set<string>()) {
  const seed = seedOf(labels);
  const fallbacks = [
    ...ILLUSTRATION_FALLBACKS.slice(seed % ILLUSTRATION_FALLBACKS.length),
    ...ILLUSTRATION_FALLBACKS.slice(0, seed % ILLUSTRATION_FALLBACKS.length),
  ];
  return labels.map((label) => {
    let match: string | undefined;
    for (const [pattern, images] of ILLUSTRATIONS) {
      if (!pattern.test(label)) continue;
      match = images.find((image) => !used.has(image));
      if (match) break;
    }
    const image = match ?? fallbacks.find((f) => !used.has(f)) ?? fallbacks[0];
    used.add(image);
    return image;
  });
}

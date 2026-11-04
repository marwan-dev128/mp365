// Which photo represents each page on overview cards and carousels.
const PREFIX_IMAGES: [string, string][] = [
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

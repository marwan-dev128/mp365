import { ServiceCard } from "@/components/ui/ServiceCard";
import { CATEGORY_PAGES } from "@/lib/site-data";

// The site's service photography, mapped onto the plan's eight categories.
const CATEGORY_IMAGES: Record<string, string> = {
  "/services/dynamics-365-crm/": "/images/services/dynamics-365.jpg",
  "/services/sharepoint/": "/images/services/collaboration-enablement.jpg",
  "/services/copilot/": "/images/services/contract-management.jpg",
  "/services/power-platform/": "/images/services/power-platform.jpg",
  "/services/microsoft-365-migration/": "/images/services/microsoft-365-migration.jpg",
  "/services/tenant-to-tenant-migration/": "/images/services/ma-tenant-migration.jpg",
  "/services/data-governance/": "/images/services/data-governance.jpg",
  "/services/application-modernization/": "/images/services/application-modernization.jpg",
};

export function CategoryGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {CATEGORY_PAGES.map((c) => (
        <li key={c.path} className="flex">
          <ServiceCard
            name={c.name}
            description={c.meta_description}
            href={c.path}
            imageUrl={CATEGORY_IMAGES[c.path]}
          />
        </li>
      ))}
    </ul>
  );
}

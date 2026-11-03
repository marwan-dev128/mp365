// One import per written page. Generated from content/site-data.json.
import type { PageContent } from "../types";
import { page as p0 } from "./home";
import { page as p1 } from "./services";
import { page as p2 } from "./pricing";
import { page as p3 } from "./clients";
import { page as p4 } from "./about";
import { page as p5 } from "./contact";
import { page as p6 } from "./services__dynamics-365-crm";
import { page as p7 } from "./services__dynamics-365-crm__sales";
import { page as p8 } from "./services__dynamics-365-crm__customer-service";
import { page as p9 } from "./services__dynamics-365-crm__customer-insights";
import { page as p10 } from "./services__dynamics-365-crm__lead-management";
import { page as p11 } from "./services__dynamics-365-crm__security-roles-audit";
import { page as p12 } from "./services__dynamics-365-crm__integration-services";
import { page as p13 } from "./services__sharepoint";
import { page as p14 } from "./services__sharepoint__intranet-development";
import { page as p15 } from "./services__sharepoint__migration";
import { page as p16 } from "./services__sharepoint__file-share-migration";
import { page as p17 } from "./services__sharepoint__supplier-partner-portals";
import { page as p18 } from "./services__sharepoint__information-architecture";
import { page as p19 } from "./services__copilot";
import { page as p20 } from "./services__copilot__readiness";
import { page as p21 } from "./services__copilot__sales-agents";
import { page as p22 } from "./services__copilot__custom-agents";
import { page as p23 } from "./services__copilot__cowork";
import { page as p24 } from "./services__copilot__ai-data-governance-audit";
import { page as p25 } from "./services__power-platform";
import { page as p26 } from "./services__power-platform__power-apps";
import { page as p27 } from "./services__power-platform__power-pages";
import { page as p28 } from "./services__power-platform__power-automate";
import { page as p29 } from "./services__power-platform__power-bi";
import { page as p30 } from "./services__microsoft-365-migration";
import { page as p31 } from "./services__microsoft-365-migration__exchange-online-migration";
import { page as p32 } from "./services__microsoft-365-migration__onedrive-migration";
import { page as p33 } from "./services__tenant-to-tenant-migration";
import { page as p34 } from "./services__tenant-to-tenant-migration__mailbox-teams-files";
import { page as p35 } from "./services__tenant-to-tenant-migration__coexistence";
import { page as p36 } from "./services__data-governance";
import { page as p37 } from "./services__data-governance__microsoft-purview";
import { page as p38 } from "./services__data-governance__data-quality-management";
import { page as p39 } from "./services__application-modernization";
import { page as p40 } from "./services__application-modernization__legacy-migration";
import { page as p41 } from "./services__application-modernization__devops-release-automation";

export const PAGE_CONTENT: PageContent[] = [
  p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41,
];

export function getPageContent(path: string): PageContent {
  const page = PAGE_CONTENT.find((p) => p.path === path);
  if (!page) throw new Error(`content/pages has no page at ${path}`);
  return page;
}

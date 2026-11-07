// Generated list of the imported posts, newest first (sorted at runtime).
import type { BlogPost } from "../blog";
import { post as aClientsFixDuplicateCasesInDynamics365CustomerService } from "./a-clients-fix-duplicate-cases-in-dynamics-365-customer-service";
import { post as aiSalesToolsGuide } from "./ai-sales-tools-guide";
import { post as clientFixManualToAutomaticSalesTracking } from "./client-fix-manual-to-automatic-sales-tracking";
import { post as clientIssueDelayedLeadsFromWebsiteDynamics365Fix } from "./client-issue-delayed-leads-from-website-dynamics-365-fix";
import { post as copilotAgentsDynamics365BusinessAutomation } from "./copilot-agents-dynamics-365-business-automation";
import { post as customerServiceCaseRoutingFixingSharedInbox } from "./customer-service-case-routing-fixing-shared-inbox";
import { post as differenceBetweenCopilotM365CopilotAgentsCoworkExplained } from "./difference-between-copilot-m365-copilot-agents-cowork-explained";
import { post as dynamics365SalesLeadQualificationSetup } from "./dynamics-365-sales-lead-qualification-setup";
import { post as dynamics365SalesQuoteDelaysCrmErpClientFix } from "./dynamics-365-sales-quote-delays-crm-erp-client-fix";
import { post as dynamics365SlaBreaches } from "./dynamics-365-sla-breaches";
import { post as dynamics365StorageCapacityIssuesClientFix } from "./dynamics-365-storage-capacity-issues-client-fix";
import { post as fixingManualSalesForecastingDynamics365ClientExample } from "./fixing-manual-sales-forecasting-dynamics-365-client-example";
import { post as howToUseMicrosoftCopilotToSuperchargeYourProductivity } from "./how-to-use-microsoft-copilot-to-supercharge-your-productivity";
import { post as microsoft365CopilotChatInterfaceRedesign } from "./microsoft-365-copilot-chat-interface-redesign";
import { post as microsoftCopilotCoworkInDynamics365 } from "./microsoft-copilot-cowork-in-dynamics-365";
import { post as microsoftCopilotForBusinessDynamics365Automation } from "./microsoft-copilot-for-business-dynamics-365-automation";
import { post as salesAiToolsForDynamics365 } from "./sales-ai-tools-for-dynamics-365";
import { post as salesforceVsDynamics365Sales } from "./salesforce-vs-dynamics-365-sales";
import { post as whatIsCopilotCowork } from "./what-is-copilot-cowork";
import { post as whatIsDynamics365SalesEnterprise } from "./what-is-dynamics-365-sales-enterprise";
import { post as whatIsDynamics365SalesPremium } from "./what-is-dynamics-365-sales-premium";
import { post as whatIsDynamics365SalesProfessional } from "./what-is-dynamics-365-sales-professional";
import { post as whatIsMicrosoftDynamics365 } from "./what-is-microsoft-dynamics-365";
import { post as whatIsMicrosoftDynamics365CustomerService } from "./what-is-microsoft-dynamics-365-customer-service";
import { post as whatIsMicrosoftDynamics365Sales } from "./what-is-microsoft-dynamics-365-sales";
import { post as whyArtificialIntelligenceFailsInProjects } from "./why-artificial-intelligence-fails-in-projects";

// A heading with no paragraphs of its own (a heading over a list) is moved onto
// the block that follows it, so the article never renders an empty section.
function normalize(post: BlogPost): BlogPost {
  const body: BlogPost["body"] = [];
  for (let i = 0; i < post.body.length; i++) {
    const block = post.body[i];
    const next = post.body[i + 1];
    if (block.type === "prose" && block.paragraphs.length === 0 && block.heading && next && !next.heading) {
      body.push({ ...next, heading: block.heading, level: block.level });
      i++;
      continue;
    }
    body.push(block);
  }
  return { ...post, body };
}

export const blogPosts: BlogPost[] = [
  aClientsFixDuplicateCasesInDynamics365CustomerService,
  aiSalesToolsGuide,
  clientFixManualToAutomaticSalesTracking,
  clientIssueDelayedLeadsFromWebsiteDynamics365Fix,
  copilotAgentsDynamics365BusinessAutomation,
  customerServiceCaseRoutingFixingSharedInbox,
  differenceBetweenCopilotM365CopilotAgentsCoworkExplained,
  dynamics365SalesLeadQualificationSetup,
  dynamics365SalesQuoteDelaysCrmErpClientFix,
  dynamics365SlaBreaches,
  dynamics365StorageCapacityIssuesClientFix,
  fixingManualSalesForecastingDynamics365ClientExample,
  howToUseMicrosoftCopilotToSuperchargeYourProductivity,
  microsoft365CopilotChatInterfaceRedesign,
  microsoftCopilotCoworkInDynamics365,
  microsoftCopilotForBusinessDynamics365Automation,
  salesAiToolsForDynamics365,
  salesforceVsDynamics365Sales,
  whatIsCopilotCowork,
  whatIsDynamics365SalesEnterprise,
  whatIsDynamics365SalesPremium,
  whatIsDynamics365SalesProfessional,
  whatIsMicrosoftDynamics365,
  whatIsMicrosoftDynamics365CustomerService,
  whatIsMicrosoftDynamics365Sales,
  whyArtificialIntelligenceFailsInProjects,
]
  .map(normalize)
  .sort((a, b) => b.datePublished.localeCompare(a.datePublished));

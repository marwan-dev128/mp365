import { CostEstimator } from "@/components/CostEstimator";
import { TimelineEstimator } from "@/components/TimelineEstimator";
import { TOOL_ANCHOR, type IndustryReadinessQuestion, type IndustryTool } from "@/lib/industry-conversion";
import { IndustryReadinessCheck } from "./IndustryReadinessCheck";

/** Label for the hero's secondary button, per tool. Null hides the button. */
export function toolCtaLabel(tool: IndustryTool | null, industryName: string): string | null {
  switch (tool) {
    case "readiness":
      return `Run the ${industryName.toLowerCase()} check`;
    case "cost":
      return "Estimate the cost range";
    case "timeline":
      return "Estimate the timeline";
    default:
      return null;
  }
}

export function IndustryToolSlot({
  tool,
  industryName,
  industrySlug,
  sourcePath,
  questions,
}: {
  tool: IndustryTool | null;
  industryName: string;
  industrySlug: string;
  sourcePath: string;
  questions: IndustryReadinessQuestion[];
}) {
  if (tool === "readiness" && questions.length > 0) {
    return (
      <IndustryReadinessCheck
        id={TOOL_ANCHOR}
        title={`${industryName} readiness check`}
        questions={questions}
        industrySlug={industrySlug}
        sourcePath={sourcePath}
      />
    );
  }
  if (tool === "cost" || tool === "timeline") {
    return (
      <div id={TOOL_ANCHOR} className="scroll-mt-28">
        {tool === "cost" ? <CostEstimator /> : <TimelineEstimator />}
      </div>
    );
  }
  return null;
}

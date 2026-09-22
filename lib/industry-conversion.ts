// Runtime parsing for the Industry conversion-layer JSON columns
// (prisma/schema.prisma → Industry). Prisma types Json columns as
// JsonValue, so every read goes through these guards rather than a cast
// scattered across the route. Malformed rows degrade to "section hidden".

import type {
  IndustryProofMetric,
  IndustryReadinessQuestion,
  IndustrySidebarCta,
  IndustryTool,
  IndustryTrigger,
} from "../prisma/seed-data/industries";

export type {
  IndustryProofMetric,
  IndustryReadinessQuestion,
  IndustrySidebarCta,
  IndustryTool,
  IndustryTrigger,
};

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj => typeof v === "object" && v !== null && !Array.isArray(v);
const str = (v: unknown): v is string => typeof v === "string" && v.trim().length > 0;

function arrayOf<T>(value: unknown, guard: (v: Obj) => boolean): T[] {
  return Array.isArray(value) ? (value.filter((v) => isObj(v) && guard(v)) as T[]) : [];
}

export const parseProofMetrics = (v: unknown) =>
  arrayOf<IndustryProofMetric>(v, (o) => str(o.value) && str(o.label));

export const parseTriggers = (v: unknown) =>
  arrayOf<IndustryTrigger>(v, (o) => str(o.title) && str(o.body) && str(o.topic));

export const parseReadinessQuestions = (v: unknown) =>
  arrayOf<IndustryReadinessQuestion>(v, (o) => str(o.q) && str(o.riskIfYes));

export function parseSidebarCta(v: unknown): IndustrySidebarCta | null {
  return isObj(v) && str(v.tag) && str(v.title) && str(v.body) && str(v.ctaText)
    ? (v as IndustrySidebarCta)
    : null;
}

const TOOLS: IndustryTool[] = ["timeline", "cost", "readiness"];
export function parseTool(v: unknown): IndustryTool | null {
  return TOOLS.includes(v as IndustryTool) ? (v as IndustryTool) : null;
}

/** Anchor ids shared by the hero CTAs, trigger cards, sticky bar and form. */
export const CONSULT_ANCHOR = "consult";
export const TOOL_ANCHOR = "check";

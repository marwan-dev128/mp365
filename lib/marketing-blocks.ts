// Typed content blocks for the /migrations, /compare, /pricing, and
// /assessments hubs (MarketingPage.sections in prisma/schema.prisma).
// Rendered by components/marketing/PageBody.tsx.

export type ProseBlock = { type: "prose"; heading?: string; paragraphs: string[] };
export type TableBlock = { type: "table"; heading?: string; headers: string[]; rows: string[][] };
export type StepsBlock = {
  type: "steps";
  heading?: string;
  steps: { name: string; description: string }[];
};
export type PriceRangeBlock = {
  type: "price-range";
  heading?: string;
  tiers: { label: string; range: string; note?: string }[];
  disclaimer?: string;
};
export type ListBlock = { type: "list"; heading?: string; items: string[] };

export type MarketingBlock = ProseBlock | TableBlock | StepsBlock | PriceRangeBlock | ListBlock;

export function parseBlocks(sections: unknown): MarketingBlock[] {
  return Array.isArray(sections) ? (sections as MarketingBlock[]) : [];
}

export function stepsFromBlocks(blocks: MarketingBlock[]) {
  const stepsBlock = blocks.find((b): b is StepsBlock => b.type === "steps");
  return stepsBlock?.steps ?? [];
}

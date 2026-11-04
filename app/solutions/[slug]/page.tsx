import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/site/ContentPage";
import { getPageContent } from "@/content/pages";
import { planMetadata } from "@/lib/metadata";
import { childrenOf } from "@/lib/site-data";

// Only the paths in content/site-data.json exist; anything else is a 404.
export const dynamicParams = false;

const SOLUTIONS = childrenOf("/solutions/");

export function generateStaticParams() {
  return SOLUTIONS.map((p) => ({ slug: p.path.split("/")[2] }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return planMetadata(`/solutions/${slug}/`);
}

export default async function SolutionPage({ params }: Params) {
  const { slug } = await params;
  const path = `/solutions/${slug}/`;
  if (!SOLUTIONS.some((p) => p.path === path)) notFound();
  return <ContentPage content={getPageContent(path)} eyebrow="Solutions" />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/site/ContentPage";
import { getPageContent } from "@/content/pages";
import { planMetadata } from "@/lib/metadata";
import { CATEGORY_PAGES } from "@/lib/site-data";

// Only the paths in content/site-data.json exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORY_PAGES.map((p) => ({ category: p.path.split("/")[2] }));
}

type Params = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  return planMetadata(`/services/${category}/`);
}

export default async function CategoryPage({ params }: Params) {
  const { category } = await params;
  const path = `/services/${category}/`;
  if (!CATEGORY_PAGES.some((p) => p.path === path)) notFound();
  return <ContentPage content={getPageContent(path)} eyebrow="Services" />;
}

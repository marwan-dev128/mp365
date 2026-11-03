import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/site/ContentPage";
import { getPageContent } from "@/content/pages";
import { planMetadata } from "@/lib/metadata";
import { getSitePage, LIVE_PAGES } from "@/lib/site-data";

// Only the paths in content/site-data.json exist; anything else is a 404.
export const dynamicParams = false;

const SERVICE_PAGES = LIVE_PAGES.filter((p) => p.type === "Service");

export function generateStaticParams() {
  return SERVICE_PAGES.map((p) => {
    const [, , category, slug] = p.path.split("/");
    return { category, slug };
  });
}

type Params = { params: Promise<{ category: string; slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category, slug } = await params;
  return planMetadata(`/services/${category}/${slug}/`);
}

export default async function ServicePage({ params }: Params) {
  const { category, slug } = await params;
  const path = `/services/${category}/${slug}/`;
  if (!SERVICE_PAGES.some((p) => p.path === path)) notFound();
  const parent = getSitePage(getSitePage(path).parent_path as string);
  return <ContentPage content={getPageContent(path)} eyebrow={parent.name} />;
}

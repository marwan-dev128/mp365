import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { ArrowUp, ArrowUpRight } from "@/components/ui/Icons";
import { SITE_URL } from "@/lib/config";
import { articleSchema, personSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import {
  getBlogClusterCta,
  getRelatedBlogPosts,
  type getBlogPostBySlug,
} from "@/lib/data";
import { buildSections, parseBlogBody, readingTime, tocFromSections } from "@/lib/blog";
import { stripInlineMarkup } from "@/lib/richtext";
import { ArticleBody } from "./ArticleBody";
import { AuthorCard } from "./AuthorCard";
import { ReadingProgress } from "./ReadingProgress";
import { RelatedArticles } from "./RelatedArticles";
import { SocialShare } from "./SocialShare";
import { TableOfContents } from "./TableOfContents";
import { SidebarCta } from "@/components/SidebarCta";

type BlogPost = NonNullable<Awaited<ReturnType<typeof getBlogPostBySlug>>>;

/**
 * mp-styled Blog Post Detail Layout.
 * Enhanced with rich homepage-grade design tokens:
 * - Ambient mesh editorial header with category pill, reading time badge, author chip
 * - Breadcrumbs bar with subtle border
 * - 12-column grid with sticky left Table of Contents sidebar & scroll spy
 * - Executive Key Takeaways highlight box with Petrol/Mint accents
 * - Editorial typography prose & callout boxes
 * - contentArticleEndTwoColumn: 2-column dark CTA banner with Saffron CTA button
 * - Related articles 3-column card grid with hover arrow animation
 */
export async function BlogPostLayout({ post }: { post: BlogPost }) {
  const blocks = parseBlogBody(post.body);
  const sections = buildSections(blocks);
  const toc = tocFromSections(sections);
  const reading = readingTime(blocks);
  const path = `/blog/${post.slug}/`;
  const url = `${SITE_URL}${path}`;
  const [cta, related] = await Promise.all([
    getBlogClusterCta(post.cluster),
    getRelatedBlogPosts(post.slug, 3),
  ]);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: post.clusterLabel, path: "/blog/" },
    { name: post.title, path },
  ];

  const dateFormatted = post.datePublished.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      {post.published && (
        <>
          <JsonLd
            data={webPageSchema({
              path,
              name: post.title,
              description: post.metaDescription,
              mainEntityId: `${url}#article`,
              datePublished: post.datePublished.toISOString(),
              dateModified: post.dateModified.toISOString(),
            })}
          />
          <JsonLd
            data={articleSchema({
              type: "BlogPosting",
              headline: post.title,
              description: post.metaDescription,
              path,
              datePublished: post.datePublished.toISOString(),
              dateModified: post.dateModified.toISOString(),
              authorName: post.author.name,
              authorSlug: post.author.slug,
              articleSection: post.clusterLabel,
              wordCount: reading.words,
              timeRequired: reading.iso,
              isPartOfPath: "/blog/",
              ...(post.imageUrl ? { imagePath: post.imageUrl } : {}),
            })}
          />
          <JsonLd
            data={personSchema({
              slug: post.author.slug,
              name: post.author.name.replace(/^Dr\.\s+/, ""),
              jobTitle: post.author.role,
              description: post.author.credentials,
              ...(post.author.name.startsWith("Dr. ") ? { honorificPrefix: "Dr." } : {}),
            })}
          />
          <JsonLd data={breadcrumbSchema(breadcrumbs)} />
        </>
      )}

      <ReadingProgress targetId="article-body" />

      {/* Editorial Rich Header Simple Section */}
      <header className="w-full relative overflow-hidden bg-mp-parchment border-b border-mp-border pt-14 sm:pt-20 pb-12 sm:pb-16 -mt-1">
        {/* Background mesh glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[900px] rounded-full bg-gradient-to-br from-mp-petrol/10 via-mp-mint/10 to-transparent blur-3xl opacity-70"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Category & Topic Badges */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="text-[11.5px] font-mono font-bold uppercase tracking-[0.14em] text-mp-petrol bg-white border border-mp-petrol/20 px-4 py-1 rounded-full shadow-2xs">
                {post.clusterLabel}
              </span>
              <span className="inline-flex items-center text-[11.5px] font-mono font-bold uppercase tracking-[0.12em] text-mp-muted bg-white/70 border border-mp-border px-3 py-1 rounded-full">
                Enterprise Architectural Guide
              </span>
            </div>

            <h1 className="font-display text-[32px] sm:text-[46px] lg:text-[54px] font-bold text-mp-ink tracking-tight leading-[1.08] text-balance">
              {post.title}
            </h1>

            {/* Author & Reading Time Metadata */}
            <div className="text-[13px] sm:text-[14px] text-mp-secondary mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 font-medium">
              <time dateTime={post.datePublished.toISOString()} className="font-semibold text-mp-ink">
                {dateFormatted}
              </time>
              <span className="text-mp-muted">•</span>
              <time dateTime={reading.iso} className="font-semibold text-mp-petrol">
                {reading.text}
              </time>
              <span className="text-mp-muted">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-mp-muted">By</span>
                <Link
                  href="/about/"
                  className="font-bold text-mp-ink hover:text-mp-petrol hover:underline"
                >
                  {post.author.name}
                </Link>
                <span className="text-mp-muted">({post.author.role})</span>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Breadcrumbs Navigation */}
      <div className="w-full border-b border-mp-border-subtle bg-white">
        <Container className="py-3.5">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12px] font-mono text-mp-muted">
              <li>
                <Link href="/" className="hover:text-mp-ink hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-mp-muted">/</span>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-mp-ink hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-mp-muted">/</span>
              </li>
              <li className="text-mp-ink font-semibold truncate max-w-[280px] sm:max-w-md">
                {post.title}
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Main 12-Column Layout */}
      <Container className="pt-10 lg:pt-14 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Desktop Left Sticky Table of Contents Sidebar */}
          <aside className="col-span-12 lg:col-span-3 hidden lg:block sticky top-[110px] self-start max-h-[calc(100vh-130px)] overflow-y-auto pr-4 border-r border-mp-border">
            <div className="flex flex-col gap-6">
              <TableOfContents items={toc} />
              
              <div className="pt-4 border-t border-mp-border">
                <SocialShare url={url} title={post.title} />
              </div>
            </div>
          </aside>

          {/* Article Main Column */}
          <article id="article-top" className="col-span-12 lg:col-span-6 min-w-0">
            {/* Mobile Table of Contents */}
            <div className="lg:hidden">
              <TableOfContents items={toc} variant="mobile" />
            </div>

            {/* Executive Key Takeaways Highlight Box */}
            {post.excerpt && (
              <div className="bg-mp-parchment border border-mp-border rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 mb-10">
                <h2 className="text-[14px] sm:text-[15px] font-bold text-mp-petrol uppercase tracking-wider mb-2">
                  Executive Key Takeaways
                </h2>
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-mp-ink font-normal">
                  {stripInlineMarkup(post.excerpt)}
                </p>
              </div>
            )}

            {/* Article Prose Content */}
            <div id="article-body">
              <ArticleBody sections={sections} />
            </div>

            {/* FAQ Section */}
            {post.faqs.length > 0 && (
              <div className="mt-14 pt-8 border-t border-mp-border">
                <FaqSection faqs={post.faqs} path={path} title="Frequently asked questions" />
              </div>
            )}

            {/* Mobile Sidebar CTA Card */}
            <div className="lg:hidden my-8">
              <SidebarCta
                tag={cta?.tag || "Migration guidance"}
                title={cta?.title || "Working to a Day-1 or TSA-exit date?"}
                body={cta?.body || "Tell us the deal timeline and we will tell you whether the migration plan fits it."}
                ctaText={cta?.ctaText || "Talk to a migration lead"}
                ctaHref={cta?.ctaHref || "/contact/"}
              />
            </div>

            {/* Author Card */}
            <AuthorCard author={post.author} />

            {/* Footer Share & Back to Top */}
            <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-mp-border pt-8">
              <SocialShare url={url} title={post.title} />
              <a
                href="#article-top"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-mono font-bold uppercase tracking-wider text-mp-ink hover:text-mp-petrol transition-colors"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                Back to top
              </a>
            </footer>
          </article>

          {/* Desktop Right Sticky Sidebar with Migration Guidance Card */}
          <aside className="col-span-12 lg:col-span-3 hidden lg:block sticky top-[110px] self-start pl-2">
            <SidebarCta
              tag={cta?.tag || "Migration guidance"}
              title={cta?.title || "Working to a Day-1 or TSA-exit date?"}
              body={cta?.body || "Tell us the deal timeline and we will tell you whether the migration plan fits it."}
              ctaText={cta?.ctaText || "Talk to a migration lead"}
              ctaHref={cta?.ctaHref || "/contact/"}
            />
          </aside>
        </div>
      </Container>

      {/* mp 2-Column Dark CTA Banner: contentArticleEndTwoColumn */}
      <Container className="my-8">
        <div className="w-full relative bg-mp-petrol-deep text-white rounded-[28px] sm:rounded-[36px] overflow-hidden p-8 sm:p-12 lg:p-14 border border-mp-petrol/30 shadow-md">
          {/* Subtle gradient accent */}
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-mp-mint/10 blur-3xl" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Image Column */}
            <div className="col-span-full md:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-white/15 bg-mp-dark-subtle shadow-sm">
                <Image
                  src="/images/mp365/case-studies/hunter-panels-dynamics-365.webp"
                  alt="Enterprise Modernization Platform"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mp-petrol-deep/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 bg-mp-petrol-deep/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono font-bold text-mp-mint">
                  MP365 Zero-Downtime Delivery Platform
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="col-span-full md:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-mp-mint self-start">
                <span>Senior Engineering Desk</span>
              </div>

              <h2 className="font-display text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.12]">
                Make business operations &amp; cloud migrations simpler
              </h2>
              
              <ul className="flex flex-col gap-3 text-[15px] sm:text-[16px] text-mp-border leading-relaxed list-disc list-inside">
                <li>
                  <Link
                    href="/contact/"
                    className="font-bold text-mp-mint underline hover:no-underline hover:text-white transition-colors"
                  >
                    See our migration platform in action
                  </Link>
                  . MP365 unites tenant migration, Dynamics 365 ERP, and Power Platform automation into one cohesive delivery model.
                </li>
                <li>
                  Discover our{" "}
                  <Link
                    href="/resources/worked-examples/"
                    className="font-bold text-mp-mint underline hover:no-underline hover:text-white transition-colors"
                  >
                    worked examples
                  </Link>
                  ,{" "}
                  <Link
                    href="/case-studies/"
                    className="font-bold text-mp-mint underline hover:no-underline hover:text-white transition-colors"
                  >
                    client case studies
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/"
                    className="font-bold text-mp-mint underline hover:no-underline hover:text-white transition-colors"
                  >
                    blog guides
                  </Link>{" "}
                  for zero-downtime execution.
                </li>
                <li>
                  Never miss another update. Stay in touch with our team for the latest architectural best practices and enterprise guidance.
                </li>
              </ul>

              <div className="pt-3">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2.5 rounded-full bg-mp-saffron text-mp-ink px-7 py-3.5 text-[14px] font-bold uppercase tracking-wider hover:bg-mp-saffron-hover transition-all shadow-sm mp-press"
                >
                  <span>Talk to our team</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Related Articles Rail */}
      {related.length > 0 && (
        <Container className="pb-16">
          <RelatedArticles
            posts={related.map((p) => {
              const t = readingTime(parseBlogBody(p.body));
              return {
                slug: p.slug,
                title: p.title,
                excerpt: stripInlineMarkup(p.excerpt),
                clusterLabel: p.clusterLabel,
                datePublished: p.datePublished,
                readingText: t.text,
                readingIso: t.iso,
                imageUrl: p.imageUrl,
                imageAlt: p.imageAlt,
              };
            })}
          />
        </Container>
      )}
    </>
  );
}

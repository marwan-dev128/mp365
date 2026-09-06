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
 * Matches mp's layout:
 * - headerSimple: off-white header with category badge, large H1, date & reading time
 * - Breadcrumbs bar
 * - 12-column grid with sticky left Table of Contents sidebar
 * - Key takeaways highlight box
 * - Editorial typography prose
 * - contentArticleEndTwoColumn: 2-column dark CTA banner
 * - Related articles 3-column card grid
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

      {/* mp Header Simple Section */}
      <header className="w-full relative bg-mp-parchment border-b border-mp-border pt-14 sm:pt-20 pb-12 sm:pb-16 -mt-1">
        <Container>
          <div className="max-w-4xl">
            <div className="mb-4 inline-block">
              <span className="text-[11.5px] font-mono font-bold uppercase tracking-[0.14em] text-mp-ink bg-white border border-mp-border px-3.5 py-1 rounded-full shadow-2xs">
                {post.clusterLabel}
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-mp-ink tracking-tight leading-[1.12] text-balance">
              {post.title}
            </h1>

            <div className="text-[12.5px] sm:text-[13px] font-mono uppercase tracking-wider text-mp-muted mt-6 flex flex-wrap items-center gap-2.5">
              <time dateTime={post.datePublished.toISOString()}>{dateFormatted}</time>
              <span>•</span>
              <time dateTime={reading.iso}>{reading.text}</time>
              <span>•</span>
              <span>
                By{" "}
                <Link
                  href="/about/"
                  className="font-bold text-mp-ink hover:underline"
                >
                  {post.author.name}
                </Link>
              </span>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Desktop Left Sticky Table of Contents Sidebar */}
          <aside className="col-span-3 hidden lg:block sticky top-[110px] self-start max-h-[calc(100vh-130px)] overflow-y-auto pr-6 border-r border-mp-border">
            <div className="flex flex-col gap-6">
              <TableOfContents items={toc} />
              
              <div className="pt-4 border-t border-mp-border">
                <SocialShare url={url} title={post.title} />
              </div>

              {cta && (
                <div className="pt-2">
                  <SidebarCta
                    tag={cta.tag}
                    title={cta.title}
                    body={cta.body}
                    ctaText={cta.ctaText}
                    ctaHref={cta.ctaHref}
                  />
                </div>
              )}
            </div>
          </aside>

          {/* Article Main Column */}
          <article id="article-top" className="col-span-12 lg:col-span-8 lg:col-start-4 min-w-0">
            {/* Mobile Table of Contents */}
            <div className="lg:hidden">
              <TableOfContents items={toc} variant="mobile" />
            </div>

            {/* Key Takeaways Highlight Box */}
            {post.excerpt && (
              <div className="bg-mp-parchment border border-mp-border rounded-[22px] md:rounded-[26px] p-6 sm:p-10 mb-10 shadow-2xs">
                <h2 className="text-[18px] sm:text-[20px] font-bold text-mp-ink mb-3">
                  Key takeaways
                </h2>
                <div className="text-[15.5px] sm:text-[16.5px] leading-relaxed text-mp-secondary">
                  <p>{stripInlineMarkup(post.excerpt)}</p>
                </div>
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

            {/* Author Card */}
            <AuthorCard author={post.author} />

            {/* Footer Share & Back to Top */}
            <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-mp-border pt-8">
              <SocialShare url={url} title={post.title} />
              <a
                href="#article-top"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-mono font-bold uppercase tracking-wider text-mp-ink hover:text-mp-muted"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                Back to top
              </a>
            </footer>
          </article>
        </div>
      </Container>

      {/* mp 2-Column Dark CTA Banner: contentArticleEndTwoColumn */}
      <Container className="my-8">
        <div className="w-full relative bg-mp-ink text-white rounded-[28px] overflow-hidden p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image Column */}
            <div className="col-span-full md:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-white/10 bg-mp-dark-subtle">
                <Image
                  src="/images/mp365/case-studies/hunter-panels-dynamics-365.webp"
                  alt="Enterprise Modernization Platform"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mp-ink/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="col-span-full md:col-span-7 flex flex-col gap-5">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.15]">
                Make business operations &amp; cloud migrations simpler
              </h2>
              
              <ul className="flex flex-col gap-3 text-[15px] sm:text-[16px] text-mp-border leading-relaxed list-disc list-inside">
                <li>
                  <Link
                    href="/contact/"
                    className="font-bold text-white underline hover:no-underline hover:text-mp-mint transition-colors"
                  >
                    See our migration platform in action
                  </Link>
                  . MP365 unites tenant migration, Dynamics 365 ERP, and Power Platform automation into one cohesive delivery model.
                </li>
                <li>
                  Discover our{" "}
                  <Link
                    href="/resources/worked-examples/"
                    className="font-bold text-white underline hover:no-underline hover:text-mp-mint transition-colors"
                  >
                    worked examples
                  </Link>
                  ,{" "}
                  <Link
                    href="/case-studies/"
                    className="font-bold text-white underline hover:no-underline hover:text-mp-mint transition-colors"
                  >
                    client case studies
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/"
                    className="font-bold text-white underline hover:no-underline hover:text-mp-mint transition-colors"
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
                  className="inline-flex items-center gap-2 rounded-full bg-mp-lime text-mp-ink px-6 py-3 text-[14px] font-mono font-bold uppercase tracking-wider hover:bg-mp-lime-hover transition-all shadow-md"
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

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { RelatedSidebar } from "@/components/RelatedSidebar";
import { FaqSection } from "@/components/FaqSection";
import { ArrowUp } from "@/components/ui/Icons";
import { SITE_URL } from "@/lib/config";
import { articleSchema, personSchema, webPageSchema } from "@/lib/schema";
import {
  getBlogClusterCta,
  getBlogRelatedServices,
  getRelatedBlogPosts,
  type getBlogPostBySlug,
} from "@/lib/data";
import { buildSections, parseBlogBody, readingTime, tocFromSections } from "@/lib/blog";
import { stripInlineMarkup } from "@/lib/richtext";
import { ArticleBody } from "./ArticleBody";
import { ArticleMeta } from "./ArticleMeta";
import { AuthorCard } from "./AuthorCard";
import { BlogSidebar } from "./BlogSidebar";
import { ReadingProgress } from "./ReadingProgress";
import { RelatedArticles } from "./RelatedArticles";
import { SocialShare } from "./SocialShare";
import { TableOfContents } from "./TableOfContents";

type BlogPost = NonNullable<Awaited<ReturnType<typeof getBlogPostBySlug>>>;

/**
 * THE blog article template. Every post at /blog/[slug]/ renders through this
 * one component, so contents, reading progress, reading time, breadcrumbs,
 * structured data, share controls, the sidebar CTA and the related rail all
 * arrive automatically for any post the CMS gains — nothing here is keyed off
 * a particular slug.
 *
 * Everything displayed is derived from the BlogPost row: the table of
 * contents from the body's headings, reading time from its word count, the
 * sidebar CTA and related services from its cluster, related articles from
 * cluster plus recency. A post with no headings renders no contents; a post
 * whose cluster maps to no live service renders no service links. Nothing is
 * invented to fill a slot.
 */
export async function BlogPostLayout({ post }: { post: BlogPost }) {
  const blocks = parseBlogBody(post.body);
  const sections = buildSections(blocks);
  const toc = tocFromSections(sections);
  const reading = readingTime(blocks);
  const path = `/blog/${post.slug}/`;
  const url = `${SITE_URL}${path}`;
  const [cta, related, relatedServices] = await Promise.all([
    getBlogClusterCta(post.cluster),
    getRelatedBlogPosts(post.slug, 3),
    getBlogRelatedServices(post.cluster),
  ]);

  return (
    <>
      {/* Draft posts stay reachable by URL for review but must not be
          described to crawlers — same rule as the noindex in generateMetadata. */}
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
        </>
      )}

      <ReadingProgress targetId="article-body" />

      <PageHero
        eyebrow={post.clusterLabel}
        h1={post.title}
        imageUrl={post.imageUrl}
        imageAlt={post.imageAlt}
        breadcrumbs={[
          { name: "Blog", path: "/blog/" },
          { name: post.title, path },
        ]}
      />

      <Container className="pt-10 pb-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
          <div className="min-w-0">
            <article id="article-top" className="scroll-mt-28">
              <header className="flex flex-col gap-6 border-b border-line pb-8">
                <ArticleMeta
                  category={post.clusterLabel}
                  author={post.author}
                  datePublished={post.datePublished}
                  dateModified={post.dateModified}
                  reading={reading}
                />
                {/* The CMS excerpt used as a standfirst — the editor's own
                    one-line summary, not a second copy of the lead paragraph
                    and not generated. */}
                {post.excerpt && (
                  <p className="max-w-[640px] font-display text-[17px] font-medium leading-[1.55] text-ink sm:text-[19px]">
                    {stripInlineMarkup(post.excerpt)}
                  </p>
                )}
                <SocialShare url={url} title={post.title} />
              </header>

              <div className="pt-8 lg:hidden">
                <TableOfContents items={toc} variant="mobile" />
              </div>

              {/* The reading-progress target is the prose itself, so the
                  byline, share row and footer do not count as "read". */}
              <div id="article-body" className="pt-9">
                <ArticleBody sections={sections} />
              </div>

              {/* FaqSection emits the FAQPage JSON-LD bound to this page's
                  @id, the same component every other content type uses. */}
              {post.faqs.length > 0 && (
                <div className="mt-14">
                  <FaqSection faqs={post.faqs} path={path} title="Questions this raises" />
                </div>
              )}

              <footer className="mt-12 flex flex-col gap-8 border-t border-line pt-8">
                {relatedServices.length > 0 && (
                  <div className="max-w-[640px]">
                    <RelatedSidebar
                      title="Related services"
                      items={relatedServices.map((s) => ({
                        name: s.name,
                        href: `/services/${s.slug}/`,
                      }))}
                    />
                  </div>
                )}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <SocialShare url={url} title={post.title} />
                  <a
                    href="#article-top"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-ink-2 hover:text-azure"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                    Back to top
                  </a>
                </div>
              </footer>
            </article>

            <div className="mt-8">
              <AuthorCard author={post.author} />
            </div>
          </div>

          <BlogSidebar toc={toc} cta={cta} />
        </div>
      </Container>

      {related.length > 0 && (
        <Container className="pb-4">
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
              };
            })}
          />
        </Container>
      )}

      {/* One closing conversion band, shared with the rest of the site, with
          copy aimed at this article's cluster. */}
      <CtaBand heading={cta.title} subheading={cta.body} />
    </>
  );
}

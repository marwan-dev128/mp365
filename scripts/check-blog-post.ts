// Checks imported blog posts against the migration rules.
//   npx tsx scripts/check-blog-post.ts <slug> [<slug> ...]
//   npx tsx scripts/check-blog-post.ts --all
// Exits 1 when any post fails, printing every problem.
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import type { BlogPost } from "../prisma/seed-data/blog";
import { LIVE_BLOG_POSTS } from "../content/redirects";
import { inlineTokenPattern, stripInlineMarkup } from "../lib/richtext";
import { LIVE_PATHS } from "../lib/site-data";

const DIR = join(process.cwd(), "prisma/seed-data/blog-posts");
const CLUSTERS = ["M&A Migration", "Dynamics 365", "Power Platform", "Data Governance", "Copilot & AI"];
const ERP = /\bERPs?\b|Business Central|Finance and Operations|Finance & Operations|Supply Chain Management|Dynamics GP|NetSuite|\bSAP\b|\bSage\b|Dynamics 365 Finance\b/i;
const PRICE = /[$£€]\s?\d|\b\d+(?:\.\d+)?\s?(?:USD|EUR|GBP|dollars?)\b|per user(?:\/| per | a )month/i;
const BANNED = /\bguaranteed?\b|#1\b|\bbest-in-class\b|\bworld-class\b|\bcutting-edge\b|\bsince (19|20)\d\d\b|\b\d+\+? years? of experience\b/i;
const FREE = /\bfree\b(?! (?:[a-z&]+ ){0,3}consultation\b)/i;

function strings(post: BlogPost): string[] {
  const out = [post.title, post.metaDescription, post.excerpt];
  for (const b of post.body) {
    if (b.heading) out.push(b.heading);
    if (b.type === "prose") out.push(...b.paragraphs);
    if (b.type === "list") out.push(...b.items);
    if (b.type === "steps") for (const s of b.steps) out.push(s.name, s.description);
    if (b.type === "table") out.push(...b.headers, ...b.rows.flat());
  }
  for (const f of post.faqs) out.push(f.q, f.a);
  return out;
}

async function check(slug: string): Promise<string[]> {
  const file = join(DIR, `${slug}.ts`);
  if (!existsSync(file)) return [`missing file ${file}`];
  const { post } = (await import(pathToFileURL(file).href)) as { post: BlogPost };
  const p: string[] = [];
  if (post.slug !== slug) p.push(`slug is "${post.slug}", expected "${slug}"`);
  if (!LIVE_BLOG_POSTS.includes(slug)) p.push("slug is not one of the live posts");
  if (!CLUSTERS.includes(post.cluster)) p.push(`unknown cluster "${post.cluster}"`);
  const title = stripInlineMarkup(post.title);
  if (title.length > 60) p.push(`title is ${title.length} chars (max 60)`);
  if (/\|\s*MP-365$/.test(title)) p.push("title must not carry the brand suffix");
  const meta = post.metaDescription.length;
  if (meta < 130 || meta > 158) p.push(`metaDescription is ${meta} chars (130 to 158)`);
  if (post.excerpt.length > 320) p.push(`excerpt is ${post.excerpt.length} chars (max 320)`);
  if (post.faqs.length < 4 || post.faqs.length > 6) p.push(`${post.faqs.length} FAQs (4 to 6)`);
  if (!post.body.length || !post.body[0]) p.push("empty body");
  if (Number.isNaN(Date.parse(post.datePublished)) || Number.isNaN(Date.parse(post.dateModified))) p.push("bad dates");

  const internal = new Set<string>();
  for (const s of strings(post)) {
    const short = s.slice(0, 60);
    if (ERP.test(s)) p.push(`ERP mention: "${s.match(ERP)?.[0]}" in "${short}…"`);
    if (PRICE.test(s)) p.push(`price: "${s.match(PRICE)?.[0]}" in "${short}…"`);
    if (BANNED.test(s)) p.push(`banned wording: "${s.match(BANNED)?.[0]}" in "${short}…"`);
    if (FREE.test(s)) p.push(`"free" outside "free consultation" in "${short}…"`);
    if (/—/.test(s)) p.push(`em dash in "${short}…"`);
    if (/<[a-z][^>]*>/i.test(s)) p.push(`HTML in "${short}…"`);
    let rest = s;
    for (let i = 0; i < 5; i++) rest = rest.replace(inlineTokenPattern(), "");
    if (/\*\*|\[[^\]]*\]\(/.test(rest)) p.push(`unparsed markup in "${short}…"`);
    for (const m of s.matchAll(inlineTokenPattern())) {
      const href = m[2];
      if (!href) continue;
      if (href.startsWith("https://")) continue;
      const blog = href.match(/^\/blog\/([^/]+)\/$/);
      if (blog) {
        if (!LIVE_BLOG_POSTS.includes(blog[1])) p.push(`link to unknown post ${href}`);
        if (blog[1] === slug) p.push(`post links to itself`);
      } else if (!LIVE_PATHS.has(href)) p.push(`link to a page that is not live: ${href}`);
      else if (/^\/(services|solutions|industries)\//.test(href)) internal.add(href);
    }
  }
  if (internal.size < 3) p.push(`only ${internal.size} distinct links to service, solution or industry pages (min 3)`);
  for (const f of post.faqs) {
    const words = f.a.split(/\s+/).length;
    if (words < 25 || words > 110) p.push(`FAQ answer is ${words} words (25 to 110): "${f.q.slice(0, 50)}"`);
  }
  return p;
}

const args = process.argv.slice(2);
const slugs = args[0] === "--all" ? readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts").map((f) => f.slice(0, -3)) : args;
async function main() {
  let failed = 0;
  for (const slug of slugs) {
    const problems = await check(slug);
    if (problems.length) {
      failed++;
      console.log(`✗ ${slug}`);
      for (const x of problems) console.log(`  - ${x}`);
    } else console.log(`✓ ${slug}`);
  }
  process.exit(failed ? 1 : 0);
}
main();

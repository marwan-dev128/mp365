// Submits every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver share
// the feed; Bing's index also backs ChatGPT search and Copilot answers).
// Run after a production deploy:  npm run indexnow
// The key file public/cba49cf2da7a9e6ba8f793b4f4c960a5.txt must be live at the site root first.
import "dotenv/config";

const KEY = "cba49cf2da7a9e6ba8f793b4f4c960a5";
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://mp-365.com").replace(/\/$/, "");

async function main() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!urls.length) throw new Error("sitemap has no <loc> entries");

  const body = {
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls.slice(0, 10000),
  };
  const r = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  console.log(`IndexNow: submitted ${body.urlList.length} URLs, HTTP ${r.status}`);
  if (r.status >= 400) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

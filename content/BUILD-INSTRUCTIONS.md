# MP-365 Website Build Instructions

**For:** the AI agent that builds mp-365.com (Next.js)
**Prepared by:** MP-365 content and SEO team, October 2026
**Companion file:** `mp365_site_data.json` (the same URLs, keywords, metadata and links as structured data)

---

## 0. Read this first

### 0.1 What this document is

This document tells you which pages to build, what each page is about, which keywords each page targets, how to write the content, which metadata to use, and how to link the pages together. You already know how to build an SEO-friendly and GEO-friendly Next.js site and how to design it. **Design, layout and visual style are your decision.** This document does not cover them. Everything about URLs, keywords, content, metadata and internal linking is decided here, so follow it exactly.

GEO means optimizing so that AI tools such as Copilot, ChatGPT and Google's AI features can find, understand and quote the pages.

### 0.2 Source of truth

- `mp365_site_data.json` is the source of truth for every URL, primary and secondary keyword, title tag, meta description, H1 suggestion, breadcrumb and internal link. Use it as the data layer for the site.
- This document is the source of truth for how to write and structure content.
- If the two ever disagree, the JSON wins for URLs, keywords and metadata, and this document wins for content rules. Report the disagreement instead of guessing.

### 0.3 What is out of scope

- **Blog posts.** The blog already exists and is handled separately. Keep `/blog/` as an index page in the navigation, but do not create, rewrite or link to or from individual blog posts. The internal linking plan in this document deliberately leaves them out.
- **Redirects from the old site.** A redirect map will be delivered separately. Do not invent redirects. Do not publish any of the old site's leftover pages.
- **Design.** Choose your own design system, except where this document gives a concept (the pricing page).

### 0.4 Order of work

1. Build the route structure and navigation from Section 2.
2. Load `mp365_site_data.json` as the data layer for URLs, metadata and breadcrumbs.
3. Write the content in this order: Home, the eight category pages, How We Work, About and Contact, the three overview pages, the other pages marked P1 in the data, then P2 and P3. Build Pricing and Clients last, behind feature flags.
4. Add internal links (Section 7) as you write each page, not afterwards.
5. Run the QA checklist (Section 9) on every page before marking it ready.

---

## 1. The business and the guardrails

### 1.1 Who MP-365 is

MP-365 (full name Modern Partners 365) is a focused team of Microsoft specialists. It is a Microsoft Solutions Partner that helps mid-size and enterprise companies get more out of Dynamics 365, Microsoft 365 and Copilot. It has worked with Dynamics 365 since 2010. Its clients include construction, manufacturing, healthcare, federal and state government organizations. The positioning is a small, senior team that jumps in quickly, not a large consulting firm with layers of management.

**Core offering, in order of importance:**
1. Dynamics 365 CRM (Sales, Customer Service, Customer Insights), including integrations that connect the CRM to ERP and other systems.
2. SharePoint and intranets.
3. Microsoft Copilot readiness, rollout and custom agents.
4. Power Platform (Power Apps, Power Pages, Power Automate, Power BI).
5. Microsoft 365 migration, and tenant migration for mergers, acquisitions and divestitures.
6. Data governance (permissions, Microsoft Purview, data quality).
7. Application modernization and DevOps.

### 1.2 Audience

Decision makers and IT leaders at mid-size and enterprise companies in the United States. Typical readers are sales, service and operations leaders who feel a business pain (slow reporting, lost leads, broken releases, messy files), and IT leaders who must deliver a Microsoft project. Write for both. Lead with the business problem, then give the technical detail that proves competence.

### 1.3 Tone

Plain, direct, confident and specific. Speak to the reader as "you". Use active voice. Prefer short sentences (about 15 to 20 words on average). Explain jargon and spell out abbreviations on first use on each page. Avoid hype and empty superlatives ("best-in-class", "cutting-edge", "world-class") unless the page proves them. No idioms, sarcasm or jokes that could be misread when a sentence is quoted out of context. Use US English. Write "MP-365" in capitals everywhere, and "AI" in capitals.

### 1.4 Scope guardrails: what MP-365 does NOT do

Never write, imply or link to any of these as a service:

- ERP implementation or consulting (Business Central, Dynamics 365 Finance and Operations, Supply Chain, Field Service, Dynamics GP, NetSuite, Sage and similar). **The only ERP work is integration with the CRM.** On integration pages you may say MP-365 "integrates Dynamics 365 with ERP systems such as Business Central". Never say MP-365 implements or configures them.
- Azure infrastructure or hosting management. Azure appears only as the destination for application modernization.
- Cybersecurity, identity and access management services, or penetration testing. The access audits are about Dynamics 365 roles and Microsoft 365 permissions, not security operations.
- Microsoft licence resale or CSP subscriptions. Licence fees are paid to Microsoft (or the customer's licence provider) and are separate from MP-365's fees.
- Managed services, help desk or outsourced IT support.
- Standalone AI consulting. Say "Microsoft Copilot" and describe Copilot readiness, rollout and custom Copilot agents built with Microsoft tools. Do not offer general AI strategy or build non-Microsoft AI.
- Custom software development or web design agency work. Power Apps and Power Pages are low-code.
- Google Workspace migrations.
- Dynamics 365 Contact Center. Do not mention it.
- Process improvement as a formal practice.

If a keyword, source text or idea pulls toward any item above, leave it out.

### 1.5 Facts policy

- Use only facts in Appendix D (the facts bank) or in text the client supplies. **Never invent** statistics, prices, timelines, client names, quotes, awards, certifications, team names or locations.
- Where a page needs a fact that is missing (for example a typical timeline), write the surrounding copy without it and record the gap in `content/TODO.md` with the page URL and the missing fact. Do not publish placeholder text such as "TBD" or "[CLIENT TO CONFIRM]". Keep pages with missing client facts in draft state until the facts arrive.
- Time-sensitive facts must carry exact dates. Use these verified ones when relevant: SharePoint Server 2016 and 2019 support ended July 14, 2026 (Microsoft). Copilot Cowork became generally available on June 16, 2026 (Microsoft).
- Product names change. Dynamics 365 Marketing is now Dynamics 365 Customer Insights, with the app called Customer Insights - Journeys. Power Apps portals are now Power Pages. Office 365 is now Microsoft 365. Use the current name consistently, and mention the old name once as "formerly" because people still search it.

---

## 2. Site structure and URLs

### 2.1 Structure

The site has 62 pages (blog posts not counted). The full list with keywords is in Appendix A and in the JSON.

```
/                                   Home
/services/                          Services overview
  /services/dynamics-365-crm/       Category page (client label: "Dynamics 365 CRM Consultation")
    sales/  customer-service/  customer-insights/  lead-management/  security-roles-audit/  integration-services/
  /services/sharepoint/             Category page
    intranet-development/  migration/  file-share-migration/  supplier-partner-portals/  information-architecture/
  /services/copilot/                Category page (client label: "Microsoft Copilot & AI")
    readiness/  sales-agents/  custom-agents/  cowork/  ai-data-governance-audit/
  /services/power-platform/         Category page
    power-apps/  power-pages/  power-automate/  power-bi/
  /services/microsoft-365-migration/    Category page
    exchange-online-migration/  onedrive-migration/
  /services/tenant-to-tenant-migration/ Category page (client label: "M&A Tenant Migration")
    mailbox-teams-files/  coexistence/
  /services/data-governance/        Category page
    microsoft-purview/  data-quality-management/
  /services/application-modernization/  Category page (client label: "Application Modernization & DevOps")
    legacy-migration/  devops-release-automation/
/solutions/                         Solutions overview
  sharepoint-intranet/  executive-dashboards/  crm-implementation/  dynamics-365-migration/
  contract-management-automation/  m-and-a-it-integration/  crm-systems-integration/
/industries/                        Industries overview
  manufacturing/  logistics-supply-chain/  energy-utilities/  construction-engineering/
  financial-services/  government/  medical-devices/  retail/  healthcare/
/how-we-work/   /pricing/   /clients/   /blog/   /about/   /contact/
```

The pages `/pricing/` and `/clients/` are proposed and need client approval before launch. Build them, but keep them out of the live sitemap and navigation until the client approves (use a feature flag).

### 2.2 URL rules

- Lowercase letters, numbers and hyphens only. No spaces, underscores, capitals, ampersands, dates or query parameters.
- **A trailing slash on every URL.** Set `trailingSlash: true` and make the canonical tags match. Redirect the non-slash version to the slash version.
- Never change a slug after launch. If a page must move, add a 301 redirect.
- Every folder level must load a real page: `/services/`, `/services/dynamics-365-crm/` and `/services/dynamics-365-crm/sales/` all exist.
- Use the exact paths in the JSON. Do not shorten, lengthen or reorder them.
- Folder depth is at most three levels. Every page must be reachable within three clicks from the home page, and most within two.

### 2.3 Page names and labels

Use the `name` field in the JSON as the menu label and the default anchor text. Two labels differ from the slug on purpose: the category at `/services/dynamics-365-crm/` is labeled "Dynamics 365 CRM Consultation" (the client's own wording), and the page at `/industries/government/` is labeled "Federal Government" (the client-approved wording). Use those labels in the menu, breadcrumbs and anchors. In headings and body copy you may say "consulting" and "government".

### 2.4 Navigation

Main navigation, in this order: **Services, Solutions, Industries, How We Work, Clients, Pricing, Blog, About**, plus a **Contact** button. Pricing and Clients stay hidden until approved.

- Services, Solutions and Industries open menus that list their child pages. The Services menu groups the 28 service pages under their eight category headings, and each heading is itself a link to its category page.
- **Every menu item must be a real `<a href>` link in the server-rendered HTML.** Do not build menus that only exist after JavaScript runs, and do not make links from `onClick` handlers. Search engines and AI crawlers read the HTML.
- The footer repeats the main links and lists the eight category pages and the three overview pages.
- Add a visible breadcrumb on every page except Home, built from the `breadcrumbs` field. The visible breadcrumb and the BreadcrumbList schema must come from the same data.
- Add a short 404 page that links to Services, Solutions, Industries and Contact.

---

## 3. Keyword instructions

### 3.1 The model

Every page has **one primary keyword and two to five secondary keywords**. No two pages share a primary keyword. The data is in the `primary_keyword` and `secondary_keywords` fields. The keywords were chosen from Google Keyword Planner volumes, Search Console data and what actually ranks for each term, so each page targets keywords that match the type of page.

Some keywords are marked as generated. They have no volume data and were written from search intent. Use them the same way.

### 3.2 Where to place keywords

Place the **primary keyword**, naturally, in all of these:
- the title tag and the H1 (near the start of both)
- the first paragraph, ideally within the first two sentences
- at least one H2 where it reads naturally
- the closing paragraph or summary

Place **secondary keywords** in subheadings, body paragraphs, list items and FAQ questions or answers. Give each secondary keyword a section that really covers the topic, not just a passing mention. Use `question_keywords_starter` as seed phrases for H2 and H3 question headings and FAQ questions.

### 3.3 Writing rules for keywords

- **No keyword density target.** Do not count repetitions. Write for the reader first and check keyword placement afterwards.
- Vary wording with synonyms and related terms. Do not repeat the exact phrase in every sentence, paragraph or heading.
- State the keyword clearly in the first sentence of the section that answers it ("Dynamics 365 Sales consulting helps ...").
- Use one consistent name for each product, service and brand on a page. See `naming_note` in the JSON for pages with a legacy name.
- Spell out abbreviations on first use (M&A mergers and acquisitions, DLP data loss prevention, ALM application lifecycle management).
- Pair the brand with what it does in key places ("MP-365 is a Microsoft Solutions Partner for Dynamics 365").
- Never use competitor brand names as keywords. Never add keyword lists or "related searches" blocks.

### 3.4 Keywords to avoid

- Words that attract the wrong audience: "consultant" (it returns job listings), "jobs", "salary", "training", "certification", "free download".
- Microsoft licence price terms such as "dynamics 365 pricing" and "dynamics 365 cost". Searchers want Microsoft's per-user licence prices. The pricing page targets consulting and implementation cost only.
- ERP terms (Business Central implementation, Finance and Operations, supply chain software, Field Service) and Google Workspace terms.
- Keywords in `keywords_reserved_for_blog_do_not_target`. The blog already covers them. Do not target them on the page, although you may mention the topic naturally.

---

## 4. Content writing rules (all pages)

These rules come from the client's SEO guidelines and apply to every site page. They do not apply to blog posts.

### 4.1 Page opening

- One H1 per page, under 10 words, with the primary keyword near the start. The `h1` field gives a starting suggestion. The H1 must match the title tag in meaning.
- Open with 1 to 3 sentences that answer the page's main question or say what the page covers and who it is for. Put the most important information first (the answer, the offer, the outcome), then the details.
- Do not add a "Key takeaways" box or list. That format is for blog posts only.
- Never open with filler ("In today's fast-paced world ...", "Have you ever wondered ...").

### 4.2 Headings

- H2 for main sections and H3 inside them. Follow the order H1, H2, H3 without skipping levels. Use at least two H3s under an H2, or none.
- Make headings descriptive and about 5 to 10 words ("What a Dynamics 365 Sales implementation includes", not "Overview"). Use question headings where a section answers a common question.
- Never use vague headings such as "Overview", "More info", "Introduction" or "Other". Do not use headings only to make text bigger.
- Keep similar headings parallel.

### 4.3 Paragraphs and sentences

- Put the direct answer in the first sentence under each heading, then explain.
- Name the subject. Do not start sections with "It", "This", "They" or "As mentioned above".
- One idea per paragraph, 2 to 4 sentences. No walls of text.
- Plain language at about an 8th-grade reading level. Use active voice.

### 4.4 Substance and credibility

- Be specific: numbers, dates, product names, examples. Answer the main question fully, then the follow-up questions readers ask next (cost, timing, risks, alternatives).
- **Name the source and year for any statistic in the sentence itself** ("According to Microsoft's 2026 documentation ..."). Use only real, checkable sources. If you cannot verify a number, leave it out.
- Add what other pages lack: real client examples, first-hand experience, specifics about how MP-365 works. Each service, solution and industry page needs one proof element from Appendix D (a client example or a problem-and-result story). If none fits, record the gap in `content/TODO.md`.
- Show who reviewed the page. Add a short line near the end of service, solution and industry pages: "Reviewed by [name], [role], MP-365". Use only names and roles the client supplies. Until then, record the gap.
- Give balanced information. Say who a service is for and who it is not for. Include real drawbacks of MP-365's own approach where relevant.
- Never invent or exaggerate statistics, quotes, reviews or credentials.

### 4.5 Writing for AI tools (GEO)

- Make every section stand alone: a clear heading, a direct answer, the key details. A reader or an AI tool should be able to quote any section without the rest of the page.
- State key facts as complete, quotable sentences. State comparisons, recommendations and conclusions outright ("Best for mid-size sales teams: Dynamics 365 Sales") instead of implying them.
- Use exact dates for time-sensitive information ("As of October 2026"), never "recently" or "currently".
- Name people, products, places and organizations in full. Say "MP-365" or "MP-365 (Modern Partners 365)", not just "we" or "our team", in key sentences.
- Keep facts identical across pages: engagement models, response times, timelines and offers must match everywhere.
- Keep key facts in regular text, never only in images, charts or videos. Interactive components must also have their facts in plain HTML.

### 4.6 Formats

Match the format to the content, and use the same format for the same type of content across the site.

| If the content is ... | Use ... |
|---|---|
| A definition or direct answer | A 1 to 2 sentence paragraph directly under the heading |
| Steps in a set order | A numbered list, 5 to 10 steps, one action each, starting with a verb. State the goal and timeframe before the list |
| Features, benefits, requirements, deliverables | A bullet list of 3 to 8 items, introduced by a sentence, each item starting with a bold label |
| Two or more options compared | A table, introduced by a sentence and followed by a 1 to 2 sentence takeaway |
| Prices, schedules, specs | A table, dated ("As of October 2026") |
| Pros and cons | Two short bullet lists or a two-column table |
| A common question | A question heading with a short answer paragraph |
| Reasons, context, nuance | Short paragraphs |

Do not turn everything into bullets. Do not write fragments that mean nothing alone ("Fast", "Great support"). Fill every table cell ("Not included" instead of blank). Keep tables to about 3 to 6 columns. Do not use icons, stars or colors alone to carry information.

### 4.7 FAQs

Every page except the blog index gets an FAQ section. Contact needs only about 5 questions.

- **At least 10 relevant questions per page.** Use `question_keywords_starter` as the first questions, then add more that real buyers ask: what it is, how it works, cost, timeline, risks, alternatives, who it is for, what is included and not included, and how MP-365 works.
- Phrase questions the way people type or say them ("How much does X cost?").
- Group them under one H2 "Frequently Asked Questions". Each question is an H3 with the answer in plain text directly beneath it. Put the most valuable questions first.
- Answers are about 40 to 60 words (2 to 3 sentences). The first sentence gives the direct answer. Start yes or no answers with "Yes" or "No". Name the subject instead of "it" or "this". Include specifics (numbers, dates, names). Use a neutral, factual tone, not a sales pitch. Cite a source for statistics. Use a short list for multi-part answers.
- Add at most one or two internal links in an answer, only when it helps.
- Tailor each page's FAQs. Never copy the same block onto several pages. Never pad with questions that add no value. Never invent statistics.
- **Do not add FAQPage structured data.** Google ended FAQ rich results on May 7, 2026. Write the FAQs for readers and AI tools.

### 4.8 Calls to action

Use a consultative tone ("Talk to MP-365 about your Dynamics 365 setup", "Book a discovery call"). One primary call to action per page, repeated near the end. Link it to `/contact/`. Only mention offers that are confirmed in Appendix D (for example, that discovery calls under 2 hours are not billed). Do not use "free", "guaranteed", "#1" or "best" unless the page backs the claim.

### 4.9 Images and media

Write descriptive alt text. Do not put key facts only in images. Name image files with readable words.

---

## 5. Page blueprints by level

Write each page according to its type. The JSON field `blueprint` names the type. Section lengths are guidance only. Make each page as long as it needs to be to answer fully, and no longer. Every blueprint ends with an FAQ section (Section 4.7) and a closing call to action.

### 5.1 How the levels differ

| Level | Purpose | Keyword target | Depth | Main call to action | Link pattern |
|---|---|---|---|---|---|
| Home | Position MP-365 and route visitors | Broad "dynamics 365 consulting" cluster | Broad, shallow, proof-led | Book a discovery call | Links to every category, key solutions, How We Work, Clients |
| Overview hubs (Services, Solutions, Industries) | Help visitors choose and navigate | Umbrella phrases | Short, a clear choice guide | Pick a page, then contact | Links to every child page |
| Category pages | Pillar for one service area | The broad head term for the area | Medium to deep, comparison table, proof | Book a discovery call | Links to all children, related solutions, Pricing, How We Work |
| Service pages | Explain one specific service in detail | Specific commercial term | Deep: steps, deliverables, scope, proof | Book a discovery call | Links up, to siblings, to the solution twin |
| Solution pages | Sell an outcome to a business or operations buyer | Outcome and problem phrasing, often guide intent | Problem, impact, solution, result | Plan your project | Links to the twin service, supporting services, industries |
| Industry pages | Show relevance to one industry | "CRM for [industry]" style | Industry problems mapped to services | Talk to MP-365 | Links to 3 or 4 relevant services and solutions |
| Standalone pages (How We Work, Pricing, Clients, About, Contact) | Build trust and conversion | Brand, process, cost, proof terms | Varies | Book a discovery call | Links to the pages around the buying decision |

The pages must feel different from each other in structure and content, not only in design. A category page compares and routes. A service page explains delivery. A solution page tells a problem-to-result story. An industry page shows a vertical lens. Do not reuse the same template and swap a few words, because near-identical pages hurt rankings.

### 5.2 Home (`/`)

**Purpose:** say what MP-365 does in one pass, show proof, route visitors to the right category, and get a discovery call.

Structure:
1. **H1** with the primary keyword (the JSON suggests "Dynamics 365 and Microsoft 365 Consulting That Gets Used").
2. **Intro (2 to 3 sentences):** "MP-365 is a Microsoft Solutions Partner that helps mid-size and enterprise teams get more from Dynamics 365, Microsoft 365 and Copilot." Add who it serves and the main outcome (faster decisions, cleaner data, less manual work).
3. **What MP-365 does:** the eight service categories, each with a one or two sentence description and a link.
4. **Why teams choose MP-365:** 3 to 5 bullets with bold labels, using only facts from Appendix D (focused team of specialists, working with Dynamics 365 since 2010, quick starts, hands-on work instead of long planning phases).
5. **Proof:** two or three short client results with a link to `/clients/` (when approved).
6. **How we work:** a short four-step summary with a link to `/how-we-work/`.
7. **Industries:** a short list that links to `/industries/`.
8. **Next step:** explain the discovery call (confirmed offers only) and link to `/contact/`.
9. **FAQ** (10 questions): what a Dynamics 365 partner does, how to choose one, how long projects take, who MP-365 works with, what MP-365 does not do, and similar.

### 5.3 About (`/about/`)

**Purpose:** trust and brand clarity. Other companies use the name "MP365", so always write "MP-365 (Modern Partners 365)" in the first mention and "Microsoft Solutions Partner" nearby.

Structure: who MP-365 is; the story since 2010; how the team works (focused specialists, fast starts, real results); who it serves; Microsoft partner status with a link to the Microsoft partner directory profile; the people (names, roles and photos only if the client supplies them); proof highlights; FAQ (10); contact call to action. Do not invent a location, headcount or awards.

### 5.4 Contact (`/contact/`)

A short page: contact form, the email address, what happens after someone writes (three plain steps), the expected response time (only if confirmed), and the discovery call policy. About 5 FAQ questions. The form should accept an optional summary from the pricing estimator. Add Organization `contactPoint` structured data with the confirmed email. Do not ask for more than necessary.

### 5.5 How We Work (`/how-we-work/`)

**Purpose:** show buyers how a project runs and that MP-365 starts fast.

Structure:
1. **H1 and intro:** answer "How does a Dynamics 365 project work with MP-365?" in two or three sentences.
2. **Two ways to work with MP-365** (a table with two columns, then a section for each):
   - **Support mode**, for when something is broken or needs improvement. Steps: understand (listen, reproduce the issue, confirm the impact), jump in (get access and start working, no waiting for kickoff meetings), fix and confirm (resolve it and validate with your team before closing), brief you (a short summary of what was fixed and patterns worth watching).
   - **Project mode**, for when you have a wish list and want results. Steps: understand (one focused session to capture the business goal), quick MVP (a working version fast so you react to something real), validate and refine (your team uses it and feedback changes it), deploy and hand off (go live, train the team, document the build, you own it).
3. **The project lifecycle:** analyze, define, execute (build and release), support (continuous improvement), described as a numbered list.
4. **What MP-365 needs from you:** a short bullet list (a named owner, access to the environment, a few hours of your team's time at set points).
5. **Engagement models:** a short summary table (Ad hoc, Standard, Dedicated) that links to `/pricing/` for detail. Use exactly the same wording as the pricing page.
6. **Timelines:** only with figures the client confirms.
7. **Proof, FAQ (10), and call to action.**

### 5.6 Pricing (`/pricing/`)

**Concept.** This page explains how MP-365 prices work and helps buyers estimate and compare. **It never shows exact prices.** The primary keyword is "dynamics 365 implementation cost". The page is about consulting and implementation cost. It is not about Microsoft licence prices.

Structure:
1. **H1 and intro:** answer "How is a Dynamics 365 project priced?" in two or three sentences. Name the three engagement models.
2. **Engagement models table:** Ad hoc, Standard and Dedicated. Columns: best for, how it is billed, minimum commitment, response time, what is included. No prices. Use the wording in Appendix D, and use the version the client confirms.
3. **What drives cost:** a table with columns driver, why it matters, and the question MP-365 asks. Drivers: number of users, systems to integrate, data to migrate, customization, number of environments, timeline, how much your team can help.
4. **How an estimate is produced:** a numbered list (discovery call, scoping, written estimate, agreement, kickoff). Say that discovery calls and scoping sessions under two hours are not billed (confirm first).
5. **How to compare bids:** a checklist. Who actually does the work, what is excluded, how change requests are handled, what the hand-off includes, and how success is measured.
6. **Licences:** one short paragraph. Microsoft licence fees are separate and set by Microsoft. MP-365 does not resell licences.
7. **Project estimator** (below).
8. **FAQ (10 questions):** how much does a Dynamics 365 implementation cost, how is consulting priced, what affects the cost, are there minimums, and similar.
9. **Call to action** to book a discovery call.

Date every table ("As of October 2026").

**Project estimator (interactive tool).** A true price calculator is not possible for this business, so build an estimator that guides rather than quotes. Build it in levels and ship Level 1 first.

- **Level 1 (build now, no numbers):** 8 to 10 questions: service area (CRM, SharePoint, Power Platform, Microsoft 365 migration, tenant migration, data governance, Copilot, application modernization), goal (fix, build, migrate, ongoing support), number of users, number of systems to connect, data to migrate (none, some, a lot), number of environments, timeline (urgent or flexible), whether an internal technical team is available, and preferred working style (project or ongoing). The result shows a recommended engagement model, a complexity tier (light, standard or complex), the list of cost drivers that apply to the answers, and a pre-filled contact form that includes the answers.
- **Level 2 (later, needs client data):** add effort bands in hours.
- **Level 3 (later, needs client approval):** add price ranges.
- Keep the questions, options, scoring rules and result text in one editable config file so the client can change them without code. Design the config so Levels 2 and 3 can be added without a rebuild.
- Show results without requiring an email address. Label results as guidance, not a quote.
- **The page must carry every key fact as plain server-rendered text.** The estimator is an enhancement. If the script does not run, the visitor and any crawler still see the engagement models table and the cost drivers table.
- The tool must work with a keyboard and a screen reader. Do not add tracking cookies for it. Track simple events (started, completed, contact form opened).

### 5.7 Clients (`/clients/`)

**Purpose:** proof. Buyers want to know MP-365 has done this before. Primary keyword: "dynamics 365 case studies".

Structure:
1. **H1 and intro:** who MP-365 works with and for how long.
2. **Results table:** client, industry, problem, what MP-365 did, result. Use only approved facts from Appendix D.
3. **Problems solved:** short stories from the facts bank (SharePoint upgrade, document migration, modern intranet, sales tracking, lead tracking, case tracking, contract management, CRM deployments, CRM security, integrations). Present each as problem, what MP-365 built, result. Link each story to the matching service or solution page.
4. **Testimonials:** quote, name, role and company. Use the exact wording the client supplies and do not edit quotes.
5. **Industries served:** link to the industry pages.
6. **FAQ (10) and call to action.**

Do not publish a client name, logo or quote without written permission from the client (record it in `content/TODO.md` until confirmed). Do not add Review or AggregateRating markup to MP-365's own testimonials, because Google does not show rich results for self-serving reviews.

### 5.8 Overview pages (`/services/`, `/solutions/`, `/industries/`)

Short hubs that help someone choose. Each has an H1, a short intro, a grouped list of child pages with a one or two sentence description each, a decision table, an FAQ and a call to action.

- **Services:** group the 28 service pages under the eight category headings. Add a table "Your situation, start with" (for example "Our sales data is scattered, start with Dynamics 365 Sales").
- **Solutions:** present each of the seven solutions as the business problem it fixes, then a table "Problem, solution, related service". Link each to its twin service page.
- **Industries:** list the nine industries with a one-sentence challenge for each, then link to each page.

### 5.9 Category pages (8 pages)

Pillar pages for one service area. They own the broad head term and route readers to the detailed service pages.

Structure:
1. **H1 and intro** answering "What does [area] consulting include?" in 1 to 3 sentences, with the primary keyword.
2. **What is included:** a comparison table of the child service pages (service, best for, typical outcome, link) and a 1 to 2 sentence takeaway stating which to start with.
3. **How to choose:** a short decision guide in plain sentences.
4. **How MP-365 approaches it:** a numbered list of steps that apply across the area, with a link to How We Work.
5. **Proof:** one client example.
6. **Related solutions and industries:** links in body text.
7. **FAQ (10) and call to action.**

### 5.10 Service pages (28 pages)

The detailed delivery page for one service. This is where most commercial traffic lands, so be specific.

Structure:
1. **H1 and intro** (1 to 3 sentences): what the service is, who it is for, what MP-365 does.
2. **At a glance:** a short fact block with the same labels on every service page: Best for, Includes, Not included, Typical timeline, How it starts. "Not included" is important (for example "ERP implementation"). Timelines only if confirmed.
3. **Problems this solves:** 3 to 5 specific buyer problems, written as the buyer would describe them.
4. **How MP-365 delivers it:** a numbered list of 5 to 8 steps, each one action.
5. **What you get:** a bullet list of deliverables (3 to 8 items, bold labels).
6. **Tools and products involved:** name the Microsoft products in full.
7. **Proof:** a real client example (problem, what MP-365 did, result).
8. **When this is not the right fit:** one honest paragraph with alternatives. This is a trust signal and a useful answer for AI tools.
9. **Related services and solutions:** links in body text (Section 7).
10. **FAQ (10), reviewer line and call to action.**

### 5.11 Solution pages (7 pages)

Written for business and operations buyers, around an outcome, not a technology. Use this problem-to-result structure:
1. **H1 and intro** in outcome language.
2. **The problem:** what it looks like day to day.
3. **Who feels it:** the roles affected.
4. **What it costs the business:** a table (symptom, business impact).
5. **How MP-365 solves it:** numbered steps.
6. **What you get:** a table (what MP-365 builds, the result).
7. **Scope and timeline:** only with confirmed facts, ideally as a packaged offer.
8. **Compare options** where it helps the reader decide (for the intranet page: build on Microsoft 365 or buy intranet software, with a comparison table and an honest verdict).
9. **Proof, related services, FAQ (10) and call to action.**

Several solution pages are in guide-first search results, which means searchers are researching. For **Modern Company Intranet, Rapid CRM Deployment, Contract Management Automation and Classic CRM Modernization**, teach the topic first (what it is, how it works, options) and then present the MP-365 offer. Do not open with a sales pitch.

### 5.12 Industry pages (9 pages)

Show relevance to one industry. Do not template them. Each page must contain content that is true only for that industry.

Structure:
1. **H1 and intro** with the industry and the primary keyword.
2. **Common challenges in [industry]:** 3 to 5, specific and real.
3. **How MP-365 helps:** a table mapping each challenge to a service or solution, with links.
4. **Proof:** an example from this or a similar industry (if none exists, say so by leaving the section out and recording the gap).
5. **Tools used:** the Microsoft products involved.
6. **Cautions:** do not promise compliance (HIPAA, FedRAMP, CMMC or similar). MP-365 does not provide certification or cybersecurity services. Say what MP-365 does (permission models, access audits, document control).
7. **FAQ (10) and call to action.**

Search results for industry CRM terms are mostly guides ("what to look for in a CRM for [industry]"), so teach first, then show how Dynamics 365 fits.

### 5.13 Page-specific notes

- **Dynamics 365 CRM category:** the menu label is the client's wording ("Dynamics 365 CRM Consultation"). Headings use "consulting".
- **Dynamics 365 Sales, Customer Service:** the pages own the product terms ("Dynamics 365 Sales"). The company blog has "what is" articles on these topics, but do not link to blog posts for now. Give a full explanation of what the product is and how MP-365 implements it.
- **Dynamics 365 Customer Insights:** use "Customer Insights - Journeys" for the product, and say once that it was formerly Dynamics 365 Marketing.
- **Lead Management and Attribution:** the generic term "crm lead management" returns how-to guides. Teach the lead process (capture, score, route, attribute) in Dynamics 365, then offer help.
- **Security Roles and Access Audit:** about Dynamics 365 roles and access sprawl (for example users with unnecessary Admin access). Not cybersecurity.
- **Integration Services:** Business Central, Finance and other ERP systems appear only as systems that get connected. Do not describe ERP work.
- **SharePoint Intranet Development (service) and Modern Company Intranet (solution):** two different pages. The solution page is the guide-first page that owns the broad term "sharepoint intranet" and the "build on Microsoft 365 or buy software" question. The service page is the commercial page about hiring MP-365 to build one. Each links to the other once.
- **SharePoint Server Upgrade and Migration:** include the dated fact that SharePoint Server 2016 and 2019 support ended on July 14, 2026.
- **Copilot Cowork:** it is a new Microsoft product (generally available June 16, 2026). Explain what it is briefly, then focus on rollout, permissions and training. The company blog covers the "what is" and "versus" questions.
- **Custom Copilot Agent Development:** built with Copilot Studio and connected to Dynamics 365 and Microsoft 365 data. Not general AI development.
- **AI Data Governance Audit:** word it as a data access and permissions review before Copilot, not as security services.
- **Power Pages:** use "Power Pages" throughout and mention once that it was formerly called Power Apps portals. Explain how it differs from a SharePoint vendor portal (external users who sign in and work with business data, compared with file sharing).
- **Exchange to Microsoft 365 Migration:** do not mention Google Workspace.
- **M&A Tenant Migration (category):** label "M&A Tenant Migration", H1 about tenant to tenant migration for mergers, acquisitions and divestitures. Guide-first.
- **Tenant Coexistence and Domain Cutover:** no search demand data exists, so write for IT leads in a deal and use the generated keywords.
- **Data Quality Management:** the keyword focus is CRM data cleanup (duplicates, standardization). Data loss prevention (DLP) belongs on the Purview page.
- **Application Modernization category:** emphasis on Azure application modernization (moving legacy applications to Azure). Not infrastructure management.
- **DevOps and Release Automation:** the Dynamics 365 and Power Platform side (pipelines, testing, release notes).
- **Healthcare and Government:** no compliance promises. Government covers federal and state work. The menu label is "Federal Government".

---

## 6. Metadata

The title tag, meta description and H1 for every page are in the JSON (`title_tag`, `meta_description`, `h1`) and listed in Appendix B. They already follow the rules below. Use them as given, and follow the rules for any new page.

### 6.1 Title tags

- Unique for every page. About 50 to 60 characters. All titles in the JSON are 59 characters or fewer.
- Primary keyword near the start, then one qualifier that sets the page apart (the audience, benefit or format).
- Brand at the end after " | MP-365", in the same format on every page. The Home page puts the brand first ("MP-365: Dynamics 365 and Microsoft 365 Consulting") because it also states what MP-365 does. Never use only the brand as a title.
- Title Case, one capitalization style across the site.
- Plain, factual and specific. No clickbait, no ALL CAPS, no repeated punctuation, no emojis, no "Free", "Guaranteed", "#1" or "Best" unless the page backs it.
- The title must match what the page really covers and use the same terms as the H1 and the page.

### 6.2 Meta descriptions

- Unique for every page. 120 to 155 characters, with the key information in the first 120. All descriptions in the JSON are 135 to 155 characters.
- Summarize what the page offers and who it is for in one or two sentences. Lead with the most useful detail. Use the primary keyword once, naturally. Add specifics.
- End with a short action phrase that fits the page ("Book a discovery call.", "Plan your migration.").
- Use plain, active language. Never start with "Welcome to", "This page is about" or "Click here". Never turn the description into a list of keywords.
- Add dates to time-sensitive descriptions ("Support for SharePoint 2016 and 2019 ended July 14, 2026").
- Keep every statement consistent with the page content.

### 6.3 Other metadata

- **Canonical:** a self-referencing absolute canonical on every page, for example `https://mp-365.com/services/dynamics-365-crm/sales/`, with the trailing slash.
- **Robots:** index and follow on all live pages. Pages awaiting approval (Pricing, Clients) and the staging site use `noindex, nofollow` until launch.
- **Open Graph and Twitter cards:** `og:title` equals the title tag without the brand suffix, `og:description` equals the meta description, `og:url` equals the canonical, `og:type` is `website`, and use a summary large image card. Create one shared default image and generate page-specific images if the design system allows.
- **Language:** `en-US`.
- Use the Next.js Metadata API (`generateMetadata`) to read these from the JSON so there is one source of truth.

---

## 7. Internal linking

Internal links tell search engines and AI tools how the pages relate, and they carry visitors to the next useful page. **Blog posts are excluded from this plan. Do not link to or from individual blog posts. The blog index link in the navigation stays.**

### 7.1 Principles

1. **Link only when it helps the reader.** There is no required number of links per page. Do not add links to reach a count.
2. **Link to the single best page on a topic.** Do not send readers to two near-identical pages.
3. **Put links in the body text, where the topic comes up**, with a sentence that introduces the link. In-text links give more context than a list of links. A short "Related" block at the end of a page is allowed, but it does not replace in-text links.
4. **Link a term the first time it appears in a section.** Link to the same page once or twice per page at most. Do not link the same page more than once within one section.
5. **Give the answer first, then link for detail.** The answer must make sense without clicking.
6. **Do not pack several links into one sentence**, and do not link whole sentences or paragraphs.
7. **Never link a page to itself, and never link to a removed or error page.**

### 7.2 Anchor text

- Descriptive and natural, so a reader knows what they will find. Short, fitting smoothly into the sentence. Link the words that describe the destination.
- The default anchor is the destination page's `name`. The `anchor_options` field lists the page name and its primary keyword. **Vary** the wording across pages that link to the same destination, while keeping the meaning the same, and do not use the same keyword-heavy anchor everywhere.
- The anchor must match the destination page's title and topic. Use the same name for a product or service in the anchor and on the linked page.
- Never use "click here", "read more", "learn more", "this page" or "here".
- For service, solution and contact links use clear action text ("Book a discovery call", "Plan your migration").

Good: "Dynamics 365 Sales consulting from MP-365 covers pipeline setup, forecasting and lead routing. If your leads come from several sources, our approach to [lead management and attribution] explains how to track them."

### 7.3 Required structural links (every page)

These come from the page hierarchy and are listed under `internal_links.structural` in the JSON.

- **Breadcrumb:** visible on every page except Home, in the server-rendered HTML.
- **Parent link:** each service page links to its category page. Each category, solution and industry page links to its overview page. Link up from the body text as well as the breadcrumb.
- **Child links:** every overview page links to all of its children. Every category page links to all of its service pages, with a one or two sentence description of each.
- **Navigation and footer:** all main pages, as real links.
- **Calls to action:** every service, category, solution and industry page links to `/contact/` with action text, and links to `/how-we-work/` where the process or timeline is mentioned. Service and solution pages link to `/pricing/` where cost or effort is discussed (once Pricing is live).

### 7.4 Contextual links (by page)

These are listed under `internal_links.contextual` in the JSON, each with a role. Use them where the text genuinely discusses the topic.

- **Topic groups.** The main (category) page links to every supporting page. Each supporting page links back to the main page and to a few related supporting pages. Example: Dynamics 365 Sales links to Lead Management and Attribution, Customer Insights, Integration Services and Sales Agents.
- **Service and solution twins.** Each pair links once in each direction, with different anchors. The pairs: SharePoint Intranet Development and Modern Company Intranet; Power BI Consulting and Executive Dashboards; Dynamics 365 Integration Services and CRM and Systems Integration; M&A Tenant Migration and M&A IT Integration and Separation. Also link Rapid CRM Deployment to the Dynamics 365 Sales and Customer Service pages and DevOps and Release Automation.
- **Industries.** Each industry page links to the three or four services and solutions it most uses (see the JSON). Service and solution pages link to an industry page only where their text mentions that industry. Do not add industry links just to create links.
- **Standalone pages.** Home links to every category, the three overviews, How We Work, Clients, About, Pricing and Contact. About, How We Work, Pricing and Clients link to the pages around the buying decision (see the JSON). Clients links to each industry, service or solution mentioned in a story.
- **Cross-category links** are useful where topics overlap: Customer Service and Power Pages (customer portals), Supplier and Partner Portals and Power Pages (use cases compared), Security Roles Audit and Microsoft Purview (permissions), Copilot Readiness and AI Data Governance Audit (data access before Copilot).

### 7.5 Link health checks

- Every page has at least one link from the navigation or footer and at least two contextual links pointing to it from other pages. No orphan pages.
- Important pages (Home, the eight categories, Contact) receive the most links.
- No broken links and no redirect chains. Links to `/pricing/` and `/clients/` carry a `requires_flag` field in the JSON. Render them only when that feature flag is on, so the live site never links to a missing page.
- Run a crawl before launch and confirm every internal link is a real `<a href>` that appears in the server-rendered HTML.

---

## 8. Technical requirements (SEO and GEO in Next.js)

You know the platform. These are the requirements specific to this site.

- **Render all content on the server.** Use static generation for these pages. Headings, body text, FAQs, tables, navigation links and breadcrumbs must be in the initial HTML. AI crawlers generally do not run JavaScript. Interactive components (the estimator, menus) are enhancements. Their content must also exist as plain HTML.
- **Metadata:** `generateMetadata` from the JSON for title, description, canonical, robots and social tags.
- **Structured data (JSON-LD, server-rendered):** `Organization` site-wide (name MP-365, alternate name Modern Partners 365, url, logo, `sameAs` with the LinkedIn company page and the Microsoft partner directory page), `WebSite` on Home, and `BreadcrumbList` on every page except Home. **Do not add FAQPage, and do not add Review or AggregateRating for MP-365's own testimonials.** Do not add schema types you cannot fill with real data.
- **Sitemap:** `sitemap.xml` listing every live URL with the trailing slash and a real `lastmod`. Reference it in `robots.txt`.
- **robots.txt:** allow all crawlers on the live site, including search and AI crawlers. Block nothing that should be indexed. The staging site must be `noindex`.
- **URL handling:** `trailingSlash: true`. Redirect uppercase and non-slash versions to the canonical URL. Use one host version (mp-365.com without www). Serve `404` for unknown URLs with the helpful 404 page, and `410` for pages that are intentionally gone.
- **Performance:** target Core Web Vitals good thresholds: Largest Contentful Paint 2.5 seconds or less, Interaction to Next Paint 200 milliseconds or less, Cumulative Layout Shift 0.1 or less, measured on mobile. Use `next/image`, load fonts efficiently, and keep client JavaScript small.
- **Accessibility:** semantic HTML, one H1, logical heading order, skip link, keyboard-friendly menus, sufficient contrast, descriptive alt text.
- **Analytics:** track contact form submissions, discovery call clicks, estimator events and outbound clicks to the Microsoft partner directory page. No tracking that needs a consent banner beyond what the client already uses.
- **Content management:** keep page content in structured files or a CMS-style data layer so the client can edit the copy, the FAQ lists and the estimator config without code.
- **Feature flags:** `pricing` and `clients` stay off in production until the client approves them.

---

## 9. Quality checklist (run on every page)

**URL and structure**
- [ ] The path matches the JSON exactly, lowercase, with the trailing slash.
- [ ] One H1. Headings follow H1, H2, H3 order. No vague headings.
- [ ] Breadcrumb visible and matches the BreadcrumbList data.

**Keywords**
- [ ] The primary keyword is in the title, H1, first paragraph, at least one H2 and the closing paragraph.
- [ ] Secondary keywords appear in sections that really cover them.
- [ ] No keyword stuffing. No keyword counting. Wording varies.
- [ ] No avoided keywords (Section 3.4). Nothing reserved for the blog is targeted.
- [ ] One consistent name per product. Old names appear once as "formerly". Abbreviations are spelled out.

**Content**
- [ ] The first 1 to 3 sentences answer the page's main question. The first sentence under each heading gives the direct answer.
- [ ] Each section stands alone and could be quoted.
- [ ] No "Key takeaways" box.
- [ ] Specifics, dates and sources are in the text. Statistics name a real source and year. Nothing is invented.
- [ ] One proof element (service, solution and industry pages). Reviewer line present.
- [ ] No out-of-scope service is offered or implied (Section 1.4).
- [ ] The right blueprint for the page type is followed.
- [ ] FAQ: at least 10 real questions (5 on Contact), question as H3, answers of about 40 to 60 words with the direct answer first, no copied blocks, no FAQPage schema.
- [ ] A consultative call to action that links to `/contact/`.

**Metadata and links**
- [ ] Title and description are from the JSON and within the length rules.
- [ ] Canonical is a self-referencing absolute URL with the trailing slash.
- [ ] All structural links are present. Contextual links appear only where the text discusses the topic. Anchors are descriptive and varied.
- [ ] No links to or from blog posts.
- [ ] Every internal link is a real `<a href>` in the server-rendered HTML.

---

## 10. Open items and content gaps

Do not guess any of these. Record gaps in `content/TODO.md` and keep affected pages in draft until the client answers.

1. **Pricing and Clients pages** need client approval, and the Clients page needs written permission for every client name, logo and quote.
2. **Engagement models:** the source material has two versions of the Dedicated model (40+ hours a week, and 15+ hours a week with a 0 to 4 hour response). The free starting hours offer and the response times also need confirmation. Pricing and How We Work must use one version.
3. **Timelines and effort figures** for each service ("Typical timeline" in At a glance) and for solutions need client figures.
4. **Proof:** result statements and numbers for each client story (for example, OTIS deployment time falling from 13 hours to 4) need client approval before publishing.
5. **Team:** names, roles and photos for About and for the reviewer lines.
6. **Contact details:** the correct spelling of the contact person's name, and the correct LinkedIn company page URL (two versions exist in the source material).
7. **Labels:** the client may still approve the label "Government" in place of "Federal Government". The URL is already `/industries/government/`.
8. **Product renames:** Copilot Cowork and Customer Insights may be renamed by Microsoft. If that happens, change the headings and copy, and add a 301 redirect if a slug changes.
9. **Generated keywords:** some keywords were generated from intent. After launch, review Search Console data after six to eight weeks and adjust.

---

## Appendix A. All URLs and keywords

Priority: P1 is highest. Basis shows where the primary keyword evidence comes from: Keyword Planner (exact monthly searches), Search Console only, or generated from search intent (no volume data). The JSON holds the same data with evidence for each secondary keyword.

| # | URL | Page | Type | Priority | Primary keyword | Basis | Secondary keywords |
|---|---|---|---|---|---|---|---|
| 1 | `/` | Home | Home | P1 | dynamics 365 consulting | Keyword Planner (260/mo) | dynamics 365 consulting services; microsoft dynamics 365 consulting services; dynamics 365 consulting company; dynamics 365 consulting companies; microsoft dynamics consulting services |
| 2 | `/services/` | Services | Overview | P1 | microsoft 365 consulting | Keyword Planner (260/mo) | microsoft 365 consulting services; office 365 consultant; office 365 consulting services |
| 3 | `/solutions/` | Solutions | Overview | Hub | microsoft solutions for mid-size companies | Generated (intent-based) | dynamics 365 solutions for business; microsoft 365 solutions for business; solve business problems with microsoft 365; microsoft solutions by business problem |
| 4 | `/industries/` | Industries | Overview | Hub | microsoft solutions by industry | Generated (intent-based) | dynamics 365 for industries; microsoft 365 industry solutions; crm and sharepoint solutions by industry; industry specific dynamics 365 consulting |
| 5 | `/how-we-work/` | How We Work | Process | P1 | dynamics 365 implementation process | Generated (intent-based) | dynamics 365 implementation methodology; crm implementation best practices; agile crm implementation; best practices for crm implementation; dynamics 365 implementation phases |
| 6 | `/pricing/` | Pricing | Pricing | Later | dynamics 365 implementation cost | Keyword Planner (50/mo) | microsoft dynamics implementation cost; microsoft dynamics cost of implementation; microsoft dynamics 365 implementation cost; microsoft dynamics crm implementation cost; dynamics 365 cost estimator |
| 7 | `/clients/` | Clients | Clients | Proposed | dynamics 365 case studies | Generated (intent-based) | dynamics 365 customer success stories; dynamics 365 crm case study; microsoft 365 migration case study; sharepoint case study; microsoft partner client results |
| 8 | `/blog/` | Blog (hub) | Hub | Support | dynamics 365 blog | Generated (intent-based) | dynamics 365 troubleshooting guides; dynamics 365 tips for mid-size companies; microsoft 365 copilot guides; sharepoint tips and guides |
| 9 | `/about/` | About Us | About | P1 | mp-365 microsoft partner | Generated (intent-based) | modern partners 365; about mp-365; mp-365 dynamics 365 partner; microsoft solutions partner dynamics 365 |
| 10 | `/contact/` | Contact | Contact | P1 | contact mp-365 | Generated (intent-based) | request a dynamics 365 consultation; talk to a dynamics 365 consulting partner; free dynamics 365 consultation; microsoft 365 consultation request |
| 11 | `/services/dynamics-365-crm/` | Dynamics 365 CRM Consultation | Category | P1 | dynamics 365 crm consulting | Keyword Planner (50/mo) | dynamics crm consulting services; dynamics 365 crm; microsoft dynamics 365 consultant |
| 12 | `/services/dynamics-365-crm/sales/` | Dynamics 365 Sales | Service | P1 | microsoft dynamics 365 sales | Keyword Planner (1900/mo) | dynamics 365 sales; dynamics 365 sales consultant; dynamics 365 sales implementation; dynamics 365 sales crm |
| 13 | `/services/dynamics-365-crm/customer-service/` | Dynamics 365 Customer Service | Service | P1 | dynamics 365 customer service | Keyword Planner (480/mo) | microsoft dynamics 365 customer service; dynamics customer service; dynamics 365 customer service implementation |
| 14 | `/services/dynamics-365-crm/customer-insights/` | Dynamics 365 Customer Insights | Service | P1 | microsoft dynamics 365 marketing | Keyword Planner (170/mo) | dynamics 365 marketing; dynamics 365 customer insights journeys; d365 marketing |
| 15 | `/services/dynamics-365-crm/lead-management/` | Lead Management & Attribution | Service | P3 | dynamics 365 lead scoring | Keyword Planner (10/mo) | crm lead management; sales lead management; lead tracking crm; dynamics 365 lead management; lead attribution in dynamics 365 |
| 16 | `/services/dynamics-365-crm/security-roles-audit/` | Dynamics 365 Security Roles & Access Audit | Service | P2 | dynamics 365 security roles | Keyword Planner (40/mo) | dynamics security roles; dynamics 365 security role permissions |
| 17 | `/services/dynamics-365-crm/integration-services/` | Dynamics 365 Integration Services | Service | P2 | dynamics 365 integration services | Keyword Planner (110/mo) | dynamics 365 integration; business central integration; microsoft dynamics 365 integration; dynamics 365 sharepoint integration |
| 18 | `/services/sharepoint/` | SharePoint & Intranets | Category | P1 | sharepoint consulting services | Keyword Planner (320/mo) | sharepoint consulting; sharepoint consulting firm; sharepoint consultancy; microsoft sharepoint consulting services; sharepoint expert |
| 19 | `/services/sharepoint/intranet-development/` | SharePoint Intranet Development | Service | P2 | sharepoint intranet services | Keyword Planner (30/mo) | sharepoint intranet; sharepoint development companies; sharepoint intranet consultant; sharepoint intranet development services; sharepoint intranet consulting services |
| 20 | `/services/sharepoint/migration/` | SharePoint Server Upgrade & Migration | Service | P2 | sharepoint migration consulting | Keyword Planner (30/mo) | sharepoint migration consultant; sharepoint on prem to online migration; migrate to sharepoint online; sharepoint 2016 to sharepoint online migration |
| 21 | `/services/sharepoint/file-share-migration/` | File Share to SharePoint Migration | Service | P2 | migrate file share to sharepoint online | Keyword Planner (30/mo) | migrate file server to sharepoint online |
| 22 | `/services/sharepoint/supplier-partner-portals/` | SharePoint Supplier & Partner Portals | Service | P2 | sharepoint extranet | Keyword Planner (30/mo) | sharepoint vendor portal |
| 23 | `/services/sharepoint/information-architecture/` | SharePoint Search & Information Architecture | Service | P3 | sharepoint information architecture | Keyword Planner (20/mo) | sharepoint metadata strategy; sharepoint site structure best practices; sharepoint navigation design; sharepoint search not working |
| 24 | `/services/copilot/` | Microsoft Copilot & AI | Category | P1 | microsoft copilot consulting | Keyword Planner (70/mo) |  |
| 25 | `/services/copilot/readiness/` | Microsoft 365 Copilot Readiness | Service | P2 | microsoft 365 copilot readiness assessment | Keyword Planner (40/mo) | microsoft 365 copilot adoption |
| 26 | `/services/copilot/sales-agents/` | Dynamics 365 Sales Agents | Service | P2 | microsoft dynamics 365 ai for sales | Search Console only | dynamics 365 sales qualification agent; copilot for sales; ai sales agents dynamics 365; dynamics 365 sales agent |
| 27 | `/services/copilot/custom-agents/` | Custom Copilot Agent Development | Service | P2 | custom copilot agents | Keyword Planner (70/mo) | copilot studio agents; copilot studio development; copilot studio consulting |
| 28 | `/services/copilot/cowork/` | Copilot Cowork | Service | P3 | copilot cowork consulting | Generated (intent-based) | microsoft copilot cowork; copilot cowork implementation; copilot cowork setup; copilot cowork rollout |
| 29 | `/services/copilot/ai-data-governance-audit/` | AI Data Governance Audit | Service | P3 | copilot data protection | Keyword Planner (20/mo) | microsoft 365 copilot security; copilot data governance; copilot oversharing; copilot oversharing audit; microsoft 365 copilot data access audit |
| 30 | `/services/power-platform/` | Power Platform | Category | P1 | power platform consulting | Keyword Planner (140/mo) | power platform consulting services; microsoft power platform consulting; microsoft power platform consulting services |
| 31 | `/services/power-platform/power-apps/` | Power Apps Development | Service | P2 | power apps consulting services | Keyword Planner (50/mo) | power apps consultant; power apps development; power apps development services |
| 32 | `/services/power-platform/power-pages/` | Power Pages Portal Development | Service | P3 | power pages consulting | Keyword Planner (20/mo) | dynamics portals; power apps portals; microsoft power apps portal; dynamics 365 portal; dynamics 365 customer portal |
| 33 | `/services/power-platform/power-automate/` | Power Automate Workflow Automation | Service | P1 | power automate consulting | Keyword Planner (170/mo) | power automate consulting services; power automate developers; microsoft power automate consultant |
| 34 | `/services/power-platform/power-bi/` | Power BI Consulting & Dashboards | Service | P1 | power bi consulting | Keyword Planner (590/mo) | power bi consulting services; microsoft power bi consultant; power bi consulting companies; power bi implementation services |
| 35 | `/services/microsoft-365-migration/` | Microsoft 365 Migration | Category | P1 | microsoft 365 migration services | Keyword Planner (260/mo) | office 365 migration; office 365 migration services; microsoft 365 migration; m365 migration; office 365 migration consultant |
| 36 | `/services/microsoft-365-migration/exchange-online-migration/` | Exchange to Microsoft 365 Migration | Service | P2 | exchange online migration | Keyword Planner (70/mo) | migrate exchange to office 365; hybrid exchange migration; exchange migrations |
| 37 | `/services/microsoft-365-migration/onedrive-migration/` | OneDrive Migration | Service | P2 | onedrive migration | Keyword Planner (110/mo) | onedrive migration tool |
| 38 | `/services/tenant-to-tenant-migration/` | M&A Tenant Migration | Category | P1 | tenant to tenant migration | Keyword Planner (140/mo) | office 365 tenant migration; microsoft 365 tenant to tenant migration; microsoft tenant to tenant migration; m365 tenant to tenant migration; microsoft 365 tenant migration |
| 39 | `/services/tenant-to-tenant-migration/mailbox-teams-files/` | Cross-Tenant Mailbox, Teams & File Migration | Service | P2 | cross tenant mailbox migration | Keyword Planner (30/mo) | cross tenant migration; cross tenant sharepoint migration; cross tenant user data migration; teams migration tenant to tenant; migrate sharepoint between tenants |
| 40 | `/services/tenant-to-tenant-migration/coexistence/` | Tenant Coexistence & Domain Cutover | Service | P3 | microsoft 365 tenant coexistence | Generated (intent-based) | tenant coexistence microsoft 365; domain cutover microsoft 365; cross tenant coexistence microsoft 365; shared calendar between microsoft 365 tenants; domain cutover tenant to tenant migration |
| 41 | `/services/data-governance/` | Data Governance | Category | P1 | data governance consulting | Keyword Planner (320/mo) | data governance consulting companies; data governance consulting firms |
| 42 | `/services/data-governance/microsoft-purview/` | Microsoft Purview & Permission Models | Service | P3 | microsoft purview implementation | Keyword Planner (10/mo) | sharepoint sensitivity labels; microsoft 365 data loss prevention; office 365 dlp; sharepoint dlp; microsoft purview consulting |
| 43 | `/services/data-governance/data-quality-management/` | Data Quality Management | Service | P2 | crm cleanup | Keyword Planner (40/mo) | crm data cleanup; dynamics 365 duplicate detection |
| 44 | `/services/application-modernization/` | Application Modernization & DevOps | Category | P1 | azure application modernization | Keyword Planner (30/mo) | legacy modernization services; application modernization services; application modernization companies; azure app modernization; microsoft application modernization |
| 45 | `/services/application-modernization/legacy-migration/` | Legacy Application Migration | Service | P2 | legacy software modernization company | Keyword Planner (110/mo) | legacy system migration; migration of legacy system; cloud modernization; app migration to azure |
| 46 | `/services/application-modernization/devops-release-automation/` | DevOps & Release Automation | Service | P1 | power platform pipelines | Keyword Planner (140/mo) | dynamics 365 devops; dynamics 365 alm |
| 47 | `/solutions/sharepoint-intranet/` | Modern Company Intranet | Solution | P1 | sharepoint intranet | Keyword Planner (3600/mo) | microsoft sharepoint intranet; sharepoint intranet examples; sharepoint intranet templates; microsoft 365 intranet; microsoft teams intranet |
| 48 | `/solutions/executive-dashboards/` | Executive Dashboards & Analytics | Solution | P2 | power bi executive dashboard | Keyword Planner (70/mo) | sales dashboard power bi; executive dashboard power bi |
| 49 | `/solutions/crm-implementation/` | Rapid CRM Deployment | Solution | P1 | crm implementation services | Keyword Planner (260/mo) | dynamics 365 implementation services; microsoft dynamics 365 implementation; crm deployment; crm implementation; dynamics 365 implementation timeline |
| 50 | `/solutions/dynamics-365-migration/` | Classic CRM Modernization | Solution | P2 | dynamics 365 migration services | Keyword Planner (20/mo) | dynamics 365 migration company; dynamics 365 on premise; ms dynamics on premise; dynamics 365 upgrade |
| 51 | `/solutions/contract-management-automation/` | Contract Management Automation | Solution | P1 | contract management automation | Keyword Planner (170/mo) | contract governance process; contract automation; automated contract management system; contract workflow automation; sales contract automation |
| 52 | `/solutions/m-and-a-it-integration/` | M&A IT Integration & Separation | Solution | P2 | m&a it integration | Keyword Planner (50/mo) | mergers and acquisitions it integration; it carve out; office 365 mergers and acquisitions integration |
| 53 | `/solutions/crm-systems-integration/` | CRM & Systems Integration | Solution | P2 | crm and marketing automation integration | Keyword Planner (70/mo) |  |
| 54 | `/industries/manufacturing/` | Manufacturing | Industry | P1 | crm for manufacturing | Keyword Planner (480/mo) | manufacturing crm software; industrial crm; crm software for manufacturing industry; crm for manufacturing companies; manufacturing it solutions |
| 55 | `/industries/logistics-supply-chain/` | Logistics & Supply Chain | Industry | P2 | crm for logistics | Keyword Planner (110/mo) | logistics crm software; crm logistic; freight broker crm; crm for freight brokers |
| 56 | `/industries/energy-utilities/` | Energy & Utilities | Industry | P2 | crm for utilities | Keyword Planner (90/mo) | crm for energy |
| 57 | `/industries/construction-engineering/` | Construction & Engineering | Industry | P1 | crm for construction industry | Keyword Planner (880/mo) | best crm for construction; crm for construction companies; crm software for construction companies |
| 58 | `/industries/financial-services/` | Financial Services & Credit Unions | Industry | P2 | credit union crm | Keyword Planner (70/mo) | crm software for credit unions; sharepoint customization for financial institutions; microsoft sharepoint for financial services |
| 59 | `/industries/government/` | Federal Government | Industry | P1 | gov crm | Keyword Planner (140/mo) | crm software for government; public sector crm; crm for government agencies; government contracting crm |
| 60 | `/industries/medical-devices/` | Medical Devices | Industry | P2 | medical device crm | Keyword Planner (90/mo) |  |
| 61 | `/industries/retail/` | Retail | Industry | P1 | retail crm | Keyword Planner (260/mo) | retail crm software; crm for retail; it solutions for retail |
| 62 | `/industries/healthcare/` | Healthcare | Industry | P1 | dynamics 365 healthcare | Keyword Planner (10/mo) | microsoft 365 for healthcare organizations; sharepoint for healthcare; dynamics 365 for healthcare; microsoft dynamics 365 for health care; healthcare crm software |

---

## Appendix B. Metadata for every page

Title length includes the " | MP-365" suffix. Descriptions follow the length and ending rules in Section 6.

| URL | Title tag (chars) | Meta description (chars) | H1 |
|---|---|---|---|
| `/` | MP-365: Dynamics 365 and Microsoft 365 Consulting (49) | MP-365 is a Microsoft Solutions Partner for Dynamics 365, Microsoft 365 and Copilot, helping mid-size and enterprise teams since 2010. Book a call. (147) | Dynamics 365 and Microsoft 365 Consulting That Gets Used |
| `/services/` | Microsoft 365 and Dynamics 365 Consulting Services \| MP-365 (59) | MP-365 services cover Dynamics 365 CRM, SharePoint, Microsoft Copilot, Power Platform, Microsoft 365 migration and data governance. See every service. (150) | Microsoft 365 and Dynamics 365 Consulting Services |
| `/solutions/` | Microsoft Solutions for Mid-Size Companies \| MP-365 (51) | MP-365 solutions fix specific business problems on Microsoft 365 and Dynamics 365, from intranets and dashboards to CRM go-lives. Find your solution. (149) | Microsoft Solutions for Mid-Size Companies |
| `/industries/` | Dynamics 365 and Microsoft 365 by Industry \| MP-365 (51) | See how MP-365 applies Dynamics 365 and Microsoft 365 in manufacturing, healthcare, government, construction and more. Find your industry. (138) | Microsoft Solutions by Industry |
| `/how-we-work/` | Dynamics 365 Implementation Process: How We Work \| MP-365 (57) | How a Dynamics 365 implementation runs with MP-365: understand the goal, build a quick MVP, refine it with your team, then deploy. See the process. (147) | Dynamics 365 Implementation Process |
| `/pricing/` | Dynamics 365 Implementation Cost and Pricing \| MP-365 (53) | How MP-365 prices Dynamics 365 and Microsoft 365 projects: engagement models, what drives implementation cost and how to compare bids. Plan your project. (153) | Dynamics 365 Implementation Cost and Pricing |
| `/clients/` | Dynamics 365 Case Studies and Client Results \| MP-365 (53) | Dynamics 365 case studies and client results from MP-365: who we work with, what we delivered and the business problems we solved. See our client work. (151) | Dynamics 365 Case Studies and Client Results |
| `/blog/` | Dynamics 365 and Microsoft 365 Blog \| MP-365 (44) | Practical guides on Dynamics 365, Microsoft 365, Copilot and SharePoint from the MP-365 team, written for mid-size and enterprise teams. Read the latest. (153) | Dynamics 365 and Microsoft 365 Blog |
| `/about/` | About MP-365 (Modern Partners 365) \| MP-365 (43) | MP-365, also known as Modern Partners 365, is a Microsoft Solutions Partner for Dynamics 365, Microsoft 365 and Copilot since 2010. Learn about MP-365. (151) | About MP-365 (Modern Partners 365) |
| `/contact/` | Contact MP-365: Request a Consultation \| MP-365 (47) | Contact MP-365 about Dynamics 365, SharePoint, Power Platform or Microsoft 365 projects. Discovery calls under 2 hours are not billed. Send a message. (150) | Contact MP-365 |
| `/services/dynamics-365-crm/` | Dynamics 365 CRM Consulting for Mid-Size Teams \| MP-365 (55) | Dynamics 365 CRM consulting from MP-365: Sales, Customer Service, Customer Insights, lead management, access audits and integrations. Talk to MP-365. (149) | Dynamics 365 CRM Consulting for Mid-Size Teams |
| `/services/dynamics-365-crm/sales/` | Dynamics 365 Sales Consulting and Implementation \| MP-365 (57) | Dynamics 365 Sales consulting and implementation: pipeline visibility, forecasting and lead handling built around your sales team. Book a discovery call. (153) | Dynamics 365 Sales Consulting and Implementation |
| `/services/dynamics-365-crm/customer-service/` | Dynamics 365 Customer Service Implementation \| MP-365 (53) | Dynamics 365 Customer Service implementation: case management, clear ownership and live KPIs so no customer issue gets lost. Book a discovery call. (147) | Dynamics 365 Customer Service Implementation |
| `/services/dynamics-365-crm/customer-insights/` | Dynamics 365 Customer Insights and Marketing \| MP-365 (53) | Dynamics 365 Customer Insights, formerly Dynamics 365 Marketing: set up journeys, segments and lead nurturing on your CRM data. Book a discovery call. (150) | Dynamics 365 Customer Insights and Marketing |
| `/services/dynamics-365-crm/lead-management/` | Dynamics 365 Lead Scoring and Lead Management \| MP-365 (54) | Dynamics 365 lead scoring and lead management: one process to capture, score and attribute leads to their source. Book a discovery call. (136) | Dynamics 365 Lead Scoring and Lead Management |
| `/services/dynamics-365-crm/security-roles-audit/` | Dynamics 365 Security Roles and Access Audit \| MP-365 (53) | Dynamics 365 security roles and access audit: find admin access sprawl, tighten permissions and protect customer data. Request an access audit. (143) | Dynamics 365 Security Roles and Access Audit |
| `/services/dynamics-365-crm/integration-services/` | Dynamics 365 Integration Services and ERP Links \| MP-365 (56) | Dynamics 365 integration services connect your CRM to ERP, marketing and other systems so every record arrives. Includes Business Central. Talk to MP-365. (154) | Dynamics 365 Integration Services and ERP Links |
| `/services/sharepoint/` | SharePoint Consulting Services for Mid-Size Firms \| MP-365 (58) | SharePoint consulting services: intranets, upgrades, file share migrations, vendor portals and search for mid-size and enterprise teams. Talk to MP-365. (152) | SharePoint Consulting Services for Mid-Size Firms |
| `/services/sharepoint/intranet-development/` | SharePoint Intranet Services and Development \| MP-365 (53) | SharePoint intranet services: design and build a company portal with clear ownership, working search and no VPN needed. Book a discovery call. (142) | SharePoint Intranet Services and Development |
| `/services/sharepoint/migration/` | SharePoint Migration Consulting and Upgrades \| MP-365 (53) | SharePoint migration consulting from 2010 to 2019 to SharePoint Online. Support for SharePoint 2016 and 2019 ended July 14, 2026. Plan your migration. (150) | SharePoint Migration Consulting and Upgrades |
| `/services/sharepoint/file-share-migration/` | Migrate File Shares to SharePoint Online \| MP-365 (49) | Move network file shares to SharePoint Online with clean structure, metadata, version control and permissions that make files easy to find. Plan your move. (155) | Migrate File Shares to SharePoint Online |
| `/services/sharepoint/supplier-partner-portals/` | SharePoint Extranet and Vendor Portals \| MP-365 (47) | SharePoint extranet and vendor portals: share files and updates securely with suppliers and partners without extra tools. Book a discovery call. (144) | SharePoint Extranet and Vendor Portals |
| `/services/sharepoint/information-architecture/` | SharePoint Information Architecture and Search \| MP-365 (55) | SharePoint information architecture and search: structure sites, metadata and navigation so teams find files in seconds. Book a discovery call. (143) | SharePoint Information Architecture and Search |
| `/services/copilot/` | Microsoft Copilot Consulting and Rollout \| MP-365 (49) | Microsoft Copilot consulting for Microsoft 365 and Dynamics 365: readiness, rollout, custom agents and data protection. Talk to MP-365 about Copilot. (149) | Microsoft Copilot Consulting and Rollout |
| `/services/copilot/readiness/` | Microsoft 365 Copilot Readiness Assessment \| MP-365 (51) | Microsoft 365 Copilot readiness assessment: clean up permissions, fix oversharing and prepare your data before rollout. Request an assessment. (142) | Microsoft 365 Copilot Readiness Assessment |
| `/services/copilot/sales-agents/` | Dynamics 365 Sales Agents and AI for Sales \| MP-365 (51) | Dynamics 365 sales agents and AI for sales: set up lead qualification and research agents that show reps what to do next. Book a discovery call. (144) | Dynamics 365 Sales Agents and AI for Sales |
| `/services/copilot/custom-agents/` | Custom Copilot Agents Built in Copilot Studio \| MP-365 (54) | Custom Copilot agents built in Copilot Studio for sales, service and internal teams, connected to your Dynamics 365 and Microsoft 365 data. Book a call. (152) | Custom Copilot Agents Built in Copilot Studio |
| `/services/copilot/cowork/` | Copilot Cowork Consulting and Rollout \| MP-365 (46) | Copilot Cowork consulting: plan the rollout, set permissions and train teams to use Copilot Cowork safely and effectively. Book a discovery call. (145) | Copilot Cowork Consulting and Rollout |
| `/services/copilot/ai-data-governance-audit/` | Copilot Data Protection and Permissions Audit \| MP-365 (54) | Copilot data protection audit: review who can reach which files before Copilot goes live, then fix risky permissions. Request an audit. (135) | Copilot Data Protection and Permissions Audit |
| `/services/power-platform/` | Power Platform Consulting for Business Teams \| MP-365 (53) | Power Platform consulting: Power Apps, Power Pages, Power Automate and Power BI built around your Dynamics 365 and Microsoft 365 data. Talk to MP-365. (150) | Power Platform Consulting for Business Teams |
| `/services/power-platform/power-apps/` | Power Apps Consulting and Development \| MP-365 (46) | Power Apps consulting services: custom apps that replace spreadsheets and email for approvals, inspections and daily work. Book a discovery call. (145) | Power Apps Consulting and Development |
| `/services/power-platform/power-pages/` | Power Pages Consulting for Customer Portals \| MP-365 (52) | Power Pages consulting: build secure customer and partner portals on Dynamics 365 data. Formerly called Power Apps portals. Book a discovery call. (146) | Power Pages Consulting for Customer Portals |
| `/services/power-platform/power-automate/` | Power Automate Consulting and Workflows \| MP-365 (48) | Power Automate consulting: automate approvals, notifications and data moves between Dynamics 365, SharePoint and other systems. Book a discovery call. (150) | Power Automate Consulting and Workflows |
| `/services/power-platform/power-bi/` | Power BI Consulting and Dashboards \| MP-365 (43) | Power BI consulting and dashboards: live reporting across Dynamics 365, SharePoint and business systems for leaders and teams. Book a discovery call. (149) | Power BI Consulting and Dashboards |
| `/services/microsoft-365-migration/` | Microsoft 365 Migration Services \| MP-365 (41) | Microsoft 365 migration services for Exchange mailboxes, files and tenants, planned to keep your users working. Plan your migration with MP-365. (144) | Microsoft 365 Migration Services |
| `/services/microsoft-365-migration/exchange-online-migration/` | Exchange Online Migration Services \| MP-365 (43) | Exchange Online migration services: move mailboxes from Exchange Server to Microsoft 365 with hybrid or cutover plans. Plan your migration. (139) | Exchange Online Migration Services |
| `/services/microsoft-365-migration/onedrive-migration/` | OneDrive Migration Services \| MP-365 (36) | OneDrive migration services: move user files into OneDrive with version history, sharing links and permissions in mind. Plan your migration. (140) | OneDrive Migration Services |
| `/services/tenant-to-tenant-migration/` | Tenant to Tenant Migration for Mergers \| MP-365 (47) | Tenant to tenant migration for mergers, acquisitions and divestitures: move email, files, Teams and accounts between Microsoft 365 tenants. Plan your move. (155) | Tenant to Tenant Migration for Mergers |
| `/services/tenant-to-tenant-migration/mailbox-teams-files/` | Cross-Tenant Mailbox, Teams and File Migration \| MP-365 (55) | Cross-tenant mailbox, Teams and file migration between Microsoft 365 tenants during a merger or divestiture, with minimal downtime. Plan your migration. (152) | Cross-Tenant Mailbox, Teams and File Migration |
| `/services/tenant-to-tenant-migration/coexistence/` | Microsoft 365 Tenant Coexistence and Cutover \| MP-365 (53) | Microsoft 365 tenant coexistence and domain cutover: keep calendars and directories working across two tenants during a deal. Plan your cutover. (144) | Microsoft 365 Tenant Coexistence and Cutover |
| `/services/data-governance/` | Microsoft 365 Data Governance Consulting \| MP-365 (49) | Microsoft 365 data governance consulting: permission models, Microsoft Purview and data quality so people see only what they should. Talk to MP-365. (148) | Microsoft 365 Data Governance Consulting |
| `/services/data-governance/microsoft-purview/` | Microsoft Purview Implementation and Permissions \| MP-365 (57) | Microsoft Purview implementation and permission models: sensitivity labels, access policies and clean SharePoint permissions. Book a discovery call. (148) | Microsoft Purview Implementation and Permissions |
| `/services/data-governance/data-quality-management/` | CRM Data Cleanup and Data Quality Management \| MP-365 (53) | CRM data cleanup and data quality management: remove duplicates, standardize entries and keep Dynamics 365 data trustworthy. Book a discovery call. (147) | CRM Data Cleanup and Data Quality Management |
| `/services/application-modernization/` | Azure Application Modernization Services \| MP-365 (49) | Azure application modernization services: move legacy on-premises apps to Azure with safer releases and DevOps automation. Talk to MP-365. (138) | Azure Application Modernization Services |
| `/services/application-modernization/legacy-migration/` | Legacy Application Migration Services \| MP-365 (46) | Legacy application migration to Azure: re-engineer older on-premises software to run on modern cloud infrastructure. Book a discovery call. (139) | Legacy Application Migration Services |
| `/services/application-modernization/devops-release-automation/` | Dynamics 365 DevOps and Release Automation \| MP-365 (51) | Dynamics 365 DevOps and release automation: pipelines, testing and release notes that stop CRM releases from breaking. Book a discovery call. (141) | Dynamics 365 DevOps and Release Automation |
| `/solutions/sharepoint-intranet/` | SharePoint Intranet: Build on Microsoft 365 or Buy \| MP-365 (59) | Build a SharePoint intranet on Microsoft 365 or buy intranet software? Compare the options and features, then see how MP-365 builds it. Plan your intranet. (155) | SharePoint Intranet: Build on Microsoft 365 or Buy |
| `/solutions/executive-dashboards/` | Power BI Executive Dashboards for Leaders \| MP-365 (50) | Power BI executive dashboards give leaders live sales, service and operations KPIs from Dynamics 365 and other systems. See how it works. (137) | Power BI Executive Dashboards for Leaders |
| `/solutions/crm-implementation/` | CRM Implementation Services: Go Live in Weeks \| MP-365 (54) | CRM implementation services that put Dynamics 365 Sales or Customer Service live in weeks, using templates and tested releases. Plan your go-live. (146) | CRM Implementation Services: Go Live in Weeks |
| `/solutions/dynamics-365-migration/` | Dynamics CRM Migration and Classic CRM Upgrade \| MP-365 (55) | Modernize classic Dynamics CRM: move on-premises to Dynamics 365 online and replace classic workflows and plugins with Power Automate. Plan your upgrade. (153) | Dynamics CRM Migration and Classic CRM Upgrade |
| `/solutions/contract-management-automation/` | Contract Management Automation on Microsoft 365 \| MP-365 (56) | Contract management automation on SharePoint and Power Automate: stages, owners, renewal reminders and dashboards for finance and legal. Plan your rollout. (155) | Contract Management Automation on Microsoft 365 |
| `/solutions/m-and-a-it-integration/` | M&A IT Integration and Separation on Microsoft 365 \| MP-365 (59) | M&A IT integration and separation on Microsoft 365: combine or split tenants during acquisitions and divestitures without downtime. Plan your deal. (147) | M&A IT Integration and Separation on Microsoft 365 |
| `/solutions/crm-systems-integration/` | CRM and Marketing Systems Integration \| MP-365 (46) | Connect your CRM to marketing, ERP and third-party tools through secure APIs so leads and orders arrive without dropped records. Plan your integration. (151) | CRM and Marketing Systems Integration |
| `/industries/manufacturing/` | CRM for Manufacturing on Dynamics 365 \| MP-365 (46) | CRM for manufacturing companies on Dynamics 365: quotes, distributor accounts, pipeline reporting and ERP connections. Talk to MP-365 about manufacturing. (154) | CRM for Manufacturing on Dynamics 365 |
| `/industries/logistics-supply-chain/` | CRM for Logistics and Supply Chain Companies \| MP-365 (53) | CRM for logistics and supply chain companies: manage customer accounts, quotes and service cases with Dynamics 365 and Microsoft 365. Book a call. (146) | CRM for Logistics and Supply Chain Companies |
| `/industries/energy-utilities/` | CRM for Utilities and Energy Companies \| MP-365 (47) | CRM for utilities and energy companies: manage customer accounts, service requests and shared files with Dynamics 365 and SharePoint. Book a call. (146) | CRM for Utilities and Energy Companies |
| `/industries/construction-engineering/` | CRM for Construction and Engineering Firms \| MP-365 (51) | CRM for construction and engineering firms: track bids, clients and projects in Dynamics 365 and control project documents in SharePoint. Talk to MP-365. (153) | CRM for Construction and Engineering Firms |
| `/industries/financial-services/` | Dynamics 365 for Credit Unions and Finance \| MP-365 (51) | Dynamics 365 and SharePoint for credit unions and financial services: member records, advisor workflows and document control. Talk to MP-365. (141) | Dynamics 365 for Credit Unions and Finance |
| `/industries/government/` | CRM and Microsoft 365 for Government Agencies \| MP-365 (54) | CRM and Microsoft 365 for government agencies: case and constituent tracking in Dynamics 365 plus SharePoint and permission models. Talk to MP-365. (147) | CRM and Microsoft 365 for Government Agencies |
| `/industries/medical-devices/` | CRM for Medical Device Companies \| MP-365 (41) | CRM for medical device companies: manage sales, contracts and customer data with Dynamics 365 and SharePoint. Talk to MP-365 about your needs. (142) | CRM for Medical Device Companies |
| `/industries/retail/` | CRM for Retail on Dynamics 365 \| MP-365 (39) | CRM for retailers: build customer service, reporting and system integrations on Dynamics 365 and Power BI. Talk to MP-365 about retail. (135) | CRM for Retail on Dynamics 365 |
| `/industries/healthcare/` | Dynamics 365 and Microsoft 365 for Healthcare \| MP-365 (54) | Dynamics 365 and Microsoft 365 for healthcare organizations: service request tracking, document control and permission models. Talk to MP-365. (142) | Dynamics 365 and Microsoft 365 for Healthcare |

---

## Appendix C. Internal link map

Structural links are required. Contextual links are used only where the text really discusses the topic. Anchors: use the target page name or its primary keyword, and vary them. Blog posts are excluded. The JSON has the anchor options for each link.

| Page | Structural links (required) | Contextual links (use where relevant) |
|---|---|---|
| `/` | Services (standalone); Solutions (standalone); Industries (standalone); How We Work (standalone); Clients (standalone); About Us (standalone); Contact (standalone); Pricing (standalone); Dynamics 365 CRM Consultation (standalone); SharePoint & Intranets (standalone); Microsoft Copilot & AI (standalone); Power Platform (standalone); Microsoft 365 Migration (standalone); M&A Tenant Migration (standalone); Data Governance (standalone); Application Modernization & DevOps (standalone) |  |
| `/services/` | Dynamics 365 CRM Consultation (child); SharePoint & Intranets (child); Microsoft Copilot & AI (child); Power Platform (child); Microsoft 365 Migration (child); M&A Tenant Migration (child); Data Governance (child); Application Modernization & DevOps (child) |  |
| `/solutions/` | Modern Company Intranet (child); Executive Dashboards & Analytics (child); Rapid CRM Deployment (child); Classic CRM Modernization (child); Contract Management Automation (child); M&A IT Integration & Separation (child); CRM & Systems Integration (child) |  |
| `/industries/` | Manufacturing (child); Logistics & Supply Chain (child); Energy & Utilities (child); Construction & Engineering (child); Financial Services & Credit Unions (child); Federal Government (child); Medical Devices (child); Retail (child); Healthcare (child) |  |
| `/how-we-work/` | Pricing (standalone); Contact (standalone); Services (standalone); Clients (standalone) |  |
| `/pricing/` | How We Work (standalone); Contact (standalone); Services (standalone); Clients (standalone) |  |
| `/clients/` | Industries (standalone); Solutions (standalone); Contact (standalone); How We Work (standalone) |  |
| `/blog/` |  |  |
| `/about/` | How We Work (standalone); Clients (standalone); Services (standalone); Contact (standalone) |  |
| `/contact/` | How We Work (standalone); Pricing (standalone) |  |
| `/services/dynamics-365-crm/` | Services (parent); Dynamics 365 Sales (child); Dynamics 365 Customer Service (child); Dynamics 365 Customer Insights (child); Lead Management & Attribution (child); Dynamics 365 Security Roles & Access Audit (child); Dynamics 365 Integration Services (child); Contact (cta); How We Work (cta) | Classic CRM Modernization (context) |
| `/services/dynamics-365-crm/sales/` | Dynamics 365 CRM Consultation (parent); Contact (cta); Pricing (cta); How We Work (cta) | Lead Management & Attribution (related); Dynamics 365 Customer Insights (related); Dynamics 365 Integration Services (related); Dynamics 365 Sales Agents (related); Rapid CRM Deployment (solution); Power BI Consulting & Dashboards (related); Manufacturing (industry); Logistics & Supply Chain (industry); Construction & Engineering (industry); Medical Devices (industry) |
| `/services/dynamics-365-crm/customer-service/` | Dynamics 365 CRM Consultation (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Integration Services (related); Power Pages Portal Development (related); Rapid CRM Deployment (solution); Energy & Utilities (industry); Federal Government (industry); Retail (industry); Healthcare (industry) |
| `/services/dynamics-365-crm/customer-insights/` | Dynamics 365 CRM Consultation (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Sales (related); Lead Management & Attribution (related); Power BI Consulting & Dashboards (related) |
| `/services/dynamics-365-crm/lead-management/` | Dynamics 365 CRM Consultation (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Sales (related); Dynamics 365 Customer Insights (related); Power BI Consulting & Dashboards (related) |
| `/services/dynamics-365-crm/security-roles-audit/` | Dynamics 365 CRM Consultation (parent); Contact (cta); Pricing (cta); How We Work (cta) | Microsoft Purview & Permission Models (related); Data Quality Management (related); AI Data Governance Audit (related); Federal Government (industry) |
| `/services/dynamics-365-crm/integration-services/` | Dynamics 365 CRM Consultation (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Sales (related); Dynamics 365 Customer Service (related); CRM & Systems Integration (twin); Power Automate Workflow Automation (related); Data Quality Management (related); Executive Dashboards & Analytics (related); Manufacturing (industry) |
| `/services/sharepoint/` | Services (parent); SharePoint Intranet Development (child); SharePoint Server Upgrade & Migration (child); File Share to SharePoint Migration (child); SharePoint Supplier & Partner Portals (child); SharePoint Search & Information Architecture (child); Contact (cta); How We Work (cta) | Contract Management Automation (context) |
| `/services/sharepoint/intranet-development/` | SharePoint & Intranets (parent); Contact (cta); Pricing (cta); How We Work (cta) | Modern Company Intranet (twin); SharePoint Search & Information Architecture (related); SharePoint Supplier & Partner Portals (related); SharePoint Server Upgrade & Migration (related); Construction & Engineering (industry); Financial Services & Credit Unions (industry) |
| `/services/sharepoint/migration/` | SharePoint & Intranets (parent); Contact (cta); Pricing (cta); How We Work (cta) | SharePoint Intranet Development (related); File Share to SharePoint Migration (related); Microsoft 365 Migration (context) |
| `/services/sharepoint/file-share-migration/` | SharePoint & Intranets (parent); Contact (cta); Pricing (cta); How We Work (cta) | SharePoint Server Upgrade & Migration (related); OneDrive Migration (related); SharePoint Search & Information Architecture (related); Energy & Utilities (industry) |
| `/services/sharepoint/supplier-partner-portals/` | SharePoint & Intranets (parent); Contact (cta); Pricing (cta); How We Work (cta) | SharePoint Intranet Development (related); Power Pages Portal Development (related); Microsoft Purview & Permission Models (related) |
| `/services/sharepoint/information-architecture/` | SharePoint & Intranets (parent); Contact (cta); Pricing (cta); How We Work (cta) | SharePoint Intranet Development (related); File Share to SharePoint Migration (related); Microsoft Purview & Permission Models (related); Modern Company Intranet (related); Healthcare (industry) |
| `/services/copilot/` | Services (parent); Microsoft 365 Copilot Readiness (child); Dynamics 365 Sales Agents (child); Custom Copilot Agent Development (child); Copilot Cowork (child); AI Data Governance Audit (child); Contact (cta); How We Work (cta) |  |
| `/services/copilot/readiness/` | Microsoft Copilot & AI (parent); Contact (cta); Pricing (cta); How We Work (cta) | AI Data Governance Audit (related); Microsoft Purview & Permission Models (related); Copilot Cowork (related); Custom Copilot Agent Development (related); Dynamics 365 Sales Agents (related) |
| `/services/copilot/sales-agents/` | Microsoft Copilot & AI (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Sales (related); Custom Copilot Agent Development (related); Microsoft 365 Copilot Readiness (related) |
| `/services/copilot/custom-agents/` | Microsoft Copilot & AI (parent); Contact (cta); Pricing (cta); How We Work (cta) | Microsoft 365 Copilot Readiness (related); Dynamics 365 Sales Agents (related); Power Automate Workflow Automation (related) |
| `/services/copilot/cowork/` | Microsoft Copilot & AI (parent); Contact (cta); Pricing (cta); How We Work (cta) | Microsoft 365 Copilot Readiness (related); AI Data Governance Audit (related) |
| `/services/copilot/ai-data-governance-audit/` | Microsoft Copilot & AI (parent); Contact (cta); Pricing (cta); How We Work (cta) | Microsoft 365 Copilot Readiness (related); Copilot Cowork (related); Microsoft Purview & Permission Models (related); Dynamics 365 Security Roles & Access Audit (related) |
| `/services/power-platform/` | Services (parent); Power Apps Development (child); Power Pages Portal Development (child); Power Automate Workflow Automation (child); Power BI Consulting & Dashboards (child); Contact (cta); How We Work (cta) |  |
| `/services/power-platform/power-apps/` | Power Platform (parent); Contact (cta); Pricing (cta); How We Work (cta) | Power Automate Workflow Automation (related); Power Pages Portal Development (related); Power BI Consulting & Dashboards (related) |
| `/services/power-platform/power-pages/` | Power Platform (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Customer Service (related); SharePoint Supplier & Partner Portals (related); Power Apps Development (related) |
| `/services/power-platform/power-automate/` | Power Platform (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Integration Services (related); Classic CRM Modernization (related); Custom Copilot Agent Development (related); Power Apps Development (related); Contract Management Automation (solution); Logistics & Supply Chain (industry) |
| `/services/power-platform/power-bi/` | Power Platform (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Customer Insights (related); Lead Management & Attribution (related); Power Apps Development (related); Executive Dashboards & Analytics (twin); Dynamics 365 Sales (related); Energy & Utilities (industry); Financial Services & Credit Unions (industry); Retail (industry) |
| `/services/microsoft-365-migration/` | Services (parent); Exchange to Microsoft 365 Migration (child); OneDrive Migration (child); Contact (cta); How We Work (cta) | SharePoint Server Upgrade & Migration (context) |
| `/services/microsoft-365-migration/exchange-online-migration/` | Microsoft 365 Migration (parent); Contact (cta); Pricing (cta); How We Work (cta) | OneDrive Migration (related); M&A Tenant Migration (context) |
| `/services/microsoft-365-migration/onedrive-migration/` | Microsoft 365 Migration (parent); Contact (cta); Pricing (cta); How We Work (cta) | File Share to SharePoint Migration (related); Exchange to Microsoft 365 Migration (related) |
| `/services/tenant-to-tenant-migration/` | Services (parent); Cross-Tenant Mailbox, Teams & File Migration (child); Tenant Coexistence & Domain Cutover (child); Contact (cta); How We Work (cta) | Exchange to Microsoft 365 Migration (context); M&A IT Integration & Separation (twin) |
| `/services/tenant-to-tenant-migration/mailbox-teams-files/` | M&A Tenant Migration (parent); Contact (cta); Pricing (cta); How We Work (cta) | Tenant Coexistence & Domain Cutover (related); M&A IT Integration & Separation (solution) |
| `/services/tenant-to-tenant-migration/coexistence/` | M&A Tenant Migration (parent); Contact (cta); Pricing (cta); How We Work (cta) | Cross-Tenant Mailbox, Teams & File Migration (related); M&A IT Integration & Separation (solution) |
| `/services/data-governance/` | Services (parent); Microsoft Purview & Permission Models (child); Data Quality Management (child); Contact (cta); How We Work (cta) |  |
| `/services/data-governance/microsoft-purview/` | Data Governance (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Security Roles & Access Audit (related); SharePoint Supplier & Partner Portals (related); SharePoint Search & Information Architecture (related); Microsoft 365 Copilot Readiness (related); AI Data Governance Audit (related); M&A IT Integration & Separation (related); Data Quality Management (related); Financial Services & Credit Unions (industry); Federal Government (industry); Healthcare (industry) |
| `/services/data-governance/data-quality-management/` | Data Governance (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Security Roles & Access Audit (related); Dynamics 365 Integration Services (related); Microsoft Purview & Permission Models (related); Medical Devices (industry) |
| `/services/application-modernization/` | Services (parent); Legacy Application Migration (child); DevOps & Release Automation (child); Contact (cta); How We Work (cta) |  |
| `/services/application-modernization/legacy-migration/` | Application Modernization & DevOps (parent); Contact (cta); Pricing (cta); How We Work (cta) | DevOps & Release Automation (related) |
| `/services/application-modernization/devops-release-automation/` | Application Modernization & DevOps (parent); Contact (cta); Pricing (cta); How We Work (cta) | Rapid CRM Deployment (related); Classic CRM Modernization (related); Legacy Application Migration (related) |
| `/solutions/sharepoint-intranet/` | Solutions (parent); Contact (cta); Pricing (cta); How We Work (cta) | SharePoint Intranet Development (twin); SharePoint Search & Information Architecture (related); Manufacturing (industry) |
| `/solutions/executive-dashboards/` | Solutions (parent); Contact (cta); Pricing (cta); How We Work (cta) | Power BI Consulting & Dashboards (twin); Dynamics 365 Integration Services (related); Manufacturing (industry) |
| `/solutions/crm-implementation/` | Solutions (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Sales (solution); Dynamics 365 Customer Service (solution); DevOps & Release Automation (related) |
| `/solutions/dynamics-365-migration/` | Solutions (parent); Contact (cta); Pricing (cta); How We Work (cta) | DevOps & Release Automation (related); Power Automate Workflow Automation (related); Dynamics 365 CRM Consultation (context) |
| `/solutions/contract-management-automation/` | Solutions (parent); Contact (cta); Pricing (cta); How We Work (cta) | Power Automate Workflow Automation (solution); SharePoint & Intranets (context); Construction & Engineering (industry); Medical Devices (industry) |
| `/solutions/m-and-a-it-integration/` | Solutions (parent); Contact (cta); Pricing (cta); How We Work (cta) | Cross-Tenant Mailbox, Teams & File Migration (solution); Tenant Coexistence & Domain Cutover (solution); M&A Tenant Migration (twin); Microsoft Purview & Permission Models (related) |
| `/solutions/crm-systems-integration/` | Solutions (parent); Contact (cta); Pricing (cta); How We Work (cta) | Dynamics 365 Integration Services (twin); Logistics & Supply Chain (industry); Retail (industry) |
| `/industries/manufacturing/` | Industries (parent); Contact (cta); How We Work (cta) | Dynamics 365 Sales (industry); Dynamics 365 Integration Services (industry); Executive Dashboards & Analytics (industry); Modern Company Intranet (industry) |
| `/industries/logistics-supply-chain/` | Industries (parent); Contact (cta); How We Work (cta) | Dynamics 365 Sales (industry); Power Automate Workflow Automation (industry); CRM & Systems Integration (industry) |
| `/industries/energy-utilities/` | Industries (parent); Contact (cta); How We Work (cta) | Dynamics 365 Customer Service (industry); File Share to SharePoint Migration (industry); Power BI Consulting & Dashboards (industry) |
| `/industries/construction-engineering/` | Industries (parent); Contact (cta); How We Work (cta) | Dynamics 365 Sales (industry); SharePoint Intranet Development (industry); Contract Management Automation (industry) |
| `/industries/financial-services/` | Industries (parent); Contact (cta); How We Work (cta) | SharePoint Intranet Development (industry); Microsoft Purview & Permission Models (industry); Power BI Consulting & Dashboards (industry) |
| `/industries/government/` | Industries (parent); Contact (cta); How We Work (cta) | Dynamics 365 Customer Service (industry); Microsoft Purview & Permission Models (industry); Dynamics 365 Security Roles & Access Audit (industry) |
| `/industries/medical-devices/` | Industries (parent); Contact (cta); How We Work (cta) | Contract Management Automation (industry); Dynamics 365 Sales (industry); Data Quality Management (industry) |
| `/industries/retail/` | Industries (parent); Contact (cta); How We Work (cta) | Dynamics 365 Customer Service (industry); Power BI Consulting & Dashboards (industry); CRM & Systems Integration (industry) |
| `/industries/healthcare/` | Industries (parent); Contact (cta); How We Work (cta) | Dynamics 365 Customer Service (industry); Microsoft Purview & Permission Models (industry); SharePoint Search & Information Architecture (industry) |

---

## Appendix D. Facts bank

Use these facts. Items marked **confirm** need client confirmation before they are published. Do not add facts that are not here or supplied by the client.

### D.1 The company
- Name: Modern Partners 365, brand MP-365. Website mp-365.com.
- A Microsoft Solutions Partner (**confirm** the exact designations).
- Working with Dynamics 365 since 2010. "15+ years in Dynamics 365" (**confirm**).
- Specializes in Dynamics 365 Sales and Customer Service, integrations with ERP, Power Platform, SharePoint automation and AI-powered analytics (Copilot).
- Works with mid-size and enterprise businesses in construction, manufacturing, healthcare, and more. Clients include federal and state government organizations.
- Positioning: a focused team of specialists, not a large consulting firm with layers of management and slow-moving processes. The client's time is the most valuable asset.
- Goal statement: the team spends time on the business, not on the system.

### D.2 What MP-365 does (capabilities)
- **Dynamics 365 Sales:** pipeline visibility, forecasting, lead management and customer tracking, working the way the sales team works.
- **ERP integrations:** connect the CRM to Business Central and other ERP systems so data flows automatically, with no double entry.
- **Power Automate:** automate repetitive steps such as approvals, notifications and data moves.
- **Power BI and analytics:** replace spreadsheet reports with live dashboards.
- **Copilot and Copilot Studio:** ask questions about customers and projects in plain English and get answers from live CRM data.
- **Power Pages and Power Apps:** customer portals, internal apps and self-service tools built on existing Microsoft data.
- Other problems solved: on-premises to cloud migration of Dynamics 365 (with zero data loss as the goal), tenant to tenant migration, CI/CD deployment automation, tightening security roles and permissions, replacing classic workflows with Power Automate, upgrading old forms to modern custom pages, replacing plugins with low-code automation, workflow builds and fixes, custom dashboards and Power BI.

### D.3 Offers and policies (confirm all)
- Discovery calls and scoping sessions under two hours are not billed.
- Urgent issues get a response in 4 to 8 hours (one version) or 0 to 4 hours for the Dedicated model (another version). **Use one version.**
- A starting offer: give MP-365 one problem, and it works on it for 8 hours at no charge. After 8 hours the client continues or walks away with no invoice.
- Engagement models. **Ad hoc:** call when needed, no commitment, no minimum, no retainer, pay only when engaged. **Standard:** the recommended option for small projects or pre-defined pains, works as an extension of the client's team, flat rate whatever the volume, no forced minimum commitments, no penalty for quiet months, scale up or down. **Dedicated:** for teams that need MP-365 consistently, like a Dynamics specialist embedded in the operation, priority access and availability (the hours per week differ between source versions: 40+ or 15+, **confirm**). Do not publish prices.

### D.4 Methods
- **Support mode:** understand, jump in, fix and confirm, brief you.
- **Project mode:** understand, quick MVP, validate and refine, deploy and hand off.
- **Lifecycle:** analyze, define, execute (build and release), support (continuous improvement), with MVP and roadmap, high-level architecture, backlog, deploy, test, SIT, go-live checklist, change management and training, end-to-end testing, warranty and support, and KPIs as typical activities.

### D.5 Client results (**permission required** before publishing names, logos or quotes)
- **Carlisle Construction** (construction): stabilized Dynamics and SharePoint operations within a week, with no long discovery phase. Testimonial from Jennifer Teeple (**confirm spelling and quote wording**).
- **Hunter Panels** (manufacturing): Dynamics CRM support that aligns the platform with the business, cuts manual work and improves performance.
- **OTIS Elevator** (elevator and facilities): platform and operations leadership for Dynamics. Faster, smoother deployments (13 hours down to 4), manual errors reduced to near zero. Testimonial from Brian Schetzel (**confirm spelling and quote wording**).
- **US Department of Transportation** (federal): managing and supporting Dynamics 365 CRM. (**confirm** the name wording.)
- **Connecticut Department of Public Health** (state government). (**confirm** wording and permission.)

### D.6 Problem and result stories (industry details removed, use as anonymized examples)
Each follows the pattern business problem, who is affected, business impact, solution, result.
- SharePoint upgrades from 2007, 2010, 2013 and 2016 to Microsoft 365, in stages (financial, manufacturing).
- Moving file shares with hundreds of thousands of files into organized SharePoint libraries with metadata, version control and workflows.
- A modern intranet with an information architecture, a simpler security model and faster content updates (manufacturing).
- A SharePoint financial advisory system that moved spreadsheets into SharePoint Online with version control, metadata and automated calculations.
- Sales tracking with one process and live dashboards for leadership. The pain was reports taking 3 to 6 business days a month to compile (**confirm** before using the figure).
- Lead tracking with one lead process and dashboards for marketing and sales leaders. The pain was 2 to 3 business days a month spent on reports (**confirm** before using).
- Case tracking that replaced email-based support with one system showing owner, status and urgency.
- Contract management with defined stages, owners, reminders and dashboards for legal and finance.
- CRM deployments with automatic deployment, a reliable QA cycle, release notes and a trackable backlog.
- CRM access control with an approval process, documented access levels and automatic access reports.
- Reliable integrations with ERP and marketing systems using logging and alerts, service accounts instead of personal accounts, and secure password storage.

### D.7 Contact (**confirm** all)
- Contact person: Mohammed Khaliefa (spelling varies in the source material), mohammed.khaliefa@mp-365.com.
- LinkedIn company page: two versions exist in the source material (`linkedin.com/company/modern-partners-365/` and `linkedin.com/company/mp-365`). Use the confirmed one.
- Microsoft partner directory page: `https://appsource.microsoft.com/en-US/marketplace/partner-dir/263f1063-d5d7-4d25-ac90-7b75e302003c/overview`.

### D.8 Verified external facts (usable with a source and year)
- SharePoint Server 2016 and 2019 support ended on July 14, 2026 (Microsoft).
- Copilot Cowork became generally available on June 16, 2026 (Microsoft).
- Dynamics 365 Marketing was renamed Customer Insights - Journeys (Microsoft).
- Power Apps portals are now called Power Pages (Microsoft).
- Microsoft licence prices are set by Microsoft and are separate from consulting fees.

---

## Appendix E. Why these rules (research basis)

- **Keyword and intent rules:** every primary keyword was checked against what actually ranks in search results. Where "consultant" wording returned job listings, where "dlp" and "power apps portals" returned documentation, and where "healthcare crm software" returned software lists, the primary keyword was changed to wording that matches service pages.
- **URL rules:** Google's URL guidance (readable words, hyphens, lowercase, stable URLs), Ahrefs' 2026 guidance on subfolders and avoiding repeated keywords, and 2026 AI citation studies that found descriptive, natural-language slugs get cited more.
- **Content and GEO rules:** the client's SEO guidelines (headings and body content, content formats, keyword insertion, metadata, internal linking, FAQs), plus Google's May 2026 guidance that AI search needs the same fundamentals as normal search, and Search Console data from the current site.
- **Structured data:** Google ended FAQ rich results on May 7, 2026, and an Ahrefs study found no meaningful AI citation gain from adding schema alone, so schema is limited to Organization, WebSite and BreadcrumbList.
- **Rendering:** AI crawlers generally do not run JavaScript, so content and links must be in the server-rendered HTML.


---

## Appendix F. Guide to the JSON file

`mp365_site_data.json` has two parts: `site` (global settings, schema rules, out-of-scope services, time-sensitive facts, feature flags) and `pages` (an array of 62 page objects). Each page object has:

| Field | Meaning |
|---|---|
| `id`, `name`, `internal_key` | Identifier, display label and internal reference name |
| `section`, `type`, `blueprint` | Site section, page type and the blueprint in Section 5 to follow |
| `path`, `url`, `parent_path`, `breadcrumbs` | URL path with trailing slash, absolute URL, parent page and the breadcrumb trail |
| `priority` | P1 is written first. "Proposed" or "Later" means the page awaits client approval |
| `search_intent` | The intent the content must match |
| `primary_keyword`, `primary_keyword_basis`, `primary_keyword_searches_per_month` | The page's primary keyword, where its evidence comes from, and its monthly volume where known |
| `secondary_keywords` | Two to five keywords, each with an evidence note |
| `question_keywords_starter` | Seed questions for H2 and H3 headings and the FAQ |
| `faq_plan` | The FAQ requirement for the page |
| `title_tag`, `meta_description`, `h1` | Final metadata and the suggested H1 |
| `naming_note` | Which product name to use consistently on the page |
| `keywords_reserved_for_blog_do_not_target` | Topics the blog already covers. Do not target them on this page |
| `internal_links` | `structural` (required) and `contextual` (use where relevant) links, each with the target path, role and `anchor_options` |
| `launch_flag` | `pricing` or `clients` for pages that stay hidden until approved |
| `notes` | Extra guidance for the page |

import type { Faq } from "./services";
import type { MarketingBlock } from "../../lib/marketing-blocks";

export type Solution = {
  slug: string;
  oldSlugs: string[];
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroQuestion: string;
  heroAnswer: string;
  intro: string[];
  /** Typed content blocks — same renderer as the marketing hubs and glossary. */
  blocks?: MarketingBlock[];
  faqs: Faq[];
  /** Bare Service slugs, most relevant first. */
  relatedServiceSlugs?: string[];
  /** Bare glossary term slugs. */
  relatedTermSlugs?: string[];
  /** Full marketing-hub paths, e.g. "/pricing/dynamics-365-licensing/". */
  relatedPageRefs?: string[];
  /** @deprecated superseded by `blocks`; kept so old rows still render. */
  sections?: { heading: string; body: string[] }[];
};

export const solutions: Solution[] = [
  {
    "slug": "sharepoint-intranet",
    "oldSlugs": [
      "/solutions/sharepoint/",
      "/solutions/intranet/"
    ],
    "name": "SharePoint & Intranet",
    "metaTitle": "SharePoint Intranet Design, Governance & Build",
    "metaDescription": "How a modern SharePoint intranet actually gets designed and built: hub architecture, navigation, permissions, sensitivity labels, search tuning, and ownership.",
    "heroQuestion": "What does a modern SharePoint intranet project actually involve?",
    "heroAnswer": "A SharePoint intranet project is an information architecture and governance engagement more than a design one. The work is deciding which sites exist, how they connect through hubs and global navigation, who owns each one, how permissions and labels are set, and how search is tuned. Page design is the last and smallest phase.",
    "intro": [
      "Most intranet requests arrive as a design brief. The current one looks dated, nobody can find anything, and someone in leadership wants a refresh before the next all-hands. Very little of that is a design problem. Content is unfindable because sites were created with no rule for when a new site is warranted, permissions were granted to individuals instead of groups, and nothing was ever retired. A new theme applied over that structure changes nothing about why content cannot be found, because the site inventory, the permission model, and the retirement rules are all untouched.",
      "MP365 runs SharePoint intranet work as an information architecture and governance engagement with a publishing layer on top. This page covers that engagement: the decisions you have to make, the order the work happens in, and where these projects actually break. If the wider question is how your organization uses Teams, channels, and shared files day to day, that is [collaboration enablement](/services/collaboration-enablement/) and it is a different conversation."
    ],
    "blocks": [
      {
        "type": "prose",
        "heading": "What the engagement covers",
        "paragraphs": [
          "The deliverable is a working intranet plus the rules that keep it working: a site inventory with named owners, a hub topology, navigation labels tested against how people actually describe their tasks, page and site templates for content authors, a governance model covering provisioning and retirement, a search configuration, and a content plan that says explicitly what does not come across.",
          "We build on native SharePoint. Communication sites, hub sites, a home site, and Viva Connections cover what an intranet home page needs for most mid-market organizations. Custom SharePoint Framework components are the only supported extensibility model for Viva Connections, and we write them only when a specific gap justifies owning code — an SPFx web part is a maintenance commitment, not a one-time build.",
          "Where the intranet needs to reach into business data — an approvals queue, a directory pulled from a system of record, an equipment request form — that usually belongs in [Power Platform](/services/power-platform/) surfaced through the intranet, rather than in bespoke SharePoint code."
        ]
      },
      {
        "type": "table",
        "heading": "Structural decisions and what each one commits you to",
        "headers": [
          "Decision",
          "What it gives you",
          "What it costs later"
        ],
        "rows": [
          [
            "One hub or several",
            "A single enterprise hub gives every site the same top navigation and one consistent look with the least configuration.",
            "You give up scoped search and contextual news roll-up. With one hub it becomes hard to surface only HR news on HR sites, which is one of the main reasons hubs exist."
          ],
          [
            "Setting a home site",
            "A defined landing destination for the tenant, and it is required to enable and customize global navigation in the SharePoint app bar.",
            "A tenant can have multiple home sites only where they are tied to multiple Viva Connections experiences, which carries the tenant-wide licensing consequence described below; on a standard Microsoft 365 subscription you get one. Global navigation changes can take up to 24 hours to reach users, the app bar cannot be turned off for individual sites, and it does not display for guests outside your organization."
          ],
          [
            "Associating a site to a hub versus just linking to it",
            "Association gives shared theme, shared navigation, content roll-up, and a shared search scope across the family.",
            "A site can be associated with only one hub. Association does not change permissions — roll-ups are security trimmed, so content on a private site stays invisible to everyone who lacks access to it."
          ],
          [
            "How wide a hub gets",
            "Hubs can be associated to other hubs, and content can be searched and displayed across up to three levels of association.",
            "If you want every associated site in the hub navigation, Microsoft's guidance is no more than 100 links for usability and performance, and the Sites web part filters \"all sites in the hub\" up to 99 sites."
          ],
          [
            "Flat site collections versus subsites",
            "Each unit of work becomes its own site collection with its own permissions and its own policy scope, so reorganizations move links rather than URLs.",
            "Subsites remain supported but keep the old problems: the URL encodes the org chart, and policy features such as retention apply across the entire site collection whether or not you want them to."
          ],
          [
            "Out-of-the-box pages versus custom SPFx",
            "Native web parts, page templates, and audience targeting driven by Microsoft Entra ID groups cover most home page requirements without code.",
            "Custom components are code you own: a named maintainer, a test tenant, and re-testing as SharePoint changes. When the component's author leaves and nobody owns the code, the intranet cannot take a SharePoint change without a rebuild, so updates stop."
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "How the work sequences",
        "steps": [
          {
            "name": "Inventory and content audit",
            "description": "Every site, its owner, its last real activity, its permission model, and its storage. This is where the uncomfortable findings surface: sites with no owner, sites shared with everyone except external users, and duplicated policy documents with no authoritative version. Where the tenant has Microsoft 365 E5, a Microsoft Copilot license, or the SharePoint Advanced Management Plan 1 add-on, data access governance reports do a large part of this work for you — but E5 on its own returns only the activity reports for sharing links and everyone-except-external-users sharing, not the snapshot permission reports and not the remediation actions, which changes what this step can produce."
          },
          {
            "name": "Audience and task definition",
            "description": "Who uses the intranet and what they came to do. Frontline staff on a phone and a finance analyst on a laptop are different products sharing one platform. This step produces the short list of tasks the home page is accountable for, and everything else is explicitly demoted."
          },
          {
            "name": "Information architecture design",
            "description": "Hub topology, navigation labels, and the metadata that content will be tagged with. Labels get tested against real employees rather than approved in a steering meeting — the failure mode is navigation that mirrors the org chart and makes sense only to the people who drew it."
          },
          {
            "name": "Governance model",
            "description": "Who can create a site, what it gets named, who owns it, how often ownership is confirmed, and what happens when a site goes quiet. This is also where the classification taxonomy is agreed, in coordination with [data governance](/services/data-governance/) rather than invented separately for the intranet."
          },
          {
            "name": "Build and configure",
            "description": "Home site, hubs, site and page templates, provisioning process, and search. Search configuration is real work and frequently skipped: bookmarks that map the words employees use to the destinations they want, acronym answers for internal shorthand, and site-level or organization-level search verticals for content that deserves its own results tab."
          },
          {
            "name": "Content migration and rewrite",
            "description": "Most existing content should not move. Pages get rewritten by the department that owns them, against a template, with a review date attached. Bulk-moving a legacy intranet is the fastest way to reproduce the findability problem you paid to fix."
          },
          {
            "name": "Launch, measure, and hand over",
            "description": "Editor training, site analytics reviewed on a schedule, and a named owner for the intranet as a product. Launch is the start of the operating model, not the end of the project."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Governance, labeling, and the oversharing problem",
        "paragraphs": [
          "An intranet makes existing permission problems visible, and Copilot and agent experiences make them consequential. Content that was technically readable by the whole organization but practically buried is now one question away from being surfaced. Any serious intranet program has to deal with this rather than treat it as a separate security project.",
          "A [sensitivity label](/resources/glossary/sensitivity-label/) applied to a site controls container-level settings: privacy, whether owners can add guests, external sharing from the site, access from unmanaged devices, and Conditional Access authentication context. Default sharing link type and whether members can share are configured through PowerShell on the label. The point people most often get wrong is that items inside a labeled container do not inherit the label — file-level labeling in SharePoint and OneDrive is enabled separately, and a container label alone applies no encryption or content marking to documents.",
          "A [retention policy](/resources/glossary/retention-policy/) changes what cleanup means. Once a site, list, or library is subject to retention, users get an error when they try to delete it, and edited or deleted files are copied to a hidden Preservation Hold library rather than disappearing. Deletion then runs on a timer job with a minimum holding period, so \"we will just delete the old intranet after launch\" is not a plan you can make unilaterally. Broader classification, [Microsoft Purview](/resources/glossary/microsoft-purview/) configuration, and [DLP](/resources/glossary/data-loss-prevention-dlp/) sit in our data governance practice and should be scoped alongside the build, not after it.",
          "There is a discovery filter available, but check whether you can actually buy it before you plan around it. **Restricted Content Discovery** keeps selected sites out of organization-wide search results and Copilot responses, and it is open to organizations licensed for Microsoft Copilot that have SharePoint Advanced Management available to them. Microsoft describes it as a temporary governance control that gives organizations time to review and right-size access, and it changes no permissions — anyone who already has access to the content keeps it. The older Restricted SharePoint Search is retiring and new enablement has been blocked since July 31, 2026, so it is not a route open to a tenant that has not already turned it on. Whichever control you use, treat it as a countdown clock over an unfixed permission model rather than as the fix."
        ]
      },
      {
        "type": "list",
        "heading": "Where intranet projects actually fail",
        "items": [
          "**No named owner per site.** Ownership assigned to a department rather than a person means nobody reviews content, nobody approves access requests, and the site quietly rots while still ranking in search.",
          "**Migrating everything.** The old intranet's content volume is the problem, not the asset. Moving it wholesale reproduces the findability problem in the new one on day one.",
          "**Navigation drawn from the org chart.** Employees search for tasks, not departments. If the top-level labels are your business unit names, the search box becomes the real navigation and nobody maintains it.",
          "**Permissions granted to individuals.** Direct grants and broad sharing patterns are invisible until someone runs a permissions report or Copilot surfaces a document to the wrong audience. Group-based access is slower to set up and the only thing that survives staff turnover.",
          "**Search left at defaults.** No bookmarks, no acronym answers, no verticals, no managed metadata. The platform will index everything and rank it generically; the tuning is yours to do.",
          "**Custom code with no maintainer.** SPFx components written by a departed contractor become the reason nothing can be changed.",
          "**Treating launch as the finish line.** Without a content review cadence and a product owner, the intranet regresses to the state that triggered the project."
        ]
      },
      {
        "type": "list",
        "heading": "What you hold at handover",
        "items": [
          "A site inventory with named owners, classification, and a review cadence.",
          "The hub topology and navigation model, documented with the reasoning behind each grouping so the next reorganization does not require guessing.",
          "Site and page templates, plus a provisioning process that says who can create what and under which naming rules.",
          "The governance decisions: sharing settings, container label assignments, retention scopes, and who signs off on changes to any of them.",
          "Search configuration — bookmarks, acronyms, verticals, and metadata — as a maintained list rather than a one-time setup.",
          "Editor enablement material and an escalation path, so content changes do not queue behind IT. If your team wants ongoing help rather than a clean handover, the compliance half of that work sits with [data governance](/services/data-governance/) and the adoption half with [collaboration enablement](/services/collaboration-enablement/)."
        ]
      },
      {
        "type": "prose",
        "heading": "When you should not do this yet",
        "paragraphs": [
          "If you are heading into a tenant consolidation, do not design an intranet on a tenant you are about to leave. Sites, permissions, hub associations, and labels all have to be re-established on the other side, and doing the build first means doing it twice. Sequence it after the move — see [Microsoft 365 migration](/services/microsoft-365-migration/) for how that lands, and [M&A tenant migration](/services/ma-tenant-migration/) if the driver is a deal.",
          "If the actual complaint is that Teams has sprawled, that files live in five places, and that people cannot tell a channel from a chat, an intranet will not fix it. That is a collaboration operating-model problem and belongs with [collaboration enablement](/services/collaboration-enablement/) first.",
          "If your organization has a handful of departments, a small content set, and no compliance obligations pressing on it, you do not need a multi-month program. A home site, two or three hubs, a template, and a short governance document is the right answer, and we will tell you that rather than sell around it. The engagement scales up when the site count is large, when content has to be rewritten department by department, when there is a classification or records requirement, or when the existing estate needs remediation before anything new is built. If you want a read on which of those applies to you, [start with a conversation](/contact/)."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How long does a SharePoint intranet build really take?",
        "a": "The configuration is not what stretches the calendar. Standing up a home site, hubs, templates, and search settings is a short piece of work. What takes time is the content audit, agreeing the navigation labels with people who disagree about them, and getting each department to rewrite its own pages against a template. Content ownership is the schedule. If departments are not named and given review dates at kickoff, the build finishes and the pages do not, and the launch date moves for reasons no vendor controls. Ask any vendor giving you a fixed timeline what happens to it when the content owners miss two review cycles."
      },
      {
        "q": "What actually drives the cost of an intranet project?",
        "a": "Four things. First, the number of sites in scope and how much remediation the existing estate needs before anything can be built. Second, the volume of content that has to be rewritten rather than moved. Third, custom development — every SPFx component is a build cost plus an ongoing maintenance cost. Fourth, whether the project also has to solve a governance backlog: unowned sites, direct permission grants, and broad sharing that has to be unwound before Copilot or search can be trusted. Multilingual publishing and migration from classic SharePoint or a third-party platform each add real scope."
      },
      {
        "q": "Do we need a third-party intranet product on top of SharePoint?",
        "a": "Usually not, and you should be skeptical of anyone whose first answer is yes. Native SharePoint plus Viva Connections covers the standard requirement set: news, hubs, global navigation, audience targeting, mobile access, and search. Third-party products earn their license fee in specific cases — heavy multilingual publishing workflows, an editorial approval chain more complex than SharePoint's page approval, or a frontline population needing features Microsoft has not built. The trade-off is a second platform to license, patch, and govern, and a dependency that outlives the people who chose it. Decide it on named requirements, not on a demo."
      },
      {
        "q": "Do we need Viva Connections, and how many experiences should we plan for?",
        "a": "Viva Connections gives you a dashboard, a news reader, and a curated resources list reachable from Teams, the web, and mobile. The decision that changes scope is how many experiences you need, not whether you want the feature. A standard Microsoft 365 subscription limits you to creating and using one. If the design assumes separate experiences for distinct populations — frontline staff and corporate staff, say — the second one requires every user in the tenant to carry a Microsoft Viva Suite or Viva Communications and Communities license. That is a tenant-wide budget consequence triggered by a design choice, so settle it before the information architecture is drawn around multiple audiences rather than after."
      },
      {
        "q": "Should we rebuild the intranet before or after a tenant migration?",
        "a": "Build after, analyze before. The information architecture work — deciding which sites should exist, who owns each one, and what does not deserve to come across — is worth doing ahead of the move, because it gives you a defensible basis for leaving content behind instead of carrying the whole estate into a tenant you are about to pay to organize. Everything that has to be stood up in the destination should be stood up once, in the destination. Intranet build work done on a tenant you are leaving is repeated work, and the second pass is rarely cheaper than the first."
      },
      {
        "q": "Who should own the intranet after launch, and what does that job involve?",
        "a": "One named person with time allocated to it, not a committee and not a rotating duty. Week to week the work is small and constant: confirming that pages past their review date actually get reviewed, watching site analytics for pages nobody opens and searches that return nothing useful, adding bookmarks and acronym answers as new internal terms appear, and approving or refusing new site requests against the provisioning rules. The part that needs authority rather than time is arbitrating navigation. When a department wants its own top-level label, someone has to be able to say no and have it hold. If nobody in the organization can do that, name the escalation path at launch rather than discovering the gap when the first dispute lands."
      },
      {
        "q": "Can our internal team do this without a partner?",
        "a": "Often, yes. If you have a SharePoint administrator with information architecture experience, a communications lead who can push departments to write content, and executive backing to enforce provisioning rules, you have the team. Partners earn their fee where one of those is missing, where the existing estate needs permission remediation at a scale internal staff cannot absorb alongside their day jobs, or where an external voice is needed to settle navigation disputes between departments. If you have all three and a small estate, hire the design help and keep the rest in-house."
      },
      {
        "q": "How do we stop the intranet from surfacing content to the wrong people once Copilot is in play?",
        "a": "Fix the permissions rather than filtering the symptom. The durable controls are group-based access, container-level sensitivity labels on sites, and removing broad grants such as sharing with everyone except external users from sites that hold sensitive material. What you can see while doing that depends on licensing, so check it before scoping the audit. A Microsoft 365 E5 tenant can run the data access governance activity reports covering sharing links and everyone-except-external-users sharing, but the snapshot permission reports, site access reviews, and the remediation actions come with a Microsoft Copilot license or the SharePoint Advanced Management Plan 1 add-on. Restricted Content Discovery, which requires Copilot licensing with SharePoint Advanced Management available, can hold selected sites out of organization-wide search and Copilot responses while the cleanup runs."
      }
    ],
    "relatedServiceSlugs": [
      "collaboration-enablement",
      "data-governance",
      "microsoft-365-migration",
      "power-platform",
      "application-modernization"
    ],
    "relatedTermSlugs": [
      "sensitivity-label",
      "retention-policy",
      "microsoft-purview",
      "data-loss-prevention-dlp",
      "ediscovery-hold"
    ],
    "relatedPageRefs": [
      "/assessments/tenant-migration/"
    ]
  },
  {
    "slug": "data-analytics",
    "oldSlugs": [],
    "name": "Data Analytics",
    "metaTitle": "Power BI Data Analytics for Dynamics 365 and Dataverse",
    "metaDescription": "Power BI on Dynamics 365, Dataverse, SharePoint and SQL data: connection paths, semantic model design, row-level security, refresh limits, and viewer licensing.",
    "heroQuestion": "What does a Power BI data analytics engagement on Dynamics 365 data actually involve?",
    "heroAnswer": "A Power BI engagement on Dynamics 365 data is four decisions, not a dashboard: how data leaves the source, how it is shaped into a model, how row-level security is enforced once source security stops applying, and who pays to view the result. MP365 designs those four, builds the semantic model, and hands your team something they can change without calling us.",
    "intro": [
      "Most requests that reach us as \"we need Power BI\" are one of three things underneath: a number nobody trusts, a report that already exists but costs someone three days a month to assemble, or a question the operational system cannot answer because the answer lives in two systems. The build is rarely the hard part. The decisions in front of the build are.",
      "This page describes data analytics as an engagement — what MP365 designs, the order the work happens in, and the choices that determine whether the result survives contact with real users. It assumes your data sits in [Dataverse](/resources/glossary/dataverse/), Dynamics 365, SharePoint, or SQL. For the platform underneath it — environments, apps, automation, governance — see [Power Platform](/services/power-platform/)."
    ],
    "blocks": [
      {
        "type": "prose",
        "heading": "What MP365 designs and builds",
        "paragraphs": [
          "The deliverable is a semantic model, not a set of screens. A model is the thing that has a single definition of \"revenue,\" a date table every visual agrees on, relationships that resolve without ambiguity, and measures written once in DAX instead of re-derived in every report. Reports are cheap once the model is right and expensive forever once it is wrong, which is why we spend the early weeks on definitions and the later weeks on visuals rather than the reverse.",
          "Around that model, the engagement covers four things: the connection path for each source and the trade-off it imposes; the security design, including how record access in Dynamics 365 is reproduced for report viewers; the refresh strategy and what it costs in capacity; and distribution — which workspace, which app audience, who can edit versus who can only view.",
          "We also write down what we deliberately did not build. Dynamics 365 and Business Central already ship operational views, in-app charts, and financial reporting that are cheaper to run than a Power BI copy of the same thing. If a question is answered inside the application, our recommendation is to leave it there. Analytics earns its keep on questions that cross systems, cross time, or cross entities."
        ]
      },
      {
        "type": "table",
        "heading": "How your data gets to Power BI, and what each path costs",
        "headers": [
          "Path",
          "Use it when",
          "What it costs you"
        ],
        "rows": [
          [
            "Dataverse connector, Import mode",
            "Hourly or daily numbers are good enough and the model fits comfortably in memory",
            "Dataverse security roles stop applying entirely — when you import, source security roles are not used, and you must rebuild the access rules as Power BI row-level security. Everything between refreshes is stale by definition. Note that the Dataverse connector requires the TDS endpoint to be enabled on the environment in either mode, so importing does not avoid that dependency."
          ],
          [
            "Dataverse connector, DirectQuery mode",
            "Users need current records, or the Dataverse security model must be enforced more strictly",
            "Every visual becomes a live query, and Microsoft's own guidance is that a DirectQuery report will not be as fast as an import model. Every query against the TDS endpoint has to finish inside a fixed five-minute window, and that window drops to two minutes for expensive patterns — SELECT *, nested FROMs, JOINs — which is exactly what a wide report page generates if nobody is watching. Pulling the display names of choice columns forces a join to the internal label table, which Microsoft flags as a significant query-performance cost."
          ],
          [
            "Link to Microsoft Fabric",
            "You want Dynamics 365 and Power Apps data in OneLake without building pipelines",
            "Requires a Fabric workspace and capacity. Dataverse creates an optimized delta parquet replica that stays governed by Dataverse and in the same region, but linked tables consume additional Dataverse database storage. Today an environment links to a single Fabric workspace."
          ],
          [
            "Azure Synapse Link for Dataverse",
            "The data must land in your own storage account and be joined to non-Microsoft sources",
            "You provision, secure, monitor, and pay for the storage and compute, and you own the pipelines forever after."
          ],
          [
            "Business Central APIs and the published Power BI apps",
            "Finance, sales, inventory, purchasing, projects or manufacturing reporting on [Business Central](/dynamics-365/business-central/)",
            "Microsoft publishes these apps, but Power BI Pro licenses are required for whoever installs them, whoever refreshes them, and everyone who opens them — or a Power BI or Fabric Premium capacity instead. Report viewers also need a paid Business Central license: Essentials, Premium, or Team Member. The apps also work per company, so several companies means installing and configuring a copy of the app per company, each in its own workspace."
          ],
          [
            "SQL Server on-premises or on IaaS, via the on-premises data gateway",
            "Legacy line-of-business data has to sit alongside Dynamics data",
            "A gateway machine someone must patch, credential, and monitor. When it stops, refresh stops, and it usually stops quietly."
          ],
          [
            "SharePoint lists",
            "Small reference data — territory maps, targets, exception approvals",
            "Fine at list scale. Anything transactional belongs in a database; a list used as a fact table will hit throttling and become the slowest step in every refresh."
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "The security decision most projects get wrong",
        "paragraphs": [
          "Dynamics 365 record access does not follow your data into a Power BI report. Microsoft is explicit: if you import data, the security roles in the source are not used, and you define row-level security in Power BI to enforce the rules instead. If you use DirectQuery, the source security roles do apply, because Power BI passes the query down. That single fork decides whether a sales manager sees their team's pipeline or the whole company's, and it is usually made for performance reasons by someone who is not thinking about security at all.",
          "Row-level security in Power BI also has a boundary people discover late. RLS filters apply to users in the workspace Viewer role. It does not apply to workspace Admin, Member, or Contributor — those roles have edit permission on the semantic model, so the filters are bypassed. Viewers keep their filters even with Build permission, including through Analyze in Excel. In practice this means the access list, not the DAX, is what enforces your security, and a well-meant \"just make them a Member so they can pin things\" quietly removes it. The access list has a constraint of its own that catches people out: Microsoft 365 groups cannot be added to any RLS role. Only Microsoft Entra security groups, distribution groups, and mail-enabled groups are supported for role membership, so if your organization's group strategy runs on Microsoft 365 groups, someone has to build the parallel set before security design can start.",
          "Two more limits are worth knowing before you design around them. RLS secures rows, not columns — if a user can see a row they can see every column on it, and restricting columns requires object-level security instead. And roles are additive: a user in both the Sales and Marketing roles sees both. For dynamic security we build a user mapping table keyed on the value USERPRINCIPALNAME() actually returns, which for external guest users can resolve differently than you expect and must be tested with a real guest account, not with Test as role. Where labeling and DLP need to travel with the data too, that is [data governance](/services/data-governance/) work, not report work."
        ]
      },
      {
        "type": "steps",
        "heading": "How the engagement runs",
        "steps": [
          {
            "name": "Question inventory",
            "description": "We start from the decisions the reports are supposed to support and the people who make them, not a list of fields. Every question gets an owner and a definition. Questions that turn out to be answered by an existing in-app view get struck out here, which is the cheapest place to strike them out."
          },
          {
            "name": "Source and path decision",
            "description": "Per source and sometimes per table, we choose the connection path from the table above and write down what it costs. This is also where we confirm which [Power Platform environment](/resources/glossary/power-platform-environment/) the reporting reads from, confirm the TDS endpoint has not been switched off — it is on by default, so if it is off an admin turned it off, or user-level TDS access control is in play — and decide whether a Fabric link is warranted at all. If nobody can tell us what environments exist or who holds maker rights, we start with a [Power Platform health check](/assessments/power-platform-health-check/) first."
          },
          {
            "name": "Model design",
            "description": "Star schema, one conformed date table, explicit measures. Ambiguous relationships get resolved rather than worked around. RLS filters travel in a single direction by default, whether or not the relationship itself is bidirectional, and it is turning on bi-directional security filtering to make them propagate that Microsoft cautions can degrade query performance in models with many relationships or large datasets."
          },
          {
            "name": "Security design and validation",
            "description": "We map the access rules that matter — business unit, team, territory, legal entity — into roles, then validate them. Test as role catches structural mistakes; it uses your own identity, so dynamic rules and any external guest access are validated by signing in as an actual user. Workspace roles are set at the same time, because the role assignment is half the control."
          },
          {
            "name": "Refresh and capacity plan",
            "description": "Scheduled refresh allows up to eight daily slots on shared capacity and 48 on Premium, Premium Per User, or a Fabric F capacity. Refreshes must complete within two hours on shared capacity and five hours on a Premium or Fabric capacity. We size the model against those ceilings up front, and configure incremental refresh — supported on Pro as well as Premium — where a fact table would otherwise be reloaded in full every night."
          },
          {
            "name": "Rollout and handover",
            "description": "Distribution through an app with defined audiences rather than ad hoc sharing, a named owner for the semantic model, documented measure definitions, and a working session with whoever inherits it. If your team cannot change a measure without us, we have not finished."
          }
        ]
      },
      {
        "type": "list",
        "heading": "Running costs people discover after go-live",
        "items": [
          "**Viewer licensing.** On Fabric F SKUs smaller than F64, every person who opens a Power BI report needs a Pro, PPU, or trial license. On F64 or larger — or a P capacity — users with a free license and the Viewer workspace role can view content. That threshold, not the report count, is what drives the shape of the bill. Microsoft is also consolidating purchasing toward F SKUs and retiring the Power BI Premium per-capacity SKUs, so multi-year assumptions built on P pricing need rechecking. Power BI viewing is licensed separately from your Dynamics 365 seats; see [Dynamics 365 licensing](/pricing/dynamics-365-licensing/) for what those seats do and do not cover.",
          "**Dataverse storage.** Linking Dataverse tables to Fabric increases Dataverse database storage consumption, visible in the Power Platform admin center. It is not free just because you did not provision a storage account.",
          "**Gateway ownership.** An on-premises gateway is a server with an owner, a patch cycle, and stored credentials. Budget the person, not just the install.",
          "**Premium connectors.** If analytics grows a write-back — an app that captures forecast overrides, a flow that routes exceptions — check which connector it needs before you budget. Microsoft classifies the Dynamics 365, Business Central, Finance and Operations, SQL Server, Azure SQL and Azure Synapse Analytics connectors as [premium connectors](/resources/glossary/premium-connector/), and anything reached through an on-premises gateway is premium as well; all of those require a standalone Power Apps or Power Automate plan. A write-back to a SharePoint list does not — the Microsoft 365 connectors stay standard. If the write-back is substantial, read [Power Apps versus custom development](/compare/power-apps-vs-custom-development/) before committing.",
          "**Capacity headroom.** Refresh is memory-intensive; a full refresh can use roughly double the model's own memory because the service holds a snapshot until it completes. Capacity sized to steady-state query load will struggle at 6am."
        ]
      },
      {
        "type": "list",
        "heading": "Where these projects actually fail",
        "items": [
          "**Definitions were never agreed.** Two departments both call it margin. The report is correct and nobody believes it. Nothing in the model can fix this, and no amount of report work will make the number believable — the disagreement is upstream of the tooling.",
          "**Import was chosen for speed, and security was noticed later.** By the time anyone asks why a regional manager can see national numbers, the model is in production and the fix is a rebuild of the access layer.",
          "**Workspace access was handed out as Member.** Row-level security was designed, tested, and then bypassed for everyone who needed to pin a tile.",
          "**The model has no owner.** It was built by a contractor, or by the one analyst who has since changed roles. Nobody will touch it, so it drifts, so nobody trusts it, so it dies.",
          "**Refresh outgrew its window.** A model that loaded fine at launch now takes longer than the two-hour shared-capacity limit and fails silently overnight. Nobody notices until a Monday meeting.",
          "**DirectQuery was pointed at production and never load-tested.** Every visual is a query, and Microsoft's guidance is that one visual can send more than one — so a page with twelve visuals is at least twelve queries per user interaction, against the same environment your salespeople are typing into.",
          "**Fabric was bought before the question was clear.** Capacity is easy to procure and hard to justify in a year if the only workload on it is four reports that would have run on a Pro workspace."
        ]
      },
      {
        "type": "prose",
        "heading": "When you should not do this",
        "paragraphs": [
          "If you need one number, you do not need a data model. Business Central financial reporting, Dynamics 365 in-app views and charts, and an Excel connection each answer real questions at a fraction of the cost and with no ongoing owner. We would rather tell you that than sell a semantic model you will maintain for five years.",
          "If the underlying data is wrong, reporting will make it wrong faster and to more people. Duplicate accounts, opportunities closed by nobody, inconsistent item categories — a report renders those with total confidence. That is a source system and governance problem, and it is usually better addressed alongside a [CRM](/solutions/crm-deployment/) or [financial management](/solutions/financial-management/) engagement than in Power BI.",
          "And you almost certainly do not need Microsoft Fabric to start. Fabric earns its place when you want lakehouse, notebook, or pipeline workloads next to your Power BI content, when several systems have to be combined outside Dataverse, or when the F64 viewer economics beat per-user licensing at your headcount. None of those are reasons to buy capacity in month one. If you are not sure which side of that line you are on, [talk to us](/contact/) before the procurement conversation, not after."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How long does a Power BI engagement like this take?",
        "a": "It depends far more on your organization than on ours. The modeling is usually the shortest phase. What extends a timeline is agreeing measure definitions across departments, cleaning source data that turns out to be inconsistent, and validating security when access rules vary by person rather than by role. Projects with one source, agreed definitions, and role-based access move quickly; projects with four sources and per-user rules do not."
      },
      {
        "q": "What actually drives the cost up?",
        "a": "The number of distinct sources, because each one is a separate connection decision, credential, and refresh dependency. Then security complexity — role-based rules are straightforward, per-user dynamic security with a mapping table and external guests is not. Then data quality, because reconciliation work is invisible in a scope document and very visible in a schedule. DirectQuery performance tuning is the fourth."
      },
      {
        "q": "What does buying Fabric capacity early actually commit us to?",
        "a": "More than the invoice. A capacity is something you have to size and then monitor, and it costs the same whether four people query it or four hundred. You also have to decide which workspaces sit on it, because that assignment is what determines who gets free-viewer economics and who does not. And today a Dataverse environment links to a single Fabric workspace, so the link is a decision about where that data lands rather than an option you can hold open — Microsoft has said support for multiple Fabric links from one environment is planned, which is an argument for waiting rather than buying now. None of that is a reason to avoid Fabric. It is a reason not to procure it before you know the workload."
      },
      {
        "q": "Why do two people see different numbers in the same report?",
        "a": "Three usual causes. Row-level security is applied, and one of them holds a workspace Admin, Member, or Contributor role, which bypasses it. Or roles are additive and someone has been added to two. Or the filters differ — a date slicer left on a different setting will produce two defensible, different, and equally correct answers. We test all three before handover."
      },
      {
        "q": "Our data is in Business Central. When do the published Power BI apps stop being enough?",
        "a": "Often they are enough at first — Microsoft publishes apps covering finance, sales, purchasing, inventory, projects, manufacturing and more, and installing one is faster than any model we could build. They run out at four fairly predictable points. When you need consolidated reporting across companies, because the apps work per company and combining them means custom modeling over the Business Central API. When Business Central data has to be joined to something that is not Business Central. When your definition of a measure differs from Microsoft's, because editing theirs is harder than owning yours. And when you have customized the reports: updating a template app can overwrite earlier changes, which is why Microsoft's own guidance is to keep custom versions in a separate workspace. Any one of those is the point where a model earns its keep."
      },
      {
        "q": "How do we count the licensing audience before we commit?",
        "a": "Split the audience into people who genuinely need to edit and people who only need to look, and be honest about the first number — it is usually much smaller than the request implies. Everyone in the second group can sit in the Viewer role, which is also the only role row-level security applies to. The trap is the middle: giving someone Member or Contributor so they can pin a tile or tweak a page costs a Pro license and removes their RLS filters at the same time. Do that count before you choose between per-user licenses and a capacity, because the split between editors and viewers is what decides which is cheaper."
      },
      {
        "q": "What happens when we want to change something after you leave?",
        "a": "That depends on what was handed over, and this is where a lot of consulting engagements quietly fail. We hand over documented measure definitions, a named semantic model owner, workspace role assignments, and a working session with the people inheriting it. Be honest with yourself about whether that person exists. If nobody in your organization will own the model, budget for ongoing support rather than pretending otherwise."
      },
      {
        "q": "Can we start small and expand later?",
        "a": "Yes, and it is usually the right sequence — one subject area, one audience, real users, then extend. The one thing not to defer is the model's foundation: the date table, the grain of your fact tables, and the security approach. Those are cheap to get right at the start and expensive to retrofit once reports, apps, and Excel connections depend on them."
      }
    ],
    "relatedServiceSlugs": [
      "power-platform",
      "dynamics-365",
      "data-governance",
      "application-modernization"
    ],
    "relatedTermSlugs": [
      "dataverse",
      "power-platform-environment",
      "premium-connector",
      "sensitivity-label",
      "microsoft-purview"
    ],
    "relatedPageRefs": [
      "/assessments/power-platform-health-check/",
      "/pricing/dynamics-365-licensing/",
      "/compare/power-apps-vs-custom-development/",
      "/dynamics-365/business-central/"
    ]
  },
  {
    "slug": "crm-deployment",
    "oldSlugs": [
      "/solutions/automated-crm/"
    ],
    "name": "Automated CRM Deployment",
    "metaTitle": "Automated CRM Deployment: Dynamics 365 in Weeks",
    "metaDescription": "How a templated Dynamics 365 Sales or Customer Service deployment works: the decisions you make first, the sequence of work, and where these projects fail.",
    "heroQuestion": "Can Dynamics 365 CRM be deployed in weeks instead of months?",
    "heroAnswer": "Yes, when the scope matches a templated build. Automated CRM deployment is a Dynamics 365 Sales or Customer Service go-live assembled from a pre-configured solution and released through a scripted deployment path rather than hand-built in production. Configuration, forms, security roles, and dashboards ship as a managed solution; your work is decisions, data preparation, and testing. It suits organizations with a standard pipeline and reasonably clean data.",
    "intro": [
      "Most CRM projects do not run long because the software is hard to configure. They run long because the configuration is invented from scratch in a series of workshops, typed directly into a production environment, and then argued about. An automated deployment removes that pattern: the starting configuration already exists as a tested, versioned package, and the path from build to production is scripted rather than manual.",
      "MP365 builds and releases Dynamics 365 CRM this way for mid-market organizations that want a working system this quarter and a roadmap after it. This page describes the engagement — what gets templated, what does not, the decisions you have to make before anyone touches a keyboard, and the specific ways these projects go wrong. For the broader practice, including the work that follows a first go-live, see our [Dynamics 365 services](/services/dynamics-365/)."
    ],
    "blocks": [
      {
        "type": "prose",
        "heading": "What is actually automated",
        "paragraphs": [
          "The automated part is the release mechanism and the starting configuration, not the thinking. A packaged deployment begins from a solution: a versioned container holding tables, forms, views, business rules, security roles, global choices, and dashboards. That solution is imported into your [Dataverse](/resources/glossary/dataverse/) environment as a managed artifact, rather than being typed into your live system by a consultant with an administrator login. Microsoft's own application lifecycle guidance is explicit that non-development environments should receive managed solutions, and that those solutions should be treated as build artifacts.",
          "Movement between environments runs through a deployment pipeline. Pipelines in Power Platform carry a solution from a development environment through test and into production, along with the target-environment configuration it depends on — connections, connection references, and environment variables — and they pre-validate the import so missing dependencies surface before the deployment rather than during it. What a pipeline does not carry is data. Nothing stored in Dataverse tables travels inside a solution, which is why migration is a separate track of work with its own tooling and its own rehearsal.",
          "Two practical constraints follow from this and both belong in your budget conversation. Pipelines cannot deploy to a different tenant, so a CRM build cannot be handed between two organizations' tenants this way — Microsoft's own answer there is Azure DevOps or GitHub, and in practice it is migration work rather than deployment work. And environments used as pipeline targets must be enabled as Managed Environments, which carries a premium licensing requirement; Microsoft has begun enabling this automatically on pipeline targets that are not already enabled. Neither is an obstacle. Both are the kind of thing that turns a fixed date into a slipped one when it is discovered in week three."
        ]
      },
      {
        "type": "list",
        "heading": "Decisions you make before the build starts",
        "items": [
          "**Which app, and how many.** [Dynamics 365 Sales](/dynamics-365/sales/) and [Dynamics 365 Customer Service](/dynamics-365/customer-service/) sit on the same Dataverse tables for accounts and contacts, so adding the second later is a configuration conversation rather than a re-platform. Launching both at once means two role sets, two test scripts, and two training audiences inside the same window. Sequence them unless you have a reason not to.",
          "**License tier.** Feature availability differs materially between Sales Professional, Sales Enterprise, and Sales Premium, and some Dataverse tables are restricted: creating, updating, or deleting rows in them requires a license for the corresponding Dynamics 365 app, while an app or flow that only reads from them does not. That read-only carve-out is worth knowing before you buy seats for people who only need to look. Confirm the tier against the capabilities you signed off, not against the demo you watched. [Licensing detail lives here](/pricing/dynamics-365-licensing/).",
          "**How much history moves.** Open pipeline and active accounts are non-negotiable. Ten years of closed opportunities and logged calls are a choice, and the volume of closed history is what turns migration from a mapping exercise into a scheduling problem — it drives extraction time, attachment handling, and the length of the rehearsal loads. If you are coming off Salesforce, the mechanics of extraction, object mapping, and attachment handling are covered in [Salesforce to Dynamics 365 migration](/migrations/salesforce-to-dynamics-365/).",
          "**The security model.** Business units, teams, and column-level security are inexpensive to define before go-live and disruptive to restructure afterward, because record ownership moves when the structure moves. Decide who can see whose pipeline while the system is still empty.",
          "**The integration surface.** Every system that exchanges records — ERP, marketing, telephony, quoting — adds a connection to configure, test, and re-point in each environment. Some connectors are premium and carry their own licensing consequence; see [premium connector](/resources/glossary/premium-connector/). Two integrations at launch is a different engagement from six.",
          "**Whether Copilot is in scope at launch.** Copilot features can be enabled at launch or deferred. Turning them on is quick; agreeing what sellers are permitted to send on the company's behalf is the actual work. Coverage differs feature by feature and Microsoft publishes it in a per-feature international availability report, so check the specific features you intend to enable against your users' regions and preferred UI languages before you commit them to scope. Microsoft also now describes the Sales agent in Microsoft 365 Copilot as the evolution of this experience and says it will become the preferred way to access Copilot assistance in Dynamics 365 Sales — treat today's feature list as a moving target, and read the capability detail on [Dynamics 365 Sales](/dynamics-365/sales/) rather than in a proposal.",
          "**Who owns the system on the Monday after go-live.** Someone internal has to own environments, releases, and the change queue. Where no one does, the configuration drifts and the next release breaks. [Power Platform governance](/services/power-platform/) is the difference between a CRM that improves and one that quietly ossifies."
        ]
      },
      {
        "type": "steps",
        "heading": "How the engagement runs",
        "steps": [
          {
            "name": "Decision workshop",
            "description": "A short, structured session that closes the seven decisions above and nothing else. We are not designing your sales process here; we are recording it and identifying the places where it diverges from the template. Divergences are priced as either configuration or custom work before the build begins, so scope is a known quantity rather than a discovery."
          },
          {
            "name": "Template fit and configuration",
            "description": "The packaged solution is loaded into a dedicated development [Power Platform environment](/resources/glossary/power-platform-environment/) and adjusted: stage names, qualification criteria, required fields, role definitions, dashboards. All of it happens inside a solution, in development only. No configuration is made directly in production at any point in the engagement — the reasons for that discipline are in the failure modes below."
          },
          {
            "name": "Data preparation and trial load",
            "description": "Extraction and cleanup run in parallel with configuration, not after it. Duplicate detection rules are agreed and published before any bulk import, because a rule has no effect until it is published and only five rules can be published for the same table at a time. Reference and configuration data held as table rows — product catalog, territories, and similar — moves with the Configuration Migration tool, which is built for configuration data rather than transactional records. The first load is always a rehearsal against real volumes."
          },
          {
            "name": "Release path setup",
            "description": "Development, test, and production environments are linked into a pipeline. Microsoft's ALM guidance sets separate development and production as the floor and recommends at least one test environment, so the deployment itself gets tested and not just the application. The default pipeline import behavior is an upgrade that does not overwrite customizations, which is the safe setting and also the one that punishes undisciplined production edits."
          },
          {
            "name": "User acceptance testing with real sellers",
            "description": "Testing runs in the test environment with migrated data and the people who will actually use the system, not with a project team clicking through a script. Email and activity capture, mobile access, and the reports managers will open on Monday morning are all validated here. Findings are fixed in development and re-deployed through the same pipeline, so the release path is exercised repeatedly before it matters."
          },
          {
            "name": "Cutover and first-cycle support",
            "description": "Final delta load, mailbox enablement, license assignment, and a defined read-only window on the legacy system. Support then covers one full sales or service cycle, because the questions that determine adoption do not appear on day one; they appear at the first forecast review, when a manager finds a number that does not match the spreadsheet they have kept for years."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Where templated stops and custom work begins",
        "headers": [
          "Scope area",
          "Covered by the template",
          "What turns it into custom work"
        ],
        "rows": [
          [
            "Sales process",
            "Standard lead, opportunity, and quote stages with configurable names, gating fields, and business process flows",
            "Multi-entity approval chains, pricing logic that must be calculated rather than entered, or a process that branches by division"
          ],
          [
            "Data migration",
            "Accounts, contacts, open pipeline, and a defined window of closed history via mapped, rehearsed loads",
            "Attachments and notes at volume, merged duplicate lineage, or records whose ownership must be reconstructed from a defunct hierarchy"
          ],
          [
            "Security",
            "Role-based access built on business units and teams, with owner and manager visibility patterns",
            "Column-level security across many fields, hierarchy security exceptions, or record sharing driven by an external system"
          ],
          [
            "Integrations",
            "Microsoft 365 mail and calendar capture through server-side synchronization, plus one or two documented connections",
            "Bidirectional ERP sync, custom connectors, or anything requiring a middleware layer and its own error-handling design"
          ],
          [
            "Reporting",
            "Operational dashboards and views inside the app, built on the tables the template ships",
            "Cross-system analytics, historical trend modeling, or a warehouse — that belongs with [data and analytics](/solutions/data-analytics/), not the CRM build"
          ],
          [
            "User interface",
            "Model-driven forms, views, and app navigation tuned to the roles you defined",
            "Purpose-built screens for a field or shop-floor workflow, which is the boundary examined in [Power Apps versus custom development](/compare/power-apps-vs-custom-development/)"
          ]
        ]
      },
      {
        "type": "prose",
        "heading": "Where these deployments actually fail",
        "paragraphs": [
          "**Someone edits production directly.** A well-meaning administrator changes a form in the live environment to fix an urgent complaint. That change creates an unmanaged layer sitting above the managed component, and the unmanaged layer is what governs runtime behavior. Your next release then imports cleanly and changes nothing visible, because the top layer still wins. Resolving it means removing the active customizations — an action that cannot be reversed and can lose the work associated with it. This is how a templated CRM stops being upgradeable: every subsequent release imports successfully and changes nothing, and no one connects the two facts.",
          "**Configuration data is mistaken for solution content.** A solution carries components — tables, forms, security roles, global choices. It does not carry rows. Territory records, product catalog entries, and similar reference data stored in tables move separately, with the Configuration Migration tool, driven by a schema file that defines the tables, columns, relationships, and uniqueness rules for the export. Microsoft's guidance is to import into a pre-production environment that mirrors production first, and to back production up before importing. Some things are not supported by that path at all, including the calendar table and image columns. Teams that assume a solution import carries everything discover the gap during cutover.",
          "**Duplicate handling is decided too late.** Whether a bulk load updates existing rows or creates new ones depends on the key you map: with a primary or alternate key mapped, matching rows are updated and unmatched rows inserted, and with no key mapped every row in the file arrives as a new record. Duplicate detection rules are a separate control, and they only apply once published, with a ceiling of five published rules per table at a time. If matching logic is settled during the real load rather than the rehearsal, you either get a duplicated database or a cutover window that overruns while someone reconciles it by hand.",
          "**Email capture is treated as a checkbox.** Dynamics 365 App for Outlook depends on server-side synchronization being configured, and mailboxes must be approved and then tested and enabled before they process mail. Microsoft's documented behavior is that the sync service polls each mailbox on a dynamic interval that flexes with mailbox activity, with the guidance that a mailbox is synced at least once every twelve minutes; tracking an item directly from App for Outlook, by contrast, synchronizes immediately in most scenarios. Sellers who expect everything to be instant read the polled path as the system being broken. Set the expectation during training instead of fielding it as a support ticket.",
          "**Environments drift out of version alignment.** Power Platform service updates roll out to geographic stations in sequence, so environments in different regions can sit on different Dataverse versions. A solution can be imported into an environment newer than the one it was exported from, but not reliably into an older one. Importing into an older target raises a version-mismatch warning; the import can still proceed, and the warning is a guideline rather than a verdict, but the underlying risk is real — the solution can depend on components the target does not have yet, and that is a missing-dependency failure. Microsoft's own remedy is the concrete thing to act on: put the source environment in a region whose deployment station is higher than or equal to the target's, so the target always has what the source built against. That is a five-minute decision at setup and a genuinely annoying problem later."
        ]
      },
      {
        "type": "list",
        "heading": "When you should not buy this",
        "items": [
          "**You have not chosen a platform yet.** A packaged deployment assumes the decision is made. If it is not, start with [Dynamics 365 versus Salesforce](/compare/dynamics-365-vs-salesforce/) and come back once the platform question is closed. Templated speed is worthless applied to the wrong product.",
          "**You are leaving a heavily customized Salesforce org.** Where years of custom objects, code, and automation encode real business rules, the work is a migration with a design phase, not a templated launch. That engagement is described in [Salesforce to Dynamics 365 migration](/migrations/salesforce-to-dynamics-365/).",
          "**The pain is actually in quoting, inventory, or finance.** If the complaint is that sellers cannot see stock or margin, CRM will not resolve it. Look at [financial management](/solutions/financial-management/) or [Business Central](/dynamics-365/business-central/) first, and treat CRM as the second phase.",
          "**Your process is genuinely non-standard.** Regulated approval chains, long project-based sales, and complex partner-channel models fall outside a template by design. Forcing them in produces a system that sellers work around, which is worse than no system.",
          "**Nobody internal will own it.** With no named owner, no one triages the change queue, the configuration drifts away from the process it was built for, and sellers go back to the spreadsheet they trust — however well the thing was built.",
          "**Your data is not usable and nobody has said so out loud.** If the current CRM or spreadsheet cannot answer who owns an account, migration is not the first problem. That is a [data governance](/services/data-governance/) conversation, and it is cheaper to have before the build than during it."
        ]
      },
      {
        "type": "prose",
        "heading": "What you own after go-live",
        "paragraphs": [
          "At the end of the engagement you hold a managed solution in a source-controlled release path, a documented environment and pipeline configuration, a data mapping with its migration scripts, and role definitions written down rather than held in one person's memory. That package is what makes the second phase inexpensive: adding Customer Service, extending into field operations, or layering analytics on top all reuse the same release discipline instead of rebuilding it.",
          "It also means you are not locked to us. Everything is in your tenant, in standard Microsoft artifacts, deployable by any competent partner or an internal team. If you would rather assess an existing Dynamics or Power Platform footprint before committing to a new build, a [Power Platform health check](/assessments/power-platform-health-check/) is the smaller first step. If you already know what you want deployed, [tell us the shape of it](/contact/) and we will tell you plainly whether the template fits or whether you are looking at a custom build."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What do you need from our side for a compressed timeline to hold?",
        "a": "Four things, roughly in this order. A named decision owner with the authority to settle process and security questions without convening a committee. Access to an extract of the current system early enough that data problems surface in week one rather than week five. An owner on the counterpart system for each integration, because that is usually where a date actually slips. And named sellers or agents genuinely released for user acceptance testing, rather than volunteered and then pulled back into their day job. None of those are large commitments on their own. Missing any one of them is what turns a weeks-long build into a months-long one."
      },
      {
        "q": "Does automated mean we get a generic CRM that does not match how we sell?",
        "a": "The template covers the parts that are the same in most organizations: the object model, security patterns, mail and calendar capture, standard dashboards. Your stage names, qualification criteria, required fields, and reporting are configured to your process during the build. What the template will not absorb is a process that fundamentally differs from lead, opportunity, quote, close. Where that is genuinely the case, we say so at the decision workshop rather than discovering it in testing."
      },
      {
        "q": "How long does it really take, including our side of the work?",
        "a": "The calendar is set by the slowest of three things, and rarely by the configuration. Those are: how long your data takes to extract and clean, how many integrations have to be built and tested, and how quickly your organization can get decision-makers into a room to sign off on process and security. We commit to a date in the statement of work based on your answers to those three, not to a generic benchmark. Where a client's data is in poor shape, the honest answer is that data preparation runs longer than the build."
      },
      {
        "q": "What drives the cost up on a deployment that is supposed to be fixed scope?",
        "a": "Four things account for most of it: history and attachment volume in the data migration, integrations beyond the first two, column-level security applied broadly, and custom screens replacing standard forms. Licensing is a separate line and can shift the picture on its own, since Managed Environments carry a premium requirement and some connectors are premium too. Pricing for Dynamics 365 licensing is covered on its own page rather than here, because it changes and we would rather you read the current version."
      },
      {
        "q": "Should we migrate all our history from the old CRM?",
        "a": "Usually not all of it. Open pipeline and active customer records have to move. Closed history is a judgment call between analytical value and migration cost, and closed history is where attachment volume, deleted-user ownership, and duplicate lineage cause the most trouble. A common middle path is migrating a defined window of closed records into the CRM and archiving the remainder somewhere queryable but out of the way."
      },
      {
        "q": "How does the license tier we pick affect the deployment?",
        "a": "It sets the ceiling on what the template can include, so it has to be settled at the decision workshop rather than during testing. A tier change mid-build is a re-scope, not a setting: the feature set in the app, parts of the role model, and sections of the test script all move with it. The current tier-by-tier detail lives on our Dynamics 365 licensing page, because Microsoft revises it and a number written into a proposal goes stale."
      },
      {
        "q": "What happens when we need to change something after go-live?",
        "a": "Someone on your side owns the change queue. Requests get logged and triaged into three buckets: settings a trained administrator can adjust safely, changes that need a release, and requests that get declined because they would break the process the system was built for. Anything in the second bucket is built in development, packaged into the solution, and deployed through the same pipeline that delivered the original build, which keeps the release path exercised rather than theoretical. Most organizations settle into a regular batched cadence once the first-cycle noise dies down. When our support period ends you keep the solution, the pipeline, and the documentation, and you can run that cycle internally or bring us back for a defined release — nothing in the package requires us to operate it."
      },
      {
        "q": "Can this approach handle a Dynamics 365 deployment across two tenants after an acquisition?",
        "a": "Not directly. Power Platform pipelines cannot deploy to a different tenant, so a CRM that has to move between two organizations' tenants is migration work with its own identity, data, and coexistence design, not a templated deployment. It is a different engagement with a different sequence. If your CRM question sits inside a wider acquisition or divestiture, raise that at the outset — it changes the order in which everything should happen."
      }
    ],
    "relatedServiceSlugs": [
      "dynamics-365",
      "power-platform",
      "data-governance"
    ],
    "relatedTermSlugs": [
      "dataverse",
      "power-platform-environment",
      "premium-connector"
    ],
    "relatedPageRefs": [
      "/dynamics-365/sales/",
      "/dynamics-365/customer-service/",
      "/migrations/salesforce-to-dynamics-365/",
      "/compare/dynamics-365-vs-salesforce/",
      "/pricing/dynamics-365-licensing/",
      "/compare/power-apps-vs-custom-development/",
      "/assessments/power-platform-health-check/"
    ]
  },
  {
    "slug": "financial-management",
    "oldSlugs": [],
    "name": "Financial Management",
    "metaTitle": "Financial Management Implementation with Dynamics 365",
    "metaDescription": "How a Dynamics 365 financial management project actually runs: the design decisions you own, the sequence of work, the failure modes, and when to skip it.",
    "heroQuestion": "What does a Dynamics 365 financial management implementation actually involve?",
    "heroAnswer": "A financial management implementation replaces spreadsheet-patched accounting with Dynamics 365 Business Central or Dynamics 365 Finance. The work covers chart of accounts and dimension design, opening balance and history conversion, month-end close redesign, approval and segregation-of-duties controls, and financial reporting. Most mid-market projects sequence as design, configuration, data conversion, a parallel close, then cutover at a fiscal period boundary.",
    "intro": [
      "Most finance teams do not decide to replace their accounting system. They arrive at it after a run of month-ends where the close depended on one person's spreadsheets, or an acquisition added a second chart of accounts nobody has reconciled since, or an auditor asked a question the system could only answer by rebuilding a schedule by hand. By that point the question is not whether to move. It is what to move, in what order, and what to deliberately leave behind.",
      "This page is about the engagement, not the product. If you want the capability tour, [Business Central](/dynamics-365/business-central/) and [Dynamics 365 Finance](/dynamics-365/finance/) cover that ground, and our [Dynamics 365 practice page](/services/dynamics-365/) covers how we staff this kind of work. What follows is how MP365 scopes and sequences a financial management build, the decisions you have to make before anyone configures anything, and the specific places these projects come apart."
    ],
    "blocks": [
      {
        "type": "prose",
        "heading": "What a financial management engagement covers",
        "paragraphs": [
          "A financial management engagement is the work of moving your general ledger, subledgers, and close process onto a system that can carry them without side agreements. In practice that means five things: designing how transactions get classified, converting balances and the history you actually need, rebuilding the close as a sequence of system steps rather than a set of habits, putting approval and posting controls where your auditors expect them, and producing statements people trust on day one instead of month three.",
          "The scope boundary matters more than the feature list. Finance implementations expand quietly. Someone mentions that while we are in there, we should fix commission calculations, or bring in the warehouse, or replace the CRM. Each of those is a real project with its own risk. We draw the line at what has to be true for you to close a period correctly, and we schedule everything else after your first clean close. If the adjacent work is genuinely in scope, it belongs in the plan as its own phase, not as a line item inside the finance build.",
          "The choice between Business Central and Dynamics 365 Finance — the accounting app in what Microsoft calls the finance and operations apps — sits underneath all of this and is not reversible in any practical sense. Moving between them later is a re-implementation, not an upgrade. We work through it against your legal entity structure, intercompany volume, statutory reporting obligations, and manufacturing or distribution complexity — the detailed comparison lives on [Business Central vs Finance and Operations](/compare/business-central-vs-finance-operations/)."
        ]
      },
      {
        "type": "list",
        "heading": "What gets designed and built",
        "items": [
          "**Chart of accounts and dimension model.** A natural account structure plus the analytical dimensions that replace account segments. Business Central gives you two global dimensions — the ones usable as filters on reports, batch jobs, and ledger entry pages — inside a total of eight shortcut dimension slots on journal and document lines, because both global dimensions are automatically available as shortcuts too. You can define as many other dimensions as you like, but they are not filterable in the same way. That ceiling is a real constraint, not a starting suggestion.",
          "**Company and environment topology.** Which legal entities become separate companies, how many environments they sit in, and how consolidation and intercompany posting work across them.",
          "**Opening balances and converted history.** Trial balance at cutover, open receivables and payables at the document level, open bank items, fixed asset registers with accumulated depreciation, and whatever comparative history your reporting genuinely requires.",
          "**Close process design.** Accruals, deferral templates, allocations, bank reconciliation, intercompany eliminations, and the period-end checklist itself, written as system steps with owners rather than as a shared document.",
          "**Controls and approvals.** Posting periods, user permission sets, approval workflows on purchase and payment documents, and the segregation of duties your auditors will test.",
          "**Financial reporting.** Row and column definitions in Business Central's Financial Reporting — the capability formerly called account schedules — plus the analytics layer if statements alone are not enough. That extends into [data and analytics](/solutions/data-analytics/) work.",
          "**Integration boundaries.** What posts to the general ledger, what stays in a subsystem, and how each interface reconciles. This is where [data governance](/services/data-governance/) stops being abstract."
        ]
      },
      {
        "type": "table",
        "heading": "Decisions you own before configuration starts",
        "headers": [
          "Decision",
          "What you are actually choosing",
          "Cost of changing it later"
        ],
        "rows": [
          [
            "Platform",
            "Business Central or Dynamics 365 Finance, judged on entity count, statutory reporting, and operational complexity — not on user count alone. [Compare them here](/compare/business-central-vs-finance-operations/).",
            "A second implementation. Data, configuration, integrations, and training are all rebuilt."
          ],
          [
            "Accounts vs dimensions",
            "Whether department, location, project, and product line live in the account number or in dimensions. Dimensions keep the chart short and reporting flexible.",
            "Changing a global or shortcut dimension in Business Central requires every entry posted with that dimension to be updated. Microsoft's own guidance warns the process can be time-consuming, might affect performance, and might lock tables while it runs."
          ],
          [
            "Company and environment layout",
            "One company per legal entity, and how those companies are distributed across environments. Business Central caps companies per environment at 300.",
            "Administration happens at the environment level, not the company level. Restore, copy, upgrade, and export all move the whole environment, so a company you later need to separate means a migration."
          ],
          [
            "History conversion depth",
            "Balances only, balances plus open items, or converted transactional history for comparative periods.",
            "Reopening conversion after go-live means reconciling two systems of record simultaneously while also running a live close."
          ],
          [
            "Integration boundary",
            "Which systems post summarized journals versus detailed transactions, and which direction is authoritative for shared master data.",
            "Duplicated master data with no owner. The reconciliation burden lands on the accounting team every period, permanently."
          ]
        ]
      },
      {
        "type": "steps",
        "heading": "How the work sequences",
        "steps": [
          {
            "name": "Readiness and platform decision",
            "description": "We inventory your entities, currencies, transaction volumes, subsystems, and statutory obligations, then commit to a platform in writing with the reasoning attached. Our [Business Central readiness assessment](/assessments/business-central-readiness/) is the structured version of this step, and it is deliberately capable of concluding that you should not proceed yet."
          },
          {
            "name": "Design the ledger and the close",
            "description": "Chart of accounts, dimension model, posting groups, approval rules, and the period-end checklist. This is the phase where finance leadership has to be present rather than represented. Decisions made here are cheap now and expensive at every later point."
          },
          {
            "name": "Configure in a sandbox and pilot it",
            "description": "Configuration goes into a sandbox environment, then your team runs real transactions through it — a purchase order to payment, an invoice to cash receipt, a fixed asset acquisition to depreciation. People find design gaps by touching the system, not by reviewing a design document."
          },
          {
            "name": "Convert data and reconcile it",
            "description": "Master data first, then open items, then balances. Business Central's built-in QuickBooks migration extension covers more than people expect and less than they hope: Microsoft documents it as importing customers, vendors, items, the chart of accounts, general ledger beginning balances, on-hand inventory quantities, and open customer and vendor documents such as invoices, credit memos, and payments. It does not bring purchase orders or sales orders, it migrates the full document amount rather than the partially paid balance, and it does not carry posted transactional history — planning as though it does is an early and expensive mistake. Migrated transactions arrive unposted for review, and Microsoft advises verifying beginning balances afterward. There are separate extensions for QuickBooks Desktop and QuickBooks Online, and the Desktop exporter tool is documented as supporting only specific QuickBooks Desktop versions, so confirm yours before assuming the built-in path applies. Every conversion run ends with a tie-out to your source trial balance."
          },
          {
            "name": "Run a parallel close",
            "description": "You close one period in both systems and reconcile the difference to zero. This is the step schedule pressure argues for cutting, and cutting it moves the discovery of every conversion and configuration error into your first live close. It is also where reporting gets validated, because a statement that does not tie in the parallel period will not tie in the live one."
          },
          {
            "name": "Cut over at a period boundary",
            "description": "Go-live lands on a fiscal boundary — month, quarter, or year end depending on your reporting calendar. Final balances convert, prior systems go read-only, and posting opens in the new system with the old one preserved for lookup and audit."
          },
          {
            "name": "Stabilize through the first hard close",
            "description": "The engagement is not finished at go-live. It is finished when your team closes a period without us on the call. Between those two points we handle exception handling, reporting adjustments, permission corrections, and the questions that only surface under real deadline pressure."
          }
        ]
      },
      {
        "type": "prose",
        "heading": "Where these projects actually fail",
        "paragraphs": [
          "**The close never got redesigned.** One failure mode is a technically correct implementation that reproduces the old process. The system posts fine, the statements are right, and the close takes as long as it did before because the manual reconciliations were migrated along with the data. If nobody rewrote the checklist, nothing improved — you just changed where the spreadsheets point.",
          "**Dimension design was deferred.** Teams under schedule pressure configure a minimal dimension set and plan to add analytical depth after go-live. Twelve months of posted entries later, the retrofit means rewriting history. Business Central's tooling for changing global dimensions exists precisely because this happens, and Microsoft's documentation is blunt about the performance and table-locking consequences of using it on a large database.",
          "**An integration was assumed to be real-time.** Business Central's synchronization with Dataverse and Dynamics 365 Sales runs through scheduled job queue entries, and Microsoft states plainly that it does not guarantee real-time data consistency between the two services. If your close assumes a subsystem balance is current at the moment you look at it, build the reconciliation step rather than the assumption. The same discipline applies when finance sits alongside a [CRM deployment](/solutions/crm-deployment/).",
          "**Nobody owned the reconciliation.** Data conversion is the one task that cannot be delegated to the partner. We build the extracts, run the loads, and produce the tie-out, but somebody in your controller's organization has to sign that the converted balances are correct. When that ownership is vague, the discrepancy surfaces during the first live close, at the worst possible moment.",
          "**The project was staffed with people who had day jobs.** Finance implementations demand your best accounting people during the exact months they are busiest. Part-time participation from the finance side is what pushes design decisions into the conversion phase, where they cost the most, and no amount of partner capacity substitutes. We would rather set a longer schedule that reflects your team's real availability than a shorter one that quietly assumes it away."
        ]
      },
      {
        "type": "list",
        "heading": "When this is not the right project",
        "items": [
          "**Your only real problem is reporting.** One entity, one currency, no inventory, and a close that finishes on time — but leadership cannot get the view it wants. A reporting and analytics layer on top of what you have is faster, cheaper, and reversible. Start with [data and analytics](/solutions/data-analytics/).",
          "**Your only real problem is approvals or routing.** If invoice approvals live in email and that is the pain, a [Power Platform](/services/power-platform/) workflow addresses it without touching the ledger.",
          "**You are mid-transaction and the tenant is unsettled.** During an acquisition or divestiture, entity structure is still moving. Designing a chart of accounts against a structure that will change in six months guarantees rework. Finish the tenant and identity work first, then design finance against the shape you actually end up with.",
          "**You are on Dynamics GP and reacting to a deadline.** Microsoft's published lifecycle ends Dynamics GP support on December 31, 2029 for product enhancements, regulatory updates, and technical support, with security updates available until April 30, 2031. That is runway to plan properly rather than to rush. See [Dynamics GP to Business Central](/migrations/dynamics-gp-to-business-central/), or [Dynamics NAV to Business Central](/migrations/dynamics-nav-to-business-central/) if that is your starting point.",
          "**You have not costed it honestly.** If the budget conversation has not happened, have it before the design conversation. Our [Business Central implementation cost](/pricing/business-central-implementation-cost/) page covers what drives the number, and [Dynamics 365 licensing](/pricing/dynamics-365-licensing/) covers the subscription side."
        ]
      },
      {
        "type": "prose",
        "heading": "How MP365 runs the engagement",
        "paragraphs": [
          "We are a Microsoft consulting partner in Vernon, Connecticut, working with mid-market organizations across the Northeast and nationally. Finance work sits alongside our tenant migration, Power Platform, and [data governance](/services/data-governance/) practices, which matters more than it sounds: when an acquisition is what triggers the re-platforming, the entity structure, identity, and data questions arrive together rather than in sequence.",
          "Engagements start with an assessment that produces a decision, not a proposal. That decision includes the platform, the phasing, the conversion depth, and an explicit list of what we are not doing in phase one. If the assessment concludes that your current system will serve you for another two years and the money is better spent elsewhere, we will say so — that outcome is cheaper for both of us than a project that stalls at design.",
          "Revenue-heavy and subscription-based businesses should raise that early. Deferral handling differs meaningfully between the two platforms, and Microsoft has replaced the older revenue recognition module in Dynamics 365 Finance with Subscription billing, so recognition requirements can influence the platform decision rather than following from it. If you want to talk through where your organization sits, [get in touch](/contact/) or start with the [readiness assessment](/assessments/business-central-readiness/)."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How long does a financial management implementation really take?",
        "a": "Longer than the demo suggests and shorter than a horror story. A single-entity Business Central finance go-live is measured in months, not weeks. Multi-entity work with intercompany and consolidation runs materially longer, and Dynamics 365 Finance longer still. The variables that move the schedule most are your team's availability during close weeks, how much history you convert, and how many integrations must reconcile. We size against the fiscal calendar first, because cutover has to land on a period boundary regardless of when the build finishes."
      },
      {
        "q": "Should we choose Business Central or Dynamics 365 Finance?",
        "a": "It is decided on entity structure, statutory reporting obligations, and operational complexity, not on headcount. What matters for your project plan is that the choice is effectively permanent: moving between the two later is a re-implementation, not an upgrade. That puts the decision in the readiness assessment, before design starts, rather than in a later change order. Our Business Central vs Finance and Operations comparison page, linked above, sets out the selection criteria in detail."
      },
      {
        "q": "What actually drives the cost of one of these projects?",
        "a": "Four things, roughly in order: how many legal entities and how much intercompany activity you have, how much transactional history you convert, how many integrations have to reconcile to the ledger, and how much of your current process is a customization rather than a configuration. User count matters least. Our Business Central implementation cost and Dynamics 365 licensing pages carry the numbers, and both are linked above. A range presented without those four variables is not information."
      },
      {
        "q": "How much historical data should we bring over?",
        "a": "Less than you want. Balances and open items are non-negotiable. Comparative history for one or two prior years is usually worth it for reporting continuity. Full transactional history is where budgets quietly double, and it is rarely necessary — your prior system can stay available read-only for lookups and audit response. Decide this during design, not during conversion, because it changes the effort profile of the entire back half of the project."
      },
      {
        "q": "Can we go live in the middle of a fiscal year?",
        "a": "Yes, and plenty of organizations do at a quarter end. It costs you clean full-year comparatives in the new system unless you convert enough history to reconstruct them, which is an argument for converting a bit more than the minimum. The stronger consideration is your team's bandwidth. A cutover the month before your busiest close is a scheduling decision that will read as a system failure to everyone who was not in the planning meeting."
      },
      {
        "q": "What happens to our old system after go-live?",
        "a": "It goes read-only at cutover and stays available for a defined period, and that period should be decided during design rather than after. The questions are who retains access, how audit and tax requests get answered from it, what it costs to keep licensed or hosted, and what the exit looks like — an export into a queryable archive, or a shutdown date with the records you need already extracted. Teams that leave this open either pay indefinitely for a system nobody opens or lose access to records they still have to produce. Put a named owner and a retirement date in the plan."
      },
      {
        "q": "Do we have to leave QuickBooks if it is still working?",
        "a": "No. QuickBooks stops being adequate at specific breakpoints: multiple legal entities requiring consolidation, inventory costing your system cannot carry, audit or compliance requirements it cannot evidence, or a close that has become dependent on individual people rather than on process. If none of those apply, the honest recommendation is to keep it and spend the money on reporting instead. We would rather tell you that now than fifteen months into a project."
      },
      {
        "q": "Who from our organization needs to be on this project?",
        "a": "A controller or finance director with authority to make design decisions without escalating each one, an accounting lead who knows why every current workaround exists, someone who owns each integrated subsystem, and an executive sponsor who can arbitrate scope. Part-time participation from the finance side is what pushes design decisions into the conversion phase, where they cost the most, and it is worth resolving during planning rather than discovering during design."
      }
    ],
    "relatedServiceSlugs": [
      "dynamics-365",
      "data-governance",
      "power-platform",
      "application-modernization"
    ],
    "relatedTermSlugs": [
      "dataverse",
      "carve-out",
      "retention-policy"
    ],
    "relatedPageRefs": [
      "/dynamics-365/business-central/",
      "/dynamics-365/finance/",
      "/compare/business-central-vs-finance-operations/",
      "/pricing/business-central-implementation-cost/",
      "/assessments/business-central-readiness/",
      "/migrations/dynamics-gp-to-business-central/",
      "/migrations/dynamics-nav-to-business-central/",
      "/compare/business-central-vs-netsuite/",
      "/pricing/dynamics-365-licensing/"
    ]
  }
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

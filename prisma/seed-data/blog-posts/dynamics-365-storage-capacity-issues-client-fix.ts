import type { BlogPost } from "../blog";

export const post: BlogPost = {
  slug: "dynamics-365-storage-capacity-issues-client-fix",
  title: "Dynamics 365 Storage Capacity Issues: Full Fix Guide",
  metaDescription:
    "Dynamics 365 storage warnings? Learn why Dataverse file storage fills up and how moving attachments to SharePoint fixes it. Book a free consultation.",
  cluster: "Dynamics 365",
  authorSlug: "mp365-team",
  imageUrl: "/images/blog/dynamics-365-storage-capacity-issues-client-fix.webp",
  datePublished: "2026-09-21",
  dateModified: "2026-11-07",
  excerpt:
    "Most Dynamics 365 storage capacity issues come from email attachments saved as files inside Dataverse, not from CRM records. Connect Dynamics 365 to SharePoint and Azure Blob Storage so attachments route out automatically and the record keeps a lightweight link.",
  body: [
    {
      type: "prose",
      heading: "Why Dynamics 365 Storage Capacity Issues Start",
      paragraphs: [
        "“Our storage bill just tripled, and we don’t even know why.” That is what one MP-365 client told us right after Microsoft flagged their environment for running low on space. Like most Dynamics 365 storage capacity issues, the cause was simple: every PDF, slide deck and image signature synced from Outlook was landing directly inside the database instead of a cheaper storage layer.",
        "The fix is to connect Dynamics 365 to SharePoint and Azure Blob Storage, so attachments route out automatically while the CRM record keeps a lightweight link behind the scenes.",
        "Here is the short version:",
      ],
    },
    {
      type: "list",
      items: [
        "**Root cause:** email attachments and files save as Base64 blobs inside **Dataverse file storage**, a separate and expensive capacity bucket from your CRM records.",
        "**The fix:** integrate Dynamics 365 with SharePoint and Azure Blob Storage so binary files route out of Dataverse automatically.",
        "**The result:** most environments recover the large majority of consumed file capacity and reduce their Dataverse storage spend.",
      ],
    },
    {
      type: "prose",
      heading: "Why Dataverse Storage Fills Up So Fast",
      paragraphs: [
        "Dataverse, the data layer behind [Power Platform](/services/power-platform/), splits storage into three separate buckets: Database, File and Log capacity. Most teams assume their bill is climbing because of growing customer records, but in the vast majority of Dynamics 365 storage capacity issues, it is Dataverse file storage that drives the overage, not the transactional database itself.",
        "Every time an email syncs with an attachment, Dynamics 365 saves that file directly into Dataverse as a blob. This is especially common on [Dynamics 365 Sales](/blog/what-is-microsoft-dynamics-365-sales/) teams, where reps forward contracts, proposals and signed PDFs into the CRM dozens of times a day without realizing where those files actually live.",
      ],
    },
    {
      type: "prose",
      heading: "Signs you are dealing with this issue",
      level: 3,
      paragraphs: [
        "These symptoms usually confirm it:",
      ],
    },
    {
      type: "list",
      items: [
        "A storage capacity warning banner in the Power Platform Admin Center, specifically under File Capacity",
        "A Microsoft invoice with an unexpected storage add-on charge",
        "Slower load times on records with heavy email or note activity",
        "Errors creating new records once the environment nears its allotted limit",
        "**Dataverse file storage** climbing rapidly while Database Capacity stays roughly flat",
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "That last symptom is the clearest signal. If your file bucket is the one spiking, the problem almost always traces back to unmanaged attachments, not actual CRM growth.",
      ],
    },
    {
      type: "steps",
      heading: "Step-by-Step Fix: Move Attachments to SharePoint and Azure Blob Storage",
      steps: [
        {
          name: "Audit current usage",
          description:
            "Go to Power Platform Admin Center > Environments > [Your Environment] > Resources > Capacity to see exactly how much of your File Capacity is consumed and which tables are the biggest contributors.",
        },
        {
          name: "Enable SharePoint document management",
          description:
            "Navigate to Settings > Document Management > SharePoint Document Management Settings and connect your Dynamics 365 environment to a SharePoint site. This creates the link Dataverse will use going forward.",
        },
        {
          name: "Map the right entities",
          description:
            "Select which record types (Email, Case, Opportunity, Account) should route their attachments to SharePoint. Most storage bloat comes from Email and Case attachments, so start there.",
        },
        {
          name: "Migrate historical files",
          description:
            "Use the built-in “Move Documents to SharePoint” utility, or the SharePoint Migration Tool for larger backlogs, to relocate existing attachments out of Dataverse and reclaim the space they were using.",
        },
        {
          name: "Layer in Azure Blob Storage for archives",
          description:
            "For older records you must keep for compliance but rarely access, Azure Blob Storage offers an even cheaper cold-storage tier than SharePoint, which further reduces Dataverse storage spend over time.",
        },
        {
          name: "Set new attachment limits",
          description:
            "Under Settings > Administration > System Settings > Email, cap the maximum attachment size so oversized files cannot sneak back into Dataverse the next time email sync runs.",
        },
        {
          name: "Verify capacity recovery",
          description:
            "Return to the Admin Center a day or two after migration to confirm File Capacity usage has dropped and the storage warning has cleared.",
        },
      ],
    },
    {
      type: "prose",
      paragraphs: [
        "If your team does not have the bandwidth to map SharePoint libraries and migrate historical attachments during a busy quarter, our [SharePoint services](/services/sharepoint/) and [Dynamics 365 CRM consultation](/services/dynamics-365-crm/) cover the Dataverse review and the SharePoint integration, so your team stays focused on customers instead of storage warnings.",
      ],
    },
    {
      type: "prose",
      heading: "Preventative Best Practices to Avoid Recurring Storage Issues",
      paragraphs: [
        "Fixing the current overage is only half the job. These three habits keep Dynamics 365 storage capacity issues from coming back.",
      ],
    },
    {
      type: "list",
      items: [
        "**Enforce attachment limits by policy, not memory.** Set a hard cap on attachment size and communicate it to sales and support teams so oversized files never reach Dataverse in the first place.",
        "**Run a quarterly capacity audit.** Check the Power Platform Admin Center every quarter, the same way you would audit any other system. Catching a slow climb in File Capacity early is far easier than reacting to a storage warning after the fact.",
        "**Plan storage into your licensing decisions.** As teams scale or move between Dynamics 365 editions, like the move covered in our guide to [Dynamics 365 Sales Professional](/blog/what-is-dynamics-365-sales-professional/), factor expected file volume into the conversation early so storage does not become a surprise later.",
      ],
    },
    {
      type: "prose",
      heading: "The Bottom Line",
      paragraphs: [
        "Most Dynamics 365 storage capacity issues are not a sign your CRM has outgrown its plan. They are a sign attachments never had a proper home to begin with. Routing files to SharePoint and Azure Blob Storage, instead of letting them pile up as Base64 blobs, is consistently the fastest way to cut Dataverse storage spend and keep your environment running at full speed.",
        "If your team is watching storage warnings pile up and is not sure where to start, [book a free consultation](/contact/). We can map out where your Dataverse file storage is going and get it under control.",
      ],
    },
  ],
  faqs: [
    {
      q: "Why is my Dataverse file storage growing faster than my database?",
      a: "Every email that syncs with an attachment saves the file inside Dataverse as a Base64 blob, in the File capacity bucket. Sales and support teams forward contracts, proposals and PDFs constantly, so file storage climbs even when customer records barely grow. If File Capacity spikes while Database Capacity stays flat, unmanaged attachments are the cause.",
    },
    {
      q: "Where do I see which tables use the most Dataverse file capacity?",
      a: "Open the Power Platform Admin Center, choose Environments, select your environment, then go to Resources and Capacity. It shows how much File Capacity is consumed and which tables contribute most. Email and Case attachments are usually the biggest sources, which is why they are the first record types to route to SharePoint.",
    },
    {
      q: "How do I stop attachments from filling Dataverse again?",
      a: "Route attachments for Email, Case and similar records to SharePoint through document management, and cap the maximum attachment size under the Email tab of System Settings so oversized files cannot return. Add a quarterly capacity audit in the Admin Center so a slow climb in File Capacity is caught before Microsoft raises a warning.",
    },
    {
      q: "What happens to existing attachments when I move to SharePoint?",
      a: "You can relocate them. The built-in Move Documents to SharePoint utility handles existing attachments, and the SharePoint Migration Tool suits larger backlogs. The CRM record keeps a lightweight link to the file, and the space it used in Dataverse is reclaimed. Check the Admin Center a day or two later to confirm File Capacity dropped.",
    },
    {
      q: "When should I use Azure Blob Storage instead of SharePoint?",
      a: "Use SharePoint for files people open regularly alongside CRM records. Use Azure Blob Storage for older records you must keep for compliance but rarely access, because it offers an even cheaper cold-storage tier. Layering both gives active documents an easy home and archives a low-cost one, which keeps Dataverse storage spend down.",
    },
  ],
};

import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/power-platform/power-pages/",
  intro:
    "Power Pages consulting from MP-365 gives you a secure portal where customers, partners or applicants sign in and work with your Dynamics 365 data. Power Pages was formerly called Power Apps portals, and MP-365 builds on the current product, including sign-in, permissions and forms.",
  atAGlance: {
    bestFor:
      "Organizations that need external users, such as customers, partners or applicants, to sign in and see or update their own records in Dynamics 365 or Dataverse.",
    includes:
      "Portal design, sign-in setup, web roles and table permissions, forms and lists on Dataverse tables, case and request flows linked to Dynamics 365, testing and handover.",
    notIncluded:
      "Web design agency work, custom software development, cybersecurity services, ERP implementation, Microsoft license resale.",
    howItStarts:
      "A discovery call to list who signs in, what each group sees and which records they change.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What Power Pages consulting delivers",
      paragraphs: [
        "Power Pages consulting delivers an external-facing website that reads and writes your business data. Microsoft describes Power Pages as a secure, low-code platform for creating, hosting and administering external business websites (Microsoft Learn, 2026).",
        "The data sits in Microsoft Dataverse, the same data platform that Dynamics 365 uses. That means a customer can open a case on the portal and your service team sees it in Dynamics 365 at once, with no copy step in between.",
      ],
    },
    {
      type: "list",
      heading: "Problems a Dynamics 365 customer portal solves",
      items: [
        "**Status calls and emails:** customers see their own cases, orders or applications without phoning your team.",
        "**Paper and PDF forms:** applicants submit structured data that lands directly in the CRM.",
        "**Partner data in spreadsheets:** partners register deals or update records themselves.",
        "**No single sign-in:** external users log in with an identity they already have instead of a shared password.",
        "**Manual data entry:** staff stop re-keying what outside users send them by email.",
      ],
    },
    {
      type: "table",
      heading: "Power Pages compared with a SharePoint portal",
      headers: ["Question", "Power Pages portal", "SharePoint supplier or partner portal"],
      rows: [
        [
          "Main job",
          "Let external users work with business records",
          "Share documents, files and pages with partners",
        ],
        [
          "Where the data lives",
          "Dataverse tables, including Dynamics 365 data",
          "SharePoint libraries and lists",
        ],
        [
          "What users do",
          "Submit forms, track cases, update their own records",
          "Download, upload and read content",
        ],
        [
          "Access control",
          "Web roles and table permissions at record level",
          "SharePoint permissions on sites, libraries and files",
        ],
        [
          "Choose it when",
          "Outsiders need to act on CRM or case data",
          "Outsiders mainly need files and shared content",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Which portal approach fits your use case",
      paragraphs: [
        "Choose Power Pages when external users sign in to submit, track or change records. Choose a SharePoint portal when the goal is document sharing with suppliers or partners. MP-365 builds both and explains the SharePoint side on its [SharePoint supplier and partner portals](/services/sharepoint/supplier-partner-portals/) page.",
        "Some clients need both: a Power Pages site for case and order data and a SharePoint area for contracts and drawings.",
      ],
    },
    {
      type: "prose",
      heading: "How access works in a Power Pages portal",
      paragraphs: [
        "Access in Power Pages has three layers: who can sign in, which web role they hold, and which table records that role may touch. MP-365 designs all three together, because a portal that exposes the wrong record is worse than no portal.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Sign-in options",
      paragraphs: [
        "Power Pages ties each signed-in user to a Dataverse contact record. Microsoft lists supported identity providers including Microsoft Entra ID, Microsoft Entra External ID, Azure AD B2C, and OpenID Connect and SAML 2.0 providers. Microsoft's documentation does not recommend local username-and-password accounts, so MP-365 uses an external identity provider.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Web roles",
      paragraphs: [
        "A web role groups users who get the same permissions on the site, such as Customer, Partner or Applicant. Users without a web role get only what anonymous visitors get. MP-365 keeps the list of roles short and documents what each one allows.",
      ],
    },
    {
      type: "prose",
      level: 3,
      heading: "Table permissions",
      paragraphs: [
        "Table permissions decide which Dataverse records a role may read, create, update or delete. Microsoft documents access types such as global, contact, account and self, so a customer can see only the cases linked to their own contact or company. A permission only takes effect once a web role is attached to it.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 builds a Power Pages portal",
      steps: [
        {
          name: "Define the external users",
          description: "List each group that signs in, what they need to do and which records belong to them.",
        },
        {
          name: "Model the data",
          description: "Confirm which Dataverse or Dynamics 365 tables the portal reads and writes, and fix gaps in the relationships.",
        },
        {
          name: "Set up sign-in",
          description: "Connect the identity provider and decide how new users register or receive invitations.",
        },
        {
          name: "Create web roles and permissions",
          description: "Build the web roles and table permissions, then test each role with a real account.",
        },
        {
          name: "Build pages, forms and lists",
          description: "Design the site in the Power Pages design studio with forms and lists tied to the tables.",
        },
        {
          name: "Connect the back-office process",
          description: "Link portal submissions to Dynamics 365 queues, owners and Power Automate flows.",
        },
        {
          name: "Test, launch and hand off",
          description: "Run user testing, deploy to production and train your team to manage content and users.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get from a portal project",
      items: [
        "**A live portal:** pages, forms and lists connected to your Dataverse or Dynamics 365 data.",
        "**Access design:** documented web roles and table permissions, tested per role.",
        "**Sign-in setup:** your chosen identity provider, with registration or invitation rules.",
        "**Back-office routing:** submissions routed to the right owner in Dynamics 365.",
        "**Admin guide:** instructions for managing users, content and permission changes.",
        "**Improvement backlog:** ranked next steps such as new forms or dashboards.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft products behind a Dynamics 365 portal",
      paragraphs: [
        "A Dynamics 365 portal usually combines Power Pages, Dataverse and one or more Dynamics 365 apps. For support portals, the partner app is often [Dynamics 365 Customer Service](/services/dynamics-365-crm/customer-service/), where agents work the cases customers open online.",
        "Power Automate adds approvals and notifications, and Microsoft Entra handles sign-in. Power BI can report on portal activity using the same Dataverse data.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: access control experience that carries into portals",
      paragraphs: [
        "A portal exposes CRM data to outsiders, so how access is governed matters. MP-365 supports Dynamics 365 CRM for the US Department of Transportation, and has built CRM access control for another client with an approval process, documented access levels and automatic access reports.",
        "That discipline is the same one a Power Pages portal needs: know who can see what, and prove it. See the [clients page](/clients/) for named work.",
      ],
    },
    {
      type: "prose",
      heading: "What MP-365 does and does not take on",
      paragraphs: [
        "MP-365 designs permission models and checks that each role sees only what it should. It does not provide cybersecurity services, and it does not certify a portal against compliance frameworks. If your sector has formal requirements, your compliance team signs off alongside the build.",
      ],
    },
    {
      type: "prose",
      heading: "When Power Pages is not the right fit",
      paragraphs: [
        "Power Pages is not the right fit for a marketing website with no sign-in, or a brochure site where a standard content system is simpler. It is also overkill when partners only need documents, where a SharePoint portal is cheaper to run. Cost depends on scope and Microsoft licensing, which Microsoft sets separately; see the [pricing page](/pricing/).",
      ],
    },
    {
      type: "prose",
      heading: "Related Power Platform services",
      paragraphs: [
        "Portals work best alongside the rest of the [Power Platform](/services/power-platform/). Internal staff often use [Power Apps](/services/power-platform/power-apps/) on the same tables that the portal exposes to outsiders.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is Power Pages?",
      a: "Power Pages is Microsoft's low-code platform for building secure websites that external users can sign in to. The site reads and writes data in Microsoft Dataverse, the same data layer used by Dynamics 365 and Power Apps. Typical uses are customer, partner and applicant portals.",
    },
    {
      q: "Is Power Pages the same as Power Apps portals?",
      a: "Yes, Power Pages is the current name for Power Apps portals. Microsoft announced the change at its Build conference in May 2022. Searches for Dynamics portals or a Dynamics 365 portal usually mean this same product, so MP-365 builds on Power Pages and its design studio today.",
    },
    {
      q: "What is the difference between Power Pages and a SharePoint portal?",
      a: "Power Pages lets signed-in external users submit and update business records stored in Dataverse. A SharePoint portal mainly shares files and content with partners or suppliers. Choose Power Pages for cases, orders and applications, and SharePoint for documents. Many clients use both side by side.",
    },
    {
      q: "Can customers see their own cases in a Dynamics 365 customer portal?",
      a: "Yes. A portal can list and open only the cases tied to the signed-in customer, using contact or account access in table permissions. Agents work those cases in Dynamics 365 Customer Service, and customer replies appear on the case record without any manual copying.",
    },
    {
      q: "How do customers and partners sign in?",
      a: "Users sign in with an identity provider such as Microsoft Entra External ID, Azure AD B2C, or an OpenID Connect or SAML provider. They can also use social providers. Microsoft's documentation does not recommend local username-and-password accounts. MP-365 sets up registration or invitations to match how you onboard users.",
    },
    {
      q: "How does Power Pages keep one customer from seeing another's data?",
      a: "Table permissions and web roles control access. Power Pages blocks access to Dataverse records unless a permission grants it, and a contact or account access type limits users to records linked to them. MP-365 tests every role with real accounts before launch to confirm the limits hold.",
    },
    {
      q: "Do we need Dynamics 365 to use Power Pages?",
      a: "No. Power Pages works with any Dataverse environment, so you can run a portal on custom tables without Dynamics 365. Having Dynamics 365 adds ready-made data such as accounts, contacts and cases. MP-365 recommends the Dynamics 365 route when the portal serves sales or service processes.",
    },
    {
      q: "How much does a Power Pages project cost?",
      a: "Cost depends on the number of user groups, forms, integrations and the sign-in setup. Microsoft's license fees are set separately from consulting fees. MP-365 usually proposes a first portal for one user group, then expands. See the [pricing page](/pricing/) for how engagements work.",
    },
    {
      q: "Can you redesign or fix an existing portal?",
      a: "Yes. MP-365 reviews existing portals, whether built as Power Apps portals or Power Pages, and fixes broken forms, slow pages and loose permissions. A common first step is an audit of web roles and table permissions, to confirm each group sees only its own records.",
    },
    {
      q: "Does MP-365 certify a portal for compliance?",
      a: "No. MP-365 builds permission models and checks that roles see only what they should, but it does not certify portals or provide cybersecurity services. If you must meet a framework such as HIPAA or FedRAMP, your compliance team should review the design with MP-365.",
    },
  ],
  closing:
    "Power Pages consulting pays off when outside users need to act on your data, not just read files. MP-365 can list who needs access, design the permissions and build the first portal on your Dynamics 365 or Dataverse tables.",
  cta: {
    heading: "Talk to MP-365 about your customer or partner portal",
    body: "Tell us who needs to sign in and what they need to do. We will outline the portal, the permissions and a sensible first release.",
    text: "Book a discovery call",
  },
};

import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/dynamics-365-crm/security-roles-audit/",
  intro:
    "Dynamics 365 security roles decide who can create, read, change and share each type of record, and they tend to drift as people change jobs. MP-365 reviews your roles and user access, removes unnecessary Admin rights, and documents who should have what.",
  atAGlance: {
    bestFor:
      "IT and operations leaders whose Dynamics 365 has run for a while and who cannot say who holds the System Administrator role, or why.",
    includes:
      "User and role review, admin access check, role redesign by job function, business unit and team review, an approval process, documented access levels and recurring access reports.",
    notIncluded:
      "Cybersecurity services, identity and access management, security monitoring, compliance certification, ERP implementation and Microsoft license resale.",
    howItStarts:
      "A discovery call about how access is granted today, then a read-only review of users, roles and teams in your environment.",
  },
  blocks: [
    {
      type: "prose",
      heading: "What are Dynamics 365 security roles?",
      paragraphs: [
        "Dynamics 365 security roles are sets of privileges that control what a user can do with each type of data. They are part of Microsoft Dataverse, the data platform under Sales, Customer Service and Customer Insights. You assign a role to a user directly or to a team, and the user gets the privileges that role grants.",
        "A role defines eight standard privileges for each table: Create, Read, Write, Delete, Append, Append To, Assign and Share. Each privilege carries an access level that says how wide it reaches.",
      ],
    },
    {
      type: "table",
      heading: "How Dynamics 365 security role permissions work",
      headers: ["Layer", "What it controls", "Common mistake"],
      rows: [
        [
          "Privileges",
          "The actions a role allows on a table, such as Read or Delete",
          "Granting Delete on tables where users only need Read",
        ],
        [
          "Access levels",
          "How far a privilege reaches: user, business unit, parent and child business units, or the whole organization",
          "Using organization-wide access when business unit access is enough",
        ],
        [
          "Business units",
          "Security boundaries that group users and data",
          "Leaving everyone in the root business unit",
        ],
        [
          "Teams",
          "Groups that hold roles and can own records",
          "Assigning roles to individuals, so nobody can see the pattern",
        ],
        [
          "Record sharing",
          "One-off access to a specific record",
          "Using sharing as the main model, which is slower and hard to troubleshoot",
        ],
        [
          "Column security profiles",
          "Extra control over sensitive columns on a table",
          "Skipping it for salary, margin or contract columns",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Why users end up with too much admin access",
      paragraphs: [
        "Users end up with too much admin access because permissions are added under pressure and rarely removed. Microsoft Learn (2026) states that Dataverse security privileges are cumulative: a user receives the broadest access from all of their roles and teams. Adding a restrictive role never takes access away.",
        "That design makes sprawl easy. Someone cannot save a record, so an administrator grants System Administrator to unblock them. A new hire is set up by copying a colleague's access. A project ends, and nobody removes the temporary role. Over time the number of powerful users grows, and no one notices.",
      ],
    },
    {
      type: "list",
      heading: "What an access review looks for",
      items: [
        "**System Administrator holders:** every user with the role, and a named reason for each.",
        "**Unused access:** accounts that have not signed in or that belong to people who left.",
        "**Overlapping roles:** users with several roles that add up to more than any job needs.",
        "**Copied roles:** custom roles cloned years ago that now grant far more than their name suggests.",
        "**Shared and service accounts:** accounts used by integrations with broader access than the integration needs.",
        "**Sharing exceptions:** records shared one by one that should follow a rule.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 runs a Dynamics 365 access audit",
      steps: [
        {
          name: "List users, roles and teams",
          description:
            "Export every user in each environment with their direct roles, team roles and business unit.",
        },
        {
          name: "Find the administrators",
          description:
            "Identify everyone with System Administrator or equivalent rights and ask the business to justify each one.",
        },
        {
          name: "Map access to job functions",
          description:
            "Group users by what they do, such as seller, service agent, manager or finance reviewer.",
        },
        {
          name: "Compare privileges with real need",
          description:
            "Check each role against the tables and actions that function uses, and flag excess.",
        },
        {
          name: "Design the target role set",
          description:
            "Define a small number of roles per function, assigned through teams rather than to individuals.",
        },
        {
          name: "Test in a sandbox",
          description:
            "Apply the new roles to test users, run their daily tasks and confirm nothing breaks.",
        },
        {
          name: "Apply changes with approval",
          description:
            "Move users to the new roles in agreed batches, with a sign-off for each group.",
        },
        {
          name: "Document and automate reporting",
          description:
            "Record the access levels and schedule a recurring report of who holds which role.",
        },
      ],
    },
    {
      type: "list",
      heading: "What you get from the audit",
      items: [
        "**Access inventory:** a clear list of users, roles and teams per environment.",
        "**Findings report:** the excess access found, ranked by risk to your data.",
        "**Role design:** a smaller set of roles built around job functions.",
        "**Approval process:** a documented way to request, approve and remove access.",
        "**Access report:** a recurring view of who holds which role, built with [Power BI](/services/power-platform/power-bi/) or in-app views.",
        "**Documentation:** a plain description of each access level for your administrators.",
      ],
    },
    {
      type: "prose",
      heading: "Microsoft products involved in a roles audit",
      paragraphs: [
        "The work happens in the Power Platform admin center and in Dataverse, where roles, business units and teams live. Microsoft Entra ID groups can feed Dataverse group teams, so a user's role follows their group membership. [Power Automate](/services/power-platform/power-automate/) can route access requests for approval, and Power BI shows the results.",
        "Microsoft 365 permissions are a separate layer. [Microsoft Purview and permission models](/services/data-governance/microsoft-purview/) covers the files and sites side, and the [AI Data Governance Audit](/services/copilot/ai-data-governance-audit/) checks what Copilot can reach before rollout. Poor [data quality](/services/data-governance/data-quality-management/) also hides access problems, such as duplicate owners.",
      ],
    },
    {
      type: "prose",
      heading: "Proof: CRM access control with approvals and automatic reports",
      paragraphs: [
        "A company's CRM access had grown without a process. MP-365 introduced an approval process for access requests, documented the access levels and set up automatic access reports.",
        "Administrators can now see who holds which role without building a report by hand. The [clients page](/clients/) lists more MP-365 work.",
      ],
    },
    {
      type: "prose",
      heading: "When this audit is not the right fit",
      paragraphs: [
        "A Dynamics 365 access audit is not the right fit if you need security operations, threat monitoring, identity management or compliance certification. MP-365 does not provide those services. The audit covers Dynamics 365 roles and related Microsoft 365 permissions, and nothing beyond them. If you need broader security work, hire a specialist for that.",
      ],
    },
    {
      type: "prose",
      heading: "Related Dynamics 365 CRM services",
      paragraphs: [
        "Access reviews often come with other clean-up work. See [Dynamics 365 CRM consulting](/services/dynamics-365-crm/) for the full list, and the [pricing page](/pricing/) for how MP-365 prices this kind of review.",
      ],
    },
  ],
  faqs: [
    {
      q: "What are security roles in Dynamics 365?",
      a: "Security roles are groups of privileges in Microsoft Dataverse that define what users can do with each table. Each role sets Create, Read, Write, Delete, Append, Append To, Assign and Share privileges, with an access level for each. You assign roles to users or teams, and the access is added up.",
    },
    {
      q: "How do you audit user access in Dynamics 365?",
      a: "List every user with their roles, teams and business unit, then identify who holds System Administrator. Compare each role with what the job needs, and remove what is extra. Test changes in a sandbox, apply them with approval, and keep a recurring report so drift is visible.",
    },
    {
      q: "Why do users end up with too much admin access?",
      a: "Access is granted to unblock someone and rarely removed. Dataverse privileges are cumulative, so extra roles only add. Copying a colleague's access for a new hire, leftover project roles and staff who change jobs all push the count of powerful users up without anyone deciding it.",
    },
    {
      q: "Does adding a restrictive role take away access?",
      a: "No. Microsoft Learn (2026) says Dataverse security is cumulative, and a user receives the broadest access granted by all their roles and team memberships. To reduce access you must remove or change the broader role. This is why audits find users with more access than any single role suggests.",
    },
    {
      q: "What are access levels in a Dynamics 365 security role?",
      a: "Access levels say how far a privilege reaches. They range from only the records a user owns, to business unit records, to parent and child business units, up to the whole organization. Choosing the narrowest level that supports the job is the main way to limit exposure.",
    },
    {
      q: "What is the difference between a role, a team and a business unit?",
      a: "A role lists privileges. A team is a group of users that can hold roles and own records. A business unit is a security boundary that groups users and data. Roles define what is allowed, business units define where, and teams make assigning roles manageable.",
    },
    {
      q: "Can we manage Dynamics 365 roles with Microsoft Entra groups?",
      a: "Yes. Microsoft Learn (2026) describes mapping a Microsoft Entra security group to a Dataverse group team and assigning the role to that team. Users then gain or lose access as they join or leave the group. MP-365 designs the group structure with you during the audit.",
    },
    {
      q: "What is column-level security?",
      a: "Column-level security restricts access to sensitive columns, such as pricing or personal data, even for users who can see the record. You enable it per column and grant access through a column security profile. Microsoft advises using it only where needed, since heavy use can slow performance.",
    },
    {
      q: "How often should Dynamics 365 access be reviewed?",
      a: "Review administrator access often, and the full role set on a schedule that matches how quickly your team changes. Many organizations also review when staff leave or a major project ends. A recurring access report from MP-365 makes the review a quick check rather than a project.",
    },
    {
      q: "Is this a cybersecurity service?",
      a: "No. The audit covers Dynamics 365 roles, teams, business units and related Microsoft 365 permissions. MP-365 does not provide security operations, threat monitoring, identity management or compliance certification. It is a practical review of who can do what in your CRM.",
    },
  ],
  closing:
    "Dynamics 365 security roles stay manageable when each role matches a job, access flows through teams, and someone checks the list on a schedule. MP-365 sets that up and gives you the report to keep it that way.",
  cta: {
    heading: "Ask MP-365 to review your Dynamics 365 access",
    body: "Find out who holds Admin rights today and whether they need them. The first review is read-only.",
    text: "Book a discovery call",
  },
};

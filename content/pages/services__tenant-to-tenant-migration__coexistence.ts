import type { PageContent } from "../types";

export const page: PageContent = {
  path: "/services/tenant-to-tenant-migration/coexistence/",
  intro:
    "Microsoft 365 tenant coexistence keeps two companies working together on separate tenants until the move is done, with shared people search, calendar visibility, mail routing and a planned domain cutover. MP-365 designs the coexistence layer and runs the cutover for IT leads inside a merger, acquisition or divestiture.",
  atAGlance: {
    bestFor:
      "IT leads in a deal who need two Microsoft 365 tenants to work together until users and the email domain move.",
    includes:
      "Coexistence design, directory visibility, calendar and MailTips sharing, mail routing review, Teams collaboration settings, a domain cutover plan and run, and post-cutover user support.",
    notIncluded:
      "Cybersecurity and identity security services, managed IT or help desk, Microsoft license resale and ERP implementation.",
    howItStarts:
      "A discovery call about both tenants and their domains, then a coexistence design that lists each sharing need and the Microsoft setting that meets it.",
  },
  blocks: [
    {
      type: "prose",
      heading: "How do two Microsoft 365 tenants coexist during a merger?",
      paragraphs: [
        "Two tenants coexist by connecting them through cross-tenant settings, one need at a time. People need to find each other, calendars need to show availability, mail needs to reach the right mailbox, and teams need a place to work together. Microsoft provides a separate feature for each, and no single switch covers all four.",
        "Coexistence is temporary by design. It covers the period between the deal signing and the day the last user and the domain move. MP-365 builds it to be removed, so nothing is left over once the cutover is done.",
      ],
    },
    {
      type: "table",
      heading: "Microsoft 365 tenant coexistence: what each need requires",
      headers: ["Need", "Microsoft feature", "What it does", "Limits to know"],
      rows: [
        [
          "People search and app access",
          "Microsoft Entra cross-tenant synchronization",
          "Creates and updates B2B collaboration users and security groups in the other tenant, and supports people search",
          "Not a migration tool; needs Entra ID P1 for each synced user in the source tenant; syncs users and security groups, not devices or contacts",
        ],
        [
          "Calendar availability and MailTips",
          "Microsoft 365 cross-tenant access policy",
          "Lets each tenant allow the other to see availability, share calendars and read MailTips",
          "Inbound setting, so both tenants must set it; only for organizations hosted in Microsoft 365",
        ],
        [
          "Mail between migrated and unmigrated users",
          "Source mail user that points to the target mailbox",
          "Forwards mail from the source tenant to the migrated mailbox, like hybrid mail flow",
          "Anti-spam and transport rules run in the source tenant first, then the target",
        ],
        [
          "Shared Teams channels",
          "Microsoft Entra B2B direct connect",
          "Lets people join shared channels in the other tenant with their own identity",
          "Microsoft has no plan to extend it beyond Teams shared channels",
        ],
        [
          "File and site access",
          "Microsoft Entra B2B collaboration",
          "Gives guest-style access to SharePoint sites and Teams in the other tenant",
          "Users sign in with the home identity; existing B2B limits apply",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Pre-close and post-close coexistence rules differ",
      paragraphs: [
        "Before a deal closes, the two companies are separate organizations. Microsoft states that cross-tenant synchronization is intended for use within one organization, and that using it across organizations may add compliance duties, including under GDPR. It points to entitlement management for inviting B2B users across organizations.",
        "After close, both tenants belong to one organization and synchronization becomes a fair choice. MP-365 designs the pre-close layer with guest invitations and sharing settings, then switches to synchronization when your legal team confirms the deal.",
      ],
    },
    {
      type: "prose",
      heading: "How do users share calendars between tenants?",
      paragraphs: [
        "Users share calendars between tenants through Microsoft 365 cross-tenant access policy, which is an inbound setting. Each tenant creates a partner policy that allows availability only, or availability with subject and location. Both tenants must create matching policies for sharing in both directions. As of October 2026, Microsoft says this is the new standard and replaces organization relationships.",
      ],
    },
    {
      type: "prose",
      heading: "Setting up calendar sharing",
      level: 3,
      paragraphs: [
        "You need the other tenant's ID, Global Administrator rights to enable the Microsoft 365 collaboration trust, and Exchange or Global Administrator rights to add the calendar capability. You can limit sharing to a security group of users. MailTips and full calendar sharing use their own capabilities.",
      ],
    },
    {
      type: "prose",
      heading: "Why Microsoft is replacing organization relationships",
      level: 3,
      paragraphs: [
        "Organization relationships and sharing policies depend on Exchange Web Services, which Microsoft is deprecating in Exchange Online. Microsoft says the new policy is rolling out and may not have reached every tenant, so check the Message Center. Keep old sharing policies in place for hybrid or on-premises partners, because the new policy does not cover them.",
      ],
    },
    {
      type: "prose",
      heading: "What is a domain cutover in Microsoft 365?",
      paragraphs: [
        "A domain cutover moves an email domain from the source tenant to the target tenant, so users keep their email addresses after the move. A domain can belong to only one tenant, so it must be fully removed from the source before the target can verify it.",
        "Microsoft's rules for removing a domain are strict. The domain cannot be the default domain, and no users, shared mailboxes, resource mailboxes, contacts, Microsoft 365 groups, distribution lists or teams can still use it. No admin account can sign in with it either. Missing one object blocks the removal.",
      ],
    },
    {
      type: "steps",
      heading: "How MP-365 runs a domain cutover",
      steps: [
        {
          name: "List every use of the domain",
          description:
            "Find users, aliases, shared and resource mailboxes, contacts, groups, distribution lists, teams, admin sign-ins and apps that use the domain.",
        },
        {
          name: "Move users to a temporary domain",
          description:
            "Change user names and primary addresses to another domain, such as the onmicrosoft.com domain, using PowerShell for large user counts so none are missed.",
        },
        {
          name: "Move groups and teams",
          description:
            "Change the primary email addresses of Microsoft 365 groups, Teams-connected groups and distribution lists.",
        },
        {
          name: "Change the default domain",
          description:
            "Set another domain as the default in the source tenant, and keep at least one Global Administrator on a different domain.",
        },
        {
          name: "Remove the domain from the source tenant",
          description:
            "Remove it in the Microsoft 365 admin center, and fix any remaining reference that blocks the removal.",
        },
        {
          name: "Add and verify it in the target tenant",
          description:
            "Verify ownership with a DNS TXT record, then add the domain to the target tenant.",
        },
        {
          name: "Switch user addresses and mail routing",
          description:
            "Set each user's sign-in name and primary address to the domain, update the MX record and other mail DNS records, and test mail in both directions.",
        },
        {
          name: "Reconnect devices and apps",
          description:
            "Walk users through Outlook, phone and Teams sign-in, and update apps that use the email address as the username.",
        },
        {
          name: "Remove temporary coexistence settings",
          description:
            "Delete the cross-tenant sync jobs, policies and endpoints you no longer need.",
        },
      ],
    },
    {
      type: "list",
      heading: "What can break at domain cutover",
      items: [
        "**Outlook profiles.** The old primary address is not on the migrated mailbox, so profiles need rebuilding and old autocomplete entries need the x500 addresses.",
        "**Blocked removal.** One alias, shared mailbox or team that still uses the domain stops the removal.",
        "**Temporary sign-in names.** After removal, accounts revert to the onmicrosoft.com address, so users need to know their sign-in during the gap.",
        "**Mail routing.** Mail to the domain fails until MX records point to the target tenant.",
        "**Apps that use the address as a username.** Business applications and integrations need the new sign-in name.",
        "**Phones.** Mobile mail accounts need to be re-added or updated.",
      ],
    },
    {
      type: "list",
      heading: "Coexistence decisions to make before the deal closes",
      items: [
        "**Surviving tenant.** Decide which tenant owns identity, licenses and policy.",
        "**Domain order.** List which domains move, in what order, and what happens to each one in the interim.",
        "**Calendar scope.** Decide which people or departments share calendars before they migrate.",
        "**Guest or member users.** Choose how users from the other company appear in your directory.",
        "**Teams collaboration.** Decide whether shared channels are needed, which requires B2B direct connect.",
        "**Clean-up owner.** Name who removes temporary trust and sync settings after the cutover.",
      ],
    },
    {
      type: "prose",
      heading: "Mail flow between tenants during coexistence",
      paragraphs: [
        "After a mailbox moves, the source tenant keeps a mail user that points to the target mailbox. Mail sent to the old address is forwarded to the new one, much as in a hybrid Exchange setup.",
        "Microsoft states that inbound mail passes through anti-spam, anti-malware, transport rules and journaling in the source tenant first, then the target tenant. MP-365 reviews both rule sets so mail is not held or rewritten twice.",
      ],
    },
    {
      type: "prose",
      heading: "When coexistence is not the right fit",
      paragraphs: [
        "If one tenant will dissolve right after close and few users need to share anything, skip most of the coexistence layer and go straight to [cross-tenant mailbox migration](/services/tenant-to-tenant-migration/mailbox-teams-files/). The wider [tenant to tenant migration](/services/tenant-to-tenant-migration/) page compares Microsoft's tools.",
        "Coexistence also costs design effort, so scope it to the needs you can name. For how MP-365 prices that effort, see [pricing](/pricing/).",
      ],
    },
  ],
  faqs: [
    {
      q: "How do two Microsoft 365 tenants coexist during a merger?",
      a: "They coexist through separate cross-tenant settings: Entra cross-tenant synchronization for people and app access, cross-tenant access policy for calendars and MailTips, source mail users for mail routing, and B2B direct connect for shared Teams channels. Each need has its own feature. MP-365 maps them to your needs.",
    },
    {
      q: "How do users share calendars between tenants?",
      a: "Both tenants create a Microsoft 365 cross-tenant access policy for the other, since it is an inbound setting. Each choice allows availability only, or availability with subject and location. You can limit it to a security group. Hybrid and on-premises partners still use older sharing policies.",
    },
    {
      q: "What is a domain cutover?",
      a: "A domain cutover moves an email domain from one Microsoft 365 tenant to another. You move all users, groups and teams off the domain in the source tenant, remove the domain, then verify and add it to the target tenant with a DNS TXT record. Then you update MX records and user addresses.",
    },
    {
      q: "Can two tenants use the same email domain at once?",
      a: "No. A domain can be verified in only one tenant. Microsoft also states that source and target tenant domains must be unique during cross-tenant mailbox migration. Users therefore have target-tenant addresses during the move, and the domain cutover returns their familiar address at the end.",
    },
    {
      q: "Is Microsoft Entra cross-tenant synchronization enough to merge tenants?",
      a: "No. Microsoft states it is not a migration tool, because the source tenant is still required for users to sign in, and OneDrive and SharePoint data would still need to move. It creates B2B users for access and people search, which helps during coexistence but does not replace migration.",
    },
    {
      q: "What licenses does cross-tenant synchronization need?",
      a: "Each user synchronized from the source tenant needs a Microsoft Entra ID P1 license in that tenant. Synchronizing groups needs Microsoft Entra ID Governance or the Microsoft Entra Suite. Microsoft says the target tenant needs no license for synchronization, though other features there may. MP-365 does not resell licenses.",
    },
    {
      q: "Can we use cross-tenant synchronization before the deal closes?",
      a: "Microsoft states that the feature is intended for use within an organization, and that using it across organizations may add compliance duties, including under GDPR. Before close, MP-365 usually designs coexistence with guest invitations and sharing settings, then confirms with your legal team before turning on synchronization.",
    },
    {
      q: "Why is Microsoft replacing organization relationships for calendar sharing?",
      a: "Organization relationships and sharing policies depend on Exchange Web Services, which Microsoft is deprecating in Exchange Online. Its cross-tenant access policy replaces them between Microsoft 365 organizations. Microsoft says the rollout may not have reached every tenant yet, so check the Message Center for yours.",
    },
    {
      q: "Can people from two tenants use shared Teams channels?",
      a: "Yes. Teams shared channels depend on Microsoft Entra B2B direct connect, which lets people join channels in the other tenant with their own identity. It can run alongside cross-tenant synchronization. Microsoft has no plan to extend B2B direct connect beyond Teams shared channels.",
    },
    {
      q: "What happens to email addresses at cutover?",
      a: "Users get their familiar address back when the domain moves to the target tenant. Until then, they use target-tenant addresses. After removal from the source, source accounts revert to onmicrosoft.com addresses. Outlook profiles on migrated mailboxes need rebuilding, and MP-365 provides the instructions for every user.",
    },
  ],
  closing:
    "Microsoft 365 tenant coexistence works when each sharing need has a named owner and an end date. MP-365 designs the temporary layer, runs the domain cutover and removes the scaffolding so your target tenant stays clean.",
  cta: {
    heading: "Plan your tenant coexistence and cutover",
    body: "Tell MP-365 which domains, tenants and user groups are involved. You will get a coexistence design and a domain cutover plan.",
    text: "Book a free consultation",
  },
};

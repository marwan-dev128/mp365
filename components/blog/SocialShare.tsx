import { LinkedIn, Mail, XSocial } from "@/components/ui/Icons";
import { CopyLinkButton } from "./CopyLinkButton";

/**
 * A compact share row: three plain <a> links plus one copy-link button.
 *
 * No SDKs, no iframes, no third-party script — the LinkedIn/X/mail buttons are
 * ordinary hyperlinks, which is why this costs nothing in bundle size or in
 * Core Web Vitals and cannot leak reader data to a social network on page
 * load. Each carries its own accessible name; the icons are decorative.
 */
export function SocialShare({
  url,
  title,
  className = "",
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const targets = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: LinkedIn,
    },
    {
      name: "X",
      href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      Icon: XSocial,
    },
    {
      name: "email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      Icon: Mail,
    },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="mr-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
        Share
      </span>
      {targets.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          // noopener/noreferrer: the share window must not get a handle on
          // this page via window.opener.
          rel="noopener noreferrer"
          className="mp-press inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink-2 hover:border-[var(--mp-border-azure)] hover:bg-azure-subtle hover:text-azure"
        >
          <Icon className="h-4 w-4" />
          <span className="sr-only">Share this article on {name}</span>
        </a>
      ))}
      <CopyLinkButton url={url} />
    </div>
  );
}

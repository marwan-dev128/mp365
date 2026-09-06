import { LinkedIn, Mail, XSocial } from "@/components/ui/Icons";
import { CopyLinkButton } from "./CopyLinkButton";

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
      <span className="mr-1 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-mp-muted">
        Share
      </span>
      {targets.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-mp-border bg-white text-mp-ink hover:border-mp-ink hover:bg-mp-ink hover:text-white transition-all shadow-2xs"
        >
          <Icon className="h-3.5 w-3.5" />
          <span className="sr-only">Share this article on {name}</span>
        </a>
      ))}
      <CopyLinkButton url={url} />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Check, LinkIcon } from "@/components/ui/Icons";

/**
 * Copy-to-clipboard control for the share row — the only client JS in the
 * share component; the three network targets are plain links.
 *
 * The button keeps a stable accessible name so focus is not disturbed by the
 * copied state; the confirmation is announced once through a polite live
 * region and shown as an icon swap, so success is never conveyed by colour
 * alone. When the Clipboard API is unavailable (insecure origin, older
 * browser) the button does not render, rather than failing silently on click.
 */
export function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clipboard support is a client-only fact, and useSyncExternalStore is how
  // React 19 wants one read: `false` on the server (so the SSR HTML omits the
  // button and hydration matches), the live value on the client. Setting it
  // from an effect would work but triggers a cascading re-render, which the
  // repo's lint config rejects on principle.
  const supported = useSyncExternalStore(
    subscribeNever,
    () => typeof navigator !== "undefined" && !!navigator.clipboard,
    () => false
  );

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  if (!supported) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // A denied clipboard permission is not worth an error state — the URL is
      // in the address bar either way.
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy link to this article"
        className="mp-press inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink-2 hover:border-[var(--mp-border-azure)] hover:bg-azure-subtle hover:text-azure"
      >
        {copied ? (
          <Check className="h-4 w-4 text-azure" />
        ) : (
          <LinkIcon className="h-4 w-4" />
        )}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </>
  );
}

/** Clipboard availability never changes for the life of the document. */
function subscribeNever() {
  return () => {};
}

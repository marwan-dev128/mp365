"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * One delegated listener for the whole site, so server components can be
 * measured without becoming client components:
 *   - any element with data-track="event_name" (plus data-track-* params)
 *   - every tel: and mailto: link, the leads that never touch a form
 *   - outbound booking links
 */
export function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("a, button, [data-track]");
      if (!el) return;

      const named = el.closest<HTMLElement>("[data-track]");
      if (named) {
        const params: Record<string, string> = { page: location.pathname };
        for (const [k, v] of Object.entries(named.dataset)) {
          if (k.startsWith("track") && k !== "track" && v) {
            params[k.slice(5).replace(/^./, (c) => c.toLowerCase())] = v;
          }
        }
        track(named.dataset.track!, params);
      }

      const href = el.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) track("phone_click", { page: location.pathname });
      else if (href.startsWith("mailto:")) track("email_click", { page: location.pathname });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}

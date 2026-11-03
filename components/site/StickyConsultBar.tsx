"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Mobile-only bottom bar. Appears once the visitor has scrolled past the hero
 * and hides at the footer, so it never covers the contact details there.
 * Fixed-position, so it causes no layout shift.
 */
export function StickyConsultBar({ label = "Book a discovery call" }: { label?: string }) {
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 850);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const footer = document.querySelector("footer");
    const io =
      footer && typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0.05 })
        : null;
    if (footer && io) io.observe(footer);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const show = pastHero && !footerVisible;

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-mp-petrol px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/contact/"
        tabIndex={show ? 0 : -1}
        data-track="sticky_cta_click"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-mp-saffron px-5 py-3 text-sm font-bold text-mp-ink transition-colors hover:bg-mp-saffron-hover"
      >
        {label} <span aria-hidden="true">›</span>
      </Link>
    </div>
  );
}

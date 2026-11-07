"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Mobile-only bottom bar. Appears once the visitor has scrolled past the hero
 * and hides at the footer, so it never covers the contact details there.
 * Fixed-position, so it causes no layout shift.
 */
export function StickyConsultBar({ label = "Book a free consultation" }: { label?: string }) {
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
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(0.875rem,env(safe-area-inset-bottom))] transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-[150%]"
      }`}
    >
      <Link
        href="/contact/"
        tabIndex={show ? 0 : -1}
        data-track="sticky_cta_click"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-mp-saffron py-2 pl-2 pr-4 text-[13px] font-bold text-mp-ink shadow-[0_6px_20px_rgba(8,40,48,0.28)] transition-colors hover:bg-mp-saffron-hover"
      >
        <span className="rounded-full bg-mp-ink px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.12em] text-mp-saffron">Free</span>
        {label} <span aria-hidden="true">›</span>
      </Link>
    </div>
  );
}

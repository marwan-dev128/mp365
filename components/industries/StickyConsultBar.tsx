"use client";

import { useEffect, useState } from "react";
import { CONSULT_ANCHOR } from "@/lib/industry-conversion";

/**
 * Mobile-only bottom bar. Appears once the visitor has scrolled past the hero
 * and hides again while the lead form itself is on screen, so it never covers
 * the thing it points at. Fixed-position, so it causes no layout shift.
 */
export function StickyConsultBar({ label = "Talk to a senior engineer" }: { label?: string }) {
  const [pastHero, setPastHero] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const form = document.getElementById(CONSULT_ANCHOR);
    const io = form
      ? new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), {
          threshold: 0.15,
        })
      : null;
    if (form && io) io.observe(form);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const show = pastHero && !formVisible;

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={`#${CONSULT_ANCHOR}`}
        tabIndex={show ? 0 : -1}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-mp-lime px-5 py-3 text-sm font-bold text-mp-ink"
      >
        {label} <span aria-hidden="true">›</span>
      </a>
    </div>
  );
}

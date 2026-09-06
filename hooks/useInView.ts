"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reports whether the referenced element is near the viewport.
 *
 * The homepage runs several always-on animations (two marquees, two carousels with
 * requestAnimationFrame progress loops, autoplaying video). Off-screen they still burn
 * main-thread time and keep the compositor awake, which is the main reason the page felt
 * slow on mid-range laptops. Gating each loop on this hook keeps every animation intact
 * but only while it can actually be seen.
 *
 * `rootMargin` defaults to a generous band so a section is already running by the time it
 * scrolls into view — nothing ever appears frozen.
 */
export function useInView<T extends HTMLElement>(rootMargin = "300px") {
  const ref = useRef<T | null>(null);
  // Default to true so the very first paint (and any browser without IO) behaves exactly
  // as it did before; the observer only ever turns work *off*.
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}

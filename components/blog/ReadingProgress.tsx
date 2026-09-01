"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A 3px progress rail pinned to the very top of the viewport, measuring
 * progress through the *article element* rather than through the document —
 * so the site header, the related-posts grid and the footer CTA do not count
 * as "article read".
 *
 * Deliberately fixed rather than sticky: it sits outside normal flow, so it
 * contributes exactly zero layout shift, and at z-[60] it rides one layer
 * above the sticky header (z-50) without displacing it. Only the filled
 * portion paints, so at scroll-0 the strip is invisible over the announcement
 * bar instead of drawing a grey line across it.
 *
 * Scroll work is rAF-coalesced and reads one getBoundingClientRect per frame;
 * there is no observer per paragraph and no dependency added to the bundle.
 */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const measure = () => {
      frame.current = null;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      let next: number;

      if (rect.height > viewport) {
        // Normal case: 0% when the article's top hits the viewport top, 100%
        // when its bottom reaches the viewport bottom.
        next = -rect.top / (rect.height - viewport);
      } else {
        // Short article — it never fills the viewport, so scrolling past its
        // top can never advance it. Track how much of it has crossed the
        // bottom edge instead, which is what "how far through" means here.
        next = (viewport - rect.top) / rect.height;
      }

      setProgress(Math.min(1, Math.max(0, next)));
    };

    const schedule = () => {
      if (frame.current === null) frame.current = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // The article's height changes when a mobile <details> TOC opens or a
    // web font swaps in; without this the rail would drift out of sync.
    const observer = new ResizeObserver(schedule);
    observer.observe(el);

    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [targetId]);

  const percent = Math.round(progress * 100);

  return (
    <div
      // The rail is decorative reinforcement of the scrollbar, which already
      // conveys position to assistive tech; announcing a value that changes on
      // every frame would be pure noise. Hidden, not labelled.
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-azure to-cyan"
        style={{ transform: `scaleX(${progress})` }}
      />
      {/* Exposed for tests/analytics without paying for a re-rendered label. */}
      <span className="sr-only" data-reading-progress={percent} />
    </div>
  );
}

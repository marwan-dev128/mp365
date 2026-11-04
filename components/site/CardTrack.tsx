"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const GAP = 20;

/**
 * A row of cards that slides sideways. It is a native scroll container with snap
 * points, so swipe and keyboard work and every card is in the server-rendered
 * HTML. The arrows and progress bar only appear when the cards overflow.
 */
export function CardTrack({ label, children }: { label: string; children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [{ canPrev, canNext, progress }, setScroll] = useState({ canPrev: false, canNext: false, progress: 0 });

  const measure = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setScroll({
      canPrev: track.scrollLeft > 4,
      canNext: track.scrollLeft < max - 4,
      progress: max > 0 ? (track.scrollLeft + track.clientWidth) / track.scrollWidth : 1,
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Fires once on observe, which sets the first measurement.
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const slide = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !card) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + GAP),
      behavior: reduced ? "auto" : "smooth",
    });
  };

  const overflows = canPrev || canNext;
  const arrow =
    "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-mp-ink/25 bg-white/70 text-mp-ink shadow-2xs transition-all hover:border-mp-petrol hover:bg-mp-petrol hover:text-white disabled:cursor-default disabled:opacity-30 disabled:hover:border-mp-ink/25 disabled:hover:bg-white/70 disabled:hover:text-mp-ink";

  return (
    <>
      <div
        ref={trackRef}
        role="group"
        aria-label={label}
        onScroll={measure}
        style={{ gap: GAP }}
        className="-my-2 flex snap-x snap-mandatory items-stretch overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {overflows && (
        <div className="relative mt-8 flex items-center justify-center sm:mt-10">
          <div aria-hidden="true" className="h-1.5 w-40 overflow-hidden rounded-full bg-mp-petrol/15 sm:w-56">
            <div
              className="h-full rounded-full bg-mp-petrol transition-[width] duration-200"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-2.5 sm:flex">
            <button type="button" onClick={() => slide(-1)} disabled={!canPrev} aria-label="Previous" className={arrow}>
              <svg fill="none" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="currentColor" />
              </svg>
            </button>
            <button type="button" onClick={() => slide(1)} disabled={!canNext} aria-label="Next" className={arrow}>
              <svg fill="none" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface CarouselItem {
  id: string;
  pill: string;
  title: string;
  description: string;
  previewType: "transactions" | "taxes" | "disruption" | "approvals" | "personalization" | "wallet";
}

const ITEMS: CarouselItem[] = [
  {
    id: "matching",
    pill: "TRANSACTION MATCHING",
    title: "Every transaction, exactly where it belongs",
    description:
      "Receipts matched, transactions coded, and your ERP updated in real time. Month-end has never been easier.",
    previewType: "transactions",
  },
  {
    id: "taxes",
    pill: "RECOVERABLE TAXES",
    title: "Reclaim everything that's yours",
    description:
      "Automated cross-border VAT extraction and compliance-ready digital invoices that maximize your returns.",
    previewType: "taxes",
  },
  {
    id: "disruption",
    pill: "DISRUPTION ALERTS AND REBOOKING",
    title: "Disruption? What disruption?",
    description:
      "Instant re-booking when flights delay or cancel. 24/7 human concierge backed by autonomous AI.",
    previewType: "disruption",
  },
  {
    id: "approvals",
    pill: "APPROVAL CONTROLS",
    title: "Approvals without the chasing",
    description:
      "Smart routing for multi-tier approvals, policy exceptions, and team budgets without endless Slack threads.",
    previewType: "approvals",
  },
  {
    id: "personalization",
    pill: "PERSONALIZATION",
    title: "Already knows, already handled",
    description:
      "Window seat or aisle? Loyalty tier? Visa required? Perk has the answers before you even think to ask the questions.",
    previewType: "personalization",
  },
  {
    id: "tap-to-pay",
    pill: "TAP TO PAY",
    title: "Cards in Apple & Google Wallet in seconds",
    description:
      "Instant corporate cards issued with built-in policy rules and automatic receipt capture.",
    previewType: "wallet",
  },
];

export function SolutionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    if (scrollRef.current) {
      const el = scrollRef.current.children[idx] as HTMLElement;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = activeIndex > 0 ? activeIndex - 1 : ITEMS.length - 1;
    handleSelect(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex < ITEMS.length - 1 ? activeIndex + 1 : 0;
    handleSelect(nextIdx);
  };

  return (
    <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-20 sm:py-28 overflow-hidden">
      {/* ------------------------------------------------ Section Header */}
      <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
        <h2 className="font-display text-[clamp(34px,4.6vw,56px)] font-bold leading-[1.08] tracking-[-0.035em] text-[#14140f]">
          111,800* tasks handled everyday.
          <br />
          None of them yours.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-[16px] leading-[1.6] text-[#55554d]">
          Every receipt matched, every exception flagged, every approval routed. Perk AI handles every bit of work that was never really your job in the first place.
        </p>
      </div>

      {/* ------------------------------------------------ Horizontal Carousel */}
      <div
        ref={scrollRef}
        className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {ITEMS.map((item, idx) => {
          const isActive = idx === activeIndex;

          if (isActive) {
            return (
              /* Expanded Active Card */
              <div
                key={item.id}
                className="w-[88vw] sm:w-[580px] lg:w-[640px] shrink-0 rounded-[28px] border-2 border-[#beff50] bg-[#fbfbf7] p-8 sm:p-9 flex flex-col justify-between min-h-[390px] transition-all duration-300 shadow-xs"
              >
                <div>
                  <span className="inline-block rounded-full border border-[#14140f]/30 bg-transparent px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[#14140f]">
                    + {item.pill}
                  </span>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-8">
                  {/* Left Column: Heading + Description + Link */}
                  <div className="max-w-[300px]">
                    <h3 className="font-display text-[22px] sm:text-[24px] font-bold leading-[1.2] tracking-[-0.03em] text-[#14140f]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-[1.6] text-[#55554d]">
                      {item.description}
                    </p>
                    <div className="mt-5">
                      <Link
                        href="/contact/"
                        className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#14140f] hover:underline"
                      >
                        <span>Read more</span>
                        <span className="text-sm font-semibold">›</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup */}
                  <div className="flex-1 w-full md:max-w-[240px] flex flex-col gap-2.5">
                    {item.previewType === "transactions" && (
                      <>
                        {[
                          { name: "Sweetgreen", cat: "Meals", amount: "$22.75" },
                          { name: "Uber", cat: "Ride", amount: "$35.40" },
                          { name: "Airbnb", cat: "Hotel", amount: "$160.25" },
                          { name: "Starbucks", cat: "Coffee", amount: "$12.80" },
                        ].map((tx) => (
                          <div
                            key={tx.name}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-white/70 border border-[#14140f]/5 text-xs shadow-2xs"
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-[#14140f]/10 flex items-center justify-center text-[10px] font-bold text-[#14140f]">
                                {tx.name[0]}
                              </span>
                              <span className="font-medium text-[#14140f]">{tx.name}</span>
                            </div>
                            <span className="font-semibold text-[#14140f]">{tx.amount}</span>
                          </div>
                        ))}
                      </>
                    )}

                    {item.previewType === "taxes" && (
                      <div className="rounded-xl bg-white/70 border border-[#14140f]/5 p-4 text-xs flex flex-col gap-2">
                        <span className="text-[10px] uppercase font-bold text-[#14140f]/60 tracking-wider">VAT Recovery</span>
                        <p className="font-bold text-lg text-[#14140f]">$1,420.00</p>
                        <span className="inline-block text-[10px] text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-full w-fit">
                          ✓ 100% Tax Compliant
                        </span>
                      </div>
                    )}

                    {item.previewType === "disruption" && (
                      <div className="rounded-xl bg-white/70 border border-[#14140f]/5 p-4 text-xs flex flex-col gap-2">
                        <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">Flight Delayed</span>
                        <p className="font-semibold text-[#14140f]">LH 430 → BA 118</p>
                        <span className="text-[11px] text-[#55554d]">Auto-rebooked seamlessly</span>
                      </div>
                    )}

                    {item.previewType !== "transactions" &&
                      item.previewType !== "taxes" &&
                      item.previewType !== "disruption" && (
                        <div className="rounded-xl bg-white/70 border border-[#14140f]/5 p-4 text-xs flex flex-col gap-2">
                          <span className="text-[10px] uppercase font-bold text-[#14140f]/60 tracking-wider">Perk Autonomous AI</span>
                          <p className="font-semibold text-[#14140f]">Instant Policy Check</p>
                          <span className="text-[11px] text-emerald-700 font-medium">100% Auto-verified</span>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            );
          }

          /* Collapsed Inactive Card */
          return (
            <div
              key={item.id}
              onClick={() => handleSelect(idx)}
              className="w-[260px] sm:w-[280px] shrink-0 rounded-[28px] border border-[#e8e8dc]/70 bg-[#f6f6ee] p-7 sm:p-8 flex flex-col justify-between min-h-[390px] cursor-pointer hover:bg-[#f0f0e6] transition-colors duration-200"
            >
              <div>
                <span className="inline-block rounded-full border border-[#14140f]/30 bg-transparent px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.1em] text-[#14140f] line-clamp-1">
                  + {item.pill}
                </span>
              </div>

              <div>
                <h3 className="font-display text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-[-0.03em] text-[#14140f]">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* ------------------------------------------------ Controls: Dots & Arrows */}
      <div className="mt-8 flex items-center justify-between px-2">
        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5">
          {ITEMS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              className={`transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? "w-6 h-1.5 bg-[#14140f] rounded-full"
                  : "w-1.5 h-1.5 bg-[#14140f]/20 hover:bg-[#14140f]/60 rounded-full"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Circular Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-[#14140f]/30 flex items-center justify-center text-[#14140f] hover:border-black hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <span className="text-base font-semibold leading-none -ml-0.5">‹</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-[#14140f]/30 flex items-center justify-center text-[#14140f] hover:border-black hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <span className="text-base font-semibold leading-none ml-0.5">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}

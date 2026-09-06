"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { HeaderAnimatedValue } from "@/components/HeaderAnimatedValue";
import defaultData from "@/store/home/features.json";

export interface FeatureCard {
  icon: string;
  alt: string;
  category: string;
  title: string | React.ReactNode;
  description: string;
}

export interface FeatureGrid4ColProps {
  cards?: FeatureCard[];
  subtitleNumber?: string;
}

const DEFAULT_CARDS: FeatureCard[] = defaultData.cards;

export function FeatureGrid4Col({
  cards = DEFAULT_CARDS,
  subtitleNumber = defaultData.subtitleNumber || "20",
}: FeatureGrid4ColProps = {}) {
  const [animatedValue, setAnimatedValue] = useState(subtitleNumber);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const from = 0;
          const to = 20;
          const duration = 1200;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = from + (to - from) * easeProgress;
            setAnimatedValue(currentVal.toFixed(0));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setAnimatedValue(to.toFixed(0));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="w-full relative bg-white py-12 sm:py-16" data-component="fourCardsContainer">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ Header with Animated Value */}
        <HeaderAnimatedValue years={animatedValue} />

        {/* ------------------------------------------------ Four Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {cards.map((card) => (
            <div key={card.category} className="w-full">
              <div
                className="w-full relative card-filled flex h-full flex-col justify-start rounded-[22px] md:rounded-[28px] bg-mp-parchment p-6 sm:p-7 md:p-8 transition-transform duration-200 hover:-translate-y-1"
                data-component="cardFilled"
              >
                {/* Icon */}
                <div className="pb-6">
                  <div className="flex items-center justify-start size-[30px] bg-transparent">
                    <Image
                      src={card.icon}
                      alt={card.alt}
                      width={30}
                      height={30}
                      className="size-[30px] object-contain"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="pb-2.5">
                  <span className="text-mp-petrol-2 text-[11px] md:text-[11.5px] font-bold uppercase tracking-[0.14em]">
                    {card.category}
                  </span>
                </div>

                {/* Title */}
                <div className="pb-3.5">
                  <h3
                    className="font-display text-mp-petrol text-[20px] md:text-[22px] font-bold leading-[1.2] tracking-[-0.025em] card-filled-title break-words"
                    lang="en-us"
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-mp-secondary text-[13px] md:text-[13.5px] font-normal leading-[1.55]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

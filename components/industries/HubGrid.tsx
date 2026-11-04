"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "@/components/RichText";

export type HubGridItem = {
  href: string;
  name: string;
  summary: string;
  image: string;
  group: string;
};

/**
 * The cards on the Solutions and Industries overviews. Every card is in the
 * server-rendered HTML; the pills only narrow what is shown.
 */
export function HubGrid({
  id,
  eyebrow,
  title,
  subtitle,
  linkText,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  linkText: string;
  items: HubGridItem[];
}) {
  const groups = [...new Set(items.map((i) => i.group))];
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? items.filter((i) => i.group === active) : items;

  const pill = (label: string, value: string | null, count: number) => (
    <button
      key={label}
      type="button"
      aria-pressed={active === value}
      onClick={() => setActive(value)}
      className={`cursor-pointer rounded-full px-4 py-2 text-[12.5px] transition-all duration-200 sm:px-5 sm:text-[13px] ${
        active === value
          ? "bg-mp-lime font-bold text-mp-ink shadow-2xs"
          : "font-medium text-mp-ink hover:bg-white/60 hover:text-mp-petrol"
      }`}
    >
      {label} ({count})
    </button>
  );

  return (
    <section id={id} className="w-full scroll-mt-28 py-10 sm:py-16">
      <div className="mb-10 flex flex-col gap-6 sm:mb-12">
        <div>
          <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.14em] text-mp-teal sm:text-[12.5px]">
            {eyebrow}
          </span>
          <h2 className="font-display text-[28px] font-extrabold leading-tight tracking-[-0.03em] text-mp-petrol sm:text-[36px] lg:text-[42px]">
            {title}
          </h2>
          <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-mp-secondary sm:text-[15.5px]">{subtitle}</p>
        </div>
        <div
          role="group"
          aria-label={`Filter ${eyebrow.toLowerCase()}`}
          className="flex w-fit max-w-full flex-wrap items-center gap-1 rounded-[24px] border border-mp-border bg-mp-parchment p-1.5"
        >
          {pill("All", null, items.length)}
          {groups.map((g) => pill(g, g, items.filter((i) => i.group === g).length))}
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => (
          <article
            key={item.href}
            className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] p-7 transition-transform duration-200 hover:-translate-y-1 sm:min-h-[480px] sm:p-8"
          >
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1280px) 440px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-mp-petrol via-mp-petrol/70 to-mp-petrol/5" />
            <div className="relative z-[2] flex flex-col justify-end">
              <h3 className="font-display text-[22px] font-bold leading-tight text-white sm:text-[24px]">
                <Link href={item.href}>{item.name}</Link>
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.55] text-white/90">
                <RichText text={item.summary} />
              </p>
              <Link
                href={item.href}
                aria-label={`${linkText}: ${item.name}`}
                className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-white/50 bg-mp-petrol/45 px-5 py-2 text-[13px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <span>{linkText}</span>
                <span aria-hidden="true" className="text-xs">›</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

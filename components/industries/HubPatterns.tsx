import React from "react";
import Link from "next/link";
import { Check, ArrowUpRight } from "@/components/ui/Icons";

export type Pattern = {
  step: string;
  title: string;
  subtitle: string;
  body: string;
  linkText: string;
  linkHref: string;
};

export function HubPatterns({
  eyebrow,
  title,
  subtitle,
  patterns,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  patterns: Pattern[];
}) {
  return (
    <section className="w-full bg-mp-parchment/60 py-16 sm:py-20 border-y border-mp-border">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="text-[12px] sm:text-[12.5px] font-bold uppercase tracking-[0.14em] text-mp-teal block mb-2">
            {eyebrow}
          </span>
          <h2 className="font-display text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold tracking-[-0.03em] text-mp-petrol leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-mp-secondary leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {patterns.map((pattern) => (
            <div
              key={pattern.step}
              className="group flex flex-col justify-between rounded-[24px] sm:rounded-[28px] bg-white p-7 sm:p-8 border border-mp-border shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display text-[26px] sm:text-[30px] font-extrabold text-mp-mint leading-none">
                    {pattern.step}
                  </span>
                  <div className="flex size-9 items-center justify-center rounded-full bg-mp-petrol/5 text-mp-petrol">
                    <Check className="h-4 w-4" />
                  </div>
                </div>

                <span className="text-[11.5px] font-bold uppercase tracking-wider text-mp-teal block mb-1">
                  {pattern.subtitle}
                </span>
                <h3 className="font-display text-[20px] sm:text-[22px] font-bold text-mp-ink leading-snug">
                  {pattern.title}
                </h3>

                <p className="mt-3.5 text-[13.5px] sm:text-[14px] leading-[1.65] text-mp-secondary">
                  {pattern.body}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-mp-border">
                <Link
                  href={pattern.linkHref}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-mp-petrol hover:text-mp-teal transition-colors"
                >
                  <span>{pattern.linkText}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import defaultData from "@/store/home/editorial.json";

export interface InsightItem {
  title: string;
  description: string;
  linkText: string;
  href: string;
  image: string;
}

export interface EditorialInsightCardsProps {
  title?: string;
  subtitle?: string;
  insights?: InsightItem[];
}

const DEFAULT_INSIGHTS: InsightItem[] = defaultData.insights;

export function EditorialInsightCards({
  title = defaultData.title,
  subtitle = defaultData.subtitle,
  insights = DEFAULT_INSIGHTS,
}: EditorialInsightCardsProps = {}) {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
        {/* ------------------------------------------------ Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-18">
          <h2 className="font-display text-[clamp(36px,5vw,58px)] font-bold leading-[1.06] tracking-[-0.035em] text-mp-petrol">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-[15px] sm:text-[16px] leading-[1.6] text-mp-secondary">
              {subtitle}
            </p>
          )}
        </div>

        {/* ------------------------------------------------ 3-Column Editorial Cards */}
        <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
          {insights.map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] sm:rounded-[32px] border border-mp-border/70 bg-mp-parchment p-7 sm:p-9 flex flex-col justify-between transition-colors duration-200"
          >
            <div>
              {/* Title */}
              <h3 className="font-display text-[21px] sm:text-[23px] font-bold leading-[1.2] tracking-[-0.03em] text-mp-ink max-w-[280px]">
                {item.title}
              </h3>

              {/* Graphic Illustration */}
              <div className="my-8 sm:my-12 flex items-center justify-center h-[180px] sm:h-[200px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={220}
                  height={200}
                  className="max-h-[190px] w-auto object-contain"
                />
              </div>
            </div>

            <div>
              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-mp-secondary">
                {item.description}
              </p>

              {/* Action Link */}
              <div className="mt-5">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-mp-ink underline underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  <span>{item.linkText}</span>
                  <span className="text-sm font-semibold">›</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

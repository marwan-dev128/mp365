import Link from "next/link";
import Image from "next/image";
import defaultData from "@/store/home/proof-metrics.json";

export interface ProofMetric {
  value: string;
  label: string;
}

export interface ProofMetricsBandProps {
  logo?: {
    src: string;
    alt: string;
  };
  metrics?: ProofMetric[];
  quote?: string;
  author?: string;
  caseStudyHref?: string;
}

export function ProofMetricsBand({
  logo = defaultData.logo,
  metrics = defaultData.metrics,
  quote = defaultData.quote,
  author = defaultData.author,
  caseStudyHref = defaultData.caseStudyHref,
}: ProofMetricsBandProps = {}) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-4">
      <div className="rounded-[28px] border border-mp-border bg-mp-card p-7 sm:p-9 transition-colors">
        <div className="grid gap-6 md:grid-cols-[auto_auto_auto_1fr_auto] md:items-center">
          {/* Logo */}
          {logo && (
            <div className="flex items-center pr-6 md:border-r md:border-mp-border">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={45}
                className="h-auto max-h-[32px] w-auto max-w-[150px] object-contain"
              />
            </div>
          )}

          {/* Metrics */}
          {metrics &&
            metrics.map((m, idx) => (
              <div key={idx} className="pr-6 md:border-r md:border-mp-border">
                <p className="font-display text-[32px] sm:text-[38px] font-extrabold tracking-[-0.03em] text-mp-ink leading-none">
                  {m.value}
                </p>
                <p className="mt-1 text-[12px] font-medium text-mp-muted">{m.label}</p>
              </div>
            ))}

          {/* Quote & Speaker */}
          <div className="px-2">
            {quote && (
              <p className="text-[13.5px] sm:text-[14.5px] font-normal leading-[1.6] text-mp-ink">
                {quote}
              </p>
            )}
            {author && (
              <p className="mt-1 text-[12px] font-medium text-mp-muted">
                {author}
              </p>
            )}
          </div>

          {/* Case Study Link */}
          {caseStudyHref && (
            <div className="flex md:justify-end">
              <Link
                href={caseStudyHref}
                className="mp-press inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-mp-ink hover:underline whitespace-nowrap"
              >
                <span>View case study</span>
                <span className="text-sm">›</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

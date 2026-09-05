import Link from "next/link";
import Image from "next/image";

export function ProofMetricsBand() {
  return (
    <section className="mx-auto max-w-[1360px] px-5 sm:px-8 py-6">
      <div className="rounded-[28px] border border-[#e0e0d2] bg-[#ebebe0] p-7 sm:p-9 transition-colors">
        <div className="grid gap-6 md:grid-cols-[auto_auto_auto_1fr_auto] md:items-center">
          {/* Fabletics Logo */}
          <div className="flex items-center pr-6 md:border-r md:border-[#d8d8ca]">
            <Image
              src="/images/perk/logos/fabletics.webp"
              alt="Fabletics"
              width={160}
              height={45}
              className="h-auto max-h-[32px] w-auto max-w-[150px] object-contain"
            />
          </div>

          {/* Metric 1 */}
          <div className="pr-6 md:border-r md:border-[#d8d8ca]">
            <p className="font-display text-[32px] sm:text-[38px] font-extrabold tracking-[-0.03em] text-[#14140f] leading-none">
              60hrs
            </p>
            <p className="mt-1 text-[12px] font-medium text-[#66665e]">manual work saved</p>
          </div>

          {/* Metric 2 */}
          <div className="pr-6 md:border-r md:border-[#d8d8ca]">
            <p className="font-display text-[32px] sm:text-[38px] font-extrabold tracking-[-0.03em] text-[#14140f] leading-none">
              $37.5K
            </p>
            <p className="mt-1 text-[12px] font-medium text-[#66665e]">savings per year</p>
          </div>

          {/* Quote & Speaker */}
          <div className="px-2">
            <p className="text-[13.5px] sm:text-[14.5px] font-normal leading-[1.6] text-[#14140f]">
              &ldquo;It’s not just about visibility—it’s about being able to act on it. If one entity is spending double on flights compared to another, I can see that immediately and investigate.&rdquo;
            </p>
            <p className="mt-1 text-[12px] font-medium text-[#66665e]">
              Sören Heise, VP of Financial Planning Europe at Fabletics
            </p>
          </div>

          {/* Case Study Link */}
          <div className="flex md:justify-end">
            <Link
              href="/contact/"
              className="mp-press inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#14140f] hover:underline whitespace-nowrap"
            >
              <span>View case study</span>
              <span className="text-sm">›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

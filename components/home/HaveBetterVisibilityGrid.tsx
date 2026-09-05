import Image from "next/image";
import Link from "next/link";

export function HaveBetterVisibilityGrid() {
  return (
    <section id="visibility" className="w-full bg-white py-16 sm:py-24" data-component="cardsContainer">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        {/* ------------------------------------------------ Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[34px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.08] tracking-[-0.03em] text-[#14140f]">
            Have better visibility
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[15px] sm:text-[16.5px] leading-[1.5] text-[#5a5a52]">
            Stay on top of things even as they move. In-depth reports and traveler maps give you insight on just how far
            your business is going.
          </p>
        </div>

        {/* ------------------------------------------------ 3-Card Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {/* Card 1: Flexible trips (Photo Background) */}
          <div className="group relative flex flex-col justify-end overflow-hidden rounded-[28px] p-7 sm:p-8 min-h-[480px] sm:min-h-[520px] transition-transform duration-200 hover:-translate-y-1">
            <Image
              src="/images/perk/visibility/flexible_trips.webp"
              alt="Flexible trips"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 380px, (min-width: 768px) 33vw, 100vw"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-[1]" />

            <div className="relative z-[2] flex flex-col justify-end">
              <h3 className="font-display text-[23px] sm:text-[25px] font-bold text-white leading-tight">
                Flexible trips
              </h3>
              <p className="mt-2.5 text-[13px] sm:text-[13.5px] leading-[1.5] text-white/90">
                Cancel trips and process refunds in just a few clicks. With FlexiTravel, cancellations are covered so
                your business gets at least 80% back guaranteed. *exact refund amount depends on cancellation rules of
                booking
              </p>
              <Link
                href="/contact/"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-black/40 backdrop-blur-sm px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-white/20 self-start"
              >
                <span>Learn more</span>
                <span className="text-xs">›</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Travel tracker (Map Top Graphic) */}
          <div className="group flex flex-col justify-between rounded-[28px] bg-[#f6f6ee] p-6 sm:p-7 min-h-[480px] sm:min-h-[520px] transition-transform duration-200 hover:-translate-y-1">
            {/* Top Media: Map UI with Edward Simons & Amy Adams */}
            <div className="w-full aspect-[506/316] relative rounded-[20px] overflow-hidden bg-black">
              <Image
                src="/images/perk/visibility/travel_tracker.webp"
                alt="Travel tracker interactive map"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 350px, (min-width: 768px) 33vw, 100vw"
              />
            </div>

            {/* Bottom Content */}
            <div className="mt-6 flex flex-1 flex-col justify-between">
              <div>
                <h3 className="font-display text-[23px] sm:text-[25px] font-bold text-[#14140f] leading-tight">
                  Travel tracker
                </h3>
                <p className="mt-2.5 text-[13px] sm:text-[13.5px] leading-[1.55] text-[#5a5a52]">
                  Keep an eye on your teams all over the world. Our interactive map lets you see where your people are
                  traveling for work.
                </p>
              </div>

              <Link
                href="/contact/"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-[#14140f]/25 bg-transparent px-5 py-2 text-[13px] font-medium text-[#14140f] transition-colors hover:bg-black/5 self-start"
              >
                <span>Learn more</span>
                <span className="text-xs">›</span>
              </Link>
            </div>
          </div>

          {/* Card 3: In-depth reports (Big Title Variant) */}
          <div className="group flex flex-col justify-between rounded-[28px] bg-[#f6f6ee] p-7 sm:p-8 min-h-[480px] sm:min-h-[520px] transition-transform duration-200 hover:-translate-y-1">
            {/* Big Headline */}
            <div>
              <h3 className="font-display text-[32px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[#14140f]">
                In-depth reports
              </h3>
            </div>

            {/* Bottom Description & Button */}
            <div className="mt-auto flex flex-col justify-end">
              <p className="pt-16 sm:pt-20 text-[13px] sm:text-[13.5px] leading-[1.55] text-[#5a5a52]">
                Save up to 15% on work travel with in-depth insights on travel spend and booking behaviors, policy
                compliance and offset carbon—all laid out clearly on one neat dashboard.
              </p>
              <Link
                href="/contact/"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-[#14140f]/25 bg-transparent px-5 py-2 text-[13px] font-medium text-[#14140f] transition-colors hover:bg-black/5 self-start"
              >
                <span>Learn more</span>
                <span className="text-xs">›</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

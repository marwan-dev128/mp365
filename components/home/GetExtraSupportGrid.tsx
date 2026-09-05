import Image from "next/image";
import Link from "next/link";

export function GetExtraSupportGrid() {
  return (
    <section id="support" className="w-full bg-white py-16 sm:py-24" data-component="fourCardsContainer">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* ------------------------------------------------ Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[34px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.08] tracking-[-0.03em] text-[#14140f]">
            Get extra support
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[15px] sm:text-[16.5px] leading-[1.5] text-[#5a5a52]">
            From events to emergencies, we support you in getting your teams there and back, safe and sound.
          </p>
        </div>

        {/* ------------------------------------------------ 4-Card Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {/* Card 1: 24/7 customer support (Electric Lime Highlight Card) */}
          <div className="group flex flex-col justify-between rounded-[28px] bg-[#beff50] p-6 sm:p-7 min-h-[480px] sm:min-h-[510px] transition-transform duration-200 hover:-translate-y-1">
            {/* Top Media: Airplane Seats Illustration */}
            <div className="w-full aspect-[1.6] relative rounded-[18px] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/perk/support/customer_support.webp"
                alt="24/7 customer support"
                fill
                className="object-contain object-center"
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
              />
            </div>

            {/* Bottom Content */}
            <div className="mt-6 flex flex-1 flex-col justify-between">
              <div>
                <h3 className="font-display text-[21px] sm:text-[23px] font-bold text-[#14140f] leading-tight">
                  24/7 customer support
                </h3>
                <p className="mt-3 text-[13px] sm:text-[13.5px] leading-[1.55] text-[#14140f]/85">
                  Our customer support works around the clock so you don&rsquo;t have to. Powered by real people, we make
                  sure your teams are looked after, whatever the problem. Whatever the time zone.
                </p>
              </div>

              <Link
                href="/contact/"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-black/25 bg-transparent px-5 py-2 text-[13px] font-medium text-[#14140f] transition-colors hover:bg-black/10 self-start"
              >
                <span>Learn more</span>
                <span className="text-xs">›</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Dedicated account support (Warm Cream Card, No Button) */}
          <div className="group flex flex-col justify-between rounded-[28px] bg-[#f6f6ee] p-6 sm:p-7 min-h-[480px] sm:min-h-[510px] transition-transform duration-200 hover:-translate-y-1">
            {/* Top Media: Agent with Headset */}
            <div className="w-full aspect-[1.6] relative rounded-[18px] overflow-hidden bg-black/5">
              <Image
                src="/images/perk/support/account_support.webp"
                alt="Dedicated account support"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
              />
            </div>

            {/* Bottom Content */}
            <div className="mt-6 flex flex-1 flex-col justify-start">
              <h3 className="font-display text-[21px] sm:text-[23px] font-bold text-[#14140f] leading-tight">
                Dedicated account support
              </h3>
              <p className="mt-3 text-[13px] sm:text-[13.5px] leading-[1.55] text-[#5a5a52]">
                Sign up to a Premium or Pro account and get access to a personal account manager and committed
                implementation specialist to assist you during onboarding and beyond.
              </p>
            </div>
          </div>

          {/* Card 3: Emergency cover (Big Title Variant) */}
          <div className="group flex flex-col justify-between rounded-[28px] bg-[#f6f6ee] p-6 sm:p-7 min-h-[480px] sm:min-h-[510px] transition-transform duration-200 hover:-translate-y-1">
            {/* Big Headline */}
            <div>
              <h3 className="font-display text-[28px] sm:text-[32px] font-bold leading-[1.12] tracking-[-0.03em] text-[#14140f]">
                Emergency
                <br />
                cover
              </h3>
            </div>

            {/* Bottom Description & Button */}
            <div className="mt-auto flex flex-col justify-end">
              <p className="pt-16 sm:pt-24 text-[13px] sm:text-[13.5px] leading-[1.55] text-[#5a5a52]">
                Partner with one of our hand-picked Duty of Care providers so you&rsquo;re covered in case of overseas
                emergencies&mdash;from lost passport to natural disaster.
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

          {/* Card 4: Group travel and events (Auditorium Seats) */}
          <div className="group flex flex-col justify-between rounded-[28px] bg-[#f6f6ee] p-6 sm:p-7 min-h-[480px] sm:min-h-[510px] transition-transform duration-200 hover:-translate-y-1">
            {/* Top Media: Rows of Green Seats */}
            <div className="w-full aspect-[1.6] relative rounded-[18px] overflow-hidden bg-black/5">
              <Image
                src="/images/perk/support/group_travel.webp"
                alt="Group travel and events"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
              />
            </div>

            {/* Bottom Content */}
            <div className="mt-6 flex flex-1 flex-col justify-between">
              <div>
                <h3 className="font-display text-[21px] sm:text-[23px] font-bold text-[#14140f] leading-tight">
                  Group travel and events
                </h3>
                <p className="mt-3 text-[13px] sm:text-[13.5px] leading-[1.55] text-[#5a5a52]">
                  Need help organizing your next big event? We can take bookings of nine or more off your hands so your
                  business gets the best rates&mdash;and your teams board the same flight.
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
        </div>
      </div>
    </section>
  );
}

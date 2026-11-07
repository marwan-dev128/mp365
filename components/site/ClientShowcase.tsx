import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Client = { name: string; logo: string };

/**
 * The Clients page's logo wall, on Home's card language: logos sit in tall
 * parchment tiles, with two named results and a call to action woven into the
 * same grid so it reads as a showcase, not a strip of logos.
 */
export function ClientShowcase({ clients }: { clients: Client[] }) {
  const tiles: { key: string; wide?: boolean; node: ReactNode }[] = clients.map(
    (client) => ({
      key: client.name,
      node: <LogoTile client={client} />,
    }),
  );

  tiles.splice(0, 0, {
    key: "otis",
    wide: true,
    node: (
      <ResultTile
        tone="mint"
        value="13h to 4h"
        label="OTIS Elevator"
        body="Dynamics deployment time, with manual errors down to near zero."
      />
    ),
  });
  tiles.splice(Math.min(5, tiles.length), 0, {
    key: "carlisle",
    wide: true,
    node: (
      <ResultTile
        tone="dark"
        value="1 week"
        label="Carlisle Construction"
        body="To stabilize Dynamics and SharePoint operations, with no long discovery phase."
      />
    ),
  });
  tiles.push({
    key: "cta",
    node: (
      <Link
        href="/contact/"
        className="group flex min-h-[150px] flex-col justify-between rounded-[24px] bg-mp-saffron p-5 transition-transform duration-200 hover:-translate-y-1 sm:min-h-[190px] sm:rounded-[28px] sm:p-6"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-mp-ink/70">
          Free consultation
        </span>
        <span className="font-display text-[19px] font-bold leading-[1.15] tracking-[-0.02em] text-mp-ink sm:text-[22px]">
          Your team next?{" "}
          <span
            aria-hidden="true"
            className="inline-block transition-transform group-hover:translate-x-1"
          >
            ›
          </span>
        </span>
      </Link>
    ),
  });

  return (
    <section
      aria-labelledby="client-showcase-heading"
      className="w-full bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2
            id="client-showcase-heading"
            className="font-display text-[clamp(30px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-0.035em] text-mp-petrol"
          >
            Organizations MP-365 works with
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.6] text-mp-secondary sm:text-[16px]">
            Construction, manufacturing, education and government teams that run
            Dynamics 365, SharePoint and Microsoft 365.
          </p>
        </div>
        <ul className="grid grid-flow-dense grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
          {tiles.map((t) => (
            <li key={t.key} className={t.wide ? "col-span-2" : ""}>
              {t.node}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LogoTile({ client }: { client: Client }) {
  return (
    <div className="group flex h-full min-h-[150px] flex-col items-center justify-center gap-4 rounded-[24px] bg-mp-parchment p-5 transition-transform duration-200 hover:-translate-y-1 sm:min-h-[190px] sm:rounded-[28px] sm:p-6">
      <div className="relative h-14 w-full max-w-[170px] sm:h-16">
        <Image
          src={client.logo}
          alt={client.name}
          fill
          sizes="(min-width: 768px) 170px, 40vw"
          className="object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.12em] text-mp-muted">
        {client.name}
      </p>
    </div>
  );
}

function ResultTile({
  tone,
  value,
  label,
  body,
}: {
  tone: "mint" | "dark";
  value: string;
  label: string;
  body: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`flex h-full min-h-[150px] flex-col justify-between gap-6 rounded-[24px] p-6 transition-transform duration-200 hover:-translate-y-1 sm:min-h-[190px] sm:rounded-[28px] sm:p-7 ${
        dark ? "bg-mp-petrol text-white" : "bg-mp-band text-mp-ink"
      }`}
    >
      <p
        className={`text-[11px] font-bold uppercase tracking-[0.14em] ${dark ? "text-mp-mint" : "text-mp-ink/70"}`}
      >
        {label}
      </p>
      <div>
        <p className="font-display text-[40px] font-bold leading-none tracking-[-0.04em] sm:text-[52px]">
          {value}
        </p>
        <p
          className={`mt-3 max-w-sm text-[13.5px] leading-[1.55] ${dark ? "text-white/75" : "text-mp-ink/80"}`}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

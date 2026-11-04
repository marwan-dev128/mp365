import Image from "next/image";
import type { ReactNode } from "react";

/**
 * The tall card from Home's "How MP-365 runs a project" row. A row mixes three
 * looks, so it never reads as one repeated box: a mint card, parchment cards with
 * an illustration, and cards with a large title and no picture.
 */
export type HomeCardLook = "mint" | "picture" | "headline";

const LOOKS: HomeCardLook[] = ["mint", "picture", "headline", "picture", "picture", "headline", "picture", "headline"];

export function lookForIndex(index: number): HomeCardLook {
  return LOOKS[index % LOOKS.length];
}

export function HomeCard({
  look,
  image,
  eyebrow,
  title,
  children,
  footer,
  className = "",
}: {
  look: HomeCardLook;
  image?: string;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}) {
  const mint = look === "mint";
  const shell = `group flex min-h-[360px] flex-col rounded-[28px] p-6 transition-transform duration-200 hover:-translate-y-1 sm:min-h-[480px] sm:p-7 ${
    mint ? "bg-mp-band" : "bg-mp-parchment"
  } ${className}`;
  const eyebrowText = eyebrow && (
    <p className={`mb-2.5 text-[11px] font-bold uppercase tracking-[0.14em] ${mint ? "text-mp-ink/70" : "text-mp-muted"}`}>{eyebrow}</p>
  );

  if (look === "headline") {
    return (
      <div className={shell}>
        {eyebrowText}
        <h3 className="font-display text-[28px] font-bold leading-[1.12] tracking-[-0.03em] text-mp-ink sm:text-[32px]">{title}</h3>
        <div className="mt-auto pt-14 text-[13.5px] leading-[1.6] text-mp-secondary">{children}</div>
        {footer && <div className="mt-6">{footer}</div>}
      </div>
    );
  }

  return (
    <div className={shell}>
      {image && (
        <div className="relative aspect-[1.6] w-full overflow-hidden rounded-[18px]">
          <Image src={image} alt="" fill sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 84vw" className="object-contain object-center" />
        </div>
      )}
      <div className="mt-6 flex flex-1 flex-col">
        {eyebrowText}
        <h3 className="font-display text-[21px] font-bold leading-tight tracking-[-0.025em] text-mp-ink sm:text-[23px]">{title}</h3>
        <div className={`mt-3 text-[13.5px] leading-[1.6] ${mint ? "text-mp-ink/85 [&_a]:!text-mp-ink" : "text-mp-secondary"}`}>{children}</div>
        {footer && <div className="mt-auto pt-6">{footer}</div>}
      </div>
    </div>
  );
}

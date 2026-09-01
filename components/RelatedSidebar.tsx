import Link from "next/link";
import { ArrowUpRight } from "./ui/Icons";

export function RelatedSidebar({
  title = "Related services",
  items,
}: {
  title?: string;
  items: { name: string; href: string }[];
}) {
  if (!items.length) return null;
  return (
    <div className="rounded-[var(--mp-radius-card)] border border-line bg-white p-5 shadow-[0_2px_12px_rgba(0,16,51,0.03)]">
      <p className="mb-3.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-azure" />
        {title}
      </p>
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center justify-between rounded-xl px-3 py-2 text-[13.5px] font-semibold text-navy transition-all hover:bg-azure-subtle hover:text-azure"
            >
              <span>{item.name}</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-azure" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Link from "next/link";

export type Crumb = { name: string; path: string };

/**
 * The breadcrumb trail, in the two presentations the site needs.
 *
 * `notch` is the white plate cut into the hero's bottom-right corner — the
 * reference design's treatment, which only has room to exist from `sm` up.
 * `bar` is the compact strip rendered under the hero on small screens.
 *
 * Both render from one list, which matters beyond DRY: the BreadcrumbList
 * JSON-LD emitted alongside them describes a trail that must be visible on
 * the page. Previously the trail was `hidden sm:block`, so on the mobile
 * viewport Google actually crawls, the structured data described navigation
 * no reader could see. The `bar` variant closes that gap.
 *
 * The trail is `<nav><ol>` with the current page marked `aria-current="page"`
 * and rendered as text rather than a self-link, matching Google's guidance
 * that a breadcrumb should not link to itself.
 */
export function Breadcrumbs({
  items,
  variant = "notch",
}: {
  items: Crumb[];
  variant?: "notch" | "bar";
}) {
  if (!items.length) return null;

  const list = (
    <ol
      className={`flex items-center gap-2 font-semibold text-ink-2 ${
        variant === "bar" ? "w-max text-[12.5px]" : "text-[13px]"
      }`}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="text-muted">
                →
              </span>
            )}
            {isLast ? (
              <span
                aria-current="page"
                // Long article titles are clamped visually rather than
                // dropped: the crumb text still matches the JSON-LD name.
                className={`text-azure ${variant === "bar" ? "max-w-[52vw] truncate" : ""}`}
              >
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="whitespace-nowrap transition-colors hover:text-azure">
                {item.name}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );

  if (variant === "bar") {
    return (
      <nav
        aria-label="Breadcrumb"
        // Overflows horizontally rather than wrapping to three lines on a
        // narrow phone; the page body itself never scrolls sideways.
        className="mx-auto w-full max-w-[1240px] overflow-x-auto px-6 pt-5 [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden"
      >
        {list}
      </nav>
    );
  }

  return (
    <nav aria-label="Breadcrumb" className="mp-breadcrumb-notch hidden py-2.5 pl-5 pr-6 sm:block">
      {list}
    </nav>
  );
}

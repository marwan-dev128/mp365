import Link from "next/link";
import React from "react";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  buttonTarget?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  dataComponent?: string;
  dataTestId?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  buttonText,
  buttonHref = "/contact/",
  buttonTarget,
  className = "mx-auto flex max-w-4xl flex-col items-center text-center mb-12 sm:mb-16",
  titleClassName = "font-display text-[clamp(34px,4.8vw,56px)] font-extrabold leading-[1.08] tracking-[-0.035em] text-mp-petrol text-center",
  descriptionClassName = "mt-4 sm:mt-5 max-w-[620px] text-[15px] sm:text-[16px] leading-[1.55] text-mp-secondary font-normal text-center",
  dataComponent,
  dataTestId,
}: SectionHeaderProps) {
  return (
    <div
      className={className}
      data-component={dataComponent}
      data-testid={dataTestId}
    >
      {eyebrow && (
        <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.14em] text-mp-petrol/70 mb-3">
          {eyebrow}
        </p>
      )}

      {React.isValidElement(title) && typeof title.type === "string" && /^h[1-6]$/i.test(title.type) ? (
        title
      ) : (
        <h2 className={titleClassName}>{title}</h2>
      )}

      {description && (
        React.isValidElement(description) && typeof description.type === "string" && description.type === "p" ? (
          description
        ) : (
          <p className={descriptionClassName}>{description}</p>
        )
      )}

      {buttonText && buttonHref && (
        <div className="mt-6 sm:mt-8 flex justify-center">
          <Link
            data-style-type="primary"
            data-button-name="button-embedded-switch-save"
            className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none self-start h-11 md:h-10 px-5 md:px-4 py-2 text-sm font-semibold rounded-full shadow-2xs hover:bg-mp-lime-hover"
            style={{ borderRadius: "26px" }}
            href={buttonHref}
            target={buttonTarget}
          >
            <span
              className="overlay absolute inset-0 z-[8] bg-mp-petrol/[0.06] transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay rounded-[26px]"
              aria-hidden="true"
            />
            <span
              className="overlay absolute inset-0 z-[8] bg-mp-petrol/10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay rounded-[26px]"
              aria-hidden="true"
            />
            <span className="button-content relative z-[10] flex items-center justify-center gap-1.5">
              <span className="text-[13px] md:text-[13px] font-medium text-mp-ink" data-button-label="true">
                {buttonText}
              </span>
              <span className="relative inline-flex items-center justify-center w-4 h-4">
                <span className="buttonIcon inline-flex">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="buttonIconHover hidden">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </span>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";

export interface HeaderAnimatedValueProps {
  title?: React.ReactNode;
  description?: string | React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  buttonTarget?: string;
  className?: string;
}

export function HeaderAnimatedValue({
  title,
  description = "A small, senior team that starts fast and builds with your users.",
  buttonText = "Book a free consultation",
  buttonHref = "/contact/",
  buttonTarget,
  className,
}: HeaderAnimatedValueProps = {}) {
  const displayTitle = title ?? "Why teams choose MP-365 for Dynamics 365 and Microsoft 365";

  return (
    <SectionHeader
      title={displayTitle}
      description={description}
      buttonText={buttonText}
      buttonHref={buttonHref}
      buttonTarget={buttonTarget}
      className={className}
      dataComponent="headerAnimatedValue"
      dataTestId="cards-header"
    />
  );
}

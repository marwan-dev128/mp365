"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";

export interface HeaderAnimatedValueProps {
  years?: number | string;
  title?: React.ReactNode;
  description?: string | React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  buttonTarget?: string;
  className?: string;
}

export function HeaderAnimatedValue({
  years = "20",
  title,
  description = "How an MP365 engagement is scoped, priced, and rolled out.",
  buttonText = "Book a consultation",
  buttonHref = "/contact/",
  buttonTarget,
  className,
}: HeaderAnimatedValueProps = {}) {
  // The years figure and the senior-team claim now live in the "Why MP365" section;
  // this header owns the commercial shape of an engagement instead.
  const displayTitle = title ?? (
    <>
      Fixed price. Phased go-lives.
      <br />
      One contract.
    </>
  );

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

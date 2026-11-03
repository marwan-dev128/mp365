// Single source of truth for canonical business facts.
// Reused across metadata, JSON-LD, footer, and llms.txt so every surface
// (Google, Bing, ChatGPT, Perplexity, Copilot) sees identical entity data.

export const site = {
  brandName: "MP-365",
  legalName: "Modern Partners 365",
  tagline: "Dynamics 365 and Microsoft 365 consulting that gets used",
  description:
    "MP-365 (Modern Partners 365) is a Microsoft Solutions Partner that helps mid-size and enterprise companies get more out of Dynamics 365, Microsoft 365 and Copilot.",
  url: "https://mp-365.com",
  foundedYear: "", // The client asked us not to publish a founding date.
  phone: "+1-860-208-9537",
  phoneDisplay: "(+1) 860-208-9537",
  email: "info@mp-365.com",
  address: {
    street: "59 Winding Brook Trail",
    city: "Vernon",
    region: "CT",
    postalCode: "06066",
    country: "US",
  },
  geo: {
    latitude: 41.8434,
    longitude: -72.4776,
  },
  sameAs: [
    "https://www.linkedin.com/company/mp-365/",
    "https://appsource.microsoft.com/en-US/marketplace/partner-dir/263f1063-d5d7-4d25-ac90-7b75e302003c/overview",
  ],
  areaServed: ["Connecticut", "New England", "United States"],
  people: [
    {
      slug: "mp365-team",
      name: "MP-365 Team",
      role: "Microsoft Specialists",
      credentials:
        "A focused team of Microsoft specialists at a Microsoft Solutions Partner",
    },
  ],
} as const;

export const NAV_SERVICES = "services";
export const NAV_SOLUTIONS = "solutions";
export const NAV_INDUSTRIES = "industries";

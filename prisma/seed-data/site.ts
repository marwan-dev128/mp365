// Single source of truth for canonical business facts.
// Reused across metadata, JSON-LD, footer, and llms.txt so every surface
// (Google, Bing, ChatGPT, Perplexity, Copilot) sees identical entity data.

export const site = {
  brandName: "MP365",
  legalName: "Modern Partners 365",
  tagline: "Microsoft consulting, minus the friction",
  description:
    "MP365 (Modern Partners 365) is a Microsoft consulting partner specializing in Microsoft 365 M&A tenant migration, Dynamics 365, Power Platform, and data governance for mid-market and enterprise organizations.",
  url: "https://mp-365.com",
  foundedYear: "2005", // ~20+ years in market per site copy; confirm exact year with client
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
    // TODO: add Microsoft Partner Center / AppSource profile URL
    // TODO: add Clutch / G2 profile URLs once claimed
  ],
  areaServed: ["Connecticut", "New England", "United States"],
  people: [
    {
      slug: "mohammed-khaliefa",
      name: "Mohammed Khaliefa",
      role: "President",
      credentials: "20+ years leading Microsoft platform engagements",
    },
    {
      slug: "raafat-elfouly",
      name: "Dr. Raafat Elfouly",
      role: "Chief Technology Officer",
      credentials:
        "Ph.D.; author of 50+ published papers; built 20+ software products",
    },
  ],
} as const;

export const NAV_SERVICES = "services";
export const NAV_SOLUTIONS = "solutions";
export const NAV_INDUSTRIES = "industries";

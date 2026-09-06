import navigation from "./navigation.json";
import footer from "./footer.json";
import hero from "./hero.json";
import clients from "./clients.json";
import integrations from "./integrations.json";

import personas from "./home/personas.json";
import solutions from "./home/solutions.json";
import whymp from "./home/why-mp.json";
import customerStories from "./home/customer-stories.json";
import platformShowcase from "./home/platform-showcase.json";
import features from "./home/features.json";
import efficiency from "./home/efficiency.json";
import support from "./home/support.json";
import visibility from "./home/visibility.json";
import editorial from "./home/editorial.json";
import stats from "./home/stats.json";
import darkBanner from "./home/dark-banner.json";
import locations from "./home/locations.json";
import proofMetrics from "./home/proof-metrics.json";

export const siteStore = {
  navigation,
  footer,
  hero,
  clients,
  integrations,
  home: {
    personas,
    solutions,
    whymp,
    customerStories,
    platformShowcase,
    features,
    efficiency,
    support,
    visibility,
    editorial,
    stats,
    darkBanner,
    locations,
    proofMetrics,
  },
} as const;

export default siteStore;

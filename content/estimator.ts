// Config for the Pricing page estimator (Level 1: guidance only, no numbers).
// Questions, options, scoring and result text all live here, so they can change
// without touching the component. Effort bands (Level 2) and price ranges
// (Level 3) can be added to `tiers` later without a rebuild.

export type EstimatorOption = {
  value: string;
  label: string;
  /** Points toward the complexity tier. */
  points?: number;
  /** Cost driver shown in the result when this option is picked. */
  driver?: string;
};

export type EstimatorQuestion = {
  id: string;
  label: string;
  options: EstimatorOption[];
};

export const ESTIMATOR_QUESTIONS: EstimatorQuestion[] = [
  {
    id: "area",
    label: "Which service area is this about?",
    options: [
      { value: "Dynamics 365 CRM", label: "Dynamics 365 CRM" },
      { value: "SharePoint", label: "SharePoint and intranets" },
      { value: "Copilot", label: "Microsoft Copilot" },
      { value: "Power Platform", label: "Power Platform" },
      { value: "Microsoft 365 migration", label: "Microsoft 365 migration" },
      { value: "Tenant migration", label: "Tenant to tenant migration" },
      { value: "Data governance", label: "Data governance" },
      { value: "Application modernization", label: "Application modernization" },
    ],
  },
  {
    id: "goal",
    label: "What is the goal?",
    options: [
      { value: "Fix", label: "Fix something that is broken" },
      { value: "Build", label: "Build something new", points: 2 },
      { value: "Migrate", label: "Migrate to a new platform", points: 2 },
      { value: "Support", label: "Get ongoing support" },
    ],
  },
  {
    id: "users",
    label: "How many users are affected?",
    options: [
      { value: "Under 50", label: "Under 50" },
      { value: "50 to 250", label: "50 to 250", points: 1 },
      { value: "250 to 1,000", label: "250 to 1,000", points: 2, driver: "Number of users" },
      { value: "Over 1,000", label: "Over 1,000", points: 3, driver: "Number of users" },
    ],
  },
  {
    id: "systems",
    label: "How many other systems need to connect?",
    options: [
      { value: "None", label: "None" },
      { value: "One or two", label: "One or two", points: 1, driver: "Systems to integrate" },
      { value: "Three or more", label: "Three or more", points: 3, driver: "Systems to integrate" },
    ],
  },
  {
    id: "data",
    label: "How much data needs to move?",
    options: [
      { value: "None", label: "None" },
      { value: "Some", label: "Some", points: 1, driver: "Data to migrate" },
      { value: "A lot", label: "A lot", points: 3, driver: "Data to migrate" },
    ],
  },
  {
    id: "environments",
    label: "How many environments are involved?",
    options: [
      { value: "One", label: "One" },
      { value: "Two or three", label: "Two or three", points: 1 },
      { value: "More than three", label: "More than three", points: 2, driver: "Number of environments" },
    ],
  },
  {
    id: "timeline",
    label: "How firm is the timeline?",
    options: [
      { value: "Flexible", label: "Flexible" },
      { value: "Urgent", label: "Urgent or tied to a fixed date", points: 2, driver: "Timeline" },
    ],
  },
  {
    id: "team",
    label: "Do you have an internal technical team available?",
    options: [
      { value: "Yes", label: "Yes" },
      { value: "Partly", label: "Partly", points: 1 },
      { value: "No", label: "No", points: 2, driver: "How much your team can help" },
    ],
  },
  {
    id: "style",
    label: "How would you like to work?",
    options: [
      { value: "Project", label: "A defined project" },
      { value: "Ongoing", label: "Ongoing, as an extension of our team" },
      { value: "As needed", label: "Only when we need help" },
    ],
  },
];

export const ESTIMATOR_TIERS = [
  {
    id: "light",
    maxPoints: 4,
    label: "Light",
    text: "A contained piece of work with few dependencies. Scoping is usually straightforward.",
  },
  {
    id: "standard",
    maxPoints: 9,
    label: "Standard",
    text: "A typical project with some integration or data work. Scoping should confirm which drivers matter most.",
  },
  {
    id: "complex",
    maxPoints: Infinity,
    label: "Complex",
    text: "Several drivers interact, so the order of the work matters. Plan a detailed scoping conversation first.",
  },
];

export const ESTIMATOR_MODELS = {
  adhoc: { label: "Ad hoc", text: "Call MP-365 when you need help, with no commitment and no minimum." },
  standard: { label: "Standard", text: "MP-365 works as an extension of your team on small projects or defined problems." },
  dedicated: { label: "Dedicated", text: "A Dynamics specialist embedded in your operation, with priority access." },
};

export type EstimatorAnswers = Record<string, string>;

/** Pure scoring, so the result can be tested without rendering anything. */
export function estimate(answers: EstimatorAnswers) {
  let points = 0;
  const drivers: string[] = [];
  for (const q of ESTIMATOR_QUESTIONS) {
    const opt = q.options.find((o) => o.value === answers[q.id]);
    if (!opt) continue;
    points += opt.points ?? 0;
    if (opt.driver && !drivers.includes(opt.driver)) drivers.push(opt.driver);
  }
  const tier = ESTIMATOR_TIERS.find((t) => points <= t.maxPoints)!;
  const model =
    answers.style === "As needed"
      ? ESTIMATOR_MODELS.adhoc
      : answers.style === "Ongoing" && tier.id === "complex"
        ? ESTIMATOR_MODELS.dedicated
        : ESTIMATOR_MODELS.standard;
  return { points, tier, model, drivers };
}

export function estimatorSummary(answers: EstimatorAnswers) {
  const { tier, model, drivers } = estimate(answers);
  return [
    `Estimator result: ${tier.label} complexity, ${model.label} model.`,
    drivers.length ? `Cost drivers: ${drivers.join(", ")}.` : "",
    ...ESTIMATOR_QUESTIONS.filter((q) => answers[q.id]).map((q) => `${q.label} ${answers[q.id]}`),
  ]
    .filter(Boolean)
    .join("\n");
}

/** sessionStorage key the contact form reads to pre-fill its message. */
export const ESTIMATOR_SUMMARY_KEY = "mp365-estimator-summary";

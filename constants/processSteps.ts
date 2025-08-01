export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  output: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Requirement Analysis & Planning",
    description:
      "Collaborate closely to understand your business goals, technical needs, and operational requirements. We craft a tailored roadmap aligned with your success.",
    duration: "1–2 weeks",
    output: "Requirements Document, Engagement Plan",
    icon: "search",
  },
  {
    id: 2,
    title: "Talent Identification & Onboarding",
    description:
      "Build your team with carefully selected experts from engineering or IT backgrounds, based on skill match, experience, and cultural fit.",
    duration: "2–3 weeks",
    output: "Onboarded Team, Role Clarity Documents",
    icon: "users",
  },
  {
    id: 3,
    title: "Infrastructure Setup & Knowledge Transfer",
    description:
      "Enable your team with the right tools, environment, and contextual knowledge to begin productive work immediately.",
    duration: "1–2 weeks",
    output: "Infrastructure Access, SOPs, Training Sessions",
    icon: "settings",
  },
  {
    id: 4,
    title: "Execution & Delivery",
    description:
      "Agile-based delivery cycles with continuous progress tracking, milestone reviews, and stakeholder alignment.",
    duration: "Project-based (Ongoing)",
    output: "Deliverables, Status Reports, Feedback Loops",
    icon: "rocket",
  },
  {
    id: 5,
    title: "Operations, Monitoring & Scale",
    description:
      "Run and scale with confidence. We manage operations, offer round-the-clock support, and help you grow sustainably.",
    duration: "Ongoing",
    output: "Performance Metrics, Optimizations, Scale Plan",
    icon: "trending-up",
  },
];

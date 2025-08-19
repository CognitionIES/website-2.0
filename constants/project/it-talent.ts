import heroImage from "@/constants/images/projects/it/hero.jpg";
import aboutImage from "@/constants/images/projects/it/about.jpg";
import objectiveImage from "@/constants/images/projects/it/objective.jpg";
import overviewImage from "@/constants/images/projects/it/overview.jpg";

export const IT_TALENT_CONSTANTS = {
  HERO: {
    IMAGE: heroImage,
    BREADCRUMBS: {
      HOME: "Home",
      PROJECTS: "Projects",
      IT_TALENT_DEPLOYMENT: "IT Talent Deployment",
    },
    TITLE: "IT Talent Deployment",
    SUBTITLE: "Discover our proven contract staffing model tailored for IT development, delivering seamless integration and exceptional results.",
  },
  RECENT_PROJECTS: {
    IMAGE: aboutImage,
    TITLE: "Project Objective",
    TITLE_HIGHLIGHT: "Objective",
    SUBTITLE: "Showcasing our latest success in IT talent deployment and staffing excellence",
    BADGES: {
      CONTRACTUAL_STAFFING: "Contractual Staffing",
      ZERO_ATTRITION: "Zero Attrition",
    },
    SECTION: {
      TITLE: "IT Talent Deployment",
      SUBTITLE: "Recruitment Support for Software Development Team",
      DESCRIPTION: "Successfully staffed and deployed a team of skilled full-stack developers (React & Node.js) for a growing IT company. Ensured quick turnaround, seamless onboarding, and end-to-end compliance support.",
      HIGHLIGHTS: [
        { TEXT: "Rapid deployment", ICON: "Zap" },
        { TEXT: "Full compliance", ICON: "Shield" },
        { TEXT: "Expert team", ICON: "Users" },
        { TEXT: "Zero attrition", ICON: "Target" },
      ],
    },
  },
  PROJECT_OVERVIEW: {
    IMAGE: objectiveImage,
    TITLE: "Project Overview",
    DESCRIPTION: {
      MAIN: "A rapidly growing IT firm needed a team of full-stack developers to fast-track the development of a new SaaS platform. They were seeking skilled professionals proficient in <span className='text-[#99D5DF] font-semibold'>React.js and Node.js</span>, with a strong understanding of scalable architecture and agile development.",
      SECONDARY: "The client required quick hiring with minimal internal resource overhead, and full compliance coverage including payroll, taxation, and documentation. Our challenge was to deliver not just talent, but a complete staffing solution that would integrate seamlessly with their existing processes.",
    },
    STATS: [
      { VALUE: "12", LABEL: "Months" },
      { VALUE: "0%", LABEL: "Attrition" },
    ],
    CHALLENGES: [
      { TITLE: "Time Pressure", DESCRIPTION: "Rapid deployment needed", ICON: "Clock" },
      { TITLE: "Full Compliance", DESCRIPTION: "End-to-end coverage", ICON: "Shield" },
    ],
  },
  OBJECTIVES: {
    IMAGE: overviewImage,
    TITLE: "Objective",
    DESCRIPTION: "To staff and manage a <span className='text-[#99D5DF] font-semibold'>high-performing full-stack development team</span> on a contract, ensuring smooth onboarding, delivery readiness, and full compliance coverage.",
    BADGE: "Mission Critical",
    HIGHLIGHTS: [
      "Full compliance coverage",
      "Seamless onboarding",
    ],
    SUCCESS_INDICATOR: "Mission Accomplished",
  },
  PROJECT_APPROACH: {
    TITLE: "Our Approach",
    TITLE_HIGHLIGHT: "Approach",
    SUBTITLE: "We deployed our proven contract staffing model tailored to IT development roles, ensuring seamless integration and exceptional results.",
    STEPS: [
      {
        TITLE: "Requirement Scoping",
        DESCRIPTION: "Collaborated with the client to finalize job descriptions, skill expectations, and team composition.",
        ICON: "Target",
        COLOR: "from-[#0098AF] to-[#007B8F]",
      },
      {
        TITLE: "Talent Sourcing & Screening",
        DESCRIPTION: "Leveraged our tech talent pool to identify and evaluate suitable candidates.",
        ICON: "Users",
        COLOR: "from-[#007B8F] to-[#0098AF]",
      },
      {
        TITLE: "Technical Evaluation",
        DESCRIPTION: "Conducted pre-interviews, coding tests, and cultural fit assessments.",
        ICON: "Code",
        COLOR: "from-[#0098AF] to-[#99D5DF]",
      },
      {
        TITLE: "Onboarding & Documentation",
        DESCRIPTION: "Handled all offer roll-outs, background verification, and documentation.",
        ICON: "CheckCircle",
        COLOR: "from-[#99D5DF] to-[#0098AF]",
      },
      {
        TITLE: "Payroll & Compliance",
        DESCRIPTION: "Managed PF, ESI, taxation, and monthly payroll with complete compliance support.",
        ICON: "Shield",
        COLOR: "from-[#0098AF] to-[#007B8F]",
      },
      {
        TITLE: "Ongoing Coordination",
        DESCRIPTION: "Regular follow-ups for performance check-ins, engagement, and attrition control.",
        ICON: "TrendingUp",
        COLOR: "from-[#007B8F] to-[#0098AF]",
      },
    ],
  },
  KEY_RESULTS: {
    TITLE: "Key Results & Outcomes",
    TITLE_HIGHLIGHT: "& Outcomes",
    SUBTITLE: "Measurable impact and exceptional results that exceeded client expectations",
    RESULTS: [
      {
        TITLE: "Rapid Talent Onboarding",
        DESCRIPTION: "From requirement to deployment in record time.",
        ICON: "Zap",
        METRIC: "< 3 weeks",
      },
      {
        TITLE: "Exceptional Team Stability",
        DESCRIPTION: "Zero attrition during the entire contract period.",
        ICON: "Shield",
        METRIC: "0% attrition",
      },
      {
        TITLE: "Accelerated Integration",
        DESCRIPTION: "Developers aligned with sprint goals within the first week.",
        ICON: "TrendingUp",
        METRIC: "5 days",
      },
      {
        TITLE: "Process Automation Ready",
        DESCRIPTION: "All timesheets, billing, and compliance handled through automation.",
        ICON: "CheckCircle",
        METRIC: "100% automated",
      },
    ],
    KPI_DATA: [
      {
        METRIC: "Hiring Turnaround Time",
        BEFORE: "7–9 weeks",
        AFTER: "Less than 3 weeks",
        IMPROVEMENT: "70% faster",
      },
      {
        METRIC: "Team Stability (Attrition Rate)",
        BEFORE: "~20% per quarter",
        AFTER: "0% attrition in 6 months",
        IMPROVEMENT: "100% retention",
      },
      {
        METRIC: "Sprint Integration Time",
        BEFORE: "2–3 weeks",
        AFTER: "Within 5 working days",
        IMPROVEMENT: "75% faster",
      },
      {
        METRIC: "Compliance/Billing Accuracy",
        BEFORE: "Manual + delayed processing",
        AFTER: "100% automated, on-time billing",
        IMPROVEMENT: "Full automation",
      },
    ],
    SERVICES: [
      { NAME: "Contract Staffing", ICON: "Users" },
      { NAME: "Full-Stack Developer Hiring", ICON: "Code" },
      { NAME: "Payroll & Compliance", ICON: "Shield" },
      { NAME: "HR Documentation & Support", ICON: "CheckCircle" },
    ],
    STATS: [
      { VALUE: "100%", LABEL: "Success Rate" },
      { VALUE: "12M", LABEL: "Contract" },
    ],
  },
  TECH_AND_TESTIMONIAL: {
    TITLE: "Technologies & Roles Placed",
    TITLE_HIGHLIGHT: "& Roles Placed",
    SUBTITLE: "Cutting-edge technology stack and skilled professionals deployed for maximum impact",
    TECHNOLOGIES: [
      { NAME: "React.js", ICON: "Code", LEVEL: "Expert" },
      { NAME: "Node.js", ICON: "Globe", LEVEL: "Expert" },
      { NAME: "PostgreSQL", ICON: "Database", LEVEL: "Advanced" },
      { NAME: "CI/CD & GitLab", ICON: "GitBranch", LEVEL: "Advanced" },
      { NAME: "API Integration", ICON: "Globe", LEVEL: "Expert" },
      { NAME: "Microservices", ICON: "Code", LEVEL: "Advanced" },
    ],
    TESTIMONIAL: {
      QUOTE: "The team delivered quality candidates within days, and took complete responsibility from onboarding to payroll. This allowed us to scale faster and stay focused on our product roadmap. Their expertise in full-stack development was exactly what we needed",
      AUTHOR: "HR Head",
      COMPANY: "IT Services Client",
    },
  },
  CTA: {
    TITLE: "Ready to Scale Your IT Team?",
    TITLE_HIGHLIGHT: "IT Team?",
    DESCRIPTION: "Let us help you build a high-performing team with <span className='text-white font-semibold'>zero hassle</span> and <span className='text-white font-semibold'>guaranteed results</span>.",
    BUTTONS: {
      START_PROJECT: "Start Your Project",
      VIEW_PROJECTS: "View More Projects",
    },
  },
};
type FAQ = {
  question: string;
  answer: string;
  category?: string;
};

const faqs: FAQ[] = [
  // Recruitment & Resourcing
  {
    question: "What makes our recruitment services different?",
    answer:
      "We go beyond matching resumes to job descriptions. At Cognition IES, recruitment is about understanding people, purpose, and potential. Our goal is to build meaningful, long-lasting connections that add value to both clients and candidates.",
    category: "Recruitment & Resourcing",
  },
  {
    question: "What hiring models do we offer?",
    answer:
      "We provide flexible hiring solutions including Direct Hire, Contract Staffing, Contract-to-Hire (C2H), Recruitment Process Outsourcing (RPO), and Project-Based Hiring to meet diverse business needs.",
    category: "Recruitment & Resourcing",
  },
  {
    question: "How do we ensure quality in recruitment?",
    answer:
      "Our process includes role discovery, sourcing & outreach, technical and behavioral assessments, interview coordination, offer support, and post-hire engagement to guarantee the right fit every time.",
    category: "Recruitment & Resourcing",
  },
  {
    question: "Which industries do we specialize in?",
    answer:
      "We serve Engineering, IT, Oil & Gas, Telecom, and BFSI sectors with specialized recruitment expertise tailored to each industry's unique challenges.",
    category: "Recruitment & Resourcing",
  },
  {
    question: "Do we use technology in recruitment?",
    answer:
      "Yes! We leverage ATS systems, AI-powered recruitment tools, CRM platforms, and video interviewing technologies to deliver faster, more accurate, and scalable hiring solutions.",
    category: "Recruitment & Resourcing",
  },

  // Build & Operate Model
  {
    question: "What is the Build & Operate model?",
    answer:
      "It’s an end-to-end delivery model where we build and manage dedicated expert teams for clients. From concept to ongoing operations, we take complete ownership to ensure scalable, reliable solutions.",
    category: "Build & Operate",
  },
  {
    question: "How does the Build & Operate process work?",
    answer:
      "Our process includes Requirement Analysis, Talent Identification & Onboarding, Infrastructure Setup, Agile Execution & Delivery, followed by Operations, Monitoring & Scale.",
    category: "Build & Operate",
  },
  {
    question: "What engagement models do we offer in Build & Operate?",
    answer:
      "We provide flexible engagement models including dedicated teams, project-based collaboration, and scalable offshore teams depending on client needs.",
    category: "Build & Operate",
  },
  {
    question: "Do we have experience managing large teams?",
    answer:
      "Yes! We’ve successfully built and managed 50+ member teams for global clients, delivering complex projects with speed, precision, and a 100% success rate.",
    category: "Build & Operate",
  },
  {
    question: "What kind of support do clients get post-delivery?",
    answer:
      "We provide continuous operations management, performance monitoring, scaling support, and optimization to ensure long-term success beyond project delivery.",
    category: "Build & Operate",
  },
];

export default faqs;

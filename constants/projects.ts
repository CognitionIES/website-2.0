export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "IT Talent Deployment",
    category: "Contract Staffing for Full-Stack Development Team",
    description:
      "Successfully staffed and deployed a team of skilled full-stack developers (React & Node.js) for a growing IT company. Ensured quick turnaround, seamless onboarding, and end-to-end compliance support for a 12-month contract.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    link: "/projects/it-talent-deployment",
  },
  {
    id: 2,
    title: "Digitalization",
    category: "Digital Transformation",
    description:
      "Comprehensive Digital Transformation of a Manufacturing Plant through 3D Scanning, Digital Twin, and Real-Time Data Integration to Improve Efficiency and Accuracy.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=faces",
    link: "/projects/digitalization",
  },
  {
    id: 3,
    title: "Log Splitter Cost Optimization & Benchmarking",
    category: "Financial Optimization",
    description:
      "Conducted a detailed cost and function analysis of the Log Splitter, identifying cost-saving opportunities through competitive benchmarking and design optimization.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=faces",
    link: "/projects/product-cost-management",
  },
];

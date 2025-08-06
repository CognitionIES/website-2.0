import digitalImage from "@/constants/images/home/our-recent-projects/digitalization.jpg";
//import pcmImage2 from "@/constants/images/home/our-recent-projects/pcm.jpg";
import { StaticImageData } from "next/image";


export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string | StaticImageData;
  href: string;
  tags: string[];
  duration?: string;
  team?: string;
}

export const staffingProjects: Project[] = [
  {
    id: "it-talent-deployment",
    title: "IT Talent Deployment",
    category: "Contract Staffing for Full-Stack Development Team",
    description:
      "Successfully staffed and deployed a team of skilled full-stack developers (React & Node.js) for a growing IT company. Ensured quick turnaround, seamless onboarding, and end-to-end compliance support.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    href: "/projects/it-talent-deployment",
    tags: ["React", "Node.js", "Full-Stack", "Contract Staffing"],
    duration: "12 months",
    team: "8 developers",
  },
];

export const buildOperateProjects: Project[] = [
  {
    id: "digitalization",
    title: "Digital Transformation",
    category: "Manufacturing Plant Digitalization",
    description:
      "Comprehensive Digital Transformation of a Manufacturing Plant through 3D Scanning, Digital Twin, and Real-Time Data Integration to Improve Efficiency and Accuracy.",
    image: digitalImage,
    href: "/projects/digitalization",
    tags: ["3D Scanning", "Digital Twin", "IoT", "Manufacturing"],
    duration: "18 months",
    team: "12 specialists",
  },
  {
    id: "Industrial-equipment",
    title: "Industrial Equipment Cost Optimization",
    category: "Cost Optimization & Benchmarking",
    description:
      "Conducted a detailed cost and function analysis of the Industrial Equipment, identifying cost-saving opportunities through competitive benchmarking and design optimization.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    href: "/projects/product-cost-management",
    tags: [
      "Cost Analysis",
      "Benchmarking",
      "Design Optimization",
      "Manufacturing",
    ],
    duration: "6 months",
    team: "5 analysts",
  },
];

import { StaticImageData } from "next/image";
//import productImage from "./images/home/hero/product.jpg";
import processImage from "./images/home/hero/process.jpg";
//import aimlImage from "./images/home/hero/ai-ml.jpg";
import saasImage from "@/constants/images/home/hero/saas.jpg";
import recruitmentImage from "@/constants/images/home/hero/recruit.jpg";
import saas2 from "@/constants/images/home/hero/saas-mobile.jpg";
import process2 from "@/constants/images/home/hero/process-mobile.jpg";
import recruit2 from "@/constants/images/home/hero/recruit-mobile.jpg";

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  majorService: string;
  description: string;
  image: string | StaticImageData;
  mobileImage: string | StaticImageData;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "The Right People for the Right Roles",
    subtitle: "Connecting Talent with Opportunity",
    majorService: "Staffing & Recruitment",
    description:
      "Helping businesses build high-performing teams by sourcing top talent through strategic recruitment and staffing solutions.",
    image: recruitmentImage,
    mobileImage: recruit2,
  },
  {
    id: 2,
    title: "Building and Operating for Sustained Excellence",
    subtitle: "End-to-End Solutions from Inception to Operation",
    majorService: "Build & Operate",
    description:
      "We design, build, and operate technology platforms and infrastructure that drive long-term value. From development to day-to-day management, we deliver reliability, scalability, and continuous improvement.",
    image: processImage,
    mobileImage: process2,
  },
  {
    id: 3,
    title: "Powering Businesses with SaaS Innovation",
    subtitle: "Scalable Software for a Digital World",
    majorService: "SaaS Solutions",
    description:
      "Delivering cloud-based, scalable, and secure software solutions that streamline operations, enhance efficiency, and drive growth.",
    image: saasImage,
    mobileImage: saas2,
  },
];

// Constants for the About page to keep content and assets modular and reusable
import HeroImage from "@/constants/images/about/about-hero.jpg";
import OurJourneyImage from "@/constants/images/about/about-our-journey.jpg";
import flexScaleImage from "@/constants/images/about/flex-scale.jpg";
import lifeCycleImage from "@/constants/images/about/lifecyle-mastery.jpg";
import qualityCoreImage from "@/constants/images/about/quality-core.jpg";
import coInnovativeImage from "@/constants/images/about/coinnovative.jpg";
import missionVisionImage from "@/constants/images/about/missionvision.jpg";
import statsImage from "@/constants/images/about/stats.jpg";
export const ABOUT_CONSTANTS = {
  // Image URLs
  IMAGES: {
    HERO_IMAGE: { HeroImage },
    STORY_IMAGE: { OurJourneyImage },
    MISSION_VISION_BG: missionVisionImage,
    TECH_PATTERN: statsImage,
    KEY_VALUES: [
      coInnovativeImage,
      lifeCycleImage,
      qualityCoreImage,
      flexScaleImage,
    ],
  },

  // Text Content
  TEXT: {
    COMPANY_NAME: "Cognition IES",
    HERO_SUBTITLE:
      "Engineering the future with innovation, agility, and a human-first approach since 2023.",
    STORY_TITLE: "Our Journey",
    STORY_P1:
      "Founded in 2005, we began as a Recruitment & Resourcing company, connecting skilled professionals with businesses across engineering and IT sectors. From the start, our focus was on building long-term client relationships and delivering high-quality talent for critical projects.",
    STORY_P2:
      "Over time, we expanded our offerings to include project-based hiring, flexible resourcing, and Build & Operate models, helping clients scale teams efficiently and meet dynamic business needs.",
    MISSION_TITLE: "Our Mission",
    STORY_P3:
      "In 2023, we launched Engineering Services, offering Product and Plant Engineering solutions. Our capabilities now include CAE/CFD, prototyping, embedded systems, asset management, Digital Twins, AI-driven analytics, and real-time monitoring, combining engineering excellence with technology-driven innovation.",
    STORY_P4:
      "Today, Cognition IES is a trusted partner for talent and engineering solutions, delivering smarter, more efficient, and future-ready services to clients worldwide.",
    MISSION_DESC:
      "Empowering businesses with top talent, engineering excellence, and technology-driven innovation for faster, smarter, and sustainable results.",
    VISION_TITLE: "Our Vision",
    VISION_DESC:
      "To be a trusted partner delivering innovative, efficient, and future-ready solutions.",
    VALUES_TITLE: "What Drives Us",
    CTA_TITLE: "Shape the Future with Us",
    CTA_DESC: "Let’s turn your hiring needs into long-term success.",
  },

  // Animation Variants
  ANIMATIONS: {
    STAGGER_CHILDREN: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 },
      },
    },
    SCALE_HOVER: {
      rest: { scale: 1 },
      hover: { scale: 1.03, transition: { duration: 0.3 } },
    },
  },

  // Stats and Values
  STATS: [
    { stat: "500+", label: "Placements Done" },
    { stat: "15+", label: "Active Clients" },
    { stat: "98%", label: "Client Retention" },
    { stat: "< 3 Weeks ", label: " Avg Time-to-Fill" },
  ],
  KEY_VALUES: [
    { title: "Co-Innovation", desc: "Co-creating patents with you." },
    { title: "Lifecycle Mastery", desc: "From vision to victory." },
    { title: "Quality Core", desc: "Precision every time." },
    { title: "Flex & Scale", desc: "Adapting to your pace." },
  ],
};

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
      "In 2005, a small group of professionals set out to connect skilled talent with businesses in engineering and IT. What started as a focused resourcing effort grew into a reliable network, supporting clients with project-based hiring, flexible resourcing, and Build & Operate models.",
    STORY_P2:
      "By 2023, this foundation led to the formation of Cognition IES Pvt. Ltd. We brought together years of experience in talent solutions and expanded into advanced engineering and IT services. Our work now spans product and plant engineering, CAE & CFD, prototyping, embedded systems, asset management, digital twins, AI analytics, real-time monitoring, and IT solutions in app development, cloud, enterprise platforms, and digital transformation.",
    MISSION_TITLE: "Our Mission",
    STORY_P3:
      "From modest beginnings, Cognition IES has grown into a trusted partner for talent, engineering, IT solutions, delivering practical, future ready services worldwide.",

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
    FADE_UP: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.25, 0.25, 0.75] as const,
        },
      },
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

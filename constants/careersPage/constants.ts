import HeroCareerImg from "@/constants/images/career/hero.jpg"

// This file holds all constants for the careers page
export const CAREERS_CONSTANTS = {
    // Hero Section
    HERO: {
      IMAGE: HeroCareerImg, // Local image path (adjust as needed)
      TITLE: "Join Our Team",
      SUBTITLE: "Shape the future with us. We’re seeking passionate innovators to join our journey.",
      TAGS: "#ComeJoinUs in #EngineeringABetterWorld",
    },
  
    // Values Section
    VALUES: {
      TITLE: "Our Values",
      ITEMS: [
        {
          title: "Co-Innovation",
          description: "Collaborating with clients to craft groundbreaking solutions.",
        },
        {
          title: "People-First Culture",
          description: "Empowering every voice to shape our success.",
        },
        {
          title: "Excellence in Execution",
          description: "Delivering precision and quality, every time.",
        },
        {
          title: "Sustainability ",
          description: "Building greener solutions for a better tomorrow.",
        },
        
        
        
      ],
    },
  
    // Open Positions Section
    POSITIONS: {
      TITLE: "Open Positions",
      LOCATIONS: ["all", "India", "USA"], // Options for location filter
    },
  
    // Testimonials Section
    TESTIMONIALS: {
      TITLE: "Employee Testimonials",
    },
  
    // Benefits Section
    BENEFITS: {
      TITLE: "Why Work With Us",
      ITEMS: [
        {
          title: "Work-Life Balance",
          description: "Flexible working hours and remote options to ensure you can maintain a healthy balance."
        },
        {
          title: "Continuous Learning",
          description: "Access to workshops, conferences, and learning resources to help you grow professionally."
        },
        {
          title: "Inclusive Culture",
          description: "A diverse and supportive environment where all voices are heard and valued."
        },
        {
          title: "Competitive Compensation",
          description: "Attractive salary packages and benefits designed to recognize your contributions."
        },
        {
          title: "Modern Workspace",
          description: "Thoughtfully designed workspaces that inspire creativity and collaboration."
        },
        {
          title: "Health & Wellness",
          description: "Comprehensive health benefits & wellness programs to support your physical & mental well-being."
        }
      ]
    },

  
    // Animation Variants (used across sections)
    ANIMATIONS: {
      STAGGER_CHILDREN: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
      },
      CARD_HOVER: {
        rest: { y: 0, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)" },
        hover: {
          y: -2,
          boxShadow: "0 6px 12px rgba(0, 152, 175, 0.1)",
          transition: { duration: 0.2 },
        },
      },
    },
  };
import {
  FiActivity,
  FiDroplet,
  FiPrinter,
  FiTool,
  FiZap,
} from "react-icons/fi";

export const services = [
  {
    icon: FiTool,
    title: "Automotive",
    description:
      "Innovative engineering solutions for vehicle design, manufacturing, and performance optimization.",
    image:
      "https://plus.unsplash.com/premium_photo-1664298230305-9116cf510bed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/services?section=mechanical",
  },
  {
    icon: FiActivity,
    title: "Trucks & Off-highway Vehicles",
    description:
      "Advanced engineering for heavy-duty vehicles, improving durability, safety, and fuel efficiency.",
    image:
      "https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Trucks and off-highway vehicle engineering",
    href: "/services?section=cae-cfd",
  },
  {
    icon: FiZap,
    title: "Railway & Transportation",
    description:
      "Engineering solutions for rail systems, focusing on efficiency, electrification, and automation.",
    image:
      "https://plus.unsplash.com/premium_photo-1664392286855-b02386936882?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Railway and transportation engineering",
    href: "/services?section=electrical",
  },
  {
    icon: FiDroplet,
    title: "Aerospace & Defense",
    description:
      "Cutting-edge aerospace engineering for aircraft, defense systems, and space technology.",
    image:
      "https://media.istockphoto.com/id/498381212/photo/military-jets-in-flight.jpg?s=2048x2048&w=is&k=20&c=mSaH_Ri6hnVdO6sZlNxfyeGcSsiSjV1n7mGupuJNhD8=",
    alt: "Aerospace and defense engineering",
    href: "/services?section=hydraulic",
  },
  {
    icon: FiPrinter,
    title: "Marine & Offshore",
    description:
      "Engineering services for shipbuilding, offshore platforms, and maritime sustainability.",
    image:
      "https://media.istockphoto.com/id/533552151/photo/oil-rig.jpg?s=2048x2048&w=is&k=20&c=9hJpJnPZcxS5QBq3WJL9Cildyjm6Gi21FanjTSbQzr0=",
    alt: "Marine and offshore engineering",
    href: "/services?section=prototyping",
  },
];

export const faqs = [
  {
    question: "What types of mobility solutions do you offer?",
    answer:
      "We provide engineering solutions for automotive, trucks, railways, aerospace, and marine industries, improving efficiency, safety, and sustainability.",
  },
  {
    question: "How do you ensure safety in mobility engineering?",
    answer:
      "We follow strict industry standards, conduct rigorous testing, and integrate advanced safety technologies to enhance reliability and performance.",
  },
  {
    question: "Do you work on electric and autonomous vehicles?",
    answer:
      "Yes! We specialize in EV design, battery optimization, and autonomous systems for next-generation mobility.",
  },
  {
    question: "How do you improve energy efficiency in transportation?",
    answer:
      "We focus on lightweight materials, aerodynamics, and energy-efficient propulsion systems to reduce emissions and improve sustainability.",
  },
];

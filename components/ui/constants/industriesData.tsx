import { MainCategory } from "../types";
import {
  Car,
  Forklift,
  TramFront,
  Plane,
  Ship,
  Leaf,
  Factory,
  Settings,
  Droplet,
  FlaskConical,
  Zap,
  Sun,
  Pill,
  Wheat,
  Shirt,
  Droplets,
  Book,
  Cpu,
  Code,
} from "lucide-react";

export const industriesData: MainCategory[] = [
  {
    title: "Mobility",
    icon: <Car className="w-5 h-5" />,
    href: "",
    subCategories: [
      {
        title: "Automotive",
        href: "/industries/mobility/automotive",
        icon: <Car className="w-4 h-4" />,
      },
      {
        title: "Trucks and Off-Highway Vehicles",
        href: "/industries/mobility/trucks",
        icon: <Forklift className="w-4 h-4" />,
      },
      {
        title: "Railways and Transportation",
        href: "/industries/mobility/railways",
        icon: <TramFront className="w-4 h-4" />,
      },
      {
        title: "Aerospace and Defense",
        href: "/industries/mobility/aerospace",
        icon: <Plane className="w-4 h-4" />,
      },
      {
        title: "Marine and Offshore",
        href: "/industries/mobility/marine",
        icon: <Ship className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&q=80",
      alt: "Automotive manufacturing",
      title: "Next-gen mobility solutions",
    },
  },
  {
    title: "Sustainability",
    icon: <Leaf className="w-5 h-5" />,
    href: "",
    subCategories: [
      {
        title: "Discrete Manufacturing & Industrial Products",
        href: "/industries/sustainability/discrete-manufacturing",
        icon: <Factory className="w-4 h-4" />,
      },
      {
        title: "Process Manufacturing",
        href: "/industries/sustainability/process-manufacturing",
        icon: <Settings className="w-4 h-4" />,
        subSubCategories: [
          {
            title: "Oil and Gas",
            href: "/industries/sustainability/process-manufacturing/oil-gas",
            icon: <Droplet className="w-4 h-4" />,
          },
          {
            title: "Chemicals and Petrochemicals",
            href: "/industries/sustainability/process-manufacturing/chemicals",
            icon: <FlaskConical className="w-4 h-4" />,
          },
          {
            title: "Power and Energy",
            href: "/industries/sustainability/process-manufacturing/power",
            icon: <Zap className="w-4 h-4" />,
          },
          {
            title: "Renewable Energy",
            href: "/industries/sustainability/process-manufacturing/renewable",
            icon: <Sun className="w-4 h-4" />,
          },
          {
            title: "Pharmaceuticals and Biotech",
            href: "/industries/sustainability/process-manufacturing/pharma",
            icon: <Pill className="w-4 h-4" />,
          },
          {
            title: "Agriculture and Agro-Processing",
            href: "/industries/sustainability/process-manufacturing/agriculture",
            icon: <Wheat className="w-4 h-4" />,
          },
          {
            title: "Cement and Construction",
            href: "/industries/sustainability/process-manufacturing/cement",
            icon: <Car className="w-4 h-4" />,
          },
          {
            title: "Textile and Apparel",
            href: "/industries/sustainability/process-manufacturing/textile",
            icon: <Shirt className="w-4 h-4" />,
          },
          {
            title: "Water and Wastewater Treatment",
            href: "/industries/sustainability/process-manufacturing/water",
            icon: <Droplets className="w-4 h-4" />,
          },
          {
            title: "Pulp and Paper",
            href: "/industries/sustainability/process-manufacturing/pulp",
            icon: <Book className="w-4 h-4" />,
          },
        ],
      },
      {
        title: "ABCDE",
        href: "/industries/sustainability/discrete",
        icon: <Cpu className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80",
      alt: "Sustainable manufacturing",
      title: "Sustainable industrial solutions",
    },
  },
  {
    title: "Tech",
    icon: <Cpu className="w-5 h-5" />,
    href: "",
    subCategories: [
      {
        title: "Digital Engineering",
        href: "/industries/tech/digital-engineering",
        icon: <Code className="w-4 h-4" />,
      },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      alt: "Technology solutions",
      title: "Advanced tech solutions",
    },
  },
];

import { ComponentType } from "react";
import { Wrench,  Server } from "lucide-react";

// Type definitions
export interface SubCategory {
  title: string;
  href: string;
  subSubCategories?: SubCategory[]; // Added for nested subcategories
}

export interface MainCategory {
  icon?: ComponentType<{ className?: string }>; // Icon as a component type, optional
  title: string;
  href: string;
  subCategories: SubCategory[];
  image: {
    src: string;
    alt: string;
    title: string;
  };
}

// services section data
export const servicesData: MainCategory[] = [
  {
    title: "Product Engineering",
    href: "/services/product-engineering",
    icon: Wrench,
    subCategories: [
      { title: "Mechanical Design Services", href: "/services?section=mechanical" },
      { title: "Electrical Engineering Services", href: "/services?section=electrical" },
      { title: "CAE/CFD", href: "/services?section=cae-cfd" },
      { title: "Hydraulic Engineering Services", href: "/services?section=hydraulic" },
      { title: "Prototyping and 3D Printing", href: "/services?section=prototyping" },
      { title: "Asset Management", href: "/services?section=asset-management" },
      { title: "Embedded Systems Engineering", href: "/services?section=embedded-systems" },
      { title: "Technical Publication", href: "/services?section=technical-publication" },
      { title: "Supply Chain Management / Procurement", href: "/services?section=supply-chain" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
      alt: "Product Engineering",
      title: "Advanced Product Engineering Solutions",
    },
  },
];

// Industries section data
export const industriesData: MainCategory[] = [
  {
    title: "Mobility",
    href: "/industries/mobility",
    subCategories: [
      { title: "Automotive", href: "/industries/automotive" },
      { title: "Trucks & Off-Highway Vehicles", href: "/industries/trucks" },
      { title: "Rail Transportation", href: "/industries/rail" },
      { title: "Aerospace & Defense", href: "/industries/aerospace" },
      { title: "Marine & Offshore", href: "/industries/marine" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      alt: "Mobility Industry",
      title: "Innovative Mobility Solutions",
    },
    icon: undefined,
  },
  {
    title: "Sustainability",
    href: "/industries/sustainability",
    subCategories: [
      { title: "Oil & Gas", href: "/industries/oil-gas" },
      {
        title: "Process Manufacturing",
        href: "/industries/process-manufacturing",
        subSubCategories: [
          { title: "Discrete Manufacturing", href: "/industries/discrete-manufacturing" },
          { title: "Batch Manufacturing", href: "/industries/batch-manufacturing" },
          { title: "Continuous Manufacturing", href: "/industries/continuous-manufacturing" },
          { title: "Chemical & Petrochemical", href: "/industries/chemical" },
          { title: "Power & Energy", href: "/industries/power-energy" },
          { title: "Renewable Energy", href: "/industries/renewable-energy" },
          { title: "Pharmaceutical & Biotech", href: "/industries/pharmaceutical" },
          { title: "Agriculture & Agro-Processing", href: "/industries/agriculture" },
          { title: "Cement & Construction", href: "/industries/cement" },
          { title: "Textile & Apparel", href: "/industries/textile" },
          { title: "Water & Wastewater Treatment", href: "/industries/water" },
          { title: "Pulp & Paper", href: "/industries/pulp" },
        ],
      },
      { title: "Renewable Energy", href: "/industries/renewable-energy" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1551333131-04a53b3e2c43?q=80&w=2070&auto=format&fit=crop",
      alt: "Sustainability Industry",
      title: "Sustainable Solutions",
    },
    icon: undefined,
  },
  {
    title: "Aerospace",
    href: "/industries/aerospace",
    icon: Server,
    subCategories: [
      { title: "Aircraft Design", href: "/industries/aerospace?section=aircraft-design" },
      { title: "Propulsion Systems", href: "/industries/aerospace?section=propulsion" },
      { title: "Avionics", href: "/industries/aerospace?section=avionics" },
      { title: "Space Systems", href: "/industries/aerospace?section=space" },
      { title: "Defense & Military", href: "/industries/aerospace?section=defense" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
      alt: "Aerospace Industry",
      title: "Advanced Aerospace Solutions",
    },
  },
  {
    title: "Energy & Utilities",
    href: "/industries/energy",
    icon: Wrench,
    subCategories: [
      { title: "Renewable Energy", href: "/industries/energy?section=renewable" },
      { title: "Power Generation", href: "/industries/energy?section=power" },
      { title: "Smart Grid Solutions", href: "/industries/energy?section=smart-grid" },
      { title: "Oil & Gas", href: "/industries/energy?section=oil-gas" },
      { title: "Nuclear Energy", href: "/industries/energy?section=nuclear" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop",
      alt: "Energy Industry",
      title: "Sustainable Energy Solutions",
    },
  },
];

// Navigation items
export const navigationItems = [
  { title: "Home", href: "/" },
  { title: "Resources", href: "/resources" },
  { title: "Careers", href: "/careers" },
  { title: "About Us", href: "/about" },
];
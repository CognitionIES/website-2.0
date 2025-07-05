import { ReactNode } from "react";

export interface SubCategory {
  title: string;
  href: string;
  icon?: ReactNode;
  subSubCategories?: SubCategory[];
}

export interface MainCategory {
  icon: ReactNode;
  title: string;
  href: string;
  subCategories: SubCategory[];
  image: {
    src: string;
    alt: string;
    title: string;
  };
}
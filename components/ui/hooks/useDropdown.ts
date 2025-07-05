import { useState, useEffect, useRef } from "react";

export const useDropdown = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [expandedSubCategory, setExpandedSubCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleSubCategory = (title: string) => {
    setExpandedSubCategory(expandedSubCategory === title ? null : title);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setExpandedSubCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    activeDropdown,
    setActiveDropdown,
    activeCategory,
    setActiveCategory,
    expandedSubCategory,
    toggleSubCategory,
    dropdownRef,
  };
};
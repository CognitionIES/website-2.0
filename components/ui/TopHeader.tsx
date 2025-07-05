"use client";

import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function TopHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "bg-secondary text-secondary-foreground py-2 transition-all duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6 mb-2 sm:mb-0">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@cognition.com">info@cognition.com</a>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://facebook.com"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://instagram.com"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
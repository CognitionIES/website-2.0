"use client";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Server, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import logo from "@/constants/images/COGNITION LOGO_REV_01.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Service data structure
interface Service {
  title: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
}

const servicesData: Service[] = [
  {
    title: "SaaS Solutions - ServiceCPQ",
    href: "/services/saas-solution/servicecpq",
    icon: <Server className="w-4 h-4" />,
    description: "Comprehensive SaaS solutions for your business",
  },
  {
    title: "Staffing and Recruitment",
    href: "/services/staffing",
    icon: <Users className="w-4 h-4" />,
    description: "Professional staffing and recruitment services",
  },
  {
    title: "Build and Operate",
    href: "/services/build-operate",
    icon: <Server className="w-4 h-4" />,
    description: "End-to-end build and operate solutions",
  },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Careers", href: "/careers" },
  { title: "About Us", href: "/about" },
];

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openMobileService, setOpenMobileService] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowServices(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowServices(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setOpenMobileService(false);
    }
  };
  const arrowVariants: Variants = {
    initial: { rotate: 0 },
    "group-hover": {
      rotate: -45,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <>
      <nav
        className={cn(
          "w-full transition-all duration-300 z-50 border-b",
          isSticky
            ? "fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-lg"
            : "relative bg-white border-gray-200"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src={logo}
                  alt="CognitionIES Logo"
                  width={80}
                  height={40}
                  className="hidden lg:block rounded-lg"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {/* Home */}
              <Link
                href="/"
                className="px-4 text-lg font-medium text-gray-700 hover:text-cyan-600  rounded-lg transition-all duration-200 relative group"
              >
                Home
                <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-1/2 transform -translate-x-1/2"></span>
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 px-4 text-lg font-medium text-gray-700 hover:text-cyan-600  rounded-lg transition-all duration-200 group">
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      showServices ? "rotate-180" : "rotate-0"
                    )}
                  />
                  <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-cyan-600 transition-all duration-300  transform -translate-x-1/2"></span>
                </button>

                {/* Dropdown Menu */}
                {showServices && (
                  <div className="absolute top-full left-0 mt-4 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200">
                    <div className="p-2">
                      {servicesData.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="flex-shrink-0 p-2 bg-cyan-100 rounded-lg group-hover:bg-cyan-200 transition-colors duration-200">
                            {service.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors duration-200 text-base">
                              {service.title}
                            </h3>
                            {service.description && (
                              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                {service.description}
                              </p>
                            )}
                          </div>
                          <motion.div
                            variants={arrowVariants}
                            initial="initial"
                            whileHover="hover"
                            className="flex-shrink-0"
                          >
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-600 group-hover:-rotate-45 transition-colors duration-500" />
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                      <Link
                        href="/services"
                        className="text-xs text-cyan-600 hover:text-cyan-800 font-medium transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>View all services</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="px-4 text-lg font-medium text-gray-700 hover:text-cyan-600  rounded-lg transition-all duration-200 relative group"
                >
                  {link.title}
                  <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-1/2 transform -translate-x-1/2"></span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              <Button
                size="sm"
                asChild
                className="bg-cyan-600 hover:bg-[#5b5b5b] text-white shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Link href="/contact" className="flex items-center space-x-1">
                  <span className="text-lg">Contact </span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-gray-700 hover:text-cyan-600 hover:bg-gray-50 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Home */}
            <Link
              href="/"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div className="space-y-1">
              <button
                onClick={() => setOpenMobileService(!openMobileService)}
                className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    openMobileService ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openMobileService
                    ? "max-h-64 opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="pl-4 space-y-1">
                  {servicesData.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="flex items-center space-x-3 px-4 py-3 text-base text-gray-600 hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex-shrink-0 p-1.5 bg-cyan-100 rounded">
                        {service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-medium">{service.title}</span>
                        {service.description && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {service.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Mobile Links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}

            {/* Mobile Actions */}
            <div className="pt-4 space-y-3 border-t border-gray-100">
              <Button
                asChild
                className="w-full hover:bg-[#5b5b5b]/80 bg-cyan-600  text-white"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className=" flex items-center justify-center space-x-2"
                >
                  <span className="">Contact</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for sticky navbar */}
      {isSticky && <div className="h-16" />}
    </>
  );
}

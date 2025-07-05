"use client";
import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import LinkedinLogo from "@/constants/images/linkedinLogo.png";

export default function UsefulLinks() {
  const isMobile = useIsMobile();
  const Line = isMobile ? "span" : motion.span;

  return (
    <div className="col-span-1 md:col-span-4 px-8">
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {/* Column 1: Useful Links */}
        <div>
          <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2">Useful Links</h3>
          {!isMobile && (
            <Line
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }}
              transition={{ delay: 0.6, duration: 1 }}
              className="block h-[2px] bg-gradient-to-r from-[#0098AF] to-[#003C46] opacity-70 mb-3 sm:mb-4 rounded-full"
            />
          )}
          <ul className="space-y-1 sm:space-y-2 text-[#E6F0F5]/70 text-xs sm:text-sm">
            <li>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Home
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Projects
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Careers
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                About Us
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Contact Us
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                FAQs
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Services */}
        <div >
          <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2">Services</h3>
          {!isMobile && (
            <Line
              initial={{ width: 0 }}
              whileInView={{ width: "30%" }}
              transition={{ delay: 0.6, duration: 1 }}
              className="block h-[2px] bg-gradient-to-r from-[#0098AF] to-[#003C46] opacity-70 mb-3 sm:mb-4 rounded-full"
            />
          )}
          <ul className="space-y-1 sm:space-y-2 text-[#E6F0F5]/70 text-xs sm:text-sm">
            <li>
              <Link
                href="/services/product-engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Product Engineering
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="/services/plant-engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Plant Engineering
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="/services/saas-solution/servicecpq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                SaaS Solutions
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="/services/staffing-recruitment"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0098AF] flex items-center"
              >
                Staffing & Recruitment
                <svg
                  className="w-3 sm:w-4 h-3 sm:h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* LinkedIn and Email for mobile view */}
      {isMobile && (
        <div className="flex justify-center items-center space-x-2 sm:space-x-3 mt-6">
          <Link
            href="https://www.linkedin.com/company/cognitionies"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0098AF] px-2"
          >
            <Image
              src={LinkedinLogo}
              alt="Linkedin Logo"
              width={32}
              height={32}
              className="sm:w-10 sm:h-10"
            />
          </Link>
          <span>|</span>
          <Link
            href="mailto:info@cognitionies.com"
            className="hover:text-[#0098AF] text-sm sm:text-base"
          >
            info@cognitionies.com
          </Link>
        </div>
      )}
    </div>
  );
}

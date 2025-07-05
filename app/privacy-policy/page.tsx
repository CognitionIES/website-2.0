/* eslint-disable react-hooks/exhaustive-deps */
 
"use client";

import Footer from "@/components/footer";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PrivacyPolicy = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="bg-[#E6F0F5]/40 min-h-screen">
      <MegaMenu />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1></h1>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#003C46] mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
        </motion.div>

        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
        >
          <div className="prose max-w-none text-gray-700 space-y-6">
            <p className="text-lg text-gray-500">
              <strong>Effective Date:</strong> May 1st, 2025
            </p>
            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                1. Introduction
              </h2>
              <p>
                We, at Cognition IES (hereinafter referred to as “Cognition”,
                “we”, “our”, “us”), are committed to safeguarding the privacy of
                our website visitors. Through this Cognition Website Privacy
                Policy, we explain how we collect, use, retain, and disclose
                your personal data when you visit our website.{" "}
              </p>
              <p>
                Personal data means any information relating to an identified or
                identifiable natural person (“Data Subject”)—including name,
                identification number, location data, online identifiers, or
                factors specific to physical, physiological, genetic, mental,
                economic, cultural, or social identity.{" "}
              </p>
              <p>
                By accessing or using our website https://www.cognitionies.com/
                (including all subdomains), or by submitting any information to
                us through this website, you consent to the practices described
                in this Privacy Policy and authorize Cognition to process your
                personal data in accordance with the terms outlined herein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                2. Applicability
              </h2>
              <p>
                This policy applies to Cognition IES and any associated third
                parties processing personal data on behalf of Cognition.
              </p>
              <p>
                Our website may contain links to third-party websites. This
                Privacy Policy only applies to Cognition and does not extend to
                the practices of third parties. We recommend reviewing the
                privacy policies of third-party websites before providing any
                personal data to them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                What Personal Data We Collect and How
              </h2>
              <p>What Personal Data We Collect and How</p>
              <ul className="list-disc pl-6">
                <li>
                  Information about your device and visits to our website
                  (including IP address, geographic location, browser type,
                  referral source, time of visit, and website navigation)..
                </li>
                <li>
                  Information you voluntarily provide when registering on the
                  site, subscribing to newsletters, or submitting inquiries
                  (e.g., name, email address, contact details)..
                </li>
                <li>
                  Data you share when participating in surveys, contests,
                  recruitment campaigns, or similar engagements via the
                  website..
                </li>
                <li>
                  Communications sent to us through the website, including
                  message content and metadata..
                </li>
                <li>
                  Automatically captured data such as browser and OS types,
                  server error logs, or analytics tracking info (via Google
                  Analytics or similar tools)..
                </li>
              </ul>
              <p>
                Please ensure that you have obtained necessary permissions if
                you’re providing someone else’s personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                4. Analytics & Tracking
              </h2>
              <p>
                Cognition uses Google Analytics (with anonymization features) to
                gather anonymous insights into website usage, user demographics,
                and behavior. This information helps us enhance user experience
                and optimize website content.
              </p>
              <p>
                Google may process data on servers located in the United States.
                To manage your ad preferences, visit:
                https://adssettings.google.com. Google’s Privacy Policy:
                https://policies.google.com/privacy
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                5. How We Use Your Personal Data
              </h2>
              <p>We use your data to:</p>
              <ul>
                <li>Administer and improve our website and services.</li>
                <li>
                  Communicate with you regarding queries, requests, or services.
                </li>
                <li>Secure our platform and prevent fraud or abuse.</li>
                <li>
                  Share relevant marketing content (where consent is provided).
                </li>
                <li>
                  Provide access to whitepapers, brochures, or webinars after
                  form submissions.
                </li>
                <li>Tailor content and experience based on user interests.</li>
              </ul>
              <p>
                We process data based on your consent, our legitimate interest,
                or contractual necessity, depending on the context of
                collection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                6. Marketing Communications
              </h2>
              <p>
                We may send newsletters or marketing emails based on your
                preferences and consent. You may opt-out at any time by clicking
                &quot;unsubscribe&quot; in the email or contacting us at
                info@cognitionies.com.
              </p>

              <p>
                We may also receive user data from social media platforms (e.g.,
                LinkedIn, Twitter, YouTube) for analytics and marketing
                performance review.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                7. Third-Party Links
              </h2>
              <p>
                We may occasionally use opt-in marketing lists from verified
                providers. You may opt-out of such communications at any time.{" "}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                8. Children’s Privacy
              </h2>
              <p>
                Our website is not intended for individuals under the age of 16.
                We do not knowingly collect or store information from minors. If
                you believe a minor has submitted data, please contact us at
                info@cognitionies.com, and we will promptly delete it.{" "}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                9. International Data Transfers
              </h2>
              <p>
                As a global company, Cognition may transfer your data outside
                your home country. Reasonable security measures and legal
                safeguards (such as EU Standard Contractual Clauses, where
                applicable) are in place to ensure data protection during such
                transfers.{" "}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                10. Cookies
              </h2>
              <p>
                We use cookies to personalize content, remember preferences, and
                analyze website performance. You can manage cookie preferences
                through your browser settings. To learn more, visit our{" "}
                <Link href="cookie-policy">Cookie Policy</Link>
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                11. Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to secure your personal data against unauthorized access,
                misuse, or loss. However, please note that internet transmission
                is not entirely secure and we cannot guarantee 100% data
                security.{" "}
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                12. Disclosures
              </h2>
              <p>We may disclose your personal data to:</p>
              <ul>
                <li>Employees or authorized personnel within Cognition IES.</li>
                <li>
                  Advisors, contractors, or service partners, as necessary to
                  operate our website or business.
                </li>
                <li>Legal or regulatory authorities, if required by law.</li>
              </ul>
              <p>
                We ensure that any third party handling your data abides by
                strict confidentiality and data protection obligations.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                13. Your Rights
              </h2>
              <p>
                Depending on your location and applicable laws, you may have
                rights to:
              </p>
              <ul>
                <li>Access, correct, or delete your personal data.</li>
                <li>Withdraw consent or object to processing.</li>
                <li>
                  Request data portability or file a complaint with a data
                  protection authority.
                </li>
              </ul>
              <p>
                To exercise these rights, contact us at info@cognitionies.com.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[#003C46]">
                14. Changes to This Policy
              </h2>
              <p>
                Cognition reserves the right to update this Privacy Policy
                periodically. Any changes will be posted on this page with an
                updated revision date.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

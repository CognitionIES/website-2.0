/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FiMail, FiMapPin } from "react-icons/fi";
import { useState, useCallback, useRef, useEffect } from "react";
import { CONTACT_CONSTANTS } from "@/constants/contactPage/constants";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    interestedIn: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useIsMobile();
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { TITLE, DESCRIPTION, EMAIL } = CONTACT_CONSTANTS.CONTACT;

  useEffect(() => {
    if (isMobile) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMobile, hasAnimated]);

  const handleInputChange = useCallback(
    (field: string, value: string | boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isSubmitting) return;

      setIsSubmitting(true);
      setStatus("");

      const WEB3FORMS_ACCESS_KEY = "aba4ac86-a28e-496a-86bb-e3c981356299";
      const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

      try {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            ...formData,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            interestedIn: "",
            message: "",
            consent: false,
          });
        } else {
          setStatus("Oops! Something went wrong.");
        }
      } catch (error) {
        setStatus("Error submitting form.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting]
  );

  const interestOptions = [
    {
      value: " Recruitment And Resourcing",
      label: " Recruitment And Resourcing",
    },
    { value: "Build And Operate", label: "Build And Operate" },
    { value: "ServiceCPQ", label: "ServiceCPQ" },
    { value: "Others", label: "Others" },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        once: true,
      },
    },
  };

  const statusVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        once: true,
      },
    },
  };

  const Container = isMobile ? "div" : motion.div;
  const StatusText = isMobile ? "p" : motion.p;

  return (
    <section className="py-12 md:py-16 lg:py-16 bg-gradient-to-b from-[#F0F9FB] to-[#D9E8ED]/60 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/4 right-1/4 w-56 h-56 bg-[#0098AF]/20 rounded-full blur-3xl -z-10"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full bg-dot-pattern bg-[length:20px_20px] opacity-[0.03]"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-[#003C46] tracking-tight drop-shadow-sm">
            {TITLE}
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mt-2 max-w-2xl">
            {DESCRIPTION}
          </p>
        </div>
        <section ref={sectionRef} className="relative">
          <Container
            {...(!isMobile && {
              initial: "hidden",
              animate: hasAnimated ? "visible" : "hidden",
              variants: fadeInVariants,
            })}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-[#003C46] mb-4 flex items-center gap-2">
                  <FiMail className="text-[#0098AF]" />
                  Contact Us
                </h3>
                <p className="text-sm text-gray-600 mb-2">{EMAIL.TITLE}</p>
                <Link
                  href={`mailto:${EMAIL.ADDRESS}`}
                  className="text-sm text-[#0098AF] hover:underline break-all"
                >
                  {EMAIL.ADDRESS}
                </Link>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-[#003C46] mb-4 flex items-center gap-2">
                  <FiMapPin className="text-[#0098AF]" />
                  Our Locations
                </h3>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-800">
                    Headquarters
                  </p>
                  <p className="text-sm text-gray-600">
                    Vadodara, India - 390007
                  </p>
                  <p className="text-sm text-gray-600">
                    1st floor Kplex, Genda Circle, Vadodara, Gujarat, India
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-800">
                    Branch Office
                  </p>
                  <p className="text-sm text-gray-600">Delhi, India</p>
                </div>
                <div className="mb-0">
                  <p className="text-sm font-semibold text-gray-800">
                    Branch Office
                  </p>
                  <p className="text-sm text-gray-600">Chicago, IL, USA</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#0098AF]">
              <h2 className="text-2xl font-semibold text-[#003C46] mb-6">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full border border-gray-200 focus:border-[#0098AF] focus:ring-2 focus:ring-[#0098AF]/20 rounded-md text-base py-3 px-4 transition-all duration-200 placeholder-gray-400 text-gray-800"
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full border border-gray-200 focus:border-[#0098AF] focus:ring-2 focus:ring-[#0098AF]/20 rounded-md text-base py-3 px-4 transition-all duration-200 placeholder-gray-400 text-gray-800"
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    id="company"
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className="w-full border border-gray-200 focus:border-[#0098AF] focus:ring-2 focus:ring-[#0098AF]/20 rounded-md text-base py-3 px-4 transition-all duration-200 placeholder-gray-400 text-gray-800"
                    required
                    disabled={isSubmitting}
                  />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full border border-gray-200 focus:border-[#0098AF] focus:ring-2 focus:ring-[#0098AF]/20 rounded-md text-base py-3 px-4 transition-all duration-200 placeholder-gray-400 text-gray-800"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full border border-gray-200 focus:border-[#0098AF] focus:ring-2 focus:ring-[#0098AF]/20 rounded-md text-base py-3 px-4 transition-all duration-200 placeholder-gray-400 text-gray-800"
                  required
                  disabled={isSubmitting}
                />
                <Select
                  value={formData.interestedIn}
                  onValueChange={(value) =>
                    handleInputChange("interestedIn", value)
                  }
                  disabled={isSubmitting}
                >
                  <SelectTrigger className="w-full border border-gray-200 focus:border-[#0098AF] focus:ring-2 focus:ring-[#0098AF]/20 rounded-md text-base py-3 px-4 text-gray-600">
                    <SelectValue placeholder="Interested In" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200 rounded-md shadow-lg">
                    {interestOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-base py-2 px-4 hover:bg-[#0098AF] hover:text-white transition-colors duration-150"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full border border-gray-200 focus:border-[#0098AF] focus:ring-2 focus:ring-[#0098AF]/20 rounded-md text-base py-3 px-4 h-32 transition-all duration-200 resize-none placeholder-gray-400 text-gray-800"
                  required
                  disabled={isSubmitting}
                />
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      handleInputChange("consent", !!checked)
                    }
                    className="h-5 w-5 border-gray-300 text-[#0098AF] focus:ring-[#0098AF] rounded"
                    disabled={isSubmitting}
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to receive further communication. See our{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-[#0098AF] hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>
                {status && (
                  <StatusText
                    {...(!isMobile && {
                      initial: "hidden",
                      animate: hasAnimated ? "visible" : "hidden",
                      variants: statusVariants,
                    })}
                    className={`text-sm font-medium text-center ${
                      status.includes("Error") || status.includes("Oops")
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {status}
                  </StatusText>
                )}
                <Button
                  type="submit"
                  className="w-full bg-[#0098AF] text-white hover:bg-[#007A8C] rounded-md py-3 px-6 text-base font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </Container>
        </section>
      </div>
    </section>
  );
}

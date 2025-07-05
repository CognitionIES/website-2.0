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
import { FiMail } from "react-icons/fi";
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
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { TITLE, DESCRIPTION, EMAIL } = CONTACT_CONSTANTS.CONTACT;

  useEffect(() => {
    if (isMobile) return; // Skip observer for mobile
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
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
  }, [isMobile]);

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
    { value: "Product Engineering", label: "Product Engineering" },
    { value: "Plant Engineering", label: "Plant Engineering" },
    { value: "ServiceCPQ", label: "ServiceCPQ" },
    { value: "Staffing And Recruitment", label: "Staffing And Recruitment" },
    { value: "Others", label: "Others" },
  ];

  // Animation variants for desktop only
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4 } },
  };

  const statusVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "80%", transition: { delay: 0.6, duration: 1 } },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: { delay: 0.7, duration: 1 },
    },
  };

  // Conditionally select motion or static component
  const Container = isMobile ? "div" : motion.div;
  const StatusText = isMobile ? "p" : motion.p;
  const Line = isMobile ? "span" : motion.span;
  const Circle = isMobile ? "div" : motion.div;

  return (
    <section className="py-12 sm:py-8 md:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="relative py-2">
        {isMobile ? (
          <h1 className="absolute text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold text-[#0098af] opacity-10 -top-5 sm:-top-10 md:-top-14 lg:-top-16 left-1/2 transform -translate-x-1/2 font-montserrat whitespace-nowrap">
            CONTACT
          </h1>
        ) : (
          <h1 className="absolute text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold text-[#0098af] opacity-10 -top-8 sm:-top-10 md:-top-14 lg:-top-16 left-1/2 transform -translate-x-1/2 font-montserrat whitespace-nowrap">
            CONTACT
          </h1>
        )}

        {isMobile ? (
          <h1 className="relative text-xl font-bold tracking-wide font-montserrat px-4 text-center">
            <p className="text-[#5b5b5b]">{TITLE}</p>
          </h1>
        ) : (
          <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-center font-bold tracking-wide font-montserrat px-4">
            <p className="text-[#5b5b5b]">{TITLE}</p>
          </h1>
        )}
      </div>
      <section ref={sectionRef} className="w-full relative">
        <div className="max-w-[95%] sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 relative">
          <Container
            {...(!isMobile && {
              initial: "hidden",
              animate: isInView ? "visible" : "hidden",
              variants: fadeInVariants,
            })}
            className={
              isMobile
                ? "space-y-6"
                : "grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
            }
          >
            {/* Left Section */}
            {isMobile ? (
              <div className="space-y-3">
                <p className="text-base font-semibold tracking-tight uppercase text-[#003C46]">
                  Bring Your Vision to Life
                </p>
                <p className="text-xs text-gray-600 text-justify leading-relaxed">
                  {DESCRIPTION}
                </p>
              </div>
            ) : (
              <div className="lg:col-span-1 space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-[#003C46] font-semibold tracking-tight uppercase mb-2 sm:mb-4">
                  Bring Your Vision to Life
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 text-justify leading-relaxed mb-6 sm:mb-8 md:mb-14">
                  {DESCRIPTION}
                </p>
                <div className="text-gray-600 bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <FiMail className="text-[#0098AF] text-base sm:text-lg md:text-xl" />
                    <div>
                      <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800">
                        {EMAIL.TITLE}
                      </h3>
                      <Link
                        href={`mailto:${EMAIL.ADDRESS}`}
                        className="text-[10px] sm:text-xs md:text-sm text-[#0098AF] hover:underline break-all"
                      >
                        {EMAIL.ADDRESS}
                      </Link>
                    </div>
                  </div>
                </div>
                <Line
                  initial="hidden"
                  whileInView="visible"
                  variants={lineVariants}
                  className="block h-1 w-3/4 sm:w-[80%] bg-gradient-to-r from-[#0098af] to-white opacity-70 rounded-full"
                />
              </div>
            )}

            {/* Contact Form */}
            {isMobile ? (
              <div>
                <div className="bg-white p-4 rounded-xl border-t-4 border-[#0098AF] w-full">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      id="name"
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs py-2 px-3 transition-all duration-200 placeholder-gray-400 text-black"
                      required
                      disabled={isSubmitting}
                    />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs py-2 px-3 transition-all duration-200 placeholder-gray-400 text-black"
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
                      className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs py-2 px-3 transition-all duration-200 placeholder-gray-400 text-black"
                      required
                      disabled={isSubmitting}
                    />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs py-2 px-3 transition-all duration-200 placeholder-gray-400 text-black"
                      required
                      disabled={isSubmitting}
                    />
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs py-2 px-3 transition-all duration-200 placeholder-gray-400 text-black"
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
                      <SelectTrigger className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs py-2 px-3 transition-all duration-200 text-gray-500">
                        <SelectValue placeholder="Interested In" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300 rounded-lg shadow-md">
                        {interestOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="text-xs py-1.5 px-3 hover:bg-[#0098AF] hover:text-white transition-colors duration-150"
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
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs py-2 px-3 h-20 transition-all duration-200 resize-none placeholder-gray-400 text-black"
                      required
                      disabled={isSubmitting}
                    />
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) =>
                            handleInputChange("consent", !!checked)
                          }
                          className="h-4 w-4 border-gray-300 text-[#0098AF] focus:ring-[#0098AF] rounded transition-colors duration-200"
                          disabled={isSubmitting}
                        />
                        <label
                          htmlFor="consent"
                          className="text-xs text-gray-600 leading-tight"
                        >
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
                    </div>
                    {status && (
                      <p
                        className={`text-xs font-medium text-center ${
                          status.includes("Error") || status.includes("Oops")
                            ? "text-red-500"
                            : "text-green-600"
                        }`}
                      >
                        {status}
                      </p>
                    )}
                    <Button
                      type="submit"
                      className="w-full bg-[#0098AF] text-white hover:bg-white hover:text-black rounded-lg py-2 px-4 text-xs transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af] disabled:bg-[#0098AF] disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </Button>
                  </form>
                </div>
                <div className="mt-4">
                  <div className="text-gray-600 bg-white p-3  rounded-lg shadow-sm">
                    <div className="flex items-center space-x-2">
                      <FiMail className="text-[#0098AF] text-base" />
                      <div>
                        <h3 className="text-xs font-semibold text-gray-800">
                          {EMAIL.TITLE}
                        </h3>
                        <Link
                          href={`mailto:${EMAIL.ADDRESS}`}
                          className="text-xs text-[#0098AF] hover:underline break-all"
                        >
                          {EMAIL.ADDRESS}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="lg:col-span-3 bg-white p-4 sm:p-6 rounded-xl border-t-4 border-[#0098AF] w-full">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Input
                      id="name"
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs sm:text-sm py-2 sm:py-2.5 px-3 transition-all duration-200 placeholder-gray-400 text-black"
                      required
                      disabled={isSubmitting}
                    />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs sm:text-sm py-2 sm:py-2.5 px-3 transition-all duration-200 placeholder-gray-400 text-black"
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
                      className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs sm:text-sm py-2 sm:py-2.5 px-3 transition-all duration-200 placeholder-gray-400 text-black"
                      required
                      disabled={isSubmitting}
                    />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs sm:text-sm py-2 sm:py-2.5 px-3 transition-all duration-200 placeholder-gray-400 text-black"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs sm:text-sm py-2 sm:py-2.5 px-3 transition-all duration-200 placeholder-gray-400 text-black"
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
                    <SelectTrigger className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs sm:text-sm py-2 sm:py-2.5 px-3 transition-all duration-200 text-gray-500">
                      <SelectValue placeholder="Interested In" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300 rounded-lg shadow-md">
                      {interestOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="text-xs sm:text-sm py-1.5 px-3 hover:bg-[#0098AF] hover:text-white transition-colors duration-150"
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
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="w-full border border-gray-300 focus:border-[#0098AF] focus:ring-1 focus:ring-[#0098AF] rounded-lg text-xs sm:text-sm py-2 sm:py-2.5 px-3 h-20 sm:h-24 transition-all duration-200 resize-none placeholder-gray-400 text-black"
                    required
                    disabled={isSubmitting}
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) =>
                          handleInputChange("consent", !!checked)
                        }
                        className="h-4 w-4 border-gray-300 text-[#0098AF] focus:ring-[#0098AF] rounded transition-colors duration-200"
                        disabled={isSubmitting}
                      />
                      <label
                        htmlFor="consent"
                        className="text-[10px] sm:text-xs text-gray-600 leading-tight"
                      >
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
                  </div>
                  {status && (
                    <StatusText
                      {...(!isMobile && {
                        initial: "hidden",
                        animate: "visible",
                        variants: statusVariants,
                      })}
                      className={`text-[10px] sm:text-xs font-medium text-center ${
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
                    className="w-full sm:w-auto bg-[#0098AF] text-white hover:bg-white hover:text-black rounded-lg py-2 px-4 text-xs sm:text-sm md:text-base transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-[#0098af] hover:outline hover:outline-2 hover:outline-[#0098af] disabled:bg-[#0098AF] disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </div>
            )}
          </Container>
          {!isMobile && (
            <Circle
              initial="hidden"
              animate="visible"
              variants={circleVariants}
              className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#000000] opacity-20 rounded-full blur-3xl -z-10"
            />
          )}
        </div>
      </section>
    </section>
  );
}

"use client";

// This component shows contact info and a form to send messages
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
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { useState } from "react";
import { CONTACT_CONSTANTS } from "@/constants/contactPage/constants";
import Link from "next/link";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    phone: "",
    interestedIn: "",
    consent: false,
  });

  const [status, setStatus] = useState(""); // For success/error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable form during submission

  const { TITLE, DESCRIPTION, LOCATION,  EMAIL } =
    CONTACT_CONSTANTS.CONTACT;
  const { STAGGER_CHILDREN } = CONTACT_CONSTANTS.ANIMATIONS;

  // Handle form input changes
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handles form submission with Web3Forms
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("");

    const WEB3FORMS_ACCESS_KEY = "8c3f7423-031b-40c2-a2cb-24974d1d61d8"; // Replace with your Web3Forms key
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
        setStatus("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          company: "",
          phone: "",
          interestedIn: "",
          consent: false,
        });
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("Error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dropdown options for "Interested In"
  const interestOptions = [
    { value: "sales", label: "Sales Inquiry" },
    { value: "support", label: "Support Request" },
    { value: "partnership", label: "Partnership Opportunity" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER_CHILDREN}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Info */}
          <div className="space-y-8 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5B5B5B] mb-6 tracking-tight">
              {TITLE}
            </h2>
            <p className="text-lg font-light leading-relaxed text-gray-700 relative">
              {DESCRIPTION}
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "20%" }}
                transition={{ duration: 1 }}
                className="absolute -top-[30px] left-0 h-[3px] bg-[#0098AF] opacity-50"
              />
            </p>
            {/* Location */}
            <div className="flex items-center space-x-4">
              <FiMapPin className="h-6 w-6 text-[#0098AF]" />
              <div>
                <h3 className="text-lg font-medium text-[#5B5B5B]">
                  {LOCATION.TITLE}
                </h3>
                <p className="text-gray-700 font-light">{LOCATION.ADDRESS}</p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FiPhone className="h-6 w-6 text-[#0098AF]" />
              {/* <div>
                <h3 className="text-lg font-medium text-[#5B5B5B]">
                  {PHONE.TITLE}
                </h3>
                {PHONE.NUMBERS.map((number, index) => (
                  <p key={index} className="text-gray-700 font-light">
                    {number}
                  </p>
                ))}
              </div> */}
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FiMail className="h-6 w-6 text-[#0098AF]" />
              <div>
                <h3 className="text-lg font-medium text-[#5B5B5B]">
                  {EMAIL.TITLE}
                </h3>
                <p className="text-gray-700 font-light">{EMAIL.ADDRESS}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg border border-[#0098AF]/30 relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#5B5B5B]"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="mt-1"
                  required
                  disabled={isSubmitting}
                />
              </div>
              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#5B5B5B]"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1"
                  required
                  disabled={isSubmitting}
                />
              </div>
              {/* Company field */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-[#5B5B5B]"
                >
                  Company Name
                </label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="mt-1"
                  required
                  disabled={isSubmitting}
                />
              </div>
              {/* Phone field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#5B5B5B]"
                >
                  Phone No.
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-1"
                  required
                  disabled={isSubmitting}
                />
              </div>
              {/* Subject field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#5B5B5B]"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="mt-1"
                  required
                  disabled={isSubmitting}
                />
              </div>
              {/* Interested In field */}
              <div>
                <label
                  htmlFor="interestedIn"
                  className="block text-sm font-medium text-[#5B5B5B]"
                >
                  Interested In
                </label>
                <Select
                  value={formData.interestedIn}
                  onValueChange={(value) =>
                    handleInputChange("interestedIn", value)
                  }
                  disabled={isSubmitting}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {interestOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#5B5B5B]"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="mt-1"
                  rows={4}
                  required
                  disabled={isSubmitting}
                />
              </div>
              {/* Consent Checkbox */}
              <div className="flex items-start gap-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    handleInputChange("consent", !!checked)
                  }
                  className="border-[#0098AF] data-[state=checked]:bg-[#0098AF]"
                  disabled={isSubmitting}
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  Yes, I am OK to receive further communication over my details
                  shared here. Refer to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#0098AF] hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for more info.
                </label>
              </div>
              {/* Status Message */}
              {status && (
                <p
                  className={`text-sm ${
                    status.includes("Error") || status.includes("Oops")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {status}
                </p>
              )}
              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-[#0098AF] text-white hover:bg-[#007A8C] rounded-full py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
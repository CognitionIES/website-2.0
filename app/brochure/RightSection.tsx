// app/brochure/RightSection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useCallback } from "react";
import Link from "next/link";
import { BROCHURE_CONSTANTS } from "@/constants/brochurePage/constants";

const Product_PDF_PATH = "/pdf/COGNITION_Brochure_Product.pdf";
const Plant_PDF_PATH = "/pdf/COGNITION_Brochure_Plant.pdf";

interface RightSectionProps {
  selectedBrochure: "product" | "plant";
}

export default function RightSection({ selectedBrochure }: RightSectionProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    industry: "",
    country: "",
    marketingConsent: false,
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEB3FORMS_ACCESS_KEY = "aba4ac86-a28e-496a-86bb-e3c981356299";
  const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

  const { TITLE, PRIVACY_LINK, CONSENT_TEXT, COUNTRIES } =
    BROCHURE_CONSTANTS.RIGHT_CONTENT;

  const industryOptions = BROCHURE_CONSTANTS.INDUSTRIES.flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      value: subcategory,
      label: subcategory,
    }))
  );

  const handleInputChange = useCallback(
    (field: string, value: string | boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const isFormValid = useCallback(() => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.companyName.trim() !== "" &&
      formData.jobTitle.trim() !== "" &&
      formData.industry !== "" &&
      formData.country !== "" &&
      formData.marketingConsent
    );
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isSubmitting || !isFormValid()) return;

      setIsSubmitting(true);
      setStatus("");

      try {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: "New Brochure Download Request",
            from_name: "Your Company Website",
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            companyName: formData.companyName,
            jobTitle: formData.jobTitle,
            industry: formData.industry,
            country: formData.country,
            marketingConsent: formData.marketingConsent ? "Yes" : "No",
            brochureType: selectedBrochure,
          }),
        });

        const result = await response.json();

        if (result.success) {
          const pdfPath =
            selectedBrochure === "product" ? Product_PDF_PATH : Plant_PDF_PATH;
          window.open(pdfPath, "_blank");
          setStatus("Success! Check the new tab for your brochure.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            companyName: "",
            jobTitle: "",
            industry: "",
            country: "",
            marketingConsent: false,
          });
        } else {
          throw new Error(result.message || "Form submission failed");
        }
      } catch (error) {
        console.error("Submission Error:", error);
        setStatus("Error submitting form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting, isFormValid, selectedBrochure]
  );

  return (
    <div className="w-full lg:w-1/2 rounded-xl h-[570px] shadow-xl bg-[#0098af]/60 mb-24">
      
      <div className="  px-6 py-3 rounded-lg ">
        <div className=" px-6 py-3 rounded-lg shadow-xl bg-white">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-3xl font-bold text-center  text-black mb-4 "
        >
          {TITLE}
        </motion.h2>
        

        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                First Name *
              </label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full bg-[#E6F0F5] border-none rounded-md text-sm py-2 px-3 placeholder-[#5b5b5b]"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Last Name *
              </label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full bg-[#E6F0F5] border-none rounded-md text-sm py-2 px-3 placeholder-[#5b5b5b]"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Business E-Mail *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full bg-[#E6F0F5] border-none rounded-md text-sm py-2 px-3 placeholder-[#E6F0F5]"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Company Name *
              </label>
              <Input
                id="companyName"
                type="text"
                placeholder="Company Ltd."
                value={formData.companyName}
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
                className="w-full bg-[#E6F0F5] border-none rounded-md text-sm py-2 px-3 placeholder-[#5b5b5b]"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Job Title *
            </label>
            <Input
              id="jobTitle"
              type="text"
              placeholder="Senior Engineer"
              value={formData.jobTitle}
              onChange={(e) => handleInputChange("jobTitle", e.target.value)}
              className="w-full bg-[#E6F0F5] border-none rounded-md text-sm py-2 px-3 placeholder-[#5b5b5b]"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Select Industry *
              </label>
              <Select
                value={formData.industry}
                onValueChange={(value) => handleInputChange("industry", value)}
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-full bg-[#E6F0F5] border-none rounded-md text-sm py-2 px-3 text-[#5b5b5b]">
                  <SelectValue placeholder="- Select -" />
                </SelectTrigger>
                <SelectContent className="bg-[#E6F0F5] border-none rounded-md shadow-md">
                  {industryOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="text-sm py-1.5 px-3 hover:bg-[#003C46] hover:text-black transition-colors duration-150"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Select Country *
              </label>
              <Select
                value={formData.country}
                onValueChange={(value) => handleInputChange("country", value)}
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-full bg-[#E6F0F5] border-none rounded-md text-sm py-2 px-3 text-[#5b5b5b]">
                  <SelectValue placeholder="- Select -" />
                </SelectTrigger>
                <SelectContent className="bg-[#E6F0F5] border-none rounded-md shadow-md">
                  {COUNTRIES.map((country) => (
                    <SelectItem
                      key={country}
                      value={country}
                      className="text-sm py-1.5 px-3 hover:bg-[#003C46] hover:text-black transition-colors duration-150"
                    >
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="marketingConsent"
              checked={formData.marketingConsent}
              onCheckedChange={(checked) =>
                handleInputChange("marketingConsent", !!checked)
              }
              className="h-4 w-4 border-gray-300 text-[#0098af] focus:ring-[#0098af] rounded transition-colors duration-200"
              disabled={isSubmitting}
            />
            <label
              htmlFor="marketingConsent"
              className="text-sm text-black leading-tight"
            >
              {CONSENT_TEXT} By clicking Submit, you agree to the{" "}
              <Link
                href={PRIVACY_LINK}
                className="text-[#0098af] hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          {status && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-sm font-medium text-center ${
                status.includes("Error") ? "text-red-500" : "text-green-600"
              }`}
            >
              {status}
            </motion.p>
          )}
          <Button
            type="submit"
            className="w-full bg-[#0098af] hover:bg-[#E6F0F5] hover:text-[#0098af] text-black text-base font-medium rounded-md transition-transform disabled:bg-[#5b5b5b] disabled:text-gray-700 disabled:cursor-not-allowed"
            disabled={isSubmitting || !isFormValid()}
          >
            {isSubmitting ? "Submitting..." : "Download Brochure"}
          </Button>
        </form>
        </div>
      </div>
    </div>
  );
}

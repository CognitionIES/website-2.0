import React from "react";
import { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
//import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, User, Briefcase } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "India",
    jobTitle: "",
    message: "",
    resume: null as File | null,
    resumeBase64: "", // Added to store base64 string
    consent: false,
  });

  const handleInputChange = (
    field: string,
    value: string | boolean | File | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      // Convert file to base64
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result as string;
        setFormData((prev) => ({
          ...prev,
          resume: file,
          resumeBase64: base64String.split(",")[1], // Remove data:image/pdf;base64, prefix
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent || !formData.resume || !formData.resumeBase64) {
      toast({
        title: "Missing required fields",
        description: "Please complete all required fields and upload a resume.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data for EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        job_title: formData.jobTitle,
        message: formData.message,
        resume_name: formData.resume.name,
        resume_data: formData.resumeBase64,
        resume_type: formData.resume.type,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        "service_4jm4x6o", // Service ID
        "template_x7agzcz", // Template ID
        templateParams,
        "YHfV6LAgPBcm9VnHd" // Public Key
      );

      if (response.status === 200) {
        toast({
          title: "Application Submitted",
          description:
            "Thank you for your application! We'll be in touch soon.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: "India",
          jobTitle: "",
          message: "",
          resume: null,
          resumeBase64: "",
          consent: false,
        });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Submission Failed",
        description:
          "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update state when section enters or leaves view
      },
      {
        threshold: 0.2, // Triggers when 20% of the section is visible
        rootMargin: "0px 0px -20% 0px", // Ensures it triggers only when scrolling down into the section
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants for fade-in and fade-out
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <section
        ref={sectionRef}
        className="w-full py-4 sm:py-8 lg:py-4 sm:h-[620px] relative bg-[#0098af]/10 rounded-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl  lg:text-5xl font-bold text-[#003C46] relative drop-shadow-md text-center text-center">
              Apply Now{" "}
            </h2>
          </div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className=" items-center"
          >
            <div className="max-w-3xl mx-auto">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1">
                      <Label
                        htmlFor="firstName"
                        className="text-[#003C46] font-medium text-sm sm:text-base"
                      >
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          required
                          className="pl-10 h-10 sm:h-11 border-[#5B5B5B]/30 focus-visible:ring-[#0098AF] text-sm sm:text-base"
                          placeholder="Enter your first name"
                          disabled={isSubmitting}
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label
                        htmlFor="lastName"
                        className="text-[#003C46] font-medium text-sm sm:text-base"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          required
                          className="pl-10 h-10 sm:h-11 border-[#5B5B5B]/30 focus-visible:ring-[#0098AF] text-sm sm:text-base"
                          placeholder="Enter your last name"
                          disabled={isSubmitting}
                        />
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1">
                      <Label
                        htmlFor="email"
                        className="text-[#003C46] font-medium text-sm sm:text-base"
                      >
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          className="pl-10 h-10 sm:h-11 border-[#5B5B5B]/30 focus-visible:ring-[#0098AF] text-sm sm:text-base"
                          placeholder="youremail@example.com"
                          disabled={isSubmitting}
                        />
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label
                        htmlFor="phone"
                        className="text-[#003C46] font-medium text-sm sm:text-base"
                      >
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                          className="pl-10 h-10 sm:h-11 border-[#5B5B5B]/30 focus-visible:ring-[#0098AF] text-sm sm:text-base"
                          placeholder="+1 (555) 000-0000"
                          disabled={isSubmitting}
                        />
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1">
                      <Label
                        htmlFor="location"
                        className="text-[#003C46] font-medium text-sm sm:text-base"
                      >
                        Preferred Location{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Select
                          value={formData.location}
                          onValueChange={(value) =>
                            handleInputChange("location", value)
                          }
                          disabled={isSubmitting}
                        >
                          <SelectTrigger className="pl-10 h-10 sm:h-11 border-[#5B5B5B]/30 focus:ring-[#0098AF] text-sm sm:text-base">
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="India">India</SelectItem>
                            <SelectItem value="USA">USA</SelectItem>
                            <SelectItem value="remote">Remote</SelectItem>
                          </SelectContent>
                        </Select>
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 h-4 w-4 z-10" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label
                        htmlFor="jobTitle"
                        className="text-[#003C46] font-medium text-sm sm:text-base"
                      >
                        Job Title <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="jobTitle"
                          value={formData.jobTitle}
                          onChange={(e) =>
                            handleInputChange("jobTitle", e.target.value)
                          }
                          required
                          className="pl-10 h-10 sm:h-11 border-[#5B5B5B]/30 focus-visible:ring-[#0098AF] text-sm sm:text-base"
                          placeholder="Enter your desired job title"
                          disabled={isSubmitting}
                        />
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B5B5B]/50 h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-1">
                    <Label
                      htmlFor="resume"
                      className="text-[#003C46] font-medium text-sm sm:text-base"
                    >
                      Resume / CV <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <input
                        id="resume"
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        required
                        disabled={isSubmitting}
                      />
                      <label htmlFor="resume" className="cursor-pointer">
                        <span className="bg-[#0098af]/20 border border-[#5B5B5B]/30 text-black/80 font-bold py-2 px-4 rounded hover:bg-[#0098af]/50 transition duration-200 text-sm sm:text-base">
                          Upload Resume
                        </span>
                      </label>
                      <span className="text-[#5B5B5B] text-xs sm:text-sm">
                        Upload in DOC, DOCX, or PDF format (max 5MB)
                      </span>
                    </div>
                  </div>

                  {/* Message */}
                  {/* <div className="space-y-1">
                  <Label
                    htmlFor="message"
                    className="text-[#003C46] font-medium text-sm sm:text-base"
                  >
                    Tell Us About Yourself
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="min-h-18 sm:min-h-18 border-[#5B5B5B]/30 focus-visible:ring-[#0098AF] text-sm sm:text-base"
                    placeholder="Tell us about yourself, your experience, and why you're interested in joining our team..."
                    disabled={isSubmitting}
                  />
                </div> */}

                  {/* Consent */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) =>
                        handleInputChange("consent", checked === true)
                      }
                      disabled={isSubmitting}
                      className="mt-1 text-[#0098AF] border-[#5B5B5B]/50"
                    />
                    <div className="space-y-1">
                      <Label
                        htmlFor="consent"
                        className="text-[#5B5B5B] text-xs sm:text-sm cursor-pointer"
                      >
                        I agree to the{" "}
                        <a href="/privacy-policy" className="text-[#0098AF] hover:underline">
                          Privacy Policy
                        </a>{" "}
                        and consent to having my personal data processed for
                        recruitment purposes.
                      </Label>
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting || !formData.consent || !formData.resume
                    }
                    className="w-full bg-[#0098AF] hover:bg-[#007B8F] text-white py-4 sm:py-5 text-sm sm:text-base"
                  >
                    {isSubmitting
                      ? "Submitting Application..."
                      : "Submit Application"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationForm;

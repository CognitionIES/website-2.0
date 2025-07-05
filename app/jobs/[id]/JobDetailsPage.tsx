/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/Badge";
import { toast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";

type Job = {
  id: string;
  title: string;
  location: string;
  job_type: string | null;
  description: string;
  salary: string | null;
  years_experience: number | null;
  skills: string[] | null;
};

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

export default function JobDetailsPage({ job, id }: { job: Job; id: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const resumeRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    location: "",
    cover_letter: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setUploadProgress(0);

    const file = resumeRef.current?.files?.[0];
    if (!file) {
      toast({
        variant: "destructive",
        title: "Please upload a resume",
      });
      setSubmitting(false);
      return;
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      toast({
        variant: "destructive",
        title: "Please upload a PDF or Word document",
      });
      setSubmitting(false);
      return;
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      toast({
        variant: "destructive",
        title: "File size exceeds 5MB limit",
      });
      setSubmitting(false);
      return;
    }

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 300);

      const filename = `resume_${Date.now()}_${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filename, file);

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (uploadError) throw uploadError;

      // Get the public URL for the uploaded file
      const { data: publicUrlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(filename);

      if (!publicUrlData?.publicUrl) {
        throw new Error("Failed to generate public URL for resume");
      }

      const { error: appError } = await supabase.from("applications").insert({
        job_id: id,
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        experience: form.experience || null,
        location: form.location || null,
        cover_letter: form.cover_letter || null,
        resume_url: publicUrlData.publicUrl, // Store the public URL
      });

      if (appError) throw appError;

      toast({ title: "Application submitted!" });
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        experience: "",
        location: "",
        cover_letter: "",
      });
      if (resumeRef.current) resumeRef.current.value = "";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error submitting application:", err);
      toast({
        variant: "destructive",
        title: err.message || "Submission failed",
      });
    } finally {
      setSubmitting(false);
      setUploadProgress(0);
    }
  };

  if (!job) return <div className="text-center py-16">Job not found.</div>;

  // Parse job description into bullet points
  const descriptionPoints = job.description
    .split(/•|-/)
    .map((point) => point.trim())
    .filter((point) => point.length > 0);

  return (
    <div className="bg-[#E6F0F5]/40 min-h-screen">
      <MegaMenu />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8">
            <CardHeader className="pb-3">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <CardTitle className="text-2xl text-[#003C46]">
                  {job.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-[#0098af] text-white px-2 py-1 text-sm rounded">
                  {job.location}
                </span>
                {job.job_type && (
                  <span className="inline-block bg-[#00b4d8] text-white px-2 py-1 text-sm rounded">
                    {job.job_type}
                  </span>
                )}
                {job.years_experience !== null &&
                  job.years_experience !== undefined && (
                    <span className="inline-block bg-[#E6F0F5] text-[#003C46] px-2 py-1 text-sm rounded">
                      {job.years_experience}+ years experience
                    </span>
                  )}
                {job.salary && (
                  <span className="inline-block bg-[#E6F0F5] text-[#0098af] px-2 py-1 text-sm rounded">
                    Salary: {job.salary}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#003C46] mb-2">
                  Job Description
                </h3>
                <ul className="list-disc pl-4 text-sm text-[#5b5b5b] space-y-1">
                  {descriptionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {job.skills && job.skills.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-[#003C46] mb-2">
                    Key Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-gray-200 text-[#003C46] border-none text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Apply for this job</CardTitle>
            </CardHeader>
            <CardContent>
              {success ? (
                <div className="text-green-700 py-8 text-center">
                  <h3 className="text-xl font-bold mb-2">
                    Application submitted!
                  </h3>
                  <p className="text-green-600">
                    Thank you for applying. We‘ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1 text-[#5b5b5b]"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="border-[#E6F0F5] focus:border-[#0098af]"
                        aria-label="Full Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1 text-[#5b5b5b]"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="border-[#E6F0F5] focus:border-[#0098af]"
                        aria-label="Email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1 text-[#5b5b5b]"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="border-[#E6F0F5] focus:border-[#0098af]"
                        aria-label="Phone Number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="experience"
                        className="block text-sm font-medium mb-1 text-[#5b5b5b]"
                      >
                        Years of Experience{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="experience"
                        name="experience"
                        placeholder="e.g. 3 years"
                        value={form.experience}
                        onChange={handleChange}
                        required
                        className="border-[#E6F0F5] focus:border-[#0098af]"
                        aria-label="Years of Experience"
                      />
                      <span className="text-xs text-[#5b5b5b]">
                        Helps recruiters match you to the job
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium mb-1 text-[#5b5b5b]"
                    >
                      Current Location <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="e.g. New York, NY"
                      value={form.location}
                      onChange={handleChange}
                      required
                      className="border-[#E6F0F5] focus:border-[#0098af]"
                      aria-label="Current Location"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="resume"
                      className="block text-sm font-medium mb-1 text-[#5b5b5b]"
                    >
                      Resume <span className="text-red-500">*</span>
                    </label>
                    <Input
                      ref={resumeRef}
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx,application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="cursor-pointer border-[#E6F0F5] focus:border-[#0098af]"
                      required
                      aria-label="Upload Resume"
                    />
                    <span className="text-xs text-[#5b5b5b]">
                      PDF or Word document (5MB max)
                    </span>

                    {uploadProgress > 0 && (
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#0098af] h-2 rounded-full"
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="cover_letter"
                      className="block text-sm font-medium mb-1 text-[#5b5b5b]"
                    >
                      Cover Letter (optional)
                    </label>
                    <textarea
                      id="cover_letter"
                      name="cover_letter"
                      placeholder="Tell us why you're interested in this position"
                      className="w-full rounded-md border border-[#E6F0F5] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0098af]"
                      rows={4}
                      value={form.cover_letter}
                      onChange={handleChange}
                      aria-label="Cover Letter (optional)"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#0098af] text-white hover:bg-[#00b4d8]"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

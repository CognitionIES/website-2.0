"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/Badge";

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

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const resumeRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    location: "",
    cover_letter: "",
  });
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    fetchJob();
    // eslint-disable-next-line
  }, [id]);

  const fetchJob = async () => {
    if (!id) return;
    const { data, error } = await supabase
      .from("jobs")
      .select("*, years_experience, skills")
      .eq("id", id)
      .eq("is_active", true)
      .maybeSingle<Job>();
    if (error || !data) setJob(null);
    else if (typeof data === "object" && data !== null) {
      setJob({
        ...data,
        years_experience: data.years_experience ?? null,
        skills: data.skills ?? null,
      });
    } else {
      setJob(null);
    }
    setLoading(false);
  };

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
    if (!file || !ALLOWED_TYPES.includes(file.type)) {
      toast({
        variant: "destructive",
        title: "Upload a PDF or Word doc resume",
      });
      setSubmitting(false);
      return;
    }

    try {
      // Simulate upload progress (in a real implementation, this would be based on actual upload progress)
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

      // Set to 100% when upload is complete
      clearInterval(progressInterval);
      setUploadProgress(100);

      if (uploadError) throw uploadError;

      const { error: appError } = await supabase.from("applications").insert({
        job_id: id || "",
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        experience: form.experience || null,
        location: form.location || null,
        cover_letter: form.cover_letter || null,
        resume_url: uploadData?.path,
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
      toast({
        variant: "destructive",
        title: err.message || "Submission failed",
      });
    } finally {
      setSubmitting(false);
      setUploadProgress(0);
    }
  };

  if (loading) return <div className="text-center py-16">Loading...</div>;
  if (!job) return <div className="text-center py-16">Job not found.</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card className="mb-8">
        <CardHeader className="pb-3">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <CardTitle className="text-2xl text-[#003C46]">
              {job.title}
            </CardTitle>
            {job.skills && job.skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-[#E6F0F5] text-[#003C46] border-none"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
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
          </div>
          <div className="mt-4 text-sm whitespace-pre-line">
            {job.description}
          </div>
          {job.salary && (
            <div className="mt-4 text-md font-medium text-[#0098af]">
              Salary: {job.salary}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle> job</CardTitle>
        </CardHeader>
        <CardContent>
          {success ? (
            <div className="text-green-700 py-8 text-center">
              <h3 className="text-xl font-bold mb-2">Application submitted!</h3>
              <p className="text-green-600">
                Thank you for applying. We&apos;ll be in touch soon.
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
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1 text-[#5b5b5b]"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium mb-1 text-[#5b5b5b]"
                  >
                    Years of Experience
                  </label>
                  <Input
                    id="experience"
                    name="experience"
                    placeholder="e.g. 3 years"
                    value={form.experience}
                    onChange={handleChange}
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
                  Current Location
                </label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g. New York, NY"
                  value={form.location}
                  onChange={handleChange}
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
                  className="cursor-pointer"
                  required
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
                  className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  rows={4}
                  value={form.cover_letter}
                  onChange={handleChange}
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
    </div>
  );
};

export default JobDetail;

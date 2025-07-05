import { supabase } from "@/integrations/supabase/client";
import JobDetailsPage from "./JobDetailsPage";

// Define the Job type
type Job = {
  id: string;
  title: string;
  description: string;
  location: string;
  salary: string | null;
  job_type: string | null;
  years_experience: number | null;
  skills: string[] | null;
  is_active: boolean;
  created_at: string;
};

// Generate static parameters for all active jobs
export async function generateStaticParams() {
  const { data: jobs, error } = await supabase
    .from("jobs")
    .select("id")
    .eq("is_active", true);

  if (error) {
    console.error("Error fetching job IDs for static params:", error);
    return [];
  }

  return jobs?.map((job) => ({
    id: job.id,
  })) || [];
}

// Server Component to fetch job data and render the Client Component
export default async function JobDetailsServerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const { data: job, error } = await supabase
      .from("jobs")
      .select("id, title, location, job_type, description, salary, years_experience, skills")
      .eq("id", id)
      .eq("is_active", true)
      .maybeSingle();

    if (error) {
      console.error("Supabase error fetching job:", error);
      throw new Error(`Failed to fetch job: ${error.message}`);
    }

    if (!job) {
      return <div>Job not found.</div>;
    }

    return <JobDetailsPage job={job as unknown as Job} id={id} />;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Unexpected error fetching job:", err);
    return <div>Error loading job: {err.message || "Unknown error"}</div>;
  }
}
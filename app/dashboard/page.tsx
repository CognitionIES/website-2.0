/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Plus, Edit, Eye, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import JobForm from "@/components/JobForm";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";

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
  employer_id: string; // Added employer_id property
};

const Dashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [session, setSession] = useState<any>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  const router = useRouter(); // Replace useNavigate with useRouter

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => setSession(session));
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) router.push("/auth"); // Use router.push
    });
    return () => subscription?.unsubscribe();
  }, [router]);
  useEffect(() => {
    if (session?.user) {
      fetchJobs();
    }
  }, [session, filter]);

  const handleJobSave = async (job: Partial<Job>) => {
    if (!session?.user?.id) {
      toast({ variant: "destructive", title: "User not authenticated" });
      return;
    }
    setDialogOpen(false);
    try {
      if (editingJob) {
        const { error } = await supabase
          .from("jobs")
          .update(job)
          .eq("id", editingJob.id);
        if (error) throw error;
        toast({ title: "Job updated successfully" });
      } else {
        const { error } = await supabase.from("jobs").insert({
          title: job.title || "",
          description: job.description || "",
          location: job.location || "",
          employer_id: session.user.id,
          salary: job.salary || null,
          job_type: job.job_type || null,
          years_experience: job.years_experience || null,
          skills: job.skills || null,
          is_active: job.is_active ?? true,
        });
        if (error) throw error;
        toast({ title: "Job added successfully" });
      }
      fetchJobs();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving job",
        description: error.message,
      });
    }
  };
  const fetchJobs = async () => {
    setLoading(true);
    let query = supabase
      .from("jobs")
      .select("*")
      .eq("employer_id", session.user.id)
      .order("created_at", { ascending: false });

    if (filter === "active") {
      query = query.eq("is_active", true);
    } else if (filter === "inactive") {
      query = query.eq("is_active", false);
    }

    const { data, error } = await query;

    if (error) toast({ variant: "destructive", title: error.message });
    setJobs(
      (data || []).map((job) => ({
        id: job.id as string,
        title: job.title as string,
        description: job.description as string,
        location: job.location as string,
        salary: job.salary ?? null,
        job_type: job.job_type ?? null,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        years_experience: (job as any).years_experience ?? null,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        skills: (job as any).skills ?? null,
        is_active: job.is_active as boolean,
        created_at: job.created_at as string,
        employer_id: job.employer_id as string, // Added employer_id
      }))
    );
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    router.push("/auth"); // Use router.push
  };

  const openAddJobDialog = () => {
    setEditingJob(null);
    setDialogOpen(true);
  };

  const openEditJobDialog = (job: Job) => {
    setEditingJob(job);
    setDialogOpen(true);
  };

  const closeJobDialog = () => {
    setDialogOpen(false);
    setEditingJob(null);
  };

  const openDeleteDialog = (jobId: string) => {
    setJobToDelete(jobId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteJob = async () => {
    if (!jobToDelete) {
      toast({ variant: "destructive", title: "No job selected for deletion" });
      setDeleteDialogOpen(false);
      return;
    }

    try {
      setLoading(true);

      console.log("Deleting job with ID:", jobToDelete);
      console.log("Session user ID:", session.user.id);
      console.log(
        "Job employer_id:",
        jobs.find((job) => job.id === jobToDelete)?.employer_id
      );

      const { error, count } = await supabase
        .from("jobs")
        .delete()
        .eq("id", jobToDelete)
        .eq("employer_id", session.user.id);

      console.log("Delete response:", { error, count });

      if (error) {
        throw new Error(`Delete failed: ${error.message}`);
      }

      if (count === 0) {
        throw new Error(
          "No job was deleted. It may not exist, or you lack permission to delete it."
        );
      }

      toast({ title: "Job deleted successfully" });
      await fetchJobs();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error deleting job:", error);
      toast({
        variant: "destructive",
        title: "Error deleting job",
        description: error.message || "An unexpected error occurred",
      });
    } finally {
      setLoading(false);
      setDeleteDialogOpen(false);
      setJobToDelete(null);
    }
  };
  const handleViewApplicants = (jobId: string) => {
    router.push(`/jobs/${jobId}/applicants`); // Use router.push
  };

  return (
    <div>
      <MegaMenu />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-[#003C46]">
              Employer Dashboard
            </h2>
            <p className="text-[#5b5b5b] mt-1">
              Manage your job postings and applicants
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={openAddJobDialog}
              className="bg-[#0098af] text-white hover:bg-[#00b4d8] flex items-center gap-2"
            >
              <Plus size={16} />
              Add New Job
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-[#0098af] text-[#0098af] hover:bg-[#E6F0F5]"
            >
              Logout
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={
                filter === "all" ? "bg-[#0098af] hover:bg-[#00b4d8]" : ""
              }
            >
              All Jobs
            </Button>
            <Button
              variant={filter === "active" ? "default" : "outline"}
              onClick={() => setFilter("active")}
              className={
                filter === "active" ? "bg-[#0098af] hover:bg-[#00b4d8]" : ""
              }
            >
              Active Jobs
            </Button>
            <Button
              variant={filter === "inactive" ? "default" : "outline"}
              onClick={() => setFilter("inactive")}
              className={
                filter === "inactive" ? "bg-[#0098af] hover:bg-[#00b4d8]" : ""
              }
            >
              Inactive Jobs
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading jobs...</div>
        ) : !jobs.length ? (
          <div className="text-center py-12 bg-[#E6F0F5]/50 rounded-lg">
            <p className="text-[#5b5b5b] mb-4">
              No jobs found. Get started by adding your first job posting.
            </p>
            <Button
              onClick={openAddJobDialog}
              className="bg-[#0098af] text-white hover:bg-[#00b4d8]"
            >
              Add Job
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card
                key={job.id}
                className="border-[#E6F0F5] hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg text-[#003C46] line-clamp-2">
                        {job.title}
                      </h3>
                      <span
                        className={`inline-block rounded-full px-2 py-1 text-xs ${
                          job.is_active
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {job.is_active ? "Active" : "Inactive"}
                      </span>
                    </div>

                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="inline-block bg-[#0098af] text-white text-xs rounded px-2 py-0.5">
                        {job.location}
                      </span>
                      {job.job_type && (
                        <span className="inline-block bg-[#00b4d8] text-white text-xs rounded px-2 py-0.5">
                          {job.job_type}
                        </span>
                      )}
                      {job.years_experience && (
                        <span className="inline-block bg-[#E6F0F5] text-[#003C46] text-xs rounded px-2 py-0.5">
                          {job.years_experience}+ years
                        </span>
                      )}
                    </div>

                    <div className="mt-4 text-sm text-[#5b5b5b]">
                      <div className="line-clamp-2">
                        {job.description.slice(0, 100)}
                        {job.description.length > 100 && "..."}
                      </div>
                      {job.salary && (
                        <div className="mt-2 font-medium text-[#0098af]">
                          {job.salary}
                        </div>
                      )}
                    </div>

                    <div className="text-xs text-gray-500 mt-4">
                      Posted on {new Date(job.created_at).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex gap-1 items-center border-[#0098af] text-[#0098af] hover:bg-[#E6F0F5]"
                      onClick={() => handleViewApplicants(job.id)}
                    >
                      <Eye size={14} />
                      Applicants
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex gap-1 items-center"
                      onClick={() => openEditJobDialog(job)}
                    >
                      <Edit size={14} />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex gap-1 items-center text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => openDeleteDialog(job.id)}
                    >
                      <Trash2 size={14} />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Add/Edit Job Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingJob ? "Edit Job" : "Add New Job"}
              </DialogTitle>
              <DialogDescription>
                {editingJob
                  ? "Make changes to the job posting."
                  : "Fill in the details for your new job posting."}
              </DialogDescription>
            </DialogHeader>

            <JobForm
              job={editingJob || undefined}
              onSave={handleJobSave}
              onCancel={closeJobDialog}
            />
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Job</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this job? This action cannot be
                undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteJob}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

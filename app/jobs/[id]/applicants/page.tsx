"use client";
// This file is a client component that fetches and displays job applicants for a specific job
// using Supabase as the backend. It includes filtering options for searching and experience range.

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Updated imports
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Download } from "lucide-react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";

// Define the Job type
type Job = {
  id: string;
  title: string;
};

// Define the Applicant type
type Applicant = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  experience?: string;
  location?: string;
  resume_url: string;
  created_at: string;
  cover_letter?: string;
};

const JobApplicants = () => {
  const params = useParams(); // Updated to useParams from next/navigation
  const id = params?.id as string; // Ensure 'id' is treated as a string
  const router = useRouter(); // Updated to useRouter
  const [job, setJob] = useState<Job | null>(null);
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [filteredApplicants, setFilteredApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [experienceRange, setExperienceRange] = useState<[number, number]>([
    0, 10,
  ]);

  useEffect(() => {
    if (!id) return;
    fetchJobDetails();
    fetchApplicants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    filterApplicants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicants, searchTerm, experienceRange]);

  const fetchJobDetails = async () => {
    if (!id) return;
    const { data, error } = await supabase
      .from("jobs")
      .select("id, title")
      .eq("id", id)
      .single();
    if (error) {
      console.error("Error fetching job details:", error);
    } else {
      setJob(data);
    }
  };

  const fetchApplicants = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("applications")
      .select(
        "id, name, email, phone, experience, location, resume_url, created_at, cover_letter"
      )
      .eq("job_id", id)
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Error fetching applicants:", error);
      setApplicants([]);
    } else {
      setApplicants(
        (data || []).map((applicant) => ({
          ...applicant,
          phone: applicant.phone ?? undefined,
          experience: applicant.experience ?? undefined,
          location: applicant.location ?? undefined,
          cover_letter: applicant.cover_letter ?? undefined,
        }))
      );
    }
    setLoading(false);
  };

  const filterApplicants = () => {
    let filtered = [...applicants];
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (app) =>
          app.name.toLowerCase().includes(term) ||
          app.email.toLowerCase().includes(term) ||
          (app.location && app.location.toLowerCase().includes(term)) ||
          (app.phone && app.phone.toLowerCase().includes(term))
      );
    }
    filtered = filtered.filter((app) => {
      if (!app.experience) return true;
      const expNumber = parseExperienceToNumber(app.experience);
      if (expNumber === null) return true;
      return expNumber >= experienceRange[0] && expNumber <= experienceRange[1];
    });
    setFilteredApplicants(filtered);
  };

  const parseExperienceToNumber = (exp: string): number | null => {
    const match = exp.match(/(\d+)/);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    }
    return null;
  };

  const exportToCsv = () => {
    let csvContent =
      "Name,Email,Phone,Experience,Location,Applied Date,Resume URL\n";
    filteredApplicants.forEach((app) => {
      const row = [
        `"${app.name}"`,
        `"${app.email}"`,
        `"${app.phone || ""}"`,
        `"${app.experience || ""}"`,
        `"${app.location || ""}"`,
        `"${new Date(app.created_at).toLocaleDateString()}"`,
        `"${app.resume_url}"`, // Added resume URL to CSV
      ].join(",");
      csvContent += row + "\n";
    });
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `applicants_${id}_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <MegaMenu />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
          <div>
            <Button
              variant="outline"
              className=""
              onClick={() => router.push("/dashboard")}
            >
              Back to Dashboard
            </Button>
            <h2 className="text-2xl font-bold mt-2 text-[#003C46]">
              {job ? `Applicants for: ${job.title}` : "Applicants"}
            </h2>
          </div>
          {filteredApplicants.length > 0 && (
            <Button
              variant="outline"
              onClick={exportToCsv}
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Export CSV
            </Button>
          )}
        </div>
        {applicants.length > 0 && (
          <div className="bg-[#E6F0F5]/30 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Search applicants
                </label>
                <Input
                  type="text"
                  placeholder="Search by name, email, location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Experience range: {experienceRange[0]} - {experienceRange[1]}{" "}
                  years
                </label>
                <Slider
                  defaultValue={[0, 10]}
                  min={0}
                  max={15}
                  step={1}
                  value={experienceRange}
                  onValueChange={(value) =>
                    setExperienceRange(value as [number, number])
                  }
                  className="py-4"
                />
              </div>
            </div>
          </div>
        )}
        {loading ? (
          <div className="text-center py-8">Loading applicants...</div>
        ) : filteredApplicants.length === 0 ? (
          <div className="text-center py-12 bg-[#E6F0F5]/30 rounded-lg">
            <p className="text-[#5b5b5b] mb-2">
              No applicants found for this job.
            </p>
            <p className="text-sm">
              {searchTerm || experienceRange[0] > 0
                ? "Try adjusting your filters."
                : "When candidates apply, they'll appear here."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Resume</TableHead>
                  <TableHead>Cover Letter</TableHead>
                  <TableHead>Applied</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplicants.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium">{app.name}</TableCell>
                    <TableCell>
                      <a
                        href={`mailto:${app.email}`}
                        className="text-[#0098af] hover:underline"
                      >
                        {app.email}
                      </a>
                    </TableCell>
                    <TableCell>{app.phone || "-"}</TableCell>
                    <TableCell>
                      {app.experience ? (
                        <span className="inline-block rounded bg-[#0098af] text-white px-2 py-1 text-xs">
                          {app.experience}
                        </span>
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell>
                      {app.location ? (
                        <span className="inline-block rounded bg-[#00b4d8] text-white px-2 py-1 text-xs">
                          {app.location}
                        </span>
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell>
                      <a
                        href={app.resume_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-[#0098af]"
                      >
                        View
                      </a>
                    </TableCell>
                    <TableCell>
                      {app.cover_letter ? (
                        <div className="max-w-[150px]">
                          <p className="text-xs truncate">
                            {app.cover_letter.slice(0, 50)}
                            {app.cover_letter.length > 50 && "..."}
                          </p>
                          <button
                            onClick={() => alert(app.cover_letter)}
                            className="text-xs text-[#0098af] hover:underline"
                          >
                            View Full
                          </button>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-xs">None</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <span className="text-xs">
                        {new Date(app.created_at).toLocaleString().slice(0, 16)}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default JobApplicants;

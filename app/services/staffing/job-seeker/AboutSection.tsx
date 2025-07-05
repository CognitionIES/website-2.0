"use client";

import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type Job = {
  id: string;
  title: string;
  location: string;
  job_type: string | null;
  description: string;
};

export default function JobsSection() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data, error } = await supabase
          .from("jobs")
          .select("id, title, location, job_type, description")
          .eq("is_active", true)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching jobs:", error);
          setJobs([]); // Set to empty array on error
          setLoading(false);
          return;
        }

        setJobs((data as Job[]) || []); // Type assertion to ensure data matches Job[]
        setLoading(false);
      } catch (err) {
        console.error("Unexpected error:", err);
        setJobs([]); // Set to empty array on unexpected error
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const searchMatch =
      !search ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());
    const locationMatch =
      !location || job.location.toLowerCase().includes(location.toLowerCase());
    return searchMatch && locationMatch;
  });

  const searchContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#E6F0F5]/40 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#003C46] mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-[#5b5b5b] max-w-3xl mx-auto">
            Explore exciting career opportunities that match your skills
          </p>
        </motion.div>

        <div ref={sectionRef} className="mb-12">
          <motion.div
            variants={searchContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-2xl bg-gradient-to-r from-[#003C46]/30 to-[#0098AF]/30 shadow-xl p-6"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="relative md:col-span-7">
                  <Input
                    type="text"
                    placeholder="Skills, designations, or keywords"
                    className="pl-9 py-6 rounded-xl border-[#E6F0F5] focus:border-[#0098af]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search for skills, designations, or keywords"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <Search className="text-[#5b5b5b]" size={18} />
                  </div>
                </div>

                <div className="relative md:col-span-4">
                  <Input
                    type="text"
                    placeholder="Location"
                    className="pl-9 py-6 rounded-xl border-[#E6F0F5] focus:border-[#0098af]"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    aria-label="Search by location"
                  />
                  <MapPin
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5b5b5b]"
                    size={18}
                  />
                </div>

                <div className="md:col-span-1 flex items-center justify-end">
                  <Button
                    type="submit"
                    className="w-[56px] h-[56px] md:w-[48px] md:h-[48px] bg-[#00b4d8] hover:bg-[#0098af] hover:scale-105 text-white rounded-xl transition-all duration-200 hidden md:flex items-center justify-center"
                    aria-label="Submit search"
                  >
                    <Search size={24} />
                  </Button>
                  <Button
                    type="submit"
                    className="w-full min-h-[56px] bg-[#00b4d8] hover:bg-[#0098af] text-white rounded-xl text-base font-medium md:hidden transition-all duration-200"
                    aria-label="Submit search"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-[#003C46] mb-6">
            {loading
              ? "Loading..."
              : search || location
              ? `${filteredJobs.length} ${
                  filteredJobs.length === 1 ? "Job" : "Jobs"
                } Found`
              : "All Jobs"}
          </h2>

          {loading ? (
            <div className="text-[#5b5b5b] text-center py-12">
              Loading jobs...
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-red-600 mb-4">No Jobs Found</h3>
              <p className="text-[#5b5b5b]">
                Try adjusting your search filters
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-[#E6F0F5] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[#003C46]">
                        {job.title}
                      </h3>
                      <div className="text-sm text-[#5b5b5b] mt-1 flex flex-wrap gap-2">
                        <span>{job.location}</span>
                        {job.job_type && (
                          <span className="inline-block px-2 py-1 text-xs bg-[#E6F0F5] text-[#0098af] rounded-full">
                            {job.job_type}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#5b5b5b] mt-3 line-clamp-3">
                    {job.description}
                  </p>
                  <Link
                    href={`/jobs/${job.id}`}
                    className="mt-4 inline-block text-[#0098af] font-medium hover:text-[#00b4d8] transition-colors duration-200"
                  >
                    View & Apply →
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import jobListings from "@/constants/jobListings";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CAREERS_CONSTANTS } from "@/constants/careersPage/constants";

// Define what a job looks like
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  engagementModel: string;
  description: string;
  applyLink?: string;
}

export default function OpenPositions() {
  const [searchTerm, setSearchTerm] = useState(""); // Holds the search text
  const [locationFilter, setLocationFilter] = useState("all"); // Holds the selected location

  const { TITLE, LOCATIONS } = CAREERS_CONSTANTS.POSITIONS;
  const { STAGGER_CHILDREN, CARD_HOVER } = CAREERS_CONSTANTS.ANIMATIONS;

  // Filter jobs based on search and location
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "all" || job.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={STAGGER_CHILDREN}
      className="py-20 bg-gray-50 relative"
      id="positions"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section title */}
        <div className="relative mb-8">
          <h2 className="text-3xl font-bold text-[#5B5B5B]">
            {TITLE}
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#0098AF] to-transparent" />
          </h2>
        </div>

        {/* Search and filter inputs */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search positions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-[#0098AF]/20 rounded-lg shadow-sm focus:border-[#0098AF] focus:ring-[#0098AF]/10 placeholder-gray-400 transition-all duration-200"
            />
          </div>
          <div>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full md:w-[200px] border border-[#0098AF]/20 rounded-lg shadow-sm focus:border-[#0098AF] focus:ring-[#0098AF]/10">
                <SelectValue placeholder="Filter by location" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-[#0098AF]/10 rounded-lg shadow-md">
                {LOCATIONS.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location === "all" ? "All Locations" : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Job cards */}
        <motion.div variants={STAGGER_CHILDREN} className="grid gap-6">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              variants={CARD_HOVER}
              initial="rest"
              whileHover="hover"
              className="bg-white border border-[#0098AF]/10 rounded-lg shadow-sm"
            >
              <Card className="border-0">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-semibold text-[#5B5B5B] mb-2 hover:text-[#0098AF] transition-colors duration-200">
                        {job.title}
                      </CardTitle>
                      <CardDescription>
                        <div className="flex gap-4 text-sm font-light text-gray-600">
                          <span>{job.department}</span>
                          <span>{job.location}</span>
                        </div>
                      </CardDescription>
                    </div>
                    <Link href={`/jobs/${job.id}`}>
                      <Button
                        variant="default"
                        className="bg-[#0098AF] text-white hover:bg-[#007B8F] px-3 py-1 rounded-lg font-medium shadow-sm hover:scale-105 transition-all duration-200 text-sm"
                      >
                        View Job
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm font-light text-gray-600 leading-relaxed line-clamp-2">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
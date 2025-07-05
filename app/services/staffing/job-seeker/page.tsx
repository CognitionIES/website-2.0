"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
//import { Input } from "@/components/ui/input";
//import {
//  Select,
//  SelectTrigger,
//  SelectValue,
//  SelectContent,
//  SelectItem,
//} from "@/components/ui/select";
//import { Search } from "lucide-react";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
import Footer from "@/components/footer";
import Hero from "./Hero";
import AboutSection from "./AboutSection";

// Sample job data
const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Bangalore",
    experience: "3-5 years",
    skills: ["React", "JavaScript", "CSS"],
    salary: "₹12-15 LPA",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataSys",
    location: "Hyderabad",
    experience: "5-10 years",
    skills: ["Node.js", "Python", "MongoDB"],
    salary: "₹15-20 LPA",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "InnoSoft",
    location: "Mumbai",
    experience: "1-3 years",
    skills: ["React", "Node.js", "SQL"],
    salary: "₹8-12 LPA",
  },
];

const JobSeekersPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [skills, setSkills] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [experience, setExperience] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState<typeof sampleJobs>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple filtering logic based on input
    const filteredJobs = sampleJobs.filter((job) => {
      const skillsMatch = skills
        ? job.skills.some((skill) =>
            skill.toLowerCase().includes(skills.toLowerCase())
          ) || job.title.toLowerCase().includes(skills.toLowerCase())
        : true;

      const expMatch = experience ? job.experience === experience : true;

      const locMatch = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;

      return skillsMatch && expMatch && locMatch;
    });

    setSearchResults(filteredJobs);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MegaMenu />
      <Hero />
      <AboutSection />
      <main className="flex-grow">
        {/* Hero Section */}
        {/* <section className="bg-gradient-to-b from-[#0098af]-[#E6F0F5] via-[#0098af]-[#E6F0F5] to-white py-20 px-4">
          <div className="container mx-auto text-center max-w-6xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003C46] mb-4 leading-tight drop-shadow-sm">
              Find your dream job now
            </h1>
            <p className="text-xl md:text-2xl text-[#5b5b5b] mb-10">
              5 lakh+ jobs for you to explore
            </p>

            {/* Search Box 
            <div className="bg-white rounded-2xl max-w-7xl mx-auto shadow-xl p-6 md:p-8 border border-gray-100">
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="relative md:col-span-6">
                    <Input
                      type="text"
                      placeholder="Enter skills / designations / companies"
                      className="pl-9 py-6 rounded-xl border-gray-200 focus:border-[#0098af]"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                    />
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>

                  <div className="relative md:col-span-3">
                    <Input
                      type="text"
                      placeholder="Enter location"
                      className="py-6 rounded-xl border-gray-200 focus:border-[#0098af]"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Select value={experience} onValueChange={setExperience}>
                      <SelectTrigger className="h-[50px] rounded-xl border-gray-200 focus:border-[#0098af]">
                        <SelectValue placeholder="Years" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="fresher">Fresher</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-1 flex items-center justify-center">
                    <Button
                      type="submit"
                      size="icon"
                      className="w-[50px] h-[50px] bg-[#00b4d8] hover:bg-[#00b4d8]/90 text-white rounded-xl"
                    >
                      <Search size={20} />
                    </Button>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  We use cookies to improve your experience. By continuing to
                  browse the site, you agree to our{" "}
                  <a href="/cookies" className="text-[#0098af] hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </section> */}

        {/* Job Listings Section */}
        <section className="">
            <div className="grid gap-6">
              {searchResults.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-[#003C46]">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{job.company}</p>
                  <div className="mt-3 space-y-2">
                    <p className="text-gray-500">
                      <span className="font-medium">Location:</span>{" "}
                      {job.location}
                    </p>
                    <p className="text-gray-500">
                      <span className="font-medium">Experience:</span>{" "}
                      {job.experience}
                    </p>
                    <p className="text-gray-500">
                      <span className="font-medium">Skills:</span>{" "}
                      {job.skills.join(", ")}
                    </p>
                    <p className="text-gray-500">
                      <span className="font-medium">Salary:</span> {job.salary}
                    </p>
                  </div>
                  <Button className="mt-4 bg-[#0098af] hover:bg-[#007c91] text-white">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JobSeekersPage;

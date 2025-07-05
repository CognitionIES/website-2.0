// import React from "react";
// import FeatureCard from "@/components/FeatureCard";
// import SectionButton from "@/components/SectionButton";
// import DividerElement from "@/components/DividerElement";
// import { Briefcase } from "lucide-react";
// import Image from "next/image";

// const Index = () => {
//   // Job seeker features
//   const jobSeekerFeatures = [
//     {
//       title: "Verified Job Listings",
//       description:
//         "Browse through carefully vetted opportunities that match your skillset and career goals.",
//     },
//     {
//       title: "Personalized Job Matches",
//       description:
//         "Our intelligent system connects you with roles that align with your unique potential and aspirations.",
//     },
//     {
//       title: "Career Guidance",
//       description:
//         "Access expert advice and resources to help you navigate your professional journey.",
//     },
//     {
//       title: "Interview Preparation",
//       description:
//         "Receive tailored coaching to help you present your best self to potential employers.",
//     },
//   ];

//   // Employer features
//   const employerFeatures = [
//     {
//       title: "Dedicated recruitment specialists",
//       description:
//         "Work with industry experts who understand your specific talent needs and market dynamics.",
//     },
//     {
//       title: "Talent sourcing & screening",
//       description:
//         "We identify, evaluate, and present only the most qualified candidates for your consideration.",
//     },
//     {
//       title: "Hiring process optimization",
//       description:
//         "Streamline your recruitment workflow with our proven methodologies and tools.",
//     },
//     {
//       title: "Long-term talent strategies",
//       description:
//         "Develop sustainable approaches to building and maintaining your ideal team.",
//     },
//   ];

//   return (
//     <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col md:flex-row">
//         {/* Job Seekers Column */}
//        <div className="w-full max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row">
//           {/* Job Seekers Column */}
//           <div className="w-full md:w-1/2 gradient-jobseeker p-6 md:p-10">
//             <div className="max-w-lg mx-auto">
//               <div className="text-center mb-8 animate-on-scroll opacity-0">
//                 <h2 className="text-3xl md:text-4xl font-bold text-[#0098af] mb-2 relative inline-block">
//                   For Job Seekers
//                   <span className="absolute -top-1 -right-1 text-sm bg-[#00b4d8] text-white px-2 py-0.5 rounded-full transform rotate-12">
//                     New
//                   </span>
//                 </h2>
//                 <p className="text-[#5b5b5b] italic">
//                   Find Opportunities That Match Your True Potential
//                 </p>
//               </div>

//               <div className="relative mb-8 animate-on-scroll opacity-0">
//                 <div className="rounded-3xl border-4 border-[#0098af] overflow-hidden shadow-lg blob-animation">
//                   <div className="overflow-hidden">
//                     <img
//                       src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
//                       alt="Professional using laptop"
//                       className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
//                     />
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#0098af] to-[#00b4d8] flex items-center justify-center text-white animate-pulse-subtle shadow-lg">
//                   <Briefcase size={24} />
//                 </div>
//               </div>

//               <div
//                 className="mb-8 text-[#5b5b5b] animate-on-scroll opacity-0 text-lg"
//               >
//                 <p>
//                   Your job search should reflect your{" "}
//                   <span className="font-bold text-[#0098af]">
//                     unique potential
//                   </span>
//                   . Our platform connects you with opportunities that align with
//                   your skills, goals, and values, creating a more meaningful path
//                   to your next career move.
//                 </p>
//               </div>

//               <div className="mb-10">
//                 <h3
//                   className="text-xl font-bold text-[#0098af] mb-4 animate-on-scroll opacity-0 flex items-center"
//                 >
//                   <Star className="mr-2 text-[#00b4d8]" size={18} />
//                   What We Offer
//                 </h3>

//                 {jobSeekerFeatures.map((feature, index) => (
//                   <FeatureCard
//                     key={index}
//                     title={feature.title}
//                     description={feature.description}
//                     theme="jobseeker"
//                     delay={400 + index * 100}
//                     icon={feature.icon as 'check' | 'star'}
//                   />
//                 ))}
//               </div>

//               <TestimonialCard
//                 quote="After months of searching, TalentMatch connected me with my dream job in just two weeks!"
//                 author="Sarah Johnson"
//                 position="Software Developer"
//                 theme="jobseeker"
//                 delay={800}
//               />

//               <div
//                 className="text-center animate-on-scroll opacity-0"
//               >
//                 <SectionButton text="Start Your Journey" theme="jobseeker" />
//               </div>
//             </div>
//           </div>

//           {/* Divider */}
//           <DividerElement />

//           {/* Employers Column */}
//           <div className="w-full md:w-1/2 gradient-employer p-6 md:p-10">
//             <div className="max-w-lg mx-auto">
//               <div className="text-center mb-8 animate-on-scroll opacity-0">
//                 <h2 className="text-3xl md:text-4xl font-bold text-[#E6F0F5] mb-2">
//                   For Employers
//                 </h2>
//                 <p className="text-gray-300 italic">
//                   Great Companies Are Built By Great Teams
//                 </p>
//               </div>

//               <div className="relative mb-8 animate-on-scroll opacity-0">
//                 <div className="rounded-3xl border-4 border-[#0098af] overflow-hidden shadow-lg blob-animation">
//                   <div className="overflow-hidden">
//                     <img
//                       src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
//                       alt="Professional team"
//                       className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
//                     />
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#0098af] to-[#00b4d8] flex items-center justify-center text-white animate-pulse-subtle shadow-lg">
//                   <Users size={24} />
//                 </div>
//               </div>

//               <div
//                 className="mb-8 text-[#E6F0F5] animate-on-scroll opacity-0 text-lg"
//               >
//                 <p>
//                   Finding the right talent isn&apos;t just about filling
//                   positions—it&apos;s about building the future of your company.
//                   We believe that{" "}
//                   <span className="font-bold text-[#00b4d8]">
//                     every hire is a step toward growth
//                   </span>
//                   , and our approach reflects this philosophy.
//                 </p>
//               </div>

//               <div className="mb-10">
//                 <h3
//                   className="text-xl font-bold text-[#00b4d8] mb-4 animate-on-scroll opacity-0 flex items-center"
//                 >
//                   <Star className="mr-2 text-[#00b4d8]" size={18} />
//                   What We Offer
//                 </h3>

//                 {employerFeatures.map((feature, index) => (
//                   <FeatureCard
//                     key={index}
//                     title={feature.title}
//                     description={feature.description}
//                     theme="employer"
//                     delay={400 + index * 100}
//                     icon={feature.icon as 'check' | 'star'}
//                   />
//                 ))}
//               </div>

//               <TestimonialCard
//                 quote="We don't just deliver resumes — we deliver results"
//                 author="Michael Richards"
//                 position="HR Director, TechInnovate"
//                 theme="employer"
//                 delay={800}
//               />

//               <div
//                 className="text-center animate-on-scroll opacity-0"
//               >
//                 <SectionButton text="Build Your Team" theme="employer" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>

//       {/* Footer */}
//       <div className="bg-[#003C46] py-6 px-4 text-center">
//         <p className="text-[#E6F0F5] text-sm md:text-base">
//           Cognition: Where Talent Meets Opportunity
//         </p>
//         <div className="flex justify-center mt-4 space-x-2">
//           <div className="w-3 h-3 rounded-full bg-[#0098af]"></div>
//           <div className="w-3 h-3 rounded-full bg-[#00b4d8]"></div>
//           <div className="w-3 h-3 rounded-full bg-[#0098af]"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;

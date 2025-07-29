// import { ArrowRight, Award, Clock, TrendingUp, Users } from "lucide-react";

// export default function ServicesSection() {
//   return (
//     <div>
//       <section className="py-12 relative overflow-hidden bg-white">
//         {/* Professional divider */}
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

//         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//           <div className=" mb-16">
//             <h2
//               className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight"
//               style={{
//                 fontFamily: "Playfair Display, serif",
//                 color: "#003C46",
//               }}
//             >
//               Staffing Solutions
//             </h2>
//             <p
//               className="text-xl leading-relaxed max-w-7xl mx-auto"
//               style={{ color: "#5B5B5B" }}
//             >
//               Innovative staffing strategies designed to meet your unique talent
//               acquisition challenges
//             </p>
//           </div>

//           {/* Creative Services Layout */}
//           <div className="relative">
//             {/* Background Elements */}
//             <div className="absolute inset-0 overflow-hidden">
//               <div
//                 className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-5"
//                 style={{ backgroundColor: "#99D5DF" }}
//               />
//             </div>

//             {/* Services Grid - Asymmetrical Layout */}
//             <div className="relative z-10 grid grid-cols-12 gap-8 items-start">
//               {/* Direct Hiring - Large Featured Card */}
//               <div className="col-span-12 lg:col-span-7 relative">
//                 <div
//                   className="p-8 lg:p-12 rounded-3xl relative overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #003C46 0%, #0098AF 100%)",
//                     minHeight: "400px",
//                   }}
//                 >
//                   {/* Decorative Elements */}
//                   <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
//                     <Users size={128} style={{ color: "#F5FDFF" }} />
//                   </div>
//                   <div
//                     className="absolute bottom-0 left-0 w-full h-1/3 opacity-10"
//                     style={{
//                       background:
//                         "linear-gradient(45deg, transparent 0%, #99D5DF 50%, transparent 100%)",
//                     }}
//                   />

//                   <div className="relative z-10 h-full flex flex-col justify-between">
//                     <div>
//                       <div
//                         className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
//                         style={{ backgroundColor: "rgba(245, 253, 255, 0.2)" }}
//                       >
//                         <Users size={32} style={{ color: "#F5FDFF" }} />
//                       </div>

//                       <h3
//                         className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
//                         style={{
//                           fontFamily: "Playfair Display, serif",
//                           color: "#F5FDFF",
//                         }}
//                       >
//                         Direct Hiring
//                       </h3>

//                       <p
//                         className="text-lg leading-relaxed mb-6 opacity-90"
//                         style={{ color: "#99D5DF" }}
//                       >
//                         Strategic permanent placement solutions with
//                         comprehensive candidate assessment, cultural fit
//                         evaluation, and long-term retention focus. Our direct
//                         hiring approach ensures sustainable growth for your
//                         organization.
//                       </p>
//                     </div>

//                     <button
//                       className="inline-flex items-center gap-3 text-lg font-semibold group-hover:gap-4 transition-all duration-300"
//                       style={{ color: "#F5FDFF" }}
//                     >
//                       Explore Direct Hiring <ArrowRight size={20} />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Contract-to-Hire - Medium Card */}
//               <div className="col-span-12 lg:col-span-5 relative">
//                 <div
//                   className="p-6 lg:p-8 rounded-3xl relative overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-all duration-500 border-2"
//                   style={{
//                     backgroundColor: "#F5FDFF",
//                     borderColor: "#99D5DF",
//                     minHeight: "400px",
//                   }}
//                 >
//                   {/* Decorative Elements */}
//                   <div className="absolute top-4 right-4 w-24 h-24 opacity-10">
//                     <Clock size={96} style={{ color: "#0098AF" }} />
//                   </div>

//                   <div className="relative z-10 h-full flex flex-col justify-between">
//                     <div>
//                       <div
//                         className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300"
//                         style={{ backgroundColor: "#0098AF" }}
//                       >
//                         <Clock size={28} style={{ color: "#F5FDFF" }} />
//                       </div>

//                       <h3
//                         className="text-2xl lg:text-3xl font-bold mb-4 leading-tight"
//                         style={{
//                           fontFamily: "Playfair Display, serif",
//                           color: "#003C46",
//                         }}
//                       >
//                         Contract-to-Hire
//                       </h3>

//                       <p
//                         className="leading-relaxed mb-6"
//                         style={{ color: "#5B5B5B" }}
//                       >
//                         Flexible staffing solutions that allow you to evaluate
//                         candidates in real work environments before making
//                         permanent commitments. Reduce hiring risks while
//                         accessing top talent quickly.
//                       </p>
//                     </div>

//                     <button
//                       className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300"
//                       style={{ color: "#0098AF" }}
//                     >
//                       Learn More <ArrowRight size={18} />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* RPO - Wide Card */}
//               <div className="col-span-12 lg:col-span-8 lg:col-start-3 relative mt-8">
//                 <div
//                   className="p-6 lg:p-10 rounded-3xl relative overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #99D5DF 0%, #007B8F 100%)",
//                   }}
//                 >
//                   {/* Decorative Elements */}
//                   <div className="absolute top-0 left-0 w-full h-full opacity-10">
//                     <svg viewBox="0 0 400 200" className="w-full h-full">
//                       <defs>
//                         <pattern
//                           id="rpo-pattern"
//                           x="0"
//                           y="0"
//                           width="40"
//                           height="40"
//                           patternUnits="userSpaceOnUse"
//                         >
//                           <circle
//                             cx="20"
//                             cy="20"
//                             r="2"
//                             fill="#F5FDFF"
//                             opacity="0.3"
//                           />
//                         </pattern>
//                       </defs>
//                       <rect
//                         width="100%"
//                         height="100%"
//                         fill="url(#rpo-pattern)"
//                       />
//                     </svg>
//                   </div>

//                   <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
//                     <div className="flex-1">
//                       <div
//                         className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
//                         style={{ backgroundColor: "rgba(0, 60, 70, 0.2)" }}
//                       >
//                         <TrendingUp size={32} style={{ color: "#003C46" }} />
//                       </div>

//                       <h3
//                         className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
//                         style={{
//                           fontFamily: "Playfair Display, serif",
//                           color: "#003C46",
//                         }}
//                       >
//                         RPO Solutions
//                       </h3>

//                       <p
//                         className="text-lg leading-relaxed mb-6"
//                         style={{ color: "#003C46" }}
//                       >
//                         Complete recruitment process outsourcing with dedicated
//                         teams, advanced technology, and scalable solutions.
//                         Transform your entire hiring process with our
//                         enterprise-grade RPO services.
//                       </p>

//                       <button
//                         className="inline-flex items-center gap-3 text-lg font-semibold group-hover:gap-4 transition-all duration-300"
//                         style={{ color: "#003C46" }}
//                       >
//                         Discover RPO <ArrowRight size={20} />
//                       </button>
//                     </div>

//                     <div className="flex-shrink-0">
//                       <div
//                         className="w-32 h-32 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500"
//                         style={{ backgroundColor: "rgba(0, 60, 70, 0.1)" }}
//                       >
//                         <Award size={64} style={{ color: "#003C46" }} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////
import { Users, UserCheck, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    id: "direct-hire",
    title: "Direct Hire",
    description:
      "Strategic permanent placement solutions with comprehensive candidate assessment, cultural fit evaluation, and long-term retention focus. Our direct hiring approach ensures sustainable growth for your organization.",
    icon: Users,
    delay: 0,
    path: "/services/staffing/direct-hire",
  },
  {
    id: "contract-to-hire",
    title: "Contract & Contract-To-Hire",
    description:
      "Flexible staffing solutions that allow you to evaluate candidates in real work environments before making permanent commitments. Reduce hiring risks while accessing top talent quickly.",
    icon: UserCheck,
    delay: 200,
    path: "/services/staffing/contract-to-hire",
  },
  {
    id: "rpo",
    title: "RPO Solutions",
    description:
      "Complete recruitment process outsourcing with dedicated teams, advanced technology, and scalable solutions. Transform your entire hiring process with our enterprise-grade RPO services.",
    icon: Building,
    delay: 400,
    path: "/services/staffing/rpo-solutions",
  },
];

export const ServicesSection = () => {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background-light" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6  bg-clip-text text-[#003C46]">
            Engagement Model
          </h2>
          <p className="text-lg text-[#003C46] max-w-7xl mx-auto">
            Comprehensive talent acquisition solutions tailored to your unique
            business needs
          </p>
        </div>

        {/* Asymmetrical Services Grid */}
        <div className="relative">
          {/* Service Cards - Staggered Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isCenter = index === 1;
              const isRight = index === 2;

              return (
                <div
                  key={service.id}
                  className={`
                   relative group
                   ${isCenter ? "lg:mt-12" : ""}
                   ${isRight ? "lg:mt-6" : ""}
                 `}
                  style={{ animationDelay: `${service.delay}ms` }}
                >
                  {/* Clean minimal background */}
                  <div
                    className="relative p-8 lg:p-10 bg-white border border-[#003C46]/20 rounded-2xl
                               hover:border-[#0098af]/30 hover:shadow-soft transition-all duration-300
                               group-hover:shadow-lg"
                  >
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div
                        className="w-14 h-14 bg-[#0098af]/10 rounded-xl flex items-center justify-center
                                   group-hover:bg-[#0098af]/20 transition-colors duration-300"
                      >
                        <Icon className="w-7 h-7 text-[#0098af]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#003C46] text-center justify-center mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                      <Link href={service.path}>
                        <Button
                          variant="outline"
                          className="group/btn relative overflow-hidden border-[#0098af]/30 text-[#0098af]
                                  hover:text-white hover:border-[#0098af] hover:shadow-glow d
                                  transition-all duration-300"
                        >
                          <span className="relative z-10">Learn More</span>
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-[#0098af]/80 to-[#0098af]/80 
                                       translate-x-[-100%] group-hover/btn:translate-x-0 
                                       transition-transform duration-300"
                          />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

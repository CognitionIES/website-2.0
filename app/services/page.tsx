// "use client";
// import frameBackground from "@/constants/images/Background/Frame_8.jpg";
// import Footer from "@/components/footer";
// import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";
// import CTASection from "@/components/CTA";
// import HeroSection from "@/components/Services/HeroSection";
// import AboutSection from "@/components/Services/AboutSection";

// export default function ServicesPage() {
//   return (
//     <div>
//       <div className="relative min-h-screen overflow-y-auto pb-8 snap-y snap-mandatory">
//         <div
//           className="fixed inset-0 bg-cover bg-center -z-10"
//           style={{
//             backgroundImage: `url(${frameBackground.src})`,
//           }}
//         />
//         <div className="relative">
//           <header className="relative z-50">
//             <MegaMenu />
//           </header>
//           <HeroSection />
//           <AboutSection />
//           <main className="relative pt-8"></main>
//         </div>
//       </div>
//       <CTASection />
//       <Footer />
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Server, Users, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/Services/HeroSection";
import { MegaMenu } from "@/components/ui/Megamenu/MegaMenu";

// Service data structure
interface Service {
  title: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  details?: string;
}

const servicesData: Service[] = [
  {
    title: "SaaS Solutions - ServiceCPQ",
    href: "/services/saas-solution/servicecpq",
    icon: <Server className="w-6 h-6 text-cyan-600" />,
    description:
      "Comprehensive SaaS solutions tailored to streamline your business operations with cutting-edge tools and integrations.",
    details:
      "Our ServiceCPQ platform offers seamless configuration, pricing, and quoting capabilities, designed to optimize your sales process and enhance customer satisfaction.",
  },
  {
    title: "Staffing and Recruitment",
    href: "/services/staffing",
    icon: <Users className="w-6 h-6 text-cyan-600" />,
    description:
      "Professional staffing and recruitment services to connect you with top talent for your organization’s success.",
    details:
      "We provide end-to-end recruitment solutions, from candidate sourcing to onboarding, ensuring you find the right fit for your team.",
  },
  {
    title: "Build and Operate",
    href: "/services/build-operate",
    icon: <Server className="w-6 h-6 text-cyan-600" />,
    description:
      "End-to-end solutions to build and manage your infrastructure, ensuring scalability and efficiency.",
    details:
      "Our build and operate services cover infrastructure design, deployment, and ongoing management, delivering robust and scalable solutions for your business.",
  },
];

// Testimonial type and data
interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    quote:
      "The SaaS solutions provided by CognitionIES transformed our sales process, making it faster and more efficient.",
  },
  {
    name: "Jane Smith",
    role: "HR Director, Innovate Inc.",
    quote:
      "Their staffing services helped us find exceptional talent that perfectly aligned with our company culture.",
  },
  {
    name: "Alex Brown",
    role: "CTO, ScaleUp",
    quote:
      "The build and operate team delivered a robust infrastructure that supports our growth seamlessly.",
  },
];

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const arrowVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 5, transition: { duration: 0.2, ease: "easeOut" } },
};

const accordionVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// About Section Component
function AboutSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl sm:text-3xl font-semibold text-gray-900"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
        >
          At CognitionIES, we combine expertise, innovation, and dedication to
          deliver solutions that empower your business to thrive in a
          competitive landscape.
        </motion.p>
      </div>
    </section>
  );
}

// Services Grid Component
function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Our Core Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored solutions to meet your business needs with precision and
            excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 last:pb-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                {service.icon}
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="group flex items-center space-x-1 text-sm text-cyan-600 hover:text-cyan-800 font-medium transition-colors duration-200"
              >
                <span>Learn More</span>
                <motion.div
                  variants={arrowVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Accordion Component
function Accordion({ services }: { services: Service[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-8">
          Explore Our Services in Detail
        </h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="border border-gray-200 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="text-base font-medium text-gray-900">
                  {service.title}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-gray-500 transition-transform duration-300",
                    openIndex === index ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>
              <motion.div
                variants={accordionVariants}
                initial="hidden"
                animate={openIndex === index ? "visible" : "hidden"}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4">
                  <p className="text-sm text-gray-600">{service.details}</p>
                  <Link
                    href={service.href}
                    className="mt-2 inline-flex items-center space-x-1 text-sm text-cyan-600 hover:text-cyan-800 font-medium"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-sm text-gray-600 italic mb-4">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                  <span className="text-cyan-600 font-medium">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Component
function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-base text-gray-600 max-w-md mx-auto mb-6"
        >
          Connect with us to explore how our solutions can drive your success.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
            <Link href="/contact" className="flex items-center space-x-2">
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Main Services Page
export default function Services() {
  return (
    <div className="w-full">
      <MegaMenu />
      <HeroSection />
      <AboutSection />
      <ServicesGrid services={servicesData} />
      <Accordion services={servicesData} />
      <Testimonials testimonials={testimonials} />
      <CTASection />
    </div>
  );
}

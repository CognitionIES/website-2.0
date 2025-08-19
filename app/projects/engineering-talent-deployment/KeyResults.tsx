import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  Users,
  Code,
  Target,
  Clock,
} from "lucide-react";

const KeyResults = () => {
  const { ref, isIntersecting: isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "-20px",
    triggerOnce: true,
  });

  const results = [
    {
      title: "Rapid Deployment",
      description: "From requirement to full team deployment",
      icon: <Zap className="w-6 h-6" />,
      metric: "< 4 weeks",
      color: "from-[#0098AF] to-[#007B8F]",
    },
    {
      title: "Zero Attrition",
      description: "Perfect team retention throughout contract period",
      icon: <Shield className="w-6 h-6" />,
      metric: "0% turnover",
      color: "from-[#007B8F] to-[#0098AF]",
    },
    {
      title: "Cost Efficiency",
      description: "Reduced hiring costs through streamlined process",
      icon: <TrendingUp className="w-6 h-6" />,
      metric: "35% savings",
      color: "from-[#0098AF] to-[#99D5DF]",
    },
    {
      title: "Quality Assurance",
      description: "All engineers met or exceeded expectations",
      icon: <CheckCircle className="w-6 h-6" />,
      metric: "100% success",
      color: "from-[#99D5DF] to-[#0098AF]",
    },
  ];

  const keyPositions = [
    {
      name: "Mechanical Design Engineers",
      count: "8",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Electrical & Instrumentation Engineers",
      count: "6",
      icon: <Code className="w-5 h-5" />,
    },
    {
      name: "Piping Layout & Stress Engineers",
      count: "5",
      icon: <Target className="w-5 h-5" />,
    },
    {
      name: "SmartPlant & SPI Specialists",
      count: "4",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      name: "Plant Maintenance Support",
      count: "3",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      name: "HVAC & Utility Systems Designers",
      count: "2",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  const kpiData = [
    {
      metric: "Hiring Turnaround Time",
      before: "8-10 weeks",
      after: "< 4 weeks",
      improvement: "60%",
    },
    {
      metric: "Team Retention Rate",
      before: "85%",
      after: "100%",
      improvement: "15%",
    },
    {
      metric: "Client Satisfaction Score",
      before: "8.2/10",
      after: "9.8/10",
      improvement: "20%",
    },
    {
      metric: "Compliance Accuracy",
      before: "Manual process",
      after: "Fully automated",
      improvement: "100%",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-[#F5FDFF] via-white to-[#E6F0F5] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#0098AF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#99D5DF]/10 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className=" mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003C46] mb-6">
            Key Results &{" "}
            <span className="bg-gradient-to-r from-[#0098AF] to-[#007B8F] bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-[#5B5B5B] max-w-7xl mx-auto">
            Measurable outcomes that exceeded expectations and delivered
            exceptional value to our client
          </p>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-[#0098AF]/10 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0098AF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${result.color} flex items-center justify-center text-white mb-4 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}
                >
                  {result.icon}
                </div>

                <div className="text-3xl font-bold text-[#0098AF] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {result.metric}
                </div>

                <h3 className="font-bold text-[#003C46] text-lg mb-2 group-hover:text-[#0098AF] transition-colors duration-300">
                  {result.title}
                </h3>

                <p className="text-[#5B5B5B] text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key Positions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#0098AF]/10"
          >
            <h3 className="text-2xl font-bold text-[#003C46] mb-6 flex items-center">
              <Users className="w-6 h-6 text-[#0098AF] mr-3" />
              Key Positions Filled
            </h3>

            <div className="space-y-4">
              {keyPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0098AF]/5 to-transparent rounded-xl hover:from-[#0098AF]/10 transition-all duration-300 group border border-[#0098AF]/10"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-[#0098AF] group-hover:scale-110 transition-transform duration-300">
                      {position.icon}
                    </div>
                    <span className="text-[#003C46] font-medium group-hover:text-[#0098AF] transition-colors duration-300">
                      {position.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* KPI Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#0098AF]/10"
          >
            <h3 className="text-2xl font-bold text-[#003C46] mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 text-[#0098AF] mr-3" />
              Performance Metrics
            </h3>

            <div className="space-y-6">
              {kpiData.map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="border-l-4 border-[#0098AF] pl-4 py-2 hover:border-l-8 transition-all duration-300 group"
                >
                  <div className="font-semibold text-lg text-[#003C46] mb-2 group-hover:text-[#0098AF] transition-colors duration-300">
                    {kpi.metric}
                  </div>
                  <div className="flex items-center justify-between text-base">
                    <div>
                      <span className="text-red-500 line-through mr-2">
                        {kpi.before}
                      </span>
                      <span className="text-[#0098AF] font-bold">
                        {kpi.after}
                      </span>
                    </div>
                    <div className="bg-green-100  text-green-700 px-2 py-1 rounded-full text-sm font-bold">
                      +{kpi.improvement}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Success Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 bg-gradient-to-r from-[#003C46] to-[#0098AF] rounded-2xl p-8 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0098AF]/20 to-transparent" />
          <div className="relative z-10">
            <CheckCircle className="w-16 h-16 text-[#99D5DF] mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">
              Project Successfully Completed
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Delivered a complete engineering team of 40+ professionals with
              zero attrition, exceeding all performance metrics and client
              expectations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyResults;

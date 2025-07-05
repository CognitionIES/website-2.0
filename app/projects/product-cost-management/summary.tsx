import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Award, Target, BarChart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile"; // Assuming this hook exists

const SummaryGains = () => {
  const isMobile = useIsMobile(); // Get isMobile from hook

  const summaryGains = [
    "35% Cost of Goods Reduction",
    "50% Margin Increase",
    "Improved Market Position with Competitive SKUs",
    "Engineering Backbone for Scalable SKU Platforming",
    "Data-driven, Modular, and Manufacturing-Friendly Design",
  ];

  const businessImpacts = [
    { metric: "Manufacturing Cost per Unit", before: "100%", after: "65%" },
    { metric: "Gross Profit Margin", before: "Approx. 30%", after: "45-50%" },
    { metric: "Component Count (Avg.)", before: "High", after: "Reduced" },
    {
      metric: "Part Standardization",
      before: "Fragmented",
      after: "Streamlined",
    },
    { metric: "Engineering Complexity", before: "High", after: "Optimized" },
    {
      metric: "Time-to-Market (Future SKUs)",
      before: "100%",
      after: "~70% of baseline",
    },
  ];

  const summaryIcons = [
    <TrendingUp key="trending" className="text-white" />,
    <BarChart key="chart" className="text-white" />,
    <Target key="target" className="text-white" />,
    <Award key="award" className="text-white" />,
    <CheckCircle key="check" className="text-white" />,
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-[#003C46]/20 via-[#E6F0F5]/30 to-[#0098af]/20 overflow-hidden">
      <section className="relative z-10 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Summary of Gains Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariants}
        >
          <div className="backdrop-blur-sm rounded-2xl p-2 sm:p-8">
            {isMobile ? (
              <div className="space-y-6">
                {/* Business Impact Section */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-[#003C46] to-[#0098af] bg-clip-text text-transparent ">
                    <BarChart className="h-6 w-6 sm:h-8 sm:w-8 text-black" />{" "}
                    Business Impact
                  </h3>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader className="text-white">
                          <TableRow>
                            <TableHead className="font-bold p-2 border border-gray-100 bg-gradient-to-r from-[#0098af]/60 to-[#0098af]/80 text-white uppercase text-sm sm:text-base text-center">
                              Business Metric
                            </TableHead>
                            <TableHead className="p-2 border border-gray-100 bg-gradient-to-r from-[#0098af]/60 to-[#0098af]/80 text-white uppercase text-sm sm:text-base text-center">
                              Before
                            </TableHead>
                            <TableHead className="p-2 border border-gray-100 bg-gradient-to-r from-[#0098af]/60 to-[#0098af]/80 text-white uppercase text-sm sm:text-base text-center">
                              After
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {businessImpacts.map((impact, idx) => (
                            <TableRow
                              key={idx}
                              className={`${
                                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }`}
                            >
                              <TableCell className="font-medium  border border-gray-100 text-sm sm:text-base p-2">
                                {impact.metric}
                              </TableCell>
                              <TableCell className="text-center text-red-500 border border-gray-100 font-medium text-sm sm:text-base p-2">
                                {impact.before}
                              </TableCell>
                              <TableCell className="text-center text-green-600 border border-gray-100 font-medium text-sm sm:text-base p-2">
                                {impact.after}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </motion.div>

                {/* Summary of Gains Section */}
                <motion.div variants={containerVariants} className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-[#003C46] to-[#0098af] bg-clip-text text-transparent">
                    <span className="text-xl sm:text-2xl">🔍</span> Summary of
                    Gains
                  </h2>
                  {summaryGains.map((gain, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-center gap-3 p-2 bg-white/80 rounded-lg shadow-sm border"
                    >
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#0098af] to-[#00b4d8] text-white flex items-center justify-center">
                        {summaryIcons[idx]}
                      </div>
                      <span className="text-[#5b5b5b] font-medium text-sm sm:text-base">
                        {gain}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Business Impact Section */}
                <motion.div variants={itemVariants} className="h-full">
                  <h3 className="text-4xl font-bold mb-6 flex items-center gap-2 bg-gradient-to-r from-[#003C46] to-[#0098af] bg-clip-text text-transparent">
                    <BarChart className="h-25 mt-2 w-25 text-black" /> Business
                    Impact
                  </h3>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="overflow-hidden overflow-x-auto">
                      <Table>
                        <TableHeader className="text-white">
                          <TableRow>
                            <TableHead className="font-bold p-3 border border-gray-100 bg-gradient-to-r from-[#0098af]/60 to-[#0098af]/80 text-white uppercase transition-all duration-300 text-center text-lg">
                              Business Metric
                            </TableHead>
                            <TableHead className="text-lg p-3 border border-gray-100 bg-gradient-to-r from-[#0098af]/60 to-[#0098af]/80 text-white uppercase transition-all duration-300 font-bold text-center text-lg">
                              Before
                            </TableHead>
                            <TableHead className="p-3 border border-gray-100 bg-gradient-to-r from-[#0098af]/60 to-[#0098af]/80 text-white uppercase transition-all duration-300 font-bold text-center text-lg">
                              After
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {businessImpacts.map((impact, idx) => (
                            <TableRow
                              key={idx}
                              className={`${
                                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                              } hover:bg-gray-100 transition-colors duration-300`}
                            >
                              <TableCell className="font-medium border border-gray-100">
                                {impact.metric}
                              </TableCell>
                              <TableCell className="text-center text-red-500 border border-gray-100 font-medium">
                                {impact.before}
                              </TableCell>
                              <TableCell className="text-center text-green-600 border border-gray-100 font-medium">
                                {impact.after}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </motion.div>

                {/* Summary of Gains Section */}
                <motion.div variants={containerVariants} className="space-y-4">
                  <h2 className="text-4xl font-bold mb-6 flex items-center gap-2 bg-gradient-to-r from-[#003C46] to-[#0098af] bg-clip-text text-transparent">
                    <span className="text-2xl">🔍</span> Summary of Gains
                  </h2>
                  {summaryGains.map((gain, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="group pt-1"
                    >
                      <div className="flex items-center gap-3 p-2 bg-white/80 rounded-lg shadow-sm border hover:border-[#00b4d8]/30 hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#0098af] to-[#00b4d8] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {summaryIcons[idx]}
                        </div>
                        <span className="text-[#5b5b5b] font-medium group-hover:text-[#003C46] transition-colors duration-300">
                          {gain}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SummaryGains;

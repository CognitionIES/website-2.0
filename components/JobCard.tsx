import { Job } from "@/constants/jobData";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard = ({ job, index }: JobCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 text-left">
          <h4 className="text-xl font-bold text-[#003C46] mb-2">{job.title}</h4>
          <div className="flex items-center gap-2 mb-3 text-gray-500">
            <Briefcase size={16} />
            <span>{job.experience}</span>
            <span className="mx-2">•</span>
            <MapPin size={16} />
            <span>{job.location}</span>
          </div>
          <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
          <div className="flex items-center text-gray-400 text-sm mt-4">
            <Calendar size={14} className="mr-1" />
            <span>Posted {job.posted}</span>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center  md:items-start">
          <Link href={`/jobs/${job.id}`}>
            <Button
              className="bg-[#0098af] hover:bg-[#00b4d8] text-white rounded-full px-6"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;

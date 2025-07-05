// components/Loader.tsx
"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-[#F5FDFF] z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        {/* Hexagonal dots in a circular pattern */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? "#0098AF" : "#5B5B5B",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${i * 45}deg) translate(28px)`,
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;
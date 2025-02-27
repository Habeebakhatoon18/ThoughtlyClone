import React from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

const SlidingPhoneNumber = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6f6f4] px-4">
      {/* Header Section */}
      <div className="text-center mb-10 flex flex-col items-center" style={{ fontFamily: "'Whyte', sans-serif" }}>
        <h1 className="text-3xl tracking-tight md:text-5xl font-bold text-black">
          The <span className="bg-gradient-to-r from-green-500 to-blue-200 bg-clip-text text-transparent">future</span> is here-call it.
        </h1>
        <p className="text-gray-500 md:w-1/2  w-full text-base md:text-lg mt-3">
          The proof is in the pudding—experience how Thoughtly is transforming customer interaction with one call.
        </p>
      </div>

      {/* Sliding Number Section */}
      <div className="relative w-full overflow-hidden bg-gray-150 py-6 md:h-1/2 rounded-3xl">
        <motion.div
          className="flex items-center space-x-10 text-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          style={{ whiteSpace: "nowrap" }}
        >
          {[...Array(5)].map((_, i) => (
            <div key={i} className="  flex items-center space-x-4">
              <span className="hover:text-green-400">+1 (855) 717-0250</span>
              <FaPhone className="text-green-400 text-4xl sm:text-5xl md:text-6xl lg:text-8xl" />
              
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SlidingPhoneNumber;

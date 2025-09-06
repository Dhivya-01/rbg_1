/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function Card({ content }) {
  const handleCTAClick = () => {
    // Navigate to MLoops product page
    window.open("/MLloOps", "_self");
  };

  return content ? (
    <motion.div 
      className="bg-white shadow-lg hover:shadow-2xl h-full rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
      whileHover={{ y: -5 }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex justify-center items-center h-16 mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">
          {content.img}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-700 transition-colors duration-300 text-center">
          {content.title}
        </h3>
        
        {/* Content */}
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          {content.content}
        </p>
        
        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm hover:text-red-700 transition-colors duration-300 group-hover:gap-3"
          >
            Explore MLoops
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  ) : (
    <></>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* SVG Logo Graphic */}
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        
        {/* Abstract Box Background */}
        <motion.rect
          x="4" y="4" width="92" height="92" rx="24"
          stroke="#ffffff" 
          strokeWidth="4" 
          strokeOpacity="0.1"
          className="group-hover:stroke-neon/50 transition-colors duration-500"
        />
        
        {/* The Sharp Geometric 'A' */}
        <motion.path
          d="M50 22L22 75H38L50 46L62 75H78L50 22Z"
          fill="#ffffff"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
        
        {/* The Neon Core (Dot) */}
        <motion.circle
          cx="50" cy="64" r="7"
          fill="#CCFF00" // Neon Color
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.6 }}
          className="group-hover:filter group-hover:drop-shadow-[0_0_12px_rgba(204,255,0,0.8)] transition-all duration-300"
        />
      </svg>
    </motion.div>
  );
};

export default Logo;
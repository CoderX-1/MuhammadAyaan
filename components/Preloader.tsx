import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePreloaderStore } from '../store';

const Preloader: React.FC = () => {
  const { isLoading, setIsLoading } = usePreloaderStore();
  const [signatureVisible, setSignatureVisible] = useState(true);

  useEffect(() => {
    // 1.8 seconds baad signature fade out hona shuru hoga
    const sigTimer = setTimeout(() => {
      setSignatureVisible(false);
    }, 1800);

    // 2.5 seconds baad curtains upar jayenge aur site reveal hogi
    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(sigTimer);
      clearTimeout(endTimer);
    };
  }, [setIsLoading]);

  // Signature Animation Variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, // 1.5 second mein signature draw hoga
        ease: "easeInOut" 
      }
    },
    exit: {
      opacity: 0,
      y: -20, // Thoda upar ja kar gayab hoga
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-[100] flex w-full h-screen pointer-events-none bg-transparent items-center justify-center"
        >
          {/* BACKGROUND BARS (Curtains) */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-full w-[10%] bg-[#050505] absolute top-0"
              style={{ left: `${i * 10}%` }}
              initial={{ y: "0%" }}
              exit={{ 
                y: "-100%", 
                transition: { 
                  duration: 0.8, 
                  ease: [0.76, 0, 0.24, 1], 
                  delay: i * 0.05 
                } 
              }}
            />
          ))}

          {/* CENTER SIGNATURE (SVG Animation) */}
          <div className="relative z-20 mix-blend-difference">
            <AnimatePresence>
              {signatureVisible && (
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="300" // Desktop size
                  height="150"
                  viewBox="0 0 300 150"
                  className="w-[60vw] md:w-[300px] h-auto" // Responsive width
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Yeh "Ayaan" ka ek stylish script path hai */}
                  <motion.path
                    d="M 40 80 C 40 80, 60 30, 80 30 C 100 30, 90 120, 70 110 C 50 100, 110 60, 130 70 C 150 80, 140 110, 160 100 C 180 90, 200 60, 220 70 C 240 80, 230 110, 250 100 C 270 90, 280 80, 290 85"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
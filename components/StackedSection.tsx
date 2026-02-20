import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StackedSection = ({ children }: { children: React.ReactNode }) => {
  // Window ka direct vertical scroll track kar rahe hain
  const { scrollY } = useScroll();

  // Zuned Aalim Effect ki Math Calculations:
  // Jaise hi user 0 se 800 pixels tak scroll karega, ye 3 cheezein hongi:
  const scale = useTransform(scrollY, [0, 800], [1, 0.85]); // Hero 100% se shrink ho kar 85% ho jayega
  const opacity = useTransform(scrollY, [0, 800], [1, 0.3]); // Hero ki brightness kam ho kar andhera ho jayega
  const y = useTransform(scrollY, [0, 800], [0, 50]); // Hero thoda sa neechay ki taraf push hoga

  return (
    // 'fixed' isay hamesha screen par rok kar rakhega
    // 'z-0' ka matlab hai ke ye sab se peeche hai, aur baaki site (z-10) iske upar se guzregi
    <motion.div
      style={{ scale, opacity, y }}
      className="fixed top-0 left-0 w-full h-screen z-0 origin-center bg-[#020202]"
    >
      {children}
    </motion.div>
  );
};

export default StackedSection;
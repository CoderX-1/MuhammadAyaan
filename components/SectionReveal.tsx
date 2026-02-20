import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionReveal = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Ye element ki position ko viewport ke hisaab se track karega
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" = Jab section ka top screen ke bottom ko touch kare
    // "center center" = Jab section screen ke bilkul center mein aa jaye
    offset: ["start end", "center center"] 
  });

  // Scroll ke sath sath values smoothly change hongi (Zuned Aalim Effect)
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]); // 150px neechay se aayega
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]); // Chote se bada hoga
  const filter = useTransform(scrollYProgress, [0, 1], ['blur(10px)', 'blur(0px)']); // Smooth blur reveal

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y, scale, filter }}
      className="w-full will-change-transform will-change-opacity"
    >
    </motion.div>
  );
};

export default SectionReveal;
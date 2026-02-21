import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursorStore, usePreloaderStore } from '../store';

const HeroUI: React.FC = () => {
  const { setCursorVariant } = useCursorStore();
  const { isLoading } = usePreloaderStore();

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1, 0.85]); 
  const opacity = useTransform(scrollY, [0, 800], [1, 0.3]); 
  const y = useTransform(scrollY, [0, 800], [0, 50]); 

  const bigText = "MUHAMMAD AYAAN FULLSTACK DEVELOPER";
  const smallText = "— Welcome — Next.js — ©2026 — MERN Stack — Fullstack — Developer ";

  return (
    // 'will-change-transform' se mobile GPU forced activate ho jata hai
    <motion.div
      style={{ scale, opacity, y }}
      className="fixed top-0 left-0 w-full h-screen z-0 origin-bottom bg-[#020202] will-change-transform"
    >
      <section className="relative w-full h-full overflow-hidden flex items-center justify-center pt-10">
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
          animate={{ scale: isLoading ? 0.8 : 1, opacity: isLoading ? 0 : 1, filter: isLoading ? 'blur(10px)' : 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="relative w-[75vw] md:w-[400px] lg:w-[400px] h-[55vh] md:h-[530px] z-10 group"
          onMouseEnter={() => setCursorVariant('project')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <img 
            src="/profile.jpg" 
            alt="Muhammad Ayaan" 
            className="w-full h-full object-cover rounded-2xl opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          
          <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

          <motion.a
            href="#contact"
            initial={{ scale: 0 }} animate={{ scale: isLoading ? 0 : 1 }} transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1.2 }}
            className="absolute -top-8 -right-8 md:-top-16 md:-right-16 w-28 h-28 md:w-40 md:h-40 rounded-full bg-neon text-black flex items-center justify-center z-30 shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:scale-110 transition-transform duration-500 cursor-pointer"
            onMouseEnter={() => setCursorVariant('button')} onMouseLeave={() => setCursorVariant('default')}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 15, repeat: Infinity }} className="absolute inset-1.5 md:inset-2 border-[2px] border-dashed border-black/40 rounded-full" />
            <span className="font-sans font-bold text-[10px] md:text-sm leading-tight tracking-widest uppercase text-center z-10">Get In<br/>Touch</span>
          </motion.a>
        </motion.div>

        {/* CSS FIX: Mobile par 'mix-blend-normal' hai aur desktop par 'md:mix-blend-difference' hai taaki lag na ho */}
        <div className="absolute top-[60%] -translate-y-1/2 w-full z-20 pointer-events-none flex overflow-hidden whitespace-nowrap mix-blend-normal md:mix-blend-difference">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoading ? 0 : 1 }} transition={{ duration: 1, delay: 1 }}>
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 120, repeat: Infinity }} className="flex font-display font-bold text-[26vw] md:text-[14vw] leading-none tracking-wide uppercase text-white">
              <span className="pr-[10vw]">{bigText}</span>
              <span className="pr-[10vw]">{bigText}</span>
              <span className="pr-[10vw]">{bigText}</span>
              <span className="pr-[10vw]">{bigText}</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }} transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-[150px] md:bottom-[100px] xxl:bottom-[80px] w-full z-20 pointer-events-none flex overflow-hidden whitespace-nowrap border-y border-white/5 bg-[#050505]/50 backdrop-blur-sm py-3 md:py-4"
        >
          <motion.div animate={{ x: ["-50%", "0%"] }} transition={{ ease: "linear", duration: 40, repeat: Infinity }} className="flex font-mono text-sm md:text-base font-medium text-gray-400 uppercase tracking-widest">
            <span className="pr-10 hover:text-neon transition-colors">{smallText}</span>
            <span className="pr-10 hover:text-neon transition-colors">{smallText}</span>
            <span className="pr-10 hover:text-neon transition-colors">{smallText}</span>
            <span className="pr-10 hover:text-neon transition-colors">{smallText}</span>
          </motion.div>
        </motion.div>

      </section>
    </motion.div>
  );
};

export default HeroUI;
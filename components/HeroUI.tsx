import React from 'react';
import { motion } from 'framer-motion';
import { useCursorStore, usePreloaderStore } from '../store';

const HeroUI: React.FC = () => {
  const { setCursorVariant } = useCursorStore();
  const { isLoading } = usePreloaderStore();

  // Trailing spaces hata diye hain kyunki ab hum padding use karenge
  const bigText = "FULLSTACK DEVELOPER";
  const smallText = "— Welcome — Next.js — ©2026 — MERN Stack — Fullstack — Developer ";

  return (
    <section className="my-32 relative w-full h-screen overflow-hidden bg-[#020202] flex items-center justify-center z-10">
      
      {/* 1. CENTER PORTRAIT IMAGE CONTAINER */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
        animate={{ scale: isLoading ? 0.8 : 1, opacity: isLoading ? 0 : 1, filter: isLoading ? 'blur(10px)' : 'blur(0px)' }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-[75vw] md:w-[400px] lg:w-[450px] h-[55vh] md:h-[650px] z-10 group"
        onMouseEnter={() => setCursorVariant('project')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <img 
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop" 
          alt="Muhammad Ayaan" 
          className="w-full h-full object-cover rounded-2xl opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        />
        
        <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

        {/* 2. THE SPINNING "GET IN TOUCH" BUTTON */}
        <motion.a
          href="#contact"
          initial={{ scale: 0 }}
          animate={{ scale: isLoading ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1.2 }}
          className="absolute -top-8 -right-8 md:-top-16 md:-right-16 w-28 h-28 md:w-40 md:h-40 rounded-full bg-neon text-black flex items-center justify-center z-30 shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:scale-110 transition-transform duration-500 cursor-pointer"
          onMouseEnter={() => setCursorVariant('button')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            className="absolute inset-1.5 md:inset-2 border-[2px] border-dashed border-black/40 rounded-full"
          />
          
          <span className="font-sans font-bold text-[10px] md:text-sm leading-tight tracking-widest uppercase text-center z-10">
            Get In<br/>Touch
          </span>
        </motion.a>
      </motion.div>

      {/* 3. BIG OVERLAPPING MARQUEE TEXT (FIXED SPEED & SPACING) */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full z-20 pointer-events-none flex overflow-hidden whitespace-nowrap mix-blend-difference">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            // Speed ko 20 se 60 kar diya hai taaki ek dam slow flow bane
            transition={{ ease: "linear", duration: 60, repeat: Infinity }}
            className="flex font-display font-bold text-[20vw] leading-none tracking-tighter uppercase text-white"
          >
            {/* pr-[10vw] se har word ke darmiyan bohot badi dynamic space aayegi */}
            <span className="pr-[10vw]">{bigText}</span>
            <span className="pr-[10vw]">{bigText}</span>
            <span className="pr-[10vw]">{bigText}</span>
            <span className="pr-[10vw]">{bigText}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* 4. BOTTOM TICKER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-0 md:bottom-8 w-full z-20 pointer-events-none flex overflow-hidden whitespace-nowrap border-y border-white/5 bg-[#050505]/50 backdrop-blur-sm py-3 md:py-4"
      >
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex font-mono text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest"
        >
          <span className="pr-10 hover:text-neon transition-colors">{smallText}</span>
          <span className="pr-10 hover:text-neon transition-colors">{smallText}</span>
          <span className="pr-10 hover:text-neon transition-colors">{smallText}</span>
          <span className="pr-10 hover:text-neon transition-colors">{smallText}</span>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroUI;
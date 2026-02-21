import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Code2, Cpu, Layout, Palette } from 'lucide-react';
import { useCursorStore } from '../store';

const BentoGrid: React.FC = () => {
  const { setCursorVariant } = useCursorStore();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour12: true, hour: 'numeric', minute: '2-digit' });

  const animConfig = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0%" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section id="expertise" className="py-20 px-6 md:px-12 w-full max-w-7xl mx-auto z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-min md:auto-rows-[280px]">
        
        {/* OPTIMIZATION: bg-[#0a0a0a] on mobile, md:backdrop-blur-md on desktop */}
        <motion.div {...animConfig} className="bg-[#0a0a0a] md:bg-[#050505]/60 md:backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:border-white/10 transition-colors">
          <div>
            <h3 className="font-display text-3xl font-bold text-white mb-2">Muhammad<br/><span className="text-gray-500 italic font-serif">Ayaan</span></h3>
            <p className="flex items-center text-xs text-gray-500 font-mono mt-4 uppercase tracking-wider"><MapPin size={14} className="mr-2 text-neon" /> Karachi, PK • {timeString}</p>
          </div>
          <div className="flex gap-2 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mt-8 md:mt-0">
             <div className="w-16 h-20 bg-white/10 rounded-lg transform -rotate-6 border border-white/5"></div>
             <div className="w-16 h-24 bg-white/20 rounded-lg -translate-y-4 border border-white/10"></div>
             <div className="w-16 h-20 bg-white/10 rounded-lg transform rotate-6 border border-white/5"></div>
          </div>
        </motion.div>

        <motion.div {...animConfig} transition={{ ...animConfig.transition, delay: 0.1 }} className="md:col-span-2 bg-[#0a0a0a] md:bg-[#050505]/60 md:backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-white/10 transition-colors relative overflow-hidden">
          <div className="flex justify-between items-start mb-6 md:mb-0">
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">/ Detail-Driven UI</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400 bg-white/5">Motion</span>
              <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400 bg-white/5">WebGL</span>
            </div>
          </div>
          <div className="z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">Interfaces <br/><span className="text-gray-500 italic font-serif font-medium">you can feel.</span></h2>
            <p className="text-gray-400 mt-4 max-w-md text-sm leading-relaxed">I sweat the spacing, timing, and physics — bridging the gap between raw data and fluid motion. Every interaction is calculated.</p>
          </div>
        </motion.div>

        <motion.div {...animConfig} transition={{ ...animConfig.transition, delay: 0.1 }} className="md:col-span-2 bg-[#0a0a0a] md:bg-[#050505]/60 md:backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-white/10 transition-colors">
          <div className="mb-6">
             <p className="text-xs font-mono text-neon tracking-widest uppercase mb-1">/ Expertise</p>
             <h3 className="text-2xl font-display font-bold text-white">Technological Arsenal</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
            <div className="flex items-start gap-4"><div className="p-2 bg-white/5 rounded-lg text-gray-300"><Layout size={20} /></div><div><h4 className="text-white text-sm font-bold">Frontend Architecture</h4><p className="text-gray-500 text-xs mt-1">Scalable React & Next.js systems</p></div></div>
            <div className="flex items-start gap-4"><div className="p-2 bg-white/5 rounded-lg text-gray-300"><Code2 size={20} /></div><div><h4 className="text-white text-sm font-bold">Creative Coding</h4><p className="text-gray-500 text-xs mt-1">WebGL, Three.js & GLSL Shaders</p></div></div>
            <div className="flex items-start gap-4"><div className="p-2 bg-white/5 rounded-lg text-gray-300"><Cpu size={20} /></div><div><h4 className="text-white text-sm font-bold">Motion Design</h4><p className="text-gray-500 text-xs mt-1">Fluid GSAP & Framer animations</p></div></div>
            <div className="flex items-start gap-4"><div className="p-2 bg-white/5 rounded-lg text-gray-300"><Palette size={20} /></div><div><h4 className="text-white text-sm font-bold">UI/UX Engineering</h4><p className="text-gray-500 text-xs mt-1">Pixel-perfect interactive layouts</p></div></div>
          </div>
        </motion.div>

        <motion.div {...animConfig} transition={{ ...animConfig.transition, delay: 0.1 }} className="bg-[#0a0a0a] md:bg-[#050505]/60 md:backdrop-blur-md border border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="z-10"><p className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2">Available Globally</p><h3 className="text-2xl font-display font-bold text-white">Adaptable <br/>time zones</h3></div>
          <div className="z-10 mt-auto pt-10 flex items-center gap-2"><MapPin size={16} className="text-neon" /><span className="text-sm font-bold text-white">Remote / PK</span></div>
          <div className="absolute -bottom-16 -right-16 w-64 h-64 border border-white/5 rounded-full flex items-center justify-center group-hover:border-neon/20 transition-colors duration-700 pointer-events-none">
             <div className="w-40 h-40 border border-white/5 rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-neon rounded-full animate-ping"></div></div>
          </div>
        </motion.div>

      </div>

      <motion.div {...animConfig} transition={{ ...animConfig.transition, delay: 0.2 }} className="mt-4 md:mt-6 bg-[#0a0a0a] md:bg-[#050505]/60 md:backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-white/10 transition-colors gap-8" onMouseEnter={() => setCursorVariant('button')} onMouseLeave={() => setCursorVariant('default')}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse"></div></div>
            <span className="px-3 py-1 rounded-full border border-[#1a2e1a] bg-[#0d170d] text-neon text-xs font-medium">Available for work</span>
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">Let's build something <br/><span className="text-gray-500 italic font-serif">that actually works.</span></h3>
        </div>
        <button onClick={() => navigator.clipboard.writeText('muhammedayaan213@gmail.com')} className="w-full md:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-neon transition-colors shrink-0">
          CONNECT NOW <ArrowUpRight size={18} />
        </button>
      </motion.div>
    </section>
  );
};

export default BentoGrid;
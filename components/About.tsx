import React from 'react';
import { useCursorStore } from '../store';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { setCursorVariant } = useCursorStore();

  return (
    <section id="evolution" className="relative min-h-[80vh] py-24 px-6 md:px-12 w-full max-w-7xl mx-auto z-20 flex items-center overflow-hidden">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-center md:text-start">
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <p className="font-mono text-neon text-sm uppercase tracking-widest">/ Who I Am</p>
                </div>
                {/* Standardized Font Size */}
                <h2 className="text-5xl md:text-[6vw] font-display font-bold uppercase text-white leading-none tracking-tighter">
                  About Me
                </h2>
              </div>
              <p className="max-w-xl text-lg text-gray-400 leading-relaxed font-medium">
                I bridge the gap between complex logic and fluid design. Crafting immersive web experiences that feel alive, responsive, and technically superior.
              </p>
              <p className="max-w-xl text-base text-gray-500 leading-relaxed">
                As a passionate Full-Stack Creative Developer based in Karachi, PK, I specialize in turning complex challenges into elegant, high-performance solutions that deliver real value.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-last"
            onMouseEnter={() => setCursorVariant('text')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {/* Performance: Reduced backdrop blur for mobile */}
            <div className="bg-[#050505]/90 md:backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                <span className="ml-4 text-xs font-mono text-gray-500 tracking-wider">ayaan.ts</span>
              </div>
              <div className="space-y-2 overflow-x-auto">
                <code className="font-mono text-sm md:text-base leading-relaxed whitespace-pre block">
                  <div><span className="text-[#ff7b72] italic">const</span> <span className="text-white font-bold">developer</span> <span className="text-[#ff7b72]">=</span> <span className="text-gray-400">{'{'}</span></div>
                  <div><span className="ml-4 md:ml-8 text-[#79c0ff]">name:</span> <span className="text-[#a5d6ff]">'Muhammad Ayaan'</span><span className="text-gray-400">,</span></div>
                  <div><span className="ml-4 md:ml-8 text-[#79c0ff]">location:</span> <span className="text-[#a5d6ff]">'Karachi, PK'</span><span className="text-gray-400">,</span></div>
                  <div><span className="ml-4 md:ml-8 text-[#79c0ff]">role:</span> <span className="text-[#a5d6ff]">'Full-Stack Creative Dev'</span><span className="text-gray-400">,</span></div>
                  <div><span className="ml-4 md:ml-8 text-[#79c0ff]">skills:</span> <span className="text-gray-400">['</span><span className="text-[#d2a8ff]">Frontend</span><span className="text-gray-400">', '</span><span className="text-[#d2a8ff]">Backend</span><span className="text-gray-400">']</span></div>
                  <div><span className="ml-4 md:ml-8 text-gray-400">{'}'};</span></div>
                </code>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
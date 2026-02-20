import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useCursorStore } from '../store';

const Footer: React.FC = () => {
  const { setCursorVariant } = useCursorStore();
  const [copied, setCopied] = useState(false);
  
  // Scroll tracking ke liye ref
  const containerRef = useRef<HTMLDivElement>(null);

  // Footer scroll progress ko track karna
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"] // Jab footer dikhna shuru ho aur jab poora dikh jaye
  });

  // Zuned Aalim jaisa Zoom-Out aur Fade-in effect
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]); // Halki si parallax push

  const handleCopy = () => {
    navigator.clipboard.writeText('muhammedayaan213@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // 1. CLIP-PATH WRAPPER: Ye trick Footer ko doosre sections ke upar aane se rokti hai
    <div
      ref={containerRef}
      className="relative w-full h-[80vh] md:h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* 2. FIXED BACKGROUND: Hamesha screen ke bottom par chipka rahega */}
      <div className="fixed bottom-0 left-0 w-full h-[80vh] md:h-screen bg-[#020202] -z-10">
        
        {/* 3. ANIMATED CONTENT: Scroll ke sath sath Zoom Out hoga */}
        <motion.div
          style={{ scale, opacity, y }}
          className="w-full h-full flex flex-col justify-between max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-10"
        >
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="text-sm font-mono text-gray-400 uppercase tracking-widest">
              <p>Based in</p>
              <p className="text-neon mt-1">KARACHI, PK • {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour12: true, hour: 'numeric', minute: '2-digit' })}</p>
            </div>

            <div className="flex flex-col md:items-end gap-4 text-sm font-mono text-gray-400 uppercase tracking-widest">
              <p className="mb-2 text-gray-600">SOCIALS</p>
              {['LinkedIn', 'GitHub', 'Fiverr', 'Twitter'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="hover:text-neon transition-colors flex items-center gap-2 group"
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  {link} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Center Giant Text */}
          <div className="mt-auto mb-auto w-full flex justify-center py-10">
            <div 
              className="group cursor-pointer text-center" 
              onClick={handleCopy}
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <p className="text-xs md:text-sm font-mono text-gray-500 mb-4 md:mb-6 uppercase tracking-widest transition-colors group-hover:text-white">HAVE AN IDEA?</p>
              <h2 className="text-[12vw] md:text-[8vw] font-display font-bold leading-none tracking-tighter text-white group-hover:text-neon transition-colors duration-500 uppercase">
                START A PROJECT
              </h2>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
            <button 
              onClick={handleCopy}
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
              className="flex items-center gap-2 text-xs md:text-sm font-mono text-gray-400 hover:text-white transition-colors"
            >
              MUHAMMEDAYAAN213@GMAIL.COM
              {copied ? <Check size={16} className="text-neon" /> : <Copy size={16} />}
            </button>
            <p className="text-xs md:text-sm font-mono text-gray-600 uppercase tracking-widest">© {new Date().getFullYear()} MUHAMMAD AYAAN</p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
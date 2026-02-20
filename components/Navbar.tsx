import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursorStore, usePreloaderStore } from '../store';
import { Menu, X } from 'lucide-react'; 
import Logo from './Logo'; // <-- Logo import karna mat bhooliye ga

const Navbar = () => {
  const { setCursorVariant } = useCursorStore();
  const { isLoading } = usePreloaderStore();
  const [isOpen, setIsOpen] = useState(false); 

  const navLinks = ['Evolution', 'Arsenal', 'Projects', 'Contact'];

  return (
    <>
      <motion.nav 
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: isLoading ? '-100%' : 0, opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-5 md:px-12 flex justify-between items-center backdrop-blur-md bg-[#050505]/30 border-b border-white/5"
      >
        {/* ========================================= */}
        {/* BRANDING SECTION (Logo + Text) */}
        {/* ========================================= */}
        <div 
          className="flex items-center gap-4 relative z-50 cursor-pointer"
          onMouseEnter={() => setCursorVariant('text')}
          onMouseLeave={() => setCursorVariant('default')}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Animated SVG Logo */}
          <Logo />
          
          {/* Name Text */}
          <div className="flex flex-col hidden sm:flex">
            <span className="font-display font-bold text-lg tracking-widest text-white uppercase leading-none">
              Ayaan.
            </span>
            <span className="font-mono text-[9px] text-neon uppercase tracking-widest mt-1">
              Creative Dev
            </span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-mono text-xs tracking-[0.2em] text-gray-400">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-neon transition-colors duration-300 uppercase"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              // {item}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-neon" /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Full-Screen Menu Overlay... (Baaki code same rahega) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                onClick={() => setIsOpen(false)} 
                className="font-display text-5xl font-bold text-white hover:text-neon uppercase tracking-widest"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
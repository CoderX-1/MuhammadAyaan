import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursorStore, usePreloaderStore } from '../store';
import { Menu, X } from 'lucide-react'; 
import { useLenis } from '@studio-freight/react-lenis';
import Logo from './Logo';

const Navbar = () => {
  const { setCursorVariant } = useCursorStore();
  const { isLoading } = usePreloaderStore();
  const [isOpen, setIsOpen] = useState(false); 
  
  const lenis = useLenis();

  // 100% Synced Links (Line-wise)
  const navLinks = [
    { name: 'About', href: '#evolution' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Arsenal', href: '#arsenal' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); 
    setIsOpen(false);   

    if (lenis) {
      // Offset -50 taaki thora margin milay header se
      lenis.scrollTo(targetId, { offset: -50, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: isLoading ? '-100%' : 0, opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-5 md:px-12 flex justify-between items-center backdrop-blur-md bg-[#050505]/30 border-b border-white/5"
      >
        <div 
          className="flex items-center gap-4 relative z-50 cursor-pointer"
          onMouseEnter={() => setCursorVariant('text')}
          onMouseLeave={() => setCursorVariant('default')}
          onClick={() => {
            if (lenis) lenis.scrollTo(0, { duration: 1.5 });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo />
          <div className="flex flex-col hidden sm:flex">
            <span className="font-display font-bold text-lg tracking-widest text-white uppercase leading-none">Ayaan.</span>
            <span className="font-mono text-[9px] text-neon uppercase tracking-widest mt-1">Creative Dev</span>
          </div>
        </div>
        
        <div className="hidden lg:flex gap-6 xl:gap-8 font-mono text-[10px] xl:text-xs tracking-[0.2em] text-gray-400">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-neon transition-colors duration-300 uppercase"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              // {item.name}
            </a>
          ))}
        </div>

        <button className="lg:hidden relative z-50 text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-neon" /> : <Menu size={28} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-100%' }} transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {navLinks.map((item, i) => (
              <motion.a
                key={item.name} href={item.href} onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}
                className="font-display text-4xl md:text-5xl font-bold text-white hover:text-neon uppercase tracking-widest"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
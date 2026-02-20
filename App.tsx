import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion'; // <-- Framer motion import kiya
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import ProcessorBackground from './components/ProcessorBackground';
import Services from './components/Services'; 
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import { usePreloaderStore } from './store'; // <-- Store import kiya

function App() {
  const { isLoading } = usePreloaderStore(); // <-- Loading state

  return (
    <ReactLenis root>
      <Preloader />
      <CustomCursor />
      <Navbar />

      <ProcessorBackground />
      
      <main className="relative z-10 w-full flex flex-col">
        
        <section className="relative h-[130vh] w-full flex flex-col items-center justify-start pt-[30vh] overflow-hidden pointer-events-none">
          
          {/* HERO TEXT - Animated Entrance */}
          <motion.div 
            className="absolute bottom-[10vh] text-center w-full pointer-events-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.33, 1, 0.68, 1] }} // Thode delay ke baad aayega
          >
            <p className="font-mono text-sm md:text-base text-neon uppercase tracking-[0.3em] animate-pulse">
              Scroll to Deconstruct Core
            </p>
          </motion.div>

        </section>

        <div className="relative z-20 flex flex-col w-full bg-[#020202]/80 backdrop-blur-md shadow-[0_-50px_100px_rgba(2,2,2,1)] border-t border-white/5">
            <Services />
            <div className="pt-10">
               <BentoGrid />
            </div>
            <Projects />
            <Testimonials/>
            <div className="bg-[#050505] border-t border-white/5">
              <TechStack />
            </div>
            <Contact />
        </div>
      </main>
      
      <Footer />
    </ReactLenis>
  );
}

export default App;
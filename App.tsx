import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroUI from './components/HeroUI'; 
import About from './components/About';
import Projects from './components/Projects';
import BentoGrid from './components/BentoGrid';
import Services from './components/Services'; 
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'; 
import Footer from './components/Footer';

function App() {
  return (
    // Lenis Smooth Scroll Setup
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      
      {/* Global Overlays */}
      <Preloader />
      <CustomCursor />
      <Navbar />
      
      {/* Main Content Wrapper */}
      <main className="relative z-10 w-full flex flex-col bg-[#020202] text-white selection:bg-neon selection:text-black">
        
        {/* 1. THE HOOK */}
        <HeroUI />

        {/* Backdrop for the rest of the site */}
        <div className="relative z-20 flex flex-col w-full bg-[#020202]/90 backdrop-blur-2xl shadow-[0_-50px_100px_rgba(2,2,2,1)]">
            
            {/* 2. THE IDENTITY (Who am I) */}
            <div className="border-t border-white/5 pt-10">
              <About />
            </div>

            {/* 3. THE PROOF (My Work) - Placed high to grab client attention immediately */}
            <div className="w-full bg-[#050505] border-y border-white/5 py-10 mt-10">
              <Projects /> 
            </div>
            
            {/* 4. THE VALUE (What I offer) - Bento Grid followed by Services */}
            <div className="w-full flex flex-col gap-10 py-20">
               <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center mb-[-40px]">
                 <p className="font-mono text-neon text-sm uppercase tracking-widest mb-4">/ Expertise</p>
                 <h2 className="font-display font-bold text-4xl md:text-6xl text-white">Value I Bring</h2>
               </div>
               <BentoGrid />
               <Services /> 
            </div>

            {/* 5. THE ARSENAL (Tools) - Placed after value to show HOW I do it */}
            <div className="bg-[#050505] border-y border-white/5">
              <TechStack />
            </div>
            
            {/* 6. THE TRUST (Reviews) */}
            <div className="py-20 w-full">
              <Testimonials />
            </div>

            {/* 7. THE CTA (Let's connect) */}
            <div className="border-t border-white/5">
              <Contact />
            </div>

        </div>
      </main>
      
      {/* Footer reveals from the bottom */}
      <Footer />
      
    </ReactLenis>
  );
}

export default App;
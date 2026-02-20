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
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <Preloader />
      <CustomCursor />
      <Navbar />
      
      <main className="relative w-full text-white selection:bg-neon selection:text-black bg-transparent">
        
        {/* 1. HERO LAYER (Khud Fixed hai aur zoom down hoga) */}
        <HeroUI />

        {/* 2. MAIN CONTENT LAYER (Hero ke upar overlap hoga) */}
        <div className="relative z-10 flex flex-col w-full mt-[100vh] bg-[#050505] rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-30px_80px_rgba(204,255,0,0.03)] border-t border-white/10 pb-20">
            
            <div className="pt-24 pb-10">
              <About />
            </div>

            <div className="w-full flex flex-col gap-10 py-10 bg-[#050505]">
               <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center mb-[-40px]">
                 <p className="font-mono text-neon text-sm uppercase tracking-widest mb-4">/ Expertise</p>
                 {/* Standardized Font Size */}
                 <h2 className="text-5xl md:text-[6vw] font-display font-bold leading-none uppercase text-white tracking-tighter">Value I Bring</h2>
               </div>
               <BentoGrid />
               
               {/* Fixed Services Section */}
               <Services /> 
            </div>

            <div className="w-full bg-[#020202] border-y border-white/5 py-20 mt-10">
              <Projects /> 
            </div>

            <div className="bg-[#050505] py-10">
              <TechStack />
            </div>
            
            <div className="py-20 w-full bg-[#020202] border-y border-white/5">
              <Testimonials />
            </div>

            <div className="border-t border-white/5 bg-[#050505] pt-10 pb-10">
              <Contact />
            </div>

        </div>
        
        {/* 3. FOOTER LAYER */}
        <Footer />

      </main>
    </ReactLenis>
  );
}

export default App;
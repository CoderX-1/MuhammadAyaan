import React from 'react';
import { motion } from 'framer-motion';
import { useCursorStore } from '../store';

const Contact: React.FC = () => {
  const { setCursorVariant } = useCursorStore();

  return (
    <section id="contact" className="w-full relative py-20 md:py-32 bg-transparent z-20">
      <div className="max-w-5xl mx-auto px-6 overflow-hidden">
        
        {/* Inner Reveal Box */}
        <motion.div 
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-full w-full flex-col items-center justify-between rounded-3xl bg-[linear-gradient(0deg,_#393632,_#080807)] bg-cover border border-white/10 shadow-lg backdrop-blur-xl p-8 md:p-16"
        >
          <h2 className="text-center text-5xl md:text-7xl font-display font-semibold uppercase text-neon mb-12">
            Let's Make It Happen
          </h2>

          <section className="w-full sm:w-[36rem] mx-auto px-6 sm:px-10 xl:px-14 py-12 rounded-2xl backdrop-blur-xl bg-[#d1d1c7]/5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <h2 className="text-center text-xl md:text-2xl font-medium mb-8 text-white tracking-tight">
              Have a project in mind?
            </h2>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Your name" 
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}
                className="w-full font-normal text-base rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon/50 transition-all duration-300" 
              />
              <input 
                type="email" 
                placeholder="Your email address" 
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}
                className="w-full font-normal text-base rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon/50 transition-all duration-300" 
              />
              <textarea 
                placeholder="Tell me about your business or project" 
                rows={5} 
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}
                className="w-full font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neon/50 transition-all duration-300 resize-none"
              ></textarea>
              <button 
                type="submit" 
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
                className="w-full px-6 py-4 rounded-xl font-bold tracking-wide text-sm transition-all duration-300 bg-neon text-black hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] active:scale-[0.98]"
              >
                Get a quote
              </button>
            </form>
          </section>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
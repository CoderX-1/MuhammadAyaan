import React from 'react';
import { motion } from 'framer-motion';
import { useCursorStore } from '../store';

const Contact: React.FC = () => {
  const titleText = "Let's Make It Happen";
  const { setCursorVariant } = useCursorStore(); // Cursor store add kiya

  return (
    <section id="contact" className="w-full relative py-20 md:py-32 bg-transparent z-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Exact gradient and styles from fafsa.txt */}
        <div className="relative flex h-full w-full flex-col items-center justify-between rounded-3xl bg-[linear-gradient(0deg,_#393632,_#080807)] bg-cover border border-white/10 shadow-lg backdrop-blur-xl p-8 md:p-16">
          
          <h2 className="text-center text-5xl md:text-7xl font-display font-semibold uppercase text-neon mb-12">
            <div className="overflow-hidden flex justify-center flex-wrap gap-x-4">
              {titleText.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: '100%' }}
                  whileInView={{ opacity: 1, y: '0%' }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h2>

          <section className="w-full sm:w-[36rem] mx-auto px-6 sm:px-10 xl:px-14 py-12 rounded-2xl backdrop-blur-xl bg-[#d1d1c7]/5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <h2 className="text-center text-xl md:text-2xl font-medium mb-8 text-white tracking-tight">
              Have a project in mind?
            </h2>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  onMouseEnter={() => setCursorVariant('text')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="w-full font-normal text-base rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-neon/50 focus:bg-white/10 transition-all duration-300" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  onMouseEnter={() => setCursorVariant('text')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="w-full font-normal text-base rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-neon/50 focus:bg-white/10 transition-all duration-300" 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell me about your business or project" 
                  rows={5} 
                  required 
                  onMouseEnter={() => setCursorVariant('text')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="w-full font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-neon/50 focus:bg-white/10 transition-all duration-300 resize-none"
                ></textarea>
              </div>
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

        </div>
      </div>
    </section>
  );
};

export default Contact;
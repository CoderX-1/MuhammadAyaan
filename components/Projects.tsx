import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useCursorStore } from '../store';

const projects = [
  { title: "Streaming Platform", category: "Web Build & Architecture", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop", link: "#" },
  { title: "Desktop AI Assistant", category: "Python & Machine Learning", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop", link: "#" },
  { title: "DevZenith Agency", category: "Creative Portfolio", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", link: "#" }
];

const ProjectCard = ({ project, index, setCursorVariant }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div id={`project-card-${index}`} ref={cardRef} className="flex flex-col group relative">
      <motion.a 
        href={project.link}
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8 }}
        className="relative flex aspect-square md:aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 p-6 shadow-2xl"
        onMouseEnter={() => setCursorVariant('button')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <div className="relative z-10 w-full h-full rounded-xl overflow-hidden bg-black border border-white/10">
            <motion.img style={{ y, scale: 1.15 }} src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.2] grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
               <div className="flex items-center gap-3 bg-neon text-black px-6 py-3 rounded-full font-bold text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  VIEW CASE STUDY <ArrowUpRight size={18} />
               </div>
            </div>
        </div>
      </motion.a>
      <div className="flex justify-between items-end mt-8 pl-4 border-l-2 border-neon/50">
        <div>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { setCursorVariant } = useCursorStore();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    projects.forEach((_, i) => {
      const el = document.getElementById(`project-card-${i}`);
      if (el) {
        const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActiveIndex(i); }, { threshold: 0.5 });
        observer.observe(el);
        observers.push(observer);
      }
    });
    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <section id="projects" className="w-full relative py-24 bg-transparent z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-20">
          {/* Standardized Font Size */}
          <h1 className="text-5xl md:text-[6vw] font-display font-bold leading-none text-white uppercase tracking-tighter m-0">
            SELECTED WORKS /
          </h1>
        </div>
        <div className="flex flex-col md:flex-row relative items-stretch gap-10 md:gap-20">
          <div className="hidden md:block w-5/12 relative">
            <div className="sticky top-[30vh] flex h-[1em] overflow-hidden text-[16vw] font-display font-bold leading-none text-white select-none">
              <span className="relative">0</span>
              <div className="relative h-full overflow-hidden">
                <motion.div className="flex flex-col" animate={{ y: `-${activeIndex * (100 / projects.length)}%` }} transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}>
                  {projects.map((_, i) => (<span key={i} className="h-[1em] flex items-center">{i + 1}</span>))}
                </motion.div>
              </div>
            </div>
          </div>
          <aside className="w-full md:w-7/12 flex flex-col gap-y-20">
            {projects.map((project, i) => (<ProjectCard key={i} project={project} index={i} setCursorVariant={setCursorVariant} />))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Projects;
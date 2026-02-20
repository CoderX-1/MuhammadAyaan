import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCursorStore } from '../store';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Frontend Architecture",
    category: "01 / Development",
    description: "Building highly scalable, high-performance web applications. Specializing in immersive 3D WebGL experiences and physics-based fluid animations.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
    tech: ["Next.js", "React", "Three.js", "GSAP"]
  },
  {
    id: 2,
    title: "Backend & AI Systems",
    category: "02 / Intelligence",
    description: "Developing robust server-side architecture and integrating custom AI assistants for intelligent desktop and web automation.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop", 
    tech: ["Python", "Node.js", "Machine Learning", "APIs"]
  },
  {
    id: 3,
    title: "UI/UX & Motion",
    category: "03 / Experience",
    description: "Crafting pixel-perfect, detail-driven interfaces. Bridging the gap between raw code and human emotion through calculated motion design.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop", 
    tech: ["Framer Motion", "Tailwind CSS", "UI Design"]
  }
];

const Services: React.FC = () => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCursorVariant } = useCursorStore();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning CSS se ho rahi hai, GSAP sirf X axis pe move karega
      gsap.to(containerRef.current, {
        x: () => -(containerRef.current!.scrollWidth - window.innerWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom bottom", // Jitni height section ki hai utna chalega
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    // FOOLPROOF STICKY TRICK: Iski height 300vh hai (3 sections ke liye)
    <section id="services" ref={triggerRef} className="relative h-[300vh] w-full z-20 border-t border-white/5 bg-transparent">
      
      {/* Yeh div screen par chipka rahega (sticky) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Yeh track horizontally slide hoga */}
        <div ref={containerRef} className="flex h-full w-[300vw]">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="w-screen h-full flex flex-col md:flex-row p-10 md:p-20 justify-center items-center relative border-r border-white/5 flex-shrink-0"
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {/* Background Number */}
              <div className="absolute top-20 left-10 md:left-20 text-[25vw] font-bold text-white/5 select-none font-display leading-none z-0">
                0{index + 1}
              </div>

              <div className="z-10 w-full flex flex-col justify-center space-y-6 md:pr-10">
                <span className="text-neon font-mono tracking-widest text-sm uppercase">{service.category}</span>
                <h2 className="text-5xl md:text-7xl font-display font-bold uppercase text-white leading-tight">
                  {service.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {service.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono text-gray-300 border border-white/10 rounded-full bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

                
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
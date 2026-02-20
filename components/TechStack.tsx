import React from 'react';
import { motion } from 'framer-motion';
import { useCursorStore } from '../store';

const row1 = [
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
];
const row2 = [
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
];

const MarqueeRow = ({ items, direction = 1, speed = 40 }: any) => {
  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        className="flex gap-4 md:gap-6 px-2 md:px-3 w-fit"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-[#050505] px-5 py-2.5 transition-all duration-300 hover:border-neon hover:bg-neon/5">
            <div className="relative h-5 w-5 md:h-6 md:w-6 flex-shrink-0">
              <img src={item.icon} alt={item.name} className="h-full w-full object-contain" loading="lazy" />
            </div>
            <span className="font-mono font-medium text-sm md:text-base text-white/80 group-hover:text-white transition-colors">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TechStack: React.FC = () => {
  const { setCursorVariant } = useCursorStore();

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1 }}
      id="arsenal" 
      className="relative min-h-[80vh] py-24 w-full overflow-hidden bg-[#020202] z-20"
      onMouseEnter={() => setCursorVariant('text')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="mb-20 space-y-6 text-center">
          <div className="space-y-3">
             <p className="font-mono text-neon text-xs md:text-sm uppercase tracking-[0.15em]">/ Skills & Expertise</p>
             {/* Standardized Font Size */}
            <h2 className="text-5xl md:text-[6vw] font-display font-bold uppercase text-white leading-none tracking-tighter">
              Development<br/><span className="text-white/20 italic font-serif">Arsenal</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col gap-6 py-10 w-full mt-10">
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#020202] via-transparent to-[#020202] w-full" />
        <MarqueeRow items={row1} direction={1} speed={45} />
        <MarqueeRow items={row2} direction={-1} speed={55} />
      </div>
    </motion.section>
  );
};

export default TechStack;
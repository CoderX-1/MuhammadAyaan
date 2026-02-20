import React from 'react';
import { motion } from 'framer-motion';
import { useCursorStore } from '../store';

// Live CDN Links for Icons (No need to download any images!)
const row1 = [
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
];

const row2 = [
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Vite.JS", icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "SCSS", icon: "https://cdn.simpleicons.org/sass/CC6699" },
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
];

const row3 = [
  { name: "Discord.JS", icon: "https://cdn.simpleicons.org/discord/5865F2" },
  { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite/white" },
  { name: "NGINX", icon: "https://cdn.simpleicons.org/nginx/009639" },
  { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "Markdown", icon: "https://cdn.simpleicons.org/markdown/white" },
  { name: "Rust", icon: "https://cdn.simpleicons.org/rust/white" },
  { name: "C#", icon: "https://cdn.simpleicons.org/csharp/239120" },
];

type Skill = { name: string; icon: string };

// Infinite Scrolling Marquee Component with Icons
const MarqueeRow = ({ items, direction = 1, speed = 40 }: { items: Skill[], direction?: number, speed?: number }) => {
  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        className="flex gap-4 md:gap-6 px-2 md:px-3 w-fit"
      >
        {/* List ko 4 dafa repeat kiya hai seamless infinite loop ke liye */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div 
            key={i} 
            className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-[#050505]/50 px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-neon hover:bg-neon/5"
          >
            {/* SVG Icon Container - Loads directly from CDN */}
            <div className="relative h-5 w-5 md:h-6 md:w-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              <img 
                src={item.icon} 
                alt={item.name} 
                className="h-full w-full object-contain drop-shadow-md"
                loading="lazy"
                onError={(e) => { // Fallback agar internet slow ho
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="%23333"/></svg>';
                }}
              />
            </div>

            <span className="whitespace-nowrap font-mono font-medium text-sm md:text-base text-white/80 group-hover:text-white transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TechStack: React.FC = () => {
  const { setCursorVariant } = useCursorStore();

  return (
    <section 
      id="arsenal" 
      className="relative min-h-[80vh] py-24 w-full overflow-hidden bg-[#020202] z-20"
      onMouseEnter={() => setCursorVariant('text')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-neon/5 blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-20 space-y-6 text-center">
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-6">
              <div className="relative flex h-px w-12 md:w-20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neon/50"></div>
              </div>
              <p className="whitespace-nowrap font-mono font-semibold text-neon text-xs md:text-sm uppercase tracking-[0.15em]">
                / Skills & Expertise
              </p>
              <div className="relative flex h-px w-12 md:w-20">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neon/50"></div>
              </div>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-tight tracking-tight uppercase">
              Development<br/><span className="text-white/20 italic font-serif">Arsenal</span>
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed font-medium">
            From highly interactive frontend interfaces to robust backend architectures, these are the tools I use to craft exceptional digital experiences.
          </p>
        </div>

      </div>

      {/* Marquee Ticker Container */}
      <div className="relative flex flex-col gap-6 py-10 w-full mt-10">
        
        {/* Left & Right Gradient Masks (Edge Fades) */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#020202] via-transparent to-[#020202] w-full" />

        {/* 3 Rows of infinite scrolling skills WITH CDN ICONS */}
        <MarqueeRow items={row1} direction={1} speed={45} />
        <MarqueeRow items={row2} direction={-1} speed={55} />
        <MarqueeRow items={row3} direction={1} speed={50} />

      </div>

    </section>
  );
};

export default TechStack;
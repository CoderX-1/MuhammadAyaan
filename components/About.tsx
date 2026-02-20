import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCursorStore } from '../store';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const { setCursorVariant } = useCursorStore();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.innerText.split(' ');
      if (textRef.current) {
        textRef.current.innerHTML = words!.map(word => `<span class="inline-block opacity-10 mr-2 word-reveal">${word}</span>`).join('');
      }

      gsap.to('.word-reveal', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: 1,
        },
        opacity: 1,
        stagger: 0.1,
        color: '#ffffff',
        duration: 1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen py-32 px-6 md:px-20 flex items-center justify-center bg-dark"
      onMouseEnter={() => setCursorVariant('text')}
      onMouseLeave={() => setCursorVariant('default')}
    >
      <div className="max-w-6xl w-full">
        <p className="text-sm font-mono text-neon mb-8 tracking-widest uppercase">/ Philosophy</p>
        <p 
          ref={textRef} 
          className="font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] md:leading-[1.1] text-gray-400"
        >
          I bridge the gap between complex logic and fluid design. Crafting immersive web experiences that feel alive, responsive, and technically superior. Web development is not just code; it is digital architecture for the future.
        </p>
      </div>
    </section>
  );
};

export default About;

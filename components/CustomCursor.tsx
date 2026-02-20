import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursorStore } from '../store';

const CustomCursor: React.FC = () => {
  const { cursorVariant } = useCursorStore();
  
  // React state (useState) ki jagah Motion Values use kiye hain for zero-lag performance
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth Spring physics directly applied to mouse values
  const springX = useSpring(mouseX, { stiffness: 800, damping: 40, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 800, damping: 40, mass: 0.2 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: 'white',
      mixBlendMode: 'difference' as any,
      border: '0px solid transparent'
    },
    text: {
      height: 80,
      width: 80,
      backgroundColor: 'white',
      mixBlendMode: 'difference' as any,
      border: '0px solid transparent'
    },
    button: {
      height: 20,
      width: 20,
      backgroundColor: '#CCFF00', 
      mixBlendMode: 'normal' as any,
      border: '0px solid transparent'
    },
    project: {
      height: 80,
      width: 80,
      backgroundColor: 'transparent',
      border: '2px solid white',
      mixBlendMode: 'difference' as any,
    }
  };

  return (
    <motion.div
      // hidden md:block ensures cursor mobile touch par atak na jaye
      className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      style={{
        left: springX,
        top: springY,
        x: "-50%", 
        y: "-50%",
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'tween', duration: 0.2, ease: "easeInOut" }} 
    />
  );
};

export default CustomCursor;
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MagneticProps } from '../types';
import { useCursorStore } from '../store';

const MagneticButton: React.FC<MagneticProps> = ({ children, strength = 30 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setCursorVariant } = useCursorStore();

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x / strength, y: y / strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setCursorVariant('default');
  };

  const handleMouseEnter = () => {
    setCursorVariant('button');
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { useCursorStore } from '../store';

const Word = ({ children, position }: any) => {
  const ref = useRef<any>();
  const color = new THREE.Color();

  useFrame(({ camera }) => {
    if (!ref.current) return;
    
    ref.current.quaternion.copy(camera.quaternion);

    const vec = new THREE.Vector3();
    ref.current.getWorldPosition(vec);
    
    const normalizedZ = (vec.z + 3.5) / 7; 
    
    const opacity = THREE.MathUtils.lerp(0.1, 1, normalizedZ);
    const scale = THREE.MathUtils.lerp(0.5, 1.3, normalizedZ);
    
    ref.current.fillOpacity = opacity;
    ref.current.scale.set(scale, scale, scale);
    
    ref.current.color = color.lerpColors(
      new THREE.Color('#1a2e1a'), 
      new THREE.Color('#CCFF00'), 
      normalizedZ
    );
  });

  return (
    <Text 
      ref={ref} 
      position={position} 
      fontSize={0.4} 
      font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
      anchorX="center"
      anchorY="middle"
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ./"
    >
      {children}
    </Text>
  );
};

const Cloud = ({ radius = 3.5 }) => {
  const wordsList = [
    "REACT", "NEXT.JS", "THREE.JS", "GSAP", "TAILWIND", 
    "NODE.JS", "TYPESCRIPT", "PYTHON", "WEBGL", "VERCEL", 
    "UI/UX", "FRAMER", "MOTION", "API", "AI", "GITHUB",
    "FIGMA", "GRAPHQL", "POSTGRES", "DOCKER"
  ];
  
  const items = useMemo(() => {
    const temp = [];
    const numItems = 20; 
    
    for (let i = 0; i < numItems; i++) {
      const phi = Math.acos(-1 + (2 * i) / numItems);
      const theta = Math.sqrt(numItems * Math.PI) * phi;
      const vector = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
      temp.push([vector, wordsList[i % wordsList.length]]);
    }
    return temp;
  }, [radius]);

  return (
    <group>
      {items.map(([pos, word], index) => (
        <Word key={index} position={pos}>{word as string}</Word>
      ))}
    </group>
  );
};

const TechStack: React.FC = () => {
  const { setCursorVariant } = useCursorStore();
  
  // Mobile check for adjusting 3D Sphere radius
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section id="arsenal" className="h-[80vh] md:h-[100vh] bg-[#020202] relative flex flex-col items-center justify-center overflow-hidden z-20">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[50vh] bg-neon/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
        className="w-full h-full cursor-grab active:cursor-grabbing z-10"
        onMouseEnter={() => setCursorVariant('text')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <Canvas camera={{ position: [0, 0, 9], fov: 50 }}>
          <fog attach="fog" args={['#020202', 4, 12]} />
          
          {/* Automatically adjust radius for mobile devices */}
          <Cloud radius={isMobile ? 2.2 : 3.5} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={1.5} 
            makeDefault 
          />
        </Canvas>
      </motion.div>
    </section>
  );
};

export default TechStack;
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

const ProcessorCore = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const topLayerRef = useRef<THREE.Mesh>(null!);
  const middleLayerRef = useRef<THREE.Mesh>(null!);
  const bottomLayerRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    // Window scroll ki value get karna (Lenis smooth scroll ke sath kaam karega)
    const scrollY = window.scrollY;
    const explosionFactor = Math.min(scrollY / 1000, 1); // 0 se 1 tak map karega
    
    // Explode effect (Layers scroll karne par door jayengi)
    if(topLayerRef.current) topLayerRef.current.position.y = THREE.MathUtils.lerp(0, 1.5, explosionFactor);
    if(bottomLayerRef.current) bottomLayerRef.current.position.y = THREE.MathUtils.lerp(0, -1.5, explosionFactor);
    
    // Processor ko ghumana aur mouse ke hisab se tilt karna
    const { pointer } = state;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(0.5, pointer.y * 0.5 + 0.5, 0.1);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(0, pointer.x * -0.5, 0.1);
  });

  return (
    <group ref={groupRef} rotation={[0.5, 0, 0]}>
      {/* Top Layer - Heat Spreader (Dark Metal) */}
      <Box ref={topLayerRef} args={[3, 0.2, 3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
      </Box>
      
      {/* Middle Layer - Glowing Circuit Core (Neon Green) */}
      <Box ref={middleLayerRef} args={[2.8, 0.3, 2.8]} position={[0, -0.3, 0]}>
        <meshStandardMaterial color="#CCFF00" emissive="#CCFF00" emissiveIntensity={2} toneMapped={false} />
      </Box>

      {/* Bottom Layer - Motherboard Socket (Wireframe) */}
      <Box ref={bottomLayerRef} args={[3.2, 0.1, 3.2]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#333" wireframe={true} />
      </Box>
    </group>
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 h-screen pointer-events-none">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[0, 0, 0]} intensity={5} color="#CCFF00" />
        <ProcessorCore />
      </Canvas>
    </div>
  );
};

export default Hero3D;
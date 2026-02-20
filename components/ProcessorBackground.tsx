import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, RoundedBox, Box } from '@react-three/drei';
import * as THREE from 'three';
import { usePreloaderStore } from '../store'; 

const RealisticCPU = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const ihsRef = useRef<THREE.Mesh>(null!); 
  const dieRef = useRef<THREE.Group>(null!); 
  const pcbRef = useRef<THREE.Mesh>(null!); 
  const neonMaterialRef = useRef<THREE.MeshBasicMaterial>(null!);

  const { isLoading } = usePreloaderStore();
  const introProgress = useRef(0); 

  useFrame((state, delta) => {
    if (!isLoading) {
      introProgress.current = THREE.MathUtils.damp(introProgress.current, 1, 2, delta);
    }

    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / 3000, 1); 
    const easeProgress = progress * (2 - progress); 

    const s = introProgress.current; 
    const entranceY = (1 - s) * 3; 

    if (groupRef.current) {
      // Mobile screen scaling fix
      const isMobile = window.innerWidth < 768;
      const scaleFactor = isMobile ? 0.5 : 1; 
      
      groupRef.current.scale.set(s * scaleFactor, s * scaleFactor, s * scaleFactor);
      groupRef.current.position.y = entranceY;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(0.8, Math.PI * 1.5, easeProgress) + (state.clock.elapsedTime * 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(0.5, 0.2, easeProgress);
    }

    if (neonMaterialRef.current) {
      const bootSpike = Math.max(0, 1 - Math.abs(introProgress.current - 0.8) * 4); 
      neonMaterialRef.current.opacity = 0.5 + bootSpike * 0.5; 
    }

    if (ihsRef.current) {
      ihsRef.current.position.y = THREE.MathUtils.lerp(0.2, 2.5, easeProgress);
    }

    if (dieRef.current) {
      dieRef.current.position.y = THREE.MathUtils.lerp(0.1, 1.2, easeProgress);
      const pulse = Math.sin(state.clock.elapsedTime * 4) * (0.01 + easeProgress * 0.04);
      dieRef.current.scale.set(1 + pulse, 1 + pulse, 1 + pulse);
    }

    if (pcbRef.current) {
      pcbRef.current.position.y = THREE.MathUtils.lerp(0, -0.5, easeProgress);
    }

    const introZoom = (1 - s) * 10;
    state.camera.position.z = THREE.MathUtils.lerp(10, 7, easeProgress) + introZoom;
    state.camera.position.y = THREE.MathUtils.lerp(2, 0, easeProgress);
  });

  return (
    <group ref={groupRef}>
      <group ref={ihsRef}>
        <RoundedBox args={[3.2, 0.3, 3.2]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial color="#888888" metalness={0.9} roughness={0.2} envMapIntensity={2} />
        </RoundedBox>
        <Box args={[3.6, 0.1, 3.6]} position={[0, -0.15, 0]}>
          <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.3} />
        </Box>
      </group>

      <group ref={dieRef}>
        <Box args={[1.5, 0.1, 1.5]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#050505" metalness={1} roughness={0.1} />
        </Box>
        <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.4, 1.4, 8, 8]} />
          <meshBasicMaterial ref={neonMaterialRef} color="#CCFF00" wireframe transparent opacity={0.5} toneMapped={false} />
        </mesh>
      </group>

      <group ref={pcbRef}>
        <RoundedBox args={[4, 0.1, 4]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial color="#0a0a0a" metalness={0.4} roughness={0.7} />
        </RoundedBox>
        <mesh position={[0, -0.06, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.8, 3.8, 20, 20]} />
          <meshStandardMaterial color="#b8860b" wireframe metalness={1} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
};

const ProcessorBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[-1] bg-[#020202]">
      <Canvas camera={{ position: [0, 2, 10], fov: 45 }} gl={{ antialias: true }}>
        <color attach="background" args={['#020202']} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#CCFF00" />
        <pointLight position={[0, 1, 0]} intensity={3} color="#CCFF00" distance={5} decay={2} />
        <Environment preset="city" />
        <RealisticCPU />
      </Canvas>
    </div>
  );
};

export default ProcessorBackground;
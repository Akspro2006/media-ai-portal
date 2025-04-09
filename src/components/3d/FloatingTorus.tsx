
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color } from 'three';

interface FloatingTorusProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
  rotationSpeed?: number;
  wireframe?: boolean;
}

const FloatingTorus: React.FC<FloatingTorusProps> = ({ 
  position = [0, 0, 0], 
  color = "#F97316", 
  size = 0.8,
  rotationSpeed = 0.005,
  wireframe = true
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 2 + Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[size, size/4, 16, 64]} />
      <meshStandardMaterial 
        color={new Color(color)} 
        transparent 
        opacity={0.7} 
        wireframe={wireframe}
      />
    </mesh>
  );
};

export default FloatingTorus;

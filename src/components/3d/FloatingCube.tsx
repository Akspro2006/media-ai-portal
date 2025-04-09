
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import { Color } from 'three';

interface FloatingCubeProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
  rotationSpeed?: number;
  wireframe?: boolean;
}

const FloatingCube: React.FC<FloatingCubeProps> = ({ 
  position = [0, 0, 0], 
  color = "#00A4DC", 
  size = 1,
  rotationSpeed = 0.01,
  wireframe = false
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * rotationSpeed) * 0.3;
      meshRef.current.rotation.y += rotationSpeed * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial 
        color={new Color(color)} 
        transparent 
        opacity={0.7} 
        wireframe={wireframe}
      />
      <Edges color={color} threshold={15} />
    </mesh>
  );
};

export default FloatingCube;

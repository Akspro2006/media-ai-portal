
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, Mesh } from 'three';

interface FloatingSphereProps {
  position?: [number, number, number];
  color?: string;
  radius?: number;
  rotationSpeed?: number;
  wireframe?: boolean;
}

const FloatingSphere: React.FC<FloatingSphereProps> = ({ 
  position = [0, 0, 0], 
  color = "#10B981", 
  radius = 0.7,
  rotationSpeed = 0.007,
  wireframe = false
}) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.z += rotationSpeed * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial 
        color={new Color(color)} 
        transparent 
        opacity={0.6} 
        wireframe={wireframe}
      />
    </mesh>
  );
};

export default FloatingSphere;

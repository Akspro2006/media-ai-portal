
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import FloatingTorus from './FloatingTorus';

const FooterScene: React.FC = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-28 h-24 w-24 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          
          <FloatingTorus 
            position={[0, 0, 0]} 
            size={1.2} 
            color="#00A4DC" 
            wireframe={true} 
            rotationSpeed={0.01}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FooterScene;


import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingCube from './FloatingCube';
import FloatingSphere from './FloatingSphere';
import FloatingTorus from './FloatingTorus';

const HeaderScene: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.6} />
          
          <FloatingCube position={[-3, 1, -2]} size={0.7} color="#00A4DC" wireframe={true} />
          <FloatingSphere position={[3, -1, -3]} radius={0.5} color="#10B981" />
          <FloatingTorus position={[0, -2, -4]} size={1.2} color="#F97316" />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={false} 
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeaderScene;

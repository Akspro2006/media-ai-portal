
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingCube from './FloatingCube';
import FloatingSphere from './FloatingSphere';
import FloatingTorus from './FloatingTorus';

const BackgroundScene: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-30 opacity-30 pointer-events-none">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 10, 10]} intensity={0.5} />
          
          <FloatingCube position={[-10, -5, -15]} size={2} color="#00A4DC" rotationSpeed={0.003} wireframe={true} />
          <FloatingCube position={[15, 8, -20]} size={3} color="#F97316" rotationSpeed={0.002} wireframe={true} />
          <FloatingSphere position={[8, -8, -12]} radius={1.5} color="#10B981" rotationSpeed={0.005} />
          <FloatingSphere position={[-12, 10, -18]} radius={2} color="#00A4DC" rotationSpeed={0.004} />
          <FloatingTorus position={[-5, -12, -15]} size={2.5} color="#F97316" rotationSpeed={0.001} />
          <FloatingTorus position={[12, 0, -25]} size={4} color="#10B981" rotationSpeed={0.0015} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BackgroundScene;

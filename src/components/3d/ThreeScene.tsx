
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import FloatingCube from './FloatingCube';
import FloatingSphere from './FloatingSphere';
import FloatingTorus from './FloatingTorus';

interface ThreeSceneProps {
  className?: string;
  cameraPosition?: [number, number, number];
  orbitControls?: boolean;
  ambientLightIntensity?: number;
  pointLightIntensity?: number;
  showCube?: boolean;
  showSphere?: boolean;
  showTorus?: boolean;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({
  className = "",
  cameraPosition = [0, 0, 5],
  orbitControls = false,
  ambientLightIntensity = 0.5,
  pointLightIntensity = 0.8,
  showCube = true,
  showSphere = true,
  showTorus = true
}) => {
  return (
    <div className={`relative ${className}`}>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPosition} />
          {orbitControls && <OrbitControls enableZoom={false} enablePan={false} />}
          
          <ambientLight intensity={ambientLightIntensity} />
          <pointLight position={[10, 10, 10]} intensity={pointLightIntensity} />
          
          {showCube && <FloatingCube position={[-2, 0, 0]} color="#00A4DC" />}
          {showSphere && <FloatingSphere position={[0, 0, -1]} color="#10B981" />}
          {showTorus && <FloatingTorus position={[2, 0, 0]} color="#F97316" />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;

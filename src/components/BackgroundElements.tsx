
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BackgroundScene from './3d/BackgroundScene';

interface BackgroundElementsProps {
  scrolled?: boolean;
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({ scrolled = false }) => {
  const { scrollY } = useScroll();
  
  // Create scroll-based transforms for background elements
  const rightGlowX = useTransform(scrollY, [0, 500], [0, 50]);
  const leftGlowX = useTransform(scrollY, [0, 500], [0, -50]);
  const topGlowY = useTransform(scrollY, [0, 300], [0, -30]);
  const bottomGlowY = useTransform(scrollY, [0, 300], [0, 30]);
  
  return (
    <>
      {/* 3D animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <BackgroundScene />
      </div>
      
      {/* Gradient orbs that react to scroll */}
      <motion.div 
        className="fixed -top-[30%] -right-[20%] w-[60%] h-[60%] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0,164,220,0.2) 0%, rgba(0,0,0,0) 70%)",
          x: rightGlowX,
          y: topGlowY,
          scale: useTransform(scrollY, [0, 300], [1, scrolled ? 1.2 : 1])
        }}
      />
      
      <motion.div 
        className="fixed -bottom-[30%] -left-[20%] w-[60%] h-[60%] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0) 70%)",
          x: leftGlowX,
          y: bottomGlowY,
          scale: useTransform(scrollY, [0, 300], [1, scrolled ? 1.2 : 1])
        }}
      />
      
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:70px_70px] opacity-25" />
    </>
  );
};

export default BackgroundElements;

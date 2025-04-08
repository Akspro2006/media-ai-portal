
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export const useAnimationControls = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    // Start animations when component mounts
    controls.start("show");
    
    // Animate on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Add scroll-based animations here if needed
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return controls;
};

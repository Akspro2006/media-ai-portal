
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const starFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starFieldRef.current) return;
    
    // Create star field effect
    const starCount = 50;
    const container = starFieldRef.current;
    container.innerHTML = '';
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-white';
      
      // Random size between 1-3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random opacity
      star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      
      // Animation
      star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`;
      
      container.appendChild(star);
    }
  }, []);

  return (
    <motion.div 
      className="relative flex justify-center items-center mb-12 mt-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Star field effect */}
      <div ref={starFieldRef} className="absolute inset-0 -z-10 overflow-hidden">
        {/* Stars will be added here via JavaScript */}
      </div>
    
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-0 left-1/4 w-32 h-32 bg-jellyfin/20 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-8 right-1/4 w-32 h-32 bg-openweb/20 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5
          }}
        />
        
        {/* Subtle background image */}
        <motion.div 
          className="absolute inset-0 opacity-5 bg-cover bg-center -z-20"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')",
            backgroundSize: "cover",
            mixBlendMode: "overlay"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        />
      </div>
      
      <motion.div 
        className="relative z-10"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -top-10 -right-16 text-white/20"
          whileHover={{ 
            scale: 1.1, 
            rotate: 5, 
            color: "rgba(255,255,255,0.3)"
          }}
        >
          <Sparkles className="w-16 h-16" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold text-center">
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70"
            animate={{ 
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{ backgroundSize: "200% 100%" }}
          >
            Home Server
          </motion.span>
        </h1>
        
        <motion.p 
          className="text-gray-400 text-center mt-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Your media and services dashboard
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="absolute w-full max-w-md h-32 bg-gradient-to-r from-jellyfin/30 via-openweb/30 to-filebrowser/30 rounded-full blur-3xl opacity-40 -z-10"
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          width: ["100%", "110%", "100%"],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* 3D-like floating elements */}
      <motion.div 
        className="absolute -bottom-4 -left-20 w-40 h-40 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.1,
          y: [0, -10, 0],
          rotateY: [0, 20, 0],
          rotateX: [0, 10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          filter: "blur(2px)"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-8 -right-16 w-32 h-32 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.1,
          y: [0, -8, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
          filter: "blur(1px) hue-rotate(40deg)"
        }}
      />
    </motion.div>
  );
};

export default Header;


import React from 'react';
import { motion } from 'framer-motion';
import BackgroundScene from './3d/BackgroundScene';

const BackgroundElements: React.FC = () => {
  return (
    <>
      {/* 3D Background Scene */}
      <BackgroundScene />
      
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div 
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-jellyfin/5 rounded-full blur-3xl opacity-40"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Background image - top section */}
        <motion.div 
          className="absolute top-0 right-0 w-full h-3/4 opacity-10 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')", 
            backgroundBlendMode: "overlay",
            mixBlendMode: "overlay"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        />
        
        <motion.div 
          className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 bg-filebrowser/5 rounded-full blur-3xl opacity-30"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5
          }}
        />
        <div className="absolute bottom-0 left-0 w-screen h-1/2 bg-gradient-to-t from-black/30 to-transparent -z-10" />
        
        <motion.div 
          className="absolute top-[20%] left-[30%] w-64 h-64 rounded-full bg-openweb/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute top-[60%] right-[20%] w-80 h-80 rounded-full bg-jellyfin/5 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Background image - bottom section */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1/2 opacity-10 bg-cover bg-bottom"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')", 
            backgroundBlendMode: "overlay",
            mixBlendMode: "overlay"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.07 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        
        {/* Additional fluid floating elements */}
        <motion.div 
          className="absolute top-[35%] left-[60%] w-40 h-40 rounded-full bg-openweb/8 blur-3xl opacity-30"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 7
          }}
        />
        
        {/* Digital abstract elements */}
        <motion.div 
          className="absolute top-1/3 right-1/3 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "300px",
            height: "300px",
            mixBlendMode: "overlay",
            filter: "hue-rotate(140deg)"
          }}
          animate={{
            opacity: [0.1, 0.15, 0.1],
            filter: ["hue-rotate(140deg)", "hue-rotate(200deg)", "hue-rotate(140deg)"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </>
  );
};

export default BackgroundElements;

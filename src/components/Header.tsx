
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <motion.div 
      className="relative flex justify-center items-center mb-12 mt-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-jellyfin/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-8 right-1/4 w-32 h-32 bg-openweb/20 rounded-full blur-3xl animate-pulse-soft" 
          style={{ animationDelay: '1.5s' }}
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
        >
          <Sparkles className="w-16 h-16" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
            Home Server
          </span>
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
      
      <div className="absolute w-full max-w-md h-32 bg-gradient-to-r from-jellyfin/30 via-openweb/30 to-filebrowser/30 rounded-full blur-3xl opacity-40 -z-10" />
    </motion.div>
  );
};

export default Header;

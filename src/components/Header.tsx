
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.div 
      className="relative flex justify-center items-center mb-8 mt-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Home Server
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Your media and services dashboard
        </p>
      </div>
      <div className="absolute w-full max-w-md h-32 bg-gradient-to-r from-jellyfin/20 via-openweb/20 to-filebrowser/20 rounded-full blur-3xl opacity-30 -z-10" />
    </motion.div>
  );
};

export default Header;

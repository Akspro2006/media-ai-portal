
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="mt-24 mb-6 text-center text-gray-500 text-sm relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 -top-12 w-24 h-[1px]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)"
        }}
      />
      
      <motion.div
        className="flex items-center justify-center mb-2 space-x-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ 
          color: "rgba(255,255,255,0.7)",
          transition: { duration: 0.3 }
        }}
      >
        <p>Made with</p>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Heart className="w-4 h-4 text-red-400" />
        </motion.div>
        <p>for your home server</p>
      </motion.div>
      
      <motion.p
        whileHover={{ 
          letterSpacing: "0.5px",
          transition: { duration: 0.3 }
        }}
      >
        © {currentYear} Home Server Dashboard
      </motion.p>
    </motion.footer>
  );
};

export default Footer;

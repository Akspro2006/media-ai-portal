import React from 'react';
import { motion } from 'framer-motion';
import { Github, Heart, Server } from 'lucide-react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <motion.footer className="mt-24 mb-6 text-center text-gray-500 text-sm relative" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5,
    delay: 0.8
  }}>
      <motion.div className="absolute left-1/2 -translate-x-1/2 -top-12 w-24 h-[1px]" initial={{
      scaleX: 0
    }} animate={{
      scaleX: 1
    }} transition={{
      duration: 0.8,
      delay: 1
    }} style={{
      background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)"
    }} />
      
      <motion.div className="absolute left-1/2 -translate-x-1/2 -top-24 -z-10 opacity-10" animate={{
      opacity: [0.05, 0.1, 0.05],
      scale: [0.95, 1, 0.95],
      rotate: [0, 1, 0]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse"
    }}>
        <Server className="w-16 h-16" />
      </motion.div>
      
      <motion.div className="flex items-center justify-center mb-2 space-x-2" initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 1
    }} whileHover={{
      color: "rgba(255,255,255,0.7)",
      transition: {
        duration: 0.3
      }
    }}>
        <p>Made with</p>
        <motion.div animate={{
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}>
          <Heart className="w-4 h-4 text-red-400" />
        </motion.div>
        <p>by akshad sukhia</p>
      </motion.div>
      
      <motion.p whileHover={{
      letterSpacing: "0.5px",
      transition: {
        duration: 0.3
      }
    }}>
        © {currentYear} Home Server Dashboard
      </motion.p>
      
      {/* Star field background */}
      <div className="absolute inset-0 -z-10">
        {Array.from({
        length: 12
      }).map((_, i) => <motion.div key={i} className="absolute w-[1px] h-[1px] bg-white rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.5 + 0.2
      }} animate={{
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.5, 1]
      }} transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay: Math.random() * 2
      }} />)}
      </div>
    </motion.footer>;
};
export default Footer;
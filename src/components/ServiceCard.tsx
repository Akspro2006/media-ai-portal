
import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, url, icon, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 + delay * 0.15, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={cn(
          "group glass-card rounded-xl flex flex-col items-center text-center h-full",
          "border-l-4 shadow-lg transition-all duration-300 relative overflow-hidden backdrop-blur-lg",
          "hover:shadow-xl hover:bg-black/50"
        )}
        style={{ borderLeftColor: color }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <div 
            className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r"
            style={{ backgroundImage: `linear-gradient(to right, ${color}22, transparent)` }}
          />
        </div>

        <div className="relative z-10 p-6">
          <motion.div 
            className={cn("service-icon text-white/90")}
            whileHover={{ rotate: 5, scale: 1.1 }}
            style={{ color }}
          >
            {icon}
          </motion.div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors">
            {description}
          </p>
          
          <motion.div 
            className={cn(
              "py-2 px-5 rounded-full text-sm font-medium flex items-center justify-center mx-auto",
              "backdrop-blur-md bg-black/30 hover:bg-black/50 transition-all duration-300",
              "border border-white/10 hover:border-white/20",
            )}
            style={{ width: 'fit-content' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="mr-1">Launch</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1 group-hover:ml-1">→</span>
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
};

export default ServiceCard;

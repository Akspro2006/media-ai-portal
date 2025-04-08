
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={cn(
          "group glass-card p-6 rounded-xl flex flex-col items-center text-center h-full",
          "border-l-4 shadow-lg hover:shadow-xl transition-all duration-300"
        )}
        style={{ borderLeftColor: color }}
      >
        <div className={cn("service-icon text-white/90")}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className={cn(
          "mt-auto py-2 px-4 rounded-full text-sm font-medium",
          "bg-black/30 hover:bg-black/50 transition-colors duration-200"
        )}>
          Launch
        </div>
      </a>
    </motion.div>
  );
};

export default ServiceCard;

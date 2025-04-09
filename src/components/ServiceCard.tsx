
import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Home, Globe } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  awayUrl?: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  url, 
  awayUrl, 
  icon, 
  color, 
  delay = 0 
}) => {
  // Each service gets a matching background image based on its purpose
  const getBackgroundImage = () => {
    if (title === "Jellyfin") {
      return "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')";
    } else if (title === "Deepseek") {
      return "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')";
    } else if (title === "Cloud Storage") {
      return "url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')";
    }
    return "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 + delay * 0.15, ease: "easeOut" }}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.3, ease: "easeOut" } 
      }}
      whileTap={{ scale: 0.98 }}
      className="perspective-container"
    >
      <motion.div 
        className={cn(
          "group glass-card rounded-xl flex flex-col items-center text-center h-full",
          "border-l-4 shadow-lg transition-all duration-300 relative overflow-hidden backdrop-blur-lg",
          "hover:shadow-xl hover:bg-black/50 card-3d"
        )}
        style={{ borderLeftColor: color }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r"
            style={{ backgroundImage: `linear-gradient(to right, ${color}22, transparent)` }}
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        {/* Background image specific to each service */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-1000"
          style={{ backgroundImage: getBackgroundImage() }}
        />

        <div className="relative z-10 p-6">
          {/* Decorative element */}
          <motion.div 
            className="absolute top-3 right-3 w-12 h-12 opacity-10 organic-shape-alt"
            style={{ backgroundColor: color }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: delay * 0.3,
            }}
          />
        
          <motion.div 
            className={cn("service-icon text-white/90")}
            whileHover={{ rotate: 5, scale: 1.1 }}
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: delay * 0.3,
            }}
            style={{ color }}
          >
            {icon}
          </motion.div>
          
          <motion.h3 
            className="text-xl font-bold mb-2 group-hover:text-white transition-colors"
            initial={{ backgroundPosition: "0% 0%" }}
            whileHover={{ 
              backgroundPosition: "100% 0%",
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
            style={{ 
              backgroundSize: "200% 100%", 
              backgroundImage: `linear-gradient(to right, currentColor, ${color}, currentColor)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block"
            }}
          >
            {title}
          </motion.h3>
          
          <p className="text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors">
            {description}
          </p>
          
          <div className="flex gap-3 justify-center">
            <motion.a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "py-2 px-4 rounded-full text-sm font-medium flex items-center justify-center",
                "backdrop-blur-md bg-black/30 hover:bg-black/50 transition-all duration-300",
                "border border-white/10 hover:border-white/20",
              )}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 0 15px 2px ${color}33` 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Home className="w-4 h-4 mr-2" />
              <span>Home</span>
            </motion.a>
            
            {awayUrl && (
              <motion.a 
                href={awayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "py-2 px-4 rounded-full text-sm font-medium flex items-center justify-center",
                  "backdrop-blur-md bg-black/30 hover:bg-black/50 transition-all duration-300",
                  "border border-white/10 hover:border-white/20",
                )}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 0 15px 2px ${color}33` 
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Globe className="w-4 h-4 mr-2" />
                <span>Away</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;

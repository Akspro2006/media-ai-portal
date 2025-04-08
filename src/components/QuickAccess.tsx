
import React from 'react';
import { motion } from 'framer-motion';
import { Film, FileSearch, Layers } from 'lucide-react';

const QuickAccess: React.FC = () => {
  // Service configuration - same as in ServicesGrid to maintain functionality
  const services = [
    {
      title: "Jellyfin",
      description: "Stream your media collection including movies, TV shows, music, and photos",
      url: "http://192.168.29.77:8096",
      icon: <Film className="w-full h-full" />,
      color: "#00A4DC",
      delay: 1
    },
    {
      title: "OpenWeb UI",
      description: "Access and manage AI models through an intuitive web interface",
      url: "http://192.168.29.77:3000",
      icon: <Layers className="w-full h-full" />,
      color: "#10B981",
      delay: 2
    },
    {
      title: "File Browser",
      description: "Browse, upload, and manage files on your home server",
      url: "http://192.168.29.77:8080",
      icon: <FileSearch className="w-full h-full" />,
      color: "#F97316",
      delay: 3
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="mt-auto"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          className="text-2xl font-bold mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{
            background: "linear-gradient(to right, #ffffff, #a0a0a0)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% 100%",
          }}
        >
          Quick Access
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-5"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 40%)",
            backgroundSize: "120% 120%",
            backgroundPosition: "center"
          }}
        >
          {services.map((service, index) => (
            <motion.a 
              key={`quick-${service.title}`}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-lg flex flex-col items-center fluid-transition"
              style={{ 
                borderBottom: `2px solid ${service.color}`,
                boxShadow: `0 4px 20px -5px ${service.color}22`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: `0 10px 25px -5px ${service.color}33`,
                backgroundColor: 'rgba(0,0,0,0.5)',
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-8 h-8 mb-3 text-white/90"
                style={{ color: service.color }}
                whileHover={{ rotate: 10, scale: 1.1 }}
                animate={{ 
                  y: [0, -3, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.5,
                }}
              >
                {service.icon}
              </motion.div>
              <motion.span 
                className="text-sm font-medium"
                whileHover={{
                  color: service.color,
                  transition: { duration: 0.2 }
                }}
              >{service.title}</motion.span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QuickAccess;

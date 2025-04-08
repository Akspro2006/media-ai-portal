
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import { Film, FileSearch, Layers } from 'lucide-react';

const Index = () => {
  // Service configuration
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

  // Animation variants for staggered child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 py-8 max-w-6xl mx-auto relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-jellyfin/5 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 bg-filebrowser/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-screen h-1/2 bg-gradient-to-t from-black/30 to-transparent -z-10" />
        
        <motion.div 
          className="absolute top-[20%] left-[30%] w-64 h-64 rounded-full bg-openweb/10 blur-3xl"
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
          className="absolute top-[60%] right-[20%] w-80 h-80 rounded-full bg-jellyfin/5 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>
      
      <Header />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              url={service.url}
              icon={service.icon}
              color={service.color}
              delay={service.delay}
            />
          ))}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-auto"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-2xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Quick Access
          </motion.h2>
          
          <div className="grid grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.a 
                key={`quick-${service.title}`}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-lg flex flex-col items-center transition-all duration-300"
                style={{ borderBottom: `2px solid ${service.color}` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: `0 10px 25px -5px ${service.color}33`,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="w-8 h-8 mb-3 text-white/90"
                  style={{ color: service.color }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
                <span className="text-sm font-medium">{service.title}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Index;

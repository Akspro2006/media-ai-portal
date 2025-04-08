
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '@/components/Header';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import { Film, FileSearch, Layers } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const controls = useAnimation();
  const isMobile = useIsMobile();
  
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

  useEffect(() => {
    // Start animations when component mounts
    controls.start("show");
    
    // Animate on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Add scroll-based animations here if needed
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col px-4 sm:px-6 py-8 max-w-6xl mx-auto relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Abstract background elements with fluid animations */}
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
      </div>
      
      <Header />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative mb-16 z-10"
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
            animate={{
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Quick Access
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
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
          </div>
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default Index;

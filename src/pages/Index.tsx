
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

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 py-12 max-w-6xl mx-auto">
      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        
        {/* Background gradient effects */}
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-64">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-jellyfin/10 rounded-full blur-3xl opacity-30 animate-pulse-soft" />
          <div className="absolute top-0 left-1/3 w-1/3 h-full bg-openweb/10 rounded-full blur-3xl opacity-30 animate-pulse-soft" 
            style={{ animationDelay: '1s' }}
          />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-filebrowser/10 rounded-full blur-3xl opacity-30 animate-pulse-soft"
            style={{ animationDelay: '2s' }}
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-auto"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
          <div className="grid grid-cols-3 gap-4">
            {services.map((service) => (
              <a 
                key={`quick-${service.title}`}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-lg flex flex-col items-center hover:scale-105 transition-transform duration-200"
                style={{ borderBottom: `2px solid ${service.color}` }}
              >
                <div className="w-8 h-8 mb-2 text-white/90">
                  {service.icon}
                </div>
                <span className="text-sm">{service.title}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Index;

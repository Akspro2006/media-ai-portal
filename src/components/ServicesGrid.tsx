
import React from 'react';
import { motion, AnimationControls } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { Film, FileSearch, Layers } from 'lucide-react';

interface ServicesGridProps {
  controls: AnimationControls;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ controls }) => {
  // Service configuration
  const services = [
    {
      title: "Jellyfin",
      description: "Stream your media collection including movies, TV shows, music, and photos",
      url: "http://192.168.29.77:8096",
      awayUrl: "http://192.168.192.156:8096",
      icon: <Film className="w-full h-full" />,
      color: "#00A4DC",
      delay: 1
    },
    {
      title: "Deepseek",
      description: "Access and manage AI models through an intuitive web interface",
      url: "http://192.168.29.77:3000",
      awayUrl: "http://192.168.192.156:3000",
      icon: <Layers className="w-full h-full" />,
      color: "#10B981",
      delay: 2
    },
    {
      title: "Cloud Storage",
      description: "Browse, upload, and manage files on your home server",
      url: "http://192.168.29.77:8080",
      awayUrl: "http://192.168.192.156:8080",
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

  return (
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
            awayUrl={service.awayUrl}
            icon={service.icon}
            color={service.color}
            delay={service.delay}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesGrid;

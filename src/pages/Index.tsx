
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home, Globe } from 'lucide-react'; // Add this import for the icons
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import ServicesGrid from '@/components/ServicesGrid';
import QuickAccess from '@/components/QuickAccess';
import { useAnimationControls } from '@/hooks/use-animation-controls';

const Index = () => {
  const controls = useAnimationControls();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  // Create scroll-driven animations
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const serviceGridY = useTransform(scrollY, [0, 300], [0, 20]);
  const quickAccessY = useTransform(scrollY, [300, 600], [0, -20]);

  useEffect(() => {
    // Start animations after a short delay
    const timer = setTimeout(() => {
      controls.start("show");
    }, 500);

    // Add scroll listener to track when page has been scrolled
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col px-4 sm:px-6 py-8 max-w-6xl mx-auto relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundElements scrolled={scrolled} />
      
      <motion.div style={{ opacity: headerOpacity, scale: headerScale }}>
        <Header />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
          Welcome to Your Digital Hub
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Access all your services whether you're at home or away. 
          Connect to your media, AI tools, and files from anywhere.
        </p>
      </motion.div>
      
      <motion.div style={{ y: serviceGridY }}>
        <ServicesGrid controls={controls} />
      </motion.div>
      
      <motion.div 
        className="glass-card p-8 rounded-2xl mb-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        style={{ 
          y: useTransform(scrollY, [100, 400], [0, 15]),
          scale: useTransform(scrollY, [100, 400], [1, 1.02])
        }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A4DC]/20 via-[#10B981]/20 to-[#F97316]/20" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4">Home & Away Access</h3>
        <p className="text-gray-400 mb-6">
          Your services can be accessed from your home network or remotely when you're away.
          <br />
          Use the <span className="text-white font-medium">Home</span> buttons on your local network and the <span className="text-white font-medium">Away</span> buttons when connecting from outside.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start glass-card p-4 rounded-xl">
            <div className="mr-4 p-3 rounded-full bg-[#00A4DC]/20">
              <Home className="w-6 h-6 text-[#00A4DC]" />
            </div>
            <div className="text-left">
              <h4 className="font-bold mb-1">Home Network</h4>
              <p className="text-sm text-gray-400">Connects to your local network services with the fastest speeds</p>
            </div>
          </div>
          
          <div className="flex items-start glass-card p-4 rounded-xl">
            <div className="mr-4 p-3 rounded-full bg-[#F97316]/20">
              <Globe className="w-6 h-6 text-[#F97316]" />
            </div>
            <div className="text-left">
              <h4 className="font-bold mb-1">Remote Access</h4>
              <p className="text-sm text-gray-400">Access your services from anywhere in the world</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div style={{ y: quickAccessY }}>
        <QuickAccess />
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default Index;

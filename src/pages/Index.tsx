
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import ServicesGrid from '@/components/ServicesGrid';
import QuickAccess from '@/components/QuickAccess';
import { useAnimationControls } from '@/hooks/use-animation-controls';

const Index = () => {
  const controls = useAnimationControls();

  return (
    <motion.div 
      className="min-h-screen flex flex-col px-4 sm:px-6 py-8 max-w-6xl mx-auto relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundElements />
      
      <Header />
      
      <ServicesGrid controls={controls} />
      
      <QuickAccess />

      <Footer />
    </motion.div>
  );
};

export default Index;

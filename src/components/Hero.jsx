import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Header from './Header';

const Hero = () => {
  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-primary-dark">
      <Header />
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="object-cover w-full h-full scale-105"
        >
          <source src="/v1.mp4" type="video/mp4" />
          {/* Fallback image if video fails/loads */}
          <div className="w-full h-full bg-primary-dark"></div>
        </video>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-primary-dark/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-linear-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-primary-dark/80 via-primary-dark/30 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6 md:px-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl flex flex-col items-center"
        >
          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Global Trade, <br className="hidden md:block"/>
            Without the <span className="text-accent italic">Guesswork.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-primary-light max-w-2xl font-body leading-relaxed mb-10"
          >
            Eliminate supply chain risks. We guarantee transparent, on-time delivery of certified agricultural commodities—every single time.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-4 rounded-full font-bold font-body flex items-center gap-2 group hover:bg-opacity-90 shadow-lg"
            >
              View Product Catalog
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold font-body hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Get Wholesale Pricing
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default Hero;

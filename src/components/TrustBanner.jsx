import React from 'react';
import { motion } from 'framer-motion';

const TrustBanner = () => {
  const stats = [
    { value: '200+', label: 'Countries Exported To' },
    { value: '20+', label: 'Premium Products' },
    { value: '14+', label: 'Years Experience' },
    { value: '100%', label: 'Quality Assurance' },
    { value: 'ISO', label: '9001:2015 Certified' },
    { value: '100%', label: 'Traceable Sourcing' }
  ];

  // Duplicate stats to create a seamless infinite loop
  const marqueeStats = [...stats, ...stats, ...stats];

  return (
    <div className="w-full bg-primary-dark overflow-hidden py-10 border-t border-b border-white/10 relative z-20">
      {/* Left/Right fading gradients for a premium ticker effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-primary-dark to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-primary-dark to-transparent z-10"></div>

      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Slow speed
        }}
        className="flex whitespace-nowrap w-max items-center"
      >
        {marqueeStats.map((stat, index) => (
          <div key={index} className="flex items-center px-12 md:px-24">
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mr-4">
              {stat.value}
            </h3>
            <p className="text-xs md:text-sm font-body text-primary-light uppercase tracking-widest font-semibold mt-1">
              {stat.label}
            </p>
            {/* Separator dot */}
            <div className="w-2 h-2 rounded-full bg-accent ml-12 md:ml-24 opacity-50"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustBanner;

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Settings, Target } from 'lucide-react';

const AboutUs = () => {
  const steps = [
    {
      icon: <Search size={32} strokeWidth={1} />,
      title: "HISTORY",
      description: "Established in 2010. Over the course of more than 14 years, we have earned a reputation for delivering high-quality products with unwavering honesty."
    },
    {
      icon: <Lightbulb size={32} strokeWidth={1} />,
      title: "IDEA & MISSION",
      description: "To provide our customers with a wide range of excellent products. We want to be the top choice for people who want to send things out of India."
    },
    {
      icon: <Settings size={32} strokeWidth={1} />,
      title: "OUR VISION",
      description: "To be a global leader in exporting different products. We want to go beyond what's expected and make our customers happy all over the world."
    },
    {
      icon: <Target size={32} strokeWidth={1} />,
      title: "OUR GOAL",
      description: "Your trusted exporter from India. We want to give you the best products with care and honesty. Choose Sahaj Exports for all your exporting needs."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F9F9F9] flex flex-col items-center justify-center min-h-screen overflow-hidden" id="about-us">
      
      {/* Title Area */}
      <div className="text-center mb-16 md:mb-24 px-6 relative z-0">
        <span className="text-accent font-heading font-black text-sm tracking-widest uppercase mb-4 block">
          (ABOUT US)
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-primary-dark max-w-4xl mx-auto leading-tight">
          Exporters from India who care about your success. Trusted for <span className="text-accent font-bold">more than 14 years.</span>
        </h2>
      </div>

      {/* Cards Container */}
      <div className="max-w-[1400px] w-full px-6 flex flex-col lg:flex-row items-stretch justify-center relative">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
            className="relative flex-1 bg-white flex flex-col items-center text-center px-8 py-16 md:px-10 lg:px-6 xl:px-10"
            style={{ 
              zIndex: idx,
              boxShadow: idx === 0 
                ? '0 10px 40px -10px rgba(0,0,0,0.05)' // Base shadow for the first item
                : '-40px 0 50px -20px rgba(0,0,0,0.15)' // Stronger, taller vertical left shadow
            }}
          >
            
            {/* Desktop Chevron (points right, sits on the left edge) */}
            {idx > 0 && (
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-accent z-10 hidden lg:block drop-shadow-md">
                <svg width="36" height="60" viewBox="0 0 36 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L21 30 L0 60 H15 L36 30 L15 0 Z" fill="currentColor"/>
                </svg>
              </div>
            )}
            
            {/* Mobile Chevron (points down, sits on the top edge) */}
            {idx > 0 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent z-10 lg:hidden drop-shadow-md">
                <svg width="60" height="36" viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0 L30 21 L60 0 V15 L30 36 L0 15 Z" fill="currentColor"/>
                </svg>
              </div>
            )}

            {/* Icon */}
            <div className="mb-6 text-primary-dark">
              {step.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-lg xl:text-xl font-heading font-black text-primary-dark tracking-wide uppercase mb-4">
              {step.title}
            </h3>
            
            {/* Description */}
            <p className="text-xs xl:text-sm font-body text-primary-dark/60 leading-relaxed max-w-[260px]">
              {step.description}
            </p>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default AboutUs;

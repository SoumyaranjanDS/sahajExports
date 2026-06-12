import React from 'react';
import { motion } from 'framer-motion';

const WhySahaj = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#F9FAFB] to-[#F0FDF4] py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden" id="why-sahaj">
      
      {/* Premium Gradient Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#EAB308]/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Text Content (No boxes) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-[2px] bg-accent"></div>
            <span className="text-accent font-heading font-black tracking-widest uppercase text-sm">
              Sahaj Exports
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-dark leading-tight mb-8">
            Why <span className="font-light italic text-accent">Sahaj?</span>
          </h2>
          
          <div className="space-y-6 text-primary-dark/80 font-body text-lg leading-relaxed">
            <p>
              Sahaj Exports from India is not only about making great products but also about making the process easy for our clients. If our clients need a specific product to be exported from India, we’re here to make it happen.
            </p>
            <p>
              We <strong className="text-primary-dark font-bold">tailor our services</strong> to match your desired product requirements and ensure a seamless export experience. Our flexibility and dedication to meeting our clients’ needs underscore our commitment to being a reliable partner in your business journey. Whether it’s a unique request or a specific product requirement, we’re ready to cater to your needs and export it securely.
            </p>
            
            {/* New Farmer Context */}
            <div className="pt-6 mt-6 border-t border-gray-200">
              <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">
                Empowering Authentic Farmers
              </h3>
              <p>
                At Sahaj, we take immense pride in sourcing our products directly from authentic and hardworking farmers. We prioritize their value and effort, ensuring fair practices and building a foundation of trust that translates directly into the premium quality of every export we deliver.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Farmer Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Decorative vibrant gradient backdrop for the image */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-gradient-to-br from-accent to-[#EAB308] opacity-20 blur-xl -z-10"></div>
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-accent/20 -z-10"></div>
          
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] group">
            <img 
              src="/image.png" 
              alt="Authentic Indian Farmer in a Field" 
              className="w-full h-auto object-cover max-h-[600px] group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Rich multi-stop gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-[#1A1A1A]/10 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay pointer-events-none"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhySahaj;

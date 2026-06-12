import React from 'react';
import { motion } from 'framer-motion';

const WhySahaj = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#F9FAFB] to-[#F0FDF4] py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden" id="why-sahaj">
      
      {/* Premium Gradient Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#EAB308]/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section 1: General 'Why Sahaj' Information */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24 md:mb-32"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-accent"></div>
            <span className="text-accent font-heading font-black tracking-widest uppercase text-sm">
              Sahaj Exports
            </span>
            <div className="w-12 h-[2px] bg-accent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-dark leading-tight mb-8">
            Why <span className="font-light italic text-accent">Sahaj?</span>
          </h2>
          
          <div className="space-y-6 text-primary-dark/80 font-body text-lg md:text-xl leading-relaxed">
            <p>
              Sahaj Exports from India is not only about making great products but also about making the process easy for our clients. If our clients need a specific product to be exported from India, we’re here to make it happen.
            </p>
            <p>
              We <strong className="text-primary-dark font-bold">tailor our services</strong> to match your desired product requirements and ensure a seamless export experience. Our flexibility and dedication to meeting our clients’ needs underscore our commitment to being a reliable partner in your business journey. Whether it’s a unique request or a specific product requirement, we’re ready to cater to your needs and export it securely.
            </p>
          </div>
        </motion.div>

        {/* Section 2: Farmer Information */}
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Farmer Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-dark mb-6 leading-tight">
              Empowering Authentic <span className="text-accent italic font-light">Farmers</span>
            </h3>
            <p className="text-primary-dark/80 font-body text-lg leading-relaxed mb-8">
              At Sahaj, we take immense pride in sourcing our products directly from authentic and hardworking farmers. We prioritize their value and effort, ensuring fair practices and building a foundation of trust that translates directly into the premium quality of every export we deliver.
            </p>
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                 <span className="text-accent font-bold text-xl">100%</span>
               </div>
               <p className="font-heading font-bold text-primary-dark tracking-wide uppercase">Authentic <br/> Sourcing</p>
            </div>
          </motion.div>

          {/* Right Side: Farmer Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative p-4 md:p-8"
          >
            {/* Scratch / Sketch style overlapping borders */}
            <div className="absolute inset-0 border-4 border-accent opacity-30 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] -rotate-3 transition-transform hover:rotate-0 duration-700 pointer-events-none"></div>
            <div className="absolute inset-0 border-4 border-[#EAB308] opacity-30 rounded-[15px_255px_15px_225px/255px_15px_225px_15px] rotate-2 transition-transform hover:-rotate-1 duration-700 pointer-events-none"></div>
            
            {/* The image with a scratchy/organic mask */}
            <div className="relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] group rounded-[255px_15px_225px_15px/15px_225px_15px_255px] border-2 border-transparent">
              <img 
                src="/image.png" 
                alt="Authentic Indian Farmer in a Field" 
                className="w-full h-auto object-cover max-h-[600px] group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Rich multi-stop gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay pointer-events-none"></div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhySahaj;

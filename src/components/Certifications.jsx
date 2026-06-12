import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const logos = [
    {
      name: 'FSSAI',
      url: 'https://upload.wikimedia.org/wikipedia/en/e/e2/FSSAI_logo.png'
    },
    {
      name: 'APEDA',
      url: 'https://play-lh.googleusercontent.com/n21Wp6iyu0hBjyF8BzCe6MXeUFoMg2NMDr2JHy08xF0S44IYMq5-TyFuiHPgeo6p6IXH=w600-h300-pc0xffffff-pd'
    },
    {
      name: 'Spices Board of India',
      url: 'https://upload.wikimedia.org/wikipedia/en/d/df/Spices_Board_of_India_Logo.png'
    },
    {
      name: 'ISO 9001:2015',
      url: 'https://png.pngtree.com/png-vector/20250130/ourmid/pngtree-iso-9001-certified-vector-png-image_15374165.png'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-bg-main" id="certifications">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
            Government & Global Accreditations
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-dark leading-[1.1] mb-16">
            Certified for <span className="italic font-light">Excellence.</span>
          </h2>
        </motion.div>

        {/* Clean Logo Grid (No Boxes) */}
        <div className="flex flex-wrap justify-center items-end gap-16 md:gap-32 w-full">
          {logos.map((logo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-end gap-6 cursor-pointer"
            >
              <div className="w-32 md:w-40 h-24 md:h-32 flex items-center justify-center">
                <img 
                  src={logo.url} 
                  alt={`${logo.name} Certification`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-primary-dark font-heading font-bold text-sm md:text-base tracking-wide text-center">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;

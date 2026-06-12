import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Layers, Sparkles, Shirt } from 'lucide-react';

const KnittedFabrics = () => {
  // Hardcoded Product Data for Knitted Fabrics
  const product = {
    id: "knitted-fabrics",
    name: "Knitted Fabrics",
    description: "Knitted fabric is a textile that results from knitting, the process of inter-looping of yarns or inter-meshing of loops. Its properties are distinct from woven fabric in that it is more flexible and can be more readily constructed into smaller pieces. Sahaj Exporter offers a premium range of knitted fabrics, perfect for various applications in the textile and fashion industries. Our fabrics are crafted from the finest materials, ensuring comfort, durability, and style.",
    specifications: {
      "Material": "100% Cotton",
      "Sizes": "160 GSM to 220 GSM, Standard width of 58-60 inches",
      "Designs": "Solid colors, prints, stripes, and custom patterns",
      "Colors": "A broad spectrum from classic neutrals to vibrant hues",
      "Packaging": "Individually packed, options for custom branding and bulk packaging",
      "Certifications": "ISO Certified, OEKO-TEX® Standard 100, Fair Trade"
    },
    features: [
      {
        title: "Quality Fabric",
        description: "Soft, breathable, and durable materials designed for all-day comfort."
      },
      {
        title: "Customization",
        description: "Custom colors, patterns, and compositions available upon request."
      }
    ],
    applications: [
      {
        title: "Retail Fashion",
        description: "Ideal for producing t-shirts, dresses, leggings, and more."
      }
    ],
    exportCapabilities: {
      "Minimum Order Quantity": "Flexible, accommodating both small boutiques and large retailers",
      "Shipping": "Worldwide shipping with reliable logistic partners",
      "Custom Orders": "Tailored solutions in design, size, and packaging to meet specific client needs"
    },
    coreValues: [
      {
        title: "Superior Quality",
        description: "Crafted with attention to detail for optimum comfort and durability."
      },
      {
        title: "Trendy Designs",
        description: "Constantly updated collections keeping in line with global fashion trends."
      },
      {
        title: "Customer-Centric Approach",
        description: "Dedicated to meeting and exceeding customer expectations."
      }
    ]
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-32 min-h-screen bg-noise">
      
      {/* Full-width Header Section */}
      <div className="relative w-full h-[85vh] min-h-[600px] mb-24 flex items-center">
        {/* Background Image positioned on the right */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-right"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dvdd218yw/image/upload/f_auto,q_auto,w_1920/v1781262433/sahaj/products/textiles/Knitted_Fabrics.png')` // Knitted texture imagery
          }}
        ></div>
        
        {/* gradient Mask fading from background-color on left to transparent on right */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#F7F5EE] via-[#F7F5EE]/95 md:via-[#F7F5EE]/80 to-transparent"></div>
        {/* Top/Bottom gradient fades to blend seamlessly with the rest of the page */}
        <div className="absolute inset-x-0 bottom-0 h-40 z-10 bg-gradient-to-t from-[#F7F5EE] to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-32 z-10 bg-gradient-to-b from-[#F7F5EE] to-transparent"></div>

        {/* Content Container aligned with the rest of the page grid */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pt-24 h-full flex flex-col justify-center">
          
          {/* Back Navigation */}
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-dark/60 hover:text-accent mb-10 transition-colors font-body text-sm uppercase tracking-wider w-max"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-3/4 lg:w-1/2"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-black text-primary-dark mb-6 leading-[1.1]">
              {product.name}
            </h1>
            <p className="text-xl text-primary-dark/80 font-body leading-relaxed mb-10 max-w-lg">
              {product.description}
            </p>
            <a href="https://wa.me/918618776540" target="_blank" rel="noreferrer" className="w-max inline-block">
              <button className="px-8 py-4 rounded-full font-bold text-lg font-body transition-all shadow-xl shadow-accent/20 bg-accent text-white hover:bg-opacity-90 hover:scale-105 active:scale-95 flex items-center gap-2 group w-max">
                Request a Quote
                <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Features Section */}
        {product.features && product.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block font-body">
                Premium Fabric
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-primary-dark">
                Key Features
              </h2>
            </div>
            
            {/* Dynamic Grid: If only 2 features, use 2 cols instead of 3 */}
            <div className={`grid grid-cols-1 md:grid-cols-${product.features.length} gap-8 max-w-3xl mx-auto`}>
              {product.features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-lg shadow-black/5 border border-black/5 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-primary-dark/70 font-body text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Applications Section */}
        {product.applications && product.applications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-32 max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-primary-dark">
                Applications
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-lg mx-auto">
              {product.applications.map((app, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-primary-dark text-white p-8 rounded-3xl shadow-lg shadow-black/5 border border-black/5 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-accent">
                    <Shirt size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3 leading-snug">
                    {app.title}
                  </h3>
                  <p className="text-white/70 font-body text-sm leading-relaxed">
                    {app.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Specifications - Infographic Chart Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24 flex flex-col lg:flex-row gap-16 pt-12 border-t border-primary-dark/10"
        >
          {/* Left: Big Heading */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-primary-dark leading-[1.1] tracking-tight">
              Quality & <br /> Specifications
            </h2>
          </div>

          {/* Right: Bar Chart Layout */}
          <div className="lg:w-2/3 flex flex-col justify-center gap-6 md:gap-8 overflow-hidden">
            {Object.entries(product.specifications).map(([key, value], idx, arr) => {
              const maxBar = 65; 
              const minBar = 25; 
              const barWidth = Math.max(minBar, maxBar - (idx * ((maxBar - minBar) / arr.length)));

              return (
                <motion.div 
                  key={key}
                  whileHover={{ scale: 1.01, originX: 0 }}
                  className="flex items-center w-full min-h-[50px]"
                >
                  {/* Key (Left Text) */}
                  <div className="w-1/3 md:w-1/4 shrink-0 flex items-center pr-2">
                    <span className="text-primary-dark font-heading font-bold text-sm md:text-base leading-tight break-words">
                      {key}
                    </span>
                    <div className="h-[1px] bg-primary-dark/20 flex-grow ml-4 hidden md:block"></div>
                  </div>

                  {/* Wrapper for Bar and Value Text */}
                  <div className="flex-1 flex items-center pl-2 md:pl-0">
                    {/* gradient Bar */}
                    <div 
                      className="h-8 md:h-10 shrink-0 relative flex items-center overflow-hidden"
                      style={{ 
                        width: `${barWidth}%`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/0 opacity-90 rounded-r-sm"></div>
                    </div>
                    
                    {/* Value (Right Text placed immediately after the bar) */}
                    <div className="flex-1 pl-4 min-w-[150px]">
                      <p className="text-primary-dark/90 font-body text-sm md:text-sm leading-snug">
                        {value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Export Capabilities - 3D Bubble Chart Design */}
        {product.exportCapabilities && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-32 pt-24 border-t border-primary-dark/10"
          >
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Left Side: Large Heading */}
              <div className="w-full lg:w-1/3 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-primary-dark leading-[1.1] tracking-tight">
                  Addressing <br/> global logistics <br/> for export
                </h2>
              </div>

              {/* Right Side: 3D Bubble Chart */}
              <div className="w-full lg:w-2/3 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start gap-12 md:gap-6 pb-8 pt-8">
                {Object.entries(product.exportCapabilities).map(([key, value], idx) => {
                  const sizes = ['w-32 h-32 md:w-48 md:h-48', 'w-24 h-24 md:w-40 md:h-40', 'w-20 h-20 md:w-32 md:h-32'];
                  const sizeClass = sizes[idx % sizes.length];

                  return (
                    <motion.div 
                      key={key}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + (idx * 0.15) }}
                      className="flex flex-col relative shrink-0 w-full md:w-auto"
                    >
                      {/* DESKTOP LAYOUT */}
                      <div className="hidden md:flex flex-col relative">
                        {/* Top Text Content */}
                        <div className="border-l border-primary-dark/30 pl-3 pb-4 ml-[50%] h-32 flex flex-col justify-end w-32 md:w-40">
                          <h3 className="text-xl md:text-2xl font-heading font-black text-primary-dark mb-1 leading-none">
                            {key}
                          </h3>
                          <p className="text-primary-dark/70 font-body text-[10px] md:text-xs leading-tight pr-2">
                            {value}
                          </p>
                        </div>

                        {/* 3D Sphere */}
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          className={`${sizeClass} rounded-full shadow-2xl shadow-accent/40`}
                          style={{
                            backgroundColor: '#2A9D8F',
                            backgroundImage: 'radial-gradient(circle at 30% 30%, #5eead4 0%, #2A9D8F 45%, #115e59 100%)',
                            WebkitBackgroundImage: '-webkit-radial-gradient(30% 30%, circle, #5eead4 0%, #2A9D8F 45%, #115e59 100%)'
                          }}
                        ></motion.div>
                      </div>

                      {/* MOBILE LAYOUT */}
                      <div className="flex md:hidden flex-row items-center w-full">
                        {/* 3D Sphere */}
                        <motion.div 
                          className={`${sizeClass} rounded-full shadow-2xl shadow-accent/40 shrink-0 z-10`}
                          style={{
                            backgroundColor: '#2A9D8F',
                            backgroundImage: 'radial-gradient(circle at 30% 30%, #5eead4 0%, #2A9D8F 45%, #115e59 100%)',
                            WebkitBackgroundImage: '-webkit-radial-gradient(30% 30%, circle, #5eead4 0%, #2A9D8F 45%, #115e59 100%)'
                          }}
                        ></motion.div>
                        
                        {/* Horizontal Line & Text Container */}
                        <div className="flex-1 flex flex-col justify-center -ml-4 z-0">
                          <div className="pl-8 border-b border-primary-dark/30 pb-2">
                            <h3 className="text-lg sm:text-xl font-heading font-black text-primary-dark leading-none">{key}</h3>
                          </div>
                          <div className="pl-8 pt-2 pr-2">
                            <p className="text-primary-dark/70 font-body text-xs sm:text-sm leading-tight">{value}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </motion.div>
        )}

        {/* Core Values Section - Circle Infographic Design */}
        {product.coreValues && product.coreValues.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-32 pt-24 border-t border-primary-dark/10"
          >
            {/* MOBILE HEADING (Sits at the very top on small screens) */}
            <div className="block lg:hidden mb-12 text-center">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block font-body">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-primary-dark leading-[1.1]">
                Core <span className="text-accent">Values</span>
              </h2>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
              
              {/* Left Side: List Content (Appears below on mobile) */}
              <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mt-16 lg:mt-0">
                
                {/* DESKTOP HEADING (Sits on the left side on large screens) */}
                <div className="hidden lg:block mb-12">
                  <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block font-body">
                    Why Choose Us
                  </span>
                  <h2 className="text-5xl font-heading font-black text-primary-dark leading-[1.1]">
                   Core <br/><span className="text-accent">Values</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-10">
                  {product.coreValues.map((val, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex gap-6 group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                        0{idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-heading font-black mb-2 text-primary-dark transition-colors">
                          {val.title}
                        </h3>
                        <p className="text-primary-dark/70 font-body text-sm leading-relaxed max-w-md">
                          {val.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side: Circle Infographic */}
              <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex items-center justify-center">
                  
                  {/* Dashed Ring */}
                  <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-accent/40 animate-[spin_60s_linear_infinite]"></div>

                  {/* Center White Circle */}
                  <div className="relative z-10 w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full bg-white shadow-2xl shadow-accent/10 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-lg md:text-2xl font-heading font-black text-primary-dark mb-2">
                      Our Promise
                    </h3>
                    <p className="text-[10px] md:text-xs text-primary-dark/60 font-body leading-relaxed px-4">
                      Committed to excellence, sustainability, and superior quality in everything we export.
                    </p>
                  </div>

                  {/* Satellite Circles */}
                  {product.coreValues.map((val, idx) => {
                    // Positioning at 12 o'clock, 4 o'clock, and 8 o'clock
                    const positions = [
                      "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", 
                      "top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2", 
                      "top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2"  
                    ];
                    return (
                      <motion.div 
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className={`absolute ${positions[idx % 3]} z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent text-white flex flex-col items-center justify-center p-2 text-center shadow-xl shadow-accent/30 border-4 border-[#F7F5EE]`}
                      >
                        <span className="text-xs md:text-sm font-bold opacity-80 mb-1">0{idx + 1}</span>
                        <span className="text-xs md:text-sm font-heading font-black leading-tight line-clamp-2">
                          {val.title}
                        </span>
                      </motion.div>
                    );
                  })}
                  
                </div>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default KnittedFabrics;

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { catalog } from '../data/catalog';

gsap.registerPlugin(ScrollTrigger);

const ProductGrid = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    { id: 'mango', name: 'Farm Fresh Mango', desc: 'Premium hand-picked mangoes', image: 'https://res.cloudinary.com/dvdd218yw/image/upload/f_auto,q_auto,w_800/v1781262400/sahaj/products/agro/Farm_Fresh_Mango.png' },
    { id: 'fish-meal', name: 'Fish Meal', desc: 'High-quality aquatic nutrition', image: 'https://res.cloudinary.com/dvdd218yw/image/upload/f_auto,q_auto,w_800/v1781262418/sahaj/products/fish/fish_meal.png' },
    { id: 'cumin', name: 'Premium Cumin', desc: 'Aromatic whole spices', image: 'https://res.cloudinary.com/dvdd218yw/image/upload/f_auto,q_auto,w_800/v1781262423/sahaj/products/spices/Cumin.png' },
    { id: 'onion-oil', name: 'Onion Oil', desc: '100% pure extracted oil', image: 'https://res.cloudinary.com/dvdd218yw/image/upload/f_auto,q_auto,w_800/v1781262419/sahaj/products/oil/Onion_Oil.png' },
    { id: 'knitted-garments', name: 'Knitted Garments', desc: 'Export quality textiles', image: 'https://res.cloudinary.com/dvdd218yw/image/upload/f_auto,q_auto,w_800/v1781262435/sahaj/products/textiles/Knitted_Garments.png' },
    { id: 'ghee', name: 'Pure Ghee', desc: 'Traditional bilona ghee', image: 'https://res.cloudinary.com/dvdd218yw/image/upload/f_auto,q_auto,w_800/v1781262402/sahaj/products/agro/ghee.png' },
    { id: 'peanuts', name: 'Raw Peanuts', desc: 'High-grade groundnuts', image: 'https://res.cloudinary.com/dvdd218yw/image/upload/f_auto,q_auto,w_800/v1781262411/sahaj/products/agro/penaut.png' },
    { id: 'red-chilli-powder', name: 'Red Chilli Powder', desc: 'Authentic Indian spice', image: 'https://res.cloudinary.com/dvdd218yw/image/upload/f_auto,q_auto,w_800/v1781262428/sahaj/products/spices/Red_Chilli_Powder.png' }
  ];

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Only apply horizontal scroll on desktop
    mm.add("(min-width: 1024px)", () => {
      const container = scrollContainerRef.current;
      const totalWidth = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom bottom",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <section 
        ref={sectionRef} 
        className="relative w-full bg-white overflow-hidden" 
        id="products"
      >
        <div className="pt-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto flex justify-between items-end mb-12">
          <div className="max-w-xl">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Offerings
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-dark leading-[1.1]">
              Global <br className="hidden lg:block"/> Ingredients.
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-text-secondary font-body font-medium uppercase tracking-widest">
            Scroll to explore <ArrowRight size={20} className="text-accent" />
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex lg:w-max px-6 md:px-16 lg:px-24 pb-24 gap-8 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {products.map((product, index) => (
            <Link 
              to={`/product/${product.id}`}
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative shrink-0 w-[85vw] md:w-[60vw] lg:w-[30vw] h-[60vh] lg:h-[65vh] rounded-3xl overflow-hidden cursor-pointer shadow-xl snap-center block"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/95 via-primary-dark/30 to-transparent transition-opacity duration-500"></div>

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-end justify-between border-b border-white/20 pb-6 mb-6">
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                    {product.name}
                  </h3>
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shrink-0 ml-4">
                    <ArrowRight size={24} className="-rotate-45" />
                  </div>
                </div>
                <p className="text-primary-light font-body text-lg">
                  {product.desc}
                </p>
              </div>
            </Link>
          ))}
          
          {/* End Card (View All) */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="shrink-0 w-[85vw] md:w-[60vw] lg:w-[30vw] h-[60vh] lg:h-[65vh] rounded-3xl flex items-center justify-center bg-primary-light border-2 border-dashed border-primary-dark/20 cursor-pointer hover:bg-accent/10 transition-colors duration-300 snap-center group"
          >
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary-dark text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ArrowRight size={32} />
              </div>
              <h3 className="text-3xl font-heading font-bold text-primary-dark">View Full Catalog</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-primary-dark/10 shrink-0">
                <div>
                  <h3 className="text-3xl font-heading font-black text-primary-dark mb-2">Full Catalog</h3>
                  <p className="text-primary-dark/60 font-body">Explore our entire range of global exports</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-primary-light hover:bg-accent hover:text-white flex items-center justify-center transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body - No Scrolling Needed if it fits */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-10 items-start">
                  {catalog.map((categoryGroup, idx) => (
                    <div key={idx} className="flex flex-col">
                      <h4 className="text-lg font-heading font-bold text-accent mb-4 border-b border-accent/20 pb-2">
                        {categoryGroup.category}
                      </h4>
                      <div className="flex flex-col gap-1.5">
                        {categoryGroup.products.map(p => (
                          <Link 
                            key={p.id} 
                            to={`/product/${p.id}`}
                            className="text-primary-dark/80 hover:text-accent font-body text-sm transition-colors py-1 flex items-center group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mr-2 group-hover:bg-accent transition-colors shrink-0"></span>
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductGrid;

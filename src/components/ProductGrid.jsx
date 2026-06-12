import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProductGrid = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const cardsRef = useRef([]);

  const products = [
    { name: 'Premium Spices', desc: 'Cumin, Red Chilli Powder, Whole Spices', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800' },
    { name: 'Nutrient Grains', desc: 'Millets, Kabuli Chana, Lentils', image: 'https://plus.unsplash.com/premium_photo-1726750862897-4b75116bca34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TnV0cmllbnQlMjBHcmFpbnN8ZW58MHx8MHx8fDA%3D' },
    { name: 'Edible Oils', desc: 'Onion Oil, Premium Ghee, Extracts', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWRpYmxlJTIwT2lsc3xlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Groundnuts', desc: 'Raw Peanuts, Roasted, Blanched', image: 'https://images.unsplash.com/photo-1658572194016-f4095364b390?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JvdW5kbnV0c3xlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Guar Meal', desc: 'High-Protein Animal Feed', image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/383818048/NG/AV/BA/9593146/guar-meal-korma-500x500.png' },
    { name: 'Oleoresins', desc: 'Pepper & Spice Extracts', image: 'https://framerusercontent.com/images/Yl2SCP2XImdR7gTT5fYRRX2oo7Y.jpeg' }
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

  return (
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
          <div 
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="group relative shrink-0 w-[85vw] md:w-[60vw] lg:w-[30vw] h-[60vh] lg:h-[65vh] rounded-3xl overflow-hidden cursor-pointer shadow-xl snap-center"
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
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight size={24} className="-rotate-45" />
                </div>
              </div>
              <p className="text-primary-light font-body text-lg">
                {product.desc}
              </p>
            </div>
          </div>
        ))}
        
        {/* End Card (View All) */}
        <div className="shrink-0 w-[85vw] md:w-[60vw] lg:w-[30vw] h-[60vh] lg:h-[65vh] rounded-3xl flex items-center justify-center bg-primary-light border-2 border-dashed border-primary-dark/20 cursor-pointer hover:bg-accent/10 transition-colors duration-300 snap-center group">
          <div className="text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-primary-dark text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ArrowRight size={32} />
            </div>
            <h3 className="text-3xl font-heading font-bold text-primary-dark">View Full Catalog</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

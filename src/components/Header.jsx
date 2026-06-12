import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, LayoutGrid } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { catalog } from '../data/catalog';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState(catalog[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isSolid = isScrolled || !isHome || isMobileMenuOpen;
  
  // Clean, modern glassmorphism navbar when solid
  const headerStyle = isSolid
    ? 'bg-white/40 backdrop-blur-lg shadow-sm border-b border-white/40' 
    : 'bg-transparent';

  // Dynamic text colors based on background
  const textColor = isSolid ? 'text-primary-dark' : 'text-white/90';
  const hoverTextColor = isSolid ? 'hover:text-accent' : 'hover:text-white';

  const navLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerStyle}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-16 py-2">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center group z-50">
            <img 
              src="/Sahaj-Exports-Final-Logo.webp" 
              alt="Sahaj Exports" 
              className="h-8 md:h-10 w-auto transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 relative">
            
            <Link 
              to="/"
              className={`${textColor} ${hoverTextColor} text-sm font-bold transition-colors font-body relative group`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Products Dropdown (Mega Menu) */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <button className={`flex items-center gap-1 ${textColor} ${hoverTextColor} text-sm font-bold transition-colors font-body py-2 group`}>
                Products 
                <motion.div animate={{ rotate: isProductsHovered ? 180 : 0 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isProductsHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-3xl shadow-2xl border border-black/5 overflow-hidden flex origin-top"
                  >
                    <div className="w-1/3 bg-gray-50/80 backdrop-blur-sm p-4 border-r border-black/5">
                      <div className="flex items-center gap-2 mb-4 px-3 text-primary-dark/50 font-heading font-bold text-xs uppercase tracking-wider">
                        <LayoutGrid size={14} /> Categories
                      </div>
                      <div className="flex flex-col gap-1">
                        {catalog.map((cat, idx) => (
                          <button
                            key={idx}
                            onMouseEnter={() => setActiveCategory(cat)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                              activeCategory.category === cat.category 
                                ? 'bg-white shadow-sm text-accent' 
                                : 'text-primary-dark hover:bg-black/5'
                            }`}
                          >
                            {cat.category}
                            {activeCategory.category === cat.category && (
                              <motion.div layoutId="active-indicator">
                                <ChevronRight size={16} />
                              </motion.div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="w-2/3 p-6 bg-white">
                      <h3 className="text-primary-dark font-heading font-bold text-lg mb-4 flex items-center gap-2 border-b border-black/5 pb-2">
                        {activeCategory.category} Products
                      </h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {activeCategory.products.map(product => (
                          <Link 
                            key={product.id} 
                            to={`/product/${product.id}`}
                            onClick={() => setIsProductsHovered(false)}
                            className="group/link flex items-center px-3 py-2.5 rounded-lg hover:bg-accent/5 transition-all"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mr-3 group-hover/link:bg-accent transition-colors"></div>
                            <span className="text-sm text-primary-dark/70 group-hover/link:text-accent font-medium">
                              {product.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`${textColor} ${hoverTextColor} text-sm font-bold transition-colors font-body relative group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="https://wa.me/918618776540" target="_blank" rel="noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full text-sm font-bold font-body transition-all shadow-md bg-accent text-white hover:bg-opacity-90"
              >
                Get a Quote
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={`md:hidden ${isSolid ? 'text-primary-dark' : 'text-white'} hover:text-accent transition-colors z-50`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </motion.header>

      {/* Full Screen Mobile Menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 overflow-y-auto pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <Link to="/" className="text-2xl font-heading font-bold text-primary-dark hover:text-accent">Home</Link>
              
              {/* Mobile Products Accordion */}
              <div className="border-y border-gray-100 py-4">
                <span className="text-sm font-bold text-accent uppercase tracking-wider mb-4 block font-body">Our Products</span>
                <div className="flex flex-col gap-4 pl-2">
                  {catalog.map((cat, idx) => (
                    <div key={idx}>
                      <button 
                        onClick={() => setExpandedMobileCategory(expandedMobileCategory === cat.category ? null : cat.category)}
                        className="flex items-center justify-between w-full text-xl font-heading font-bold text-primary-dark hover:text-accent transition-colors"
                      >
                        {cat.category}
                        <ChevronDown size={20} className={`transition-transform duration-300 ${expandedMobileCategory === cat.category ? 'rotate-180 text-accent' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {expandedMobileCategory === cat.category && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-3 pt-4 pl-4 pb-2">
                              {cat.products.map(product => (
                                <Link 
                                  key={product.id}
                                  to={`/product/${product.id}`}
                                  className="text-gray-500 hover:text-accent text-lg font-body transition-colors"
                                >
                                  {product.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-2xl font-heading font-bold text-primary-dark hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}

              <a href="https://wa.me/918618776540" target="_blank" rel="noreferrer" className="mt-8">
                <button className="w-full py-4 rounded-xl text-lg font-bold font-body transition-all shadow-md bg-accent text-white hover:bg-opacity-90">
                  Get a Quote
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

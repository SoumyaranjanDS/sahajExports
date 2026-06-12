import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const ContactFooter = () => {
  return (
    <footer className="bg-primary-dark relative pt-20 pb-6 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-white/10" id="contact">
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg font-heading">SE</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-2xl leading-none tracking-wide">
                  SAHAJ
                </span>
                <span className="text-accent font-heading font-semibold text-sm tracking-[0.2em] leading-none mt-1">
                  EXPORTS
                </span>
              </div>
            </div>
            
            <p className="text-white/70 font-body leading-relaxed mb-8 max-w-sm">
              At Sahaj Export, we are committed to providing top-notch products that meet the highest industry standards.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col lg:pl-16"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Products', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="flex items-center text-white/70 hover:text-accent transition-colors font-body group">
                    <ChevronRight size={16} className="text-accent mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Get In Touch */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Get In Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/70 font-body">
                <Phone size={20} className="text-accent shrink-0 mt-1" />
                <a href="tel:+918618776540" className="hover:text-accent transition-colors">
                  +91 86187 76540
                </a>
              </li>
              <li className="flex items-start gap-4 text-white/70 font-body">
                <Mail size={20} className="text-accent shrink-0 mt-1" />
                <a href="mailto:info@sahajexports.com" className="hover:text-accent transition-colors">
                  info@sahajexports.com
                </a>
              </li>
              <li className="flex items-start gap-4 text-white/70 font-body">
                <MapPin size={24} className="text-accent shrink-0 mt-1" />
                <span>
                  <strong className="text-white font-medium block mb-1">Sahaj Enterprises</strong>
                  1B-1st Floor, 35/1B, CRM Sowbhagya Annex,<br />
                  Munnekolala, Marathahalli, Bangalore 560037,<br />
                  India
                </span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 font-heading text-xs md:text-sm font-bold tracking-widest uppercase">
            COPYRIGHT {new Date().getFullYear()} © SAHAJ EXPORTS ALL RIGHTS RESERVED
          </p>
        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 group">
        <div className="bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none">
          <span className="text-primary-dark font-body text-sm font-medium whitespace-nowrap">
            Need Help? <strong className="font-bold">Chat with us</strong>
          </span>
        </div>
        <a 
          href="https://wa.me/918618776540" 
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          {/* Simple WhatsApp SVG Icon */}
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>

    </footer>
  );
};

export default ContactFooter;

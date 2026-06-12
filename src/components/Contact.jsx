import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ChevronDown } from 'lucide-react';
import { countries } from '../data/countries';
import { catalog } from '../data/catalog';

const Contact = () => {
  return (
    <section className="bg-white relative py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden" id="contact">
      
      {/* Decorative Background Elements matching the image */}
      <div className="absolute top-20 right-10 md:right-32 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-cyan-100/40 rounded-full blur-[60px] md:blur-[80px] pointer-events-none"></div>
      <div className="absolute top-40 right-20 md:right-40 text-primary-dark/80 pointer-events-none hidden md:block">
        <Plus size={48} strokeWidth={1} />
      </div>

      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-cyan-100/30 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-60 left-32 text-primary-dark/60 pointer-events-none hidden md:block">
        <Plus size={32} strokeWidth={1} />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-[#1A1A1A] leading-[1.1] mb-8">
            Let's Get In Touch <br className="hidden md:block" /> With Us.
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-xl leading-relaxed">
            Getting in touch is easy. Find our contact details below, and reach out anytime. We’re here to answer your questions and provide the support you need.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-5/12 space-y-12"
          >
            <div>
              <h4 className="text-lg font-heading font-bold text-[#1A1A1A] mb-3">Our Address</h4>
              <p className="text-gray-500 font-body leading-relaxed">
                Sahaj Enterprises<br />
                1B-1st Floor, 35/1B, CRM Sowbhagya Annex,<br />
                Munnekolala, Marathahalli,<br />
                Bangalore 560037, India
              </p>
            </div>

            <div>
              <h4 className="text-lg font-heading font-bold text-[#1A1A1A] mb-3">Email Address</h4>
              <a href="mailto:info@sahajexports.com" className="text-accent font-body hover:underline transition-all">
                info@sahajexports.com
              </a>
            </div>

            <div>
              <h4 className="text-lg font-heading font-bold text-[#1A1A1A] mb-3">Telephone</h4>
              <p className="text-gray-500 font-body">
                <a href="tel:+916362127974" className="hover:text-accent transition-colors">+91 6362127974</a>
                <span className="mx-2">/</span>
                <a href="tel:+918618776540" className="hover:text-accent transition-colors">+91 8618776540</a>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-7/12"
          >
            <h3 className="text-2xl font-heading font-bold text-[#1A1A1A] mb-8">Leave a Message For us</h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-accent transition-colors font-body"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-accent transition-colors font-body"
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-accent transition-colors font-body"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-accent transition-colors font-body"
                  />
                </div>
              </div>

              {/* Country & Products Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <select defaultValue="" className="w-full bg-transparent border-b border-gray-300 py-3 pr-10 text-[#1A1A1A] focus:outline-none focus:border-accent transition-colors font-body appearance-none cursor-pointer invalid:text-gray-400" required>
                    <option value="" disabled className="text-gray-400">Country</option>
                    {countries.map(c => <option key={c} value={c} className="text-black">{c}</option>)}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
                <div className="relative group">
                  <select defaultValue="" className="w-full bg-transparent border-b border-gray-300 py-3 pr-10 text-[#1A1A1A] focus:outline-none focus:border-accent transition-colors font-body appearance-none cursor-pointer invalid:text-gray-400" required>
                    <option value="" disabled className="text-gray-400">Desired Product</option>
                    {catalog.map(cat => (
                      <optgroup key={cat.category} label={cat.category} className="text-gray-500 font-bold">
                        {cat.products.map(p => (
                          <option key={p.id} value={p.name} className="text-black font-normal">{p.name}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Quantity Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                <div className="relative group">
                  <input 
                    type="number" 
                    placeholder="Quantity (e.g., 20)" 
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-accent transition-colors font-body"
                  />
                </div>
                <div className="relative group">
                  <span className="text-sm text-gray-400 font-body block mb-1">Unit</span>
                  <div className="flex flex-wrap gap-4 items-center pt-2">
                    {["Kilograms", "Metric tonns", "Liters", "Pcs"].map(u => (
                      <label key={u} className="flex items-center gap-2 cursor-pointer font-body text-sm text-[#1A1A1A] hover:text-accent transition-colors">
                        <input type="radio" name="unit" value={u} className="accent-accent w-4 h-4 cursor-pointer" />
                        {u}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea 
                  rows="1" 
                  placeholder="Message" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-accent transition-colors font-body resize-y min-h-[40px]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto bg-[#1A1A1A] hover:bg-black text-white font-bold font-body py-4 px-12 rounded-sm transition-colors uppercase tracking-widest text-sm"
                >
                  Get In Touch
                </motion.button>
                <p className="text-xs text-gray-400 font-body mt-4 text-center md:text-left">
                  We welcome inquiries and are always ready to discuss your specific needs.
                </p>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

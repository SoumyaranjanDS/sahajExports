import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What types of products does Sahaj Exports offer?",
    answer: "We specialize in a diverse range of premium products including Agricultural commodities (like Wheat, Millets, and Mangoes), authentic Spices (Cumin, Chilli), Essential Oils, and Textiles & Garments. Check our product catalog for a complete list."
  },
  {
    question: "How do you ensure the quality and authenticity of your products?",
    answer: "We take immense pride in sourcing directly from authentic and hardworking farmers. Our 100% authentic sourcing model prioritizes fair practices and ensures strict quality control before any product is packed and exported."
  },
  {
    question: "Can you fulfill custom or unique product requests?",
    answer: "Absolutely. We tailor our services to match your exact product requirements. If you need a specific product exported from India that isn't in our standard catalog, our extensive network allows us to source it for you securely."
  },
  {
    question: "Do you export globally?",
    answer: "Yes! With over 14 years of trusted experience since our journey began in 2010, we have established a robust international logistics network to ensure a seamless export experience to clients worldwide."
  },
  {
    question: "How can I request a quote or discuss my specific needs?",
    answer: "You can easily reach out to us using the Contact form below. Simply let us know your desired products, quantity, and unit (Kilograms, Metric tons, etc.), and our dedicated team will get back to you promptly to discuss your requirements."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-16 lg:px-24" id="faq">
      <div className="max-w-[1000px] mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="w-8 h-[2px] bg-accent"></div>
            <span className="text-accent font-heading font-black tracking-widest uppercase text-sm">
              Got Questions?
            </span>
            <div className="w-8 h-[2px] bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark">
            Frequently Asked <span className="italic font-light text-accent">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className={`border-b ${isActive ? 'border-accent' : 'border-gray-200'} transition-colors duration-500`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <h3 className={`text-xl font-heading font-bold pr-8 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-primary-dark group-hover:text-accent'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-accent text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-accent/10 group-hover:text-accent'}`}>
                    {isActive ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                {/* Smooth Dropdown Animation */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-gray-600 font-body text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;

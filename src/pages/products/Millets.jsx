import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Millets = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-32 min-h-screen bg-noise flex flex-col items-center justify-center">
      <Link 
        to="/" 
        className="inline-flex items-center text-primary-dark/60 hover:text-accent mb-10 transition-colors font-body text-sm uppercase tracking-wider absolute top-24 left-16"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Home
      </Link>
      <h1 className="text-5xl font-heading font-black text-primary-dark">Millets</h1>
      <p className="mt-4 font-body text-primary-dark/60">Detailed page coming soon.</p>
    </div>
  );
};

export default Millets;

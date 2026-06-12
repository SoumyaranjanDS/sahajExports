import React from 'react';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import ProductGrid from '../components/ProductGrid';
import WhySahaj from '../components/WhySahaj';
import FAQ from '../components/FAQ';
import AboutUs from './AboutUs';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBanner />
      <AboutUs />
      <ProductGrid />
      <WhySahaj />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;

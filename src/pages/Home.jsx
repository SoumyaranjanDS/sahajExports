import React from 'react';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import ProductGrid from '../components/ProductGrid';
import WhySahaj from '../components/WhySahaj';
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
      <Contact />
    </>
  );
};

export default Home;

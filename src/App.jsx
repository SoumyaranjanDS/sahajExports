import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Agentation } from 'agentation';
import './App.css';

import PageLoader from './components/PageLoader';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const FishFood = lazy(() => import('./pages/products/FishFood'));
const Mangoes = lazy(() => import('./pages/products/Mangoes'));
const Peanuts = lazy(() => import('./pages/products/Peanuts'));
const WheatFlour = lazy(() => import('./pages/products/WheatFlour'));
const PrsdPrpdPeanut = lazy(() => import('./pages/products/PrsdPrpdPeanut'));
const Lentils = lazy(() => import('./pages/products/Lentils'));
const Millets = lazy(() => import('./pages/products/Millets'));
const GuarMeal = lazy(() => import('./pages/products/GuarMeal'));
const Lecithin = lazy(() => import('./pages/products/Lecithin'));
const KabuliChana = lazy(() => import('./pages/products/KabuliChana'));
const BengalGram = lazy(() => import('./pages/products/BengalGram'));
const Ghee = lazy(() => import('./pages/products/Ghee'));
const Cumin = lazy(() => import('./pages/products/Cumin'));
const RedChilliPowder = lazy(() => import('./pages/products/RedChilliPowder'));
const DryRedChilliWhole = lazy(() => import('./pages/products/DryRedChilliWhole'));
const OnionOil = lazy(() => import('./pages/products/OnionOil'));
const PepperOleoresins = lazy(() => import('./pages/products/PepperOleoresins'));
const KnittedGarments = lazy(() => import('./pages/products/KnittedGarments'));
const GreigeFabric = lazy(() => import('./pages/products/GreigeFabric'));
const GreigeWovenBags = lazy(() => import('./pages/products/GreigeWovenBags'));
const KnittedFabrics = lazy(() => import('./pages/products/KnittedFabrics'));

function App() {
  return (
    <div className="bg-bg-main min-h-screen flex flex-col">
      <Header />
      
      <main className="grow relative">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            <Route path="/product/fish-meal" element={<FishFood />} />
            <Route path="/product/mango" element={<Mangoes />} />
            <Route path="/product/peanuts" element={<Peanuts />} />
            <Route path="/product/wheat-flour" element={<WheatFlour />} />
            <Route path="/product/prsd-prpd-peanut" element={<PrsdPrpdPeanut />} />
            <Route path="/product/lentils" element={<Lentils />} />
            <Route path="/product/millets" element={<Millets />} />
            <Route path="/product/guar-meal" element={<GuarMeal />} />
            <Route path="/product/lecithin" element={<Lecithin />} />
            <Route path="/product/kabuli-chana" element={<KabuliChana />} />
            <Route path="/product/bengal-gram" element={<BengalGram />} />
            <Route path="/product/ghee" element={<Ghee />} />
            <Route path="/product/cumin" element={<Cumin />} />
            <Route path="/product/red-chilli-powder" element={<RedChilliPowder />} />
            <Route path="/product/dry-red-chilli-whole" element={<DryRedChilliWhole />} />
            <Route path="/product/onion-oil" element={<OnionOil />} />
            <Route path="/product/pepper-oleoresins" element={<PepperOleoresins />} />
            <Route path="/product/knitted-garments" element={<KnittedGarments />} />
            <Route path="/product/greige-fabric" element={<GreigeFabric />} />
            <Route path="/product/greige-woven-bags" element={<GreigeWovenBags />} />
            <Route path="/product/knitted-fabrics" element={<KnittedFabrics />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      {/* <Agentation /> */}
    </div>
  );
}

export default App;

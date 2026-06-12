import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';
import FishFood from './pages/products/FishFood';
import Mangoes from './pages/products/Mangoes';
import Peanuts from './pages/products/Peanuts';
import WheatFlour from './pages/products/WheatFlour';
import PrsdPrpdPeanut from './pages/products/PrsdPrpdPeanut';
import Lentils from './pages/products/Lentils';
import Millets from './pages/products/Millets';
import GuarMeal from './pages/products/GuarMeal';
import Lecithin from './pages/products/Lecithin';
import KabuliChana from './pages/products/KabuliChana';
import BengalGram from './pages/products/BengalGram';
import Ghee from './pages/products/Ghee';
import Cumin from './pages/products/Cumin';
import RedChilliPowder from './pages/products/RedChilliPowder';
import DryRedChilliWhole from './pages/products/DryRedChilliWhole';
import OnionOil from './pages/products/OnionOil';
import PepperOleoresins from './pages/products/PepperOleoresins';
import KnittedGarments from './pages/products/KnittedGarments';
import GreigeFabric from './pages/products/GreigeFabric';
import GreigeWovenBags from './pages/products/GreigeWovenBags';
import KnittedFabrics from './pages/products/KnittedFabrics';
import { Agentation } from 'agentation';
import './App.css';

function App() {
  return (
    <div className="bg-bg-main min-h-screen flex flex-col">
      <Header />
      
      <main className="grow">
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
      </main>

      <Footer />
      {/* <Agentation /> */}
    </div>
  );
}

export default App;

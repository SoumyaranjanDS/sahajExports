const fs = require('fs');
const path = require('path');

const products = [
  { id: 'fish-meal', name: 'Fish Meal', component: 'FishFood' },
  { id: 'mango', name: 'Mangoes', component: 'Mangoes' },
  { id: 'peanuts', name: 'Peanuts', component: 'Peanuts' },
  { id: 'wheat-flour', name: 'Wheat Flour', component: 'WheatFlour' },
  { id: 'prsd-prpd-peanut', name: 'PRSD/PRPD Peanut', component: 'PrsdPrpdPeanut' },
  { id: 'lentils', name: 'Lentils', component: 'Lentils' },
  { id: 'millets', name: 'Millets', component: 'Millets' },
  { id: 'guar-meal', name: 'Guar Meal', component: 'GuarMeal' },
  { id: 'lecithin', name: 'Lecithin', component: 'Lecithin' },
  { id: 'kabuli-chana', name: 'Kabuli Chana', component: 'KabuliChana' },
  { id: 'bengal-gram', name: 'Bengal Gram', component: 'BengalGram' },
  { id: 'ghee', name: 'Ghee', component: 'Ghee' },
  { id: 'cumin', name: 'Cumin', component: 'Cumin' },
  { id: 'red-chilli-powder', name: 'Red Chilli Powder', component: 'RedChilliPowder' },
  { id: 'dry-red-chilli-whole', name: 'Dry Red Chilli Whole', component: 'DryRedChilliWhole' },
  { id: 'onion-oil', name: 'Onion Oil', component: 'OnionOil' },
  { id: 'pepper-oleoresins', name: 'Pepper Oleoresins', component: 'PepperOleoresins' },
  { id: 'knitted-garments', name: 'Knitted Garments', component: 'KnittedGarments' },
  { id: 'greige-fabric', name: 'Greige Fabric', component: 'GreigeFabric' },
  { id: 'greige-woven-bags', name: 'Greige Woven Bags', component: 'GreigeWovenBags' },
  { id: 'knitted-fabrics', name: 'Knitted Fabrics', component: 'KnittedFabrics' }
];

const dir = path.join(__dirname, 'src', 'pages', 'products');

// Create skeleton pages for everything EXCEPT fish-meal and mango
products.forEach(p => {
  if (p.id !== 'fish-meal' && p.id !== 'mango') {
    const content = `import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ${p.component} = () => {
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
      <h1 className="text-5xl font-heading font-black text-primary-dark">${p.name}</h1>
      <p className="mt-4 font-body text-primary-dark/60">Detailed page coming soon.</p>
    </div>
  );
};

export default ${p.component};
`;
    fs.writeFileSync(path.join(dir, `${p.component}.jsx`), content);
  }
});

// Create App.jsx string replacements
let appContent = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf-8');

// remove old ProductDetail import
appContent = appContent.replace("import ProductDetail from './pages/ProductDetail';\n", "");

// add new imports
const newImports = products.map(p => `import ${p.component} from './pages/products/${p.component}';`).join('\n');
appContent = appContent.replace("import { Agentation } from 'agentation';", newImports + "\nimport { Agentation } from 'agentation';");

// add new routes
const newRoutes = products.map(p => `          <Route path="/product/${p.id}" element={<${p.component} />} />`).join('\n');
appContent = appContent.replace('<Route path="/product/:id" element={<ProductDetail />} />', newRoutes);

fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appContent);

console.log("Skeleton pages created and App.jsx updated.");

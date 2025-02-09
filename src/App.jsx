import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


// Example pages (create them in /pages or /features as you like)
import HomePage from './pages/HomePage';
import WomenPage from './pages/WomenPage';
import MenPage from './pages/MenPage';
import KidsPage from './pages/KidsPage';
import SalePage from './pages/SalePage';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import FavoritePage from './pages/FavoritePage';
import ProductPage from './pages/ProductPage';

import Footer from './components/Footer';


const App = () => {
  return (
 
    <Router>
      {/* Navbar appears on every page */}
      <Navbar />

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorite" element={<FavoritePage />} />
          {/* You can add more routes here */}
          <Route path="/product/:id" element={<ProductPage />} /> {/* Product details route */}
        </Routes>
      </div>
      <Footer />
    </Router>
   
    
  ); 
};

export default App;

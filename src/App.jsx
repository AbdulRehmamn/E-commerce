import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext.jsx';
import { Header } from './components/layout/Header.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { CartSidebar } from './components/cart/CartSidebar.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Checkout from './pages/Checkout.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
          <Footer />
          <CartSidebar />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

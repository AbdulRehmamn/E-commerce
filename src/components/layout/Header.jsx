import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { categories } from '../../data/products';

export const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            LUXE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-all duration-200 hover:text-indigo-900 ${
                location.pathname === '/' ? 'font-medium text-indigo-900' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <Link
                to="/products"
                className={`transition-all duration-200 hover:text-indigo-900 ${
                  location.pathname === '/products' ? 'font-medium text-indigo-900' : 'text-gray-700'
                }`}
              >
                Shop
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-md overflow-hidden transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-top-left invisible group-hover:visible">
                <div className="py-2">
                  {categories.map(category => (
                    <Link
                      key={category.id}
                      to={`/products?category=${category.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className={`transition-all duration-200 hover:text-indigo-900 ${
                location.pathname === '/about' ? 'font-medium text-indigo-900' : 'text-gray-700'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-gray-700" />
            </button>

            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-fadeIn">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="p-2 rounded-full hover:bg-gray-100 md:hidden transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-gray-700" />
              ) : (
                <Menu size={20} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ top: '60px' }}
      >
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-col space-y-6">
            <Link to="/" className="text-xl font-medium text-gray-900">
              Home
            </Link>
            <Link to="/products" className="text-xl font-medium text-gray-900">
              Shop
            </Link>
            <div className="pl-4">
              {categories.map(category => (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="block py-2 text-gray-700"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <Link to="/about" className="text-xl font-medium text-gray-900">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

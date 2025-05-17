import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === Number(id));

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  // If product not found, redirect to products page
  useEffect(() => {
    if (!product) {
      navigate('/products');
    } else {
      // Set default selections
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);
      document.title = `${product.name} | LUXE`;
    }
  }, [product, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setErrorMessage('Please select a color and size');
      return;
    }

    addToCart(product, quantity, selectedColor, selectedSize);
    setErrorMessage('');
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors shadow-md"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors shadow-md"
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="mt-4 flex gap-4 overflow-x-auto py-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-md ${
                        index === currentImageIndex ? 'ring-2 ring-indigo-900' : 'ring-1 ring-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-medium text-gray-900 mb-6">${product.price.toFixed(2)}</p>

              <div className="mb-6">
                <h2 className="text-sm font-medium text-gray-900 mb-3">Color</h2>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`group h-10 w-10 rounded-full border flex items-center justify-center ${
                        selectedColor === color
                          ? 'border-indigo-900 ring-1 ring-indigo-900'
                          : 'border-gray-200'
                      }`}
                      title={color}
                    >
                      <span className="sr-only">{color}</span>
                      <span className="h-8 w-8 rounded-full bg-gray-100"></span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-sm font-medium text-gray-900 mb-3">Size</h2>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-10 h-10 px-3 rounded-md border text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-indigo-900 bg-indigo-900 text-white'
                          : 'border-gray-200 text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-sm font-medium text-gray-900 mb-3">Quantity</h2>
                <div className="flex items-center w-32 border border-gray-200 rounded-md">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    aria-label="Decrease quantity"
                  >
                    <span className="text-xl">−</span>
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 h-10 border-0 text-center focus:ring-0"
                  />
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>

              {errorMessage && (
                <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
              )}

              <button
                onClick={handleAddToCart}
                className="w-full py-3 px-4 rounded-md bg-indigo-900 text-white font-medium hover:bg-indigo-800 transition-colors"
              >
                Add to Cart
              </button>

              <div className="mt-8">
                <h2 className="text-lg font-medium mb-3">Description</h2>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;

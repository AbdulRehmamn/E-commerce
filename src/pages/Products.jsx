import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductGrid } from '../components/product/ProductGrid';
import { products, categories } from '../data/products';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter products when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  // Update URL when category changes
  useEffect(() => {
    const url = selectedCategory === 'all'
      ? '/products'
      : `/products?category=${selectedCategory}`;

    window.history.replaceState(null, '', url);
  }, [selectedCategory]);

  // Update page title
  useEffect(() => {
    const categoryName = categories.find(c => c.id === selectedCategory)?.name || 'All Products';
    document.title = `${categoryName} | LUXE`;
  }, [selectedCategory]);

  // Update selected category when URL changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('all');
    }
  }, [categoryParam]);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {categories.find(c => c.id === selectedCategory)?.name || 'All Products'}
              </h1>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="py-2 px-4 pr-8 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                aria-label="Filter by category"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center">
              <h2 className="text-xl font-medium mb-2">No products found</h2>
              <p className="text-gray-600 mb-6">Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-indigo-900 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-800 transition-colors"
              >
                View All Products
              </button>
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default Products;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProductGrid } from '../product/ProductGrid.jsx';
import { products } from '../../data/products.js';

export const FeaturedProducts = () => {
  // Get first 4 products for featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Our most popular styles, loved for their quality and design.</p>
          </div>
          <Link
            to="/products"
            className="mt-4 md:mt-0 inline-block text-indigo-900 font-medium hover:underline"
          >
            View All Products
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />

        <motion.div
          className="mt-16 px-6 py-12 bg-gray-100 rounded-lg flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">New Collection Coming Soon</h3>
            <p className="text-gray-600 max-w-md">
              Join our mailing list to be the first to know when our new collection launches.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-l-md border-0 focus:ring-2 focus:ring-indigo-900"
                required
              />
              <button
                type="submit"
                className="bg-indigo-900 text-white px-6 py-3 rounded-r-md font-medium hover:bg-indigo-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

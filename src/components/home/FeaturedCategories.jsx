import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { featuredCategories } from '../../data/products';

export const FeaturedCategories = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Shop by Category</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our curated collections, featuring our latest styles and timeless essentials.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredCategories.map(category => (
            <motion.div
              key={category.id}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Link to={`/products?category=${category.id}`} className="block relative overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-white/80 mb-3">{category.description}</p>
                  <span className="inline-block text-sm border-b border-white pb-1 opacity-90 group-hover:opacity-100 transition-opacity">
                    Shop Collection
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

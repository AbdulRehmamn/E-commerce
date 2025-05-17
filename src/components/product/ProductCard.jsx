import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * @typedef {import('../../types.js').Product} Product
 */

/**
 * @param {Object} props
 * @param {Product} props.product
 */
export const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4]">
          {/* Main image */}
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />

          {/* Secondary image that shows on hover */}
          {product.images[1] && (
            <motion.img
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Quick shop button */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-sm rounded-full py-2 px-4 flex items-center justify-center shadow-lg"
            >
              <ShoppingBag size={16} className="mr-2" />
              <span className="text-sm font-medium">Quick View</span>
            </motion.div>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{product.colors.join(', ')}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  );
};

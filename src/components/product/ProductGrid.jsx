import React from 'react';
import { ProductCard } from './ProductCard.jsx';

/**
 * @typedef {import('../../types').Product} Product
 */

/**
 * @param {Object} props
 * @param {Product[]} props.products
 */
export const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

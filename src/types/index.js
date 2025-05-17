/**
 * @typedef {Object} Product
 * @property {number} id - Product identifier
 * @property {string} name - Product name
 * @property {number} price - Product price
 * @property {string} category - Product category
 * @property {string[]} images - Array of product image URLs
 * @property {string[]} colors - Available colors
 * @property {string[]} sizes - Available sizes
 * @property {string} description - Product description
 */

/**
 * @typedef {Object} CartItem
 * @property {Product} product - The product in the cart
 * @property {number} quantity - Quantity of the product
 * @property {string} color - Selected color
 * @property {string} size - Selected size
 */

// Export empty object to make this a proper ES module
export default {};

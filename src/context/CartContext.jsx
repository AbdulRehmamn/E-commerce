import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * @typedef {import('../types').CartItem} CartItem
 * @typedef {import('../types').Product} Product
 */

/**
 * @typedef {Object} CartContextType
 * @property {CartItem[]} cart
 * @property {function(Product, number, string, string): void} addToCart
 * @property {function(number): void} removeFromCart
 * @property {function(number, number): void} updateQuantity
 * @property {function(): void} clearCart
 * @property {boolean} isCartOpen
 * @property {function(boolean): void} setIsCartOpen
 * @property {number} cartTotal
 * @property {number} cartCount
 */

/** @type {React.Context<CartContextType|undefined>} */
const CartContext = createContext(undefined);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export const CartProvider = ({ children }) => {
  /** @type {[CartItem[], React.Dispatch<React.SetStateAction<CartItem[]>>]} */
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Calculate cart total and count whenever cart changes
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    setCartTotal(total);
    setCartCount(count);
  }, [cart]);

  /**
   * Add product to cart
   * @param {Product} product
   * @param {number} quantity
   * @param {string} color
   * @param {string} size
   */
  const addToCart = (product, quantity, color, size) => {
    setCart(prevCart => {
      // Check if product already exists in cart
      const existingItemIndex = prevCart.findIndex(
        item => item.product.id === product.id && item.color === color && item.size === size
      );

      if (existingItemIndex > -1) {
        // Update quantity if product exists
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Add new item if product doesn't exist
        return [...prevCart, { product, quantity, color, size }];
      }
    });

    // Open cart when adding items
    setIsCartOpen(true);
  };

  /**
   * Remove product from cart
   * @param {number} productId
   */
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  /**
   * Update product quantity
   * @param {number} productId
   * @param {number} quantity
   */
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  /**
   * Clear cart
   */
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartSidebar = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', ease: 'easeInOut' } }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={() => setIsCartOpen(false)}
          />

          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-medium">Shopping Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 7.5L5.5 5.5M16.5 7.5L18.5 5.5M3 11H5L7 19H17L19 11H21M7 11H17" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-indigo-900 text-white px-6 py-2 rounded-full hover:bg-indigo-800 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  <AnimatePresence>
                    {cart.map(item => (
                      <motion.li
                        key={`${item.product.id}-${item.color}-${item.size}`}
                        className="py-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-start">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="h-20 w-20 rounded-md object-cover object-center"
                          />
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="text-sm font-medium text-gray-900">{item.product.name}</h4>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.color} / {item.size}
                                </p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center justify-between">
                              <div className="flex items-center border rounded">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  className="p-1 hover:bg-gray-100"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="px-2 text-sm">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="p-1 hover:bg-gray-100"
                                  aria-label="Increase quantity"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="Remove item"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-4 border-t">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout</p>

                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-indigo-900 text-white py-3 px-4 rounded-md hover:bg-indigo-800 transition-colors text-center font-medium"
                >
                  <span className="flex items-center justify-center">
                    Checkout <ArrowRight size={16} className="ml-2" />
                  </span>
                </Link>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full text-center mt-3 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

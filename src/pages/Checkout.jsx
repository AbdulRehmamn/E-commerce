import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // If cart is empty, redirect to products
  React.useEffect(() => {
    if (cart.length === 0 && !isOrderPlaced) {
      navigate('/products');
    }

    document.title = 'Checkout | LUXE';
  }, [cart, navigate, isOrderPlaced]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOrderPlaced(true);
      clearCart();
    }, 1500);
  };

  if (isOrderPlaced) {
    return (
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L10 17L20 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for your purchase. We've received your order and will process it shortly.
              </p>
              <button
                onClick={() => navigate('/')}
                className="bg-indigo-900 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-800 transition-colors"
              >
                Continue Shopping
              </button>
            </motion.div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-medium mb-4">Shipping Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <h2 className="text-lg font-medium mb-4 mt-8">Payment Information</h2>

                <div className="mb-4">
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="XXXX XXXX XXXX XXXX"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="XXX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-900 text-white rounded-md font-medium hover:bg-indigo-800 transition-colors flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>

                <div className="divide-y divide-gray-200">
                  {cart.map(item => (
                    <div key={`${item.product.id}-${item.color}-${item.size}`} className="py-3 flex">
                      <div className="w-16 h-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">{item.product.name}</h3>
                        <p className="text-sm text-gray-500">{item.color} / {item.size}</p>
                        <div className="flex justify-between mt-1">
                          <p className="text-sm">Qty: {item.quantity}</p>
                          <p className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Subtotal</span>
                    <span className="text-sm font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Shipping</span>
                    <span className="text-sm font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Tax</span>
                    <span className="text-sm font-medium">${(cartTotal * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${(cartTotal + cartTotal * 0.08).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;

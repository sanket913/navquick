import React from 'react';
import { X, ShoppingCart, Trash2, Plus, Minus, MessageCircle, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { generateWhatsAppMessage } from '../utils/whatsappMessages';
import { openWhatsApp } from '../utils/whatsapp';

interface CartSidebarProps {
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cart: CartItem[];
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isCartOpen,
  setIsCartOpen,
  cart,
  removeFromCart,
  updateQuantity,
  getTotalPrice,
  getTotalItems
}) => {
  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage(cart);
    openWhatsApp(message);
    setIsCartOpen(false);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-xl">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Shopping Cart</h2>
                <p className="text-purple-100 text-sm">{getTotalItems()} items selected</p>
              </div>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)} 
              className="p-2 hover:bg-white/20 rounded-xl transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="h-12 w-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add some amazing products to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl shadow-md" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                          <Sparkles className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-sm mb-1">{item.name}</h3>
                        <p className="text-purple-600 font-bold text-lg">₹{item.price.toLocaleString('en-IN')}</p>
                        <div className="flex items-center space-x-3 mt-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
                          >
                            <Minus className="h-4 w-4 text-white" />
                          </button>
                          <span className="text-lg font-bold text-gray-800 min-w-[2rem] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
                          >
                            <Plus className="h-4 w-4 text-white" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="border-t border-purple-100 p-6 bg-gradient-to-r from-purple-50 to-blue-50">
              <div className="bg-white rounded-2xl p-4 mb-4 shadow-lg border border-purple-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">₹{getTotalPrice().toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">Total:</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      ₹{getTotalPrice().toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Order on WhatsApp</span>
              </button>
              <p className="text-center text-xs text-gray-500 mt-3">
                🚀 Quick ordering via WhatsApp • Free shipping across India
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CartSidebar;

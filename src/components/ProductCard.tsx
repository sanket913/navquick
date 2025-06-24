import React from 'react';
import { Star, ShoppingCart, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { generateSingleProductMessage } from '../utils/whatsappMessages';
import { openWhatsApp } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode,
  addToCart
}) => {
  const handleWhatsAppOrder = () => {
    const message = generateSingleProductMessage(product);
    openWhatsApp(message);
  };

  return (
    <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden group border border-purple-100 hover:border-purple-300 ${
      viewMode === 'list' ? 'flex' : ''
    }`}>
      <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
            viewMode === 'list' ? 'w-full h-full' : 'w-full h-56'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            {product.badge}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-xs font-semibold border border-purple-200">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2 font-medium">({product.reviews} reviews)</span>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-lg text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          </div>
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1 rounded-full">
            <span className="text-green-700 font-bold text-sm">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <button 
            onClick={handleWhatsAppOrder}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-2xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Order on WhatsApp</span>
          </button>
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-2xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>

        {/* Features Preview */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span className="truncate">{product.features.slice(0, 2).join(' • ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
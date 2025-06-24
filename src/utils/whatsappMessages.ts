import { Product, CartItem } from '../types';

export const generateWhatsAppMessage = (items: CartItem[]) => {
  let message = "🛒 *Order Details from NavQuick Store*\n\n";
  
  items.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*\n`;
    message += `   💰 Price: ₹${item.price.toLocaleString('en-IN')}\n`;
    message += `   📦 Quantity: ${item.quantity}\n`;
    message += `   💵 Subtotal: ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
    message += `   📝 Description: ${item.description}\n\n`;
  });
  
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  message += `💰 *Total Amount: ₹${totalPrice.toLocaleString('en-IN')}*\n`;
  message += `🚚 *Shipping: FREE across India*\n\n`;
  message += "📞 Please confirm this order and provide:\n";
  message += "• Your full name\n";
  message += "• Complete delivery address with pincode\n";
  message += "• Phone number\n";
  message += "• Any special requirements\n\n";
  message += "Thank you for choosing NavQuick! 🙏";
  
  return message;
};

export const generateSingleProductMessage = (product: Product) => {
  let message = `🛍️ *Product Inquiry - ${product.name}*\n\n`;
  message += `💰 *Price:* ₹${product.price.toLocaleString('en-IN')}\n`;
  message += `💸 *Original Price:* ₹${product.originalPrice.toLocaleString('en-IN')}\n`;
  message += `🎯 *Discount:* ${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF\n`;
  message += `📝 *Description:* ${product.description}\n\n`;
  message += `✨ *Features:*\n`;
  product.features.forEach(feature => {
    message += `• ${feature}\n`;
  });
  message += `\n⭐ *Rating:* ${product.rating}/5 (${product.reviews} reviews)\n`;
  message += `🏷️ *Category:* ${product.category}\n\n`;
  message += "I'm interested in this product. Please provide:\n";
  message += "• Availability details\n";
  message += "• Delivery timeline\n";
  message += "• Bulk pricing (if applicable)\n";
  message += "• Customization options\n\n";
  message += "Thank you! 🙏";
  
  return message;
};
import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface CTASectionProps {
  scrollToSection: (sectionId: string) => void;
}

const CTASection: React.FC<CTASectionProps> = ({ scrollToSection }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 mr-2" />
            Ready to Transform Your Networking?
          </div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Go Digital?
        </h2>
        <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join the digital revolution and transform your networking experience with NavQuick's premium NFC solutions. 
          Get started today and make lasting impressions!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('products')}
            className="group bg-white text-purple-600 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-2xl"
          >
            <span>Shop Now</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={() => openWhatsApp("Hi! I'm interested in NavQuick products. Please provide more information about your NFC and QR solutions and bulk discounts.")}
            className="group border-2 border-white/50 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm shadow-2xl"
          >
            <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Additional incentives */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-white mb-2">Free Shipping</div>
            <div className="text-purple-100">On all orders across India</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-white mb-2">Bulk Discounts</div>
            <div className="text-purple-100">Up to 30% off on bulk orders</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-white mb-2">24/7 Support</div>
            <div className="text-purple-100">Expert help when you need it</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
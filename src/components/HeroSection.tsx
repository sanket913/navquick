import React from 'react';
import { ArrowRight, MessageCircle, Zap, Shield, Star, Sparkles } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/25 to-purple-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-1/4 animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <Zap className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-40 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <Shield className="h-7 w-7 text-white" />
          </div>
        </div>
        <div className="absolute top-1/2 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <Star className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="absolute top-40 left-10 animate-float" style={{ animationDelay: '3s' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
        </div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-slide-right"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-slide-left"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 border border-purple-400/30 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              India's #1 Smart NFC Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Smart NFC & QR
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-text-shimmer">
              Digital Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            Transform your networking with NavQuick's premium NFC cards, standees, keychains, and bracelets. 
            Professional, innovative, and instantly shareable digital experiences that make lasting impressions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-2xl hover:shadow-purple-500/25"
            >
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => openWhatsApp("Hi! I want to know more about NavQuick products and bulk discounts.")}
              className="group border-2 border-white/30 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm hover:backdrop-blur-none shadow-2xl"
            >
              <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Get Bulk Discount</span>
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50,000+</div>
              <div className="text-purple-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.9★</div>
              <div className="text-purple-200">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-purple-200">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
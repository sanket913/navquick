import React from 'react';
import { Menu, X, ShoppingCart, MessageCircle, Home, Package, Zap, Info, Contact, Star, Sparkles } from 'lucide-react';
import { NavItem } from '../types';
import { openWhatsApp } from '../utils/whatsapp';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollY: number;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  getTotalItems: () => number;
  setIsCartOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollY,
  activeSection,
  scrollToSection,
  getTotalItems,
  setIsCartOpen
}) => {
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Contact }
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrollY > 50 
          ? 'bg-gradient-to-r from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-2xl shadow-2xl border-b border-purple-500/20' 
          : 'bg-gradient-to-r from-purple-800/90 via-blue-800/90 to-indigo-800/90 backdrop-blur-xl shadow-xl'
      }`}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 animate-gradient"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-3 left-24 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-5 right-36 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-3 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-20">
            {/* Logo Only */}
            <div className="flex items-center min-w-0 flex-shrink-0">
              <div className="cursor-pointer group" onClick={() => scrollToSection('home')}>
                <img 
                  src="/assets/logo_man.png" 
                  alt="Logo" 
                  className="h-[7.9rem] w-auto object-contain transition-all duration-500 transform group-hover:scale-110 group-hover:brightness-110"
                  onError={(e) => {
                    // Fallback to a simple text logo if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="text-white text-2xl font-bold">NavQuick</div>';
                    }
                  }}
                />
              </div>
            </div>
            
            {/* Desktop Navigation with Perfect Spacing */}
            <div className="hidden lg:flex flex-1 justify-center max-w-2xl mx-8">
              <div className="flex items-center space-x-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative flex items-center space-x-3 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-500 transform hover:scale-110 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-2xl shadow-orange-500/50 scale-105'
                          : 'text-white/80 hover:text-white hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/25'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon className={`h-5 w-5 transition-all duration-300 ${
                        activeSection === item.id ? 'animate-bounce' : 'group-hover:scale-125 group-hover:rotate-12'
                      }`} />
                      <span className="font-semibold whitespace-nowrap">{item.label}</span>
                      
                      {/* Active indicator */}
                      {activeSection === item.id && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg animate-pulse"></div>
                      )}
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl scale-150"></div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Desktop Actions with Better Spacing */}
            <div className="hidden lg:flex items-center space-x-5 flex-shrink-0">
              {/* Enhanced Cart Button */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="group relative p-4 rounded-2xl bg-white/10 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border border-white/20 hover:border-white/40"
              >
                <ShoppingCart className="h-6 w-6 transition-all duration-300 group-hover:scale-125" />
                {getTotalItems() > 0 && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white text-xs rounded-full h-7 w-7 flex items-center justify-center animate-pulse font-black shadow-xl border-2 border-white">
                    {getTotalItems()}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-2xl scale-150"></div>
              </button>
              
              {/* Enhanced WhatsApp Button */}
              <button 
                onClick={() => openWhatsApp("Hi! I'm interested in NavQuick products. Please provide more information.")}
                className="group relative bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl hover:from-green-400 hover:via-emerald-400 hover:to-teal-400 transition-all duration-500 transform hover:scale-110 flex items-center space-x-3 shadow-2xl hover:shadow-3xl font-bold border border-green-400/30"
              >
                <MessageCircle className="h-6 w-6 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                <span className="font-black whitespace-nowrap">WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-300/30 to-teal-300/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-2xl scale-150"></div>
              </button>
            </div>

            {/* Mobile Actions with Better Spacing */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile Cart */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="group relative p-3.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce font-bold">
                    {getTotalItems()}
                  </div>
                )}
              </button>
              
              {/* Mobile WhatsApp */}
              <button 
                onClick={() => openWhatsApp("Hi! I'm interested in NavQuick products. Please provide more information.")}
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3.5 rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="h-6 w-6" />
              </button>
              
              {/* Enhanced Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group p-3.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="relative">
                  {isMenuOpen ? (
                    <X className="h-6 w-6 transition-all duration-500 rotate-180 scale-110" />
                  ) : (
                    <Menu className="h-6 w-6 transition-all duration-300 group-hover:scale-110" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu with Perfect Spacing */}
      <div className={`fixed top-20 left-0 right-0 z-40 lg:hidden transition-all duration-700 ${
        isMenuOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="bg-gradient-to-br from-purple-900/98 via-blue-900/98 to-indigo-900/98 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl">
          {/* Mobile menu background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-indigo-600/10"></div>
          
          <div className="relative z-10 px-6 py-8 space-y-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center space-x-5 w-full text-left px-6 py-5 rounded-2xl text-lg font-bold transition-all duration-500 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-2xl scale-105'
                      : 'text-white/80 hover:text-white hover:bg-white/10 hover:shadow-xl'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-white/20 shadow-lg' 
                      : 'bg-white/10 group-hover:bg-white/20'
                  }`}>
                    <Icon className={`h-6 w-6 transition-all duration-300 ${
                      activeSection === item.id ? 'animate-bounce' : 'group-hover:scale-125'
                    }`} />
                  </div>
                  <span className="flex-1">{item.label}</span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg"></div>
                  )}
                </button>
              );
            })}
            
            {/* Mobile WhatsApp CTA with Better Spacing */}
            <div className="pt-8 border-t border-white/20 mt-8">
              <button 
                onClick={() => {
                  openWhatsApp("Hi! I'm interested in NavQuick products. Please provide more information.");
                  setIsMenuOpen(false);
                }}
                className="group flex items-center space-x-5 w-full text-left px-6 py-6 rounded-2xl text-lg font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white hover:from-green-400 hover:via-emerald-400 hover:to-teal-400 transition-all duration-500 shadow-2xl transform hover:scale-105"
              >
                <div className="p-3 bg-white/20 rounded-xl shadow-lg">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <span className="flex-1">Chat on WhatsApp</span>
                <Sparkles className="h-6 w-6 animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
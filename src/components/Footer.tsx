import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, MessageCircle, Home, Package, Zap, Info, Contact } from 'lucide-react';
import { NavItem } from '../types';
import { openWhatsApp } from '../utils/whatsapp';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Contact }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">N</span>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">NavQuick</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              India's leading provider of smart NFC and QR-enabled digital networking solutions. 
              Transform your professional connections with our innovative products and make lasting impressions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <button key={index} className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 border border-white/20">
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Quick Links</h3>
            <div className="space-y-3">
              {navItems.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">navquick@gmail.com</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+91 9999999999</span>
              </div>
              <button 
                onClick={() => openWhatsApp("Hi! I want to know more about NavQuick products and services.")}
                className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg mt-6"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-semibold">WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} NavQuick. All rights reserved. Made in India 🇮🇳
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Trusted by 50,000+ professionals</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

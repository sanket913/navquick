import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="relative z-10 max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <span className="animate-bounce mr-2">📞</span>
            <span className="font-semibold">Call / WhatsApp: +91 9904491017</span>
          </span>
        </div>
        <div className="hidden md:block">
          <span className="flex items-center">
            <span className="animate-bounce mr-2">🎉</span>
            <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Discount Available on Bulk Orders !
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
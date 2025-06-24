import React from 'react';
import { CheckCircle, Award, Users, Globe, Heart, Lightbulb, Star, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    'Over 50,000+ satisfied customers across India',
    'Premium quality NFC chips and materials',
    'Eco-friendly alternative to paper cards',
    'Advanced analytics and contact management',
    '24/7 customer support in Hindi and English'
  ];

  const achievements = [
    { icon: Lightbulb, title: 'Innovative Startup', desc: 'Born from Friendship', color: 'from-yellow-400 to-orange-500' },
    { icon: Users, title: '50K+ Customers', desc: 'Trusted by Professionals', color: 'from-blue-400 to-cyan-500' },
    { icon: Globe, title: 'Pan India', desc: 'Serving All Major Cities', color: 'from-green-400 to-emerald-500' }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200 mb-4">
            <Heart className="h-4 w-4 mr-2" />
            Our Story
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            A Startup Born from Friendship
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate duo behind India's leading smart networking revolution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                NavQuick is a passionate startup founded by two best friends - <span className="font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-lg">Sanket Prajapati</span> and <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">Mann Patel</span> - who shared a vision of revolutionizing professional networking in India.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                What started as late-night conversations about the future of digital networking has grown into India's leading provider of smart NFC and QR-enabled solutions. Our journey began with a simple belief: professional connections should be seamless, sustainable, and memorable.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to serve over <span className="font-bold text-green-600">50,000+ professionals</span> across India, transforming how people connect, share information, and build meaningful business relationships in the digital age.
              </p>
            </div>
            
            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-start group hover:bg-white/50 p-3 rounded-xl transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center group bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/80 transition-all duration-300 border border-white/50 hover:shadow-lg">
                    <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{achievement.title}</h4>
                    <p className="text-xs text-gray-600">{achievement.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                <img 
                  src="/assets/2.jpg" 
                  alt="Indian entrepreneurs working together on startup"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Founders overlay card - Responsive positioning */}
              <div className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-purple-100 max-w-xs w-full sm:w-auto">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Co-Founders</h4>
                    <p className="text-purple-600 text-xs sm:text-sm flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      Best Friends & Partners
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-semibold text-gray-700">Sanket Prajapati</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-semibold text-gray-700">Mann Patel</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-500">Made in India</span>
                  <span className="text-xs">🇮🇳</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements - Responsive sizes */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl sm:rounded-3xl opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl sm:rounded-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl sm:rounded-2xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Sparkles */}
            <div className="absolute top-8 right-8 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-purple-400" />
            </div>
            <div className="absolute bottom-16 left-8 animate-bounce" style={{ animationDelay: '1.5s' }}>
              <Sparkles className="h-3 w-3 sm:h-5 sm:w-5 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Mission & Vision Section - Enhanced Responsive Grid */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6 sm:p-8 border border-purple-200 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To revolutionize professional networking in India by providing innovative, sustainable, and user-friendly digital solutions that help professionals make lasting connections and grow their businesses.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 sm:p-8 border border-green-200 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To become India's most trusted brand for smart networking solutions, empowering millions of professionals to connect seamlessly while contributing to a more sustainable and digital future.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 bg-white/60 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-4 border border-white/50 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold text-sm sm:text-base">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="text-gray-700 font-semibold text-sm sm:text-base">50,000+ Happy Customers</div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="text-gray-700 font-semibold text-sm sm:text-base flex items-center">
              <span className="mr-2">Made in India</span>
              <span>🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
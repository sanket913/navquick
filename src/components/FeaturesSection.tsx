import React from 'react';
import { Zap, Shield, Clock, Award, Sparkles, Users } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Sharing',
      description: 'Share your information instantly via NFC tap, QR scan, or direct link.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security and privacy controls.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Always Updated',
      description: 'Real-time updates ensure your contacts always have current information.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Premium Quality',
      description: 'High-quality materials and professional designs that make lasting impressions.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Team Management',
      description: 'Manage multiple team members and track engagement analytics.',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Custom Branding',
      description: 'Personalize with your brand colors, logo, and custom design elements.',
      gradient: 'from-rose-400 to-pink-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200 mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Why Choose WhoiCard?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of professional networking with our cutting-edge NFC and QR solutions designed for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-purple-100 hover:border-purple-300 h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl text-white mb-6 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Trusted by Professionals Worldwide</h3>
            <p className="text-purple-100 text-lg">Join thousands of satisfied customers who've transformed their networking experience</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-purple-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-purple-200">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-purple-200">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
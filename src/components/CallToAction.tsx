import React from 'react';
import { ArrowRight, CheckCircle, Rocket, Sparkles, Zap, Target } from 'lucide-react';

const CallToAction: React.FC = () => {
  const benefits = [
    'Free 14-day trial',
    'No credit card required',
    'Setup in under 10 minutes',
    '24/7 support included'
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Rocket className="w-8 h-8 text-cyan-500" />
            <span className="text-cyan-600 font-medium text-lg">Launch Your Success</span>
            <Rocket className="w-8 h-8 text-purple-500" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Your Sales?
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of sales professionals who are already using AI to close more deals, 
            reduce admin work, and exceed their quotas. The future of sales is here.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit} 
                className="group flex items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl px-6 py-3 border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <CheckCircle className="w-5 h-5 mr-3 text-green-500 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-gray-700 group-hover:text-gray-900 group-hover:font-semibold transition-all duration-300">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg overflow-hidden transform hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-purple-500/25">
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <Target className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                <span>Get a Demo</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group border-2 border-cyan-300 text-cyan-600 px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-cyan-50 hover:border-cyan-400 hover:scale-105 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl">
              <Zap className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
              <span>Start Free Trial</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl px-6 py-3 border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">Trusted by 500+ companies</span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl px-6 py-3 border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">4.9/5 customer rating</span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl px-6 py-3 border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">SOC 2 compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
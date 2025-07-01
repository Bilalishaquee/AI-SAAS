import React, { useEffect, useState } from 'react';
import { Play, ArrowRight, Bot, Zap, TrendingUp, Sparkles, Brain, Rocket, Star, Target, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Enablement', 'Intelligence', 'Automation', 'Excellence'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      {/* Minimal Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            {i % 2 === 0 && <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>}
            {i % 2 === 1 && <div className="w-1 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"></div>}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <div className="px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                  <span className="text-cyan-400 text-xs sm:text-sm font-medium flex items-center">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    AI-Powered Sales Revolution
                    <Rocket className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">Real-time Sales</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  <span className="inline-block transition-all duration-1000">
                    {words[currentWord]}
                  </span>
                </span>
                <br />
                <span className="text-white">Powered by </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  AI.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Transform every sales conversation with{' '}
                <span className="text-cyan-400 font-semibold">AI-powered insights</span>, 
                real-time guidance, and automated CRM updates that help your team close more deals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25">
                <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Get a Demo</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group border-2 border-cyan-500/50 text-cyan-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2 sm:space-x-3 hover:scale-105">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Watch Video</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column - Simplified Illustration */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative h-80 sm:h-96 lg:h-[500px]">
              {/* Central AI Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gray-900 rounded-full flex items-center justify-center animate-spin-slow">
                      <Brain className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-cyan-400" />
                    </div>
                  </div>
                  
                  {/* Simple Rotating Ring */}
                  <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 border border-purple-500/20 rounded-full animate-spin-reverse"></div>
                </div>
              </div>

              {/* Floating Elements - Responsive */}
              <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 border border-cyan-500/30 animate-float shadow-lg shadow-cyan-500/25 group hover:scale-110 transition-transform duration-300">
                <Bot className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-cyan-400" />
                <div className="text-xs text-cyan-400 mt-1 sm:mt-2 font-medium">AI Assistant</div>
              </div>

              <div className="absolute top-1/3 left-2 sm:left-3 lg:left-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 border border-purple-500/30 animate-float-delayed shadow-lg shadow-purple-500/25 group hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-400" />
                <div className="text-xs text-purple-400 mt-1 sm:mt-2 font-medium">Analytics</div>
              </div>

              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-1/4 sm:right-1/3 bg-gradient-to-br from-green-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 border border-green-500/30 animate-float shadow-lg shadow-green-500/25 group hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-400" />
                <div className="text-xs text-green-400 mt-1 sm:mt-2 font-medium">Real-time</div>
              </div>

              <div className="absolute bottom-1/4 left-4 sm:left-6 lg:left-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 border border-orange-500/30 animate-float-delayed shadow-lg shadow-orange-500/25 group hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-400" />
                <div className="text-xs text-orange-400 mt-1 sm:mt-2 font-medium">Insights</div>
              </div>

              <div className="absolute top-12 sm:top-16 left-1/4 sm:left-1/3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 border border-indigo-500/30 animate-float shadow-lg shadow-indigo-500/25 group hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-400" />
                <div className="text-xs text-indigo-400 mt-1 sm:mt-2 font-medium">Security</div>
              </div>

              {/* Simplified Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path
                  d="M 80 120 Q 200 80 320 120"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 80 280 Q 200 320 320 280"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Simple bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-50"></div>
    </section>
  );
};

export default Hero;
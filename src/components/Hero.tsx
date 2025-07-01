import React, { useEffect, useState } from 'react';
import { Play, ArrowRight, Bot, Zap, TrendingUp, Sparkles, Brain, Rocket, Star, Target, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Enablement', 'Intelligence', 'Automation', 'Excellence'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        
        {/* Simplified grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hero-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="url(#hero-gradient)" strokeWidth="0.5"/>
                <defs>
                  <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hero-grid)" />
          </svg>
        </div>
      </div>

      {/* Reduced Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 4}s`
            }}
          >
            {i % 3 === 0 && <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>}
            {i % 3 === 1 && <div className="w-1 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"></div>}
            {i % 3 === 2 && <Sparkles className="w-2 h-2 text-purple-400" />}
          </div>
        ))}
      </div>

      {/* Simplified Mouse Follower */}
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Simplified Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                  <span className="text-cyan-400 text-sm font-medium flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI-Powered Sales Revolution
                    <Rocket className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Real-time Sales</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  <span className="inline-block transition-all duration-500">
                    {words[currentWord]}
                  </span>
                </span>
                <br />
                <span className="text-white">Powered by </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  AI.
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Transform every sales conversation with{' '}
                <span className="text-cyan-400 font-semibold">AI-powered insights</span>, 
                real-time guidance, and automated CRM updates that help your team close more deals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Rocket className="w-5 h-5" />
                  <span>Get a Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group border-2 border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2 hover:scale-105">
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400 group hover:text-green-400 transition-colors duration-300">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="group-hover:font-semibold transition-all duration-300">Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 group hover:text-cyan-400 transition-colors duration-300">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="group-hover:font-semibold transition-all duration-300">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 group hover:text-purple-400 transition-colors duration-300">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="group-hover:font-semibold transition-all duration-300">Setup in minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column - Simplified Illustration */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px]">
              {/* Central AI Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                    <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center animate-spin-slow">
                      <Brain className="w-10 h-10 text-cyan-400" />
                    </div>
                  </div>
                  
                  {/* Simplified Rotating Rings */}
                  <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute -inset-4 border border-purple-500/20 rounded-full animate-spin-reverse"></div>
                </div>
              </div>

              {/* Simplified Floating Elements */}
              <div className="absolute top-8 right-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30 animate-float shadow-lg group hover:scale-110 transition-transform duration-300">
                <Bot className="w-8 h-8 text-cyan-400" />
                <div className="text-xs text-cyan-400 mt-2 font-medium">AI Assistant</div>
              </div>

              <div className="absolute top-1/3 left-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30 animate-float-delayed shadow-lg group hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-purple-400" />
                <div className="text-xs text-purple-400 mt-2 font-medium">Analytics</div>
              </div>

              <div className="absolute bottom-8 right-1/3 bg-gradient-to-br from-green-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30 animate-float shadow-lg group hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-green-400" />
                <div className="text-xs text-green-400 mt-2 font-medium">Real-time</div>
              </div>

              <div className="absolute bottom-1/4 left-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30 animate-float-delayed shadow-lg group hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-orange-400" />
                <div className="text-xs text-orange-400 mt-2 font-medium">Insights</div>
              </div>

              {/* Simplified Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path
                  d="M 80 120 Q 200 80 320 120"
                  stroke="url(#line-gradient-1)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 80 280 Q 200 320 320 280"
                  stroke="url(#line-gradient-1)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float-delayed"></div>
    </section>
  );
};

export default Hero;
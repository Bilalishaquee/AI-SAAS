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
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.15),transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
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
            <rect width="100" height="100" fill="url(#hero-grid)" className="animate-pulse" />
          </svg>
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {i % 5 === 0 && <Star className="w-2 h-2 text-cyan-400 animate-spin" />}
            {i % 5 === 1 && <Sparkles className="w-2 h-2 text-purple-400 animate-pulse" />}
            {i % 5 === 2 && <Zap className="w-2 h-2 text-blue-400 animate-bounce" />}
            {i % 5 === 3 && <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-ping"></div>}
            {i % 5 === 4 && <div className="w-1 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-pulse"></div>}
          </div>
        ))}
      </div>

      {/* Enhanced Mouse Follower */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 animate-pulse"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-cyan-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border-2 border-purple-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-blue-400/30 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 border-2 border-pink-400/30 rotate-45 animate-spin-reverse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Enhanced Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm animate-pulse">
                  <span className="text-cyan-400 text-sm font-medium flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    AI-Powered Sales Revolution
                    <Rocket className="w-4 h-4 ml-2 animate-bounce" />
                  </span>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white animate-fade-in-up">Real-time Sales</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>
                    {words[currentWord]}
                  </span>
                </span>
                <br />
                <span className="text-white">Powered by </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  <span className="inline-block animate-pulse">AI</span>
                  <span className="inline-block animate-bounce ml-2">.</span>
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Transform every sales conversation with{' '}
                <span className="text-cyan-400 font-semibold animate-pulse">AI-powered insights</span>, 
                real-time guidance, and automated CRM updates that help your team close more deals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.6s' }}>
              <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transform hover:scale-110 hover:rotate-1 transition-all duration-300 shadow-2xl shadow-cyan-500/25 animate-pulse">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Rocket className="w-5 h-5 group-hover:animate-spin" />
                  <span>Get a Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-125 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Button particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        left: `${10 + (i * 7)}%`,
                        top: `${20 + (i * 5)}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </button>
              
              <button className="group border-2 border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2 hover:scale-105 hover:rotate-1 hover:border-cyan-400">
                <Play className="w-5 h-5 group-hover:scale-125 group-hover:animate-spin transition-transform duration-300" />
                <span>Watch Video</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center space-x-2 text-gray-400 group hover:text-green-400 transition-colors duration-300">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <span className="group-hover:font-semibold transition-all duration-300">Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 group hover:text-cyan-400 transition-colors duration-300">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <span className="group-hover:font-semibold transition-all duration-300">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 group hover:text-purple-400 transition-colors duration-300">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <span className="group-hover:font-semibold transition-all duration-300">Setup in minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Futuristic Illustration */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px]">
              {/* Central AI Core with enhanced animations */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 animate-pulse">
                    <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center animate-spin-slow">
                      <Brain className="w-10 h-10 text-cyan-400 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Enhanced Rotating Rings */}
                  <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute -inset-4 border border-purple-500/20 rounded-full animate-spin-reverse"></div>
                  <div className="absolute -inset-8 border border-blue-500/10 rounded-full animate-spin-slow"></div>
                  <div className="absolute -inset-12 border border-pink-500/5 rounded-full animate-spin-reverse"></div>
                  
                  {/* Orbiting particles */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute -top-2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="absolute top-1/2 -left-2 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute top-8 right-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30 animate-float shadow-lg shadow-cyan-500/25 group hover:scale-110 transition-transform duration-300">
                <Bot className="w-8 h-8 text-cyan-400 group-hover:animate-spin" />
                <div className="text-xs text-cyan-400 mt-2 font-medium animate-pulse">AI Assistant</div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute top-1/3 left-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30 animate-float-delayed shadow-lg shadow-purple-500/25 group hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-purple-400 group-hover:animate-bounce" />
                <div className="text-xs text-purple-400 mt-2 font-medium animate-pulse">Analytics</div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute bottom-8 right-1/3 bg-gradient-to-br from-green-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30 animate-float shadow-lg shadow-green-500/25 group hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-green-400 group-hover:animate-pulse" />
                <div className="text-xs text-green-400 mt-2 font-medium animate-pulse">Real-time</div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute bottom-1/4 left-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30 animate-float-delayed shadow-lg shadow-orange-500/25 group hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-orange-400 group-hover:animate-spin" />
                <div className="text-xs text-orange-400 mt-2 font-medium animate-pulse">Insights</div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute top-16 left-1/3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-4 border border-indigo-500/30 animate-float shadow-lg shadow-indigo-500/25 group hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-indigo-400 group-hover:animate-bounce" />
                <div className="text-xs text-indigo-400 mt-2 font-medium animate-pulse">Targeting</div>
              </div>

              <div className="absolute bottom-16 left-1/4 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-4 border border-pink-500/30 animate-float-delayed shadow-lg shadow-pink-500/25 group hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-pink-400 group-hover:animate-pulse" />
                <div className="text-xs text-pink-400 mt-2 font-medium animate-pulse">Security</div>
              </div>

              {/* Enhanced Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="line-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path
                  d="M 80 120 Q 200 80 320 120"
                  stroke="url(#line-gradient-1)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M 80 280 Q 200 320 320 280"
                  stroke="url(#line-gradient-2)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
                <path
                  d="M 120 80 Q 200 200 120 320"
                  stroke="url(#line-gradient-1)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: '2s' }}
                />
                <path
                  d="M 280 80 Q 200 200 280 320"
                  stroke="url(#line-gradient-2)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: '3s' }}
                />
                <path
                  d="M 160 160 Q 200 120 240 160"
                  stroke="url(#line-gradient-3)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: '1.5s' }}
                />
                <path
                  d="M 160 240 Q 200 280 240 240"
                  stroke="url(#line-gradient-3)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: '2.5s' }}
                />
              </svg>

              {/* Enhanced Data Streams */}
              <div className="absolute inset-0">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-12 bg-gradient-to-t from-transparent via-cyan-400 to-transparent animate-data-stream opacity-60"
                    style={{
                      left: `${15 + (i * 5)}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2 + Math.random()}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Floating energy orbs */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-float opacity-70 blur-sm"
                    style={{
                      left: `${20 + (i * 10)}%`,
                      top: `${20 + (i * 8)}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-float-delayed"></div>
      
      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-gradient-x"></div>
    </section>
  );
};

export default Hero;
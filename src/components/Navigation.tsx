import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Sparkles, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why AI SALES', href: '#why', hasDropdown: true },
    { name: 'How It Works', href: '#how', hasDropdown: false },
    { name: 'Use Cases', href: '#cases', hasDropdown: true },
    { name: 'Resources', href: '#resources', hasDropdown: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-75 will-change-transform ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{ transform: 'translateZ(0)' }}
    >
      {/* Animated Background Particles - Optimized */}
      <div className="absolute inset-0 overflow-hidden" style={{ transform: 'translateZ(0)' }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse opacity-30"
            style={{
              left: `${(i * 12) % 100}%`,
              top: `${(i * 15) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `2s`,
              transform: 'translateZ(0)',
              willChange: 'transform, opacity'
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
        <div className="flex justify-between items-center py-4" style={{ transform: 'translateZ(0)' }}>
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-75 shadow-2xl shadow-cyan-500/25" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
                <Zap className="w-7 h-7 text-white" style={{ transform: 'translateZ(0)' }} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-75" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}></div>
              
              {/* Optimized orbiting particles */}
              <div className="absolute inset-0 animate-spin-slow" style={{ transform: 'translateZ(0)' }}>
                <div className="absolute -top-1 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
              </div>
              <div className="absolute inset-0 animate-spin-reverse" style={{ transform: 'translateZ(0)' }}>
                <div className="absolute top-1/2 -right-1 w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-2xl font-bold transition-colors duration-75 ${
                scrolled 
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
                AI SALES
              </span>
              <Sparkles className={`w-5 h-5 transition-colors duration-75 ${
                scrolled ? 'text-cyan-500' : 'text-cyan-400'
              }`} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" style={{ transform: 'translateZ(0)' }}>
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative group" style={{ transform: 'translateZ(0)' }}>
                <a
                  href={link.href}
                  className={`flex items-center space-x-1 font-medium transition-colors duration-50 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-cyan-600' 
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                  style={{ transform: 'translateZ(0)', willChange: 'color' }}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-100" />
                  )}
                </a>
                
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-150 rounded-full" style={{ transform: 'translateZ(0)', willChange: 'width' }}></div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100 blur-xl -z-10" style={{ transform: 'translateZ(0)', willChange: 'opacity' }}></div>
              </div>
            ))}
            
            <a
              href="#login"
              className={`font-medium transition-colors duration-50 ${
                scrolled 
                  ? 'text-gray-700 hover:text-purple-600' 
                  : 'text-gray-300 hover:text-purple-400'
              }`}
              style={{ transform: 'translateZ(0)', willChange: 'color' }}
            >
              Log in
            </a>
            
            <button 
              className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-transform duration-75 shadow-xl shadow-cyan-500/20"
              style={{ transform: 'translateZ(0)', willChange: 'transform' }}
            >
              <span className="relative z-10 flex items-center space-x-2" style={{ transform: 'translateZ(0)' }}>
                <span>Get a Demo</span>
                <Sparkles 
                  className="w-4 h-4 group-hover:rotate-45 transition-transform duration-75" 
                  style={{ transform: 'translateZ(0)' }}
                />
              </span>
              <div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-75"
                style={{ transform: 'translateZ(0)', willChange: 'opacity' }}
              ></div>
              <div 
                className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-150"
                style={{ transform: 'translateZ(0) -skew-x-12 -translate-x-full', willChange: 'transform' }}
              ></div>
              
              {/* Button particles */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-75"
                style={{ transform: 'translateZ(0)', willChange: 'opacity' }}
              >
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${20 + (i * 20)}%`,
                      top: `${30 + (i * 10)}%`,
                      transform: 'translateZ(0)'
                    }}
                  ></div>
                ))}
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" style={{ transform: 'translateZ(0)' }}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors duration-50 ${
                scrolled 
                  ? 'text-gray-700 hover:bg-cyan-50' 
                  : 'text-white hover:bg-white/10'
              }`}
              style={{ transform: 'translateZ(0)', willChange: 'background-color' }}
            >
              {isOpen ? (
                <X className="w-6 h-6" style={{ transform: 'translateZ(0)' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ transform: 'translateZ(0)' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-transform duration-100 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ transform: 'translateZ(0)', willChange: 'transform, opacity' }}
        >
          <div 
            className="py-4 space-y-4 bg-white/95 backdrop-blur-xl rounded-2xl mt-4 border border-cyan-100 shadow-2xl"
            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-3 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors duration-50 font-medium"
                style={{ transform: 'translateZ(0)', willChange: 'color, background-color' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#login"
              className="block px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-50 font-medium"
              style={{ transform: 'translateZ(0)', willChange: 'color, background-color' }}
              onClick={() => setIsOpen(false)}
            >
              Log in
            </a>
            <div className="px-6">
              <button 
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-transform duration-75 shadow-lg"
                style={{ transform: 'translateZ(0)', willChange: 'transform' }}
              >
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      ></div>
    </nav>
  );
};

export default Navigation;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-cyan-500/25">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
                AI SALES
              </span>
              <Sparkles className={`w-5 h-5 transition-colors duration-300 ${
                scrolled ? 'text-cyan-500' : 'text-cyan-400'
              }`} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-cyan-600' 
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </a>
                
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
              </div>
            ))}
            
            <a
              href="#login"
              className={`font-medium transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-purple-600' 
                  : 'text-gray-300 hover:text-purple-400'
              }`}
            >
              Log in
            </a>
            
            <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-xl shadow-cyan-500/20">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get a Demo</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:bg-cyan-50' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-xl rounded-2xl mt-4 border border-cyan-100 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-3 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#login"
              className="block px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Log in
            </a>
            <div className="px-6">
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-transform duration-300 shadow-lg">
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
    </nav>
  );
};

export default Navigation;
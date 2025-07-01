import React from 'react';
import { Zap, Twitter, Linkedin, Github, Mail, Sparkles, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const productLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'API', href: '#api' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const companyLinks = [
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' },
    { name: 'Contact', href: '#contact' },
  ];

  const resourceLinks = [
    { name: 'Blog', href: '#blog' },
    { name: 'Documentation', href: '#docs' },
    { name: 'Help Center', href: '#help' },
    { name: 'Community', href: '#community' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#twitter', color: 'hover:text-cyan-500' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, href: '#github', color: 'hover:text-purple-500' },
    { name: 'Email', icon: Mail, href: '#email', color: 'hover:text-pink-500' },
  ];

  return (
    <footer className="bg-white text-gray-700 relative overflow-hidden border-t border-gray-200">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/25">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI SALES
              </span>
              <Sparkles className="w-5 h-5 text-cyan-500 animate-pulse" />
            </div>
            
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed text-lg">
              Transform your sales process with AI-powered conversation intelligence 
              and real-time guidance that helps teams close more deals.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`group w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border-2 border-gray-200 hover:border-cyan-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:rotate-3 ${social.color} shadow-lg hover:shadow-xl`}
                >
                  <social.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-125" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 text-lg flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 animate-pulse"></div>
              Product
            </h3>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-cyan-600 hover:font-semibold transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 text-lg flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3 animate-pulse"></div>
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 hover:font-semibold transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6 text-lg flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full mr-3 animate-pulse"></div>
              Resources
            </h3>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 hover:font-semibold transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-500 text-sm mb-4 md:mb-0">
              <span>© 2025 Aircover. All rights reserved.</span>
              
            </div>
            <div className="flex space-x-8 text-sm">
              <a href="#privacy" className="text-gray-500 hover:text-cyan-600 hover:font-semibold transition-all duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-500 hover:text-purple-600 hover:font-semibold transition-all duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-500 hover:text-green-600 hover:font-semibold transition-all duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
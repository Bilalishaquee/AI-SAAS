import React from 'react';
import { Brain, Phone, Database, BarChart3, MessageSquare, Target, Sparkles, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get real-time conversation analysis and actionable insights powered by advanced AI algorithms that understand sales context and predict outcomes.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-cyan-400 to-blue-500',
      glowColor: 'shadow-cyan-500/25'
    },
    {
      icon: Phone,
      title: 'Real-time Call Intelligence',
      description: 'Receive live coaching, objection handling suggestions, and next-best-action recommendations during every sales call with instant AI feedback.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-purple-400 to-pink-500',
      glowColor: 'shadow-purple-500/25'
    },
    {
      icon: Database,
      title: 'Seamless CRM Integration',
      description: 'Automatically sync call data, update opportunities, and maintain perfect CRM hygiene without manual data entry using intelligent automation.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-green-400 to-cyan-500',
      glowColor: 'shadow-green-500/25'
    }
  ];

  return (
    <section id="why" className="py-20 bg-white relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-cyan-500" />
            <span className="text-cyan-600 font-medium">Revolutionary Technology</span>
            <Sparkles className="w-6 h-6 text-purple-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Supercharge Your Sales Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform every conversation into a learning opportunity with AI that understands 
            your business and helps your team perform at their best.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-2xl ${feature.glowColor} transform hover:rotate-12 hover:scale-110 transition-all duration-500`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">{feature.title}</h3>
                    <div className={`w-20 h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className={`px-4 py-2 bg-gradient-to-r ${feature.color} bg-opacity-10 text-cyan-700 text-sm font-medium rounded-full border border-cyan-200 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                    Real-time
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 text-sm font-medium rounded-full border border-purple-200 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    AI-powered
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 text-green-700 text-sm font-medium rounded-full border border-green-200 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                    Automated
                  </span>
                </div>

                <button className={`group bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg ${feature.glowColor} flex items-center space-x-2 hover:shadow-2xl`}>
                  <span>Learn More</span>
                  <Zap className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-all duration-500 opacity-20 blur-xl`}></div>
                  
                  <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                    
                    {/* Floating Icon */}
                    <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-2xl ${feature.glowColor}`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-32">
          <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200 overflow-hidden shadow-2xl">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="group">
                <div className="text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500">
                  40%
                </div>
                <div className="text-gray-700 text-lg font-medium">Increase in close rate</div>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mt-2"></div>
              </div>
              <div className="group">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500">
                  60%
                </div>
                <div className="text-gray-700 text-lg font-medium">Reduction in admin time</div>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-2"></div>
              </div>
              <div className="group">
                <div className="text-6xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500">
                  25%
                </div>
                <div className="text-gray-700 text-lg font-medium">Faster deal velocity</div>
                <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
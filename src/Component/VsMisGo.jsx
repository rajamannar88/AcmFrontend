import React from 'react';
import { Eye, Target, Trophy } from 'lucide-react';

const VsMisGo = () => {
  const items = [
    {
      id: 'vision',
      title: 'Vision',
      icon: <Eye className="w-12 h-12 text-blue-900" />,
      description: "To inspire creativity and innovation among students, cultivating the next generation of tech leaders who push the boundaries of computing.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 'mission', 
      title: 'Mission',
      icon: <Target className="w-12 h-12 text-emerald-900" />,
      description: "To empower members with hands-on experiences and technical skills through coding competitions, hackathons, and collaborative projects.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 'goal',
      title: 'Goals',
      icon: <Trophy className="w-12 h-12 text-amber-900" />,
      description: "Organize hackathons and coding competitions to enhance problem-solving skills. Offer study groups or coding sessions for challenging coursework.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="vision-mission-goals" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Our Vision, Mission & Goals
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Floating Icon Background */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full group-hover:scale-110 transition-transform duration-500`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                {/* Icon Container */}
                <div className={`p-4 rounded-full bg-gradient-to-br ${item.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Decorative Bottom Line */}
                <div className={`w-16 h-1 bg-gradient-to-r ${item.gradient} rounded-full group-hover:w-20 transition-all duration-300`}></div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <span className="text-gray-600 font-medium">Driving Innovation Together</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default VsMisGo;
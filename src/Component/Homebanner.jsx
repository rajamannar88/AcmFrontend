import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Users, Code, Zap, Star, Rocket, Brain } from 'lucide-react';
import clgpic from '../assets/CLG_PIC2.jpg'
import { Link } from 'react-router-dom';

const Homebanner = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  
  const greetings = [
    { text: "WELCOME TO INNOVATION", icon: Rocket, color: "text-yellow-400" },
    { text: "JOIN THE FUTURE", icon: Brain, color: "text-pink-400" },
    { text: "CODE YOUR DREAMS", icon: Star, color: "text-green-400" },
    { text: "SHAPE TOMORROW", icon: Sparkles, color: "text-blue-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = greetings[currentGreeting].icon;

  return (
    <div 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `url(${clgpic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute w-24 h-24 md:w-32 md:h-32 border border-white border-opacity-20 rotate-45 top-20 left-4 md:left-10 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-8 h-8 md:w-10 md:h-10 bg-sky-200 bg-opacity-15 rounded-full top-32 right-10 md:right-20 animate-float-reverse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-16 h-16 md:w-24 md:h-24 border-2 border-yellow-400 border-opacity-30 rounded-full top-3/4 left-8 md:left-16 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Triangular shapes */}
        <div className="absolute top-1/2 right-16 md:right-32 animate-rotate-slow" style={{ animationDelay: '3s' }}>
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 md:border-l-12 md:border-r-12 md:border-b-20 border-l-transparent border-r-transparent border-b-white opacity-10"></div>
        </div>
        
        {/* Hexagonal shapes */}
        <div className="absolute bottom-40 right-6 md:right-10 animate-float-reverse" style={{ animationDelay: '1.5s' }}>
          <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-10 transform rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        </div>
        
        {/* Moving dots - optimized for mobile */}
        <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-white bg-opacity-40 rounded-full top-1/3 left-1/4 animate-ping" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 bg-opacity-60 rounded-full top-2/3 right-1/3 animate-ping" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-blue-300 bg-opacity-30 rounded-full bottom-1/4 left-1/3 animate-ping" style={{ animationDelay: '3.2s' }}></div>
        
        {/* Right-side dots */}
        <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-pink-400 bg-opacity-40 rounded-full top-1/4 right-1/5 animate-ping" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-green-300 bg-opacity-60 rounded-full bottom-1/3 right-1/4 animate-ping" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-purple-300 bg-opacity-30 rounded-full top-3/4 right-1/6 animate-ping" style={{ animationDelay: '3.5s' }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-purple-400 to-blue-500 opacity-5 rounded-full top-10 right-0 animate-float-slow filter blur-sm" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-24 h-24 md:w-48 md:h-48 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-8 rounded-full bottom-20 left-0 animate-float-slow filter blur-sm" style={{ animationDelay: '2.8s' }}></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-1/2 w-16 h-0.5 md:w-32 md:h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-0.5 md:w-24 md:h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30 animate-pulse transform rotate-45" style={{ animationDelay: '2.1s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">
        
        {/* Innovative Dynamic Welcome Badge - Fixed positioning and spacing */}
        <div className="relative mb-8 md:mb-12 lg:mb-16">
          <div 
            key={currentGreeting}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg border border-white/30 rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-2xl animate-slideDown"
          >
            <div className="relative">
              <CurrentIcon 
                className={`w-4 h-4 md:w-5 md:h-5 ${greetings[currentGreeting].color} animate-pulse`} 
              />
              <div className={`absolute inset-0 ${greetings[currentGreeting].color.replace('text-', 'bg-')} opacity-20 rounded-full animate-ping`}></div>
            </div>
            <span className="text-white font-bold text-xs md:text-sm lg:text-base tracking-wider drop-shadow-lg uppercase">
              {greetings[currentGreeting].text}
            </span>
            <div className="flex gap-1">
              {greetings.map((_, index) => (
                <div 
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentGreeting ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Heading - Improved spacing and responsive scaling */}
        <h1 className="font-bold mb-6 md:mb-8 lg:mb-10 leading-tight animate-slideUp">
          <span className="block text-white drop-shadow-2xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl" style={{ 
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)' 
          }}>
            NPRCET ACM
          </span>
          <span className="block text-blue-100 mt-2 md:mt-3 lg:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl" style={{ 
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(59,130,246,0.4)' 
          }}>
            Student Chapter
          </span>
        </h1>

        {/* Subtitle - Better spacing */}
        <div className="relative mb-8 md:mb-10 lg:mb-12">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-3xl mx-auto leading-relaxed animate-fadeIn font-medium px-2" style={{ 
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)' 
          }}>
            <span className="inline-block animate-typewriter">Collaborate, </span>
            <span className="inline-block animate-typewriter" style={{ animationDelay: '0.5s' }}>innovate, </span>
            <span className="inline-block animate-typewriter" style={{ animationDelay: '1s' }}>and lead in computing</span>
          </p>
        </div>

        {/* Feature Cards - Mobile Responsive */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-10 lg:mb-12 animate-fadeInUp px-2">
          <div className="bg-gradient-to-r from-sky-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 border border-white/30 hover:border-white/50 hover:bg-sky-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex items-center gap-2 text-white">
              <Users className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium text-sm md:text-base">Community</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 border border-white/30 hover:border-white/50 hover:bg-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex items-center gap-2 text-white">
              <Code className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium text-sm md:text-base">Innovation</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 border border-white/30 hover:border-white/50 hover:bg-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex items-center gap-2 text-white">
              <Zap className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium text-sm md:text-base">Excellence</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-4 justify-center mb-8 md:mb-12 animate-fadeInUp px-4" style={{ animationDelay: '0.8s' }}>
<button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="relative group border-2 bg-gradient-to-r from-sky-500 to-blue-600 border-white/50 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base overflow-hidden"
>
  <span className="relative z-10">Join Our Community</span>
  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</button>
          <button className="relative group border-2 bg-gradient-to-r from-purple-500 to-pink-600 border-white/50 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base overflow-hidden">
            <Link to={'./events'}  className="relative z-10">Explore Events</Link>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-2/9 animate-bounce">
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white opacity-70" />
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typewriter {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(15px) translateX(10px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.05);
          }
        }

        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-slideDown {
          animation: slideDown 1s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 1.2s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animate-typewriter {
          animation: typewriter 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        /* Enhanced responsive design for zoom levels */
        @media (min-width: 1024px) {
          .relative.z-10.max-w-6xl {
            transform: scale(1);
            transform-origin: center;
          }
        }

        /* Specific adjustments for 80% zoom scenarios */
        @media (min-width: 1200px) and (max-width: 1600px) {
          .mb-8.md\\:mb-12.lg\\:mb-16 {
            margin-bottom: 4rem !important;
          }
          
          .mb-6.md\\:mb-8.lg\\:mb-10 {
            margin-bottom: 3rem !important;
          }
        }

        /* Mobile-specific responsive adjustments */
        @media (max-width: 640px) {
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          .animate-float-reverse {
            animation: float-reverse 5s ease-in-out infinite;
          }
        }

        /* Ensure proper spacing at all zoom levels */
        @media (min-width: 768px) {
          .relative.mb-8.md\\:mb-12.lg\\:mb-16 {
            margin-bottom: clamp(2rem, 8vw, 4rem);
          }
        }
      `}</style>
    </div>
  );
};

export default Homebanner;
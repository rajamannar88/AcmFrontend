import React, { useState, useEffect } from 'react';
import vir from '../assets/virtual-lab.png'
import CSE from '../assets/CSE.jpeg'
import ECE from '../assets/ECE.jpg'
import EEE from '../assets/EEE.jpg'
import Mech from '../assets/Mech.jpeg'
import Phy from '../assets/physical-sci.jpeg'
import Civil from '../assets/Civil.jpeg'


import Navbar from './Navbar';

const VirtualLab = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particles, setParticles] = useState([]);

  // Generate floating particles for background
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    setParticles(newParticles);
  }, []);

  const engineeringFields = [
    {
      title: "Computer Science and Engineering",
      subtitle: "AI • Software • Algorithms",
      image:CSE,
      link: "https://xmind.ai/embed/YpnIxyu5?sheet-id=b6a2b210-e0a2-4ce9-a062-bc4387716f33",
      gradient: "from-blue-600 via-purple-600 to-cyan-500",
      
    },
    {
      title: "Electronics and Communication Engineering",
      subtitle: "IoT • Networks • Signals",
      image:ECE,
      link: "https://xmind.ai/embed/YCNwQuh3?sheet-id=a34d7a6d-c43e-4e19-ac74-b42e8dadaa63",
      gradient: "from-purple-600 via-pink-600 to-rose-500",
      
    },
    {
      title: "Electrical and Electronics Engineering",
      subtitle: "Power • Control • Automation",
      image: EEE,
      link: "https://xmind.ai/embed/IRU3Rd0R?sheet-id=b6a2b210-e0a2-4ce9-a062-bc4387716f33",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
    },
    {
      title: "Mechanical Engineering",
      subtitle: "Robotics • Design • Manufacturing",
      image: Mech,
      link: "https://xmind.ai/embed/z2OoVi42?sheet-id=b6a2b210-e0a2-4ce9-a062-bc4387716f33",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
    },
    {
      title: "Civil Engineering",
      subtitle: "Infrastructure • Smart Cities • Sustainability",
      image: Civil,
      link: "https://xmind.ai/embed/z2OoVi42?sheet-id=e5791cd0-2f5b-4842-a197-dbe306fd4b0b",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
     },
    {
      title: "Physical Sciences",
      subtitle: "Quantum • Materials • Research",
      image: Phy,
      link: "https://xmind.ai/embed/czf1OAPa?sheet-id=b6a2b210-e0a2-4ce9-a062-bc4387716f33",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
     }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden mt-13">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.1}s`,
              transform: `scale(${particle.size})`
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center pt-16 pb-8">
          <div className="inline-block">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
              Virtual Lab
            </h1>
            <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto w-32 animate-pulse"></div>
          </div>
          <p className="text-cyan-200 text-xl mt-6 font-light tracking-wide">
            Explore the Future of Engineering
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="flex justify-center mb-16 px-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img 
              src={vir} 
              alt="Virtual Lab Header" 
              className="relative h-64 md:h-80 w-auto object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {engineeringFields.map((field, index) => (
              <div 
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glowing Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${field.gradient} rounded-2xl blur opacity-30 group-hover:opacity-75 transition-all duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 transform transition-all duration-500 group-hover:scale-105 group-hover:bg-slate-800/95">
                  {/* Card Image with Overlay */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={field.image}
                      alt={`${field.title} visualization`}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${field.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 text-4xl transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                      {field.icon}
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-white font-bold text-xl mb-2 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                      {field.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 font-light tracking-wide">
                      {field.subtitle}
                    </p>
                    
                    {/* Explore Button */}
                    <div className="relative">
                      <a 
                        href={field.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white 
                          bg-gradient-to-r ${field.gradient} 
                          transform transition-all duration-300 
                          hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25
                          active:scale-95 group-hover:animate-pulse
                        `}
                      >
                        <span className="mr-2">Explore</span>
                        <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${field.gradient} transform transition-transform duration-1000 ${hoveredCard === index ? 'translate-x-0' : '-translate-x-full'}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center pb-12">
          <div className="inline-flex items-center space-x-2 text-slate-400">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <span className="text-sm font-light tracking-widest">INNOVATE • CREATE • DISCOVER</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VirtualLab;
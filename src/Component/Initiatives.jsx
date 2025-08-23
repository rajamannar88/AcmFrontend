import { useState, useEffect } from 'react';
import { ExternalLink, Calendar, Users, Rocket, Star, Globe, Telescope } from 'lucide-react';

const Initiatives = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const backgroundStars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2
  }));

  return (
    <div className="mt-10 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundStars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Rocket className="absolute top-20 left-10 w-6 h-6 text-blue-400 opacity-20 animate-bounce" style={{ animationDelay: '0s' }} />
        <Star className="absolute top-40 right-20 w-4 h-4 text-yellow-400 opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <Globe className="absolute bottom-40 left-20 w-5 h-5 text-green-400 opacity-25 animate-spin" style={{ animationDuration: '8s' }} />
        <Telescope className="absolute bottom-20 right-10 w-6 h-6 text-purple-400 opacity-20 animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      <section className="relative z-10">
        <div className="container mx-auto px-4 py-16 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Content Section */}
            <div 
              className={`flex-1 lg:pr-8 transition-all duration-1000 ${
                isVisible 
                  ? 'translate-x-0 opacity-100' 
                  : '-translate-x-full opacity-0'
              }`}
            >
              <div className="relative">
                {/* Decorative gradient behind title */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-3xl"></div>
                
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold  bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      NPRCET "Space and Astronomy Club"
                    </h1>
                  </div>
                  
                  <p className="text-lg text-gray-200 leading-relaxed mb-8 font-light">
                    To inspire students to pursue knowledge in astronomy and space sciences by facilitating educational events, practical experiments, and engagement with national space initiatives, thereby strengthening STEM culture under the NPRCET ACM Student Chapter.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://drive.google.com/file/d/1dliRsSJ55cL0JzXA327vHupet7mcaaZY/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-purple-600 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                    >
                      <Users className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                      Explore Our Team Members
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a 
                      href="https://drive.google.com/file/d/1cgZTj1QZhBQryNEwX0l6owilUOPJ9_ws/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-indigo-600 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
                    >
                      <Calendar className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                      <div className="text-left">
                        <div>Annual Course Calendar</div>
                        <div className="text-sm opacity-90">IIRS Distance Learning Programme–2025</div>
                      </div>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Section */}
            <div 
              className={`flex-1 transition-all duration-1200 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-full opacity-0'
              }`}
            >
              <div className="relative group">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                    alt="Space and Astronomy" 
                    className="w-full max-w-lg h-80 lg:h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay with floating elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
                  
                  {/* Floating badges */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20">
                    🚀 Space Club
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20">
                    ⭐ STEM Education
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Interactive Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-white/30 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
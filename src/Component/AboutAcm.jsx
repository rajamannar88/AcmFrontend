import React from 'react';
import event1 from '../assets/evt1.jpg'
import event2 from '../assets/evt2.jpg'
import event3 from '../assets/evt3.jpg'
import event4 from '../assets/evt4.jpg'


const AboutAcm = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4">
            About{' '}
            <span className="text-blue-800 block md:inline">NPRCET ACM</span>
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-lg leading-relaxed text-justify">
                ACM at NPR College of Engineering and Technology is focused on fostering creativity and innovation, with the vision of developing future tech leaders who will redefine the boundaries of computing. Our mission is to provide members with opportunities to gain practical skills through immersive experiences such as coding competitions, hackathons, and collaborative projects.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-justify">
                To achieve this, ACM at NPRCET actively organizes events that challenge students to sharpen their problem-solving skills. Additionally, we offer study groups and coding sessions to help members navigate difficult coursework, ensuring they are equipped to succeed in the fast-evolving tech landscape.
              </p>
            </div>
          </div>

          {/* Right Side - Event Images Collage */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Main large image */}
              <div className="absolute top-0 left-0 w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-xl transform rotate-3 hover:rotate-6 transition-transform duration-300 overflow-hidden">
                <img 
                  src={event1}
                  alt="ACM Coding Competition" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg" style={{display: 'none'}}>
                  Coding Contest
                </div>
              </div>
              
              {/* Top right image */}
              <div className="absolute top-4 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-300 overflow-hidden">
                <img 
                  src={event2} 
                  alt="ACM Hackathon" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm" style={{display: 'none'}}>
                  Hackathon
                </div>
              </div>
              
              {/* Bottom right image */}
              <div className="absolute bottom-0 right-4 w-36 h-24 md:w-44 md:h-28 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl shadow-lg transform rotate-6 hover:rotate-12 transition-transform duration-300 overflow-hidden">
                <img 
                  src={event3} 
                  alt="ACM Workshop" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-green-600 flex items-center justify-center text-white font-bold text-sm" style={{display: 'none'}}>
                  Workshop
                </div>
              </div>
              
              {/* Center ACM logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-blue-200">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">ACM</div>
                  <div className="text-xs text-blue-800">NPRCET</div>
                </div>
              </div>
              
              {/* Bottom left small image */}
              <div className="absolute bottom-0  w-36 h-24 md:w-44 md:h-28 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl shadow-lg transform rotate-6 hover:rotate-12 transition-transform duration-300 overflow-hidden">
                <img 
                  src={event4} 
                  alt="ACM Workshop" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-green-600 flex items-center justify-center text-white font-bold text-sm" style={{display: 'none'}}>
                  Workshop
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-2 left-16 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 -right-2 w-4 h-4 bg-purple-300 rounded-full animate-bounce"></div>
              <div className="absolute top-20 -left-3 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute top-32 right-8 w-3 h-3 bg-orange-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutAcm;
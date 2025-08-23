import React from 'react';
import event1 from '../assets/evt1.jpg'
import event2 from '../assets/evt2.jpg'
import event3 from '../assets/evt3.jpg'
import event4 from '../assets/acminaug.jpg'
import event5 from '../assets/evt4.jpg'


const AboutAcm = () => {
  return (
    <section id='about-acm' className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-white">
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
                ACM (Association for Computing Machinery) at NPR College of Engineering and Technology is focused on fostering creativity and innovation, with the vision of developing future tech leaders who will redefine the boundaries of computing. Our mission is to provide members with opportunities to gain practical skills through immersive experiences such as coding competitions, hackathons, and collaborative projects.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-justify">
                To achieve this, ACM at NPRCET actively organizes events that challenge students to sharpen their problem-solving skills. Additionally, we offer study groups and coding sessions to help members navigate difficult coursework, ensuring they are equipped to succeed in the fast-evolving tech landscape.
              </p>
            </div>
          </div>

{/* Right Side - Event Images Collage - Improved Desktop Layout */}
<div className="order-1 lg:order-2 flex justify-center lg:justify-end">
  <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[350px]">
    {/* Main large image - Top Left */}
    <div className="absolute top-0 left-0 w-40 h-32 md:w-48 md:h-36 lg:w-52 lg:h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl transform rotate-3 hover:rotate-6 transition-transform duration-300 overflow-hidden z-20">
      <img 
        src={event3}
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
    <div className="absolute top-4 right-0 w-36 h-28 md:w-40 md:h-32 lg:w-44 lg:h-36 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg transform -rotate-12 hover:-rotate-6 transition-transform duration-300 overflow-hidden z-10">
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
    
    {/* Bottom left image */}
    <div className="absolute bottom-0 left-8 w-36 h-28 md:w-40 md:h-32 lg:w-44 lg:h-36 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl shadow-lg transform -rotate-6 hover:-rotate-3 transition-transform duration-300 overflow-hidden z-15">
      <img 
        src={event1} 
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
    
    {/* Bottom right image */}
    <div className="absolute bottom-0 right-0 w-32 h-24 md:w-36 md:h-28 lg:w-40 lg:h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg transform rotate-6 hover:rotate-12 transition-transform duration-300 overflow-hidden z-10">
      <img 
        src={event4} 
        alt="ACM Meetup" 
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="w-full h-full bg-orange-600 flex items-center justify-center text-white font-bold text-sm" style={{display: 'none'}}>
        Meetup
      </div>
    </div>
    
    {/* Center ACM logo - properly centered */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white rounded-full shadow-xl flex items-center justify-center z-30 border-4 border-blue-200 hover:scale-110 transition-transform duration-300">
      <div className="text-center">
        <div className="text-sm md:text-base lg:text-lg font-bold text-blue-600">ACM</div>
        <div className="text-xs md:text-xs lg:text-sm text-blue-800">NPRCET</div>
      </div>
    </div>
    
    {/* Floating decorative elements - repositioned for desktop */}
    <div className="absolute top-4 left-1/5 w-3 h-3 bg-blue-300 rounded-full animate-pulse z-40"></div>
    <div className="absolute bottom-8 right-1/4 w-4 h-4 bg-purple-300 rounded-full animate-bounce z-40"></div>
    <div className="absolute top-2 right-8 w-2 h-2 bg-green-400 rounded-full animate-ping z-40"></div>
    <div className="absolute bottom-16 left-4 w-3 h-3 bg-orange-300 rounded-full animate-pulse z-40"></div>
    <div className="absolute top-1/3 right-2 w-2 h-2 bg-pink-400 rounded-full animate-pulse z-40"></div>
  </div>
</div>
        </div>


      </div>
    </section>
  );
};

export default AboutAcm;
import React from 'react';
import { Award, Users, Building, Calendar } from 'lucide-react';
import abtpic from '../assets/new-abt.jpg'

const AboutNprcet = () => {
  return (
    <section id="abt-section" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-100 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-blue-300 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-blue-500" style={{ fontFamily: 'Anton SC, sans-serif' }}>
              ABOUT
            </span>
            <span className="block md:inline md:ml-4 text-3xl md:text-4xl lg:text-5xl text-blue-800" style={{ fontFamily: 'Anton SC, sans-serif' }}>
              NPRCET
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-800 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img 
                src={abtpic} 
                alt="NPRCET Campus" 
                // className="w-full h-200 md:h-96 object-cover"
               className="w-full h-80 md:h-96 object-cover"

              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border-l-4 border-blue-500 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-500" />
                <div>
                  <p className="text-sm font-bold text-gray-800">NAAC A Grade</p>
                  <p className="text-xs text-gray-600">3.25 CGPA</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border-l-4 border-green-500 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <Building className="w-6 h-6 text-green-500" />
                <div>
                  <p className="text-sm font-bold text-gray-800">Autonomous</p>
                  <p className="text-xs text-gray-600">Since 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed text-lg font-medium mb-6" style={{ fontFamily: 'Inria Sans, serif' }}>
                NPR College Of Engineering And Technology is one of the premier institutions in South Tamil Nadu situated near Natham in the Dindigul District.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Inria Sans, serif' }}>
                The institution was established in <strong className="text-blue-600">2008</strong> by Titan Educational Trust with an exalted aim of uplifting the rural students to excel in the field of Engineering and Technology.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Inria Sans, serif' }}>
                It is approved by <strong className="text-blue-600">AICTE</strong> and affiliated to <strong className="text-blue-600">Anna University, Chennai</strong>. The institution was accredited by <strong className="text-green-600">NAAC with A Grade and 3.25 CGPA in 2021</strong> and received <strong className="text-purple-600">Autonomous status in 2023</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inria Sans, serif' }}>
                <strong className="text-blue-600">CSE, EEE, ECE, and Mechanical Engineering</strong> programmes were accredited with NBA. The institution encompasses a lush green environment with lawns and gardens in pristine surroundings conducive to learning.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <Calendar className="w-6 h-6 mx-auto mb-2" />
                <p className="text-2xl font-bold">2008</p>
                <p className="text-xs opacity-90">Established</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <Award className="w-6 h-6 mx-auto mb-2" />
                <p className="text-2xl font-bold">A</p>
                <p className="text-xs opacity-90">NAAC Grade</p>
              </div>

              {/* <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <Building className="w-6 h-6 mx-auto mb-2" />
                <p className="text-lg font-bold">Auto</p>
                <p className="text-xs opacity-90">Status 2023</p>
              </div> */}

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <Users className="w-6 h-6 mx-auto mb-2" />
                <p className="text-lg font-bold">NBA</p>
                <p className="text-xs opacity-90">Accredited</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800"></div>
    </section>
  );
};

export default AboutNprcet;
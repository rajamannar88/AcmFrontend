import React, { useState, useEffect } from 'react';
import { ExternalLink, Award, Star } from 'lucide-react';
import cqr from '../sponsors/2cqr(2).jpg'
import drill from '../sponsors/DrillBit.jpg'
import jove from '../sponsors/Jove.png'
import infli from '../sponsors/inflibnet_logo.jpg'
import infed from '../sponsors/infed_logo.png'
import knimbus from '../sponsors/knimbus1.jpg'
import gist from '../sponsors/gist.jpg'
import matics from '../sponsors/Informatics-Logo2.png'
import ely from '../sponsors/elysium-crp.png'
import etech from '../sponsors/etech-1.png'
import ebsco from '../sponsors/ebsco2.jpg'
import media from '../sponsors/new-media-partner.png'

const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('sponsors-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const sponsors = [
    { name: '2CQR', url: 'https://2cqr.in/', logo: cqr, description: 'Quality & Research Solutions' },
    { name: 'DrillBit', url: 'https://www.drillbitplagiarism.com/', logo: drill, description: 'Plagiarism Detection' },
    { name: 'JoVE', url: 'https://www.jove.com/', logo: jove, description: 'Journal of Visualized Experiments' },
    { name: 'INFLIBNET', url: 'https://www.inflibnet.ac.in/', logo: infli, description: 'Information & Library Network' },
    { name: 'INFED', url: 'https://infed.inflibnet.ac.in/', logo: infed, description: 'Educational Resources' },
    { name: 'Knimbus', url: 'https://www.knimbus.com/#/', logo: knimbus, description: 'Cloud Solutions' },
    { name: 'GIST', url: 'https://www.gist.in/product.php', logo: gist, description: 'Technology Solutions' },
    { name: 'Informatics Global', url: 'https://www.informaticsglobal.ai/', logo: matics, description: 'AI & Analytics' },
    { name: 'Elysium Academy', url: 'https://elysiumacademy.org/', logo: ely, description: 'Training & Development' },
    { name: 'Elysium Technologies', url: 'https://elysiumtechnologies.com/', logo: etech, description: 'Technology Solutions' },
    { name: 'EBSCO', url: 'https://www.ebsco.com/', logo: ebsco, description: 'Information Services' },
    { name: 'Media Partner', url: '/', logo: media, description: 'Media Partnership' }
  ];

  return (
    <section id="sponsors-section" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Sponsors
            </h2>
            <Star className="w-6 h-6 text-yellow-500 ml-3 animate-pulse" />
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're grateful to our amazing sponsors who support innovation and excellence in technology education
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Sponsors Marquee */}
        <div className="overflow-hidden relative w-full py-6">
          <div className="flex animate-marquee space-x-6">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-shrink-0 bg-white rounded-xl p-6 shadow-lg border border-gray-100 w-40 h-32 flex flex-col items-center justify-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-16 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA4MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iNjAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNNDAgMzBDNDMuMzEzNyAzMCA0NiAyNy4zMTM3IDQ2IDI0QzQ2IDIwLjY4NjMgNDMuMzEzNyAxOCA0MCAxOEMzNi42ODYzIDE4IDM0IDIwLjY4NjMgMzQgMjRDMzQgMjcuMzEzNyAzNi42ODYzIDMwIDQwIDMwWiIgZmlsbD0iIjlDQTNBRiIvPjwvc3ZnPg==';
                  }}
                />
                <span className="text-xs font-semibold text-gray-700 text-center">
                  {sponsor.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Partnership Message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Thank you for your continued support</span>
            <Star className="w-5 h-5 text-yellow-300" />
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

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 5s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Sponsors;

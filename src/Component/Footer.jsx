import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  ExternalLink,
  Heart,
  Code,
  Users,
  Calendar,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Vision & Mission', href: '#vision-mission-goals' },
    { name: 'Events', href: '#events' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'ACM Digital Library', href: 'https://dl.acm.org/', external: true },
    { name: 'Programming Contests', href: '#contests' },
    { name: 'Workshop Materials', href: '#workshops' },
    { name: 'Research Papers', href: '#research' },
    { name: 'Career Guidance', href: '#career' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <Facebook className="w-5 h-5" />, 
      href: '#',
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="w-5 h-5" />, 
      href: '#',
      color: 'hover:text-sky-500'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-5 h-5" />, 
      href: '#',
      color: 'hover:text-pink-600'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-5 h-5" />, 
      href: '#',
      color: 'hover:text-blue-700'
    },
    { 
      name: 'GitHub', 
      icon: <Github className="w-5 h-5" />, 
      href: '#',
      color: 'hover:text-gray-900'
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: '60+', label: 'Active Members' },
    { icon: <Calendar className="w-6 h-6" />, number: '10+', label: 'Events Organized' },
    // { icon: <Code className="w-6 h-6" />, number: '100+', label: 'Projects Completed' },
    { icon: <Globe className="w-6 h-6" />, number: '10+', label: 'Industry Partners' }
  ];

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Stats Section */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                  NPRCET ACM Student Chapter
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Empowering the next generation of computing professionals through innovation, 
                  collaboration, and excellence in technology education. Join us in shaping the 
                  future of computing and technology.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="mailto:nprcetacm@nprcolleges.org" className="hover:underline">
                    nprcetacm@nprcolleges.org
                  </a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="tel:+911234567891" className="hover:underline">
                    +91 73734 44449
                  </a>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                  <span>NPR College of Engineering and Technology</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-white mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 bg-white/10 rounded-full text-gray-300 ${social.color} transition-all duration-200 hover:bg-white/20 hover:scale-110`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:underline transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      target={resource.external ? "_blank" : undefined}
                      rel={resource.external ? "noopener noreferrer" : undefined}
                      className="text-gray-300 hover:text-white hover:underline transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                      {resource.name}
                      {resource.external && (
                        <ExternalLink className="w-3 h-3 ml-2 opacity-50" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center text-gray-300">
                <span>&copy; 2024 Developed with</span>
                <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
                <span>by NPRCET ACM Student Chapter</span>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Top</span>
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-white/5 text-center">
              <p className="text-gray-400 text-sm">
                Fostering innovation, collaboration, and excellence in computing education
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
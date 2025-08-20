import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import acmlogo from '../assets/acm_logo1.png'
import clglogo from '../assets/nprcet_weblogo.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/', target: '_self' },
    { name: 'Team', href: './team', target: '_blank' },
    { name: 'Events', href: './events', target: '_blank' },
    { name: 'Careers', href: './career', target: '_blank' },
    { name: 'NPRCET_Digital_Library', href: 'https://xmind.ai/share/Zd8D9dwb', target: '_blank' },
    { name: 'Division', href: 'https://xmind.ai/share/hyjY8MI8?xid=MBUWGjEX', target: '_blank' },
    { name: 'Technology_Playground', href: './Playground/playground.html', target: '_blank' },
    { name: 'ContactUs', href: '/', target: '_self', isScrollTo: true },
    { name: 'Outreach', href: './outreach', target: '_blank' },
    { name: 'Initiatives', href: './Initiatives/Initiatives.html', target: '_blank' },
  ];

  return (
    <nav className="bg-white border-b-2 border-blue-500 fixed w-full z-50 top-0 shadow-sm">
      {/* Desktop Navigation */}
      <div className="flex items-center justify-between p-2 max-w-full">
        {/* Logo Section */}
        <div className="flex items-center space-x-5 pl-5">
          <a 
            href="https://www.nprcet.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img 
              src={clglogo}
              alt="NPRCET Logo" 
              className="h-16 w-12 md:h-20 md:w-14 object-contain hover:scale-105 transition-transform duration-200"
            />
          </a>
          <div className="pointer-events-none">
            <img 
              src={acmlogo}
              alt="ACM Logo" 
              className="h-14 w-auto md:h-18 object-contain"
            />
          </div>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex items-center space-x-5 flex-wrap font-bold text-blue-500 mx-2 font-sans">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="text-xl hover:underline hover:scale-110 transition-all duration-200 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          
          {/* NEW Icon with Animation */}
          <a 
            href="./recent-events" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0 group"
          >
            <div className="relative">
              <div className="bg-blue-500 text-white px-3 py-1 my-3 rounded-full text-sm font-bold animate-pulse hover:animate-none hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-1">
                <Sparkles size={16} className="animate-spin" style={{ animationDuration: '3s' }} />
                <span>NEW</span>
              </div>
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-500 p-2 hover:bg-blue-50 rounded-md transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-white border-t border-blue-200 px-4 py-2">
          <div className="flex flex-col space-y-3 font-bold text-blue-500 font-sans">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="text-lg hover:underline hover:text-blue-600 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* NEW Item for Mobile - At Bottom */}
            <div className="border-t border-blue-100 pt-3 mt-2">
              <a 
                href="./New/new.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse flex items-center space-x-1">
                  <Sparkles size={12} className="animate-spin" style={{ animationDuration: '3s' }} />
                  <span>NEW</span>
                </div>
                <span className="text-lg font-bold">What's New</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
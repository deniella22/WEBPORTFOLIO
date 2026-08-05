import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'whoami', label: 'Who Am I' },
    { id: 'qualifications', label: 'Qualifications' },
    { id: 'education', label: 'Education & Experience' },
    { id: 'achievements', label: 'Key Achievements' },
    { id: 'aboutme', label: 'About Me & Skills' },
    { id: 'capstone', label: 'Projects & Community Work' },
    { id: 'contact', label: 'Contact & References' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-maroon-100/50' 
          : 'bg-white/90 backdrop-blur-md border-b border-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2 group" aria-label="Go to home section">
            <span className="font-heading font-bold text-maroon-950 text-sm lg:text-base hidden sm:block">
              Deniella Alimario Halili
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link px-3 py-2 text-xs xl:text-sm font-medium font-heading transition-colors ${
                  activeSection === item.id 
                    ? 'active text-gold-500 font-bold' 
                    : 'text-gray-600 hover:text-maroon-950'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex p-2 rounded-lg text-maroon-950 hover:bg-maroon-50 transition-colors focus:outline-none focus:ring-2 focus:ring-maroon-950"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-2 space-y-1 border-t border-maroon-100">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium font-heading rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-maroon-50 text-maroon-950 font-bold'
                    : 'text-gray-700 hover:bg-maroon-50 hover:text-maroon-950'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

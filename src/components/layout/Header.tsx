import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Laptop } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Laptop className="h-8 w-8 text-blue-800" />
            <span className="ml-2 text-xl font-bold text-blue-900">BizLaunch<span className="text-orange-500">Sites</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              Home
            </Link>
            <a href="#features" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              Features
            </a>
            <a href="#examples" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              Examples
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-800 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-800 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#examples" 
                className="text-gray-700 hover:text-blue-800 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Examples
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-blue-800 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-800 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
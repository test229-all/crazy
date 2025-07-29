import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+2290194586892</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>crazyofgod9604@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Production audiovisuelle chrétienne et artistique</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">COG</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Crazy Of God</h1>
                <p className="text-sm text-gray-600">Production</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Accueil
              </a>
              <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                À propos
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Nos Services
              </a>
              <a href="#realisations" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Réalisations
              </a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Blog
              </a>
              <a href="#fondation" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Fondation
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
              <a href="#devis" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 font-medium">
                Demander un devis
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Accueil
                </a>
                <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  À propos
                </a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Nos Services
                </a>
                <a href="#realisations" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Réalisations
                </a>
                <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Blog
                </a>
                <a href="#fondation" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Fondation
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Contact
                </a>
                <a href="#devis" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 font-medium text-center">
                  Demander un devis
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
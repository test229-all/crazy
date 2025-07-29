import React from 'react';
import { Phone, Mail, MapPin, Camera, Users, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Captation d'événements spirituels",
    "Montage créatif & artistique", 
    "Coordination d'événements chrétiens",
    "Teasers & documentaires",
    "Arrangements musicaux & audio",
    "Formations en techniques audiovisuelles"
  ];

  const quickLinks = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">COG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Crazy Of God</h3>
                <p className="text-sm text-gray-400">Production</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Maison de production audiovisuelle chrétienne et artistique qui valorise le talent, la foi, l'excellence et la créativité. 
              Nous mettons nos dons au service de Dieu et de Sa création.
            </p>

            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm">Fondé par Edmond Ghislain ADJAHOUISSO</span>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <p className="text-gray-300 text-sm italic text-center">
                "Que tout ce que vous faites soit fait avec amour"<br/>
                <span className="text-yellow-400">- 1 Corinthiens 16:14</span>
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="font-bold text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="font-bold text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="font-bold text-sm">YT</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="font-bold text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center">
              <Camera className="w-5 h-5 mr-2 text-yellow-500" />
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#devis" className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors duration-300 text-sm">
                  Demander un devis
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">+229 XX XX XX XX</p>
                  <p className="text-gray-400 text-sm">+229 YY YY YY YY</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">contact@crazyofgod.com</p>
                  <p className="text-gray-400 text-sm">info@crazyofgod.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Cotonou, Bénin</p>
                  <p className="text-gray-400 text-sm">Quartier X, Rue Y</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <a 
                href="https://wa.me/229XXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 text-sm"
              >
                <span>📱 WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Crazy Of God Production. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Créé avec</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>au Bénin</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
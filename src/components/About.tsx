import React from 'react';
import { Target, Eye, Heart, Award, Users, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Calendar className="w-8 h-8" />, number: "500+", label: "Événements réalisés" },
    { icon: <Users className="w-8 h-8" />, number: "1000+", label: "Clients satisfaits" },
    { icon: <Award className="w-8 h-8" />, number: "5+", label: "Années d'expérience" },
    { icon: <Target className="w-8 h-8" />, number: "100%", label: "Satisfaction client" }
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            À Propos de <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Crazy Of God</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une maison de production audiovisuelle chrétienne et artistique qui valorise le talent, la foi, l'excellence et la créativité
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Notre Mission & Vision
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fondée par <strong>Edmond Ghislain ADJAHOUISSO</strong>, Crazy Of God Production est née d'une vision spirituelle : utiliser les dons artistiques et techniques pour glorifier Dieu et servir Sa création à travers des productions audiovisuelles d'excellence.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Notre maison de production chrétienne et artistique combine talent, foi, excellence et créativité pour réaliser des captations d'événements spirituels, des documentaires inspirants, et des formations en techniques audiovisuelles.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Que ce soit pour immortaliser votre mariage béni, votre baptême, ou créer des contenus qui touchent les cœurs, nous mettons notre savoir-faire au service de votre message et de vos valeurs.
            </p>
          </div>

          {/* Founder Photo Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-500 rounded-2xl p-8 text-white text-center">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Edmond Ghislain ADJAHOUISSO</h4>
              <p className="text-lg opacity-90">Fondateur & Directeur Artistique</p>
              <p className="text-sm opacity-80 mt-2">"Utiliser nos talents pour la gloire de Dieu"</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-blue-700" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Notre Mission</h4>
            <p className="text-gray-600 leading-relaxed">
              Valoriser le talent, la foi, l'excellence et la créativité dans chaque production pour créer des contenus qui touchent les cœurs et glorifient Dieu.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-orange-700" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Notre Vision</h4>
            <p className="text-gray-600 leading-relaxed">
              Être la référence en production audiovisuelle chrétienne et artistique, alliant excellence technique, créativité inspirée et valeurs spirituelles authentiques.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-green-700" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Nos Valeurs</h4>
            <p className="text-gray-600 leading-relaxed">
              Foi, talent, excellence et créativité guident chacune de nos réalisations. Nous croyons que chaque don artistique est un cadeau divin à partager.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p className="text-lg opacity-90 italic">"Que tout ce que vous faites soit fait avec amour" - 1 Corinthiens 16:14</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Camera, Video, Mic, Users, Award, GraduationCap, Edit, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Captation d'Événements Spirituels",
      description: "Captation professionnelle de vos moments bénis : mariages chrétiens, baptêmes, dotes, communions et célébrations.",
      features: ["Mariages chrétiens", "Baptêmes", "Dotes traditionnelles", "Communions"]
    },
    {
      icon: <Edit className="w-12 h-12" />,
      title: "Montage Créatif & Artistique",
      description: "Post-production inspirée avec montage créatif, étalonnage et effets pour sublimer vos contenus spirituels et artistiques.",
      features: ["Montage inspiré", "Étalonnage artistique", "Effets spirituels", "Motion design"]
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Teasers & Documentaires",
      description: "Création de teasers inspirants, documentaires spirituels et contenus qui touchent les cœurs et transmettent des messages profonds.",
      features: ["Teasers inspirants", "Documentaires spirituels", "Témoignages", "Messages d'espoir"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Coordination d'Événements Chrétiens",
      description: "Planification et coordination de vos célébrations spirituelles et familiales avec respect des traditions et valeurs chrétiennes.",
      features: ["Mariages bénis", "Cérémonies spirituelles", "Événements familiaux", "Célébrations chrétiennes"]
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Publicités & Communications",
      description: "Création de spots publicitaires et contenus de communication alignés avec vos valeurs et votre message spirituel.",
      features: ["Messages inspirants", "Communication éthique", "Publicités créatives", "Contenus positifs"]
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: "Arrangements Musicaux & Audio",
      description: "Spots sonores, arrangements musicaux et mastering pour la musique chrétienne et les productions spirituelles.",
      features: ["Musique chrétienne", "Spots sonores", "Arrangements gospel", "Mastering professionnel"]
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Formations en Techniques Audiovisuelles",
      description: "Programmes de formation pour développer vos talents artistiques et techniques audiovisuelles dans un cadre chrétien.",
      features: ["Formation technique", "Encadrement artistique", "Développement des talents", "Mentorat spirituel"]
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Accompagnement Artistique",
      description: "Conseil et accompagnement pour développer vos projets artistiques et spirituels avec excellence et créativité.",
      features: ["Direction artistique", "Conseil créatif", "Développement de projets", "Accompagnement spirituel"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des services audiovisuels chrétiens et artistiques qui valorisent le talent, la foi, l'excellence et la créativité
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a 
                  href="#contact" 
                  className="text-blue-600 hover:text-yellow-600 font-semibold transition-colors duration-300 flex items-center group"
                >
                  En savoir plus
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Donner Vie à Votre Vision ?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons mettre nos talents au service de votre vision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#devis" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Demander un devis
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 transform hover:scale-105">
                Nous contacter
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-lg opacity-90 italic">"Car nous sommes son ouvrage, ayant été créés en Jésus-Christ pour de bonnes œuvres" - Éphésiens 2:10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Camera, Music, Users } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Production Audiovisuelle Chrétienne",
      subtitle: "Valorisant le talent, la foi, l'excellence et la créativité dans chaque réalisation",
      background: "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600",
      icon: <Camera className="w-16 h-16" />
    },
    {
      title: "Événements Spirituels & Familiaux",
      subtitle: "Mariages, baptêmes, dotes, communions... Capturons vos moments bénis",
      background: "bg-gradient-to-r from-orange-900 via-orange-800 to-orange-600",
      icon: <Users className="w-16 h-16" />
    },
    {
      title: "Créations Artistiques & Spirituelles",
      subtitle: "Teasers, documentaires et contenus qui touchent les cœurs et inspirent",
      background: "bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600",
      icon: <Play className="w-16 h-16" />
    },
    {
      title: "Arrangements Musicaux & Audio",
      subtitle: "Spots sonores, arrangements et mastering pour glorifier à travers la musique",
      background: "bg-gradient-to-r from-green-900 via-green-800 to-green-600",
      icon: <Music className="w-16 h-16" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className={`absolute inset-0 ${slides[currentSlide].background} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="animate-pulse">
              {slides[currentSlide].icon}
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Crazy Of God
            </span>
            <br />
            <span className="text-orange-400 text-4xl md:text-5xl">Production</span>
          </h1>

          {/* Slide Content */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 animate-fade-in">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#services" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Découvrir nos services
            </a>
            <a href="#realisations" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Voir nos réalisations
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { ArrowLeft, Play, Calendar, MapPin, Users, Camera, Clock, Star } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    category: string;
    date: string;
    location?: string;
    duration: string;
    description: string;
    fullDescription: string;
    images: string[];
    videoUrl?: string;
    client: string;
    services: string[];
    testimonial?: {
      text: string;
      author: string;
      rating: number;
    };
    technicalDetails: {
      equipment: string[];
      team: string[];
      challenges: string[];
    };
  };
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-orange-500 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Retour aux réalisations</span>
        </button>

        {/* Project Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <img 
              src={project.images[0]} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="bg-black/30 px-3 py-1 rounded-full text-sm">
                    {project.duration}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  {project.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{project.client}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Play Button for Video */}
            {project.videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white w-20 h-20 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-2xl">
                  <Play className="w-10 h-10 ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Description */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Description du Projet</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.fullDescription}
              </p>
              
              {/* Services Provided */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">Services Fournis</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {project.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Details */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Détails Techniques</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-orange-500" />
                    Équipement Utilisé
                  </h3>
                  <ul className="space-y-2">
                    {project.technicalDetails.equipment.map((item, index) => (
                      <li key={index} className="text-gray-600 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-orange-500" />
                    Équipe
                  </h3>
                  <ul className="space-y-2">
                    {project.technicalDetails.team.map((member, index) => (
                      <li key={index} className="text-gray-600 text-sm">{member}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {project.technicalDetails.challenges.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Défis Relevés</h3>
                  <ul className="space-y-2">
                    {project.technicalDetails.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Image Gallery */}
            {project.images.length > 1 && (
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Galerie Photos</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 2}`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Informations Projet</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Client</span>
                  <span className="font-semibold text-gray-800">{project.client}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold text-gray-800">{project.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Durée</span>
                  <span className="font-semibold text-gray-800">{project.duration}</span>
                </div>
                {project.location && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Lieu</span>
                    <span className="font-semibold text-gray-800">{project.location}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Catégorie</span>
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            {project.testimonial && (
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4">Témoignage Client</h3>
                <div className="flex mb-4">
                  {[...Array(project.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="italic mb-4 leading-relaxed">
                  "{project.testimonial.text}"
                </p>
                <p className="font-semibold">- {project.testimonial.author}</p>
              </div>
            )}

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Projet Similaire ?</h3>
              <p className="mb-6 leading-relaxed">
                Vous avez un projet similaire ? Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
              </p>
              <div className="space-y-3">
                <a 
                  href="#devis" 
                  className="block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-300"
                >
                  Demander un devis
                </a>
                <a 
                  href="#contact" 
                  className="block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-orange-600 transition-colors duration-300"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
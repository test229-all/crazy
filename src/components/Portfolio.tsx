import React, { useState } from 'react';
import { Play, Eye, Calendar, Tag } from 'lucide-react';
import ProjectDetail from './ProjectDetail';
import { projectsData } from '../data/projectsData';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: 'tous', label: 'Tous nos projets' },
    { id: 'mariage', label: 'Mariages' },
    { id: 'entreprise', label: 'Entreprises' },
    { id: 'evenement', label: 'Événements' },
    { id: 'publicite', label: 'Publicité' },
    { id: 'documentaire', label: 'Documentaires' }
  ];

  const projects = projectsData;

  const filteredProjects = activeCategory === 'tous' 
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Mariée",
      content: "Crazy Of God Production a immortalisé notre mariage de façon magnifique. L'équipe était discrète et professionnelle.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "Directeur Marketing",
      content: "Excellent travail sur notre spot publicitaire. Créativité et professionnalisme au rendez-vous !",
      rating: 5
    },
    {
      name: "Sœur Antoinette",
      role: "Directrice d'École",
      content: "Le documentaire réalisé sur notre école a dépassé toutes nos attentes. Merci pour votre dévouement.",
      rating: 5
    }
  ];

  // If a project is selected, show the detail view
  if (selectedProject !== null) {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      return (
        <ProjectDetail 
          project={project} 
          onBack={() => setSelectedProject(null)} 
        />
      );
    }
  }

  return (
    <section id="realisations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos créations audiovisuelles qui allient excellence technique, créativité artistique et valeurs spirituelles
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-yellow-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <Tag className="w-4 h-4" />
                      <span className="text-sm capitalize">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {project.duration}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.date}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-yellow-600 font-semibold transition-colors duration-300 flex items-center group">
                    onClick={() => setSelectedProject(project.id)}
                    <Eye className="w-4 h-4 mr-2" />
                    Voir le projet
                  </button>
                  
                  <div className="flex items-center text-gray-400">
                    <span className="text-sm">{project.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Ce que disent nos <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">clients</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
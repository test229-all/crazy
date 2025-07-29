import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Les tendances vidéo 2024 pour les mariages",
      excerpt: "Découvrez les dernières tendances en matière de captation vidéo de mariage qui feront sensation cette année.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
      author: "Edmond Adjahouisso",
      date: "15 Mars 2024",
      category: "Mariage",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Comment choisir le bon équipement audiovisuel",
      excerpt: "Guide complet pour sélectionner l'équipement adapté à vos besoins de production vidéo professionnelle.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      author: "Équipe COG",
      date: "8 Mars 2024",
      category: "Technique",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "L'importance du son dans vos vidéos",
      excerpt: "Pourquoi la qualité audio est cruciale et comment l'optimiser pour des résultats professionnels.",
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
      author: "Edmond Adjahouisso",
      date: "1 Mars 2024",
      category: "Audio",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Organiser un événement mémorable : nos conseils",
      excerpt: "Les étapes clés pour planifier et réussir votre événement, de la conception à la réalisation.",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      author: "Équipe COG",
      date: "22 Février 2024",
      category: "Événementiel",
      readTime: "10 min"
    },
    {
      id: 5,
      title: "Le storytelling en vidéo d'entreprise",
      excerpt: "Comment raconter l'histoire de votre entreprise à travers des vidéos captivantes et authentiques.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      author: "Edmond Adjahouisso",
      date: "18 Février 2024",
      category: "Entreprise",
      readTime: "7 min"
    },
    {
      id: 6,
      title: "Les secrets d'un bon montage vidéo",
      excerpt: "Techniques et astuces de montage pour créer des vidéos dynamiques et professionnelles.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      author: "Équipe COG",
      date: "10 Février 2024",
      category: "Post-production",
      readTime: "9 min"
    }
  ];

  const categories = [
    "Tous",
    "Mariage",
    "Technique", 
    "Audio",
    "Événementiel",
    "Entreprise",
    "Post-production"
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Blog & <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Actualités</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Actualités, formations, conseils artistiques et spirituels pour nourrir votre créativité et votre foi
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-8 md:p-12 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    Article Featured
                  </span>
                  <span className="text-sm opacity-80">Nouveau</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  {articles[0].title}
                </h3>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm opacity-80 mb-8">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{articles[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4" />
                    <span>{articles[0].readTime} de lecture</span>
                  </div>
                </div>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center group">
                  Lire l'article
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <article key={article.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <span>{article.readTime}</span>
                </div>

                {/* Read More Button */}
                <button className="text-blue-600 hover:text-yellow-600 font-semibold transition-colors duration-300 flex items-center group">
                  Lire la suite
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Restez Informé de nos <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Actualités</span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous pour recevoir nos actualités, formations à venir et conseils pour développer vos talents artistiques
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
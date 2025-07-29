import React, { useState } from 'react';
import { Calculator, Calendar, Users, Camera, FileText, Send } from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    guestCount: '',
    duration: '',
    services: [],
    budget: '',
    description: '',
    urgency: 'normal'
  });

  const serviceOptions = [
    { id: 'captation', label: 'Captation vidéo', price: 'Dès 200€' },
    { id: 'montage', label: 'Montage vidéo', price: 'Dès 150€' },
    { id: 'photo', label: 'Photographie', price: 'Dès 300€' },
    { id: 'drone', label: 'Prise de vue drone', price: 'Dès 250€' },
    { id: 'live', label: 'Diffusion en direct', price: 'Dès 400€' },
    { id: 'audio', label: 'Enregistrement audio', price: 'Dès 100€' },
    { id: 'eclairage', label: 'Éclairage professionnel', price: 'Dès 180€' },
    { id: 'multicam', label: 'Multi-caméras', price: 'Dès 350€' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    alert('Votre demande de devis a été envoyée ! Nous vous répondrons dans les 24h.');
  };

  return (
    <section id="devis" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Demande de <span className="text-orange-500">Devis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Obtenez un devis personnalisé pour votre projet audiovisuel en quelques minutes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Informations Personnelles</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+229 XX XX XX XX"
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Détails de l'Événement</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type d'événement *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez le type</option>
                    <option value="mariage">Mariage</option>
                    <option value="bapteme">Baptême</option>
                    <option value="communion">Communion</option>
                    <option value="anniversaire">Anniversaire</option>
                    <option value="entreprise">Événement d'entreprise</option>
                    <option value="conference">Conférence</option>
                    <option value="concert">Concert</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date de l'événement *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Lieu de l'événement *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ville, lieu exact"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre d'invités
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="1-50">1 - 50 personnes</option>
                    <option value="51-100">51 - 100 personnes</option>
                    <option value="101-200">101 - 200 personnes</option>
                    <option value="201-500">201 - 500 personnes</option>
                    <option value="500+">Plus de 500 personnes</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Durée prévue
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="1-3h">1 - 3 heures</option>
                    <option value="4-6h">4 - 6 heures</option>
                    <option value="7-10h">7 - 10 heures</option>
                    <option value="journee">Journée complète</option>
                    <option value="weekend">Weekend complet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Urgence du projet
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="normal">Normal (+ de 1 mois)</option>
                    <option value="urgent">Urgent (2-4 semaines)</option>
                    <option value="tres-urgent">Très urgent (- de 2 semaines)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Services Selection */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Camera className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Services Souhaités</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {serviceOptions.map((service) => (
                  <div key={service.id} className="relative">
                    <input
                      type="checkbox"
                      id={service.id}
                      checked={formData.services.includes(service.id)}
                      onChange={() => handleServiceChange(service.id)}
                      className="sr-only"
                    />
                    <label
                      htmlFor={service.id}
                      className={`block p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        formData.services.includes(service.id)
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1">{service.label}</div>
                      <div className="text-xs text-gray-500">{service.price}</div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget and Description */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Calculator className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Budget et Description</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget approximatif
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez votre budget</option>
                    <option value="500-1000">500€ - 1 000€</option>
                    <option value="1000-2500">1 000€ - 2 500€</option>
                    <option value="2500-5000">2 500€ - 5 000€</option>
                    <option value="5000-10000">5 000€ - 10 000€</option>
                    <option value="10000+">Plus de 10 000€</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description détaillée du projet
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Décrivez votre projet en détail : vos attentes, le style souhaité, les moments importants à capturer, etc."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer ma demande de devis</span>
              </button>
              <p className="text-gray-600 mt-4 text-sm">
                Nous vous répondrons dans les 24h avec un devis détaillé et personnalisé
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Quote;
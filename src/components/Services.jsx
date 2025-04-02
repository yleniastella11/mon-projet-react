import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    { id: 1, title: 'UX DESIGN', description: 'Création d’interfaces utilisateur intuitives et esthétiques.' },
    { id: 2, title: 'DÉVELOPPEMENT WEB', description: 'Développement de sites web performants et responsives.' },
    { id: 3, title: 'RÉFÉRENCEMENT', description: 'Optimisation pour les moteurs de recherche afin d’améliorer la visibilité.' },
  ];

  return (
    <div className="service-icon">
      <h2>Voici les prestations sur lesquelles je peux intervenir</h2>
      <div className="services-container">
        {servicesList.map(service => (
          <div key={service.id} className="service-card">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

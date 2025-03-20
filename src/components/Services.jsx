import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    { id: 1, title: 'UX DESIGN',  },
    { id: 2, title: 'DÉVELOPPEMENT WEB', },
    { id: 3, title: 'RÉFÉRENCEMENT', },
  ];

  return (
    <div>
      <h2>Mes Services</h2>
      <h3>Voici les prestations sur lesquelles je peux intervenir</h3>
      <div className="services-container">
        {servicesList.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
 
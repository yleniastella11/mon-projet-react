import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Services.css';

const Services = () => {
  const servicesList = [
    { id: 1, title: 'UX DESIGN', description: 'Création d’interfaces utilisateur intuitives et esthétiques. L\'UX Design est une méthode de conception centrée sur l\'utilisateur. Son but est d\'offrir une expérience de navigation optimale à l\'internaute.' },
    { id: 2, title: 'DÉVELOPPEMENT WEB', description: 'Développement de sites web performants et responsives. Le développement de sites web repose sur l\'utilisation des langages HTML, CSS, JavaScript et PHP.' },
    { id: 3, title: 'RÉFÉRENCEMENT', description: 'Optimisation pour les moteurs de recherche afin d’améliorer la visibilité. Le référencement naturel d\'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Voici les prestations sur lesquelles je peux intervenir</h2>
      <div className="row">
        {servicesList.map(service => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{service.title}</h4>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
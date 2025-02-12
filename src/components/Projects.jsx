import React from 'react';

function Projects() {
  const projets = [
    { title: 'Fresh Food', description: 'Site avec commande en ligne', technos: 'PHP et MySQL' },
    { title: 'Restaurant Akira', description: 'Site vitrine', technos: 'WordPress' },
    { title: 'Espace bien-être', description: 'Site vitrine pour un praticien de bien-être', technos: 'HTML/CSS' },
  ];

  return (
    <div className="container mt-4">
      <h2>Projets</h2>
      <div className="row">
        {projets.map((projet, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">{projet.title}</h3>
                <p className="card-text">{projet.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Projects.css';
import fond from '../assets/fond.jpg';
import freshfood from '../assets/freshfood.png';
import RA from '../assets/RA.png';
import EBE from '../assets/EBE.png';

function ProjectsComponent() {
    const projets = [
        { title: 'Fresh Food', description: 'Site avec commande en ligne', technos: 'PHP et MySQL', image: freshfood },
        { title: 'Restaurant Akira', description: 'Site vitrine', technos: 'WordPress', image: RA },
        { title: 'Espace bien-être', description: 'Site vitrine pour un praticien de bien-être', technos: 'HTML/CSS', image: EBE },
    ];

    return (
        <section className="projects-section">
            {/* Bandeau image */}
            <div className="banner-image">
                <img src={fond} alt="bandeau" />
            </div>

            {/* Titre et sous-titre */}
            <div className="text-center">
                <h2>PORTFOLIO</h2>
                <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
                <hr />
            </div>

            {/* Les cartes */}
            <div className="container mt-5">
                <div className="row">
                    {projets.map((projet, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="card h-100">
                                <img src={projet.image} alt={projet.title} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{projet.title}</h5>
                                    <p className="card-text">{projet.description}</p>
                                    <a href="#" className="btn btn-outline-primary">Voir</a>
                                </div>
                                <div className="card-footer">
                                    Site réalisé avec {projet.technos}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsComponent;
import React from "react";
import './Projects.css';
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
        <div className="project-list">
            <h2 className="project-title">Mes Projets</h2>
            <div className="project-items">
                {projets.map((projet, index) => (
                    <div key={index} className="project-item">
                        <img src={projet.image} alt={projet.title} className="project-image" />
                        <h3>{projet.title}</h3>
                        <p>{projet.description}</p>
                        <p><strong>Technologies utilisées :</strong> {projet.technos}</p>
                        <p><a href="#">Voir</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsComponent;
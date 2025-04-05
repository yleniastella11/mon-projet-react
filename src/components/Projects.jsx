import React from "react";
import './Projects.css';
import fond from '../assets/fond.png';

function ProjectsComponent() {
    const projets = [
        { title: 'Fresh Food', description: 'Site avec commande en ligne', technos: 'PHP et MySQL' },
        { title: 'Restaurant Akira', description: 'Site vitrine', technos: 'WordPress' },
        { title: 'Espace bien-être', description: 'Site vitrine pour un praticien de bien-être', technos: 'HTML/CSS' },
    ];

    console.log("Liste des projets :", projets);



    return (
        <div className="project-list">
            <img src={fond} alt="image de fond" />
            {projets.map((projet, index) => {
                console.log(`Projet ${index + 1}:`, projet);
                return (
                    <div key={index} className="project-item">
                        <h3>{projet.title}</h3>
                        <p>{projet.description}</p>
                        <p><strong>Technologies utilisées :</strong> {projet.technos}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectsComponent;
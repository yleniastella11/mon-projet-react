import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
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
        <div className="container mt-5"> 
            <h2 className="text-center mb-4">Mes Projets</h2> 
            <div className="row"> 
                {projets.map((projet, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4"> 
                        <div className="card h-100"> 
                            <img src={projet.image} alt={projet.title} className="card-img-top" /> 
                            <div className="card-body"> 
                                <h3 className="card-title">{projet.title}</h3> 
                                <p className="card-text">{projet.description}</p> 
                                <p><strong>Technologies utilisées :</strong> {projet.technos}</p> 
                                <a href="#" className="btn btn-primary">Voir</a> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsComponent;

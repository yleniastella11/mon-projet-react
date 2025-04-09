import React from 'react';
import accueil from '../assets/accueil.jpeg';
import competences from '../assets/competences.png';
import './Presentation.css';

function About() {
    return (
        <div className="content-container">
            <div className="presentation-container">
                <h3>Présentation de John Doe</h3>
                <p>
                    Passionné par l'informatique et les nouvelles technologies, 
                    j'ai suivi une formation d'intégrateur-développeur web au CEF. 
                    Au cours de cette formation, j'ai pu acquérir des bases solides 
                    pour travailler dans le domaine du développement web.
                </p>
                <p>
                    Basé à Lyon, je suis en recherche d'une alternance au sein d'une 
                    agence digitale pour consolider ma formation de développeur web 
                    full stack.
                </p>
                <p>
                    J'accorde une attention particulière à la qualité du code que 
                    j'écris et je respecte les bonnes pratiques du web.
                </p>
            </div>
            <img src={competences} alt="Compétences" className="competences-image" />
        </div>
    );
}

export default About;
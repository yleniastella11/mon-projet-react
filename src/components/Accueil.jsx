import React from 'react';
import accueil from '../assets/accueil.jpeg';
import './Accueil.css';

function About() {
    return (
        <div className="about-container">
            <div className="title-container">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
            </div>
            <div className="content-container">
                <h3>Présentation de John Doe</h3>
                <p>
                    Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web au CEF.
                    Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web.
                    Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de développeur web full stack.
                    J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                </p>
            </div>
        </div>
    );
}

export default About;
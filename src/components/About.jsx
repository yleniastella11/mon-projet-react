import React from 'react';

function About () {
    return (
        <about style={{ color: '#444', width: '50%', margin: 'auto', display: 'flex', flexDirection: 'column', padding: '5rem', backgroundColor: '#EEE', }}>
              <div className="about-container">
            <h1>Présentation</h1>
            <p>
            Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web au CEF.
            Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web.
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de développeur web full stack.
            J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
            </p>
        </div>
        </about>
    );
};

export default About;
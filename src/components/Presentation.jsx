import React, { useState } from 'react';
import about from '../assets/about.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Presentation.css';

function About() {
  const [skills] = useState([
    { name: 'HTML5', level: 90, color: 'bg-danger' },
    { name: 'CSS3', level: 80, color: 'bg-info' },
    { name: 'JAVASCRIPT', level: 70, color: 'bg-warning' },
    { name: 'PHP', level: 60, color: 'bg-success' },
    { name: 'REACT', level: 50, color: 'bg-primary' },
  ]);

  return (
    <div className="container mt-5">
  <div className="row shadow rounded p-4 bg-white">
    
    <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
      <h3 className="about-title">À propos</h3>
      <p>
        Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation
        d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation,
        j'ai pu acquérir des bases solides pour travailler dans le domaine du
        <strong> développement web</strong>.
      </p>
      <p>
        Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour
        consolider ma formation de <strong>développeur web full stack</strong>.
      </p>
      <p>
        J'accorde une attention particulière à la qualité du code que j’écris et je respecte
        les bonnes pratiques du web.
      </p>
    </div>

    <div className="col-lg-6 col-md-12 col-sm-12">
      <img src={about} alt="À propos" className="img-fluid rounded mb-3" />

      <h5 className="fw-bold mb-3">Mes compétences</h5>

      {skills.map(skill => (
        <div className="mb-2" key={skill.name}>
          <small className="text-muted">{skill.name} {skill.level}%</small>
          <div className="progress">
            <div
              className={`progress-bar ${skill.color}`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default About;
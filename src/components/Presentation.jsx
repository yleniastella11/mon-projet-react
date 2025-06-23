import React from 'react';
import competences from '../assets/competences.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Presentation.css';

function About() {
  return (
    <div className="container mt-5">
      <div className="row shadow rounded p-4 bg-white">
        {/* Bloc gauche - À propos */}
        <div className="col-lg-6 col-md-12 mb-4">
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

        {/* Bloc droit - Image + Compétences */}
        <div className="col-lg-6 col-md-12">
          <img src={competences} alt="Compétences" className="img-fluid rounded mb-3" />

          <h5 className="fw-bold mb-3">Mes compétences</h5>

          {/* Progress Bars */}
          <div className="mb-2">
            <small className="text-muted">HTML5 90%</small>
            <div className="progress">
              <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="mb-2">
            <small className="text-muted">CSS3 80%</small>
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="mb-2">
            <small className="text-muted">JAVASCRIPT 70%</small>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: '70%' }}></div>
            </div>
          </div>

          <div className="mb-2">
            <small className="text-muted">PHP 60%</small>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="mb-2">
            <small className="text-muted">REACT 50%</small>
            <div className="progress">
              <div className="progress-bar bg-primary" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
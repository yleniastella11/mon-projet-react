import React, { useState } from 'react';
import './Footer.css';
import github from '../assets/github.jpeg';
import twitter from '../assets/twitter.jpg';
import linkedin from '../assets/linkedin.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  const [copyrightMessage, setCopyrightMessage] = useState("© Designed by John Doe");
  const [showMentions, setShowMentions] = useState(false);

  const changeCopyrightMessage = () => {
    setCopyrightMessage("© 2023 - Tous droits réservés");
  };

  const handleMentionsClick = () => {
    setShowMentions(!showMentions);
  };

  const mentionsLegales = [
    <>
      <strong>Éditeur du site</strong><br />
      John Doe<br />
      40 Rue Laure Diebold<br />
      69009 Lyon, France<br />
      Téléphone : 06 20 30 40 50<br />
      Email : <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
    </>,
    <>
      <strong>Hébergeur</strong><br />
      Always Data<br />
      91 rue du Faubourg Saint Honoré<br />
      75008 Paris<br />
      Site : <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
    </>,
    <>
      <strong>Crédits</strong><br />
      Site développé par John Doe, étudiant du CEF.<br />
      Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.
    </>
  ];

  return (
    <footer className="bg-light text-dark text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
            <h5 className="fw-bold">John Doe</h5>
            <p>
              40 Rue Laure Diebold<br />
              69009 Lyon, France<br />
              Téléphone : 06 20 30 40 50
            </p>
            <div className="d-flex gap-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-start">
            <h5 className="fw-bold">Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/">Accueil</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Me contacter</a></li>
              <li>
                <a href="#!" onClick={handleMentionsClick}>Mentions légales</a>
              </li>
            </ul>

            {showMentions && (
              <div className="mt-3">
                {mentionsLegales.map((mention, index) => (
                  <div key={index} className="mb-3 border p-2 rounded bg-white">
                    {mention}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col-lg-6 col-md-12 text-start">
            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
                <h5 className="fw-bold">Mes dernières réalisations</h5>
                <ul className="list-unstyled">
                  <li><a href="/project1">Fresh food</a></li>
                  <li><a href="/project2">Restaurant Akira</a></li>
                  <li><a href="/project3">Espace bien-être</a></li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold">Mes derniers articles</h5>
                <ul className="list-unstyled">
                  <li><a href="/article1">Coder son site en HTML/CSS</a></li>
                  <li><a href="/article2">Vendre ses produits sur le web</a></li>
                  <li><a href="/article3">Se positionner sur Google</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark text-white" onClick={changeCopyrightMessage}>
        {copyrightMessage}
      </div>
    </footer>
  );
}

export default Footer;
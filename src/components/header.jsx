import React from 'react';
import { Link } from 'react-router-dom';
import accueil from '../assets/accueil.jpeg';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header>
      <div className="container-fluid text-center">
        <div className="about-container">
          <img src={accueil} alt="Accueil" className="img-fluid mb-0 w-100" />
          <div className="title-container mt-0">
            <h1 className="display-4">Bonjour, je suis John Doe</h1>
            <h2 className="lead">Développeur web full stack</h2>
            <Link to="/en-savoir-plus" className="btn btn-primary mt-3">En savoir plus</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
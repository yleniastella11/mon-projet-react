import React from 'react';
import { Link } from 'react-router-dom';
import accueil from '../assets/accueil.jpeg';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="hero-header">
      <img src={accueil} alt="Accueil" className="hero-image" />
      <div className="hero-content">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <Link to="/en-savoir-plus" className="btn btn-primary mt-3">
          En savoir plus
        </Link>
      </div>
    </header>
  );
}

export default Header;
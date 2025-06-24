import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import accueil from '../assets/accueil.jpeg';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [greeting, setGreeting] = useState('Bonjour, je suis John Doe');

  useEffect(() => {
    const timer = setTimeout(() => {
      setGreeting('Bienvenue sur mon site !');
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <header className="hero-header">
      <img src={accueil} alt="Accueil" className="hero-image img-fluid" />
      <div className="hero-content text-center">
        <h1>{greeting}</h1>
        <h2>Développeur web full stack</h2>
        <Link to="/en-savoir-plus" className="btn btn-primary mt-3">
          En savoir plus
        </Link>
      </div>
    </header>
  );
}

export default Header;
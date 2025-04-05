import React from 'react';
import { Link } from 'react-router-dom';
import accueil from '../assets/accueil.jpeg';
import './Home.css';

function Home() {
  return (
    <div className="about-container">
      <div className="title-container">
        <h1>Bienvenue sur la page d'accueil</h1>
        <h2>Bonjour, je suis John Doe</h2>
        <h3>Développeur web full stack</h3>
        <Link to="/info">https://api.github.com/users/github-john-doe</Link>
      </div>
    </div>
  );
}

export default Home;
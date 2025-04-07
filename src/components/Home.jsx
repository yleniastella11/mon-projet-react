import React from 'react';
import { Link } from 'react-router-dom';
import accueil from '../assets/accueil.jpeg';
import './Home.css';

function Home() {
  return (
    <div className="about-container">
      <div className="title-container">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
      </div>
    </div>
  );
}

export default Home;
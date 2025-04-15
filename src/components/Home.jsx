import React from 'react';
import { Link } from 'react-router-dom';
import accueil from '../assets/accueil.jpeg';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Home() {
  return (
    <div className="container text-center">
      <div className="about-container position-relative">
        <img src={accueil} alt="Accueil" className="img-fluid mb-4" /> 
        <div className="title-container position-absolute top-50 start-50 translate-middle text-center">
          <h1 className="display-4 text-white">Bonjour, je suis John Doe</h1> 
          <h2 className="lead text-white">Développeur web full stack</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
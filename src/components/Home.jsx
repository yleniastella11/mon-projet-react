import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <Link to="/info"> https://api.github.com/users/github-john-doe</Link>
    </div>
  );
}

export default Home;
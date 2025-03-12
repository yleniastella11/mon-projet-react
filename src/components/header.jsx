import React from 'react';
import Header from './components/Header.jsx';

function Header() {
  return (
    <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/projects">Projets</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  );
}

const styles = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '20px',
  marginBottom: '20px',
}

export default Header;


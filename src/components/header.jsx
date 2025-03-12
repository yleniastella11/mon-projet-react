import React from 'react';
import Header from './components/Header.jsx';

function Header() {
  return (
    <header style={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '2rem', margin: 'auto', BackgroundColor: '#EEE', color: '#444', }}>
          <nav>
          <ul>
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
    </header>
  );
}

export default Header;


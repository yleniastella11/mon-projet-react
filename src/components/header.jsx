import React from 'react';
import Header from './components/Header.jsx';
import './Header.css';

function Header() {
  return (
    <header className="bg-primary text-white text-center p-4">
      <h1>Bonjour, je suis John Doe</h1>
      <p>Bienvenue sur ma présentation !</p>
      <h2>Me contacter</h2>
      <p>Email : johndoe@gmail.com</p>
      <p>Téléphone : 0620304050</p>
      <p>Adresse : 40 rue Laure Diebold, 69009, Lyon, France</p>
    </header>
  );
}

export default Header;


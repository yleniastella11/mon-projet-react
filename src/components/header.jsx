import React from 'react';
import Header from './components/Header.jsx';

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

const styles = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '20px',
  marginBottom: '20px',
}

export default Header;


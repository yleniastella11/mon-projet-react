import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-primary text-white text-center p-4">
      <div>
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
      </div>
    </header>
  );
};

export default Header;

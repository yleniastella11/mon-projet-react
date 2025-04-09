import React, { useState } from 'react';
import itineraire from '../assets/itineraire.png';
import './Contact.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <img src={itineraire} alt="Itinéraire" />
      <div className="contact-info">
        <h2>Me contacter</h2>
        <p>Nom: John Doe</p>
        <p>
          Adresse: <a href="https://www.google.com/maps/search/?api=1&query=40+rue+Laure+Diebold,+69009+Lyon,+France" target="_blank" rel="noopener noreferrer">40 rue Laure Diebold, 69009 Lyon, France</a>
        </p>
        <p>Email: john.doe@gmail.com</p>
        <p>Téléphone: 0620304050</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
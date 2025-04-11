import React, { useState } from 'react';
import itineraire from '../assets/itineraire.png';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className="contact container mt-5">
      <img src={itineraire} alt="Itinéraire" className="img-fluid mb-4" />
      <div className="contact-info mb-4">
        <h2>Me contacter</h2>
        <p>Nom: John Doe</p>
        <p>
          Adresse: <a href="https://www.google.com/maps/search/?api=1&query=40+rue+Laure+Diebold,+69009+Lyon,+France" target="_blank" rel="noopener noreferrer">40 rue Laure Diebold, 69009 Lyon, France</a>
        </p>
        <p>Email: john.doe@gmail.com</p>
        <p>Téléphone: 0620304050</p>
      </div>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom :</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message :</label>
          <textarea
            id="message"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
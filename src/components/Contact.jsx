import React, { useState } from 'react';
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
      <h2>ME CONTACTER</h2>
      <p>
        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
      </p>

      <div className="form-group">
        {/* Partie gauche : formulaire */}
        <div className="form-left">
          <h3>Formulaire de contact</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Votre nom"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
               placeholder="Votre numéro de téléphone"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Sujet"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Votre message"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>

        {/* Partie droite : coordonnées et carte */}
        <div className="form-right">
          <h3>Mes coordonnées</h3>
          <p>📍 40 Rue Laure Diebold, 69009 Lyon, France</p>
          <p>📞 06 20 30 40 50</p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.952265839374!2d4.795257015575071!3d45.776482979105664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eaed4e329ba7%3A0xd4347a73f80b3e33!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1718826400000!5m2!1sfr!2sfr"
            width="100%"
            height="200"
            style={{ border: '0', borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
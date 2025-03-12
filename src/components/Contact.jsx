import React, { useState } from 'react';
import Contact from './components/Contact.jsx';


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
        <div>
            <h2>Me contacter</h2>
            <p>Adresse: 40 rue Laure Diebold, 69009 Lyon, France</p>
            <p>Email: john.doe@gmail.com</p>
            <p>Téléphone: 0620304050</p>
            
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

const styles = {
    padding: '1.5 rem',
    backgroundColor: '#689DC2',
    color: 'white',
    display: 'inline-block',
    justifycontent: 'space-between',
}

export default ContactForm;
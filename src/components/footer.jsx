import React from 'react';
import logo1 from './assets/github.png'; 
import logo2 from './assets/twitter.jpg'; 
import logo3 from './assets/linkedin.png'; 

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1' }}>
            <div>
                <img src={logo1} alt="Logo de GitHub" style={{ width: '100px', margin: '10px' }} />
                <img src={logo2} alt="Logo de Twitter" style={{ width: '100px', margin: '10px' }} />
                <img src={logo3} alt="Logo de Linkedin" style={{ width: '100px', margin: '10px' }} />
            </div>
            <p>© Designed by John Doe</p>
        </footer>
    );
};

export default Footer;
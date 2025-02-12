import React from 'react';
import logo1 from './assets/images/logo1.png'; // Chemin vers votre logo
import logo2 from './assets/images/logo2.png'; // Chemin vers votre autre logo
import logo3 from './assets/images/logo3.png'; // Chemin vers autre logo

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1' }}>
            <div>
                <img src={logo1} alt="Logo 1" style={{ width: '100px', margin: '10px' }} />
                <img src={logo2} alt="Logo 2" style={{ width: '100px', margin: '10px' }} />
                <img src={logo3} alt="Logo 3" style={{ width: '100px', margin: '10px' }} />
            </div>
            <p>© Designed by John Doe</p>
        </footer>
    );
};

export default Footer;
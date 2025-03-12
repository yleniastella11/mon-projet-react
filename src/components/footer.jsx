import React from 'react';
import Footer from './components/Footer.jsx';
import logo1 from './assets/github.png'; 
import logo2 from './assets/twitter.jpg'; 
import logo3 from './assets/linkedin.png';

function Footer () {
    return (
        <footer style={{ color: 'black', textAlign: 'center', padding: '20px', background: '#f1f1f1', display: 'flex', flexDirection: 'column',}}>
            <div>
                <img src={logo1} alt="Logo 1-github" style={{ width: '100px', margin: '10px' }} />
                <img src={logo2} alt="Logo 2-twitter" style={{ width: '100px', margin: '10px' }} />
                <img src={logo3} alt="Logo 3-linkedin" style={{ width: '100px', margin: '10px' }} />
            </div>
            <p>© Designed by John Doe</p>
        </footer>
    );
};

export default Footer;
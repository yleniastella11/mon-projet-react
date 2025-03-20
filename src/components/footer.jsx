import React from 'react';
import './Footer.css';
import github from '../assets/github.png'; 
import twitter from '../assets/twitter.jpg'; 
import linkedin from '../assets/linkedin.png';

function Footer() {
    return (
        <footer>
            <div>
                <img src={github} alt="Logo GitHub" />
                <img src={twitter} alt="Logo Twitter" />
                <img src={linkedin} alt="Logo LinkedIn" />
            </div>
            <p>© Designed by John Doe</p>
        </footer>
    );
};

export default Footer;
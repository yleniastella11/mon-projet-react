import React from 'react';
import './Footer.css';
import github from '../assets/github.jpeg'; 
import twitter from '../assets/twitter.jpg'; 
import linkedin from '../assets/linkedin.png';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="logos">
                    <img src={github} alt="Logo GitHub" />
                    <img src={twitter} alt="Logo Twitter" />
                    <img src={linkedin} alt="Logo LinkedIn" />
                </div>
                <p>© Designed by John Doe</p>
            </div>
        </footer>
    );
};

export default Footer;
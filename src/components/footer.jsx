import React from 'react';
import './Footer.css';
import github from '../assets/github.jpeg'; 
import twitter from '../assets/twitter.jpg'; 
import linkedin from '../assets/linkedin.png';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <a href="https://api.github.com/users/github-john-doe" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Logo GitHub" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="Logo Twitter" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="Logo LinkedIn" />
                </a>
            </div>
            <p>© Designed by John Doe</p>
        </footer>
    );
};

export default Footer;
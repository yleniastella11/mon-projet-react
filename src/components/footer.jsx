import React from 'react';
import './Footer.css';
import github from '../assets/github.jpeg'; 
import twitter from '../assets/twitter.jpg'; 
import linkedin from '../assets/linkedin.png';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-column">
                    <h3>John Doe</h3>
                    <ul>
                        <li>Téléphone: 06 20 30 40 50</li>
                        <li>Adresse: 40 rue Laure Diebold</li>
                        <li>69009 Lyon, France</li>
                    </ul>
                    <div className="social-media">
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
                </div>
                <div className="footer-column">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="/">Présentation</a></li>
                        <li><a href="/about">Projets</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Mes réalisations</h3>
                    <ul>
                        <li><a href="/project1">Fresh Food</a></li>
                        <li><a href="/project2">Restaurant Akira</a></li>
                        <li><a href="/project3">Espace bien-être</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Articles du Blog</h3>
                    <ul>
                        <li><a href="/article1">Coder son site en HTML/CSS</a></li>
                        <li><a href="/article2">Vendre ses produits sur le web</a></li>
                        <li><a href="/article3">Se positionner sur Google</a></li>
                    </ul>
                </div>
            </div>
            <p>© Designed by John Doe</p>
        </footer>
    );
}

export default Footer;
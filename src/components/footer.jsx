import React from 'react';
import './Footer.css';
import github from '../assets/github.jpeg'; 
import twitter from '../assets/twitter.jpg'; 
import linkedin from '../assets/linkedin.png';

function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4">
                        <h3>John Doe</h3>
                        <ul className="list-unstyled">
                            <li>Téléphone: 06 20 30 40 50</li>
                            <li>Adresse: 40 rue Laure Diebold</li>
                            <li>69009 Lyon, France</li>
                        </ul>
                        <div className="social-media">
                            <a href="https://api.github.com/users/github-john-doe" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="Logo GitHub" className="social-icon" />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Logo Twitter" className="social-icon" />
                            </a>
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="Logo LinkedIn" className="social-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h3>Navigation</h3>
                        <ul className="list-unstyled">
                            <li><a href="/">Présentation</a></li>
                            <li><a href="/projects">Projets</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/GitHubProfile">GitHubProfile</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h3>Mes réalisations</h3>
                        <ul className="list-unstyled">
                            <li><a href="/project1">Fresh Food</a></li>
                            <li><a href="/project2">Restaurant Akira</a></li>
                            <li><a href="/project3">Espace bien-être</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 bg-dark text-white">
                © Designed by John Doe
            </div>
        </footer>
    );
}

export default Footer;
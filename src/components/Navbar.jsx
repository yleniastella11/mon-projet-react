import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark"> {/* Changement de lg à md */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">John Doe</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu} 
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/presentation">Présentation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/githubprofile">GitHubProfile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
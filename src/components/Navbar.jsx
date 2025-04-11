import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">John Doe</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
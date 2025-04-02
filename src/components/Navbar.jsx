import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div classname="menu">
        <Link to="/about">Présentation</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <Link to="/info">InfoPage</Link>
    </div>
  );
}

export default Navbar;
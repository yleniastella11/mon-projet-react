import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ display: 'block', justifyContent: 'center', textAlign: 'center', margin: 'auto', backgroundColor: '#EEE', color: '#444' }}>
      <nav>
        <Link to="/about">Présentation</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <Link to="/info">InfoPage</Link>
      </nav>
    </div>
  );
}

export default Navbar;
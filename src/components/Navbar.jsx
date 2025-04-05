import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  const history = useNavigate();

  const handleBack = () => {
    history.goBack(); 
  };

  return (
    <div className="menu">
      <h1>John Doe</h1>
        <Link to="/presentation">Présentation</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <Link to="/info">InfoPage</Link>
        <button onClick={handleBack}>Retour</button>
    </div>
  );
}

export default Navbar;
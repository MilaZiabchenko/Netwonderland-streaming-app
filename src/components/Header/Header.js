import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="showcase-top">
      <Link to="/" className="logo">
        NeTWondeRLanD
      </Link>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/shows">Shows</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/login" className="btn btn-rounded">
          Sign In
        </Link>
      </nav>
    </header>
  );
};

export default Header;

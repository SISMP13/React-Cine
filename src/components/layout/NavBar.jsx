import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-logo">
        <Link to='/' className="navbar-link">
          <span>MiCineTMDB</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
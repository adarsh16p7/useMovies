import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_logo'>
        <Link to='/'>useMovies</Link>
      </div>
      <div className='navbar_links'>
        <Link to='/' className='navbar_link'>
          Home
        </Link>
        <Link to='/favorites' className='navbar_link'>
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

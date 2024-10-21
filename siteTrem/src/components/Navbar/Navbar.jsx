import { Link } from 'react-router-dom';
import './../Navbar/Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="menu-wrapper">
        <div className="menu">
          <Link to="/"> <img src="./TremLogo.svg" alt="Trem Logo" /> </Link>
          <Link to="/sobre">SOBRE</Link>
          <Link to="/motorista">MOTORISTA</Link>
          <Link to="/app">APP</Link>
          <Link to="/contato">CONTATO</Link>
        </div>
      </div>
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;

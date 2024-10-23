import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './../Navbar/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="menu-wrapper">
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <NavLink to="/"> 
            <img src="./TremLogo.svg" alt="Trem Logo" /> 
          </NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>INÍCIO</NavLink>
          <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'active' : '')}>SOBRE</NavLink>
          <NavLink to="/motorista" className={({ isActive }) => (isActive ? 'active' : '')}>MOTORISTA</NavLink>
          <NavLink to="/app" className={({ isActive }) => (isActive ? 'active' : '')}>APP</NavLink>
          <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : '')}>CONTATO</NavLink>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;

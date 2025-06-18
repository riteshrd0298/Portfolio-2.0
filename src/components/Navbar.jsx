import React, { useState } from "react";
import "../main.css";
import { rd } from "../img";
import { NavLink } from "react-router-dom";

const Navbar = () => {
 const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const handleToggle = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };
   const handleNavClick = () => {
    if (isHeaderOpen) {
      setIsHeaderOpen(false);
    }
  }
  return (
     <header className={`header dark-background d-flex flex-column ${isHeaderOpen ? 'header-show' : ''}`}>
      <i
        className={`header-toggle d-xl-none bi ${isHeaderOpen ? 'bi-x' : 'bi-list'}`}
        onClick={handleToggle}
        style={{ cursor: 'pointer', fontSize: '24px' }}
      ></i>

      <div className="profile-img">
        <img src={rd} alt="" className="img-fluid rounded-circle" />
      </div>

     <NavLink to='/' className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Ritesh D-Patil</h1>
    </NavLink>

      <div className="social-links d-flex align-items-center justify-content-center gap-2">
      
        <a href="https://www.linkedin.com/in/ritesh-dpatil" target="blank" className="linkedin">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/riteshrd0298" target="blank" className="google-plus">
          <i className="bi  bi-github"></i>
        </a>
        <a href="#" className="instagram">
          <i className="bi bi-instagram"></i>
        </a>
      <a href="mailto:riteshddpatil@gmail.com">
  <i className="bi bi-envelope"></i>
</a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <NavLink to="/" className="nav-link" onClick={handleNavClick}>
              <i className="bi bi-house navicon"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className="nav-link" onClick={handleNavClick}>
              <i className="bi bi-person navicon"></i> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Resume" className="nav-link" onClick={handleNavClick}>
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/Project" className="nav-link" onClick={handleNavClick}>
              <i className="bi bi-briefcase navicon"></i> Projects
            </NavLink>
          </li>

          <li>
            <NavLink to='/Contact' className="nav-link" onClick={handleNavClick}>
              <i className="bi bi-envelope navicon"></i> Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar

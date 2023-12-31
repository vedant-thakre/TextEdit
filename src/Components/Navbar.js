import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/" onClick={handleHomeClick}>{props.title}</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link" exact to="/" onClick={handleHomeClick}>Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link"  to="/contact" onClick={handleContactClick}>Contact</NavLink>
            </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
        </div>
        </div>
    </div>
    </nav>
  )
}

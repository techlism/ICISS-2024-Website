import React from 'react';
import icisslogo from './../assets/icisslogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import {useLocation,NavLink} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    useLocation();
    return (    
    <nav className="navbar navbar-expand-lg" id='nav-bar'>
      <div className="container-fluid" id='nav-container'>
        <NavLink className="navbar-brand" to="/" style={{color:'#E4FBFF'}}>
          <img src={icisslogo} alt="iciss-logo" id='iciss-logo'/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{filter:'invert(100%)'}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link"  to="/" style={{color:'#E4FBFF'}}>Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle"  to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#E4FBFF'}}>
                About
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item"  to="/college">About IIEST</NavLink></li>
                <li><NavLink className="dropdown-item"  to="/department">Information Technology Department</NavLink></li>
                <li><NavLink className="dropdown-item"  to="/about">About ICISS</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/committee" style={{color:'#E4FBFF'}}>Committee</NavLink>
            </li>                        
            <li className="nav-item">
              <NavLink className="nav-link"  to="/speakers" style={{color:'#E4FBFF'}}>Speakers</NavLink>
           </li>
           <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle"  to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#E4FBFF'}}>
                Call for Papers
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item"  to="/tracks">Contribution Tracks</NavLink></li>
                <li><NavLink className="dropdown-item"  to="/guidelines">Author Guidelines</NavLink></li>
                {/* <li><NavLink className="dropdown-item"  to="/register">Registration Details</NavLink></li> */}
                <li><NavLink className="dropdown-item"  to="/submit">Submit Your Paper</NavLink></li>
              </ul>
            </li>           
            {/* <li className="nav-item">
            <NavLink className="nav-link"  to="/guidelines" style={{color:'#E4FBFF'}}>Guidelines</NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item"  to="/submission">Submission Guidelines</NavLink></li>
                <li><NavLink className="dropdown-item"  to="/presentation">Presentation Guidelines</NavLink></li>
              </ul>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link"  to="/register" style={{color:'#E4FBFF'}}>Registration</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/contact" style={{color:'#E4FBFF'}}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

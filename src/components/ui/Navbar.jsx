import React from 'react';
import icisslogo from '../../assets/ICISS.ico';
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
        <NavLink className="navbar-brand" to="/" style={{color:'#E4FBFF' , fontSize:'0.9rem'}}>
          <img src={icisslogo} alt="iciss-logo" id='iciss-logo'/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{filter:'invert(100%)'}}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link"  to="/" style={{color:'#E4FBFF' , fontSize:'0.9rem'}}>Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle"  to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#E4FBFF' , fontSize:'0.9rem'}}>
                About
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item"  to="/college">About IIEST</NavLink></li>
                <li><NavLink className="dropdown-item"  to="/department">Information Technology Department</NavLink></li>
                <li><NavLink className="dropdown-item"  to="/about">About ICISS</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/committee" style={{color:'#E4FBFF' , fontSize:'0.9rem'}}>Committee</NavLink>
            </li>                        
            <li className="nav-item">
              <NavLink className="nav-link"  to="/speakers" style={{color:'#E4FBFF' , fontSize:'0.9rem'}}>Speakers</NavLink>
           </li>
           <li className="nav-item dropdown">
              {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
<NavLink className="nav-link dropdown-toggle"  to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#E4FBFF' , fontSize:'0.9rem'}}>
                Call for Papers
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item"  to="/tracks">Contribution Tracks</NavLink></li>
                <li><NavLink className="dropdown-item"  to="/guidelines">Author Guidelines</NavLink></li>
                {/* <li><NavLink className="dropdown-item"  to="/register">Registration Details</NavLink></li> */}
                <li><NavLink className="dropdown-item"  to="/submit">Submit Your Paper</NavLink></li>
              </ul>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/schedule' style={{color:'#E4FBFF' , fontSize:'0.9rem'}}>Schedule</NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link"  to="/register" style={{color:'#E4FBFF' , fontSize:'0.9rem'}}>Registration</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle"  to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#E4FBFF' , fontSize:'0.9rem'}}>
                Venue
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item"  to="/visa">Visa Information</NavLink></li>
                <li><NavLink className="dropdown-item"  to="/venue">Venue</NavLink></li>
                {/* <li><NavLink className="dropdown-item"  to="/register">Registration Details</NavLink></li> */}
                {/* <li><NavLink className="dropdown-item"  to="/submit">Submit Your Paper</NavLink></li> */}
                <li><NavLink className={'dropdown-item'} to={'/tourist-destinations'}>Tourist Destinations</NavLink></li>
              </ul>
            </li>            
            <li className="nav-item">
              <NavLink className="nav-link"  to="/contact" style={{color:'#E4FBFF' , fontSize:'0.9rem'}}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

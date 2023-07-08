import styling from './Footer.module.css';
import {NavLink} from 'react-router-dom';
const Footer = ()=>{
    return(
        <footer className={styling.footer}>
            <div className={styling['footer-items']}>
            <NavLink to="/" style={{textDecoration:'none'}}>Home</NavLink>
            <NavLink to="/about" style={{textDecoration:'none'}}>About</NavLink>
            <NavLink to="/guidelines" style={{textDecoration:'none'}}>FAQs</NavLink>            
            <NavLink to="/contact" style={{textDecoration:'none'}}>Contact Us</NavLink>
            <NavLink to="/register" style={{textDecoration:'none'}}>Register</NavLink>
            <NavLink to="/register" style={{textDecoration:'none'}}>Submit a Paper</NavLink>
            </div>
            <p className={styling.footertext}>© ICISS </p>
        </footer>
    )
}
export default Footer;
import styling from './HomePage.module.css';
import imgsrc from '../../assets/bg.png'
import AboutCollege from '../ui/AboutCollege';
import Timeline from '../ui/Timeline';
// import Pricing from '../Pricing';
// import Sponsors from '../Sponsors';
import About from '../ui/About'
import sponsorimg from '../../assets/cdac.jpeg';

import {useLocation,NavLink} from 'react-router-dom';
import TimeLeftCounter from '../ui/TimeLeftCounter';
import AddressMap from '../ui/AddressMap';
const navlinkStyling = {
    textDecoration:'none',
    textAlign:'center',
    color:'#EDEEF7',
    fontSize:'0.94rem',
    padding:'2px'
}
const HomePage = ()=>{
    useLocation();
    return(
        <div className={styling['main-home']}>
            <div className={styling['title-img']}>
            <img src={imgsrc} className={styling['victoria']} alt='Victoria Memorial'></img>
                <h1>
                    INTERNATIONAL CONFERENCE
                    ON <br/> INTELLIGENT SYSTEMS AND SECURITY <br/> (ICISS 2024)
                </h1>                
            </div>
            <div className={styling['conf-date']}>
                <h1>Conference Date:</h1>
                <h2>20<sup>th</sup> to 22<sup>nd</sup> December 2024</h2>
                <TimeLeftCounter/>            
            </div>
            <div className={styling['conf-date']}>
                <AddressMap/>
            </div>            
            <h2 className={styling.subheading}>In Association with</h2>
            <div className={styling['sponsordiv']}>
                <div className={styling['sponsor-subdiv']}>
                    <img src={sponsorimg} alt="cdac" /> 
                    <h3 className={styling['sponsor-caption']}>CDAC, Kolkata</h3> 
                </div>
                <div className={styling['sponsor-subdiv']}>
                    <img src={'/kolkatapolice.svg'} alt="kolkata police logo" />
                    <h3 className={styling['sponsor-caption']}>Kolkata Police</h3>  
                </div>
                                      
            </div>
                         
            {/* <Sponsors src1={sponsorimg} src2={sponsorimg} src3={sponsorimg}/>
            <h2 className={styling.subheading}>Our Sponsors</h2>
            <Sponsors src1={sponsorimg} src2={sponsorimg} src3={sponsorimg}/> */}
            <AboutCollege/>
            {/* About ICISS */}
            <div className={styling.aboutdiv}>
                <About/>             
            </div>          
            <h2 className={styling.subheading}>Timeline of Events</h2>
            <Timeline/>          
            <div className={styling['register-ref-div']}>
                <div className={styling['button-wrapper']}>
                    <NavLink to='/contact' style={navlinkStyling}>Contact us for any other queries</NavLink>
                </div>
            </div>            
        </div>
    )
}

export default HomePage;
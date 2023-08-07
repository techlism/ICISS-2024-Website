import styling from './HomePage.module.css';
import imgsrc from '../../assets/iiest-main.jpg'
import AboutCollege from '../AboutCollege';
import Timeline from '../Timeline';
// import Pricing from '../Pricing';
// import Sponsors from '../Sponsors';
import About from '../About'
import sponsorimg from '../../assets/cdac.jpeg';
import {useLocation,NavLink} from 'react-router-dom';
import TimeLeftCounter from '../TimeLeftCounter';
const HomePage = ()=>{
    useLocation();
    return(
        <div className={styling['main-home']}>
            <div className={styling['title-img']}>
            <img src={imgsrc} className={styling['college-photo']} alt='IIEST, Shibpur'></img>
                <h1>
                    1<sup>st</sup> International Conference
                    on <br/> Intelligent Systems and Security <br/> (ICISS 2024)
                </h1>                
            </div>
            <div className={styling['conf-date']}>
                <h1>Conference Date:</h1>
                <h2>20<sup>th</sup> to 22<sup>nd</sup> December 2024</h2>
                <TimeLeftCounter/>            
            </div>
            <h2 className={styling.subheading}>In Association with</h2>
            <div className={styling['sponsordiv']}>
                <img src={sponsorimg} alt="cdac" />                
            </div>
            <h3 className={styling['sponsor-caption']}>CDAC, Kolkata</h3>
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
                    <NavLink to='/contact' style={{textDecoration:'none',textAlign:'center',color:'#EDEEF7'}}>Contact us for any other queries</NavLink>
                </div>
            </div>            
        </div>
    )
}

export default HomePage;
import Pricing from "../Pricing";
import styling from './HomePage.module.css';
import {useLocation,NavLink} from 'react-router-dom';
const RegistrationPage = ()=>{
    useLocation();
    return(
        <>
        <h2 className={styling.subheading}>Conference Registration Fee</h2>            
        <Pricing/>
        <p style={{
            color:'#EDEEF7',
            fontWeight:'500',
            maxWidth:'60vw',
            textAlign:'center',
            marginLeft:'20vw',
            marginRight:'20vw',
            fontSize:'1.2rem'
        }}>
            Kindly note that the permissible page length for manuscript submissions is limited to 12 pages. In the event of exceeding this limit, an additional charge of INR 500 per page or $10 per page will apply. The maximum page count with the surcharge is set at 15 pages.
        </p>            
        <div className={styling['register-ref-div']}>
                <div className={styling['button-wrapper']}>
                    <NavLink to='/register' style={{textDecoration:'none',textAlign:'center',color:'#EDEEF7'}}>Proceed to Register</NavLink>
                </div>
        </div> 
        </>
        )
}

export default RegistrationPage;
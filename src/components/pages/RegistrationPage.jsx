import Pricing from "../Pricing";
import styling from './HomePage.module.css';
import {useLocation,NavLink} from 'react-router-dom';
const RegistrationPage = ()=>{
    useLocation();
    return(
        <>
        <h2 className={styling.subheading}>Conference Registration Fee</h2>            
        <Pricing/>
        <div className={styling['register-ref-div']}>
                <div className={styling['button-wrapper']}>
                    <NavLink to='/register' style={{textDecoration:'none',textAlign:'center',color:'#EDEEF7'}}>Proceed to Register</NavLink>
                </div>
        </div> 
        </>
        )
}

export default RegistrationPage;
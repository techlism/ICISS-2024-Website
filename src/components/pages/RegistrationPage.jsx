import Pricing from "../Pricing";
import styling from './HomePage.module.css';
import {useLocation} from 'react-router-dom';
const RegistrationPage = ()=>{
    useLocation();
    return(
        <>
        <h2 className={styling.subheading}>Conference Registration Fee</h2>            
        <Pricing/>
        {/* <p style={
            {
                color:'#EDEEF7',
                fontWeight:'500',
                fontSize:'3.5rem',
                textAlign:'center',
                height:'32vh'
            }
        }>To be updated later.</p> */}
        {/* <p style={{
            color:'#EDEEF7',
            fontWeight:'500',
            maxWidth:'60vw',
            textAlign:'center',
            marginLeft:'20vw',
            marginRight:'20vw',
            fontSize:'1.2rem'
        }}>
            Kindly note that the permissible page length for manuscript submissions is limited to 12 pages. In the event of exceeding this limit, an additional charge of INR 500 per page or $10 per page will apply. The maximum page count with the surcharge is set at 15 pages.
        </p>       */}
        <div 
            style={{display:'flex',justifyContent:'center'}}
        >
            {/* Code written by Kundan */}
            <button 
                style={{
                padding: '15px',
                paddingLeft: '30px',
                paddingRight: '30px',
                borderRadius: '8px',
                border: 'none',
                marginTop: '10px',
                marginBottom: '30px'
                }}
            >
                <a href="https://cmt3.research.microsoft.com/ICISS2024" target='blank' 
                    style={{
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '1.5rem'
                    }}
                >
                    Submit Your Paper
                </a>
            </button>        
        </div>      

        </>
        )
}

export default RegistrationPage;
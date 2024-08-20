import Pricing from '../ui/Pricing';
import styling from './HomePage.module.css';
import {useLocation} from 'react-router-dom';
const RegistrationPage = ()=>{
    useLocation();
    return(
        <>
        <h2 className={styling.subheading}>Conference Registration Fee<sup>*</sup></h2>            
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
            style={{display:'flex',flexDirection:'column',alignItems:'center'}}
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
        <div
            style={{
                color:'#EDEEF7',
                fontWeight:'600',
                fontSize:'1.2rem',
                textAlign:'center',
                maxWidth:'60vw',
                marginLeft:'20vw',
                marginRight:'20vw'
            }}
        >
            <p>
                For registration NEFT or Demand Draft in favor of
            </p>
            <p>
                CONTINUING EDUCATION CENTRE BESUS
                Acc No. <span style={{
                    fontFamily:'monospace',
                }}>1532010011963 </span>
                Punjab National Bank, BESUS Branch, 
                IFSC: <span style={{
                    fontFamily:'monospace',
                }}>PUNB0153220</span>.
            </p>
        </div>                    
        </div>      
            <p 
            style={{
                color:'#EDEEF7',
                fontWeight:'500',
                fontSize:'1.2rem',
                textAlign:'center',
                marginTop:'20px'
            }}
            >
               <sup>*</sup>All the Registration Fees are subject to 18% GST.
            </p>   
        </>
        )
}

export default RegistrationPage;
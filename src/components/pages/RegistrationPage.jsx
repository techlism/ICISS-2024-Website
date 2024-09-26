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
                type='submit'
            >
                {/*  */}
                <a  target='_blank'
                    href="https://cmt3.research.microsoft.com/ICISS2024"
                    style={{
                        textDecoration: 'none',
                        fontWeight: 500,
                        fontSize: '1.5rem'
                    }}
                >                    
                   Register
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
                marginRight:'20vw',
                fontFamily: 'monospace, Courier' 
            }}
        >
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>Account Name</td>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>CONTINUING EDUCATION CENTRE BESUS</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>Bank Name</td>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>PUNJAB NATIONAL BANK</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>Branch Name</td>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>BESUS BRANCH</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>Account Number</td>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>1532010011963</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>IFSC</td>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>PUNB0153220</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>MICR Code</td>
                        <td style={{ border: '1px solid #EDEEF7', padding: '10px' }}>700024396</td>
                    </tr>
                </tbody>
            </table>
        </div>                    
        </div>        
            <p 
            style={{
                color:'#EDEEF7',
                fontWeight:'500',
                fontSize:'1.2rem',
                textAlign:'center',
                marginTop:'10px'
            }}
            >
               Last date of author's registration is 8 Nov 2024. After that, an additional fee of ₹1000 for Indian participants and $50 for foreign participants must be paid.
            </p>   
        </>
        )
}

export default RegistrationPage;
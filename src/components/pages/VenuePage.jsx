import AddressMap from "../ui/AddressMap";
const VenuePage = () => {
  return (
    <div 
    style={{
        maxWidth:'80vw',
        marginLeft:'10vw',
        marginRight:'10vw'

    }}>
        <AddressMap/>
        <h1
            style={{
                textAlign:'center',
                fontWeight:'700',
                color:'#e4fbff',
                fontSize:'4.5rem'
            }}
        >
            How to Reach ?
        </h1>
        <div style={{
            color:'#E4FBFF',
            fontFamily: "'Poppins',sans-serif",
            backdropFilter: 'blur(16px) saturate(180%)',
            backgroundColor: '#1e0149',
            borderRadius: '8px',
            padding: '25px',
            margin: '50px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            alignContent:'center',
        }}>
            <div
            style={{
                border:'solid 1px #e4fbff',
                padding:'15px',
                borderRadius:'8px',
                width:'50vw',
                margin:'10px'
            }}>
                <h2>Nearest Airport </h2>
            <ul>
                <li>
                    <h3>
                        Netaji Subhash Chandra Bose International Airport
                    </h3>
                    <p>22 km</p>
                </li>

            </ul>

            </div>
            <div
            style={{
                border:'solid 1px #e4fbff',
                padding:'15px',
                borderRadius:'8px',
                width:'50vw'
            }}>
            <h2>Nearest Railway Stations</h2>
            <ul>
                <li>
                    <h3>Howrah Railway Station</h3>
                    <p>5 km</p>
                </li>
                <li>
                    <h3>Shalimar Railway Station</h3>
                    <p>2 km</p>
                </li>
                <li>
                    <h3>Sealdah Railway Station</h3>
                    <p>12 km</p>
                </li>
            </ul>
            </div>
        </div>      
    </div>  
  );
};
export default VenuePage;


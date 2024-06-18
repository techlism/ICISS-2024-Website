import ConferenceTopics from '../ui/ConferenceTopics.jsx'
import springerLogo from '../../assets/springer.png'
const ContributionTrackPage = ()=>{
    return(
        <div style={{margin:'70px'}}>
            <ConferenceTopics/>
            <p style={{
                'textAlign':'center',
                'fontSize':'1.5rem',
                fontWeight:'500',
                color:'#EDEEF7',
            }}>
                Note : All the accepted papers will be published through a <img src={springerLogo} alt="springer" style={{backgroundColor:'#edeef7',backgroundClip:'content-box',borderRadius:'8px'}}/> series.
            </p>
            <p
                style={{
                    'textAlign':'center',
                    'fontSize':'1.5rem',
                    fontWeight:'500',
                    color:'#EDEEF7',
                }}
            >
                Best papers (1st, 2nd and 3rd ) in each track of the conference may be considered for publication in <strong>Journal of The Institution of Engineers (India): Series B (SCImago and SCOPUS indexed)</strong>  with appropriate enhancement (up to 80%) and suitable peer review process of the Journal.
            </p>            
        </div>
    )
}
export default ContributionTrackPage;
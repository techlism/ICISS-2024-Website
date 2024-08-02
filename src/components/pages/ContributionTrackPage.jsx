import ConferenceTopics from '../ui/ConferenceTopics.jsx'
import springerLogo from '../../assets/springer.png'
const ContributionTrackPage = ()=>{
    return(
        <div style={{margin:'70px'}}>
            <ConferenceTopics/>
            <p style={{
                'textAlign':'center',
                'fontSize':'1rem',
                fontWeight:'500',
                color:'#EDEEF7',
                textAlign : 'center',
            }}>
                Note: All Accepted and presented papers will be published by <span style={{background : 'white',paddingTop : '6px',paddingBottom : '6px' , borderRadius:'8px',margin : '2px'}}><img src={springerLogo}/></span> in a book series of “Lecture Notes in Networks and Systems (LNNS)” (Confirmed) That Is Indexed By SCOPUS, INSPEC, WTI Frankfurt EG, ZbMATH, SCImago, Web of Science.            
            </p>
            <p style={{marginBottom : 0 , paddingBottom : 0, textAlign : 'center', fontSize: '1rem',color : '#EDEEF7', textAlign : 'center' , fontWeight : 500}}>
                Best papers (1st, 2nd and 3rd ) in each track of the conference may be considered for publication in Journal of <strong>The Institution of Engineers (India): Series B (SCImago and SCOPUS indexed)</strong> with appropriate enhancement (up to 80%) and suitable peer review process of the Journal.
            </p>

            {/* <p
                style={{
                    'textAlign':'center',
                    'fontSize':'1.5rem',
                    fontWeight:'500',
                    color:'#EDEEF7',
                }}
            >
                Best papers (1st, 2nd and 3rd ) in each track of the conference may be considered for publication in <strong>Journal of The Institution of Engineers (India): Series B (SCImago and SCOPUS indexed)</strong>  with appropriate enhancement (up to 80%) and suitable peer review process of the Journal.
            </p>             */}
        </div>
    )
}
export default ContributionTrackPage;
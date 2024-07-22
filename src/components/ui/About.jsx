// AboutCard for About Conference - DIV
import springerLogo from '../../assets/springer.png';
import styling from './About.module.css';
const About = ()=>{
 return(
    <div className={styling['about-conf-main']}>
        <h1>
            About International Conference<br/>
            on Intelligent Systems and Security
        </h1>
        <hr />
        <p style={{fontWeight:'500'}}>
            The International Conference on Intelligent Systems and Security is set
            to take place in December 2024, and will bring together industry experts,
            practitioners, and researchers in the field.<br/> Attendees will have the opportunity
            to network and collaborate with other professionals in the field. This
            conference is highly recommended for those looking to stay up-to-date
            with the latest developments in intelligent systems and security, and to
            exchange ideas and collaborate on future projects.
        </p>
            <p style={{fontSize:'1.5rem',marginTop:'15px'}}><strong>Aim:</strong></p> 
            The aim of ICISS 2024 is to bring together researchers, practitioners, and industry experts from around the world to foster the exchange of ideas, advances, and innovations in the field of intelligent systems and security.
            By promoting collaboration and knowledge sharing, ICISS aims to drive the development and adoption of intelligent systems and security technologies, addressing the emerging challenges and opportunities in various domains.<br/>
            <p style={{fontSize:'1.5rem',marginTop:'15px'}}><strong>Scope:</strong></p>
            <p>
            ICISS welcomes contributions in the form of research papers, case studies, and industry presentations, covering a wide range of topics related to intelligent systems and security.
            The conference encourages multidisciplinary approaches and invites submissions that explore the union and intersection of intelligent systems and security.  
            </p>
            <p>
            Note : All the accepted papers will be published through a springer
            <img src={springerLogo} alt="springer" style={{backgroundColor:'#edeef7',backgroundClip:'content-box',borderRadius:'8px'}}/> (proposal submitted).
            </p>
            {/* <p>
                Best papers (1st, 2nd and 3rd ) in each track of the conference may be considered for publication in <strong>Journal of The Institution of Engineers (India): Series B (SCImago and SCOPUS indexed)</strong>  with appropriate enhancement (up to 80%) and suitable peer review process of the Journal.
            </p> */}
    </div>
 )    
}
export default About;
// About ICISS Page
import styling from './AboutPage.module.css'
import About from '../About';
import ConferenceTopics from '../ConferenceTopics.jsx';
const AboutPage = ()=>{
    return(
        <div className={styling['main-about']}>
            <About/>
            <ConferenceTopics/>
            {/* <div className={styling['list-div']}>
                <div className={styling['list']}>
                <h2 className={styling.h2}>Intelligent Systems</h2>
                <ul>
                    <li>Data Mining</li>
                    <li>Image Processing</li>
                    <li>Neural Networks</li>
                    <li>Natural Language Processing</li>
                    <li>Video Processing</li>
                    <li>Computational Intelligence</li>
                    <li>Expert Systems</li>
                    <li>Human Computer Interaction</li>
                    <li>Deep Learning</li>
                    <li>Smart Cities</li>
                    <li>Internet of Things</li>
                    <li>Ambient Assisted Living</li>
                    <li>Smart Healthcare</li>
                    <li>Intelligent Transportation</li>
                    <li>Data Science</li>
                    <li>Sensing and Sensor Networks</li>
                    <li>Agents and Multi-agent Systems</li>
                    <li>Context-aware pervasive systems</li>
                </ul>         
                </div>
                <div className={styling['list']}>
                    <h2 className={styling.h2}>Information Security</h2>
                    <ul>
                        <li>Applied Cryptography</li>
                        <li>Quantum Cryptography</li>
                        <li>Error Correcting Codes</li>
                        <li>Authentication</li>
                        <li>Big Data Security and Privacy</li>
                        <li>Biometry Applications and Standards</li>
                        <li>Cloud Security / Privacy</li>
                        <li>Computer Forensics</li>
                        <li>Cyber Crime & Security</li>
                        <li>Physical Layer Security</li>
                        <li>IoT Security</li>
                        <li>Mobile Security</li>
                        <li>Network Security</li>
                        <li>Malware Analysis</li>
                        <li>Security Risk Assessment</li>
                        <li>Web Application Security</li>
                        <li>Privacy and Analytics for Social Media</li>
                        <li>Trust Management</li>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}

export default AboutPage;
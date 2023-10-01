// About ICISS Page
import styling from './AboutPage.module.css'
import About from '../About';
import ConferenceTopics from '../ConferenceTopics.jsx';
const AboutPage = ()=>{
    return(
        <div className={styling['main-about']}>
            <About/>
            <ConferenceTopics/>
        </div>
    )
}

export default AboutPage;
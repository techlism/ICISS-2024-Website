// About ICISS Page
import styling from './AboutPage.module.css'
import About from '../ui/About';
import ConferenceTopics from '../ui/ConferenceTopics';
const AboutPage = ()=>{
    return(
        <div className={styling['main-about']}>
            <About/>
            <ConferenceTopics/>
        </div>
    )
}

export default AboutPage;
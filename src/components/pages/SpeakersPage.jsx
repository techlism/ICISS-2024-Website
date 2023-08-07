import ProfessorCard from "../../ProfessorCard";
import profile from '../../assets/profile.jpg'
import styling from './SpeakersPage.module.css'
const SpeakersPage = ()=>{
    return(
        <div className={styling['main-speakerpage']}>
            <div className={styling.professors}>
                <h1 className={styling.heading}>Our Speakers</h1>
                <ProfessorCard name='Prof. Abc Xyz' description='Professor at Department of Information Technology, IIEST' imgsrc={profile}/>
                <ProfessorCard name='Prof. Abc Xyz' description='Professor at Department of Information Technology, IIEST' imgsrc={profile}/>
                <ProfessorCard name='Prof. Abc Xyz' description='Professor at Department of Information Technology, IIEST' imgsrc={profile}/>
                <ProfessorCard name='Prof. Abc Xyz' description='Professor at Department of Information Technology, IIEST' imgsrc={profile}/>
                <ProfessorCard name='Prof. Abc Xyz' description='Professor at Department of Information Technology, IIEST' imgsrc={profile}/>
                <ProfessorCard name='Prof. Abc Xyz' description='Professor at Department of Information Technology, IIEST' imgsrc={profile}/>
                <ProfessorCard name='Prof. Abc Xyz' description='Professor at Department of Information Technology, IIEST' imgsrc={profile}/>
                <ProfessorCard name='Prof. Abc Xyz' description='Professor at Department of Information Technology, IIEST' imgsrc={profile}/>
                <ProfessorCard name='Prof. Abc Xyz' description='Professor at Department of Information Technology, IIEST' imgsrc={profile}/>
                <ProfessorCard name='Prof. Abc Xyz' description='Professor at Department of Information Technology, IIEST' imgsrc={profile}/>                        
            </div>
        </div>
    )
}

export default SpeakersPage;
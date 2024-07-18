// import ProfessorCard from "../../ProfessorCard";
// import profile from '../../assets/profile.jpg'

import styling from './SpeakersPage.module.css'
const SpeakersPage = ()=>{
    return (
        <div className={styling['main-speakerpage']}>
            <div className={styling.professors}>
                <h1 className={styling.heading}>Our Speakers</h1>
                <div className={styling['speakers-div']}>
                    <div className={styling['speaker']}>
                        <img
                            src="/speaker01.jpg"
                            alt="Debdeep Mukhopadhyay Image"
                            
                        />
                        <h1>Professor Debdeep Mukhopadhyay</h1>
                        <p>
                            Indian Institute of
                            Technology, Kharagpur, India
                        </p>
                    </div>
                    <div className={styling['speaker']}>
                        <img
                            src="/speaker02.png"
                            alt="Sansanee Auephanwiriyakul Image"
                            
                        />
                        <h1>Professor Sansanee Auephanwiriyakul</h1>
                        <p>
                            Chiang Mai
                            University, Chiangmai, Thailand
                        </p>
                    </div>
                    <div className={styling['speaker']}>
                        <img
                            src="https://drdo.gov.in/drdo/sites/default/files/drdo-official-images/DG_ECS18042024.png"
                            alt="Dr. BK DAS Photo"
                            
                        />
                        <h1>Dr B K Das</h1>
                        <p>
                            Distinguished Scientist & Director General - Electronics & Communication Systems (ECS), DRDO
                        </p>
                    </div> 
                    <div className={styling['speaker']}>
                        <img
                            src="/speaker4.jpg"
                            alt=" Sanjay Kumar Das, MD, WEBEL, Kolkata Photograph"
                            
                        />
                        <h1> Sanjay Kumar Das</h1>
                        <p>
                            MD, WEBEL, Kolkata
                        </p>
                    </div>                                        
                    <p style={{fontSize : '30px'}}>Some more speakers will be added soon.</p>
                </div>
            </div>
        </div>
    );
}

export default SpeakersPage;
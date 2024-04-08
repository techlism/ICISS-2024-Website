// import ProfessorCard from "../../ProfessorCard";
// import profile from '../../assets/profile.jpg'

import styling from './SpeakersPage.module.css'
const SpeakersPage = ()=>{
    return (
        <div className={styling['main-speakerpage']}>
            <div className={styling.professors}>
                <h1 className={styling.heading}>Our Speakers</h1>
                <div style={{color : '#EDEEF7', alignItems:'center'}}>
                    <div style={{ width: '25%', padding: '10px' , border : 'solid 2px black', borderRadius : '8px', marginRight : '5px'}}>
                        <img
                            src="/speaker01.jpg"
                            alt="Debdeep Mukhopadhyay Image"
                            style={{ borderRadius: '8px', width: '100%' }}
                        />
                        <h1>Debdeep Mukhopadhyay</h1>
                        <p>
                            Professor, Computer Science and Engineering, Indian Institute of
                            Technology, Kharagpur, India
                        </p>
                    </div>
                    <div style={{ width: '25%', padding: '10px' ,border : 'solid 2px black', borderRadius : '8px'}}>
                        <img
                            src="/speaker02.png"
                            alt="Sansanee Auephanwiriyakul Image"
                            style={{ borderRadius: '8px', width: '100%' }}
                        />
                        <h1>Sansanee Auephanwiriyakul</h1>
                        <p>
                            Associate Professor, Computer Engineering Department, Chiang Mai
                            University, Chiangmai, Thailand
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpeakersPage;
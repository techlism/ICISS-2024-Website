import styling from './SpeakersPage.module.css'
const SpeakersPage = ()=>{
    return (
        <div className={styling['main-speakerpage']}>
            <div className={styling.professors}>
                <h1 className={styling.heading}>Our Speakers</h1>
                <div className={styling['speakers-div']}>
                    <div className={styling.speaker}>
                        <img src="https://www.cs.colostate.edu/~iray/pics/cnsPLIR21.jpeg" alt="Indrakshi Ray" />
                        <h1>Professor Indrakshi Ray</h1>
                        <p>
                            Colorado State University, USA
                        </p>
                    </div>
                    <div className={styling.speaker}>
                        <img src="https://www.memphis.edu/cs/images/people/dasgupta-big.jpg" alt="Dipankar Dasgupta" />
                        <h1>Prof. Dipankar Dasgupta</h1>
                        <p>
                            Fellow NAI, IEEE & Distinguished Speaker<br/>
                            Director, Center for Information Assurance<br/>
                            William Hill Professor in Computer Science<br/>
                            The University of Memphis
                        </p>
                    </div>
                    <div className={styling['speaker']}>
                        <img
                            src="/speaker01.jpg"
                            alt="Debdeep Mukhopadhyay"
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
                            alt="Sansanee Auephanwiriyakul"
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
                            alt="Dr. BK DAS"
                        />
                        <h1>Dr B K Das</h1>
                        <p>
                            Distinguished Scientist & Director General - Electronics & Communication Systems (ECS), DRDO
                        </p>
                    </div> 
                    <div className={styling['speaker']}>
                        <img
                            src="/speaker4.jpg"
                            alt=" Sanjay Kumar Das, MD, WEBEL, Kolkata"
                        />
                        <h1> Sanjay Kumar Das</h1>
                        <p>
                            MD, WEBEL, Kolkata
                        </p>
                    </div>    
                    <div className={styling['speaker']}>
                        <img
                            src="https://resource-cms.springernature.com/springer-cms/rest/v1/content/11382/data/v2"
                            alt="Dr. Aninda Bose"
                        />
                        <h1>Dr. Aninda Bose</h1>
                        <p>
                            Executive Editor,
                            Interdisciplinary Applied Sciences, Computational Intelligence, Energy <br/>
                            Springer Nature, London
                        </p>
                    </div>    
                    <div className={styling['speaker']}>
                        <img
                            src="/speaker5.jpeg"
                            alt="Prof. Sanasam Ranbir Singh"
                        />
                        <h1>Prof. Sanasam Ranbir Singh</h1>
                        <p>
                            Indian Institute of Technology, Guwahati, India
                        </p>
                    </div>
                    <div className={styling.speaker}>
                        <img src={'https://www.icegov.org/wp-content/uploads/saibal-kumar-pal.png'} alt="Saibal Kumar Pal" />
                        <h1>
                            Dr. Saibal Kumar Pal
                        </h1>
                        <p>
                            Scientist 'G' and Head Cryptology Division, DRDO, Scientific Research Group
                        </p>
                    </div>                                                                                 
                    <p style={{fontSize : '30px'}}>Some more speakers will be added soon.</p>
                </div>
            </div>
        </div>
    );
}

export default SpeakersPage;
import TCPMembers from '../tcpList';
import ProfessorCard from '../ui/ProfessorCard'
import styling from './CommitteePage.module.css';

const renderTCPMembers = () => {
    return TCPMembers
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((member) => {
            return (
                <tr>
                    <td>{member.name}</td>
                    <td>{member.organization}</td>
                </tr>
            )
        })
}

const CommitteePage = ()=>{    
    return(
        <div className={styling['main-committeepage']} style={{marginTop:'25px'}}>
            <div className={styling.professors}>
                <h2 className={styling.h2} >Chief Patron:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Parthasarathi Chakrabarti' description='Director, IIEST, Shibpur, India'/>
                </div>

                <h2 className={styling.h2} >Patron:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Hafizur Rahaman' description='IIEST, Shibpur, India'/>
                </div>
                <h2 className={styling.h2} >General Chairs:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Santi Prasad Maity' description='IIEST, Shibpur, India'/>
                    <ProfessorCard name='Arindam Biswas' description='IIEST, Shibpur, India'/>
                    <ProfessorCard name='Aditya Sinha' description='CDAC Kolkata, India'/>
                </div>
                <h2 className={styling.h2} >General Co-Chairs:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Santosh K. Pandey' description="MEITy, GoI, India"/>
                    <ProfessorCard name='Chandan Koner' description="Kazi Nazrul University, India"/>
                </div>
                <h2 className={styling.h2} >Organizing Chair:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Shyamalendu Kandar' description='IIEST, Shibpur, India'/>
                </div>
                <h2 className={styling.h2} >Organizing Co-Chairs:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Ruchira Naskar' description='IIEST, Shibpur, India'/>
                    <ProfessorCard name='Nirnay Ghosh' description='IIEST, Shibpur, India'/>
                </div>
                
                <h2 className={styling.h2} >Program Chairs:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Anthony TS Ho' description='University of Surrey, England'/>
                    <ProfessorCard name='Claude DELPHA' description='Université Paris Saclay, France'/>
                    <ProfessorCard name='Hideki Ochiai' description='Yokohama National University, Japan'/>
                    <ProfessorCard name='Debasis Giri' description='MAKAUT, India'/>
                    <ProfessorCard name='Mrinal Mandal' description='University of Alberta, Canada'/>
                    <ProfessorCard name='Koushik Sinha' description='Southern Illinois University, USA'/>
                </div>
                <h2 className={styling.h2} >International Advisory Committee:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Bhabani P Sinha' description='ISI Kolkata, India'/>
                    <ProfessorCard name='N. K. Goyal' description="CMAI Association of India"/>
                    <ProfessorCard name="Valentin Brimkov" description="Buffalo State University, USA"/>
                    <ProfessorCard name="Reneta Barneva" description="State University of New York at Fredonia, USA"/>
                    <ProfessorCard name='Athanasios V. Vasilakos' description='UiA, Norway'/>
                    <ProfessorCard name='Adam Slowik' description='Koszalin University of Technology, Poland'/>
                    <ProfessorCard name='Xin-She Yang' description='Middlesex University London, UK'/>
                    <ProfessorCard name='Takako Hashimoto' description='Chiba University of Commerce, Japan'/>
                    <ProfessorCard name='Valentina E. Balas' description='Aurel Vlaicu University of Arad, ROMANIA'/>
                    <ProfessorCard name='Jon Hall' description='The Open University, Milton Keynes, UK'/>
                    <ProfessorCard name='Mohammad Shahidehpour' description='Illinois Institute of Technology, Chicago, USA'/>
                    <ProfessorCard name='Rajkumar Buyya' description='University of Melbourne, Australia'/>
                   
                </div>
                <h2 className={styling.h2} >Website Committee:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name="Indrajit Banerjee" description="IIEST, Shibpur, India"/>
                    <ProfessorCard name = "Kundan Kumar" description="IIEST, Shibpur, India"/>
                    <ProfessorCard name = "Sumit Mangrati" description="IIEST, Shibpur, India"/>

                </div>
                <h2 className={styling.h2} >Organizing Committee:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name="Prasun Ghoshal" description="IIEST, Shibpur, India"/>
                    <ProfessorCard name="Sukanta Das" description="IIEST, Shibpur, India"/>
                    <ProfessorCard name="Chandan Giri" description="IIEST, Shibpur, India"/>
                    <ProfessorCard name="Indrajit Banerjee" description="IIEST, Shibpur, India"/>
                    <ProfessorCard name="Tuhina Samanta" description="IIEST, Shibpur, India"/>
                    <ProfessorCard name="Surajit Roy" description="IIEST, Shibpur, India"/>
                    <ProfessorCard name="Surajit Ghosh" description="IIEST, Shibpur, India"/>
                    <ProfessorCard name="Malay Kule" description="IIEST, Shibpur, India"/>
                    <ProfessorCard name="Samit Biswas" description="IIEST, Shibpur, India"/>
                </div>
                <h2 className={styling.h2} style={{textAlign:'center'}} >Technical Program Committee:</h2>
                <div className={styling['tcp-table']}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Institute</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTCPMembers()}
                    </tbody>                    
                </table>

                </div>
            </div>
        </div>
    )
}

export default CommitteePage;
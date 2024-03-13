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
    return (
        <div className={styling['main-committeepage']} style={{marginTop:'25px'}}>
            <div className={styling.professors}>
                <h2 className={styling.h2} >Chief Patron:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Parthasarathi Chakrabarti' description='Director, IIEST, Shibpur, India' page = "https://www.iiests.ac.in/IIEST/Faculty/iiests-director"/>
                </div>

                <h2 className={styling.h2} >Patron:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Hafizur Rahaman' description='IIEST, Shibpur, India' page = "https://www.iiests.ac.in/IIEST/Faculty/it-rahaman_h"/>
                </div>
                <h2 className={styling.h2} >General Chairs:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Santi Prasad Maity' description='IIEST, Shibpur, India' page="https://www.iiests.ac.in/IIEST/Faculty/it-santipmaity"/>
                    <ProfessorCard name='Arindam Biswas' description='IIEST, Shibpur, India' page="https://www.iiests.ac.in/IIEST/Faculty/it-abiswas"/>
                    <ProfessorCard name='Aditya Sinha' description='CDAC Kolkata, India' page='https://www.linkedin.com/in/adityaksinha/?originalSubdomain=in'/>
                </div>
                <h2 className={styling.h2} >General Co-Chairs:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Santosh K. Pandey' description="MEITy, GoI, India" page='https://ieeexplore.ieee.org/author/37089794568'/>
                    <ProfessorCard name='Chandan Koner' description="Kazi Nazrul University, India"/>
                </div>
                <h2 className={styling.h2} >Organizing Chair:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Shyamalendu Kandar' description='IIEST, Shibpur, India' page = "https://www.iiests.ac.in/IIEST/Faculty/it-shyamalenduk"/>
                </div>
                <h2 className={styling.h2} >Organizing Co-Chairs:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Ruchira Naskar' description='IIEST, Shibpur, India' page="https://www.iiests.ac.in/IIEST/Faculty/it-ruchira"/>
                    <ProfessorCard name='Nirnay Ghosh' description='IIEST, Shibpur, India' page="https://www.iiests.ac.in/IIEST/Faculty/cs-nirnay"/>
                </div>
                
                <h2 className={styling.h2} >Program Chairs:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Anthony TS Ho' description='University of Surrey, England' page='https://www.surrey.ac.uk/people/anthony-ts-ho'/>
                    <ProfessorCard name='Claude DELPHA' description='Université Paris Saclay, France' page='https://l2s.centralesupelec.fr/en/u/delpha-claude/'/>
                    <ProfessorCard name='Hideki Ochiai' description='Yokohama National University, Japan' page='https://vtsociety.org/contact/hideki-ochiai'/>
                    <ProfessorCard name='Debasis Giri' description='MAKAUT, India' page='https://makautwb.ac.in/plug.php?e=WBUTtool&f=faculty_profile&user_id=90'/>
                    <ProfessorCard name='Mrinal Mandal' description='University of Alberta, Canada' page='https://apps.ualberta.ca/directory/person/mmandal'/>
                    <ProfessorCard name='Koushik Sinha' description='Southern Illinois University, USA' page='https://www2.cs.siu.edu/~ksinha/'/>
                </div>
                <h2 className={styling.h2} >International Advisory Committee:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Bhabani P Sinha' description='ISI Kolkata, India' page='https://www.isical.ac.in/~bhabani/'/>
                    <ProfessorCard name='N. K. Goyal' description="CMAI Association of India" page='https://www.cmai.asia/propfile_NKG.php'/>
                    <ProfessorCard name="Valentin Brimkov" description="Buffalo State University, USA" page='https://dblp.org/pid/b/ValentinEBrimkov.html'/>
                    <ProfessorCard name="Reneta Barneva" description="State University of New York at Fredonia, USA" page='https://www.fredonia.edu/academics/colleges-schools/school-business/applied-professional-studies/faculty/Reneta-Barneva'/>
                    <ProfessorCard name='Athanasios V. Vasilakos' description='UiA, Norway' page='https://www.uia.no/en/kk/profil/thanosv'/>
                    <ProfessorCard name='Adam Slowik' description='Koszalin University of Technology, Poland' page='https://aslowik.5v.pl/wp/en/contact/'/>
                    <ProfessorCard name='Xin-She Yang' description='Middlesex University London, UK' page='https://www.mdx.ac.uk/about-us/our-people/staff-directory/profile/yang-xin-she'/>
                    <ProfessorCard name='Takako Hashimoto' description='Chiba University of Commerce, Japan' page='https://www3.cuc.ac.jp/~takako/en/'/>
                    <ProfessorCard name='Valentina E. Balas' description='Aurel Vlaicu University of Arad, ROMANIA' page='https://scholar.google.com/citations?user=XaktX0wAAAAJ&hl=en'/>
                    <ProfessorCard name='Jon Hall' description='The Open University, Milton Keynes, UK' page='https://www.open.ac.uk/people/jgh23'/>
                    <ProfessorCard name='Md. Shahidehpour' description='Illinois Institute of Technology, Chicago, USA' page='https://www.iit.edu/directory/people/mohammad-shahidehpour'/>
                    <ProfessorCard name='Rajkumar Buyya' description='University of Melbourne, Australia' page='http://www.buyya.com/'/>
                </div>
                <h2 className={styling.h2} >Website Committee:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name="Indrajit Banerjee" description="IIEST, Shibpur, India" page="https://www.iiests.ac.in/IIEST/Faculty/it-ibanerjee"/>
                    <ProfessorCard name = "Kundan Kumar" description="IIEST, Shibpur, India" page="https://www.linkedin.com/in/kundan-kumar-a54461202/"/>
                </div>
                <h2 className={styling.h2} >Organizing Committee:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name="Prasun Ghoshal" description="IIEST, Shibpur, India" page="https://www.iiests.ac.in/IIEST/Faculty/it-p_ghosal"/>
                    <ProfessorCard name="Sukanta Das" description="IIEST, Shibpur, India" page = "https://www.iiests.ac.in/IIEST/Faculty/it-sukanta" />
                    <ProfessorCard name="Chandan Giri" description="IIEST, Shibpur, India" page="https://www.iiests.ac.in/IIEST/Faculty/it-chandan"/>
                    <ProfessorCard name="Indrajit Banerjee" description="IIEST, Shibpur, India" page="https://www.iiests.ac.in/IIEST/Faculty/it-ibanerjee"/>
                    <ProfessorCard name="Tuhina Samanta" description="IIEST, Shibpur, India" page="https://www.iiests.ac.in/IIEST/Faculty/it-t_samanta" />
                    <ProfessorCard name="Surajit Roy" description="IIEST, Shibpur, India" page="https://www.iiests.ac.in/IIEST/Faculty/it-suraroy"/>
                    <ProfessorCard name="Surajit Ghosh" description="IIEST, Shibpur, India" page="https://www.iiests.ac.in/IIEST/Faculty/cs-surajeet"/>
                    <ProfessorCard name="Malay Kule" description="IIEST, Shibpur, India" page ="https://www.iiests.ac.in/IIEST/Faculty/cs-malay"/>
                    <ProfessorCard name="Samit Biswas" description="IIEST, Shibpur, India" page="https://www.iiests.ac.in/IIEST/Faculty/cs-samit"/>
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
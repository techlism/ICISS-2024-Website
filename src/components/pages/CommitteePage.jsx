import ProfessorCard from "../../ProfessorCard";
import styling from './CommitteePage.module.css';
const CommitteePage = ()=>{
    return(
        <div className={styling['main-committeepage']}>
            <div className={styling.professors}>
                <h2 className={styling.h2} >Chief Patron:</h2>
                <ProfessorCard name='Parthasarathi Chakrabarti' description='Indian Institute of Engineering Science and Technology, Shibpur'/>

                <h2 className={styling.h2} >Patron:</h2>
                <ProfessorCard name='Hafizur Rahaman' description='Indian Institute of Engineering Science and Technology, Shibpur'/>

                <h2 className={styling.h2} >General Chairs:</h2>
                <ProfessorCard name='Santi Prasad Maity' description='Indian Institute of Engineering Science and Technology, Shibpur'/>
                <ProfessorCard name='Arindam Biswas' description='Indian Institute of Engineering Science and Technology, Shibpur'/>
                <ProfessorCard name='Aditya Sinha' description='CDAC Kolkata'/>

                <h2 className={styling.h2} >General Co-Chairs:</h2>
                <ProfessorCard name='Santosh K. Pandey' description="MEITy, GoI"/>

                <h2 className={styling.h2} >Organizing Chair:</h2>
                <ProfessorCard name='Shyamalendu Kandar' description='Indian Institute of Engineering Science and Technology, Shibpur'/>

                <h2 className={styling.h2} >Organizing Co-Chairs:</h2>
                <ProfessorCard name='Ruchira Naskar' description='Indian Institute of Engineering Science and Technology, Shibpur'/>
                <ProfessorCard name='Nirnay Ghosh' description='Indian Institute of Engineering Science and Technology, Shibpur'/>

                <h2 className={styling.h2} >Program Chairs:</h2>
                <ProfessorCard name='Anthony TS Ho' description='University of Surrey, England'/>
                <ProfessorCard name='Claude DELPHA' description='Université Paris Saclay, France'/>
                <ProfessorCard name='Hideki Ochiai' description='Yokohama National University, Japan'/>
                <ProfessorCard name='Debasis Giri' description='MAKAUT, India'/>
                <ProfessorCard name='Mrinal Mandal' description='University of Alberta, Canada'/>
                <ProfessorCard name='Koushik Sinha' description='Southern Illinois University, USA'/>

                <h2 className={styling.h2} >Advisory Chairs:</h2>
                <ProfessorCard name='Bhabani P Sinha' description='ISI Kolkata'/>
                <ProfessorCard name='N. K. Goyal' description="CMAI Association of India"/>

                <h2 className={styling.h2} >Organizing Committee:</h2>
                <ProfessorCard name="Prasun Ghoshal" description="Indian Institute of Engineering Science and Technology, Shibpur"/>
                <ProfessorCard name="Sukanta Das" description="Indian Institute of Engineering Science and Technology, Shibpur"/>
                <ProfessorCard name="Chandan Gir" description="Indian Institute of Engineering Science and Technology, Shibpur"/>
                <ProfessorCard name="Indrajit Banerjee" description="Indian Institute of Engineering Science and Technology, Shibpur"/>
                <ProfessorCard name="Tuhina Samanta" description="Indian Institute of Engineering Science and Technology, Shibpur"/>
                <ProfessorCard name="Surajit Roy" description="Indian Institute of Engineering Science and Technology, Shibpur"/>
                <ProfessorCard name="Surajit Ghosh" description="Indian Institute of Engineering Science and Technology, Shibpur"/>
                <ProfessorCard name="Malay Kule" description="Indian Institute of Engineering Science and Technology, Shibpur"/>
                <ProfessorCard name="Samit Biswas" description="Indian Institute of Engineering Science and Technology, Shibpur"/>

                <h2 className={styling.h2} >Technical Program Committee:</h2>
                <ProfessorCard name="I. Sengupta" description="IIT, Kgp"/>
                <ProfessorCard name="B. Mitra" description="IIT, KGP"/>
                <ProfessorCard name="B.Patra" description="IIT, BHU"/>
                <ProfessorCard name="S.Gangopadhyay" description="IIT Roorkee"/>
                <ProfessorCard name="B.C. Dhara" description="Jadavpur University"/>
                <ProfessorCard name="J.K. Singh" description="Jadavpur University"/>
                <ProfessorCard name="D. Saha" description="Jadavpur University"/>
                <ProfessorCard name="J.K. Mondal" description="Kalyani University"/>
                <ProfessorCard name="D. Kandar." description="NEHU, Shilong"/>
                <ProfessorCard name="S. Kar" description="NIT, Durgapur"/>
                <ProfessorCard name="D. Nandi" description="NIT, Durgapur"/>
                <ProfessorCard name="I. Mukherjee" description="IIIT, Kalyani"/>                       
            </div>
        </div>
    )
}

export default CommitteePage;
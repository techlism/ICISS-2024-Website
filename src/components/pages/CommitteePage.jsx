import ProfessorCard from "../../ProfessorCard";
import styling from './CommitteePage.module.css';
import profile from '../../assets/profile.jpg'
const CommitteePage = ()=>{
    return(
        <div className={styling['main-committeepage']}>
        <div className={styling.professors}>
<h2>Chief Patron:</h2>
<ProfessorCard name='Director IIEST' description='Shibpur' imgsrc={profile}/>

<h2>Patron:</h2>
<ProfessorCard name='Hafizur Rahaman' description='Dean R&D, IIESTS' imgsrc={profile}/>

<h2>General Chair:</h2>
<ProfessorCard name='Santi Prasad Maity' description='Professor, IIESTS' imgsrc={profile}/>
<ProfessorCard name='Arindam Biswas' description='Professor, IIESTS' imgsrc={profile}/>
<ProfessorCard name='Aditya Sinha' description='Director, CDAC Kolkata' imgsrc={profile}/>

<h2>General Co-Chair:</h2>
<ProfessorCard name='Santosh K. Pandey' description="Scientist E, MEITy, GoI" imgsrc={profile}/>

<h2>Organizing Chair:</h2>
<ProfessorCard name='Shyamalendu Kandar' description='IIESTS' imgsrc={profile}/>

<h2>Organizing Co-Chair:</h2>
<ProfessorCard name='Ruchira Naskar' description='IIESTS' imgsrc={profile}/>
<ProfessorCard name='Nirnay Ghosh' description='IIESTS' imgsrc={profile}/>

<h2>Program Chair:</h2>
<ProfessorCard name='Anthony TS Ho' description='University of Surrey, England' imgsrc={profile}/>
<ProfessorCard name='Claude DELPHA' description='Université Paris Saclay, France' imgsrc={profile}/>
<ProfessorCard name='Hideki Ochiai' description='Yokohama National University, Japan' imgsrc={profile}/>
<ProfessorCard name='Debasis Giri' description='MAKAUT, India' imgsrc={profile}/>
<ProfessorCard name='Mrinal Mandal' description='University of Alberta, Canada' imgsrc={profile}/>
<ProfessorCard name='Koushik Sinha' description='Southern Illinois University, USA' imgsrc={profile}/>

<h2>Advisory Chair:</h2>
<ProfessorCard name='Bhabani P Sinha' description='ISI Kolkata' imgsrc={profile}/>
<ProfessorCard name='N. K. Goyal' description="President CMAI Association of India" imgsrc={profile}/>

<h2>Organizing Committee:</h2>
<ProfessorCard name="Prasun Ghoshal" description="IIESTS" imgsrc={profile}/>
<ProfessorCard name="Sukanta Das" description="IIESTS" imgsrc={profile}/>
<ProfessorCard name="Chandan Gir" description="IIESTS" imgsrc={profile}/>
<ProfessorCard name="Indrajit Banerjee" description="IIESTS" imgsrc={profile}/>
<ProfessorCard name="Tuhina Samanta" description="IIESTS" imgsrc={profile}/>
<ProfessorCard name="Surajit Roy" description="IIESTS" imgsrc={profile}/>
<ProfessorCard name="Surajit Ghosh" description="IIESTS" imgsrc={profile}/>
<ProfessorCard name="Malay Kule" description="IIESTS" imgsrc={profile}/>
<ProfessorCard name="Samit Biswas" description="IIESTS" imgsrc={profile}/>

<h2>Technical Program Committee:</h2>
<ProfessorCard name="I. Sengupta" description="IIT, Kgp" imgsrc={profile}/>
<ProfessorCard name="B. Mitra" description="IIT, KGP" imgsrc={profile}/>
<ProfessorCard name="B.Patra" description="IIT, BHU" imgsrc={profile}/>
<ProfessorCard name="S.Gangopadhyay" description="IIT Roorkee" imgsrc={profile}/>
<ProfessorCard name="B.C. Dhara" description="Jadavpur University" imgsrc={profile}/>
<ProfessorCard name="J.K. Singh" description="Jadavpur University" imgsrc={profile}/>
<ProfessorCard name="D. Saha" description="Jadavpur University" imgsrc={profile}/>
<ProfessorCard name="J.K. Mondal" description="Kalyani University" imgsrc={profile}/>
<ProfessorCard name="D. Kandar." description="NEHU, Shilong" imgsrc={profile}/>
<ProfessorCard name="S. Kar" description="NIT, Durgapur" imgsrc={profile}/>
<ProfessorCard name="D. Nandi" description="NIT, Durgapur" imgsrc={profile}/>
<ProfessorCard name="I. Mukherjee" description="IIIT, Kalyani" imgsrc={profile}/>                       
        </div>
        </div>
    )
}

export default CommitteePage;
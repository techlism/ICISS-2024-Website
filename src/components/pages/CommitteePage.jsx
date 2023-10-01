import ProfessorCard from "../../ProfessorCard";
import styling from './CommitteePage.module.css';
const CommitteePage = ()=>{
    return(
        <div className={styling['main-committeepage']}>
            <div className={styling.professors}>
                <h2 className={styling.h2} >Chief Patron:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Parthasarathi Chakrabarti' description='IIEST, Shibpur, India'/>
                </div>

                <h2 className={styling.h2} >Patron:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Hafizur Rahaman' description='IIEST, Shibpur, India'/>
                </div>
                <h2 className={styling.h2} >General Chairs:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Santi Prasad Maity' description='IIEST, Shibpur, India'/>
                    <ProfessorCard name='Arindam Biswas' description='IIEST, Shibpur, India'/>
                    <ProfessorCard name='Aditya Sinha' description='CDAC Kolkata'/>
                </div>
                <h2 className={styling.h2} >General Co-Chairs:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Santosh K. Pandey' description="MEITy, GoI"/>
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
                <h2 className={styling.h2} >Advisory Chairs:</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name='Bhabani P Sinha' description='ISI Kolkata'/>
                    <ProfessorCard name='N. K. Goyal' description="CMAI Association of India"/>
                    <ProfessorCard name="Valentin Brimkov" description="Buffalo State University, USA"/>
                    <ProfessorCard name="Reneta Barneva" description="State University of New York at Fredonia, USA"/>
                </div>
                <h2 className={styling.h2} >Website Committee</h2>
                <div className={styling.professorsGrid}>
                    <ProfessorCard name="Indrajit Banerjee" description="IIEST, Shibpur, India"/>
                    <ProfessorCard name = "Kundan Kumar" description="IIEST, Shibpur, India"/>
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
                <h2 className={styling.h2} >Technical Program Committee:</h2>
                <div className={styling['tcp-table']}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Institute</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I. Sengupta</td>
                            <td>IIT, Kgp, India</td>
                        </tr>
                        <tr>
                            <td>B. Mitra</td>
                            <td>IIT, KGP, India</td>
                        </tr>
                        <tr>
                            <td>B.Patra</td>
                            <td>IIT, BHU, India</td>
                        </tr>
                        <tr>
                            <td>S.Gangopadhyay</td>
                            <td>IIT Roorkee, India</td>
                        </tr>
                        <tr>
                            <td>B.C. Dhara</td>
                            <td>Jadavpur University, India</td>
                        </tr>
                        <tr>
                            <td>J.K. Singh</td>
                            <td>Jadavpur University, India</td>
                        </tr>
                        <tr>
                            <td>D. Saha</td>
                            <td>Jadavpur University, India</td>
                        </tr>
                        <tr>
                            <td>J.K. Mondal</td>
                            <td>Kalyani University, India</td>
                        </tr>
                        <tr>
                            <td>D. Kandar.</td>
                            <td>NEHU, India</td>
                        </tr>
                        <tr>
                            <td>S. Kar</td>
                            <td>NIT, Durgapur, India</td>
                        </tr>
                        <tr>
                            <td>D. Nandi</td>
                            <td>NIT, Durgapur, India</td>
                        </tr>
                        <tr>
                            <td>I. Mukherjee</td>
                            <td>IIIT, Kalyani, India</td>
                        </tr>
                        <tr>
                            <td>Vijayan K. Asari</td>
                            <td>University of Dayton, USA</td>
                        </tr>
                        <tr>
                            <td>Petra Wiederhold</td>
                            <td>Av. Instituto Politécnico Nacional, Mexico</td>
                        </tr>
                        <tr>
                            <td>Ansuman Kumar</td>
                            <td>NEHU, India</td>
                        </tr>
                        <tr>
                            <td>Dharavath Ramesh</td>
                            <td>IIT, Dhanbad, India</td>
                        </tr>
                        <tr>
                            <td>Badal Soni</td>
                            <td>NIT Shilchar, India</td>
                        </tr>
                        <tr>
                            <td>Arup Kumar Pal</td>
                            <td>IIT, Dhanbad, India</td>
                        </tr>
                        <tr>
                            <td>Tandra Pal</td>
                            <td>NIT, Durgapur, India</td>
                        </tr>
                        <tr>
                            <td>Rajib Ghosh</td>
                            <td>National Institute of Technology Patna, India</td>
                        </tr>
                        <tr>
                            <td>Bibhas Ch. Dhara</td>
                            <td>Jadavpur University, India</td>
                        </tr>
                        <tr>
                            <td>Debashis De</td>
                            <td>MAKAUT, India</td>
                        </tr>
                        <tr>
                            <td>Biswapati Jana</td>
                            <td>Vidyasagar University, India</td>
                        </tr>
                        <tr>
                            <td>Maheshwari Prasad Singh</td>
                            <td>NIT, Patna, India</td>
                        </tr>
                        <tr>
                            <td>Amitabha Nath</td>
                            <td>NEHU, India</td>
                        </tr>
                        <tr>
                            <td>Bubu Bhuyan</td>
                            <td>NEHU, India</td>
                        </tr>
                        <tr>
                            <td>Dr. Anupam Biswas</td>
                            <td>NIT, Shilchar, India</td>
                        </tr>
                        <tr>
                            <td>Bertrand Kerautret</td>
                            <td>Lumière University Lyon 2, France</td>
                        </tr>
                        <tr>
                            <td>Saptarsi Goswami</td>
                            <td>Calcutta University, India</td>
                        </tr>
                        <tr>
                            <td>Udai Pratap Rao</td>
                            <td>NIT Patna, India</td>
                        </tr>
                        <tr>
                            <td>Soumya Sen</td>
                            <td>Calcutta University, India</td>
                        </tr>
                        <tr>
                            <td>Anjan Bandyopadhyay</td>
                            <td>KIIT, India</td>
                        </tr>
                        <tr>
                            <td>Saiyed Umer</td>
                            <td>Alia University, India</td>
                        </tr>
                        <tr>
                            <td>Abhishek Singhal</td>
                            <td>Amity University, India</td>
                        </tr>
                        <tr>
                            <td>Subrata Dutta</td>
                            <td>NIT, Jamsedpur, India</td>
                        </tr>
                        <tr>
                            <td>Supriya Raheja</td>
                            <td>Amity University, India</td>
                        </tr>
                        <tr>
                            <td>Koushlendra Kumar Singh</td>
                            <td>NIT, Jamsedpur, India</td>
                        </tr>
                        <tr>
                            <td>Manoj Kr. Shukla</td>
                            <td>Amity University, India</td>
                        </tr>
                        <tr>
                            <td>Sujit Das</td>
                            <td>Sikha o Anusandhan, India</td>
                        </tr>
                        <tr>
                            <td>Dushyant Kumar Singh</td>
                            <td>MNIT, Alahabad, India</td>
                        </tr>
                        <tr>
                            <td>Snehanshu Saha</td>
                            <td>BITS Pilani, Goa, India</td>
                        </tr>
                        <tr>
                            <td>Dr. Sunirmal Khatua</td>
                            <td>Calcutta University, India</td>
                        </tr>
                        <tr>
                            <td>Animesh Dutta</td>
                            <td>NIT Durgapur, India</td>
                        </tr>
                        <tr>
                            <td>Sanjit Setua</td>
                            <td>Calcutta University, India</td>
                        </tr>
                        <tr>
                            <td>SANJEEVI SRIRAM</td>
                            <td>NIT, Warangal, India</td>
                        </tr>
                        <tr>
                            <td>Odelu Vanga</td>
                            <td>IIIT, Chittoor, India</td>
                        </tr>
                        <tr>
                            <td>Abhishek Hazra</td>
                            <td>IIIT, Chittoor, India</td>
                        </tr>
                        <tr>
                            <td>SAROJ KUMAR BISWAS</td>
                            <td>NIT, Silchar, India</td>
                        </tr>
                        <tr>
                            <td>Satyaki Roy</td>
                            <td>University of Alabama in Huntsville, USA</td>
                        </tr>
                        <tr>
                            <td>Francesco Betti Sorbelli</td>
                            <td>University of Perugia, Italy</td>
                        </tr>
                        <tr>
                            <td>Saurav Nanda</td>
                            <td>Synopsys, Mountain View, CA, USA</td>
                        </tr>
                        <tr>
                            <td>Anusha K</td>
                            <td>Velore Institute of Technology, India</td>
                        </tr>
                        <tr>
                            <td>Dorsala Mallikarjun Reddy</td>
                            <td>IIIT, Chittoor, India</td>
                        </tr>
                        <tr>
                            <td>Shameek Bhattacharjee</td>
                            <td>Western Michigan University, Kalamazoo, MI, USA</td>
                        </tr>  
                        <tr>
                            <td>M. Sridevi</td>
                            <td>NIT, Tiruchirappalli, India</td>
                        </tr> 
                        <tr>
                            <td>K.Himabindu</td>
                            <td>NIT, Andhra Pradesh, India</td>
                        </tr>                                             
                                              
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default CommitteePage;
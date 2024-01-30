import ProfessorCard from "../../ProfessorCard";
import styling from './CommitteePage.module.css';
const CommitteePage = ()=>{
    return(
        <div className={styling['main-committeepage']}>
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
                <h2 className={styling.h2} >International Advisory Committee:</h2>
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
                        {/* <tr>
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
                        </tr> */}
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
                        <tr>
                            <td>Rajendra Prasath</td>
                            <td>IIIT, Chittoor, India</td>
                        </tr>
                        <tr>
                            <td>Asish Bera</td>
                            <td>Birla Institute of Technology and Science, Pilani, India</td>
                        </tr>
                        <tr>
                            <td>Annappa B</td>
                            <td>NIT Karnataka, Surathkal, India</td>
                        </tr>
                        <tr>
                            <td>Keerthana Prasad</td>
                            <td>Manipal Academy of Higher Education, India</td>
                        </tr>
                        <tr>
                            <td>Biswajit R Bhowmik</td>
                            <td>NIT Karnataka, Surathkal, India</td>
                        </tr>
                        <tr>
                            <td>Pavan Kumar C</td>
                            <td>IIIT, Dharwad, India</td>
                        </tr>
                        <tr>
                            <td>Kamlesh Tiwari</td>
                            <td>BITS Pilani, India</td>
                        </tr>
                        <tr>
                            <td>P. Santhi Thilagam</td>
                            <td>NIT Karnataka, Surathkal, India</td>
                        </tr>
                        <tr>
                            <td>Basabdatta Bhattacharya</td>
                            <td>Birla Institute of Technology and Science, Pilani, India</td>
                        </tr>
                        <tr>
                            <td>Yadunath Pathak</td>
                            <td>VNIT, Nagpur, India</td>
                        </tr>
                        <tr>
                            <td>Vinod Pachghare</td>
                            <td>COEP Technological University, Pune, India</td>
                        </tr>
                        <tr>
                            <td>Bhupendra Singh</td>
                            <td>IIIT, Pune, India</td>
                        </tr>
                        <tr>
                            <td>Mahendra Pratap Yadav</td>
                            <td>IIIT, Pune, India</td>
                        </tr>
                        <tr>
                            <td>Sonam Maurya</td>
                            <td>IIIT, Pune, India</td>
                        </tr>
                        <tr>
                            <td>Mahesh Shirole</td>
                            <td>Veermata Jijabai Technological Institute, Pune, India</td>
                        </tr>
                        <tr>
                            <td>Sunita Dhavale</td>
                            <td>Defence Institute of Advanced Technology, Pune, India</td>
                        </tr>
                        <tr>
                            <td>Upasana Singh</td>
                            <td>Defence Institute of Advanced Technology, Pune, India</td>
                        </tr>
                        <tr>
                            <td>Shital Raut</td>
                            <td>Visvesvaraya National Institute of Technology, Nagpur, India</td>
                        </tr>
                        <tr>
                            <td>Anil Kumar Singh</td>
                            <td>Motilal Nehru National Institute of Technology Allahabad, Prayagraj, India</td>
                        </tr> 
                        <tr>
                            <td>Salvatore Distefano</td>
                            <td>University of Messina, Italy</td>
                        </tr>
                        <tr>
                            <td>Devesh C Jinwala</td>
                            <td>S V National Institute of Technology, Surat</td>
                        </tr>
                        <tr>
                            <td>Pilli Emmanuel Shubhakar</td>
                            <td>Malaviya National Institute of Technology Jaipur</td>
                        </tr>
                        <tr>
                            <td>Ramesh Babu Battula</td>
                            <td>Malaviya National Institute of Technology Jaipur</td>
                        </tr>
                        <tr>
                            <td>Yogesh Kumar</td>
                            <td>Pandit Deendayal Energy University, Gandhinagar</td>
                        </tr>
                        <tr>
                            <td>UDAI PRATAP RAO</td>
                            <td>National Institute of Technology Patna</td>
                        </tr>
                        <tr>
                            <td>Pramit Mazumdar</td>
                            <td>Indian Institute of Information Technology, Vadodara</td>
                        </tr>
                        <tr>
                            <td>Sumit Kalra</td>
                            <td>IIT, Jodhpur</td>
                        </tr>
                        <tr>
                            <td>Debdatta Kandar</td>
                            <td>North Eastern Hill University</td>
                        </tr>
                        <tr>
                            <td>Sujit Das</td>
                            <td>National Institute of Technology Warangal</td>
                        </tr>
                        <tr>
                            <td>Subbulakshmi T</td>
                            <td>Velore Institute of Technology</td>
                        </tr>
                        <tr>
                            <td>Maheswari.R</td>
                            <td>Velore Institute of Technology</td>
                        </tr>
                        <tr>
                            <td>Arnab Kumar Maji</td>
                            <td>North Eastern Hill University</td>
                        </tr>
                        <tr>
                            <td>Janaki Meena Murugan</td>
                            <td>Velore Institute of Technology</td>
                        </tr>
                        <tr>
                            <td>Pradeep Kumar TS</td>
                            <td>Velore Institute of Technology</td>
                        </tr>
                        <tr>
                            <td>Mithlesh Arya</td>
                            <td>Swami Keshvanand Institute of Technology, Jaipur</td>
                        </tr>
                        <tr>
                            <td>Sutanu Chakraborti</td>
                            <td>IIT, Madras</td>
                        </tr>
                        <tr>
                            <td>Sunil B. Mane</td>
                            <td>COEP Technological University, Pune</td>
                        </tr>
                        <tr>
                            <td>Megha Gupta</td>
                            <td>Swami Keshvanand Institute of Technology, Management & Gramothan, Jaipur</td>
                        </tr>
                        <tr>
                            <td>Anindya Halder</td>
                            <td>North-Eastern Hill University</td>
                        </tr>
                        <tr>
                            <td>Nitesh K Bharadwaj</td>
                            <td>IIIT, Pune</td>
                        </tr>
                        <tr>
                            <td>Nithya Balasubramanian</td>
                            <td>NIT, Trichy</td>
                        </tr>
                        <tr>
                            <td>Somitra Kr. Sanadhya</td>
                            <td>IIT Jodhpur</td>
                        </tr>
                        <tr>
                            <td>ANIL KUMAR VERMA</td>
                            <td>Thapar University</td>
                        </tr>
                        <tr>
                            <td>Mrityunjay Singh</td>
                            <td>IIIT, Una</td>
                        </tr>
                        <tr>
                            <td>Shefali Arora Chouhan</td>
                            <td>NIT, Jalandhar</td>
                        </tr>
                        <tr>
                            <td>Jaspal Kaur Saini</td>
                            <td>IIIT, Una</td>
                        </tr>
                        <tr>
                            <td>Kanu Goel</td>
                            <td>Punjab Engineering College, Chandigarh</td>
                        </tr>
                        <tr>
                            <td>Vijay Kumar</td>
                            <td>NIT, Jalandhar</td>
                        </tr>
                        <tr>
                            <td>Somesula Manoj Kumar</td>
                            <td>NIT, Jalandhar</td>
                        </tr>
                        <tr>
                            <td>Prashant Kumar</td>
                            <td>NIT, Jalandhar</td>
                        </tr>
                        <tr>
                            <td>Krishan Kumar</td>
                            <td>NIT,  KURUKSHETRA</td>
                        </tr>
                        <tr>
                            <td>Anoop Patel</td>
                            <td>NIT,  KURUKSHETRA</td>
                        </tr>
                        <tr>
                            <td>Dhiren patel</td>
                            <td>NIT, Surat</td>
                        </tr>
                        <tr>
                            <td>Shveta Mahajan</td>
                            <td>NIT, Jalandhar</td>
                        </tr>
                        <tr>
                            <td>Satnam Kaur</td>
                            <td>Punjab Engineering College</td>
                        </tr>
                        <tr>
                            <td>Vikram Singh</td>
                            <td>NIT,  KURUKSHETRA</td>
                        </tr>
                        <tr>
                            <td>Virender Ranga</td>
                            <td>NIT,  KURUKSHETRA</td>
                        </tr>
                        <tr>
                            <td>Kriti Bhushan</td>
                            <td>NIT,  KURUKSHETRA</td>
                        </tr>
                        <tr>
                            <td>Pratistha Verma</td>
                            <td>NIT,  KURUKSHETRA</td>
                        </tr>
                        <tr>
                            <td>Ayoub Khan</td>
                            <td>University of Bisha, Bisha, Kingdom of Saudi Arabia</td>
                        </tr>
                        <tr>
                            <td>Avani Vyas</td>
                            <td>NIT, Jalandhar</td>
                        </tr>
                        <tr>
                            <td>Sushil Kumar</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Deepak Ranjan Nayak</td>
                            <td>Malaviya National Institute of Technology Jaipur</td>
                        </tr>
                        <tr>
                            <td>Deepak Mishra</td>
                            <td>IIT, Jodhpur</td>
                        </tr>
                        <tr>
                            <td>Rituraj Soni</td>
                            <td>Engineering College Bikaner</td>
                        </tr>   
                        <tr>
                            <td>Parveen Kumar</td>
                            <td>NIT, Kurukshetra</td>
                        </tr>
                        <tr>
                            <td>Swapan Maiti</td>
                            <td>VNIT, Nagpur</td>                        
                        </tr>
                        <tr>
                            <td>Vincenzo Piuri</td>
                            <td>University of Milan, Italy</td>
                        </tr>
                        <tr>
                            <td>Niyati Baliyan</td>
                            <td>NIT, Kurukshetra</td>
                        </tr>
                        <tr>
                            <td>Vijay Kumar</td>
                            <td>NIT, Hamirpur</td>
                        </tr>
                        <tr>
                            <td>Jaspal Kaur Saini</td>
                            <td>IIIT, Una</td>
                        </tr>
                        <tr>
                            <td>Mrityunjay Singh</td>
                            <td>IIIT, Una</td>
                        </tr>
                        <tr>
                            <td>Pardeep Singh</td>
                            <td>NIT, Hamirpur</td>
                        </tr>
                        <tr>
                            <td>Shashi Gurung</td>
                            <td>Govt. Hydro Engineering College</td>
                        </tr>
                        <tr>
                            <td>Ajay Kumar Mallick</td>
                            <td>NIT, Hamirpur</td>
                        </tr>
                        <tr>
                            <td>Nisha Chaurasia</td>
                            <td>NIT, Jalandhar</td>
                        </tr>                                                                                                                                                                                                                                              
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default CommitteePage;
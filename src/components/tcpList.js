const TCPMembers = [
    { name: "Vijayan K. Asari", organization: "University of Dayton, USA" },
    { name: "Petra Wiederhold", organization: "Av. Instituto Politécnico Nacional, Mexico" },
    { name: "Ansuman Kumar", organization: "NEHU, India" },
    { name: "Dharavath Ramesh", organization: "IIT, Dhanbad, India" },
    { name: "Badal Soni", organization: "NIT Shilchar, India" },
    { name: "Arup Kumar Pal", organization: "IIT, Dhanbad, India" },
    { name: "Tandra Pal", organization: "NIT, Durgapur, India" },
    { name: "Rajib Ghosh", organization: "National Institute of Technology Patna, India" },
    { name: "Bibhas Ch. Dhara", organization: "Jadavpur University, India" },
    { name: "Debashis De", organization: "MAKAUT, India" },
    { name: "Biswapati Jana", organization: "Vidyasagar University, India" },
    { name: "Maheshwari Prasad Singh", organization: "NIT, Patna, India" },
    { name: "Amitabha Nath", organization: "NEHU, India" },
    { name: "Bubu Bhuyan", organization: "NEHU, India" },
    { name: "Dr. Anupam Biswas", organization: "NIT, Shilchar, India" },
    { name: "Bertrand Kerautret", organization: "Lumière University Lyon 2, France" },
    { name: "Saptarsi Goswami", organization: "Calcutta University, India" },
    // { name: "Udai Pratap Rao", organization: "NIT Patna, India" },
    { name: "Soumya Sen", organization: "Calcutta University, India" },
    { name: "Anjan Bandyopadhyay", organization: "KIIT, India" },
    { name: "Saiyed Umer", organization: "Alia University, India" },
    { name: "Abhishek Singhal", organization: "Amity University, India" },
    { name: "Subrata Dutta", organization: "NIT, Jamsedpur, India" },
    { name: "Supriya Raheja", organization: "Amity University, India" },
    { name: "Koushlendra Kumar Singh", organization: "NIT, Jamsedpur, India" },
    { name: "Manoj Kr. Shukla", organization: "Amity University, India" },
    { name: "Sujit Das", organization: "Sikha o Anusandhan, India" },
    { name: "Dushyant Kumar Singh", organization: "MNIT, Alahabad, India" },
    { name: "Snehanshu Saha", organization: "BITS Pilani, Goa, India" },
    { name: "Dr. Sunirmal Khatua", organization: "Calcutta University, India" },
    { name: "Animesh Dutta", organization: "NIT Durgapur, India" },
    { name: "Sanjit Setua", organization: "Calcutta University, India" },
    { name: "SANJEEVI SRIRAM", organization: "NIT, Warangal, India" },
    { name: "Odelu Vanga", organization: "IIIT, Chittoor, India" },
    { name: "Abhishek Hazra", organization: "IIIT, Chittoor, India" },
    { name: "SAROJ KUMAR BISWAS", organization: "NIT, Silchar, India" },
    { name: "Satyaki Roy", organization: "University of Alabama in Huntsville, USA" },
    { name: "Francesco Betti Sorbelli", organization: "University of Perugia, Italy" },
    { name: "Saurav Nanda", organization: "Synopsys, Mountain View, CA, USA" },
    { name: "Anusha K", organization: "Velore Institute of Technology, India" },
    { name: "Dorsala Mallikarjun Reddy", organization: "IIIT, Chittoor, India" },
    { name: "Shameek Bhattacharjee", organization: "Western Michigan University, Kalamazoo, MI, USA" },
    { name: "M. Sridevi", organization: "NIT, Tiruchirappalli, India" },
    { name: "K.Himabindu", organization: "NIT, Andhra Pradesh, India" },
    { name: "Rajendra Prasath", organization: "IIIT, Chittoor, India" },
    { name: "Asish Bera", organization: "Birla Institute of Technology and Science, Pilani, India" },
    { name: "Annappa B", organization: "NIT Karnataka, Surathkal, India" },
    { name: "Keerthana Prasad", organization: "Manipal Academy of Higher Education, India" },
    { name: "Biswajit R Bhowmik", organization: "NIT Karnataka, Surathkal, India" },
    { name: "Pavan Kumar C", organization: "IIIT, Dharwad, India" },
    { name: "Kamlesh Tiwari", organization: "BITS Pilani, India" },
    { name: "P. Santhi Thilagam", organization: "NIT Karnataka, Surathkal, India" },
    { name: "Basabdatta Bhattacharya", organization: "Birla Institute of Technology and Science, Pilani, India" },
    { name: "Yadunath Pathak", organization: "VNIT, Nagpur, India" },
    { name: "Vinod Pachghare", organization: "COEP Technological University, Pune, India" },
    { name: "Bhupendra Singh", organization: "IIIT, Pune, India" },
    { name: "Mahendra Pratap Yadav", organization: "IIIT, Pune, India" },
    { name: "Sonam Maurya", organization: "IIIT, Pune, India" },
    { name: "Mahesh Shirole", organization: "Veermata Jijabai Technological Institute, Pune, India" },
    { name: "Sunita Dhavale", organization: "Defence Institute of Advanced Technology, Pune, India" },
    { name: "Upasana Singh", organization: "Defence Institute of Advanced Technology, Pune, India" },
    { name: "Shital Raut", organization: "Visvesvaraya National Institute of Technology, Nagpur, India" },
    { name: "Anil Kumar Singh", organization: "Motilal Nehru National Institute of Technology Allahabad, Prayagraj, India" },
    { name: "Salvatore Distefano", organization: "University of Messina, Italy" },
    { name: "Devesh C Jinwala", organization: "S V National Institute of Technology, Surat" },
    { name: "Pilli Emmanuel Shubhakar", organization: "Malaviya National Institute of Technology Jaipur" },
    { name: "Ramesh Babu Battula", organization: "Malaviya National Institute of Technology Jaipur" },
    { name: "Yogesh Kumar", organization: "Pandit Deendayal Energy University, Gandhinagar" },
    { name: "UDAI PRATAP RAO", organization: "National Institute of Technology Patna" },
    { name: "Pramit Mazumdar", organization: "Indian Institute of Information Technology, Vadodara" },
    { name: "Sumit Kalra", organization: "IIT, Jodhpur" },
    { name: "Debdatta Kandar", organization: "North Eastern Hill University" },
    { name: "Sujit Das", organization: "National Institute of Technology Warangal" },
    { name: "Subbulakshmi T", organization: "Velore Institute of Technology" },
    { name: "Maheswari.R", organization: "Velore Institute of Technology" },
    { name: "Arnab Kumar Maji", organization: "North Eastern Hill University" },
    { name: "Janaki Meena Murugan", organization: "Velore Institute of Technology" },
    { name: "Pradeep Kumar TS", organization: "Velore Institute of Technology" },
    { name: "Mithlesh Arya", organization: "Swami Keshvanand Institute of Technology, Jaipur" },
    { name: "Sutanu Chakraborti", organization: "IIT, Madras" },
    { name: "Sunil B. Mane", organization: "COEP Technological University, Pune" },
    { name: "Megha Gupta", organization: "Swami Keshvanand Institute of Technology, Management & Gramothan, Jaipur" },
    { name: "Anindya Halder", organization: "North-Eastern Hill University" },
    { name: "Nitesh K Bharadwaj", organization: "IIIT, Pune" },
    { name: "Nithya Balasubramanian", organization: "NIT, Trichy" },
    { name: "Somitra Kr. Sanadhya", organization: "IIT Jodhpur" },
    { name: "ANIL KUMAR VERMA", organization: "Thapar University" },
    { name: "Mrityunjay Singh", organization: "IIIT, Una" },
    { name: "Shefali Arora Chouhan", organization: "NIT, Jalandhar" },
    { name: "Jaspal Kaur Saini", organization: "IIIT, Una" },
    { name: "Kanu Goel", organization: "Punjab Engineering College, Chandigarh" },
    { name: "Vijay Kumar", organization: "NIT, Jalandhar" },
    { name: "Somesula Manoj Kumar", organization: "NIT, Jalandhar" },
    { name: "Prashant Kumar", organization: "NIT, Jalandhar" },
    { name: "Krishan Kumar", organization: "NIT, KURUKSHETRA" },
    { name: "Anoop Patel", organization: "NIT, KURUKSHETRA" },
    { name: "Dhiren patel", organization: "NIT, Surat" },
    { name: "Shveta Mahajan", organization: "NIT, Jalandhar" },
    { name: "Satnam Kaur", organization: "Punjab Engineering College" },
    { name: "Vikram Singh", organization: "NIT, KURUKSHETRA" },
    { name: "Virender Ranga", organization: "NIT, KURUKSHETRA" },
    { name: "Kriti Bhushan", organization: "NIT, KURUKSHETRA" },
    { name: "Pratistha Verma", organization: "NIT, KURUKSHETRA" },
    { name: "Ayoub Khan", organization: "University of Bisha, Bisha, Kingdom of Saudi Arabia" },
    { name: "Avani Vyas", organization: "NIT, Jalandhar" },
    { name: "Sushil Kumar", organization: "NIT, KURUKSHETRA" },
    { name: "Deepak Ranjan Nayak", organization: "Malaviya National Institute of Technology Jaipur" },
    { name: "Deepak Mishra", organization: "IIT, Jodhpur" },
    { name: "Rituraj Soni", organization: "Engineering College Bikaner" },
    { name: "Parveen Kumar", organization: "NIT, Kurukshetra" },
    { name: "Swapan Maiti", organization: "VNIT, Nagpur" },
    { name: "Vincenzo Piuri", organization: "University of Milan, Italy" },
    { name: "Niyati Baliyan", organization: "NIT, Kurukshetra" },
    { name: "Vijay Kumar", organization: "NIT, Hamirpur" },
    { name: "Jaspal Kaur Saini", organization: "IIIT, Una" },
    { name: "Mrityunjay Singh", organization: "IIIT, Una" },
    { name: "Pardeep Singh", organization: "NIT, Hamirpur" },
    { name: "Shashi Gurung", organization: "Govt. Hydro Engineering College" },
    { name: "Ajay Kumar Mallick", organization: "NIT, Hamirpur" },
    { name: "Nisha Chaurasia", organization: "NIT, Jalandhar" },
    { name: "Pranav Kumar Chaudhary", organization: "Senior SDE, Amazon" },
    { name: "Arindam Biswas", organization: "Kazi Nazrul University" },
    { name: "Christoph Meinel", organization: "German University of Digital Science" },
    { name: "Rolando Herrero", organization: "Northeastern University, USA" },
    { name: 'Sajedul Talukder', organization: 'Southern Illinois University' },
    { name: 'A. Vijaya Lakshmi', organization: 'B V Raju Institute of Technology' },
    { name: 'Dr. Kevin Wang', organization: 'NeuroSoph Development Inc, Edmonton, Canada' },
    { name: 'Kevin Wang', organization: 'NeuroSoph Development Inc, Edmonton, Canada' },
    { name: 'Rebanta Mitra', organization: 'NVIDIA Corporation, San Jose, California, USA' },
    { name: 'Geeta Pyne', organization: 'TIAA, San Jose, California, USA' },
    { name: 'Khan Wahid', organization: 'University of Saskatchewan, Canada' },
    { name: 'Nilanjan Ray', organization: 'University of Alberta, Canada' },
    { name: 'Hongming Xu', organization: 'Dalian University of Technology, China' },
    { name: 'Keshav Dahal', organization: 'University of the West of Scotland High Street, UK' },
    { name: 'Mueen Uddin', organization: 'University of Doha for Science and Technology, Qatar' },    
    { name: 'Sajedul Talukder' , organization: 'Southern Illinois University'},
    {name : 'A. Vijaya Lakshmi', organization: 'B V Raju Institute of Technology'},
    {name: 'Banafsheh Rekabdar' , organization: 'Portland State University'},
    {name: 'Aloizio Pereira da Silva', organization: 'Commonwealth Cyber Initaitive, Virginia Tech'},
    {name:'Goutham Reddy', organization: 'University of Illinois, Springfield USA' },
    {name: 'Rabindra Bista' , organization: 'Katmandu University, Nepal'},
    {name: 'Kuo-Hui Yeh' , organization: 'National Yang Ming Chiao Tung University, Taiwan'},
    {name: 'Raveendra Babu Ponnuru' , organization: 'Cleveland State University, USA'},
    
];

export default TCPMembers;
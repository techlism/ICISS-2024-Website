import styling from './AboutCollege.module.css';
import clgimg1 from '../../assets/clg1.png';
import clgimg2 from '../../assets/clg2.png';
import clgimg3 from '../../assets/clg3.png';
import clgimg4 from '../../assets/clg4.png';
import clgimg5 from '../../assets/clg5.png';
import clgimg6 from '../../assets/clg6.png';
import ImageCarousel from './ImageCarousel';
const imagesArr = [clgimg1,clgimg2,clgimg3,clgimg4,clgimg5,clgimg6];

const AboutCollege = ()=>{
    return(
        <div style={{display:'flex',justifyContent:'center'}}>
            <div className={styling['about-college']}>
                <div className={styling['image-carousel']}>
                    <ImageCarousel images={imagesArr}/>
                </div>
                {/* <img src={clocktower} alt="iiest-clock-tower" className={styling['clock-tower']}/> */}
                
                <div>
                <h1>About IIEST</h1>
                <hr />
                <p>
                IIEST Shibpur, the Indian Institute of Engineering Science and Technology Shibpur, is a well-respected technical college located in Shibpur, West Bengal, India. <br/>
                Established in 1856, it holds a notable place among the oldest engineering colleges in the country. IIEST Shibpur is known for its commitment to promoting research and innovation. <br/>
                The college provides ample opportunities for students and faculty to engage in research activities across various disciplines. With its dedicated research facilities and experienced faculty members,<br/> IIEST Shibpur offers a conducive environment for students to explore new ideas and contribute to the advancement of knowledge. 
                The college's focus on research adds depth to its academic programs and helps students develop critical thinking and problem-solving skills.
                </p>
                <button type='button'><a href='https://www.iiests.ac.in/IIEST/About#:~:text=About%20IIEST%2C%20Shibpur,-IIEST%2C%20Shibpur%20(Erstwhile&text=The%20Institute%20has%20a%20rich,16%20departments%20and%208%20schools.'>Know More</a></button>
                </div>
            </div>
        </div>

    )
}
export default AboutCollege;
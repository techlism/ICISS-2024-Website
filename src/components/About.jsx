const About = (props)=>{
 return(
    <div>
    <h1 className={props.style.h1}>
         About International Conference<br/>
         on Intelligent Systems and Security
    </h1>
    <p className={props.style['para-about']}>
        The International Conference on Intelligent Systems and Security is set
        to take place in June 2024, and will bring together industry experts,
        practitioners, and researchers in the field. The conference will cover
        topics such as machine learning, artificial intelligence, data analytics,
        cryptography, and network security, and will feature technical sessions,
        workshops, and keynote speeches.<br/> Attendees will have the opportunity
        to network and collaborate with other professionals in the field. This
        conference is highly recommended for those looking to stay up-to-date
        with the latest developments in intelligent systems and security, and to
        exchange ideas and collaborate on future projects.
    </p>    
    </div>
 )    
}
export default About;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocation} from '@fortawesome/free-solid-svg-icons';
import styling from './ContactPage.module.css';
import ContactCard from '../ContactCard';
const ContactPage = ()=>{
    return(
        <div className={styling['main-contact']}>
            <div className={styling['contact-container']}>
                <div>
                <h1 className={styling.h1}>Contact Information</h1>
                <ContactCard name='Prof. Abc Xyz' email='abc@faculty.it.iiests.ac.in' phone='+91 12345-23456'/>
                <ContactCard name='Prof. Abc Xyz' email='abc@faculty.it.iiests.ac.in' phone='+91 12345-23456'/>
                <ContactCard name='Prof. Abc Xyz' email='abc@faculty.it.iiests.ac.in' phone='+91 12345-23456'/>
                </div>
            </div>
            <div className={styling.location}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.6411256339084!2d88.3061642!3d22.5551124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279c91a8d2d49%3A0xc6ee508c74cf031d!2sIndian%20Institute%20of%20Engineering%20Science%20and%20Technology%2C%20Shibpur!5e0!3m2!1sen!2sin!4v1688816758786!5m2!1sen!2sin" width="300" height="170" loading="lazy" referrerpolicy="no-referrer-when-downgrade"className={styling.iframe} title='college-map'/>
                <div className={styling.address}>                    
                    <h3><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>Address:</h3>
                    <p>Indian Institute of Engineering Science and Technology,<br/> Botanical Garden Area, Howrah, West Bengal 711103</p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
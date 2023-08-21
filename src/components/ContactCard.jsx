import {faPhone ,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styling from './ContactCard.module.css'
const ContactCard = (props) =>{
    return(
        <div className={styling['contact-card']}>
            <h2 className={styling.name}>{props.name}</h2>
            <h3 className={styling.email}> <FontAwesomeIcon icon={faEnvelope}/>   {props.email} </h3>
            <h3 className={styling.phone}> <FontAwesomeIcon icon={props.phone.length > 0 ? faPhone : ''}/>  {props.phone.length > 0 ? props.phone : ''} </h3>
        </div>
    )
}
export default ContactCard;
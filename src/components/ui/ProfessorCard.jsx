import styling from './ProfessorCard.module.css'
// import {ExternalLink} from 'lucide-react';
const ProfessorCard = (props)=>{
    return(
        <div className={styling['professor-card']}>
            <a href={props.page} style={{textDecoration : "none", color: "inherit"}} target='blank'>
                <p className={styling['name']}>{props.name}</p>
                {/* <ExternalLink size={17} /> */}
            </a>            
            <p className={styling['description']}>{props.description}</p>
        </div>
    )
}
export default ProfessorCard;
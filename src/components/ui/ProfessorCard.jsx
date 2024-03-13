import styling from './ProfessorCard.module.css'
const ProfessorCard = (props)=>{
    return(
        <div className={styling['professor-card']}>
            <p className={styling['name']}>{props.name},</p>
            <p className={styling['description']}>{props.description}</p>
        </div>
    )
}
export default ProfessorCard;
import styling from './ProfessorCard.module.css'
const ProfessorCard = (props)=>{
    return(
        <div className={styling['professor-card']}>
            <div className={styling['name-img']}>
                <img src={props.imgsrc} alt="profile" />
                <p>{props.name}</p>
            </div>
            <p className={styling['description']}>{props.description}</p>
            <div className={styling.buttonDiv}>
                <button> <a href="#">Know More</a></button>
            </div>
        </div>
    )
}
export default ProfessorCard;
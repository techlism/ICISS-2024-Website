import styling from './Sponsors.module.css';
function Sponsors(props){
    return(
        <div className={styling['sponsors-div']}>
            <img src={props.src1} alt="sponsor" />
            <img src={props.src2} alt="sponsor" />
            <img src={props.src3} alt="sponsor" />                        
        </div>
    )
}
export default Sponsors;
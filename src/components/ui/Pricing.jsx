import styling from './Pricing.module.css';
const Pricing = ()=>{
    return(
    <div className={styling['table-wrapper']}>
        <table className={styling.table}>
            <tbody>
            <tr>
            <th rowspan="2">Category</th>
            <th colspan="2">Indian Participant</th>
            <th colspan="2">Foreign Participant</th>
            </tr>
            <tr>
            <th>On or before 30<sup>th</sup> Sept, 2024</th>
            <th>After 30<sup>th</sup> Sept, 2024</th>
            <th>On or before 30<sup>th</sup> Sept, 2024</th>
            <th>After 30<sup>th</sup> Sept, 2024</th>
            </tr>
            <tr>
            <td>Full Registration</td>
            <td>₹9500</td>
            <td>₹10700</td>
            <td>$300</td>
            <td>$350</td>
            </tr>
            <tr>
            <td>Industry/ R & D organization (Author)</td>
            <td>₹12000</td>
            <td>₹13000</td>
            <td>$350</td>
            <td>$400</td>
            </tr>
            <tr>
            <td>Attending only</td>
            <td>₹3540</td>
            <td>₹4130</td>
            <td>$75</td>
            <td>$100</td>
            </tr>
            <tr>
            <td>Accompanying Person</td>
            <td>₹3000</td>
            <td>₹3000</td>
            <td>$50</td>
            <td>$50</td>
            </tr>            
            </tbody>
        </table>
    </div>        
    )
}
export default Pricing;
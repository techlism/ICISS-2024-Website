import styling from './Pricing.module.css';

const Pricing = () => {
    return (
        <div className={styling['table-wrapper']}>
            <table className={styling.table}>
                <tbody>
                    <tr>
                        <th rowSpan="2">Category</th>
                        <th colSpan="2">Indian Participant</th>
                        <th colSpan="2">Foreign Participant</th>
                    </tr>
                    <tr>
                        <th>On or before November 05, 2024</th>
                        <th>After November 05, 2024</th>
                        <th>On or before November 05, 2024</th>
                        <th>After November 05, 2024</th>
                    </tr>
                    <tr>
                        <td>Academia (Author)</td>
                        <td>₹6000</td>
                        <td>₹6500</td>
                        <td>$200</td>
                        <td>$250</td>
                    </tr>
                    <tr>
                        <td>Industry/ R & D organization (Author)</td>
                        <td>₹7000</td>
                        <td>₹7500</td>
                        <td>$250</td>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <td>Attending only/ Accompanying Person</td>
                        <td>₹2000</td>
                        <td>₹2500</td>
                        <td>$100</td>
                        <td>$120</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Pricing;

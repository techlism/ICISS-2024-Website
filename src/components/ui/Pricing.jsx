import styling from './Pricing.module.css';

const Pricing = () => {
    return (
        <div className={styling['table-wrapper']}>
            <div className={styling['table-container']}>
                <table className={styling.table}>
                    <tbody>
                        <tr>
                            <th rowSpan="2">Category</th>
                            <th colSpan="2">Indian Participant</th>
                            <th colSpan="2">Foreign Participant</th>
                        </tr>
                        <tr>
                            <th>On or before November 08, 2024</th>
                            <th>After November 08, 2024</th>
                            <th>On or before November 08, 2024</th>
                            <th>After November 08, 2024</th>
                        </tr>
                        <tr>
                            <td>Academia (Author)</td>
                            <td>₹7000</td>
                            <td>₹6500</td>
                            <td>$200</td>
                            <td>$250</td>
                        </tr>
                        <tr>
                            <td>Industry/ R & D organization (Author)</td>
                            <td>₹8000</td>
                            <td>₹7500</td>
                            <td>$250</td>
                            <td>$300</td>
                        </tr>
                        <tr>
                            <td>Attending only/ Accompanying Person</td>
                            <td>₹2500</td>
                            <td>₹2500</td>
                            <td>$100</td>
                            <td>$120</td>
                        </tr>
                    </tbody>
                </table>
                <p 
                    style={{
                        color: '#EDEEF7',
                        fontWeight: '500',
                        fontSize: '1.2rem',
                        textAlign: 'center',
                        marginTop: '20px'
                    }}
                >
                    <sup>*</sup>All the Registration Fees are subject to 18% GST.
                </p>
            </div>
        </div>
    );
};

export default Pricing;
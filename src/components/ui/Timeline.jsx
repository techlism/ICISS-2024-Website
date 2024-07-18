import styling from './Timeline.module.css'
const Timeline = ()=>{
    return(
        <div className={styling['table-wrapper']}>
            {/* Adding a comment for a dummy commit */}
        <table className={styling.table}>         
            <thead>
                <tr>
                <th id={styling.event}>Event</th>
                <th id={styling.date}>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Paper Submissions Deadline</td>
                <td><s>15<sup>th</sup> July 2024</s>  20<sup>th</sup> August 2024</td>
                </tr>
                <tr>
                <td>Notification of Final Acceptance</td>
                <td>15<sup>th</sup> September 2024</td>
                </tr>
                <tr>
                <td>Camera Ready Paper Submission</td>
                <td>30<sup>th</sup> September 2024</td>
                </tr>
                <tr>
                <td>Conference Date</td>
                <td>20<sup>th</sup> to 22<sup>nd</sup> December 2024</td>
                </tr>
            </tbody>
        </table>
        </div>        
    )
}
export default Timeline;

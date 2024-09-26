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
                <td>
                    <del>
                    September 15, 2024
                    </del> Closed
                    </td>
                </tr>
                <tr>
                <td>Notification of Final Acceptance</td>
                <td>October 25, 2024</td>
                </tr>
                <tr>
                <td>Camera Ready Paper Submission</td>
                <td>November 3, 2024</td>
                </tr>
                <tr>
                <td>Author Registration Deadline</td>
                <td>November 8, 2024</td>
                </tr>
                <tr>
                <td>Conference Date</td>
                <td>December 20-22, 2024</td>
                </tr>
            </tbody>
        </table>
        </div>        
    )
}
export default Timeline;

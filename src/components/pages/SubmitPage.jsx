import styling from './SubmitPage.module.css';
const SubmitPaper = ()=>{
    return(
        <div className={styling['submit-main-div']}>
            <div className={styling['content-wrapper']}>
                <h1>Submit Your Paper</h1>
                <hr />
                {/* <p>The authors are pleasingly invited to submit the full paper of their original, unpublished, research contribution which is not currently under review by another conference or journal. 
                    Only the accepted and registered papers will be allowed to present at the conference. 
                    The paper must be submitted using the EasyChair portal.
                </p>
                <button><a href="https://easychair.org">Submit</a></button> */}
                <p>Details regarding submission will be conveyed soon.</p>
                <p><span>NOTE :</span> Accepted and registered papers will be published by a Springer series (proposal submitted).</p>
            </div>
            
        </div>
    )
}
export default SubmitPaper;
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
                {/* <p>Details regarding submission will be conveyed soon.</p>
                <p><span>NOTE :</span> Accepted and registered papers will be published by a Springer series (proposal submitted).</p> */}
                                
                <p>
                    The authors are pleasingly invited to submit the full paper of their original, unpublished, research contribution which is not currently under review by another conference or journal. 
                    Only the accepted and registered papers will be allowed to present at the conference.
                </p>
                <p>
                    Submissions for the conference must be made online using CMT Portal.
                </p>
                <p>
                    Click on 'Submit Your Paper' button below to proceed with submission.
                </p>
                <button><a href="https://cmt3.research.microsoft.com/ICISS2024" target='blank'>Submit Your Paper</a></button>
            </div>
            
        </div>
    )
}
export default SubmitPaper;
import styling from './GuidelinesPage.module.css'
const GuidelinesPage = ()=>{
    return(
        <div className={styling['guideline-div']}>
            <h1>Author's Guidelines</h1>
            <ol>
                <li>
                    Each paper must be original and unpublished work, not submitted for publication elsewhere. Authors are responsible for avoiding any copyright infringement issues. Papers should be written in good English.
                </li>
                <li>
                    Submissions must be anonymous, without author name(s), affiliation(s), acknowledgments, or obvious references in LNNS Format(Word,Latex). The formats are <a href="">ICISS_LNNS Word Template</a> and <a href="">ICISS_LNNS Latex Template</a>. 
                </li>
                <li>
                     The recommended font size is 11 points, and reasonable margins should be used.
                </li>
                <li>
                    Authors are encouraged to follow the given guidelines when preparing their submissions. The papers must be in PDF format and should be submitted electronically through the CMT platform.
                </li>
                <li>
                    All submitted papers that adhere to the submission guidelines will undergo evaluation. The evaluation criteria include originality, technical and/or research content/depth, correctness, relevance to the conference, contributions, and readability.
                </li>
                <li>
                Authors are expected to ensure that the similarity index of their submitted paper remains below the threshold of 15%.
                </li>
                <li>
                    The authors of accepted papers will have an opportunity to make corrections based on the suggestions of the reviewers. They must submit the final camera-ready versions of their papers within the specified deadline.
                </li>
                <li>
                    Kindly note that the permissible page length for manuscript submissions is limited to 12 pages. In the event of exceeding this limit, an additional charge of INR 500 per page or $10 per page will apply. The maximum page count with the surcharge is set at 15 pages
                </li>
                <li>
                    Follow the authors instructions in the Information for Authors of Springer Proceedings. Relevant word and Latex templates can be found from <a href="https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines" target='blank'>here</a>.                    
                </li>
                <li>
                    To explore the topics of interest in detail, please visit the <a href="/about">About ICISS Page</a>.
                </li>
            </ol>
        </div>
    )
}

export default GuidelinesPage;

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
                    Submissions must be anonymous, without author name(s), affiliation(s), acknowledgments, or obvious references. The paper should start with a title, a short abstract, and a list of keywords. The introduction should provide a summary of the paper's contributions.
                </li>
                <li>
                     The recommended font size is 11 points, and reasonable margins should be used.
                </li>
                <li>
                    Authors are encouraged to follow the given guidelines when preparing their submissions. The papers must be in PDF format and should be submitted electronically through the EasyChair platform.
                </li>
                <li>
                    All submitted papers that adhere to the submission guidelines will undergo evaluation. The evaluation criteria include originality, technical and/or research content/depth, correctness, relevance to the conference, contributions, and readability.
                </li>
                <li>
                    The authors of accepted papers will have an opportunity to make corrections based on the suggestions of the reviewers. They must submit the final camera-ready versions of their papers within the specified deadline.
                </li>
                <li>
                    To know more about the specified format for publishing papers through Springer, please visit <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">here</a>. You can find all the necessary downloads and guidelines on that page.                    
                </li>
                <li>
                To explore the topics of interest in detail, please visit the About ICISS Page, which can be accessed from the About Section in the Navigation Bar.
                </li>
            </ol>
        </div>
    )
}

export default GuidelinesPage;
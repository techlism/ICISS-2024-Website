import React from 'react';
import styling from './ConferenceTopics.module.css'
const ConferenceTopics = () => {
  return (
    <>
    <p className={styling['para-about']}>
    Researchers and practitioners are encouraged to submit original, unpublished
    contributions.</p><p className={styling['para-about']}> The topics of interest include but are not limited to:
    </p>  
    <div className={styling['topic-main-div']}>        
      <div className={styling['content-div']}>         
          <div style={{margin:'30px',maxWidth:'60.5vw'}}>      
            <h2>Intelligent systems and applications:</h2>
            <table className={styling.table}>
              <tbody>
                <tr>
                  <td>Artificial intelligence (AI) and machine learning (ML) algorithms and techniques</td>
                </tr>
                <tr>
                  <td>Intelligent data analysis and decision support systems</td>
                </tr>
                <tr>
                  <td>Natural language processing and understanding</td>
                </tr>
                <tr>
                  <td>Computer vision and pattern recognition</td>
                </tr>
                <tr>
                  <td>Robotics and autonomous systems</td>
                </tr>
                <tr>
                  <td>Internet of Things (IoT) and intelligent systems integration</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{margin:'30px',maxWidth:'60.5vw'}}>
            <h2>Security and privacy:</h2>
            <table className={styling.table}>
              <tbody>
                <tr>
                  <td>Network and system security</td>
                </tr>
                <tr>
                  <td>Cryptography and secure communications</td>
                </tr>
                <tr>
                  <td>Physical layer security</td>
                </tr>
                <tr>
                  <td>Privacy-preserving technologies and anonymization techniques</td>
                </tr>
                <tr>
                  <td>Intrusion detection and prevention systems</td>
                </tr>
                <tr>
                  <td>Threat intelligence and information sharing</td>
                </tr>
                <tr>
                  <td>Security in cloud computing, big data, and IoT environments</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{margin:'30px',maxWidth:'60.5vw'}}>
            <h2>Intelligent security systems</h2>
            <table className={styling.table}>
              <tbody>
                <tr>
                  <td>Intelligent surveillance and monitoring systems</td>
                </tr>
                <tr>
                  <td>Biometric authentication and recognition</td>
                </tr>
                <tr>
                  <td>Intelligent access control systems</td>
                </tr>
                <tr>
                  <td>Intelligent threat detection and response</td>
                </tr>
                <tr>
                  <td>Security analytics and intelligent decision-making</td>
                </tr>
                <tr>
                  <td>Security in intelligent transportation systems</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{margin:'30px',maxWidth:'60.5vw'}}>
            <h2>Ethical and legal implications of intelligent systems and security:</h2>
            <table className={styling.table}>
              <tbody>
                <tr>
                  <td>Ethical considerations in the development and deployment of intelligent systems</td>
                </tr>
                <tr>
                  <td>Legal frameworks and regulations for intelligent systems and security</td>
                </tr>
                <tr>
                  <td>Fairness, transparency, and accountability in intelligent systems</td>
                </tr>
                <tr>
                  <td>Societal impact and implications of intelligent systems and security</td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>      
    </div>
    </>
  );
}

export default ConferenceTopics;

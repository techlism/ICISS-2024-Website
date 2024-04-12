import React from "react";
import "./Speaker2.css";
//import { Link } from "react-router-dom";

function SpeakerPage2() {
  return (
    <div>
      <div className="heading">
        <h1>Our Speakers</h1>
      </div>

      <div className="speaker-container">
        <div className="speaker-wrapper flex">
          <div className="content1 flex">
            <div className="speakers">
              <a href="https://cse.iitkgp.ac.in/~debdeep/deb/">
                <img
                  src="/speaker01.jpg"
                  alt="Debdeep Mukhopadhyay Image"
                  style={{ borderRadius: "8px", width: "100%" }}
                />
                <h1 style={{ fontSize: "20px" }}>Prof Debdeep Mukhopadhyay</h1>
                <p style={{ fontSize: "12px" }}>
                  Indian Institute of Technology, Kharagpur, India
                </p>
              </a>
            </div>

            <div className="speakers">
              <a href="https://www.cpe.eng.cmu.ac.th/lecturer-viewenglish.php?view_id=Sansanee">
                <img
                  src="/speaker02.png"
                  alt="Sansanee Auephanwiriyakul Image"
                  style={{ borderRadius: "8px", width: "100%" }}
                />
                <h1 style={{ fontSize: "20px" }} s>
                  Prof Sansanee Auephanwiriyakul
                </h1>
                <p style={{ fontSize: "12px" }}>
                  Chiang Mai University, Chiangmai, Thailand
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="ad">More Speakers to be added</h1>
    </div>
  );
}

export default SpeakerPage2;

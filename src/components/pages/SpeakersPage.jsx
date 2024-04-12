// import ProfessorCard from "../../ProfessorCard";
// import profile from '../../assets/profile.jpg'

import styling from "./SpeakersPage.module.css";

const SpeakersPage = () => {
  return (
    <div className={styling["main-speakerpage"]}>
      <div className={styling.professors}>
        <h1 className={styling.heading}>Our Speakers</h1>
        <div className={styling.speakerContainer}
          style={{
            color: "#EDEEF7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "25%",
              padding: "10px",
              border: "solid 2px black",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <img
              src="/speaker01.jpg"
              alt="Debdeep Mukhopadhyay Image"
              style={{ borderRadius: "8px", width: "100%" }}
            />
            <h1 style={{ fontSize: "20px" }}>Prof Debdeep Mukhopadhyay</h1>
            <p style={{ fontSize: "12px" }}>
              Indian Institute of Technology, Kharagpur, India
            </p>
          </div>
          <div
            style={{
              width: "25%",
              padding: "10px",
              border: "solid 2px black",
              borderRadius: "8px",
            }}
          >
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
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default SpeakersPage;

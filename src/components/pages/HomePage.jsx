import styling from "./HomePage.module.css";
import imgsrc from "../../assets/bg.png";
import AboutCollege from "../ui/AboutCollege";
import Timeline from "../ui/Timeline";
// import Pricing from '../Pricing';
// import Sponsors from '../Sponsors';
import About from "../ui/About";
import sponsorimg from "../../assets/cdac.jpeg";

import { useLocation, NavLink } from "react-router-dom";
import TimeLeftCounter from "../ui/TimeLeftCounter";
import AddressMap from "../ui/AddressMap";
const navlinkStyling = {
	textDecoration: "none",
	textAlign: "center",
	color: "#EDEEF7",
	fontSize: "0.94rem",
	padding: "2px",
};
const HomePage = () => {
	useLocation();
	return (
		<div className={styling["main-home"]}>
			<div className={styling["title-img"]}>
				<img
					src={imgsrc}
					className={styling.victoria}
					alt="Victoria Memorial"
				/>
				<h1>
					INTERNATIONAL CONFERENCE ON <br /> INTELLIGENT SYSTEMS AND SECURITY{" "}
					<br /> (ICISS 2024)
				</h1>
			</div>
			<div className={styling["conf-date"]}>
				<h1>Conference Date:</h1>
				<h2>
					20<sup>th</sup> to 22<sup>nd</sup> December 2024
				</h2>
                <a href="/best-paper" className={styling["view-schedule"]}>View Best Paper Awards</a>
			</div>
			<div className={styling["conf-date"]}>
				<AddressMap />
			</div>
			<h2 className={styling.subheading}>In Association with</h2>
			<div className={styling.sponsordiv}>
				<div className={styling["sponsor-subdiv"]}>
					<img src={sponsorimg} alt="cdac" />
					<h3 className={styling["sponsor-caption"]}>CDAC, Kolkata</h3>
				</div>
				<div className={styling["sponsor-subdiv"]}>
					<img src={"/kolkatapolice.svg"} alt="kolkata police logo" />
					<h3 className={styling["sponsor-caption"]}>Kolkata Police</h3>
				</div>
				<div className={styling["sponsor-subdiv"]}>
					<img src={"/webel_logo.jpg"} alt="webel logo" />
					<h3 className={styling["sponsor-caption"]}>
						WEBEL, Govt. of West Bengal
					</h3>
				</div>
				<div className={styling["sponsor-subdiv"]}>
					<img src={"/springer_logo.webp"} alt="springer logo" />
					<h3 className={styling["sponsor-caption"]}>Springer</h3>
				</div>
			</div>
			<h2 className={styling.subheading}>Sponsored by</h2>
			<div className={styling.sponsordiv}>
				<div className={styling["sponsor-subdiv"]}>
					<img src={"/webel_logo.jpg"} alt="webel logo" />
					<h3 className={styling["sponsor-caption"]}>
						WEBEL, Govt. of West Bengal
					</h3>
				</div>
				<div className={styling["sponsor-subdiv"]}>
					<img src={"/serb.png"} alt="webel logo" />
					<h3 className={styling["sponsor-caption"]}>
						DST - SERB, Govt. of India
					</h3>
				</div>
				<div className={styling["sponsor-subdiv"]}>
					<img src={"/drdo_logo.png"} alt="DRDO logo" loading="lazy"/>
					<h3 className={styling["sponsor-caption"]}>
						DRDO, Govt. of India
					</h3>
				</div>                
			</div>

			<AboutCollege />
			{/* About ICISS */}
			<div className={styling.aboutdiv}>
				<About />
			</div>
			<h2 className={styling.subheading}>Timeline of Events</h2>
			<p
				style={{
					color: "#fa0a01",
					textAlign: "center",
					fontSize: "1.2rem",
					fontWeight: "600",
					marginBottom: "10px",
				}}
			>
				(Hard Deadline)
			</p>
			<Timeline />
			<div className={styling["register-ref-div"]}>
				<div className={styling["button-wrapper"]}>
					<NavLink to="/contact" style={navlinkStyling}>
						Contact us for any other queries
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default HomePage;

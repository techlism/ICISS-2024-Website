import './App.css';
import Navbar from './components/ui/Navbar.jsx';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage' ;
import RegistrationPage from './components/pages/RegistrationPage.jsx';
import GuidelinesPage from './components/pages/GuidelinesPage.jsx';
import ContactPage from './components/pages/ContactPage.jsx';
import CommitteePage from './components/pages/CommitteePage.jsx';
import SpeakersPage from './components/pages/SpeakersPage.jsx';
import Footer from './components/ui/Footer.jsx';
import AboutCollegePage from './components/pages/AboutCollegePage.jsx';
import SubmitPaper from './components/pages/SubmitPage.jsx';
import ContributionTrackPage from './components/pages/ContributionTrackPage.jsx';
import VisaPage from './components/pages/VisaPage';
import VenuePage from './components/pages/VenuePage';
import TouristDestinationPage from './components/pages/TouristDestinationPage.jsx';
import SchedulePage from './components/pages/SchedulePage.jsx';
function App() {
  return (
    <div className='app-main'>
    <BrowserRouter>
    <Navbar/>        
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/speakers"
          element={<SpeakersPage/>}
        />
        <Route
          path="/committee"
          element={<CommitteePage/>}
        />
        <Route
          path="/register"
          element={<RegistrationPage/>}
        />
        <Route
          path="/guidelines"
          element={<GuidelinesPage/>}
        />        
        <Route
          path="/about"
          element={<AboutPage/>}
        />
        <Route
          path="/contact"
          element={<ContactPage/>}
        />       
        <Route
          path="/college"
          element={<AboutCollegePage/>}
        />
        <Route
          path="/submit"
          element={<SubmitPaper/>}
        /> 
        <Route
          path="/tracks"
          element={<ContributionTrackPage/>}
        />             
        <Route
          path="/visa"
          element={<VisaPage/>}
        />       
        <Route
          path="/venue"
          element={<VenuePage/>}
        /> 
        <Route
          path="/tourist-destinations"
          element={<TouristDestinationPage/>}
        />
        <Route
          path="/schedule"
          element={<SchedulePage/>}
        />                                        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

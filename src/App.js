import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import AboutPage from './components/pages/AboutPage';
import HomePage from './components/pages/HomePage' ;
import RegistrationPage from './components/pages/RegistrationPage';
import GuidelinesPage from './components/pages/GuidelinesPage';
import ContactPage from './components/pages/ContactPage';
import CommitteePage from './components/pages/CommitteePage';
import SpeakersPage from './components/pages/SpeakersPage';
import Footer from './components/Footer';
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
          path="/registration"
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
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

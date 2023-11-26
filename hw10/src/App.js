import './App.css';
import './components/Home/Home.css';
import ResumeForm from './components/ResumeForm/ResumeForm';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
<<<<<<< HEAD
=======
import Createresume from './components/Createresume/Createresume';
import NavBar from './components/NavBar/NavBar';
>>>>>>> 054cf65d83b8ea4b03b29aed530497c8dafc21f6
import Resume from './components/ResumeForm/Resume';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
<<<<<<< HEAD
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/resumeform" element = {<ResumeForm />}/>
          <Route exact path = "/contact" element = {<Contact />}/>
          <Route exact path = "/resume" element = {<Resume />}/>       
=======
          <Route path="/home" element={<Home />} />
          <Route path="/resumeform" element={<ResumeForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
          <Route exact path = "/resume" element = {<Resume/>}/>
>>>>>>> 054cf65d83b8ea4b03b29aed530497c8dafc21f6
        </Routes>
      </Router>
    </div>
  );
}

export default App;
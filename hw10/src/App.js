import './App.css';
import ResumeForm from './components/ResumeForm/ResumeForm';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Createresume from './components/Createresume/Createresume';
import NavBar from './components/NavBar/NavBar';

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
          <Route path="/home" element={<Home />} />
          <Route path="/resumeform" element={<ResumeForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

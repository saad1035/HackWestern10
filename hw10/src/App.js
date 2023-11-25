import logo from './logo.svg';
import './App.css';
import ResumeForm from './components/ResumeForm/ResumeForm';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

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
        <Routes>
          <Route exact path = "/" element = {<Contact/>}/>
          {/* <Route exact path = "/" element = {<Home/>} />
          <Route exact path = "/" element = {<ResumeForm />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
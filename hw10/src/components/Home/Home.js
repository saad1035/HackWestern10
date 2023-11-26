import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Use RouterLink for react-router-dom's Link
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll'; // Use ScrollLink for react-scroll's Link
import './Home.css';
import resumeImage from '../../assets/resume.png'

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="content-box">
        <header className="header-content">
        <ScrollLink className="scroll-button" to="features" spy={true} smooth={true} duration={500}>
           </ScrollLink>
          <h1 className="title">The Ultimate Resume Builder</h1>
          <p className="subheadline">
            Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.
          </p>
          <RouterLink to="/ResumeForm">
          <button className="purple-button">Go to Resume Form</button>
          </RouterLink>
        </header>
        <div className="resume-sample-container">
          <img src={resumeImage} alt="Resume" className="resume-image"/>
        </div>
      </div>
      {/* ... other components ... */}
    </div>
  );
};

export default HomePage;


import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router
import './Home.css';

const HomePage = () => {
    return (
      <div>
      
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resumeform">Resume Form</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
        
  
        {/* Main Content Area */}
        <div>
          <h1 className = "title">Resumade Easy</h1>
          <p className = "body-text">
          Welcome to Resumade Easy, where crafting the perfect resume is as effortless as a stroll in the park. 
          Our mission is simple: empower you to showcase your skills and experiences with a resume that not only 
          speaks volumes but also stands out in the crowd. Imagine a world where creating a professional resume 
          is as friendly as our mascot, the Resumonster, guiding you through the process. At Resumade Easy, we 
          believe that everyone deserves a resume that reflects their unique journey and aspirations. Get ready 
          to embark on a seamless adventure of resume-building – because landing your dream job should be a walk 
          in the park, not a maze of complications. Let's make your professional story roar with Resumade Easy!
          </p>
  
          {/* Example Button to Route to Resume Form */}
          <Link to="/ResumeForm">
            <button className = "purple-button">Go to Resume Form</button>
          </Link>
          </div>

          <div class = "fast">
            <p class = "title">Easy and Fast</p>
            <p>Our resume builder makes the job application process 10x faster.</p>
            <p>There are clear and simple step-by-step process to guide users through each section of the resume.</p>
          </div>

          <div class = "ai">
            <p class = "title">Use AI</p>
            <p>Uses AI to generate points based on the job title.</p>
            <p>Keeps the experience up to date with the current job trends.</p>
            <p></p>
          </div>

          <div class = "customizable">
            <p class = "title">Customizable</p>
            <p>Easily modify the content within each section to highlight specific achievements, skills, or experience relevant to different job applications. </p>
          </div>
        
          <div class = "footer">
          <p>2023 My Website. All rights reserved.</p>
          </div>
       </div>
    );
  };

export default HomePage;
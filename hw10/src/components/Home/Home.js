import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router

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
        <div class = "header">
          <h1>Welcome to My Website</h1>
          <p>This is a simple home page template in React.</p>
          </div>


          <div class = "intro">
          {/* Example Button to Route to Resume Form */}
          <Link to="/ResumeForm">
            <button>Go to Resume Form</button>
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
import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router

const HomePage = () => {
    return (
      <div>
      <div class = "navigation">
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
        </div>
  
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
          
        
        
  
        {/* Footer */}
        <div class = "footer">
        <footer>
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </footer>
        </div>
      </div>
    );
  };

export default HomePage;
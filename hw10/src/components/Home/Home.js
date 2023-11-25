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
            <li>
              <Link to="/registration">Register</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
  
        {/* Main Content Area */}
        <div>
          <h1>Welcome to My Website</h1>
          <p>This is a simple home page template in React.</p>
  
          {/* Example Button to Route to Resume Form */}
          <Link to="/ResumeForm">
            <button>Go to Resume Form</button>
          </Link>
        </div>
  
        {/* Footer */}
        <footer>
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </footer>
      </div>
    );
  };

export default HomePage;
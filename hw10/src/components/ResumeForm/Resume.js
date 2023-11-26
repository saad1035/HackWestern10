import React from 'react';
import ResumeForm from './ResumeForm.js';

const AnotherFile = ({formData}) => {
  // Define a function to handle form submission in AnotherFile.js
  const handleFormSubmit = (formData) => {
    // Process or output the form data as needed
    console.log('Form Data:', formData);
    // Add your logic here, for example, sending the data to an API, storing it in state, etc.
  };

  return (
    <div>
      <h1>Another File</h1>
      <div>
      {/* Pass the callback function to the ResumeForm component */}
      <ResumeForm onFormSubmit={handleFormSubmit} />
    </div>    </div>
  );
};

export default AnotherFile;
<<<<<<< HEAD
import React, { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Inside Resume.js
const Resume = (props) => {
    const formData = props.location.state?.formData || {};
  
    return (
      <div>
        <h1>Your Resume</h1>
        <p>Name: {formData.firstName} {formData.lastName}</p>
        <p>Email: {formData.email}</p>
      </div>
    );
  };
  


const ResumeToPrint = ({ formData }) => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current, // Use current property of the ref
  });

  const handleDownloadPDF = async () => {
    const content = componentRef.current;

    if (content) {
      const canvas = await html2canvas(content);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('resume.pdf');
    }
=======
import React from 'react';
import ResumeForm from './ResumeForm';

const AnotherFile = ({formData}) => {
  // Define a function to handle form submission in AnotherFile.js
  const handleFormSubmit = (formData) => {
    // Process or output the form data as needed
    console.log('Form Data:', formData);
    // Add your logic here, for example, sending the data to an API, storing it in state, etc.
>>>>>>> 054cf65d83b8ea4b03b29aed530497c8dafc21f6
  };

  return (
    <div>
<<<<<<< HEAD
      <h1>Your Resume (Printable Version)</h1>
      <ResumeContent ref={componentRef} formData={formData} />
      <button onClick={handlePrint}>Print Resume</button>
      <button onClick={handleDownloadPDF}>Download PDF</button>
=======
      <h1>Another File</h1>
      {/* Render ResumeForm and pass the handleFormSubmit function as a prop */}
>>>>>>> 054cf65d83b8ea4b03b29aed530497c8dafc21f6
    </div>
  );
};

<<<<<<< HEAD
const ResumeContent = React.forwardRef(({ formData }, ref) => {
  return (
    <div ref={ref}>
      <p>Name: {formData.firstName} {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
      <p>Address: {formData.address}</p>
      {/* Display other information */}
    </div>
  );
});

export default Resume;
=======
export default AnotherFile;
>>>>>>> 054cf65d83b8ea4b03b29aed530497c8dafc21f6

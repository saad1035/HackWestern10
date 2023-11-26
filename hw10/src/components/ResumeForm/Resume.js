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
  };

  return (
    <div>
      <h1>Your Resume (Printable Version)</h1>
      <ResumeContent ref={componentRef} formData={formData} />
      <button onClick={handlePrint}>Print Resume</button>
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

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

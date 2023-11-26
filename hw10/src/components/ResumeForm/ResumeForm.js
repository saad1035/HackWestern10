// ResumeForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

<<<<<<< HEAD
function ResumeForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    positionTitle: '',
    companyName: '',
    startDateWork: '',
    endDateWork: '',
    workSummary: '',
    schoolName: '',
    schoolLocation: '',
    startDateSch: '',
    endDateSch: '',
    degree: '',
    skill: '',
    summary: ''
  });
=======
  function ResumeForm() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      // Add more fields as needed
    });
>>>>>>> 054cf65d83b8ea4b03b29aed530497c8dafc21f6

    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

<<<<<<< HEAD
// Inside handleSubmit in ResumeForm.js
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form Data:', formData); // Log the form data
  // Process the form data or generate the resume here
  navigate('/resume', { state: { formData } });
};

  return (
    <div>
      <h1>Resume Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />
        <h1>Professional Experience</h1>
        <label>
          Position Title:
          <input type="text" name="positionTitle" value={formData.positionTitle} onChange={handleChange} />
        </label>
        <br />
        <label>
          Company Name:
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Start Date:
          <input type="date" name="startDateWork" value={formData.startDateWork} onChange={handleChange} />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" name="endDateWork" value={formData.endDateWork} onChange={handleChange} />
        </label>
        <br />
        <label>
          Work Summary:
          <input type="text" name="workSummary" value={formData.workSummary} onChange={handleChange} />
        </label>
        <br />
        <h1>Education</h1>
        <label>
          School Name:
          <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} />
        </label>
        <br />
        <label>
          School Location:
          <input type="text" name="schoolLocation" value={formData.schoolLocation} onChange={handleChange} />
        </label>
        <br />
        <label>
          Start Date:
          <input type="date" name="startDateSch" value={formData.startDateSch} onChange={handleChange} />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" name="endDateSch" value={formData.endDateSch} onChange={handleChange} />
        </label>
        <br />
        <label>
          Degree:
          <input type="text" name="degree" value={formData.degree} onChange={handleChange} />
        </label>
        <br />
        <h1>Key Skills</h1>
        <label>
          Skill:
          <input type="text" name="skill" value={formData.skill} onChange={handleChange} />
        </label>
        <br />
        <h1>Summary</h1>
        <label>
          Provide a brief overview of your professional background, educational history, and skill set in this section.
          <input type="text" name="summary" value={formData.summary} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
}
=======
    const handleSubmit = (e) => {
      navigate('/resume', {state: formData, replace: true})
    }

    const submit = async () => {
      navigate("/resume", {replace: true});
    };
>>>>>>> 054cf65d83b8ea4b03b29aed530497c8dafc21f6

    return (
      <div>
        <h1>Resume Form</h1>
        <h1>Personal Details</h1>
        <form action = "" onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          {/* Add input fields for each piece of information */}
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <br />
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          <br />
          <h1>Professional Experience</h1>
          <label>
            Position Title:
            <input type="text" name="positionTitle" value={formData.positionTitle} onChange={handleChange} />
          </label>
          <br />
          <label>
            Company Name:
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
          </label>
          <br />
          <label>
            Start Date:
            <input type="date" name="startDateWork" value={formData.startDateWork} onChange={handleChange} />
          </label>
          <br />
          <label>
            End Date:
            <input type="date" name="endDateWork" value={formData.endDateWork} onChange={handleChange} />
          </label>
          <br />
          <label>
            Work Summary:
            <input type="text" name="workSummary" value={formData.workSummary} onChange={handleChange} />
          </label>
          <br />
          <h1>Education</h1>
          <label>
            School Name:
            <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} />
          </label>
          <br />
          <label>
            School Location:
            <input type="text" name="schoolLocation" value={formData.schoolLocation} onChange={handleChange} />
          </label>
          <br />
          <label>
            Start Date:
            <input type="date" name="startDateSch" value={formData.startDateSch} onChange={handleChange} />
          </label>
          <br />
          <label>
            End Date:
            <input type="date" name="endDateSch" value={formData.endDateSch} onChange={handleChange} />
          </label>
          <br />
          <label>
            Degree:
            <input type="text" name="degree" value={formData.degree} onChange={handleChange} />
          </label>
          <br />
          <h1>Key Skills</h1>
          <label>
            Skill:
            <input type="text" name="skill" value={formData.skill} onChange={handleChange} />
          </label>
          <br />
          <h1>Summary</h1>
          <label>
            Provide a brief overview of your professional background, educational history, and skill set in this section.
            <input type="text" name="summary" value={formData.summary} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Generate Resume</button>
        </form>
      </div>
    );
  }

  export default ResumeForm;

// ResumeForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

  function ResumeForm({onFormSubmit}) {
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredPositionTitle, setEnteredPositionTitle] = useState('');
    const [enteredCompanyName, setEnteredCompanyName] = useState('');
    const [enteredStartDate, setEnteredStartDate] = useState('');
    const [enteredEndDate, setEnteredEndDate] = useState('');
    const [enteredWorkSummary, setEnteredWorkSummary] = useState('');
    const [enteredSchool, setEnteredSchool] = useState('');
    const [enteredSchoolLocation, setEnteredSchoolLocation] = useState('');
    const [enteredStartDateSchool, setEnteredStartDateSchool] = useState('');
    const [enteredEndDateSchool, setEnteredEndDateSchool] = useState('');
    const [enteredDegree, setEnteredDegree] = useState('');
    const [enteredSkill, setEnteredSkill] = useState('');
    const [enteredSummary, setEnteredSummary] = useState('');

  // ... other state variables for your form fields

  const [submittedText, setSubmittedText] = useState(null);

  const textChangeHandler = (e) => {
    // Assuming each input field has a name attribute
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setEnteredFirstName(value);
        break;
      case 'lastName':
        setEnteredLastName(value);
        break;
      case 'email':
        setEnteredEmail(value);
        break;
      case 'phone':
        setEnteredPhone(value);
        break;
      case 'address':
        setEnteredAddress(value);
        break;
      case 'positionTitle':
        setEnteredPositionTitle(value);
        break;
      case 'companyName':
        setEnteredCompanyName(value);
        break;
      case 'startDateWork':
        setEnteredStartDate(value);
        break;
      case 'endDateWork':
        setEnteredEndDate(value);
        break;
      case 'workSummary':
        setEnteredWorkSummary(value);
        break;
      case 'schoolName':
        setEnteredSchool(value);
        break;
      case 'schoolLocation':
        setEnteredSchoolLocation(value);
        break;
      case 'startDateSch':
        setEnteredStartDateSchool(value);
        break;
      case 'endDateSch':
        setEnteredEndDateSchool(value);
        break;
      case 'degree':
        setEnteredDegree(value);
        break;
      case 'skill':
        setEnteredSkill(value);
        break;
      case 'summary':
        setEnteredSummary(value);
      default:
        break;
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    // Concatenate all form data into a string
    const allFormData = `
      First Name: ${enteredFirstName}
      Last Name: ${enteredLastName}
      Email: ${enteredEmail}
      Phone: ${enteredPhone}
      Address: ${enteredAddress}
      Position Title: ${enteredPositionTitle}
      Company Name: ${enteredCompanyName}
      Start Date: ${enteredStartDate}
      End Date: ${enteredEndDate}
      Work Summary: ${enteredWorkSummary}
      School Name: ${enteredSchool}
      School Location: ${enteredSchoolLocation}
      Start Date: ${enteredStartDateSchool}
      End Date: ${enteredEndDateSchool}
      Degree: ${enteredDegree}
      Skill: ${enteredSkill}
      Summary: ${enteredSummary}
    `;

    setSubmittedText(allFormData);
    
    // Optionally, you can pass the form data to a parent component or perform other actions
    if (onFormSubmit) {
      onFormSubmit({
        firstName: enteredFirstName,
        lastName: enteredLastName,
        // ... other form fields
      });
    }
  };

    return (
      <div>
        <h1>Resume Form</h1>
        <h1>Personal Details</h1>
        <form onSubmit = {submitHandler}>
          {/* Add input fields for each piece of information */}
          <label>
            First Name:
            <input type="text" name="firstName" value={enteredFirstName} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" name="lastName" value={enteredLastName} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={enteredEmail} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            Phone:
            <input type="tel" name="phone" value={enteredPhone} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            Address:
            <input type="text" name="address" value={enteredAddress} onChange={textChangeHandler} />
          </label>
          <br />
          <h1>Professional Experience</h1>
          <label>
            Position Title:
            <input type="text" name="positionTitle" value={enteredPositionTitle} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            Company Name:
            <input type="text" name="companyName" value={enteredCompanyName} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            Start Date:
            <input type="date" name="startDateWork" value={enteredStartDate} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            End Date:
            <input type="date" name="endDateWork" value={enteredEndDate} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            Work Summary:
            <input type="text" name="workSummary" value={enteredWorkSummary} onChange={textChangeHandler} />
          </label>
          <br />
          <h1>Education</h1>
          <label>
            School Name:
            <input type="text" name="schoolName" value={enteredSchool} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            School Location:
            <input type="text" name="schoolLocation" value={enteredSchoolLocation} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            Start Date:
            <input type="date" name="startDateSch" value={enteredStartDateSchool} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            End Date:
            <input type="date" name="endDateSch" value={enteredEndDateSchool} onChange={textChangeHandler} />
          </label>
          <br />
          <label>
            Degree:
            <input type="text" name="degree" value={enteredDegree} onChange={textChangeHandler} />
          </label>
          <br />
          <h1>Key Skills</h1>
          <label>
            Skill:
            <input type="text" name="skill" value={enteredSkill} onChange={textChangeHandler} />
          </label>
          <br />
          <h1>Summary</h1>
          <label>
            Provide a brief overview of your professional background, educational history, and skill set in this section.
            <input type="text" name="summary" value={enteredSummary} onChange={textChangeHandler} />
          </label>
          <br />
          <button type="submit">Generate Resume</button>
        </form>
        {submittedText && (<p>You just typed: {submittedText}</p>)}
      </div>
    );
  }

  export default ResumeForm;

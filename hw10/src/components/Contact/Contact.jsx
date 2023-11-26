import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

// Header component
const Header = () => {
  return (
    <StyledHeader>
      <h1>Contact Us</h1>
      <p>Fill out the form and send us your questions or feedback.</p>
    </StyledHeader>
  );
};

// Contact form component
const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState(""); // State to track form submission status

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Basic validation check
    if (form.current.user_name.value && form.current.user_email.value && form.current.message.value) {
      emailjs
        .sendForm(
          "service_c0wwz4l",
          "template_uepi1jq",
          form.current,
          "5MbEvwOF0B-9AWMG1"
        )
        .then(
          (result) => {
            setFormStatus("Message sent successfully!"); // Success message
          },
          (error) => {
            setFormStatus("Failed to send message."); // Error message
          }
        );
    } else {
      setFormStatus("Please fill all the fields."); // Validation error message
    }
  };

  return (
    <CenteredContainer>
      <StyledContactForm>
        <Header /> {/* Include the Header component */}
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
          <div>{formStatus}</div>
        </form>
      </StyledContactForm>
    </CenteredContainer>
  );
};
export default Contact;


// Styles for Contact Form and Header
const StyledHeader = styled.div`
text-align: center;
  margin-bottom: 20px;
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    color: #333;
    font-family: 'Fira Sans', sans-serif; // Apply Fira Sans font
    font-weight: 900; // Use the black weight
  }

  p {
    font-size: 1rem;
    color: #666;
    font-family: 'Fira Sans', sans-serif; // Apply Fira Sans font
  }
`;
const StyledContactForm = styled.div`
  width: 400px;
  margin: 0 auto; // Center horizontally
  font-family: 'Fira Sans', sans-serif;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input, textarea {
      width: 100%;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(255, 175, 204);						 
      }
    }

    textarea {
      max-height: 100px;
      min-height: 100px;
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(255, 153, 200);						 
      color: white;
      border: none;
      transition: background-color 0.3s, transform 0.1s; // Smooth transition for background and transform

      &:hover {
        background: rgb(255, 195, 214); // Slightly lighter or different color on hover
      }

      &:active {
        transform: translateY(2px); // Press down effect
      }
    }
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
`;
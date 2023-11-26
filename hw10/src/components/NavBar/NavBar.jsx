import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/ResumadeEasy.png';
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <img src={logo} alt="logo" />
      {/* <Link to="/" className="title"> */}
      {/* </Link> */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
        <NavLink to="/ResumeForm" className="create-resume-btn">Create Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

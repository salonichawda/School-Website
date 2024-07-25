import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="App-header">
      <nav
        className="navbar bbg-secondary border-bottom border-body sticky-top"
        data-bs-theme="dark"
      >
        {/* <div className="container-fluid d-flex"> */}
        <div className="school-info d-flex align-items-center">
          <img
            className="icon--school-logo"
            src="/image.png"
            alt="School Logo"
          />
          <div className="school-text ">
            <h2>SPRINGDALES PUBLIC SCHOOL</h2>
            <p>NEW DELHI 110 005, INDIA</p>
          </div>
        </div>
        <div id="navbarNav">
          <ul className="navbar-nav d-flex ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/academics">
                Academics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admissions">
                Admissions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faculty">
                Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/students">
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Header;

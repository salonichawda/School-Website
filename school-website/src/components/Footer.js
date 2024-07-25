import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <strong>Email:</strong> info@example.com
              </li>
              <li>
                <strong>Phone:</strong> +1 (123) 456-7890
              </li>
            </ul>
          </div>
          <div className="col-md-4 icon-section">
            <h3>Follow Us</h3>
            <ul className="social-icons d-flex">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Admissions</a>
              </li>
              <li>
                <a href="#">Academics</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <hr />
            <p>&copy; 2024 Your School. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "../App.css";

const ContactPage = () => {
  return (
    <div className="container-fluid">
      <section className="contact-section">
        <div className="contact-info">
          <div className="contact-details">
            <table className="contact-table">
              <tbody>
                <tr>
                  <td>
                    <strong>Address:</strong>
                  </td>
                  <td>
                    Springdale Public School, Upper Ridge Junction, Pusa Rd,
                    Pocket 29, Old Rajinder Nagar, New Delhi, Delhi, 110005
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone:</strong>
                  </td>
                  <td>+1 (123) 456-7890</td>
                </tr>
                <tr>
                  <td>
                    <strong>Email:</strong>
                  </td>
                  <td>info@springdale.edu</td>
                </tr>
              </tbody>
            </table>
            <div className="contact-form-section">
              <h3>Contact Form</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">
                    Name <strong className="text-danger">*</strong>
                  </label>
                  <input
                    placeholder="Enter you name"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email <strong className="text-danger">*</strong>
                  </label>
                  <input
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    Message <strong className="text-danger">*</strong>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Write your message here"
                    required
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>

          <div className="map-section">
            <h3>Location</h3>
            <iframe
              title="Springdale Public School Location"
              width="100%"
              height="435"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.637989268801!2d77.18816701508128!3d28.644216182406325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6077bbc7c9%3A0x360d343dd9a24a11!2sSpringdales%20School!5e0!3m2!1sen!2sin!4v1645804786133!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

import React from "react";
import AdmissionsForm from "../components/Admission-Form";
import { useState } from "react";
// import Footer from '../components/Footer';

const AdmissionsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle form submission, such as sending data to a server or displaying a success message
    console.log("Form submitted:", formData);
    // Optionally, you can reset the form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container-fluid">
      <main>
        <section className="admissions-section">
          <h2>Admissions</h2>

          <div className="admission-info">
            <h3>Admission Process</h3>
            <p>
              Admission forms are available for download. Submit the completed
              form along with required documents at the school office.
            </p>
          </div>

          <div className="admission-info">
            <h3>Criteria</h3>
            <p>
              Admission is based on merit and availability of seats. Entrance
              tests may be conducted for certain grades.
            </p>
          </div>

          <div className="admission-info">
            <h3>Important Dates</h3>
            <ul>
              <li>Admission Form Availability: March 1st</li>
              <li>Last Date for Submission: March 31st</li>
              <li>Entrance Test: April 15th</li>
              <li>Announcement of Results: April 30th</li>
            </ul>
          </div>

          <div className="admission-info">
            <h3>Download Admission Form</h3>
            <AdmissionsForm />
          </div>

          <div className="admission-info">
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdmissionsPage;

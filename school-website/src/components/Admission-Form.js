import React, { useState } from "react";
import "../App.css";

const AdmissionsForm = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDownload = () => {
    const pdfUrl = "/admission_form.pdf"; // Adjust the URL to your PDF file
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "admission_form.pdf"; // Specify the file name here
    anchor.click();
  };

  return (
    <div className="admission-modal">
      <button onClick={toggleModal}>Apply for Admission</button>
      <div className="download-icon" onClick={handleDownload}>
        <img src="" alt="" />
      </div>
      {showModal && (
        <div className="modal-background">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Springdale Public School Admissions Form</h2>
            <form>
              <div className="form-group">
                <label>Name</label>
                <div className="name-fields">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Middle Initial" />
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
              <div className="form-group">
                <label>Birth Date</label>
                <div className="birthdate-fields">
                  <input type="date" required />
                </div>
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Citizenship</label>
                <input
                  type="text"
                  placeholder="Country of Citizenship"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="(000) 000-0000" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Mailing Address</label>
                <input type="text" placeholder="Street Address" required />
                <input type="text" placeholder="Street Address Line 2" />
                <input type="text" placeholder="City" required />
                <input type="text" placeholder="State / Province" required />
                <input type="text" placeholder="Postal / Zip Code" required />
              </div>
              <div className="form-group">
                <label>Emergency Contact</label>
                <div className="emergency-contact-fields">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                  <input type="text" placeholder="Relationship" required />
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
              </div>
              <div className="form-group">
                <label>Languages Spoken (other than English)</label>
                <textarea
                  rows="4"
                  placeholder="Enter languages spoken"
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionsForm;

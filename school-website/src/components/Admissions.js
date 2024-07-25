import React from "react";
import AdmissionForm from "./Admission-Form";
import "../App.css";

const Admissions = () => {
  return (
    <div className="container-fluid">
      <div className="flex-container admission-section">
        <div className="left-column">
          <AdmissionForm />
        </div>
        <div className="right-column">
          <div className="admissions-info">
            <h3>Admission Process and Criteria</h3>
          </div>
          <div className="admission-process-details">
            <p>
              <strong>Process:</strong> Admission forms are available for
              download. Submit the completed form along with required documents
              at the school office.
            </p>
            <p>
              <strong>Criteria:</strong> Admission is based on merit and
              availability of seats. Entrance tests may be conducted for certain
              grades.
            </p>
            <div className="important-dates">
              <strong>Important Dates:</strong>
              <ul>
                <li>Admission Form Availability: March 1st</li>
                <li>Last Date for Submission: March 31st</li>
                <li>Entrance Test: April 15th</li>
                <li>Announcement of Results: April 30th</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;

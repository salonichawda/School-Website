import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import "../App.css";

const AdmissionForm = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [residentialAddress, setResidentialAddress] = useState({
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [parentFirstName, setParentFirstName] = useState("");
  const [parentLastName, setParentLastName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [religion, setReligion] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (FirstName.trim() === "") {
      errors.FirstName = "First Name is required";
    }

    if (LastName.trim() === "") {
      errors.LastName = "Last Name is required";
    }

    if (DOB.trim() === "") {
      errors.DOB = "Date of Birth is required";
    }

    if (gender.trim() === "") {
      errors.gender = "Gender is required";
    }

    if (residentialAddress.streetAddress.trim() === "") {
      errors.streetAddress = "Street Address is required";
    }

    if (residentialAddress.city.trim() === "") {
      errors.city = "City is required";
    }

    if (residentialAddress.state.trim() === "") {
      errors.state = "State / Province is required";
    }

    if (residentialAddress.postalCode.trim() === "") {
      errors.postalCode = "Postal / Zip Code is required";
    }

    if (parentFirstName.trim() === "") {
      errors.parentFirstName = "Parent's First Name is required";
    }

    if (parentLastName.trim() === "") {
      errors.parentLastName = "Parent's Last Name is required";
    }

    if (parentPhone.trim() === "") {
      errors.parentPhone = "Parent's Phone Number is required";
    } else if (parentPhone.toString().length !== 10) {
      errors.parentPhone = "Phone number should be 10 digits long";
    }

    if (religion.trim() === "") {
      errors.religion = "Religion is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  const downloadPdf = () => {
    const element = document.getElementById("admission-form");

    const opt = {
      margin: 1,
      filename: "download.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="container-fluid admission-form" id="admission-form">
      <div className="d-flex align-items-center admission-form-header p-3">
        <img
          className="icon--school-logo-form"
          src="/image.png"
          alt="School Logo"
        />
        <h2 className="mt-3">School Admission Form</h2>
      </div>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="FirstName">
              First Name <strong className="text-danger">*</strong>
            </label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span className="error">{formErrors.FirstName}</span>
          </div>
          <div className="form-group col">
            <label htmlFor="LastName">
              Last Name <strong className="text-danger">*</strong>
            </label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span className="error">{formErrors.LastName}</span>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="DOB">
              Date of Birth <strong className="text-danger">*</strong>
            </label>
            <input
              type="date"
              id="DOB"
              name="DOB"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
            <span className="error">{formErrors.DOB}</span>
          </div>
          <div className="form-group col">
            <label htmlFor="gender">
              Gender <strong className="text-danger">*</strong>
            </label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <span className="error">{formErrors.gender}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="religion">
            Religion <strong className="text-danger">*</strong>
          </label>
          <input
            type="text"
            id="religion"
            name="religion"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
          />
          <span className="error">{formErrors.religion}</span>
        </div>

        <div className="form-group">
          <label>
            Residential Address <strong className="text-danger">*</strong>
          </label>
          <input
            type="text"
            placeholder="Street Address"
            value={residentialAddress.streetAddress}
            onChange={(e) =>
              setResidentialAddress({
                ...residentialAddress,
                streetAddress: e.target.value,
              })
            }
          />
          <span className="error">{formErrors.streetAddress}</span>
          <input
            type="text"
            placeholder="City"
            value={residentialAddress.city}
            onChange={(e) =>
              setResidentialAddress({
                ...residentialAddress,
                city: e.target.value,
              })
            }
          />
          <span className="error">{formErrors.city}</span>
          <div className="form-row">
            <div className="form-group col">
              <input
                type="text"
                placeholder="State / Province"
                value={residentialAddress.state}
                onChange={(e) =>
                  setResidentialAddress({
                    ...residentialAddress,
                    state: e.target.value,
                  })
                }
              />
              <span className="error">{formErrors.state}</span>
            </div>
            <div className="form-group col">
              <input
                type="text"
                placeholder="Postal / Zip Code"
                value={residentialAddress.postalCode}
                onChange={(e) =>
                  setResidentialAddress({
                    ...residentialAddress,
                    postalCode: e.target.value,
                  })
                }
              />
              <span className="error">{formErrors.postalCode}</span>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="parentFirstName">
              Parent's First Name <strong className="text-danger">*</strong>
            </label>
            <input
              type="text"
              id="parentFirstName"
              name="parentFirstName"
              value={parentFirstName}
              onChange={(e) => setParentFirstName(e.target.value)}
            />
            <span className="error">{formErrors.parentFirstName}</span>
          </div>
          <div className="form-group col">
            <label htmlFor="parentLastName">
              Parent's Last Name <strong className="text-danger">*</strong>
            </label>
            <input
              type="text"
              id="parentLastName"
              name="parentLastName"
              value={parentLastName}
              onChange={(e) => setParentLastName(e.target.value)}
            />
            <span className="error">{formErrors.parentLastName}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="parentPhone">
            Parent's Phone Number <strong className="text-danger">*</strong>
          </label>
          <input
            type="number"
            id="parentPhone"
            name="parentPhone"
            value={parentPhone}
            onChange={(e) => setParentPhone(e.target.value)}
          />
          <span className="error">{formErrors.parentPhone}</span>
        </div>

        <div className="d-flex gap-3">
          <button type="submit">Submit</button>
          <button type="button" onClick={downloadPdf}>
            Download Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;

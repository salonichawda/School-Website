import React from "react";

const FacultyPage = () => {
  const facultyProfiles = [
    {
      name: "John Doe",
      position: "Principal",
      qualifications: "M.Ed",
      experience: "20 years of experience in educational administration",
    },
    {
      name: "Jane Smith",
      position: "Vice Principal",
      qualifications: "M.Sc. in Physics",
      experience: "15 years of teaching experience",
    },
    {
      name: "Emily Johnson",
      position: "English Teacher",
      qualifications: "M.A. in English",
      experience: "10 years of teaching experience",
    },
    {
      name: "Michael Brown",
      position: "Mathematics Teacher",
      qualifications: "M.Sc. in Mathematics",
      experience: "8 years of teaching experience",
    },
    {
      name: "Sophia Davis",
      position: "Science Teacher",
      qualifications: "M.Sc. in Chemistry",
      experience: "12 years of teaching experience",
    },
    {
      name: "David Wilson",
      position: "Computer Science Teacher",
      qualifications: "B.Tech in Computer Science",
      experience: "5 years of teaching experience",
    },
  ];

  return (
    <div className="container-fluid">
      <section className="faculty-section">
        <h2>Faculty Profiles</h2>

        <div className="faculty-list">
          {facultyProfiles.map((profile, index) => (
            <div key={index} className="faculty-item">
              <h3>{profile.name}</h3>
              <p>{profile.position}</p>
              <p>{profile.qualifications}</p>
              <p>{profile.experience}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;

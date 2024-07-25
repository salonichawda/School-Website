import React from "react";
import "../App.css";

const AcademicsPage = () => {
  return (
    <div className="container-fluid">
      <section className="academics-section">
        <div className="curriculum-section">
          <h3>Curriculum</h3>
          <ul>
            <li>
              <strong>Primary (Grades 1-5):</strong> English, Mathematics,
              Science, Social Studies, Art, Physical Education
            </li>
            <li>
              <strong>Secondary (Grades 6-10):</strong> English, Mathematics,
              Science (Physics, Chemistry, Biology), Social Studies, Computer
              Science, Physical Education, Art
            </li>
            <li>
              <strong>Senior Secondary (Grades 11-12) - Science Stream:</strong>{" "}
              Physics, Chemistry, Biology, Mathematics, Computer Science,
              English
            </li>
            <li>
              <strong>
                Senior Secondary (Grades 11-12) - Commerce Stream:
              </strong>{" "}
              Accountancy, Business Studies, Economics, Mathematics, English
            </li>
          </ul>
        </div>

        <div className="teaching-methodologies-section">
          <h3>Teaching Methodologies</h3>
          <p>
            We use a blend of traditional and modern teaching techniques to
            cater to different learning styles.
          </p>
        </div>

        <div className="educational-resources-section">
          <h3>Educational Resources</h3>
          <p>
            Digital classrooms, interactive learning modules, and access to
            online educational platforms enhance the learning experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;

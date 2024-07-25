import React from "react";

const StudentsPage = () => {
  return (
    <div className="container-fluid">
      <section className="students-section">
        <div className="life-at-springdale">
          <h3>Life at Springdale</h3>
          <p>
            <strong>Extracurricular Activities:</strong> Music, Dance, Drama,
            Art, Sports, Robotics, Debate Club, Science Club
          </p>
          <p>
            <strong>Clubs and Societies:</strong> Literary Society,
            Environmental Club, Astronomy Club, Coding Club
          </p>
        </div>

        <div className="achievements">
          <h3>Achievements</h3>
          <ul>
            <li>John Smith - National Level Math Olympiad Winner</li>
            <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
            <li>
              Tech Innovators Club - Winners of Inter-School Robotics
              Competition
            </li>
          </ul>
          <div className="sports-winners d-flex">
            <img
              src="/math-olympaid.jpg"
              alt="National Level Math Olympiad Winner"
            />
            <img
              src="/gold-medal.jpg"
              alt="Gold medalist in swimming compitition"
            />
            <img
              src="/robotic-image.jpg"
              alt="Winners of Inter-School Robotics Competition"
            />
          </div>
        </div>

        <div className="student-council">
          <h3>Student Council</h3>
          <table className="council-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>President</td>
                <td>Amy Parker</td>
                <td>Grade 12</td>
              </tr>
              <tr>
                <td>Vice President</td>
                <td>Rajiv Mehta</td>
                <td>Grade 11</td>
              </tr>
              <tr>
                <td>Secretary</td>
                <td>Lisa Wong</td>
                <td>Grade 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default StudentsPage;

import React from "react";
import "../App.css";

const AboutPage = () => {
  return (
    <div className="container-fluid">
      <section className="about-section">
        <div className="history-section">
          <h3>History</h3>
          <p>
            Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students.
          </p>
        </div>

        <div className="vision-section">
          <h3>Vision</h3>
          <p>
            To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values.
          </p>
        </div>

        <div className="mission-section">
          <h3>Mission</h3>
          <p>
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </p>
        </div>

        <div className="principal-message-section">
          <h3>Principal's Message</h3>
          <p>
            At Springdale, we believe in nurturing the potential of every
            student and guiding them towards a successful future.
          </p>
        </div>

        <div className="infrastructure-section">
          <h3>Infrastructure and Facilities</h3>
          <div className="class-rooms-section mt-4">
            <h4>CLASS ROOMS</h4>
            <p>
              Our classrooms at Springdale Public School are spacious and
              thoughtfully designed, providing students with ample room to learn
              comfortably. Equipped with state-of-the-art technology and
              ergonomic furniture, our classrooms foster an engaging environment
              that supports academic excellence and collaborative learning
              initiatives.
            </p>
            <div className="d-flex justify-content-around">
              <img src="/class-room2.jpg" alt="Class Room1" />
              <img src="/class-room3.jpg" alt="Class Room2" />
              {/* <img src="" alt="" /> */}
            </div>
          </div>
          <div className="computer-lab-section mt-4">
            <h4>COMPUTER LABS</h4>
            <p>
              Experience our state-of-the-art computer labs at Springdale Public
              School, where advanced technology and modern amenities create an
              optimal environment for learning and innovation.
            </p>
            <div className="d-flex justify-content-around">
              <img src="/computer-lab1.jpg" alt="Computer Lab1" />
              <img src="/computer-lab2.jpg" alt="Computer Lab2" />
              <img src="/computer-lab3.png" alt="Computer Lab3" />
            </div>
          </div>
          <div className="science-lab-section mt-4">
            <h4>SCIENCE LABS</h4>
            <p>
              Discover the innovation hub at Springdale Public School through
              our advanced science labs. Equipped with state-of-the-art
              equipment and resources, our labs inspire hands-on exploration and
              experimentation. Students delve into scientific inquiry, fostering
              curiosity and critical thinking in a dynamic learning environment.
            </p>
            <div className="d-flex justify-content-around">
              <img src="/science-lab1.jpg" alt="Science Lab1" />
              <img src="/science-lab2.jpg" alt="Science Lab2" />
              <img src="/science-lab3.jpg" alt="Science Lab3" />
            </div>
          </div>
          <div className="art-class-section mt-4">
            <h4>ART ROOMS</h4>
            <p>
              Step into creativity at Springdale Public School's arts rooms,
              where inspiration meets expression. Our dedicated spaces are
              designed to nurture artistic talent with ample room for
              exploration in various mediums. Students are encouraged to unleash
              their creativity through painting, sculpting, and other forms of
              artistic expression, fostering a vibrant and enriching learning
              environment.
            </p>
            <div className="d-flex justify-content-around">
              <img src="art1.jpg" alt="Art Class1" />
              <img src="art2.jpg" alt="Art Class2" />
              <img src="art3.jpg" alt="Art Class3" />
            </div>
          </div>
          <div className="library-room-section mt-4">
            <h4>LIBRARIES</h4>
            <p>
              Our extensive collection of books, digital resources, and
              multimedia materials enriches students' academic pursuits and
              fosters a love for reading. Whether researching, studying, or
              enjoying leisure reading, our library provides a supportive
              environment for every learner to thrive.
            </p>
            <div className="d-flex justify-content-around">
              <img src="/library1.jpg" alt="Library1" />
              <img src="/library2.jpg" alt="Library2" />
              <img src="/library3.jpg" alt="Library3" />
            </div>
          </div>
          <div className="sport-section mt-4">
            <h4>SPORTS FACILITIES</h4>
            <p>
              We prioritize physical health and well-being through our
              comprehensive sports facilities. Our campus boasts a playground,
              gymnasium, and swimming pool, providing students with ample
              opportunities to participate in various sports and physical
              activities. Whether it's team sports, individual fitness, or
              recreational swimming, our facilities are equipped to support
              students in achieving their athletic goals and fostering a healthy
              lifestyle.
            </p>
            <div className="d-flex justify-content-around">
              <img src="/sports1.jpg" alt="Sport1 Cricket" />
              <img src="/sports2.jpg" alt="Sport2 Swimming" />
              <img src="/sports3.jpg" alt="Sport3 Hockey" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;

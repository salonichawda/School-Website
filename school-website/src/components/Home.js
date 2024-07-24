import React from "react";
import Carousel from "./Carousel";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <main>
        {/* <section className="school-description">
          <div className="school-intro">
            <h4>
              Welcome to Springdale Public School, where we nurture young minds
              for a brighter future.
            </h4>
          </div>
        </section> */}
        <section className="carousel-section">
          <Carousel />
        </section>
      </main>
    </div>
  );
};

export default HomePage;

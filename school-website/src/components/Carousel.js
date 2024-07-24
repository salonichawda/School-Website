import React from "react";
import "../App.css";
const Carousel = () => {
  const schoolFunctions = [
    {
      id: "annual-sports-day",
      image: "/annual-sports-day.jpg",
      title: "Annual Sports Day",
      description: "Annual Sports Day - Celebrating Excellence in Sports",
    },
    {
      id: "science-exhibition",
      image: "/science-fair.jpg",
      title: "Science Exhibition",
      description: "Science Exhibition - Showcasing Student Innovations",
    },
    {
      id: "cultural-fest",
      image: "/cultural-fest.jpeg",
      title: "Cultural Fest",
      description: "Cultural Fest - Embracing Diversity and Creativity",
    },
  ];
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-inner">
        {schoolFunctions.map((item, index) => {
          const carouselClasses =
            index === 0 ? "carousel-item active" : "carousel-item";
          return (
            <div className={carouselClasses}>
              <img
                src={item.image}
                className="d-block w-100"
                alt={item.title}
              />
              <div className="carousel-caption d-none d-md-block custom-carousel-caption">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Carousel;

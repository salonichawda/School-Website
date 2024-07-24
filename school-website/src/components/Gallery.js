import React from "react";

const GalleryPage = () => {
  const galleryContent = [
    {
      type: "photo",
      src: "/sports3.jpg",
      alt: "Students participating in various sports events.",
      caption: "Sports Day",
    },
    {
      type: "photo",
      src: "/science-project.jpg",
      alt: "Students presenting their science projects.",
      caption: "Science Exhibition",
    },
    {
      type: "photo",
      src: "/annual-day-award.jpg",
      alt: "Students reciving their annual day award.",
      caption: "Annual Day Award",
    },
    {
      type: "photo",
      src: "/rangoli-compitition.jpg",
      alt: "Students participating in rangoli compitition.",
      caption: "Rangoli compitition",
    },
    {
      type: "photo",
      src: "/dance-performance.jpg",
      alt: "Students performing in the cultural fest.",
      caption: "Cultural Fest",
    },
    {
      type: "photo",
      src: "/class-room1.jpg",
      alt: "A glimpse of our interactive classrooms.",
      caption: "Classroom",
    },
    {
      type: "photo",
      src: "/library.jpg",
      alt: "Students reading and studying in the school library.",
      caption: "Library",
    },
    {
      type: "video",
      src: "https://youtu.be/-OyepF2QkFQ?feature=shared",
      alt: "Virtual tour of Springdale Public School.",
      caption: "School Tour",
    },
    {
      type: "video",
      src: "https://youtu.be/ZKtz14UteCY?feature=shared",
      alt: "Highlights from the Annual Function 2023.",
      caption: "Annual Function",
    },
  ];

  return (
    <div className="container-fluid">
      <section className="gallery-section">
        <h2>Gallery</h2>

        <div className="gallery">
          {galleryContent.map((item, index) => (
            <div key={index} className={`gallery-item ${item.type}`}>
              {item.type === "photo" ? (
                <img src={item.src} alt={item.alt} />
              ) : (
                <video controls>
                  <source src={item.src} type="video" />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="caption">
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;

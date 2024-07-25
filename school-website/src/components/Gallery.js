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
      src: "https://www.youtube.com/embed/-OyepF2QkFQ",
      alt: "Virtual tour of Springdale Public School.",
      caption: "School Tour",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/ZKtz14UteCY",
      alt: "Highlights from the Annual Function 2023.",
      caption: "Annual Function",
    },
  ];

  return (
    <div className="container-fluid">
      <section className="gallery-section">
        <h2>Gallery</h2>

        <div className="gallery">
          {galleryContent.map((item, index) => {
            return (
              <div key={index} className={`gallery-item ${item.type}`}>
                {item.type === "photo" ? (
                  <img src={item.src} alt={item.alt} />
                ) : (
                  <iframe
                    width="560"
                    height="208"
                    src={item.src}
                    title={item.alt}
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                <div className="caption">
                  <p>{item.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;

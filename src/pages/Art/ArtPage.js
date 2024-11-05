import React, { useState } from "react";
import "./ArtPage.css";
import { useLocation, useNavigate } from "react-router";
import Accordion from "../../components/Accordian/Accordion";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import artPieces from "../../data/artPieces";

const ArtPage = () => {
  const location = useLocation();
  const { img, title } = location.state || {}; // Retrieve the card data
  const [selectedImg, setSelectedImg] = useState(img); // State to manage the selected image

  const navigate = useNavigate();

  const goToContactUs = () => {
    navigate("/contact-us");
  };

  // Find the matching art piece based on the title and titleImg comparison
  const matchedArt = artPieces.find((art) => art.titleImg === title);

  // Function to handle thumbnail click
  const handleThumbnailClick = (thumbnail) => {
    setSelectedImg(thumbnail); // Update the selected image state
  };

  if (!img || !title) {
    return <p>No card selected!</p>; // Handle case where no card was passed
  }

  return (
    <>
      <main className="artPage">
        <div className="artCardBorder">
          <section className="artCard">
            <h1>{title}</h1>
            {/* Display the selected image */}
            <img src={selectedImg} alt={title} />
            <p>Click on Thumbnail to View</p>

            {/* Render matched art details if found */}
            {matchedArt ? (
              <div>
                {matchedArt.thumbnails && (
                  <div className="thumbnails">
                    <div className="thumbnailContainer">
                      {matchedArt.thumbnails.map((thumbnail, index) => (
                        <img
                          key={index}
                          src={thumbnail}
                          alt={`Thumbnail ${index + 1} for ${title}`}
                          className="thumbnail"
                          style={{
                            width: "100px",
                            height: "100px",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleThumbnailClick(thumbnail)} // Handle thumbnail click
                        />
                      ))}
                    </div>
                  </div>
                )}
                <Accordion data={matchedArt} />
              </div>
            ) : (
              <p>No additional information available for this piece.</p>
            )}
          </section>
          <aside className="artContent">
            <h2>Contact for more Information, Availability, and Price</h2>
            <Form />
            <h2>Or</h2>
            <Button msg={"Contact Us"} onClick={goToContactUs} />
          </aside>
        </div>
      </main>
    </>
  );
};

export default ArtPage;

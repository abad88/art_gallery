import React, { useState } from "react";
import "./HomeDecPage.css";
import { useLocation, useNavigate } from "react-router";
import AccordionHomeDec from "../../components/AccordianHomeDec/AccordianHomeDec";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import homeDecPieces from "../../data/homeDecPieces";

const HomeDecPage = () => {
  const location = useLocation();
  const { img, title } = location.state || {}; // Retrieve the card data
  const [selectedImg, setSelectedImg] = useState(img); // State to manage the selected image

  const navigate = useNavigate();

  const goToContactUs = () => {
    navigate("/contact-us");
  };

  // Find the matching art piece based on the title and titleImg comparison
  const matchedArt = homeDecPieces.find((art) => art.titleImg === title);

  // Function to handle thumbnail click
  const handleThumbnailClick = (thumbnail) => {
    setSelectedImg(thumbnail); // Update the selected image state
  };

  if (!img || !title) {
    return <p>No card selected!</p>; // Handle case where no card was passed
  }
  return (
    <>
      <div className="artPage">
        <div className="artCardBorder">
          <article className="artCard">
            <h1>{title}</h1>
            <img src={selectedImg} alt={`${title} - Main View`} />
            <p>Click on Thumbnail to View</p>
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
                          onClick={() => handleThumbnailClick(thumbnail)}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <AccordionHomeDec data={matchedArt} />
              </div>
            ) : (
              <p>No additional information available for this piece.</p>
            )}
          </article>
          <aside className="artContent">
            <h2>Contact for more Information, Availability, and Price</h2>
            <Form />
            <h3>Or</h3>
            <Button msg={"Contact Us"} onClick={goToContactUs} />
          </aside>
        </div>
      </div>
    </>
  );
};

export default HomeDecPage;

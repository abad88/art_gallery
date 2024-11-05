import React, { useState } from "react";
import "./JewelryPage.css";
import { useLocation, useNavigate } from "react-router";
import Accordion from "../../components/AccordianJewelry/AccordianJewelry";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form"; // If there's a form
import jewelryPieces from "../../data/jewelryPieces";

const JewelryPage = () => {
  const location = useLocation();
  const { img, title } = location.state || {};
  const [selectedImg, setSelectedImg] = useState(img);

  const navigate = useNavigate();

  const goToContactUs = () => {
    navigate("/contact-us");
  };

  if (!img || !title) {
    return <p>No jewelry selected!</p>;
  }

  const matchedJewelry = jewelryPieces.find(
    (jewelry) => jewelry.titleImg === title
  );

  return (
    <>
      <div className="artPage">
        <div className="artCardBorder">
          <div className="artCard">
            <h1>{title}</h1>
            {/* Display the selected image */}
            <img src={selectedImg} alt={title} />
            <p>Click on Thumbnail to View</p>

            {/* Render matched art details if found */}
            {matchedJewelry ? (
              <div>
                {matchedJewelry.thumbnails && (
                  <div className="thumbnails">
                    {matchedJewelry.thumbnails.map((thumbnail, index) => (
                      <img
                        key={index}
                        src={thumbnail}
                        alt={`Thumbnail ${index + 1}`}
                        className="thumbnail"
                        style={{
                          width: "100px",
                          height: "100px",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => setSelectedImg(thumbnail)}
                      />
                    ))}
                  </div>
                )}
                <Accordion data={matchedJewelry} />
                {/* <Accordion/> */}
              </div>
            ) : (
              <p>No additional information available for this piece.</p>
            )}
          </div>
          <div className="artContent">
            <h1>Contact for more Information, Availability, and Price</h1>
            <Form />
            <h2>Or</h2>
            <Button msg={"Contact Us"} onClick={goToContactUs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JewelryPage;

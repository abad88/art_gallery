import React, { useState } from 'react';
import "./ArtPage.css";
import { useLocation, useNavigate } from 'react-router';
import Accordion from '../../components/Accordian/Accordion';
import Button from '../../components/Button/Button';
import im1 from "../../assets/images/artpiece/eka_22.jpg";
import im2 from "../../assets/images/artpiece/eka_5.jpg";

const ArtPage = () => {
    const location = useLocation();
    const { img, title } = location.state || {}; // Retrieve the card data
    const [selectedImg, setSelectedImg] = useState(img); // State to manage the selected image

    const navigate = useNavigate();

    const goToContactUs = () => {
        navigate('/contact-us');
    };

    const artPieces = [
        {
            titleImg: "Golfing on Green",
            author: "Mr Green",
            detail: "It is all about green money"
        },
        {
            titleImg: "Golfing on Red",
            author: "Mr Red",
            detail: "It is all about red money"
        },
        {
            titleImg: "Golfing on Yellow",
            author: "Mr Yellow",
            detail: "It is all about Yellow money"
        },
        {
            titleImg: "Eka 3D Art 1",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                im1,
                im2,
            ]
        }
    ];

    // Find the matching art piece based on the title and titleImg comparison
    const matchedArt = artPieces.find(art => art.titleImg === title);

    // Function to handle thumbnail click
    const handleThumbnailClick = (thumbnail) => {
        setSelectedImg(thumbnail); // Update the selected image state
    };

    if (!img || !title) {
        return <p>No card selected!</p>; // Handle case where no card was passed
    }

    return (
        <>
            <div className='artPage'>
                <div className='artCardBorder'>
                    <div className='artCard'>
                        <h1>{title}</h1>
                        {/* Display the selected image */}
                        <img src={selectedImg} alt={title} />
                    </div>
                    <div className='artContent'>
                        <h1>Contact for more Information, Availability, and Price</h1>
                        <Button msg={"Contact Us"} onClick={goToContactUs} />
                    </div>
                </div>
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
                                            alt={`Thumbnail ${index + 1}`}
                                            className="thumbnail"
                                            style={{ width: '100px', height: '100px', marginRight: '10px', cursor: 'pointer' }}
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
            </div>
        </>
    );
};

export default ArtPage;

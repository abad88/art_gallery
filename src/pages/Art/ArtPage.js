import React, { useState } from 'react';
import "./ArtPage.css";
import { useLocation, useNavigate } from 'react-router';
import Accordion from '../../components/Accordian/Accordion';
import Button from '../../components/Button/Button';
import im1 from "../../assets/images/artpiece/eka_22.jpg";
import im2 from "../../assets/images/artpiece/eka_5.jpg";
import Form from '../../components/Form/Form';
import ekImg2 from "../../assets/images/eka/img1/converted/main2.jpg"
import ekImg3 from "../../assets/images/eka/img1/converted/main3.jpg"
import ekImg5 from "../../assets/images/eka/img2/converted/main2.jpg"
import ekImg6 from "../../assets/images/eka/img2/converted/main3.jpg"
import ekImg8 from "../../assets/images/eka/img3/converted/main2.jpg"
import ekImg9 from "../../assets/images/eka/img3/converted/main3.jpg"
import ekImg11 from "../../assets/images/eka/img4/converted/main2.jpg"
import ekImg12 from "../../assets/images/eka/img4/converted/main3.jpg"
import ekImg14 from "../../assets/images/eka/img5/converted/main2.jpg"
import ekImg15 from "../../assets/images/eka/img5/converted/main3.jpg"
import ekImg17 from "../../assets/images/eka/img6/converted/main2.jpg"
import ekImg18 from "../../assets/images/eka/img6/converted/main3.jpg"
import ekImg20 from "../../assets/images/eka/img7/converted/main2.jpg"
import ekImg21 from "../../assets/images/eka/img7/converted/main3.jpg"

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
        },
        {
            titleImg: "Action.Family (Arcylic Painting)",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                ekImg2,
                ekImg3,
            ]
        },
        {
            titleImg: "Love.Family.Action (Arcylic Painting)",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                ekImg5,
                ekImg6,
            ]
        },
        {
            titleImg: "Action.Freedom (Arcylic Painting)",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                ekImg8,
                ekImg9,
            ]
        },
        {
            titleImg: "Freedom.Love (Arcylic Painting)",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                ekImg11,
                ekImg12,
            ]
        },
        {
            titleImg: "Action.Freedom.Love (Arcylic Painting)",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                ekImg14,
                ekImg15,
            ]
        },
        {
            titleImg: "Love.Action (Arcylic Painting)",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                ekImg17,
                ekImg18,
            ]
        },
        {
            titleImg: "Freedom.Action (Arcylic Painting)",
            author: "Eka Peradze",
            detail: "Eka Peradze's 3D paintings are a captivating blend of art and illusion. Her meticulous craftsmanship and masterful use of light and shadow create stunningly realistic scenes that seem to defy the boundaries of the canvas.",
            thumbnails: [
                ekImg20,
                ekImg21,
            ]
        },
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
                    <div className='artContent'>
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

export default ArtPage;

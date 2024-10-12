import React from 'react';
import "./ArtPage.css";
import { useLocation, useNavigate } from 'react-router';
import Accordion from '../../components/Accordian/Accordion';
import Button from '../../components/Button/Button';

const ArtPage = () => {
    const location = useLocation();
    const { img, title } = location.state || {}; // Retrieve the card data

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
        }
    ];

    // Find the matching art piece based on the title and titleImg comparison
    const matchedArt = artPieces.find(art => art.titleImg === title);

    if (!img || !title) {
        return <p>No card selected!</p>; // Handle case where no card was passed
    }

    return (
        <>
            <div className='artPage'>
                <div className='artCardBorder'>
                    <div className='artCard'>
                        <h1>{title}</h1>
                        <img src={img} alt={title} />
                    </div>
                    <div className='artContent'>
                        <h1>Contact for more Information,Availability and Price</h1>
                        <Button msg={"Contact Us"} onClick={goToContactUs} />
                    </div>
                </div>


                {/* Render matched art details if found */}
                {matchedArt ? (
                    <div>
                        {/* <p><strong>Author:</strong> {matchedArt.author}</p>
                        <p><strong>Description:</strong> {matchedArt.detail}</p> */}
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

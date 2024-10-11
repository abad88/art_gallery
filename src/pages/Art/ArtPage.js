import React from 'react';
import "./ArtPage.css";
import { useLocation } from 'react-router';

const ArtPage = () => {
    const location = useLocation();
    const { img, title } = location.state || {}; // Retrieve the card data

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
                <h1>{title}</h1>
                <img src={img} alt={title} style={{ width: '300px', height: '300px' }} />

                {/* Render matched art details if found */}
                {matchedArt ? (
                    <div>
                        <p><strong>Author:</strong> {matchedArt.author}</p>
                        <p><strong>Description:</strong> {matchedArt.detail}</p>
                    </div>
                ) : (
                    <p>No additional information available for this piece.</p>
                )}
            </div>
        </>
    );
};

export default ArtPage;

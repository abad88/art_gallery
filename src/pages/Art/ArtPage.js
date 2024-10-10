import React from 'react'
import "./ArtPage.css"
import { useLocation } from 'react-router';

const ArtPage = () => {
    const location = useLocation();
    const { img, title } = location.state || {}; // Retrieve the card data

    if (!img || !title) {
        return <p>No card selected!</p>; // Handle case where no card was passed
    }
    return (
        <>
            <div className='artPage'>
                <h1>{title}</h1>
                <img src={img} alt={title} style={{ width: '300px', height: '300px' }} />
            </div>
        </>
    )
}

export default ArtPage
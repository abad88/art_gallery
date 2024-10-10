import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Card.css";

const Card = ({ img, title }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Navigate to "/art" and pass the card data
        navigate('/art', { state: { img, title } });
    };

    return (
        <div className='cardBorder' onClick={handleCardClick}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default Card;

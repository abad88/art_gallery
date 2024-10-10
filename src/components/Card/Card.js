import React from 'react'
import "./Card.css"

const Card = ({ img }) => {
    return (
        <div className='cardBorder'>
            <img src={img} alt="img" />
            <h3>Golfing on Green</h3>
        </div>
    )
}

export default Card